'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

interface GoogleAnalyticsProps {
  GA_MEASUREMENT_ID: string
}

export function GoogleAnalytics({ GA_MEASUREMENT_ID }: GoogleAnalyticsProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return

    // Load Google Analytics script
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(script1)

    const script2 = document.createElement('script')
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_title: document.title,
        page_location: window.location.href,
      });
    `
    document.head.appendChild(script2)

    return () => {
      // Cleanup scripts if component unmounts
      document.head.removeChild(script1)
      document.head.removeChild(script2)
    }
  }, [GA_MEASUREMENT_ID])

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || typeof window.gtag === 'undefined') return

    const url = pathname + searchParams.toString()
    
    // Track page views when route changes
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
      page_title: document.title,
      page_location: window.location.href,
    })
  }, [pathname, searchParams, GA_MEASUREMENT_ID])

  return null
}

// Custom hook for tracking events
export function useGoogleAnalytics() {
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        event_category: 'engagement',
        event_label: window.location.pathname,
        ...parameters,
      })
    }
  }

  const trackPageView = (pagePath: string, pageTitle?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID, {
        page_path: pagePath,
        page_title: pageTitle || document.title,
        page_location: window.location.href,
      })
    }
  }

  const trackFestivalView = (festivalName: string) => {
    trackEvent('festival_view', {
      event_category: 'content',
      event_label: festivalName,
      value: 1,
    })
  }

  const trackScriptureView = (scriptureName: string) => {
    trackEvent('scripture_view', {
      event_category: 'content',
      event_label: scriptureName,
      value: 1,
    })
  }

  const trackSearch = (searchQuery: string, resultsCount: number) => {
    trackEvent('search', {
      search_term: searchQuery,
      event_category: 'search',
      value: resultsCount,
    })
  }

  return {
    trackEvent,
    trackPageView,
    trackFestivalView,
    trackScriptureView,
    trackSearch,
  }
}