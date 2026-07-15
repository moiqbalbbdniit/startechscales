import { promises as fs } from 'fs'
import path from 'path'
import crypto from 'crypto'

export type StoredUser = {
  id: string
  name: string
  email: string
  role: 'customer' | 'admin'
  passwordSalt: string
  passwordHash: string
  createdAt: string
  updatedAt: string
}

type AuthStore = {
  users: StoredUser[]
}

const DATA_DIR = path.join(process.cwd(), 'data')
const STORE_PATH = path.join(DATA_DIR, 'auth-store.json')

async function ensureStore() {
  await fs.mkdir(DATA_DIR, { recursive: true })

  try {
    await fs.access(STORE_PATH)
  } catch {
    await fs.writeFile(STORE_PATH, JSON.stringify({ users: [] }, null, 2), 'utf8')
  }
}

async function readStore(): Promise<AuthStore> {
  await ensureStore()
  const raw = await fs.readFile(STORE_PATH, 'utf8')
  return JSON.parse(raw) as AuthStore
}

async function writeStore(store: AuthStore) {
  await ensureStore()
  await fs.writeFile(STORE_PATH, JSON.stringify(store, null, 2), 'utf8')
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
    role: user.role,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  }
}

export async function findUserByEmail(email: string) {
  const store = await readStore()
  return store.users.find((user) => user.email === normalizeEmail(email)) ?? null
}

export async function findUserById(id: string) {
  const store = await readStore()
  return store.users.find((user) => user.id === id) ?? null
}

export async function createUser(input: { name: string; email: string; password: string; role?: 'customer' | 'admin' }) {
  const store = await readStore()
  const normalizedEmail = normalizeEmail(input.email)

  if (store.users.some((user) => user.email === normalizedEmail)) {
    throw new Error('Email already exists')
  }

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

  store.users.push(user)
  await writeStore(store)

  return user
}
