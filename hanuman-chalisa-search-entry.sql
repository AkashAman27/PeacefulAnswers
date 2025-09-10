-- Add Hanuman Chalisa to Hindu Search Database
-- Schema: hindu
-- Table: search_content

-- Insert Hanuman Chalisa entry into search database
INSERT INTO hindu.search_content (
    title,
    slug,
    content_type,
    description,
    url_path,
    difficulty_level,
    time_commitment,
    benefits,
    tags,
    search_text
) VALUES (
    'Shri Hanuman Chalisa',
    'hanuman-chalisa',
    'scripture',
    'Complete 40-verse prayer to Lord Hanuman with Hindi and English translations. Composed by Sant Tulsidas, this powerful hymn is recited for strength, protection, and devotion.',
    '/scriptures/hanuman-chalisa',
    'Beginner',
    '10-15 minutes',
    ARRAY['Spiritual strength', 'Protection from obstacles', 'Mental clarity', 'Devotional practice', 'Inner peace'],
    ARRAY[
        'hanuman chalisa',
        'hanuman',
        'chalisa', 
        'prayer',
        'verses',
        'tulsidas',
        'scripture',
        'devotion',
        'bhakti',
        'hanuman ji',
        'bajrangbali',
        'sankat mochan',
        '40 verses',
        'hindi',
        'english',
        'translation',
        'hymn',
        'chanting',
        'spiritual practice',
        'protection',
        'strength',
        'obstacles',
        'divine protection',
        'lord hanuman',
        'hanuman prayer',
        'sacred text'
    ],
    'hanuman chalisa shri hanuman chalisa complete 40 verse prayer lord hanuman hindi english translation tulsidas sant tulsidas powerful hymn strength protection devotion spiritual practice bajrangbali sankat mochan hanuman ji divine protection obstacles mental clarity inner peace devotional practice bhakti scripture sacred text chanting verses prayer hymn translation hanuman prayer lord hanuman'
) ON CONFLICT (slug) DO UPDATE SET
    title = EXCLUDED.title,
    content_type = EXCLUDED.content_type,
    description = EXCLUDED.description,
    url_path = EXCLUDED.url_path,
    difficulty_level = EXCLUDED.difficulty_level,
    time_commitment = EXCLUDED.time_commitment,
    benefits = EXCLUDED.benefits,
    tags = EXCLUDED.tags,
    search_text = EXCLUDED.search_text,
    updated_at = NOW();

-- Verify the entry was added
SELECT 
    id,
    title,
    slug,
    content_type,
    description,
    url_path,
    array_length(tags, 1) as tag_count,
    created_at
FROM hindu.search_content 
WHERE slug = 'hanuman-chalisa';

-- Test search functionality
SELECT 
    title,
    content_type,
    slug,
    url_path
FROM hindu.search_content
WHERE 
    title ILIKE '%hanuman%'
    OR description ILIKE '%hanuman%'
    OR 'hanuman' = ANY(tags)
    OR search_text ILIKE '%hanuman%'
ORDER BY 
    CASE 
        WHEN title ILIKE '%hanuman chalisa%' THEN 1
        WHEN title ILIKE '%hanuman%' THEN 2
        ELSE 3
    END,
    title;

-- Comments
COMMENT ON TABLE hindu.search_content IS 'Search index for all Hindu spiritual content including scriptures, practices, deities, and pages';