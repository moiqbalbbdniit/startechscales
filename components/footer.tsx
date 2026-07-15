'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Share2, Rss } from 'lucide-react'
import { COMPANY_NAME, COMPANY_EMAIL, COMPANY_PHONE, COMPANY_ADDRESS, FOOTER_LINKS } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 pt-16 pb-8 text-white dark:border-slate-800 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center font-bold overflow-hidden">
                <Image src="/startechlogo.png" alt={COMPANY_NAME} width={44} height={44} className="h-10 w-10 object-contain" />
              </div>
              <span className="font-bold text-lg">{COMPANY_NAME}</span>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Premium industrial weighing scales and precision measurement solutions trusted by leading industries.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:text-primary transition-colors" aria-label="Share">
                <Share2 size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Blog">
                <Rss size={20} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.Company.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Products</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.Products.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.Services.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.Legal.map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Mail size={20} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-slate-400 text-sm">Email</p>
                <a href={`mailto:${COMPANY_EMAIL}`} className="text-white hover:text-primary transition-colors">
                  {COMPANY_EMAIL}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={20} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-slate-400 text-sm">Phone</p>
                <a href={`tel:${COMPANY_PHONE}`} className="text-white hover:text-primary transition-colors">
                  {COMPANY_PHONE}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="text-slate-400 text-sm">Location</p>
                  <p className="text-white">{COMPANY_ADDRESS}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-800 pt-8 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
            </p>
            <div className="flex gap-4 text-slate-400 text-sm">
              <Link href="/store/privacy" className="hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link href="/store/terms" className="hover:text-primary transition-colors">
                Terms
              </Link>
              <Link href="/store/contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-white/5 px-4 py-3 text-center text-sm text-slate-300">
            <span>Made with</span>
            <span className="text-red-500">❤️</span>
            <span>by Mohammad Iqbal</span>
            <span className="text-slate-500">|</span>
            <a href="https://instagram.com/zaheen.iqbal" target="_blank" rel="noreferrer" className="font-medium text-primary hover:text-primary/80 transition-colors">
              @zaheen.iqbal
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
