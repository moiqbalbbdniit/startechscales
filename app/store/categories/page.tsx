import { Metadata } from 'next'
import Link from 'next/link'
import { CategoriesGrid } from '@/components/categories-grid'
import { ArrowRight } from 'lucide-react'
import { getCategories } from '@/lib/category-store'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Categories',
  description: 'Browse our comprehensive range of weighing scale categories and find the perfect solution for your needs.',
}

export default async function CategoriesPage() {
  const categories = await getCategories()
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-black">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-accent py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
            Product Categories
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/90">
            Explore our complete range of precision weighing solutions
          </p>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
        <CategoriesGrid displayCount={categories.length} variant="full" showViewAll={false} categories={categories} />
      </div>

      {/* Featured Benefits */}
      <section className="py-12 sm:py-16 md:py-20 bg-white/80 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
              Why Choose Our Categories?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Each category is carefully curated to meet specific industry requirements
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: 'Precision Engineered',
                description: 'Every scale is designed for maximum accuracy and reliability',
              },
              {
                title: 'Industry Certified',
                description: 'All products meet international standards and certifications',
              },
              {
                title: 'Expert Support',
                description: '24/7 technical support and maintenance services available',
              },
              {
                title: 'Competitive Pricing',
                description: 'Best value for money with flexible payment options',
              },
              {
                title: 'Wide Range',
                description: 'Solutions for every industry and application requirement',
              },
              {
                title: 'Fast Delivery',
                description: 'Quick shipping and installation across India',
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_40px_-30px_rgba(15,23,42,0.55)] transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_24px_50px_-28px_rgba(15,23,42,0.75)] dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="p-4 sm:p-6">
                <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  {benefit.description}
                </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[linear-gradient(135deg,#0f172a_0%,#111827_45%,#ea580c_100%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to Find Your Perfect Scale?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Browse our categories and discover the ideal weighing solution for your application
          </p>
          <Link href="/store/products">
            <button className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-950 text-base sm:text-lg h-11 sm:h-12 px-6 sm:px-8 font-semibold rounded-full transition-colors inline-block">
              Shop Now
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}
