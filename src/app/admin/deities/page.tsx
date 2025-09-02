'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { Plus, Search, Filter, Edit, Eye, Trash2, Star, Crown, Heart, BookOpen } from 'lucide-react'
import Link from 'next/link'

interface Deity {
  id: string
  name: string
  sanskrit_name: string
  slug: string
  title: string
  status: string
  category_id: string
  category?: {
    name: string
    color_scheme: string
  }
  is_featured: boolean
  published_at: string
  created_at: string
  updated_at: string
}

export default function DeitiesAdmin() {
  const [deities, setDeities] = useState<Deity[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')
  const [filterCategory, setFilterCategory] = useState('all')
  const [categories, setCategories] = useState<any[]>([])

  useEffect(() => {
    fetchDeities()
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .from('deity_categories')
        .select('*')
        .eq('is_active', true)
        .order('sort_order')

      if (error) throw error
      setCategories(data || [])
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

  const fetchDeities = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('deities')
        .select('*')
        .order('sort_order', { ascending: true })
      if (error) throw error
      
      // Fetch categories separately and merge
      const { data: categoriesData } = await supabase
        .from('deity_categories')
        .select('*')

      // Merge category data with deities
      const deitiesWithCategories = (data || []).map(deity => {
        const category = categoriesData?.find(cat => cat.id === deity.category_id)
        return {
          ...deity,
          category: category ? {
            name: category.name,
            color_scheme: category.color_scheme
          } : null
        }
      })

      setDeities(deitiesWithCategories)
    } catch (error) {
      console.error('Error fetching deities:', error)
    } finally {
      setLoading(false)
    }
  }

  const toggleFeatured = async (id: string, currentFeatured: boolean) => {
    try {
      const { error } = await supabase
        .from('deities')
        .update({ is_featured: !currentFeatured })
        .eq('id', id)

      if (error) throw error
      
      setDeities(deities.map(deity => 
        deity.id === id ? { ...deity, is_featured: !currentFeatured } : deity
      ))
    } catch (error) {
      console.error('Error updating featured status:', error)
    }
  }

  const deleteDeity = async (id: string) => {
    if (!confirm('Are you sure you want to delete this deity? This action cannot be undone.')) {
      return
    }

    try {
      const { error } = await supabase
        .from('deities')
        .delete()
        .eq('id', id)

      if (error) throw error
      
      setDeities(deities.filter(deity => deity.id !== id))
    } catch (error) {
      console.error('Error deleting deity:', error)
    }
  }

  const filteredDeities = deities.filter(deity => {
    const matchesSearch = deity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         deity.sanskrit_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         deity.title.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = filterStatus === 'all' || deity.status === filterStatus
    const matchesCategory = filterCategory === 'all' || deity.category_id === filterCategory

    return matchesSearch && matchesStatus && matchesCategory
  })

  const getStatusBadge = (status: string) => {
    const styles = {
      published: 'bg-green-100 text-green-800',
      draft: 'bg-yellow-100 text-yellow-800',
      archived: 'bg-gray-100 text-gray-800'
    }
    return styles[status as keyof typeof styles] || styles.draft
  }

  const getCategoryIcon = (categoryName: string) => {
    const icons: { [key: string]: any } = {
      'Trimurti': Crown,
      'Major Deities': Star,
      'Divine Mothers': Heart,
      'Guardian Deities': BookOpen,
      'Celestial Beings': Star,
      'Craftsman Deities': BookOpen
    }
    return icons[categoryName] || Star
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Deities Management</h1>
          <p className="text-gray-600 mt-1">Manage Hindu deities, their information, and content</p>
        </div>
        <Link
          href="/admin/deities/new"
          className="bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-orange-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add New Deity
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search deities..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
            <option value="archived">Archived</option>
          </select>

          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Deities</p>
              <p className="text-2xl font-bold text-gray-900">{deities.length}</p>
            </div>
            <div className="bg-blue-100 rounded-lg p-3">
              <Crown className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Published</p>
              <p className="text-2xl font-bold text-gray-900">
                {deities.filter(d => d.status === 'published').length}
              </p>
            </div>
            <div className="bg-green-100 rounded-lg p-3">
              <Eye className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Featured</p>
              <p className="text-2xl font-bold text-gray-900">
                {deities.filter(d => d.is_featured).length}
              </p>
            </div>
            <div className="bg-yellow-100 rounded-lg p-3">
              <Star className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Categories</p>
              <p className="text-2xl font-bold text-gray-900">{categories.length}</p>
            </div>
            <div className="bg-purple-100 rounded-lg p-3">
              <Filter className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Deities Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Deity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Featured
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Updated
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredDeities.map((deity) => {
                const CategoryIcon = getCategoryIcon(deity.category?.name || '')
                return (
                  <tr key={deity.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {deity.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {deity.sanskrit_name} • {deity.title}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <CategoryIcon className="w-4 h-4 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-900">
                          {deity.category?.name || 'Uncategorized'}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge(deity.status)}`}>
                        {deity.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => toggleFeatured(deity.id, deity.is_featured)}
                        className={`${deity.is_featured ? 'text-yellow-500' : 'text-gray-300'} hover:text-yellow-600`}
                      >
                        <Star className={`w-5 h-5 ${deity.is_featured ? 'fill-current' : ''}`} />
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(deity.updated_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-2">
                        <Link
                          href={`/deities/${deity.slug}`}
                          className="text-blue-600 hover:text-blue-900"
                          target="_blank"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                        <Link
                          href={`/admin/deities/${deity.id}/edit`}
                          className="text-orange-600 hover:text-orange-900"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => deleteDeity(deity.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {filteredDeities.length === 0 && (
          <div className="text-center py-12">
            <Crown className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No deities found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {searchTerm || filterStatus !== 'all' || filterCategory !== 'all'
                ? 'Try adjusting your search or filters'
                : 'Get started by creating your first deity'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}