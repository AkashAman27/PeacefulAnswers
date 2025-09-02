import Image from 'next/image'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { 
  Crown, 
  Shield, 
  Heart, 
  Star, 
  Eye,
  Sun,
  Moon,
  Mountain,
  Flower,
  BookOpen,
  ChevronRight,
  Disc,
  Hammer,
  Music,
  Shell,
  Feather
} from 'lucide-react'

// Icon mapping
const iconMap: { [key: string]: any } = {
  Crown, Star, Heart, Shield, Eye, Mountain, Music, Disc, 
  Shell, Hammer, Feather, Sun, Moon, Flower, BookOpen
}

async function getDeitiesData() {
  try {
    // Fetch categories with their deities
    const { data: categories, error: categoriesError } = await supabase
      .from('hindu.deity_categories')
      .select('*')
      .eq('is_active', true)
      .order('sort_order')

    if (categoriesError) throw categoriesError

    // Fetch all published deities
    const { data: deities, error: deitiesError } = await supabase
      .from('hindu.deities')
      .select('*')
      .eq('status', 'published')
      .order('sort_order')

    if (deitiesError) throw deitiesError

    // Group deities by category
    const categoriesWithDeities = categories.map(category => ({
      ...category,
      deities: deities.filter(deity => deity.category_id === category.id)
    }))

    return {
      categories: categoriesWithDeities,
      totalDeities: deities.length,
      featuredDeities: deities.filter(deity => deity.is_featured)
    }
  } catch (error) {
    console.error('Error fetching deities data:', error)
    return {
      categories: [],
      totalDeities: 0,
      featuredDeities: []
    }
  }
}

export default async function DeitiesPage() {
  const { categories, totalDeities, featuredDeities } = await getDeitiesData()

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 pt-4">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-slideInFromLeft opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <Crown className="w-4 h-4" />
            Divine Pantheon
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-3 bg-gradient-to-r from-orange-200 via-yellow-300 to-red-200 bg-clip-text text-transparent animate-slideInFromLeft opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            हिन्दू देवता
          </h1>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent animate-slideInFromLeft opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Hindu Deities
          </h2>
          
          <div className="animate-slideInFromLeft opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-6">
              Discover the rich pantheon of Hindu deities, each representing different aspects of the divine and cosmic principles that guide spiritual life.
            </p>
            
            {totalDeities > 0 && (
              <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Crown className="w-4 h-4" />
                  <span>{totalDeities} Deities</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4" />
                  <span>{categories.length} Categories</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  <span>{featuredDeities.length} Featured</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {categories.map((category, categoryIndex) => {
            const CategoryIcon = iconMap[category.icon] || Star
            
            if (category.deities.length === 0) return null

            return (
              <div 
                key={category.id}
                className="animate-slideInFromLeft opacity-0" 
                style={{ animationDelay: `${1.2 + categoryIndex * 0.2}s`, animationFillMode: 'forwards' }}
              >
                {/* Category Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${category.color_scheme || 'from-orange-500 to-red-500'} text-white`}>
                      <CategoryIcon className="w-6 h-6" />
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {category.name}
                  </h2>
                  {category.description && (
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                      {category.description}
                    </p>
                  )}
                </div>

                {/* Deities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.deities.map((deity: any, deityIndex: number) => (
                    <Link 
                      key={deity.id}
                      href={`/deities/${deity.slug}`}
                      className="group"
                    >
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 hover:shadow-xl hover:scale-105 transition-all duration-300">
                        {/* Featured Badge */}
                        {deity.is_featured && (
                          <div className="flex justify-end mb-4">
                            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                              <Star className="w-3 h-3" />
                              Featured
                            </span>
                          </div>
                        )}

                        {/* Deity Image */}
                        {deity.featured_image_url && (
                          <div className="mb-6 relative h-48 rounded-lg overflow-hidden">
                            <Image
                              src={deity.featured_image_url}
                              alt={deity.featured_image_alt || `${deity.name} - ${deity.title}`}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        )}

                        {/* Content */}
                        <div className="text-center">
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">
                            {deity.sanskrit_name || deity.name}
                          </h3>
                          <h4 className="text-xl font-semibold text-gray-700 mb-2">
                            {deity.name}
                          </h4>
                          <p className="text-orange-600 font-medium mb-3">
                            {deity.title}
                          </p>
                          
                          {deity.description && (
                            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                              {deity.description}
                            </p>
                          )}

                          {/* Additional Info */}
                          <div className="space-y-2 text-xs text-gray-500">
                            {deity.avatar_of && (
                              <div className="flex items-center justify-center gap-1">
                                <Crown className="w-3 h-3" />
                                <span>Avatar of {deity.avatar_of}</span>
                              </div>
                            )}
                            {deity.era && (
                              <div className="flex items-center justify-center gap-1">
                                <BookOpen className="w-3 h-3" />
                                <span>{deity.era}</span>
                              </div>
                            )}
                          </div>

                          {/* View More */}
                          <div className="flex items-center justify-center gap-2 mt-4 text-orange-600 group-hover:text-orange-700">
                            <span className="text-sm font-medium">Learn More</span>
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Empty State */}
        {categories.length === 0 && (
          <div className="text-center py-16">
            <Crown className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No Deities Found</h3>
            <p className="text-gray-600">
              Deities are being added to the collection. Please check back soon.
            </p>
          </div>
        )}

        {/* Footer Note */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            🕉️ This collection represents the diverse spiritual traditions within Hinduism. 
            Each deity embodies unique aspects of the divine and offers different paths to spiritual growth.
          </p>
        </div>
      </div>
    </div>
  )
}