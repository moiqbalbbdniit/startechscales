import axios, { AxiosInstance, AxiosError, AxiosRequestConfig } from 'axios'

// API Base Configuration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api'

// Create axios instance
export const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Add auth token if available
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('auth_token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    }
    return config
  },
  (error) => Promise.reject(error),
)

// Add response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      if (typeof window !== 'undefined') {
        localStorage.removeItem('auth_token')
        window.location.href = '/auth/login'
      }
    }
    return Promise.reject(error)
  },
)

// API Response wrapper
export interface ApiResponse<T> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

// Generic API call function
export async function apiCall<T>(
  config: AxiosRequestConfig,
): Promise<ApiResponse<T>> {
  try {
    const response = await apiClient(config)
    return {
      success: true,
      data: response.data,
      message: response.data?.message,
    }
  } catch (error) {
    const axiosError = error as AxiosError
    return {
      success: false,
      error: axiosError.message || 'An error occurred',
    }
  }
}

// Auth API endpoints
export const authApi = {
  login: (email: string, password: string) =>
    apiCall({ url: '/auth/login', method: 'POST', data: { email, password } }),
  register: (data: any) =>
    apiCall({ url: '/auth/register', method: 'POST', data }),
  logout: () =>
    apiCall({ url: '/auth/logout', method: 'POST' }),
  forgotPassword: (email: string) =>
    apiCall({ url: '/auth/forgot-password', method: 'POST', data: { email } }),
  resetPassword: (token: string, password: string) =>
    apiCall({ url: '/auth/reset-password', method: 'POST', data: { token, password } }),
  verifyOtp: (email: string, otp: string) =>
    apiCall({ url: '/auth/verify-otp', method: 'POST', data: { email, otp } }),
}

// Products API endpoints
export const productsApi = {
  getAll: (params?: any) =>
    apiClient.get('/products', { params }),
  getById: (id: string) =>
    apiClient.get(`/products/${id}`),
  create: (data: any) =>
    apiClient.post('/products', data),
  update: (id: string, data: any) =>
    apiClient.put(`/products/${id}`, data),
  delete: (id: string) =>
    apiClient.delete(`/products/${id}`),
  search: (query: string) =>
    apiClient.get('/products/search', { params: { q: query } }),
}

// Categories API endpoints
export const categoriesApi = {
  getAll: () =>
    apiClient.get('/categories'),
  getById: (id: string) =>
    apiClient.get(`/categories/${id}`),
  create: (data: any) =>
    apiClient.post('/categories', data),
  update: (id: string, data: any) =>
    apiClient.put(`/categories/${id}`, data),
  delete: (id: string) =>
    apiClient.delete(`/categories/${id}`),
}

// Cart API endpoints
export const cartApi = {
  get: () =>
    apiClient.get('/cart'),
  addItem: (productId: string, quantity: number) =>
    apiClient.post('/cart/items', { productId, quantity }),
  updateItem: (productId: string, quantity: number) =>
    apiClient.put(`/cart/items/${productId}`, { quantity }),
  removeItem: (productId: string) =>
    apiClient.delete(`/cart/items/${productId}`),
  clear: () =>
    apiClient.post('/cart/clear'),
}

// Orders API endpoints
export const ordersApi = {
  getAll: (params?: any) =>
    apiClient.get('/orders', { params }),
  getById: (id: string) =>
    apiClient.get(`/orders/${id}`),
  create: (data: any) =>
    apiClient.post('/orders', data),
  updateStatus: (id: string, status: string) =>
    apiClient.put(`/orders/${id}/status`, { status }),
  track: (id: string) =>
    apiClient.get(`/orders/${id}/track`),
}

// Users API endpoints
export const usersApi = {
  getProfile: () =>
    apiClient.get('/users/profile'),
  updateProfile: (data: any) =>
    apiClient.put('/users/profile', data),
  getAddresses: () =>
    apiClient.get('/users/addresses'),
  addAddress: (data: any) =>
    apiClient.post('/users/addresses', data),
  updateAddress: (id: string, data: any) =>
    apiClient.put(`/users/addresses/${id}`, data),
  deleteAddress: (id: string) =>
    apiClient.delete(`/users/addresses/${id}`),
  changePassword: (oldPassword: string, newPassword: string) =>
    apiClient.post('/users/change-password', { oldPassword, newPassword }),
}

// Reviews API endpoints
export const reviewsApi = {
  getByProduct: (productId: string) =>
    apiClient.get(`/products/${productId}/reviews`),
  create: (productId: string, data: any) =>
    apiClient.post(`/products/${productId}/reviews`, data),
  update: (reviewId: string, data: any) =>
    apiClient.put(`/reviews/${reviewId}`, data),
  delete: (reviewId: string) =>
    apiClient.delete(`/reviews/${reviewId}`),
}

// Blog API endpoints
export const blogApi = {
  getAll: (params?: any) =>
    apiClient.get('/blog', { params }),
  getById: (id: string) =>
    apiClient.get(`/blog/${id}`),
  create: (data: any) =>
    apiClient.post('/blog', data),
  update: (id: string, data: any) =>
    apiClient.put(`/blog/${id}`, data),
  delete: (id: string) =>
    apiClient.delete(`/blog/${id}`),
  getComments: (postId: string) =>
    apiClient.get(`/blog/${postId}/comments`),
  addComment: (postId: string, data: any) =>
    apiClient.post(`/blog/${postId}/comments`, data),
}

// Coupons API endpoints
export const couponsApi = {
  validate: (code: string) =>
    apiClient.post('/coupons/validate', { code }),
  getAll: (params?: any) =>
    apiClient.get('/coupons', { params }),
  create: (data: any) =>
    apiClient.post('/coupons', data),
  update: (id: string, data: any) =>
    apiClient.put(`/coupons/${id}`, data),
  delete: (id: string) =>
    apiClient.delete(`/coupons/${id}`),
}

// Wishlist API endpoints
export const wishlistApi = {
  get: () =>
    apiClient.get('/wishlist'),
  add: (productId: string) =>
    apiClient.post('/wishlist', { productId }),
  remove: (productId: string) =>
    apiClient.delete(`/wishlist/${productId}`),
}

// Analytics API endpoints
export const analyticsApi = {
  getDashboard: () =>
    apiClient.get('/admin/analytics/dashboard'),
  getSales: (period: string) =>
    apiClient.get('/admin/analytics/sales', { params: { period } }),
  getCustomers: (period: string) =>
    apiClient.get('/admin/analytics/customers', { params: { period } }),
}

// Newsletter API endpoints
export const newsletterApi = {
  subscribe: (email: string) =>
    apiClient.post('/newsletter/subscribe', { email }),
  unsubscribe: (email: string) =>
    apiClient.post('/newsletter/unsubscribe', { email }),
}

// Contact API endpoints
export const contactApi = {
  submit: (data: any) =>
    apiClient.post('/contact', data),
}

export default apiClient
