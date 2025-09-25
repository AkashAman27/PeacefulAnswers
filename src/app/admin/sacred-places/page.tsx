'use client'

import { useState, useEffect } from 'react'
import { hinduSupabase } from '@/lib/supabase'
import Link from 'next/link'
import Image from 'next/image'
import {
  Search,
  Plus,
  Edit,
  Trash2,
  Eye,
  MapPin,
  Mountain,
  Star,
  Upload,
  FileText,
  Settings,
  Calendar,
  MoreHorizontal,
  Filter
} from 'lucide-react'

interface SacredPlace {
  id: string
  name: string
  sanskrit_name?: string
  slug: string
  title?: string
  subtitle?: string
  description?: string
  featured_image_url?: string
  status: 'draft' | 'published' | 'archived'
  is_featured: boolean
  view_count: number
  created_at: string
  updated_at: string
  category?: {
    name: string
    slug: string
  }
}

interface Category {
  id: string
  name: string
  slug: string
  description?: string
}

export default function SacredPlacesAdmin() {
  const [sacredPlaces, setSacredPlaces] = useState<SacredPlace[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [categoryFilter, setCategoryFilter] = useState<string>('all')
  const [showBulkUpload, setShowBulkUpload] = useState(false)
  const [bulkData, setBulkData] = useState('')
  const [uploading, setUploading] = useState(false)

  useEffect(() => {
    fetchSacredPlaces()
    fetchCategories()
  }, [])

  const fetchSacredPlaces = async () => {
    try {
      console.log('Starting to fetch sacred places...')

      // Try direct API approach first
      const response = await fetch('/api/admin/sacred-places', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        const result = await response.json()
        console.log('API fetch successful:', result)
        setSacredPlaces(result.data || [])
        return
      } else {
        console.log('API fetch failed, trying Supabase client...')
      }

      // Fallback to Supabase client
      const { data: simpleData, error: simpleError } = await hinduSupabase
        .from('sacred_places')
        .select('*')
        .limit(10)

      console.log('Supabase query result:', { simpleData, simpleError })

      if (simpleError) {
        console.error('Supabase query failed:', simpleError)
        return
      }

      console.log('Using simple Supabase data:', simpleData)
      setSacredPlaces(simpleData || [])
    } catch (error) {
      console.error('Error fetching sacred places:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchCategories = async () => {
    try {
      const { data, error } = await hinduSupabase
        .from('sacred_place_categories')
        .select('*')
        .eq('is_active', true)
        .order('sort_order')

      if (error) throw error
      setCategories(data || [])
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Are you sure you want to delete "${name}"?`)) return

    try {
      const { error } = await hinduSupabase
        .from('sacred_places')
        .delete()
        .eq('id', id)

      if (error) throw error

      setSacredPlaces(places => places.filter(p => p.id !== id))
      alert('Sacred place deleted successfully!')
    } catch (error: any) {
      console.error('Error deleting sacred place:', error)
      alert('Error deleting sacred place: ' + error.message)
    }
  }

  const handleBulkUpload = async () => {
    if (!bulkData.trim()) {
      alert('Please enter JSON data')
      return
    }

    setUploading(true)
    try {
      const jsonData = JSON.parse(bulkData)

      const response = await fetch('/api/bulk-upload/sacred-places', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData)
      })

      const result = await response.json()

      if (response.ok) {
        alert(`Bulk upload successful! ${result.summary.successful} items uploaded, ${result.summary.failed} failed.`)
        setBulkData('')
        setShowBulkUpload(false)
        fetchSacredPlaces()
      } else {
        alert('Bulk upload failed: ' + result.error)
      }
    } catch (error: any) {
      console.error('Bulk upload error:', error)
      alert('Error parsing JSON or uploading: ' + error.message)
    } finally {
      setUploading(false)
    }
  }

  const filteredPlaces = sacredPlaces.filter(place => {
    const matchesSearch = place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         place.sanskrit_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         place.slug.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === 'all' || place.status === statusFilter
    const matchesCategory = categoryFilter === 'all' || place.category?.slug === categoryFilter

    return matchesSearch && matchesStatus && matchesCategory
  })

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Mountain className="w-8 h-8 text-blue-600" />
                Sacred Places CMS
              </h1>
              <p className="text-gray-600 mt-2">
                Manage sacred places content, upload in bulk, and edit with rich text editor
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowBulkUpload(!showBulkUpload)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                <Upload className="w-4 h-4" />
                Bulk Upload
              </button>
              <Link
                href="/admin/sacred-places/new"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add New Place
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Bulk Upload Modal */}
        {showBulkUpload && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Bulk Upload Sacred Places</h2>
                <button
                  onClick={() => setShowBulkUpload(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <div className="mb-4">
                <p className="text-gray-600 mb-2">
                  Upload multiple sacred places using JSON format.
                  <Link href="/api/bulk-upload/sacred-places?action=template" target="_blank" className="text-blue-600 hover:underline ml-1">
                    View template format
                  </Link>
                </p>
              </div>

              <textarea
                value={bulkData}
                onChange={(e) => setBulkData(e.target.value)}
                placeholder="Paste your JSON data here..."
                className="w-full h-96 p-4 border border-gray-300 rounded-lg font-mono text-sm"
              />

              <div className="flex justify-end gap-4 mt-4">
                <button
                  onClick={() => setShowBulkUpload(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  onClick={handleBulkUpload}
                  disabled={uploading}
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50 flex items-center gap-2"
                >
                  {uploading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="w-4 h-4" />
                      Upload Data
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Search className="w-4 h-4 inline mr-1" />
                Search Places
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name, sanskrit name, or slug..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Filter className="w-4 h-4 inline mr-1" />
                Status
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Status</option>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mountain className="w-4 h-4 inline mr-1" />
                Category
              </label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Categories</option>
                {categories.map(cat => (
                  <option key={cat.id} value={cat.slug}>{cat.name}</option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <div className="text-sm text-gray-600">
                <p>Total: {filteredPlaces.length} places</p>
                <p>Published: {filteredPlaces.filter(p => p.status === 'published').length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sacred Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlaces.map((place) => (
            <div key={place.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              {/* Image */}
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                {place.featured_image_url ? (
                  <Image
                    src={place.featured_image_url}
                    alt={place.name}
                    width={400}
                    height={225}
                    className="object-cover w-full h-48"
                  />
                ) : (
                  <div className="flex items-center justify-center h-48 bg-gray-100">
                    <Mountain className="w-12 h-12 text-gray-400" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      {place.name}
                    </h3>
                    {place.sanskrit_name && (
                      <p className="text-sm text-gray-600">{place.sanskrit_name}</p>
                    )}
                  </div>
                  {place.is_featured && (
                    <Star className="w-5 h-5 text-yellow-500" />
                  )}
                </div>

                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {place.description || place.subtitle || 'No description available'}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {place.category?.name || 'Uncategorized'}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    {place.view_count} views
                  </span>
                </div>

                {/* Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    place.status === 'published'
                      ? 'bg-green-100 text-green-800'
                      : place.status === 'draft'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {place.status}
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(place.updated_at).toLocaleDateString()}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Link
                    href={`/sacred-places/${place.category?.slug}/${place.slug}`}
                    target="_blank"
                    className="flex-1 bg-blue-50 text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-100 transition-colors flex items-center justify-center gap-1 text-sm"
                  >
                    <Eye className="w-4 h-4" />
                    View
                  </Link>
                  <Link
                    href={`/admin/sacred-places/${place.id}/edit`}
                    className="flex-1 bg-green-50 text-green-600 px-3 py-2 rounded-lg hover:bg-green-100 transition-colors flex items-center justify-center gap-1 text-sm"
                  >
                    <Edit className="w-4 h-4" />
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(place.id, place.name)}
                    className="bg-red-50 text-red-600 px-3 py-2 rounded-lg hover:bg-red-100 transition-colors flex items-center justify-center"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPlaces.length === 0 && (
          <div className="text-center py-12">
            <Mountain className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No sacred places found</h3>
            <p className="text-gray-600 mb-6">
              {searchTerm || statusFilter !== 'all' || categoryFilter !== 'all'
                ? 'Try adjusting your filters or search terms.'
                : 'Get started by adding your first sacred place or using bulk upload.'}
            </p>
            {!searchTerm && statusFilter === 'all' && categoryFilter === 'all' && (
              <Link
                href="/admin/sacred-places/new"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add First Sacred Place
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  )
}