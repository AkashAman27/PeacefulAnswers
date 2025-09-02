import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Crown, 
  Star, 
  Heart, 
  Calendar,
  MapPin,
  Sword,
  ChevronLeft,
  Flower2,
  Gift,
  Scroll,
  Mountain,
  ArrowLeft,
  Zap,
  Shield,
  BookOpen,
  Eye,
  Flame
} from 'lucide-react'
import { hinduSupabase } from '@/lib/supabase'

export const metadata: Metadata = {
  title: 'Durga - The Divine Mother Warrior | Hindu Deity Guide | PeacefulAnswers',
  description: 'Discover the sacred teachings of Durga, the Divine Mother Warrior who destroys evil and protects righteousness. Learn about Navratri, stories, mantras, and spiritual significance.',
  keywords: 'Durga, Devi, divine mother, Navratri, Hindu goddess, Mahishasura, protection, warrior',
  openGraph: {
    title: 'Durga - The Divine Mother Warrior | Hindu Deity Guide',
    description: 'The fierce protector goddess who embodies divine feminine power and maternal protection.',
    type: 'website',
  }
}

// Function to get Durga data from database
async function getDurga() {
  try {
    const { data, error } = await hinduSupabase
      .from('deities')
      .select('*')
      .eq('name', 'Durga')
      .single()
    
    if (error) {
      console.error('Error fetching Durga:', error)
      return null
    }
    
    return data
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

export default async function DurgaPage() {
  let deity = await getDurga()
  
  // Comprehensive fallback data - merge with database data or use as complete fallback
  const fallbackData = {
      name: 'Durga',
      sanskrit_name: 'दुर्गा',
      title: 'The Invincible Mother',
      description: 'The fierce and protective mother goddess who destroys evil and protects righteousness, created from the combined energies of all gods.',
      image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop',
      story: 'Maa Durga was born from the combined energies of all the gods when the demon Mahishasura terrorized the heavens and earth. Armed with weapons given by each deity, riding a magnificent lion, she fought the buffalo demon for nine days and nights. Her victory represents the triumph of good over evil and the protective power of the Divine Mother who emerges when righteousness is threatened.',
      sacred_iconography: [
        {
          name: 'Ten Arms',
          sanskrit: 'दशभुजा (Dashabhuja)',
          meaning: 'Multiple arms carrying divine weapons from all gods',
          significance: 'Represents the combined power of all deities working through the Divine Mother'
        },
        {
          name: 'Lion Vehicle',
          sanskrit: 'सिंहवाहिनी (Simhavahini)',
          meaning: 'Riding the king of beasts',
          significance: 'Symbolizes mastery over ego, courage, and untamed power under divine control'
        },
        {
          name: 'Trident',
          sanskrit: 'त्रिशूल (Trishul)',
          meaning: 'Three-pointed spear of Shiva',
          significance: 'Represents destruction of ignorance and control over three gunas'
        },
        {
          name: 'Divine Radiance',
          sanskrit: 'दिव्य तेज (Divya Tej)',
          meaning: 'Brilliant luminous aura',
          significance: 'The combined brilliance of all gods that destroys darkness and evil'
        }
      ],
      sacred_stories: [
        {
          title: 'Birth from Divine Fire',
          content: 'When the gods could not defeat Mahishasura, their collective anger created a brilliant divine fire from which emerged Durga, more beautiful and powerful than any being. Each god gave her their most potent weapon, creating the ultimate warrior goddess.'
        },
        {
          title: 'The Great Battle',
          content: 'For nine days, Durga fought Mahishasura and his demon army. Each time the demon changed his form, she adapted her strategy. On the tenth day, she finally pierced his heart with her trident, ending his reign of terror.'
        },
        {
          title: 'The Protective Mother',
          content: 'After her victory, the gods praised Durga and she promised to return whenever dharma is threatened. She embodies both the nurturing mother who protects her children and the fierce warrior who destroys evil forces.'
        }
      ],
      divine_symbolism: [
        {
          aspect: 'Mahishasura Mardini',
          meaning: 'As the slayer of Mahishasura, Durga represents the divine feminine power that emerges to destroy evil when it becomes overwhelming. She shows that the ultimate protection comes from the Divine Mother.'
        },
        {
          aspect: 'Shakti Embodiment',
          meaning: 'Durga is the pure embodiment of Shakti (divine feminine energy) in her most dynamic form. She demonstrates that spiritual power, when awakened, can overcome any obstacle or negative force.'
        },
        {
          aspect: 'Protective Mother',
          meaning: 'Despite her fierce appearance, Durga is the loving mother who protects her devotees. Her anger is directed only at evil forces, while she showers compassion and blessings on those who seek her refuge.'
        }
      ],
      festivals: [
        {
          name: 'Durga Puja',
          date: 'September/October (Sharad Navratri)',
          description: 'The most grand celebration of Maa Durga, especially in Bengal, with elaborate artistic pandals, cultural programs, and immersion ceremonies. Celebrates her victory over Mahishasura with great devotion and community participation.'
        },
        {
          name: 'Chaitra Navratri',
          date: 'March/April',
          description: 'Nine-day spring festival dedicated to nine forms of Durga, observed with fasting, prayers, and worship. Devotees invoke her blessings for protection and spiritual strength.'
        },
        {
          name: 'Durga Ashtami',
          date: 'Eighth day of Navratri',
          description: 'Most auspicious day when Durga is worshipped with special rituals, kumari puja, and offerings. Considered the peak day of divine feminine energy.'
        }
      ],
      temples: [
        {
          name: 'Vaishno Devi Temple, Jammu',
          significance: 'Sacred cave shrine where Durga manifested as Vaishno Devi. One of the most visited pilgrimage sites in India, requiring a challenging trek that tests devotion.'
        },
        {
          name: 'Kamakhya Temple, Assam',
          significance: 'Ancient Shakti Pitha where Durga is worshipped in her primal form. Famous for tantric worship and the annual Ambubachi Mela celebrating divine feminine power.'
        },
        {
          name: 'Kalighat Temple, Kolkata',
          significance: 'One of the 51 Shakti Pithas where Sati\'s toe fell. Important center for Durga worship in Bengal, where she is revered as the protective mother of the city.'
        }
      ],
      mantras: [
        {
          sanskrit: 'ॐ दुं दुर्गायै नमः',
          transliteration: 'Om Dum Durgayai Namah',
          meaning: 'Salutations to Goddess Durga',
          benefits: 'Powerful seed mantra for protection from all dangers and negative forces. Invokes the fierce protective energy of the Divine Mother.'
        },
        {
          sanskrit: 'ॐ गिरिजायै विद्महे शिवप्रियायै धीमहि तन्नो दुर्गा प्रचोदयात्',
          transliteration: 'Om Girijayai Vidmahe Shivapriyayai Dhimahi Tanno Durga Prachodayat',
          meaning: 'We meditate on the daughter of the mountain, beloved of Shiva. May Durga inspire our consciousness',
          benefits: 'Durga Gayatri Mantra for developing inner strength, courage, and spiritual protection'
        }
      ],
      essential_facts: [
        {
          fact: 'Durga was created from the combined energies of all gods to defeat Mahishasura'
        },
        {
          fact: 'She has multiple arms, each carrying a divine weapon from different deities'
        },
        {
          fact: 'Her lion vehicle represents controlled power and mastery over ego'
        },
        {
          fact: 'She is worshipped as the supreme mother goddess across India'
        },
        {
          fact: 'Durga Puja in Bengal is UNESCO recognized as Intangible Cultural Heritage'
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
    <main className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-orange-50">
      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/deities" 
            className="inline-flex items-center text-gray-600 hover:text-red-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Deities
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-600 via-pink-600 to-orange-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-white animate-[slideInFromLeft_1s_ease-out]">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Shield className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Mahishasura Mardini</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sanskrit">
                {deity.sanskrit_name || 'दुर्गा'}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-red-100">
                {deity.name || 'Maa Durga'}
              </h2>
              <p className="text-lg text-pink-100 leading-relaxed mb-8">
                {deity.description || deity.title || 'The Invincible Mother'}
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="relative animate-[slideInFromRight_1s_ease-out]">
              <div className="aspect-square bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                <Image
                  src={deity.image_url || 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop'}
                  alt={deity.name || 'Maa Durga'}
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
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-red-400/20 rounded-full blur-3xl"></div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Story Section */}
        {deity.story && (
          <section className="animate-fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Story</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-orange-600 mx-auto mb-8"></div>
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
                  <div className="aspect-video bg-gradient-to-br from-red-50 to-orange-50 rounded-xl flex items-center justify-center">
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
              <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {deity.sacred_iconography.map((item: any, index: number) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-sm text-red-600 mb-3">{item.sanskrit}</p>
                    <p className="text-gray-700 text-sm mb-3">{item.meaning}</p>
                    <p className="text-gray-600 text-xs leading-relaxed">{item.significance}</p>
                  </div>
                ))}
              </div>
              <div className="relative">
                {deity.youtube_videos?.sacred_iconography ? (
                  <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                    <iframe
                      src={`https://www.youtube.com/embed/${deity.youtube_videos.sacred_iconography}`}
                      title="Sacred Iconography Video"
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-orange-50 to-red-50 rounded-xl flex items-center justify-center">
                    <p className="text-gray-500">Video content coming soon</p>
                  </div>
                )}
              </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deity.sacred_stories.map((story: any, index: number) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{story.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm">{story.content}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Divine Symbolism Section */}
        {deity.divine_symbolism && deity.divine_symbolism.length > 0 && (
          <section className="animate-fadeIn animate-delay-400">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Divine Symbolism</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="grid grid-cols-1 gap-6">
                {deity.divine_symbolism.map((symbol: any, index: number) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="font-bold text-gray-900 mb-3">{symbol.aspect}</h3>
                    <p className="text-gray-700 leading-relaxed">{symbol.meaning}</p>
                  </div>
                ))}
              </div>
              <div className="relative">
                {deity.youtube_videos?.divine_symbolism ? (
                  <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                    <iframe
                      src={`https://www.youtube.com/embed/${deity.youtube_videos.divine_symbolism}`}
                      title="Divine Symbolism Video"
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl flex items-center justify-center">
                    <p className="text-gray-500">Video content coming soon</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

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
                  <Calendar className="w-8 h-8 text-red-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{festival.name}</h3>
                  <p className="text-sm text-red-600 mb-3">{festival.date}</p>
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
                  <MapPin className="w-8 h-8 text-yellow-600 mb-4" />
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
                <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-sanskrit text-gray-900 mb-3">{mantra.sanskrit}</h3>
                    <p className="text-red-600 font-medium mb-2">{mantra.transliteration}</p>
                    <p className="text-gray-700 italic">{mantra.meaning}</p>
                  </div>
                  <div className="border-t border-red-200 pt-4">
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
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{item.fact}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}