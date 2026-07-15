import Image from 'next/image'
import Link from 'next/link'
import { CATEGORIES } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'

interface CategoriesGridProps {
  displayCount?: number
  variant?: 'compact' | 'full'
  showViewAll?: boolean
}

export function CategoriesGrid({
  displayCount = 7,
  variant = 'compact',
  showViewAll = true,
}: CategoriesGridProps) {
  const categoriesToShow = CATEGORIES.slice(0, displayCount)

  return (
    <div className="space-y-6">
      <div className={`grid gap-3 sm:gap-4 md:gap-6 ${
        variant === 'full'
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
      }`}>
        {categoriesToShow.map((category) => (
          <Link
            key={category.id}
            href={`/store/products?category=${category.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="group"
          >
            <div className={`h-full overflow-hidden rounded-3xl border-2 transition-all duration-300 cursor-pointer ${
              variant === 'full'
                ? 'border-slate-200 bg-white shadow-[0_24px_50px_-28px_rgba(15,23,42,0.75)] hover:border-primary hover:shadow-[0_28px_60px_-26px_rgba(15,23,42,0.9)] dark:border-slate-800 dark:bg-slate-950'
                : 'border-slate-200 bg-white shadow-[0_18px_40px_-26px_rgba(15,23,42,0.45)] hover:border-primary hover:shadow-[0_22px_48px_-22px_rgba(15,23,42,0.7)] dark:border-slate-800 dark:bg-slate-900'
            }`}>
              <div className={`relative ${variant === 'full' ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
                <Image
                  src={category.image || '/placeholder.jpg'}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/82 via-slate-950/28 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-950 backdrop-blur dark:bg-slate-950/80 dark:text-white">
                  {category.icon}
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="max-w-[85%]">
                      <h3 className={`font-black leading-tight text-white ${
                        variant === 'full' ? 'text-lg sm:text-xl md:text-2xl' : 'text-base sm:text-lg'
                      }`}>
                        {category.name}
                      </h3>
                      <p className={`mt-1 text-white/75 ${variant === 'full' ? 'text-xs sm:text-sm' : 'text-[11px] sm:text-xs'}`}>
                        {category.description}
                      </p>
                    </div>
                    {variant === 'full' && (
                      <ArrowRight className="mt-1 h-5 w-5 flex-shrink-0 text-white/70 transition-all group-hover:translate-x-1 group-hover:text-white" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {showViewAll && displayCount < CATEGORIES.length && (
        <div className="text-center">
          <Link href="/store/categories" className="inline-block text-primary hover:text-primary/80 font-semibold text-sm sm:text-base">
            View All Categories →
          </Link>
        </div>
      )}
    </div>
  )
}
