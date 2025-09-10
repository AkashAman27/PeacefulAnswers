export interface Translation {
  key: string
  value: string
  category?: string
}

export type Language = 'en' | 'hi' | 'mr' | 'ta' | 'te' | 'bn'

export const languages: Record<Language, string> = {
  en: 'English',
  hi: 'हिंदी',
  mr: 'मराठी',
  ta: 'தமிழ்',
  te: 'తెలుగు',
  bn: 'বাংলা'
}

// Base translations for the homepage
export const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.start_here': 'Start Here',
    'nav.scriptures': 'Scriptures',
    'nav.practices': 'Practices',
    'nav.deities': 'Deities',
    'nav.questions': 'Questions',
    
    // Hero Section
    'hero.title': 'Find peaceful answers to life\'s deepest questions',
    'hero.subtitle': 'Explore the timeless wisdom of the Vedas, Upanishads, and Bhagavad Gita. Discover practices, understand deities, and find guidance for modern spiritual living.',
    'hero.cta_primary': 'Start Your Journey',
    'hero.cta_secondary': 'Watch Introduction',
    'hero.search_placeholder': 'Search for mantras, practices, deities...',
    'hero.trust_text': 'Trusted by thousands of seekers',
    
    // Features
    'features.title': 'Explore the eternal wisdom',
    'features.subtitle': 'Dive deep into the rich spiritual heritage of Sanātana Dharma with comprehensive resources, practical guidance, and authentic teachings.',
    'features.scriptures.title': 'Sacred Scriptures',
    'features.scriptures.desc': 'Explore the Vedas, Upanishads, Bhagavad Gita, and Puranas with authentic translations and insightful commentary.',
    'features.practices.title': 'Daily Practices',
    'features.practices.desc': 'Learn meditation, pranayama, puja rituals, and vratas to deepen your spiritual journey.',
    'features.deities.title': 'Deities & Avatars',
    'features.deities.desc': 'Understand the Trimurti, Devi, Ganesha, and the Dashavatara with their stories and significance.',
    'features.guidance.title': 'Life Guidance',
    'features.guidance.desc': 'Get answers to questions about dharma, relationships, ethics, and modern spiritual living.',
    'features.festivals.title': 'Festivals & Time',
    'features.festivals.desc': 'Discover the spiritual significance of festivals, panchang, and auspicious timings.',
    'features.places.title': 'Sacred Places',
    'features.places.desc': 'Explore pilgrimage sites, temples, and the spiritual geography of Bharatvarsha.',
    'features.cta': 'Start exploring wisdom',
    'features.browse_all': 'Browse all sections',

    // Gita: Shared/UI
    'gita.badge': 'Sacred Scripture',
    'gita.title': 'Bhagavad Gita',
    'gita.subtitle': "The timeless dialogue between Prince Arjuna and Lord Krishna on the battlefield of Kurukshetra. Discover the profound wisdom that has guided seekers for millennia.",
    'gita.stats.chapters': 'Chapters',
    'gita.stats.verses': 'Verses',
    'gita.stats.years_old': 'Years Old',
    'gita.stats.lives_changed': 'Lives Changed',
    'gita.explore.title': 'Explore All 18 Chapters',
    'gita.explore.subtitle': 'Each chapter reveals profound teachings on dharma, karma, devotion, and the path to liberation.',
    'gita.card.verses': 'verses',
    'gita.card.key_teachings': 'Key Teachings',
    'gita.card.study_chapter': 'Study Chapter',
    'gita.study.title': 'How to Study the Gita',
    'gita.study.read.title': 'Read Sanskrit',
    'gita.study.read.desc': 'Experience the original verses in Devanagari script with proper pronunciation guides.',
    'gita.study.translate.title': 'Understand Translation',
    'gita.study.translate.desc': "Clear English translations that preserve the depth and meaning of Krishna's teachings.",
    'gita.study.apply.title': 'Apply Wisdom',
    'gita.study.apply.desc': 'Detailed explanations show how to apply these timeless principles in daily life.',

    // Gita: Chapter Viewer
    'gita.nav.back': 'Back to Chapters',
    'gita.chapter': 'Chapter',
    'gita.verses': 'Verses',
    'gita.total': 'total',
    'gita.verse': 'Verse',
    'gita.translation': 'Translation',
    'gita.transliteration': 'Transliteration',
    'gita.sanskrit_heading': 'Sanskrit (Devanagari)',
    'gita.word_meaning.heading': 'Word-by-Word Meaning',
    'gita.commentary.heading': 'Detailed Commentary',
    'gita.prev_verse': 'Previous Verse',
    'gita.next_verse': 'Next Verse',
    'gita.prev_chapter': 'Previous Chapter',
    'gita.next_chapter': 'Next Chapter'
  },
  hi: {
    // Navigation
    'nav.start_here': 'यहाँ शुरू करें',
    'nav.scriptures': 'धर्मग्रंथ',
    'nav.practices': 'साधना',
    'nav.deities': 'देवता',
    'nav.questions': 'प्रश्न',
    
    // Hero Section
    'hero.title': 'जीवन के गहरे प्रश्नों के शांतिपूर्ण उत्तर खोजें',
    'hero.subtitle': 'वेद, उपनिषद और भगवद्गीता की कालातीत बुद्धि का अन्वेषण करें। साधना सीखें, देवताओं को समझें, और आधुनिक आध्यात्मिक जीवन के लिए मार्गदर्शन पाएं।',
    'hero.cta_primary': 'अपनी यात्रा शुरू करें',
    'hero.cta_secondary': 'परिचय देखें',
    'hero.search_placeholder': 'मंत्र, साधना, देवता खोजें...',
    'hero.trust_text': 'हजारों साधकों द्वारा विश्वसनीय',
    
    // Features
    'features.title': 'शाश्वत ज्ञान का अन्वेषण करें',
    'features.subtitle': 'व्यापक संसाधनों, व्यावहारिक मार्गदर्शन और प्रामाणिक शिक्षाओं के साथ सनातन धर्म की समृद्ध आध्यात्मिक विरासत में गहराई से जाएं।',
    'features.scriptures.title': 'पवित्र शास्त्र',
    'features.scriptures.desc': 'प्रामाणिक अनुवाद और गहन टिप्पणी के साथ वेद, उपनिषद, भगवद्गीता और पुराणों का अन्वेषण करें।',
    'features.practices.title': 'दैनिक साधना',
    'features.practices.desc': 'अपनी आध्यात्मिक यात्रा को गहरा करने के लिए ध्यान, प्राणायाम, पूजा अनुष्ठान और व्रत सीखें।',
    'features.deities.title': 'देवता और अवतार',
    'features.deities.desc': 'त्रिमूर्ति, देवी, गणेश और दशावतार को उनकी कहानियों और महत्व के साथ समझें।',
    'features.guidance.title': 'जीवन मार्गदर्शन',
    'features.guidance.desc': 'धर्म, रिश्ते, नैतिकता और आधुनिक आध्यात्मिक जीवन के बारे में प्रश्नों के उत्तर पाएं।',
    'features.festivals.title': 'त्योहार और समय',
    'features.festivals.desc': 'त्योहारों, पंचांग और शुभ समय का आध्यात्मिक महत्व जानें।',
    'features.places.title': 'पवित्र स्थान',
    'features.places.desc': 'तीर्थ स्थल, मंदिर और भारतवर्ष के आध्यात्मिक भूगोल का अन्वेषण करें।',
    'features.cta': 'ज्ञान की खोज शुरू करें',
    'features.browse_all': 'सभी अनुभाग देखें',

    // Gita: Shared/UI
    'gita.badge': 'पवित्र शास्त्र',
    'gita.title': 'भगवद्गीता',
    'gita.subtitle': 'कुरुक्षेत्र के रणक्षेत्र में अर्जुन और श्रीकृष्ण के बीच हुआ अमर संवाद। वह गहन ज्ञान जानें जिसने युगों से साधकों का मार्गदर्शन किया है।',
    'gita.stats.chapters': 'अध्याय',
    'gita.stats.verses': 'श्लोक',
    'gita.stats.years_old': 'वर्ष प्राचीन',
    'gita.stats.lives_changed': 'जीवन बदले',
    'gita.explore.title': 'सभी 18 अध्याय देखें',
    'gita.explore.subtitle': 'हर अध्याय धर्म, कर्म, भक्ति और मुक्ति के पथ पर गहन शिक्षाएँ देता है।',
    'gita.card.verses': 'श्लोक',
    'gita.card.key_teachings': 'मुख्य शिक्षाएँ',
    'gita.card.study_chapter': 'अध्याय पढ़ें',
    'gita.study.title': 'गीता का अध्ययन कैसे करें',
    'gita.study.read.title': 'संस्कृत पढ़ें',
    'gita.study.read.desc': 'देवनागरी लिपि में मूल श्लोक सही उच्चारण-संकेतों के साथ पढ़ें।',
    'gita.study.translate.title': 'अनुवाद समझें',
    'gita.study.translate.desc': 'स्पष्ट अनुवाद जो श्रीकृष्ण की शिक्षाओं की गहराई और अर्थ को बनाए रखते हैं।',
    'gita.study.apply.title': 'ज्ञान को जिएँ',
    'gita.study.apply.desc': 'विस्तृत व्याख्या दिखाती है कि इन शाश्वत सिद्धांतों को दैनिक जीवन में कैसे लागू करें।',

    // Gita: Chapter Viewer
    'gita.nav.back': 'अध्याय सूची पर लौटें',
    'gita.chapter': 'अध्याय',
    'gita.verses': 'श्लोक',
    'gita.total': 'कुल',
    'gita.verse': 'श्लोक',
    'gita.translation': 'हिंदी अनुवाद',
    'gita.transliteration': 'उच्चारण (Transliteration)',
    'gita.sanskrit_heading': 'संस्कृत (देवनागरी)',
    'gita.word_meaning.heading': 'पदच्छेद अर्थ',
    'gita.commentary.heading': 'विस्तृत व्याख्या',
    'gita.prev_verse': 'पिछला श्लोक',
    'gita.next_verse': 'अगला श्लोक',
    'gita.prev_chapter': 'पिछला अध्याय',
    'gita.next_chapter': 'अगला अध्याय'
  },
  mr: {
    // Navigation
    'nav.start_here': 'येथे सुरुवात करा',
    'nav.scriptures': 'शास्त्रे',
    'nav.practices': 'साधना',
    'nav.deities': 'देवता',
    'nav.questions': 'प्रश्न',
    
    // Hero Section
    'hero.title': 'जीवनाच्या खोल प्रश्नांची शांतिदायक उत्तरे शोधा',
    'hero.subtitle': 'वेद, उपनिषद आणि भगवद्गीता यांच्या कालातीत ज्ञानाचा अभ्यास करा। साधना शिका, देवतांना समजून घ्या आणि आधुनिक आध्यात्मिक जीवनासाठी मार्गदर्शन मिळवा।',
    'hero.cta_primary': 'तुमचा प्रवास सुरू करा',
    'hero.cta_secondary': 'परिचय पहा',
    'hero.search_placeholder': 'मंत्र, साधना, देवता शोधा...',
    'hero.trust_text': 'हजारो साधकांचा विश्वास',
    
    // Features
    'features.title': 'शाश्वत ज्ञानाचा अभ्यास करा',
    'features.subtitle': 'व्यापक संसाधने, व्यावहारिक मार्गदर्शन आणि प्रामाणिक शिकवणींसह सनातन धर्माच्या समृद्ध आध्यात्मिक वारशात सखोल जा।',
    'features.scriptures.title': 'पवित्र शास्त्रे',
    'features.scriptures.desc': 'प्रामाणिक भाषांतर आणि अंतर्दृष्टीपूर्ण भाष्यासह वेद, उपनिषदे, भगवद्गीता आणि पुराणांचा अभ्यास करा।',
    'features.practices.title': 'दैनंदिन साधना',
    'features.practices.desc': 'तुमचा आध्यात्मिक प्रवास गहन करण्यासाठी ध्यान, प्राणायाम, पूजा विधी आणि व्रत शिका।',
    'features.deities.title': 'देवता आणि अवतार',
    'features.deities.desc': 'त्रिमूर्ती, देवी, गणेश आणि दशावतार यांच्या कथा आणि महत्वासह समजून घ्या।',
    'features.guidance.title': 'जीवन मार्गदर्शन',
    'features.guidance.desc': 'धर्म, नातेसंबंध, नीतिमत्ता आणि आधुनिक आध्यात्मिक जीवनाविषयी प्रश्नांची उत्तरे मिळवा।',
    'features.festivals.title': 'सण आणि काळ',
    'features.festivals.desc': 'सण, पंचांग आणि शुभ वेळेचे आध्यात्मिक महत्व जाणून घ्या।',
    'features.places.title': 'पवित्र स्थळे',
    'features.places.desc': 'तीर्थस्थळे, मंदिरे आणि भारतवर्षाच्या आध्यात्मिक भूगोलाचा अभ्यास करा।',
    'features.cta': 'ज्ञानाचा अभ्यास सुरू करा',
    'features.browse_all': 'सर्व विभाग पहा'
  },
  ta: {
    'nav.start_here': 'இங்கே தொடங்கு',
    'nav.scriptures': 'நூல்கள்',
    'nav.practices': 'சாதனைகள்',
    'nav.deities': 'தெய்வங்கள்',
    'nav.questions': 'கேள்விகள்',
    'hero.title': 'வாழ்வின் ஆழ்ந்த கேள்விகளுக்கு அமைதியான பதில்களைக் கண்டுபிடி',
    'features.title': 'நித்திய ஞானத்தை ஆராயுங்கள்'
  },
  te: {
    'nav.start_here': 'ఇక్కడ ప్రారంభించండి',
    'nav.scriptures': 'గ్రంథాలు',
    'nav.practices': 'సాధనలు',
    'nav.deities': 'దేవతలు',
    'nav.questions': 'ప్రశ్నలు',
    'hero.title': 'జీవితంలోని లోతైన ప్రశ్నలకు శాంతియుత సమాధానాలను కనుగొనండి',
    'features.title': 'శాశ్వత జ్ఞానాన్ని అన్వేషించండి'
  },
  bn: {
    'nav.start_here': 'এখানে শুরু করুন',
    'nav.scriptures': 'শাস্ত্র',
    'nav.practices': 'সাধনা',
    'nav.deities': 'দেবতা',
    'nav.questions': 'প্রশ্ন',
    'hero.title': 'জীবনের গভীর প্রশ্নের শান্তিপূর্ণ উত্তর খুঁজুন',
    'features.title': 'চিরন্তন জ্ঞান অন্বেষণ করুন'
  }
}

export const getTranslation = (key: string, language: Language): string => {
  return translations[language]?.[key] || translations.en[key] || key
}

export const t = getTranslation
