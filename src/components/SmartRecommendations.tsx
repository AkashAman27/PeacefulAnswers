'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, Sparkles, Clock, MapPin, Heart, Zap, Compass, ArrowRight } from 'lucide-react';
import { ContentItem, ContentRecommendationEngine, RecommendationSection } from '@/lib/contentRecommendations';

interface SmartRecommendationsProps {
  currentContent: ContentItem;
  contentDatabase: ContentItem[];
  className?: string;
}

export default function SmartRecommendations({ 
  currentContent, 
  contentDatabase, 
  className = '' 
}: SmartRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<RecommendationSection[]>([]);
  const [activeSection, setActiveSection] = useState<number>(0);

  useEffect(() => {
    const engine = new ContentRecommendationEngine(contentDatabase);
    const recs = engine.getRecommendations(currentContent, 4);
    setRecommendations(recs);
  }, [currentContent, contentDatabase]);

  if (recommendations.length === 0) return null;

  const getSectionIcon = (reasoning: string) => {
    const icons = {
      'ontologically_connected': <Sparkles className="w-5 h-5" />,
      'same_tradition': <Heart className="w-5 h-5" />,
      'temporal_alignment': <Clock className="w-5 h-5" />,
      'complementary_practices': <Zap className="w-5 h-5" />,
      'regional_cultural': <MapPin className="w-5 h-5" />,
      'similar_benefits': <Compass className="w-5 h-5" />,
      'spiritual_progression': <ArrowRight className="w-5 h-5" />
    };
    return icons[reasoning as keyof typeof icons] || <ChevronRight className="w-5 h-5" />;
  };

  const getSectionColor = (reasoning: string) => {
    const colors = {
      'ontologically_connected': 'from-orange-600 to-pink-600',
      'same_tradition': 'from-blue-600 to-purple-600',
      'temporal_alignment': 'from-green-600 to-teal-600',
      'complementary_practices': 'from-yellow-600 to-orange-600',
      'regional_cultural': 'from-red-600 to-pink-600',
      'similar_benefits': 'from-purple-600 to-indigo-600',
      'spiritual_progression': 'from-indigo-600 to-blue-600'
    };
    return colors[reasoning as keyof typeof colors] || 'from-gray-600 to-gray-700';
  };

  const getTypeIcon = (type: string) => {
    const typeIcons = {
      deity: '🕉️',
      festival: '🎊',
      scripture: '📜',
      practice: '🧘',
      place: '🏛️',
      story: '📖'
    };
    return typeIcons[type as keyof typeof typeIcons] || '✨';
  };

  // Collect all recommendations and organize them
  const allRecommendations = recommendations.flatMap(section => section.items);
  
  // Categorize items
  const practices = allRecommendations.filter(item => item.type === 'practice').slice(0, 3);
  const deities = allRecommendations.filter(item => item.type === 'deity').slice(0, 3);
  const festivals = allRecommendations.filter(item => item.type === 'festival').slice(0, 3);

  return (
    <div className={`py-16 px-4 bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Simplified Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-800 mb-4">
            Continue Your Journey
          </h2>
          <p className="text-lg text-orange-700 max-w-2xl mx-auto">
            Explore related content based on sacred connections and spiritual pathways.
          </p>
        </div>

        {/* Recommendation Sections */}
        <div className="space-y-12">
          {recommendations.map((section) => (
            <div key={`${section.type}-${section.title}`} className="bg-white rounded-3xl shadow-xl overflow-hidden">
              {/* Section Header */}
              <div className={`bg-gradient-to-r ${getSectionColor(section.reasoning)} text-white p-8`}>
                <div className="flex items-center gap-4 mb-4">
                  {getSectionIcon(section.reasoning)}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold">
                      {section.title}
                    </h3>
                    <p className="text-lg opacity-90 mt-2">
                      {section.subtitle}
                    </p>
                  </div>
                </div>
                
                {/* Engagement Hooks */}
                <div className="flex flex-wrap gap-3 mt-4">
                  {section.engagementHooks.slice(0, 2).map((hook, hookIndex) => (
                    <span key={`hook-${section.type}-${hookIndex}`} className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                      {hook}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content Grid */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.items.slice(0, 6).map((item, itemIndex) => (
                    <Link 
                      key={`${section.type}-${item.id}-${itemIndex}`}
                      href={`/${item.type}s/${item.slug}`}
                      className="group bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-orange-100"
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{getTypeIcon(item.type)}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                              {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                            </span>
                            {item.ontologicalProperties.difficulty && (
                              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                                {item.ontologicalProperties.difficulty}
                              </span>
                            )}
                          </div>
                          <h4 className="font-bold text-lg text-orange-800 mb-2 group-hover:text-orange-600 transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-gray-700 text-sm leading-relaxed mb-4">
                            {item.description}
                          </p>
                          
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-3">
                            {item.tags.slice(0, 3).map((tag, tagIndex) => (
                              <span key={`tag-${item.id}-${tagIndex}`} className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Ontological Properties Preview */}
                          {item.ontologicalProperties.traditions && (
                            <div className="flex items-center gap-2 text-xs text-purple-600 mb-2">
                              <Heart className="w-3 h-3" />
                              <span>{item.ontologicalProperties.traditions[0]} tradition</span>
                            </div>
                          )}
                          
                          {item.ontologicalProperties.benefits && (
                            <div className="flex items-center gap-2 text-xs text-green-600 mb-2">
                              <Sparkles className="w-3 h-3" />
                              <span>For {item.ontologicalProperties.benefits[0]}</span>
                            </div>
                          )}

                          <div className="flex items-center text-orange-600 text-sm font-medium mt-4">
                            <span>Explore</span>
                            <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* View All Link */}
                {section.items.length > 6 && (
                  <div className="text-center mt-8">
                    <Link
                      href={`/explore?category=${section.reasoning}&related=${currentContent.id}`}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                    >
                      <span>Explore All {section.items.length} Connected Items</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Footer */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 text-white rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              🌟 Your Spiritual Journey Continues
            </h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Every step in Sanātana Dharma connects to infinite wisdom. Keep exploring, 
              keep growing, and discover the beautiful tapestry of sacred knowledge.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/practices"
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                🧘 Explore Practices
              </Link>
              <Link
                href="/festivals"
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                🎊 Discover Festivals
              </Link>
              <Link
                href="/deities"
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-bold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                🕉️ Meet Deities
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}