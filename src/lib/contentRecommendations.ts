// Smart Content Recommendation System based on Hindu/Sanātana Dharma Ontology

export interface ContentItem {
  id: string;
  title: string;
  type: 'deity' | 'festival' | 'scripture' | 'practice' | 'place' | 'story';
  slug: string;
  description: string;
  tags: string[];
  ontologicalProperties: {
    // Core Dharmic Concepts
    dharmaAspects?: ('dharma' | 'artha' | 'kama' | 'moksha')[];
    yogaPaths?: ('karma' | 'bhakti' | 'jnana' | 'raja')[];
    gunas?: ('sattva' | 'rajas' | 'tamas')[];
    
    // Theological Classifications
    deityType?: ('trimurti' | 'devi' | 'ganesha' | 'avatars' | 'planetary' | 'regional')[];
    traditions?: ('shaivism' | 'vaishnavism' | 'shaktism' | 'smartism')[];
    
    // Temporal & Seasonal
    seasons?: ('spring' | 'summer' | 'monsoon' | 'autumn' | 'winter')[];
    lunarPhases?: ('newMoon' | 'waxing' | 'fullMoon' | 'waning')[];
    months?: ('chaitra' | 'vaishakha' | 'jyeshtha' | 'ashadha' | 'shravana' | 'bhadrapada' | 'ashwin' | 'kartika' | 'margashirsha' | 'pausha' | 'magha' | 'phalguna')[];
    
    // Geographic & Cultural
    regions?: ('north' | 'south' | 'east' | 'west' | 'central')[];
    languages?: ('sanskrit' | 'hindi' | 'tamil' | 'bengali' | 'marathi' | 'gujarati')[];
    
    // Practice Types
    ritualTypes?: ('puja' | 'vrata' | 'yagna' | 'meditation' | 'pilgrimage')[];
    benefits?: ('prosperity' | 'health' | 'wisdom' | 'protection' | 'moksha' | 'family')[];
    
    // Difficulty & Accessibility
    difficulty?: 'beginner' | 'intermediate' | 'advanced';
    timeCommitment?: 'short' | 'medium' | 'long';
    
    // Relationships
    relatedDeities?: string[];
    relatedFestivals?: string[];
    relatedScriptures?: string[];
    relatedPractices?: string[];
  };
}

export interface RecommendationSection {
  title: string;
  subtitle: string;
  items: ContentItem[];
  reasoning: string;
  priority: number;
  engagementHooks: string[];
}

export class ContentRecommendationEngine {
  private contentDatabase: ContentItem[] = [];
  
  constructor(content: ContentItem[]) {
    this.contentDatabase = content;
  }
  
  // Main recommendation function
  getRecommendations(currentContent: ContentItem, maxSections: number = 4): RecommendationSection[] {
    const recommendations: RecommendationSection[] = [];
    
    // 1. Direct Ontological Connections (Highest Priority)
    const directConnections = this.getDirectConnections(currentContent);
    if (directConnections.length > 0) {
      recommendations.push({
        title: this.getConnectionTitle(currentContent, 'direct'),
        subtitle: this.getConnectionSubtitle(currentContent, 'direct'),
        items: directConnections,
        reasoning: 'ontologically_connected',
        priority: 10,
        engagementHooks: this.generateEngagementHooks(currentContent, 'direct')
      });
    }
    
    // 2. Same Tradition/Path (High Priority)
    const traditionConnections = this.getTraditionConnections(currentContent);
    if (traditionConnections.length > 0) {
      recommendations.push({
        title: this.getConnectionTitle(currentContent, 'tradition'),
        subtitle: this.getConnectionSubtitle(currentContent, 'tradition'),
        items: traditionConnections,
        reasoning: 'same_tradition',
        priority: 8,
        engagementHooks: this.generateEngagementHooks(currentContent, 'tradition')
      });
    }
    
    // 3. Seasonal/Temporal Connections (Medium-High Priority)
    const temporalConnections = this.getTemporalConnections(currentContent);
    if (temporalConnections.length > 0) {
      recommendations.push({
        title: this.getConnectionTitle(currentContent, 'temporal'),
        subtitle: this.getConnectionSubtitle(currentContent, 'temporal'),
        items: temporalConnections,
        reasoning: 'temporal_alignment',
        priority: 7,
        engagementHooks: this.generateEngagementHooks(currentContent, 'temporal')
      });
    }
    
    // 4. Complementary Practices (Medium Priority)
    const practiceConnections = this.getPracticeConnections(currentContent);
    if (practiceConnections.length > 0) {
      recommendations.push({
        title: this.getConnectionTitle(currentContent, 'practice'),
        subtitle: this.getConnectionSubtitle(currentContent, 'practice'),
        items: practiceConnections,
        reasoning: 'complementary_practices',
        priority: 6,
        engagementHooks: this.generateEngagementHooks(currentContent, 'practice')
      });
    }
    
    // 5. Regional/Cultural Connections (Medium Priority)
    const regionalConnections = this.getRegionalConnections(currentContent);
    if (regionalConnections.length > 0) {
      recommendations.push({
        title: this.getConnectionTitle(currentContent, 'regional'),
        subtitle: this.getConnectionSubtitle(currentContent, 'regional'),
        items: regionalConnections,
        reasoning: 'regional_cultural',
        priority: 5,
        engagementHooks: this.generateEngagementHooks(currentContent, 'regional')
      });
    }
    
    // 6. Similar Benefits/Goals (Lower Priority)
    const benefitConnections = this.getBenefitConnections(currentContent);
    if (benefitConnections.length > 0) {
      recommendations.push({
        title: this.getConnectionTitle(currentContent, 'benefits'),
        subtitle: this.getConnectionSubtitle(currentContent, 'benefits'),
        items: benefitConnections,
        reasoning: 'similar_benefits',
        priority: 4,
        engagementHooks: this.generateEngagementHooks(currentContent, 'benefits')
      });
    }
    
    // 7. Progressive Journey (Beginner → Advanced)
    const journeyConnections = this.getJourneyConnections(currentContent);
    if (journeyConnections.length > 0) {
      recommendations.push({
        title: this.getConnectionTitle(currentContent, 'journey'),
        subtitle: this.getConnectionSubtitle(currentContent, 'journey'),
        items: journeyConnections,
        reasoning: 'spiritual_progression',
        priority: 3,
        engagementHooks: this.generateEngagementHooks(currentContent, 'journey')
      });
    }
    
    // Sort by priority and return top sections
    return recommendations
      .sort((a, b) => b.priority - a.priority)
      .slice(0, maxSections);
  }
  
  private getDirectConnections(content: ContentItem): ContentItem[] {
    const connections: ContentItem[] = [];
    const props = content.ontologicalProperties;
    
    // Find items directly mentioned in relationships
    const relatedIds = [
      ...(props.relatedDeities || []),
      ...(props.relatedFestivals || []),
      ...(props.relatedScriptures || []),
      ...(props.relatedPractices || [])
    ];
    
    relatedIds.forEach(id => {
      const item = this.contentDatabase.find(item => item.id === id);
      if (item && item.id !== content.id) {
        connections.push(item);
      }
    });
    
    return this.shuffleAndLimit(connections, 6);
  }
  
  private getTraditionConnections(content: ContentItem): ContentItem[] {
    const props = content.ontologicalProperties;
    if (!props.traditions) return [];
    
    return this.contentDatabase
      .filter(item => 
        item.id !== content.id &&
        item.ontologicalProperties.traditions?.some(t => props.traditions?.includes(t))
      )
      .slice(0, 6);
  }
  
  private getTemporalConnections(content: ContentItem): ContentItem[] {
    const props = content.ontologicalProperties;
    const connections: ContentItem[] = [];
    
    // Same season
    if (props.seasons) {
      const seasonalItems = this.contentDatabase.filter(item =>
        item.id !== content.id &&
        item.ontologicalProperties.seasons?.some(s => props.seasons?.includes(s))
      );
      connections.push(...seasonalItems);
    }
    
    // Same month
    if (props.months) {
      const monthlyItems = this.contentDatabase.filter(item =>
        item.id !== content.id &&
        item.ontologicalProperties.months?.some(m => props.months?.includes(m))
      );
      connections.push(...monthlyItems);
    }
    
    return this.shuffleAndLimit(connections, 6);
  }
  
  private getPracticeConnections(content: ContentItem): ContentItem[] {
    const props = content.ontologicalProperties;
    if (!props.yogaPaths && !props.ritualTypes) return [];
    
    const connections: ContentItem[] = [];
    
    // Same yoga path
    if (props.yogaPaths) {
      const pathItems = this.contentDatabase.filter(item =>
        item.id !== content.id &&
        item.ontologicalProperties.yogaPaths?.some(p => props.yogaPaths?.includes(p))
      );
      connections.push(...pathItems);
    }
    
    // Complementary ritual types
    if (props.ritualTypes) {
      const ritualItems = this.contentDatabase.filter(item =>
        item.id !== content.id &&
        item.ontologicalProperties.ritualTypes?.some(r => props.ritualTypes?.includes(r))
      );
      connections.push(...ritualItems);
    }
    
    return this.shuffleAndLimit(connections, 6);
  }
  
  private getRegionalConnections(content: ContentItem): ContentItem[] {
    const props = content.ontologicalProperties;
    if (!props.regions) return [];
    
    return this.contentDatabase
      .filter(item => 
        item.id !== content.id &&
        item.ontologicalProperties.regions?.some(r => props.regions?.includes(r))
      )
      .slice(0, 6);
  }
  
  private getBenefitConnections(content: ContentItem): ContentItem[] {
    const props = content.ontologicalProperties;
    if (!props.benefits) return [];
    
    return this.contentDatabase
      .filter(item => 
        item.id !== content.id &&
        item.ontologicalProperties.benefits?.some(b => props.benefits?.includes(b))
      )
      .slice(0, 6);
  }
  
  private getJourneyConnections(content: ContentItem): ContentItem[] {
    const props = content.ontologicalProperties;
    if (!props.difficulty) return [];
    
    const nextLevel = props.difficulty === 'beginner' ? 'intermediate' : 
                     props.difficulty === 'intermediate' ? 'advanced' : 'beginner';
    
    return this.contentDatabase
      .filter(item => 
        item.id !== content.id &&
        item.ontologicalProperties.difficulty === nextLevel
      )
      .slice(0, 4);
  }
  
  private getConnectionTitle(content: ContentItem, type: string): string {
    const titles = {
      direct: this.getDirectTitle(content),
      tradition: this.getTraditionTitle(content),
      temporal: this.getTemporalTitle(content),
      practice: this.getPracticeTitle(content),
      regional: this.getRegionalTitle(content),
      benefits: this.getBenefitsTitle(content),
      journey: this.getJourneyTitle(content)
    };
    
    return titles[type as keyof typeof titles] || 'Related Content';
  }
  
  private getConnectionSubtitle(content: ContentItem, type: string): string {
    const subtitles = {
      direct: 'Deeply connected through sacred relationships',
      tradition: `Explore the rich ${content.ontologicalProperties.traditions?.[0]} tradition`,
      temporal: 'Celebrate in harmony with cosmic cycles',
      practice: 'Enhance your spiritual practice',
      regional: `Discover the cultural richness of ${content.ontologicalProperties.regions?.[0]} India`,
      benefits: `Find more paths to ${content.ontologicalProperties.benefits?.[0]}`,
      journey: 'Continue your spiritual evolution'
    };
    
    return subtitles[type as keyof typeof subtitles] || 'Discover more sacred wisdom';
  }
  
  private getDirectTitle(content: ContentItem): string {
    if (content.type === 'deity') return `Sacred Connections to ${content.title}`;
    if (content.type === 'festival') return `Festivals in the Sacred Web`;
    if (content.type === 'scripture') return `Complementary Scriptures`;
    return 'Sacred Connections';
  }
  
  private getTraditionTitle(content: ContentItem): string {
    const tradition = content.ontologicalProperties.traditions?.[0];
    return `More from ${tradition?.charAt(0).toUpperCase()}${tradition?.slice(1)} Tradition`;
  }
  
  private getTemporalTitle(content: ContentItem): string {
    const season = content.ontologicalProperties.seasons?.[0];
    const month = content.ontologicalProperties.months?.[0];
    
    if (season) return `${season.charAt(0).toUpperCase()}${season.slice(1)} Sacred Celebrations`;
    if (month) return `${month.charAt(0).toUpperCase()}${month.slice(1)} Month Observances`;
    return 'Seasonal Sacred Practices';
  }
  
  private getPracticeTitle(content: ContentItem): string {
    const path = content.ontologicalProperties.yogaPaths?.[0];
    return `${path?.charAt(0).toUpperCase()}${path?.slice(1)} Yoga Path`;
  }
  
  private getRegionalTitle(content: ContentItem): string {
    const region = content.ontologicalProperties.regions?.[0];
    return region ? `${region.charAt(0).toUpperCase()}${region.slice(1)} Indian Traditions` : 'Regional Traditions';
  }
  
  private getBenefitsTitle(content: ContentItem): string {
    const benefit = content.ontologicalProperties.benefits?.[0];
    return benefit ? `More Paths to ${benefit.charAt(0).toUpperCase()}${benefit.slice(1)}` : 'Similar Benefits';
  }
  
  private getJourneyTitle(content: ContentItem): string {
    const difficulty = content.ontologicalProperties.difficulty;
    const nextLevel = difficulty === 'beginner' ? 'Intermediate' : 
                     difficulty === 'intermediate' ? 'Advanced' : 'Foundation';
    return `${nextLevel} Spiritual Practices`;
  }
  
  private generateEngagementHooks(content: ContentItem, type: string): string[] {
    const hooks = {
      direct: [
        "Discover the sacred web of connections",
        "Explore the divine relationships that bind all existence",
        "See how everything is interconnected in Sanātana Dharma"
      ],
      tradition: [
        "Deepen your understanding of this beautiful tradition",
        "Explore the rich philosophical foundations",
        "Connect with centuries of sacred wisdom"
      ],
      temporal: [
        "Align your practice with cosmic rhythms",
        "Celebrate in harmony with nature's cycles",
        "Experience the power of sacred timing"
      ],
      practice: [
        "Enhance your spiritual journey",
        "Discover complementary practices",
        "Build a holistic spiritual practice"
      ],
      regional: [
        "Experience India's diverse spiritual heritage",
        "Discover regional variations and beauty",
        "Connect with local traditions and customs"
      ],
      benefits: [
        "Find multiple paths to your spiritual goals",
        "Discover different approaches to the same divine goal",
        "Expand your toolkit for spiritual growth"
      ],
      journey: [
        "Take your practice to the next level",
        "Continue your spiritual evolution",
        "Challenge yourself with new depths"
      ]
    };
    
    return hooks[type as keyof typeof hooks] || ["Continue your spiritual exploration"];
  }
  
  private shuffleAndLimit(array: ContentItem[], limit: number): ContentItem[] {
    // Use deterministic sort to avoid hydration issues
    // Sort by ID to ensure consistent ordering between server and client
    const sorted = [...array].sort((a, b) => a.id.localeCompare(b.id));
    return sorted.slice(0, limit);
  }
  
  // Helper method to calculate similarity score
  calculateSimilarity(item1: ContentItem, item2: ContentItem): number {
    let score = 0;
    const props1 = item1.ontologicalProperties;
    const props2 = item2.ontologicalProperties;
    
    // Direct relationship bonus
    if (props1.relatedDeities?.includes(item2.id) || 
        props1.relatedFestivals?.includes(item2.id) ||
        props1.relatedScriptures?.includes(item2.id) ||
        props1.relatedPractices?.includes(item2.id)) {
      score += 10;
    }
    
    // Tradition match
    if (props1.traditions?.some(t => props2.traditions?.includes(t))) score += 5;
    
    // Yoga path match
    if (props1.yogaPaths?.some(p => props2.yogaPaths?.includes(p))) score += 4;
    
    // Seasonal match
    if (props1.seasons?.some(s => props2.seasons?.includes(s))) score += 3;
    
    // Benefits match
    if (props1.benefits?.some(b => props2.benefits?.includes(b))) score += 2;
    
    // Region match
    if (props1.regions?.some(r => props2.regions?.includes(r))) score += 2;
    
    return score;
  }
}

// Predefined content database - this would typically come from your CMS/database
export const sampleContentDatabase: ContentItem[] = [
  // Sample data structure - you would populate this with your actual content
  {
    id: 'ganesha',
    title: 'Lord Ganesha',
    type: 'deity',
    slug: 'ganesha',
    description: 'The remover of obstacles and lord of beginnings',
    tags: ['obstacle-removal', 'wisdom', 'prosperity', 'beginnings'],
    ontologicalProperties: {
      deityType: ['ganesha'],
      traditions: ['smartism', 'shaivism'],
      benefits: ['wisdom', 'prosperity', 'protection'],
      difficulty: 'beginner',
      relatedDeities: ['shiva', 'parvati'],
      relatedFestivals: ['ganesh-chaturthi'],
      relatedPractices: ['ganapati-puja']
    }
  },
  // Add more content items here...
];