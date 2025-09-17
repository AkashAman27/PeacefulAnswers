'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload, FileText, CheckCircle, XCircle, AlertTriangle, Download, Eye } from 'lucide-react'
import { BulkUploadResult, ValidationResult } from '@/types/bulkUpload'
import { JSONValidator } from '@/utils/jsonValidator'

interface UploadState {
  file: File | null;
  jsonData: Record<string, unknown>[] | null;
  validationResults: ValidationResult[] | null;
  uploadResult: BulkUploadResult | null;
  isProcessing: boolean;
}

export default function BulkUploadPage() {
  const [uploadState, setUploadState] = useState<UploadState>({
    file: null,
    jsonData: null,
    validationResults: null,
    uploadResult: null,
    isProcessing: false
  })

  const [activeTab, setActiveTab] = useState<'upload' | 'schema' | 'examples'>('upload')

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (file && file.type === 'application/json') {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const jsonData = JSON.parse(e.target?.result as string)
          const validationResults = JSONValidator.validateBulkUpload(jsonData)
          const duplicateSlugs = JSONValidator.checkForDuplicateSlugs(jsonData)
          
          setUploadState({
            file,
            jsonData,
            validationResults,
            uploadResult: null,
            isProcessing: false
          })
          
          if (duplicateSlugs.length > 0) {
            alert(`Warning: Duplicate slugs found: ${duplicateSlugs.join(', ')}`)
          }
        } catch {
          alert('Invalid JSON file. Please check your file format.')
        }
      }
      reader.readAsText(file)
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/json': ['.json']
    },
    multiple: false
  })

  const handleProcessUpload = async () => {
    if (!uploadState.jsonData || !uploadState.validationResults) return

    setUploadState(prev => ({ ...prev, isProcessing: true }))

    try {
      const validItems = uploadState.jsonData!.filter((_, index) => 
        uploadState.validationResults![index].isValid
      )

      const response = await fetch('/api/admin/bulk-upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: validItems
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Upload failed')
      }

      const result: BulkUploadResult = await response.json()
      
      setUploadState(prev => ({ 
        ...prev, 
        uploadResult: result, 
        isProcessing: false 
      }))
    } catch (error) {
      alert(`Upload failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
      setUploadState(prev => ({ ...prev, isProcessing: false }))
    }
  }

  const downloadSampleJSON = () => {
    const sampleData = [
      {
        slug: "lord-ganesha",
        title: "Lord Ganesha - The Remover of Obstacles",
        contentType: "deity",
        status: "published",
        shortDescription: "Lord Ganesha, the elephant-headed deity, is revered as the remover of obstacles and the patron of arts and sciences.",
        description: "Lord Ganesha, also known as Ganapati, is one of the most beloved deities in Hinduism. With his distinctive elephant head and human body, he represents wisdom, prosperity, and good fortune.",
        longContent: "Extended detailed content about Lord Ganesha's stories, significance, and worship practices...",
        featuredImage: {
          url: "https://example.com/ganesha-image.jpg",
          alt: "Beautiful image of Lord Ganesha",
          caption: "Lord Ganesha in all his divine glory"
        },
        seo: {
          metaTitle: "Lord Ganesha - Hindu Deity of Wisdom and Prosperity",
          metaDescription: "Learn about Lord Ganesha, the elephant-headed Hindu deity known as the remover of obstacles and patron of arts and sciences.",
          keywords: ["Ganesha", "Hindu deity", "elephant god", "Ganapati", "remover of obstacles"]
        },
        tags: ["deity", "hindu", "ganesha", "wisdom", "prosperity"],
        categories: ["deities", "hinduism", "spiritual"],
        deityInfo: {
          names: ["Ganesha", "Ganapati", "Vinayaka", "Pillaiyar"],
          consort: "None",
          parents: ["Shiva", "Parvati"],
          children: ["Kshema", "Labha"],
          mantras: ["Om Gam Ganapataye Namaha"],
          festivals: ["Ganesh Chaturthi"],
          regions: ["India", "Nepal", "Sri Lanka"],
          personalityTraits: {
            attributes: ["wisdom", "intelligence", "problem-solving"],
            qualities: ["kind", "benevolent", "protective"],
            symbols: ["elephant head", "modaka", "axe", "lotus"],
            colors: ["red", "yellow", "orange"],
            animals: ["mouse"],
            vehicles: ["Mushika (mouse)"]
          },
          geographicalInfo: {
            region: "Pan-Indian",
            temples: ["Siddhivinayak Temple", "Ashtavinayak"],
            pilgrimage: ["Maharashtra temples"],
            significance: "Worshipped before starting any new venture"
          }
        },
        language: "en",
        readingTime: 5
      }
    ]
    
    const dataStr = JSON.stringify(sampleData, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'sample-bulk-upload.json'
    link.click()
    URL.revokeObjectURL(url)
  }

  const getValidationSummary = () => {
    if (!uploadState.validationResults) return null
    
    const totalItems = uploadState.validationResults.length
    const validItems = uploadState.validationResults.filter(result => result.isValid).length
    const itemsWithWarnings = uploadState.validationResults.filter(result => result.warnings.length > 0).length
    const itemsWithErrors = uploadState.validationResults.filter(result => result.errors.length > 0).length
    
    return { totalItems, validItems, itemsWithWarnings, itemsWithErrors }
  }

  const validationSummary = getValidationSummary()

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-orange-600 rounded-xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Bulk Content Upload</h1>
        <p className="text-lg opacity-90">
          Upload JSON files to create multiple pages for deities, stories, and spiritual content
        </p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl border border-gray-100">
        <div className="border-b border-gray-100">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'upload', label: 'Upload', icon: Upload },
              { id: 'schema', label: 'JSON Schema', icon: FileText },
              { id: 'examples', label: 'Examples', icon: Eye }
            ].map(tab => {
              const IconComponent = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'upload' | 'schema' | 'examples')}
                  className={`py-4 px-2 border-b-2 font-medium text-sm flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'border-orange-500 text-orange-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {tab.label}
                </button>
              )
            })}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'upload' && (
            <div className="space-y-6">
              {/* Upload Area */}
              <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                  isDragActive
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <input {...getInputProps()} />
                <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                {isDragActive ? (
                  <p className="text-lg text-orange-600">Drop your JSON file here...</p>
                ) : (
                  <div>
                    <p className="text-lg text-gray-900 mb-2">
                      Drag & drop your JSON file here, or click to select
                    </p>
                    <p className="text-gray-500">
                      Only .json files are accepted
                    </p>
                  </div>
                )}
              </div>

              {/* File Info */}
              {uploadState.file && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="font-medium text-gray-900">{uploadState.file.name}</p>
                        <p className="text-sm text-gray-500">
                          {(uploadState.file.size / 1024).toFixed(2)} KB
                        </p>
                      </div>
                    </div>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                </div>
              )}

              {/* Validation Summary */}
              {validationSummary && (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-900">{validationSummary.totalItems}</div>
                    <div className="text-blue-600 text-sm">Total Items</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-900">{validationSummary.validItems}</div>
                    <div className="text-green-600 text-sm">Valid Items</div>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-yellow-900">{validationSummary.itemsWithWarnings}</div>
                    <div className="text-yellow-600 text-sm">With Warnings</div>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-red-900">{validationSummary.itemsWithErrors}</div>
                    <div className="text-red-600 text-sm">With Errors</div>
                  </div>
                </div>
              )}

              {/* Validation Results */}
              {uploadState.validationResults && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Validation Results</h3>
                  <div className="max-h-96 overflow-y-auto space-y-2">
                    {uploadState.validationResults.map((result, index) => (
                      <div
                        key={index}
                        className={`border rounded-lg p-4 ${
                          result.isValid
                            ? result.warnings.length > 0
                              ? 'border-yellow-200 bg-yellow-50'
                              : 'border-green-200 bg-green-50'
                            : 'border-red-200 bg-red-50'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          {result.isValid ? (
                            result.warnings.length > 0 ? (
                              <AlertTriangle className="w-5 h-5 text-yellow-500 mt-0.5" />
                            ) : (
                              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                            )
                          ) : (
                            <XCircle className="w-5 h-5 text-red-500 mt-0.5" />
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-gray-900">
                              Item {index + 1}: {(uploadState.jsonData?.[index] as { title?: string })?.title || 'Unknown'}
                            </p>
                            {result.errors.length > 0 && (
                              <div className="mt-2">
                                <p className="text-sm font-medium text-red-700">Errors:</p>
                                <ul className="list-disc list-inside text-sm text-red-600 mt-1">
                                  {result.errors.map((error, i) => (
                                    <li key={i}>{error}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            {result.warnings.length > 0 && (
                              <div className="mt-2">
                                <p className="text-sm font-medium text-yellow-700">Warnings:</p>
                                <ul className="list-disc list-inside text-sm text-yellow-600 mt-1">
                                  {result.warnings.map((warning, i) => (
                                    <li key={i}>{warning}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Upload Button */}
              {uploadState.jsonData && validationSummary && validationSummary.validItems > 0 && (
                <div className="flex justify-center">
                  <button
                    onClick={handleProcessUpload}
                    disabled={uploadState.isProcessing}
                    className="bg-orange-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    {uploadState.isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Upload className="w-5 h-5" />
                        Upload {validationSummary.validItems} Valid Items
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* Upload Result */}
              {uploadState.uploadResult && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <h3 className="text-lg font-semibold text-green-900">Upload Complete!</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-green-700">Total Items:</span>
                      <span className="ml-2 text-green-900">{uploadState.uploadResult.totalItems}</span>
                    </div>
                    <div>
                      <span className="font-medium text-green-700">Successfully Created:</span>
                      <span className="ml-2 text-green-900">{uploadState.uploadResult.successCount}</span>
                    </div>
                    <div>
                      <span className="font-medium text-green-700">Failed:</span>
                      <span className="ml-2 text-green-900">{uploadState.uploadResult.failureCount}</span>
                    </div>
                  </div>
                  {uploadState.uploadResult.createdSlugs.length > 0 && (
                    <div className="mt-4">
                      <p className="font-medium text-green-700 mb-2">Created Pages:</p>
                      <div className="max-h-32 overflow-y-auto">
                        <div className="flex flex-wrap gap-2">
                          {uploadState.uploadResult.createdSlugs.map(slug => (
                            <span key={slug} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                              {slug}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {activeTab === 'schema' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">JSON Schema Documentation</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <button
                    onClick={downloadSampleJSON}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 flex items-center gap-2 mb-4"
                  >
                    <Download className="w-4 h-4" />
                    Download Sample JSON
                  </button>
                  <div className="prose prose-sm max-w-none">
                    <h4 className="text-base font-semibold text-gray-900">Required Fields</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li><code className="bg-gray-100 px-2 py-1 rounded">slug</code> - URL-friendly identifier</li>
                      <li><code className="bg-gray-100 px-2 py-1 rounded">title</code> - Display title</li>
                      <li><code className="bg-gray-100 px-2 py-1 rounded">contentType</code> - Type of content (deity, story, etc.)</li>
                      <li><code className="bg-gray-100 px-2 py-1 rounded">status</code> - Publication status</li>
                      <li><code className="bg-gray-100 px-2 py-1 rounded">shortDescription</code> - Brief summary</li>
                      <li><code className="bg-gray-100 px-2 py-1 rounded">description</code> - Main content</li>
                      <li><code className="bg-gray-100 px-2 py-1 rounded">featuredImage</code> - Main image object</li>
                      <li><code className="bg-gray-100 px-2 py-1 rounded">seo</code> - SEO metadata object</li>
                      <li><code className="bg-gray-100 px-2 py-1 rounded">tags</code> - Array of tags</li>
                      <li><code className="bg-gray-100 px-2 py-1 rounded">categories</code> - Array of categories</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'examples' && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Type Examples</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { type: 'Deity', description: 'Gods, Goddesses, Divine beings' },
                  { type: 'Story', description: 'Mythology, Folk tales, Legends' },
                  { type: 'Ramayana', description: 'Episodes from the epic Ramayana' },
                  { type: 'Scripture', description: 'Sacred texts and teachings' },
                  { type: 'Practice', description: 'Rituals, meditations, ceremonies' },
                  { type: 'Festival', description: 'Religious celebrations and observances' }
                ].map(example => (
                  <div key={example.type} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">{example.type}</h4>
                    <p className="text-sm text-gray-600">{example.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}