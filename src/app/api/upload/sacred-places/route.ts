import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// Maximum file size: 10MB
const MAX_FILE_SIZE = 10 * 1024 * 1024

// Allowed image types
const ALLOWED_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'image/gif'
]

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File
    const sacredPlaceId = formData.get('sacred_place_id') as string
    const usageContext = formData.get('usage_context') as string || 'gallery'
    const altText = formData.get('alt_text') as string || ''
    const caption = formData.get('caption') as string || ''

    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      )
    }

    // Validate file type
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only JPEG, PNG, WebP, and GIF are allowed.' },
        { status: 400 }
      )
    }

    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'File size too large. Maximum size is 10MB.' },
        { status: 400 }
      )
    }

    // Create unique filename
    const timestamp = Date.now()
    const randomString = Math.random().toString(36).substring(2, 15)
    const fileExtension = file.name.split('.').pop()?.toLowerCase()
    const fileName = `${timestamp}-${randomString}.${fileExtension}`

    // Create file path in storage
    const filePath = `sacred-places/${sacredPlaceId || 'general'}/${usageContext}/${fileName}`

    // Convert file to buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Upload to Supabase Storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('sacred-places-images')
      .upload(filePath, buffer, {
        contentType: file.type,
        duplex: 'half'
      })

    if (uploadError) {
      console.error('Storage upload error:', uploadError)
      return NextResponse.json(
        { error: 'Failed to upload image to storage: ' + uploadError.message },
        { status: 500 }
      )
    }

    // Get public URL
    const { data: publicUrlData } = supabase.storage
      .from('sacred-places-images')
      .getPublicUrl(filePath)

    const publicUrl = publicUrlData.publicUrl

    // Save media record to database if sacred place ID is provided
    if (sacredPlaceId) {
      const { data: mediaData, error: mediaError } = await supabase
        .from('hindu.sacred_place_media')
        .insert({
          sacred_place_id: sacredPlaceId,
          filename: fileName,
          original_name: file.name,
          file_url: publicUrl,
          file_type: file.type,
          file_size: file.size,
          alt_text: altText,
          caption: caption,
          usage_context: usageContext
        })
        .select()
        .single()

      if (mediaError) {
        console.error('Media record error:', mediaError)
        // Continue anyway, as the file was uploaded successfully
      }

      return NextResponse.json({
        success: true,
        message: 'Image uploaded successfully',
        data: {
          id: mediaData?.id,
          url: publicUrl,
          filename: fileName,
          original_name: file.name,
          file_size: file.size,
          file_type: file.type,
          usage_context: usageContext,
          alt_text: altText,
          caption: caption
        }
      })
    }

    // Return response without database record
    return NextResponse.json({
      success: true,
      message: 'Image uploaded successfully',
      data: {
        url: publicUrl,
        filename: fileName,
        original_name: file.name,
        file_size: file.size,
        file_type: file.type
      }
    })

  } catch (error: any) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { error: 'Internal server error: ' + error.message },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const sacredPlaceId = url.searchParams.get('sacred_place_id')
  const usageContext = url.searchParams.get('usage_context')

  try {
    if (!sacredPlaceId) {
      return NextResponse.json({
        error: 'sacred_place_id parameter is required'
      }, { status: 400 })
    }

    let query = supabase
      .from('hindu.sacred_place_media')
      .select('*')
      .eq('sacred_place_id', sacredPlaceId)

    if (usageContext) {
      query = query.eq('usage_context', usageContext)
    }

    const { data: media, error } = await query.order('created_at', { ascending: false })

    if (error) {
      throw error
    }

    return NextResponse.json({
      success: true,
      data: media || []
    })

  } catch (error: any) {
    console.error('Get media error:', error)
    return NextResponse.json(
      { error: 'Internal server error: ' + error.message },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const mediaId = searchParams.get('id')

    if (!mediaId) {
      return NextResponse.json(
        { error: 'Media ID is required' },
        { status: 400 }
      )
    }

    // Get media record to find file path
    const { data: media, error: fetchError } = await supabase
      .from('hindu.sacred_place_media')
      .select('*')
      .eq('id', mediaId)
      .single()

    if (fetchError || !media) {
      return NextResponse.json(
        { error: 'Media not found' },
        { status: 404 }
      )
    }

    // Extract file path from URL
    const urlParts = media.file_url.split('/')
    const bucketIndex = urlParts.findIndex((part: string) => part === 'sacred-places-images')
    const filePath = urlParts.slice(bucketIndex + 1).join('/')

    // Delete from storage
    const { error: deleteError } = await supabase.storage
      .from('sacred-places-images')
      .remove([filePath])

    if (deleteError) {
      console.error('Storage delete error:', deleteError)
    }

    // Delete from database
    const { error: dbDeleteError } = await supabase
      .from('hindu.sacred_place_media')
      .delete()
      .eq('id', mediaId)

    if (dbDeleteError) {
      throw dbDeleteError
    }

    return NextResponse.json({
      success: true,
      message: 'Image deleted successfully'
    })

  } catch (error: any) {
    console.error('Delete error:', error)
    return NextResponse.json(
      { error: 'Internal server error: ' + error.message },
      { status: 500 }
    )
  }
}