import { NextRequest, NextResponse } from 'next/server'
import { loginSchema } from '@/lib/validations'
import { createAuthToken, getAuthCookieName } from '@/lib/auth'
import { findUserByEmail, toPublicUser, verifyPassword } from '@/lib/auth-store'

export const runtime = 'nodejs'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const parsed = loginSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.issues[0]?.message || 'Invalid login data' },
        { status: 400 },
      )
    }

    const user = await findUserByEmail(parsed.data.email)

    if (!user || !verifyPassword(parsed.data.password, user.passwordSalt, user.passwordHash)) {
      return NextResponse.json({ success: false, error: 'Invalid email or password' }, { status: 401 })
    }

    const token = await createAuthToken(
      {
        sub: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
      parsed.data.rememberMe ? 60 * 60 * 24 * 30 : 60 * 60 * 24 * 7,
    )

    const response = NextResponse.json({ success: true, user: toPublicUser(user) })
    response.cookies.set(getAuthCookieName(), token, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: parsed.data.rememberMe ? 60 * 60 * 24 * 30 : 60 * 60 * 24 * 7,
    })

    return response
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Login failed',
      },
      { status: 500 },
    )
  }
}
