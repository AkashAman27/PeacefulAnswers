'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import { Loader2, Shield, AlertTriangle } from 'lucide-react'

interface AdminRouteProps {
  children: React.ReactNode
  requireSuperAdmin?: boolean
}

export default function AdminRoute({ children, requireSuperAdmin = true }: AdminRouteProps) {
  const { user, profile, loading, isSuperAdmin, isAdmin } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push('/admin/login')
        return
      }

      if (requireSuperAdmin && !isSuperAdmin) {
        router.push('/admin/unauthorized')
        return
      }

      if (!requireSuperAdmin && !isAdmin) {
        router.push('/admin/unauthorized')
        return
      }
    }
  }, [user, profile, loading, isSuperAdmin, isAdmin, requireSuperAdmin, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Verifying authentication...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Shield className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">Redirecting to login...</p>
        </div>
      </div>
    )
  }

  if (requireSuperAdmin && !isSuperAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h1>
          <p className="text-gray-600 mb-4">
            You need super admin privileges to access this area.
          </p>
          <p className="text-sm text-gray-500">
            Current role: {profile?.role || 'No role assigned'}
          </p>
        </div>
      </div>
    )
  }

  if (!requireSuperAdmin && !isAdmin) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <AlertTriangle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h1>
          <p className="text-gray-600 mb-4">
            You need admin privileges to access this area.
          </p>
          <p className="text-sm text-gray-500">
            Current role: {profile?.role || 'No role assigned'}
          </p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}

// Higher-order component for page-level protection
export function withAdminAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  requireSuperAdmin = true
) {
  return function AdminProtectedComponent(props: P) {
    return (
      <AdminRoute requireSuperAdmin={requireSuperAdmin}>
        <WrappedComponent {...props} />
      </AdminRoute>
    )
  }
}