import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  Book,
  Crown,
  Heart,
  Star,
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  Scroll,
  TreePine,
  Sword,
  Mountain,
  Sun,
  ChevronRight,
  ArrowLeft,
  Shield,
  Flower2,
  Baby,
  Sparkles,
  Target,
  Zap,
  Globe,
  Home,
  Music,
  Gem,
  Flame,
  Clock
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dasharatha Putrakamesti Yajna - The Sacred Sacrifice for Sons | Bala Kanda | PeacefulAnswers',
  description: 'Detailed story of King Dasharatha\'s Putrakamesti Yajna - the sacred ritual that led to the divine birth of Rama and his brothers. Complete spiritual significance and teachings.',
  keywords: 'Putrakamesti yajna, Dasharatha, Rishyasringa, divine birth Rama, sacred ritual, Ramayana Bala Kanda',
  openGraph: {
    title: 'Dasharatha Putrakamesti Yajna - The Sacred Sacrifice for Sons',
    description: 'The divine ritual that brought forth the avatars - detailed story and spiritual teachings',
    type: 'website',
  },
}

const eventDetails = {
  title: 'दशरथ पुत्रकामेष्टि यज्ञ',
  englishTitle: 'Dasharatha\'s Putrakamesti Yajna',
  subtitle: 'The Royal Sacrifice for Sons',
  timeframe: 'Before the birth of Rama and his brothers',
  location: 'Ayodhya, in the royal yajna mandapa',
  duration: 'Several months of preparation, one year of ritual performance',
  keyParticipants: ['King Dasharatha', 'Sage Rishyasringa', 'Queen Kaushalya', 'Queen Kaikeyi', 'Queen Sumitra', 'Royal priests and ministers']
}

const detailedNarrative = [
  {
    phase: 'The Royal Sorrow',
    title: 'राजा का दुःख - The King\'s Anguish',
    content: `King Dasharatha, despite being blessed with three devoted wives - Kaushalya, Kaikeyi, and Sumitra - faced the deepest sorrow of his life: he had no children. Years passed, and the king grew increasingly troubled. His kingdom was prosperous, his people were happy, but the royal lineage had no heir.

The king would often sit in his private chambers, gazing at the empty cradles that had been prepared with hope. The queens, too, shared his anguish, each praying silently for the blessing of motherhood. Court ministers and well-wishers had tried various remedies, but nothing seemed to work.

Dasharatha's sorrow was not merely personal - as a king, he was responsible for ensuring the continuity of his righteous dynasty. The Ikshvaku lineage, known for its adherence to dharma, needed an heir who could carry forward the tradition of just rule.`,
    significance: 'This phase establishes the depth of desire for divine children, showing how even material prosperity cannot fulfill the deepest human longings.',
    image: 'https://images.unsplash.com/photo-1578528011634-50c02b2e6ce6?w=600&h=400&fit=crop'
  },
  {
    phase: 'Divine Consultation',
    title: 'दिव्य सलाह - Seeking Divine Guidance',
    content: `Understanding that ordinary means had failed, King Dasharatha consulted with his chief advisor, the wise minister Sumantra, and his spiritual guide, Sage Vasishtha. They advised him that his situation required divine intervention through a sacred ritual.

Sage Vasishtha explained that there was a powerful yajna called "Putrakamesti" - specifically designed for those seeking children. However, this ritual was extremely complex and could only be performed by a sage who had mastered its intricate procedures.

After much deliberation, they identified Sage Rishyasringa as the only person capable of conducting this sacred ceremony. Rishyasringa was known for his extraordinary purity, having been raised in complete isolation from worldly temptations, and his spiritual power was unmatched.`,
    significance: 'This shows the importance of seeking proper spiritual guidance and the role of qualified teachers in divine rituals.',
    image: 'https://images.unsplash.com/photo-1571115764595-644a1c79e753?w=600&h=400&fit=crop'
  },
  {
    phase: 'Inviting Rishyasringa',
    title: 'ऋष्यश्रृंग आमंत्रण - Invitation to the Great Sage',
    content: `Sage Rishyasringa was living in a distant forest ashram with his wife Shanta (who was actually Dasharatha's adopted daughter). The king sent his most trusted emissaries with great respect and humility to invite the sage to Ayodhya.

When the invitation reached Rishyasringa, he understood the cosmic significance of this request. Through his spiritual insight, he could perceive that this was not merely about a king's desire for children, but about bringing divine souls to earth for a greater purpose.

Rishyasringa agreed to come to Ayodhya, and his arrival was met with tremendous joy and reverence. The king personally welcomed the sage with all honors, offering him the highest respect and requesting his help in performing the Putrakamesti Yajna.`,
    significance: 'The invitation process demonstrates the proper protocol for approaching spiritual masters and the humility required from even kings when seeking divine blessings.',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop'
  },
  {
    phase: 'Elaborate Preparations',
    title: 'विस्तृत तैयारी - Sacred Preparations',
    content: `The preparation for the Putrakamesti Yajna was an elaborate process that took several months. A special yajna mandapa (ceremonial arena) was constructed according to precise Vedic specifications. The location was chosen based on astrological calculations and the natural energy of the land.

Hundreds of learned Brahmins were invited from across the kingdom to participate in and witness the ceremony. Enormous quantities of ghee, rice, aromatic woods, and other sacred materials were gathered. Special vessels made of gold and silver were crafted for the ritual.

The three queens underwent purification rituals and observed fasts. The entire kingdom participated through prayers and charitable activities. Every detail was meticulously planned according to the ancient scriptures, as even the smallest error could affect the ritual's efficacy.`,
    significance: 'The elaborate preparations show the importance of proper methodology in spiritual practices and the community\'s role in supporting divine endeavors.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop'
  },
  {
    phase: 'The Sacred Ritual',
    title: 'पवित्र अनुष्ठान - Performance of the Yajna',
    content: `The Putrakamesti Yajna began on an auspicious day determined by astrological calculations. Sage Rishyasringa, as the chief priest, initiated the complex ritual procedures that would continue for an entire year.

The yajna involved precise chanting of specific mantras, offerings of various materials into the sacred fire, and intricate geometric arrangements of ritual items. Each day brought different ceremonies, with the three queens participating as prescribed by the scriptures.

As the yajna progressed, supernatural signs began to appear. The sacred fire would blaze with unusual colors, celestial fragrances would fill the air, and devotees reported seeing divine lights. The very atmosphere of Ayodhya seemed to be charged with spiritual energy.

Throughout this period, King Dasharatha maintained strict adherence to spiritual disciplines, while the queens observed fasts and performed their own subsidiary rituals. The entire kingdom maintained an atmosphere of devotion and purity.`,
    significance: 'The year-long ritual demonstrates the patience and persistence required in spiritual practice, and how sustained effort creates the conditions for divine grace.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'
  },
  {
    phase: 'Divine Manifestation',
    title: 'दिव्य प्रकटीकरण - The Celestial Appearance',
    content: `As the yajna reached its climax, a extraordinary event occurred that stunned all present. From the sacred fire emerged a brilliant, radiant being - a divine messenger of the gods. This celestial being had a magnificent form that radiated pure light and carried an aura of immense spiritual power.

In the being's hands was a golden kalasha (pot) containing divine payasam (sacred pudding). The aroma emanating from this prasadam was unlike anything earthly - it filled the entire yajna mandapa with a fragrance that seemed to carry the essence of all divine realms.

The celestial being spoke in a voice that resonated through all three worlds: "O King Dasharatha, your sincere devotion and perfect performance of this sacred ritual has pleased the gods. This divine prasadam will grant you the sons you desire - but know that these will not be ordinary children, but divine souls who will incarnate for the welfare of all beings."

The entire assembly fell prostrate before this divine vision, overwhelmed by the realization that they were witnessing a moment of cosmic significance.`,
    significance: 'The divine manifestation represents the direct response of higher consciousness to sincere spiritual effort, showing how proper ritual can bridge the material and spiritual worlds.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop'
  },
  {
    phase: 'Distribution of Prasadam',
    title: 'प्रसाद वितरण - The Sacred Distribution',
    content: `Following the celestial being's instructions, King Dasharatha received the golden pot with trembling hands and overwhelming gratitude. The divine prasadam glowed with an inner light, and everyone could sense its extraordinary spiritual potency.

Sage Rishyasringa guided the distribution process according to divine protocol. Half of the prasadam was given to Queen Kaushalya, recognizing her as the chief queen. One-fourth was given to Queen Kaikeyi, and the remaining one-fourth to Queen Sumitra.

However, in a beautiful gesture of sisterly love and spiritual wisdom, Queen Sumitra divided her portion and shared half with each of the other queens. This act of selfless sharing would later result in her having twins, while also ensuring that all children would have special bonds with each other.

Each queen consumed her portion with deep devotion and faith, feeling an immediate transformation in her consciousness. They could sense the divine presence taking root within them, knowing that extraordinary souls would soon manifest through them.`,
    significance: 'The distribution process shows the importance of proper reception of divine grace and how selfless sharing multiplies spiritual blessings.',
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=600&h=400&fit=crop'
  },
  {
    phase: 'Cosmic Conception',
    title: 'दिव्य गर्भाधान - Divine Conception',
    content: `Within a short time after consuming the divine prasadam, all three queens experienced the miraculous occurrence of conception. But these were no ordinary pregnancies - the very air around the queens seemed to glow with divine energy, and their faces radiated an otherworldly beauty.

Queen Kaushalya, carrying the child who would be Rama (the seventh avatar of Vishnu), experienced profound spiritual visions during her pregnancy. She would often see cosmic scenes of divine realms and feel the presence of universal consciousness within her.

Queen Kaikeyi, carrying Bharata, found herself naturally inclined toward thoughts of sacrifice and renunciation. Queen Sumitra, carrying the twins Lakshmana and Shatrughna, experienced a deep sense of service and protection, as if preparing to nurture those who would serve the divine mission.

The entire kingdom could sense that something extraordinary was about to happen. Natural phenomena began showing unusual patterns - flowers bloomed out of season, birds sang more melodiously, and even the weather seemed more pleasant and harmonious.`,
    significance: 'The divine conception represents the descent of cosmic consciousness into material form, showing how spiritual practice can attract divine incarnations.',
    image: 'https://images.unsplash.com/photo-1578528011634-50c02b2e6ce6?w=600&h=400&fit=crop'
  }
]

const spiritualSignificance = [
  {
    aspect: 'The Power of Sincere Desire',
    teaching: 'Dasharatha\'s yearning for children was not mere personal want but a dharmic desire for continuing a righteous lineage.',
    modernApplication: 'True desires aligned with dharma and selfless purpose attract divine support.',
    sacredTruth: 'When personal desires merge with cosmic purpose, they become channels for divine manifestation.'
  },
  {
    aspect: 'Importance of Qualified Guidance',
    teaching: 'The complexity of Putrakamesti Yajna required Sage Rishyasringa\'s specialized knowledge and purity.',
    modernApplication: 'Spiritual endeavors need guidance from those who have mastered both knowledge and practice.',
    sacredTruth: 'Divine grace flows through those who have purified themselves and mastered sacred sciences.'
  },
  {
    aspect: 'Community Participation in Divine Work',
    teaching: 'The entire kingdom participated in prayers and support, creating a collective spiritual atmosphere.',
    modernApplication: 'Spiritual endeavors are strengthened when supported by a community of like-minded seekers.',
    sacredTruth: 'Collective consciousness can create powerful fields that attract divine intervention.'
  },
  {
    aspect: 'Persistence in Spiritual Practice',
    teaching: 'The year-long ritual required unwavering dedication and perfect adherence to prescribed procedures.',
    modernApplication: 'Spiritual transformation requires consistent practice over extended periods.',
    sacredTruth: 'Sustained spiritual effort creates the conditions necessary for divine grace to manifest.'
  },
  {
    aspect: 'Divine Response to Human Effort',
    teaching: 'The celestial being\'s appearance showed how proper spiritual practice attracts direct divine intervention.',
    modernApplication: 'Sincere spiritual effort, when properly directed, creates openings for divine guidance.',
    sacredTruth: 'The divine actively responds to those who approach with purity, humility, and correct methodology.'
  },
  {
    aspect: 'Sharing Multiplies Blessings',
    teaching: 'Queen Sumitra\'s sharing of her prasadam resulted in her receiving twin sons and special bonds for all children.',
    modernApplication: 'Generosity and selfless sharing increase rather than diminish our spiritual blessings.',
    sacredTruth: 'Divine grace expands when shared and contracts when hoarded.'
  }
]

const ritualElements = [
  {
    element: 'Sacred Fire (Agni)',
    significance: 'Represents divine consciousness and the transformative power that can manifest divine will in the material world.',
    symbolism: 'The bridge between human effort and divine response'
  },
  {
    element: 'Mantras and Chants',
    significance: 'Sacred sound vibrations that align human consciousness with cosmic frequencies and invoke divine attention.',
    symbolism: 'The vibrational keys that unlock divine dimensions'
  },
  {
    element: 'Offerings (Ahuti)',
    significance: 'Physical materials offered with devotion represent the surrender of material attachment for spiritual gain.',
    symbolism: 'The principle of sacrifice that transforms material into spiritual'
  },
  {
    element: 'Geometric Arrangements',
    significance: 'Sacred geometry creates energy patterns that facilitate the flow of divine forces into material reality.',
    symbolism: 'The cosmic order reflected in ritual precision'
  },
  {
    element: 'Collective Participation',
    significance: 'The unified intention of many pure hearts creates a powerful field of spiritual magnetism.',
    symbolism: 'The multiplying power of unified spiritual effort'
  },
  {
    element: 'Divine Prasadam',
    significance: 'The tangible form of divine grace that carries the power to manifest divine will in physical reality.',
    symbolism: 'The material vehicle of spiritual transformation'
  }
]

const historicalContext = [
  {
    aspect: 'Ancient Yajna Tradition',
    description: 'Putrakamesti represents one of the most sophisticated spiritual technologies developed in ancient India.',
    relevance: 'Shows the scientific approach to spirituality in Vedic civilization'
  },
  {
    aspect: 'Royal Dharma',
    description: 'Kings were expected to ensure dynastic continuity for the stability and spiritual welfare of their kingdoms.',
    relevance: 'Demonstrates the integration of personal, social, and spiritual responsibilities'
  },
  {
    aspect: 'Guru-Disciple Tradition',
    description: 'The relationship between Dasharatha and Rishyasringa exemplifies the ancient tradition of spiritual guidance.',
    relevance: 'Highlights the importance of authentic spiritual teachers in divine endeavors'
  },
  {
    aspect: 'Divine Incarnation Concept',
    description: 'The understanding that divine souls incarnate in response to world needs and proper spiritual preparation.',
    relevance: 'Provides context for avatar theology and conscious spiritual evolution'
  }
]

export default function PutrakamestiYajnaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-rose-50">
      {/* Navigation Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/scriptures" className="text-gray-600 hover:text-orange-600 transition-colors">
              Scriptures
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/scriptures/ramayana" className="text-gray-600 hover:text-orange-600 transition-colors">
              Ramayana
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/scriptures/ramayana/bala-kanda" className="text-gray-600 hover:text-orange-600 transition-colors">
              Bala Kanda
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-orange-600 font-medium">Putrakamesti Yajna</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-yellow-600 to-rose-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Flame className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">🔥 Episode 1 - The Sacred Beginning</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sanskrit">
                {eventDetails.title}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-orange-100">
                {eventDetails.englishTitle}
              </h2>
              <p className="text-lg text-yellow-100 leading-relaxed mb-8">
                {eventDetails.subtitle}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Calendar className="w-5 h-5 mb-2 text-yellow-200" />
                  <p className="text-sm text-yellow-200">Duration</p>
                  <p className="text-white font-semibold">{eventDetails.duration}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <MapPin className="w-5 h-5 mb-2 text-yellow-200" />
                  <p className="text-sm text-yellow-200">Location</p>
                  <p className="text-white font-semibold">{eventDetails.location}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#detailed-story"
                  className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Read Complete Story
                </Link>
                <Link
                  href="#spiritual-significance"
                  className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Spiritual Teachings
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-500/20 to-yellow-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=450&fit=crop"
                  alt="Sacred Yajna Fire"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Event Overview */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Event Overview</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-rose-600 mx-auto mb-8"></div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Participants</h3>
                <ul className="space-y-2">
                  {eventDetails.keyParticipants.map((participant, index) => (
                    <li key={index} className="flex items-center">
                      <Users className="w-4 h-4 text-orange-600 mr-2" />
                      <span className="text-gray-700">{participant}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Timeline Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-orange-600 mr-2" />
                    <span className="text-gray-700"><strong>When:</strong> {eventDetails.timeframe}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-orange-600 mr-2" />
                    <span className="text-gray-700"><strong>Where:</strong> {eventDetails.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-orange-600 mr-2" />
                    <span className="text-gray-700"><strong>Duration:</strong> {eventDetails.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Narrative */}
        <section id="detailed-story">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Complete Story</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-rose-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Experience the sacred journey from royal sorrow to divine manifestation, told in eight detailed phases
            </p>
          </div>

          <div className="space-y-12">
            {detailedNarrative.map((phase, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={phase.image}
                        alt={phase.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-600/70 to-yellow-600/70"></div>
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-xs font-semibold text-gray-800">Phase {index + 1}</span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white text-lg font-bold">{phase.phase}</h3>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">{phase.title}</h4>
                    <div className="prose prose-gray max-w-none mb-6">
                      {phase.content.split('\n\n').map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-gray-700 leading-relaxed mb-4">{paragraph}</p>
                      ))}
                    </div>
                    <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                      <h5 className="font-semibold text-orange-800 mb-2 flex items-center">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Spiritual Significance:
                      </h5>
                      <p className="text-orange-700 text-sm">{phase.significance}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spiritual Significance */}
        <section id="spiritual-significance">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Deep Spiritual Teachings</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-rose-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The Putrakamesti Yajna reveals profound spiritual principles about desire, effort, and divine grace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {spiritualSignificance.map((teaching, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <Gem className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{teaching.aspect}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">{teaching.teaching}</p>
                <div className="bg-orange-50 rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold text-orange-800 mb-2">Modern Application:</p>
                  <p className="text-orange-700 text-sm">{teaching.modernApplication}</p>
                </div>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-yellow-800 mb-2">Sacred Truth:</p>
                  <p className="text-yellow-700 text-sm font-style italic">{teaching.sacredTruth}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ritual Elements */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sacred Ritual Elements</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-rose-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Understanding the symbolic and practical elements that made this yajna so powerful
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ritualElements.map((element, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-center mb-4">
                  <Flame className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-gray-900">{element.element}</h3>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{element.significance}</p>
                <div className="bg-orange-50 rounded-lg p-3">
                  <p className="text-xs font-semibold text-orange-800 mb-1">Symbolism:</p>
                  <p className="text-orange-700 text-xs italic">{element.symbolism}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Historical Context */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Historical & Cultural Context</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-rose-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {historicalContext.map((context, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{context.aspect}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">{context.description}</p>
                <div className="bg-rose-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-rose-800 mb-2">Modern Relevance:</p>
                  <p className="text-rose-700 text-sm">{context.relevance}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <section className="bg-gradient-to-r from-orange-600 via-yellow-600 to-rose-600 text-white rounded-3xl p-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">🌟 Continue the Divine Journey 🌟</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              The sacred yajna has been completed and divine grace has been received. Now witness the miraculous birth of the divine princes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/scriptures/ramayana/bala-kanda/divine-birth"
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
              >
                Next: Divine Birth of Rama
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/scriptures/ramayana/bala-kanda"
                className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Bala Kanda
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}