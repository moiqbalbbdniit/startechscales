'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Plus, Edit, Trash2, Search } from 'lucide-react'

export default function AdminProducts() {
  const [products] = useState([
    { id: 1, name: 'Digital Scale Pro 500g', sku: 'DSP-500', category: 'Digital Scales', price: '₹4,999', stock: 45, status: 'Active' },
    { id: 2, name: 'Precision Balance 200g', sku: 'PB-200', category: 'Analytical', price: '₹8,500', stock: 23, status: 'Active' },
    { id: 3, name: 'Industrial Weighing Scale 100kg', sku: 'IWS-100', category: 'Industrial', price: '₹24,999', stock: 12, status: 'Active' },
    { id: 4, name: 'Portable Pocket Scale 500g', sku: 'PPS-500', category: 'Portable', price: '₹1,299', stock: 0, status: 'Out of Stock' },
    { id: 5, name: 'Laboratory Balance 0.01g', sku: 'LB-001', category: 'Laboratory', price: '₹45,000', stock: 5, status: 'Active' },
  ])

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Products</h1>
            <p className="text-muted-foreground mt-1">Manage your product catalog</p>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Plus size={18} className="mr-2" />
            Add Product
          </Button>
        </div>

        {/* Search and Filter */}
        <div className="mb-6 flex gap-4">
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-3 top-3 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <select className="px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
            <option>All Categories</option>
            <option>Digital Scales</option>
            <option>Analytical</option>
            <option>Industrial</option>
            <option>Laboratory</option>
          </select>
        </div>

        {/* Products Table */}
        <div className="bg-card rounded-lg border border-border shadow-premium overflow-hidden">
          <table className="w-full">
            <thead className="bg-muted/50 border-b border-border">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Product Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">SKU</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Category</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Price</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Stock</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-foreground">{product.name}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{product.sku}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">{product.category}</td>
                  <td className="px-6 py-4 text-sm font-medium text-foreground">{product.price}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      product.stock > 0 ? 'bg-green-500/10 text-green-700 dark:text-green-400' : 'bg-red-500/10 text-red-700 dark:text-red-400'
                    }`}>
                      {product.stock} units
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      product.status === 'Active' ? 'bg-blue-500/10 text-blue-700 dark:text-blue-400' : 'bg-red-500/10 text-red-700 dark:text-red-400'
                    }`}>
                      {product.status}
                    </span>
                  </td>
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
