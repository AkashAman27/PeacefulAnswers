import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    // Try to insert a simple test record
    const testRecord = {
      title: 'Test Episode',
      kand: 'bala-kanda',
      episode_number: 999,
      slug: 'test-episode-999',
      status: 'draft'
    }

    console.log('Attempting to insert test record:', testRecord)

    const { data, error } = await supabase
      .schema('hindu')
      .from('ramayana_pages')
      .insert(testRecord)
      .select()

    if (error) {
      console.error('Insert error:', error)
      return NextResponse.json({
        success: false,
        error: error.message || 'Unknown database error',
        details: error,
        suggestion: (error.message && error.message.includes('does not exist'))
          ? 'The table needs to be created in Supabase manually'
          : 'Check field types and constraints'
      })
    }

    // Clean up test record
    if (data && data.length > 0) {
      await supabase
        .schema('hindu')
        .from('ramayana_pages')
        .delete()
        .eq('id', data[0].id)
    }

    return NextResponse.json({
      success: true,
      message: 'Table exists and is working correctly',
      testData: data
    })

  } catch (error: any) {
    console.error('Test error:', error)
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 })
  }
}