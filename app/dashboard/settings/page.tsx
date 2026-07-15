'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ChevronRight, Bell, Lock, Eye, ToggleRight, ToggleLeft, AlertCircle, Trash2 } from 'lucide-react'

export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [newsletter, setNewsletter] = useState(false)
  const [twoFactor, setTwoFactor] = useState(false)
  const [smsNotifications, setSmsNotifications] = useState(true)
  const [orderUpdates, setOrderUpdates] = useState(true)
  const [promotionalEmails, setPromotionalEmails] = useState(false)

  const handleToggle = (setter: React.Dispatch<React.SetStateAction<boolean>>) => {
    setter((prev) => !prev)
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
          <span className="text-slate-900 dark:text-white">Settings</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">Account Settings</h1>
          <p className="text-slate-600 dark:text-slate-400">Manage your preferences and account security</p>
        </div>

        {/* Notifications Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Bell className="text-primary" size={20} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Notifications</h2>
          </div>

          <div className="space-y-3">
            {/* Email Notifications */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 flex items-center justify-between hover:border-primary/50 dark:hover:border-primary/50 transition-colors cursor-pointer"
              onClick={() => handleToggle(setEmailNotifications)}
            >
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 dark:text-white">Email Notifications</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Receive updates via email</p>
              </div>
              <button className="ml-4">
                {emailNotifications ? (
                  <ToggleRight className="text-primary" size={24} />
                ) : (
                  <ToggleLeft className="text-slate-400" size={24} />
                )}
              </button>
            </div>

            {/* Order Updates */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 flex items-center justify-between hover:border-primary/50 dark:hover:border-primary/50 transition-colors cursor-pointer"
              onClick={() => handleToggle(setOrderUpdates)}
            >
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 dark:text-white">Order Updates</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Get notified about your orders</p>
              </div>
              <button className="ml-4">
                {orderUpdates ? (
                  <ToggleRight className="text-primary" size={24} />
                ) : (
                  <ToggleLeft className="text-slate-400" size={24} />
                )}
              </button>
            </div>

            {/* SMS Notifications */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 flex items-center justify-between hover:border-primary/50 dark:hover:border-primary/50 transition-colors cursor-pointer"
              onClick={() => handleToggle(setSmsNotifications)}
            >
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 dark:text-white">SMS Notifications</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Receive text messages</p>
              </div>
              <button className="ml-4">
                {smsNotifications ? (
                  <ToggleRight className="text-primary" size={24} />
                ) : (
                  <ToggleLeft className="text-slate-400" size={24} />
                )}
              </button>
            </div>

            {/* Newsletter */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 flex items-center justify-between hover:border-primary/50 dark:hover:border-primary/50 transition-colors cursor-pointer"
              onClick={() => handleToggle(setNewsletter)}
            >
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 dark:text-white">Newsletter Subscription</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Get exclusive offers and news</p>
              </div>
              <button className="ml-4">
                {newsletter ? (
                  <ToggleRight className="text-primary" size={24} />
                ) : (
                  <ToggleLeft className="text-slate-400" size={24} />
                )}
              </button>
            </div>

            {/* Promotional Emails */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 flex items-center justify-between hover:border-primary/50 dark:hover:border-primary/50 transition-colors cursor-pointer"
              onClick={() => handleToggle(setPromotionalEmails)}
            >
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 dark:text-white">Promotional Emails</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Receive special offers and deals</p>
              </div>
              <button className="ml-4">
                {promotionalEmails ? (
                  <ToggleRight className="text-primary" size={24} />
                ) : (
                  <ToggleLeft className="text-slate-400" size={24} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Lock className="text-primary" size={20} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Security</h2>
          </div>

          <div className="space-y-3">
            {/* Password */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 flex items-center justify-between hover:border-primary/50 dark:hover:border-primary/50 transition-colors">
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 dark:text-white">Change Password</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Update your password regularly</p>
              </div>
              <Button variant="outline" size="sm">
                Change
              </Button>
            </div>

            {/* Two-Factor Authentication */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 flex items-center justify-between hover:border-primary/50 dark:hover:border-primary/50 transition-colors cursor-pointer"
              onClick={() => handleToggle(setTwoFactor)}
            >
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 dark:text-white">Two-Factor Authentication</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Enhance your account security</p>
              </div>
              <button className="ml-4">
                {twoFactor ? (
                  <ToggleRight className="text-primary" size={24} />
                ) : (
                  <ToggleLeft className="text-slate-400" size={24} />
                )}
              </button>
            </div>

            {/* Active Sessions */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 flex items-center justify-between hover:border-primary/50 dark:hover:border-primary/50 transition-colors">
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 dark:text-white">Active Sessions</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Manage your active devices</p>
              </div>
              <Button variant="outline" size="sm">
                View
              </Button>
            </div>

            {/* Login History */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 flex items-center justify-between hover:border-primary/50 dark:hover:border-primary/50 transition-colors">
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 dark:text-white">Login History</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Check your recent login activity</p>
              </div>
              <Button variant="outline" size="sm">
                View
              </Button>
            </div>
          </div>
        </div>

        {/* Privacy & Data Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Eye className="text-primary" size={20} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Privacy & Data</h2>
          </div>

          <div className="space-y-3">
            {/* Export Data */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 flex items-center justify-between hover:border-primary/50 dark:hover:border-primary/50 transition-colors">
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 dark:text-white">Export Your Data</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Download a copy of your personal data</p>
              </div>
              <Button variant="outline" size="sm">
                Export
              </Button>
            </div>

            {/* Privacy Policy */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 flex items-center justify-between hover:border-primary/50 dark:hover:border-primary/50 transition-colors">
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 dark:text-white">Privacy Policy</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Review our privacy practices</p>
              </div>
              <Link href="/legal/privacy">
                <Button variant="outline" size="sm">
                  Review
                </Button>
              </Link>
            </div>

            {/* Terms of Service */}
            <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 flex items-center justify-between hover:border-primary/50 dark:hover:border-primary/50 transition-colors">
              <div className="flex-1">
                <h3 className="font-semibold text-slate-900 dark:text-white">Terms of Service</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Review our terms and conditions</p>
              </div>
              <Link href="/legal/terms">
                <Button variant="outline" size="sm">
                  Review
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="border-t-2 border-red-200 dark:border-red-900/50 pt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
              <AlertCircle className="text-red-600 dark:text-red-400" size={20} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Danger Zone</h2>
          </div>

          <div className="space-y-3">
            {/* Deactivate Account */}
            <div className="bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-900/50 p-4 flex items-center justify-between hover:border-red-400 dark:hover:border-red-700 transition-colors">
              <div className="flex-1">
                <h3 className="font-semibold text-red-900 dark:text-red-400">Deactivate Account</h3>
                <p className="text-sm text-red-800/70 dark:text-red-400/70">Temporarily disable your account</p>
              </div>
              <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 border-red-200 hover:bg-red-50">
                Deactivate
              </Button>
            </div>

            {/* Delete Account */}
            <div className="bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-900/50 p-4 flex items-center justify-between hover:border-red-400 dark:hover:border-red-700 transition-colors">
              <div className="flex-1">
                <h3 className="font-semibold text-red-900 dark:text-red-400">Delete Account</h3>
                <p className="text-sm text-red-800/70 dark:text-red-400/70">Permanently delete your account and data</p>
              </div>
              <Button className="bg-red-600 hover:bg-red-700 text-white flex items-center gap-2" size="sm">
                <Trash2 size={16} />
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
