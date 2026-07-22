"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Share2,
} from "lucide-react";

import {
  COMPANY_NAME,
  COMPANY_EMAIL,
  COMPANY_PHONE,
  COMPANY_ADDRESS,
  FOOTER_LINKS,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white dark:bg-black">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-10">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="group inline-flex items-center gap-4"
            >
              {/* Logo */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white p-2 shadow-xl">
                <Image
                  src="/startechlogo.png"
                  alt={`${COMPANY_NAME} Logo`}
                  width={80}
                  height={80}
                  priority
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Company Name */}
              <div>
                <h2 className="text-xl font-black tracking-tight text-white sm:text-2xl">
                  {COMPANY_NAME}
                </h2>

                <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-amber-400">
                  Precision. Performance. Trust.
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400 sm:text-base">
              Premium industrial weighing scales and precision measurement
              solutions trusted by industries across India.
            </p>

            {/* Social / Quick Action */}
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/store/contact"
                className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-3 text-sm font-bold text-slate-950 transition-all hover:bg-amber-400"
              >
                Get a Free Quote
                <ArrowUpRight size={17} />
              </Link>

              <a
                href="https://instagram.com/zaheen.iqbal"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-3 text-sm font-bold text-slate-950 transition-all hover:bg-amber-400"
              >
                <Share2 size={19} />
                 <span className="text-sm font-bold">InstaGram</span>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <FooterColumn
            title="Company"
            links={FOOTER_LINKS.Company}
          />

          {/* Products Links */}
          <FooterColumn
            title="Products"
            links={FOOTER_LINKS.Products}
          />

          {/* Services Links */}
          <FooterColumn
            title="Services"
            links={FOOTER_LINKS.Services}
          />
        </div>

        {/* Contact Information */}
        <div className="mt-14 grid grid-cols-1 gap-4 border-t border-slate-800 pt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {/* Email */}
          <a
            href={`mailto:${COMPANY_EMAIL}`}
            className="group flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition-all hover:border-amber-500/60 hover:bg-slate-900"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
              <Mail size={20} />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Email
              </p>

              <p className="mt-1 break-all text-sm font-medium text-white transition-colors group-hover:text-amber-400">
                {COMPANY_EMAIL}
              </p>
            </div>
          </a>

          {/* Phone */}
          <a
            href={`tel:${COMPANY_PHONE}`}
            className="group flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition-all hover:border-amber-500/60 hover:bg-slate-900"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
              <Phone size={20} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Phone
              </p>

              <p className="mt-1 text-sm font-medium text-white transition-colors group-hover:text-amber-400">
                {COMPANY_PHONE}
              </p>
            </div>
          </a>

          {/* Location */}
          <div className="group flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition-all hover:border-amber-500/60 hover:bg-slate-900 sm:col-span-2 lg:col-span-1">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
              <MapPin size={20} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Location
              </p>

              <p className="mt-1 text-sm leading-6 text-white">
                {COMPANY_ADDRESS}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 border-t border-slate-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-slate-500">
              <Link
                href="/store/privacy"
                className="transition-colors hover:text-amber-400"
              >
                Privacy Policy
              </Link>

              <Link
                href="/store/terms"
                className="transition-colors hover:text-amber-400"
              >
                Terms & Conditions
              </Link>

              <Link
                href="/store/contact"
                className="transition-colors hover:text-amber-400"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Developer Credit */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/50 px-4 py-4 text-center text-sm text-slate-400">
            <span>Made with</span>
            <span className="text-red-500">❤️</span>
            <span>by</span>

            <span className="font-semibold text-white">
              Mohammad Iqbal
            </span>

            <span className="text-slate-600">•</span>

            <a
              href="https://instagram.com/zaheen.iqbal"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-amber-400 transition-colors hover:text-amber-300"
            >
              @zaheen.iqbal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Reusable Footer Column */
function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}) {
  return (
    <div>
      <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-white">
        {title}
      </h3>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={`${link.label}-${link.href}`}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-1 text-sm text-slate-400 transition-colors hover:text-amber-400"
            >
              {link.label}

              <ArrowUpRight
                size={13}
                className="opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}