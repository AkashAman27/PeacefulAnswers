'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, BookOpen, Volume2, Heart, ArrowDown, Star, Play, Pause } from 'lucide-react'
import { Chapter, Verse } from '@/data/bhagavadGita'

interface ChapterViewerProps {
  chapter: Chapter;
  prevChapter?: Chapter;
  nextChapter?: Chapter;
}

const ChapterViewer: React.FC<ChapterViewerProps> = ({ chapter, prevChapter, nextChapter }) => {
  const [selectedVerse, setSelectedVerse] = useState<number>(chapter.verses[0]?.number || 1)
  const [showTransliteration, setShowTransliteration] = useState(false)
  const [isAutoPlay, setIsAutoPlay] = useState(false)
  const [readingProgress, setReadingProgress] = useState(0)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      setSelectedVerse(prev => {
        const currentIndex = chapter.verses.findIndex(v => v.number === prev);
        const nextIndex = currentIndex + 1;
        if (nextIndex >= chapter.verses.length) {
          setIsAutoPlay(false);
          return chapter.verses[0]?.number || 1;
        }
        return chapter.verses[nextIndex].number;
      });
    }, 15000); // 15 seconds per verse

    return () => clearInterval(timer);
  }, [isAutoPlay, chapter.verses]);

  // Calculate reading progress
  useEffect(() => {
    const currentIndex = chapter.verses.findIndex(v => v.number === selectedVerse);
    const progress = ((currentIndex + 1) / chapter.verses.length) * 100;
    setReadingProgress(progress);
  }, [selectedVerse, chapter.verses]);

  const currentVerse = chapter.verses.find(v => v.number === selectedVerse);

  if (!currentVerse) {
    return <div>Verse not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-blue-50">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-orange-600 to-yellow-400 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <div className="bg-white border-b border-orange-100 mt-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/scriptures/bhagavad-gita"
              className="flex items-center gap-2 text-blue-900 hover:text-orange-600 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="font-medium">Back to Chapters</span>
            </Link>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {prevChapter && (
                  <Link
                    href={`/scriptures/bhagavad-gita/${prevChapter.number}`}
                    className="px-3 py-1 text-blue-900 hover:bg-orange-50 rounded-md text-sm font-medium transition-colors"
                  >
                    Chapter {prevChapter.number}
                  </Link>
                )}
                <div className="px-3 py-1 bg-orange-600 text-white rounded-md text-sm font-medium">
                  Chapter {chapter.number}
                </div>
                {nextChapter && (
                  <Link
                    href={`/scriptures/bhagavad-gita/${nextChapter.number}`}
                    className="px-3 py-1 text-blue-900 hover:bg-orange-50 rounded-md text-sm font-medium transition-colors"
                  >
                    Chapter {nextChapter.number}
                  </Link>
                )}
              </div>
              
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className={`p-2 rounded-lg transition-colors ${
                  isAutoPlay 
                    ? 'bg-orange-100 text-orange-700' 
                    : 'text-blue-600 hover:bg-blue-50'
                }`}
                title={isAutoPlay ? 'Pause auto-play' : 'Start auto-play'}
              >
                {isAutoPlay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            Chapter {chapter.number} • {chapter.verses.length} Verses
            {chapter.number === 2 && <Star className="w-4 h-4" />}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            {chapter.title}
          </h1>
          <div className="text-2xl text-orange-600 mb-6">
            {chapter.sanskrit}
          </div>
          <div className="text-lg text-blue-800 font-medium mb-6">
            {chapter.theme}
          </div>
          <p className="text-blue-700 leading-relaxed max-w-3xl mx-auto">
            {chapter.summary}
          </p>
        </div>
      </section>

      {/* Key Themes */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">Key Themes in This Chapter</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {chapter.keyThemes.map((theme, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                <Heart className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <span className="text-blue-900 font-medium">{theme}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verses Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Verse List */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-8">
                <h3 className="text-lg font-bold text-blue-900 mb-4">
                  Verses ({chapter.verses.length} total)
                </h3>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {chapter.verses.map((verse) => (
                    <button
                      key={verse.number}
                      onClick={() => setSelectedVerse(verse.number)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedVerse === verse.number
                          ? 'bg-orange-100 text-orange-800 border border-orange-200'
                          : 'text-blue-900 hover:bg-blue-50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="font-medium">Verse {verse.number}</div>
                        {verse.significance && (
                          <Star className="w-4 h-4 text-yellow-500" />
                        )}
                      </div>
                      <div className="text-sm opacity-75 truncate">
                        {verse.sanskrit.substring(0, 30)}...
                      </div>
                      {verse.significance && (
                        <div className="text-xs text-orange-600 mt-1 font-medium">
                          {verse.significance}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Selected Verse Content */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {/* Verse Header */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-blue-900">
                        Verse {currentVerse.number}
                      </h2>
                      {currentVerse.significance && (
                        <div className="text-sm text-orange-600 font-medium mt-1">
                          {currentVerse.significance}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setShowTransliteration(!showTransliteration)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Toggle transliteration"
                      >
                        <Volume2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Sanskrit */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
                      Sanskrit (Devanagari)
                    </h4>
                    <div className="text-2xl text-blue-900 leading-relaxed font-sanskrit">
                      {currentVerse.sanskrit}
                    </div>
                  </div>

                  {/* Transliteration */}
                  {showTransliteration && (
                    <div className="mb-6 p-4 bg-orange-50 rounded-lg">
                      <h4 className="text-sm font-semibold text-orange-800 uppercase tracking-wide mb-2">
                        Transliteration
                      </h4>
                      <div className="text-lg text-orange-900 italic">
                        {currentVerse.transliteration}
                      </div>
                    </div>
                  )}

                  {/* Translation */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-3">
                      English Translation
                    </h4>
                    <div className="text-lg text-blue-800 leading-relaxed">
                      {currentVerse.translation}
                    </div>
                  </div>
                </div>

                {/* Word Meanings */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <h4 className="text-lg font-bold text-blue-900 mb-4">Word-by-Word Meaning</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(currentVerse.wordMeaning).map(([sanskrit, meaning]) => (
                      <div key={sanskrit} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <div className="text-blue-900 font-medium min-w-0 flex-shrink-0">
                          {sanskrit}:
                        </div>
                        <div className="text-blue-800 min-w-0">
                          {meaning}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Detailed Explanation */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                  <h4 className="text-lg font-bold text-blue-900 mb-4">Detailed Commentary</h4>
                  <div className="prose prose-blue max-w-none">
                    <p className="text-blue-800 leading-relaxed text-lg">
                      {currentVerse.explanation}
                    </p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between pt-8">
                  <button
                    onClick={() => {
                      const currentIndex = chapter.verses.findIndex(v => v.number === selectedVerse)
                      if (currentIndex > 0) {
                        setSelectedVerse(chapter.verses[currentIndex - 1].number)
                      }
                    }}
                    disabled={chapter.verses.findIndex(v => v.number === selectedVerse) === 0}
                    className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-full text-blue-900 hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous Verse
                  </button>
                  
                  <div className="text-sm text-gray-600">
                    {selectedVerse} of {chapter.verses.length}
                  </div>
                  
                  <button
                    onClick={() => {
                      const currentIndex = chapter.verses.findIndex(v => v.number === selectedVerse)
                      if (currentIndex < chapter.verses.length - 1) {
                        setSelectedVerse(chapter.verses[currentIndex + 1].number)
                      }
                    }}
                    disabled={chapter.verses.findIndex(v => v.number === selectedVerse) === chapter.verses.length - 1}
                    className="flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Next Verse
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Navigation */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-center">
              {prevChapter ? (
                <Link href={`/scriptures/bhagavad-gita/${prevChapter.number}`} className="group">
                  <div className="text-sm text-gray-500 mb-2">Previous Chapter</div>
                  <div className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                    Chapter {prevChapter.number}: {prevChapter.title}
                  </div>
                </Link>
              ) : (
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-2">Previous Chapter</div>
                  <div className="text-gray-400">None (First Chapter)</div>
                </div>
              )}
            </div>
            
            <ArrowDown className="w-6 h-6 text-orange-600" />
            
            <div className="text-center">
              {nextChapter ? (
                <Link href={`/scriptures/bhagavad-gita/${nextChapter.number}`} className="group">
                  <div className="text-sm text-gray-500 mb-2">Next Chapter</div>
                  <div className="text-orange-600 font-medium group-hover:text-orange-700 transition-colors">
                    Chapter {nextChapter.number}: {nextChapter.title}
                  </div>
                </Link>
              ) : (
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-2">Next Chapter</div>
                  <div className="text-gray-400">None (Last Chapter)</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ChapterViewer