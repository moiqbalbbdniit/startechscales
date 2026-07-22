import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { COMPANY_NAME } from '@/lib/constants'

const SITE_URL = 'https://startechscales.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${COMPANY_NAME} | Industrial Weighing Scales & Solutions`,
    template: `%s | ${COMPANY_NAME}`,
  },

  description:
    'Star Tech Scales is a trusted supplier of industrial weighing scales, laboratory balances, platform scales, weighbridges, calibration services, AMC, and weighing automation solutions across India.',

  keywords: [
    'Industrial Weighing Scales',
    'Platform Scale',
    'Bench Scale',
    'Crane Scale',
    'Weighbridge',
    'Laboratory Balance',
    'Retail Billing Scale',
    'Load Cell',
    'Calibration Services',
    'AMC',
    'Mumbai',
    'India',
    COMPANY_NAME,
  ],

  authors: [
    {
      name: COMPANY_NAME,
    },
  ],

  creator: COMPANY_NAME,

  publisher: COMPANY_NAME,

  applicationName: COMPANY_NAME,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },

  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: COMPANY_NAME,
    locale: 'en_IN',

    title: `${COMPANY_NAME} | Premium Industrial Weighing Solutions`,

    description:
      'Premium Industrial Weighing Scales, Laboratory Balances, Calibration Services and Automation Solutions.',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: COMPANY_NAME,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: `${COMPANY_NAME} | Premium Industrial Weighing Solutions`,

    description:
      'Premium Industrial Weighing Scales, Laboratory Balances, Calibration Services and Automation Solutions.',

    images: ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,

  themeColor: [
    {
      media: '(prefers-color-scheme: light)',
      color: '#ffffff',
    },
    {
      media: '(prefers-color-scheme: dark)',
      color: '#0f172a',
    },
  ],

  colorScheme: 'light dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en"  data-scroll-behavior="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: COMPANY_NAME,
              url: SITE_URL,
              logo: `${SITE_URL}/og-image.png`,
              image: `${SITE_URL}/og-image.png`,
              description:
                'Premium Industrial Weighing Scales, Calibration Services and Weighing Automation Solutions.',
            }),
          }}
        />
      </head>

      <body className="bg-background text-foreground antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
