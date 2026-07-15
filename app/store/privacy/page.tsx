import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Star Tech Scales',
}

export default function PrivacyPage() {
  return (
    <div className="bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold text-slate-900 dark:text-white mb-8">Privacy Policy</h1>

        <div className="prose prose-invert dark:prose-invert max-w-none space-y-6 text-slate-600 dark:text-slate-400">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Introduction</h2>
            <p>
              Star Tech Scales ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect on the site includes:</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Personal Data: Name, email address, phone number, shipping address</li>
              <li>Payment Information: Credit card details (processed securely)</li>
              <li>Usage Data: Browser type, IP address, pages visited, time spent</li>
              <li>Cookies and Tracking Technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Use of Your Information</h2>
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience.</p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>To process your transactions and send related information</li>
              <li>To generate a personal profile about you</li>
              <li>To improve our website and customer service</li>
              <li>To send promotional communications (with your consent)</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Disclosure of Your Information</h2>
            <p>We do not sell, trade, or rent your personal identification information to others. We may disclose generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to protect your personal information. However,
              no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Changes to This Privacy Policy</h2>
            <p>
              We may update this privacy policy from time to time to reflect changes in our practices or for other operational,
              legal, or regulatory reasons.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">7. Contact Us</h2>
            <p>
              If you have questions or concerns regarding this Privacy Policy, please contact us at info@startechscales.com
            </p>
          </section>

          <p className="text-sm mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
            Last updated: July 2026
          </p>
        </div>
      </div>
    </div>
  )
}
