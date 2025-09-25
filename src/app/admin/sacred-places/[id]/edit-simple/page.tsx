'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { hinduSupabase } from '@/lib/supabase'
import Link from 'next/link'
import {
  ArrowLeft,
  Save,
  Eye,
  Plus,
  Trash2,
  FileText,
  Image as ImageIcon,
  Star,
  HelpCircle,
  Globe,
  MapPin
} from 'lucide-react'

interface SacredPlace {
  id: string
  name: string
  sanskrit_name: string
  slug: string
  category_id: string
  title: string
  subtitle: string
  description: string
  location_details: any
  hero_image_url: string
  hero_image_alt: string
  featured_image_url: string
  featured_image_alt: string
  content_sections: any[]
  interesting_facts: any[]
  religious_significance: string
  faqs: any[]
  meta_title: string
  meta_description: string
  keywords: string[]
  canonical_url: string
  status: string
  is_featured: boolean
  sort_order: number
}

interface Category {
  id: string
  name: string
  slug: string
}

export default function EditSacredPlaceSimple({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [place, setPlace] = useState<SacredPlace | null>(null)
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchSacredPlace()
    fetchCategories()
  }, [params.id])

  const fetchSacredPlace = async () => {
    try {
      const { data, error } = await hinduSupabase
        .from('sacred_places')
        .select('*')
        .eq('id', params.id)
        .single()

      if (error) throw error
      setPlace(data)
    } catch (error) {
      console.error('Error fetching sacred place:', error)
      alert('Error loading sacred place')
    } finally {
      setLoading(false)
    }
  }

  const fetchCategories = async () => {
    try {
      const { data, error } = await hinduSupabase
        .from('sacred_place_categories')
        .select('id, name, slug')
        .eq('is_active', true)
        .order('sort_order')

      if (error) throw error
      setCategories(data || [])
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

  const handleSave = async () => {
    if (!place) return

    setSaving(true)
    try {
      const { error } = await hinduSupabase
        .from('sacred_places')
        .update({
          ...place,
          updated_at: new Date().toISOString()
        })
        .eq('id', place.id)

      if (error) throw error
      alert('Sacred place saved successfully!')
    } catch (error: any) {
      console.error('Error saving sacred place:', error)
      alert('Error saving: ' + error.message)
    } finally {
      setSaving(false)
    }
  }

  const updatePlace = (updates: Partial<SacredPlace>) => {
    if (!place) return
    setPlace({ ...place, ...updates })
  }

  const addContentSection = () => {
    if (!place) return
    const newSection = { title: '', content: '', type: 'text' }
    updatePlace({
      content_sections: [...(place.content_sections || []), newSection]
    })
  }

  const updateContentSection = (index: number, updates: any) => {
    if (!place) return
    const sections = [...(place.content_sections || [])]
    sections[index] = { ...sections[index], ...updates }
    updatePlace({ content_sections: sections })
  }

  const removeContentSection = (index: number) => {
    if (!place) return
    const sections = place.content_sections?.filter((_, i) => i !== index) || []
    updatePlace({ content_sections: sections })
  }

  const addInterestingFact = () => {
    if (!place) return
    const newFact = { title: '', description: '' }
    updatePlace({
      interesting_facts: [...(place.interesting_facts || []), newFact]
    })
  }

  const updateInterestingFact = (index: number, updates: any) => {
    if (!place) return
    const facts = [...(place.interesting_facts || [])]
    facts[index] = { ...facts[index], ...updates }
    updatePlace({ interesting_facts: facts })
  }

  const removeInterestingFact = (index: number) => {
    if (!place) return
    const facts = place.interesting_facts?.filter((_, i) => i !== index) || []
    updatePlace({ interesting_facts: facts })
  }

  const addFAQ = () => {
    if (!place) return
    const newFAQ = { question: '', answer: '' }
    updatePlace({
      faqs: [...(place.faqs || []), newFAQ]
    })
  }

  const updateFAQ = (index: number, updates: any) => {
    if (!place) return
    const faqs = [...(place.faqs || [])]
    faqs[index] = { ...faqs[index], ...updates }
    updatePlace({ faqs })
  }

  const removeFAQ = (index: number) => {
    if (!place) return
    const faqs = place.faqs?.filter((_, i) => i !== index) || []
    updatePlace({ faqs })
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!place) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sacred Place Not Found</h2>
          <Link
            href="/admin/sacred-places"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Sacred Places
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
                href="/admin/sacred-places"
                className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Sacred Places
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <h1 className="text-2xl font-bold text-gray-900">
                Edit: {place.name}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <select
                value={place.status}
                onChange={(e) => updatePlace({ status: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>

              <Link
                href={`/sacred-places/${categories.find(c => c.id === place.category_id)?.slug}/${place.slug}`}
                target="_blank"
                className="text-gray-600 hover:text-gray-900 flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Eye className="w-4 h-4" />
                Preview
              </Link>

              <button
                onClick={handleSave}
                disabled={saving}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors flex items-center gap-2"
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Basic Information Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
            <FileText className="w-6 h-6 text-blue-600" />
            Basic Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
              <input
                type="text"
                value={place.name}
                onChange={(e) => updatePlace({ name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Sanskrit Name</label>
              <input
                type="text"
                value={place.sanskrit_name || ''}
                onChange={(e) => updatePlace({ sanskrit_name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Slug *</label>
              <input
                type="text"
                value={place.slug}
                onChange={(e) => updatePlace({ slug: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={place.category_id}
                onChange={(e) => updatePlace({ category_id: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
              <input
                type="text"
                value={place.title || ''}
                onChange={(e) => updatePlace({ title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle</label>
              <input
                type="text"
                value={place.subtitle || ''}
                onChange={(e) => updatePlace({ subtitle: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              value={place.description || ''}
              onChange={(e) => updatePlace({ description: e.target.value })}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Religious Significance</label>
            <textarea
              value={place.religious_significance || ''}
              onChange={(e) => updatePlace({ religious_significance: e.target.value })}
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Describe the religious and spiritual significance..."
            />
          </div>

          <div className="flex items-center gap-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={place.is_featured}
                onChange={(e) => updatePlace({ is_featured: e.target.checked })}
                className="mr-2"
              />
              Featured Place
            </label>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sort Order</label>
              <input
                type="number"
                value={place.sort_order || 0}
                onChange={(e) => updatePlace({ sort_order: parseInt(e.target.value) })}
                className="w-20 px-2 py-1 border border-gray-300 rounded"
              />
            </div>
          </div>
        </div>

        {/* Media & Images Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
            <ImageIcon className="w-6 h-6 text-green-600" />
            Media & Images
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Hero Image URL</label>
              <input
                type="url"
                value={place.hero_image_url || ''}
                onChange={(e) => updatePlace({ hero_image_url: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://example.com/hero-image.jpg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Hero Image Alt Text</label>
              <input
                type="text"
                value={place.hero_image_alt || ''}
                onChange={(e) => updatePlace({ hero_image_alt: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image URL</label>
              <input
                type="url"
                value={place.featured_image_url || ''}
                onChange={(e) => updatePlace({ featured_image_url: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://example.com/featured-image.jpg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image Alt Text</label>
              <input
                type="text"
                value={place.featured_image_alt || ''}
                onChange={(e) => updatePlace({ featured_image_alt: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
              <FileText className="w-6 h-6 text-purple-600" />
              Content Sections
            </h2>
            <button
              onClick={addContentSection}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Section
            </button>
          </div>

          {place.content_sections?.map((section, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
                  <input
                    type="text"
                    value={section.title}
                    onChange={(e) => updateContentSection(index, { title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                  <textarea
                    value={section.content}
                    onChange={(e) => updateContentSection(index, { content: e.target.value })}
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interesting Facts */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
              <Star className="w-6 h-6 text-yellow-600" />
              Interesting Facts
            </h2>
            <button
              onClick={addInterestingFact}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Fact
            </button>
          </div>

          {place.interesting_facts?.map((fact, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-900">Fact {index + 1}</h3>
                <button
                  onClick={() => removeInterestingFact(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Fact Title</label>
                  <input
                    type="text"
                    value={fact.title}
                    onChange={(e) => updateInterestingFact(index, { title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    value={fact.description}
                    onChange={(e) => updateInterestingFact(index, { description: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-orange-600" />
              Frequently Asked Questions
            </h2>
            <button
              onClick={addFAQ}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add FAQ
            </button>
          </div>

          {place.faqs?.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-gray-900">FAQ {index + 1}</h3>
                <button
                  onClick={() => removeFAQ(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Question</label>
                  <input
                    type="text"
                    value={faq.question}
                    onChange={(e) => updateFAQ(index, { question: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Answer</label>
                  <textarea
                    value={faq.answer}
                    onChange={(e) => updateFAQ(index, { answer: e.target.value })}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SEO & Meta */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
            <Globe className="w-6 h-6 text-red-600" />
            SEO & Meta Information
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Meta Title</label>
              <input
                type="text"
                value={place.meta_title || ''}
                onChange={(e) => updatePlace({ meta_title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="SEO optimized title (recommended: 50-60 characters)"
              />
              <p className="text-sm text-gray-500 mt-1">
                Length: {(place.meta_title || '').length} characters
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Meta Description</label>
              <textarea
                value={place.meta_description || ''}
                onChange={(e) => updatePlace({ meta_description: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="SEO meta description (recommended: 150-160 characters)"
              />
              <p className="text-sm text-gray-500 mt-1">
                Length: {(place.meta_description || '').length} characters
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Keywords (comma-separated)</label>
              <input
                type="text"
                value={(place.keywords || []).join(', ')}
                onChange={(e) => updatePlace({
                  keywords: e.target.value.split(',').map(k => k.trim()).filter(k => k)
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="sacred place, temple, pilgrimage, char dham"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Canonical URL</label>
              <input
                type="url"
                value={place.canonical_url || ''}
                onChange={(e) => updatePlace({ canonical_url: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                placeholder="/sacred-places/char-dham/badrinath"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}