'use client'

import { useAuth } from '@/hooks/useAuth'
import { AlertTriangle, ArrowLeft, LogOut, Shield } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function UnauthorizedPage() {
  const { user, profile, signOut } = useAuth()
  const router = useRouter()

  const handleSignOut = async () => {
    await signOut()
    router.push('/admin/login')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        {/* Error Icon */}
        <div className="mx-auto w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
          <AlertTriangle className="w-10 h-10 text-red-600" />
        </div>

        {/* Error Message */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Access Denied</h1>
        <p className="text-lg text-gray-700 mb-6">
          You don't have permission to access the admin panel.
        </p>

        {/* User Info */}
        {user && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-5 h-5 text-gray-400 mr-2" />
              <span className="text-sm text-gray-600">Current Account</span>
            </div>
            <p className="font-medium text-gray-900 mb-2">{user.email}</p>
            <p className="text-sm text-gray-600">
              Role: <span className="font-medium">{profile?.role || 'No role assigned'}</span>
            </p>
          </div>
        )}

        {/* Required Access */}
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
          <h3 className="font-medium text-orange-800 mb-2">Required Access Level</h3>
          <p className="text-sm text-orange-700">
            Super Admin privileges are required to access the PeacefulAnswers admin panel.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleSignOut}
            className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
          
          <Link
            href="/"
            className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Website
          </Link>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-sm text-gray-500">
          <p>Need admin access?</p>
          <p>Contact the system administrator for role assignment.</p>
        </div>
      </div>
    </div>
  )
}