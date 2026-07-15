// User Types
export interface User {
  id: string
  email: string
  name: string
  phone?: string
  profileImage?: string
  role: 'customer' | 'admin'
  createdAt: Date
  updatedAt: Date
}

export interface Address {
  id: string
  userId: string
  type: 'shipping' | 'billing'
  street: string
  city: string
  state: string
  postalCode: string
  country: string
  isDefault: boolean
  createdAt: Date
}

// Product Types
export interface Product {
  id: string
  name: string
  description: string
  price: number
  discount?: number
  category: string
  brand?: string
  sku: string
  stock: number
  images: string[]
  rating: number
  reviews: number
  specifications?: Record<string, string>
  createdAt: Date
  updatedAt: Date
}

export interface Category {
  id: string
  name: string
  description?: string
  icon?: string
  image?: string
  slug: string
}

// Cart Types
export interface CartItem {
  productId: string
  quantity: number
  product?: Product
}

export interface Cart {
  id: string
  userId: string
  items: CartItem[]
  createdAt: Date
  updatedAt: Date
}

// Order Types
export type OrderStatus =
  | 'pending'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'refunded'

export interface OrderItem {
  productId: string
  productName: string
  quantity: number
  price: number
  total: number
}

export interface Order {
  id: string
  userId: string
  items: OrderItem[]
  shippingAddress: Address
  billingAddress: Address
  status: OrderStatus
  subtotal: number
  tax: number
  shipping: number
  coupon?: { code: string; discount: number }
  total: number
  paymentMethod: string
  trackingNumber?: string
  notes?: string
  createdAt: Date
  updatedAt: Date
}

// Review Types
export interface Review {
  id: string
  productId: string
  userId: string
  rating: number
  title: string
  comment: string
  helpful: number
  createdAt: Date
}

// Blog Types
export interface BlogPost {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  featuredImage: string
  category: string
  author: string
  tags: string[]
  published: boolean
  views: number
  createdAt: Date
  updatedAt: Date
}

export interface BlogComment {
  id: string
  postId: string
  userId: string
  userName: string
  content: string
  createdAt: Date
}

// Coupon Types
export interface Coupon {
  id: string
  code: string
  discount: number
  discountType: 'percentage' | 'fixed'
  minAmount?: number
  maxUses?: number
  currentUses: number
  expiresAt: Date
  active: boolean
  createdAt: Date
}

// Wishlist Types
export interface Wishlist {
  id: string
  userId: string
  productIds: string[]
  createdAt: Date
  updatedAt: Date
}

// Analytics Types
export interface Analytics {
  totalRevenue: number
  totalOrders: number
  totalCustomers: number
  averageOrderValue: number
  conversionRate: number
  topProducts: Product[]
  recentOrders: Order[]
  salesByDay: { date: string; amount: number }[]
}

// Response Types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

// Form Types
export interface LoginFormData {
  email: string
  password: string
  rememberMe?: boolean
}

export interface RegisterFormData {
  email: string
  password: string
  confirmPassword: string
  name: string
  agreeToTerms: boolean
}

export interface ForgotPasswordFormData {
  email: string
}

export interface ResetPasswordFormData {
  password: string
  confirmPassword: string
}

export interface CheckoutFormData {
  shippingAddress: Address
  billingAddress: Address
  paymentMethod: string
  couponCode?: string
}

export interface ProductFilterData {
  categories: string[]
  priceRange: { min: number; max: number }
  ratings: number[]
  searchQuery: string
  sort: string
}
