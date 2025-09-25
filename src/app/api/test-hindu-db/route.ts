import { NextResponse } from 'next/server'
import { hinduSupabase } from '@/lib/supabase'

export async function GET() {
  try {
    console.log('Testing hindu database connection...')

    // Test categories query
    const { data: categories, error: catError } = await hinduSupabase
      .from('sacred_place_categories')
      .select('id, name, slug')
      .limit(3)

    console.log('Categories test result:', { categories, catError })

    // Test sacred places query
    const { data: places, error: placesError } = await hinduSupabase
      .from('sacred_places')
      .select('id, name, slug')
      .limit(3)

    console.log('Places test result:', { places, placesError })

    return NextResponse.json({
      success: true,
      results: {
        categories: { data: categories, error: catError },
        places: { data: places, error: placesError }
      }
    })

  } catch (error) {
    console.error('Test API error:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}