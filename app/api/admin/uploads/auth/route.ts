import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { requireAdmin } from '@/lib/auth-server'

export const runtime = 'nodejs'

/**
 * Returns short-lived ImageKit upload credentials for an authenticated admin.
 * The browser uses these values with ImageKit's client upload API; the private
 * key remains on this server and is never exposed to the client.
 */
export async function GET(request: NextRequest) {
  const admin = await requireAdmin(request)

  if (!admin) {
    return NextResponse.json({ success: false, error: 'Admin access is required' }, { status: 403 })
  }

  const privateKey = process.env.IMAGEKIT_PRIVATE_KEY
  const publicKey = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY
  const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT

  if (!privateKey || !publicKey || !urlEndpoint) {
    return NextResponse.json({ success: false, error: 'ImageKit is not configured' }, { status: 503 })
  }

  const token = crypto.randomUUID()
  const expire = Math.floor(Date.now() / 1000) + 10 * 60
  const signature = crypto.createHmac('sha1', privateKey).update(`${token}${expire}`).digest('hex')

  return NextResponse.json({
    success: true,
    data: {
      token,
      expire,
      signature,
      publicKey,
      urlEndpoint,
    },
  })
}
