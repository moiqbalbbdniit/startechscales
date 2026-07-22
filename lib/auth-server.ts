import { NextRequest } from 'next/server'
import { getAuthCookieName, verifyAuthToken } from '@/lib/auth'

export type SessionUser = {
  id: string
  email: string
  name: string
  role: 'customer' | 'admin'
}

export async function getSessionUser(request: NextRequest): Promise<SessionUser | null> {
  const token = request.cookies.get(getAuthCookieName())?.value
  const payload = await verifyAuthToken(token)

  if (!payload) {
    return null
  }

  return {
    id: payload.sub,
    email: payload.email,
    name: payload.name,
    role: payload.role,
  }
}

export async function requireAdmin(request: NextRequest): Promise<SessionUser | null> {
  const user = await getSessionUser(request)
  return user?.role === 'admin' ? user : null
}

