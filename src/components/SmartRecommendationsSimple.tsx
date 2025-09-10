'use client';

import Link from 'next/link';
import { ContentItem } from '@/lib/contentRecommendations';
import { ContentRecommendationEngine } from '@/lib/contentRecommendations';

interface SmartRecommendationsProps {
  currentContent: ContentItem;
  contentDatabase: ContentItem[];
  className?: string;
}

export default function SmartRecommendationsSimple({ 
  currentContent, 
  contentDatabase, 
  className = '' 
}: SmartRecommendationsProps) {
  // Early error handling
  if (!currentContent || !contentDatabase || contentDatabase.length === 0) {
    console.error('SmartRecommendationsSimple: Missing required data');
    return <div>Error: Missing content data</div>;
  }

  const engine = new ContentRecommendationEngine(contentDatabase);
  const recommendations = engine.getRecommendations(currentContent, 1);
  
  // Get type icon
  const getTypeIcon = (type: string) => {
    const typeIcons = {
      'deity': '🕉️',
      'practice': '🙏',
      'festival': '🎊',
      'scripture': '📖',
      'place': '🏛️',
      'story': '📚'
    };
    return typeIcons[type as keyof typeof typeIcons] || '✨';
  };

  // Get proper link URL for items
  const getLinkUrl = (item: ContentItem) => {
    // Special cases for items that should link to different sections
    if (item.id === 'bhagavad-gita-study') {
      return '/scriptures/bhagavad-gita';
    }
    
    // Default pattern: /{type}s/{slug}
    return `/${item.type}s/${item.slug}`;
  };

  // Get more recommendations by expanding the search
  const allRecommendations = engine.getRecommendations(currentContent, 10);
  const allItems = allRecommendations.flatMap(section => section.items);
  
  // Get items from database directly to ensure we have enough
  // Sort by ID to ensure consistent ordering between server and client
  const allPractices = contentDatabase.filter(item => item.type === 'practice').sort((a, b) => a.id.localeCompare(b.id));
  const allDeities = contentDatabase.filter(item => item.type === 'deity' && item.id !== currentContent.id).sort((a, b) => a.id.localeCompare(b.id));
  const allFestivals = contentDatabase.filter(item => item.type === 'festival').sort((a, b) => a.id.localeCompare(b.id));
  
  // Prioritize recommended items but fallback to database if needed
  // Sort by ID to ensure consistent ordering
  const recommendedPractices = allItems.filter(item => item.type === 'practice').sort((a, b) => a.id.localeCompare(b.id));
  const recommendedDeities = allItems.filter(item => item.type === 'deity').sort((a, b) => a.id.localeCompare(b.id));
  const recommendedFestivals = allItems.filter(item => item.type === 'festival').sort((a, b) => a.id.localeCompare(b.id));
  
  // Helper function to get unique items
  const getUniqueItems = (recommended: ContentItem[], allItems: ContentItem[], count: number = 3) => {
    const seen = new Set();
    const result = [];
    
    // First, add recommended items
    for (const item of recommended) {
      if (!seen.has(item.id) && result.length < count) {
        seen.add(item.id);
        result.push(item);
      }
    }
    
    // Then fill with remaining items from database
    for (const item of allItems) {
      if (!seen.has(item.id) && result.length < count) {
        seen.add(item.id);
        result.push(item);
      }
    }
    
    return result;
  };
  
  // Get unique items - 3 each
  const practices = getUniqueItems(recommendedPractices, allPractices, 3);
  const deities = getUniqueItems(recommendedDeities, allDeities, 3);
  const festivals = getUniqueItems(recommendedFestivals, allFestivals, 3);
  
  // Debug logging (remove in production)
  console.log('Debug - Practices:', practices.length, practices.map(p => p.title));
  console.log('Debug - Deities:', deities.length, deities.map(d => d.title));
  console.log('Debug - Festivals:', festivals.length, festivals.map(f => f.title));
  
  // Additional debugging
  console.log('Debug - All practices items:', practices);
  console.log('Debug - All deities items:', deities);
  console.log('Debug - All festivals items:', festivals);
  console.log('Debug - Component will render:', { 
    practicesCount: practices.length, 
    deitiesCount: deities.length, 
    festivalsCount: festivals.length 
  });

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

        {/* Single Recommendation Block with 3-3-3 Layout */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-8">
            {/* Practices Section */}
            {practices.length > 0 && (
              <div className="mb-10">
                <h3 className="text-xl font-bold text-orange-800 mb-6 flex items-center gap-3">
                  <span className="text-2xl">🙏</span>
                  Recommended Practices
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {practices.map((item, index) => (
                    <Link 
                      key={`practice-${item.id}-${index}`}
                      href={getLinkUrl(item)}
                      className="group bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-orange-100"
                    >
                      <div className="text-2xl mb-3">{getTypeIcon(item.type)}</div>
                      <h4 className="font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors text-sm">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-xs line-clamp-2">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Deities Section */}
            {deities.length > 0 && (
              <div className="mb-10">
                <h3 className="text-xl font-bold text-purple-800 mb-6 flex items-center gap-3">
                  <span className="text-2xl">🕉️</span>
                  Related Deities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {deities.map((item, index) => (
                    <Link 
                      key={`deity-${item.id}-${index}`}
                      href={getLinkUrl(item)}
                      className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-purple-100"
                    >
                      <div className="text-2xl mb-3">{getTypeIcon(item.type)}</div>
                      <h4 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors text-sm">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-xs line-clamp-2">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Festivals Section */}
            {festivals.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-green-800 mb-6 flex items-center gap-3">
                  <span className="text-2xl">🎊</span>
                  Sacred Festivals
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {festivals.map((item, index) => (
                    <Link 
                      key={`festival-${item.id}-${index}`}
                      href={getLinkUrl(item)}
                      className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-green-100"
                    >
                      <div className="text-2xl mb-3">{getTypeIcon(item.type)}</div>
                      <h4 className="font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors text-sm">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-xs line-clamp-2">
                        {item.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}