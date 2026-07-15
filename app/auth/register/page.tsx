'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '@/lib/validations'
import { toast } from 'sonner'
import { Eye, EyeOff } from 'lucide-react'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result?.error || 'Registration failed. Please try again.')
      }

      toast.success('Account created successfully!')
      router.push('/dashboard')
      router.refresh()
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Registration failed. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.12),_transparent_28%),linear-gradient(180deg,#f8f5f0_0%,#ffffff_54%,#eef2ff_100%)] flex items-center justify-center px-3 py-6 sm:px-4 sm:py-12 dark:bg-[linear-gradient(180deg,#020617_0%,#030712_100%)]">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-6 sm:mb-8">
          <Link href="/" className="inline-flex items-center gap-2 font-bold text-base sm:text-xl text-slate-950 mb-3 sm:mb-4 dark:text-white">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-slate-950 p-1 shadow-lg dark:bg-white">
              <Image src="/startechlogo.png" alt="Star Tech Scales" width={40} height={40} className="h-10 w-10 object-contain" priority />
            </div>
            <span className="hidden xs:inline">Star Tech Scales</span>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">Create Account</h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 sm:mt-2">Join us today to get started</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.85)] sm:space-y-4 sm:p-8 dark:border-slate-800 dark:bg-slate-950">
          {/* Full Name */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-2">
              Full Name
            </label>
            <input
              {...register('name')}
              type="text"
              className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border text-sm sm:text-base ${
                errors.name
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-slate-300 dark:border-slate-600 focus:ring-primary'
              } bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2`}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-2">
              Email Address
            </label>
            <input
              {...register('email')}
              type="email"
              className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border text-sm sm:text-base ${
                errors.email
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-slate-300 dark:border-slate-600 focus:ring-primary'
              } bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2`}
              placeholder="you@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-2">
              Password
            </label>
            <div className="relative">
              <input
                {...register('password')}
                type={showPassword ? 'text' : 'password'}
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border text-sm sm:text-base ${
                  errors.password
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-slate-300 dark:border-slate-600 focus:ring-primary'
                } bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2`}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 p-1"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-slate-900 dark:text-white mb-2">
              Confirm Password
            </label>
            <div className="relative">
              <input
                {...register('confirmPassword')}
                type={showConfirmPassword ? 'text' : 'password'}
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border text-sm sm:text-base ${
                  errors.confirmPassword
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-slate-300 dark:border-slate-600 focus:ring-primary'
                } bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2`}
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 p-1"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Terms & Conditions */}
          <div className="pt-2">
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                {...register('agreeToTerms')}
                type="checkbox"
                className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 text-primary accent-primary mt-1 flex-shrink-0"
              />
              <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                I agree to the{' '}
                <Link href="/store/terms" className="text-primary hover:underline">
                  Terms & Conditions
                </Link>{' '}
                and{' '}
                <Link href="/store/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </span>
            </label>
            {errors.agreeToTerms && (
              <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.agreeToTerms.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-slate-950 hover:bg-slate-800 text-white text-base sm:text-lg h-11 sm:h-12 font-semibold mt-4 sm:mt-6 rounded-full dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
          >
            {isSubmitting ? 'Creating account...' : 'Create Account'}
          </Button>

          {/* Divider */}
          <div className="relative my-3 sm:my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-300 dark:border-slate-600" />
            </div>
            <div className="relative flex justify-center text-xs sm:text-sm">
              <span className="px-2 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                Already have an account?
              </span>
            </div>
          </div>

          {/* Sign In Link */}
          <Link href="/auth/login">
            <Button variant="outline" className="w-full text-base sm:text-lg h-11 sm:h-12 rounded-full">
              Sign In
            </Button>
          </Link>
        </form>

        {/* Footer Link */}
        <p className="text-center text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-4 sm:mt-6">
          Questions? Contact us at info@startechscales.com
        </p>
      </div>
    </div>
  )
}
