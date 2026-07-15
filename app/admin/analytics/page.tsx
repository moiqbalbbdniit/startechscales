'use client'

import { BarChart3, TrendingUp, Users, ShoppingCart } from 'lucide-react'

export default function AdminAnalytics() {
  const monthlyRevenue = [
    { month: 'Jan', revenue: 45000, orders: 120 },
    { month: 'Feb', revenue: 52000, orders: 145 },
    { month: 'Mar', revenue: 48000, orders: 135 },
    { month: 'Apr', revenue: 61000, orders: 165 },
    { month: 'May', revenue: 58000, orders: 155 },
    { month: 'Jun', revenue: 72000, orders: 185 },
  ]

  const productPerformance = [
    { name: 'Digital Scale Pro 500g', sales: 245, revenue: '₹12,24,755' },
    { name: 'Precision Balance 200g', sales: 189, revenue: '₹16,06,500' },
    { name: 'Industrial Weighing Scale 100kg', sales: 87, revenue: '₹21,74,913' },
    { name: 'Laboratory Balance 0.01g', sales: 45, revenue: '₹20,25,000' },
  ]

  const maxRevenue = Math.max(...monthlyRevenue.map(m => m.revenue))

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
          <p className="text-muted-foreground mt-1">Track your business performance and insights</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-card rounded-lg border border-border p-6 shadow-premium">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Total Revenue</p>
                <p className="text-2xl font-bold text-foreground">₹3,58,000</p>
                <p className="text-xs text-primary mt-2">+22.5% from last month</p>
              </div>
              <div className="p-3 bg-primary/10 rounded-lg">
                <TrendingUp size={24} className="text-primary" />
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg border border-border p-6 shadow-premium">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Total Orders</p>
                <p className="text-2xl font-bold text-foreground">1,045</p>
                <p className="text-xs text-primary mt-2">+18.2% from last month</p>
              </div>
              <div className="p-3 bg-primary/10 rounded-lg">
                <ShoppingCart size={24} className="text-primary" />
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg border border-border p-6 shadow-premium">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Average Order</p>
                <p className="text-2xl font-bold text-foreground">₹3,425</p>
                <p className="text-xs text-primary mt-2">+5.3% from last month</p>
              </div>
              <div className="p-3 bg-primary/10 rounded-lg">
                <BarChart3 size={24} className="text-primary" />
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg border border-border p-6 shadow-premium">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">Active Customers</p>
                <p className="text-2xl font-bold text-foreground">892</p>
                <p className="text-xs text-primary mt-2">+31.4% from last month</p>
              </div>
              <div className="p-3 bg-primary/10 rounded-lg">
                <Users size={24} className="text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Revenue Chart */}
          <div className="bg-card rounded-lg border border-border p-6 shadow-premium">
            <h2 className="text-lg font-bold text-foreground mb-6">Monthly Revenue</h2>
            <div className="space-y-4">
              {monthlyRevenue.map((data) => (
                <div key={data.month}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">{data.month}</span>
                    <span className="text-sm text-muted-foreground">₹{(data.revenue / 1000).toFixed(0)}K</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-gradient-primary h-2 rounded-full"
                      style={{ width: `${(data.revenue / maxRevenue) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Orders Chart */}
          <div className="bg-card rounded-lg border border-border p-6 shadow-premium">
            <h2 className="text-lg font-bold text-foreground mb-6">Monthly Orders</h2>
            <div className="space-y-4">
              {monthlyRevenue.map((data) => (
                <div key={data.month}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-foreground">{data.month}</span>
                    <span className="text-sm text-muted-foreground">{data.orders}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-accent h-2 rounded-full"
                      style={{ width: `${(data.orders / 185) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-card rounded-lg border border-border p-6 shadow-premium">
          <h2 className="text-lg font-bold text-foreground mb-6">Top Performing Products</h2>
          <div className="space-y-4">
            {productPerformance.map((product, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                <div>
                  <p className="font-medium text-foreground">{product.name}</p>
                  <p className="text-sm text-muted-foreground">{product.sales} sales</p>
                </div>
                <p className="font-bold text-foreground">{product.revenue}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
