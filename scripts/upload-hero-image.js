const { createClient } = require('@supabase/supabase-js')
const fs = require('fs')
require('dotenv').config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

async function uploadImage() {
  try {
    console.log('Reading image file...')
    const imageBuffer = fs.readFileSync('/tmp/trimurti-hero.jpg')
    
    console.log('Uploading to Supabase Storage...')
    const { data, error } = await supabase.storage
      .from('website_images')
      .upload('hero-trimurti.jpg', imageBuffer, {
        cacheControl: '3600',
        upsert: true,
        contentType: 'image/jpeg'
      })

    if (error) {
      console.error('Error uploading image:', error)
      return
    }

    console.log('Image uploaded successfully:', data)
    
    // Get the public URL
    const { data: urlData } = supabase.storage
      .from('website_images')
      .getPublicUrl('hero-trimurti.jpg')
    
    console.log('Public URL:', urlData.publicUrl)
  } catch (err) {
    console.error('Error:', err.message)
  }
}

uploadImage()