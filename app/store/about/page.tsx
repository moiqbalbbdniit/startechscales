import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { COMPANY_NAME } from '@/lib/constants'
import { CheckCircle, Award, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Star Tech Scales - Industry Leaders in Precision Weighing',
  description:
    'Discover Star Tech Scales&apos; 25+ years of expertise in providing premium industrial weighing solutions to pharmaceutical, food, chemical, and manufacturing industries worldwide.',
  keywords: 'industrial weighing scales, precision measurement, calibration services, laboratory scales, Star Tech Scales',
  openGraph: {
    title: 'About Star Tech Scales - Precision Weighing Since 1998',
    description: 'Leading provider of high-precision industrial weighing scales and measurement solutions.',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-accent py-16 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-4">About {COMPANY_NAME}</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Leading provider of precision weighing solutions for over 25 years
          </p>
        </div>
      </div>

      {/* Company Story */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
                Founded in 1998, {COMPANY_NAME} began with a simple mission: to provide India's industries with the most
                accurate and reliable weighing solutions. What started as a small operation has grown into a trusted partner
                for hundreds of enterprises across pharmaceuticals, food processing, chemical, and manufacturing sectors.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Over the years, we&apos;ve maintained our commitment to quality, innovation, and customer satisfaction. Today, we
                stand as one of the most respected names in precision measurement technology.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 rounded-2xl aspect-square flex items-center justify-center text-9xl shadow-lg">
              ⚖️
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="p-8 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-primary">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                To deliver innovative, precise, and reliable weighing solutions that help industries optimize their operations,
                ensure quality control, and drive growth through accurate measurement and data.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-slate-900 rounded-lg border-l-4 border-accent">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
                To be the most trusted and innovative leader in precision measurement technology, recognized globally for our
                commitment to quality, customer service, and technological advancement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Precision', description: 'Unwavering commitment to accuracy in every measurement' },
              { title: 'Innovation', description: 'Continuous improvement and adoption of new technologies' },
              { title: 'Integrity', description: 'Honest dealings and transparent business practices' },
              { title: 'Excellence', description: 'Striving for the highest standards in all we do' },
            ].map((value, index) => (
              <div key={index} className="p-6 rounded-lg border border-slate-200 dark:border-slate-700 text-center hover:border-primary transition-colors animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <Zap size={32} className="text-primary mx-auto mb-3" />
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">Our Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: '25+ Years', description: 'Of proven excellence in the industry' },
              { title: '5000+', description: 'Satisfied customers across India' },
              { title: 'ISO Certified', description: 'Meeting international quality standards' },
              { title: '24/7 Support', description: 'Dedicated customer support team' },
              { title: '500+', description: 'Products in our portfolio' },
              { title: 'Pan India', description: 'Service centers and distribution network' },
            ].map((achievement, index) => (
              <div key={index} className="p-6 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-start gap-4">
                <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-1">{achievement.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Partner With Us?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Discover how our precision weighing solutions can transform your operations
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact">
              <Button className="bg-white hover:bg-slate-100 text-primary font-semibold">
                Get in Touch
              </Button>
            </Link>
            <Link href="/products">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                View Products
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
