import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const engagementData = await req.json();
    
    // Validate the data
    if (!engagementData.contentId || typeof engagementData.timeSpent !== 'number') {
      return NextResponse.json(
        { error: 'Invalid engagement data' }, 
        { status: 400 }
      );
    }

    // Store engagement data in Supabase
    const { data, error } = await (supabaseAdmin as any)
      .schema('hindu')
      .from('engagement_tracking')
      .insert({
        content_id: engagementData.contentId,
        time_spent: engagementData.timeSpent,
        scroll_depth: engagementData.scrollDepth,
        sections_viewed: engagementData.sectionsViewed,
        clicked_recommendations: engagementData.clickedRecommendations,
        bookmarked: engagementData.bookmarked,
        shared: engagementData.shared,
        exit_intent: engagementData.exitIntent,
        return_visitor: engagementData.returnVisitor,
        session_id: engagementData.sessionId || `session_${Date.now()}`,
        user_agent: req.headers.get('user-agent'),
        ip_address: req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip'),
        created_at: new Date().toISOString()
      });

    if (error) {
      console.error('Error storing engagement data:', error);
      return NextResponse.json(
        { error: 'Failed to store engagement data' }, 
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error in engagement API:', error);
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const contentId = searchParams.get('contentId');
    const timeframe = searchParams.get('timeframe') || '7d';

    if (!contentId) {
      return NextResponse.json(
        { error: 'contentId is required' }, 
        { status: 400 }
      );
    }

    // Calculate date range
    const now = new Date();
    let startDate = new Date();
    
    switch (timeframe) {
      case '1d':
        startDate.setDate(now.getDate() - 1);
        break;
      case '7d':
        startDate.setDate(now.getDate() - 7);
        break;
      case '30d':
        startDate.setDate(now.getDate() - 30);
        break;
      default:
        startDate.setDate(now.getDate() - 7);
    }

    // Get engagement analytics
    const { data, error } = await (supabaseAdmin as any)
      .schema('hindu')
      .from('engagement_tracking')
      .select('*')
      .eq('content_id', contentId)
      .gte('created_at', startDate.toISOString())
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching engagement data:', error);
      return NextResponse.json(
        { error: 'Failed to fetch engagement data' }, 
        { status: 500 }
      );
    }

    // Calculate insights
    const insights = calculateEngagementInsights(data || []);

    return NextResponse.json({ 
      success: true, 
      data: data || [], 
      insights,
      timeframe 
    });
  } catch (error) {
    console.error('Error in engagement analytics API:', error);
    return NextResponse.json(
      { error: 'Internal server error' }, 
      { status: 500 }
    );
  }
}

function calculateEngagementInsights(data: any[]) {
  if (!data.length) {
    return {
      totalSessions: 0,
      averageTimeSpent: 0,
      averageScrollDepth: 0,
      mostViewedSections: [],
      topRecommendations: [],
      conversionRates: {
        bookmark: 0,
        share: 0
      }
    };
  }

  const totalSessions = data.length;
  const averageTimeSpent = data.reduce((sum, session) => sum + (session.time_spent || 0), 0) / totalSessions;
  const averageScrollDepth = data.reduce((sum, session) => sum + (session.scroll_depth || 0), 0) / totalSessions;

  // Most viewed sections
  const sectionCounts: { [key: string]: number } = {};
  data.forEach(session => {
    (session.sections_viewed || []).forEach((section: string) => {
      sectionCounts[section] = (sectionCounts[section] || 0) + 1;
    });
  });

  const mostViewedSections = Object.entries(sectionCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([section, count]) => ({ section, count, percentage: (count / totalSessions) * 100 }));

  // Top clicked recommendations
  const recommendationCounts: { [key: string]: number } = {};
  data.forEach(session => {
    (session.clicked_recommendations || []).forEach((rec: string) => {
      recommendationCounts[rec] = (recommendationCounts[rec] || 0) + 1;
    });
  });

  const topRecommendations = Object.entries(recommendationCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([recommendation, count]) => ({ recommendation, count, percentage: (count / totalSessions) * 100 }));

  // Conversion rates
  const bookmarkRate = (data.filter(session => session.bookmarked).length / totalSessions) * 100;
  const shareRate = (data.filter(session => session.shared).length / totalSessions) * 100;

  return {
    totalSessions,
    averageTimeSpent: Math.round(averageTimeSpent / 1000), // Convert to seconds
    averageScrollDepth: Math.round(averageScrollDepth),
    mostViewedSections,
    topRecommendations,
    conversionRates: {
      bookmark: Math.round(bookmarkRate * 100) / 100,
      share: Math.round(shareRate * 100) / 100
    },
    engagementScore: calculateEngagementScore(data)
  };
}

function calculateEngagementScore(data: any[]): number {
  if (!data.length) return 0;

  let totalScore = 0;
  data.forEach(session => {
    let sessionScore = 0;
    
    // Time spent (max 50 points)
    const timeScore = Math.min((session.time_spent || 0) / 60000 * 10, 50); // 10 points per minute, max 50
    
    // Scroll depth (max 25 points)
    const scrollScore = (session.scroll_depth || 0) * 0.25;
    
    // Sections viewed (5 points each, max 25 points)
    const sectionsScore = Math.min((session.sections_viewed || []).length * 5, 25);
    
    // Actions (bookmark: 15 points, share: 20 points, recommendations: 5 each)
    const actionsScore = 
      (session.bookmarked ? 15 : 0) +
      (session.shared ? 20 : 0) +
      (session.clicked_recommendations || []).length * 5;
    
    sessionScore = timeScore + scrollScore + sectionsScore + actionsScore;
    totalScore += sessionScore;
  });

  return Math.round((totalScore / data.length) * 100) / 100;
}