'use client'

import { use, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import RichTextEditor from '@/components/admin/RichTextEditor'
import {
  ArrowLeft,
  Save,
  Plus,
  Book,
  FileText,
  Image as ImageIcon,
  Star,
  Globe,
  Trash2,
  Eye,
  Clock
} from 'lucide-react'

interface ContentSection {
  title: string
  content: string
  image_url?: string
  image_alt?: string
}

interface RamayanaPageData {
  id: string
  title: string
  sanskrit_title: string
  kand: string
  episode_number: number
  slug: string
  subtitle: string
  description: string
  hero_image_url: string
  hero_image_alt: string
  content_sections: ContentSection[]
  key_characters: string[]
  key_locations: string[]
  spiritual_teachings: string
  modern_relevance: string
  meta_title: string
  meta_description: string
  keywords: string[]
  canonical_url: string
  status: string
  is_featured: boolean
  sort_order: number
  created_at: string
  updated_at: string
}

export default function EditRamayanaPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [activeTab, setActiveTab] = useState('basic')
  const [formData, setFormData] = useState<RamayanaPageData | null>(null)

  const kands = [
    { value: 'bala-kanda', label: 'Bala Kanda' },
    { value: 'ayodhya-kanda', label: 'Ayodhya Kanda' },
    { value: 'aranya-kanda', label: 'Aranya Kanda' },
    { value: 'kishkindha-kanda', label: 'Kishkindha Kanda' },
    { value: 'sundara-kanda', label: 'Sundara Kanda' },
    { value: 'yuddha-kanda', label: 'Yuddha Kanda' },
    { value: 'uttara-kanda', label: 'Uttara Kanda' }
  ]

  useEffect(() => {
    fetchPage()
  }, [id])

  const fetchPage = async () => {
    try {
      const { data, error } = await supabase
        .schema('hindu')
        .from('ramayana_pages')
        .select('*')
        .eq('id', id)
        .single()

      if (error) throw error

      // Ensure arrays are properly initialized
      setFormData({
        ...data,
        content_sections: data.content_sections || [],
        key_characters: data.key_characters || [],
        key_locations: data.key_locations || [],
        keywords: data.keywords || []
      })
    } catch (error) {
      console.error('Error fetching page:', error)
      alert('Error loading page')
      router.push('/admin/ramayana')
    } finally {
      setLoading(false)
    }
  }

  const updateFormData = (updates: Partial<RamayanaPageData>) => {
    if (formData) {
      setFormData(prev => ({ ...prev!, ...updates }))
    }
  }

  const generateSlug = (title: string, kand: string) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
  }

  const handleTitleChange = (title: string) => {
    if (!formData) return
    const slug = generateSlug(title, formData.kand)
    updateFormData({
      title,
      slug,
      canonical_url: `/scriptures/ramayana/${formData.kand}/${slug}`
    })
  }

  const handleKandChange = (kand: string) => {
    if (!formData) return
    const slug = formData.title ? generateSlug(formData.title, kand) : ''
    updateFormData({
      kand,
      slug,
      canonical_url: slug ? `/scriptures/ramayana/${kand}/${slug}` : ''
    })
  }

  const addContentSection = () => {
    if (!formData) return
    const newSection: ContentSection = {
      title: '',
      content: '',
      image_url: '',
      image_alt: ''
    }
    updateFormData({
      content_sections: [...formData.content_sections, newSection]
    })
  }

  const updateContentSection = (index: number, updates: Partial<ContentSection>) => {
    if (!formData) return
    const sections = [...formData.content_sections]
    sections[index] = { ...sections[index], ...updates }
    updateFormData({ content_sections: sections })
  }

  const removeContentSection = (index: number) => {
    if (!formData) return
    const sections = formData.content_sections.filter((_, i) => i !== index)
    updateFormData({ content_sections: sections })
  }

  const handleSave = async () => {
    if (!formData || !formData.title || !formData.kand || !formData.slug) {
      alert('Please provide title, kand, and slug')
      return
    }

    setSaving(true)
    try {
      const { data, error } = await supabase
        .schema('hindu')
        .from('ramayana_pages')
        .update({
          ...formData,
          updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .select('*')
        .single()

      if (error) throw error

      alert('Page updated successfully!')
      await fetchPage() // Refresh data
    } catch (error: any) {
      console.error('Error saving page:', error)
      alert('Error saving: ' + error.message)
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 border-2 border-orange-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!formData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Page not found</p>
          <Link
            href="/admin/ramayana"
            className="text-orange-600 hover:text-orange-700"
          >
            Return to Ramayana Pages
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4">
              <Link
                href="/admin/ramayana"
                className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Ramayana Pages
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <h1 className="text-2xl font-bold text-gray-900">
                Edit: {formData.title}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href={`/scriptures/ramayana/${formData.kand}/${formData.slug}`}
                className="text-gray-600 hover:text-gray-800 flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300"
              >
                <Eye className="w-4 h-4" />
                Preview
              </Link>

              <select
                value={formData.status}
                onChange={(e) => updateFormData({ status: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>

              <button
                onClick={handleSave}
                disabled={saving}
                className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 disabled:opacity-50 transition-colors flex items-center gap-2"
              >
                {saving ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    Save Changes
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Info */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Book className="w-5 h-5 text-orange-600" />
                <span className="font-medium">{formData.kand.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded">
                  Episode #{formData.episode_number}
                </span>
                {formData.is_featured && (
                  <Star className="w-4 h-4 text-yellow-500" />
                )}
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              Last updated: {new Date(formData.updated_at).toLocaleString()}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: 'basic', label: 'Basic Info', icon: FileText },
                { id: 'content', label: 'Content', icon: FileText },
                { id: 'media', label: 'Media', icon: ImageIcon },
                { id: 'metadata', label: 'Metadata', icon: Star },
                { id: 'seo', label: 'SEO', icon: Globe }
              ].map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
                      activeTab === tab.id
                        ? 'border-orange-500 text-orange-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Tab Content - Same as new page but with formData */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {/* Basic Info Tab */}
          {activeTab === 'basic' && (
            <div className="p-6 space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Basic Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sanskrit Title
                  </label>
                  <input
                    type="text"
                    value={formData.sanskrit_title}
                    onChange={(e) => updateFormData({ sanskrit_title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kand *
                  </label>
                  <select
                    value={formData.kand}
                    onChange={(e) => handleKandChange(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  >
                    <option value="">Select Kand</option>
                    {kands.map((kand) => (
                      <option key={kand.value} value={kand.value}>
                        {kand.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Episode Number
                  </label>
                  <input
                    type="number"
                    value={formData.episode_number}
                    onChange={(e) => updateFormData({ episode_number: parseInt(e.target.value) || 1 })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                    min="1"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Slug *
                  </label>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => updateFormData({ slug: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subtitle
                  </label>
                  <input
                    type="text"
                    value={formData.subtitle}
                    onChange={(e) => updateFormData({ subtitle: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => updateFormData({ description: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                />
              </div>

              <div className="flex items-center gap-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.is_featured}
                    onChange={(e) => updateFormData({ is_featured: e.target.checked })}
                    className="mr-2"
                  />
                  Featured Episode
                </label>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Sort Order
                  </label>
                  <input
                    type="number"
                    value={formData.sort_order}
                    onChange={(e) => updateFormData({ sort_order: parseInt(e.target.value) || 0 })}
                    className="w-20 px-2 py-1 border border-gray-300 rounded"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Content Tab */}
          {activeTab === 'content' && (
            <div className="p-6 space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-900">Content Sections</h2>
                <button
                  onClick={addContentSection}
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add Section
                </button>
              </div>

              {formData.content_sections.map((section, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium text-gray-900">Section {index + 1}</h3>
                    <button
                      onClick={() => removeContentSection(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Section Title
                      </label>
                      <input
                        type="text"
                        value={section.title}
                        onChange={(e) => updateContentSection(index, { title: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Content
                      </label>
                      <RichTextEditor
                        value={section.content}
                        onChange={(content) => updateContentSection(index, { content })}
                        placeholder="Write the detailed content for this section..."
                        className="min-h-64"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Section Image URL
                        </label>
                        <input
                          type="url"
                          value={section.image_url || ''}
                          onChange={(e) => updateContentSection(index, { image_url: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Image Alt Text
                        </label>
                        <input
                          type="text"
                          value={section.image_alt || ''}
                          onChange={(e) => updateContentSection(index, { image_alt: e.target.value })}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {formData.content_sections.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  <FileText className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                  <p>No content sections added yet.</p>
                  <p>Click "Add Section" to start building your episode.</p>
                </div>
              )}
            </div>
          )}

          {/* Other tabs similar structure with formData... */}
          {/* Media Tab */}
          {activeTab === 'media' && (
            <div className="p-6 space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Media & Images</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hero Image URL
                  </label>
                  <input
                    type="url"
                    value={formData.hero_image_url}
                    onChange={(e) => updateFormData({ hero_image_url: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hero Image Alt Text
                  </label>
                  <input
                    type="text"
                    value={formData.hero_image_alt}
                    onChange={(e) => updateFormData({ hero_image_alt: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Metadata Tab */}
          {activeTab === 'metadata' && (
            <div className="p-6 space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Episode Metadata</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Key Characters (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={formData.key_characters.join(', ')}
                    onChange={(e) => updateFormData({
                      key_characters: e.target.value.split(',').map(c => c.trim()).filter(c => c)
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Key Locations (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={formData.key_locations.join(', ')}
                    onChange={(e) => updateFormData({
                      key_locations: e.target.value.split(',').map(l => l.trim()).filter(l => l)
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Spiritual Teachings
                  </label>
                  <RichTextEditor
                    value={formData.spiritual_teachings}
                    onChange={(content) => updateFormData({ spiritual_teachings: content })}
                    placeholder="What spiritual lessons does this episode teach?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Modern Relevance
                  </label>
                  <RichTextEditor
                    value={formData.modern_relevance}
                    onChange={(content) => updateFormData({ modern_relevance: content })}
                    placeholder="How is this episode relevant to modern life?"
                  />
                </div>
              </div>
            </div>
          )}

          {/* SEO Tab */}
          {activeTab === 'seo' && (
            <div className="p-6 space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">SEO & Meta Information</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meta Title
                  </label>
                  <input
                    type="text"
                    value={formData.meta_title}
                    onChange={(e) => updateFormData({ meta_title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Length: {formData.meta_title.length} characters
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meta Description
                  </label>
                  <textarea
                    value={formData.meta_description}
                    onChange={(e) => updateFormData({ meta_description: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Length: {formData.meta_description.length} characters
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Keywords (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={formData.keywords.join(', ')}
                    onChange={(e) => updateFormData({
                      keywords: e.target.value.split(',').map(k => k.trim()).filter(k => k)
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Canonical URL
                  </label>
                  <input
                    type="text"
                    value={formData.canonical_url}
                    onChange={(e) => updateFormData({ canonical_url: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
                    readOnly
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}