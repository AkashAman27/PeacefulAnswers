'use client'

import { useEffect } from 'react'
import { supabase } from '@/lib/supabaseStorage'

export function SupabaseErrorBoundary({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Clear any existing auth errors on component mount
    const clearAuthErrors = async () => {
      try {
        // Sign out any existing session to clear tokens
        await supabase.auth.signOut()
      } catch (error) {
        // Ignore errors during cleanup
        console.log('Cleared Supabase auth state')
      }
    }

    // Listen for auth errors and clear them
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'TOKEN_REFRESHED') {
        console.log('Supabase token refreshed')
      }
    })

    clearAuthErrors()

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  return <>{children}</>
}

export default SupabaseErrorBoundary