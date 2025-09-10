'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { ContentItem } from '@/lib/contentRecommendations';

interface EngagementData {
  contentId: string;
  timeSpent: number;
  scrollDepth: number;
  sectionsViewed: string[];
  clickedRecommendations: string[];
  bookmarked: boolean;
  shared: boolean;
  exitIntent: boolean;
  returnVisitor: boolean;
}

interface EngagementHooks {
  onRecommendationClick: (recommendationId: string) => void;
  onSectionView: (sectionId: string) => void;
  onBookmark: () => void;
  onShare: () => void;
  onScroll: (scrollDepth: number) => void;
  getEngagementData: () => EngagementData;
}

export default function useEngagementTracking(content: ContentItem): EngagementHooks {
  const startTime = useRef<number>(Date.now());
  const [scrollDepth, setScrollDepth] = useState<number>(0);
  const [sectionsViewed, setSectionsViewed] = useState<Set<string>>(new Set());
  const [clickedRecommendations, setClickedRecommendations] = useState<Set<string>>(new Set());
  const [bookmarked, setBookmarked] = useState<boolean>(false);
  const [shared, setShared] = useState<boolean>(false);
  const [exitIntent, setExitIntent] = useState<boolean>(false);
  const maxScrollDepth = useRef<number>(0);

  // Check if returning visitor
  const [returnVisitor] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const visited = localStorage.getItem(`visited_${content.id}`);
      if (!visited) {
        localStorage.setItem(`visited_${content.id}`, Date.now().toString());
        return false;
      }
      return true;
    }
    return false;
  });

  // Track scroll depth
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const currentScrollDepth = Math.min(100, (scrollTop / documentHeight) * 100);
    
    setScrollDepth(currentScrollDepth);
    maxScrollDepth.current = Math.max(maxScrollDepth.current, currentScrollDepth);

    // Track sections in view
    const sections = document.querySelectorAll('[id]');
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const isInView = rect.top >= 0 && rect.top <= window.innerHeight * 0.5;
      
      if (isInView && section.id) {
        setSectionsViewed(prev => new Set([...prev, section.id]));
      }
    });
  }, []);

  // Track exit intent
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0 && !exitIntent) {
      setExitIntent(true);
      
      // Optional: Show retention popup or recommendation
      if (maxScrollDepth.current > 25 && !bookmarked) {
        showRetentionPrompt();
      }
    }
  }, [exitIntent, bookmarked]);

  // Show retention prompt
  const showRetentionPrompt = () => {
    // This could trigger a modal or notification
    console.log('User showing exit intent - consider showing retention content');
  };

  // Setup event listeners
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleScroll, handleMouseMove]);

  // Send engagement data on unmount
  useEffect(() => {
    const sendEngagementData = () => {
      const timeSpent = Date.now() - startTime.current;
      const engagementData: EngagementData = {
        contentId: content.id,
        timeSpent,
        scrollDepth: maxScrollDepth.current,
        sectionsViewed: Array.from(sectionsViewed),
        clickedRecommendations: Array.from(clickedRecommendations),
        bookmarked,
        shared,
        exitIntent,
        returnVisitor
      };

      // Send to analytics service
      sendToAnalytics(engagementData);
      
      // Store locally for improvement
      storeEngagementData(engagementData);
    };

    // Send data on page unload
    const handleBeforeUnload = () => {
      sendEngagementData();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      sendEngagementData();
    };
  }, [content.id, sectionsViewed, clickedRecommendations, bookmarked, shared, exitIntent, returnVisitor]);

  // Hook functions
  const onRecommendationClick = useCallback((recommendationId: string) => {
    setClickedRecommendations(prev => new Set([...prev, recommendationId]));
    
    // Track the click event
    trackEvent('recommendation_click', {
      contentId: content.id,
      recommendationId,
      scrollDepth: scrollDepth,
      timeSpent: Date.now() - startTime.current
    });
  }, [content.id, scrollDepth]);

  const onSectionView = useCallback((sectionId: string) => {
    setSectionsViewed(prev => new Set([...prev, sectionId]));
    
    trackEvent('section_view', {
      contentId: content.id,
      sectionId,
      timeSpent: Date.now() - startTime.current
    });
  }, [content.id]);

  const onBookmark = useCallback(() => {
    setBookmarked(true);
    
    trackEvent('bookmark', {
      contentId: content.id,
      scrollDepth: scrollDepth,
      timeSpent: Date.now() - startTime.current
    });
  }, [content.id, scrollDepth]);

  const onShare = useCallback(() => {
    setShared(true);
    
    trackEvent('share', {
      contentId: content.id,
      scrollDepth: scrollDepth,
      timeSpent: Date.now() - startTime.current
    });
  }, [content.id, scrollDepth]);

  const onScroll = useCallback((depth: number) => {
    // Handle manual scroll tracking if needed
    setScrollDepth(depth);
  }, []);

  const getEngagementData = useCallback((): EngagementData => {
    return {
      contentId: content.id,
      timeSpent: Date.now() - startTime.current,
      scrollDepth: maxScrollDepth.current,
      sectionsViewed: Array.from(sectionsViewed),
      clickedRecommendations: Array.from(clickedRecommendations),
      bookmarked,
      shared,
      exitIntent,
      returnVisitor
    };
  }, [content.id, sectionsViewed, clickedRecommendations, bookmarked, shared, exitIntent, returnVisitor]);

  return {
    onRecommendationClick,
    onSectionView,
    onBookmark,
    onShare,
    onScroll,
    getEngagementData
  };
}

// Helper functions
function sendToAnalytics(data: EngagementData) {
  // Send to your analytics service (Google Analytics, Mixpanel, etc.)
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'engagement', {
      content_id: data.contentId,
      time_spent: data.timeSpent,
      scroll_depth: data.scrollDepth,
      sections_viewed: data.sectionsViewed.length,
      clicked_recommendations: data.clickedRecommendations.length,
      bookmarked: data.bookmarked,
      shared: data.shared,
      return_visitor: data.returnVisitor
    });
  }

  // Also send to your own analytics endpoint
  fetch('/api/analytics/engagement', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    keepalive: true // Important for data sent during page unload
  }).catch(console.error);
}

function storeEngagementData(data: EngagementData) {
  if (typeof window !== 'undefined') {
    const key = `engagement_${data.contentId}_${Date.now()}`;
    localStorage.setItem(key, JSON.stringify(data));

    // Clean up old data (keep only last 10 entries per content)
    const keys = Object.keys(localStorage).filter(k => k.startsWith(`engagement_${data.contentId}_`));
    if (keys.length > 10) {
      keys.sort().slice(0, -10).forEach(k => localStorage.removeItem(k));
    }
  }
}

function trackEvent(eventName: string, properties: any) {
  // Send individual events for real-time tracking
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, properties);
  }

  // Also send to custom analytics
  fetch('/api/analytics/event', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      event: eventName,
      properties,
      timestamp: Date.now()
    })
  }).catch(console.error);
}

// Hook for getting aggregated insights
export function useEngagementInsights(contentId: string) {
  const [insights, setInsights] = useState<any>(null);

  useEffect(() => {
    // Load insights from your analytics service
    fetch(`/api/analytics/insights/${contentId}`)
      .then(res => res.json())
      .then(setInsights)
      .catch(console.error);
  }, [contentId]);

  return insights;
}

// Hook for A/B testing recommendations
export function useRecommendationTesting(contentId: string) {
  const [variant, setVariant] = useState<'control' | 'experimental'>('control');

  useEffect(() => {
    // Simple A/B test logic
    const userId = localStorage.getItem('user_id') || 'anonymous';
    const hash = userId.split('').reduce((a, b) => {
      a = ((a << 5) - a) + b.charCodeAt(0);
      return a & a;
    }, 0);
    
    setVariant(Math.abs(hash) % 2 === 0 ? 'control' : 'experimental');
  }, []);

  return variant;
}