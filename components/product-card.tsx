import Link from 'next/link'
import Image from 'next/image'
import { Star, ShoppingCart, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  rating: number
  reviews: number
  discount?: number
  onAddToCart?: () => void
  onAddToWishlist?: () => void
}

export function ProductCard({
  id,
  name,
  price,
  image,
  rating,
  reviews,
  discount,
  onAddToCart,
  onAddToWishlist,
}: ProductCardProps) {
  const discountedPrice = discount ? price * (1 - discount / 100) : price

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_45px_-28px_rgba(15,23,42,0.55)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgba(15,23,42,0.7)] dark:border-slate-800 dark:bg-slate-900">
      {/* Product Image */}
      <Link href={`/store/products/${id}`} className="relative block aspect-[4/3] overflow-hidden bg-slate-50 p-5 dark:bg-slate-800 sm:p-6">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain object-center transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 25vw"
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-slate-950/5 to-transparent" />
        {discount && (
          <div className="absolute left-3 top-3 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-slate-950 shadow-lg shadow-amber-400/30">
            -{discount}%
          </div>
        )}
        <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900 backdrop-blur dark:bg-slate-900/80 dark:text-white">
          Featured
        </div>
      </Link>

      {/* Product Info */}
      <div className="space-y-4 p-4 sm:p-5">
        {/* Product Name */}
        <Link href={`/store/products/${id}`} className="hover:text-primary transition-colors">
          <h3 className="line-clamp-2 text-base font-semibold text-slate-900 transition-colors dark:text-white">
            {name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={15}
                className={i < Math.floor(rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}
              />
            ))}
          </div>
          <span className="ml-1 text-xs text-slate-500 dark:text-slate-400">
            {rating} ({reviews})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold text-slate-950 dark:text-white">₹{discountedPrice.toLocaleString('en-IN')}</span>
          {discount && (
            <span className="text-sm text-slate-500 line-through dark:text-slate-400">
              ₹{price.toLocaleString('en-IN')}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2 pt-1">
          <Button
            onClick={onAddToCart}
            className="flex-1 bg-slate-950 text-sm text-white hover:bg-slate-800 dark:bg-primary dark:hover:bg-primary/90"
          >
            <ShoppingCart size={16} className="mr-1" />
            Add
          </Button>
          <Button
            onClick={onAddToWishlist}
            variant="outline"
            size="sm"
            className="px-3"
          >
            <Heart size={16} />
          </Button>
        </div>
      </div>
    </article>
  )
}
