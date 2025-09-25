import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  try {
    // Let's check what tables exist in the hindu schema by testing some we know exist
    const tests = [
      { table: 'sacred_places', schema: 'hindu' },
      { table: 'questions', schema: 'public' },
      { table: 'deities', schema: 'hindu' },
    ]

    const results = []

    for (const test of tests) {
      try {
        const { data, error } = await supabase
          .schema(test.schema)
          .from(test.table)
          .select('id')
          .limit(1)

        results.push({
          table: `${test.schema}.${test.table}`,
          exists: !error,
          error: error?.message || null
        })
      } catch (e: any) {
        results.push({
          table: `${test.schema}.${test.table}`,
          exists: false,
          error: e.message
        })
      }
    }

    return NextResponse.json({
      success: true,
      tableTests: results
    })

  } catch (error: any) {
    return NextResponse.json({
      success: false,
      error: error.message
    }, { status: 500 })
  }
}