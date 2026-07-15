import { NextRequest, NextResponse } from 'next/server'
import { getAuthCookieName, verifyAuthToken } from '@/lib/auth'

const AUTH_ROUTES = ['/auth/login', '/auth/register', '/auth/forgot-password', '/auth/reset-password']
const PROTECTED_ROUTES = ['/dashboard', '/admin', '/store/checkout']

export async function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl
  const token = request.cookies.get(getAuthCookieName())?.value
  const payload = await verifyAuthToken(token)
  const isAuthRoute = AUTH_ROUTES.some((route) => pathname.startsWith(route))
  const isProtectedRoute = PROTECTED_ROUTES.some((route) => pathname.startsWith(route))

  if (isAuthRoute && payload) {
    const destination = new URL('/dashboard', request.url)
    const callbackUrl = searchParams.get('callbackUrl')
    if (callbackUrl) {
      destination.pathname = callbackUrl
    }
    return NextResponse.redirect(destination)
  }

  if (pathname.startsWith('/admin')) {
    if (!payload) {
      const loginUrl = new URL('/auth/login', request.url)
      loginUrl.searchParams.set('callbackUrl', pathname)
      return NextResponse.redirect(loginUrl)
    }

    if (payload.role !== 'admin') {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }

    return NextResponse.next()
  }

  if (isProtectedRoute && !payload) {
    const loginUrl = new URL('/auth/login', request.url)
    loginUrl.searchParams.set('callbackUrl', pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/auth/:path*', '/dashboard/:path*', '/admin/:path*', '/store/checkout'],
}