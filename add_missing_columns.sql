-- Add missing columns to the existing hindu_festival_announcements table
-- This script adds created_by and updated_by columns to match the TypeScript interface

-- Add the missing columns
ALTER TABLE hindu.hindu_festival_announcements 
ADD COLUMN IF NOT EXISTS created_by VARCHAR(100);

ALTER TABLE hindu.hindu_festival_announcements 
ADD COLUMN IF NOT EXISTS updated_by VARCHAR(100);

-- Add comments for the new columns
COMMENT ON COLUMN hindu.hindu_festival_announcements.created_by IS 'User who created the announcement';
COMMENT ON COLUMN hindu.hindu_festival_announcements.updated_by IS 'User who last updated the announcement';

-- Verify the changes
SELECT column_name, data_type, character_maximum_length, is_nullable, column_default
FROM information_schema.columns 
WHERE table_schema = 'hindu' 
  AND table_name = 'hindu_festival_announcements'
ORDER BY ordinal_position;