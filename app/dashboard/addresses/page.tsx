'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ChevronRight, MapPin, Plus, Trash2, Edit2 } from 'lucide-react'

interface Address {
  id: number
  type: 'Home' | 'Office' | 'Other'
  name: string
  street: string
  city: string
  state: string
  pincode: string
  phone: string
  isDefault: boolean
}

const INITIAL_ADDRESSES: Address[] = [
  {
    id: 1,
    type: 'Home',
    name: 'John Doe',
    street: '123 Business Street, Apt 456',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560001',
    phone: '+91 98765 43210',
    isDefault: true,
  },
  {
    id: 2,
    type: 'Office',
    name: 'Star Tech Industries',
    street: '456 Commerce Plaza, Floor 5',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001',
    phone: '+91 98765 43211',
    isDefault: false,
  },
]

export default function AddressesPage() {
  const [addresses, setAddresses] = useState<Address[]>(INITIAL_ADDRESSES)
  const [isAddingNew, setIsAddingNew] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState<Partial<Address>>({
    type: 'Home',
    name: '',
    street: '',
    city: '',
    state: '',
    pincode: '',
    phone: '',
  })

  const handleAddNew = () => {
    setIsAddingNew(true)
    setFormData({
      type: 'Home',
      name: '',
      street: '',
      city: '',
      state: '',
      pincode: '',
      phone: '',
    })
  }

  const handleEdit = (address: Address) => {
    setEditingId(address.id)
    setFormData(address)
  }

  const handleSave = () => {
    if (editingId) {
      setAddresses((prev) =>
        prev.map((addr) => (addr.id === editingId ? { ...(formData as Address), id: editingId } : addr))
      )
      setEditingId(null)
    } else if (isAddingNew) {
      const newAddress: Address = {
        ...(formData as Address),
        id: Math.max(...addresses.map((a) => a.id), 0) + 1,
      }
      setAddresses((prev) => [...prev, newAddress])
      setIsAddingNew(false)
    }
    setFormData({})
  }

  const handleCancel = () => {
    setIsAddingNew(false)
    setEditingId(null)
    setFormData({})
  }

  const handleDelete = (id: number) => {
    setAddresses((prev) => prev.filter((addr) => addr.id !== id))
  }

  const handleSetDefault = (id: number) => {
    setAddresses((prev) =>
      prev.map((addr) => ({
        ...addr,
        isDefault: addr.id === id,
      }))
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-8">
          <Link href="/dashboard" className="hover:text-primary transition-colors">
            Dashboard
          </Link>
          <ChevronRight size={16} />
          <span className="text-slate-900 dark:text-white">Addresses</span>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Saved Addresses</h1>
            <p className="text-slate-600 dark:text-slate-400">Manage your delivery addresses</p>
          </div>
          {!isAddingNew && editingId === null && (
            <Button onClick={handleAddNew} className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
              <Plus size={18} />
              Add Address
            </Button>
          )}
        </div>

        {/* Add/Edit Form */}
        {(isAddingNew || editingId !== null) && (
          <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6 mb-8">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              {editingId ? 'Edit Address' : 'Add New Address'}
            </h2>

            <div className="space-y-4">
              {/* Address Type and Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Address Type
                  </label>
                  <select
                    value={formData.type || 'Home'}
                    onChange={(e) => setFormData((prev) => ({ ...prev, type: e.target.value as any }))}
                    className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  >
                    <option>Home</option>
                    <option>Office</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.name || ''}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
              </div>

              {/* Street */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Street Address
                </label>
                <input
                  type="text"
                  value={formData.street || ''}
                  onChange={(e) => setFormData((prev) => ({ ...prev, street: e.target.value }))}
                  placeholder="123 Main Street, Apt 456"
                  className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              {/* City, State, Pincode */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">City</label>
                  <input
                    type="text"
                    value={formData.city || ''}
                    onChange={(e) => setFormData((prev) => ({ ...prev, city: e.target.value }))}
                    placeholder="Bangalore"
                    className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">State</label>
                  <input
                    type="text"
                    value={formData.state || ''}
                    onChange={(e) => setFormData((prev) => ({ ...prev, state: e.target.value }))}
                    placeholder="Karnataka"
                    className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Pincode</label>
                  <input
                    type="text"
                    value={formData.pincode || ''}
                    onChange={(e) => setFormData((prev) => ({ ...prev, pincode: e.target.value }))}
                    placeholder="560001"
                    className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone || ''}
                  onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              {/* Form Actions */}
              <div className="flex gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                <Button onClick={handleSave} className="bg-primary hover:bg-primary/90 text-white">
                  {editingId ? 'Update Address' : 'Add Address'}
                </Button>
                <Button onClick={handleCancel} variant="outline">
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Addresses List */}
        <div className="space-y-4">
          {addresses.length === 0 ? (
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-12 text-center">
              <MapPin className="mx-auto mb-4 text-slate-400" size={48} />
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No Addresses Added</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">Add your first address to get started</p>
              <Button onClick={handleAddNew} className="bg-primary hover:bg-primary/90 text-white">
                Add Address
              </Button>
            </div>
          ) : (
            addresses.map((address) => (
              <div
                key={address.id}
                className="bg-white dark:bg-slate-800 rounded-lg border-2 border-slate-200 dark:border-slate-700 overflow-hidden hover:border-primary/50 dark:hover:border-primary/50 transition-all"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MapPin className="text-primary" size={20} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold text-slate-900 dark:text-white">{address.type}</h3>
                          {address.isDefault && (
                            <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                              Default
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{address.name}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-slate-600 dark:text-slate-400 mb-6 ml-13">
                    <p>{address.street}</p>
                    <p>
                      {address.city}, {address.state} {address.pincode}
                    </p>
                    <p>{address.phone}</p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {!address.isDefault && (
                      <Button variant="outline" size="sm" onClick={() => handleSetDefault(address.id)}>
                        Set as Default
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2"
                      onClick={() => handleEdit(address)}
                    >
                      <Edit2 size={16} />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 text-red-600 hover:text-red-700"
                      onClick={() => handleDelete(address.id)}
                    >
                      <Trash2 size={16} />
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
