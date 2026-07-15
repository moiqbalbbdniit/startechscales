import { Metadata } from 'next'
import ContactForm from '@/components/forms/contact-form'
import { COMPANY_EMAIL, COMPANY_PHONE, COMPANY_ADDRESS } from '@/lib/constants'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Star Tech Scales. We&apos;d love to hear from you.',
}

export default function ContactPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-accent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-4">Get in Touch</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="p-6 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Mail size={24} className="text-primary" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Email</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-2">
              For general inquiries
            </p>
            <a href={`mailto:${COMPANY_EMAIL}`} className="text-primary font-semibold hover:underline">
              {COMPANY_EMAIL}
            </a>
          </div>

          <div className="p-6 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Phone size={24} className="text-primary" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Phone</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-2">
              Call us anytime
            </p>
            <a href={`tel:${COMPANY_PHONE}`} className="text-primary font-semibold hover:underline">
              {COMPANY_PHONE}
            </a>
          </div>

          <div className="p-6 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-primary transition-colors">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Clock size={24} className="text-primary" />
            </div>
            <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">Working Hours</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Mon - Fri: 9:00 AM - 10:00 PM
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              Sat-Sun: 10:00 AM - 9:00 PM
            </p>
          </div>
        </div>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Send us a Message</h2>
            <ContactForm />
          </div>

          {/* Info Section */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">Address</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Star Tech Scales
                    <br />
                    {COMPANY_ADDRESS}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">Email</h3>
                  <a
                    href={`mailto:${COMPANY_EMAIL}`}
                    className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                  >
                    {COMPANY_EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">Phone</h3>
                  <a
                    href={`tel:${COMPANY_PHONE}`}
                    className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                  >
                    {COMPANY_PHONE}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">Business Hours</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.75)] dark:border-slate-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193.95453822189592!2d72.91230745713519!3d19.060859676867274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7b3e2c92119%3A0x84fa2dc0c2d16092!2sStar-tech%20weighing%20scales!5e1!3m2!1sen!2sin!4v1784116075767!5m2!1sen!2sin"
                  width="100%"
                  height="360"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Star Tech Scales Location"
                  className="h-72 w-full md:h-96"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
