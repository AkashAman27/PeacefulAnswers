import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'

interface ContentSection {
  id: string
  title: string
  content: React.ReactNode
  className?: string
  animate?: boolean
}

interface ContentTemplateProps {
  // Hero section data
  heroData: {
    name: string
    sanskrit_name?: string
    title: string
    description: string
    featured_image_url?: string
    hero_image_url?: string
    category?: {
      name: string
      icon?: string
      color_scheme?: string
    }
    gradient?: string
  }
  
  // Back navigation
  backLink: {
    href: string
    label: string
  }
  
  // Quick info cards (shown below hero)
  quickInfo?: Array<{
    icon: React.ReactNode
    label: string
    value: string
    color?: string
  }>
  
  // Main content sections
  sections: ContentSection[]
  
  // Sidebar content
  sidebar?: {
    featured_image?: {
      url: string
      alt: string
    }
    quick_facts?: Array<{
      label: string
      value: string
      className?: string
    }>
    additional_sections?: Array<{
      title: string
      content: React.ReactNode
      className?: string
    }>
  }
  
  // SEO and meta
  metadata?: {
    title: string
    description: string
    keywords?: string
  }
}

export default function ContentTemplate({
  heroData,
  backLink,
  quickInfo = [],
  sections,
  sidebar,
}: ContentTemplateProps) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href={backLink.href} 
            className="inline-flex items-center text-gray-600 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {backLink.label}
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className={`relative overflow-hidden ${heroData.gradient || 'bg-gradient-to-r from-orange-600 via-red-600 to-pink-600'} text-white py-20`}>
        <div className="absolute inset-0 bg-black/20"></div>
        {heroData.hero_image_url && (
          <div className="absolute inset-0">
            <Image
              src={heroData.hero_image_url}
              alt={heroData.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        )}
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="text-white animate-[slideInFromLeft_1s_ease-out]">
              {heroData.category && (
                <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <span className="text-sm font-medium">{heroData.category.name}</span>
                </div>
              )}
              
              {heroData.sanskrit_name && (
                <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sanskrit">
                  {heroData.sanskrit_name}
                </h1>
              )}
              
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-orange-100">
                {heroData.name}
              </h2>
              
              <p className="text-lg text-red-100 leading-relaxed mb-8">
                {heroData.description}
              </p>
            </div>

            {/* Right Side - Image */}
            {heroData.featured_image_url && (
              <div className="relative animate-[slideInFromRight_1s_ease-out]">
                <div className="aspect-square bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20">
                  <Image
                    src={heroData.featured_image_url}
                    alt={heroData.name}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-red-400/20 rounded-full blur-3xl"></div>
      </section>

      {/* Quick Info Section */}
      {quickInfo.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-orange-500">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {quickInfo.map((info, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`w-8 h-8 mb-2 ${info.color || 'text-orange-600'}`}>
                    {info.icon}
                  </div>
                  <div className="text-sm text-gray-600">{info.label}</div>
                  <div className="font-semibold">{info.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className={`${sidebar ? 'grid lg:grid-cols-3 gap-12' : ''}`}>
          {/* Main Content Sections */}
          <div className={`${sidebar ? 'lg:col-span-2' : ''} space-y-20`}>
            {sections.map((section, index) => (
              <section 
                key={section.id} 
                className={`${section.animate ? 'animate-fadeIn' : ''} ${section.className || ''}`}
                style={section.animate ? { animationDelay: `${index * 200}ms` } : {}}
              >
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">{section.title}</h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-red-600 mx-auto mb-8"></div>
                </div>
                {section.content}
              </section>
            ))}
          </div>

          {/* Sidebar */}
          {sidebar && (
            <div className="space-y-8">
              {/* Featured Image */}
              {sidebar.featured_image && (
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <Image
                    src={sidebar.featured_image.url}
                    alt={sidebar.featured_image.alt}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>
              )}

              {/* Quick Facts */}
              {sidebar.quick_facts && sidebar.quick_facts.length > 0 && (
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Facts</h3>
                  <div className="space-y-3">
                    {sidebar.quick_facts.map((fact, index) => (
                      <div key={index}>
                        <span className="text-sm font-medium text-gray-600">{fact.label}:</span>
                        <div className={`font-medium ${fact.className || ''}`}>{fact.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Additional Sections */}
              {sidebar.additional_sections?.map((section, index) => (
                <div key={index} className={`bg-white rounded-xl shadow-lg p-6 ${section.className || ''}`}>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{section.title}</h3>
                  {section.content}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

// Helper components for common content sections
export const ContentCard = ({ 
  children, 
  className = '',
  title,
  gradient = false
}: { 
  children: React.ReactNode
  className?: string
  title?: string
  gradient?: boolean
}) => (
  <div className={`${gradient ? 'bg-gradient-to-r from-orange-50 to-red-50' : 'bg-white'} rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow ${className}`}>
    {title && <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>}
    {children}
  </div>
)

export const GridSection = ({ 
  children, 
  columns = 'md:grid-cols-2 lg:grid-cols-3',
  className = ''
}: { 
  children: React.ReactNode
  columns?: string
  className?: string
}) => (
  <div className={`grid grid-cols-1 ${columns} gap-8 ${className}`}>
    {children}
  </div>
)

export const VideoEmbed = ({ 
  videoId, 
  title = "Video content", 
  placeholder = "Video content coming soon" 
}: { 
  videoId?: string
  title?: string
  placeholder?: string
}) => (
  <div className="relative">
    {videoId ? (
      <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          className="w-full h-full"
          allowFullScreen
        />
      </div>
    ) : (
      <div className="aspect-video bg-gradient-to-br from-orange-50 to-red-50 rounded-xl flex items-center justify-center">
        <p className="text-gray-500">{placeholder}</p>
      </div>
    )}
  </div>
)