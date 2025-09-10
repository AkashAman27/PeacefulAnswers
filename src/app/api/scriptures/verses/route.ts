import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const scripture_id = searchParams.get('scripture_id');
    const chapter_number = searchParams.get('chapter_number');
    const limit = searchParams.get('limit') || '50';
    const offset = searchParams.get('offset') || '0';
    const search = searchParams.get('search');

    if (!scripture_id) {
      return NextResponse.json(
        { error: 'Scripture ID is required' },
        { status: 400 }
      );
    }

    let query = supabase
      .schema('hindu')
      .from('hindu_verses')
      .select(`
        id,
        scripture_id,
        chapter_number,
        verse_number,
        sanskrit_text,
        transliteration,
        translation,
        word_meanings,
        commentary,
        key_concepts,
        tags,
        is_featured,
        status,
        created_at,
        updated_at
      `)
      .eq('scripture_id', scripture_id)
      .order('chapter_number', { ascending: true })
      .order('verse_number', { ascending: true });

    // Apply filters
    if (chapter_number) {
      query = query.eq('chapter_number', parseInt(chapter_number));
    }

    // Apply search functionality
    if (search) {
      query = query.or(`sanskrit_text.ilike.%${search}%,transliteration.ilike.%${search}%,translation.ilike.%${search}%,commentary.ilike.%${search}%`);
    }

    // Apply pagination
    query = query.range(parseInt(offset), parseInt(offset) + parseInt(limit) - 1);

    const { data, error, count } = await query;

    if (error) {
      console.error('Error fetching verses:', error);
      return NextResponse.json({ error: 'Failed to fetch verses' }, { status: 500 });
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
      scripture_id,
      chapter_number,
      verse_number,
      sanskrit_text,
      transliteration,
      translation,
      word_meanings = [],
      commentary,
      key_concepts = [],
      tags = [],
      is_featured = false,
      status = 'published'
    } = body;

    // Validate required fields
    if (!scripture_id || !chapter_number || !verse_number || !translation) {
      return NextResponse.json(
        { error: 'Scripture ID, chapter number, verse number, and translation are required' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .schema('hindu')
      .from('hindu_verses')
      .insert([{
        scripture_id,
        chapter_number,
        verse_number,
        sanskrit_text,
        transliteration,
        translation,
        word_meanings,
        commentary,
        key_concepts,
        tags,
        is_featured,
        status
      }])
      .select()
      .single();

    if (error) {
      console.error('Error creating verse:', error);
      if (error.code === '23505') { // Unique constraint violation
        return NextResponse.json(
          { error: 'Verse already exists for this chapter and verse number' },
          { status: 409 }
        );
      }
      return NextResponse.json({ error: 'Failed to create verse' }, { status: 500 });
    }

    return NextResponse.json({ data }, { status: 201 });

  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
