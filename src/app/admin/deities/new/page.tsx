'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { ArrowLeft, Save, Eye, Plus, X, Upload, Image as ImageIcon } from 'lucide-react'
import Link from 'next/link'

interface DeityForm {
  name: string
  sanskrit_name: string
  slug: string
  category_id: string
  title: string
  subtitle: string
  description: string
  mythology_story: string
  featured_image_url: string
  featured_image_alt: string
  hero_image_url: string
  hero_image_alt: string
  divine_attributes: Array<{ icon: string; title: string; description: string }>
  mantras: Array<{ sanskrit: string; transliteration: string; meaning: string; purpose: string }>
  festivals: Array<{ name: string; date: string; description: string; significance: string }>
  sacred_places: Array<{ name: string; location: string; description: string; image: string }>
  consorts: string[]
  parents: string[]
  children: string[]
  avatar_of: string
  form_of: string
  era: string
  yuga: string
  meta_title: string
  meta_description: string
  status: string
  is_featured: boolean
}

export default function NewDeity() {
  const router = useRouter()
  const [categories, setCategories] = useState<any[]>([])
  const [saving, setSaving] = useState(false)
  const [activeTab, setActiveTab] = useState('basic')

  const [form, setForm] = useState<DeityForm>({
    name: '',
    sanskrit_name: '',
    slug: '',
    category_id: '',
    title: '',
    subtitle: '',
    description: '',
    mythology_story: '',
    featured_image_url: '',
    featured_image_alt: '',
    hero_image_url: '',
    hero_image_alt: '',
    divine_attributes: [],
    mantras: [],
    festivals: [],
    sacred_places: [],
    consorts: [],
    parents: [],
    children: [],
    avatar_of: '',
    form_of: '',
    era: '',
    yuga: '',
    meta_title: '',
    meta_description: '',
    status: 'draft',
    is_featured: false
  })

  useEffect(() => {
    fetchCategories()
  }, [])

  useEffect(() => {
    // Auto-generate slug from name
    if (form.name) {
      const slug = form.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      setForm(prev => ({ ...prev, slug }))
    }
  }, [form.name])

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const { data, error } = await supabase
        .from('deities')
        .insert({
          ...form,
          published_at: form.status === 'published' ? new Date().toISOString() : null
        })
        .select()
        .single()

      if (error) throw error

      router.push('/admin/deities')
    } catch (error) {
      console.error('Error saving deity:', error)
      alert('Error saving deity. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  const addArrayItem = (field: string, item: any) => {
    setForm(prev => ({
      ...prev,
      [field]: [...(prev[field as keyof typeof prev] as any[]), item]
    }))
  }

  const removeArrayItem = (field: string, index: number) => {
    setForm(prev => ({
      ...prev,
      [field]: (prev[field as keyof typeof prev] as any[]).filter((_, i) => i !== index)
    }))
  }

  const updateArrayItem = (field: string, index: number, item: any) => {
    setForm(prev => ({
      ...prev,
      [field]: (prev[field as keyof typeof prev] as any[]).map((existing, i) => 
        i === index ? item : existing
      )
    }))
  }

  const iconOptions = [
    'Crown', 'Star', 'Heart', 'Shield', 'Eye', 'Mountain', 'Sun', 'Moon',
    'Flower', 'BookOpen', 'Music', 'Disc', 'Shell', 'Hammer', 'Feather'
  ]

  const tabs = [
    { id: 'basic', label: 'Basic Info', icon: '📝' },
    { id: 'images', label: 'Images', icon: '🖼️' },
    { id: 'attributes', label: 'Attributes', icon: '⭐' },
    { id: 'worship', label: 'Worship', icon: '🙏' },
    { id: 'places', label: 'Places', icon: '🏛️' },
    { id: 'relationships', label: 'Relations', icon: '👥' },
    { id: 'seo', label: 'SEO', icon: '🔍' }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            href="/admin/deities"
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Create New Deity</h1>
            <p className="text-gray-600">Add comprehensive information about a Hindu deity</p>
          </div>
        </div>
        
        <div className="flex space-x-3">
          <button
            type="button"
            onClick={() => setForm(prev => ({ ...prev, status: 'draft' }))}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            disabled={saving}
          >
            Save Draft
          </button>
          <button
            type="submit"
            form="deity-form"
            onClick={() => setForm(prev => ({ ...prev, status: 'published' }))}
            className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 disabled:opacity-50 flex items-center gap-2"
            disabled={saving}
          >
            <Save className="w-4 h-4" />
            {saving ? 'Publishing...' : 'Publish'}
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'border-orange-500 text-orange-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <form id="deity-form" onSubmit={handleSubmit} className="p-6">
          {/* Basic Info Tab */}
          {activeTab === 'basic' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Deity Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="e.g., Krishna"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sanskrit Name
                  </label>
                  <input
                    type="text"
                    value={form.sanskrit_name}
                    onChange={(e) => setForm(prev => ({ ...prev, sanskrit_name: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="e.g., कृष्ण"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    URL Slug *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.slug}
                    onChange={(e) => setForm(prev => ({ ...prev, slug: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="e.g., krishna"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    required
                    value={form.category_id}
                    onChange={(e) => setForm(prev => ({ ...prev, category_id: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  required
                  value={form.title}
                  onChange={(e) => setForm(prev => ({ ...prev, title: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="e.g., The Divine Cowherd"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subtitle
                </label>
                <input
                  type="text"
                  value={form.subtitle}
                  onChange={(e) => setForm(prev => ({ ...prev, subtitle: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="e.g., Teacher of Bhagavad Gita and embodiment of divine love"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  rows={4}
                  value={form.description}
                  onChange={(e) => setForm(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Brief description of the deity..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mythology & Stories
                </label>
                <textarea
                  rows={6}
                  value={form.mythology_story}
                  onChange={(e) => setForm(prev => ({ ...prev, mythology_story: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Detailed mythology, stories, and significance..."
                />
              </div>
            </div>
          )}

          {/* Images Tab */}
          {activeTab === 'images' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Featured Image URL
                  </label>
                  <input
                    type="url"
                    value={form.featured_image_url}
                    onChange={(e) => setForm(prev => ({ ...prev, featured_image_url: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Featured Image Alt Text
                  </label>
                  <input
                    type="text"
                    value={form.featured_image_alt}
                    onChange={(e) => setForm(prev => ({ ...prev, featured_image_alt: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Description of the image"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hero Image URL
                  </label>
                  <input
                    type="url"
                    value={form.hero_image_url}
                    onChange={(e) => setForm(prev => ({ ...prev, hero_image_url: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="https://example.com/hero-image.jpg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hero Image Alt Text
                  </label>
                  <input
                    type="text"
                    value={form.hero_image_alt}
                    onChange={(e) => setForm(prev => ({ ...prev, hero_image_alt: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Description of the hero image"
                  />
                </div>
              </div>

              <div className="text-center p-8 border-2 border-dashed border-gray-300 rounded-lg">
                <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                <div className="mt-4">
                  <button
                    type="button"
                    className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
                  >
                    Upload Images
                  </button>
                </div>
                <p className="mt-2 text-sm text-gray-600">
                  Future: Implement image upload functionality
                </p>
              </div>
            </div>
          )}

          {/* Other tabs would be implemented similarly... */}
          {activeTab !== 'basic' && activeTab !== 'images' && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900">
                {tabs.find(t => t.id === activeTab)?.label} Section
              </h3>
              <p className="text-gray-600 mt-2">
                This section is coming soon. For now, please use the basic info tab.
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}