'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { hinduSupabase } from '@/lib/supabase'
import { ArrowLeft, Save, Plus, X, Loader2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface Category {
  id: string
  name: string
}

interface DeityForm {
  name: string
  sanskrit_name: string
  slug: string
  category_id: string
  title: string
  subtitle: string
  description: string
  mythology_story: string
  story: string
  featured_image_url: string
  featured_image_alt: string
  hero_image_url: string
  hero_image_alt: string
  divine_attributes: Array<{ icon: string; title: string; description: string }>
  mantras: Array<{ sanskrit: string; transliteration: string; meaning: string; purpose: string; benefits: string[]; audio_url: string }>
  festivals: Array<{ name: string; date: string; description: string; significance: string; location: string; duration: string; rituals: string[] }>
  sacred_places: Array<{ name: string; location: string; description: string; image_url: string; significance: string; architecture_style: string; best_time_to_visit: string; special_features: string[] }>
  sacred_iconography: Array<{ symbol: string; meaning: string; description: string; image_url: string }>
  sacred_stories: Array<{ title: string; story: string; moral: string; characters: string[]; significance: string }>
  divine_symbolism: Array<{ aspect: string; symbolism: string; deeper_meaning: string; dance_reference: string }>
  essential_facts: Array<{ category: string; fact: string; importance: string; source: string }>
  youtube_videos: { story: string; iconography: string; stories: string; symbolism: string; festivals: string; temples: string; mantras: string }
  avatars_or_forms: Array<{ name: string; description: string; significance: string; incarnation_number: number; era: string }>
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

export default function EditDeity() {
  const router = useRouter()
  const params = useParams()
  const deityId = params.id as string

  const [categories, setCategories] = useState<Category[]>([])
  const [saving, setSaving] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('basic')
  const [dataLoaded, setDataLoaded] = useState(false)

  const [form, setForm] = useState<DeityForm>({
    name: '',
    sanskrit_name: '',
    slug: '',
    category_id: '',
    title: '',
    subtitle: '',
    description: '',
    mythology_story: '',
    story: '',
    featured_image_url: '',
    featured_image_alt: '',
    hero_image_url: '',
    hero_image_alt: '',
    divine_attributes: [],
    mantras: [],
    festivals: [],
    sacred_places: [],
    sacred_iconography: [],
    sacred_stories: [],
    divine_symbolism: [],
    essential_facts: [],
    youtube_videos: { story: '', iconography: '', stories: '', symbolism: '', festivals: '', temples: '', mantras: '' },
    avatars_or_forms: [],
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

  const fetchDeity = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      const { data, error } = await hinduSupabase
        .from('deities')
        .select('*')
        .eq('id', deityId)
        .single()

      if (error) {
        if (error.code === 'PGRST116') {
          setError('Deity not found')
        } else {
          throw error
        }
        return
      }

      // Pre-populate form with existing data
      console.log('Loading deity data:', data)
      console.log('Mantras from DB:', data.mantras, 'Length:', data.mantras?.length)
      console.log('Divine attributes from DB:', data.divine_attributes, 'Length:', data.divine_attributes?.length)
      console.log('Festivals from DB:', data.festivals, 'Length:', data.festivals?.length)
      console.log('Sacred places from DB:', data.sacred_places, 'Length:', data.sacred_places?.length)
      console.log('Avatars from DB:', data.avatars_or_forms, 'Length:', data.avatars_or_forms?.length)
      
      setForm({
        name: data.name || '',
        sanskrit_name: data.sanskrit_name || '',
        slug: data.slug || '',
        category_id: data.category_id || '',
        title: data.title || '',
        subtitle: data.subtitle || '',
        description: data.description || '',
        mythology_story: data.mythology_story || '',
        story: data.story || '',
        featured_image_url: data.featured_image_url || '',
        featured_image_alt: data.featured_image_alt || '',
        hero_image_url: data.hero_image_url || '',
        hero_image_alt: data.hero_image_alt || '',
        divine_attributes: Array.isArray(data.divine_attributes) ? data.divine_attributes : [],
        mantras: Array.isArray(data.mantras) ? data.mantras : [],
        festivals: Array.isArray(data.festivals) ? data.festivals : [],
        sacred_places: Array.isArray(data.sacred_places) ? data.sacred_places : [],
        sacred_iconography: Array.isArray(data.sacred_iconography) ? data.sacred_iconography : [],
        sacred_stories: Array.isArray(data.sacred_stories) ? data.sacred_stories : [],
        divine_symbolism: Array.isArray(data.divine_symbolism) ? data.divine_symbolism : [],
        essential_facts: Array.isArray(data.essential_facts) ? data.essential_facts : [],
        youtube_videos: data.youtube_videos || { story: '', iconography: '', stories: '', symbolism: '', festivals: '', temples: '', mantras: '' },
        avatars_or_forms: Array.isArray(data.avatars_or_forms) ? data.avatars_or_forms : [],
        consorts: Array.isArray(data.consorts) ? data.consorts : [],
        parents: Array.isArray(data.parents) ? data.parents : [],
        children: Array.isArray(data.children) ? data.children : [],
        avatar_of: data.avatar_of || '',
        form_of: data.form_of || '',
        era: data.era || '',
        yuga: data.yuga || '',
        meta_title: data.meta_title || '',
        meta_description: data.meta_description || '',
        status: data.status || 'draft',
        is_featured: data.is_featured || false
      })
      
      setDataLoaded(true)
    } catch (error) {
      console.error('Error fetching deity:', error)
      setError('Error loading deity data')
    } finally {
      setLoading(false)
    }
  }, [deityId])

  useEffect(() => {
    fetchDeity()
    fetchCategories()
  }, [fetchDeity])

  const fetchCategories = async () => {
    try {
      const { data, error } = await hinduSupabase
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
      const { error } = await hinduSupabase
        .from('deities')
        .update({
          ...form,
          published_at: form.status === 'published' ? new Date().toISOString() : null,
          updated_at: new Date().toISOString()
        })
        .eq('id', deityId)
        .select()
        .single()

      if (error) throw error

      router.push('/admin/deities')
    } catch (error) {
      console.error('Error updating deity:', error)
      alert('Error updating deity. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  const addArrayItem = (field: keyof DeityForm, item: unknown) => {
    setForm(prev => ({
      ...prev,
      [field]: [...(prev[field] as unknown[]), item]
    }))
  }

  const removeArrayItem = (field: keyof DeityForm, index: number) => {
    setForm(prev => ({
      ...prev,
      [field]: (prev[field] as unknown[]).filter((_, i) => i !== index)
    }))
  }

  const updateArrayItem = (field: keyof DeityForm, index: number, item: unknown) => {
    setForm(prev => ({
      ...prev,
      [field]: (prev[field] as unknown[]).map((existing, i) => 
        i === index ? item : existing
      )
    }))
  }

  const addStringArrayItem = (field: keyof DeityForm, value: string) => {
    if (value.trim()) {
      setForm(prev => ({
        ...prev,
        [field]: [...(prev[field] as string[]), value.trim()]
      }))
    }
  }

  const removeStringArrayItem = (field: keyof DeityForm, index: number) => {
    setForm(prev => ({
      ...prev,
      [field]: (prev[field] as string[]).filter((_, i) => i !== index)
    }))
  }

  const iconOptions = [
    'Crown', 'Star', 'Heart', 'Shield', 'Eye', 'Mountain', 'Sun', 'Moon',
    'Flower', 'BookOpen', 'Music', 'Disc', 'Shell', 'Hammer', 'Feather'
  ]

  const tabs = [
    { id: 'basic', label: 'Basic Info', icon: '📝' },
    { id: 'content', label: 'Content', icon: '📖' },
    { id: 'iconography', label: 'Iconography', icon: '👁️' },
    { id: 'stories', label: 'Stories', icon: '📚' },
    { id: 'symbolism', label: 'Symbolism', icon: '✨' },
    { id: 'images', label: 'Images', icon: '🖼️' },
    { id: 'attributes', label: 'Attributes', icon: '⭐' },
    { id: 'worship', label: 'Worship', icon: '🙏' },
    { id: 'places', label: 'Places', icon: '🏛️' },
    { id: 'avatars', label: 'Avatars', icon: '🕉️' },
    { id: 'facts', label: 'Facts', icon: '💡' },
    { id: 'videos', label: 'Videos', icon: '🎬' },
    { id: 'relationships', label: 'Relations', icon: '👥' },
    { id: 'seo', label: 'SEO', icon: '🔍' }
  ]

  if (loading || (!dataLoaded && !error)) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="flex items-center space-x-2">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span>Loading deity data...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-red-600 text-xl font-medium">{error}</div>
        <Link
          href="/admin/deities"
          className="mt-4 inline-flex items-center text-orange-600 hover:text-orange-700"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Deities
        </Link>
      </div>
    )
  }

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
            <h1 className="text-3xl font-bold text-gray-900">Edit Deity: {form.name}</h1>
            <p className="text-gray-600">Update comprehensive information about this Hindu deity</p>
          </div>
        </div>
        
        <div className="flex space-x-3">
          <Link
            href="/admin/deities"
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </Link>
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
            {saving ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                Update & Publish
              </>
            )}
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Main Story (New Section)
                </label>
                <textarea
                  rows={8}
                  value={form.story}
                  onChange={(e) => setForm(prev => ({ ...prev, story: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Main narrative story about this deity for the dedicated Story section..."
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="is_featured"
                  checked={form.is_featured}
                  onChange={(e) => setForm(prev => ({ ...prev, is_featured: e.target.checked }))}
                  className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                />
                <label htmlFor="is_featured" className="ml-2 block text-sm text-gray-900">
                  Feature this deity
                </label>
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

              {form.featured_image_url && (
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Featured Image Preview
                  </label>
                  <Image
                    src={form.featured_image_url}
                    alt={form.featured_image_alt}
                    width={400}
                    height={192}
                    className="max-w-md h-48 object-cover rounded-lg border"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              )}
            </div>
          )}

          {/* Attributes Tab */}
          {activeTab === 'attributes' && (
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Divine Attributes</h3>
                  <button
                    type="button"
                    onClick={() => addArrayItem('divine_attributes', { icon: '', title: '', description: '' })}
                    className="bg-orange-600 text-white px-3 py-1 rounded text-sm flex items-center gap-1"
                  >
                    <Plus className="w-4 h-4" />
                    Add Attribute
                  </button>
                </div>
                
                <div className="space-y-4">
                  {form.divine_attributes && form.divine_attributes.length > 0 ? form.divine_attributes.map((attr, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-medium text-gray-700">Attribute #{index + 1}</h4>
                        <button
                          type="button"
                          onClick={() => removeArrayItem('divine_attributes', index)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Icon</label>
                          <select
                            value={attr.icon}
                            onChange={(e) => updateArrayItem('divine_attributes', index, { ...attr, icon: e.target.value })}
                            className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                          >
                            <option value="">Select icon</option>
                            {iconOptions.map(icon => (
                              <option key={icon} value={icon}>{icon}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                          <input
                            type="text"
                            value={attr.title}
                            onChange={(e) => updateArrayItem('divine_attributes', index, { ...attr, title: e.target.value })}
                            className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="e.g., Compassion"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                          <input
                            type="text"
                            value={attr.description}
                            onChange={(e) => updateArrayItem('divine_attributes', index, { ...attr, description: e.target.value })}
                            className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="Description of the attribute"
                          />
                        </div>
                      </div>
                    </div>
                  )) : (
                    <div className="text-center py-8 text-gray-500">
                      <div className="text-lg mb-2">⭐</div>
                      <p>No divine attributes added yet. Click &ldquo;Add Attribute&rdquo; to start.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Worship Tab */}
          {activeTab === 'worship' && (
            <div className="space-y-6">
              {/* Mantras */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Mantras</h3>
                  <button
                    type="button"
                    onClick={() => addArrayItem('mantras', { sanskrit: '', transliteration: '', meaning: '', purpose: '', benefits: [], audio_url: '' })}
                    className="bg-orange-600 text-white px-3 py-1 rounded text-sm flex items-center gap-1"
                  >
                    <Plus className="w-4 h-4" />
                    Add Mantra
                  </button>
                </div>
                
                <div className="space-y-4">
                  {form.mantras && form.mantras.length > 0 ? form.mantras.map((mantra, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-medium text-gray-700">Mantra #{index + 1}</h4>
                        <button
                          type="button"
                          onClick={() => removeArrayItem('mantras', index)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="space-y-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Sanskrit</label>
                            <input
                              type="text"
                              value={mantra.sanskrit}
                              onChange={(e) => updateArrayItem('mantras', index, { ...mantra, sanskrit: e.target.value })}
                              className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                              placeholder="Sanskrit mantra"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Transliteration</label>
                            <input
                              type="text"
                              value={mantra.transliteration}
                              onChange={(e) => updateArrayItem('mantras', index, { ...mantra, transliteration: e.target.value })}
                              className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                              placeholder="Roman transliteration"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Meaning</label>
                          <textarea
                            rows={2}
                            value={mantra.meaning}
                            onChange={(e) => updateArrayItem('mantras', index, { ...mantra, meaning: e.target.value })}
                            className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="English meaning"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Purpose</label>
                          <input
                            type="text"
                            value={mantra.purpose}
                            onChange={(e) => updateArrayItem('mantras', index, { ...mantra, purpose: e.target.value })}
                            className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="Purpose or benefit"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Benefits (comma-separated)</label>
                          <input
                            type="text"
                            value={mantra.benefits ? mantra.benefits.join(', ') : ''}
                            onChange={(e) => updateArrayItem('mantras', index, { ...mantra, benefits: e.target.value.split(',').map(s => s.trim()).filter(s => s) })}
                            className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="e.g., Peace, Prosperity, Spiritual Growth"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Audio URL</label>
                          <input
                            type="url"
                            value={mantra.audio_url}
                            onChange={(e) => updateArrayItem('mantras', index, { ...mantra, audio_url: e.target.value })}
                            className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="https://example.com/mantra-audio.mp3"
                          />
                        </div>
                      </div>
                    </div>
                  )) : (
                    <div className="text-center py-8 text-gray-500">
                      <div className="text-lg mb-2">🙏</div>
                      <p>No mantras added yet. Click &ldquo;Add Mantra&rdquo; to start.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Festivals */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Festivals</h3>
                  <button
                    type="button"
                    onClick={() => addArrayItem('festivals', { name: '', date: '', description: '', significance: '', location: '', duration: '', rituals: [] })}
                    className="bg-orange-600 text-white px-3 py-1 rounded text-sm flex items-center gap-1"
                  >
                    <Plus className="w-4 h-4" />
                    Add Festival
                  </button>
                </div>
                
                <div className="space-y-4">
                  {form.festivals && form.festivals.length > 0 ? form.festivals.map((festival, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-medium text-gray-700">Festival #{index + 1}</h4>
                        <button
                          type="button"
                          onClick={() => removeArrayItem('festivals', index)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="space-y-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Festival Name</label>
                            <input
                              type="text"
                              value={festival.name}
                              onChange={(e) => updateArrayItem('festivals', index, { ...festival, name: e.target.value })}
                              className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                              placeholder="e.g., Krishna Janmashtami"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                            <input
                              type="text"
                              value={festival.date}
                              onChange={(e) => updateArrayItem('festivals', index, { ...festival, date: e.target.value })}
                              className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                              placeholder="e.g., August/September"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                          <textarea
                            rows={2}
                            value={festival.description}
                            onChange={(e) => updateArrayItem('festivals', index, { ...festival, description: e.target.value })}
                            className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="Festival description"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Significance</label>
                          <textarea
                            rows={2}
                            value={festival.significance}
                            onChange={(e) => updateArrayItem('festivals', index, { ...festival, significance: e.target.value })}
                            className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="Religious significance"
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                            <input
                              type="text"
                              value={festival.location}
                              onChange={(e) => updateArrayItem('festivals', index, { ...festival, location: e.target.value })}
                              className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                              placeholder="e.g., Mathura, India"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                            <input
                              type="text"
                              value={festival.duration}
                              onChange={(e) => updateArrayItem('festivals', index, { ...festival, duration: e.target.value })}
                              className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                              placeholder="e.g., 2 days, 8 days"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Key Rituals (comma-separated)</label>
                          <input
                            type="text"
                            value={festival.rituals ? festival.rituals.join(', ') : ''}
                            onChange={(e) => updateArrayItem('festivals', index, { ...festival, rituals: e.target.value.split(',').map(s => s.trim()).filter(s => s) })}
                            className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="e.g., Fasting, Dancing, Offering, Prayers"
                          />
                        </div>
                      </div>
                    </div>
                  )) : (
                    <div className="text-center py-8 text-gray-500">
                      <div className="text-lg mb-2">🎉</div>
                      <p>No festivals added yet. Click &ldquo;Add Festival&rdquo; to start.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Sacred Places Tab */}
          {activeTab === 'places' && (
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Sacred Places</h3>
                  <button
                    type="button"
                    onClick={() => addArrayItem('sacred_places', { name: '', location: '', description: '', image_url: '', significance: '', architecture_style: '', best_time_to_visit: '', special_features: [] })}
                    className="bg-orange-600 text-white px-3 py-1 rounded text-sm flex items-center gap-1"
                  >
                    <Plus className="w-4 h-4" />
                    Add Place
                  </button>
                </div>
                
                <div className="space-y-4">
                  {form.sacred_places && form.sacred_places.length > 0 ? form.sacred_places.map((place, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-medium text-gray-700">Sacred Place #{index + 1}</h4>
                        <button
                          type="button"
                          onClick={() => removeArrayItem('sacred_places', index)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="space-y-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Place Name</label>
                            <input
                              type="text"
                              value={place.name}
                              onChange={(e) => updateArrayItem('sacred_places', index, { ...place, name: e.target.value })}
                              className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                              placeholder="e.g., Mathura"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                            <input
                              type="text"
                              value={place.location}
                              onChange={(e) => updateArrayItem('sacred_places', index, { ...place, location: e.target.value })}
                              className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                              placeholder="e.g., Uttar Pradesh, India"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                          <textarea
                            rows={2}
                            value={place.description}
                            onChange={(e) => updateArrayItem('sacred_places', index, { ...place, description: e.target.value })}
                            className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="Description of the sacred place"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                          <input
                            type="url"
                            value={place.image_url}
                            onChange={(e) => updateArrayItem('sacred_places', index, { ...place, image_url: e.target.value })}
                            className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="https://example.com/place-image.jpg"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Significance</label>
                          <textarea
                            rows={2}
                            value={place.significance}
                            onChange={(e) => updateArrayItem('sacred_places', index, { ...place, significance: e.target.value })}
                            className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="Religious significance of this temple/place"
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Architecture Style</label>
                            <input
                              type="text"
                              value={place.architecture_style}
                              onChange={(e) => updateArrayItem('sacred_places', index, { ...place, architecture_style: e.target.value })}
                              className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                              placeholder="e.g., Dravidian, Nagara, Vesara"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Best Time to Visit</label>
                            <input
                              type="text"
                              value={place.best_time_to_visit}
                              onChange={(e) => updateArrayItem('sacred_places', index, { ...place, best_time_to_visit: e.target.value })}
                              className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                              placeholder="e.g., October to March"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Special Features (comma-separated)</label>
                          <input
                            type="text"
                            value={place.special_features ? place.special_features.join(', ') : ''}
                            onChange={(e) => updateArrayItem('sacred_places', index, { ...place, special_features: e.target.value.split(',').map(s => s.trim()).filter(s => s) })}
                            className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="e.g., Golden Dome, Sacred Pool, Ancient Sculptures"
                          />
                        </div>
                      </div>
                    </div>
                  )) : (
                    <div className="text-center py-8 text-gray-500">
                      <div className="text-lg mb-2">🏛️</div>
                      <p>No sacred places added yet. Click &ldquo;Add Place&rdquo; to start.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Avatars Tab */}
          {activeTab === 'avatars' && (
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Avatars & Incarnations</h3>
                  <button
                    type="button"
                    onClick={() => addArrayItem('avatars_or_forms', { name: '', description: '', significance: '', incarnation_number: 0, era: '' })}
                    className="bg-orange-600 text-white px-3 py-1 rounded text-sm flex items-center gap-1"
                  >
                    <Plus className="w-4 h-4" />
                    Add Avatar
                  </button>
                </div>
                
                <div className="space-y-4">
                  {form.avatars_or_forms.map((avatar, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-medium text-gray-700">Avatar #{index + 1}</h4>
                        <button
                          type="button"
                          onClick={() => removeArrayItem('avatars_or_forms', index)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="space-y-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Avatar Name</label>
                            <input
                              type="text"
                              value={avatar.name}
                              onChange={(e) => updateArrayItem('avatars_or_forms', index, { ...avatar, name: e.target.value })}
                              className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                              placeholder="e.g., Krishna, Rama"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Incarnation Number</label>
                            <input
                              type="number"
                              value={avatar.incarnation_number}
                              onChange={(e) => updateArrayItem('avatars_or_forms', index, { ...avatar, incarnation_number: parseInt(e.target.value) || 0 })}
                              className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                              placeholder="e.g., 8 for Krishna"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Era/Yuga</label>
                          <input
                            type="text"
                            value={avatar.era}
                            onChange={(e) => updateArrayItem('avatars_or_forms', index, { ...avatar, era: e.target.value })}
                            className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="e.g., Dwapara Yuga, Treta Yuga"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                          <textarea
                            rows={2}
                            value={avatar.description}
                            onChange={(e) => updateArrayItem('avatars_or_forms', index, { ...avatar, description: e.target.value })}
                            className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="Brief description of the avatar"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Significance</label>
                          <textarea
                            rows={3}
                            value={avatar.significance}
                            onChange={(e) => updateArrayItem('avatars_or_forms', index, { ...avatar, significance: e.target.value })}
                            className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="Religious and spiritual significance of this avatar"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {form.avatars_or_forms.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <div className="text-lg mb-2">🕉️</div>
                      <p>No avatars added yet. Click &ldquo;Add Avatar&rdquo; to start.</p>
                      <p className="text-sm mt-1">Add incarnations like Krishna, Rama, etc. for deities like Vishnu.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Relationships Tab */}
          {activeTab === 'relationships' && (
            <div className="space-y-6">
              {/* Consorts */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Consorts</h3>
                <div className="space-y-2">
                  {form.consorts.map((consort, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={consort}
                        onChange={(e) => {
                          const newConsorts = [...form.consorts]
                          newConsorts[index] = e.target.value
                          setForm(prev => ({ ...prev, consorts: newConsorts }))
                        }}
                        className="flex-1 px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                        placeholder="Consort name"
                      />
                      <button
                        type="button"
                        onClick={() => removeStringArrayItem('consorts', index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Add consort"
                      className="flex-1 px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault()
                          const target = e.target as HTMLInputElement
                          addStringArrayItem('consorts', target.value)
                          target.value = ''
                        }
                      }}
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        const input = (e.target as HTMLElement).parentElement?.querySelector('input') as HTMLInputElement
                        addStringArrayItem('consorts', input.value)
                        input.value = ''
                      }}
                      className="bg-orange-600 text-white px-3 py-1 rounded text-sm"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Parents */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Parents</h3>
                <div className="space-y-2">
                  {form.parents.map((parent, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={parent}
                        onChange={(e) => {
                          const newParents = [...form.parents]
                          newParents[index] = e.target.value
                          setForm(prev => ({ ...prev, parents: newParents }))
                        }}
                        className="flex-1 px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                        placeholder="Parent name"
                      />
                      <button
                        type="button"
                        onClick={() => removeStringArrayItem('parents', index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Add parent"
                      className="flex-1 px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault()
                          const target = e.target as HTMLInputElement
                          addStringArrayItem('parents', target.value)
                          target.value = ''
                        }
                      }}
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        const input = (e.target as HTMLElement).parentElement?.querySelector('input') as HTMLInputElement
                        addStringArrayItem('parents', input.value)
                        input.value = ''
                      }}
                      className="bg-orange-600 text-white px-3 py-1 rounded text-sm"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Children */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Children</h3>
                <div className="space-y-2">
                  {form.children.map((child, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={child}
                        onChange={(e) => {
                          const newChildren = [...form.children]
                          newChildren[index] = e.target.value
                          setForm(prev => ({ ...prev, children: newChildren }))
                        }}
                        className="flex-1 px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                        placeholder="Child name"
                      />
                      <button
                        type="button"
                        onClick={() => removeStringArrayItem('children', index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Add child"
                      className="flex-1 px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault()
                          const target = e.target as HTMLInputElement
                          addStringArrayItem('children', target.value)
                          target.value = ''
                        }
                      }}
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        const input = (e.target as HTMLElement).parentElement?.querySelector('input') as HTMLInputElement
                        addStringArrayItem('children', input.value)
                        input.value = ''
                      }}
                      className="bg-orange-600 text-white px-3 py-1 rounded text-sm"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Other relationships */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Avatar Of</label>
                  <input
                    type="text"
                    value={form.avatar_of}
                    onChange={(e) => setForm(prev => ({ ...prev, avatar_of: e.target.value }))}
                    className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                    placeholder="e.g., Vishnu"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Form Of</label>
                  <input
                    type="text"
                    value={form.form_of}
                    onChange={(e) => setForm(prev => ({ ...prev, form_of: e.target.value }))}
                    className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                    placeholder="e.g., Supreme Brahman"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Era</label>
                  <input
                    type="text"
                    value={form.era}
                    onChange={(e) => setForm(prev => ({ ...prev, era: e.target.value }))}
                    className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                    placeholder="e.g., Vedic Era"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Yuga</label>
                  <input
                    type="text"
                    value={form.yuga}
                    onChange={(e) => setForm(prev => ({ ...prev, yuga: e.target.value }))}
                    className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                    placeholder="e.g., Dwapara Yuga"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Content Tab - New comprehensive sections */}
          {activeTab === 'content' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Main Story Content
                </label>
                <textarea
                  rows={8}
                  value={form.story}
                  onChange={(e) => setForm(prev => ({ ...prev, story: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Comprehensive story content that will appear in the dedicated Story section..."
                />
                <p className="text-sm text-gray-500 mt-1">
                  This will be displayed in its own dedicated section with optional video content.
                </p>
              </div>
            </div>
          )}

          {/* Sacred Iconography Tab */}
          {activeTab === 'iconography' && (
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Sacred Iconography</h3>
                  <button
                    type="button"
                    onClick={() => addArrayItem('sacred_iconography', { symbol: '', meaning: '', description: '', image_url: '' })}
                    className="bg-orange-600 text-white px-3 py-1 rounded text-sm flex items-center gap-1"
                  >
                    <Plus className="w-4 h-4" />
                    Add Iconography
                  </button>
                </div>
                
                <div className="space-y-4">
                  {form.sacred_iconography && form.sacred_iconography.length > 0 ? form.sacred_iconography.map((icon, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-medium text-gray-700">Symbol #{index + 1}</h4>
                        <button
                          type="button"
                          onClick={() => removeArrayItem('sacred_iconography', index)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Symbol</label>
                          <input
                            type="text"
                            value={icon.symbol}
                            onChange={(e) => updateArrayItem('sacred_iconography', index, { ...icon, symbol: e.target.value })}
                            className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="e.g., Lotus, Conch Shell"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Meaning</label>
                          <input
                            type="text"
                            value={icon.meaning}
                            onChange={(e) => updateArrayItem('sacred_iconography', index, { ...icon, meaning: e.target.value })}
                            className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="e.g., Purity and Divine Beauty"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                          <textarea
                            rows={3}
                            value={icon.description}
                            onChange={(e) => updateArrayItem('sacred_iconography', index, { ...icon, description: e.target.value })}
                            className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="Detailed explanation of the symbol's significance..."
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                          <input
                            type="url"
                            value={icon.image_url}
                            onChange={(e) => updateArrayItem('sacred_iconography', index, { ...icon, image_url: e.target.value })}
                            className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="https://example.com/symbol-image.jpg"
                          />
                        </div>
                      </div>
                    </div>
                  )) : (
                    <div className="text-center py-8 text-gray-500">
                      <div className="text-lg mb-2">👁️</div>
                      <p>No iconography added yet. Click &ldquo;Add Iconography&rdquo; to start.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Sacred Stories Tab */}
          {activeTab === 'stories' && (
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Sacred Stories</h3>
                  <button
                    type="button"
                    onClick={() => addArrayItem('sacred_stories', { title: '', story: '', moral: '', characters: [], significance: '' })}
                    className="bg-orange-600 text-white px-3 py-1 rounded text-sm flex items-center gap-1"
                  >
                    <Plus className="w-4 h-4" />
                    Add Story
                  </button>
                </div>
                
                <div className="space-y-4">
                  {form.sacred_stories && form.sacred_stories.length > 0 ? form.sacred_stories.map((story, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-medium text-gray-700">Story #{index + 1}</h4>
                        <button
                          type="button"
                          onClick={() => removeArrayItem('sacred_stories', index)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                          <input
                            type="text"
                            value={story.title}
                            onChange={(e) => updateArrayItem('sacred_stories', index, { ...story, title: e.target.value })}
                            className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="e.g., The Churning of the Ocean"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Story Content</label>
                          <textarea
                            rows={6}
                            value={story.story}
                            onChange={(e) => updateArrayItem('sacred_stories', index, { ...story, story: e.target.value })}
                            className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="The complete story narrative..."
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Moral Teaching</label>
                          <input
                            type="text"
                            value={story.moral}
                            onChange={(e) => updateArrayItem('sacred_stories', index, { ...story, moral: e.target.value })}
                            className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="Key moral or lesson from the story"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Characters (comma-separated)</label>
                          <input
                            type="text"
                            value={story.characters ? story.characters.join(', ') : ''}
                            onChange={(e) => updateArrayItem('sacred_stories', index, { ...story, characters: e.target.value.split(',').map(s => s.trim()).filter(s => s) })}
                            className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="e.g., Vishnu, Lakshmi, Devas, Asuras"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Significance</label>
                          <textarea
                            rows={3}
                            value={story.significance}
                            onChange={(e) => updateArrayItem('sacred_stories', index, { ...story, significance: e.target.value })}
                            className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="Religious and spiritual significance..."
                          />
                        </div>
                      </div>
                    </div>
                  )) : (
                    <div className="text-center py-8 text-gray-500">
                      <div className="text-lg mb-2">📚</div>
                      <p>No sacred stories added yet. Click &ldquo;Add Story&rdquo; to start.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Divine Symbolism Tab */}
          {activeTab === 'symbolism' && (
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Divine Symbolism</h3>
                  <button
                    type="button"
                    onClick={() => addArrayItem('divine_symbolism', { aspect: '', symbolism: '', deeper_meaning: '', dance_reference: '' })}
                    className="bg-orange-600 text-white px-3 py-1 rounded text-sm flex items-center gap-1"
                  >
                    <Plus className="w-4 h-4" />
                    Add Symbolism
                  </button>
                </div>
                
                <div className="space-y-4">
                  {form.divine_symbolism && form.divine_symbolism.length > 0 ? form.divine_symbolism.map((symbol, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-medium text-gray-700">Symbolism #{index + 1}</h4>
                        <button
                          type="button"
                          onClick={() => removeArrayItem('divine_symbolism', index)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Aspect</label>
                          <input
                            type="text"
                            value={symbol.aspect}
                            onChange={(e) => updateArrayItem('divine_symbolism', index, { ...symbol, aspect: e.target.value })}
                            className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="e.g., Cosmic Dance, Third Eye"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Symbolism</label>
                          <textarea
                            rows={3}
                            value={symbol.symbolism}
                            onChange={(e) => updateArrayItem('divine_symbolism', index, { ...symbol, symbolism: e.target.value })}
                            className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="What this aspect symbolizes..."
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Deeper Meaning</label>
                          <textarea
                            rows={3}
                            value={symbol.deeper_meaning}
                            onChange={(e) => updateArrayItem('divine_symbolism', index, { ...symbol, deeper_meaning: e.target.value })}
                            className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="Philosophical and spiritual deeper meaning..."
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Dance Reference (if applicable)</label>
                          <input
                            type="text"
                            value={symbol.dance_reference}
                            onChange={(e) => updateArrayItem('divine_symbolism', index, { ...symbol, dance_reference: e.target.value })}
                            className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="e.g., The Tandava represents..."
                          />
                        </div>
                      </div>
                    </div>
                  )) : (
                    <div className="text-center py-8 text-gray-500">
                      <div className="text-lg mb-2">✨</div>
                      <p>No divine symbolism added yet. Click &ldquo;Add Symbolism&rdquo; to start.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Essential Facts Tab */}
          {activeTab === 'facts' && (
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-gray-900">Essential Facts</h3>
                  <button
                    type="button"
                    onClick={() => addArrayItem('essential_facts', { category: '', fact: '', importance: 'medium', source: '' })}
                    className="bg-orange-600 text-white px-3 py-1 rounded text-sm flex items-center gap-1"
                  >
                    <Plus className="w-4 h-4" />
                    Add Fact
                  </button>
                </div>
                
                <div className="space-y-4">
                  {form.essential_facts && form.essential_facts.length > 0 ? form.essential_facts.map((fact, index) => (
                    <div key={index} className="p-4 border border-gray-200 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-medium text-gray-700">Fact #{index + 1}</h4>
                        <button
                          type="button"
                          onClick={() => removeArrayItem('essential_facts', index)}
                          className="text-red-600 hover:text-red-800"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="space-y-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                            <input
                              type="text"
                              value={fact.category}
                              onChange={(e) => updateArrayItem('essential_facts', index, { ...fact, category: e.target.value })}
                              className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                              placeholder="e.g., Origins, Attributes, Powers"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Importance</label>
                            <select
                              value={fact.importance}
                              onChange={(e) => updateArrayItem('essential_facts', index, { ...fact, importance: e.target.value })}
                              className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            >
                              <option value="high">High - Essential</option>
                              <option value="medium">Medium - Important</option>
                              <option value="low">Low - Good to Know</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Fact</label>
                          <textarea
                            rows={2}
                            value={fact.fact}
                            onChange={(e) => updateArrayItem('essential_facts', index, { ...fact, fact: e.target.value })}
                            className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="The factual information..."
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Source</label>
                          <input
                            type="text"
                            value={fact.source}
                            onChange={(e) => updateArrayItem('essential_facts', index, { ...fact, source: e.target.value })}
                            className="w-full px-3 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
                            placeholder="e.g., Rigveda, Puranas, etc."
                          />
                        </div>
                      </div>
                    </div>
                  )) : (
                    <div className="text-center py-8 text-gray-500">
                      <div className="text-lg mb-2">💡</div>
                      <p>No essential facts added yet. Click &ldquo;Add Fact&rdquo; to start.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* YouTube Videos Tab */}
          {activeTab === 'videos' && (
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-2">YouTube Video Links</h3>
                <p className="text-sm text-gray-600">
                  Add YouTube video URLs that will be embedded in each section. Videos enhance the content experience.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Story Video</label>
                  <input
                    type="url"
                    value={form.youtube_videos.story}
                    onChange={(e) => setForm(prev => ({ 
                      ...prev, 
                      youtube_videos: { ...prev.youtube_videos, story: e.target.value } 
                    }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    placeholder="https://youtube.com/watch?v=..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Iconography Video</label>
                  <input
                    type="url"
                    value={form.youtube_videos.iconography}
                    onChange={(e) => setForm(prev => ({ 
                      ...prev, 
                      youtube_videos: { ...prev.youtube_videos, iconography: e.target.value } 
                    }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    placeholder="https://youtube.com/watch?v=..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sacred Stories Video</label>
                  <input
                    type="url"
                    value={form.youtube_videos.stories}
                    onChange={(e) => setForm(prev => ({ 
                      ...prev, 
                      youtube_videos: { ...prev.youtube_videos, stories: e.target.value } 
                    }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    placeholder="https://youtube.com/watch?v=..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Divine Symbolism Video</label>
                  <input
                    type="url"
                    value={form.youtube_videos.symbolism}
                    onChange={(e) => setForm(prev => ({ 
                      ...prev, 
                      youtube_videos: { ...prev.youtube_videos, symbolism: e.target.value } 
                    }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    placeholder="https://youtube.com/watch?v=..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Festivals Video</label>
                  <input
                    type="url"
                    value={form.youtube_videos.festivals}
                    onChange={(e) => setForm(prev => ({ 
                      ...prev, 
                      youtube_videos: { ...prev.youtube_videos, festivals: e.target.value } 
                    }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    placeholder="https://youtube.com/watch?v=..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Sacred Temples Video</label>
                  <input
                    type="url"
                    value={form.youtube_videos.temples}
                    onChange={(e) => setForm(prev => ({ 
                      ...prev, 
                      youtube_videos: { ...prev.youtube_videos, temples: e.target.value } 
                    }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    placeholder="https://youtube.com/watch?v=..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mantras Video</label>
                  <input
                    type="url"
                    value={form.youtube_videos.mantras}
                    onChange={(e) => setForm(prev => ({ 
                      ...prev, 
                      youtube_videos: { ...prev.youtube_videos, mantras: e.target.value } 
                    }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    placeholder="https://youtube.com/watch?v=..."
                  />
                </div>
              </div>
            </div>
          )}

          {/* SEO Tab */}
          {activeTab === 'seo' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meta Title
                </label>
                <input
                  type="text"
                  value={form.meta_title}
                  onChange={(e) => setForm(prev => ({ ...prev, meta_title: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="SEO title for search engines"
                  maxLength={60}
                />
                <p className="text-xs text-gray-500 mt-1">
                  {form.meta_title.length}/60 characters
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Meta Description
                </label>
                <textarea
                  rows={3}
                  value={form.meta_description}
                  onChange={(e) => setForm(prev => ({ ...prev, meta_description: e.target.value }))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="SEO description for search engines"
                  maxLength={160}
                />
                <p className="text-xs text-gray-500 mt-1">
                  {form.meta_description.length}/160 characters
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">SEO Preview</h4>
                <div className="border border-gray-200 bg-white p-3 rounded">
                  <div className="text-blue-600 text-lg font-medium line-clamp-1">
                    {form.meta_title || form.title || form.name}
                  </div>
                  <div className="text-green-600 text-sm">
                    peacefulanswers.com/deities/{form.slug}
                  </div>
                  <div className="text-gray-600 text-sm mt-1 line-clamp-2">
                    {form.meta_description || form.description}
                  </div>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}