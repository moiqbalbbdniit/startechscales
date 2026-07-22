'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X, ShoppingCart, Heart, Search, User, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { NAV_LINKS, COMPANY_NAME } from '@/lib/constants'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState('Account')
  const [userRole, setUserRole] = useState<'customer' | 'admin' | null>(null)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const loadSession = async () => {
      try {
        const response = await fetch('/api/auth/me', { cache: 'no-store' })
        if (!response.ok) {
          setIsLoggedIn(false)
          setUserName('Account')
          setUserRole(null)
          return
        }

        const data = await response.json()
        if (data?.user) {
          setIsLoggedIn(true)
          setUserName(data.user.name || 'Account')
          setUserRole(data.user.role === 'admin' ? 'admin' : 'customer')
        }
      } catch {
        setIsLoggedIn(false)
        setUserRole(null)
      }
    }

    loadSession()
  }, [pathname])

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' })
    setIsLoggedIn(false)
    setUserRole(null)
    setIsUserMenuOpen(false)
    router.refresh()
    router.push('/')
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 shadow-[0_10px_40px_-26px_rgba(15,23,42,0.65)] backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/90">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo - Always visible */}
        {/* Logo */}
<Link
  href="/"
  className="flex shrink-0 items-center lg:ml-10"
  aria-label={COMPANY_NAME}
>
  <Image
    src="/startechlogo.png"
    alt={COMPANY_NAME}
    width={280}
    height={90}
    priority
    className="h-12 w-auto object-contain transition-all duration-300 sm:h-14 lg:h-16 xl:h-[72px]"
  />
</Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50/90 px-2 py-2 dark:border-slate-800 dark:bg-slate-900/80">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                pathname === link.href
                  ? 'bg-slate-950 text-white dark:bg-white dark:text-slate-950'
                  : 'text-slate-700 hover:bg-white hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search - Mobile and Desktop */}
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-colors hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800">
            <Search size={18} className="sm:w-5 sm:h-5 text-slate-700 dark:text-slate-300" />
          </button>

          {/* Wishlist */}
          <Link
            href="/store/wishlist"
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-colors hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800"
            title="Wishlist"
          >
            <Heart size={18} className="sm:w-5 sm:h-5 text-slate-700 dark:text-slate-300" />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-[11px] font-bold text-slate-950">
              0
            </span>
          </Link>

          {/* Cart */}
          <Link
            href="/store/cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-colors hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800"
            title="Shopping Cart"
          >
            <ShoppingCart size={18} className="sm:w-5 sm:h-5 text-slate-700 dark:text-slate-300" />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-400 text-[11px] font-bold text-slate-950">
              0
            </span>
          </Link>

          {/* User Account */}
          <div className="block relative">
            <button
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-colors hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800"
              title="Account"
            >
              <User size={18} className="sm:w-5 sm:h-5 text-slate-700 dark:text-slate-300" />
            </button>

            {/* User Dropdown Menu */}
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-950/10 dark:border-slate-800 dark:bg-slate-900">
                {isLoggedIn ? (
                  <>
                    <div className="px-3 py-2">
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Signed in as</p>
                      <p className="mt-1 text-sm font-semibold text-slate-950 dark:text-white">{userName}</p>
                    </div>
                    <div className="my-2 h-px bg-slate-200 dark:bg-slate-800" />
                    <Link href="/dashboard/account" className="block rounded-xl px-4 py-3 text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">
                      My Account
                    </Link>
                    <Link href="/dashboard/orders" className="block rounded-xl px-4 py-3 text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">
                      Orders
                    </Link>
                    <Link href="/dashboard/settings" className="block rounded-xl px-4 py-3 text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">
                      Settings
                    </Link>
                    {userRole === 'admin' && (
                      <Link href="/admin" className="block rounded-xl px-4 py-3 font-semibold text-primary hover:bg-slate-100 dark:hover:bg-slate-800">
                        Admin Panel
                      </Link>
                    )}
                    <div className="my-2 h-px bg-slate-200 dark:bg-slate-800" />
                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center gap-2 rounded-xl px-4 py-3 text-left text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                    >
                      <LogOut size={16} />
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/auth/login" className="block rounded-xl px-4 py-3 text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">
                      Login
                    </Link>
                    <Link href="/auth/register" className="block rounded-xl px-4 py-3 text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">
                      Register
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 transition-colors hover:bg-slate-200 md:hidden dark:bg-slate-900 dark:hover:bg-slate-800"
            title="Toggle menu"
          >
            {isOpen ? (
              <X size={18} className="text-slate-700 dark:text-slate-300" />
            ) : (
              <Menu size={18} className="text-slate-700 dark:text-slate-300" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white/95 md:hidden dark:border-slate-800 dark:bg-slate-950/95">
          <div className="space-y-4 px-4 py-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-xl px-3 py-3 font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="space-y-2 border-t border-slate-200 pt-4 dark:border-slate-800">
              {isLoggedIn ? (
                <>
                  <Link href="/dashboard/account" className="block rounded-xl px-3 py-3 text-slate-700 dark:text-slate-300">
                    My Account
                  </Link>
                  <Link href="/dashboard/orders" className="block rounded-xl px-3 py-3 text-slate-700 dark:text-slate-300">
                    Orders
                  </Link>
                  {userRole === 'admin' && (
                    <Link href="/admin" className="block rounded-xl px-3 py-3 font-semibold text-primary">
                      Admin Panel
                    </Link>
                  )}
                  <button
                    onClick={handleLogout}
                    className="w-full rounded-xl px-3 py-3 text-left text-slate-700 dark:text-slate-300"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href="/auth/login" className="block rounded-xl px-3 py-3 text-slate-700 dark:text-slate-300">
                    Login
                  </Link>
                  <Link href="/auth/register" className="block rounded-xl px-3 py-3 text-slate-700 dark:text-slate-300">
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
