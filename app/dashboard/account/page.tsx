'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

type Profile = { name: string; email: string; phone?: string; company?: string }

export default function AccountPage() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [form, setForm] = useState<Profile>({ name: '', email: '', phone: '', company: '' })
  const [editing, setEditing] = useState(false)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetch('/api/users/profile', { cache: 'no-store' })
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          setProfile(result.data)
          setForm(result.data)
        }
      })
  }, [])

  const save = async () => {
    setSaving(true)
    try {
      const response = await fetch('/api/users/profile', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || 'Unable to update profile')
      setProfile(result.data)
      setForm(result.data)
      setEditing(false)
      toast.success('Profile updated')
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Unable to update profile')
    } finally {
      setSaving(false)
    }
  }

  const setField = (field: keyof Profile, value: string) => setForm((current) => ({ ...current, [field]: value }))

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Link href="/dashboard" className="text-sm font-medium text-primary hover:underline">← Dashboard</Link>
        <div className="mt-6 rounded-2xl border border-slate-200 p-6 dark:border-slate-800 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div><h1 className="text-3xl font-bold">Account settings</h1><p className="mt-2 text-slate-600 dark:text-slate-400">Your details are saved securely in your account.</p></div>
            {profile && <Button variant="outline" onClick={() => { setForm(profile); setEditing((value) => !value) }}>{editing ? 'Cancel' : 'Edit'}</Button>}
          </div>
          {!profile ? <p className="mt-8 text-slate-600 dark:text-slate-400">Loading profile…</p> : (
            <div className="mt-8 space-y-5">
              {([['name', 'Full name'], ['email', 'Email address'], ['phone', 'Phone number'], ['company', 'Company']] as const).map(([field, label]) => (
                <label key={field} className="block"><span className="mb-2 block text-sm font-medium">{label}</span><input type={field === 'email' ? 'email' : 'text'} value={form[field] || ''} disabled={!editing} onChange={(event) => setField(field, event.target.value)} className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 disabled:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:disabled:bg-slate-900/50" /></label>
              ))}
              {editing && <Button onClick={save} disabled={saving}>{saving ? 'Saving…' : 'Save changes'}</Button>}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
