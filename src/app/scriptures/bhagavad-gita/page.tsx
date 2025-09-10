'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Book, Clock, Users, Star, ChevronRight, Play } from 'lucide-react'
import { bhagavadGitaData } from '@/data/bhagavadGita'
import { useLanguage } from '@/contexts/LanguageContext'

const BhagavadGitaPage = () => {
  const [activeChapter, setActiveChapter] = useState<number | null>(null)
  const { language, t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 rounded-full px-4 py-2 text-sm font-medium mb-6">
              <Book className="w-4 h-4" />
              {t('gita.badge')}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
              {t('gita.title')}
              <div className="text-2xl md:text-3xl text-orange-600 font-normal mt-2">
                श्रीमद् भगवद्गीता
              </div>
            </h1>
            <p className="text-xl text-blue-800 max-w-3xl mx-auto leading-relaxed">
              {t('gita.subtitle')}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <Book className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-900">18</div>
              <div className="text-sm text-blue-700">{t('gita.stats.chapters')}</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <Star className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-900">700</div>
              <div className="text-sm text-blue-700">{t('gita.stats.verses')}</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <Clock className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-900">5000+</div>
              <div className="text-sm text-blue-700">{t('gita.stats.years_old')}</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <Users className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-900">∞</div>
              <div className="text-sm text-blue-700">{t('gita.stats.lives_changed')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              {t('gita.explore.title')}
            </h2>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
              {t('gita.explore.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bhagavadGitaData.map((chapter) => (
              <div
                key={chapter.number}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-1"
                onMouseEnter={() => setActiveChapter(chapter.number)}
                onMouseLeave={() => setActiveChapter(null)}
              >
                {/* Chapter Number */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-yellow-400 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">{chapter.number}</span>
                  </div>
                  <div className="text-sm text-blue-600 bg-blue-50 rounded-full px-3 py-1">
                    {chapter.verseCount} {t('gita.card.verses')}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {language === 'hi' && (chapter as any).titleHi ? (chapter as any).titleHi : chapter.title}
                </h3>
                <div className="text-sm text-orange-600 font-medium mb-3 font-sanskrit">
                  {chapter.sanskrit}
                </div>
                <div className="text-xs uppercase text-blue-600 font-semibold tracking-wider mb-2">
                  {language === 'hi' && (chapter as any).themeHi ? (chapter as any).themeHi : chapter.theme}
                </div>
                <p className="text-blue-700 text-sm leading-relaxed mb-4">
                  {language === 'hi' && (chapter as any).summaryHi ? (chapter as any).summaryHi : chapter.summary}
                </p>

                {/* Key Teachings */}
                {activeChapter === chapter.number && (
                  <div className="mb-4 animate-fade-in-up">
                    <div className="text-xs uppercase text-gray-600 font-semibold tracking-wider mb-2">
                      {t('gita.card.key_teachings')}
                    </div>
                    <ul className="space-y-1">
                      {chapter.keyThemes.map((teaching, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs text-blue-700">
                          <div className="w-1 h-1 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                          {teaching}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action Button */}
                <Link
                  href={`/scriptures/bhagavad-gita/${chapter.number}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 group-hover:gap-3 transition-all"
                >
                  <span>{t('gita.card.study_chapter')}</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Guidance */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
            {t('gita.study.title')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Book className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-blue-900 mb-2">{t('gita.study.read.title')}</h4>
              <p className="text-blue-700 text-sm">{t('gita.study.read.desc')}</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-semibold text-blue-900 mb-2">{t('gita.study.translate.title')}</h4>
              <p className="text-blue-700 text-sm">{t('gita.study.translate.desc')}</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Play className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-blue-900 mb-2">{t('gita.study.apply.title')}</h4>
              <p className="text-blue-700 text-sm">{t('gita.study.apply.desc')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BhagavadGitaPage
