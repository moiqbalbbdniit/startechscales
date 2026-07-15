import { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Industries - Star Tech Scales Solutions',
  description:
    'Star Tech Scales serves pharmaceutical, food & beverage, chemical, manufacturing, and laboratory industries with precision weighing solutions.',
  keywords: 'pharmaceutical scales, food industry, chemical weighing, manufacturing scales, laboratory instruments',
}

const INDUSTRIES = [
  {
    id: 1,
    name: 'Pharmaceutical',
    icon: '💊',
    description: 'Precision scales for pharmaceutical manufacturing and research',
    benefits: ['High accuracy for ingredient weighing', 'GMP compliance', 'Calibration certified'],
  },
  {
    id: 2,
    name: 'Food & Beverage',
    icon: '🍕',
    description: 'Industrial scales for food processing and packaging',
    benefits: ['Hygiene certified', 'Portion control', 'Quality assurance'],
  },
  {
    id: 3,
    name: 'Chemical',
    icon: '⚗️',
    description: 'Chemical weighing and batch processing solutions',
    benefits: ['Corrosion resistant', 'Hazmat safe', 'Precision measurement'],
  },
  {
    id: 4,
    name: 'Manufacturing',
    icon: '🏭',
    description: 'Heavy-duty scales for manufacturing and production',
    benefits: ['Durable construction', 'High capacity', 'Industrial grade'],
  },
  {
    id: 5,
    name: 'Laboratory',
    icon: '🔬',
    description: 'Lab scales for research and testing',
    benefits: ['Precision accuracy', 'Data logging', 'Statistical analysis'],
  },
  {
    id: 6,
    name: 'Retail',
    icon: '🛒',
    description: 'Retail and commercial weighing solutions',
    benefits: ['Easy operation', 'Price computing', 'Reliable display'],
  },
]

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-950 dark:to-black py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-900/5 dark:bg-grid-white/5 [background-size:40px_40px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
              Solutions for Every Industry
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Star Tech Scales provides specialized weighing solutions tailored to your industry&apos;s unique requirements
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {INDUSTRIES.map((industry) => (
              <Link key={industry.id} href={`/store/industries/${industry.id}`}>
                <div className="p-4 sm:p-5 md:p-6 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer h-full bg-white dark:bg-slate-800">
                  <div className="text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">{industry.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">{industry.name}</h3>
                  <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 mb-4">{industry.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {industry.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center text-primary hover:text-primary/80 font-semibold text-xs sm:text-sm">
                    Learn More <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Our experts can help you find the perfect weighing solution for your industry
          </p>
          <Link href="/store/contact" className="inline-block w-full sm:w-auto px-4">
            <Button className="w-full sm:w-auto bg-white hover:bg-slate-100 text-primary text-base sm:text-lg h-11 sm:h-12 px-6 sm:px-8 font-semibold">
              Contact Our Experts
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
