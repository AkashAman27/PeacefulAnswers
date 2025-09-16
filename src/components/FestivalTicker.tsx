'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FestivalTickerProps } from '@/types/festival'

interface TickerAnnouncement {
  id: string
  festival_name: string
  hindi_text: string
  english_text: string
  icon: string
  link_url: string
  start_date: string
  end_date: string
  is_active: boolean
}

// Fallback static data - moved outside component to prevent re-renders
const fallbackAnnouncements: TickerAnnouncement[] = [
  {
    id: '1',
    festival_name: 'Durga Puja',
    hindi_text: '🏮 दुर्गा पूजा 21 सितंबर से शुरू हो रहा है - महालया! माँ दुर्गा की महिमा जानने के लिए यहाँ क्लिक करें',
    english_text: '🏮 Durga Puja is starting from 21st September - Mahalaya! Click here to know more about the glory of Maa Durga',
    icon: '🏮',
    link_url: '/festivals/durga-puja',
    start_date: '2025-09-15',
    end_date: '2025-10-15',
    is_active: true
  }
]

export default function FestivalTicker({ announcements: propAnnouncements, speed, pauseOnHover = true, className }: FestivalTickerProps) {
  const [announcements, setAnnouncements] = useState<TickerAnnouncement[]>([])
  const [hasFetched, setHasFetched] = useState(false)

  useEffect(() => {
    // If announcements are passed as props, use them
    if (propAnnouncements && propAnnouncements.length > 0) {
      setAnnouncements(propAnnouncements)
      setHasFetched(true)
      return
    }

    // Only fetch once if not already fetched
    if (!hasFetched) {
      const fetchAnnouncements = async () => {
        try {
          const response = await fetch('/api/festival-announcements')
          if (response.ok) {
            const data = await response.json()
            if (data && data.length > 0) {
              setAnnouncements(data)
            } else {
              // Use fallback if no data returned
              setAnnouncements(fallbackAnnouncements)
            }
          } else {
            // Use fallback if API fails
            setAnnouncements(fallbackAnnouncements)
          }
        } catch (error) {
          console.error('Error fetching announcements:', error)
          // Use fallback if error occurs
          setAnnouncements(fallbackAnnouncements)
        } finally {
          setHasFetched(true)
        }
      }

      fetchAnnouncements()
    }
  }, [propAnnouncements, hasFetched])

  if (announcements.length === 0) {
    return null
  }

  // Create alternating Hindi/English content
  const tickerContent = announcements
    .filter(ann => ann.is_active)
    .flatMap(announcement => [
      { text: announcement.hindi_text, link: announcement.link_url, key: `${announcement.id}-hindi` },
      { text: announcement.english_text, link: announcement.link_url, key: `${announcement.id}-english` }
    ])

  if (tickerContent.length === 0) {
    return null
  }

  const animationDuration = speed || 60

  return (
    <div className={`relative overflow-hidden bg-gradient-to-r from-orange-600 via-orange-500 to-yellow-500 text-white py-2 shadow-md ${className || ''}`}>
      <div className="ticker-wrapper">
        <div className="ticker-content" style={{ animationDuration: `${animationDuration}s` }}>
          {/* Repeat content for seamless loop */}
          {[...Array(3)].map((_, repeatIndex) => (
            <div key={repeatIndex} className="ticker-items">
              {tickerContent.map((item) => (
                <Link 
                  key={`${item.key}-${repeatIndex}`}
                  href={item.link}
                  className="ticker-item hover:underline transition-all duration-200 hover:text-yellow-100"
                >
                  <span className="inline-block">{item.text}</span>
                  <span className="mx-8 opacity-50">•</span>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .ticker-wrapper {
          width: 100%;
        }
        
        .ticker-content {
          display: flex;
          animation: scroll-left ${animationDuration}s linear infinite;
        }
        
        ${pauseOnHover ? `
        .ticker-content:hover {
          animation-play-state: paused;
        }
        ` : ''}
        
        .ticker-items {
          display: flex;
          white-space: nowrap;
          align-items: center;
        }
        
        .ticker-item {
          display: inline-flex;
          align-items: center;
          font-weight: 500;
          font-size: 0.95rem;
          text-decoration: none;
        }
        
        @keyframes scroll-left {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        @media (max-width: 768px) {
          .ticker-item {
            font-size: 0.85rem;
          }
          
          .ticker-content {
            animation: scroll-left ${Math.max(animationDuration * 0.75, 30)}s linear infinite;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .ticker-content {
            animation: none;
          }
          
          .ticker-wrapper {
            overflow: auto;
          }
        }
      `}</style>
    </div>
  )
}