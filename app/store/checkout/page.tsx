import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MapPin, CreditCard, Truck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Checkout',
  description: 'Complete your purchase',
}

export default function CheckoutPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {/* Shipping Address */}
              <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin size={24} className="text-primary" />
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Shipping Address</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      placeholder="9999999999"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                      Street Address
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      placeholder="123 Main Street"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      placeholder="Bangalore"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      placeholder="560001"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Method */}
              <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Truck size={24} className="text-primary" />
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Shipping Method</h2>
                </div>

                <div className="space-y-3">
                  {[
                    { id: 'standard', label: 'Standard Shipping', desc: '5-7 business days', price: 'Free' },
                    { id: 'express', label: 'Express Shipping', desc: '2-3 business days', price: '₹500' },
                    { id: 'overnight', label: 'Overnight Shipping', desc: 'Next day delivery', price: '₹1000' },
                  ].map((method) => (
                    <label key={method.id} className="flex items-center p-4 border border-slate-300 dark:border-slate-600 rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800">
                      <input
                        type="radio"
                        name="shipping"
                        defaultChecked={method.id === 'standard'}
                        className="w-4 h-4 text-primary accent-primary"
                      />
                      <div className="ml-4 flex-1">
                        <p className="font-semibold text-slate-900 dark:text-white">{method.label}</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{method.desc}</p>
                      </div>
                      <span className="font-semibold text-slate-900 dark:text-white">{method.price}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Payment Method */}
              <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <CreditCard size={24} className="text-primary" />
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Payment Method</h2>
                </div>

                <div className="space-y-3">
                  {[
                    { id: 'card', label: 'Credit/Debit Card' },
                    { id: 'upi', label: 'UPI' },
                    { id: 'netbanking', label: 'Net Banking' },
                    { id: 'wallet', label: 'Digital Wallet' },
                  ].map((method) => (
                    <label key={method.id} className="flex items-center p-4 border border-slate-300 dark:border-slate-600 rounded-lg cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800">
                      <input
                        type="radio"
                        name="payment"
                        defaultChecked={method.id === 'card'}
                        className="w-4 h-4 text-primary accent-primary"
                      />
                      <span className="ml-4 font-semibold text-slate-900 dark:text-white">
                        {method.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-6 sticky top-24">
              <h2 className="font-bold text-lg text-slate-900 dark:text-white mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-slate-200 dark:border-slate-700">
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Subtotal</span>
                  <span className="font-semibold text-slate-900 dark:text-white">₹0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Shipping</span>
                  <span className="font-semibold text-slate-900 dark:text-white">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Tax (GST)</span>
                  <span className="font-semibold text-slate-900 dark:text-white">₹0</span>
                </div>
              </div>

              <div className="flex justify-between mb-6">
                <span className="font-bold text-slate-900 dark:text-white">Total</span>
                <span className="text-2xl font-bold text-primary">₹0</span>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-white text-lg h-12">
                Place Order
              </Button>

              <Link href="/cart">
                <Button variant="outline" className="w-full mt-3">
                  Back to Cart
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
