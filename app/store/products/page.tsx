import { Metadata } from 'next'
import Link from 'next/link'
import { ProductCard } from '@/components/product-card'
import { Button } from '@/components/ui/button'
import { SAMPLE_PRODUCTS, CATEGORIES, SORT_OPTIONS, PRICE_RANGES } from '@/lib/constants'
import { Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse our complete range of industrial weighing scales and precision instruments.',
}

export default function ProductsPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Breadcrumb */}
      <div className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 md:py-4">
          <nav className="flex items-center gap-2 text-xs sm:text-sm">
            <Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
              Home
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 dark:text-white font-medium">Products</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-8 sm:py-12 md:py-16 border-b border-slate-200 dark:border-slate-700 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3 md:mb-4">Our Products</h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Explore our comprehensive range of precision weighing scales for every industry and application.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Sidebar - Filters - Hidden on mobile */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="space-y-4 sm:space-y-6">
              {/* Search */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-2 sm:mb-3">
                  Search Products
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-3 sm:px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary text-xs sm:text-sm"
                  />
                  <Search size={16} className="sm:w-5 sm:h-5 absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>
              </div>

              {/* Categories Filter */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-2 sm:mb-3">
                  Categories
                </label>
                <div className="space-y-2">
                  {CATEGORIES.slice(0, 5).map((category) => (
                    <label key={category.id} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-primary accent-primary"
                      />
                      <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">{category.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-2 sm:mb-3">
                  Price Range
                </label>
                <div className="space-y-2">
                  {PRICE_RANGES.map((range) => (
                    <label key={range.label} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        className="w-4 h-4 rounded-full border-slate-300 dark:border-slate-600 text-primary accent-primary"
                      />
                      <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-2 sm:mb-3">
                  Rating
                </label>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-primary accent-primary"
                      />
                      <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        {rating} Star{rating > 1 ? 's' : ''} & Up
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Reset Filters */}
              <Button variant="outline" className="w-full text-xs sm:text-sm">
                Reset Filters
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8 pb-4 border-b border-slate-200 dark:border-slate-700">
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                Showing <span className="font-semibold text-slate-900 dark:text-white">{SAMPLE_PRODUCTS.length}</span> products
              </p>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <label htmlFor="sort" className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium whitespace-nowrap">
                  Sort:
                </label>
                <select
                  id="sort"
                  className="flex-1 sm:flex-none px-2 sm:px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary text-xs sm:text-sm"
                >
                  {SORT_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              {SAMPLE_PRODUCTS.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id.toString()}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  rating={product.rating}
                  reviews={product.reviews}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 sm:mt-12 flex justify-center items-center gap-1 sm:gap-2 flex-wrap">
              <Button variant="outline" disabled className="text-xs sm:text-sm h-9 sm:h-10 px-2 sm:px-4">
                Previous
              </Button>
              {[1, 2, 3, 4].map((page) => (
                <Button
                  key={page}
                  variant={page === 1 ? 'default' : 'outline'}
                  className={`text-xs sm:text-sm h-9 sm:h-10 px-2 sm:px-4 ${page === 1 ? 'bg-primary text-white' : ''}`}
                >
                  {page}
                </Button>
              ))}
              <Button variant="outline" className="text-xs sm:text-sm h-9 sm:h-10 px-2 sm:px-4">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
