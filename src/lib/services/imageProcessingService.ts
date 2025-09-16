import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

interface ImageProcessingOptions {
  quality?: number
  format?: 'webp' | 'jpeg' | 'png'
  width?: number
  height?: number
  fit?: 'cover' | 'contain' | 'fill'
  watermark?: boolean
}

interface ProcessedImageResult {
  success: boolean
  publicUrl?: string
  error?: string
  metadata?: {
    originalSize: number
    processedSize: number
    compression: number
    format: string
    dimensions: {
      width: number
      height: number
    }
  }
}

class ImageProcessingService {
  private bucketName = 'peaceful-images'

  async processAndUploadImage(
    imageBuffer: Buffer,
    fileName: string,
    options: ImageProcessingOptions = {}
  ): Promise<ProcessedImageResult> {
    try {
      // Set default options optimized for spiritual content
      const defaultOptions: ImageProcessingOptions = {
        quality: 85,
        format: 'webp',
        watermark: false,
        fit: 'cover'
      }

      const finalOptions = { ...defaultOptions, ...options }
      
      // Process the image
      const processedBuffer = await this.processImage(imageBuffer, finalOptions)
      
      // Generate optimized filename
      const optimizedFileName = this.generateOptimizedFileName(fileName, finalOptions.format!)
      const filePath = `processed/${optimizedFileName}`

      // Upload to Supabase storage
      const { data, error } = await supabase.storage
        .from(this.bucketName)
        .upload(filePath, processedBuffer, {
          contentType: this.getContentType(finalOptions.format!),
          cacheControl: '3600',
          upsert: false
        })

      if (error) {
        console.error('Supabase upload error:', error)
        return {
          success: false,
          error: error.message
        }
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from(this.bucketName)
        .getPublicUrl(filePath)

      if (!urlData?.publicUrl) {
        return {
          success: false,
          error: 'Failed to get public URL'
        }
      }

      // Calculate compression ratio
      const compressionRatio = ((imageBuffer.length - processedBuffer.length) / imageBuffer.length) * 100

      return {
        success: true,
        publicUrl: urlData.publicUrl,
        metadata: {
          originalSize: imageBuffer.length,
          processedSize: processedBuffer.length,
          compression: Math.round(compressionRatio),
          format: finalOptions.format!,
          dimensions: await this.getImageDimensions(processedBuffer)
        }
      }

    } catch (error) {
      console.error('Image processing error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown processing error'
      }
    }
  }

  private async processImage(buffer: Buffer, options: ImageProcessingOptions): Promise<Buffer> {
    // For now, return the original buffer
    // In a production environment, you would use a library like Sharp for processing
    // Example with Sharp (commented out as it requires installation):
    /*
    const sharp = require('sharp');
    
    let image = sharp(buffer);
    
    // Resize if dimensions provided
    if (options.width || options.height) {
      image = image.resize(options.width, options.height, {
        fit: options.fit || 'cover',
        withoutEnlargement: true
      });
    }
    
    // Set quality and format
    if (options.format === 'webp') {
      image = image.webp({ quality: options.quality || 85 });
    } else if (options.format === 'jpeg') {
      image = image.jpeg({ quality: options.quality || 85 });
    } else if (options.format === 'png') {
      image = image.png({ quality: options.quality || 85 });
    }
    
    // Add watermark if requested
    if (options.watermark) {
      image = image.composite([{
        input: await this.createWatermark(),
        gravity: 'southeast'
      }]);
    }
    
    return await image.toBuffer();
    */
    
    return buffer
  }

  private generateOptimizedFileName(originalFileName: string, format: string): string {
    const timestamp = Date.now()
    const nameWithoutExt = originalFileName.replace(/\.[^/.]+$/, '')
    const sanitizedName = nameWithoutExt
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, '-')
      .replace(/-+/g, '-')
      .substring(0, 50)
    
    return `${sanitizedName}-${timestamp}.${format}`
  }

  private getContentType(format: string): string {
    const mimeTypes: { [key: string]: string } = {
      'webp': 'image/webp',
      'jpeg': 'image/jpeg',
      'png': 'image/png'
    }
    
    return mimeTypes[format] || 'image/jpeg'
  }

  private async getImageDimensions(buffer: Buffer): Promise<{ width: number; height: number }> {
    // This is a simple implementation - in production you'd use a proper image library
    // For now, return default dimensions
    return { width: 1024, height: 768 }
  }

  async optimizeForWeb(
    imageBuffer: Buffer,
    fileName: string,
    targetSizeKB?: number
  ): Promise<ProcessedImageResult> {
    const options: ImageProcessingOptions = {
      format: 'webp',
      quality: 85,
      fit: 'cover'
    }

    // If target size specified, adjust quality
    if (targetSizeKB) {
      const currentSizeKB = imageBuffer.length / 1024
      if (currentSizeKB > targetSizeKB) {
        // Estimate quality needed (simplified calculation)
        const ratio = targetSizeKB / currentSizeKB
        options.quality = Math.max(50, Math.min(95, Math.round(85 * ratio)))
      }
    }

    return this.processAndUploadImage(imageBuffer, fileName, options)
  }

  async createThumbnail(
    imageBuffer: Buffer,
    fileName: string,
    size: { width: number; height: number } = { width: 300, height: 300 }
  ): Promise<ProcessedImageResult> {
    const options: ImageProcessingOptions = {
      format: 'webp',
      quality: 80,
      width: size.width,
      height: size.height,
      fit: 'cover'
    }

    const thumbnailFileName = fileName.replace(/\.[^/.]+$/, '-thumb$&')
    return this.processAndUploadImage(imageBuffer, thumbnailFileName, options)
  }

  async batchProcess(
    images: { buffer: Buffer; fileName: string }[],
    options: ImageProcessingOptions = {}
  ): Promise<ProcessedImageResult[]> {
    const results: ProcessedImageResult[] = []
    
    for (const image of images) {
      try {
        const result = await this.processAndUploadImage(image.buffer, image.fileName, options)
        results.push(result)
      } catch (error) {
        results.push({
          success: false,
          error: error instanceof Error ? error.message : 'Processing failed'
        })
      }
    }
    
    return results
  }

  async deleteImage(fileName: string): Promise<{ success: boolean; error?: string }> {
    try {
      const { error } = await supabase.storage
        .from(this.bucketName)
        .remove([fileName])

      if (error) {
        return {
          success: false,
          error: error.message
        }
      }

      return { success: true }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Delete failed'
      }
    }
  }

  async listImages(folder?: string): Promise<{ success: boolean; files?: any[]; error?: string }> {
    try {
      const { data, error } = await supabase.storage
        .from(this.bucketName)
        .list(folder || '', {
          limit: 100,
          sortBy: { column: 'created_at', order: 'desc' }
        })

      if (error) {
        return {
          success: false,
          error: error.message
        }
      }

      return {
        success: true,
        files: data || []
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'List failed'
      }
    }
  }

  async getImageMetadata(filePath: string): Promise<{ 
    success: boolean; 
    metadata?: any; 
    error?: string 
  }> {
    try {
      const { data, error } = await supabase.storage
        .from(this.bucketName)
        .download(filePath)

      if (error) {
        return {
          success: false,
          error: error.message
        }
      }

      const buffer = Buffer.from(await data.arrayBuffer())
      
      return {
        success: true,
        metadata: {
          size: buffer.length,
          sizeKB: Math.round(buffer.length / 1024),
          sizeMB: Math.round(buffer.length / (1024 * 1024) * 100) / 100,
          type: data.type,
          dimensions: await this.getImageDimensions(buffer)
        }
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Metadata extraction failed'
      }
    }
  }

  // Utility method to check storage quota
  async getStorageInfo(): Promise<{
    success: boolean
    info?: {
      bucketSize: number
      fileCount: number
      averageFileSize: number
    }
    error?: string
  }> {
    try {
      const { data, error } = await supabase.storage
        .from(this.bucketName)
        .list('', { limit: 1000 })

      if (error) {
        return {
          success: false,
          error: error.message
        }
      }

      const files = data || []
      const totalSize = files.reduce((sum, file) => sum + (file.metadata?.size || 0), 0)
      const averageSize = files.length > 0 ? totalSize / files.length : 0

      return {
        success: true,
        info: {
          bucketSize: totalSize,
          fileCount: files.length,
          averageFileSize: Math.round(averageSize)
        }
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Storage info failed'
      }
    }
  }
}

export default ImageProcessingService