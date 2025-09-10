'use client';

import { useState, useEffect } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
  display_order: number;
  created_at: string;
}

interface Category {
  name: string;
  count: number;
}

export default function QuestionsPage() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);


  useEffect(() => {
    fetchFAQs(true);
  }, []);

  useEffect(() => {
    fetchFAQs(true);
    setPage(0);
  }, [searchTerm]);


  const fetchFAQs = async (reset = false) => {
    try {
      setLoading(true);
      const offset = reset ? 0 : (page + 1) * 10;
      const params = new URLSearchParams({
        limit: '10',
        offset: offset.toString(),
        ...(searchTerm && { search: searchTerm }),
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


  const toggleExpanded = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };



  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="relative">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
              Frequently Asked Questions
            </h1>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-500 bg-clip-text text-transparent animate-pulse opacity-50">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 blur-sm">
                Frequently Asked Questions
              </h1>
            </div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Find answers to common questions about Sanātana Dharma, spiritual practices, 
            deities, scriptures, and Hindu philosophy.
          </p>
        </div>

        {/* Custom CSS for gradient animation */}
        <style jsx>{`
          @keyframes gradient-x {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          
          .animate-gradient-x {
            animation: gradient-x 3s ease infinite;
          }
        `}</style>

        {/* Modern Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="flex items-center p-4">
                <Search className="h-6 w-6 text-gray-400 ml-2" />
                <input
                  type="text"
                  placeholder="Search spiritual wisdom..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 ml-4 text-lg placeholder-gray-400 border-none outline-none focus:ring-0 bg-transparent text-gray-900"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="mr-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
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
            <div className="text-center py-16">
              <div className="text-gray-400 mb-6">
                <Search className="h-16 w-16 mx-auto mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No questions found</h3>
              <p className="text-gray-600 max-w-md mx-auto">Try searching with different keywords or browse all questions below.</p>
            </div>
          ) : (
            faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div 
                  className="p-6 cursor-pointer hover:bg-gray-50 transition-colors rounded-xl"
                  onClick={() => toggleExpanded(faq.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-medium text-gray-900 mb-2 leading-relaxed">
                        {faq.question}
                      </h3>
                      {expandedFAQ !== faq.id && (
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer.substring(0, 150)}...
                        </p>
                      )}
                    </div>
                    <div className="ml-6 flex-shrink-0">
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-50 text-orange-600">
                        {expandedFAQ === faq.id ? (
                          <ChevronUp className="h-5 w-5" />
                        ) : (
                          <ChevronDown className="h-5 w-5" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {expandedFAQ === faq.id && (
                  <div className="border-t border-gray-100 bg-gradient-to-br from-blue-50/50 to-orange-50/30">
                    <div className="p-6">
                      <div className="prose max-w-none">
                        <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                          {faq.answer}
                        </p>
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
          <div className="text-center mt-12">
            <button
              onClick={() => fetchFAQs(false)}
              className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 font-medium"
            >
              Explore More Questions
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