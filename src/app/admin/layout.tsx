import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
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
              <a href="/admin/pages" className="block px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                Pages
              </a>
              <a href="/admin/scriptures" className="block px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                Scriptures
              </a>
              <a href="/admin/deities" className="block px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                Deities
              </a>
              <a href="/admin/practices" className="block px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                Practices
              </a>
              <a href="/admin/media" className="block px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                Media Library
              </a>
              <a href="/admin/translations" className="block px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                Translations
              </a>
              <a href="/admin/seo" className="block px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors">
                SEO Settings
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
                <button className="text-blue-900 hover:text-orange-600">
                  View Site
                </button>
                <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">
                  Publish Changes
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
  )
}