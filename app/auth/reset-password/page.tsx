'use client'

import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { resetPasswordSchema } from '@/lib/validations'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { Eye, EyeOff, Check } from 'lucide-react'
import { useState } from 'react'

export default function ResetPasswordPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
  })

  const onSubmit = async (data: any) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitted(true)
      toast.success('Password reset successfully!')
    } catch (error) {
      toast.error('Failed to reset password. Please try again.')
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
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Create New Password</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            {submitted ? 'Password reset successfully' : 'Enter your new password'}
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 space-y-6">
            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                New Password
              </label>
              <div className="relative">
                <input
                  {...register('password')}
                  type={showPassword ? 'text' : 'password'}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.password
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-slate-300 dark:border-slate-600 focus:ring-primary'
                  } bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 transition-colors`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-white mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  {...register('confirmPassword')}
                  type={showConfirmPassword ? 'text' : 'password'}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.confirmPassword
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-slate-300 dark:border-slate-600 focus:ring-primary'
                  } bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 transition-colors`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
              )}
            </div>

            {/* Password Requirements */}
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-slate-700">
              <p className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Password must contain:</p>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-green-500 flex-shrink-0" />
                  <span>At least 8 characters</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-green-500 flex-shrink-0" />
                  <span>Mix of uppercase and lowercase</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={16} className="text-green-500 flex-shrink-0" />
                  <span>At least one number</span>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-white text-lg h-12 font-semibold"
            >
              {isSubmitting ? 'Resetting...' : 'Reset Password'}
            </Button>

            <Link href="/auth/login">
              <Button variant="outline" className="w-full">
                Back to Login
              </Button>
            </Link>
          </form>
        ) : (
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <Check size={32} className="text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Success!</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Your password has been reset successfully. You can now sign in with your new password.
              </p>

              <Link href="/auth/login">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white text-lg h-12">
                  Go to Login
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
