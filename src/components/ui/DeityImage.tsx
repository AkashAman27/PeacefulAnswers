'use client'

import { useState } from 'react'

interface DeityImageProps {
  src: string
  alt: string
  className?: string
}

export default function DeityImage({ src, alt, className = '' }: DeityImageProps) {
  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const handleError = () => {
    console.error('Image failed to load:', src)
    setHasError(true)
  }

  const handleLoad = () => {
    console.log('Image loaded successfully:', src)
    setIsLoaded(true)
  }

  if (hasError) {
    return (
      <div className={`w-full h-full flex items-center justify-center ${className}`}>
        <span className="text-8xl opacity-50">🕉</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={handleError}
      onLoad={handleLoad}
    />
  )
}