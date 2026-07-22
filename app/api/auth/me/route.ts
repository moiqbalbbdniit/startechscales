import { NextRequest, NextResponse } from 'next/server'
import { createAuthToken, getAuthCookieName, verifyAuthToken } from '@/lib/auth'
import { findUserById, toPublicUser } from '@/lib/auth-store'

export const runtime = 'nodejs'

export async function GET(request: NextRequest) {
  const token = request.cookies.get(getAuthCookieName())?.value
  const payload = await verifyAuthToken(token)

  if (!payload) {
    return NextResponse.json({ success: false, user: null })
  }

  const user = await findUserById(payload.sub)

  if (!user) {
    return NextResponse.json({ success: false, user: null })
  }

  const response = NextResponse.json({ success: true, user: toPublicUser(user) })

  // Keep a signed-in user's role in sync after an admin changes it in MongoDB.
  // Route protection uses the signed token, so refresh it when its role is stale.
  if (payload.role !== user.role || payload.name !== user.name || payload.email !== user.email) {
    const refreshedToken = await createAuthToken({
      sub: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    })

    response.cookies.set(getAuthCookieName(), refreshedToken, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    })
  }

  return response
}
