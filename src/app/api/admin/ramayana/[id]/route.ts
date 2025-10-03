import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const { data, error } = await supabase
      .schema('hindu')
      .from('ramayana_pages')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json({ error: 'Page not found' }, { status: 404 })
      }
      console.error('Database error:', error)
      return NextResponse.json({ error: 'Failed to fetch page' }, { status: 500 })
    }

    return NextResponse.json({ data, success: true })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await request.json()

    // Validate required fields
    if (!body.title || !body.kand || !body.slug) {
      return NextResponse.json(
        { error: 'Title, kand, and slug are required' },
        { status: 400 }
      )
    }

    // Check if slug already exists for this kand (excluding current page)
    const { data: existingPage } = await supabase
      .schema('hindu')
      .from('ramayana_pages')
      .select('id')
      .eq('kand', body.kand)
      .eq('slug', body.slug)
      .neq('id', id)
      .single()

    if (existingPage) {
      return NextResponse.json(
        { error: 'A page with this slug already exists in this kand' },
        { status: 409 }
      )
    }

    const updateData = {
      ...body,
      updated_at: new Date().toISOString()
    }

    const { data, error } = await supabase
      .schema('hindu')
      .from('ramayana_pages')
      .update(updateData)
      .eq('id', id)
      .select('*')
      .single()

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json({ error: 'Page not found' }, { status: 404 })
      }
      console.error('Database error:', error)
      return NextResponse.json({ error: 'Failed to update page' }, { status: 500 })
    }

    return NextResponse.json({ data, success: true })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const { error } = await supabase
      .schema('hindu')
      .from('ramayana_pages')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json({ error: 'Failed to delete page' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}