'use client'

import { Button } from '@/components/ui/button'
import { Plus, Edit, Trash2, Search } from 'lucide-react'

export default function AdminCoupons() {
  const coupons = [
    { id: 1, code: 'SUMMER2024', discount: '20%', type: 'Percentage', usage: '45/100', status: 'Active', expiry: '2024-08-31' },
    { id: 2, code: 'FLAT500', discount: '₹500', type: 'Fixed', usage: '78/200', status: 'Active', expiry: '2024-09-15' },
    { id: 3, code: 'WELCOME100', discount: '₹100', type: 'Fixed', usage: '150/150', status: 'Used', expiry: '2024-07-31' },
    { id: 4, code: 'NEWCUST10', discount: '10%', type: 'Percentage', usage: '12/50', status: 'Active', expiry: '2024-08-15' },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Coupons & Discounts</h1>
            <p className="text-muted-foreground mt-1">Manage promotional coupons</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus size={18} className="mr-2" />
            Create Coupon
          </Button>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-3 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search coupons..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Coupons Table */}
        <div className="bg-card rounded-lg border border-border shadow-premium overflow-hidden">
          <table className="w-full">
            <thead className="bg-muted/50 border-b border-border">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Code</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Discount</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Type</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Usage</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Expiry</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {coupons.map((coupon) => (
                <tr key={coupon.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-foreground font-mono">{coupon.code}</td>
                  <td className="px-6 py-4 text-sm font-medium text-primary">{coupon.discount}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{coupon.type}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{coupon.usage}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      coupon.status === 'Active' ? 'bg-green-500/10 text-green-700 dark:text-green-400' : 'bg-gray-500/10 text-gray-700 dark:text-gray-400'
                    }`}>
                      {coupon.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{coupon.expiry}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit size={16} />
                      </Button>
                      <Button variant="ghost" size="sm" className="hover:text-red-600">
                        <Trash2 size={16} />
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
