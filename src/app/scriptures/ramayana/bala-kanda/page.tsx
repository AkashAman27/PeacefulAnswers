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
  Clock
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bala Kanda - The Book of Childhood | Complete Ramayana First Kand | PeacefulAnswers',
  description: 'Explore the complete Bala Kanda (1st book) of Ramayana in detail - Birth of Rama, childhood adventures, training with Vishwamitra, marriage with Sita. Deep spiritual insights.',
  keywords: 'Bala Kanda, Ramayana first book, Rama birth, Vishwamitra, Sita marriage, Shiva bow, childhood Rama, Putrakamesti yajna',
  openGraph: {
    title: 'Bala Kanda - The Book of Childhood | First Book of Ramayana',
    description: 'The divine beginning of Ramayana - Birth and childhood of Lord Rama, his training, and marriage to Sita',
    type: 'website',
  },
}

const balaKandaOverview = {
  title: 'बाल काण्ड - Bala Kanda',
  subtitle: 'The Book of Childhood - The Divine Beginning',
  description: 'The Bala Kanda, the first and foundational book of the Ramayana, narrates the divine birth of Lord Rama and his three brothers, their extraordinary childhood, their training under the great sage Vishwamitra, their heroic deeds in protecting sacred yajnas from demons, and culminates in Rama\'s marriage to Sita after breaking Lord Shiva\'s mighty bow. This kanda establishes the divine nature of Rama and sets the stage for the epic journey that follows.',
  chapters: '77 Chapters',
  verses: 'Approximately 2,000 Shlokas',
  themes: ['Divine Birth', 'Sacred Education', 'Demon Slaying', 'Divine Marriage', 'Dharmic Foundation'],
  significance: 'Establishes Rama as the seventh avatar of Vishnu and lays the foundation for the entire epic'
}

const majorEvents = [
  {
    id: 'dasharatha-putrakamesti',
    title: 'दशरथ पुत्रकामेष्टि - Dasharatha\'s Putrakamesti Yajna',
    subtitle: 'The Royal Sacrifice for Sons',
    timeframe: 'Before Rama\'s birth',
    description: 'King Dasharatha, despite having three queens, remained childless for many years. Tormented by this, he performs the sacred Putrakamesti Yajna under the guidance of Sage Rishyasringa. The yajna is successful, and a divine being emerges from the sacrificial fire carrying a golden pot of divine payasam (sacred pudding) to be distributed among the queens.',
    keyAspects: [
      'Dasharatha\'s deep sorrow at being childless despite three marriages',
      'Consultation with ministers and sages about performing the yajna',
      'Invitation to Sage Rishyasringa, the expert in Putrakamesti ritual',
      'Elaborate preparations and performance of the sacred yajna',
      'Appearance of divine being with golden pot of payasam',
      'Distribution of divine prasadam among Queens Kaushalya, Kaikeyi, and Sumitra',
      'The divine conception and pregnancy of all three queens'
    ],
    spiritualSignificance: 'The Putrakamesti Yajna represents the power of sincere devotion and proper ritual when performed with pure intention. It shows how divine grace responds to genuine spiritual effort and righteous desires for continuing dharmic lineage.',
    image: 'https://images.unsplash.com/photo-1578528011634-50c02b2e6ce6?w=600&h=400&fit=crop',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'divine-birth',
    title: 'दिव्य जन्म - The Divine Birth of the Princes',
    subtitle: 'Avatars Descend to Earth',
    timeframe: 'Chaitra Shukla Navami (Ram Navami)',
    description: 'On the auspicious day of Chaitra Shukla Navami, at the perfect astrological moment during Punarvasu Nakshatra, Lord Rama is born to Queen Kaushalya as the seventh avatar of Lord Vishnu. The other princes - Bharata, Lakshmana, and Shatrughna - are also born, each carrying divine qualities. The entire universe rejoices at the birth of these divine souls.',
    keyAspects: [
      'Rama\'s birth during the most auspicious planetary alignment',
      'Divine radiance and extraordinary beauty of baby Rama',
      'Simultaneous birth of Bharata to Kaikeyi',
      'Birth of twins Lakshmana and Shatrughna to Sumitra',
      'Celestial celebrations and shower of flowers from heaven',
      'Natural phenomena indicating divine presence',
      'Joy throughout the kingdom of Ayodhya',
      'Prophetic declarations about Rama\'s future greatness'
    ],
    spiritualSignificance: 'The divine birth represents the descent of pure consciousness into the material world to restore dharma. Each prince embodies specific divine qualities - Rama (righteousness), Lakshmana (service), Bharata (sacrifice), and Shatrughna (elimination of enemies of dharma).',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 'childhood-education',
    title: 'बाल्यकाल शिक्षा - Childhood and Early Education',
    subtitle: 'The Princes\' Formation Years',
    timeframe: 'Ages 1-16',
    description: 'The four princes grow up in the royal palace of Ayodhya, receiving the finest education befitting their divine nature and royal status. They are trained in the 64 arts and sciences, martial skills, statecraft, and spiritual wisdom. Rama shows extraordinary intelligence, compassion, and leadership qualities from an early age.',
    keyAspects: [
      'Education in the 64 traditional arts and sciences',
      'Training in various weapons and martial arts',
      'Study of Vedas, Upanishads, and sacred scriptures',
      'Learning of music, dance, painting, and poetry',
      'Training in horsemanship, elephant riding, and chariot driving',
      'Education in statecraft, diplomacy, and administration',
      'Development of exceptional physical strength and beauty',
      'Formation of deep brotherhood bonds among the four princes'
    ],
    spiritualSignificance: 'The comprehensive education represents the ideal development of human potential - physical, intellectual, emotional, and spiritual. It shows how divine souls, even in human form, must develop all capabilities to fulfill their mission.',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'vishwamitra-arrival',
    title: 'विश्वामित्र आगमन - Arrival of Sage Vishwamitra',
    subtitle: 'The Great Sage\'s Request',
    timeframe: 'When Rama is 16 years old',
    description: 'The powerful sage Vishwamitra arrives at Dasharatha\'s court with a specific request - he needs Rama\'s help to protect his yajna from the demons Tataka, Subahu, and Maricha who have been disrupting sacred rituals. Despite Dasharatha\'s reluctance to send his young son into danger, Vishwamitra insists, revealing Rama\'s true purpose.',
    keyAspects: [
      'Vishwamitra\'s dramatic arrival at the royal court',
      'His request for Rama to accompany him to the forest',
      'Dasharatha\'s emotional resistance to sending young Rama',
      'Sage Vasishtha\'s counsel about Vishwamitra\'s true nature',
      'Revelation of Vishwamitra\'s transformation from king to sage',
      'The sage\'s assurance about Rama\'s safety and divine purpose',
      'Dasharatha\'s eventual consent with a heavy heart',
      'Lakshmana\'s insistence on accompanying Rama'
    ],
    spiritualSignificance: 'Vishwamitra\'s arrival represents the call of dharma that comes to awaken divine souls to their greater purpose. It shows how spiritual masters guide incarnations toward their destined mission.',
    image: 'https://images.unsplash.com/photo-1571115764595-644a1c79e753?w=600&h=400&fit=crop',
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 'tataka-vadha',
    title: 'ताड़का वध - Slaying of Tataka',
    subtitle: 'The First Demon Conquest',
    timeframe: 'During journey with Vishwamitra',
    description: 'Rama\'s first major test comes when Vishwamitra asks him to kill the demoness Tataka, who has been terrorizing the region and preventing sages from performing their spiritual practices. Despite initial hesitation about killing a woman, Rama understands his dharma as a protector and eliminates the threat with a single arrow.',
    keyAspects: [
      'Vishwamitra\'s explanation of Tataka\'s destructive nature',
      'Rama\'s initial moral dilemma about fighting a woman',
      'Vishwamitra\'s teaching about kshatriya dharma',
      'Tataka\'s fierce attack with supernatural powers',
      'Rama\'s precise and compassionate execution',
      'Liberation of the region from demonic influence',
      'Celebration by sages and local people',
      'Vishwamitra\'s gift of divine weapons to Rama'
    ],
    spiritualSignificance: 'The slaying of Tataka represents the need to eliminate negative forces that obstruct spiritual progress. It teaches that compassion sometimes requires firm action to protect the innocent and preserve dharma.',
    image: 'https://images.unsplash.com/photo-1578528011634-50c02b2e6ce6?w=600&h=400&fit=crop',
    color: 'from-red-500 to-orange-500'
  },
  {
    id: 'divine-weapons',
    title: 'दिव्यास्त्र प्राप्ति - Receiving Divine Weapons',
    subtitle: 'The Arsenal of Cosmic Powers',
    timeframe: 'After defeating Tataka',
    description: 'Pleased with Rama\'s righteous action, Sage Vishwamitra bestows upon him the knowledge of divine weapons (astras) and their mantras. These include Brahmastra, Varunastra, Agneyastra, and many others. Each weapon has cosmic power and can only be used by those pure of heart and purpose.',
    keyAspects: [
      'Vishwamitra\'s explanation of each divine weapon\'s power',
      'Teaching of sacred mantras for invoking and withdrawing weapons',
      'Understanding the ethical use of divine powers',
      'Rama\'s natural mastery over cosmic forces',
      'Lakshmana also receiving some divine weapons',
      'The responsibility that comes with such power',
      'Tests of Rama\'s wisdom in weapon usage',
      'Preparation for future battles against greater demons'
    ],
    spiritualSignificance: 'The divine weapons represent mastery over cosmic forces that comes with spiritual evolution. They symbolize the various powers available to those who are pure in intention and aligned with dharma.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    color: 'from-purple-500 to-blue-500'
  },
  {
    id: 'yajna-protection',
    title: 'यज्ञ रक्षा - Protection of the Sacred Yajna',
    subtitle: 'Defeating Subahu and Maricha',
    timeframe: 'At Vishwamitra\'s ashram',
    description: 'During Vishwamitra\'s sacred yajna, the demons Subahu and Maricha attack with their army to pollute and destroy the ceremony. Rama and Lakshmana successfully defend the yajna, with Rama killing Subahu with a single arrow and hurling Maricha far across the ocean without killing him (showing his compassion even for enemies).',
    keyAspects: [
      'The elaborate preparation for Vishwamitra\'s yajna',
      'Rama and Lakshmana standing guard over the sacred fire',
      'Sudden attack by Subahu and his demonic forces',
      'Rama\'s strategic use of different divine weapons',
      'Compassionate treatment of Maricha (future golden deer)',
      'Complete protection of the sacred ritual',
      'Blessing and gratitude from assembled sages',
      'Vishwamitra\'s decision to take the brothers to Mithila'
    ],
    spiritualSignificance: 'The protection of yajna represents the defense of spiritual practices against negative forces. It shows how divine incarnations ensure that sacred knowledge and practices are preserved for humanity\'s benefit.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop',
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'journey-to-mithila',
    title: 'मिथिला यात्रा - Journey to Mithila',
    subtitle: 'Towards Divine Destiny',
    timeframe: 'After successful yajna protection',
    description: 'Sage Vishwamitra decides to take Rama and Lakshmana to Mithila, the kingdom of King Janaka, where a great bow-breaking ceremony is being held. The journey introduces the brothers to various sacred places, ancient stories, and prepares them for their encounter with destiny in the form of Sita.',
    keyAspects: [
      'Vishwamitra\'s mysterious decision to visit Mithila',
      'Journey through sacred forests and ancient pilgrimage sites',
      'Stories and legends shared during the journey',
      'Meeting various sages and receiving their blessings',
      'Descriptions of Mithila\'s beauty and prosperity',
      'Rama\'s growing anticipation of something significant',
      'The brothers\' wonder at divine synchronicity',
      'Approach to King Janaka\'s magnificent palace'
    ],
    spiritualSignificance: 'The journey to Mithila represents the divine orchestration that brings together souls destined for each other. It shows how spiritual guides lead incarnations toward their cosmic purpose.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop',
    color: 'from-teal-500 to-green-500'
  },
  {
    id: 'sita-first-sight',
    title: 'सीता प्रथम दर्शन - First Sight of Sita',
    subtitle: 'The Divine Recognition',
    timeframe: 'In Janaka\'s palace garden',
    description: 'In King Janaka\'s beautiful garden, Rama first sees Sita, and both experience instant divine recognition. This is not mere human attraction but the reunion of cosmic consciousness - Vishnu and Lakshmi recognizing each other in human form. Their eyes meet, and both understand their eternal connection.',
    keyAspects: [
      'Sita\'s extraordinary beauty and divine radiance',
      'Rama\'s immediate recognition of his eternal consort',
      'The mutual attraction transcending physical appearance',
      'Spiritual communion through exchanged glances',
      'Sita\'s companions noticing her transformed state',
      'Rama\'s deep contemplation about his feelings',
      'The cosmic significance hidden in human emotion',
      'Both souls remembering their eternal connection'
    ],
    spiritualSignificance: 'The first meeting represents the recognition of eternal spiritual partnership. It demonstrates how divine souls recognize each other across incarnations and how true love transcends physical attraction to reach spiritual unity.',
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=600&h=400&fit=crop',
    color: 'from-pink-500 to-purple-500'
  },
  {
    id: 'shiva-bow-ceremony',
    title: 'शिव धनुष समारोह - The Shiva Bow Ceremony',
    subtitle: 'The Ultimate Test',
    timeframe: 'In Janaka\'s court',
    description: 'King Janaka has declared that whoever can string Lord Shiva\'s mighty bow will win Sita\'s hand in marriage. This divine bow, given by Shiva to Janaka\'s ancestors, has never been moved by any mortal. Kings from across the world have failed, and now Rama approaches this ultimate test of divine strength and worthiness.',
    keyAspects: [
      'The history and divine origin of Shiva\'s bow',
      'Failed attempts by numerous mighty kings',
      'The bow\'s enormous size requiring hundreds to carry',
      'Janaka\'s explanation of the challenge',
      'Rama\'s humble request for permission to try',
      'The crowd\'s amazement at his confidence',
      'Sita\'s silent prayer for Rama\'s success',
      'The cosmic significance of this moment'
    ],
    spiritualSignificance: 'The Shiva bow represents the ultimate spiritual challenge that only divine consciousness can overcome. It symbolizes the breaking of ego and the demonstration of worthiness to receive divine grace.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'bow-breaking',
    title: 'धनुष भंग - The Breaking of Shiva\'s Bow',
    subtitle: 'The Divine Miracle',
    timeframe: 'During the swayamvara ceremony',
    description: 'With divine ease and grace, Rama not only strings Shiva\'s bow but breaks it in the process, creating a sound that reverberates across the three worlds. This miraculous feat proves his divine nature and wins him Sita\'s hand in marriage. The assembled kings acknowledge his supremacy, and celestial beings shower flowers from heaven.',
    keyAspects: [
      'Rama\'s effortless lifting of the mighty bow',
      'The bow breaking with a cosmic thunderous sound',
      'Earthquakes and celestial phenomena following the event',
      'Sita\'s joy and the garland ceremony',
      'Celebration throughout Mithila kingdom',
      'Recognition of Rama\'s divine nature by all present',
      'Defeated kings\' acceptance of Rama\'s superiority',
      'Cosmic celebration by gods and sages'
    ],
    spiritualSignificance: 'The breaking of the bow represents the shattering of all limitations and the demonstration of unlimited divine power. It shows how the divine easily accomplishes what seems impossible to ordinary consciousness.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'divine-marriage',
    title: 'दिव्य विवाह - The Divine Marriage',
    subtitle: 'Union of Cosmic Consciousness',
    timeframe: 'Following the bow-breaking',
    description: 'The marriage of Rama and Sita is not merely a royal wedding but a cosmic event - the union of Vishnu and Lakshmi in human form. The ceremony is performed with full Vedic rituals, attended by gods, sages, and royalty from across the world. This marriage establishes the divine couple that will later demonstrate the highest ideals of partnership.',
    keyAspects: [
      'Elaborate preparations for the divine wedding',
      'Arrival of Dasharatha and his entourage from Ayodhya',
      'Vedic marriage ceremony with all sacred rituals',
      'Exchange of vows between divine souls',
      'Simultaneous marriages of other brothers',
      'Celebration lasting several days',
      'Blessings from gods, sages, and elders',
      'The cosmic significance of this union'
    ],
    spiritualSignificance: 'The divine marriage represents the perfect union of consciousness (Rama) and energy (Sita), spirit and matter, dharma and devotion. It establishes the ideal of sacred partnership in dharmic life.',
    image: 'https://images.unsplash.com/photo-1571115764595-644a1c79e753?w=600&h=400&fit=crop',
    color: 'from-rose-500 to-pink-500'
  },
  {
    id: 'return-ayodhya',
    title: 'अयोध्या वापसी - Return to Ayodhya',
    subtitle: 'Homecoming of the Divine Couples',
    timeframe: 'After the marriage ceremony',
    description: 'The newlywed couples return to Ayodhya in a grand procession. The people of Ayodhya welcome their beloved princes and their divine brides with immense joy and celebration. The Bala Kanda concludes with the establishment of these divine souls in their earthly home, preparing for the greater drama that will unfold.',
    keyAspects: [
      'Grand procession from Mithila to Ayodhya',
      'Joyous welcome by the people of Ayodhya',
      'Introduction of the divine brides to palace life',
      'Celebration throughout the kingdom',
      'Blessings from Queen Mothers and palace elders',
      'Establishment of divine couples in their roles',
      'Period of happiness and prosperity in Ayodhya',
      'Setting stage for future events of the epic'
    ],
    spiritualSignificance: 'The return to Ayodhya represents the integration of divine consciousness into worldly life. It shows how spiritual realization must be grounded in practical existence while maintaining divine ideals.',
    image: 'https://images.unsplash.com/photo-1578528011634-50c02b2e6ce6?w=600&h=400&fit=crop',
    color: 'from-green-500 to-blue-500'
  }
]

const characterDevelopment = [
  {
    character: 'Lord Rama',
    evolution: 'From Divine Child to Ideal Prince to Worthy Bridegroom',
    keyMoments: [
      'Divine birth with cosmic significance',
      'Exceptional childhood displaying supernatural abilities',
      'Training under Vishwamitra and learning divine weapons',
      'First demon slaying showing dharmic courage',
      'Breaking Shiva\'s bow demonstrating divine power'
    ],
    spiritualGrowth: 'Rama\'s character in Bala Kanda establishes him as the perfect blend of human accessibility and divine power. He grows from beloved child to capable protector to worthy consort, always maintaining humility despite his extraordinary abilities.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop'
  },
  {
    character: 'Sita Devi',
    evolution: 'From Adopted Princess to Dharmic Maiden to Divine Bride',
    keyMoments: [
      'Mysterious discovery as a baby in the earth furrow',
      'Growing up with divine qualities and beauty',
      'Recognition of Rama as her destined partner',
      'Grace and dignity during the swayamvara',
      'Perfect execution of marriage ceremonies'
    ],
    spiritualGrowth: 'Sita represents the ideal of feminine divinity - pure, devoted, and wise. Her character shows natural spiritual evolution toward recognizing and uniting with her eternal partner.',
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=300&h=300&fit=crop'
  },
  {
    character: 'Sage Vishwamitra',
    evolution: 'From Powerful King to Realized Sage to Divine Guide',
    keyMoments: [
      'Background as king who became sage through tapasya',
      'Arriving at Ayodhya to request Rama\'s help',
      'Training Rama in divine weapons and spiritual wisdom',
      'Protecting sacred yajnas with Rama\'s assistance',
      'Orchestrating Rama\'s meeting with destiny in Mithila'
    ],
    spiritualGrowth: 'Vishwamitra represents the transformation from worldly power to spiritual authority. He serves as the catalyst who awakens Rama to his greater purpose.',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=300&fit=crop'
  },
  {
    character: 'Lakshmana',
    evolution: 'From Devoted Brother to Loyal Companion to Ideal Supporter',
    keyMoments: [
      'Birth as Rama\'s eternal companion',
      'Natural devotion and attachment to Rama',
      'Insistence on accompanying Rama to the forest',
      'Learning divine weapons alongside Rama',
      'Supporting Rama through all challenges'
    ],
    spiritualGrowth: 'Lakshmana embodies the ideal of selfless service and devotion. His character demonstrates how pure love naturally leads to complete dedication.',
    image: 'https://images.unsplash.com/photo-1588402140747-6fb35f3fbbb6?w=300&h=300&fit=crop'
  },
  {
    character: 'King Dasharatha',
    evolution: 'From Childless King to Blessed Father to Concerned Parent',
    keyMoments: [
      'Years of longing for children despite having three wives',
      'Performance of Putrakamesti yajna for divine sons',
      'Joy at the birth of four divine princes',
      'Pride in their exceptional development',
      'Difficult decision to allow Rama to go with Vishwamitra'
    ],
    spiritualGrowth: 'Dasharatha represents the devoted devotee whose sincere spiritual practice brings divine grace. His character shows the joy and challenges of being blessed with divine children.',
    image: 'https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?w=300&h=300&fit=crop'
  }
]

const spiritualTeachings = [
  {
    teaching: 'The Power of Sincere Devotion',
    description: 'Dasharatha\'s Putrakamesti yajna demonstrates how sincere spiritual practice, when performed with pure intention and proper guidance, attracts divine grace and fulfills righteous desires.',
    verse: 'श्रद्धावान् लभते ज्ञानं (śraddhāvān labhate jñānaṃ) - The faithful one obtains knowledge',
    application: 'Sincere spiritual practice with faith and proper guidance leads to the fulfillment of dharmic aspirations.',
    symbolism: 'The divine response to genuine spiritual effort'
  },
  {
    teaching: 'Divine Incarnation for Dharma',
    description: 'Rama\'s birth shows how divine consciousness incarnates to restore dharma and guide humanity. Even divine incarnations undergo human development while maintaining their essential nature.',
    verse: 'यदा यदा हि धर्मस्य ग्लानिर्भवति भारत (yadā yadā hi dharmasya glānirbhavati bhārata) - Whenever dharma declines, O Bharata',
    application: 'Understanding that divine help comes to restore righteousness, and recognizing divine presence in exceptional beings.',
    symbolism: 'The descent of divinity to uplift humanity'
  },
  {
    teaching: 'Comprehensive Education for Divine Purpose',
    description: 'The education of the princes shows how proper development includes all aspects - physical, intellectual, emotional, and spiritual - to prepare divine souls for their mission.',
    verse: 'विद्याददाति विनयं (vidyā dadāti vinayaṃ) - Knowledge gives humility',
    application: 'Balanced education that develops all human potentials while maintaining humility and dharmic values.',
    symbolism: 'The perfect preparation for divine service'
  },
  {
    teaching: 'Dharmic Response to Spiritual Calling',
    description: 'Rama\'s willingness to go with Vishwamitra teaches about responding to spiritual calling, even when it means leaving comfort and facing unknown challenges.',
    verse: 'कर्मण्येवाधिकारस्ते (karmaṇyevādhikāras te) - You have the right to action only',
    application: 'Responding to duty and spiritual calling without attachment to personal comfort or convenience.',
    symbolism: 'The surrender to divine will and purpose'
  },
  {
    teaching: 'Protection of Dharma Requires Strength',
    description: 'The slaying of Tataka and protection of yajnas teaches that maintaining dharma sometimes requires the use of force against those who threaten spiritual practices.',
    verse: 'अहिंसा परमो धर्म: धर्म हिंसा तथैव च (ahiṃsā paramo dharmaḥ dharma hiṃsā tathaiva ca) - Non-violence is the highest dharma, but violence in service of dharma is equally valid',
    application: 'Understanding when compassionate strength is necessary to protect the innocent and preserve spiritual values.',
    symbolism: 'The warrior aspect of spirituality'
  },
  {
    teaching: 'Divine Recognition and Eternal Partnership',
    description: 'The meeting and marriage of Rama and Sita demonstrates how evolved souls recognize their eternal spiritual partners and unite for divine purpose.',
    verse: 'सा त्वं ममात्मा हृदये निविष्टा (sā tvaṃ mamātmā hṛdaye niviṣṭā) - You are my very soul residing in my heart',
    application: 'Recognizing that true partnership is based on spiritual connection and shared divine purpose rather than mere attraction.',
    symbolism: 'The union of consciousness and energy in divine partnership'
  }
]

const culturalImpact = [
  {
    aspect: 'Birth Celebrations',
    description: 'Ram Navami, celebrating Rama\'s birth, has become one of the most important Hindu festivals',
    examples: [
      'Annual celebrations across India and worldwide',
      'Recitation of Ram Charit Manas and Ramayana',
      'Processions and community gatherings',
      'Fasting and prayer dedicated to Lord Rama'
    ]
  },
  {
    aspect: 'Educational Ideals',
    description: 'The comprehensive education of the princes has influenced Indian educational philosophy',
    examples: [
      'Gurukula system emphasizing holistic development',
      'Integration of spiritual and material education',
      'Teacher-student relationships based on respect and devotion',
      'Balance between knowledge and character development'
    ]
  },
  {
    aspect: 'Marriage Traditions',
    description: 'Rama-Sita\'s marriage has become the ideal for Hindu wedding ceremonies',
    examples: [
      'Swayamvara tradition in partner selection',
      'Elaborate Vedic wedding ceremonies',
      'Emphasis on spiritual compatibility',
      'Family involvement in marriage arrangements'
    ]
  },
  {
    aspect: 'Spiritual Practices',
    description: 'The yajna traditions and spiritual practices described have influenced Hindu religious life',
    examples: [
      'Continued performance of Putrakamesti and other yajnas',
      'Pilgrimage to places associated with Ramayana',
      'Daily recitation of Rama\'s names and stories',
      'Integration of Ramayana teachings in spiritual practice'
    ]
  }
]

const sacredPlaces = [
  {
    place: 'Ayodhya',
    significance: 'Birthplace of Lord Rama and capital of his kingdom',
    description: 'The sacred city where Rama was born and where the divine drama begins. Today, millions of devotees visit to pay homage to their beloved Lord.',
    modernRelevance: 'Major pilgrimage center with numerous temples dedicated to Rama'
  },
  {
    place: 'Mithila (Janakpur)',
    significance: 'Birthplace of Sita and site of the divine marriage',
    description: 'The kingdom of King Janaka where Sita grew up and where she married Rama after he broke Shiva\'s bow.',
    modernRelevance: 'Important pilgrimage site in present-day Nepal celebrating Sita Mata'
  },
  {
    place: 'Vishwamitra\'s Ashram',
    significance: 'Where Rama learned divine weapons and spiritual wisdom',
    description: 'The forest hermitage where Rama and Lakshmana received their advanced spiritual and martial training.',
    modernRelevance: 'Represents the ideal of forest universities and spiritual education centers'
  },
  {
    place: 'Ganga River',
    significance: 'Sacred river crossed during journeys in Bala Kanda',
    description: 'The holy river that witnesses many events of the Ramayana and represents purification and divine grace.',
    modernRelevance: 'Continues to be worshipped as mother goddess and source of spiritual purification'
  }
]

export default function BalaKandaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-rose-50">
      {/* Navigation Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link
              href="/scriptures"
              className="text-gray-600 hover:text-orange-600 transition-colors"
            >
              Scriptures
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link
              href="/scriptures/ramayana"
              className="text-gray-600 hover:text-orange-600 transition-colors"
            >
              Ramayana
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-orange-600 font-medium">Bala Kanda</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-rose-600 to-pink-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Baby className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">📜 Book 1 - The Divine Beginning</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sanskrit">
                बाल काण्ड
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-orange-100">
                Bala Kanda - The Book of Childhood
              </h2>
              <p className="text-lg text-rose-100 leading-relaxed mb-8">
                {balaKandaOverview.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#major-events"
                  className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Explore the Story
                </Link>
                <Link
                  href="#teachings"
                  className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  Spiritual Teachings
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-500/20 to-rose-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=450&fit=crop"
                  alt="Divine Birth of Lord Rama"
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

        {/* Overview Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Book Overview</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-rose-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Scroll className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Chapters</h3>
              <p className="text-gray-700">{balaKandaOverview.chapters}</p>
            </div>
            <div className="text-center">
              <Book className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Verses</h3>
              <p className="text-gray-700">{balaKandaOverview.verses}</p>
            </div>
            <div className="text-center">
              <Crown className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Core Theme</h3>
              <p className="text-gray-700">Divine Foundation</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {balaKandaOverview.themes.map((theme, index) => (
              <div key={index} className="bg-orange-50 rounded-lg p-4 text-center">
                <span className="text-orange-800 font-semibold text-sm">{theme}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-rose-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-orange-800 mb-6 text-center">Spiritual Significance</h3>
            <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              {balaKandaOverview.significance}
            </p>
          </div>
        </section>

        {/* Major Events */}
        <section id="major-events">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Major Events & Episodes</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-rose-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The Bala Kanda presents the foundational episodes that establish Rama\'s divine nature and set the stage for the entire epic
            </p>
          </div>

          <div className="space-y-12">
            {majorEvents.map((event, index) => (
              <div key={event.id} className="group">
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="md:flex">
                    <div className="md:w-2/5">
                      <div className="aspect-[4/3] relative overflow-hidden">
                        <Image
                          src={event.image}
                          alt={event.title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-70`}></div>
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                          <span className="text-xs font-semibold text-gray-800">Episode {index + 1}</span>
                        </div>
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-white text-xl font-bold mb-2">{event.title.split(' - ')[0]}</h3>
                          <p className="text-white/90 text-sm">{event.timeframe}</p>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-3/5 p-8 lg:p-12">
                      <div className="mb-6">
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">{event.subtitle}</h4>
                        <p className="text-gray-700 leading-relaxed">{event.description}</p>
                      </div>

                      <div className="mb-6">
                        <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                          <Star className="w-4 h-4 mr-2 text-orange-600" />
                          Key Aspects:
                        </h5>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                          {event.keyAspects.map((aspect, idx) => (
                            <div key={idx} className="flex items-start">
                              <span className="text-orange-500 mr-2 text-sm mt-1">•</span>
                              <span className="text-gray-600 text-sm">{aspect}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500 mb-6">
                        <h6 className="font-semibold text-orange-800 mb-2 flex items-center">
                          <Sparkles className="w-4 h-4 mr-2" />
                          Spiritual Significance:
                        </h6>
                        <p className="text-orange-700 text-sm leading-relaxed">{event.spiritualSignificance}</p>
                      </div>

                      {/* Individual Page Links */}
                      <div className="flex justify-end">
                        <Link
                          href={`/scriptures/ramayana/bala-kanda/${event.id}`}
                          className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
                        >
                          Read Complete Story
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Character Development */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Character Evolution</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-rose-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Witness the divine souls as they establish their earthly identities and prepare for their cosmic mission
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {characterDevelopment.map((char, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex">
                  <div className="w-32 h-32 flex-shrink-0">
                    <Image
                      src={char.image}
                      alt={char.character}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{char.character}</h3>
                    <p className="text-orange-600 font-semibold text-sm mb-3">{char.evolution}</p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">{char.spiritualGrowth}</p>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Key Moments:</h4>
                  <ul className="space-y-1">
                    {char.keyMoments.map((moment, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-orange-500 mr-2 text-xs mt-1">▸</span>
                        <span className="text-gray-600 text-xs">{moment}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sacred Places */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Sacred Places</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-rose-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The holy places where the divine events of Bala Kanda unfolded, still revered today by millions of devotees
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sacredPlaces.map((place, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <MapPin className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{place.place}</h3>
                </div>
                <p className="text-orange-600 font-semibold text-sm mb-3">{place.significance}</p>
                <p className="text-gray-700 leading-relaxed mb-4">{place.description}</p>
                <div className="bg-orange-50 rounded-lg p-3">
                  <p className="text-sm font-semibold text-orange-800 mb-1">Modern Relevance:</p>
                  <p className="text-orange-700 text-sm">{place.modernRelevance}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spiritual Teachings */}
        <section id="teachings">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Profound Spiritual Teachings</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-rose-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The Bala Kanda establishes fundamental spiritual principles that guide the entire Ramayana epic
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {spiritualTeachings.map((teaching, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <Gem className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{teaching.teaching}</h3>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">{teaching.description}</p>

                <div className="bg-orange-50 rounded-lg p-4 mb-4 border-l-4 border-orange-500">
                  <p className="text-orange-800 font-sanskrit text-sm mb-2">{teaching.verse}</p>
                  <p className="text-orange-700 text-xs italic">{teaching.symbolism}</p>
                </div>

                <div className="bg-rose-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-rose-800 mb-2">Practical Application:</p>
                  <p className="text-rose-700 text-sm">{teaching.application}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cultural Impact */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cultural & Historical Impact</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-rose-600 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              The influence of Bala Kanda extends across centuries, shaping Hindu culture, festivals, and spiritual practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {culturalImpact.map((impact, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Globe className="w-8 h-8 text-orange-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{impact.aspect}</h3>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">{impact.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {impact.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-orange-500 mr-2 text-sm">•</span>
                        <span className="text-gray-600 text-sm">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-orange-600 via-rose-600 to-pink-600 text-white rounded-3xl p-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">🌟 Begin Your Ramayana Journey 🌟</h2>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              The Bala Kanda sets the divine foundation for the greatest epic ever told. Continue this sacred journey through the remaining kandas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/scriptures/ramayana/ayodhya-kanda"
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
              >
                Continue to Ayodhya Kanda
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/scriptures/ramayana"
                className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to All Kandas
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}