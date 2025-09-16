'use client'

import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, Loader2, Image as ImageIcon, Link, AlertCircle, CheckCircle } from 'lucide-react'
import { Alert, AlertDescription } from "@/components/ui/alert"
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

interface ImageUploadDialogProps {
  open: boolean
  onClose: () => void
  onImageSelect: (url: string, alt?: string) => void
}

export function ImageUploadDialog({ open, onClose, onImageSelect }: ImageUploadDialogProps) {
  const [uploading, setUploading] = useState(false)
  const [uploadedUrl, setUploadedUrl] = useState('')
  const [externalUrl, setExternalUrl] = useState('')
  const [altText, setAltText] = useState('')
  const [previewUrl, setPreviewUrl] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const uploadImage = async (file: File) => {
    try {
      setUploading(true)
      setError('')
      setSuccess('')

      // Validate file type
      if (!file.type.startsWith('image/')) {
        throw new Error('Please select an image file')
      }

      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        throw new Error('File size must be less than 10MB')
      }

      // Generate unique filename with timestamp and random string
      const fileExt = file.name.split('.').pop()
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`
      const filePath = `content-images/${fileName}`

      // Upload file to Supabase storage
      const { data, error } = await supabase.storage
        .from('peaceful-images')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        })

      if (error) {
        // If bucket doesn't exist, provide helpful message
        if (error.message.includes('not found') || error.message.includes('bucket')) {
          throw new Error('Storage bucket not configured. Please contact admin to set up file uploads.')
        }
        throw error
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from('peaceful-images')
        .getPublicUrl(filePath)

      if (urlData?.publicUrl) {
        setUploadedUrl(urlData.publicUrl)
        setPreviewUrl(urlData.publicUrl)
        setSuccess('Image uploaded successfully!')
        
        // Auto-generate alt text from filename (without extension and random parts)
        const cleanName = file.name.replace(/\.[^/.]+$/, '').replace(/[_-]/g, ' ')
        setAltText(cleanName)
      } else {
        throw new Error('Failed to get public URL for uploaded image')
      }

    } catch (error) {
      console.error('Error uploading image:', error)
      setError(error instanceof Error ? error.message : 'Error uploading image')
    } finally {
      setUploading(false)
    }
  }

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Show preview immediately
      const reader = new FileReader()
      reader.onload = (e) => {
        setPreviewUrl(e.target?.result as string)
      }
      reader.readAsDataURL(file)
      
      // Upload file
      uploadImage(file)
    }
  }

  const handleExternalUrlChange = (url: string) => {
    setExternalUrl(url)
    setPreviewUrl(url)
    setError('')
    
    // Try to generate alt text from URL
    if (url) {
      const urlParts = url.split('/')
      const filename = urlParts[urlParts.length - 1]
      const cleanName = filename.replace(/\.[^/.]+$/, '').replace(/[_-]/g, ' ')
      setAltText(cleanName)
    }
  }

  const handleInsertImage = () => {
    const finalUrl = uploadedUrl || externalUrl
    if (finalUrl) {
      onImageSelect(finalUrl, altText || 'Uploaded image')
      // Reset form
      resetForm()
      onClose()
    }
  }

  const resetForm = () => {
    setUploadedUrl('')
    setExternalUrl('')
    setAltText('')
    setPreviewUrl('')
    setError('')
    setSuccess('')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  const hasValidImage = uploadedUrl || (externalUrl && externalUrl.startsWith('http'))

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-orange-600" />
            Insert Image
          </DialogTitle>
          <DialogDescription>
            Upload an image file to Supabase or provide an external image URL
          </DialogDescription>
        </DialogHeader>

        {/* Error/Success Messages */}
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {success && (
          <Alert className="border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">{success}</AlertDescription>
          </Alert>
        )}

        <Tabs defaultValue="upload" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upload" className="flex items-center gap-2">
              <Upload className="w-4 h-4" />
              Upload to Supabase
            </TabsTrigger>
            <TabsTrigger value="url" className="flex items-center gap-2">
              <Link className="w-4 h-4" />
              External URL
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="space-y-4">
            <div className="space-y-4">
              <div>
                <Label>Upload Image to Supabase Storage</Label>
                <div className="mt-2">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                    disabled={uploading}
                  />
                  
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploading}
                    className="w-full h-32 border-dashed border-orange-300 hover:border-orange-500"
                  >
                    {uploading ? (
                      <div className="flex flex-col items-center gap-2">
                        <Loader2 className="w-8 h-8 animate-spin text-orange-600" />
                        <span>Uploading to Supabase...</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2">
                        <Upload className="w-8 h-8 text-orange-600" />
                        <span>Click to upload image</span>
                        <span className="text-sm text-gray-500">
                          JPG, PNG, GIF, WebP (max 10MB)
                        </span>
                        <span className="text-xs text-orange-600">
                          Will be stored in Supabase Storage
                        </span>
                      </div>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="url" className="space-y-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="image-url">External Image URL</Label>
                <Input
                  id="image-url"
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  value={externalUrl}
                  onChange={(e) => handleExternalUrlChange(e.target.value)}
                  className="border-orange-200 focus:border-orange-500"
                />
                <p className="text-xs text-gray-500 mt-1">
                  External URLs should be from trusted sources and publicly accessible
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Preview Section */}
        {previewUrl && (
          <div className="space-y-4">
            <div>
              <Label>Preview</Label>
              <div className="mt-2 border rounded-lg p-4 bg-orange-50 border-orange-200">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="max-w-full max-h-40 object-contain mx-auto rounded"
                  onError={() => {
                    setPreviewUrl('')
                    setError('Failed to load image preview')
                  }}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="alt-text">Alt Text (for accessibility)</Label>
              <Input
                id="alt-text"
                placeholder="Describe the image for screen readers..."
                value={altText}
                onChange={(e) => setAltText(e.target.value)}
                className="border-orange-200 focus:border-orange-500"
              />
              <p className="text-sm text-gray-500 mt-1">
                Alt text helps screen readers and SEO. Describe what's in the image.
              </p>
            </div>

            {/* Show Supabase URL if uploaded */}
            {uploadedUrl && (
              <div>
                <Label>Supabase URL</Label>
                <div className="mt-1 p-2 bg-green-50 border border-green-200 rounded text-sm font-mono text-green-800 break-all">
                  {uploadedUrl}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="flex justify-end gap-2 pt-4">
          <Button variant="outline" onClick={handleClose}>
            Cancel
          </Button>
          <Button 
            onClick={handleInsertImage} 
            disabled={!hasValidImage || uploading}
            className="bg-orange-600 hover:bg-orange-700 text-white"
          >
            Insert Image
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}