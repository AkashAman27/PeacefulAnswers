'use client'

import { use } from 'react'
import { notFound } from 'next/navigation'
import ChapterViewer from '@/components/ChapterViewer'
import { getChapterData } from '@/data/bhagavadGita'

interface PageProps {
  params: Promise<{
    chapterNumber: string;
  }>;
}

export default function ChapterPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const chapterNumber = parseInt(resolvedParams.chapterNumber);
  
  if (isNaN(chapterNumber) || chapterNumber < 1 || chapterNumber > 18) {
    notFound();
  }

  const chapter = getChapterData(chapterNumber);
  if (!chapter) {
    notFound();
  }

  const prevChapter = chapterNumber > 1 ? getChapterData(chapterNumber - 1) : undefined;
  const nextChapter = chapterNumber < 18 ? getChapterData(chapterNumber + 1) : undefined;

  return (
    <ChapterViewer
      chapter={chapter}
      prevChapter={prevChapter}
      nextChapter={nextChapter}
    />
  );
}