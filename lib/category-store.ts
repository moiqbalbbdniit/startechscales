import crypto from 'crypto'
import { getDb } from '@/lib/db'

export type StoreCategory = {
  id: string
  name: string
  slug: string
  description: string
  imageUrl: string
  icon?: string
  isActive: boolean
  sortOrder: number
  createdAt: string
  updatedAt: string
}

export type CategoryInput = {
  name: string
  slug?: string
  description: string
  imageUrl: string
  icon?: string
  isActive?: boolean
  sortOrder?: number
}

function createSlug(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

async function collection() {
  const db = await getDb()
  const categories = db.collection<StoreCategory>('categories')
  await categories.createIndex({ slug: 1 }, { unique: true, name: 'categories_slug_unique' })
  return categories
}

export async function getCategories(includeInactive = false) {
  const categories = await collection()
  const filter = includeInactive ? {} : { isActive: true }
  return categories.find(filter).sort({ sortOrder: 1, name: 1 }).toArray()
}

export async function createCategory(input: CategoryInput) {
  const categories = await collection()
  const now = new Date().toISOString()
  const category: StoreCategory = {
    id: crypto.randomUUID(),
    name: input.name.trim(),
    slug: createSlug(input.slug || input.name),
    description: input.description.trim(),
    imageUrl: input.imageUrl,
    icon: input.icon?.trim() || undefined,
    isActive: input.isActive ?? true,
    sortOrder: input.sortOrder ?? 0,
    createdAt: now,
    updatedAt: now,
  }
  await categories.insertOne(category)
  return category
}

export async function updateCategory(id: string, input: CategoryInput) {
  const categories = await collection()
  const update = {
    name: input.name.trim(),
    slug: createSlug(input.slug || input.name),
    description: input.description.trim(),
    imageUrl: input.imageUrl,
    icon: input.icon?.trim() || undefined,
    isActive: input.isActive ?? true,
    sortOrder: input.sortOrder ?? 0,
    updatedAt: new Date().toISOString(),
  }
  return categories.findOneAndUpdate({ id }, { $set: update }, { returnDocument: 'after' })
}

export async function deleteCategory(id: string) {
  const categories = await collection()
  return categories.deleteOne({ id })
}
