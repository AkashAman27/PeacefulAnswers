-- Migration script to create hindu_festival_announcements table
-- Based on the FestivalAnnouncement TypeScript interface

-- Create the hindu schema if it doesn't exist
CREATE SCHEMA IF NOT EXISTS hindu;

-- Create the hindu_festival_announcements table
CREATE TABLE IF NOT EXISTS hindu.hindu_festival_announcements (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    festival_name VARCHAR(255) NOT NULL,
    hindi_text TEXT NOT NULL,
    english_text TEXT NOT NULL,
    icon VARCHAR(10) NOT NULL,
    link_url VARCHAR(500) NOT NULL,
    start_date TIMESTAMPTZ NOT NULL,
    end_date TIMESTAMPTZ NOT NULL,
    is_active BOOLEAN DEFAULT true NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    created_by VARCHAR(100),
    updated_by VARCHAR(100)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_hindu_festival_announcements_is_active 
    ON hindu.hindu_festival_announcements(is_active);
    
CREATE INDEX IF NOT EXISTS idx_hindu_festival_announcements_start_date 
    ON hindu.hindu_festival_announcements(start_date);
    
CREATE INDEX IF NOT EXISTS idx_hindu_festival_announcements_end_date 
    ON hindu.hindu_festival_announcements(end_date);

CREATE INDEX IF NOT EXISTS idx_hindu_festival_announcements_created_at 
    ON hindu.hindu_festival_announcements(created_at DESC);

-- Create a trigger to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION hindu.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_hindu_festival_announcements_updated_at
    BEFORE UPDATE ON hindu.hindu_festival_announcements
    FOR EACH ROW
    EXECUTE FUNCTION hindu.update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE hindu.hindu_festival_announcements ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access to active announcements
CREATE POLICY "Public can view active festival announcements" ON hindu.hindu_festival_announcements
    FOR SELECT USING (is_active = true);

-- Create policies for authenticated admin access (full CRUD)
-- Note: You'll need to adjust this based on your authentication setup
CREATE POLICY "Admins can manage festival announcements" ON hindu.hindu_festival_announcements
    FOR ALL USING (true);

-- Grant necessary permissions
GRANT USAGE ON SCHEMA hindu TO anon, authenticated;
GRANT SELECT ON hindu.hindu_festival_announcements TO anon;
GRANT ALL ON hindu.hindu_festival_announcements TO authenticated;

-- Add comments for documentation
COMMENT ON TABLE hindu.hindu_festival_announcements IS 'Stores festival announcement data for the ticker system';
COMMENT ON COLUMN hindu.hindu_festival_announcements.id IS 'Primary key - UUID';
COMMENT ON COLUMN hindu.hindu_festival_announcements.festival_name IS 'Name of the festival';
COMMENT ON COLUMN hindu.hindu_festival_announcements.hindi_text IS 'Festival announcement text in Hindi';
COMMENT ON COLUMN hindu.hindu_festival_announcements.english_text IS 'Festival announcement text in English';
COMMENT ON COLUMN hindu.hindu_festival_announcements.icon IS 'Unicode emoji icon for the festival';
COMMENT ON COLUMN hindu.hindu_festival_announcements.link_url IS 'URL link for more information about the festival';
COMMENT ON COLUMN hindu.hindu_festival_announcements.start_date IS 'Start date and time for the announcement display';
COMMENT ON COLUMN hindu.hindu_festival_announcements.end_date IS 'End date and time for the announcement display';
COMMENT ON COLUMN hindu.hindu_festival_announcements.is_active IS 'Whether the announcement is currently active/visible';
COMMENT ON COLUMN hindu.hindu_festival_announcements.created_at IS 'Timestamp when the record was created';
COMMENT ON COLUMN hindu.hindu_festival_announcements.updated_at IS 'Timestamp when the record was last updated (auto-updated)';
COMMENT ON COLUMN hindu.hindu_festival_announcements.created_by IS 'User who created the announcement';
COMMENT ON COLUMN hindu.hindu_festival_announcements.updated_by IS 'User who last updated the announcement';