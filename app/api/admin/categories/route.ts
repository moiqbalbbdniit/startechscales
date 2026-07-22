import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createCategory, getCategories } from '@/lib/category-store'
import { requireAdmin } from '@/lib/auth-server'

export const runtime = 'nodejs'

export const categorySchema = z.object({
  name: z.string().trim().min(2, 'Category name must be at least 2 characters').max(100),
  slug: z.string().trim().max(120).optional(),
  description: z.string().trim().min(5, 'Description must be at least 5 characters').max(500),
  imageUrl: z.string().url('Upload a category image first'),
  icon: z.string().trim().max(12).optional(),
  isActive: z.boolean().optional(),
  sortOrder: z.number().int().min(0).max(10000).optional(),
})

export async function GET(request: NextRequest) {
  if (!(await requireAdmin(request))) return NextResponse.json({ success: false, error: 'Admin access is required' }, { status: 403 })
  return NextResponse.json({ success: true, data: await getCategories(true) })
}

export async function POST(request: NextRequest) {
  if (!(await requireAdmin(request))) return NextResponse.json({ success: false, error: 'Admin access is required' }, { status: 403 })
  const parsed = categorySchema.safeParse(await request.json())
  if (!parsed.success) return NextResponse.json({ success: false, error: parsed.error.issues[0]?.message || 'Invalid category' }, { status: 400 })

  try {
    return NextResponse.json({ success: true, data: await createCategory(parsed.data) }, { status: 201 })
  } catch (error) {
    const duplicate = typeof error === 'object' && error && 'code' in error && error.code === 11000
    return NextResponse.json({ success: false, error: duplicate ? 'A category with this slug already exists' : 'Unable to create category' }, { status: duplicate ? 409 : 500 })
  }
}
