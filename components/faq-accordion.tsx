'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  id: number
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {items.map((faq) => (
        <div
          key={faq.id}
          className="rounded-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:border-primary transition-colors"
        >
          <button
            onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            <h3 className="font-semibold text-slate-900 dark:text-white">{faq.question}</h3>
            <ChevronDown
              size={20}
              className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                openId === faq.id ? 'rotate-180' : ''
              }`}
            />
          </button>

          {openId === faq.id && (
            <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
              <p className="text-slate-600 dark:text-slate-400">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
