import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

export async function GET() {
  const supabase = getSupabase()
  const { data, error } = await supabase
    .from('reviews')
    .select('id, name, rating, comment, created_at')
    .eq('is_approved', true)
    .order('created_at', { ascending: false })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function POST(request: Request) {
  const supabase = getSupabase()
  let body: { name?: string; rating?: number; comment?: string }
  try { body = await request.json() }
  catch { return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 }) }
  const { name, rating, comment } = body
  if (!name?.trim() || !rating || !comment?.trim())
    return NextResponse.json({ error: 'Thieu thong tin' }, { status: 400 })
  if (rating < 1 || rating > 5)
    return NextResponse.json({ error: 'Rating khong hop le' }, { status: 400 })
  const { data, error } = await supabase
    .from('reviews')
    .insert({ name: name.trim(), rating, comment: comment.trim(), is_approved: true })
    .select('id').single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ success: true, id: data.id }, { status: 201 })
}
