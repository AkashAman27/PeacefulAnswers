'use client'

import { useState } from 'react'
import { 
  X, 
  Upload, 
  Download, 
  FileText,
  CheckCircle,
  AlertCircle,
  XCircle
} from 'lucide-react'

interface BulkUploadResult {
  successCount: number
  failureCount: number
  totalItems: number
  createdItems?: string[]
  skippedItems?: string[]
  errors?: Array<{ item: string, error: string }>
}

interface BulkUploadModalProps {
  isOpen: boolean
  onClose: () => void
  contentType: 'deities' | 'practices' | 'festivals' | 'scriptures'
  onUploadComplete?: () => void
}

const contentConfig = {
  deities: {
    title: 'Deities',
    apiEndpoint: '/api/deities/bulk-upload',
    sampleEndpoint: '/api/deities/bulk-upload',
    arrayKey: 'deities',
    fields: [
      'name (required) - Deity name',
      'sanskrit_name (optional) - Sanskrit name',
      'slug (required) - URL slug',
      'title (required) - Deity title/role',
      'description (optional) - Brief description',
      'story (optional) - Detailed story',
      'sacred_iconography (optional) - Array of iconography objects',
      'sacred_stories (optional) - Array of story objects',
      'divine_symbolism (optional) - Array of symbolism objects',
      'festivals (optional) - Array of festival objects',
      'sacred_places (optional) - Array of temple/place objects',
      'mantras (optional) - Array of mantra objects',
      'essential_facts (optional) - Array of fact objects',
      'status (optional) - published/draft/archived',
      'is_featured (optional) - true/false'
    ]
  },
  practices: {
    title: 'Practices',
    apiEndpoint: '/api/practices/bulk-upload',
    sampleEndpoint: '/api/practices/bulk-upload',
    arrayKey: 'practices',
    fields: [
      'name (required) - Practice name',
      'sanskrit_name (optional) - Sanskrit name',
      'slug (required) - URL slug',
      'title (required) - Practice title',
      'description (optional) - Detailed description',
      'purpose (optional) - Purpose and benefits',
      'duration (optional) - Practice duration',
      'difficulty_level (optional) - Beginner/Intermediate/Advanced',
      'best_time (optional) - Best time to practice',
      'steps (optional) - Array of step objects',
      'benefits (optional) - Array of benefits',
      'materials (optional) - Array of material objects',
      'variations (optional) - Array of variation objects',
      'precautions (optional) - Array of precautions',
      'status (optional) - published/draft/archived',
      'is_featured (optional) - true/false'
    ]
  },
  festivals: {
    title: 'Festivals',
    apiEndpoint: '/api/festivals/bulk-upload',
    sampleEndpoint: '/api/festivals/bulk-upload',
    arrayKey: 'festivals',
    fields: [
      'name (required) - Festival name',
      'sanskrit_name (optional) - Sanskrit name',
      'slug (required) - URL slug',
      'title (required) - Festival title',
      'description (optional) - Festival description',
      'historical_significance (optional) - Historical background',
      'date_type (optional) - When celebrated',
      'duration (optional) - Festival duration',
      'primary_deity (optional) - Main deity',
      'rituals (optional) - Array of ritual objects',
      'regional_variations (optional) - Array of regional objects',
      'stories (optional) - Array of story objects',
      'celebrations (optional) - Array of celebration objects',
      'status (optional) - published/draft/archived',
      'is_featured (optional) - true/false'
    ]
  },
  scriptures: {
    title: 'Scripture Verses',
    apiEndpoint: '/api/scriptures/bulk-upload',
    sampleEndpoint: '/api/scriptures/bulk-upload',
    arrayKey: 'verses',
    fields: [
      'chapter_number (required) - Chapter number',
      'verse_number (required) - Verse number',
      'translation (required) - English translation',
      'sanskrit_text (optional) - Original Sanskrit',
      'transliteration (optional) - Romanized Sanskrit',
      'word_meanings (optional) - Array of word definition objects',
      'commentary (optional) - Detailed commentary',
      'key_concepts (optional) - Array of concepts',
      'tags (optional) - Array of tags',
      'status (optional) - published/draft/archived',
      'is_featured (optional) - true/false'
    ]
  }
}

export default function BulkUploadModal({ 
  isOpen, 
  onClose, 
  contentType, 
  onUploadComplete 
}: BulkUploadModalProps) {
  const [uploadData, setUploadData] = useState('')
  const [uploading, setUploading] = useState(false)
  const [result, setResult] = useState<BulkUploadResult | null>(null)

  const config = contentConfig[contentType]

  const handleUpload = async () => {
    if (!uploadData.trim()) {
      alert('Please enter JSON data for bulk upload')
      return
    }

    try {
      setUploading(true)
      setResult(null)

      // Parse JSON data
      const jsonData = JSON.parse(uploadData)
      
      // Validate structure
      if (!jsonData[config.arrayKey] || !Array.isArray(jsonData[config.arrayKey])) {
        throw new Error(`JSON must contain a "${config.arrayKey}" array`)
      }

      // Send to bulk upload API
      const response = await fetch(config.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      })

      const uploadResult = await response.json()

      if (response.ok) {
        setResult(uploadResult)
        
        if (uploadResult.successCount > 0) {
          alert(`Successfully uploaded ${uploadResult.successCount} ${config.title.toLowerCase()}!`)
          onUploadComplete?.()
        }
      } else {
        alert(`Upload failed: ${uploadResult.error}`)
      }
    } catch (error) {
      console.error('Bulk upload error:', error)
      alert(error instanceof Error ? error.message : 'Failed to parse JSON data')
    } finally {
      setUploading(false)
    }
  }

  const generateSample = async () => {
    try {
      const response = await fetch(config.sampleEndpoint)
      const sampleData = await response.json()
      setUploadData(JSON.stringify(sampleData, null, 2))
    } catch (error) {
      console.error('Error generating sample:', error)
      alert('Failed to generate sample data')
    }
  }

  const resetModal = () => {
    setUploadData('')
    setResult(null)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Bulk Upload {config.title}</h2>
            <p className="text-sm text-gray-600 mt-1">
              Upload multiple {config.title.toLowerCase()} using JSON format
            </p>
          </div>
          <button
            onClick={resetModal}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          {/* Instructions */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <FileText className="h-5 w-5 text-blue-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">JSON Format Instructions</h3>
                <div className="mt-2 text-sm text-blue-700">
                  <p>Your JSON should contain a "{config.arrayKey}" array with objects. Each object can have:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    {config.fields.map((field, index) => (
                      <li key={index}><strong>{field.split(' - ')[0]}</strong> - {field.split(' - ')[1]}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 mb-4">
            <button
              onClick={generateSample}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm"
            >
              <Download className="h-4 w-4" />
              Generate Sample JSON
            </button>
          </div>

          {/* JSON Input */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              JSON Data
            </label>
            <textarea
              value={uploadData}
              onChange={(e) => setUploadData(e.target.value)}
              className="w-full h-80 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm text-gray-900"
              placeholder="Paste your JSON data here..."
            />
          </div>

          {/* Upload Results */}
          {result && (
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Upload Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <div>
                      <div className="text-lg font-bold text-green-600">{result.successCount}</div>
                      <div className="text-sm text-green-800">Successful</div>
                    </div>
                  </div>
                </div>
                <div className="bg-red-50 p-3 rounded-lg">
                  <div className="flex items-center">
                    <XCircle className="h-5 w-5 text-red-500 mr-2" />
                    <div>
                      <div className="text-lg font-bold text-red-600">{result.failureCount}</div>
                      <div className="text-sm text-red-800">Failed</div>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <div className="flex items-center">
                    <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />
                    <div>
                      <div className="text-lg font-bold text-yellow-600">{result.skippedItems?.length || 0}</div>
                      <div className="text-sm text-yellow-800">Skipped</div>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-blue-500 mr-2" />
                    <div>
                      <div className="text-lg font-bold text-blue-600">{result.totalItems}</div>
                      <div className="text-sm text-blue-800">Total</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Items */}
              {result.createdItems && result.createdItems.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium text-green-800 mb-2">Successfully Created:</h4>
                  <div className="bg-green-50 p-3 rounded-lg max-h-32 overflow-y-auto">
                    {result.createdItems.map((item: string, index: number) => (
                      <div key={index} className="text-sm text-green-700">
                        • {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Error Items */}
              {result.errors && result.errors.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-medium text-red-800 mb-2">Errors:</h4>
                  <div className="bg-red-50 p-3 rounded-lg max-h-32 overflow-y-auto space-y-1">
                    {result.errors.map((error: any, index: number) => (
                      <div key={index} className="text-sm text-red-700">
                        <strong>{error.item}:</strong> {error.error}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={resetModal}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleUpload}
              disabled={!uploadData.trim() || uploading}
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {uploading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="h-4 w-4" />
                  Upload {config.title}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}