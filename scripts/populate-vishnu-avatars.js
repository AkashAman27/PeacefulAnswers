/**
 * Script to populate Vishnu's avatars in the database
 * Run this script to add avatar data to test the new avatar management functionality
 */

import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load environment variables from the project root
dotenv.config({ path: path.join(__dirname, '../.env.local') })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

const vishnuAvatars = [
  {
    name: 'Matsya',
    description: 'The fish avatar who saved humanity and the Vedas from the great deluge.',
    significance: 'Represents salvation and preservation during cosmic dissolution. Matsya rescued Manu (the first man) and all species from the universal flood, ensuring continuity of life and knowledge.',
    incarnation_number: 1,
    era: 'Satya Yuga'
  },
  {
    name: 'Kurma',
    description: 'The tortoise avatar who supported Mount Mandara during the churning of the ocean.',
    significance: 'Symbolizes patience, steadiness, and cosmic support. Kurma provided the stable foundation needed for the gods and demons to churn the ocean of milk to obtain the nectar of immortality.',
    incarnation_number: 2,
    era: 'Satya Yuga'
  },
  {
    name: 'Varaha',
    description: 'The boar avatar who rescued the Earth from the demon Hiranyaksha.',
    significance: 'Represents the power to lift and restore. Varaha dove into the cosmic waters to rescue the Earth, which had been dragged to the bottom of the universe by the demon, restoring balance to creation.',
    incarnation_number: 3,
    era: 'Satya Yuga'
  },
  {
    name: 'Narasimha',
    description: 'The half-man, half-lion avatar who destroyed the demon Hiranyakashipu.',
    significance: 'Embodies divine justice and protection of devotees. Narasimha appeared to protect Prahlada and demonstrated that God will manifest in any form necessary to protect righteousness and punish evil.',
    incarnation_number: 4,
    era: 'Satya Yuga'
  },
  {
    name: 'Vamana',
    description: 'The dwarf Brahmin avatar who reclaimed the three worlds from King Bali.',
    significance: 'Teaches humility and the power of dharma over material wealth. Despite appearing as a small Brahmin boy, Vamana\'s cosmic form encompassed the entire universe, showing that divine power transcends physical appearance.',
    incarnation_number: 5,
    era: 'Treta Yuga'
  },
  {
    name: 'Parashurama',
    description: 'The warrior-sage avatar who wielded an axe to destroy corrupt Kshatriya rulers.',
    significance: 'Represents the balance between spiritual wisdom and righteous warfare. Parashurama cleansed the Earth of corrupt rulers twenty-one times, establishing that spiritual power must sometimes manifest as divine wrath.',
    incarnation_number: 6,
    era: 'Treta Yuga'
  },
  {
    name: 'Rama',
    description: 'The prince of Ayodhya, hero of the Ramayana, and embodiment of dharma.',
    significance: 'The ideal of righteousness, duty, and moral conduct. Rama\'s life demonstrates perfect adherence to dharma even in the face of personal sacrifice, making him the model for righteous living and leadership.',
    incarnation_number: 7,
    era: 'Treta Yuga'
  },
  {
    name: 'Krishna',
    description: 'The divine cowherd, teacher of the Bhagavad Gita, and complete incarnation.',
    significance: 'The most complete manifestation of divinity, combining love, wisdom, and cosmic power. Krishna\'s teachings in the Bhagavad Gita provide the philosophical foundation of Hindu dharma and the path to liberation.',
    incarnation_number: 8,
    era: 'Dwapara Yuga'
  },
  {
    name: 'Buddha',
    description: 'The enlightened teacher who established the path of non-violence and compassion.',
    significance: 'Represents compassion, non-violence, and the middle path. Buddha\'s teachings emphasized liberation through understanding suffering and the impermanence of worldly existence.',
    incarnation_number: 9,
    era: 'Kali Yuga'
  },
  {
    name: 'Kalki',
    description: 'The future avatar who will appear to end the Kali Yuga and restore dharma.',
    significance: 'The promise of cosmic renewal and the triumph of righteousness. Kalki will appear at the end of the current age to destroy evil and establish a new golden age of truth and dharma.',
    incarnation_number: 10,
    era: 'End of Kali Yuga'
  }
]

async function populateVishnuAvatars() {
  try {
    // First, find Vishnu in the database
    const { data: vishnu, error: findError } = await supabase
      .from('deities')
      .select('id, name, avatars_or_forms')
      .ilike('name', '%vishnu%')
      .single()

    if (findError && findError.code !== 'PGRST116') {
      throw findError
    }

    if (!vishnu) {
      console.log('Vishnu not found in database. Creating entry...')
      console.log('Creating a basic Vishnu entry...')
      const { data: newVishnu, error: createError } = await supabase
        .from('deities')
        .insert({
          name: 'Vishnu',
          sanskrit_name: 'विष्णु',
          slug: 'vishnu',
          title: 'The Preserver',
          subtitle: 'The second deity of the Hindu Trinity',
          description: 'Vishnu is one of the principal deities of Hinduism and the supreme being in Vaishnavism. He is the preserver and protector of the universe.',
          mythology_story: 'Vishnu is known for his ten avatars (Dashavatara) that he takes to restore cosmic order whenever it is threatened.',
          status: 'draft',
          category_id: (await supabase.from('deity_categories').select('id').eq('name', 'Trimurti').single())?.data?.id || null,
          avatars_or_forms: vishnuAvatars,
          divine_attributes: [],
          mantras: [],
          festivals: [],
          sacred_places: [],
          consorts: ['Lakshmi'],
          parents: [],
          children: [],
          avatar_of: '',
          form_of: 'Supreme Brahman',
          era: 'Eternal',
          yuga: 'All Yugas',
          meta_title: 'Vishnu - The Preserver',
          meta_description: 'Learn about Vishnu, the preserver deity of the Hindu Trinity, known for his ten avatars including Rama and Krishna.',
          is_featured: true
        })
        .select()
        .single()

      if (createError) throw createError
      console.log('Created Vishnu with avatars:', newVishnu)
    } else {
      console.log('Found Vishnu:', vishnu.name)
      
      // Update Vishnu with avatar data
      const existingAvatars = Array.isArray(vishnu.avatars_or_forms) ? vishnu.avatars_or_forms : []
      const mergedAvatars = [...existingAvatars, ...vishnuAvatars]
      
      // Remove duplicates based on name
      const uniqueAvatars = mergedAvatars.filter((avatar, index, self) => 
        index === self.findIndex(a => a.name === avatar.name)
      )

      const { data: updatedVishnu, error: updateError } = await supabase
        .from('deities')
        .update({
          avatars_or_forms: uniqueAvatars
        })
        .eq('id', vishnu.id)
        .select()
        .single()

      if (updateError) throw updateError
      
      console.log('Updated Vishnu with avatars. Total avatars:', uniqueAvatars.length)
      console.log('Avatar names:', uniqueAvatars.map(a => a.name).join(', '))
    }

    console.log('\n✅ Successfully populated Vishnu avatars!')
    console.log('You can now test the avatar management functionality in the admin panel.')

  } catch (error) {
    console.error('Error populating avatars:', error)
  }
}

populateVishnuAvatars()