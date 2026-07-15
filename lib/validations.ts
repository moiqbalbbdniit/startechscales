import { z } from 'zod'

// Auth Validations
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  rememberMe: z.boolean().optional(),
})

export const registerSchema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
    agreeToTerms: z.boolean().refine((val) => val, 'You must agree to the terms'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export const forgotPasswordSchema = z.object({
  email: z.string().email('Invalid email address'),
})

export const resetPasswordSchema = z
  .object({
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export const otpSchema = z.object({
  otp: z.string().regex(/^\d{6}$/, 'OTP must be 6 digits'),
})

// Address Validations
export const addressSchema = z.object({
  street: z.string().min(5, 'Street address is required'),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  postalCode: z.string().regex(/^\d{6}$/, 'Postal code must be 6 digits'),
  country: z.string().min(2, 'Country is required'),
  type: z.enum(['shipping', 'billing']),
  isDefault: z.boolean().optional(),
})

// Profile Validations
export const profileSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  profileImage: z.string().optional(),
})

// Checkout Validations
export const checkoutSchema = z.object({
  shippingAddress: addressSchema,
  billingAddress: addressSchema.optional(),
  paymentMethod: z.enum(['credit_card', 'debit_card', 'net_banking', 'upi', 'wallet']),
  couponCode: z.string().optional(),
})

// Product Validations
export const productSchema = z.object({
  name: z.string().min(3, 'Product name is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  price: z.number().min(0, 'Price must be positive'),
  discount: z.number().min(0).max(100).optional(),
  category: z.string().min(1, 'Category is required'),
  brand: z.string().optional(),
  sku: z.string().min(3, 'SKU is required'),
  stock: z.number().min(0, 'Stock must be non-negative'),
  images: z.array(z.string().url()).min(1, 'At least one image is required'),
})

// Review Validations
export const reviewSchema = z.object({
  rating: z.number().min(1).max(5),
  title: z.string().min(3, 'Title is required'),
  comment: z.string().min(10, 'Comment must be at least 10 characters'),
})

// Blog Validations
export const blogPostSchema = z.object({
  title: z.string().min(5, 'Title is required'),
  content: z.string().min(100, 'Content must be at least 100 characters'),
  excerpt: z.string().min(20, 'Excerpt is required'),
  featuredImage: z.string().url(),
  category: z.string().min(1, 'Category is required'),
  tags: z.array(z.string()).min(1, 'At least one tag is required'),
  published: z.boolean().optional(),
})

// Contact Form Validation
export const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\d{10}$/, 'Phone number must be 10 digits'),
  subject: z.string().min(5, 'Subject is required'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
})

// Newsletter Subscription
export const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
})

// Coupon Validation
export const couponSchema = z.object({
  code: z.string().min(3, 'Coupon code is required'),
})

// Search Validation
export const searchSchema = z.object({
  query: z.string().min(1, 'Search query is required'),
})

// Type exports for form usage
export type LoginFormData = z.infer<typeof loginSchema>
export type RegisterFormData = z.infer<typeof registerSchema>
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>
export type AddressFormData = z.infer<typeof addressSchema>
export type ProfileFormData = z.infer<typeof profileSchema>
export type CheckoutFormData = z.infer<typeof checkoutSchema>
export type ProductFormData = z.infer<typeof productSchema>
export type ReviewFormData = z.infer<typeof reviewSchema>
export type BlogPostFormData = z.infer<typeof blogPostSchema>
export type ContactFormData = z.infer<typeof contactSchema>
export type NewsletterFormData = z.infer<typeof newsletterSchema>
export type CouponFormData = z.infer<typeof couponSchema>
export type SearchFormData = z.infer<typeof searchSchema>
