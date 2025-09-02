-- Migration: Add new JSONB fields for comprehensive deity sections
-- Date: 2025-09-02

-- Add new JSONB fields to the hindu.deities table
ALTER TABLE hindu.deities 
ADD COLUMN IF NOT EXISTS story TEXT,
ADD COLUMN IF NOT EXISTS sacred_iconography JSONB DEFAULT '[]',
ADD COLUMN IF NOT EXISTS sacred_stories JSONB DEFAULT '[]',
ADD COLUMN IF NOT EXISTS divine_symbolism JSONB DEFAULT '[]',
ADD COLUMN IF NOT EXISTS youtube_videos JSONB DEFAULT '{}',
ADD COLUMN IF NOT EXISTS essential_facts JSONB DEFAULT '[]';

-- Add comments to describe the new fields
COMMENT ON COLUMN hindu.deities.story IS 'Main story/narrative about the deity (text content)';
COMMENT ON COLUMN hindu.deities.sacred_iconography IS 'Array of iconography items: [{symbol, meaning, description, image_url}]';
COMMENT ON COLUMN hindu.deities.sacred_stories IS 'Array of sacred stories: [{title, story, moral, characters[], significance}]';
COMMENT ON COLUMN hindu.deities.divine_symbolism IS 'Array of symbolism explanations: [{aspect, symbolism, deeper_meaning, dance_reference}]';
COMMENT ON COLUMN hindu.deities.youtube_videos IS 'Object with video URLs for sections: {story, iconography, stories, symbolism, festivals, temples, mantras}';
COMMENT ON COLUMN hindu.deities.essential_facts IS 'Array of key facts: [{category, fact, importance, source}]';

-- Update existing mantras field to include additional properties
COMMENT ON COLUMN hindu.deities.mantras IS 'Array of mantras: [{sanskrit, transliteration, meaning, purpose, benefits[], audio_url}]';

-- Update existing festivals field to include additional properties
COMMENT ON COLUMN hindu.deities.festivals IS 'Array of festivals: [{name, date, description, significance, location, duration, rituals[]}]';

-- Update existing sacred_places field to include additional properties
COMMENT ON COLUMN hindu.deities.sacred_places IS 'Array of temples/places: [{name, location, description, significance, architecture_style, best_time_to_visit, image_url, special_features[]}]';

-- Create indexes for better query performance on JSONB fields
CREATE INDEX IF NOT EXISTS idx_deities_sacred_iconography ON hindu.deities USING GIN (sacred_iconography);
CREATE INDEX IF NOT EXISTS idx_deities_sacred_stories ON hindu.deities USING GIN (sacred_stories);
CREATE INDEX IF NOT EXISTS idx_deities_divine_symbolism ON hindu.deities USING GIN (divine_symbolism);
CREATE INDEX IF NOT EXISTS idx_deities_youtube_videos ON hindu.deities USING GIN (youtube_videos);
CREATE INDEX IF NOT EXISTS idx_deities_essential_facts ON hindu.deities USING GIN (essential_facts);

-- Sample data structure for reference (commented out)
/*
-- Example sacred_iconography structure:
[
  {
    "symbol": "Lotus",
    "meaning": "Purity and Divine Beauty",
    "description": "The lotus represents purity, spiritual awakening, and divine beauty...",
    "image_url": "https://example.com/lotus.jpg"
  }
]

-- Example sacred_stories structure:
[
  {
    "title": "The Churning of the Ocean",
    "story": "Long ago, the gods and demons churned the cosmic ocean...",
    "moral": "Good triumphs over evil through divine intervention",
    "characters": ["Vishnu", "Lakshmi", "Devas", "Asuras"],
    "significance": "This story explains the origin of many divine beings and objects"
  }
]

-- Example divine_symbolism structure:
[
  {
    "aspect": "Cosmic Dance",
    "symbolism": "The eternal cycle of creation and destruction",
    "deeper_meaning": "Represents the fundamental rhythms of the universe",
    "dance_reference": "The Tandava dance represents the five activities of Shiva"
  }
]

-- Example youtube_videos structure:
{
  "story": "https://youtube.com/watch?v=example1",
  "iconography": "https://youtube.com/watch?v=example2",
  "stories": "https://youtube.com/watch?v=example3",
  "symbolism": "https://youtube.com/watch?v=example4",
  "festivals": "https://youtube.com/watch?v=example5",
  "temples": "https://youtube.com/watch?v=example6",
  "mantras": "https://youtube.com/watch?v=example7"
}

-- Example essential_facts structure:
[
  {
    "category": "Origins",
    "fact": "Born from the cosmic egg at the beginning of creation",
    "importance": "high",
    "source": "Rigveda"
  }
]
*/