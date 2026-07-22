import { NextResponse } from 'next/server'
import { getCategories } from '@/lib/category-store'

export const runtime = 'nodejs'

export async function GET() {
  const categories = await getCategories()
  return NextResponse.json({ success: true, data: categories })
}
