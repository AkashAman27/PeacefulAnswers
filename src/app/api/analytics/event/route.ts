import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const eventData = await req.json();
    
    // Validate the data
    if (!eventData.event || !eventData.properties) {
      return NextResponse.json(
        { error: 'Invalid event data' }, 
        { status: 400 }
      );
    }

    // Store individual event in Supabase for real-time tracking
    const { data, error } = await (supabaseAdmin as any)
      .schema('hindu')
      .from('engagement_events')
      .insert({
        event_name: eventData.event,
        content_id: eventData.properties.contentId,
        properties: eventData.properties,
        session_id: eventData.properties.sessionId || `session_${Date.now()}`,
        user_agent: req.headers.get('user-agent'),
        ip_address: req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip'),
        timestamp: new Date(eventData.timestamp).toISOString(),
        created_at: new Date().toISOString()
      });

    if (error) {
      console.error('Error storing event data:', error);
      // Don't fail silently - this affects analytics
      return NextResponse.json({ success: true }); // Return success to not block UX
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error in event API:', error);
    return NextResponse.json({ success: true }); // Return success to not block UX
  }
}