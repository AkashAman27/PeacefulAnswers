import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

const CREATE_TABLE_SQL = `
-- Create the ramayana_pages table in the hindu schema if it doesn't exist
CREATE TABLE IF NOT EXISTS hindu.ramayana_pages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  sanskrit_title TEXT,
  kand TEXT NOT NULL CHECK (kand IN ('bala-kanda', 'ayodhya-kanda', 'aranya-kanda', 'kishkindha-kanda', 'sundara-kanda', 'yuddha-kanda', 'uttara-kanda')),
  episode_number INTEGER NOT NULL DEFAULT 1,
  slug TEXT NOT NULL,
  subtitle TEXT,
  description TEXT,
  hero_image_url TEXT,
  hero_image_alt TEXT,
  content_sections JSONB DEFAULT '[]'::jsonb,
  key_characters TEXT[] DEFAULT '{}',
  key_locations TEXT[] DEFAULT '{}',
  spiritual_teachings TEXT DEFAULT '',
  modern_relevance TEXT DEFAULT '',
  meta_title TEXT,
  meta_description TEXT,
  keywords TEXT[] DEFAULT '{}',
  canonical_url TEXT,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  is_featured BOOLEAN DEFAULT FALSE,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create unique constraint on kand + slug combination (ignore if exists)
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.table_constraints
        WHERE constraint_name = 'unique_kand_slug'
        AND table_name = 'ramayana_pages'
        AND table_schema = 'hindu'
    ) THEN
        ALTER TABLE hindu.ramayana_pages
        ADD CONSTRAINT unique_kand_slug UNIQUE (kand, slug);
    END IF;
END $$;

-- Create indexes for better performance (ignore if exist)
CREATE INDEX IF NOT EXISTS idx_ramayana_pages_kand ON hindu.ramayana_pages(kand);
CREATE INDEX IF NOT EXISTS idx_ramayana_pages_status ON hindu.ramayana_pages(status);
CREATE INDEX IF NOT EXISTS idx_ramayana_pages_episode_number ON hindu.ramayana_pages(episode_number);
CREATE INDEX IF NOT EXISTS idx_ramayana_pages_is_featured ON hindu.ramayana_pages(is_featured);
CREATE INDEX IF NOT EXISTS idx_ramayana_pages_created_at ON hindu.ramayana_pages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_ramayana_pages_updated_at ON hindu.ramayana_pages(updated_at DESC);

-- Create or replace function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_ramayana_pages_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at (replace if exists)
DROP TRIGGER IF EXISTS update_ramayana_pages_updated_at ON hindu.ramayana_pages;
CREATE TRIGGER update_ramayana_pages_updated_at
  BEFORE UPDATE ON hindu.ramayana_pages
  FOR EACH ROW
  EXECUTE FUNCTION update_ramayana_pages_updated_at();
`

export async function POST(request: NextRequest) {
  try {
    console.log('Setting up ramayana_pages table...')

    // Execute the table creation SQL
    const { data, error } = await supabase.rpc('exec_sql', {
      sql: CREATE_TABLE_SQL
    })

    if (error) {
      console.error('Error creating table:', error)
      // If rpc doesn't work, try direct query
      const { error: directError } = await supabase
        .schema('hindu')
        .from('ramayana_pages')
        .select('count(*)')
        .limit(1)

      if (directError) {
        return NextResponse.json({
          success: false,
          error: 'Database table setup failed',
          details: directError.message
        }, { status: 500 })
      }
    }

    // Test if table is accessible
    const { data: testData, error: testError } = await supabase
      .schema('hindu')
      .from('ramayana_pages')
      .select('count(*)')
      .limit(1)

    if (testError) {
      console.error('Table access test failed:', testError)
      return NextResponse.json({
        success: false,
        error: 'Table created but not accessible',
        details: testError.message
      }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: 'Ramayana pages table is ready',
      tableExists: true,
      recordCount: testData?.[0]?.count || 0
    })

  } catch (error: any) {
    console.error('Setup error:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to setup table',
      details: error.message
    }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    // Check if table exists by trying to select from it
    const { data, error } = await supabase
      .schema('hindu')
      .from('ramayana_pages')
      .select('id')
      .limit(1)

    if (error) {
      return NextResponse.json({
        success: false,
        tableExists: false,
        error: error.message
      })
    }

    // Count total records
    const { count, error: countError } = await supabase
      .schema('hindu')
      .from('ramayana_pages')
      .select('*', { count: 'exact', head: true })

    return NextResponse.json({
      success: true,
      tableExists: true,
      recordCount: count || 0
    })

  } catch (error: any) {
    return NextResponse.json({
      success: false,
      tableExists: false,
      error: error.message
    })
  }
}