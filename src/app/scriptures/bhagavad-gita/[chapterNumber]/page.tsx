'use client'

import { use, useState, useEffect } from 'react'
import { notFound } from 'next/navigation'
import ChapterViewer from '@/components/ChapterViewer'
import { getChapterData } from '@/data/bhagavadGita'

interface PageProps {
  params: Promise<{
    chapterNumber: string;
  }>;
}

interface DatabaseVerse {
  id: string;
  scripture_id: string;
  chapter_number: number;
  verse_number: number;
  sanskrit_text: string;
  transliteration: string;
  translation: string;
  word_meanings: Array<{word: string, meaning: string}>;
  commentary: string;
  key_concepts: string[];
  tags: string[];
  is_featured: boolean;
  status: string;
}

export default function ChapterPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const chapterNumber = parseInt(resolvedParams.chapterNumber);
  
  const [verses, setVerses] = useState<DatabaseVerse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  if (isNaN(chapterNumber) || chapterNumber < 1 || chapterNumber > 18) {
    notFound();
  }

  // Fetch verses from database
  useEffect(() => {
    const fetchVerses = async () => {
      try {
        const response = await fetch(
          `/api/scriptures/verses?scripture_id=0b7ffb5b-bd0f-48f6-97c3-e1bc4e9d1be5&chapter_number=${chapterNumber}&limit=100`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch verses');
        }
        
        const data = await response.json();
        setVerses(data.data || []);
      } catch (err) {
        console.error('Error fetching verses:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchVerses();
  }, [chapterNumber]);

  // Get static chapter metadata
  const staticChapter = getChapterData(chapterNumber);
  if (!staticChapter) {
    notFound();
  }

  // If we have database verses, merge them with static chapter data
  let chapter = staticChapter;
  if (verses.length > 0) {
    // Convert database verses to the format expected by ChapterViewer
    const convertedVerses = verses.map(dbVerse => ({
      number: dbVerse.verse_number,
      sanskrit: dbVerse.sanskrit_text || '',
      transliteration: dbVerse.transliteration || '',
      translation: dbVerse.translation,
      explanation: dbVerse.commentary || '',
      wordMeaning: dbVerse.word_meanings?.reduce((acc: Record<string, string>, wm) => {
        acc[wm.word] = wm.meaning;
        return acc;
      }, {}) || {},
      significance: dbVerse.is_featured ? 'Key Verse' : undefined
    }));

    chapter = {
      ...staticChapter,
      verses: convertedVerses,
      verseCount: convertedVerses.length
    };
  }

  const prevChapter = chapterNumber > 1 ? getChapterData(chapterNumber - 1) : undefined;
  const nextChapter = chapterNumber < 18 ? getChapterData(chapterNumber + 1) : undefined;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
          <div className="text-blue-900 font-medium">Loading verses...</div>
        </div>
      </div>
    );
  }

  if (error) {
    console.warn('Error loading database verses, falling back to static data:', error);
  }

  return (
    <ChapterViewer
      chapter={chapter}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    />
  );
}