import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Crown, 
  Star, 
  Heart, 
  Calendar,
  MapPin,
  Shield,
  ChevronLeft,
  Flower2,
  Gift,
  Scroll,
  Mountain,
  ArrowLeft,
  Zap,
  Scale,
  BookOpen,
  Eye,
  Moon
} from 'lucide-react'
import { hinduSupabase } from '@/lib/supabase'

export const metadata: Metadata = {
  title: 'Yama - The Lord of Justice | Hindu Deity Guide | PeacefulAnswers',
  description: 'Discover the sacred teachings of Yama, the Lord of Justice and righteous judge of afterlife. Learn about dharma, afterlife, stories, mantras, and spiritual significance.',
  keywords: 'Yama, death god, dharma, afterlife, Hindu deity, righteous judge, justice, cosmic law',
  openGraph: {
    title: 'Yama - The Lord of Justice | Hindu Deity Guide',
    description: 'The impartial judge who maintains cosmic order and delivers divine justice based on karma.',
    type: 'website',
  }
}

// Function to get Yama data from database
async function getYama() {
  try {
    const { data, error } = await hinduSupabase
      .from('deities')
      .select('*')
      .eq('name', 'Yama')
      .single()
    
    if (error) {
      console.error('Error fetching Yama:', error)
      return null
    }
    
    return data
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}

export default async function YamaPage() {
  let deity = await getYama()
  
  // Comprehensive fallback data - merge with database data or use as complete fallback
  const fallbackData = {
      name: 'Yama',
      sanskrit_name: 'यम',
      title: 'God of Death & Justice',
      description: 'The righteous judge of the dead who maintains cosmic order and delivers divine justice.',
      image_url: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=600&fit=crop',
      story: 'Lord Yama is the god of death and the righteous judge of souls in Hindu mythology. As the ruler of the afterlife, he determines the fate of souls based on their karma and deeds performed during their lifetime. Despite being associated with death, Yama is a just and righteous deity who ensures cosmic justice and maintains dharma. He is both feared and respected as the impartial judge who delivers appropriate consequences for one\'s actions.',
      sacred_iconography: [
        {
          name: 'Dark Complexion',
          sanskrit: 'श्यामवर्ण (Shyamvarna)',
          meaning: 'Dark blue or black appearance',
          significance: 'Represents the mysterious and inevitable nature of death and time'
        },
        {
          name: 'Noose and Mace',
          sanskrit: 'पाश दण्ड (Paash Danda)',
          meaning: 'Divine noose and staff of justice',
          significance: 'Tools to capture souls and deliver righteous judgment'
        },
        {
          name: 'Buffalo Mount',
          sanskrit: 'महिष वाहन (Mahish Vahan)',
          meaning: 'Powerful buffalo as vehicle',
          significance: 'Represents strength, determination, and the power to carry souls'
        },
        {
          name: 'Crown of Authority',
          sanskrit: 'न्याय मुकुट (Nyaya Mukut)',
          meaning: 'Crown representing judicial power',
          significance: 'Shows supreme authority over matters of life, death, and justice'
        }
      ],
      sacred_stories: [
        {
          title: 'The First Mortal',
          content: 'Yama was the first mortal being who died and thus became the ruler of the realm of the dead. As the first to experience death, he guides all souls through the transition from life to afterlife, understanding their journey intimately.'
        },
        {
          title: 'Judge of Righteousness',
          content: 'In the court of Yama, each soul\'s deeds are weighed with perfect justice. Chitragupta, his scribe, maintains detailed records of every action, ensuring that divine justice is delivered based on true karma rather than external appearances.'
        },
        {
          title: 'The Compassionate Judge',
          content: 'Though stern, Yama shows mercy to those who truly repent. The story of Markandeya shows how devotion and righteousness can even overcome death, demonstrating that Yama upholds dharma above all else.'
        }
      ],
      divine_symbolism: [
        {
          aspect: 'Divine Justice',
          meaning: 'Yama represents the unchanging law of karma and divine justice that operates beyond human preferences or prejudices. He teaches that every action has consequences that must be faced with courage and acceptance.'
        },
        {
          aspect: 'Dharmic Order',
          meaning: 'As the maintainer of cosmic law, Yama ensures that the moral order of the universe remains intact. He shows that death is not an enemy but a natural transition that serves the greater cosmic purpose.'
        },
        {
          aspect: 'Transformation Guide',
          meaning: 'Yama guides souls through the ultimate transformation from physical to spiritual existence. He represents the wisdom needed to navigate life\'s transitions and face inevitable changes with dignity.'
        }
      ],
      festivals: [
        {
          name: 'Yama Panchak',
          date: 'Kartik Krishna Paksha (October/November)',
          description: 'Five days dedicated to honoring Yama and seeking protection from untimely death. Devotees light lamps and perform rituals to ensure peaceful transitions and righteous judgment.'
        },
        {
          name: 'Yama Dwitiya (Bhai Dooj)',
          date: 'Kartik Shukla Dwitiya',
          description: 'Festival celebrating the bond between siblings, based on Yama\'s visit to his sister Yamuna. Sisters pray for their brothers\' long life and protection from Yama\'s judgment.'
        },
        {
          name: 'Dharma Raja Puja',
          date: 'Regional observances',
          description: 'Regional festivals honoring Yama as Dharma Raja, the righteous king. Devotees seek his blessings for moral strength and the wisdom to live righteously.'
        }
      ],
      temples: [
        {
          name: 'Yama Temple, Kumbakonam',
          significance: 'One of the few temples dedicated to Yama in Tamil Nadu. Devotees pray here for relief from ancestral problems and for peaceful death when the time comes.'
        },
        {
          name: 'Dharmaraja Temples',
          significance: 'Temples across India honoring Yama as Dharmaraja, the king of dharma. These serve as reminders of moral responsibility and the importance of righteous living.'
        },
        {
          name: 'Pitru Paksha Shrines',
          significance: 'Temples and shrines where Yama is honored during Pitru Paksha (ancestor worship period). Families seek his blessings for departed ancestors\' peace and liberation.'
        }
      ],
      mantras: [
        {
          sanskrit: 'ॐ यमाय नमः',
          transliteration: 'Om Yamaaya Namah',
          meaning: 'Salutations to Lord Yama',
          benefits: 'Simple mantra for protection from untimely death and seeking righteous judgment. Helps in facing life transitions with courage and developing moral strength.'
        },
        {
          sanskrit: 'ॐ सूर्यपुत्राय विद्महे महाकालाय धीमहि तन्नो यमः प्रचोदयात्',
          transliteration: 'Om Suryaputraaya Vidmahe Mahakaalaya Dheemahi Tanno Yamah Prachodayat',
          meaning: 'We meditate on the son of Surya, the great time. May Yama inspire our consciousness',
          benefits: 'Yama Gayatri Mantra for developing moral strength, facing fears of death, and understanding the deeper meaning of life and dharma'
        }
      ],
      essential_facts: [
        {
          fact: 'Yama is the god of death and righteous judge of souls in the afterlife'
        },
        {
          fact: 'He is the son of Surya (Sun god) and brother of Yamuna river goddess'
        },
        {
          fact: 'Yama was the first mortal to die and became ruler of the realm of the dead'
        },
        {
          fact: 'His vehicle is Mahish, a powerful buffalo representing strength'
        },
        {
          fact: 'Chitragupta serves as his scribe, maintaining records of all human deeds'
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
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-zinc-50">
      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/deities" 
            className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Deities
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-gray-700 via-slate-700 to-zinc-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-white animate-[slideInFromLeft_1s_ease-out]">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Shield className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">Dharma Raja</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sanskrit">
                {deity.sanskrit_name || 'यम'}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-100">
                {deity.name || 'Lord Yama'}
              </h2>
              <p className="text-lg text-slate-100 leading-relaxed mb-8">
                {deity.description || deity.title || 'God of Death & Justice'}
              </p>
            </div>

            {/* Right Side - Image */}
            <div className="relative animate-[slideInFromRight_1s_ease-out]">
              <div className="aspect-square bg-gradient-to-br from-slate-500/20 to-gray-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                <Image
                  src={deity.image_url || 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=600&fit=crop'}
                  alt={deity.name || 'Lord Yama'}
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
        <div className="absolute top-20 left-10 w-20 h-20 bg-slate-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gray-400/20 rounded-full blur-3xl"></div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Story Section */}
        {deity.story && (
          <section className="animate-fadeIn">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Story</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-slate-600 mx-auto mb-8"></div>
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
                  <div className="aspect-video bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl flex items-center justify-center">
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
              <div className="w-24 h-1 bg-gradient-to-r from-slate-600 to-gray-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deity.sacred_iconography.map((item: any, index: number) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="font-bold text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{item.sanskrit}</p>
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

        {/* Festivals & Celebrations Section */}
        {deity.festivals && deity.festivals.length > 0 && (
          <section className="animate-fadeIn animate-delay-500">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Festivals & Celebrations</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-gray-600 to-slate-600 mx-auto mb-8"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deity.festivals.map((festival: any, index: number) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Calendar className="w-8 h-8 text-gray-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{festival.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{festival.date}</p>
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
                <div key={index} className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-8 shadow-lg">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-sanskrit text-gray-900 mb-3">{mantra.sanskrit}</h3>
                    <p className="text-gray-600 font-medium mb-2">{mantra.transliteration}</p>
                    <p className="text-gray-700 italic">{mantra.meaning}</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
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
                  <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
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