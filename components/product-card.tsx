"use client";
import Link from "next/link";
import Image from "next/image";
import { Star, ShoppingCart, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  discount?: number;
  onAddToCart?: () => void;
  onAddToWishlist?: () => void;
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
  const discountedPrice = discount
    ? price * (1 - discount / 100)
    : price;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_55px_-25px_rgba(15,23,42,.18)] transition-all duration-500 hover:-translate-y-2 hover:border-amber-400 hover:shadow-[0_35px_80px_-20px_rgba(15,23,42,.28)] dark:border-slate-800 dark:bg-slate-900">

     

      {/* Product Image */}

<Link
  href={`/store/products/${id}`}
  className="relative block overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:to-slate-800"
>
  <div className="relative aspect-[4/3]">
    <Image
      src={image}
      alt={name}
      fill
      className="object-contain p-8 transition-transform duration-700 group-hover:scale-110"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      unoptimized
    />
  </div>

  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/15 via-transparent to-transparent" />

  {discount && (
    <div className="absolute left-4 top-4 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-slate-950 shadow-lg">
      SAVE {discount}%
    </div>
  )}

  <div className="absolute right-4 top-4">
    <button
      onClick={(event) => {
        event.preventDefault()
        onAddToWishlist?.()
      }}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur transition hover:bg-white"
      aria-label="Add to wishlist"
    >
      <Heart size={18} />
    </button>
  </div>
</Link>

      {/* Content */}

      <div className="flex flex-1 flex-col p-6">

        <div className="flex items-center gap-1">

          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={15}
              className={
                i < Math.floor(rating)
                  ? "fill-amber-400 text-amber-400"
                  : "text-slate-300"
              }
            />
          ))}

          <span className="ml-2 text-sm text-slate-500">
            {rating} ({reviews})
          </span>

        </div>

        <Link href={`/store/products/${id}`}>

          <h3 className="mt-4 line-clamp-2 text-xl font-bold leading-snug text-slate-900 transition group-hover:text-amber-600 dark:text-white">
            {name}
          </h3>

        </Link>

        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
          High precision industrial weighing equipment built for long-term
          reliability and accurate performance.
        </p>

        <div className="mt-6 flex items-end justify-between">

          <div>

            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Starting From
            </p>

            <div className="mt-1 flex items-center gap-2">

              <span className="text-2xl font-black text-slate-900 dark:text-white">
                ₹{discountedPrice.toLocaleString("en-IN")}
              </span>

              {discount && (
                <span className="text-sm text-slate-400 line-through">
                  ₹{price.toLocaleString("en-IN")}
                </span>
              )}

            </div>

          </div>

        </div>

        <div className="mt-6 flex gap-3">

          <Button
            onClick={onAddToCart}
            className="flex-1 rounded-full bg-slate-950 text-white hover:bg-slate-800"
          >
            <ShoppingCart size={18} className="mr-2" />
            Add to Cart
          </Button>

          <Link href={`/store/products/${id}`}>

            <Button
              variant="outline"
              className="rounded-full border-slate-300 px-4 hover:border-amber-400 hover:bg-amber-50"
            >
              <ArrowRight size={18} />
            </Button>

          </Link>

        </div>

      </div>

    </article>
  );
}