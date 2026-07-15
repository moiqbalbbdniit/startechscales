'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, ChevronRight } from 'lucide-react'

export default function AccountPage() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '+91 98765 43210',
    company: 'Star Tech Industries',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    setIsEditing(false)
    // TODO: Save to database
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
          <span className="text-slate-900 dark:text-white">Account</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Account Settings</h1>
          <p className="text-slate-600 dark:text-slate-400">Manage your personal information and account details</p>
        </div>

        {/* Account Info Card */}
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden mb-8">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 px-6 py-4 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Personal Information</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Update your profile details</p>
            </div>
            <Button
              onClick={() => setIsEditing(!isEditing)}
              className={isEditing ? 'bg-red-600 hover:bg-red-700' : 'bg-primary hover:bg-primary/90'}
              variant={isEditing ? 'default' : 'default'}
            >
              {isEditing ? 'Cancel' : 'Edit'}
            </Button>
          </div>

          {/* Card Content */}
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              {/* Email */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
            </div>

            {/* Save Button */}
            {isEditing && (
              <div className="flex gap-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                <Button onClick={handleSave} className="bg-primary hover:bg-primary/90 text-white">
                  Save Changes
                </Button>
                <Button onClick={() => setIsEditing(false)} variant="outline">
                  Discard
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Mail className="text-primary" size={20} />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white">Email</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400">{formData.email}</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Phone className="text-primary" size={20} />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white">Phone</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400">{formData.phone}</p>
          </div>
        </div>

        {/* Account Actions */}
        <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-700">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Account Actions</h2>
          </div>
          <div className="divide-y divide-slate-200 dark:divide-slate-700">
            <button className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-left">
              <div>
                <p className="font-medium text-slate-900 dark:text-white">Change Password</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Update your password regularly</p>
              </div>
              <ChevronRight className="text-slate-400" size={20} />
            </button>
            <button className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors text-left">
              <div>
                <p className="font-medium text-slate-900 dark:text-white">Email Verification</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Verify your email address</p>
              </div>
              <ChevronRight className="text-slate-400" size={20} />
            </button>
            <button className="w-full px-6 py-4 flex items-center justify-between hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors text-left">
              <div>
                <p className="font-medium text-red-600 dark:text-red-400">Delete Account</p>
                <p className="text-sm text-red-500/70 dark:text-red-400/70">Permanently delete your account</p>
              </div>
              <ChevronRight className="text-red-400" size={20} />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
