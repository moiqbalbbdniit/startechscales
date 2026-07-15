'use client'

import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Search } from 'lucide-react'

export default function AdminCustomers() {
  const customers = [
    { id: 1, name: 'Acme Corporation', email: 'contact@acme.com', phone: '+91 98765 43210', city: 'Mumbai', orders: 5, spent: '₹1,24,500' },
    { id: 2, name: 'Tech Industries', email: 'info@techindustries.com', phone: '+91 97654 32109', city: 'Bangalore', orders: 3, spent: '₹87,600' },
    { id: 3, name: 'Global Systems', email: 'support@globalsystems.com', phone: '+91 96543 21098', city: 'Delhi', orders: 8, spent: '₹2,34,900' },
    { id: 4, name: 'Prime Solutions', email: 'hello@primesolutions.com', phone: '+91 95432 10987', city: 'Pune', orders: 2, spent: '₹56,300' },
    { id: 5, name: 'Future Tech Labs', email: 'info@futuretechilab.com', phone: '+91 94321 09876', city: 'Hyderabad', orders: 4, spent: '₹1,45,200' },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Customers</h1>
          <p className="text-muted-foreground mt-1">View and manage customer information</p>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-3 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by name or email..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Customers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
          {customers.map((customer) => (
            <div key={customer.id} className="bg-card rounded-lg border border-border p-6 shadow-premium hover:shadow-premium-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{customer.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{customer.city}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-primary">{customer.orders} Orders</p>
                  <p className="text-sm text-muted-foreground">{customer.spent}</p>
                </div>
              </div>

              <div className="space-y-2 mb-4 pb-4 border-b border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail size={16} />
                  {customer.email}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone size={16} />
                  {customer.phone}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin size={16} />
                  {customer.city}
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  View Details
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Contact
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
