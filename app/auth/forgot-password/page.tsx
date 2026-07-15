'use client'

import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { forgotPasswordSchema } from '@/lib/validations'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { ArrowLeft, Mail } from 'lucide-react'
import { useState } from 'react'

export default function ForgotPasswordPage() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
  })

  const email = watch('email')

  const onSubmit = async (data: any) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitted(true)
      toast.success('Recovery instructions sent to your email!')
    } catch (error) {
      toast.error('Failed to send recovery email. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-black flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 font-bold text-xl text-primary mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-amber-500 rounded-lg flex items-center justify-center text-white font-bold">
              ⚖️
            </div>
            Star Tech Scales
          </Link>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Reset Password</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            {submitted
              ? 'Check your email for instructions'
              : 'Enter your email to receive password reset instructions'}
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                Email Address
              </label>
              <input
                {...register('email')}
                type="email"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-slate-300 dark:border-slate-600 focus:ring-primary'
                } bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 transition-colors`}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-white text-lg h-12 font-semibold"
            >
              <Mail size={18} className="mr-2" />
              {isSubmitting ? 'Sending...' : 'Send Reset Link'}
            </Button>

            <Link href="/auth/login">
              <Button variant="outline" className="w-full">
                <ArrowLeft size={16} className="mr-2" />
                Back to Login
              </Button>
            </Link>
          </form>
        ) : (
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail size={32} className="text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Check Your Email</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                We&apos;ve sent password reset instructions to:
              </p>
              <p className="font-semibold text-slate-900 dark:text-white mb-4 break-all">{email}</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                Click the link in the email to reset your password. If you don&apos;t see it, check your spam folder.
              </p>
            </div>

            <Link href="/login">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white text-lg h-12">
                Back to Login
              </Button>
            </Link>

            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
              <p className="text-center text-slate-600 dark:text-slate-400 text-sm">
                Didn&apos;t receive the email?{' '}
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-primary hover:underline font-medium"
                >
                  Try again
                </button>
              </p>
            </div>
          </div>
        )}

        {/* Footer Link */}
        <p className="text-center text-slate-600 dark:text-slate-400 text-sm mt-6">
          Remember your password?{' '}
          <Link href="/auth/login" className="text-primary hover:underline font-medium">
            Sign in instead
          </Link>
        </p>
      </div>
    </div>
  )
}
