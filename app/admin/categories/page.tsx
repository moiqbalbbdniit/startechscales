'use client'

import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import Image from 'next/image'
import { Edit, ImageUp, Plus, Trash2, X } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

type Category = { id: string; name: string; slug: string; description: string; imageUrl: string; icon?: string; isActive: boolean; sortOrder: number }
type FormState = Omit<Category, 'id'>
const initialForm: FormState = { name: '', slug: '', description: '', imageUrl: '', icon: '⚖️', isActive: true, sortOrder: 0 }

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [form, setForm] = useState<FormState>(initialForm)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [open, setOpen] = useState(false)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)

  const loadCategories = async () => {
    const response = await fetch('/api/admin/categories', { cache: 'no-store' })
    const result = await response.json()
    if (response.ok) setCategories(result.data || [])
    else toast.error(result.error || 'Unable to load categories')
  }

  useEffect(() => { void loadCategories() }, [])

  const updateForm = <K extends keyof FormState>(key: K, value: FormState[K]) => setForm((current) => ({ ...current, [key]: value }))
  const close = () => { setOpen(false); setEditingId(null); setForm(initialForm) }

  const uploadImage = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith('image/')) return toast.error('Please choose an image file')
    setUploading(true)
    try {
      const authResponse = await fetch('/api/admin/uploads/auth')
      const auth = await authResponse.json()
      if (!authResponse.ok) throw new Error(auth.error || 'ImageKit is not configured')
      const upload = new FormData()
      upload.append('file', file)
      upload.append('fileName', `category-${Date.now()}-${file.name}`)
      upload.append('publicKey', auth.data.publicKey)
      upload.append('signature', auth.data.signature)
      upload.append('token', auth.data.token)
      upload.append('expire', String(auth.data.expire))
      upload.append('folder', '/star-tech-scales/categories')
      upload.append('useUniqueFileName', 'true')
      const response = await fetch('https://upload.imagekit.io/api/v1/files/upload', { method: 'POST', body: upload })
      const result = await response.json()
      if (!response.ok) throw new Error(result.message || 'Image upload failed')
      updateForm('imageUrl', result.url)
      toast.success('Category image uploaded')
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Image upload failed')
    } finally {
      setUploading(false)
      event.target.value = ''
    }
  }

  const submit = async (event: FormEvent) => {
    event.preventDefault()
    setSaving(true)
    try {
      const response = await fetch(editingId ? `/api/admin/categories/${editingId}` : '/api/admin/categories', { method: editingId ? 'PATCH' : 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || 'Unable to save category')
      toast.success(editingId ? 'Category updated' : 'Category created')
      close()
      await loadCategories()
    } catch (error) { toast.error(error instanceof Error ? error.message : 'Unable to save category') } finally { setSaving(false) }
  }

  const edit = (category: Category) => { setEditingId(category.id); setForm({ ...category }); setOpen(true) }
  const remove = async (category: Category) => {
    if (!confirm(`Delete “${category.name}”? This cannot be undone.`)) return
    const response = await fetch(`/api/admin/categories/${category.id}`, { method: 'DELETE' })
    const result = await response.json()
    if (!response.ok) return toast.error(result.error || 'Unable to delete category')
    toast.success('Category deleted')
    await loadCategories()
  }

  return <div className="min-h-screen bg-background px-4 py-10 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><h1 className="text-3xl font-bold">Categories</h1><p className="mt-1 text-muted-foreground">Create, edit, publish, and remove product categories.</p></div><Button onClick={() => { setForm(initialForm); setEditingId(null); setOpen(true) }}><Plus className="mr-2" size={18} />Add category</Button></div><div className="overflow-hidden rounded-xl border border-border bg-card">{categories.length === 0 ? <p className="p-10 text-center text-muted-foreground">No categories yet. Add your first category to show it on the homepage.</p> : <div className="divide-y divide-border">{categories.map((category) => <div key={category.id} className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center"><div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-lg bg-muted"><Image src={category.imageUrl} alt={category.name} fill className="object-cover" unoptimized /></div><div className="min-w-0 flex-1"><div className="flex items-center gap-2"><h2 className="font-semibold">{category.icon} {category.name}</h2><span className={`rounded-full px-2 py-0.5 text-xs ${category.isActive ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>{category.isActive ? 'Visible' : 'Hidden'}</span></div><p className="mt-1 truncate text-sm text-muted-foreground">/{category.slug} · {category.description}</p></div><div className="flex gap-2"><Button variant="outline" size="sm" onClick={() => edit(category)}><Edit size={16} /></Button><Button variant="outline" size="sm" className="text-red-600" onClick={() => void remove(category)}><Trash2 size={16} /></Button></div></div>)}</div>}</div></div>{open && <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/55 p-4"><form onSubmit={submit} className="mx-auto my-8 max-w-2xl rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-950"><div className="flex items-center justify-between"><h2 className="text-xl font-bold">{editingId ? 'Edit category' : 'New category'}</h2><Button type="button" variant="ghost" size="sm" onClick={close}><X size={18} /></Button></div><div className="mt-6 grid gap-4 sm:grid-cols-2"><label className="sm:col-span-2"><span className="mb-1 block text-sm font-medium">Name</span><input required value={form.name} onChange={(e) => updateForm('name', e.target.value)} className="w-full rounded-lg border p-3 dark:bg-slate-900" /></label><label><span className="mb-1 block text-sm font-medium">Slug (optional)</span><input value={form.slug} onChange={(e) => updateForm('slug', e.target.value)} placeholder="generated-from-name" className="w-full rounded-lg border p-3 dark:bg-slate-900" /></label><label><span className="mb-1 block text-sm font-medium">Icon (optional)</span><input value={form.icon || ''} onChange={(e) => updateForm('icon', e.target.value)} className="w-full rounded-lg border p-3 dark:bg-slate-900" /></label><label className="sm:col-span-2"><span className="mb-1 block text-sm font-medium">Description</span><textarea required value={form.description} onChange={(e) => updateForm('description', e.target.value)} className="min-h-24 w-full rounded-lg border p-3 dark:bg-slate-900" /></label><label><span className="mb-1 block text-sm font-medium">Display order</span><input type="number" min="0" value={form.sortOrder} onChange={(e) => updateForm('sortOrder', Number(e.target.value))} className="w-full rounded-lg border p-3 dark:bg-slate-900" /></label><label className="flex items-end gap-2 pb-3"><input type="checkbox" checked={form.isActive} onChange={(e) => updateForm('isActive', e.target.checked)} />Show this category on the website</label><div className="sm:col-span-2"><span className="mb-1 block text-sm font-medium">Category image</span><div className="flex flex-wrap items-center gap-3"><label className="cursor-pointer"><input type="file" accept="image/*" className="hidden" onChange={uploadImage} /><span className="inline-flex items-center rounded-lg border px-3 py-2 text-sm"><ImageUp className="mr-2" size={16} />{uploading ? 'Uploading…' : 'Upload with ImageKit'}</span></label>{form.imageUrl && <Image src={form.imageUrl} alt="Selected category" width={96} height={64} className="h-16 w-24 rounded object-cover" unoptimized />}</div></div></div><div className="mt-6 flex justify-end gap-3"><Button type="button" variant="outline" onClick={close}>Cancel</Button><Button disabled={saving || uploading}>{saving ? 'Saving…' : 'Save category'}</Button></div></form></div>}</div>
}
