import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SERVICES } from '@/lib/constants'
import { ArrowRight, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Weighing Scale Services - Installation, Calibration & Maintenance',
  description:
    'Professional weighing scale services including installation, calibration, repair, maintenance, and training. Expert support for all industrial scales.',
  keywords:
    'weighing scale services, calibration, installation, maintenance, repair, scale servicing',
  openGraph: {
    title: 'Professional Weighing Scale Services',
    description: 'Complete service solutions for your industrial weighing scales and instruments.',
    type: 'website',
  },
}

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-accent py-16 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Complete support and services for all your weighing scale needs
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="p-8 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary hover:shadow-lg transition-all duration-300 group"
              >
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-6">
                  {service.description}
                </p>
                <div className="space-y-3 mb-6">
                  {[
                    'Professional expertise',
                    'Quick turnaround',
                    'Quality assured',
                    'Competitive pricing',
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle size={20} className="text-primary flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact">
                  <Button variant="outline" className="group">
                    Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">Our Service Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Assessment', desc: 'Evaluate your equipment and needs' },
              { step: '2', title: 'Planning', desc: 'Create a customized service plan' },
              { step: '3', title: 'Execution', desc: 'Professional service delivery' },
              { step: '4', title: 'Follow-up', desc: 'Ensure satisfaction and support' },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {item.desc}
                  </p>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-8 left-[58%] w-[84%] h-0.5 bg-primary/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 text-center">Service Packages</h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            Choose the package that best fits your needs
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Basic',
                price: '₹5,000',
                features: ['One-time service call', 'Basic troubleshooting', 'Parts replacement', '30-day warranty'],
              },
              {
                name: 'Standard',
                price: '₹12,000/year',
                popular: true,
                features: ['Quarterly visits', 'Full maintenance', 'Priority support', '24/7 hotline', '1-year warranty'],
              },
              {
                name: 'Premium',
                price: '₹25,000/year',
                features: [
                  'Monthly visits',
                  'Complete care',
                  'Emergency support',
                  '24/7 dedicated line',
                  '2-year warranty',
                  'Free spare parts',
                ],
              },
            ].map((pkg, idx) => (
              <div
                key={idx}
                className={`rounded-lg border-2 p-8 transition-all duration-300 ${
                  pkg.popular
                    ? 'border-primary bg-primary/5 dark:bg-primary/10 shadow-lg scale-105'
                    : 'border-slate-200 dark:border-slate-700'
                }`}
              >
                {pkg.popular && (
                  <div className="inline-block px-4 py-1 bg-primary text-white rounded-full text-sm font-semibold mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  {pkg.name}
                </h3>
                <p className="text-3xl font-bold text-primary mb-6">
                  {pkg.price}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-primary flex-shrink-0" />
                      <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={pkg.popular ? 'w-full bg-primary text-white' : 'w-full'}
                  variant={pkg.popular ? 'default' : 'outline'}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Need Our Services?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your service needs
          </p>
          <Link href="/contact">
            <Button className="bg-white hover:bg-slate-100 text-primary font-semibold text-lg h-12 px-8">
              Schedule Service
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
