'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ImageIcon, Sparkles, Heart, Camera, Palette } from 'lucide-react'
import { ImageGenerator } from '@/components/admin/ImageGenerator'

export default function ImageGeneratorPage() {
  const [selectedBlogSlug, setSelectedBlogSlug] = useState('peaceful-content')

  return (
    <div className="container mx-auto p-6 space-y-6 bg-gradient-to-br from-orange-50 via-white to-blue-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-blue-600 bg-clip-text text-transparent">
            🕉️ Spiritual AI Image Generator
          </h1>
          <p className="text-gray-900 mt-2 font-semibold">Generate beautiful spiritual images for PeacefulAnswers.com using AI</p>
          <div className="flex items-center gap-2 mt-3">
            <Badge variant="secondary" className="bg-orange-100 text-orange-800">
              <Heart className="h-3 w-3 mr-1" />
              Hindu/Sanātana Dharma
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              <Camera className="h-3 w-3 mr-1" />
              Gemini Imagen 3.0
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              <Palette className="h-3 w-3 mr-1" />
              Supabase Storage
            </Badge>
          </div>
        </div>
      </div>

      {/* Image Generator Component */}
      <Card className="border-orange-200 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-orange-100 via-yellow-50 to-blue-100">
          <CardTitle className="flex items-center gap-2">
            <ImageIcon className="h-5 w-5 text-orange-600" />
            <span className="text-xl font-bold text-gray-900">Generate Spiritual Images</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <ImageGenerator 
            blogSlug={selectedBlogSlug}
            onImageGenerated={(images) => {
              console.log('Generated spiritual images:', images)
              // You can add logic here to integrate with post editing
            }}
          />
        </CardContent>
      </Card>

    </div>
  )
}