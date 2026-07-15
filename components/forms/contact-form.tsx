'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema } from '@/lib/validations'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { Send } from 'lucide-react'

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: any) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      toast.success('Message sent successfully! We&apos;ll get back to you soon.')
      reset()
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
          Name
        </label>
        <input
          {...register('name')}
          type="text"
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.name
              ? 'border-red-500 focus:ring-red-500'
              : 'border-slate-300 dark:border-slate-600 focus:ring-primary'
          } bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2`}
          placeholder="Your name"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
          Email
        </label>
        <input
          {...register('email')}
          type="email"
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.email
              ? 'border-red-500 focus:ring-red-500'
              : 'border-slate-300 dark:border-slate-600 focus:ring-primary'
          } bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2`}
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
          Phone
        </label>
        <input
          {...register('phone')}
          type="tel"
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.phone
              ? 'border-red-500 focus:ring-red-500'
              : 'border-slate-300 dark:border-slate-600 focus:ring-primary'
          } bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2`}
          placeholder="10 digit phone number"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
          Subject
        </label>
        <input
          {...register('subject')}
          type="text"
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.subject
              ? 'border-red-500 focus:ring-red-500'
              : 'border-slate-300 dark:border-slate-600 focus:ring-primary'
          } bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2`}
          placeholder="What is this about?"
        />
        {errors.subject && (
          <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
          Message
        </label>
        <textarea
          {...register('message')}
          rows={5}
          className={`w-full px-4 py-3 rounded-lg border ${
            errors.message
              ? 'border-red-500 focus:ring-red-500'
              : 'border-slate-300 dark:border-slate-600 focus:ring-primary'
          } bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 resize-none`}
          placeholder="Tell us more..."
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-white text-lg h-12"
      >
        <Send size={18} className="mr-2" />
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
