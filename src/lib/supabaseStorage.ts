import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client with environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY in your .env.local file.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false, // Disable session persistence to avoid token issues
    autoRefreshToken: false, // Disable auto refresh to prevent token errors
  }
})

// Storage bucket configuration for PeacefulAnswers
export const STORAGE_CONFIG = {
  bucketName: 'peaceful-images',
  maxFileSize: 10 * 1024 * 1024, // 10MB
  allowedMimeTypes: [
    'image/jpeg',
    'image/jpg', 
    'image/png',
    'image/gif',
    'image/webp',
    'image/svg+xml'
  ],
  folders: {
    contentImages: 'content-images',
    generatedImages: 'generated-images',
    userUploads: 'user-uploads',
    thumbnails: 'thumbnails',
    featuredImages: 'featured-images',
    deityImages: 'deity-images',
    festivalImages: 'festival-images'
  }
}

interface UploadOptions {
  folder?: string
  fileName?: string
  contentType?: string
  cacheControl?: string
  upsert?: boolean
}

interface UploadResult {
  success: boolean
  publicUrl?: string
  filePath?: string
  error?: string
  metadata?: {
    size: number
    type: string
    lastModified: number
  }
}

class SupabaseStorageService {
  private bucketName: string

  constructor(bucketName: string = STORAGE_CONFIG.bucketName) {
    this.bucketName = bucketName
  }

  /**
   * Initialize storage bucket if it doesn't exist
   */
  async initializeBucket(): Promise<{ success: boolean; error?: string }> {
    try {
      // Check if bucket exists
      const { data: buckets, error: listError } = await supabase.storage.listBuckets()
      
      if (listError) {
        return { success: false, error: listError.message }
      }

      const bucketExists = buckets?.some(bucket => bucket.name === this.bucketName)
      
      if (!bucketExists) {
        // Create bucket if it doesn't exist
        const { error: createError } = await supabase.storage.createBucket(this.bucketName, {
          public: true,
          allowedMimeTypes: STORAGE_CONFIG.allowedMimeTypes,
          fileSizeLimit: STORAGE_CONFIG.maxFileSize
        })

        if (createError) {
          return { success: false, error: createError.message }
        }
      }

      return { success: true }
    } catch (error) {
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error during bucket initialization' 
      }
    }
  }

  /**
   * Upload file to Supabase storage
   */
  async uploadFile(
    file: File | Buffer, 
    options: UploadOptions = {}
  ): Promise<UploadResult> {
    try {
      // Validate file
      if (file instanceof File) {
        const validationResult = this.validateFile(file)
        if (!validationResult.success) {
          return { success: false, error: validationResult.error }
        }
      }

      // Initialize bucket if needed
      const initResult = await this.initializeBucket()
      if (!initResult.success) {
        return { success: false, error: `Bucket initialization failed: ${initResult.error}` }
      }

      // Generate file path
      const fileName = options.fileName || this.generateFileName(file)
      const folder = options.folder || STORAGE_CONFIG.folders.contentImages
      const filePath = `${folder}/${fileName}`

      // Upload file
      const { data, error } = await supabase.storage
        .from(this.bucketName)
        .upload(filePath, file, {
          contentType: options.contentType,
          cacheControl: options.cacheControl || '3600',
          upsert: options.upsert || false
        })

      if (error) {
        return { success: false, error: error.message }
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from(this.bucketName)
        .getPublicUrl(filePath)

      if (!urlData?.publicUrl) {
        return { success: false, error: 'Failed to get public URL' }
      }

      // Return success result
      return {
        success: true,
        publicUrl: urlData.publicUrl,
        filePath: data.path,
        metadata: file instanceof File ? {
          size: file.size,
          type: file.type,
          lastModified: file.lastModified
        } : undefined
      }

    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown upload error'
      }
    }
  }

  /**
   * Upload multiple files
   */
  async uploadFiles(
    files: File[], 
    options: UploadOptions = {}
  ): Promise<UploadResult[]> {
    const results: UploadResult[] = []
    
    for (const file of files) {
      const result = await this.uploadFile(file, options)
      results.push(result)
    }
    
    return results
  }

  /**
   * Delete file from storage
   */
  async deleteFile(filePath: string): Promise<{ success: boolean; error?: string }> {
    try {
      const { error } = await supabase.storage
        .from(this.bucketName)
        .remove([filePath])

      if (error) {
        return { success: false, error: error.message }
      }

      return { success: true }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown delete error'
      }
    }
  }

  /**
   * List files in a folder
   */
  async listFiles(
    folder: string = '', 
    options: { limit?: number; offset?: number } = {}
  ): Promise<{ success: boolean; files?: any[]; error?: string }> {
    try {
      const { data, error } = await supabase.storage
        .from(this.bucketName)
        .list(folder, {
          limit: options.limit || 100,
          offset: options.offset || 0,
          sortBy: { column: 'created_at', order: 'desc' }
        })

      if (error) {
        return { success: false, error: error.message }
      }

      return { success: true, files: data || [] }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown list error'
      }
    }
  }

  /**
   * Get file metadata
   */
  async getFileMetadata(filePath: string): Promise<{
    success: boolean
    metadata?: any
    error?: string
  }> {
    try {
      const { data, error } = await supabase.storage
        .from(this.bucketName)
        .download(filePath)

      if (error) {
        return { success: false, error: error.message }
      }

      const blob = data as Blob
      
      return {
        success: true,
        metadata: {
          size: blob.size,
          type: blob.type,
          sizeFormatted: this.formatFileSize(blob.size)
        }
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Metadata extraction failed'
      }
    }
  }

  /**
   * Get public URL for a file
   */
  getPublicUrl(filePath: string): string {
    const { data } = supabase.storage
      .from(this.bucketName)
      .getPublicUrl(filePath)
    
    return data.publicUrl
  }

  /**
   * Create signed URL for temporary access
   */
  async createSignedUrl(
    filePath: string, 
    expiresIn: number = 3600
  ): Promise<{ success: boolean; signedUrl?: string; error?: string }> {
    try {
      const { data, error } = await supabase.storage
        .from(this.bucketName)
        .createSignedUrl(filePath, expiresIn)

      if (error) {
        return { success: false, error: error.message }
      }

      return { success: true, signedUrl: data?.signedUrl }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Signed URL creation failed'
      }
    }
  }

  /**
   * Get storage statistics
   */
  async getStorageStats(): Promise<{
    success: boolean
    stats?: {
      totalFiles: number
      totalSize: number
      sizeFormatted: string
      bucketInfo: any
    }
    error?: string
  }> {
    try {
      // Get bucket info
      const { data: buckets, error: bucketError } = await supabase.storage.listBuckets()
      
      if (bucketError) {
        return { success: false, error: bucketError.message }
      }

      const bucket = buckets?.find(b => b.name === this.bucketName)
      
      // Get all files
      const { data: files, error: filesError } = await supabase.storage
        .from(this.bucketName)
        .list('', { limit: 1000 })

      if (filesError) {
        return { success: false, error: filesError.message }
      }

      const totalFiles = files?.length || 0
      const totalSize = files?.reduce((sum, file) => sum + (file.metadata?.size || 0), 0) || 0

      return {
        success: true,
        stats: {
          totalFiles,
          totalSize,
          sizeFormatted: this.formatFileSize(totalSize),
          bucketInfo: bucket
        }
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Stats retrieval failed'
      }
    }
  }

  /**
   * Validate file before upload
   */
  private validateFile(file: File): { success: boolean; error?: string } {
    // Check file size
    if (file.size > STORAGE_CONFIG.maxFileSize) {
      return {
        success: false,
        error: `File size ${this.formatFileSize(file.size)} exceeds maximum allowed size of ${this.formatFileSize(STORAGE_CONFIG.maxFileSize)}`
      }
    }

    // Check MIME type
    if (!STORAGE_CONFIG.allowedMimeTypes.includes(file.type)) {
      return {
        success: false,
        error: `File type ${file.type} is not allowed. Allowed types: ${STORAGE_CONFIG.allowedMimeTypes.join(', ')}`
      }
    }

    return { success: true }
  }

  /**
   * Generate unique filename
   */
  private generateFileName(file: File | Buffer): string {
    const timestamp = Date.now()
    const randomString = Math.random().toString(36).substring(2, 15)
    
    if (file instanceof File) {
      const extension = file.name.split('.').pop() || 'jpg'
      const baseName = file.name.replace(/\.[^/.]+$/, '')
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '-')
        .substring(0, 30)
      
      return `${baseName}-${timestamp}-${randomString}.${extension}`
    }
    
    // For Buffer (generated images)
    return `generated-${timestamp}-${randomString}.jpg`
  }

  /**
   * Format file size for display
   */
  private formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes'
    
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }
}

// Export singleton instance
export const supabaseStorage = new SupabaseStorageService()

// Export helper functions
export async function uploadImageToSupabase(
  file: File,
  folder: string = STORAGE_CONFIG.folders.contentImages
): Promise<UploadResult> {
  return supabaseStorage.uploadFile(file, { folder })
}

export async function deleteImageFromSupabase(filePath: string): Promise<{ success: boolean; error?: string }> {
  return supabaseStorage.deleteFile(filePath)
}

export function getSupabaseImageUrl(filePath: string): string {
  return supabaseStorage.getPublicUrl(filePath)
}

// Initialize bucket on module load (optional)
export async function initializeSupabaseStorage(): Promise<{ success: boolean; error?: string }> {
  return supabaseStorage.initializeBucket()
}

export default supabaseStorage