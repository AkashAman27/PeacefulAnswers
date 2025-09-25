'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import {
  ArrowLeft,
  Save,
  Plus,
  Mountain,
  FileText,
  Image as ImageIcon,
  Star,
  HelpCircle,
  Globe,
  Trash2
} from 'lucide-react'

interface Category {
  id: string
  name: string
  slug: string
}

interface ContentSection {
  title: string
  content: string
  type: string
}

interface InterestingFact {
  title: string
  description: string
}

interface FAQ {
  question: string
  answer: string
}

export default function NewSacredPlace() {
  const router = useRouter()
  const [categories, setCategories] = useState<Category[]>([])
  const [saving, setSaving] = useState(false)
  const [activeTab, setActiveTab] = useState('basic')

  // Form data
  const [formData, setFormData] = useState({
    name: '',
    sanskrit_name: '',
    slug: '',
    category_id: '',
    title: '',
    subtitle: '',
    description: '',
    location_details: {
      address: '',
      city: '',
      state: '',
      country: 'India',
      coordinates: { lat: 0, lng: 0 },
      altitude: ''
    },
    hero_image_url: '',
    hero_image_alt: '',
    featured_image_url: '',
    featured_image_alt: '',
    content_sections: [] as ContentSection[],
    interesting_facts: [] as InterestingFact[],
    religious_significance: '',
    faqs: [] as FAQ[],
    meta_title: '',
    meta_description: '',
    keywords: [] as string[],
    canonical_url: '',
    status: 'draft',
    is_featured: false,
    sort_order: 0
  })

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase
        .schema('hindu')
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

  const updateFormData = (updates: any) => {
    setFormData(prev => ({ ...prev, ...updates }))
  }

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '')
  }

  const handleNameChange = (name: string) => {
    updateFormData({
      name,
      slug: generateSlug(name),
      canonical_url: `/sacred-places/${categories.find(c => c.id === formData.category_id)?.slug || 'category'}/${generateSlug(name)}`
    })
  }

  const addContentSection = () => {
    const newSection = { title: '', content: '', type: 'text' }
    updateFormData({
      content_sections: [...formData.content_sections, newSection]
    })
  }

  const updateContentSection = (index: number, updates: Partial<ContentSection>) => {
    const sections = [...formData.content_sections]
    sections[index] = { ...sections[index], ...updates }
    updateFormData({ content_sections: sections })
  }

  const removeContentSection = (index: number) => {
    const sections = formData.content_sections.filter((_, i) => i !== index)
    updateFormData({ content_sections: sections })
  }

  const addInterestingFact = () => {
    const newFact = { title: '', description: '' }
    updateFormData({
      interesting_facts: [...formData.interesting_facts, newFact]
    })
  }

  const updateInterestingFact = (index: number, updates: Partial<InterestingFact>) => {
    const facts = [...formData.interesting_facts]
    facts[index] = { ...facts[index], ...updates }
    updateFormData({ interesting_facts: facts })
  }

  const removeInterestingFact = (index: number) => {
    const facts = formData.interesting_facts.filter((_, i) => i !== index)
    updateFormData({ interesting_facts: facts })
  }

  const addFAQ = () => {
    const newFAQ = { question: '', answer: '' }
    updateFormData({
      faqs: [...formData.faqs, newFAQ]
    })
  }

  const updateFAQ = (index: number, updates: Partial<FAQ>) => {
    const faqs = [...formData.faqs]
    faqs[index] = { ...faqs[index], ...updates }
    updateFormData({ faqs })
  }

  const removeFAQ = (index: number) => {
    const faqs = formData.faqs.filter((_, i) => i !== index)
    updateFormData({ faqs })
  }

  const handleSave = async () => {
    if (!formData.name || !formData.slug) {
      alert('Please provide at least name and slug')
      return
    }

    setSaving(true)
    try {
      const { data, error } = await supabase
        .schema('hindu')
        .from('sacred_places')
        .insert({
          ...formData,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .select('id')
        .single()

      if (error) throw error

      alert('Sacred place created successfully!')
      router.push(`/admin/sacred-places/${data.id}/edit`)
    } catch (error: any) {
      console.error('Error saving sacred place:', error)
      alert('Error saving: ' + error.message)
    } finally {
      setSaving(false)
    }
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
                Add New Sacred Place
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <select
                value={formData.status}
                onChange={(e) => updateFormData({ status: e.target.value })}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>

              <button
                onClick={handleSave}
                disabled={saving}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors flex items-center gap-2"
              >
                {saving ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Creating...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    Create Sacred Place
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: 'basic', label: 'Basic Info', icon: FileText },
                { id: 'content', label: 'Content Sections', icon: FileText },
                { id: 'media', label: 'Media & Images', icon: ImageIcon },
                { id: 'facts', label: 'Interesting Facts', icon: Star },
                { id: 'faqs', label: 'FAQs', icon: HelpCircle },
                { id: 'seo', label: 'SEO & Meta', icon: Globe }
              ].map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
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

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {activeTab === 'basic' && (
            <div className="p-6 space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Basic Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleNameChange(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Badrinath"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sanskrit Name
                  </label>
                  <input
                    type="text"
                    value={formData.sanskrit_name}
                    onChange={(e) => updateFormData({ sanskrit_name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="बदरीनाथ"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Slug *
                  </label>
                  <input
                    type="text"
                    value={formData.slug}
                    onChange={(e) => updateFormData({ slug: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="badrinath"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    value={formData.category_id}
                    onChange={(e) => updateFormData({ category_id: e.target.value })}
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => updateFormData({ title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Sacred Abode of Lord Vishnu"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subtitle
                  </label>
                  <input
                    type="text"
                    value={formData.subtitle}
                    onChange={(e) => updateFormData({ subtitle: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="The Northern Dham of Char Dham Yatra"
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Brief description of the sacred place..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Religious Significance
                </label>
                <textarea
                  value={formData.religious_significance}
                  onChange={(e) => updateFormData({ religious_significance: e.target.value })}
                  rows={6}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Describe the religious and spiritual significance..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    value={formData.location_details.state}
                    onChange={(e) => updateFormData({
                      location_details: { ...formData.location_details, state: e.target.value }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Uttarakhand"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    value={formData.location_details.city}
                    onChange={(e) => updateFormData({
                      location_details: { ...formData.location_details, city: e.target.value }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Badrinath"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Altitude
                  </label>
                  <input
                    type="text"
                    value={formData.location_details.altitude}
                    onChange={(e) => updateFormData({
                      location_details: { ...formData.location_details, altitude: e.target.value }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="3,133 meters"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.is_featured}
                    onChange={(e) => updateFormData({ is_featured: e.target.checked })}
                    className="mr-2"
                  />
                  Featured Place
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

          {/* Content Sections Tab */}
          {activeTab === 'content' && (
            <div className="p-6 space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-900">Content Sections</h2>
                <button
                  onClick={addContentSection}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add Section
                </button>
              </div>

              {formData.content_sections.map((section, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Spiritual Significance"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Content
                      </label>
                      <textarea
                        value={section.content}
                        onChange={(e) => updateContentSection(index, { content: e.target.value })}
                        rows={6}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Content for this section..."
                      />
                    </div>
                  </div>
                </div>
              ))}

              {formData.content_sections.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <FileText className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                  <p>No content sections added yet.</p>
                  <p>Click "Add Section" to get started.</p>
                </div>
              )}
            </div>
          )}

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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="https://example.com/hero-image.jpg"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Badrinath Temple in Himalayas"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Featured Image URL
                  </label>
                  <input
                    type="url"
                    value={formData.featured_image_url}
                    onChange={(e) => updateFormData({ featured_image_url: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="https://example.com/featured-image.jpg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Featured Image Alt Text
                  </label>
                  <input
                    type="text"
                    value={formData.featured_image_alt}
                    onChange={(e) => updateFormData({ featured_image_alt: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Badrinath Temple entrance"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Facts Tab */}
          {activeTab === 'facts' && (
            <div className="p-6 space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-900">Interesting Facts</h2>
                <button
                  onClick={addInterestingFact}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add Fact
                </button>
              </div>

              {formData.interesting_facts.map((fact, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Fact Title
                      </label>
                      <input
                        type="text"
                        value={fact.title}
                        onChange={(e) => updateInterestingFact(index, { title: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Ancient Origins"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                      </label>
                      <textarea
                        value={fact.description}
                        onChange={(e) => updateInterestingFact(index, { description: e.target.value })}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="The temple is believed to be over 1,200 years old..."
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* FAQs Tab */}
          {activeTab === 'faqs' && (
            <div className="p-6 space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-900">Frequently Asked Questions</h2>
                <button
                  onClick={addFAQ}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Add FAQ
                </button>
              </div>

              {formData.faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
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
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Question
                      </label>
                      <input
                        type="text"
                        value={faq.question}
                        onChange={(e) => updateFAQ(index, { question: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="When is the best time to visit?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Answer
                      </label>
                      <textarea
                        value={faq.answer}
                        onChange={(e) => updateFAQ(index, { answer: e.target.value })}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="The best time to visit is..."
                      />
                    </div>
                  </div>
                </div>
              ))}
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Badrinath Dham - Sacred Char Dham Pilgrimage"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Discover Badrinath, one of the holiest Char Dham sites..."
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="badrinath, char dham, vishnu temple"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="/sacred-places/char-dham/badrinath"
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