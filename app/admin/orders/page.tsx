'use client'

import { Button } from '@/components/ui/button'
import { Eye, Download, Search } from 'lucide-react'

export default function AdminOrders() {
  const orders = [
    { id: '#ORD-001', customer: 'Acme Corp', date: '2024-07-15', amount: '₹24,500', items: 3, status: 'Delivered' },
    { id: '#ORD-002', customer: 'Tech Industries', date: '2024-07-14', amount: '₹52,000', items: 2, status: 'Processing' },
    { id: '#ORD-003', customer: 'Global Systems', date: '2024-07-13', amount: '₹89,900', items: 5, status: 'Shipped' },
    { id: '#ORD-004', customer: 'Prime Solutions', date: '2024-07-12', amount: '₹34,500', items: 4, status: 'Pending' },
    { id: '#ORD-005', customer: 'Future Tech', date: '2024-07-11', amount: '₹15,200', items: 1, status: 'Delivered' },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Orders</h1>
          <p className="text-muted-foreground mt-1">Manage and track all customer orders</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-6 flex gap-4">
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-3 top-3 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by order ID or customer..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <select className="px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
            <option>All Status</option>
            <option>Pending</option>
            <option>Processing</option>
            <option>Shipped</option>
            <option>Delivered</option>
          </select>
        </div>

        {/* Orders Table */}
        <div className="bg-card rounded-lg border border-border shadow-premium overflow-hidden">
          <table className="w-full">
            <thead className="bg-muted/50 border-b border-border">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Order ID</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Customer</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Date</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Items</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Amount</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-foreground">{order.id}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{order.customer}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{order.date}</td>
                  <td className="px-6 py-4 text-sm text-foreground">{order.items}</td>
                  <td className="px-6 py-4 text-sm font-medium text-foreground">{order.amount}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      order.status === 'Delivered' ? 'bg-green-500/10 text-green-700 dark:text-green-400' :
                      order.status === 'Processing' ? 'bg-blue-500/10 text-blue-700 dark:text-blue-400' :
                      order.status === 'Shipped' ? 'bg-amber-500/10 text-amber-700 dark:text-amber-400' :
                      'bg-red-500/10 text-red-700 dark:text-red-400'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye size={16} />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download size={16} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
