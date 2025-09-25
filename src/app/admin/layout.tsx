'use client'

import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'
import AdminRoute from '@/components/auth/AdminRoute'
import { useAuth } from '@/hooks/useAuth'
import { LogOut, User, Shield } from 'lucide-react'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const { user, profile, signOut } = useAuth()
  
  // Don't wrap login and unauthorized pages with AdminRoute
  const publicAdminPages = ['/admin/login', '/admin/unauthorized']
  const isPublicAdminPage = publicAdminPages.includes(pathname || '')

  const handleSignOut = async () => {
    await signOut()
  }

  if (isPublicAdminPage) {
    return <div className={inter.className}>{children}</div>
  }
  return (
    <AdminRoute requireSuperAdmin={true}>
      <div className={`${inter.className} min-h-screen bg-gray-50`}>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-blue-900 text-white min-h-screen">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-orange-600 to-yellow-400 flex items-center justify-center">
                <span className="text-white text-sm font-bold">ॐ</span>
              </div>
              <span className="text-lg font-bold">PeacefulAnswers CMS</span>
            </div>
            
            <nav className="space-y-2">
              <a href="/admin" className="block px-4 py-2 rounded-lg bg-orange-600 text-white">
                Dashboard
              </a>
              <a href="/admin/questions" className="block px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                Questions (FAQ)
              </a>
              <a href="/admin/pages" className="block px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                Pages
              </a>
              <a href="/admin/scriptures" className="block px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                Scriptures
              </a>
              <a href="/admin/deities" className="block px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                Deities
              </a>
              <a href="/admin/sacred-places" className="block px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors flex items-center space-x-2">
                <span>🏔️</span>
                <span>Sacred Places</span>
              </a>
              <a href="/admin/ramayana" className="block px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors flex items-center space-x-2">
                <span>📖</span>
                <span>Ramayana</span>
              </a>
              <a href="/admin/festivals" className="block px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                Festivals
              </a>
              <a href="/admin/practices" className="block px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                Practices
              </a>
              <a href="/admin/media" className="block px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                Media Library
              </a>
              <a href="/admin/image-generator" className="block px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors flex items-center space-x-2">
                <span>🎨</span>
                <span>AI Image Generator</span>
              </a>
              <a href="/admin/translations" className="block px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                Translations
              </a>
              <a href="/admin/seo" className="block px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                SEO Settings
              </a>
              <a href="/admin/bulk-upload" className="block px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors flex items-center space-x-2">
                <span>📁</span>
                <span>Bulk Upload</span>
              </a>
            </nav>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1">
          {/* Top Bar */}
          <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold text-blue-900">Content Management System</h1>
              <div className="flex items-center space-x-4">
                <Link href="/" className="text-blue-900 hover:text-orange-600 transition-colors">
                  View Site
                </Link>
                
                {/* User Info */}
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{user?.email}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span className="font-medium text-green-600">{profile?.role}</span>
                  </div>
                </div>
                
                <button 
                  onClick={handleSignOut}
                  className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </div>
          
          {/* Page Content */}
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
      </div>
    </AdminRoute>
  )
}