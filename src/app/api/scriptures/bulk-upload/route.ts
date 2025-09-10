import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

interface BulkVerseItem {
  chapter_number: number;
  verse_number: number;
  sanskrit_text?: string;
  transliteration?: string;
  translation: string;
  word_meanings?: Array<{word: string, meaning: string}>;
  commentary?: string;
  key_concepts?: string[];
  tags?: string[];
  is_featured?: boolean;
  status?: 'draft' | 'published' | 'archived';
}

interface BulkUploadRequest {
  scripture_id: string;
  verses: BulkVerseItem[];
}

interface BulkUploadResult {
  success: boolean;
  totalItems: number;
  successCount: number;
  failureCount: number;
  errors: Array<{
    item: number;
    verse: string;
    error: string;
  }>;
  createdVerses: string[];
  skippedVerses: string[];
}

export async function POST(request: NextRequest) {
  try {
    const body: BulkUploadRequest = await request.json();
    const { scripture_id, verses } = body;

    if (!scripture_id || !verses || !Array.isArray(verses)) {
      return NextResponse.json(
        { error: 'Invalid request body. Expected scripture_id and verses array.' },
        { status: 400 }
      );
    }

    // Verify scripture exists
    const { data: scripture, error: scriptureError } = await supabase
      .schema('hindu')
      .from('hindu_scriptures')
      .select('id, title')
      .eq('id', scripture_id)
      .single();

    if (scriptureError || !scripture) {
      return NextResponse.json(
        { error: 'Scripture not found' },
        { status: 404 }
      );
    }

    const result: BulkUploadResult = {
      success: true,
      totalItems: verses.length,
      successCount: 0,
      failureCount: 0,
      errors: [],
      createdVerses: [],
      skippedVerses: []
    };

    // Check for existing verses to avoid duplicates
    const chapterVerseKeys = verses.map(v => `${v.chapter_number}.${v.verse_number}`);
    const { data: existingVerses } = await supabase
      .schema('hindu')
      .from('hindu_verses')
      .select('chapter_number, verse_number')
      .eq('scripture_id', scripture_id)
      .in('chapter_number', verses.map(v => v.chapter_number));

    const existingKeys = new Set(
      (existingVerses || []).map(v => `${v.chapter_number}.${v.verse_number}`)
    );

    // Process each verse
    for (let index = 0; index < verses.length; index++) {
      const verse = verses[index];
      const verseKey = `${verse.chapter_number}.${verse.verse_number}`;

      // Validate required fields
      if (!verse.chapter_number || !verse.verse_number || !verse.translation) {
        result.errors.push({
          item: index + 1,
          verse: verseKey,
          error: 'Chapter number, verse number, and translation are required fields'
        });
        result.failureCount++;
        continue;
      }

      // Check for duplicates
      if (existingKeys.has(verseKey)) {
        result.skippedVerses.push(verseKey);
        result.failureCount++;
        continue;
      }

      try {
        // Prepare data for insertion
        const verseData = {
          scripture_id,
          chapter_number: verse.chapter_number,
          verse_number: verse.verse_number,
          sanskrit_text: verse.sanskrit_text?.trim() || null,
          transliteration: verse.transliteration?.trim() || null,
          translation: verse.translation.trim(),
          word_meanings: verse.word_meanings || [],
          commentary: verse.commentary?.trim() || null,
          key_concepts: verse.key_concepts || [],
          tags: verse.tags || [],
          is_featured: verse.is_featured || false,
          status: verse.status || 'published'
        };

        // Insert into database
        const { data, error } = await supabase
          .schema('hindu')
          .from('hindu_verses')
          .insert([verseData])
          .select('chapter_number, verse_number')
          .single();

        if (error) {
          result.errors.push({
            item: index + 1,
            verse: verseKey,
            error: `Database error: ${error.message}`
          });
          result.failureCount++;
        } else {
          result.createdVerses.push(`${data.chapter_number}.${data.verse_number}`);
          result.successCount++;
          existingKeys.add(verseKey); // Prevent duplicates within the same batch
        }
      } catch (error) {
        result.errors.push({
          item: index + 1,
          verse: verseKey,
          error: `Processing error: ${error instanceof Error ? error.message : 'Unknown error'}`
        });
        result.failureCount++;
      }
    }

    return NextResponse.json(result);

  } catch (error) {
    console.error('Bulk verse upload error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Scripture Verses Bulk Upload API',
    version: '1.0.0',
    description: 'Upload multiple scripture verses in JSON format',
    expectedFormat: {
      scripture_id: 'uuid-of-scripture',
      verses: [
        {
          chapter_number: 1,
          verse_number: 1,
          sanskrit_text: 'धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः।',
          transliteration: 'dharma-kṣhetre kuru-kṣhetre samavetā yuyutsavaḥ',
          translation: 'In the holy field of Kurukshetra, assembled and eager to fight...',
          word_meanings: [
            { word: 'dharma-kṣhetre', meaning: 'in the holy field' },
            { word: 'kuru-kṣhetre', meaning: 'in the field of Kurus' }
          ],
          commentary: 'This opening verse sets the stage for the great battle...',
          key_concepts: ['dharma', 'righteousness', 'duty'],
          tags: ['battle', 'kurukshetra', 'duty'],
          is_featured: false,
          status: 'published'
        }
      ]
    },
    acceptedFormats: ['application/json']
  });
}
