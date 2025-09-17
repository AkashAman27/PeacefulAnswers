'use client'

import { useState } from 'react'
import { hinduSupabase } from '@/lib/supabase'
import { Upload, Download, FileText, AlertCircle, CheckCircle, Eye, Loader } from 'lucide-react'

interface BulkUploadResult {
  success: boolean
  message: string
  imported: number
  errors: string[]
}

export default function BulkUpload() {
  const [selectedContentType, setSelectedContentType] = useState('deities')
  const [jsonData, setJsonData] = useState('')
  const [uploading, setUploading] = useState(false)
  const [results, setResults] = useState<BulkUploadResult | null>(null)
  const [previewData, setPreviewData] = useState<any[]>([])
  const [showPreview, setShowPreview] = useState(false)

  const contentTypes = {
    deities: {
      name: 'Deities',
      table: 'deities',
      sample: {
        name: 'Ganesha',
        sanskrit_name: 'गणेश',
        slug: 'ganesha',
        category_id: 'category-uuid',
        title: 'Remover of Obstacles',
        subtitle: 'The beloved elephant-headed deity',
        description: 'Lord Ganesha is one of the most worshipped deities...',
        featured_image_url: 'https://example.com/ganesha.jpg',
        divine_attributes: [
          { icon: 'Crown', title: 'Wisdom', description: 'Divine wisdom and intelligence' }
        ],
        mantras: [
          { sanskrit: 'गं गणपतये नमः', transliteration: 'Gam Ganapataye Namaha', meaning: 'Salutations to Lord Ganesha' }
        ],
        status: 'published',
        is_featured: true
      }
    },
    festivals: {
      name: 'Festivals',
      table: 'festivals',
      sample: {
        name: 'Diwali',
        sanskrit_name: 'दीपावली',
        slug: 'diwali',
        category_id: 'category-uuid',
        title: 'Festival of Lights',
        subtitle: 'Celebrating the victory of light over darkness',
        description: 'Diwali is one of the most important Hindu festivals...',
        date_type: 'October/November',
        duration: '5 days',
        primary_deity: 'Goddess Lakshmi',
        rituals: [
          { name: 'Lakshmi Puja', description: 'Worship of Goddess Lakshmi', timing: 'Evening' }
        ],
        status: 'published',
        is_featured: true
      }
    },
    practices: {
      name: 'Practices',
      table: 'practices',
      sample: {
        name: 'Surya Namaskara',
        sanskrit_name: 'सूर्य नमस्कार',
        slug: 'surya-namaskara',
        category_id: 'category-uuid',
        title: 'Sun Salutation',
        subtitle: 'Ancient yogic practice to honor the Sun',
        description: 'Surya Namaskara is a sequence of yoga postures...',
        duration: '15-30 minutes',
        difficulty_level: 'Beginner',
        practice_type: 'Yoga',
        steps: [
          { title: 'Pranamasana', description: 'Prayer pose', duration: '30 seconds' }
        ],
        benefits: ['Improves flexibility', 'Enhances circulation'],
        status: 'published',
        is_featured: false
      }
    },
    scriptures: {
      name: 'Scriptures',
      table: 'scriptures',
      sample: {
        title: 'Bhagavad Gita',
        sanskrit_name: 'भगवद्गीता',
        slug: 'bhagavad-gita',
        scripture_type: 'Epic',
        description: 'The Bhagavad Gita is a sacred Hindu text...',
        total_chapters: 18,
        total_verses: 700,
        author: 'Vyasa',
        period: 'Ancient',
        language: 'Sanskrit',
        status: 'published',
        is_featured: true
      }
    }
  }

  const validateJsonData = (data: any[], contentType: string): string[] => {
    const errors: string[] = []
    
    if (!Array.isArray(data)) {
      errors.push('Data must be an array of objects')
      return errors
    }

    data.forEach((item, index) => {
      if (!item.name) {
        errors.push(`Item ${index + 1}: Missing required field 'name'`)
      }
      if (!item.slug) {
        errors.push(`Item ${index + 1}: Missing required field 'slug'`)
      }
      if (!item.title) {
        errors.push(`Item ${index + 1}: Missing required field 'title'`)
      }
      if (!item.status) {
        item.status = 'draft' // Default to draft
      }
      
      // Content type specific validations
      if (contentType === 'festivals' && !item.date_type) {
        errors.push(`Item ${index + 1}: Missing 'date_type' field for festival`)
      }
      if (contentType === 'practices' && !item.practice_type) {
        errors.push(`Item ${index + 1}: Missing 'practice_type' field for practice`)
      }
    })

    return errors
  }

  const previewJson = () => {
    try {
      const parsed = JSON.parse(jsonData)
      const errors = validateJsonData(parsed, selectedContentType)
      
      if (errors.length > 0) {
        setResults({
          success: false,
          message: 'Validation errors found',
          imported: 0,
          errors
        })
        return
      }

      setPreviewData(parsed)
      setShowPreview(true)
      setResults(null)
    } catch (error) {
      setResults({
        success: false,
        message: 'Invalid JSON format',
        imported: 0,
        errors: ['Please check your JSON syntax']
      })
    }
  }

  const performBulkUpload = async () => {
    if (!jsonData.trim()) {
      setResults({
        success: false,
        message: 'Please enter JSON data',
        imported: 0,
        errors: ['No data provided']
      })
      return
    }

    setUploading(true)
    setResults(null)

    try {
      const parsed = JSON.parse(jsonData)
      const errors = validateJsonData(parsed, selectedContentType)
      
      if (errors.length > 0) {
        setResults({
          success: false,
          message: 'Validation errors found',
          imported: 0,
          errors
        })
        setUploading(false)
        return
      }

      // Add timestamps and generate UUIDs if needed
      const dataToInsert = parsed.map((item: any) => ({
        ...item,
        id: item.id || crypto.randomUUID(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        published_at: item.status === 'published' ? new Date().toISOString() : null
      }))

      const { data, error } = await hinduSupabase
        .from(contentTypes[selectedContentType as keyof typeof contentTypes].table)
        .insert(dataToInsert)
        .select()

      if (error) {
        setResults({
          success: false,
          message: `Database error: ${error.message}`,
          imported: 0,
          errors: [error.message]
        })
      } else {
        setResults({
          success: true,
          message: `Successfully imported ${dataToInsert.length} items`,
          imported: dataToInsert.length,
          errors: []
        })
        setJsonData('')
        setPreviewData([])
        setShowPreview(false)
      }
    } catch (error: any) {
      setResults({
        success: false,
        message: 'Import failed',
        imported: 0,
        errors: [error.message || 'Unknown error occurred']
      })
    } finally {
      setUploading(false)
    }
  }

  const downloadSample = () => {
    const sample = [contentTypes[selectedContentType as keyof typeof contentTypes].sample]
    const dataStr = JSON.stringify(sample, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${selectedContentType}-sample.json`
    link.click()
    URL.revokeObjectURL(url)
  }

  const exportExisting = async () => {
    try {
      const { data, error } = await hinduSupabase
        .from(contentTypes[selectedContentType as keyof typeof contentTypes].table)
        .select('*')
        .limit(10) // Limit to first 10 for sample

      if (error) throw error

      const dataStr = JSON.stringify(data, null, 2)
      const dataBlob = new Blob([dataStr], { type: 'application/json' })
      const url = URL.createObjectURL(dataBlob)
      const link = document.createElement('a')
      link.href = url
      link.download = `${selectedContentType}-export.json`
      link.click()
      URL.revokeObjectURL(url)
    } catch (error: any) {
      alert(`Export failed: ${error.message}`)
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Bulk Content Upload</h1>
        <p className="text-gray-600 mt-2">Import content from JSON files or AI-generated data</p>
      </div>

      {/* Content Type Selection */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Content Type</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(contentTypes).map(([key, type]) => (
            <button
              key={key}
              onClick={() => {
                setSelectedContentType(key)
                setJsonData('')
                setResults(null)
                setPreviewData([])
                setShowPreview(false)
              }}
              className={`p-4 rounded-lg border-2 transition-colors ${
                selectedContentType === key
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-center">
                <FileText className={`w-8 h-8 mx-auto mb-2 ${
                  selectedContentType === key ? 'text-blue-600' : 'text-gray-400'
                }`} />
                <div className="font-medium">{type.name}</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Sample and Export */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Templates & Export</h2>
        <div className="flex gap-4">
          <button
            onClick={downloadSample}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download Sample JSON
          </button>
          <button
            onClick={exportExisting}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Export Existing Data
          </button>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Download a sample JSON file to see the required format, or export existing data as a template.
        </p>
      </div>

      {/* JSON Input */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          JSON Data for {contentTypes[selectedContentType as keyof typeof contentTypes].name}
        </h2>
        
        <div className="mb-3 p-3 bg-gray-100 rounded-lg">
          <p className="text-sm font-medium text-gray-900 mb-2">Paste your JSON data below. Example format:</p>
          <pre className="text-xs text-gray-800 bg-white p-2 rounded border overflow-x-auto">
{JSON.stringify([contentTypes[selectedContentType as keyof typeof contentTypes].sample], null, 2)}
          </pre>
        </div>
        
        <textarea
          value={jsonData}
          onChange={(e) => setJsonData(e.target.value)}
          className="w-full h-96 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
          placeholder="Paste your JSON data here..."
        />
        
        <div className="flex gap-4 mt-4">
          <button
            onClick={previewJson}
            disabled={!jsonData.trim()}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2 disabled:opacity-50"
          >
            <Eye className="w-4 h-4" />
            Preview Data
          </button>
          <button
            onClick={performBulkUpload}
            disabled={uploading || !jsonData.trim()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 disabled:opacity-50"
          >
            {uploading ? (
              <>
                <Loader className="w-4 h-4 animate-spin" />
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

      {/* Preview */}
      {showPreview && previewData.length > 0 && (
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Data Preview</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Slug</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {previewData.slice(0, 5).map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.slug}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        item.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {previewData.length > 5 && (
              <div className="text-sm text-gray-500 text-center py-2">
                ... and {previewData.length - 5} more items
              </div>
            )}
          </div>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-700">
              <strong>Ready to import:</strong> {previewData.length} items validated successfully.
              Click "Upload Data" to proceed with the import.
            </p>
          </div>
        </div>
      )}

      {/* Results */}
      {results && (
        <div className={`rounded-lg p-6 mb-6 ${
          results.success ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
        }`}>
          <div className="flex items-start gap-3">
            {results.success ? (
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
            )}
            <div className="flex-1">
              <h3 className={`font-semibold ${results.success ? 'text-green-800' : 'text-red-800'}`}>
                {results.message}
              </h3>
              {results.success && results.imported > 0 && (
                <p className="text-green-700 mt-1">
                  Successfully imported {results.imported} items to the {selectedContentType} collection.
                </p>
              )}
              {results.errors.length > 0 && (
                <div className="mt-3">
                  <h4 className="font-medium text-red-800 mb-2">Errors:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {results.errors.map((error, index) => (
                      <li key={index} className="text-red-700 text-sm">{error}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Instructions</h2>
        <div className="prose prose-sm max-w-none text-gray-700">
          <ol className="list-decimal list-inside space-y-2">
            <li>Select the content type you want to import (Deities, Festivals, Practices, or Scriptures)</li>
            <li>Download the sample JSON file to see the required data structure</li>
            <li>Prepare your data in JSON format following the sample structure</li>
            <li>Paste your JSON data in the text area above</li>
            <li>Click "Preview Data" to validate your data before importing</li>
            <li>Click "Upload Data" to import the content to your database</li>
          </ol>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">AI Content Integration</h3>
            <p className="text-blue-700">
              This bulk upload system is designed to work seamlessly with AI-generated content. 
              You can use AI tools to generate content in the required JSON format and then import it directly.
              All imported content will be properly validated and formatted according to your site's schema.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}