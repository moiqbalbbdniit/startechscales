# Star Tech Scales backend implementation plan

## 1. Purpose

This document is the implementation brief for turning the current Star Tech Scales Next.js storefront into a production e-commerce application. It covers a database-backed product catalogue, category management, an admin panel, customer orders, and online payments.

The first implementation should keep the current **Next.js 16 App Router** project and add backend route handlers under `app/api`. The project already includes the official MongoDB Node.js driver, so the lowest-friction database choice is **MongoDB Atlas**. Keep all prices in integer paise (for example, `499900` for INR 4,999.00) to avoid rounding errors.

For India-focused payments, integrate **Razorpay** first because the current checkout lists cards, UPI, net banking, and wallets. The payment layer should be written behind a small provider interface so Stripe or another provider can be added later without rewriting order logic.

## 2. Current codebase audit

### Technology and current state

| Area | What exists | Status |
| --- | --- | --- |
| Framework | Next.js 16, React 19, TypeScript, Tailwind CSS | Ready |
| API client | Axios client and endpoint helpers in `lib/api.ts` | Endpoint contracts are outlined but most endpoints do not exist |
| Authentication | Registration, login, logout, and current-user routes; signed httpOnly cookie; password hashing | Functional prototype; data is stored in a local JSON file |
| Route protection | `proxy.ts` protects dashboard, checkout, and admin routes; it checks an `admin` role | In place, but no safe way to create/manage the first admin user |
| Product catalogue | `SAMPLE_PRODUCTS` and `CATEGORIES` in `lib/constants.ts` | Static mock data |
| Storefront | Product list, product detail, category list, cart, wishlist, checkout, contact, blog pages | Primarily display/UI; add-to-cart, filters, payment and submission flows are not connected |
| Admin | Products, orders, customers, coupons, blogs, analytics screens | Static mock data and inactive action buttons |
| Database | `mongodb` dependency is installed | Not connected |

### Important gaps to address

- The local `data/auth-store.json` approach must be replaced with database users before deployment. It is not suitable for serverless or multi-instance hosting.
- `AUTH_SECRET` has an insecure fallback in `lib/auth.ts`. Production must fail fast if the secret is absent.
- `NEXT_PUBLIC_API_URL` defaults to this app's `/api`, but the auth client currently expects a local-storage bearer token while the real auth system uses an httpOnly cookie. Standardize on cookie-based same-origin requests and remove the unused bearer-token path.
- Every admin screen currently shows placeholder data. Product/category CRUD, order status, coupons, blogs, customers, and analytics must all query the database.
- Product list filtering, pagination, search, cart state, stock checks, order totals, GST, and the checkout button are not wired.
- Payment must never be marked successful based only on a browser redirect; Razorpay webhook signature verification is required.

## 3. Recommended architecture

```text
Browser
  -> Next.js storefront and admin UI
  -> Next.js route handlers (/api/*)
      -> authentication / role authorization
      -> MongoDB Atlas
      -> Razorpay Orders API
Razorpay webhook -> /api/payments/razorpay/webhook -> verify signature -> MongoDB
```

Use route handlers for the initial release. If the business later needs a separate mobile API or very high traffic, extract the domain services into a standalone API without changing the UI contracts.

Suggested server modules:

- `lib/db.ts` — singleton MongoDB client and typed collection access.
- `lib/auth-server.ts` — read cookie/session, require signed-in user, require admin.
- `lib/services/products.ts`, `orders.ts`, `payments.ts` — business rules, isolated from route handlers.
- `lib/payments/razorpay.ts` — create provider order and verify webhook signature.
- `lib/validations.ts` — extend existing Zod schemas for all create/update payloads.

## 4. Database design

Use MongoDB collections with generated UUIDs or MongoDB `_id` values consistently. Expose string `id` values to the UI. Add `createdAt` and `updatedAt` to every editable record.

### Core collections

| Collection | Key fields | Notes |
| --- | --- | --- |
| `users` | `email` (unique), `name`, `phone`, `role`, `passwordHash`, `passwordSalt`, `isActive` | Roles: `customer`, `admin`. Do not return hashes in API responses. |
| `categories` | `name`, `slug` (unique), `description`, `imageUrl`, `icon`, `isActive`, `sortOrder`, `seo` | Do not create an “All Products” category; it is a UI filter. |
| `products` | `name`, `slug` (unique), `sku` (unique), `categoryId`, `description`, `shortDescription`, `pricePaise`, `compareAtPricePaise`, `gstRate`, `stock`, `lowStockThreshold`, `images`, `specifications`, `status`, `featured` | Status: `draft`, `active`, `archived`. A product must be `active` to appear publicly. |
| `carts` | `userId`, `items[]`, `couponCode`, `updatedAt` | One cart per logged-in customer. Optionally support a `guestToken` later. |
| `addresses` | `userId`, `fullName`, `phone`, `line1`, `line2`, `city`, `state`, `postalCode`, `country`, `type`, `isDefault` | Keep a snapshot on every order. |
| `orders` | `orderNumber` (unique), `userId`, `items[]`, address snapshots, totals, `status`, `paymentStatus`, `paymentId`, `shippingMethod`, `trackingNumber` | Store the full product name/SKU/unit price/GST snapshot in each item. |
| `payments` | `orderId`, `provider`, `providerOrderId`, `providerPaymentId`, `amountPaise`, `currency`, `status`, `rawWebhookEventId` | Retain provider references; never store card, UPI, or wallet credentials. |
| `coupons` | `code` (unique), `discountType`, `discountValue`, minimum/maximum amounts, dates, usage limits, active state | Validate again during order creation, not only while the user enters the code. |
| `inventoryMovements` | `productId`, `quantityDelta`, `reason`, `orderId`, `actorUserId` | Provides an audit trail for sales, cancellations, and manual corrections. |
| `reviews` | `productId`, `userId`, `rating`, `title`, `comment`, `status` | Restrict review creation to purchased products and moderate before publishing. |
| `contactMessages`, `newsletterSubscribers`, `blogPosts`, `blogComments` | Fields already represented in `lib/types.ts` | Implement after core commerce if not required for launch. |

### Required indexes

- `users.email`, `categories.slug`, `products.slug`, `products.sku`, `orders.orderNumber`, `coupons.code`: unique indexes.
- Public product listing: compound index on `status`, `categoryId`, `pricePaise`.
- Search: a MongoDB Atlas Search index on product name, description, SKU, and brand (or text index as a basic initial alternative).
- Admin lists: indexes on `orders.userId + createdAt`, `orders.status + createdAt`, and `products.updatedAt`.
- `payments.providerOrderId` and webhook-event ID: unique where possible, for idempotency.

## 5. Product and category management

### Admin product workflow

1. An admin creates a category with name, URL slug, image, description, display order, and active state.
2. An admin creates a product as a draft, chooses a category, uploads images, enters SKU, price, GST, stock, specifications, and SEO data.
3. The product is published by switching status to `active`; only then is it visible on the storefront.
4. Edits that change stock create an `inventoryMovements` record. Product deletion should be archival (`status: archived`), not a hard delete, when referenced by an order.

### Product form fields

- Required: name, SKU, category, price, GST rate, stock, description, at least one image, status.
- Recommended: slug (auto-generated, editable), short description, compare-at price, brand, low-stock threshold, weight/dimensions, warranty, certifications, featured flag, search keywords, and flexible `specifications` key/value pairs.
- Validation: SKU and slug unique; non-negative pricing/stock; image URLs validated; category must exist and be active; only admins can mutate.

### Image storage

Keep the current static images in `public/productimages` only as seed/demo images. For admin uploads, use cloud object storage (Cloudinary, AWS S3, or Vercel Blob) and save public URLs plus optional alt text in the product document. Validate MIME type and file size server-side; do not place customer uploads in the repository.

## 6. API contract

All endpoints should return a consistent JSON envelope:

```json
{ "success": true, "data": {}, "message": "Optional human-readable message" }
```

Errors should use `{ "success": false, "error": { "code": "...", "message": "..." } }` with appropriate HTTP status codes.

### Public and customer endpoints

| Method | Route | Purpose |
| --- | --- | --- |
| GET | `/api/products` | Paginated products; query: `page`, `pageSize`, `q`, `category`, `minPrice`, `maxPrice`, `rating`, `sort`. Return active products only. |
| GET | `/api/products/[slug]` | Product detail by slug plus related products. |
| GET | `/api/categories` | Active categories with public product counts. |
| GET/PUT | `/api/cart` | Read or replace authenticated customer cart. |
| POST | `/api/cart/items` | Add product with quantity. Recheck active status and stock. |
| PATCH/DELETE | `/api/cart/items/[productId]` | Change quantity or remove item. |
| GET/POST | `/api/addresses` | List or create the user's addresses. |
| PATCH/DELETE | `/api/addresses/[id]` | Update/delete the user's address. |
| POST | `/api/coupons/validate` | Recalculate eligibility against the current cart server-side. |
| POST | `/api/checkout` | Validate cart, addresses, stock and coupon; calculate server-owned totals; create a pending order and Razorpay order. |
| POST | `/api/payments/razorpay/verify` | Optional immediate verification UX endpoint; webhook remains source of truth. |
| POST | `/api/payments/razorpay/webhook` | Verify raw-body signature and update payment/order idempotently. |
| GET | `/api/orders` | Current customer's paginated order history. |
| GET | `/api/orders/[orderNumber]` | Current customer's order detail. |

### Admin-only endpoints

| Method | Route | Purpose |
| --- | --- | --- |
| GET/POST | `/api/admin/products` | List all product statuses / create product. |
| GET/PATCH/DELETE | `/api/admin/products/[id]` | View, update, archive product. |
| GET/POST | `/api/admin/categories` | List all categories / create category. |
| GET/PATCH/DELETE | `/api/admin/categories/[id]` | Update; prevent deletion while products reference it. |
| GET | `/api/admin/orders` | Search/filter all orders. |
| PATCH | `/api/admin/orders/[id]/status` | Change fulfilment status and tracking number; write audit event. |
| GET | `/api/admin/customers` | Customer list with aggregate order count/spend. |
| GET/POST/PATCH/DELETE | `/api/admin/coupons` and `/[id]` | Coupon management. |
| GET | `/api/admin/analytics/dashboard` | Revenue, orders, customers, average order value, best sellers, date series. |
| POST | `/api/admin/uploads` | Create a signed upload or accept validated product images. |

The existing helpers in `lib/api.ts` should be aligned to these exact routes and HTTP verbs. In particular, use `PATCH` for partial updates and change the product detail UI from numeric `/products/[id]` to stable `/products/[slug]` URLs, with a redirect strategy for existing links if needed.

## 7. Checkout and Razorpay payment flow

1. Customer adds active, in-stock products to the database cart.
2. Checkout page loads the live cart and saved addresses. The browser sends selected address IDs, shipping method, and coupon code to `POST /api/checkout`.
3. Server reads current product prices and tax rates, validates inventory and coupon eligibility, calculates subtotal/discount/shipping/GST/total in paise, creates a `pending_payment` order and Razorpay order.
4. Browser opens Razorpay Checkout using only the public key and returned provider order ID. No secret key is sent to the client.
5. Browser posts the provider payment response to the verification endpoint to give the user fast feedback.
6. Razorpay calls the webhook. The server verifies the signature from the **raw request body**, rejects duplicates, sets payment to `captured`, changes order to `paid`/`processing`, decrements inventory in a transaction, clears the cart, and records inventory movement.
7. If payment fails or expires, preserve the order/payment audit trail and release any stock reservation after a defined timeout. Refunds must be initiated server-side and reconciled through webhook events.

Recommended payment/order states:

```text
Order: pending_payment -> paid -> processing -> shipped -> delivered
                              \-> cancelled / refunded
Payment: created -> authorized -> captured | failed | refunded
```

Do not trust price, tax, discount, stock, or payment status supplied by the browser. Never decrement stock before confirmed payment unless an explicit short-lived reservation system is implemented.

## 8. Admin UI changes

- Replace static arrays in `app/admin/*` with queries to admin endpoints (React Query is already installed and is a good fit for loading, caching, mutation, and invalidation).
- Build product create/edit screens with draft/publish controls and image upload.
- Add a new `/admin/categories` page and link it from the admin dashboard.
- Add loading, empty, and error states to every admin table. Add server-side search, filters, pagination, and confirmation before archive/cancel/refund actions.
- The dashboard metrics and recent orders must come from `GET /api/admin/analytics/dashboard`, not hard-coded values.
- Add an explicit initial-admin bootstrap command or one-time protected setup procedure. Do not let public registration choose the `admin` role.

## 9. Storefront UI changes

- Replace `SAMPLE_PRODUCTS` and `CATEGORIES` usage in the homepage, product page, categories grid, list/detail pages, and navigation with API/database data.
- Make filter and sort controls update URL search parameters and request filtered/paginated products.
- Use the real cart endpoint for badges, cart page, product card, and product detail actions.
- Make wishlist either database-backed for signed-in customers or deliberately local-only; do not present a fake persistent count.
- Convert checkout into a client form with address validation, server totals, payment initiation, disabled double-submit state, and order confirmation screen.
- Send contact form data to `/api/contact` instead of resolving a fake timeout.

## 10. Security and operational requirements

- Require `AUTH_SECRET` in production; use a long random secret. Set cookies as `httpOnly`, `secure`, and appropriate `sameSite` values.
- Validate every request with Zod on the server. Enforce authenticated ownership for customer resources and admin role on admin routes.
- Rate-limit login, registration, password reset, contact, coupon validation, and checkout endpoints.
- Use password hashing suitable for production (Argon2id preferred, or retain PBKDF2 with carefully configured parameters during the first migration). Add password reset tokens with expiry and one-time use.
- Verify Razorpay webhook signature before parsing/trusting the event. Persist an event identifier or payment reference to make processing idempotent.
- Keep `RAZORPAY_KEY_SECRET`, database URI, and auth secrets server-only. Never prefix them with `NEXT_PUBLIC_`.
- Add structured server logs, error monitoring, daily database backups, and an audit log for admin price/stock/order-status changes.
- Use database transactions where supported for payment capture, stock change, order updates, coupon usage, and cart clearing.

## 11. Environment variables

Create a checked-in `.env.example` with placeholders only:

```dotenv
MONGODB_URI=
MONGODB_DB_NAME=star_tech_scales
AUTH_SECRET=
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
RAZORPAY_WEBHOOK_SECRET=
UPLOAD_PROVIDER=
```

## 12. Implementation sequence

1. Add MongoDB connection, schema/types, indexes, seed script for the current categories/products, and an initial-admin bootstrap method.
2. Migrate users from JSON storage to MongoDB; harden session configuration and role authorization.
3. Implement category and product admin CRUD, image upload, and replace storefront catalogue with public product/category APIs.
4. Implement persistent cart, addresses, coupon validation, and customer order history.
5. Implement server-owned checkout calculations, Razorpay order creation, verification/webhook processing, payment/order confirmation, and inventory movements.
6. Connect admin orders, customers, coupons, and analytics to live data; then implement blog/contact/newsletter/reviews as required.
7. Add automated tests, staging credentials/webhooks, observability, backup checks, and production deployment review.

## 13. Launch acceptance criteria

- An admin can create/edit/archive categories and products, upload product images, control publication, and adjust stock with an audit record.
- Public pages show only active database products; filtering, search, sorting, pagination, and product-detail URLs work.
- Customers can register, log in, manage addresses, add/update/remove cart items, and view their own orders.
- Checkout totals are calculated exclusively on the server; stock and coupons are revalidated at checkout.
- Razorpay payments are signature-verified by webhook, are idempotent, and create a paid order only after confirmation.
- Admins can search orders, update fulfilment status/tracking, view customers and live dashboard metrics.
- There are no mock purchase flows or production secrets/fallback auth secrets left in the application.
