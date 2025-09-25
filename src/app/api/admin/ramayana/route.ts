import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const kand = searchParams.get('kand')
    const status = searchParams.get('status')
    const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : 50
    const offset = searchParams.get('offset') ? parseInt(searchParams.get('offset')!) : 0

    let query = supabase
      .schema('hindu')
      .from('ramayana_pages')
      .select('*')

    if (kand) {
      query = query.eq('kand', kand)
    }

    if (status) {
      query = query.eq('status', status)
    }

    query = query
      .order('kand', { ascending: true })
      .order('episode_number', { ascending: true })
      .range(offset, offset + limit - 1)

    const { data, error } = await query

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json({ error: 'Failed to fetch pages' }, { status: 500 })
    }

    return NextResponse.json({ data, success: true })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.title || !body.kand || !body.slug) {
      return NextResponse.json(
        { error: 'Title, kand, and slug are required' },
        { status: 400 }
      )
    }

    // Check if slug already exists for this kand
    const { data: existingPage } = await supabase
      .schema('hindu')
      .from('ramayana_pages')
      .select('id')
      .eq('kand', body.kand)
      .eq('slug', body.slug)
      .single()

    if (existingPage) {
      return NextResponse.json(
        { error: 'A page with this slug already exists in this kand' },
        { status: 409 }
      )
    }

    const pageData = {
      ...body,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }

    const { data, error } = await supabase
      .schema('hindu')
      .from('ramayana_pages')
      .insert(pageData)
      .select('*')
      .single()

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json({ error: 'Failed to create page' }, { status: 500 })
    }

    return NextResponse.json({ data, success: true }, { status: 201 })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}