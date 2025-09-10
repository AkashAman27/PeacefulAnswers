import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { data, error } = await supabase
      .schema('hindu')
      .from('hindu_faq')
      .select(`
        id,
        question,
        answer,
        category,
        tags,
        display_order,
        is_published,
        created_at,
        updated_at
      `)
      .eq('id', params.id)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return NextResponse.json({ error: 'FAQ not found' }, { status: 404 });
      }
      console.error('Error fetching FAQ:', error);
      return NextResponse.json({ error: 'Failed to fetch FAQ' }, { status: 500 });
    }

    return NextResponse.json({ data });

  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    
    const {
      question,
      answer,
      category = 'general',
      tags = [],
      display_order = 0,
      is_published = true
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
      .update({
        question,
        answer,
        category,
        tags,
        display_order,
        is_published,
        updated_at: new Date().toISOString()
      })
      .eq('id', params.id)
      .select()
      .single();

    if (error) {
      console.error('Error updating FAQ:', error);
      return NextResponse.json({ error: 'Failed to update FAQ' }, { status: 500 });
    }

    return NextResponse.json({ data });

  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { error } = await supabase
      .schema('hindu')
      .from('hindu_faq')
      .delete()
      .eq('id', params.id);

    if (error) {
      console.error('Error deleting FAQ:', error);
      return NextResponse.json({ error: 'Failed to delete FAQ' }, { status: 500 });
    }

    return NextResponse.json({ message: 'FAQ deleted successfully' });

  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}