'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'
import { Heart, BookOpen, ArrowDown } from 'lucide-react'
import YouTubeEmbed from '@/components/ui/YouTubeEmbed'

gsap.registerPlugin(ScrollTrigger)

const durgaStutiVerses = [
  {
    id: 1,
    type: 'opening',
    hindi: 'नमो नमो दुर्गे सुख करनी।\nनमो नमो अम्बे दुःख हरनी॥',
    devanagari: 'namo namo durge sukha karanī\nnamo namo ambe duḥkha haranī',
    english: 'Salutations to Goddess Durga, the bestower of happiness. Salutations to Mother Ambika, the remover of sorrows.',
    meaning: 'This opening verse establishes a devotional tone by offering repeated salutations to the Divine Mother, acknowledging her dual nature as the giver of joy and the remover of suffering.'
  },
  {
    id: 2,
    type: 'main',
    hindi: 'निरंकार है ज्योति तुम्हारी।\nतिहूँ लोक फैली उजियारी॥',
    devanagari: 'niraṅkāra hai jyoti tumhārī\ntihuṃ loka phailī ujiyārī',
    english: 'Your divine light is formless and eternal. Your radiance illuminates all three worlds (heaven, earth, and netherworld).',
    meaning: 'This verse describes the cosmic nature of the Divine Mother\'s light that transcends physical form and pervades all realms of existence.'
  },
  {
    id: 3,
    type: 'main',
    hindi: 'शशि ललाट मुख महाविशाला।\nनेत्र लाल भृकुटि विकराला॥',
    devanagari: 'śaśi lalāṭa mukha mahāviśālā\nnetra lāla bhṛkuṭi vikarālā',
    english: 'Your forehead is adorned with the moon, your face is vast and magnificent. Your eyes are red and your fierce eyebrows strike terror in evil.',
    meaning: 'This verse describes the divine iconography of Goddess Durga, emphasizing her benevolent beauty and her fierce aspect that destroys negativity.'
  },
  {
    id: 4,
    type: 'main',
    hindi: 'रूप मातु को अधिक सुहावे।\nदरश करत जन अति सुख पावे॥',
    devanagari: 'rūpa mātu ko adhika suhāve\ndaraśa karata jana ati sukha pāve',
    english: 'O Mother, your form is extremely beautiful. Those who have your darshan (sacred vision) experience immense joy.',
    meaning: 'This verse celebrates the divine beauty of the Mother and the spiritual bliss experienced by devotees who are blessed with her vision.'
  },
  {
    id: 5,
    type: 'main',
    hindi: 'तुम संसार शक्ति लै कीना।\nपालन हेतु अन्न धन दीना॥',
    devanagari: 'tuma saṃsāra śakti lai kīnā\npālana hetu anna dhana dīnā',
    english: 'You created this world with your divine power. For sustenance, you provided food and wealth to all beings.',
    meaning: 'This verse acknowledges the Divine Mother as the creator of the universe and the provider of all necessities for life.'
  },
  {
    id: 6,
    type: 'main',
    hindi: 'अन्नपूर्णा हुई जगदाता।\nतुम ही आदि सुन्दरी माता॥',
    devanagari: 'annapūrṇā huī jagadātā\ntuma hī ādi sundarī mātā',
    english: 'You became Annapurna, the giver to the world. You are the primordial beautiful Mother.',
    meaning: 'This verse recognizes the Divine Mother as Annapurna, the aspect that nourishes the world, and as the original source of all beauty and creation.'
  },
  {
    id: 7,
    type: 'main',
    hindi: 'प्रलयकाल सब नाशन हारी।\nतुम गौरी शिवशंकर प्यारी॥',
    devanagari: 'pralayakāla saba nāśana hārī\ntuma gaurī śivaśaṅkara pyārī',
    english: 'At the time of cosmic dissolution, you destroy everything. You are Gauri, beloved of Lord Shiva.',
    meaning: 'This verse describes the Mother\'s role in cosmic cycles as both creator and destroyer, and her eternal relationship with Lord Shiva as his consort Gauri.'
  },
  {
    id: 8,
    type: 'main',
    hindi: 'शिव योगी तुमरे गुण गावें।\nब्रह्मा विष्णु तुम्हें सिर नावें॥',
    devanagari: 'śiva yogī tumare guṇa gāvaiṃ\nbrahmā viṣṇu tumhaiṃ sira nāvaiṃ',
    english: 'Shiva, the great yogi, sings your praises. Brahma and Vishnu bow their heads to you.',
    meaning: 'This verse establishes the supreme status of the Divine Mother, showing that even the Trinity - Brahma, Vishnu, and Shiva - revere and worship her.'
  },
  {
    id: 9,
    type: 'main',
    hindi: 'रूप सरस्वती को तुम धारी।\nदे सुबुद्धि ऋषि मुनिन उबारी॥',
    devanagari: 'rūpa sarasvatī ko tuma dhārī\nde subuddhi ṛṣi munina ubārī',
    english: 'You took the form of Saraswati. By granting wisdom, you uplifted sages and seers.',
    meaning: 'This verse recognizes the Divine Mother\'s manifestation as Saraswati, the goddess of knowledge, and her role in enlightening spiritual seekers.'
  },
  {
    id: 10,
    type: 'main',
    hindi: 'धरा रूप नरसिंह को अम्बा।\nपरगट भईं फाड़कर खम्बा॥',
    devanagari: 'dharā rūpa narasiṃha ko ambā\nparagaṭa bhaīṃ phāḍakara khambā',
    english: 'O Mother, you took the form of Narasimha (lion-man). You manifested by tearing apart a pillar.',
    meaning: 'This verse refers to the Narasimha avatar, showing how the Divine Mother manifests in various forms to protect devotees and destroy evil.'
  },
  {
    id: 11,
    type: 'main',
    hindi: 'रक्षा करी प्रह्लाद बचायो।\nहिरण्याक्ष को स्वर्ग पठायो॥',
    devanagari: 'rakṣā karī prahlāda bacāyo\nhiraṇyākṣa ko svarga paṭhāyo',
    english: 'You protected and saved Prahlada. You sent Hiranyaksha to heaven (killed him).',
    meaning: 'This verse recalls the divine intervention to protect the devotee Prahlada and the destruction of the demon Hiranyaksha, demonstrating divine justice.'
  },
  {
    id: 12,
    type: 'main',
    hindi: 'लक्ष्मी रूप धरो जब अम्बे।\nसमुद्र मथन में शामिल सबसे॥',
    devanagari: 'lakṣmī rūpa dharo jaba ambe\nsamudra mathana meiṃ śāmila sabase',
    english: 'When you took the form of Lakshmi, O Mother, you emerged during the churning of the ocean.',
    meaning: 'This verse refers to the manifestation of Lakshmi during the cosmic event of ocean churning, representing prosperity and abundance emerging from divine grace.'
  },
  {
    id: 13,
    type: 'main',
    hindi: 'सुंदर शुभ्र फेनिल हिमालय।\nतुम सम्पूर्ण गुणन की आलय॥',
    devanagari: 'sundara śubhra phenila himālaya\ntuma sampūrṇa guṇana kī ālaya',
    english: 'Beautiful, pure white like the foamy Himalayas, you are the abode of all complete virtues.',
    meaning: 'This verse compares the Divine Mother\'s purity to the pristine Himalayas and establishes her as the source and repository of all divine qualities.'
  },
  {
    id: 14,
    type: 'main',
    hindi: 'मैं मन्द बुद्धि मलिन मति पामर।\nशरण आयो शीशी नावामर॥',
    devanagari: 'maiṃ manda buddhi malina mati pāmara\nśaraṇa āyo śīśī nāvāmara',
    english: 'I am of dull intellect, impure mind, and lowly. I have come to your refuge, bowing my head.',
    meaning: 'This verse represents the humble surrender of a devotee, acknowledging personal limitations and seeking the Mother\'s grace and protection.'
  },
  {
    id: 15,
    type: 'main',
    hindi: 'कलिकाल पेड़ा करुणा कीजै।\nअपनी शक्ति प्रेम दे दीजै॥',
    devanagari: 'kalikāla peḍā karuṇā kījai\napanī śakti prema de dījai',
    english: 'In this age of Kali, please show compassion. Grant me your divine power and love.',
    meaning: 'This verse is a prayer for divine grace during the challenging Kali Yuga, asking for the Mother\'s strength and love to navigate through difficult times.'
  },
  {
    id: 16,
    type: 'main',
    hindi: 'भवसागर में हमको डूबा।\nकर दया अब तारो गौरीपारा॥',
    devanagari: 'bhavasāgara meiṃ hamako ḍūbā\nkara dayā aba tāro gaurīpārā',
    english: 'We are drowning in the ocean of worldly existence. Please be merciful and ferry us across, O Gauri.',
    meaning: 'This verse uses the metaphor of an ocean to describe worldly suffering and asks the Divine Mother to be the boat that carries devotees to liberation.'
  },
  {
    id: 17,
    type: 'main',
    hindi: 'कष्ट हरो भगवती जगदम्बे।\nकिरिपा करो महामायी अम्बे॥',
    devanagari: 'kaṣṭa haro bhagavatī jagadambe\nkiripā karo mahāmāyī ambe',
    english: 'Remove our sufferings, O Divine Goddess Jagadamba. Be compassionate, O great illusory Mother.',
    meaning: 'This verse asks for relief from all forms of suffering and acknowledges the Mother as both the divine ruler of the universe and the cosmic illusion that teaches us.'
  },
  {
    id: 18,
    type: 'main',
    hindi: 'सुख सम्पत्ति लाओ मँमाता।\nतुम बिन कौन हमारा बाता॥',
    devanagari: 'sukha sampatti lāo māmātā\ntuma bina kauna hamārā bātā',
    english: 'Bring happiness and prosperity, O Mother. Without you, who else can speak for us?',
    meaning: 'This verse requests material and spiritual well-being while acknowledging complete dependence on the Divine Mother\'s grace and advocacy.'
  },
  {
    id: 19,
    type: 'main',
    hindi: 'भगति प्रदान करो जगदम्बे।\nशत्रु नाश करो गुण गम्बे॥',
    devanagari: 'bhagati pradāna karo jagadambe\nśatru nāśa karo guṇa gambe',
    english: 'Grant devotion, O Jagadamba. Destroy enemies, O repository of virtues.',
    meaning: 'This verse asks for the gift of genuine devotion and protection from enemies, both external and internal (like negative tendencies).'
  },
  {
    id: 20,
    type: 'main',
    hindi: 'भण्डार तुम्हारा भरा सदा है।\nज्ञान-ध्यान का गुणार्चन का॥',
    devanagari: 'bhaṇḍāra tumhārā bharā sadā hai\njñāna-dhyāna kā guṇārcana kā',
    english: 'Your treasury is always full of knowledge, meditation, and virtuous worship.',
    meaning: 'This verse praises the Mother\'s infinite storehouse of spiritual treasures - knowledge, meditation practices, and the merit of worship.'
  },
  {
    id: 21,
    type: 'closing',
    hindi: 'चरणों में रखो मुझे अम्बे।\nदुर्गा नाम जपू निरंतर बे॥',
    devanagari: 'caraṇoṃ meiṃ rakho mujhe ambe\ndurgā nāma japū nirantara be',
    english: 'Keep me at your feet, O Mother. Let me chant the name of Durga continuously.',
    meaning: 'This closing verse expresses the desire for permanent refuge at the Mother\'s feet and for constant remembrance through chanting her sacred name.'
  },
  {
    id: 22,
    type: 'closing',
    hindi: 'दुर्गा जी की कृपा से सब संकट टल जाएं।\nजो भी श्रद्धा से पढ़े मंगल कार्य पाएं॥',
    devanagari: 'durgā jī kī kṛpā se saba saṅkaṭa ṭala jāeṃ\njo bhī śraddhā se paḍhe maṅgala kārya pāeṃ',
    english: 'By Goddess Durga\'s grace, may all troubles be removed. Whoever reads this with faith shall attain auspicious results.',
    meaning: 'The concluding verse emphasizes the power of devotional reading and promises that sincere recitation brings divine blessings and resolution of difficulties.'
  }
]

export default function DurgaStutiPage() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const fullChantRef = useRef<HTMLDivElement>(null)
  const versesRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)

  const scrollToMeaning = () => {
    versesRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const fullChant = fullChantRef.current
    const verses = versesRef.current
    const video = videoRef.current

    if (!section || !title) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })

    tl.fromTo(title,
      { opacity: 0, y: 30, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power3.out' }
    )

    if (fullChant) {
      tl.fromTo(fullChant,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
        '-=0.3'
      )
    }

    if (verses) {
      const verseCards = verses.children
      tl.fromTo(verseCards,
        { opacity: 0, y: 20, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: 'power2.out'
        },
        '-=0.2'
      )
    }

    if (video) {
      tl.fromTo(video,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.2'
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === section) {
          trigger.kill()
        }
      })
    }
  }, [])

  const getVerseStyle = (type: string) => {
    switch (type) {
      case 'opening':
        return 'from-orange-100 to-yellow-100 border-orange-200'
      case 'closing':
        return 'from-red-50 to-pink-50 border-red-200'
      case 'main':
        return 'from-purple-100 to-pink-100 border-purple-200'
      default:
        return 'from-gray-50 to-gray-100 border-gray-200'
    }
  }

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 py-8"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/festivals/durga-puja"
            className="inline-flex items-center text-red-700 hover:text-red-900 transition-colors"
          >
            ← Back to Durga Puja
          </Link>
        </div>

        <div ref={titleRef} className="text-center pt-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="w-8 h-8 text-red-600 fill-current" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent leading-relaxed py-2">
              दुर्गा स्तुति
            </h1>
            <Heart className="w-8 h-8 text-red-600 fill-current" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4">
            Durga Stuti - Sacred Hymn to Divine Mother
          </h2>
          <p className="text-lg text-red-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Immerse yourself in the divine verses that invoke the blessings of Goddess Durga,
            the supreme protector and nurturer of the universe.
          </p>
        </div>

        {/* Complete Chant Section */}
        <div ref={fullChantRef} className="mb-16">
          <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-3xl p-8 border border-red-200 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-red-800 mb-4">
                🙏 Complete Durga Stuti
              </h3>
              <p className="text-red-700 mb-6">
                Listen to the complete recitation for spiritual immersion
              </p>
              <button
                onClick={scrollToMeaning}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Read with Meanings
                <ArrowDown className="w-4 h-4 ml-2" />
              </button>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-red-100">
              <div className="grid md:grid-cols-1 gap-6">
                <div className="text-center space-y-4">
                  {durgaStutiVerses.map((verse) => (
                    <div key={verse.id} className="mb-4">
                      <p className="text-lg font-semibold text-gray-800 leading-relaxed">
                        {verse.hindi}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Individual Verses with Meanings */}
        <div ref={versesRef} className="space-y-8 mb-16">
          <h3 className="text-3xl font-bold text-center text-red-800 mb-12">
            📿 Verse by Verse with Meanings
          </h3>
          {durgaStutiVerses.map((verse) => (
            <div
              key={verse.id}
              className={`relative bg-gradient-to-br ${getVerseStyle(verse.type)} rounded-3xl p-8 shadow-lg border-2 backdrop-blur-sm`}
            >
              {/* Verse Number */}
              <div className="absolute top-6 left-6 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                {verse.id}
              </div>

              {/* Hindi Text */}
              <div className="mb-6 pt-8">
                <h4 className="text-lg font-semibold text-red-800 mb-3">Sanskrit/Hindi Text</h4>
                <div className="bg-white/80 rounded-xl p-5 border border-red-100">
                  <p className="text-xl font-bold text-gray-900 leading-relaxed text-center mb-4">
                    {verse.hindi}
                  </p>
                  <p className="text-lg text-gray-600 mt-4 text-center italic">
                    {verse.devanagari}
                  </p>
                </div>
              </div>

              {/* English Translation */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-orange-800 mb-3">English Translation</h4>
                <div className="bg-white/80 rounded-xl p-5 border border-orange-100">
                  <p className="text-gray-800 text-lg leading-relaxed">
                    {verse.english}
                  </p>
                </div>
              </div>

              {/* Meaning */}
              <div>
                <h4 className="text-lg font-semibold text-pink-800 mb-3">Spiritual Meaning</h4>
                <div className="bg-white/80 rounded-xl p-5 border border-pink-100">
                  <p className="text-gray-700 leading-relaxed">
                    {verse.meaning}
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-6 right-6 opacity-10">
                <div className="text-6xl">🙏</div>
              </div>
            </div>
          ))}
        </div>

        {/* YouTube Video Section */}
        <div ref={videoRef} className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-red-200">
              <h3 className="text-2xl font-bold text-center text-red-800 mb-6">
                🎵 Original T-Series Durga Stuti
              </h3>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                <YouTubeEmbed
                  url="https://www.youtube.com/watch?v=kHLQZ7hXWnw"
                  title="Shree Durga Stuti - Anuradha Paudwal - T-Series"
                  className="w-full h-full"
                />
              </div>

              {/* Credits Section */}
              <div className="mt-8 p-6 bg-gradient-to-r from-red-100 to-pink-100 rounded-2xl border border-red-200">
                <h4 className="text-lg font-bold text-red-800 mb-4 text-center">
                  🙏 Credits & Attribution
                </h4>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="font-semibold text-gray-800">Original Composition</p>
                    <p className="text-gray-600">Ancient Sanskrit Texts</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Singer</p>
                    <p className="text-gray-600">Anuradha Paudwal</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Music Label</p>
                    <p className="text-gray-600">
                      <a
                        href="https://www.youtube.com/@TSeriesBhaktiSagar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                      >
                        T-Series
                      </a> (Gulshan Kumar)
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    This beautiful rendition brings the sacred verses of Durga Stuti to life with devotional melodies.
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    Video content courtesy of T-Series. All rights belong to T-Series and the respective artists.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-yellow-100 to-red-100 rounded-3xl border border-red-200">
          <h3 className="text-2xl font-bold text-red-800 mb-6 text-center">
            🌟 Benefits of Reciting Durga Stuti
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div className="space-y-3">
              <p>• <strong>Protection:</strong> Shields from negative energies and evil forces</p>
              <p>• <strong>Strength:</strong> Provides divine shakti and inner power</p>
              <p>• <strong>Prosperity:</strong> Attracts wealth and material abundance</p>
              <p>• <strong>Wisdom:</strong> Enhances spiritual knowledge and understanding</p>
            </div>
            <div className="space-y-3">
              <p>• <strong>Healing:</strong> Removes diseases and promotes well-being</p>
              <p>• <strong>Success:</strong> Helps overcome obstacles in all endeavors</p>
              <p>• <strong>Peace:</strong> Brings mental tranquility and emotional balance</p>
              <p>• <strong>Liberation:</strong> Leads to spiritual awakening and moksha</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 text-center">
          <p className="text-2xl font-bold text-red-600 mb-4">
            जय माता दुर्गे! जय जगदम्बे!
          </p>
          <p className="text-lg text-gray-600 mb-8">
            May Divine Mother Durga bless all devotees with strength, wisdom, and prosperity
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/festivals/durga-puja"
              className="px-6 py-3 bg-gradient-to-r from-red-700 to-orange-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Back to Durga Puja
            </Link>
            <Link
              href="/practices"
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              More Practices
            </Link>
            <Link
              href="/deities/durga"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              About Goddess Durga
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}