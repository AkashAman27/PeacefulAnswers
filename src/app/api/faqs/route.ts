import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const difficulty = searchParams.get('difficulty');
    const featured = searchParams.get('featured');
    const search = searchParams.get('search');
    const limit = searchParams.get('limit') || '10';
    const offset = searchParams.get('offset') || '0';

    let query = supabase
      .schema('hindu')
      .from('hindu_faq')
      .select(`
        id,
        question,
        answer,
        category,
        tags,
        display_order,
        created_at,
        updated_at
      `)
      .eq('is_published', true)
      .order('display_order', { ascending: true });

    // Apply filters
    if (category) {
      query = query.eq('category', category);
    }

    // Apply search functionality
    if (search) {
      query = query.or(`question.ilike.%${search}%,answer.ilike.%${search}%,tags.cs.{${search}}`);
    }

    // Apply pagination
    query = query.range(parseInt(offset), parseInt(offset) + parseInt(limit) - 1);

    const { data, error, count } = await query;

    if (error) {
      console.error('Error fetching FAQs:', error);
      return NextResponse.json({ error: 'Failed to fetch FAQs' }, { status: 500 });
    }

    return NextResponse.json({
      data,
      count,
      pagination: {
        offset: parseInt(offset),
        limit: parseInt(limit),
        hasMore: data?.length === parseInt(limit)
      }
    });

  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      question,
      answer,
      category = 'general',
      tags = [],
      display_order = 0
    } = body;

    // Validate required fields
    if (!question || !answer) {
      return NextResponse.json(
        { error: 'Question and answer are required' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .schema('hindu')
      .from('hindu_faq')
      .insert([{
        question,
        answer,
        category,
        tags,
        display_order
      }])
      .select();

    if (error) {
      console.error('Error creating FAQ:', error);
      return NextResponse.json({ error: 'Failed to create FAQ' }, { status: 500 });
    }

    return NextResponse.json({ data: data[0] }, { status: 201 });

  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}