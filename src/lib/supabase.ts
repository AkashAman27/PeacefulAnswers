import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Hindu schema client for deity pages
export const hinduSupabase = createClient(supabaseUrl, supabaseAnonKey, {
  db: {
    schema: 'hindu'
  }
})

// For server-side operations - only create if we have the service role key
let supabaseAdmin: any = null

if (typeof window === 'undefined') {
  // Only on server side
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  
  if (supabaseServiceKey) {
    supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      },
      db: {
        schema: 'hindu'
      }
    })
  }
}

export { supabaseAdmin }