import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { StoreCategory } from '@/lib/category-store';

interface CategoriesGridProps {
  displayCount?: number;
  variant?: "compact" | "full";
  showViewAll?: boolean;
  categories: StoreCategory[];
}

export function CategoriesGrid({
  displayCount = 6,
  variant = "compact",
  showViewAll = true,
  categories,
}: CategoriesGridProps) {
  const categoriesToShow = categories.slice(0, displayCount);

  return (
    <div className="space-y-10">
      <div
        className={`grid gap-5 sm:gap-6 lg:gap-8 ${
          variant === "full"
            ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {categoriesToShow.map((category) => (
          <Link
            key={category.id}
            href={`/store/products?category=${category.slug}`}
            className="group h-full"
          >
            <article className="relative overflow-hidden rounded-[28px] border border-slate-200/70 bg-white shadow-[0_20px_60px_-28px_rgba(15,23,42,.28)] transition-all duration-500 hover:-translate-y-2 hover:border-amber-400 hover:shadow-[0_30px_80px_-22px_rgba(15,23,42,.35)] dark:border-slate-800 dark:bg-slate-900">
              {/* Product Image */}
<div
  className={`relative isolate w-full overflow-hidden ${
    variant === "full" ? "aspect-[16/10]" : "aspect-[4/3]"
  }`}
>
  <Image
    src={category.imageUrl || "/placeholder.jpg"}
    alt={category.name}
    fill
    className="object-contain p-8 transition-transform duration-700 group-hover:scale-110"
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  />

  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

  <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-xl shadow-xl backdrop-blur">
    {category.icon}
  </div>
</div>

              {/* Content */}

              <div className="space-y-4 p-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {category.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {category.description}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-slate-200 pt-4 dark:border-slate-800">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Premium Products
                  </span>

                  <span className="flex items-center gap-2 text-sm font-semibold text-amber-600 transition-all duration-300 group-hover:gap-3">
                    Explore
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {showViewAll && displayCount < categories.length && (
        <div className="text-center">
          <Link
            href="/store/categories"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-all hover:border-amber-400 hover:bg-amber-50 hover:text-amber-700 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-amber-500 dark:hover:bg-slate-800"
          >
            View All Categories
            <ArrowRight size={18} />
          </Link>
        </div>
      )}
    </div>
  );
}
