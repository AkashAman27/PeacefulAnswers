import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

interface GeminiImageGenerationRequest {
  prompt: string
  negativePrompt?: string
  aspectRatio?: '1:1' | '9:16' | '16:9' | '4:3' | '3:4'
  count?: number
  guidanceScale?: number
  quality?: number
}

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

class GeminiImageService {
  private apiKey: string | null = null

  constructor() {
    this.apiKey = process.env.GOOGLE_API_KEY || null
  }

  isConfigured(): boolean {
    return !!this.apiKey
  }

  async generateImages(request: GeminiImageGenerationRequest): Promise<{
    success: boolean
    images?: GeneratedImage[]
    error?: string
    errorType?: string
    canRetry?: boolean
    suggestions?: string[]
  }> {
    if (!this.isConfigured()) {
      return {
        success: false,
        error: 'Google API key is not configured. Please add GOOGLE_API_KEY to your environment variables.',
        errorType: 'CONFIGURATION_ERROR'
      }
    }

    try {
      const images: GeneratedImage[] = []
      const count = request.count || 1

      for (let i = 0; i < count; i++) {
        try {
          const image = await this.generateSingleImage(request, i + 1)
          images.push(image)
        } catch (error) {
          console.error(`Failed to generate image ${i + 1}:`, error)
          
          if (error instanceof Error) {
            if (error.message.includes('safety')) {
              return {
                success: false,
                error: 'Content policy violation. Please modify your prompt to be more appropriate for spiritual content.',
                errorType: 'SAFETY_FILTER',
                canRetry: true,
                suggestions: [
                  'Use peaceful, spiritual descriptions',
                  'Focus on sacred places, meditation, or divine symbols',
                  'Avoid any controversial or inappropriate content',
                  'Use terms like "serene", "peaceful", "divine", "sacred"',
                  'Describe Hindu deities, temples, or spiritual practices'
                ]
              }
            }
            
            if (error.message.includes('quota') || error.message.includes('limit')) {
              return {
                success: false,
                error: 'API quota exceeded. Please try again later or check your Google Cloud billing.',
                errorType: 'QUOTA_EXCEEDED',
                canRetry: true
              }
            }
          }
          
          throw error
        }
      }

      return {
        success: true,
        images
      }
    } catch (error) {
      console.error('Gemini image generation error:', error)
      
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred during image generation',
        errorType: 'GENERATION_ERROR',
        canRetry: true
      }
    }
  }

  private async generateSingleImage(request: GeminiImageGenerationRequest, index: number): Promise<GeneratedImage> {
    // Build the generation prompt optimized for spiritual content
    const fullPrompt = this.buildSpiritualPrompt(request)
    
    // Call Google Gemini Imagen API
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/openai/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`
      },
      body: JSON.stringify({
        model: 'imagen-3.0-generate-002',
        prompt: fullPrompt,
        response_format: 'b64_json',
        n: 1,
        size: this.mapSizeFromAspectRatio(request.aspectRatio)
      })
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(`Gemini API error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`)
    }

    const data = await response.json()
    
    if (!data.data || data.data.length === 0) {
      throw new Error('No images generated')
    }

    const imageData = data.data[0]
    
    // Process and upload the image to Supabase
    const processedImage = await this.processAndUploadImage(imageData, request, index)
    
    return processedImage
  }

  private buildSpiritualPrompt(request: GeminiImageGenerationRequest): string {
    let prompt = request.prompt.trim()
    
    // Enhance prompt for spiritual content and better quality
    const spiritualEnhancements = []
    
    if (!prompt.toLowerCase().includes('spiritual') && !prompt.toLowerCase().includes('divine') && !prompt.toLowerCase().includes('sacred')) {
      spiritualEnhancements.push('spiritual atmosphere')
    }
    
    if (!prompt.toLowerCase().includes('peaceful') && !prompt.toLowerCase().includes('serene')) {
      spiritualEnhancements.push('peaceful and serene')
    }
    
    if (!prompt.toLowerCase().includes('high quality')) {
      spiritualEnhancements.push('high quality professional photography')
    }
    
    if (!prompt.toLowerCase().includes('detailed')) {
      spiritualEnhancements.push('highly detailed')
    }
    
    // Add spiritual context for Hindu/Sanātana Dharma content
    if (prompt.toLowerCase().includes('temple') || prompt.toLowerCase().includes('deity') || prompt.toLowerCase().includes('hindu')) {
      spiritualEnhancements.push('traditional Hindu art style')
    }
    
    if (spiritualEnhancements.length > 0) {
      prompt += ', ' + spiritualEnhancements.join(', ')
    }
    
    // Add negative prompt guidance
    if (request.negativePrompt) {
      prompt += `. Avoid: ${request.negativePrompt}`
    } else {
      prompt += '. Avoid: dark, scary, inappropriate, violent, disturbing content'
    }
    
    return prompt
  }

  private mapSizeFromAspectRatio(aspectRatio?: string): string {
    // Imagen 3.0 supported sizes
    const sizeMapping: { [key: string]: string } = {
      '1:1': '1024x1024',
      '9:16': '1024x1792', // Vertical
      '16:9': '1792x1024', // Landscape
      '4:3': '1024x768',   // Standard
      '3:4': '768x1024'    // Portrait
    }
    
    return sizeMapping[aspectRatio || '16:9'] || '1792x1024'
  }

  private async processAndUploadImage(
    imageData: any, 
    request: GeminiImageGenerationRequest, 
    index: number
  ): Promise<GeneratedImage> {
    // Decode base64 image data from Gemini response
    const imageBuffer = Buffer.from(imageData.b64_json, 'base64')
    
    // Generate filename for spiritual content
    const timestamp = Date.now()
    const sanitizedPrompt = request.prompt.toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .substring(0, 40)
    
    const fileName = `spiritual-${sanitizedPrompt}-${timestamp}-${index}.jpg`
    
    // Upload to Supabase storage
    const publicUrl = await this.uploadToSupabase(imageBuffer, fileName)
    
    // Get image dimensions based on aspect ratio
    const dimensions = this.getDimensionsFromAspectRatio(request.aspectRatio)
    
    return {
      publicUrl,
      fileName,
      fileSize: imageBuffer.length,
      dimensions,
      prompt: request.prompt,
      index
    }
  }

  private async uploadToSupabase(imageBuffer: Buffer, fileName: string): Promise<string> {
    try {
      const filePath = `generated-images/${fileName}`
      
      // Upload to Supabase storage bucket
      const { data, error } = await supabase.storage
        .from('peaceful-images')
        .upload(filePath, imageBuffer, {
          contentType: 'image/jpeg',
          cacheControl: '3600',
          upsert: false
        })

      if (error) {
        console.error('Supabase upload error:', error)
        // Fallback to data URL if Supabase fails
        const base64Image = imageBuffer.toString('base64')
        return `data:image/jpeg;base64,${base64Image}`
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from('peaceful-images')
        .getPublicUrl(filePath)

      if (urlData?.publicUrl) {
        return urlData.publicUrl
      } else {
        throw new Error('Failed to get public URL from Supabase')
      }
    } catch (error) {
      console.error('Upload to Supabase failed:', error)
      // Fallback to data URL
      const base64Image = imageBuffer.toString('base64')
      return `data:image/jpeg;base64,${base64Image}`
    }
  }

  private getDimensionsFromAspectRatio(aspectRatio?: string): { width: number; height: number } {
    // Return dimensions matching the size we requested from the API
    const dimensionMapping: { [key: string]: { width: number; height: number } } = {
      '1:1': { width: 1024, height: 1024 },
      '9:16': { width: 1024, height: 1792 },
      '16:9': { width: 1792, height: 1024 },
      '4:3': { width: 1024, height: 768 },
      '3:4': { width: 768, height: 1024 }
    }
    
    return dimensionMapping[aspectRatio || '16:9'] || { width: 1792, height: 1024 }
  }

  async testConfiguration(): Promise<{ success: boolean; error?: string }> {
    if (!this.isConfigured()) {
      return {
        success: false,
        error: 'Google API key is not configured'
      }
    }

    try {
      // Test API connectivity with a simple models list request
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/openai/models', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`
        }
      })

      if (!response.ok) {
        return {
          success: false,
          error: `API key validation failed: ${response.status}`
        }
      }

      return { success: true }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      }
    }
  }

  async getSpiritualSuggestions(topic?: string): Promise<string[]> {
    const baseSpiritualSuggestions = [
      'Beautiful Hindu temple with golden hour lighting and devotees praying',
      'Serene meditation scene in lotus position with peaceful atmosphere',
      'Sacred Ganga river flowing through ancient spiritual city at sunrise',
      'Intricate mandala pattern with vibrant spiritual colors and divine geometry',
      'Peaceful ashram courtyard with traditional architecture and spiritual ambiance',
      'Divine statue of Lord Ganesha surrounded by flowers and incense',
      'Tranquil yoga session in natural mountain setting with spiritual energy',
      'Sacred fire ceremony (havan) with traditional priests and divine atmosphere',
      'Beautiful shrine room with oil lamps, flowers, and spiritual decorations',
      'Pilgrims walking ancient spiritual path with mountains and temples in background'
    ]

    if (topic) {
      const topicSpecific = [
        `Sacred ${topic} temple with devotees and traditional architecture`,
        `Divine representation of ${topic} with spiritual symbolism and peaceful atmosphere`,
        `Festival celebration of ${topic} with colorful decorations and joyful devotees`,
        `Meditation on ${topic} in serene natural setting with spiritual focus`,
        `Traditional art depicting ${topic} with intricate details and divine colors`,
        ...baseSpiritualSuggestions
      ]
      return topicSpecific
    }

    return baseSpiritualSuggestions
  }
}

export default GeminiImageService