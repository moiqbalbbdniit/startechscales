import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { getSessionUser } from '@/lib/auth-server'
import { findUserById, toPublicUser, updateUserProfile } from '@/lib/auth-store'

export const runtime = 'nodejs'

const profileUpdateSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters'),
  email: z.string().trim().email('Enter a valid email address'),
  phone: z.string().trim().max(30).optional(),
  company: z.string().trim().max(120).optional(),
})

export async function GET(request: NextRequest) {
  const session = await getSessionUser(request)
  if (!session) return NextResponse.json({ success: false, error: 'Sign in is required' }, { status: 401 })

  const user = await findUserById(session.id)
  if (!user) return NextResponse.json({ success: false, error: 'User not found' }, { status: 404 })

  return NextResponse.json({ success: true, data: toPublicUser(user) })
}

export async function PATCH(request: NextRequest) {
  const session = await getSessionUser(request)
  if (!session) return NextResponse.json({ success: false, error: 'Sign in is required' }, { status: 401 })

  const parsed = profileUpdateSchema.safeParse(await request.json())
  if (!parsed.success) {
    return NextResponse.json({ success: false, error: parsed.error.issues[0]?.message || 'Invalid profile data' }, { status: 400 })
  }

  try {
    const user = await updateUserProfile(session.id, parsed.data)
    if (!user) return NextResponse.json({ success: false, error: 'User not found' }, { status: 404 })
    return NextResponse.json({ success: true, data: toPublicUser(user) })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unable to update profile'
    return NextResponse.json({ success: false, error: message }, { status: message === 'Email already exists' ? 409 : 500 })
  }
}
