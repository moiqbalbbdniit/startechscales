const AUTH_COOKIE_NAME = 'sts_session'

type AuthTokenPayload = {
  sub: string
  email: string
  name: string
  role: 'customer' | 'admin'
  exp: number
}

const encoder = new TextEncoder()
const decoder = new TextDecoder()

function getSecret() {
  return process.env.AUTH_SECRET || 'dev-star-tech-scales-secret-change-me'
}

function base64UrlEncode(input: ArrayBuffer | Uint8Array | string) {
  const bytes =
    typeof input === 'string' ? encoder.encode(input) : input instanceof Uint8Array ? input : new Uint8Array(input)
  let binary = ''
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte)
  })
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/u, '')
}

function base64UrlDecode(input: string) {
  const normalized = input.replace(/-/g, '+').replace(/_/g, '/')
  const padded = normalized + '='.repeat((4 - (normalized.length % 4)) % 4)
  const binary = atob(padded)
  const bytes = new Uint8Array(binary.length)
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index)
  }
  return bytes
}

async function getSigningKey() {
  return crypto.subtle.importKey(
    'raw',
    encoder.encode(getSecret()),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign', 'verify'],
  )
}

export async function createAuthToken(payload: Omit<AuthTokenPayload, 'exp'>, maxAgeSeconds = 60 * 60 * 24 * 7) {
  const header = { alg: 'HS256', typ: 'JWT' }
  const body: AuthTokenPayload = {
    ...payload,
    exp: Math.floor(Date.now() / 1000) + maxAgeSeconds,
  }

  const encodedHeader = base64UrlEncode(JSON.stringify(header))
  const encodedPayload = base64UrlEncode(JSON.stringify(body))
  const signatureInput = `${encodedHeader}.${encodedPayload}`
  const signature = await crypto.subtle.sign('HMAC', await getSigningKey(), encoder.encode(signatureInput))

  return `${signatureInput}.${base64UrlEncode(signature)}`
}

export async function verifyAuthToken(token: string | undefined | null): Promise<AuthTokenPayload | null> {
  if (!token) {
    return null
  }

  const [encodedHeader, encodedPayload, encodedSignature] = token.split('.')
  if (!encodedHeader || !encodedPayload || !encodedSignature) {
    return null
  }

  const signatureInput = `${encodedHeader}.${encodedPayload}`
  const key = await getSigningKey()
  const isValid = await crypto.subtle.verify(
    'HMAC',
    key,
    base64UrlDecode(encodedSignature),
    encoder.encode(signatureInput),
  )

  if (!isValid) {
    return null
  }

  const payload = JSON.parse(decoder.decode(base64UrlDecode(encodedPayload))) as AuthTokenPayload

  if (payload.exp * 1000 < Date.now()) {
    return null
  }

  return payload
}

export function getAuthCookieName() {
  return AUTH_COOKIE_NAME
}
