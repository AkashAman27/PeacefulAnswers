'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { hinduSupabase } from '@/lib/supabase'
import Link from 'next/link'
import Image from 'next/image'
import RichTextEditor from '@/components/admin/RichTextEditor'
import {
  ArrowLeft,
  Save,
  Eye,
  Upload,
  Plus,
  Trash2,
  MapPin,
  Mountain,
  Star,
  Calendar,
  Clock,
  Image as ImageIcon,
  FileText,
  HelpCircle,
  Settings,
  Globe,
  Camera
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
  content_sections: ContentSection[]
  interesting_facts: InterestingFact[]
  religious_significance: string
  mythology_stories: MythologyStory[]
  festivals: Festival[]
  rituals_practices: Ritual[]
  pilgrimage_info: any
  temples: Temple[]
  darshan_timings: any
  gallery_images: GalleryImage[]
  related_places: string[]
  faqs: FAQ[]
  meta_title: string
  meta_description: string
  keywords: string[]
  canonical_url: string
  status: string
  is_featured: boolean
  sort_order: number
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

interface MythologyStory {
  title: string
  story: string
}

interface Festival {
  name: string
  date: string
  description: string
}

interface Ritual {
  name: string
  description: string
  timing: string
}

interface Temple {
  name: string
  deity: string
  timing: string
  special_features: string
}

interface GalleryImage {
  url: string
  alt: string
  caption: string
}

interface FAQ {
  question: string
  answer: string
}

interface Category {
  id: string
  name: string
  slug: string
}

export default function EditSacredPlace({ params }: { params: { id: string } }) {
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
      console.log('Fetching sacred place with ID:', params.id)

      const { data, error } = await hinduSupabase
        .from('sacred_places')
        .select('*')
        .eq('id', params.id)
        .single()

      console.log('Sacred place query result:', { data, error })

      if (error) {
        console.error('Sacred place query error:', error)
        throw error
      }

      console.log('Setting place data:', data)
      console.log('Gallery images from database:', data.gallery_images)
      // Ensure gallery_images is always an array
      const placeData = {
        ...data,
        gallery_images: data.gallery_images || []
      }
      setPlace(placeData)
    } catch (error) {
      console.error('Error fetching sacred place:', error)
      alert('Error loading sacred place')
    } finally {
      setLoading(false)
    }
  }

  const fetchCategories = async () => {
    try {
      console.log('Fetching categories with hinduSupabase...')

      const { data, error } = await hinduSupabase
        .from('sacred_place_categories')
        .select('id, name, slug')
        .eq('is_active', true)
        .order('sort_order')

      console.log('Categories query result:', { data, error })

      if (error) {
        console.error('Categories query error:', error)
        throw error
      }

      console.log('Setting categories:', data)
      setCategories(data || [])
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

  const handleSave = async () => {
    if (!place) return

    setSaving(true)
    try {
      console.log('Starting save operation...')
      console.log('Place data to save:', {
        id: place.id,
        gallery_images: place.gallery_images,
        name: place.name
      })

      const updateData = {
        ...place,
        updated_at: new Date().toISOString()
      }

      console.log('Sending update to database...', updateData)

      const { data, error } = await hinduSupabase
        .from('sacred_places')
        .update(updateData)
        .eq('id', place.id)
        .select()

      console.log('Database response:', { data, error })

      if (error) {
        console.error('Database error details:', error)
        throw error
      }

      console.log('Save successful!')
      alert('Sacred place saved successfully!')
    } catch (error: any) {
      console.error('Error saving sacred place:', error)
      console.error('Error details:', {
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint
      })
      alert('Error saving: ' + error.message)
    } finally {
      console.log('Setting saving to false...')
      setSaving(false)
    }
  }

  const updatePlace = (updates: Partial<SacredPlace>) => {
    if (!place) return
    console.log('Updating place with:', updates)
    const newPlace = { ...place, ...updates }
    console.log('New place state:', newPlace.gallery_images)
    setPlace(newPlace)
  }

  const addContentSection = () => {
    if (!place) return
    const newSection = { title: '', content: '', type: 'text' }
    updatePlace({
      content_sections: [...(place.content_sections || []), newSection]
    })
  }

  const updateContentSection = (index: number, updates: Partial<ContentSection>) => {
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

  const updateInterestingFact = (index: number, updates: Partial<InterestingFact>) => {
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

  const updateFAQ = (index: number, updates: Partial<FAQ>) => {
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

  const addGalleryImage = () => {
    if (!place) return
    const newImage = { url: '', alt: '', caption: '' }
    const newGalleryImages = [...(place.gallery_images || []), newImage]
    console.log('Adding gallery image. Current:', place.gallery_images, 'New array:', newGalleryImages)
    updatePlace({
      gallery_images: newGalleryImages
    })
  }

  const updateGalleryImage = (index: number, updates: Partial<GalleryImage>) => {
    if (!place) return
    const images = [...(place.gallery_images || [])]
    images[index] = { ...images[index], ...updates }
    updatePlace({ gallery_images: images })
  }

  const removeGalleryImage = (index: number) => {
    if (!place) return
    const images = place.gallery_images?.filter((_, i) => i !== index) || []
    updatePlace({ gallery_images: images })
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Basic Information Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3 mb-6">
            <FileText className="w-6 h-6 text-blue-600" />
            Basic Information
          </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    value={place.name}
                    onChange={(e) => updatePlace({ name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sanskrit Name
                  </label>
                  <input
                    type="text"
                    value={place.sanskrit_name || ''}
                    onChange={(e) => updatePlace({ sanskrit_name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Slug *
                  </label>
                  <input
                    type="text"
                    value={place.slug}
                    onChange={(e) => updatePlace({ slug: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={place.category_id}
                    onChange={(e) => updatePlace({ category_id: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
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
                    value={place.title || ''}
                    onChange={(e) => updatePlace({ title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subtitle
                  </label>
                  <input
                    type="text"
                    value={place.subtitle || ''}
                    onChange={(e) => updatePlace({ subtitle: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <RichTextEditor
                  value={place.description || ''}
                  onChange={(value) => updatePlace({ description: value })}
                  placeholder="Write a compelling description of this sacred place..."
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Religious Significance
                </label>
                <RichTextEditor
                  value={place.religious_significance || ''}
                  onChange={(value) => updatePlace({ religious_significance: value })}
                  placeholder="Describe the religious and spiritual significance of this sacred place. You can add headings, format text, and create lists..."
                  className="w-full"
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
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sort Order
              </label>
              <input
                type="number"
                value={place.sort_order || 0}
                onChange={(e) => updatePlace({ sort_order: parseInt(e.target.value) })}
                className="w-20 px-2 py-1 border border-gray-300 rounded text-gray-900 bg-white"
              />
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
              <FileText className="w-6 h-6 text-green-600" />
              Content Sections
            </h2>
            <button
              onClick={addContentSection}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              <Plus className="w-4 h-4" />
              Add Section
            </button>
          </div>

          {place.content_sections?.map((section, index) => (
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Content
                  </label>
                  <RichTextEditor
                    value={section.content}
                    onChange={(value) => updateContentSection(index, { content: value })}
                    placeholder="Write the content for this section. You can use headings, bold, italic, lists, and more..."
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          ))}

          {!place.content_sections?.length && (
            <div className="text-center py-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border-2 border-dashed border-blue-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">No content sections yet</h3>
              <p className="text-blue-700">Click "Add Section" to create your first content section.</p>
            </div>
          )}
        </div>

        {/* Media & Images Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3 mb-6">
            <ImageIcon className="w-6 h-6 text-purple-600" />
            Media & Images
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hero Image URL
                  </label>
                  <input
                    type="url"
                    value={place.hero_image_url || ''}
                    onChange={(e) => updatePlace({ hero_image_url: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                    placeholder="https://example.com/hero-image.jpg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hero Image Alt Text
                  </label>
                  <input
                    type="text"
                    value={place.hero_image_alt || ''}
                    onChange={(e) => updatePlace({ hero_image_alt: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Featured Image URL
                  </label>
                  <input
                    type="url"
                    value={place.featured_image_url || ''}
                    onChange={(e) => updatePlace({ featured_image_url: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                    placeholder="https://example.com/featured-image.jpg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Featured Image Alt Text
                  </label>
                  <input
                    type="text"
                    value={place.featured_image_alt || ''}
                    onChange={(e) => updatePlace({ featured_image_alt: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                  />
                </div>
              </div>

          <div className="col-span-full bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center gap-2 text-blue-800 mb-2">
              <Upload className="w-5 h-5" />
              <h3 className="font-medium">Image Upload Feature</h3>
            </div>
            <p className="text-blue-700 text-sm">
              Direct image upload to Supabase storage will be implemented next.
              For now, please use image URLs. The system will automatically handle
              image optimization and CDN delivery.
            </p>
          </div>
        </div>

        {/* Gallery Images Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
              <Camera className="w-6 h-6 text-green-600" />
              Gallery Images
            </h2>
            <button
              onClick={addGalleryImage}
              className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-2.5 rounded-xl hover:from-green-700 hover:to-teal-700 transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              <Plus className="w-4 h-4" />
              Add Image
            </button>
          </div>

          {place.gallery_images?.map((image, index) => (
            <div key={index} className="bg-gradient-to-br from-green-50 to-teal-50 border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 mb-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-green-900">Gallery Image</h3>
                </div>
                <button
                  onClick={() => removeGalleryImage(index)}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors"
                  title="Remove image"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image URL
                  </label>
                  <input
                    type="url"
                    value={image.url}
                    onChange={(e) => updateGalleryImage(index, { url: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                    placeholder="/images/badrinath-gallery-1.jpg"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Alt Text
                    </label>
                    <input
                      type="text"
                      value={image.alt}
                      onChange={(e) => updateGalleryImage(index, { alt: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                      placeholder="Describe the image for accessibility"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Caption
                    </label>
                    <input
                      type="text"
                      value={image.caption}
                      onChange={(e) => updateGalleryImage(index, { caption: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                      placeholder="Caption shown below the image"
                    />
                  </div>
                </div>

                {/* Image Preview */}
                {image.url && (
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-600 mb-2">Preview:</p>
                    <div className="relative w-32 h-24 bg-gray-100 rounded-lg overflow-hidden">
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = '<div class="flex items-center justify-center h-full text-red-500 text-xs">Image not found</div>';
                          }
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {!place.gallery_images?.length && (
            <div className="text-center py-12 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl border-2 border-dashed border-green-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-green-900 mb-2">No gallery images yet</h3>
              <p className="text-green-700">Click "Add Image" to create a beautiful photo gallery.</p>
            </div>
          )}
        </div>

        {/* Interesting Facts Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
              <Star className="w-6 h-6 text-yellow-600" />
              Interesting Facts
            </h2>
            <button
              onClick={addInterestingFact}
              className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-6 py-2.5 rounded-xl hover:from-yellow-700 hover:to-orange-700 transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              <Plus className="w-4 h-4" />
              Add Fact
            </button>
          </div>

          {place.interesting_facts?.map((fact, index) => (
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                  />
                </div>
              </div>
            </div>
          ))}

          {!place.interesting_facts?.length && (
            <div className="text-center py-12 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border-2 border-dashed border-yellow-200">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">No interesting facts yet</h3>
              <p className="text-yellow-700">Click "Add Fact" to share fascinating insights.</p>
            </div>
          )}
        </div>

        {/* FAQs Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
              <HelpCircle className="w-6 h-6 text-orange-600" />
              Frequently Asked Questions
            </h2>
            <button
              onClick={addFAQ}
              className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2.5 rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg"
            >
              <Plus className="w-4 h-4" />
              Add FAQ
            </button>
          </div>

          {place.faqs?.map((faq, index) => (
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                  />
                </div>
              </div>
            </div>
          ))}

          {!place.faqs?.length && (
            <div className="text-center py-12 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border-2 border-dashed border-orange-200">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-orange-900 mb-2">No FAQs yet</h3>
              <p className="text-orange-700">Click "Add FAQ" to answer common questions.</p>
            </div>
          )}
        </div>

        {/* SEO & Meta Information Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3 mb-6">
            <Globe className="w-6 h-6 text-indigo-600" />
            SEO & Meta Information
          </h2>
          <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meta Title
                  </label>
                  <input
                    type="text"
                    value={place.meta_title || ''}
                    onChange={(e) => updatePlace({ meta_title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                    placeholder="SEO optimized title (recommended: 50-60 characters)"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Length: {(place.meta_title || '').length} characters
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meta Description
                  </label>
                  <textarea
                    value={place.meta_description || ''}
                    onChange={(e) => updatePlace({ meta_description: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                    placeholder="SEO meta description (recommended: 150-160 characters)"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Length: {(place.meta_description || '').length} characters
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Keywords (comma-separated)
                  </label>
                  <input
                    type="text"
                    value={(place.keywords || []).join(', ')}
                    onChange={(e) => updatePlace({
                      keywords: e.target.value.split(',').map(k => k.trim()).filter(k => k)
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                    placeholder="sacred place, temple, pilgrimage, char dham"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Canonical URL
                  </label>
                  <input
                    type="url"
                    value={place.canonical_url || ''}
                    onChange={(e) => updatePlace({ canonical_url: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white"
                    placeholder="/sacred-places/char-dham/badrinath"
                  />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}