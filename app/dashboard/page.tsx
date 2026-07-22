'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { MapPin, Package, Settings, ShieldCheck, User } from 'lucide-react'

type CurrentUser = {
  id: string
  name: string
  email: string
  phone?: string
  role: 'customer' | 'admin'
  createdAt: string
}

export default function DashboardPage() {
  const [user, setUser] = useState<CurrentUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('/api/auth/me', { cache: 'no-store' })
      .then(async (response) => (response.ok ? response.json() : null))
      .then((result) => setUser(result?.user ?? null))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {isLoading ? (
          <p className="text-slate-600 dark:text-slate-400">Loading your account…</p>
        ) : !user ? (
          <div className="rounded-2xl border border-slate-200 p-8 dark:border-slate-800">
            <h1 className="text-2xl font-bold">Your session has ended</h1>
            <Link href="/auth/login"><Button className="mt-5">Sign in</Button></Link>
          </div>
        ) : (
          <>
            <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">My account</p>
                <h1 className="mt-2 text-4xl font-bold text-slate-950 dark:text-white">Welcome back, {user.name}</h1>
                <p className="mt-2 text-slate-600 dark:text-slate-400">Manage your account and track your orders.</p>
              </div>
              {user.role === 'admin' && <Link href="/admin"><Button><ShieldCheck className="mr-2" size={18} />Open Admin Panel</Button></Link>}
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              <section className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800 lg:col-span-2">
                <h2 className="text-xl font-bold text-slate-950 dark:text-white">Account information</h2>
                <dl className="mt-5 divide-y divide-slate-200 dark:divide-slate-800">
                  <div className="flex items-center justify-between gap-4 py-4"><dt className="text-slate-600 dark:text-slate-400">Name</dt><dd className="font-semibold">{user.name}</dd></div>
                  <div className="flex items-center justify-between gap-4 py-4"><dt className="text-slate-600 dark:text-slate-400">Email</dt><dd className="font-semibold">{user.email}</dd></div>
                  <div className="flex items-center justify-between gap-4 py-4"><dt className="text-slate-600 dark:text-slate-400">Account type</dt><dd className="font-semibold capitalize">{user.role}</dd></div>
                </dl>
                <Link href="/dashboard/account"><Button variant="outline" className="mt-6">Edit profile</Button></Link>
              </section>

              <nav className="space-y-3 rounded-2xl border border-slate-200 p-4 dark:border-slate-800">
                <Link href="/dashboard/account" className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900"><User size={19} />Account</Link>
                <Link href="/dashboard/orders" className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900"><Package size={19} />Orders</Link>
                <Link href="/dashboard/addresses" className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900"><MapPin size={19} />Addresses</Link>
                <Link href="/dashboard/settings" className="flex items-center gap-3 rounded-xl px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-900"><Settings size={19} />Settings</Link>
              </nav>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}
