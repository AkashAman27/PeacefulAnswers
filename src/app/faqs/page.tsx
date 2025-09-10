'use client';

import { useState, useEffect } from 'react';
import { Search, Filter, ThumbsUp, Eye, ChevronDown, ChevronUp, Star } from 'lucide-react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
  difficulty_level: string;
  tags: string[];
  is_featured: boolean;
  view_count: number;
  helpful_count: number;
  created_at: string;
  author: string;
  seo_keywords?: string;
}

interface Category {
  name: string;
  count: number;
}

export default function FAQsPage() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const difficulties = ['beginner', 'intermediate', 'advanced'];

  useEffect(() => {
    fetchCategories();
    fetchFAQs(true);
  }, []);

  useEffect(() => {
    fetchFAQs(true);
    setPage(0);
  }, [searchTerm, selectedCategory, selectedDifficulty, showFeaturedOnly]);

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/faqs/categories');
      if (response.ok) {
        const data = await response.json();
        setCategories(data.categories);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchFAQs = async (reset = false) => {
    try {
      setLoading(true);
      const offset = reset ? 0 : (page + 1) * 10;
      const params = new URLSearchParams({
        limit: '10',
        offset: offset.toString(),
        ...(searchTerm && { search: searchTerm }),
        ...(selectedCategory && { category: selectedCategory }),
        ...(selectedDifficulty && { difficulty: selectedDifficulty }),
        ...(showFeaturedOnly && { featured: 'true' })
      });

      const response = await fetch(`/api/faqs?${params}`);
      if (response.ok) {
        const data = await response.json();
        if (reset) {
          setFaqs(data.data);
        } else {
          setFaqs(prev => [...prev, ...data.data]);
        }
        setHasMore(data.pagination.hasMore);
        if (!reset) {
          setPage(prev => prev + 1);
        }
      }
    } catch (error) {
      console.error('Error fetching FAQs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleHelpful = async (id: number) => {
    try {
      const response = await fetch(`/api/faqs/${id}/helpful`, {
        method: 'POST'
      });
      if (response.ok) {
        const data = await response.json();
        setFaqs(prev => 
          prev.map(faq => 
            faq.id === id 
              ? { ...faq, helpful_count: data.helpful_count }
              : faq
          )
        );
      }
    } catch (error) {
      console.error('Error updating helpful count:', error);
    }
  };

  const toggleExpanded = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-orange-100 text-orange-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Spiritual Practices': 'bg-blue-100 text-blue-800',
      'Deities': 'bg-orange-100 text-orange-800',
      'Scriptures': 'bg-purple-100 text-purple-800',
      'Festivals': 'bg-red-100 text-red-800',
      'General': 'bg-gray-100 text-gray-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about Sanātana Dharma, spiritual practices, 
            deities, scriptures, and Hindu philosophy.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="">All Categories</option>
                {categories.map(category => (
                  <option key={category.name} value={category.name}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="">All Levels</option>
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Featured Toggle */}
          <div className="flex items-center">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={showFeaturedOnly}
                onChange={(e) => setShowFeaturedOnly(e.target.checked)}
                className="sr-only"
              />
              <div className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                showFeaturedOnly ? 'bg-orange-600' : 'bg-gray-200'
              }`}>
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  showFeaturedOnly ? 'translate-x-6' : 'translate-x-1'
                }`} />
              </div>
              <span className="ml-3 text-sm font-medium text-gray-700 flex items-center">
                <Star className="h-4 w-4 mr-1" />
                Featured FAQs only
              </span>
            </label>
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {loading && faqs.length === 0 ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading FAQs...</p>
            </div>
          ) : faqs.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600">No FAQs found matching your criteria.</p>
            </div>
          ) : (
            faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div 
                  className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleExpanded(faq.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {faq.is_featured && (
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        )}
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(faq.category)}`}>
                          {faq.category}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(faq.difficulty_level)}`}>
                          {faq.difficulty_level}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {faq.question}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {faq.view_count} views
                        </span>
                        <span className="flex items-center">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          {faq.helpful_count} helpful
                        </span>
                      </div>
                    </div>
                    <div className="ml-4">
                      {expandedFAQ === faq.id ? (
                        <ChevronUp className="h-5 w-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>

                {expandedFAQ === faq.id && (
                  <div className="border-t border-gray-200">
                    <div className="p-6">
                      <div className="prose max-w-none mb-4">
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>
                      </div>

                      {faq.tags && faq.tags.length > 0 && (
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {faq.tags.map((tag, index) => (
                              <span 
                                key={index}
                                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="text-sm text-gray-500">
                          By {faq.author} • {new Date(faq.created_at).toLocaleDateString()}
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleHelpful(faq.id);
                          }}
                          className="flex items-center gap-2 px-3 py-1 text-sm text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                        >
                          <ThumbsUp className="h-4 w-4" />
                          Helpful ({faq.helpful_count})
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Load More */}
        {hasMore && !loading && (
          <div className="text-center mt-8">
            <button
              onClick={() => fetchFAQs(false)}
              className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
            >
              Load More FAQs
            </button>
          </div>
        )}

        {loading && faqs.length > 0 && (
          <div className="text-center mt-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600 mx-auto"></div>
          </div>
        )}
      </div>
    </div>
  );
}