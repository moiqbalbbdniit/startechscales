import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'View and manage items in your shopping cart',
}

export default function CartPage() {
  const cartItems = [] // Will be populated from state/API

  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
      <div className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 dark:text-white font-medium">Cart</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Your cart is empty</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Add some products to get started
            </p>
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Continue Shopping <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {/* Cart items will be rendered here */}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-6 sticky top-24">
                <h2 className="font-bold text-lg text-slate-900 dark:text-white mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6 pb-6 border-b border-slate-200 dark:border-slate-700">
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Subtotal</span>
                    <span className="font-semibold text-slate-900 dark:text-white">₹0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Tax (GST)</span>
                    <span className="font-semibold text-slate-900 dark:text-white">₹0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Shipping</span>
                    <span className="font-semibold text-slate-900 dark:text-white">Free</span>
                  </div>
                </div>

                <div className="flex justify-between mb-6">
                  <span className="font-bold text-slate-900 dark:text-white">Total</span>
                  <span className="text-2xl font-bold text-primary">₹0</span>
                </div>

                <Link href="/checkout">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white text-lg h-12">
                    Proceed to Checkout
                  </Button>
                </Link>

                <Link href="/products">
                  <Button variant="outline" className="w-full mt-3">
                    Continue Shopping
                  </Button>
                </Link>

                {/* Coupon Section */}
                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Have a coupon?</p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="flex-1 px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Button variant="outline">Apply</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
