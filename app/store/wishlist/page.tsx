import { Metadata } from 'next'
import Link from 'next/link'
import { ProductCard } from '@/components/product-card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import type { ComponentProps } from 'react'

export const metadata: Metadata = {
  title: 'Wishlist',
  description: 'View your saved favorite products',
}

export default function WishlistPage() {
  // Wishlist records will be loaded from the backend once the wishlist API is added.
  // Keeping this typed prevents the empty initial state from becoming implicit `any`.
  const wishlistItems: ComponentProps<typeof ProductCard>[] = []

  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
      <div className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 dark:text-white font-medium">Wishlist</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">My Wishlist</h1>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">❤️</div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Your wishlist is empty</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Start adding items to your wishlist
            </p>
            <Link href="/store/products">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                Browse Products <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
