'use client'

import { useState, useEffect } from 'react'
import { hinduSupabase } from '@/lib/supabase'
import { Plus, Search, Filter, Edit, Eye, Trash2, Star, Clock, Target, Upload } from 'lucide-react'
import Link from 'next/link'
import BulkUploadModal from '@/components/admin/BulkUploadModal'

interface Practice {
  id: string
  name: string
  sanskrit_name: string
  slug: string
  title: string
  status: string
  category_id: string
  practice_categories?: {
    name: string
    color_scheme: string
  }
  is_featured: boolean
  duration: string
  difficulty_level: string
  practice_type: string
  published_at: string
  created_at: string
  updated_at: string
}

export default function PracticesAdmin() {
  const [practices, setPractices] = useState<Practice[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [filterCategory, setFilterCategory] = useState('all')
  const [filterDifficulty, setFilterDifficulty] = useState('all')
  const [categories, setCategories] = useState<any[]>([])
  const [showBulkUpload, setShowBulkUpload] = useState(false)

  useEffect(() => {
    fetchPractices()
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const { data, error } = await hinduSupabase
        .from('practice_categories')
        .select('*')
        .eq('is_active', true)
        .order('sort_order')

      if (error) throw error
      setCategories(data || [])
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

  const fetchPractices = async () => {
    try {
      setLoading(true)
      const { data, error } = await hinduSupabase
        .from('practices')
        .select(`
          *,
          practice_categories (
            name,
            color_scheme
          )
        `)
        .order('created_at', { ascending: false })

      if (error) throw error
      setPractices(data || [])
    } catch (error) {
      console.error('Error fetching practices:', error)
    } finally {
      setLoading(false)
    }
  }

  const deletePractice = async (id: string) => {
    if (!confirm('Are you sure you want to delete this practice? This action cannot be undone.')) {
      return
    }

    try {
      const { error } = await hinduSupabase
        .from('practices')
        .delete()
        .eq('id', id)

      if (error) throw error
      
      await fetchPractices()
      alert('Practice deleted successfully!')
    } catch (error) {
      console.error('Error deleting practice:', error)
      alert('Error deleting practice. Please try again.')
    }
  }

  const toggleFeatured = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await hinduSupabase
        .from('practices')
        .update({ is_featured: !currentStatus, updated_at: new Date().toISOString() })
        .eq('id', id)

      if (error) throw error
      await fetchPractices()
    } catch (error) {
      console.error('Error updating featured status:', error)
      alert('Error updating featured status. Please try again.')
    }
  }

  const filteredPractices = practices.filter(practice => {
    const matchesSearch = 
      practice.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      practice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      practice.sanskrit_name?.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = filterStatus === 'all' || practice.status === filterStatus
    const matchesCategory = filterCategory === 'all' || practice.category_id === filterCategory
    const matchesDifficulty = filterDifficulty === 'all' || practice.difficulty_level === filterDifficulty

    return matchesSearch && matchesStatus && matchesCategory && matchesDifficulty
  })

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      published: 'bg-green-100 text-green-800',
      draft: 'bg-yellow-100 text-yellow-800', 
      archived: 'bg-gray-100 text-gray-800'
    }
    return statusConfig[status as keyof typeof statusConfig] || 'bg-gray-100 text-gray-800'
  }

  const getDifficultyColor = (difficulty: string) => {
    const difficultyColors = {
      'Beginner': 'bg-green-100 text-green-800',
      'Intermediate': 'bg-yellow-100 text-yellow-800',
      'Advanced': 'bg-red-100 text-red-800'
    }
    return difficultyColors[difficulty as keyof typeof difficultyColors] || 'bg-gray-100 text-gray-800'
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg">Loading practices...</div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Practices Management</h1>
          <p className="text-gray-600 mt-2">Manage Hindu spiritual practices and rituals</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowBulkUpload(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors"
          >
            <Upload className="w-4 h-4" />
            Bulk Upload
          </button>
          <Link
            href="/admin/practices/new"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add Practice
          </Link>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search practices..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
            <option value="archived">Archived</option>
          </select>

          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>

          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            value={filterDifficulty}
            onChange={(e) => setFilterDifficulty(e.target.value)}
          >
            <option value="all">All Levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          <div className="text-sm text-gray-600 flex items-center">
            <Filter className="w-4 h-4 mr-2" />
            {filteredPractices.length} of {practices.length} practices
          </div>
        </div>
      </div>

      {/* Practice Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPractices.map((practice) => (
          <div key={practice.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <div className="p-6">
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    {practice.name}
                  </h3>
                  <p className="text-sm text-gray-600">{practice.title}</p>
                  {practice.sanskrit_name && (
                    <p className="text-sm text-green-600 mt-1">{practice.sanskrit_name}</p>
                  )}
                </div>
                <button
                  onClick={() => toggleFeatured(practice.id, practice.is_featured)}
                  className={`p-1 rounded-full transition-colors ${
                    practice.is_featured ? 'text-yellow-500 hover:text-yellow-600' : 'text-gray-300 hover:text-yellow-500'
                  }`}
                  title={practice.is_featured ? 'Remove from featured' : 'Add to featured'}
                >
                  <Star className={`w-5 h-5 ${practice.is_featured ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Info */}
              <div className="space-y-2 mb-4">
                {practice.duration && (
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {practice.duration}
                  </div>
                )}
                {practice.practice_type && (
                  <div className="flex items-center text-sm text-gray-600">
                    <Target className="w-4 h-4 mr-2" />
                    {practice.practice_type}
                  </div>
                )}
                <div className="flex flex-wrap gap-2">
                  {practice.practice_categories?.name && (
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                      {practice.practice_categories.name}
                    </span>
                  )}
                  {practice.difficulty_level && (
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(practice.difficulty_level)}`}>
                      {practice.difficulty_level}
                    </span>
                  )}
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(practice.status)}`}>
                  {practice.status.charAt(0).toUpperCase() + practice.status.slice(1)}
                </span>
                <span className="text-xs text-gray-500">
                  {new Date(practice.updated_at).toLocaleDateString()}
                </span>
              </div>

              {/* Actions */}
              <div className="flex space-x-2">
                <Link
                  href={`/practices/${practice.slug}`}
                  className="flex-1 bg-blue-50 text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-100 transition-colors flex items-center justify-center gap-2 text-sm"
                  target="_blank"
                >
                  <Eye className="w-4 h-4" />
                  View
                </Link>
                <Link
                  href={`/admin/practices/${practice.id}/edit`}
                  className="flex-1 bg-green-50 text-green-600 px-3 py-2 rounded-lg hover:bg-green-100 transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  <Edit className="w-4 h-4" />
                  Edit
                </Link>
                <button
                  onClick={() => deletePractice(practice.id)}
                  className="bg-red-50 text-red-600 px-3 py-2 rounded-lg hover:bg-red-100 transition-colors flex items-center justify-center"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPractices.length === 0 && (
        <div className="text-center py-12">
          <Target className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No practices found</h3>
          <p className="text-gray-600 mb-6">
            {searchTerm || filterStatus !== 'all' || filterCategory !== 'all' || filterDifficulty !== 'all'
              ? 'Try adjusting your search or filters'
              : 'Get started by adding your first practice'
            }
          </p>
          <Link
            href="/admin/practices/new"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors inline-flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add Practice
          </Link>
        </div>
      )}

      {/* Bulk Upload Modal */}
      <BulkUploadModal
        isOpen={showBulkUpload}
        onClose={() => setShowBulkUpload(false)}
        contentType="practices"
        onUploadComplete={fetchPractices}
      />
    </div>
  )
}