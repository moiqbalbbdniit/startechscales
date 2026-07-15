import { NextRequest, NextResponse } from 'next/server'
import { getAuthCookieName, verifyAuthToken } from '@/lib/auth'
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

  return NextResponse.json({ success: true, user: toPublicUser(user) })
}
