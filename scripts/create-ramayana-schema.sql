-- Create the ramayana_pages table in the hindu schema
CREATE TABLE hindu.ramayana_pages (
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

-- Create unique constraint on kand + slug combination
ALTER TABLE hindu.ramayana_pages
ADD CONSTRAINT unique_kand_slug UNIQUE (kand, slug);

-- Create indexes for better performance
CREATE INDEX idx_ramayana_pages_kand ON hindu.ramayana_pages(kand);
CREATE INDEX idx_ramayana_pages_status ON hindu.ramayana_pages(status);
CREATE INDEX idx_ramayana_pages_episode_number ON hindu.ramayana_pages(episode_number);
CREATE INDEX idx_ramayana_pages_is_featured ON hindu.ramayana_pages(is_featured);
CREATE INDEX idx_ramayana_pages_created_at ON hindu.ramayana_pages(created_at DESC);
CREATE INDEX idx_ramayana_pages_updated_at ON hindu.ramayana_pages(updated_at DESC);

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_ramayana_pages_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_ramayana_pages_updated_at
  BEFORE UPDATE ON hindu.ramayana_pages
  FOR EACH ROW
  EXECUTE FUNCTION update_ramayana_pages_updated_at();

-- Add comments to document the table structure
COMMENT ON TABLE hindu.ramayana_pages IS 'Table storing Ramayana episodes and stories organized by Kand';
COMMENT ON COLUMN hindu.ramayana_pages.kand IS 'The Kand (book/chapter) this episode belongs to';
COMMENT ON COLUMN hindu.ramayana_pages.episode_number IS 'Sequential number within the Kand';
COMMENT ON COLUMN hindu.ramayana_pages.content_sections IS 'JSON array of content sections with title, content, and optional images';
COMMENT ON COLUMN hindu.ramayana_pages.key_characters IS 'Array of main characters featured in this episode';
COMMENT ON COLUMN hindu.ramayana_pages.key_locations IS 'Array of important locations mentioned in this episode';
COMMENT ON COLUMN hindu.ramayana_pages.spiritual_teachings IS 'Rich text content describing spiritual lessons';
COMMENT ON COLUMN hindu.ramayana_pages.modern_relevance IS 'Rich text content explaining modern applications';

-- Example content_sections JSONB structure:
-- [
--   {
--     "title": "The Blessed Pregnancy",
--     "content": "<p>Rich text HTML content...</p>",
--     "image_url": "https://example.com/image.jpg",
--     "image_alt": "Description of image"
--   }
-- ]

-- Insert some sample data to test the structure
INSERT INTO hindu.ramayana_pages (
  title,
  sanskrit_title,
  kand,
  episode_number,
  slug,
  subtitle,
  description,
  hero_image_url,
  hero_image_alt,
  content_sections,
  key_characters,
  key_locations,
  spiritual_teachings,
  modern_relevance,
  meta_title,
  meta_description,
  keywords,
  canonical_url,
  status,
  is_featured
) VALUES (
  'The Divine Birth of Rama',
  'राम जन्म',
  'bala-kanda',
  2,
  'divine-birth',
  'The Seventh Avatar Descends to Earth',
  'Experience the most sacred moment in cosmic history - the descent of divine consciousness into human form',
  'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=450&fit=crop',
  'Divine Birth of Lord Rama',
  '[
    {
      "title": "The Blessed Pregnancy",
      "content": "<p>After consuming the divine prasadam from the Putrakamesti Yajna, Queen Kaushalya experienced the most extraordinary pregnancy in human history...</p>",
      "image_url": "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?w=600&h=400&fit=crop",
      "image_alt": "Divine pregnancy illustration"
    },
    {
      "title": "The Divine Manifestation",
      "content": "<p>At the precise moment of noon, in an explosion of divine light and energy, Lord Rama was born...</p>",
      "image_url": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      "image_alt": "Divine birth manifestation"
    }
  ]'::jsonb,
  ARRAY['Rama', 'Dasharatha', 'Kaushalya', 'Bharata', 'Lakshmana', 'Shatrughna'],
  ARRAY['Ayodhya', 'Royal Palace'],
  '<p>The divine birth teaches us about the perfect timing of spiritual manifestations and the cosmic significance of avatar incarnations.</p>',
  '<p>Modern parents can learn about creating spiritual atmosphere during pregnancy and celebrating the divine potential in every child.</p>',
  'Divine Birth of Rama - Ram Navami | The Seventh Avatar Descends | Bala Kanda | PeacefulAnswers',
  'Detailed story of Lord Rama''s divine birth on Ram Navami - the descent of Vishnu''s seventh avatar. Complete spiritual significance, cosmic events, and celebrations.',
  ARRAY['Ram Navami', 'divine birth Rama', 'seventh avatar Vishnu', 'Chaitra Navami', 'Ayodhya celebration', 'Ramayana Bala Kanda'],
  '/scriptures/ramayana/bala-kanda/divine-birth',
  'published',
  TRUE
);

-- Grant necessary permissions (adjust based on your RLS policies)
-- ALTER TABLE hindu.ramayana_pages ENABLE ROW LEVEL SECURITY;

-- Example RLS policy for public read access to published content
-- CREATE POLICY "Allow public read access to published ramayana pages"
--   ON hindu.ramayana_pages FOR SELECT
--   USING (status = 'published');

-- Example RLS policy for authenticated admin access
-- CREATE POLICY "Allow authenticated users full access to ramayana pages"
--   ON hindu.ramayana_pages
--   USING (auth.role() = 'authenticated');

COMMIT;