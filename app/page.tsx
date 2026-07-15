import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { CategoriesGrid } from '@/components/categories-grid'
import { Button } from '@/components/ui/button'
import { SERVICES, SAMPLE_PRODUCTS, TESTIMONIALS } from '@/lib/constants'
import { ArrowRight, ShieldCheck, Sparkles, Star, StarCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Home - Premium Industrial Weighing Scales',
  description:
    'Explore our range of high-precision industrial weighing scales, laboratory instruments, and calibration services. Trusted by leading industries.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f7f4ef] text-slate-950 dark:bg-slate-950 dark:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(234,88,12,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(37,99,235,0.14),_transparent_26%),linear-gradient(180deg,_#f8f5f0_0%,_#ffffff_52%,_#f4f7fb_100%)] py-12 sm:py-16 md:py-10 dark:bg-[radial-gradient(circle_at_top_left,_rgba(234,88,12,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(37,99,235,0.16),_transparent_26%),linear-gradient(180deg,_#020617_0%,_#030712_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-70 dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]" />
        <div className="absolute inset-x-0 top-0 mx-auto h-80 w-80 rounded-full bg-amber-400/15 blur-3xl" />
        <div className="absolute left-[-8rem] top-32 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-[-8rem] bottom-10 h-72 w-72 rounded-full bg-slate-900/10 blur-3xl dark:bg-white/10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-200">
                <Sparkles size={16} className="text-amber-500" />
                Industrial weighing solutions built for precision
              </div>
              <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-950 text-balance sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
                Precision scales with a premium buying experience.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg md:text-xl dark:text-slate-300 text-balance">
                Explore verified industrial, laboratory, and automation solutions with a modern storefront, seamless checkout, and expert support.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/store/products" className="w-full sm:w-auto">
                  <Button className="h-12 w-full rounded-full bg-slate-950 px-7 text-base font-semibold text-white shadow-lg shadow-slate-950/20 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100">
                    Shop Products <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
                <Link href="/store/contact" className="w-full sm:w-auto">
                  <Button variant="outline" className="h-12 w-full rounded-full border-slate-950 bg-slate-950 px-7 text-base font-semibold text-white shadow-sm hover:bg-slate-800 hover:text-white dark:border-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 dark:hover:text-slate-950">
                    Talk to an Expert
                  </Button>
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-5">
                <div className="rounded-2xl border border-white/70 bg-white/85 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
                  <p className="text-2xl font-black text-slate-950 dark:text-white">25+</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">Years</p>
                </div>
                <div className="rounded-2xl border border-white/70 bg-white/85 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
                  <p className="text-2xl font-black text-slate-950 dark:text-white">5K+</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">Customers</p>
                </div>
                <div className="rounded-2xl border border-white/70 bg-white/85 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
                  <p className="text-2xl font-black text-slate-950 dark:text-white">100%</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">Authentic</p>
                </div>
              </div>
            </div>

            <div className="relative hidden sm:block">
              <div className="absolute -left-6 top-5 rounded-2xl bg-white/90 px-4 py-3 shadow-lg backdrop-blur dark:bg-slate-900/85">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-emerald-500" size={20} />
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Trusted Quality</p>
                    <p className="text-sm font-semibold text-slate-950 dark:text-white">Calibration ready</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute ml-30 -left-4 bottom-20 rounded-2xl bg-white/90 px-4 py-3 text-red-800 shadow-2xl shadow-slate-950/20 dark:bg-white dark:text-slate-950">
              <div className="flex items-center gap-3">
              <StarCheck className="text-emerald-500" size={20} />
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-black/60 dark:text-slate-500">Featured model</p>
                <p className="text-sm font-semibold">Smart industrial platform</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white/75 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-4">
              Our Categories
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Explore our comprehensive range of precision weighing instruments for every application
            </p>
          </div>

          <CategoriesGrid displayCount={6} variant="compact" showViewAll={true} />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-8 mb-8 sm:mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-4">Featured Products</h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400">
                Check out our bestselling precision scales
              </p>
            </div>
            <Link href="/store/products" className="w-full sm:w-auto">
              <Button variant="link" className="w-full sm:w-auto">View All <ArrowRight size={16} className="ml-2" /></Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {SAMPLE_PRODUCTS.slice(0, 4).map((product) => (
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
        </div>
      </section>

      {/* Location Map */}
      <section className="py-12 sm:py-16 md:py-20 bg-white/75 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
                Visit Our Location
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-xl mb-6">
                Find Star Tech Scales easily in Chembur (W), Mumbai. Reach out for product demonstrations, service requests, and expert consultations.
              </p>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-2">Address</p>
                <p className="text-base font-semibold text-slate-950 dark:text-white">
                  {"Shop No.10, Building No.9, bus stop, PL Lokhande Marg, behind Assisi Nagar, Chembur (W), ACC Nagar, Chedda Nagar, Mumbai, Maharashtra 400089"}
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_60px_-30px_rgba(15,23,42,0.65)] dark:border-slate-800 dark:bg-slate-950">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193.95453822189592!2d72.91230745713519!3d19.060859676867274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7b3e2c92119%3A0x84fa2dc0c2d16092!2sStar-tech%20weighing%20scales!5e1!3m2!1sen!2sin!4v1784116075767!5m2!1sen!2sin"
                width="100%"
                height="480"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Star Tech Scales Location"
                className="h-[420px] w-full md:h-[480px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-4">Our Services</h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Comprehensive support and services for all your weighing needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="p-4 sm:p-5 md:p-6 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{service.icon}</div>
                <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-slate-900 dark:bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">What Our Customers Say</h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-2xl mx-auto">
              Trusted by leading industries worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className="p-4 sm:p-5 md:p-6 rounded-lg bg-slate-800 dark:bg-slate-800 border border-slate-700"
              >
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 mb-3 sm:mb-4 italic text-xs sm:text-sm md:text-base">{testimonial.testimonial}</p>
                <div>
                  <p className="font-semibold text-white text-xs sm:text-sm md:text-base">{testimonial.name}</p>
                  <p className="text-slate-400 text-xs sm:text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[linear-gradient(135deg,#0f172a_0%,#111827_45%,#ea580c_100%)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Ready to Transform Your Weighing Process?</h2>
          <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Get in touch with our experts today for a consultation
          </p>
          <Link href="/store/contact" className="inline-block w-full sm:w-auto px-4">
            <Button className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-950 text-base sm:text-lg h-11 sm:h-12 px-6 sm:px-8 font-semibold">
              Contact Us Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
