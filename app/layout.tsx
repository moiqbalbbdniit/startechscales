import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { COMPANY_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: {
    template: `%s | ${COMPANY_NAME}`,
    default: `${COMPANY_NAME} - Premium Industrial Weighing Scales & Solutions`,
  },
  description:
    'Leading provider of high-precision industrial weighing scales, laboratory instruments, and calibration services. Trusted by pharmaceutical, food, chemical, and manufacturing industries.',
  keywords: [
    'weighing scales',
    'industrial scales',
    'laboratory scales',
    'precision weighing',
    'calibration services',
    'Star Tech Scales',
  ],
  authors: [{ name: COMPANY_NAME }],
  creator: COMPANY_NAME,
  publisher: COMPANY_NAME,
  formatDetection: {
    email: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://startechscales.com',
    siteName: COMPANY_NAME,
    title: `${COMPANY_NAME} - Premium Industrial Weighing Scales`,
    description: 'Leading provider of high-precision industrial weighing scales and solutions',
    images: [
      {
        url: 'https://startechscales.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: COMPANY_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_NAME} - Premium Industrial Weighing Scales`,
    description: 'Leading provider of high-precision industrial weighing scales and solutions',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1419' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://startechscales.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: COMPANY_NAME,
              url: 'https://startechscales.com',
              description:
                'Leading provider of high-precision industrial weighing scales and solutions',
            }),
          }}
        />
      </head>
      <body className="antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
