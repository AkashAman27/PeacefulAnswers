'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { hinduSupabase } from '@/lib/supabase'
import { ArrowLeft, Save, Plus, X } from 'lucide-react'
import Link from 'next/link'

interface FestivalForm {
  name: string
  sanskrit_name: string
  slug: string
  category_id: string
  title: string
  subtitle: string
  description: string
  historical_significance: string
  date_type: string
  duration: string
  lunar_calendar_date: string
  gregorian_date_range: string
  primary_deity: string
  significance_type: string
  featured_image_url: string
  featured_image_alt: string
  hero_image_url: string
  hero_image_alt: string
  rituals: Array<{ name: string; description: string; timing: string; materials: string[] }>
  regional_variations: Array<{ region: string; description: string; special_features: string[] }>
  stories: Array<{ title: string; story: string; moral: string }>
  meta_title: string
  meta_description: string
  meta_keywords: string
  status: string
  is_featured: boolean
}

export default function NewFestival() {
  const router = useRouter()
  const [categories, setCategories] = useState<any[]>([])
  const [saving, setSaving] = useState(false)

  const [form, setForm] = useState<FestivalForm>({
    name: '',
    sanskrit_name: '',
    slug: '',
    category_id: '',
    title: '',
    subtitle: '',
    description: '',
    historical_significance: '',
    date_type: '',
    duration: '',
    lunar_calendar_date: '',
    gregorian_date_range: '',
    primary_deity: '',
    significance_type: '',
    featured_image_url: '',
    featured_image_alt: '',
    hero_image_url: '',
    hero_image_alt: '',
    rituals: [],
    regional_variations: [],
    stories: [],
    meta_title: '',
    meta_description: '',
    meta_keywords: '',
    status: 'draft',
    is_featured: false
  })

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const { data, error } = await hinduSupabase
        .from('festival_categories')
        .select('*')
        .eq('is_active', true)
        .order('sort_order')

      if (error) throw error
      setCategories(data || [])
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const { error } = await hinduSupabase
        .from('festivals')
        .insert({
          ...form,
          published_at: form.status === 'published' ? new Date().toISOString() : null,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })

      if (error) throw error

      router.push('/admin/festivals')
    } catch (error) {
      console.error('Error creating festival:', error)
      alert('Error creating festival. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  const addRitual = () => {
    setForm(prev => ({
      ...prev,
      rituals: [...prev.rituals, { name: '', description: '', timing: '', materials: [] }]
    }))
  }

  const updateRitual = (index: number, field: string, value: any) => {
    setForm(prev => ({
      ...prev,
      rituals: prev.rituals.map((ritual, i) => 
        i === index ? { ...ritual, [field]: value } : ritual
      )
    }))
  }

  const removeRitual = (index: number) => {
    setForm(prev => ({
      ...prev,
      rituals: prev.rituals.filter((_, i) => i !== index)
    }))
  }

  const addRegionalVariation = () => {
    setForm(prev => ({
      ...prev,
      regional_variations: [...prev.regional_variations, { region: '', description: '', special_features: [] }]
    }))
  }

  const updateRegionalVariation = (index: number, field: string, value: any) => {
    setForm(prev => ({
      ...prev,
      regional_variations: prev.regional_variations.map((variation, i) => 
        i === index ? { ...variation, [field]: value } : variation
      )
    }))
  }

  const removeRegionalVariation = (index: number) => {
    setForm(prev => ({
      ...prev,
      regional_variations: prev.regional_variations.filter((_, i) => i !== index)
    }))
  }

  const addStory = () => {
    setForm(prev => ({
      ...prev,
      stories: [...prev.stories, { title: '', story: '', moral: '' }]
    }))
  }

  const updateStory = (index: number, field: string, value: string) => {
    setForm(prev => ({
      ...prev,
      stories: prev.stories.map((story, i) => 
        i === index ? { ...story, [field]: value } : story
      )
    }))
  }

  const removeStory = (index: number) => {
    setForm(prev => ({
      ...prev,
      stories: prev.stories.filter((_, i) => i !== index)
    }))
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/admin/festivals"
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Add New Festival</h1>
          <p className="text-gray-600 mt-1">Create a new Hindu festival page</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Basic Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Festival Name *
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={form.name}
                onChange={(e) => {
                  const name = e.target.value
                  setForm(prev => ({
                    ...prev,
                    name,
                    slug: generateSlug(name),
                    meta_title: name ? `${name} - Hindu Festival | PeacefulAnswers` : ''
                  }))
                }}
                placeholder="e.g., Diwali"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sanskrit Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={form.sanskrit_name}
                onChange={(e) => setForm(prev => ({ ...prev, sanskrit_name: e.target.value }))}
                placeholder="e.g., दीपावली"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                URL Slug *
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={form.slug}
                onChange={(e) => setForm(prev => ({ ...prev, slug: e.target.value }))}
                placeholder="e.g., diwali"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <select
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={form.category_id}
                onChange={(e) => setForm(prev => ({ ...prev, category_id: e.target.value }))}
              >
                <option value="">Select Category</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title *
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={form.title}
                onChange={(e) => setForm(prev => ({ ...prev, title: e.target.value }))}
                placeholder="e.g., Festival of Lights"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subtitle
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={form.subtitle}
                onChange={(e) => setForm(prev => ({ ...prev, subtitle: e.target.value }))}
                placeholder="e.g., Celebrating the victory of light over darkness"
              />
            </div>
          </div>
        </div>

        {/* Festival Details */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Festival Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date Type
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={form.date_type}
                onChange={(e) => setForm(prev => ({ ...prev, date_type: e.target.value }))}
                placeholder="e.g., October/November"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={form.duration}
                onChange={(e) => setForm(prev => ({ ...prev, duration: e.target.value }))}
                placeholder="e.g., 5 days"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Primary Deity
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={form.primary_deity}
                onChange={(e) => setForm(prev => ({ ...prev, primary_deity: e.target.value }))}
                placeholder="e.g., Goddess Lakshmi"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Significance Type
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={form.significance_type}
                onChange={(e) => setForm(prev => ({ ...prev, significance_type: e.target.value }))}
                placeholder="e.g., Spiritual, Cultural"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Lunar Calendar Date
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={form.lunar_calendar_date}
                onChange={(e) => setForm(prev => ({ ...prev, lunar_calendar_date: e.target.value }))}
                placeholder="e.g., Kartik Amavasya"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gregorian Date Range
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={form.gregorian_date_range}
                onChange={(e) => setForm(prev => ({ ...prev, gregorian_date_range: e.target.value }))}
                placeholder="e.g., October 30 - November 3, 2024"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              required
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              value={form.description}
              onChange={(e) => setForm(prev => ({ ...prev, description: e.target.value }))}
              placeholder="Describe the festival..."
            />
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Historical Significance
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              value={form.historical_significance}
              onChange={(e) => setForm(prev => ({ ...prev, historical_significance: e.target.value }))}
              placeholder="Historical and spiritual significance..."
            />
          </div>
        </div>

        {/* Images */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Images</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Featured Image URL
              </label>
              <input
                type="url"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={form.featured_image_url}
                onChange={(e) => setForm(prev => ({ ...prev, featured_image_url: e.target.value }))}
                placeholder="https://example.com/festival-image.jpg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Featured Image Alt Text
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={form.featured_image_alt}
                onChange={(e) => setForm(prev => ({ ...prev, featured_image_alt: e.target.value }))}
                placeholder="Description of the image"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hero Image URL
              </label>
              <input
                type="url"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={form.hero_image_url}
                onChange={(e) => setForm(prev => ({ ...prev, hero_image_url: e.target.value }))}
                placeholder="https://example.com/hero-image.jpg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hero Image Alt Text
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={form.hero_image_alt}
                onChange={(e) => setForm(prev => ({ ...prev, hero_image_alt: e.target.value }))}
                placeholder="Description of the hero image"
              />
            </div>
          </div>
        </div>

        {/* SEO */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">SEO Settings</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Meta Title
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={form.meta_title}
                onChange={(e) => setForm(prev => ({ ...prev, meta_title: e.target.value }))}
                placeholder="SEO title for search engines"
              />
              <div className="text-sm text-gray-500 mt-1">
                {form.meta_title.length}/60 characters
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Meta Description
              </label>
              <textarea
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={form.meta_description}
                onChange={(e) => setForm(prev => ({ ...prev, meta_description: e.target.value }))}
                placeholder="SEO description for search engines"
              />
              <div className="text-sm text-gray-500 mt-1">
                {form.meta_description.length}/160 characters
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Keywords
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={form.meta_keywords}
                onChange={(e) => setForm(prev => ({ ...prev, meta_keywords: e.target.value }))}
                placeholder="keyword1, keyword2, keyword3"
              />
            </div>
          </div>
        </div>

        {/* Publishing */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Publishing</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                value={form.status}
                onChange={(e) => setForm(prev => ({ ...prev, status: e.target.value }))}
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>

            <div>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                  checked={form.is_featured}
                  onChange={(e) => setForm(prev => ({ ...prev, is_featured: e.target.checked }))}
                />
                <span className="text-sm font-medium text-gray-700">Featured Festival</span>
              </label>
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-end gap-4">
          <Link
            href="/admin/festivals"
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={saving}
            className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors disabled:opacity-50 flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            {saving ? 'Creating...' : 'Create Festival'}
          </button>
        </div>
      </form>
    </div>
  )
}