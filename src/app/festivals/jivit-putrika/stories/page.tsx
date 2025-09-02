import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Crown, Bird, Scroll } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sacred Stories of Jivit Putrika Vrat | Hindu Legends & Folk Tales | PeacefulAnswers',
  description: 'Discover the complete collection of sacred stories and legends behind Jivit Putrika Vrat. Read about King Jimutvahana, the Eagle-Jackal tale, Mahabharata connections, and regional folk stories.',
  keywords: 'Jivit Putrika stories, Jimutvahana legend, Jitiya vrat katha, Hindu mythology, Nagananda, Garuda story, Mahabharata Parikshit, eagle jackal tale',
  openGraph: {
    title: 'Sacred Stories of Jivit Putrika Vrat | Hindu Legends',
    description: 'Complete collection of sacred stories behind the Jivit Putrika festival - from ancient legends to folk tales.',
    type: 'website',
  }
}

export default function JivitPutrikaStoriesPage() {
  const stories = [
    {
      id: 'jimutvahana',
      title: 'The Legend of King Jimutvahana',
      subtitle: 'The Ultimate Sacrifice for Maternal Love',
      icon: '👑',
      category: 'Ancient Legend',
      summary: 'The foundational story of a compassionate king who sacrificed himself to save a Naga mother\'s son from Garuda.',
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800&q=80'
    },
    {
      id: 'eagle-jackal',
      title: 'The Fable of Chilhi-Siyarin',
      subtitle: 'Eagle and Jackal - A Moral Tale',
      icon: '🦅',
      category: 'Folk Tale',
      summary: 'A cautionary tale of two friends who observed the fast differently, leading to dramatically different consequences.',
      image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c787?w=800&q=80'
    },
    {
      id: 'mahabharata',
      title: 'Krishna and Parikshit Revival',
      subtitle: 'The Mahabharata Connection',
      icon: '📖',
      category: 'Scriptural Legend',
      summary: 'How Lord Krishna saved Arjuna\'s grandson from Ashwatthama\'s weapon, giving birth to the name "Jivitputrika".',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80'
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50">
      {/* Navigation */}
      <div className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/festivals/jivit-putrika" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Jivit Putrika Festival
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <span className="text-6xl mb-4 block">📚</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-sanskrit">Sacred Stories & Legends</h1>
          <h2 className="text-2xl md:text-3xl text-orange-100 mb-8 font-semibold">Jivit Putrika Vrat - Complete Collection</h2>
          <p className="text-xl md:text-2xl text-pink-100 mb-8 max-w-4xl mx-auto">
            Discover the rich tapestry of stories, legends, and folk tales that form the spiritual foundation of this sacred maternal fast
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-6 py-3 bg-orange-600/80 text-white rounded-full font-semibold">Ancient Legends</span>
            <span className="px-6 py-3 bg-pink-600/80 text-white rounded-full font-semibold">Folk Tales</span>
            <span className="px-6 py-3 bg-red-600/80 text-white rounded-full font-semibold">Scriptural Stories</span>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-600 via-pink-400 to-yellow-400 mx-auto"></div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-400/20 rounded-full blur-3xl"></div>
      </section>

      {/* Stories Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-6">Three Sacred Stories</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Each story carries deep spiritual meaning and provides the foundation for this powerful maternal vrat. 
              Together, they create a rich tapestry of sacrifice, devotion, and divine grace.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <div key={story.id} className="group">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="relative h-48 bg-gradient-to-br from-orange-400 to-pink-500">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-90 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
                        {story.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="text-4xl">{story.icon}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-orange-800 mb-2 group-hover:text-orange-600 transition-colors">
                      {story.title}
                    </h3>
                    <h4 className="text-sm font-semibold text-gray-600 mb-3">{story.subtitle}</h4>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                      {story.summary}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-orange-600">Story {index + 1} of 3</span>
                      <a 
                        href={`#${story.id}`}
                        className="text-orange-600 hover:text-orange-700 font-semibold text-sm flex items-center gap-2"
                      >
                        Read Full Story
                        <BookOpen className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story 1: Jimutvahana Legend */}
      <section id="jimutvahana" className="py-16 px-4 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg mb-6">
              <Crown className="w-6 h-6 text-orange-600" />
              <span className="font-bold text-orange-800">Story 1: Ancient Legend</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-orange-800 mb-6">The Legend of King Jimutvahana</h2>
            <p className="text-xl text-orange-700 mb-8">The Ultimate Sacrifice for Maternal Love</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="prose prose-lg max-w-none">
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center gap-2">
                  <span>🏛️</span> Historical Context
                </h3>
                <p className="text-gray-700">
                  This story forms the foundation of the 7th-century Sanskrit play "Nagananda" (Joy of Serpents) 
                  written by Emperor Harsha. It appears in multiple forms across Indian literature, including 
                  the Kathasaritsagara tales and Buddhist-influenced narratives.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-orange-800 mb-4">The Story</h3>
              
              <div className="flex flex-col lg:flex-row gap-6 items-center mb-8">
                <div className="lg:w-2/3">
                  <p className="text-gray-700 mb-4">
                    <strong>King Jimutvahana</strong> was a noble and compassionate ruler of the Gandharvas, known throughout 
                    the celestial realms for his selflessness and kindness. Despite his royal status, he renounced his 
                    throne and material possessions, choosing instead to live a simple life in the forest, dedicated 
                    to serving his father and helping others.
                  </p>
                </div>
                <div className="lg:w-1/3">
                  <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80"
                      alt="Ancient king in meditation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-500 text-center mt-2">King Jimutvahana - The Compassionate Ruler</p>
                </div>
              </div>

              <div className="bg-pink-50 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-bold text-pink-700 mb-3">The Tragic Encounter</h4>
                <p className="text-gray-700">
                  One day, while wandering through the forest, Jimutvahana came across an elderly Naga woman 
                  weeping bitterly by a riverbank. Her tears fell like pearls, and her anguish moved the 
                  compassionate king deeply. When he inquired about her sorrow, she revealed her tragic plight.
                </p>
              </div>

              <p className="text-gray-700 mb-6">
                "O noble one," she said, "I belong to the Nagavanshi (serpent dynasty). Due to an ancient pact 
                between our people and the mighty <strong>Garuda</strong> (the divine eagle and vehicle of Lord Vishnu), 
                we must offer one of our children daily as sacrifice. Tomorrow, it is the turn of my only son, 
                <strong>Shankhchuda</strong>, to be devoured by Garuda. I have no other children, and his death will 
                end our lineage forever."
              </p>

              <div className="bg-orange-50 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-bold text-orange-700 mb-3">The Ultimate Sacrifice</h4>
                <p className="text-gray-700">
                  Jimutvahana's heart was filled with compassion for the grieving mother. Without hesitation, 
                  he made a solemn vow: "Mother, do not weep. I promise you that your son shall live. 
                  I will take his place on the sacrificial rock."
                </p>
              </div>

              <p className="text-gray-700 mb-6">
                The next morning, as the sun rose over the mountains, Jimutvahana wrapped himself in a red cloth 
                (the traditional color for sacrifice) and lay down on the designated rock where Shankhchuda was 
                to be offered. The Naga mother tried to dissuade him, but the noble king remained firm in his resolve.
              </p>

              <div className="text-center mb-8">
                <div className="relative w-full max-w-md mx-auto h-64 rounded-2xl overflow-hidden shadow-xl mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80"
                    alt="Mighty Garuda descending with powerful wings"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                    <p className="text-lg font-semibold">Garuda - The Divine Eagle Descends</p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                Soon, the sky darkened as <strong>Garuda</strong> descended with tremendous force, his wings creating 
                hurricane-like winds. The earth trembled under his mighty presence. Seeing what he believed to be 
                the daily offering, Garuda seized Jimutvahana with his powerful talons and began to tear into his flesh.
              </p>

              <div className="bg-red-50 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-bold text-red-700 mb-3">Divine Recognition</h4>
                <p className="text-gray-700">
                  What amazed Garuda was that his "prey" showed no signs of fear, anger, or resistance. 
                  Instead, Jimutvahana endured the pain in complete silence, his face radiating peace and compassion. 
                  Puzzled by this unusual behavior, Garuda paused and demanded to know who this extraordinary being was.
                </p>
              </div>

              <p className="text-gray-700 mb-6">
                When Jimutvahana revealed his identity and explained his selfless act - that he had willingly 
                taken the place of an innocent Naga child to save a mother's heart from breaking - Garuda was 
                overwhelmed with emotion. Never before had he encountered such pure, selfless love and sacrifice.
              </p>

              <div className="bg-green-50 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-bold text-green-700 mb-3">The Divine Promise</h4>
                <p className="text-gray-700">
                  Deeply moved by Jimutvahana's nobility, Garuda not only spared the king's life but made a 
                  momentous vow: "O noble Jimutvahana, your sacrifice has opened my eyes to the power of 
                  compassion and maternal love. From this day forward, I pledge never again to demand 
                  sacrifices from the Naga community. All serpent children shall live freely."
                </p>
              </div>

              <p className="text-gray-700 mb-6">
                Thus, through one man's supreme sacrifice, an entire community was freed from the terror of 
                daily loss. Jimutvahana's act became legendary, symbolizing the power of selfless love and 
                the lengths to which one should go to protect the innocent.
              </p>

              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-6">
                <h4 className="text-lg font-bold text-purple-700 mb-3">Connection to Jivit Putrika</h4>
                <p className="text-gray-700">
                  From that day forward, mothers began observing the Jivit Putrika fast in honor of Jimutvahana's 
                  deed. Just as he sacrificed himself to save a mother's child, mothers now sacrifice their 
                  comfort through fasting to invoke divine protection for their own children. The story serves 
                  as both inspiration and spiritual foundation for this powerful maternal vrat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story 2: Eagle and Jackal Tale */}
      <section id="eagle-jackal" className="py-16 px-4 bg-gradient-to-br from-pink-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg mb-6">
              <Bird className="w-6 h-6 text-pink-600" />
              <span className="font-bold text-pink-800">Story 2: Folk Tale</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-pink-800 mb-6">The Fable of Chilhi-Siyarin</h2>
            <p className="text-xl text-pink-700 mb-8">Eagle and Jackal - A Moral Tale of Devotion</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="prose prose-lg max-w-none">
              <div className="bg-gradient-to-r from-pink-100 to-orange-100 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-pink-800 mb-4 flex items-center gap-2">
                  <span>🌊</span> Setting the Scene
                </h3>
                <p className="text-gray-700">
                  This beloved folk tale is especially popular in Bihar, Uttar Pradesh, and Nepal. It serves 
                  as a cautionary story about observing religious vows with complete devotion and honesty. 
                  The story explains why clay figures of eagles and jackals are worshipped during Jitiya.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-pink-800 mb-4">The Tale of Two Friends</h3>
              
              <div className="flex flex-col lg:flex-row gap-6 items-center mb-8">
                <div className="lg:w-2/3">
                  <p className="text-gray-700 mb-4">
                    Long ago, near the sacred banks of the Narmada River (some versions place them by other holy waters), 
                    lived two close friends - a <strong>female eagle (Chilhi)</strong> and a <strong>female jackal (Siyarin)</strong>. 
                    Despite their different natures, they had formed an unlikely but strong friendship, spending their 
                    days together and sharing the joys and sorrows of life.
                  </p>
                </div>
                <div className="lg:w-1/3">
                  <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1520637836862-4d197d17c787?w=400&q=80"
                      alt="Sacred river landscape with ancient trees"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-500 text-center mt-2">Sacred Banks of River Narmada</p>
                </div>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-bold text-orange-700 mb-3">Learning About the Vrat</h4>
                <p className="text-gray-700">
                  One day, while resting near their favorite pakar tree, they observed a group of devout women 
                  from a nearby village preparing for the Jivit Putrika fast. The friends watched in fascination 
                  as the mothers spoke lovingly about their children, explaining how this sacred vrat would 
                  protect their offspring from all dangers.
                </p>
              </div>

              <p className="text-gray-700 mb-6">
                Moved by what they had witnessed, both the eagle and the jackal decided to observe the fast 
                for the welfare of their own young ones. They made a solemn pact to fast together, supporting 
                each other through the difficult nirjala (waterless) vrat that lay ahead.
              </p>

              <div className="bg-yellow-50 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-bold text-yellow-700 mb-3">The Night of Temptation</h4>
                <p className="text-gray-700">
                  As the fasting day progressed, both friends endured the pangs of hunger and thirst with 
                  determination. However, as night fell, a great test arose. The keen nose of the jackal 
                  detected the aroma of rich food remnants from a recent cremation ground nearby - or in 
                  some versions, the smell of buried offerings left by wealthy merchants.
                </p>
              </div>

              <p className="text-gray-700 mb-6">
                The temptation grew overwhelming for the jackal. Her natural scavenging instincts were 
                awakened by the delicious smells. Despite her earlier resolve and the sacred vow she had 
                made, <strong>Siyarin (the jackal) broke her fast</strong> in the darkness of night, secretly 
                consuming the food she had discovered.
              </p>

              <p className="text-gray-700 mb-6">
                Meanwhile, <strong>Chilhi (the eagle)</strong>, despite facing the same hunger and thirst, 
                remained steadfast in her devotion. Even when she caught scent of the food that had tempted 
                her friend, she resisted all urges and maintained her vrat with unwavering dedication throughout 
                the entire night.
              </p>

              <div className="bg-red-50 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-bold text-red-700 mb-3">The Consequences Unfold</h4>
                <p className="text-gray-700">
                  The next morning, both friends completed what appeared to be their fast, but the divine 
                  powers knew the truth. The results of their actions would manifest in their next births, 
                  as the law of karma works mysteriously but surely.
                </p>
              </div>

              <div className="text-center mb-8">
                <div className="relative w-full max-w-lg mx-auto h-64 rounded-2xl overflow-hidden shadow-xl mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80"
                    alt="Two royal sisters with contrasting destinies"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                    <p className="text-lg font-semibold">The Rebirth - Two Sisters, Two Destinies</p>
                    <p className="text-sm opacity-90">Sheelavati (Eagle) & Kapooravati (Jackal)</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-pink-800 mb-4">The Next Lives - A Tale of Two Sisters</h3>

              <p className="text-gray-700 mb-6">
                In their next birth, the faithful eagle was reborn as <strong>Sheelavati</strong>, a beautiful 
                princess blessed with seven healthy, handsome sons. Her life was filled with joy, prosperity, 
                and the ultimate blessing of motherhood - her children thrived and brought honor to their family.
              </p>

              <p className="text-gray-700 mb-6">
                The jackal, who had broken her vow, was reborn as <strong>Kapooravati</strong> (also called 
                Kalavati in some versions), the younger sister of Sheelavati. But her fate was tragic - 
                every child she bore died shortly after birth, leaving her heart broken and her life empty.
              </p>

              <div className="bg-purple-50 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-bold text-purple-700 mb-3">Jealousy and Evil Design</h4>
                <p className="text-gray-700">
                  Consumed by jealousy and unable to bear her sister's happiness, Kapooravati hatched an 
                  evil plan. She manipulated her brother-in-law, the king, convincing him through lies and 
                  deceit to kill all seven of Sheelavati's sons. In her twisted logic, she reasoned that 
                  if she couldn't have children, neither should her sister.
                </p>
              </div>

              <p className="text-gray-700 mb-6">
                The king, tragically deceived by his sister-in-law's manipulation, ordered the execution 
                of the seven boys. Their heads were to be sent to Sheelavati as proof of the deed. 
                The entire kingdom was shocked by this terrible act, and Sheelavati awaited the worst news of her life.
              </p>

              <div className="bg-green-50 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-bold text-green-700 mb-3">Divine Intervention</h4>
                <p className="text-gray-700">
                  However, the accumulated merit from Sheelavati's faithful observance of the Jivit Putrika vrat 
                  in her previous life as an eagle created a divine shield around her children. Through 
                  <strong>Jimutvahana's intervention and divine grace</strong>, a miracle occurred.
                </p>
              </div>

              <p className="text-gray-700 mb-6">
                When the executioner's sword fell, instead of harming the boys, they were mysteriously 
                transported to safety. The "heads" that were delivered to Sheelavati turned out to be 
                mere clay pots, fruits, or flowers - harmless objects that had been divinely substituted 
                for her children.
              </p>

              <p className="text-gray-700 mb-6">
                Meanwhile, all seven sons were restored to life and returned to their mother, healthy 
                and unharmed. The miracle was so profound that even the king realized the divine protection 
                surrounding Sheelavati's family.
              </p>

              <div className="bg-red-100 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-bold text-red-800 mb-3">The Final Justice</h4>
                <p className="text-gray-700">
                  When Kapooravati learned that her evil scheme had not only failed but had actually 
                  demonstrated her sister's divine protection, she was overwhelmed with shock and remorse. 
                  The realization of her wickedness and the futility of her jealousy caused her to collapse. 
                  She died instantly from the combined weight of her guilt and the karmic consequences 
                  of her actions.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-xl p-6">
                <h4 className="text-lg font-bold text-blue-700 mb-3">The Moral and Ritual Connection</h4>
                <p className="text-gray-700 mb-4">
                  This story teaches several crucial lessons:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li><strong>Complete Devotion:</strong> The vrat must be observed with total sincerity - half-measures or deception nullify its power</li>
                  <li><strong>Karmic Justice:</strong> Our actions in this life or previous lives determine our fate</li>
                  <li><strong>Divine Protection:</strong> Sincere devotion creates an invisible shield around our loved ones</li>
                  <li><strong>Consequences of Jealousy:</strong> Negative emotions like jealousy ultimately destroy the one who harbors them</li>
                </ul>
                <p className="text-gray-700">
                  This is why during Jitiya puja, mothers create small clay figures of "Chilhi and Siyarin" 
                  (eagle and jackal) and worship them - pledging to emulate the steadfast eagle and not the 
                  faltering jackal. Food offerings are also left for wild eagles and jackals as part of the 
                  tradition, seeking their blessings for the children.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story 3: Mahabharata Connection */}
      <section id="mahabharata" className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg mb-6">
              <Scroll className="w-6 h-6 text-blue-600" />
              <span className="font-bold text-blue-800">Story 3: Scriptural Legend</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">Krishna and the Revival of Parikshit</h2>
            <p className="text-xl text-blue-700 mb-8">The Mahabharata Connection to Jivitputrika</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <div className="prose prose-lg max-w-none">
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                  <span>⚔️</span> After the Great War
                </h3>
                <p className="text-gray-700">
                  This story connects Jivit Putrika directly to the great epic Mahabharata, specifically 
                  to the events following the devastating Kurukshetra war. It provides a scriptural 
                  foundation for the festival, involving Lord Krishna himself and the continuation 
                  of the Pandava lineage.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-blue-800 mb-4">The Aftermath of War</h3>
              
              <div className="flex flex-col lg:flex-row gap-6 items-center mb-8">
                <div className="lg:w-2/3">
                  <p className="text-gray-700 mb-4">
                    The great Kurukshetra war had ended after eighteen days of unprecedented bloodshed. 
                    The Pandavas had emerged victorious, but at a tremendous cost - almost all the warriors 
                    from both sides lay dead on the battlefield. The Kaurava army was completely destroyed, 
                    and the Pandava side had lost most of their heroes, including the brave 
                    <strong>Abhimanyu</strong>, son of Arjuna.
                  </p>
                </div>
                <div className="lg:w-1/3">
                  <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80"
                      alt="Ancient battlefield after great war"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-500 text-center mt-2">After the Great Kurukshetra War</p>
                </div>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-bold text-orange-700 mb-3">The Last Hope of the Pandavas</h4>
                <p className="text-gray-700">
                  <strong>Uttara</strong>, the young widow of Abhimanyu, was carrying her late husband's 
                  child - the last hope for the continuation of the Pandava dynasty. This unborn child 
                  represented the future of their entire lineage, as most of the Pandava warriors had 
                  perished in the war, leaving few heirs to carry forward their legacy.
                </p>
              </div>

              <p className="text-gray-700 mb-6">
                But even after the war's end, danger lurked. <strong>Ashwatthama</strong>, the son of 
                Guru Dronacharya, was consumed with rage and grief over his father's death during the war. 
                He blamed the Pandavas for using deceitful tactics to kill Dronacharya and was determined 
                to exact revenge by destroying their entire lineage.
              </p>

              <div className="bg-red-50 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-bold text-red-700 mb-3">The Divine Weapon Unleashed</h4>
                <p className="text-gray-700">
                  In his fury, Ashwatthama committed an unforgivable act. He invoked the dreaded 
                  <strong>Brahmastra</strong> - a divine weapon of mass destruction that could not 
                  be recalled once launched - and directed it specifically at Uttara's womb, 
                  intending to kill the unborn child and end the Pandava lineage forever.
                </p>
              </div>

              <p className="text-gray-700 mb-6">
                The Brahmastra, blazing like a thousand suns, struck its target with devastating force. 
                The unborn child in Uttara's womb was killed instantly by the divine weapon's power. 
                The hopes of the Pandava dynasty seemed to die with that innocent life, and grief 
                engulfed the entire family.
              </p>

              <div className="bg-yellow-50 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-bold text-yellow-700 mb-3">Lord Krishna's Divine Intervention</h4>
                <p className="text-gray-700">
                  However, <strong>Lord Krishna</strong>, the divine protector of the Pandavas and 
                  the avatar of Lord Vishnu, could not allow such injustice to prevail. Seeing the 
                  grief of the family and understanding the cosmic implications of the dynasty's end, 
                  he decided to intervene with his divine powers.
                </p>
              </div>

              <div className="text-center mb-8">
                <div className="relative w-full max-w-lg mx-auto h-64 rounded-2xl overflow-hidden shadow-xl mb-6">
                  <Image
                    src="https://images.unsplash.com/photo-1604519633166-61e8c4a68d9f?w=600&q=80"
                    alt="Lord Krishna blessing Uttara with divine grace"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                    <p className="text-lg font-semibold">Lord Krishna's Divine Miracle</p>
                    <p className="text-sm opacity-90">Reviving Parikshit - The "Jivitputrika"</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                Krishna approached Uttara and, placing his blessed hands on her womb, performed a 
                miracle that has been remembered for millennia. He transferred all the merit of his 
                own countless good deeds - the accumulated spiritual power of the Supreme Lord himself - 
                to the lifeless child within her womb.
              </p>

              <div className="bg-green-50 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-bold text-green-700 mb-3">The Miracle of Revival</h4>
                <p className="text-gray-700">
                  Through Krishna's divine grace, the child was restored to life. The dead fetus 
                  began to show signs of life once again - a heartbeat returned, movement was felt, 
                  and the child who had been declared lost was miraculously revived. This unprecedented 
                  act of divine compassion saved not just one life, but the entire future of the 
                  righteous Pandava lineage.
                </p>
              </div>

              <p className="text-gray-700 mb-6">
                When the child was born, he was given the name <strong>"Parikshit"</strong> - meaning 
                "the examined one" or "the tested one" - because he had been tested by death itself 
                and emerged victorious through divine grace. But in the context of this miracle, 
                he was also poetically called <strong>"Jivitputrika"</strong> - literally meaning 
                "the living son" or "the one given life."
              </p>

              <div className="bg-purple-50 rounded-xl p-6 mb-6">
                <h4 className="text-lg font-bold text-purple-700 mb-3">The Royal Legacy</h4>
                <p className="text-gray-700">
                  King Parikshit grew up to become one of the most just and righteous rulers in 
                  Indian history. His reign was marked by prosperity, justice, and dharma. 
                  He became the grandfather of the famous King Janamejaya, thus ensuring the 
                  continuation of the noble Pandava lineage for generations to come.
                </p>
              </div>

              <p className="text-gray-700 mb-6">
                According to some traditions, it was <strong>Sage Markandeya</strong> or <strong>Vyasa</strong> 
                who advised the Pandava women to observe a special fast on the Ashtami (eighth day) 
                of Krishna Paksha of Ashwin month - the very date on which this miraculous revival 
                had occurred - to honor and remember this divine intervention.
              </p>

              <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-xl p-6">
                <h4 className="text-lg font-bold text-orange-800 mb-3">Connection to Jivit Putrika</h4>
                <p className="text-gray-700 mb-4">
                  This Mahabharata story provides several key connections to the Jivit Putrika vrat:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                  <li><strong>Origin of the Name:</strong> "Jivitputrika" literally comes from this story - the child who was given life again</li>
                  <li><strong>Date Significance:</strong> The festival date corresponds to when this miracle occurred</li>
                  <li><strong>Divine Grace:</strong> Shows how the Supreme Lord protects children when mothers pray sincerely</li>
                  <li><strong>Scriptural Authority:</strong> Provides Vedic-Puranic sanction to the folk traditions</li>
                  <li><strong>Maternal Protection:</strong> Demonstrates that a mother's devotion can invoke divine intervention</li>
                </ul>
                <p className="text-gray-700">
                  Thus, when mothers observe Jivit Putrika vrat today, they are connecting with this 
                  ancient tradition of seeking divine protection for their children, following the 
                  example set by the Pandava women who first honored this miraculous revival with 
                  their own fasting and prayers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion and Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">The Eternal Message</h2>
          <p className="text-xl text-orange-100 mb-8 leading-relaxed">
            These three sacred stories, though different in origin and style, carry the same eternal message: 
            the power of selfless love, sincere devotion, and maternal sacrifice can invoke divine grace 
            to protect our children from all dangers.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6">Shared Wisdom</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl mb-3">💝</div>
                <h4 className="font-bold text-lg mb-2">Ultimate Sacrifice</h4>
                <p className="text-orange-100 text-sm">Love that transcends self-interest</p>
              </div>
              <div>
                <div className="text-3xl mb-3">🛡️</div>
                <h4 className="font-bold text-lg mb-2">Divine Protection</h4>
                <p className="text-orange-100 text-sm">Sacred shield around the innocent</p>
              </div>
              <div>
                <div className="text-3xl mb-3">⚖️</div>
                <h4 className="font-bold text-lg mb-2">Cosmic Justice</h4>
                <p className="text-orange-100 text-sm">Truth and righteousness prevail</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Link 
              href="/festivals/jivit-putrika"
              className="inline-flex items-center gap-3 bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 mr-4"
            >
              <span>🪔</span>
              Return to Festival Guide
              <span>→</span>
            </Link>
            
            <Link 
              href="/festivals"
              className="inline-flex items-center gap-3 bg-orange-800/50 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <span>🎊</span>
              Explore More Festivals
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}