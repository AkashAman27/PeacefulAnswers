import { use } from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Calendar, 
  Clock, 
  Tag, 
  Share2, 
  BookOpen, 
  MapPin, 
  Star, 
  Heart,
  Eye,
  User
} from 'lucide-react'
import { BulkUploadItem } from '@/types/bulkUpload'
import { supabase } from '@/lib/supabase'

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Server-side data fetching function
async function getPageData(slug: string): Promise<BulkUploadItem | null> {
  try {
    const { data, error } = await supabase
      .from('peace.hindu_pages')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();

    if (error || !data) {
      return null;
    }

    // Transform database response to BulkUploadItem format
    const pageData: BulkUploadItem = {
      slug: data.slug,
      title: data.title,
      contentType: data.content_type,
      status: data.status,
      shortDescription: data.short_description,
      description: data.description,
      longContent: data.long_content,
      featuredImage: data.featured_image,
      gallery: data.gallery,
      heroImage: data.hero_image,
      seo: data.seo_data,
      tags: data.tags || [],
      categories: data.categories || [],
      deityInfo: data.deity_info,
      storyInfo: data.story_info,
      scriptureInfo: data.scripture_info,
      practiceInfo: data.practice_info,
      author: data.author,
      publishDate: data.publish_date,
      lastModified: data.last_modified,
      language: data.language || 'en',
      readingTime: data.reading_time,
      relatedContent: data.related_content,
      references: data.references,
      externalLinks: data.external_links,
      customFields: data.custom_fields
    };

    return pageData;
  } catch (error) {
    console.error('Error fetching page data:', error);
    return null;
  }
}

export default function DynamicPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const pageData = use(getPageData(resolvedParams.slug));

  if (!pageData) {
    notFound();
  }

  const renderDeityContent = () => {
    if (!pageData.deityInfo) return null;

    return (
      <div className="space-y-8">
        {/* Names and Basic Info */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-orange-900 mb-4">Divine Names</h3>
          <div className="flex flex-wrap gap-2">
            {pageData.deityInfo.names.map((name, index) => (
              <span 
                key={index}
                className="bg-white text-orange-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Family Relations */}
        {(pageData.deityInfo.consort || pageData.deityInfo.parents || pageData.deityInfo.children) && (
          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Divine Family</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {pageData.deityInfo.consort && (
                <div>
                  <span className="font-semibold text-blue-800">Consort:</span>
                  <p className="text-blue-700">{pageData.deityInfo.consort}</p>
                </div>
              )}
              {pageData.deityInfo.parents && pageData.deityInfo.parents.length > 0 && (
                <div>
                  <span className="font-semibold text-blue-800">Parents:</span>
                  <p className="text-blue-700">{pageData.deityInfo.parents.join(', ')}</p>
                </div>
              )}
              {pageData.deityInfo.children && pageData.deityInfo.children.length > 0 && (
                <div>
                  <span className="font-semibold text-blue-800">Children:</span>
                  <p className="text-blue-700">{pageData.deityInfo.children.join(', ')}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Personality Traits */}
        {pageData.deityInfo.personalityTraits && (
          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-green-900 mb-4">Divine Attributes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pageData.deityInfo.personalityTraits.attributes.length > 0 && (
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Attributes</h4>
                  <div className="flex flex-wrap gap-2">
                    {pageData.deityInfo.personalityTraits.attributes.map((attr, index) => (
                      <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                        {attr}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {pageData.deityInfo.personalityTraits.symbols.length > 0 && (
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">Symbols</h4>
                  <div className="flex flex-wrap gap-2">
                    {pageData.deityInfo.personalityTraits.symbols.map((symbol, index) => (
                      <span key={index} className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                        {symbol}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mantras and Festivals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pageData.deityInfo.mantras.length > 0 && (
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-purple-900 mb-4">Sacred Mantras</h3>
              <div className="space-y-3">
                {pageData.deityInfo.mantras.map((mantra, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg">
                    <p className="text-purple-800 font-medium text-center text-lg">
                      {mantra}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {pageData.deityInfo.festivals.length > 0 && (
            <div className="bg-yellow-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-yellow-900 mb-4">Festivals</h3>
              <div className="space-y-2">
                {pageData.deityInfo.festivals.map((festival, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-yellow-600" />
                    <span className="text-yellow-800">{festival}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderStoryContent = () => {
    if (!pageData.storyInfo) return null;

    return (
      <div className="space-y-8">
        {/* Story Details */}
        <div className="bg-indigo-50 rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <span className="font-semibold text-indigo-800">Type:</span>
              <p className="text-indigo-700 capitalize">{pageData.storyInfo.storyType}</p>
            </div>
            <div>
              <span className="font-semibold text-indigo-800">Setting:</span>
              <p className="text-indigo-700">{pageData.storyInfo.setting}</p>
            </div>
            <div>
              <span className="font-semibold text-indigo-800">Origin:</span>
              <p className="text-indigo-700">{pageData.storyInfo.origin}</p>
            </div>
            <div>
              <span className="font-semibold text-indigo-800">Difficulty:</span>
              <p className="text-indigo-700 capitalize">{pageData.storyInfo.difficulty}</p>
            </div>
          </div>
        </div>

        {/* Characters */}
        {pageData.storyInfo.characters.length > 0 && (
          <div className="bg-rose-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-rose-900 mb-4">Main Characters</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {pageData.storyInfo.characters.map((character, index) => (
                <div key={index} className="bg-white rounded-lg p-3 text-center">
                  <User className="w-6 h-6 text-rose-600 mx-auto mb-2" />
                  <span className="text-rose-800 font-medium">{character}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Story Chapters */}
        {pageData.storyInfo.storyContent.chapters && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900">Story Chapters</h3>
            {pageData.storyInfo.storyContent.chapters.map((chapter, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{chapter.title}</h4>
                <p className="text-gray-700 mb-4">{chapter.summary}</p>
                <div className="prose prose-lg max-w-none text-gray-800">
                  {chapter.content.split('\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Moral Lesson */}
        {pageData.storyInfo.storyContent.moralLesson && (
          <div className="bg-green-50 border-l-4 border-green-400 rounded-r-xl p-6">
            <h3 className="text-xl font-bold text-green-900 mb-3">Moral Lesson</h3>
            <p className="text-green-800 text-lg italic">
              {pageData.storyInfo.storyContent.moralLesson}
            </p>
          </div>
        )}
      </div>
    );
  };

  const renderPracticeContent = () => {
    if (!pageData.practiceInfo) return null;

    return (
      <div className="space-y-8">
        {/* Practice Details */}
        <div className="bg-teal-50 rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <span className="font-semibold text-teal-800">Type:</span>
              <p className="text-teal-700 capitalize">{pageData.practiceInfo.practiceType}</p>
            </div>
            <div>
              <span className="font-semibold text-teal-800">Difficulty:</span>
              <p className="text-teal-700 capitalize">{pageData.practiceInfo.difficulty}</p>
            </div>
            {pageData.practiceInfo.duration && (
              <div>
                <span className="font-semibold text-teal-800">Duration:</span>
                <p className="text-teal-700">{pageData.practiceInfo.duration}</p>
              </div>
            )}
          </div>
        </div>

        {/* Steps */}
        {pageData.practiceInfo.steps && pageData.practiceInfo.steps.length > 0 && (
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Step-by-Step Instructions</h3>
            <ol className="space-y-4">
              {pageData.practiceInfo.steps.map((step, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  <p className="text-gray-700 pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* Benefits */}
        {pageData.practiceInfo.benefits && pageData.practiceInfo.benefits.length > 0 && (
          <div className="bg-green-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-green-900 mb-4">Benefits</h3>
            <ul className="space-y-2">
              {pageData.practiceInfo.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-green-800">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  const renderContentBasedOnType = () => {
    switch (pageData.contentType) {
      case 'deity':
      case 'god':
      case 'goddess':
        return renderDeityContent();
      case 'story':
      case 'ramayana':
        return renderStoryContent();
      case 'practice':
        return renderPracticeContent();
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-blue-50">
      {/* Hero Section */}
      {pageData.heroImage ? (
        <div className="relative h-96 mb-12">
          <Image
            src={pageData.heroImage.url}
            alt={pageData.heroImage.alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{pageData.title}</h1>
              <p className="text-xl md:text-2xl opacity-90">{pageData.shortDescription}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">{pageData.title}</h1>
          <p className="text-xl text-blue-800 max-w-3xl mx-auto">{pageData.shortDescription}</p>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Image */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <Image
                src={pageData.featuredImage.url}
                alt={pageData.featuredImage.alt}
                width={800}
                height={400}
                className="w-full h-64 object-cover"
              />
              {pageData.featuredImage.caption && (
                <div className="p-4">
                  <p className="text-gray-600 text-sm italic">{pageData.featuredImage.caption}</p>
                </div>
              )}
            </div>

            {/* Main Description */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="prose prose-lg max-w-none text-gray-800">
                {pageData.description.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Content Type Specific Sections */}
            {renderContentBasedOnType()}

            {/* Long Content */}
            {pageData.longContent && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <div className="prose prose-lg max-w-none text-gray-800">
                  {pageData.longContent.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery */}
            {pageData.gallery && pageData.gallery.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pageData.gallery.map((image, index) => (
                    <div key={index} className="space-y-2">
                      <Image
                        src={image.url}
                        alt={image.alt}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      {image.caption && (
                        <p className="text-gray-600 text-sm">{image.caption}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Info</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 capitalize">{pageData.contentType.replace('-', ' ')}</span>
                </div>
                {pageData.readingTime && (
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{pageData.readingTime} min read</span>
                  </div>
                )}
                {pageData.publishDate && (
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">
                      {new Date(pageData.publishDate).toLocaleDateString()}
                    </span>
                  </div>
                )}
                {pageData.author && (
                  <div className="flex items-center gap-3">
                    <User className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{pageData.author}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Tags */}
            {pageData.tags.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {pageData.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Categories */}
            {pageData.categories.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {pageData.categories.map((category, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-orange-600" />
                      <span className="text-gray-700 capitalize">{category}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* External Links */}
            {pageData.externalLinks && pageData.externalLinks.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Links</h3>
                <div className="space-y-3">
                  {pageData.externalLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="font-medium text-gray-900">{link.title}</div>
                      {link.description && (
                        <div className="text-sm text-gray-600 mt-1">{link.description}</div>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Share */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Share</h3>
              <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Share2 className="w-4 h-4" />
                Share this page
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}