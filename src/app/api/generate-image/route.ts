import { NextRequest, NextResponse } from 'next/server'
import GeminiImageService from '@/lib/services/geminiImageService'
import ImageProcessingService from '@/lib/services/imageProcessingService'

interface ImageGenerationRequest {
  prompt: string
  blogSlug?: string
  imageType?: 'hero' | 'content' | 'gallery' | 'thumbnail'
  aspectRatio?: '1:1' | '9:16' | '16:9' | '4:3' | '3:4'
  count?: number
  negativePrompt?: string
  guidanceScale?: number
  quality?: number
}

export async function POST(request: NextRequest) {
  try {
    console.log('🖼️ Image generation request received for PeacefulAnswers')
    const body: ImageGenerationRequest = await request.json()
    
    console.log('Request details:', {
      ...body,
      prompt: body.prompt?.substring(0, 100) + '...'
    })

    // Initialize services
    const geminiService = new GeminiImageService()
    const processingService = new ImageProcessingService()

    // Validate request
    if (!body.prompt?.trim()) {
      return NextResponse.json({
        success: false,
        error: 'Prompt is required for generating spiritual images',
        errorType: 'VALIDATION_ERROR'
      }, { status: 400 })
    }

    // Check if Gemini service is configured
    if (!geminiService.isConfigured()) {
      return NextResponse.json({
        success: false,
        error: 'Google API key is not configured. Please add GOOGLE_API_KEY to your environment variables.',
        errorType: 'CONFIGURATION_ERROR',
        canRetry: false,
        suggestions: [
          'Contact administrator to configure Google API key',
          'Ensure GOOGLE_API_KEY is set in environment variables',
          'Restart the development server after adding the API key'
        ]
      }, { status: 503 })
    }

    // Enhance prompt for spiritual content if needed
    const spiritualPrompt = enhancePromptForSpiritualContent(body.prompt)

    // Generate images using Gemini
    console.log('🕉️ Generating spiritual images with Gemini service...')
    const result = await geminiService.generateImages({
      prompt: spiritualPrompt,
      negativePrompt: body.negativePrompt || 'dark, scary, inappropriate, violent, disturbing, evil',
      aspectRatio: body.aspectRatio || '16:9',
      count: Math.min(body.count || 1, 4), // Limit to 4 images max
      guidanceScale: body.guidanceScale,
      quality: body.quality
    })

    if (!result.success) {
      return NextResponse.json({
        success: false,
        error: result.error,
        errorType: result.errorType,
        canRetry: result.canRetry,
        suggestions: result.suggestions
      }, { status: 400 })
    }

    console.log(`✅ Successfully generated ${result.images?.length || 0} spiritual images`)

    // Log generation for analytics
    console.log('📊 Image generation analytics:', {
      timestamp: new Date().toISOString(),
      imageCount: result.images?.length || 0,
      aspectRatio: body.aspectRatio,
      imageType: body.imageType,
      promptLength: body.prompt.length,
      hasNegativePrompt: !!body.negativePrompt
    })

    return NextResponse.json({
      success: true,
      images: result.images,
      requestId: `peaceful_${Date.now()}`,
      processingTime: Date.now(),
      spiritualContext: true,
      message: `Generated ${result.images?.length || 0} spiritual image(s) for PeacefulAnswers`
    })

  } catch (error) {
    console.error('🚨 Image generation API error:', error)
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred during spiritual image generation',
      errorType: 'SERVER_ERROR',
      canRetry: true,
      context: 'PeacefulAnswers image generation service'
    }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const action = searchParams.get('action')
    const topic = searchParams.get('topic')

    const geminiService = new GeminiImageService()

    // Handle different GET actions
    switch (action) {
      case 'test':
        console.log('🔧 Testing Gemini service configuration for PeacefulAnswers...')
        const testResult = await geminiService.testConfiguration()
        
        return NextResponse.json({
          success: testResult.success,
          error: testResult.error,
          service: 'PeacefulAnswers Image Generation',
          features: {
            geminiImageService: testResult.success ? 'configured' : 'error',
            imageProcessingService: 'configured',
            supabaseStorage: 'configured',
            spiritualContent: 'optimized'
          }
        })

      case 'suggestions':
        console.log('💡 Loading spiritual image generation suggestions...')
        const suggestions = await geminiService.getSpiritualSuggestions(topic || undefined)
        
        return NextResponse.json({
          success: true,
          suggestions,
          topic: topic || 'general spiritual content',
          context: 'Hindu/Sanātana Dharma optimized suggestions'
        })

      case 'status':
        const processingService = new ImageProcessingService()
        const storageInfo = await processingService.getStorageInfo()
        
        return NextResponse.json({
          success: true,
          status: geminiService.isConfigured() ? 'ready' : 'not_configured',
          services: {
            gemini: geminiService.isConfigured() ? 'ready' : 'missing_api_key',
            processing: 'ready',
            supabase: 'ready',
            spiritualOptimization: 'active'
          },
          storage: storageInfo.success ? storageInfo.info : { error: storageInfo.error },
          specialization: 'Hindu/Sanātana Dharma spiritual content'
        })

      case 'categories':
        // Return spiritual image categories
        return NextResponse.json({
          success: true,
          categories: [
            {
              name: 'Temples & Architecture',
              description: 'Sacred temples, architectural details, spiritual spaces',
              examples: ['Ancient temple sunrise', 'Intricate mandala carvings', 'Sacred geometry']
            },
            {
              name: 'Deities & Divine Forms',
              description: 'Representations of Hindu deities and divine symbols',
              examples: ['Peaceful Ganesha statue', 'Divine lotus symbol', 'Sacred Om illustration']
            },
            {
              name: 'Festivals & Celebrations',
              description: 'Colorful festivals, spiritual celebrations, community gatherings',
              examples: ['Diwali lights', 'Holi colors', 'Spiritual procession']
            },
            {
              name: 'Nature & Spirituality',
              description: 'Sacred rivers, mountains, trees, and natural spiritual elements',
              examples: ['Ganga at sunrise', 'Sacred banyan tree', 'Himalayan meditation']
            },
            {
              name: 'Meditation & Yoga',
              description: 'Peaceful meditation scenes, yoga practices, spiritual discipline',
              examples: ['Lotus meditation pose', 'Peaceful ashram', 'Morning yoga session']
            },
            {
              name: 'Sacred Symbols',
              description: 'Spiritual symbols, yantras, mandalas, and divine patterns',
              examples: ['Intricate mandala', 'Sacred yantra', 'Om symbol art']
            }
          ]
        })

      default:
        // Default status check
        return NextResponse.json({
          status: geminiService.isConfigured() ? 'ready' : 'configuration_required',
          message: geminiService.isConfigured() 
            ? 'PeacefulAnswers image generation service is ready for spiritual content' 
            : 'Google API key required for spiritual image generation',
          website: 'PeacefulAnswers.com',
          specialization: 'Hindu/Sanātana Dharma spiritual imagery',
          features: {
            geminiImageService: geminiService.isConfigured() ? 'configured' : 'missing_api_key',
            imageProcessingService: 'configured',
            supabaseStorage: 'configured',
            spiritualOptimization: 'active'
          }
        })
    }
  } catch (error) {
    console.error('🚨 Image generation service check error:', error)
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      status: 'error',
      service: 'PeacefulAnswers Image Generation'
    }, { status: 500 })
  }
}

// Helper function to enhance prompts for spiritual content
function enhancePromptForSpiritualContent(originalPrompt: string): string {
  const prompt = originalPrompt.trim()
  
  // Check if prompt already contains spiritual keywords
  const spiritualKeywords = [
    'spiritual', 'divine', 'sacred', 'holy', 'peaceful', 'serene', 'temple', 
    'meditation', 'yoga', 'deity', 'hinduism', 'dharma', 'om', 'lotus', 
    'ganga', 'himalaya', 'ashram', 'mantra', 'puja', 'festival'
  ]
  
  const hasSpritualContext = spiritualKeywords.some(keyword => 
    prompt.toLowerCase().includes(keyword)
  )
  
  // If no spiritual context, add appropriate enhancements
  if (!hasSpritualContext) {
    return `${prompt}, spiritual atmosphere, peaceful and serene, sacred ambiance, divine lighting, traditional Indian spiritual art style`
  }
  
  // If already spiritual, just enhance quality
  if (!prompt.toLowerCase().includes('high quality')) {
    return `${prompt}, high quality spiritual artwork, peaceful atmosphere, divine lighting`
  }
  
  return prompt
}