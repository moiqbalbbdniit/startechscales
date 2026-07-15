import { NextRequest, NextResponse } from 'next/server'
import { registerSchema } from '@/lib/validations'
import { createAuthToken, getAuthCookieName } from '@/lib/auth'
import { createUser, findUserByEmail, toPublicUser } from '@/lib/auth-store'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = registerSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.issues[0]?.message || 'Invalid registration data' },
        { status: 400 },
      )
    }

    const existingUser = await findUserByEmail(parsed.data.email)
    if (existingUser) {
      return NextResponse.json({ success: false, error: 'Email already registered' }, { status: 409 })
    }

    const user = await createUser({
      name: parsed.data.name,
      email: parsed.data.email,
      password: parsed.data.password,
    })

    const token = await createAuthToken({
      sub: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    })

    const response = NextResponse.json({ success: true, user: toPublicUser(user) })
    response.cookies.set(getAuthCookieName(), token, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    })

    return response
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Registration failed',
      },
      { status: 500 },
    )
  }
}
