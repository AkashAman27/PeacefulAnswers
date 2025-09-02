import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function GET() {
  try {
    if (!supabaseAdmin) {
      // Return empty array if no admin client available
      return NextResponse.json([])
    }

    const { data, error } = await supabaseAdmin
      .from('hindu_festival_announcements')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching festival announcements for admin:', error)
      return NextResponse.json([])
    }

    return NextResponse.json(data || [])
  } catch (error) {
    console.error('Admin festival announcements API error:', error)
    return NextResponse.json([])
  }
}