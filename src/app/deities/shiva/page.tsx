import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Eye, 
  Flame, 
  Mountain, 
  Star, 
  Calendar,
  Book,
  ChevronRight,
  Zap,
  Flower,
  Music,
  Crown,
  Shield,
  ArrowLeft
} from 'lucide-react'
import { hinduSupabase } from '@/lib/supabase'

export const metadata: Metadata = {
  title: 'Shiva - The Supreme Transformer | Hindu Deity Guide | PeacefulAnswers',
  description: 'Discover the sacred teachings of Shiva, the Supreme Transformer and cosmic dancer. Learn about Nataraja, stories, mantras, festivals, and spiritual significance.',
  keywords: 'Shiva, Mahadeva, destroyer, Nataraja, Hindu deity, cosmic dance, transformation, meditation',
  openGraph: {
    title: 'Shiva - The Supreme Transformer | Hindu Deity Guide',
    description: 'The cosmic dancer and transformer who dissolves the old to create anew.',
    type: 'website',
  }
}

// Function to get Shiva data from database
async function getShiva() {
  try {
    const { data, error } = await hinduSupabase
      .from('deities')
      .select('*')
      .eq('name', 'Shiva')
      .single()
    
    if (error) {
      console.error('Error fetching Shiva:', error)
      return null
    }
    
    return data
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

const shivaForms = [
  {
    id: 'nataraja',
    name: 'Nataraja',
    sanskrit: 'नटराज',
    title: 'Lord of the Cosmic Dance',
    description: 'The divine dancer who performs the eternal cycle of creation, preservation, and destruction',
    color: 'from-orange-600 to-red-600',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
  },
  {
    id: 'bhairava',
    name: 'Bhairava',
    sanskrit: 'भैरव',
    title: 'The Fearsome Guardian',
    description: 'The fierce protector who destroys ignorance and guards the devotees from evil',
    color: 'from-red-600 to-pink-600',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
  },
  {
    id: 'ardhanarishvara',
    name: 'Ardhanarishvara',
    sanskrit: 'अर्धनारीश्वर',
    title: 'The Half-Male, Half-Female',
    description: 'The unified form of Shiva and Parvati representing the inseparability of masculine and feminine',
    color: 'from-purple-600 to-pink-600',
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=400&h=300&fit=crop'
  },
  {
    id: 'adiyogi',
    name: 'Adiyogi',
    sanskrit: 'आदियोगी',
    title: 'The First Yogi',
    description: 'The original guru of yoga and meditation, the supreme teacher of spiritual wisdom',
    color: 'from-blue-600 to-indigo-600',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop'
  },
  {
    id: 'neelkanth',
    name: 'Neelkanth',
    sanskrit: 'नीलकण्ठ',
    title: 'The Blue-Throated One',
    description: 'The compassionate savior who consumed the cosmic poison to protect the universe',
    color: 'from-blue-600 to-cyan-600',
    image: 'https://images.unsplash.com/photo-1578528011634-50c02b2e6ce6?w=400&h=300&fit=crop'
  },
  {
    id: 'dakshinamurthy',
    name: 'Dakshinamurthy',
    sanskrit: 'दक्षिणामूर्ति',
    title: 'The Supreme Teacher',
    description: 'The divine guru who imparts highest knowledge through silent instruction',
    color: 'from-green-600 to-teal-600',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop'
  }
]

const shivaSymbols = [
  {
    name: 'Third Eye',
    sanskrit: 'त्रिनेत्र (Trinetra)',
    symbol: Eye,
    meaning: 'Spiritual insight and higher consciousness',
    significance: 'Power to destroy ignorance and see beyond physical reality'
  },
  {
    name: 'Trident',
    sanskrit: 'त्रिशूल (Trishula)',
    symbol: Zap,
    meaning: 'Three cosmic functions and time dimensions',
    significance: 'Creation, preservation, destruction; past, present, future'
  },
  {
    name: 'Damaru',
    sanskrit: 'डमरू (Damaru)',
    symbol: Music,
    meaning: 'The primordial sound of creation',
    significance: 'Rhythm of the cosmos and cyclical nature of time'
  },
  {
    name: 'Sacred Ash',
    sanskrit: 'विभूति (Vibhuti)',
    symbol: Mountain,
    meaning: 'Detachment from material world',
    significance: 'Ultimate truth of impermanence and spiritual purity'
  },
  {
    name: 'Crescent Moon',
    sanskrit: 'चन्द्र (Chandra)',
    symbol: Star,
    meaning: 'Control over mind and emotions',
    significance: 'Continuous receptivity to divine knowledge'
  },
  {
    name: 'Ganga River',
    sanskrit: 'गंगा (Ganga)',
    symbol: Flower,
    meaning: 'Divine purity and grace',
    significance: 'Gradual descent of spiritual wisdom to humanity'
  }
]

export default async function ShivaPage() {
  let deity = await getShiva()
  
  // Comprehensive fallback data - merge with database data or use as complete fallback
  const fallbackData = {
      name: 'Shiva',
      sanskrit_name: 'महादेव शिव',
      title: 'The Supreme Lord of Transformation',
      description: 'The Supreme Lord of paradoxes - the fierce destroyer and benevolent protector, the detached ascetic and devoted householder, the cosmic dancer and eternal meditator. Known as Mahadeva (Great God), Neelkanth (Blue-throated), and Nataraja (King of Dance), Shiva represents the dynamic aspect of consciousness.',
      image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      story: 'Lord Shiva embodies the ultimate paradox of existence, representing the dynamic aspect of pure consciousness. From his origins as the fierce Vedic storm god Rudra to his evolution as the supreme deity of transformation, Shiva encompasses all dualities within his divine nature. He is simultaneously the fierce destroyer who brings cosmic cycles to an end and the compassionate protector who saves the universe from destruction. As the master ascetic (Mahayogi) dwelling in eternal meditation on the sacred Mount Kailash, he represents perfect detachment from worldly concerns. Yet as a devoted husband to Parvati and loving father to Ganesha and Kartikeya, he exemplifies the ideal householder. This divine paradox teaches us that true spiritual realization comes not from rejecting one aspect of existence for another, but from integrating all aspects into a unified whole.',
      sacred_iconography: [
        {
          name: 'Third Eye',
          sanskrit: 'त्रिनेत्र (Trinetra)',
          meaning: 'Spiritual insight and higher consciousness',
          significance: 'Power to destroy ignorance and see beyond physical reality'
        },
        {
          name: 'Trident',
          sanskrit: 'त्रिशूल (Trishula)', 
          meaning: 'Three cosmic functions and time dimensions',
          significance: 'Creation, preservation, destruction; past, present, future'
        },
        {
          name: 'Damaru',
          sanskrit: 'डमरू (Damaru)',
          meaning: 'The primordial sound of creation',
          significance: 'Rhythm of the cosmos and cyclical nature of time'
        }
      ],
      sacred_stories: [
        {
          title: 'The Story of Neelkanth - The Blue-Throated Savior',
          content: 'During the cosmic churning of the ocean (Samudra Manthan), when gods and demons sought the nectar of immortality, a deadly poison called Halahala emerged first. This poison threatened to destroy the entire universe. Seeing creation in peril, Lord Shiva, in his infinite compassion, consumed the poison to save all beings. Goddess Parvati, fearing for her beloved husband, quickly pressed his throat to prevent the poison from descending to his stomach. The poison remained in Shiva\'s throat, turning it blue forever. Thus, Shiva became known as Neelkanth, the blue-throated one, symbolizing his willingness to absorb the world\'s negativity to protect creation.'
        },
        {
          title: 'Shiva as Nataraja - The Cosmic Dancer',
          content: 'In the golden hall of Chidambaram, Shiva performs his eternal cosmic dance called Tandava. This divine dance represents the five cosmic activities: creation (Srishti), preservation (Sthiti), destruction (Samhara), illusion (Tirobhava), and grace (Anugraha). Dancing on the demon Apasmara (ignorance), Shiva\'s dance maintains the rhythm of the universe. His four arms hold the damaru (drum of creation), fire (element of destruction), and display mudras of fearlessness and blessing. The ring of fire surrounding him represents the eternal cycle of time and the boundary of the cosmos.'
        },
        {
          title: 'The Marriage of Shiva and Parvati',
          content: 'When Sati immolated herself in her father Daksha\'s sacrifice, Shiva withdrew into deep meditation, causing imbalance in the cosmos. Sati was reborn as Parvati, daughter of the mountain king Himavan. Through years of intense penance and devotion, Parvati won Shiva\'s heart. Their divine marriage represents the perfect union of consciousness (Shiva) and energy (Shakti), Purusha and Prakriti, the static and dynamic aspects of existence. This union is essential for the continuation of creation and the cosmic order.'
        },
        {
          title: 'Shiva and the Ganga - The Descent of the Holy River',
          content: 'When King Bhagiratha performed severe penance to bring the celestial river Ganga to earth to purify his ancestors\' ashes, the gods agreed, but worried about the devastating force of Ganga\'s descent. Shiva agreed to catch the mighty river in his matted locks (jata) to break her fall. For years, Ganga remained entangled in Shiva\'s hair, until Bhagiratha\'s continued prayers convinced Shiva to release her gently onto the earth. Thus, the sacred Ganges flows from Shiva\'s hair, carrying his blessings and purifying power to humanity.'
        },
        {
          title: 'The Birth of Ganesha - The Devoted Son',
          content: 'When Parvati created Ganesha from the sandalwood paste of her body to guard her privacy while bathing, the child faithfully performed his duty. When Shiva returned and was denied entry by this unknown boy, an enraged battle ensued, resulting in Ganesha\'s beheading. Seeing Parvati\'s grief, Shiva immediately sent his ganas to bring the head of the first creature they encountered - an elephant. Shiva restored Ganesha\'s life with the elephant head and declared him the remover of obstacles and the lord of beginnings, to be worshipped before all other deities.'
        },
        {
          title: 'The Destruction of Tripura - The Cosmic Archer',
          content: 'Three demon brothers, granted invincible cities (Tripura) by Brahma, began terrorizing the universe. These cities could only be destroyed by a single arrow shot by one who had never known defeat. Shiva, as Tripurantaka, mounted a cosmic chariot with Brahma as charioteer, Vishnu as the arrow, and the Meru mountain as his bow. At the precise moment when the three cities aligned, Shiva released the cosmic arrow, destroying the demon cities and restoring cosmic balance. This legend symbolizes the destruction of ego, desire, and ignorance (the three cities of the mind).'
        },
        {
          title: 'Shiva as Bhairava - The Guardian of Time',
          content: 'When Brahma claimed superiority over Vishnu and grew a fifth head to look down upon him, Shiva manifested as the terrible Bhairava and severed Brahma\'s fifth head with his fingernail. As punishment for this brahminicide, the head stuck to Bhairava\'s hand, and he was condemned to wander as a beggar until reaching Varanasi. This form represents Shiva as Kala-Bhairava, the guardian of time, and teaches that even divine beings must face consequences for their actions. Bhairava is also the fierce guardian of Shiva temples and protector of devotees.'
        },
        {
          title: 'The Lingam of Light - Shiva\'s Infinite Nature',
          content: 'When Brahma and Vishnu argued about their supremacy, Shiva appeared as an infinite pillar of light (Jyotirlinga) stretching beyond the cosmos. Brahma, taking the form of a swan, flew upward to find its top, while Vishnu, as a boar, dug downward to find its base. Both failed after eons of searching. Vishnu humbly accepted defeat, but Brahma falsely claimed to have found the pillar\'s end. Shiva appeared and cursed Brahma to have no temples, while blessing Vishnu for his honesty. The twelve Jyotirlingas across India commemorate this manifestation of Shiva\'s infinite, formless nature.'
        }
      ],
      divine_symbolism: [
        {
          aspect: 'Cosmic Transformer',
          meaning: 'As the Destroyer in the Trinity, Shiva dissolves the old to make way for new creation, representing the necessary force of change and transformation in the universe.'
        },
        {
          aspect: 'Adiyogi - First Guru', 
          meaning: 'As the original yogi, Shiva established the science of yoga and meditation, providing humanity with tools for spiritual evolution and self-realization.'
        },
        {
          aspect: 'Compassionate Protector',
          meaning: 'His act of consuming the cosmic poison demonstrates ultimate compassion, absorbing the world\'s negativity to protect all of creation from destruction.'
        }
      ],
      festivals: [
        {
          name: 'Maha Shivaratri',
          date: 'Phalguna month (February-March)',
          description: 'The Great Night of Shiva - The most sacred festival commemorating Shiva\'s marriage to Parvati and his act of consuming the cosmic poison. Devotees observe night-long vigils and fast.'
        },
        {
          name: 'Pradosh Vrat',
          date: 'Bi-monthly observance during twilight hours',
          description: 'Sacred time when Shiva and Parvati\'s divine energy is at its peak, ideal for seeking blessings and spiritual growth.'
        },
        {
          name: 'Sawan Maas',
          date: 'Holy month of Shravan (July-August)',
          description: 'Entire month dedicated to Shiva worship, with special significance given to Mondays when devotees offer prayers and perform abhishekam.'
        }
      ],
      temples: [
        {
          name: 'Mount Kailash, Tibet',
          significance: 'The eternal abode of Shiva and Parvati, considered the spiritual center of the universe and the ultimate pilgrimage destination.'
        },
        {
          name: 'Twelve Jyotirlingas',
          significance: 'Sacred temples across India where Shiva appeared as pillars of light, including Somnath, Kedarnath, Varanasi, and Rameshwaram.'
        },
        {
          name: 'Chidambaram, Tamil Nadu',
          significance: 'The cosmic dance hall where Shiva performs as Nataraja, representing the heart of the universe and divine consciousness.'
        }
      ],
      mantras: [
        {
          sanskrit: 'ॐ नमः शिवाय',
          transliteration: 'Om Namah Shivaya',
          meaning: 'I bow to Shiva',
          benefits: 'The most sacred mantra of Shiva, invoking his divine blessings and protection'
        },
        {
          sanskrit: 'महामृत्युंजय मंत्र',
          transliteration: 'Maha Mrityunjaya Mantra',
          meaning: 'Victory over death',
          benefits: 'Powerful healing mantra that conquers death and grants longevity and health'
        }
      ],
      essential_facts: [
        {
          fact: 'Shiva is one of the principal deities of Hinduism, part of the holy trinity (Trimurti)'
        },
        {
          fact: 'Known by 1008 names, including Mahadeva, Nataraja, Neelkanth, and Bholenath'
        },
        {
          fact: 'His cosmic dance (Tandava) represents the eternal cycle of creation and destruction'
        },
        {
          fact: 'Mount Kailash is considered his eternal abode with consort Parvati'
        }
      ],
      youtube_videos: {
        story: 'dQw4w9WgXcQ',
        sacred_iconography: 'dQw4w9WgXcQ',
        divine_symbolism: 'dQw4w9WgXcQ'
      }
    } as any
  
  // Merge database data with fallback data, prioritizing database data when available
  if (deity) {
    deity = {
      ...fallbackData,
      ...deity,
      // Ensure arrays have fallback values if empty
      sacred_iconography: deity.sacred_iconography?.length ? deity.sacred_iconography : fallbackData.sacred_iconography,
      sacred_stories: deity.sacred_stories?.length ? deity.sacred_stories : fallbackData.sacred_stories,
      divine_symbolism: deity.divine_symbolism?.length ? deity.divine_symbolism : fallbackData.divine_symbolism,
      festivals: deity.festivals?.length ? deity.festivals : fallbackData.festivals,
      temples: deity.temples?.length ? deity.temples : fallbackData.temples,
      mantras: deity.mantras?.length ? deity.mantras : fallbackData.mantras,
      essential_facts: deity.essential_facts?.length ? deity.essential_facts : fallbackData.essential_facts,
      // Use fallback story if database story is null/empty
      story: deity.story || fallbackData.story,
      // Use fallback videos if database videos are empty
      youtube_videos: deity.youtube_videos && Object.keys(deity.youtube_videos).length ? deity.youtube_videos : fallbackData.youtube_videos
    }
  } else {
    // If no database data at all, use complete fallback
    deity = fallbackData
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/deities" 
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Deities
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-gray-900 animate-[slideInFromLeft_1s_ease-out]">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 text-white">
                <Flame className="w-4 h-4 mr-2 animate-pulse" />
                <span className="text-sm font-medium">Mahadeva - The Great God</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white font-sanskrit">
                {deity.sanskrit_name || 'महादेव शिव'}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-200">
                {deity.name || 'Lord Shiva'}
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed mb-8">
                {deity.description || deity.title || 'The Supreme Lord of Transformation'}
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="relative animate-[slideInFromRight_1s_ease-out]">
              <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                <Image
                  src={deity.image_url || 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop'}
                  alt={deity.name || 'Lord Shiva'}
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"></div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Story Section */}
        {deity.story && (
          <section className="animate-fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Story</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {deity.story}
                </p>
              </div>
              <div className="relative">
                {deity.youtube_videos?.story ? (
                  <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                    <iframe
                      src={`https://www.youtube.com/embed/${deity.youtube_videos.story}`}
                      title="Story Video"
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                    <p className="text-gray-500">Video content coming soon</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Sacred Iconography Section */}
        {deity.sacred_iconography && deity.sacred_iconography.length > 0 && (
          <section className="animate-fadeIn animate-delay-200">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Sacred Iconography</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deity.sacred_iconography.map((item: any, index: number) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-sm text-blue-600 mb-3">{item.sanskrit}</p>
                  <p className="text-gray-700 text-sm mb-3">{item.meaning}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{item.significance}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Sacred Stories Section */}
        {deity.sacred_stories && deity.sacred_stories.length > 0 && (
          <section className="animate-fadeIn animate-delay-300">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Sacred Stories</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {deity.sacred_stories.map((story: any, index: number) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{story.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{story.content}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Divine Symbolism Section */}
        {deity.divine_symbolism && deity.divine_symbolism.length > 0 && (
          <section className="animate-fadeIn animate-delay-300">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Divine Symbolism of the Dance</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deity.divine_symbolism.map((symbol: any, index: number) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="font-bold text-gray-900 mb-3">{symbol.aspect}</h3>
                  <p className="text-gray-700 leading-relaxed">{symbol.meaning}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Major Forms Section (keeping existing) */}
        <section className="animate-fadeIn animate-delay-400">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Divine Forms of Mahadeva</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Shiva manifests in numerous forms, each representing different aspects of his divine nature 
              and cosmic functions. Explore the profound stories and spiritual significance of each manifestation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shivaForms.map((form) => (
              <Link
                key={form.id}
                href={`/deities/shiva/forms/${form.id}`}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={form.image}
                    alt={form.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${form.color} opacity-60`}></div>
                  <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-medium text-white">{form.sanskrit}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {form.name}
                  </h3>
                  <p className="text-sm text-blue-600 font-medium mb-3">{form.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {form.description}
                  </p>
                  <div className="flex items-center text-blue-600 text-sm font-medium mt-4 group-hover:translate-x-2 transition-transform">
                    Explore Form
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Festivals & Celebrations Section */}
        {deity.festivals && deity.festivals.length > 0 && (
          <section className="animate-fadeIn animate-delay-500">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Festivals & Celebrations</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deity.festivals.map((festival: any, index: number) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Calendar className="w-8 h-8 text-orange-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{festival.name}</h3>
                  <p className="text-sm text-orange-600 mb-3">{festival.date}</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{festival.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Famous/Sacred Temples Section */}
        {deity.temples && deity.temples.length > 0 && (
          <section className="animate-fadeIn animate-delay-600">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Famous/Sacred Temples</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-orange-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {deity.temples.map((temple: any, index: number) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Mountain className="w-8 h-8 text-yellow-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{temple.name}</h3>
                  <p className="text-gray-700 leading-relaxed">{temple.significance}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Sacred Mantras and Prayers Section */}
        {deity.mantras && deity.mantras.length > 0 && (
          <section className="animate-fadeIn animate-delay-700">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Sacred Mantras and Prayers</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {deity.mantras.map((mantra: any, index: number) => (
                <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-sanskrit text-gray-900 mb-3">{mantra.sanskrit}</h3>
                    <p className="text-indigo-600 font-medium mb-2">{mantra.transliteration}</p>
                    <p className="text-gray-700 italic">{mantra.meaning}</p>
                  </div>
                  <div className="border-t border-indigo-200 pt-4">
                    <p className="text-gray-600 text-sm leading-relaxed">{mantra.benefits}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Essential Facts Section */}
        {deity.essential_facts && deity.essential_facts.length > 0 && (
          <section className="animate-fadeIn animate-delay-800">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Essential Facts</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deity.essential_facts.map((item: any, index: number) => (
                <div key={index} className="flex items-start space-x-3 bg-white p-6 rounded-xl shadow-lg">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{item.fact}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Festivals and Worship Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Major Festivals */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Calendar className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Major Festivals</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Maha Shivaratri</h3>
                  <p className="text-sm text-gray-600 mb-2">The Great Night of Shiva - Phalguna month (February-March)</p>
                  <p className="text-sm text-gray-700">
                    The most sacred festival commemorating Shiva's marriage to Parvati and his act of 
                    consuming the cosmic poison. Devotees observe night-long vigils and fast.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Pradosh Vrat</h3>
                  <p className="text-sm text-gray-600 mb-2">Bi-monthly observance during twilight hours</p>
                  <p className="text-sm text-gray-700">
                    Sacred time when Shiva and Parvati's divine energy is at its peak, 
                    ideal for seeking blessings and spiritual growth.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Sawan Maas</h3>
                  <p className="text-sm text-gray-600 mb-2">Holy month of Shravan (July-August)</p>
                  <p className="text-sm text-gray-700">
                    Entire month dedicated to Shiva worship, with special significance given 
                    to Mondays when devotees offer prayers and perform abhishekam.
                  </p>
                </div>
              </div>
            </div>

            {/* Sacred Places */}
            <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Mountain className="w-8 h-8 text-gray-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Sacred Abodes</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Mount Kailash, Tibet</h3>
                  <p className="text-sm text-gray-700">
                    The eternal abode of Shiva and Parvati, considered the spiritual center 
                    of the universe and the ultimate pilgrimage destination.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Twelve Jyotirlingas</h3>
                  <p className="text-sm text-gray-700">
                    Sacred temples across India where Shiva appeared as pillars of light, 
                    including Somnath, Kedarnath, Varanasi, and Rameshwaram.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Chidambaram, Tamil Nadu</h3>
                  <p className="text-sm text-gray-700">
                    The cosmic dance hall where Shiva performs as Nataraja, 
                    representing the heart of the universe and divine consciousness.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Rishikesh & Haridwar</h3>
                  <p className="text-sm text-gray-700">
                    Holy cities on the Ganga where Shiva's presence is deeply felt, 
                    centers of yoga, meditation, and spiritual learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophical Significance */}
        <section className="mb-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Philosophical Significance</h2>
            <p className="text-lg text-indigo-100 max-w-4xl mx-auto leading-relaxed">
              Shiva represents the ultimate reality that transcends all dualities and contradictions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Crown className="w-8 h-8 text-yellow-300 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Cosmic Transformer</h3>
              <p className="text-indigo-100 text-sm leading-relaxed">
                As the Destroyer in the Trinity, Shiva dissolves the old to make way for new creation, 
                representing the necessary force of change and transformation in the universe.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Book className="w-8 h-8 text-green-300 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Adiyogi - First Guru</h3>
              <p className="text-indigo-100 text-sm leading-relaxed">
                As the original yogi, Shiva established the science of yoga and meditation, 
                providing humanity with tools for spiritual evolution and self-realization.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Shield className="w-8 h-8 text-blue-300 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Compassionate Protector</h3>
              <p className="text-indigo-100 text-sm leading-relaxed">
                His act of consuming the cosmic poison demonstrates ultimate compassion, 
                absorbing the world's negativity to protect all of creation from destruction.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-white rounded-2xl p-12 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🕉️ Explore the Divine Forms of Mahadeva 🕉️
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Dive deep into the profound stories, spiritual teachings, and cosmic significance 
              of each manifestation of Lord Shiva. Discover how these ancient wisdom teachings 
              can transform your understanding of existence and guide your spiritual journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/deities/shiva/forms/nataraja"
                className="inline-flex items-center bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-700 hover:to-red-700 transition-all transform hover:scale-105"
              >
                Begin with Nataraja - The Cosmic Dancer
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/deities/shiva/forms/adiyogi"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105"
              >
                Learn from Adiyogi - The First Guru
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  )
}