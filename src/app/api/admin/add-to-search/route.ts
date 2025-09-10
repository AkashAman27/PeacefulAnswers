import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { searchEntry } = body

    if (!searchEntry) {
      return NextResponse.json(
        { error: 'Search entry data is required' },
        { status: 400 }
      )
    }

    // Validate required fields
    const requiredFields = ['title', 'slug', 'content_type', 'description', 'url_path']
    for (const field of requiredFields) {
      if (!searchEntry[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        )
      }
    }

    // Use the admin client to bypass RLS
    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: 'Admin access not configured' },
        { status: 500 }
      )
    }

    // Check if entry already exists
    const { data: existingEntry, error: checkError } = await supabaseAdmin
      .schema('hindu')
      .from('search_content')
      .select('id')
      .eq('slug', searchEntry.slug)
      .single()

    if (checkError && checkError.code !== 'PGRST116') {
      console.error('Error checking existing entry:', checkError)
      return NextResponse.json(
        { error: 'Database error while checking existing entry' },
        { status: 500 }
      )
    }

    let result
    if (existingEntry) {
      // Update existing entry
      const { data, error } = await supabaseAdmin
        .schema('hindu')
        .from('search_content')
        .update({
          ...searchEntry,
          updated_at: new Date().toISOString()
        })
        .eq('slug', searchEntry.slug)
        .select()

      if (error) {
        console.error('Error updating search entry:', error)
        return NextResponse.json(
          { error: 'Failed to update search entry' },
          { status: 500 }
        )
      }

      result = { action: 'updated', data: data[0] }
    } else {
      // Insert new entry
      const { data, error } = await supabaseAdmin
        .schema('hindu')
        .from('search_content')
        .insert([{
          ...searchEntry,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        }])
        .select()

      if (error) {
        console.error('Error inserting search entry:', error)
        return NextResponse.json(
          { error: 'Failed to insert search entry' },
          { status: 500 }
        )
      }

      result = { action: 'created', data: data[0] }
    }

    return NextResponse.json({
      success: true,
      message: `Search entry ${result.action} successfully`,
      ...result
    })

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Add to Search API',
    version: '1.0.0',
    description: 'API endpoint for adding content to the Hindu search database'
  })
}