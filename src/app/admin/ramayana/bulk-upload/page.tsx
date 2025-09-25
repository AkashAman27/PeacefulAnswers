'use client'

import { useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  Upload,
  Download,
  FileText,
  CheckCircle,
  XCircle,
  AlertCircle,
  Book,
  Eye,
  Info
} from 'lucide-react'

interface ValidationError {
  row: number
  field: string
  message: string
}

interface UploadResult {
  success: boolean
  message: string
  created?: number
  updated?: number
  errors?: ValidationError[]
}

export default function RamayanaBulkUpload() {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)
  const [dragActive, setDragActive] = useState(false)
  const [uploadResult, setUploadResult] = useState<UploadResult | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      if (file.type === 'application/json' || file.name.endsWith('.json')) {
        setSelectedFile(file)
      } else {
        alert('Please select a valid JSON file')
      }
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      if (file.type === 'application/json' || file.name.endsWith('.json')) {
        setSelectedFile(file)
      } else {
        alert('Please select a valid JSON file')
      }
    }
  }

  const downloadTemplate = () => {
    const template = {
      "pages": [
        {
          "title": "Example Episode Title",
          "sanskrit_title": "Sanskrit Title (Optional)",
          "kand": "bala-kanda",
          "episode_number": 1,
          "slug": "example-episode",
          "subtitle": "Episode subtitle (Optional)",
          "description": "Brief description of the episode",
          "hero_image_url": "https://example.com/hero-image.jpg",
          "hero_image_alt": "Hero image description",
          "content_sections": [
            {
              "title": "Section Title",
              "content": "<p>Rich HTML content here. You can include paragraphs, lists, headings, etc.</p>",
              "image_url": "https://example.com/section-image.jpg",
              "image_alt": "Section image description"
            }
          ],
          "key_characters": ["Rama", "Dasharatha", "Kaushalya"],
          "key_locations": ["Ayodhya", "Royal Palace"],
          "spiritual_teachings": "<p>HTML content describing spiritual lessons</p>",
          "modern_relevance": "<p>HTML content explaining modern applications</p>",
          "meta_title": "SEO title for search engines",
          "meta_description": "SEO description for search engines",
          "keywords": ["keyword1", "keyword2", "keyword3"],
          "status": "published",
          "is_featured": false,
          "sort_order": 0
        }
      ]
    }

    const blob = new Blob([JSON.stringify(template, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'ramayana-bulk-template.json'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file first')
      return
    }

    setUploading(true)
    setUploadResult(null)

    try {
      const fileContent = await selectedFile.text()
      let jsonData

      try {
        jsonData = JSON.parse(fileContent)
      } catch (error) {
        throw new Error('Invalid JSON format')
      }

      // Validate structure
      if (!jsonData.pages || !Array.isArray(jsonData.pages)) {
        throw new Error('JSON must contain a "pages" array')
      }

      const response = await fetch('/api/admin/ramayana/bulk-upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Upload failed')
      }

      setUploadResult(result)
    } catch (error: any) {
      console.error('Upload error:', error)
      setUploadResult({
        success: false,
        message: error.message || 'Upload failed',
        errors: []
      })
    } finally {
      setUploading(false)
    }
  }

  const resetUpload = () => {
    setSelectedFile(null)
    setUploadResult(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Link
                href="/admin/ramayana"
                className="text-gray-600 hover:text-gray-900 flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Ramayana Pages
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <div>
                <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                  <Upload className="w-8 h-8 text-orange-600" />
                  Bulk Upload Ramayana Pages
                </h1>
                <p className="text-gray-600 mt-2">
                  Import multiple episodes at once using JSON format
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Info className="w-5 h-5 text-blue-600 mr-2" />
            <h2 className="text-lg font-semibold text-blue-900">How to Use Bulk Upload</h2>
          </div>
          <ol className="list-decimal list-inside space-y-2 text-blue-800">
            <li>Download the JSON template below to see the required format</li>
            <li>Edit the template with your episode data</li>
            <li>Upload the completed JSON file</li>
            <li>Review any errors and fix them if needed</li>
            <li>Re-upload if necessary</li>
          </ol>
        </div>

        {/* Template Download */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Step 1: Download Template</h2>
          <p className="text-gray-600 mb-4">
            Download the JSON template to see the exact format required for your episode data.
          </p>
          <button
            onClick={downloadTemplate}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download JSON Template
          </button>
        </div>

        {/* File Upload */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Step 2: Upload Your JSON File</h2>

          {!selectedFile && (
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragActive
                  ? 'border-orange-500 bg-orange-50'
                  : 'border-gray-300 hover:border-orange-400 hover:bg-orange-50'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-lg text-gray-600 mb-2">
                Drop your JSON file here, or{' '}
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="text-orange-600 hover:text-orange-700 underline"
                >
                  browse to upload
                </button>
              </p>
              <p className="text-sm text-gray-500">
                Only JSON files are accepted
              </p>
              <input
                ref={fileInputRef}
                type="file"
                accept=".json,application/json"
                onChange={handleFileInput}
                className="hidden"
              />
            </div>
          )}

          {selectedFile && (
            <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-gray-600" />
                  <div>
                    <p className="font-medium text-gray-900">{selectedFile.name}</p>
                    <p className="text-sm text-gray-500">
                      {(selectedFile.size / 1024).toFixed(1)} KB
                    </p>
                  </div>
                </div>
                <button
                  onClick={resetUpload}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <XCircle className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {selectedFile && !uploadResult && (
            <div className="mt-4 flex gap-3">
              <button
                onClick={handleUpload}
                disabled={uploading}
                className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 disabled:opacity-50 transition-colors flex items-center gap-2"
              >
                {uploading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <Upload className="w-4 h-4" />
                    Upload & Process
                  </>
                )}
              </button>
              <button
                onClick={resetUpload}
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          )}
        </div>

        {/* Upload Results */}
        {uploadResult && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Upload Results</h2>

            {uploadResult.success ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <h3 className="font-semibold text-green-900">Upload Successful!</h3>
                </div>
                <p className="text-green-800 mb-4">{uploadResult.message}</p>
                {uploadResult.created && (
                  <p className="text-green-700">✅ Created: {uploadResult.created} episodes</p>
                )}
                {uploadResult.updated && (
                  <p className="text-green-700">📝 Updated: {uploadResult.updated} episodes</p>
                )}
                <div className="mt-4 flex gap-3">
                  <Link
                    href="/admin/ramayana"
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                  >
                    <Eye className="w-4 h-4" />
                    View Episodes
                  </Link>
                  <button
                    onClick={resetUpload}
                    className="border border-green-600 text-green-600 px-4 py-2 rounded-lg hover:bg-green-50 transition-colors"
                  >
                    Upload More
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <XCircle className="w-5 h-5 text-red-600 mr-2" />
                  <h3 className="font-semibold text-red-900">Upload Failed</h3>
                </div>
                <p className="text-red-800 mb-4">{uploadResult.message}</p>

                {uploadResult.errors && uploadResult.errors.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-medium text-red-900 mb-2">Validation Errors:</h4>
                    <div className="max-h-64 overflow-y-auto">
                      {uploadResult.errors.map((error, index) => (
                        <div key={index} className="flex items-center text-sm text-red-700 mb-1">
                          <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                          <span>
                            Row {error.row}, field "{error.field}": {error.message}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-4 flex gap-3">
                  <button
                    onClick={resetUpload}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    Try Again
                  </button>
                  <button
                    onClick={downloadTemplate}
                    className="border border-red-600 text-red-600 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Re-download Template
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Format Specification */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">JSON Format Specification</h2>

          <div className="space-y-4 text-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Required Fields:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• <code className="bg-gray-100 px-1 rounded">title</code> - Episode title</li>
                  <li>• <code className="bg-gray-100 px-1 rounded">kand</code> - Must be one of: bala-kanda, ayodhya-kanda, etc.</li>
                  <li>• <code className="bg-gray-100 px-1 rounded">episode_number</code> - Numeric order within kand</li>
                  <li>• <code className="bg-gray-100 px-1 rounded">slug</code> - URL-friendly identifier</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Optional Fields:</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• <code className="bg-gray-100 px-1 rounded">sanskrit_title</code> - Sanskrit name</li>
                  <li>• <code className="bg-gray-100 px-1 rounded">subtitle</code> - Episode subtitle</li>
                  <li>• <code className="bg-gray-100 px-1 rounded">description</code> - Brief description</li>
                  <li>• <code className="bg-gray-100 px-1 rounded">hero_image_url</code> - Main image</li>
                  <li>• <code className="bg-gray-100 px-1 rounded">content_sections</code> - Array of content blocks</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Valid Kand Values:</h3>
              <div className="flex flex-wrap gap-2">
                {['bala-kanda', 'ayodhya-kanda', 'aranya-kanda', 'kishkindha-kanda', 'sundara-kanda', 'yuddha-kanda', 'uttara-kanda'].map(kand => (
                  <span key={kand} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {kand}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Valid Status Values:</h3>
              <div className="flex gap-2">
                {['draft', 'published', 'archived'].map(status => (
                  <span key={status} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                    {status}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}