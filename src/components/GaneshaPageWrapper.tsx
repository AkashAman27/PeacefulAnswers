'use client';

import { useEffect } from 'react';
import useEngagementTracking from '@/hooks/useEngagementTracking';
import { ContentItem } from '@/lib/contentRecommendations';

interface GaneshaPageWrapperProps {
  children: React.ReactNode;
  ganeshaContent: ContentItem;
}

export default function GaneshaPageWrapper({ children, ganeshaContent }: GaneshaPageWrapperProps) {
  const engagement = useEngagementTracking(ganeshaContent);
  
  // Track section views based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            engagement.onSectionView(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
        rootMargin: '-20% 0px -20% 0px' // Only consider middle 60% of viewport
      }
    );

    // Observe all sections with IDs
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [engagement]);

  return <div>{children}</div>;
}