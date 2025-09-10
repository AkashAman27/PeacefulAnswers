'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Bookmark, Share2, Clock, Users, Sparkles } from 'lucide-react';
import { ContentItem } from '@/lib/contentRecommendations';

interface ContextualNavigationProps {
  currentContent: ContentItem;
  relatedContent: ContentItem[];
  className?: string;
}

export default function ContextualNavigation({ 
  currentContent, 
  relatedContent, 
  className = '' 
}: ContextualNavigationProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [readingTime, setReadingTime] = useState(5);

  useEffect(() => {
    // Calculate estimated reading time (basic calculation)
    const words = currentContent.description.split(' ').length + 500; // Assume 500 more words for full content
    setReadingTime(Math.ceil(words / 200)); // 200 words per minute
  }, [currentContent]);

  const nextContent = relatedContent[(currentIndex + 1) % relatedContent.length];
  const prevContent = relatedContent[(currentIndex - 1 + relatedContent.length) % relatedContent.length];

  const getTypeColor = (type: string) => {
    const colors = {
      deity: 'bg-orange-600',
      festival: 'bg-pink-600',
      scripture: 'bg-purple-600',
      practice: 'bg-blue-600',
      place: 'bg-green-600',
      story: 'bg-indigo-600'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-600';
  };

  const getTypeIcon = (type: string) => {
    const icons = {
      deity: '🕉️',
      festival: '🎊',
      scripture: '📜',
      practice: '🧘',
      place: '🏛️',
      story: '📖'
    };
    return icons[type as keyof typeof icons] || '✨';
  };

  return (
    <div className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b shadow-sm ${className}`}>
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left: Previous Content */}
          {prevContent && (
            <Link 
              href={`/${prevContent.type}s/${prevContent.slug}`}
              className="flex items-center gap-3 text-sm text-gray-600 hover:text-orange-600 transition-colors group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <div className="hidden md:flex items-center gap-2">
                <span className="text-xs">{getTypeIcon(prevContent.type)}</span>
                <span className="max-w-32 truncate">{prevContent.title}</span>
              </div>
              <span className="md:hidden">Previous</span>
            </Link>
          )}

          {/* Center: Current Content Info */}
          <div className="flex items-center gap-4">
            {/* Content Type Badge */}
            <div className="flex items-center gap-2">
              <span className={`${getTypeColor(currentContent.type)} text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1`}>
                <span>{getTypeIcon(currentContent.type)}</span>
                <span className="hidden sm:inline">{currentContent.type.charAt(0).toUpperCase() + currentContent.type.slice(1)}</span>
              </span>
              
              {/* Tradition Badge */}
              {currentContent.ontologicalProperties.traditions && (
                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">
                  {currentContent.ontologicalProperties.traditions[0]}
                </span>
              )}
            </div>

            {/* Reading Time & Difficulty */}
            <div className="hidden sm:flex items-center gap-3 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{readingTime} min read</span>
              </div>
              {currentContent.ontologicalProperties.difficulty && (
                <div className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>{currentContent.ontologicalProperties.difficulty}</span>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded-full transition-colors ${
                  isBookmarked ? 'bg-orange-100 text-orange-600' : 'text-gray-400 hover:text-orange-600 hover:bg-orange-50'
                }`}
                title="Bookmark this content"
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>
              
              <button 
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: currentContent.title,
                      text: currentContent.description,
                      url: window.location.href
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                  }
                }}
                className="p-2 rounded-full text-gray-400 hover:text-orange-600 hover:bg-orange-50 transition-colors"
                title="Share this content"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: Next Content */}
          {nextContent && (
            <Link 
              href={`/${nextContent.type}s/${nextContent.slug}`}
              className="flex items-center gap-3 text-sm text-gray-600 hover:text-orange-600 transition-colors group"
            >
              <span className="md:hidden">Next</span>
              <div className="hidden md:flex items-center gap-2">
                <span className="max-w-32 truncate">{nextContent.title}</span>
                <span className="text-xs">{getTypeIcon(nextContent.type)}</span>
              </div>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        {/* Progress Indicator for Related Content */}
        {relatedContent.length > 1 && (
          <div className="mt-2 flex justify-center">
            <div className="flex gap-1">
              {relatedContent.slice(0, 5).map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-1 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-orange-600' : 'bg-gray-300'
                  }`}
                />
              ))}
              {relatedContent.length > 5 && (
                <span className="text-xs text-gray-400 ml-2">
                  +{relatedContent.length - 5} more
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Quick Navigation Sidebar Component
interface QuickNavigationProps {
  sections: { id: string; title: string; }[];
  currentSection?: string;
  className?: string;
}

export function QuickNavigation({ sections, currentSection, className = '' }: QuickNavigationProps) {
  const [activeSection, setActiveSection] = useState(currentSection || sections[0]?.id);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));

      const currentSectionElement = sectionElements.find(({ element }) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSectionElement) {
        setActiveSection(currentSectionElement.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <div className={`fixed right-4 top-1/2 transform -translate-y-1/2 z-40 ${className}`}>
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border p-4 max-w-48">
        <h4 className="font-bold text-orange-800 mb-3 text-sm">Quick Navigation</h4>
        <nav className="space-y-2">
          {sections.map(section => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(section.id)?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
                setActiveSection(section.id);
              }}
              className={`block text-sm py-2 px-3 rounded-lg transition-colors ${
                activeSection === section.id
                  ? 'bg-orange-100 text-orange-700 font-medium'
                  : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
              }`}
            >
              {section.title}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}