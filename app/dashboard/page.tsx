'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { User, Package, MapPin, Settings as SettingsIcon, LogOut, Menu, X } from 'lucide-react'

const DASHBOARD_TABS = [
  { id: 'account', label: 'Account', icon: User },
  { id: 'orders', label: 'Orders', icon: Package },
  { id: 'addresses', label: 'Addresses', icon: MapPin },
  { id: 'settings', label: 'Settings', icon: SettingsIcon },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('account')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [userName] = useState('John Doe')
  const [userEmail] = useState('john@example.com')

  // Sample orders data
  const orders = [
    { id: 'ORD-001', date: '2024-01-15', product: 'Precision Lab Scale', amount: '₹45,000', status: 'Delivered' },
    { id: 'ORD-002', date: '2024-01-20', product: 'Industrial Weighing System', amount: '₹1,20,000', status: 'In Transit' },
    { id: 'ORD-003', date: '2024-02-05', product: 'Calibration Service', amount: '₹15,000', status: 'Pending' },
  ]

  // Sample addresses data
  const addresses = [
    {
      id: 1,
      type: 'Home',
      street: '123 Business Street',
      city: 'Bangalore',
      state: 'Karnataka',
      pincode: '560001',
      isDefault: true,
    },
    {
      id: 2,
      type: 'Office',
      street: '456 Commerce Plaza',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      isDefault: false,
    },
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'account':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Account Information</h2>
              <div className="bg-white dark:bg-slate-800 rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-slate-600 dark:text-slate-400">Name</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{userName}</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700">
                  <span className="text-slate-600 dark:text-slate-400">Email</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{userEmail}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 dark:text-slate-400">Phone</span>
                  <span className="font-semibold text-slate-900 dark:text-white">+91 98765 43210</span>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <Button className="bg-primary hover:bg-primary/90 text-white">Edit Profile</Button>
                <Button variant="outline">Change Password</Button>
              </div>
            </div>
          </div>
        )

      case 'orders':
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Order History</h2>
              <div className="space-y-3">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="bg-white dark:bg-slate-800 rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border border-slate-200 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 dark:text-white">{order.product}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">Order ID: {order.id}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">{order.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-slate-900 dark:text-white">{order.amount}</div>
                      <div
                        className={`text-sm font-medium ${
                          order.status === 'Delivered'
                            ? 'text-green-600 dark:text-green-400'
                            : order.status === 'In Transit'
                              ? 'text-blue-600 dark:text-blue-400'
                              : 'text-amber-600 dark:text-amber-400'
                        }`}
                      >
                        {order.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 'addresses':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Saved Addresses</h2>
              <Button className="bg-primary hover:bg-primary/90 text-white">Add New Address</Button>
            </div>
            <div className="space-y-3">
              {addresses.map((address) => (
                <div
                  key={address.id}
                  className="bg-white dark:bg-slate-800 rounded-lg p-4 border-2 border-slate-200 dark:border-slate-700"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-slate-900 dark:text-white">{address.type}</span>
                        {address.isDefault && (
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                            Default
                          </span>
                        )}
                      </div>
                      <div className="text-slate-600 dark:text-slate-400">
                        <p>{address.street}</p>
                        <p>
                          {address.city}, {address.state} {address.pincode}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 'settings':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Settings</h2>
            <div className="space-y-4">
              {/* Notifications */}
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Email Notifications</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Receive order updates and promotions</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5 rounded" />
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Newsletter Subscription</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Get exclusive offers and news</p>
                  </div>
                  <input type="checkbox" className="w-5 h-5 rounded" />
                </div>
              </div>

              {/* Privacy */}
              <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">Two-Factor Authentication</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Enhance your account security</p>
                  </div>
                  <input type="checkbox" className="w-5 h-5 rounded" />
                </div>
              </div>

              {/* Danger Zone */}
              <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-4 border border-red-200 dark:border-red-900/50">
                <h3 className="font-semibold text-red-900 dark:text-red-400 mb-3">Danger Zone</h3>
                <Button className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white">Delete Account</Button>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white">My Dashboard</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2">Welcome back, {userName}!</p>
          </div>
          <Button className="hidden sm:flex bg-red-600 hover:bg-red-700 text-white gap-2" variant="outline">
            <LogOut size={18} />
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Mobile Menu Button */}
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-full bg-white dark:bg-slate-800 rounded-lg p-4 flex items-center justify-between border border-slate-200 dark:border-slate-700"
              >
                <span className="font-semibold text-slate-900 dark:text-white">Menu</span>
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

            {/* Desktop Sidebar */}
            <nav className={`space-y-2 ${isMobileMenuOpen ? 'block' : 'hidden'} lg:block bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700`}>
              {DASHBOARD_TABS.map((tab) => {
                const IconComponent = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id)
                      setIsMobileMenuOpen(false)
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${
                      activeTab === tab.id
                        ? 'bg-primary/10 text-primary dark:bg-primary/10 dark:text-primary'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    <IconComponent size={20} />
                    {tab.label}
                  </button>
                )
              })}
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors font-medium lg:hidden">
                <LogOut size={20} />
                Logout
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
