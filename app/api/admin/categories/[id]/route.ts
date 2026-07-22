import { NextRequest, NextResponse } from 'next/server'
import { categorySchema } from '@/app/api/admin/categories/route'
import { deleteCategory, updateCategory } from '@/lib/category-store'
import { requireAdmin } from '@/lib/auth-server'

export const runtime = 'nodejs'

type Context = { params: Promise<{ id: string }> }

export async function PATCH(request: NextRequest, { params }: Context) {
  if (!(await requireAdmin(request))) return NextResponse.json({ success: false, error: 'Admin access is required' }, { status: 403 })
  const parsed = categorySchema.safeParse(await request.json())
  if (!parsed.success) return NextResponse.json({ success: false, error: parsed.error.issues[0]?.message || 'Invalid category' }, { status: 400 })
  const { id } = await params

  try {
    const category = await updateCategory(id, parsed.data)
    if (!category) return NextResponse.json({ success: false, error: 'Category not found' }, { status: 404 })
    return NextResponse.json({ success: true, data: category })
  } catch (error) {
    const duplicate = typeof error === 'object' && error && 'code' in error && error.code === 11000
    return NextResponse.json({ success: false, error: duplicate ? 'A category with this slug already exists' : 'Unable to update category' }, { status: duplicate ? 409 : 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: Context) {
  if (!(await requireAdmin(request))) return NextResponse.json({ success: false, error: 'Admin access is required' }, { status: 403 })
  const { id } = await params
  const result = await deleteCategory(id)
  if (!result.deletedCount) return NextResponse.json({ success: false, error: 'Category not found' }, { status: 404 })
  return NextResponse.json({ success: true })
}
