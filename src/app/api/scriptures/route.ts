import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit') || '10';
    const offset = searchParams.get('offset') || '0';
    const search = searchParams.get('search');
    const scripture_type = searchParams.get('scripture_type');

    let query = supabase
      .schema('hindu')
      .from('hindu_scriptures')
      .select(`
        id,
        title,
        sanskrit_name,
        scripture_type,
        description,
        total_chapters,
        total_verses,
        status,
        is_featured,
        sort_order,
        created_at,
        updated_at
      `)
      .order('sort_order', { ascending: true });

    // Apply filters
    if (scripture_type) {
      query = query.eq('scripture_type', scripture_type);
    }

    // Apply search functionality
    if (search) {
      query = query.or(`title.ilike.%${search}%,sanskrit_name.ilike.%${search}%,description.ilike.%${search}%`);
    }

    // Apply pagination
    query = query.range(parseInt(offset), parseInt(offset) + parseInt(limit) - 1);

    const { data, error, count } = await query;

    if (error) {
      console.error('Error fetching scriptures:', error);
      return NextResponse.json({ error: 'Failed to fetch scriptures' }, { status: 500 });
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
      title,
      sanskrit_name,
      scripture_type,
      description,
      total_chapters,
      total_verses,
      status = 'draft',
      is_featured = false,
      sort_order = 0
    } = body;

    // Validate required fields
    if (!title || !scripture_type) {
      return NextResponse.json(
        { error: 'Title and scripture type are required' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .schema('hindu')
      .from('hindu_scriptures')
      .insert([{
        title,
        sanskrit_name,
        scripture_type,
        description,
        total_chapters,
        total_verses,
        status,
        is_featured,
        sort_order
      }])
      .select()
      .single();

    if (error) {
      console.error('Error creating scripture:', error);
      return NextResponse.json({ error: 'Failed to create scripture' }, { status: 500 });
    }

    return NextResponse.json({ data }, { status: 201 });

  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}