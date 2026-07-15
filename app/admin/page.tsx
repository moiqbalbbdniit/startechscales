'use client'

import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { BarChart3, Package, ShoppingCart, Users, TrendingUp, Settings } from 'lucide-react'

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Revenue', value: '₹45,231.89', change: '+12.5%', icon: TrendingUp },
    { label: 'Total Orders', value: '1,234', change: '+8.2%', icon: ShoppingCart },
    { label: 'Total Products', value: '567', change: '+2.1%', icon: Package },
    { label: 'Total Customers', value: '892', change: '+15.3%', icon: Users },
  ]

  const adminLinks = [
    { href: '/admin/products', label: 'Manage Products', icon: Package },
    { href: '/admin/orders', label: 'View Orders', icon: ShoppingCart },
    { href: '/admin/customers', label: 'View Customers', icon: Users },
    { href: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
    { href: '/admin/coupons', label: 'Manage Coupons', icon: Settings },
    { href: '/admin/blogs', label: 'Manage Blogs', icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here&apos;s what&apos;s happening with your store.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-card rounded-lg border border-border p-6 shadow-premium hover:shadow-premium-lg transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-primary mt-2">{stat.change} from last month</p>
                  </div>
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon size={24} className="text-primary" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Quick Links */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {adminLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link key={link.href} href={link.href}>
                  <Button variant="outline" className="w-full justify-start h-12 text-base">
                    <Icon size={20} className="mr-2" />
                    {link.label}
                  </Button>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Recent Orders Preview */}
        <div className="bg-card rounded-lg border border-border p-6 shadow-premium">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-foreground">Recent Orders</h2>
            <Link href="/admin/orders">
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </Link>
          </div>

          <div className="space-y-3">
            {[
              { id: '#ORD-001', customer: 'Acme Corp', amount: '₹2,500', status: 'Delivered' },
              { id: '#ORD-002', customer: 'Tech Industries', amount: '₹5,200', status: 'Processing' },
              { id: '#ORD-003', customer: 'Global Systems', amount: '₹8,900', status: 'Shipped' },
              { id: '#ORD-004', customer: 'Prime Solutions', amount: '₹3,400', status: 'Pending' },
            ].map((order) => (
              <div key={order.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                <div>
                  <p className="font-medium text-foreground">{order.id}</p>
                  <p className="text-sm text-muted-foreground">{order.customer}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-foreground">{order.amount}</p>
                  <span className={`text-xs px-2 py-1 rounded ${
                    order.status === 'Delivered' ? 'bg-green-500/10 text-green-700 dark:text-green-400' :
                    order.status === 'Processing' ? 'bg-blue-500/10 text-blue-700 dark:text-blue-400' :
                    order.status === 'Shipped' ? 'bg-amber-500/10 text-amber-700 dark:text-amber-400' :
                    'bg-red-500/10 text-red-700 dark:text-red-400'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
