import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export async function GET(request: NextRequest) {
  try {
    // Get all unique categories with counts
    const { data, error } = await supabase
      .schema('hindu')
      .from('hindu_faq')
      .select('category')
      .eq('is_published', true);

    if (error) {
      console.error('Error fetching categories:', error);
      return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 });
    }

    // Count FAQs by category
    const categoryCounts = data.reduce((acc: Record<string, number>, faq) => {
      const category = faq.category || 'general';
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    }, {});

    // Convert to array format with counts
    const categories = Object.entries(categoryCounts).map(([name, count]) => ({
      name,
      count
    })).sort((a, b) => b.count - a.count);

    return NextResponse.json({ categories });

  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}