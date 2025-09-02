'use client'

import { useState } from 'react'
import Image from 'next/image'

interface DeityHeroProps {
  deity: any
  colorScheme: string
  iconMap: { [key: string]: any }
}

export function DeityHero({ deity, colorScheme, iconMap }: DeityHeroProps) {
  return (
    <div className="mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content - Left Side */}
        <div className="order-2 lg:order-1">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-slideInFromLeft opacity-0 bg-white/20 backdrop-blur-sm text-gray-800`} 
               style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            {deity.category?.icon && iconMap[deity.category.icon] && (
              (() => {
                const CategoryIcon = iconMap[deity.category.icon]
                return <CategoryIcon className="w-4 h-4" />
              })()
            )}
            {deity.category?.name || 'Hindu Deity'}
          </div>
          
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-3 bg-gradient-to-r ${colorScheme} bg-clip-text text-transparent animate-slideInFromLeft opacity-0 leading-tight`} 
              style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            {deity.sanskrit_name || deity.name}
          </h1>
          
          <h2 className={`text-2xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r ${colorScheme} bg-clip-text text-transparent animate-slideInFromLeft opacity-0`} 
              style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            {deity.name}
          </h2>
          
          <div className="animate-slideInFromLeft opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              {deity.subtitle || deity.description}
            </p>
          </div>
        </div>

        {/* Image - Right Side */}
        <div className="order-1 lg:order-2">
          <div className="relative">
            {deity.featured_image_url ? (
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-white/20 backdrop-blur-sm border border-white/30">
                <Image
                  src={deity.featured_image_url}
                  alt={deity.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
            ) : (
              <div className={`aspect-square rounded-2xl bg-gradient-to-br ${colorScheme} flex items-center justify-center shadow-2xl`}>
                {deity.category?.icon && iconMap[deity.category.icon] && (
                  (() => {
                    const CategoryIcon = iconMap[deity.category.icon]
                    return <CategoryIcon className="w-32 h-32 text-white/80" />
                  })()
                )}
              </div>
            )}
            
            {/* Decorative elements */}
            <div className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${colorScheme} rounded-full opacity-20 animate-pulse`}></div>
            <div className={`absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br ${colorScheme} rounded-full opacity-30 animate-pulse`} style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}