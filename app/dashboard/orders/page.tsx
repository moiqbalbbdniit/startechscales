'use client'

import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ChevronRight, Package, Download, Eye } from 'lucide-react'

interface Order {
  id: string
  date: string
  product: string
  quantity: number
  amount: string
  status: 'Delivered' | 'In Transit' | 'Pending' | 'Cancelled'
  trackingId: string
}

const ORDERS: Order[] = [
  {
    id: 'ORD-001',
    date: '2024-01-15',
    product: 'Precision Lab Scale Model AX-500',
    quantity: 2,
    amount: '₹45,000',
    status: 'Delivered',
    trackingId: 'TRK-9876543210',
  },
  {
    id: 'ORD-002',
    date: '2024-01-20',
    product: 'Industrial Weighing System IR-2000',
    quantity: 1,
    amount: '₹1,20,000',
    status: 'In Transit',
    trackingId: 'TRK-9876543211',
  },
  {
    id: 'ORD-003',
    date: '2024-02-05',
    product: 'Calibration Service (Annual)',
    quantity: 1,
    amount: '₹15,000',
    status: 'Pending',
    trackingId: 'TRK-9876543212',
  },
  {
    id: 'ORD-004',
    date: '2023-12-28',
    product: 'Platform Weighing Scale PS-1000',
    quantity: 3,
    amount: '₹75,000',
    status: 'Delivered',
    trackingId: 'TRK-9876543213',
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Delivered':
      return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
    case 'In Transit':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
    case 'Pending':
      return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400'
    case 'Cancelled':
      return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
    default:
      return 'bg-slate-100 text-slate-800'
  }
}

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-8">
          <Link href="/dashboard" className="hover:text-primary transition-colors">
            Dashboard
          </Link>
          <ChevronRight size={16} />
          <span className="text-slate-900 dark:text-white">Orders</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Order History</h1>
          <p className="text-slate-600 dark:text-slate-400">View and manage all your orders</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Total Orders</p>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">4</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Delivered</p>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">2</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">In Transit</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4">
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Pending</p>
            <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">1</p>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {ORDERS.map((order) => (
            <div
              key={order.id}
              className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:border-primary/50 dark:hover:border-primary/50 transition-all"
            >
              {/* Order Header */}
              <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 px-6 py-4 border-b border-slate-200 dark:border-slate-700">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Package className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Order {order.id}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{order.date}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium w-fit ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </div>
              </div>

              {/* Order Details */}
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 pb-6 border-b border-slate-200 dark:border-slate-700">
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Product</p>
                    <p className="font-medium text-slate-900 dark:text-white">{order.product}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Quantity</p>
                    <p className="font-medium text-slate-900 dark:text-white">{order.quantity} unit(s)</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Tracking ID</p>
                    <p className="font-medium text-slate-900 dark:text-white font-mono">{order.trackingId}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">Order Amount</p>
                    <p className="font-bold text-primary text-lg">{order.amount}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Eye size={18} />
                    View Details
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download size={18} />
                    Download Invoice
                  </Button>
                  {order.status === 'In Transit' && (
                    <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
                      Track Shipment
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {ORDERS.length === 0 && (
          <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-12 text-center">
            <Package className="mx-auto mb-4 text-slate-400" size={48} />
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No Orders Yet</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              You haven&apos;t placed any orders yet. Start shopping to see your orders here.
            </p>
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90 text-white">Continue Shopping</Button>
            </Link>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
