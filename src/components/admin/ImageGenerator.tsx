'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { ImageIcon, Wand2, Download, Copy, RefreshCw, Settings, Eye, CheckCircle, XCircle, Loader2, Sparkles, Zap } from 'lucide-react'

interface GeneratedImage {
  publicUrl: string
  fileName: string
  fileSize: number
  dimensions: {
    width: number
    height: number
  }
  seedValue?: number
  prompt: string
  index: number
}

interface ImageGeneratorProps {
  blogSlug?: string
  onImageGenerated?: (images: GeneratedImage[]) => void
  defaultPrompt?: string
  className?: string
}

export function ImageGenerator({ 
  blogSlug = 'default', 
  onImageGenerated, 
  defaultPrompt = '',
  className = ''
}: ImageGeneratorProps) {
  const [prompt, setPrompt] = useState(defaultPrompt)
  const [negativePrompt, setNegativePrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedImages, setGeneratedImages] = useState<GeneratedImage[]>([])
  const [error, setError] = useState<string | null>(null)
  const [errorType, setErrorType] = useState<string | null>(null)
  const [errorSuggestions, setErrorSuggestions] = useState<string[]>([])
  const [canRetry, setCanRetry] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [serviceStatus, setServiceStatus] = useState<'unknown' | 'ready' | 'error'>('unknown')
  const [statusMessage, setStatusMessage] = useState<string>('')
  const [showAdvanced, setShowAdvanced] = useState(false)
  
  // Advanced settings
  const [aspectRatio, setAspectRatio] = useState<'1:1' | '9:16' | '16:9' | '4:3' | '3:4'>('16:9')
  const [imageType, setImageType] = useState<'hero' | 'content' | 'gallery' | 'thumbnail'>('content')
  const [imageCount, setImageCount] = useState(1)
  const [guidanceScale, setGuidanceScale] = useState(100)
  const [quality, setQuality] = useState(85)

  // Check service status on component mount
  useEffect(() => {
    checkServiceStatus()
  }, [])

  const checkServiceStatus = async () => {
    try {
      const response = await fetch('/api/generate-image?action=test')
      const data = await response.json()
      
      if (data.success) {
        setServiceStatus('ready')
        setStatusMessage('PeacefulAnswers image generation service is ready')
      } else {
        setServiceStatus('error')
        setStatusMessage(data.error || 'Service configuration error')
      }
    } catch (error) {
      setServiceStatus('error')
      setStatusMessage('Unable to connect to image generation service')
    }
  }

const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please enter a description for the spiritual image you want to generate')
      return
    }

    setIsGenerating(true)
    setError(null)
    setErrorType(null)
    setErrorSuggestions([])
    setCanRetry(false)
    setSuccess(null)

    try {
      console.log('🕉️ Generating spiritual images with prompt:', prompt)
      
      // First test if the service is available
      try {
        const testResponse = await fetch('/api/generate-image?action=test')
        const testData = await testResponse.json()
        
        if (!testData.success) {
          setServiceStatus('error')
          setStatusMessage(testData.error || 'Service configuration error')
          throw new Error('Google API key is missing or invalid. Please add GOOGLE_API_KEY to your .env.local file.')
        } else {
          setServiceStatus('ready')
          setStatusMessage('PeacefulAnswers image generation service is ready')
        }
      } catch (testError) {
        setServiceStatus('error')
        setStatusMessage('Unable to connect to service')
        throw new Error('Unable to connect to image generation service. Please check your GOOGLE_API_KEY in .env.local file.')
      }
      
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: prompt.trim(),
          blogSlug,
          imageType,
          aspectRatio,
          count: imageCount,
          negativePrompt: negativePrompt.trim() || 'dark, scary, inappropriate, violent, disturbing, evil, demonic',
          guidanceScale,
          quality
        })
      })

      const data = await response.json()

      if (!response.ok) {
        const errorMessage = data.error || 'Spiritual image generation failed'
        const errorType = data.errorType || 'GENERAL_ERROR'
        const canRetry = data.canRetry || false
        const suggestions = data.suggestions || []
        
        setError(errorMessage)
        setErrorType(errorType)
        setCanRetry(canRetry)
        setErrorSuggestions(suggestions)
        return
      }

      if (data.success && data.images) {
        setGeneratedImages(data.images)
        setSuccess(`✨ Successfully generated ${data.images.length} spiritual image(s) for PeacefulAnswers!`)
        
        if (onImageGenerated) {
          onImageGenerated(data.images)
        }
      } else {
        setError('No spiritual images were generated')
        return
      }
    } catch (error) {
      console.error('Unexpected error:', error)
      
      let errorMessage = 'Failed to generate spiritual images'
      
      if (error instanceof Error) {
        errorMessage = error.message
      }
      
      if (errorMessage.includes('connect') || errorMessage.includes('network')) {
        errorMessage += '\n\nThis could be a network connectivity issue. Please check your internet connection and try again.'
      } else if (errorMessage.includes('credentials') || errorMessage.includes('API key') || errorMessage.includes('configuration')) {
        errorMessage += '\n\nTo fix this, add your Google API key to your .env.local file:\nGOOGLE_API_KEY=your-google-api-key-here'
      }
      
      setError(errorMessage)
    } finally {
      setIsGenerating(false)
    }
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setSuccess('Supabase URL copied to clipboard!')
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  const downloadImage = (imageUrl: string, fileName: string) => {
    const link = document.createElement('a')
    link.href = imageUrl
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }


  return (
    <Card className={`w-full ${className} border-orange-200`}>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wand2 className="h-5 w-5 text-orange-600" />
            <span className="text-xl font-bold text-gray-900">Spiritual AI Image Generator</span>
            <Badge variant="secondary" className="bg-orange-100 text-orange-800">PeacefulAnswers</Badge>
          </div>
          <div className="flex items-center gap-2">
            {serviceStatus === 'ready' && (
              <Badge variant="default" className="bg-green-100 text-green-800 border-green-300">
                <CheckCircle className="h-3 w-3 mr-1" />
                Ready
              </Badge>
            )}
            {serviceStatus === 'error' && (
              <Badge variant="destructive">
                <XCircle className="h-3 w-3 mr-1" />
                Not Configured
              </Badge>
            )}
            {serviceStatus === 'unknown' && (
              <Badge variant="secondary">
                <Loader2 className="h-3 w-3 mr-1 animate-spin" />
                Checking...
              </Badge>
            )}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Service Status Message */}
        {serviceStatus === 'error' && (
          <Alert variant="destructive">
            <XCircle className="h-4 w-4" />
            <AlertDescription className="text-base font-semibold text-red-900">
              <strong className="text-red-900">Google API Key Required:</strong> {statusMessage}
              <br /><br />
              To use the spiritual image generator, add your Google API key to your .env.local file:
              <br />
              <code className="bg-red-100 p-1 rounded text-base font-bold text-red-900">GOOGLE_API_KEY=your-google-api-key-here</code>
            </AlertDescription>
          </Alert>
        )}
        
        {/* Error/Success Messages */}
        {error && (
          <Alert variant={errorType === 'SAFETY_FILTER' ? 'default' : 'destructive'} className={errorType === 'SAFETY_FILTER' ? 'border-orange-200 bg-orange-50' : ''}>
            <XCircle className={`h-4 w-4 ${errorType === 'SAFETY_FILTER' ? 'text-orange-600' : ''}`} />
            <AlertDescription className="text-base font-semibold">
              <div className="space-y-3">
                <div className={errorType === 'SAFETY_FILTER' ? 'text-orange-900 font-bold text-base' : 'text-red-900 font-bold text-base'}>{error}</div>
                
                {errorType === 'SAFETY_FILTER' && errorSuggestions.length > 0 && (
                  <div className="space-y-2">
                    <div className="font-bold text-orange-900 text-base">Try these spiritual suggestions:</div>
                    <ul className="text-base text-orange-900 space-y-1 font-semibold">
                      {errorSuggestions.map((suggestion, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-orange-600 mt-1 font-bold">•</span>
                          <span className="text-orange-900 font-semibold">{suggestion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {canRetry && (
                  <div className="flex gap-2 mt-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setError(null)
                        setErrorType(null)
                        setErrorSuggestions([])
                        setCanRetry(false)
                      }}
                      className={errorType === 'SAFETY_FILTER' ? 'border-orange-300 text-orange-700 hover:bg-orange-100' : ''}
                    >
                      <RefreshCw className="h-3 w-3 mr-1" />
                      Modify Prompt & Try Again
                    </Button>
                  </div>
                )}
              </div>
            </AlertDescription>
          </Alert>
        )}

        {success && (
          <Alert className="border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-base font-bold text-green-900">{success}</AlertDescription>
          </Alert>
        )}

{/* Main Prompt Input */}
        <div className="space-y-3">
          <Label className="text-base font-bold text-gray-900">Spiritual Image Description</Label>
          <Textarea
            placeholder="Describe the spiritual image you want to generate... (e.g., 'Beautiful temple at sunrise with devotees praying, peaceful atmosphere, golden lighting')"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="min-h-[100px] resize-none border-orange-200 focus:border-orange-500 text-base font-semibold text-gray-900 placeholder:text-gray-700 placeholder:font-medium"
            disabled={isGenerating}
          />
        </div>

{/* Basic Settings */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label className="text-base font-bold text-gray-900">Image Type</Label>
            <Select value={imageType} onValueChange={(value: any) => setImageType(value)}>
              <SelectTrigger className="border-orange-200 text-base font-semibold text-gray-900">
                <SelectValue className="text-base font-semibold text-gray-900" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="hero" className="text-base font-semibold text-gray-900 hover:bg-orange-100">Hero (1920x1080)</SelectItem>
                <SelectItem value="content" className="text-base font-semibold text-gray-900 hover:bg-orange-100">Content (1200x675)</SelectItem>
                <SelectItem value="gallery" className="text-base font-semibold text-gray-900 hover:bg-orange-100">Gallery (800x600)</SelectItem>
                <SelectItem value="thumbnail" className="text-base font-semibold text-gray-900 hover:bg-orange-100">Thumbnail (400x225)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-base font-bold text-gray-900">Aspect Ratio</Label>
            <Select value={aspectRatio} onValueChange={(value: any) => setAspectRatio(value)}>
              <SelectTrigger className="border-orange-200 text-base font-semibold text-gray-900">
                <SelectValue className="text-base font-semibold text-gray-900" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="16:9" className="text-base font-semibold text-gray-900 hover:bg-orange-100">Landscape (16:9)</SelectItem>
                <SelectItem value="4:3" className="text-base font-semibold text-gray-900 hover:bg-orange-100">Standard (4:3)</SelectItem>
                <SelectItem value="1:1" className="text-base font-semibold text-gray-900 hover:bg-orange-100">Square (1:1)</SelectItem>
                <SelectItem value="3:4" className="text-base font-semibold text-gray-900 hover:bg-orange-100">Portrait (3:4)</SelectItem>
                <SelectItem value="9:16" className="text-base font-semibold text-gray-900 hover:bg-orange-100">Vertical (9:16)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-base font-bold text-gray-900">Count</Label>
            <Select value={imageCount.toString()} onValueChange={(value) => setImageCount(parseInt(value))}>
              <SelectTrigger className="border-orange-200 text-base font-semibold text-gray-900">
                <SelectValue className="text-base font-semibold text-gray-900" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="1" className="text-base font-semibold text-gray-900 hover:bg-orange-100">1 Image</SelectItem>
                <SelectItem value="2" className="text-base font-semibold text-gray-900 hover:bg-orange-100">2 Images</SelectItem>
                <SelectItem value="3" className="text-base font-semibold text-gray-900 hover:bg-orange-100">3 Images</SelectItem>
                <SelectItem value="4" className="text-base font-semibold text-gray-900 hover:bg-orange-100">4 Images</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Advanced Settings Dialog */}
        <Dialog open={showAdvanced} onOpenChange={setShowAdvanced}>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm" className="border-orange-200 hover:border-orange-500 text-base font-bold text-gray-900">
              <Settings className="h-4 w-4 mr-2" />
              Advanced Spiritual Settings
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md bg-white">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-gray-900">Advanced Generation Settings</DialogTitle>
              <DialogDescription className="text-base font-semibold text-gray-800">
                Fine-tune the spiritual image generation parameters
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              <div>
                <Label className="text-base font-bold text-gray-900">Negative Prompt (What to Avoid)</Label>
                <Textarea
                  placeholder="Elements to avoid... (e.g., 'dark, scary, inappropriate content')"
                  value={negativePrompt}
                  onChange={(e) => setNegativePrompt(e.target.value)}
                  className="h-20 border-orange-200 text-base font-semibold text-gray-900 placeholder:text-gray-700 placeholder:font-medium"
                />
                <div className="text-sm text-gray-900 mt-1 font-medium">
                  Default: dark, scary, inappropriate, violent, disturbing, evil, demonic
                </div>
              </div>

              <div>
                <Label className="text-base font-bold text-gray-900">Guidance Scale: {guidanceScale}</Label>
                <input
                  type="range"
                  min="10"
                  max="200"
                  step="10"
                  value={guidanceScale}
                  onChange={(e) => setGuidanceScale(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="text-sm text-gray-900 font-medium">Higher values follow the prompt more closely</div>
              </div>

              <div>
                <Label className="text-base font-bold text-gray-900">Image Quality: {quality}%</Label>
                <input
                  type="range"
                  min="60"
                  max="95"
                  step="5"
                  value={quality}
                  onChange={(e) => setQuality(parseInt(e.target.value))}
                  className="w-full"
                />
                <div className="text-sm text-gray-900 font-medium">Higher quality = larger file size</div>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Generate Button */}
        <Button
          onClick={handleGenerate}
          disabled={isGenerating || !prompt.trim() || serviceStatus === 'error'}
          className={`w-full text-white ${
            serviceStatus === 'error' 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-orange-600 hover:bg-orange-700'
          }`}
          size="lg"
        >
          {isGenerating ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Generating {imageCount > 1 ? `${imageCount} spiritual images` : 'spiritual image'}...
            </>
          ) : (
            <>
              <Sparkles className="h-4 w-4 mr-2" />
              Generate {imageCount > 1 ? `${imageCount} Spiritual Images` : 'Spiritual Image'}
            </>
          )}
        </Button>

        {/* Generated Images */}
        {generatedImages.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-gray-900">Generated Spiritual Images</h3>
              <Badge variant="outline" className="border-orange-200 text-orange-800 bg-orange-50 font-semibold">
                {generatedImages.length} image{generatedImages.length > 1 ? 's' : ''}
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {generatedImages.map((image, index) => (
                <Card key={index} className="overflow-hidden border-orange-200">
                  <div className="aspect-video relative">
                    <img
                      src={image.publicUrl}
                      alt={`Generated spiritual image ${image.index}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="text-sm font-bold bg-orange-100 text-orange-900">
                        #{image.index}
                      </Badge>
                    </div>
                    <div className="absolute top-2 left-2">
                      <Badge variant="secondary" className="text-sm font-bold bg-white/80 text-gray-900">
                        Supabase
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-4 space-y-3">
                    <div className="text-sm text-gray-900 grid grid-cols-2 gap-2 font-semibold">
                      <div>Size: {formatFileSize(image.fileSize)}</div>
                      <div>Dimensions: {image.dimensions.width}×{image.dimensions.height}</div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(image.publicUrl)}
                        className="flex-1 border-orange-200 hover:border-orange-500 text-base font-bold text-gray-900"
                      >
                        <Copy className="h-3 w-3 mr-1" />
                        Copy URL
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => downloadImage(image.publicUrl, image.fileName)}
                        className="flex-1 border-orange-200 hover:border-orange-500 text-base font-bold text-gray-900"
                      >
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(image.publicUrl, '_blank')}
                        className="border-orange-200 hover:border-orange-500 text-base font-bold text-gray-900"
                      >
                        <Eye className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Configuration Help */}
        {serviceStatus === 'error' && (
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-900 flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Setup Required for PeacefulAnswers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-orange-800">
                To use the Spiritual AI Image Generator, you need to add your Google API key:
              </p>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <div className="bg-orange-200 text-orange-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">1</div>
                  <div>
                    <strong>Get a Google API Key</strong>
                    <p className="text-orange-700">Visit <a href="https://console.cloud.google.com/apis/credentials" target="_blank" className="underline">Google Cloud Console</a> and create an API key with Gemini API access</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <div className="bg-orange-200 text-orange-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">2</div>
                  <div>
                    <strong>Add to Environment Variables</strong>
                    <p className="text-orange-700">Add to your .env.local file:</p>
                    <code className="block bg-orange-100 p-2 mt-1 rounded text-sm font-bold text-orange-900">
                      GOOGLE_API_KEY=your-google-api-key-here
                    </code>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <div className="bg-orange-200 text-orange-900 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mt-0.5">3</div>
                  <div>
                    <strong>Restart Your Development Server</strong>
                    <p className="text-orange-700">Stop and restart your Next.js development server to load the new environment variable</p>
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={checkServiceStatus}
                variant="outline" 
                size="sm"
                className="w-full border-orange-300 text-orange-700 hover:bg-orange-100"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Retry Configuration Check
              </Button>
            </CardContent>
          </Card>
        )}

      </CardContent>
    </Card>
  )
}

export default ImageGenerator