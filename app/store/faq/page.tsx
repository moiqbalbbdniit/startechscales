import { Metadata } from 'next'
import FAQAccordion from '@/components/faq-accordion'
import { FAQ } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about Star Tech Scales products and services.',
}

export default function FAQPage() {

  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-accent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Find answers to common questions about our products and services
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FAQAccordion items={FAQ} />

        {/* Additional Help Section */}
        <div className="mt-16 p-8 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Didn&apos;t find what you were looking for?</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Our support team is here to help. Feel free to reach out to us anytime.
          </p>
          <a
            href="/store/contact"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  )
}
