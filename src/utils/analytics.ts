// Google Analytics utility functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

// Check if Google Analytics is available
export const isAnalyticsAvailable = (): boolean => {
  return typeof window !== 'undefined' && 'gtag' in window
}

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (!isAnalyticsAvailable()) return

  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID, {
    page_path: url,
    page_title: title || document.title,
    page_location: window.location.href,
  })
}

// Track custom events
export const trackEvent = (
  eventName: string,
  parameters?: {
    event_category?: string
    event_label?: string
    value?: number
    [key: string]: any
  }
) => {
  if (!isAnalyticsAvailable()) return

  window.gtag('event', eventName, {
    event_category: 'engagement',
    ...parameters,
  })
}

// Specific tracking functions for PeacefulAnswers

export const trackFestivalView = (festivalName: string) => {
  trackEvent('festival_view', {
    event_category: 'content',
    event_label: festivalName,
    value: 1,
  })
}

export const trackScriptureRead = (scriptureName: string, chapter?: string) => {
  trackEvent('scripture_read', {
    event_category: 'content',
    event_label: chapter ? `${scriptureName} - ${chapter}` : scriptureName,
    value: 1,
  })
}

export const trackSearch = (query: string, resultsCount: number) => {
  trackEvent('search', {
    search_term: query,
    event_category: 'search',
    value: resultsCount,
  })
}

export const trackDeityView = (deityName: string) => {
  trackEvent('deity_view', {
    event_category: 'content',
    event_label: deityName,
    value: 1,
  })
}

export const trackPracticeView = (practiceName: string) => {
  trackEvent('practice_view', {
    event_category: 'content',
    event_label: practiceName,
    value: 1,
  })
}

export const trackLanguageChange = (language: string) => {
  trackEvent('language_change', {
    event_category: 'user_preference',
    event_label: language,
  })
}

export const trackDownload = (fileName: string, category: string = 'download') => {
  trackEvent('file_download', {
    event_category: category,
    event_label: fileName,
    value: 1,
  })
}

export const trackExternalLink = (url: string, linkText?: string) => {
  trackEvent('external_link_click', {
    event_category: 'outbound',
    event_label: linkText || url,
    value: 1,
  })
}

export const trackVideoPlay = (videoTitle: string, videoId?: string) => {
  trackEvent('video_play', {
    event_category: 'media',
    event_label: videoTitle,
    video_id: videoId,
    value: 1,
  })
}

export const trackFormSubmission = (formName: string, success: boolean = true) => {
  trackEvent(success ? 'form_submit_success' : 'form_submit_error', {
    event_category: 'form',
    event_label: formName,
    value: success ? 1 : 0,
  })
}

export const trackUserEngagement = (action: string, element: string) => {
  trackEvent('user_engagement', {
    event_category: 'interaction',
    event_label: `${action} - ${element}`,
    value: 1,
  })
}