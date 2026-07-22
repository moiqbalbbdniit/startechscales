import crypto from 'crypto'
import { getDb } from '@/lib/db'

export type StoredUser = {
  id: string
  name: string
  email: string
  phone?: string
  company?: string
  role: 'customer' | 'admin'
  passwordSalt: string
  passwordHash: string
  createdAt: string
  updatedAt: string
}

async function usersCollection() {
  const db = await getDb()
  const users = db.collection<StoredUser>('users')
  await users.createIndex({ email: 1 }, { unique: true, name: 'users_email_unique' })
  return users
}

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase()
}

export function hashPassword(password: string, salt = crypto.randomBytes(16).toString('hex')) {
  const hash = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex')
  return { salt, hash }
}

export function verifyPassword(password: string, passwordSalt: string, passwordHash: string) {
  const attempt = crypto.pbkdf2Sync(password, passwordSalt, 100000, 64, 'sha512')
  const actual = Buffer.from(passwordHash, 'hex')
  return actual.length === attempt.length && crypto.timingSafeEqual(actual, attempt)
}

export function toPublicUser(user: StoredUser) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    company: user.company,
    role: user.role,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  }
}

export async function findUserByEmail(email: string) {
  const users = await usersCollection()
  return users.findOne({ email: normalizeEmail(email) })
}

export async function updateUserProfile(
  id: string,
  input: { name: string; email: string; phone?: string; company?: string },
) {
  const users = await usersCollection()
  const email = normalizeEmail(input.email)
  const existing = await users.findOne({ email, id: { $ne: id } })

  if (existing) {
    throw new Error('Email already exists')
  }

  const result = await users.findOneAndUpdate(
    { id },
    {
      $set: {
        name: input.name.trim(),
        email,
        phone: input.phone?.trim() || undefined,
        company: input.company?.trim() || undefined,
        updatedAt: new Date().toISOString(),
      },
    },
    { returnDocument: 'after' },
  )

  return result
}

export async function findUserById(id: string) {
  const users = await usersCollection()
  return users.findOne({ id })
}

export async function createUser(input: { name: string; email: string; password: string; role?: 'customer' | 'admin' }) {
  const users = await usersCollection()
  const normalizedEmail = normalizeEmail(input.email)

  const now = new Date().toISOString()
  const { salt, hash } = hashPassword(input.password)

  const user: StoredUser = {
    id: crypto.randomUUID(),
    name: input.name.trim(),
    email: normalizedEmail,
    role: input.role ?? 'customer',
    passwordSalt: salt,
    passwordHash: hash,
    createdAt: now,
    updatedAt: now,
  }

  try {
    await users.insertOne(user)
  } catch (error) {
    if (typeof error === 'object' && error && 'code' in error && error.code === 11000) {
      throw new Error('Email already exists')
    }

    throw error
  }

  return user
}
