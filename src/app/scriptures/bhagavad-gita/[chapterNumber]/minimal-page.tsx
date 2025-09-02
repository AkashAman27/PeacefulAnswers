'use client'

import { use } from 'react'

interface PageProps {
  params: Promise<{
    number: string;
  }>;
}

export default function MinimalPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const chapterNumber = parseInt(resolvedParams.number);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Minimal Chapter {chapterNumber}</h1>
      <p>Just testing the basic routing without data</p>
    </div>
  )
}