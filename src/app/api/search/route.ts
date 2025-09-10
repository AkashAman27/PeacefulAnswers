import { NextRequest, NextResponse } from 'next/server'
import { hinduSupabase } from '@/lib/supabase'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q')
  const limit = parseInt(searchParams.get('limit') || '10')
  const contentType = searchParams.get('type') // Optional filter by content type

  if (!query) {
    return NextResponse.json({ error: 'Search query is required' }, { status: 400 })
  }

  try {
    // Search using PostgreSQL full-text search
    const searchTerms = query.trim().split(' ').filter(term => term.length > 0)
    
    // Execute multiple search strategies
    let titleQuery = hinduSupabase
      .from('search_content')
      .select('id, title, slug, content_type, description, url_path, difficulty_level, time_commitment, benefits, tags')
      .ilike('title', `%${query}%`)
      .limit(limit)

    let descriptionQuery = hinduSupabase
      .from('search_content')
      .select('id, title, slug, content_type, description, url_path, difficulty_level, time_commitment, benefits, tags')
      .ilike('description', `%${query}%`)
      .limit(limit)

    let searchTextQuery = hinduSupabase
      .from('search_content')
      .select('id, title, slug, content_type, description, url_path, difficulty_level, time_commitment, benefits, tags')
      .textSearch('search_text', `'${searchTerms.join(' | ')}'`)
      .limit(limit)

    // Add content type filter if provided
    if (contentType && contentType !== 'all') {
      titleQuery = titleQuery.eq('content_type', contentType)
      descriptionQuery = descriptionQuery.eq('content_type', contentType)
      searchTextQuery = searchTextQuery.eq('content_type', contentType)
    }
    
    // Execute all search strategies and combine results
    const [titleResults, descriptionResults, fullTextResults] = await Promise.all([
      titleQuery,
      descriptionQuery,
      searchTextQuery
    ])


    // Combine and deduplicate results, prioritizing exact title matches
    const combinedResults = new Map()
    const addResult = (result: any, priority: number) => {
      if (!combinedResults.has(result.id)) {
        combinedResults.set(result.id, { ...result, searchPriority: priority })
      }
    }

    // Add results with priority (lower number = higher priority)
    titleResults.data?.forEach(result => addResult(result, 1))
    descriptionResults.data?.forEach(result => addResult(result, 2))
    fullTextResults.data?.forEach(result => addResult(result, 3))

    // Sort by priority and then by title
    const finalResults = Array.from(combinedResults.values())
      .sort((a, b) => {
        if (a.searchPriority !== b.searchPriority) {
          return a.searchPriority - b.searchPriority
        }
        return a.title.localeCompare(b.title)
      })
      .slice(0, limit)

    return NextResponse.json({
      results: finalResults,
      query,
      total: finalResults.length
    })

  } catch (error) {
    console.error('Search error:', error)
    return NextResponse.json(
      { error: 'Failed to perform search' },
      { status: 500 }
    )
  }
}