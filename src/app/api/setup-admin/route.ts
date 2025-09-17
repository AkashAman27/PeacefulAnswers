import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()
    
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    // First, check if user_profiles table exists and create if needed
    const { data: tables, error: tableError } = await supabase
      .from('information_schema.tables')
      .select('table_name')
      .eq('table_schema', 'public')
      .eq('table_name', 'user_profiles')

    console.log('Tables check:', { tables, tableError })

    // Try to get the user from auth.users
    const { data: users, error: usersError } = await supabase
      .from('auth.users')
      .select('id, email')
      .eq('email', email)
      .single()

    if (usersError) {
      console.error('Error finding user:', usersError)
      return NextResponse.json({ 
        error: 'User not found in auth.users', 
        details: usersError.message 
      }, { status: 404 })
    }

    // Check if profile already exists
    const { data: existingProfile, error: profileCheckError } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('email', users.email)
      .single()

    if (existingProfile) {
      return NextResponse.json({ 
        message: 'Profile already exists', 
        profile: existingProfile 
      })
    }

    // Create the profile
    const { data: newProfile, error: createError } = await supabase
      .from('user_profiles')
      .insert({
        email: users.email,
        username: 'super_admin',
        role: 'super_admin',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
      .select()
      .single()

    if (createError) {
      console.error('Error creating profile:', createError)
      return NextResponse.json({ 
        error: 'Failed to create profile', 
        details: createError.message 
      }, { status: 500 })
    }

    return NextResponse.json({ 
      message: 'Profile created successfully', 
      profile: newProfile 
    })

  } catch (error) {
    console.error('Setup admin error:', error)
    return NextResponse.json({ 
      error: 'Internal server error', 
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

export async function GET() {
  try {
    // List all profiles for debugging
    const { data: profiles, error } = await supabase
      .from('user_profiles')
      .select('*')

    if (error) {
      return NextResponse.json({ 
        error: 'Failed to fetch profiles', 
        details: error.message 
      }, { status: 500 })
    }

    return NextResponse.json({ profiles })
  } catch (error) {
    console.error('Get profiles error:', error)
    return NextResponse.json({ 
      error: 'Internal server error', 
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}