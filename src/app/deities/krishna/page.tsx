import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Heart, 
  Star, 
  Crown, 
  Calendar,
  MapPin,
  Music,
  ArrowLeft,
  Flower2,
  BookOpen,
  Feather,
  Shield,
  Disc,
  Mountain
} from 'lucide-react'
import { hinduSupabase } from '@/lib/supabase'

export const metadata: Metadata = {
  title: 'Krishna - The Divine Cowherd | Hindu Deity Guide | PeacefulAnswers',
  description: 'Discover the sacred teachings of Krishna, the Divine Cowherd and teacher of Bhagavad Gita. Learn about divine love, stories, mantras, festivals, and spiritual significance.',
  keywords: 'Krishna, Govinda, Bhagavad Gita, divine love, Hindu deity, avatar, Vrindavan, devotion',
  openGraph: {
    title: 'Krishna - The Divine Cowherd | Hindu Deity Guide',
    description: 'The beloved avatar who teaches divine love and wisdom through the Bhagavad Gita.',
    type: 'website',
  }
}

// Function to get Krishna data from database
async function getKrishna() {
  try {
    const { data, error } = await hinduSupabase
      .from('deities')
      .select('*')
      .eq('name', 'Krishna')
      .single()
    
    if (error) {
      console.error('Error fetching Krishna:', error)
      return null
    }
    
    return data
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

export default async function KrishnaPage() {
  let deity = await getKrishna()
  
  // Comprehensive fallback data - merge with database data or use as complete fallback
  const fallbackData = {
      name: 'Krishna',
      sanskrit_name: 'कृष्ण',
      title: 'The Supreme Divine Personality',
      description: 'The divine cowherd, teacher of the Bhagavad Gita, and embodiment of love, wisdom, and divine play.',
      image_url: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&h=600&fit=crop',
      story: "Lord Krishna is revered as the eighth avatar of Vishnu and is considered by many to be the Supreme Personality of Godhead himself. Born in Mathura and raised in Vrindavan, Krishna's life is filled with divine play (lila), profound teachings, and extraordinary miracles. Krishna is perhaps best known for delivering the Bhagavad Gita to Arjuna on the battlefield of Kurukshetra, providing timeless wisdom on duty, devotion, and the path to liberation.",
      sacred_iconography: [
        {
          name: 'Flute',
          sanskrit: 'बांसुरी (Bansuri)',
          meaning: 'Divine music that attracts all souls',
          significance: 'Represents the call of the divine that draws devotees to spiritual awakening'
        },
        {
          name: 'Peacock Feather',
          sanskrit: 'मयूर पिच्छ (Mayura Pichh)',
          meaning: 'Symbol of beauty and divine grace',
          significance: "Krishna's crown feather represents his ability to dance on the head of ego (Kaliya serpent)"
        },
        {
          name: 'Dark Blue Color',
          sanskrit: 'श्याम (Shyam)',
          meaning: 'Infinite like the sky and ocean',
          significance: 'Represents the infinite nature of divine consciousness and depth of divine love'
        },
        {
          name: 'Cows',
          sanskrit: 'गो (Go)',
          meaning: 'Symbol of gentleness and abundance',
          significance: "Represents Krishna's role as protector of all beings and provider of spiritual nourishment"
        }
      ],
      sacred_stories: [
        {
          title: 'The Butter Thief',
          content: "Young Krishna's playful stealing of butter from the homes of Vrindavan represents the divine's sweet theft of devotees' hearts, teaching that divine love transcends all boundaries and rules."
        },
        {
          title: 'Lifting Mount Govardhan',
          content: "Krishna lifted the entire Govardhan hill on his little finger to protect the people of Vrindavan from Indra's wrath, demonstrating that complete surrender to the divine provides ultimate protection."
        },
        {
          title: 'The Bhagavad Gita',
          content: 'On the battlefield of Kurukshetra, Krishna delivered the profound teachings of the Bhagavad Gita to Arjuna, providing timeless wisdom on dharma, devotion, and the path to liberation.'
        }
      ],
      divine_symbolism: [
        {
          aspect: 'Divine Love (Prema)',
          meaning: 'Krishna represents the highest form of divine love, both as lover and beloved, showing that spiritual realization comes through complete surrender and devotion.'
        },
        {
          aspect: 'Divine Play (Lila)',
          meaning: "Krishna's entire life is lila - divine play that appears ordinary but carries profound spiritual significance, teaching that the universe itself is God's playful creation."
        },
        {
          aspect: 'Complete Incarnation (Purna Avatar)',
          meaning: 'Unlike other avatars who came for specific purposes, Krishna is considered the complete manifestation of divinity, embodying all aspects of the Supreme.'
        }
      ],
      festivals: [
        {
          name: 'Janmashtami',
          date: 'August/September (Bhadrapada Krishna Ashtami)',
          description: "The most important festival celebrating Krishna's birth, observed with fasting, singing, dancing, and midnight celebrations when Krishna was born."
        },
        {
          name: 'Holi',
          date: 'March (Phalguna Purnima)',
          description: "Festival of colors celebrating Krishna's playful nature and divine love with Radha and the gopis of Vrindavan."
        },
        {
          name: 'Govardhan Puja',
          date: 'Day after Diwali',
          description: 'Celebrates Krishna lifting Mount Govardhan, observed by creating food mountains and offering prayers for protection and abundance.'
        }
      ],
      temples: [
        {
          name: 'Krishna Janmabhoomi, Mathura',
          significance: 'The birthplace of Krishna, considered the most sacred site for Krishna devotees worldwide.'
        },
        {
          name: 'ISKCON Temple, Vrindavan',
          significance: "Major pilgrimage center in Krishna's childhood land, spreading Krishna consciousness globally through the International Society for Krishna Consciousness."
        },
        {
          name: 'Jagannath Temple, Puri',
          significance: 'One of the Char Dham pilgrimage sites where Krishna is worshipped as Jagannath, famous for the annual Rath Yatra festival.'
        }
      ],
      mantras: [
        {
          sanskrit: 'ॐ नमो भगवते वासुदेवाय',
          transliteration: 'Om Namo Bhagavate Vasudevaya',
          meaning: 'I bow to the Supreme Lord Vasudeva (Krishna)',
          benefits: 'The twelve-syllable mantra for Krishna devotion, bringing divine protection and spiritual upliftment'
        },
        {
          sanskrit: 'हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे हरे राम हरे राम राम राम हरे हरे',
          transliteration: 'Hare Krishna Hare Krishna Krishna Krishna Hare Hare Hare Rama Hare Rama Rama Rama Hare Hare',
          meaning: 'O energy of the Lord (Hare), O all-attractive Lord (Krishna), O supreme enjoyer (Rama)',
          benefits: 'The Maha Mantra for this age, purifying consciousness and awakening divine love'
        }
      ],
      essential_facts: [
        {
          fact: 'Krishna is the eighth avatar of Vishnu and considered the complete incarnation of divinity'
        },
        {
          fact: 'Born in Mathura prison to Vasudeva and Devaki, raised by Nanda and Yashoda in Vrindavan'
        },
        {
          fact: "Delivered the Bhagavad Gita, one of Hinduism's most important philosophical texts"
        },
        {
          fact: 'His life spanned 125 years and included childhood, youth, and royal phases'
        },
        {
          fact: 'Established the city of Dwarka, which is now one of the four sacred Dham pilgrimage sites'
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
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
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
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-white animate-[slideInFromLeft_1s_ease-out]">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Heart className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Eighth Avatar of Vishnu</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sanskrit">
                {deity.sanskrit_name || 'कृष्ण'}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-purple-100">
                {deity.name || 'Lord Krishna'}
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed mb-8">
                {deity.description || deity.title || 'The Supreme Divine Personality'}
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="relative animate-[slideInFromRight_1s_ease-out]">
              <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                <Image
                  src={deity.image_url || 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&h=600&fit=crop'}
                  alt={deity.name || 'Lord Krishna'}
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
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl"></div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Story Section */}
        {deity.story && (
          <section className="animate-fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Story</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
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
                  <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center">
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
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {deity.sacred_iconography.map((item: any, index: number) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-sm text-blue-600 mb-3">{item.sanskrit}</p>
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
                  <div className="aspect-video bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl flex items-center justify-center">
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
                  <Calendar className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{festival.name}</h3>
                  <p className="text-sm text-blue-600 mb-3">{festival.date}</p>
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
                <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-sanskrit text-gray-900 mb-3 leading-relaxed">{mantra.sanskrit}</h3>
                    <p className="text-blue-600 font-medium mb-2">{mantra.transliteration}</p>
                    <p className="text-gray-700 italic">{mantra.meaning}</p>
                  </div>
                  <div className="border-t border-blue-200 pt-4">
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

      </div>
    </main>
  )
}