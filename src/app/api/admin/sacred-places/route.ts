import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  try {
    console.log('API: Fetching sacred places...')

    // Direct SQL query to bypass any client-side issues
    const { data, error } = await supabase.rpc('get_sacred_places_with_categories')

    if (error) {
      console.error('RPC error, trying direct query:', error)

      // Fallback to direct query
      const { data: places, error: queryError } = await supabase
        .from('hindu.sacred_places')
        .select(`
          *,
          category:hindu.sacred_place_categories(name, slug)
        `)
        .order('created_at', { ascending: false })

      if (queryError) {
        console.error('Direct query error:', queryError)
        throw queryError
      }

      return NextResponse.json({
        success: true,
        data: places || []
      })
    }

    return NextResponse.json({
      success: true,
      data: data || []
    })

  } catch (error: any) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch sacred places: ' + error.message },
      { status: 500 }
    )
  }
}