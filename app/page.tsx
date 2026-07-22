import { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/faq-accordion";
import { FAQ } from "@/lib/constants";

import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProductCard } from "@/components/product-card";
import { CategoriesGrid } from "@/components/categories-grid";
import { Button } from "@/components/ui/button";
import { SERVICES, SAMPLE_PRODUCTS, TESTIMONIALS } from "@/lib/constants";
import { getCategories } from "@/lib/category-store";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Star,
  StarCheck,
} from "lucide-react";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Home - Premium Industrial Weighing Scales",
  description:
    "Explore our range of high-precision industrial weighing scales, laboratory instruments, and calibration services. Trusted by leading industries.",
};

export default async function HomePage() {
  const categories = await getCategories();
  return (
    <div className="min-h-screen bg-[#f7f4ef] text-slate-950 dark:bg-slate-950 dark:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(234,88,12,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(37,99,235,0.14),_transparent_26%),linear-gradient(180deg,_#f8f5f0_0%,_#ffffff_52%,_#f4f7fb_100%)] pb-8 sm:pb-12 lg:pb-16 dark:bg-[radial-gradient(circle_at_top_left,_rgba(234,88,12,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(37,99,235,0.16),_transparent_26%),linear-gradient(180deg,_#020617_0%,_#030712_100%)]">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-70 dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]" />
        <div className="absolute inset-x-0 top-0 mx-auto h-80 w-80 rounded-full bg-amber-400/15 blur-3xl" />
        <div className="absolute left-[-8rem] top-32 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-[-8rem] bottom-10 h-72 w-72 rounded-full bg-slate-900/10 blur-3xl dark:bg-white/10" />

       {/* Premium Infinite Marquee */}
<div className="relative z-20 w-full overflow-hidden border-y border-amber-500/10 bg-white/40 py-3.5 shadow-sm backdrop-blur-md dark:border-amber-500/10 dark:bg-slate-950/40">
  <div className="marquee-wrapper">
    <div className="marquee-track">
      {/* First copy */}
      <div className="marquee-group">
        {categories.map((category) => (
          <div
            key={`first-${category.id}`}
            className="group flex shrink-0 cursor-pointer items-center gap-2.5"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md dark:bg-slate-900 dark:shadow-slate-900/50">
              <span className="text-sm">{category.icon}</span>
            </div>

            <span className="text-sm font-semibold tracking-wide text-slate-700 transition-colors group-hover:text-amber-600 dark:text-slate-300 dark:group-hover:text-amber-500">
              {category.name}
            </span>

            <span className="mx-5 text-slate-300 dark:text-slate-700/80">
              •
            </span>
          </div>
        ))}
      </div>

      {/* Exact duplicate for seamless loop */}
      <div className="marquee-group" aria-hidden="true">
        {categories.map((category) => (
          <div
            key={`second-${category.id}`}
            className="group flex shrink-0 cursor-pointer items-center gap-2.5"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white shadow-sm dark:bg-slate-900">
              <span className="text-sm">{category.icon}</span>
            </div>

            <span className="text-sm font-semibold tracking-wide text-slate-700 dark:text-slate-300">
              {category.name}
            </span>

            <span className="mx-5 text-slate-300 dark:text-slate-700/80">
              •
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>

  <style jsx>{`
    .marquee-wrapper {
      width: 100%;
      overflow: hidden;
    }

    .marquee-track {
      display: flex;
      width: max-content;
      animation: marquee 30s linear infinite;
      will-change: transform;
    }

    .marquee-group {
      display: flex;
      flex-shrink: 0;
      align-items: center;
    }

    .marquee-track:hover {
      animation-play-state: paused;
    }

    @keyframes marquee {
      from {
        transform: translateX(0);
      }

      to {
        transform: translateX(-50%);
      }
    }

    @media (max-width: 640px) {
      .marquee-track {
        animation-duration: 22s;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .marquee-track {
        animation-play-state: paused;
      }
    }
  `}</style>
</div>

        {/* Main Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 sm:pt-12 lg:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center min-h-[auto] md:min-h-[650px] lg:min-h-[720px]">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-200">
                <Sparkles size={16} className="text-amber-500" />
                Industrial weighing solutions built for precision
              </div>

              <h1 className="mt-5 max-w-2xl font-black tracking-tight text-slate-950 dark:text-white text-[2.1rem] leading-[1.08] sm:text-[2.8rem] sm:leading-[1.05] md:text-5xl lg:text-6xl xl:text-7xl">
                Industrial, Laboratory & Commercial
                <span className="block text-amber-600">Weighing Scales</span>
                for Every Business
              </h1>

              <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600 sm:text-base lg:text-lg dark:text-slate-300">
                Industrial, Laboratory, Platform, Retail and Weighbridge
                weighing solutions with installation, calibration and AMC
                support.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link href="/store/products" className="w-full sm:w-auto">
                  <Button className="h-11 w-full text-sm sm:h-12 lg:h-14 sm:text-base px-6 rounded-full bg-slate-950 text-white shadow-lg shadow-slate-950/20 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100">
                    Browse 500+ Products{" "}
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
                <Link href="/store/contact" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="h-11 text-sm sm:h-12 lg:h-14 w-full rounded-full border-slate-950 bg-slate-950 px-7 text-base font-semibold text-white shadow-sm hover:bg-slate-800 hover:text-white dark:border-white dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 dark:hover:text-slate-950"
                  >
                    Request a Free Quote
                  </Button>
                </Link>
              </div>

              {/* Mobile Image Grid */}
              <div className="mt-8 lg:hidden">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white p-3 shadow-xl">
                    <Image
                      src="/productimages/product1.jfif"
                      alt="Platform Scale"
                      width={200}
                      height={160}
                      className="h-28 sm:h-36 w-full object-contain"
                    />
                    <p className="mt-2 text-sm font-semibold">Platform Scale</p>
                  </div>
                  <div className="rounded-2xl bg-white p-3 shadow-xl">
                    <Image
                      src="/productimages/product2.jfif"
                      alt="Lab Scale"
                      width={200}
                      height={160}
                      className="h-28 sm:h-36 w-full object-contain"
                    />
                    <p className="mt-2 text-sm font-semibold">Hanging Scale</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4">
                <div className="rounded-2xl border border-white/90 bg-white/90 p-3 sm:p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
                  <p className="text-lg sm:text-xl lg:text-2xl font-black text-slate-950 dark:text-white">
                    25+
                  </p>
                  <p className="mt-1 text-[10px] sm:text-xs tracking-[0.2em] uppercase text-slate-950">
                    Years
                  </p>
                </div>
                <div className="rounded-2xl border border-white/70 bg-white/85 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
                  <p className="text-lg sm:text-xl lg:text-2xl font-black text-slate-950 dark:text-white">
                    5000+
                  </p>
                  <p className="mt-1 text-[10px] sm:text-xs tracking-[0.2em] uppercase text-slate-950">
                    Customers
                  </p>
                </div>
                <div className="rounded-2xl border border-white/70 bg-white/85 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
                  <p className="text-lg sm:text-xl lg:text-2xl font-black text-slate-950 dark:text-white">
                    100%
                  </p>
                  <p className="mt-1 text-[10px] sm:text-xs tracking-[0.2em] uppercase text-slate-950">
                    Authentic
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Image Grid */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-3xl bg-white p-5 shadow-2xl transition-transform hover:-translate-y-2">
                  <Image
                    src="/productimages/product1.jfif"
                    alt="Industrial Platform Scale"
                    width={260}
                    height={220}
                    className="h-48 w-full object-contain"
                  />
                  <h3 className="mt-4 text-lg font-bold">Platform Scale</h3>
                  <p className="text-sm text-slate-500">Industrial Weighing</p>
                </div>
                <div className="mt-12 rounded-3xl bg-white p-5 shadow-2xl transition-transform hover:-translate-y-2">
                  <Image
                    src="/productimages/product2.jfif"
                    alt="Hanging Scale"
                    width={260}
                    height={220}
                    className="h-48 w-full object-contain"
                  />
                  <h3 className="mt-4 text-lg font-bold">Hanging Scale</h3>
                  <p className="text-sm text-slate-500">Suspension Weighing</p>
                </div>
                <div className="rounded-3xl bg-white p-5 shadow-2xl transition-transform hover:-translate-y-2">
                  <Image
                    src="/productimages/product3.jfif"
                    alt="Load Cell"
                    width={260}
                    height={220}
                    className="h-48 w-full object-contain"
                  />
                  <h3 className="mt-4 text-lg font-bold">Lab Scale</h3>
                  <p className="text-sm text-slate-500">
                    Precision Measurement
                  </p>
                </div>
                <div className="mt-12 rounded-3xl bg-white p-5 shadow-2xl transition-transform hover:-translate-y-2">
                  <Image
                    src="/productimages/product4.png"
                    alt="Weigh Bridge"
                    width={260}
                    height={220}
                    className="h-48 w-full object-contain"
                  />
                  <h3 className="mt-4 text-lg font-bold">Bench Scale</h3>
                  <p className="text-sm text-slate-500">Desktop Weighing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Premium Categories */}
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        {/* Background */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,.15),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,.12),transparent_30%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center rounded-full border border-amber-300 bg-amber-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/30">
              PRODUCT RANGE
            </span>

            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              Find the Perfect
              <span className="block text-amber-500">Weighing Solution</span>
            </h2>

            <p className="mt-5 text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-400">
              From laboratory balances to industrial weighbridges, explore our
              complete range of certified weighing equipment designed for every
              business and industry.
            </p>
          </div>

          <div className="mt-14">
            <CategoriesGrid
              displayCount={6}
              variant="compact"
              showViewAll={true}
              categories={categories}
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="relative overflow-hidden bg-slate-50 py-14 sm:py-16 lg:py-20 dark:bg-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(234,88,12,0.08),transparent_30%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-14">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-orange-600">
                Best Selling Products
              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
                Trusted Weighing Solutions
                <br />
                For Every Industry
              </h2>

              <p className="mt-5 text-base sm:text-lg leading-8 text-slate-600 dark:text-slate-400">
                Discover our most popular industrial, laboratory and commercial
                weighing equipment engineered for maximum precision, durability
                and long service life.
              </p>
            </div>

            <Link href="/store/products">
              <Button className="rounded-full h-12 px-7 bg-slate-950 hover:bg-slate-800 text-white">
                View Complete Catalogue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Products */}

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
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

          {/* Bottom Trust Section */}

          <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-950">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white">
                  500+
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Products Available
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white">
                  25+
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white">
                  5000+
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Happy Customers
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white">
                  24×7
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Technical Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* faq */}
      {/* FAQ Section */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24 dark:bg-slate-950">
        <div className="absolute left-[-10rem] top-20 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute right-[-10rem] bottom-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <div className="mb-4 inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-400">
              Need More Information?
            </div>

            <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
              Find answers to common questions about our weighing scales,
              products, installation, calibration, delivery, and services.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <FAQAccordion items={FAQ.slice(0, 5)} />
          </div>

          <div className="mt-10 text-center sm:mt-14">
            <p className="mb-4 text-sm text-slate-600 sm:text-base dark:text-slate-400">
              Still have questions about the right weighing solution for your
              business?
            </p>

            <Link
              href="/store/faq"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-all hover:border-amber-400 hover:bg-amber-50 hover:text-amber-700 hover:shadow-md dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-amber-500 dark:hover:bg-slate-800"
            >
              View All FAQs
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="relative overflow-hidden bg-slate-50 py-14 sm:py-18 lg:py-24 dark:bg-slate-950">
        {/* Background Decoration */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <div className="mb-4 inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-700 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-400">
              Visit Our Showroom
            </div>

            <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
              Find Us in Mumbai
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base lg:text-lg dark:text-slate-400">
              Visit Star Tech Scales for expert guidance, product
              demonstrations, weighing solutions, and professional service
              support.
            </p>
          </div>

          {/* Main Location Card */}
          <div className="grid overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_80px_-35px_rgba(15,23,42,0.45)] lg:grid-cols-[0.85fr_1.15fr] dark:border-slate-800 dark:bg-slate-900">
            {/* Information Panel */}
            <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
              <div>
                {/* Location Badge */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400 text-2xl shadow-lg shadow-amber-400/20">
                  📍
                </div>

                <h3 className="text-2xl font-black text-slate-950 sm:text-3xl dark:text-white">
                  Star Tech Scales
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400">
                  Your trusted partner for industrial, laboratory, commercial,
                  and precision weighing solutions.
                </p>

                {/* Address */}
                <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600">
                    Our Address
                  </p>

                  <p className="text-sm font-medium leading-6 text-slate-700 sm:text-base dark:text-slate-300">
                    Shop No. 10, Building No. 9, Bus Stop,
                    <br />
                    P.L. Lokhande Marg, Behind Assisi Nagar,
                    <br />
                    Chembur (W), ACC Nagar, Chedda Nagar,
                    <br />
                    Mumbai, Maharashtra – 400089
                  </p>
                </div>
              </div>

              {/* Quick Information */}
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Service Area
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                    Mumbai & Across India
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Consultation
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                    Product & Technical Support
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Link href="/store/contact" className="block sm:inline-block">
                  <Button className="h-12 w-full rounded-full bg-slate-950 px-7 font-semibold text-white shadow-lg shadow-slate-950/20 transition-all hover:-translate-y-0.5 hover:bg-slate-800 sm:w-auto dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100">
                    Contact Our Team
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Map */}
            <div className="relative min-h-[320px] overflow-hidden border-t border-slate-200 lg:min-h-[560px] lg:border-l lg:border-t-0 dark:border-slate-800">
              {/* Map Label */}
              <div className="absolute left-4 top-4 z-10 rounded-full border border-white/60 bg-white/90 px-4 py-2 text-xs font-bold text-slate-900 shadow-lg backdrop-blur sm:left-6 sm:top-6 dark:border-slate-700 dark:bg-slate-900/90 dark:text-white">
                📍 Chembur, Mumbai
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193.95453822189592!2d72.91230745713519!3d19.060859676867274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7b3e2c92119%3A0x84fa2dc0c2d16092!2sStar-tech%20weighing%20scales!5e1!3m2!1sen!2sin!4v1784116075767!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Star Tech Scales Location"
                className="absolute inset-0 h-full min-h-[320px] w-full lg:min-h-[560px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative overflow-hidden bg-white py-14 sm:py-18 lg:py-24 dark:bg-slate-900">
        {/* Background Decoration */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <div className="mb-4 inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-700 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-400">
              Complete Weighing Support
            </div>

            <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl dark:text-white">
              More Than Just Scales
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base lg:text-lg dark:text-slate-400">
              From installation and calibration to automation and ongoing
              maintenance, our experts help keep your weighing operations
              accurate and reliable.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.3)] transition-all duration-500 hover:-translate-y-2 hover:border-amber-400 hover:shadow-[0_30px_80px_-25px_rgba(15,23,42,0.4)] sm:p-7 dark:border-slate-800 dark:bg-slate-950"
              >
                {/* Top Accent */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Service Number */}
                <div className="absolute right-6 top-6 text-5xl font-black text-slate-100 transition-colors duration-300 group-hover:text-amber-100 dark:text-slate-900 dark:group-hover:text-slate-800">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-50 text-3xl shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-amber-400 group-hover:shadow-lg group-hover:shadow-amber-400/25 dark:bg-amber-950/40">
                  {service.icon}
                </div>

                {/* Content */}
                <div className="relative flex flex-1 flex-col">
                  <h3 className="text-xl font-black text-slate-950 transition-colors duration-300 group-hover:text-amber-600 dark:text-white dark:group-hover:text-amber-400">
                    {service.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {service.description}
                  </p>

                  {/* Bottom Link */}
                  <div className="mt-6 flex items-center gap-2 border-t border-slate-200 pt-5 text-sm font-bold text-slate-500 transition-all duration-300 group-hover:gap-3 group-hover:text-amber-600 dark:border-slate-800 dark:text-slate-500 dark:group-hover:text-amber-400">
                    Explore Service
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 text-center sm:mt-14">
            <Link href="/store/services">
              <Button className="h-12 rounded-full bg-slate-950 px-7 font-semibold text-white shadow-lg shadow-slate-950/20 transition-all hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100">
                Explore All Services
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* Testimonials Section */}
      <section className="relative overflow-hidden bg-slate-950 py-14 text-white sm:py-18 lg:py-24 dark:bg-black">
        {/* Background Decoration */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <div className="mb-4 inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-400">
              Trusted By Businesses
            </div>

            <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              What Our Customers Say
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base lg:text-lg">
              Reliable weighing solutions, professional support, and long-term
              partnerships trusted by businesses across industries.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <article
                key={testimonial.id}
                className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6 shadow-[0_25px_70px_-35px_rgba(0,0,0,0.8)] backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/60 hover:shadow-[0_30px_80px_-25px_rgba(245,158,11,0.15)] sm:p-7"
              >
                {/* Top Accent */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Quote Icon */}
                <div className="absolute right-6 top-5 select-none text-6xl font-black leading-none text-slate-800 transition-colors duration-300 group-hover:text-amber-400/10">
                  “
                </div>

                {/* Rating */}
                <div className="relative mb-6 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < testimonial.rating
                          ? "fill-amber-400 text-amber-400"
                          : "text-slate-700"
                      }
                    />
                  ))}
                </div>

                {/* Testimonial */}
                <p className="relative flex-1 text-sm leading-7 text-slate-300 sm:text-base">
                  “{testimonial.testimonial}”
                </p>

                {/* Customer */}
                <div className="mt-8 flex items-center gap-4 border-t border-slate-800 pt-5">
                  {/* Avatar */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-600 text-lg font-black text-slate-950 shadow-lg shadow-amber-500/20">
                    {testimonial.name.charAt(0)}
                  </div>

                  <div className="min-w-0">
                    <p className="truncate font-bold text-white">
                      {testimonial.name}
                    </p>

                    <p className="truncate text-sm text-slate-500">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Trust Statement */}
          <div className="mt-10 text-center sm:mt-14">
            <p className="text-sm text-slate-500">
              Precision • Reliability • Professional Support
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-slate-950 py-14 sm:py-18 lg:py-24 dark:bg-black">
        {/* Background Decoration */}
        <div className="pointer-events-none absolute inset-0">
          {/* Orange Glow */}
          <div className="absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-amber-500/20 blur-3xl" />

          {/* Blue Glow */}
          <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* CTA Card */}
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-700 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 px-6 py-12 text-center shadow-[0_30px_90px_-35px_rgba(0,0,0,0.8)] sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            {/* Decorative Orange Glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-amber-500/20 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-3xl">
              {/* Badge */}
              <div className="mb-5 inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-400">
                Let's Build Something Better
              </div>

              {/* Heading */}
              <h2 className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to Transform Your
                <span className="block text-amber-400">Weighing Process?</span>
              </h2>

              {/* Description */}
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base lg:text-lg">
                Get expert guidance, reliable weighing equipment, and
                professional support tailored to your business requirements.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/store/contact" className="w-full sm:w-auto">
                  <Button className="h-12 w-full rounded-full bg-amber-400 px-8 text-base font-bold text-slate-950 shadow-lg shadow-amber-500/20 transition-all hover:-translate-y-0.5 hover:bg-amber-300 sm:w-auto">
                    Contact Us Now
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>

                <Link href="/store/products" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="h-12 w-full rounded-full border-slate-600 bg-transparent px-8 text-base font-semibold text-white transition-all hover:border-white hover:bg-white hover:text-slate-950 sm:w-auto"
                  >
                    Explore Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
