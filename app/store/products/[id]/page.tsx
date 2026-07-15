import { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/product-card'
import Link from 'next/link'
import Image from 'next/image'
import { Star, ShoppingCart, Heart, Truck, Shield, RotateCcw } from 'lucide-react'
import { SAMPLE_PRODUCTS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Product Details - Star Tech Scales',
  description: 'High-precision weighing scale with detailed specifications and features',
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = SAMPLE_PRODUCTS.find((item) => item.id.toString() === params.id) ?? SAMPLE_PRODUCTS[0]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />

      {/* Breadcrumb */}
      <section className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            <Link href="/store/products" className="hover:text-primary">Products</Link>
            <span>/</span>
            <span className="text-slate-900 dark:text-white font-semibold">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Detail Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-12">
            {/* Product Image */}
            <div className="relative overflow-hidden rounded-3xl bg-slate-50 p-6 shadow-[0_24px_60px_-35px_rgba(15,23,42,0.8)] dark:bg-slate-900 sm:p-8 aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain object-center p-6 sm:p-8"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
                priority
              />
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <div className="flex gap-1">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} size={16} className="sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mb-4 sm:mb-6">
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2">₹{product.price.toLocaleString('en-IN')}</p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">In stock • Free shipping</p>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-6 sm:mb-8">
                {product.description}
              </p>

              {/* Specifications */}
              <div className="bg-slate-50 dark:bg-slate-800 p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
                <h3 className="font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 text-sm sm:text-base">Key Specifications</h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Maximum Weight</p>
                    <p className="font-semibold text-slate-900 dark:text-white">Industrial Grade</p>
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Accuracy</p>
                    <p className="font-semibold text-slate-900 dark:text-white">High Precision</p>
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Display</p>
                    <p className="font-semibold text-slate-900 dark:text-white">Digital</p>
                  </div>
                  <div>
                    <p className="text-slate-600 dark:text-slate-400">Warranty</p>
                    <p className="font-semibold text-slate-900 dark:text-white">2 Years</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                <Button className="flex-1 bg-primary hover:bg-primary/90 text-white text-base h-11 sm:h-12">
                  <ShoppingCart size={18} className="mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" className="flex-1 text-base h-11 sm:h-12">
                  <Heart size={18} className="mr-2" />
                  Wishlist
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <Truck size={20} className="text-primary flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-400">Free shipping on orders over $100</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <Shield size={20} className="text-primary flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-400">2-year warranty included</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm">
                  <RotateCcw size={20} className="text-primary flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-400">30-day money-back guarantee</span>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="border-t border-slate-200 dark:border-slate-800 pt-12 md:pt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 sm:mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {SAMPLE_PRODUCTS.slice(0, 4).map((p) => (
                <ProductCard
                  key={p.id}
                  id={p.id.toString()}
                  name={p.name}
                  price={p.price}
                  image={p.image}
                  rating={p.rating}
                  reviews={p.reviews}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
