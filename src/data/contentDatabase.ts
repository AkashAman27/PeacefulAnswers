import { ContentItem } from '@/lib/contentRecommendations';

export const peacefulAnswersContentDatabase: ContentItem[] = [
  // DEITIES
  {
    id: 'ganesha',
    title: 'Lord Ganesha',
    type: 'deity',
    slug: 'ganesha',
    description: 'The beloved remover of obstacles, lord of beginnings, and patron of arts and commerce',
    tags: ['obstacle-removal', 'wisdom', 'prosperity', 'beginnings', 'elephant-god'],
    ontologicalProperties: {
      dharmaAspects: ['dharma', 'artha'],
      yogaPaths: ['bhakti', 'karma'],
      gunas: ['sattva'],
      deityType: ['ganesha'],
      traditions: ['shaivism', 'smartism'],
      seasons: ['monsoon', 'autumn'],
      months: ['bhadrapada'],
      regions: ['west', 'south'],
      ritualTypes: ['puja', 'vrata'],
      benefits: ['wisdom', 'prosperity', 'protection'],
      difficulty: 'beginner',
      timeCommitment: 'short',
      relatedDeities: ['shiva', 'parvati'],
      relatedFestivals: ['ganesh-chaturthi'],
      relatedPractices: ['ganapati-puja', 'modak-offering']
    }
  },
  {
    id: 'shiva',
    title: 'Lord Shiva',
    type: 'deity',
    slug: 'shiva',
    description: 'The destroyer and transformer, lord of yoga and dance, the eternal ascetic',
    tags: ['transformation', 'yoga', 'meditation', 'cosmic-dance', 'destroyer'],
    ontologicalProperties: {
      dharmaAspects: ['moksha', 'dharma'],
      yogaPaths: ['jnana', 'raja'],
      gunas: ['sattva', 'tamas'],
      deityType: ['trimurti'],
      traditions: ['shaivism'],
      seasons: ['winter', 'spring'],
      months: ['phalguna', 'kartika'],
      regions: ['north', 'south', 'east', 'west'],
      ritualTypes: ['meditation', 'puja', 'yagna'],
      benefits: ['moksha', 'wisdom', 'protection'],
      difficulty: 'intermediate',
      timeCommitment: 'medium',
      relatedDeities: ['parvati', 'ganesha', 'kartikeya'],
      relatedFestivals: ['maha-shivaratri', 'pradosh-vrat'],
      relatedPractices: ['shiva-meditation', 'rudra-abhishek']
    }
  },
  {
    id: 'krishna',
    title: 'Lord Krishna',
    type: 'deity',
    slug: 'krishna',
    description: 'The divine cowherd, teacher of Bhagavad Gita, embodiment of love and wisdom',
    tags: ['bhagavad-gita', 'love', 'devotion', 'flute', 'dharma'],
    ontologicalProperties: {
      dharmaAspects: ['dharma', 'kama', 'moksha'],
      yogaPaths: ['bhakti', 'karma', 'jnana'],
      gunas: ['sattva'],
      deityType: ['avatars'],
      traditions: ['vaishnavism'],
      seasons: ['monsoon', 'autumn'],
      months: ['shravana', 'bhadrapada'],
      regions: ['north', 'west'],
      ritualTypes: ['puja', 'vrata', 'pilgrimage'],
      benefits: ['moksha', 'wisdom', 'family'],
      difficulty: 'beginner',
      timeCommitment: 'medium',
      relatedDeities: ['radha', 'vishnu', 'balarama'],
      relatedFestivals: ['janmashtami', 'holi', 'govardhan-puja'],
      relatedPractices: ['krishna-bhajan', 'gita-parayana']
    }
  },
  {
    id: 'rama',
    title: 'Lord Rama',
    type: 'deity',
    slug: 'rama',
    description: 'The ideal king and perfect human, embodiment of righteousness and duty',
    tags: ['ramayana', 'righteousness', 'ideal-king', 'dharma', 'bow-arrow'],
    ontologicalProperties: {
      dharmaAspects: ['dharma', 'artha'],
      yogaPaths: ['karma', 'bhakti'],
      gunas: ['sattva'],
      deityType: ['avatars'],
      traditions: ['vaishnavism'],
      seasons: ['spring', 'autumn'],
      months: ['chaitra', 'ashwin'],
      regions: ['north', 'central'],
      ritualTypes: ['puja', 'vrata', 'pilgrimage'],
      benefits: ['prosperity', 'protection', 'family'],
      difficulty: 'beginner',
      timeCommitment: 'medium',
      relatedDeities: ['sita', 'hanuman', 'vishnu'],
      relatedFestivals: ['ram-navami', 'dussehra'],
      relatedPractices: ['ramayana-path', 'hanuman-chalisa']
    }
  },
  {
    id: 'durga',
    title: 'Mata Durga',
    type: 'deity',
    slug: 'durga',
    description: 'The divine mother, fierce protector, vanquisher of evil and darkness',
    tags: ['divine-mother', 'protection', 'power', 'lion', 'warrior-goddess'],
    ontologicalProperties: {
      dharmaAspects: ['dharma', 'moksha'],
      yogaPaths: ['bhakti', 'karma'],
      gunas: ['sattva', 'rajas'],
      deityType: ['devi'],
      traditions: ['shaktism'],
      seasons: ['autumn', 'spring'],
      months: ['ashwin', 'chaitra'],
      regions: ['east', 'north'],
      ritualTypes: ['puja', 'vrata', 'yagna'],
      benefits: ['protection', 'prosperity', 'wisdom'],
      difficulty: 'intermediate',
      timeCommitment: 'medium',
      relatedDeities: ['shiva', 'kali', 'lakshmi'],
      relatedFestivals: ['durga-puja', 'navratri'],
      relatedPractices: ['durga-saptashati', 'chandi-path']
    }
  },

  // FESTIVALS
  {
    id: 'ganesh-chaturthi',
    title: 'Ganesh Chaturthi',
    type: 'festival',
    slug: 'ganesh-chaturthi',
    description: 'The joyous celebration of Lord Ganesha\'s birth, removing obstacles for new beginnings',
    tags: ['ganesha', 'new-beginnings', 'obstacle-removal', 'modak', 'celebration'],
    ontologicalProperties: {
      dharmaAspects: ['dharma', 'artha'],
      yogaPaths: ['bhakti'],
      gunas: ['sattva', 'rajas'],
      traditions: ['shaivism', 'smartism'],
      seasons: ['monsoon'],
      months: ['bhadrapada'],
      regions: ['west', 'south'],
      ritualTypes: ['puja', 'vrata'],
      benefits: ['prosperity', 'wisdom', 'protection'],
      difficulty: 'beginner',
      timeCommitment: 'long',
      relatedDeities: ['ganesha', 'shiva', 'parvati'],
      relatedFestivals: ['maha-shivaratri', 'navratri'],
      relatedPractices: ['ganapati-puja', 'modak-offering']
    }
  },
  {
    id: 'diwali',
    title: 'Diwali',
    type: 'festival',
    slug: 'diwali',
    description: 'The festival of lights celebrating the victory of light over darkness',
    tags: ['lights', 'lakshmi', 'prosperity', 'victory', 'new-year'],
    ontologicalProperties: {
      dharmaAspects: ['dharma', 'artha', 'kama'],
      yogaPaths: ['bhakti', 'karma'],
      gunas: ['sattva'],
      traditions: ['vaishnavism', 'smartism'],
      seasons: ['autumn'],
      months: ['kartika'],
      regions: ['north', 'west', 'central'],
      ritualTypes: ['puja', 'vrata'],
      benefits: ['prosperity', 'family', 'protection'],
      difficulty: 'beginner',
      timeCommitment: 'long',
      relatedDeities: ['lakshmi', 'rama', 'krishna', 'ganesha'],
      relatedFestivals: ['dhanteras', 'govardhan-puja'],
      relatedPractices: ['lakshmi-puja', 'deepa-lighting']
    }
  },
  {
    id: 'navratri',
    title: 'Navratri',
    type: 'festival',
    slug: 'navratri',
    description: 'Nine nights dedicated to the divine feminine, celebrating Mata Durga\'s triumph',
    tags: ['divine-feminine', 'durga', 'nine-nights', 'fasting', 'dance'],
    ontologicalProperties: {
      dharmaAspects: ['dharma', 'moksha'],
      yogaPaths: ['bhakti'],
      gunas: ['sattva'],
      traditions: ['shaktism'],
      seasons: ['autumn', 'spring'],
      months: ['ashwin', 'chaitra'],
      regions: ['north', 'west', 'east'],
      ritualTypes: ['puja', 'vrata'],
      benefits: ['protection', 'wisdom', 'prosperity'],
      difficulty: 'intermediate',
      timeCommitment: 'long',
      relatedDeities: ['durga', 'kali', 'lakshmi', 'saraswati'],
      relatedFestivals: ['durga-puja', 'dussehra'],
      relatedPractices: ['durga-saptashati', 'fasting', 'garba-dance']
    }
  },
  {
    id: 'janmashtami',
    title: 'Krishna Janmashtami',
    type: 'festival',
    slug: 'janmashtami',
    description: 'The joyous celebration of Lord Krishna\'s divine birth at midnight',
    tags: ['krishna', 'birth-celebration', 'midnight', 'butter', 'devotion'],
    ontologicalProperties: {
      dharmaAspects: ['dharma', 'kama', 'moksha'],
      yogaPaths: ['bhakti'],
      gunas: ['sattva'],
      traditions: ['vaishnavism'],
      seasons: ['monsoon'],
      months: ['bhadrapada'],
      regions: ['north', 'west'],
      ritualTypes: ['puja', 'vrata'],
      benefits: ['moksha', 'wisdom', 'family'],
      difficulty: 'beginner',
      timeCommitment: 'medium',
      relatedDeities: ['krishna', 'radha', 'vishnu'],
      relatedFestivals: ['holi', 'govardhan-puja'],
      relatedPractices: ['krishna-bhajan', 'dahi-handi']
    }
  },
  {
    id: 'maha-shivaratri',
    title: 'Maha Shivaratri',
    type: 'festival',
    slug: 'maha-shivaratri',
    description: 'The great night of Shiva, celebrating the cosmic dance and meditation',
    tags: ['shiva', 'meditation', 'fasting', 'night-vigil', 'cosmic-dance'],
    ontologicalProperties: {
      dharmaAspects: ['moksha', 'dharma'],
      yogaPaths: ['jnana', 'raja'],
      gunas: ['sattva'],
      traditions: ['shaivism'],
      seasons: ['winter'],
      months: ['phalguna'],
      regions: ['north', 'south', 'east', 'west'],
      ritualTypes: ['meditation', 'vrata', 'puja'],
      benefits: ['moksha', 'wisdom', 'protection'],
      difficulty: 'intermediate',
      timeCommitment: 'long',
      relatedDeities: ['shiva', 'parvati'],
      relatedFestivals: ['pradosh-vrat', 'shivaratri'],
      relatedPractices: ['shiva-meditation', 'rudra-abhishek', 'night-vigil']
    }
  },

  // PRACTICES
  {
    id: 'ganapati-puja',
    title: 'Ganapati Puja',
    type: 'practice',
    slug: 'ganapati-puja',
    description: 'The sacred worship of Lord Ganesha to remove obstacles and ensure success',
    tags: ['ganesha-worship', 'obstacle-removal', 'puja', 'modak', 'success'],
    ontologicalProperties: {
      dharmaAspects: ['dharma', 'artha'],
      yogaPaths: ['bhakti'],
      gunas: ['sattva'],
      traditions: ['shaivism', 'smartism'],
      ritualTypes: ['puja'],
      benefits: ['prosperity', 'wisdom', 'protection'],
      difficulty: 'beginner',
      timeCommitment: 'short',
      relatedDeities: ['ganesha'],
      relatedFestivals: ['ganesh-chaturthi'],
      relatedPractices: ['modak-offering', 'vinayaka-vratam']
    }
  },
  {
    id: 'surya-namaskara',
    title: 'Surya Namaskara',
    type: 'practice',
    slug: 'surya-namaskara',
    description: 'The sun salutation sequence combining movement, breath, and devotion',
    tags: ['sun-worship', 'yoga', 'morning-practice', 'movement', 'pranayama'],
    ontologicalProperties: {
      dharmaAspects: ['dharma', 'moksha'],
      yogaPaths: ['raja', 'karma'],
      gunas: ['sattva'],
      traditions: ['smartism'],
      seasons: ['spring', 'summer'],
      ritualTypes: ['meditation', 'puja'],
      benefits: ['health', 'wisdom', 'moksha'],
      difficulty: 'beginner',
      timeCommitment: 'short',
      relatedDeities: ['surya'],
      relatedPractices: ['pranayama', 'morning-prayers']
    }
  },
  {
    id: 'bhagavad-gita-study',
    title: 'Bhagavad Gita Study',
    type: 'practice',
    slug: 'bhagavad-gita-study',
    description: 'Daily study and contemplation of Krishna\'s eternal wisdom to Arjuna',
    tags: ['krishna', 'scripture-study', 'wisdom', 'dharma', 'self-realization'],
    ontologicalProperties: {
      dharmaAspects: ['dharma', 'moksha'],
      yogaPaths: ['jnana', 'karma', 'bhakti'],
      gunas: ['sattva'],
      traditions: ['vaishnavism', 'smartism'],
      ritualTypes: ['meditation'],
      benefits: ['wisdom', 'moksha', 'protection'],
      difficulty: 'intermediate',
      timeCommitment: 'medium',
      relatedDeities: ['krishna', 'vishnu'],
      relatedScriptures: ['bhagavad-gita'],
      relatedPractices: ['krishna-meditation', 'self-inquiry']
    }
  },

  // SCRIPTURES
  {
    id: 'bhagavad-gita',
    title: 'Bhagavad Gita',
    type: 'scripture',
    slug: 'bhagavad-gita',
    description: 'The eternal dialogue between Krishna and Arjuna on dharma, duty, and devotion',
    tags: ['krishna', 'dharma', 'yoga', 'self-realization', 'eternal-wisdom'],
    ontologicalProperties: {
      dharmaAspects: ['dharma', 'moksha'],
      yogaPaths: ['jnana', 'karma', 'bhakti', 'raja'],
      gunas: ['sattva'],
      traditions: ['vaishnavism', 'smartism'],
      benefits: ['wisdom', 'moksha', 'protection'],
      difficulty: 'intermediate',
      timeCommitment: 'long',
      relatedDeities: ['krishna', 'vishnu'],
      relatedPractices: ['bhagavad-gita-study', 'krishna-meditation'],
      relatedFestivals: ['janmashtami', 'gita-jayanti']
    }
  },
  {
    id: 'ramayana',
    title: 'Ramayana',
    type: 'scripture',
    slug: 'ramayana',
    description: 'The epic tale of Rama\'s journey, showcasing ideal dharma and devotion',
    tags: ['rama', 'dharma', 'ideal-life', 'devotion', 'epic'],
    ontologicalProperties: {
      dharmaAspects: ['dharma', 'artha'],
      yogaPaths: ['bhakti', 'karma'],
      gunas: ['sattva'],
      traditions: ['vaishnavism'],
      benefits: ['wisdom', 'family', 'protection'],
      difficulty: 'beginner',
      timeCommitment: 'long',
      relatedDeities: ['rama', 'sita', 'hanuman'],
      relatedPractices: ['ramayana-path', 'hanuman-chalisa'],
      relatedFestivals: ['ram-navami', 'dussehra']
    }
  },

  // Add more items as needed...
];

// Helper function to get content by ID
export function getContentById(id: string): ContentItem | undefined {
  return peacefulAnswersContentDatabase.find(item => item.id === id);
}

// Helper function to get content by type
export function getContentByType(type: string): ContentItem[] {
  return peacefulAnswersContentDatabase.filter(item => item.type === type);
}

// Helper function to get content by tradition
export function getContentByTradition(tradition: string): ContentItem[] {
  return peacefulAnswersContentDatabase.filter(item => 
    item.ontologicalProperties.traditions?.includes(tradition as any)
  );
}

// Helper function to search content
export function searchContent(query: string): ContentItem[] {
  const lowerQuery = query.toLowerCase();
  return peacefulAnswersContentDatabase.filter(item => 
    item.title.toLowerCase().includes(lowerQuery) ||
    item.description.toLowerCase().includes(lowerQuery) ||
    item.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}