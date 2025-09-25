'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import {
  Upload,
  X,
  ImageIcon,
  Loader2,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

interface UploadedImage {
  id?: string
  url: string
  filename: string
  original_name: string
  file_size: number
  file_type: string
  alt_text?: string
  caption?: string
}

interface ImageUploadProps {
  sacredPlaceId?: string
  usageContext?: string
  maxFiles?: number
  onUploadComplete?: (images: UploadedImage[]) => void
  onUrlChange?: (url: string) => void
  currentUrl?: string
  altText?: string
  onAltTextChange?: (altText: string) => void
  label?: string
  description?: string
  showUrlInput?: boolean
}

export default function ImageUpload({
  sacredPlaceId,
  usageContext = 'gallery',
  maxFiles = 1,
  onUploadComplete,
  onUrlChange,
  currentUrl,
  altText,
  onAltTextChange,
  label = 'Upload Image',
  description = 'Choose an image file to upload',
  showUrlInput = true
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([])
  const [dragActive, setDragActive] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFiles = async (files: FileList) => {
    const validFiles = Array.from(files).slice(0, maxFiles)

    if (validFiles.length === 0) return

    setUploading(true)
    setError(null)
    setSuccess(null)

    const results: UploadedImage[] = []

    for (const file of validFiles) {
      try {
        const formData = new FormData()
        formData.append('file', file)

        if (sacredPlaceId) {
          formData.append('sacred_place_id', sacredPlaceId)
        }
        formData.append('usage_context', usageContext)
        formData.append('alt_text', altText || '')

        const response = await fetch('/api/upload/sacred-places', {
          method: 'POST',
          body: formData
        })

        const result = await response.json()

        if (response.ok) {
          results.push(result.data)

          // For single file upload, update the URL immediately
          if (maxFiles === 1 && onUrlChange) {
            onUrlChange(result.data.url)
          }
        } else {
          throw new Error(result.error || 'Upload failed')
        }
      } catch (err: any) {
        setError(`Failed to upload ${file.name}: ${err.message}`)
        console.error('Upload error:', err)
      }
    }

    setUploadedImages(prev => [...prev, ...results])

    if (onUploadComplete) {
      onUploadComplete(results)
    }

    if (results.length > 0) {
      setSuccess(`Successfully uploaded ${results.length} image(s)`)
    }

    setUploading(false)

    // Clear the input
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setDragActive(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setDragActive(false)
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files)
    }
  }

  const openFileDialog = () => {
    fileInputRef.current?.click()
  }

  const removeUploadedImage = (index: number) => {
    const newImages = uploadedImages.filter((_, i) => i !== index)
    setUploadedImages(newImages)

    if (onUploadComplete) {
      onUploadComplete(newImages)
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
        <p className="text-sm text-gray-500 mb-4">
          {description}
        </p>
      </div>

      {/* URL Input Option */}
      {showUrlInput && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Or enter image URL
          </label>
          <input
            type="url"
            value={currentUrl || ''}
            onChange={(e) => onUrlChange?.(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="https://example.com/image.jpg"
          />
        </div>
      )}

      {/* Current/Preview Image */}
      {currentUrl && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Image
          </label>
          <div className="relative inline-block">
            <Image
              src={currentUrl}
              alt={altText || 'Current image'}
              width={300}
              height={200}
              className="object-cover rounded-lg border border-gray-200"
            />
          </div>
        </div>
      )}

      {/* Alt Text Input */}
      {onAltTextChange && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Alt Text (for accessibility)
          </label>
          <input
            type="text"
            value={altText || ''}
            onChange={(e) => onAltTextChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Describe the image for screen readers"
          />
        </div>
      )}

      {/* Upload Area */}
      <div
        className={`relative border-2 border-dashed rounded-lg p-6 text-center hover:bg-gray-50 transition-colors cursor-pointer ${
          dragActive
            ? 'border-blue-500 bg-blue-50'
            : uploading
            ? 'border-gray-300 bg-gray-50'
            : 'border-gray-300 hover:border-blue-400'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={!uploading ? openFileDialog : undefined}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple={maxFiles > 1}
          onChange={handleFileSelect}
          className="hidden"
        />

        <div className="space-y-2">
          {uploading ? (
            <>
              <Loader2 className="w-10 h-10 text-blue-600 animate-spin mx-auto" />
              <p className="text-blue-600 font-medium">Uploading...</p>
            </>
          ) : (
            <>
              <Upload className="w-10 h-10 text-gray-400 mx-auto" />
              <p className="text-gray-600">
                <span className="font-medium text-blue-600">Click to upload</span>
                {' or drag and drop'}
              </p>
              <p className="text-sm text-gray-500">
                PNG, JPG, WebP or GIF (max 10MB)
              </p>
            </>
          )}
        </div>
      </div>

      {/* Status Messages */}
      {error && (
        <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <span className="text-red-700 text-sm">{error}</span>
        </div>
      )}

      {success && (
        <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <span className="text-green-700 text-sm">{success}</span>
        </div>
      )}

      {/* Uploaded Images Preview */}
      {uploadedImages.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-gray-700">Recently Uploaded</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {uploadedImages.map((image, index) => (
              <div key={index} className="relative group">
                <Image
                  src={image.url}
                  alt={image.alt_text || image.original_name}
                  width={150}
                  height={100}
                  className="object-cover rounded-lg border border-gray-200 w-full h-24"
                />
                <button
                  onClick={() => removeUploadedImage(index)}
                  className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700"
                >
                  <X className="w-3 h-3" />
                </button>
                <div className="mt-1">
                  <p className="text-xs text-gray-600 truncate">
                    {image.original_name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {(image.file_size / 1024).toFixed(1)}KB
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Usage Guidelines */}
      <div className="text-xs text-gray-500 space-y-1">
        <p>• Images are automatically optimized and served via CDN</p>
        <p>• Supported formats: JPEG, PNG, WebP, GIF</p>
        <p>• Maximum file size: 10MB per image</p>
        {maxFiles > 1 && <p>• You can upload up to {maxFiles} images at once</p>}
      </div>
    </div>
  )
}