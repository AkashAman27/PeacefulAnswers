-- Festival Announcements Table for PeacefulAnswers.com
-- Schema: hindu
-- Table: hindu_festival_announcements

-- Create the festival announcements table
CREATE TABLE IF NOT EXISTS hindu.hindu_festival_announcements (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    festival_name VARCHAR(200) NOT NULL,
    hindi_text TEXT NOT NULL,
    english_text TEXT NOT NULL,
    icon VARCHAR(10) DEFAULT '🪔',
    link_url VARCHAR(500) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    updated_by UUID REFERENCES auth.users(id) ON DELETE SET NULL
);

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_festival_announcements_active ON hindu.hindu_festival_announcements(is_active);
CREATE INDEX IF NOT EXISTS idx_festival_announcements_dates ON hindu.hindu_festival_announcements(start_date, end_date);
CREATE INDEX IF NOT EXISTS idx_festival_announcements_created_at ON hindu.hindu_festival_announcements(created_at);

-- Add updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_festival_announcements_updated_at 
    BEFORE UPDATE ON hindu.hindu_festival_announcements 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data for Jivit Putrika
INSERT INTO hindu.hindu_festival_announcements (
    festival_name,
    hindi_text,
    english_text,
    icon,
    link_url,
    start_date,
    end_date,
    is_active
) VALUES 
(
    'Jivit Putrika Vrat',
    '🪔 जीवित पुत्रिका व्रत 14 सितंबर को आ रहा है। कहानियाँ और विधि जानने के लिए यहाँ क्लिक करें',
    '🪔 Jivit Putrika Vrat is coming on September 14th. Click here to read stories and rituals',
    '🪔',
    '/festivals/jivit-putrika',
    '2025-09-01',
    '2025-09-15',
    true
),
(
    'Ganesh Chaturthi',
    '🐘 गणेश चतुर्थी के पावन अवसर पर गणपति बप्पा की कथाएं और आरती यहाँ पढ़ें',
    '🐘 Celebrate Ganesh Chaturthi with stories and aarti of Ganpati Bappa',
    '🐘',
    '/festivals/ganesh-chaturthi',
    '2025-08-25',
    '2025-09-10',
    true
),
(
    'Krishna Janmashtami',
    '🦚 कृष्ण जन्माष्टमी के शुभ अवसर पर भगवान कृष्ण की लीलाएं और भजन सुनें',
    '🦚 Celebrate Krishna Janmashtami with divine stories and bhajans of Lord Krishna',
    '🦚',
    '/festivals/krishna-janmashtami',
    '2025-08-15',
    '2025-08-30',
    false
),
(
    'Navratri',
    '🌺 नवरात्रि के नौ दिनों में माता रानी की महिमा और व्रत विधि जानें',
    '🌺 Celebrate nine days of Navratri with Mata Rani''s glory and fasting rituals',
    '🌺',
    '/festivals/navratri',
    '2025-10-01',
    '2025-10-15',
    true
);

-- Row Level Security (RLS) policies
ALTER TABLE hindu.hindu_festival_announcements ENABLE ROW LEVEL SECURITY;

-- Policy for public read access to active announcements
CREATE POLICY "Public read access to active festival announcements" 
    ON hindu.hindu_festival_announcements
    FOR SELECT 
    USING (is_active = true);

-- Policy for authenticated users to read all announcements (for admin)
CREATE POLICY "Authenticated read access to all festival announcements" 
    ON hindu.hindu_festival_announcements
    FOR SELECT 
    TO authenticated
    USING (true);

-- Policy for authenticated users to insert announcements
CREATE POLICY "Authenticated insert access to festival announcements" 
    ON hindu.hindu_festival_announcements
    FOR INSERT 
    TO authenticated
    WITH CHECK (true);

-- Policy for authenticated users to update announcements
CREATE POLICY "Authenticated update access to festival announcements" 
    ON hindu.hindu_festival_announcements
    FOR UPDATE 
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Policy for authenticated users to delete announcements
CREATE POLICY "Authenticated delete access to festival announcements" 
    ON hindu.hindu_festival_announcements
    FOR DELETE 
    TO authenticated
    USING (true);

-- Grant permissions
GRANT ALL ON hindu.hindu_festival_announcements TO authenticated;
GRANT SELECT ON hindu.hindu_festival_announcements TO anon;

-- Comments for documentation
COMMENT ON TABLE hindu.hindu_festival_announcements IS 'Festival announcements for the scrolling ticker component';
COMMENT ON COLUMN hindu.hindu_festival_announcements.festival_name IS 'Name of the festival';
COMMENT ON COLUMN hindu.hindu_festival_announcements.hindi_text IS 'Hindi text for the announcement';
COMMENT ON COLUMN hindu.hindu_festival_announcements.english_text IS 'English text for the announcement';
COMMENT ON COLUMN hindu.hindu_festival_announcements.icon IS 'Emoji or icon for the festival';
COMMENT ON COLUMN hindu.hindu_festival_announcements.link_url IS 'URL to navigate to when clicked';
COMMENT ON COLUMN hindu.hindu_festival_announcements.start_date IS 'Start date for displaying the announcement';
COMMENT ON COLUMN hindu.hindu_festival_announcements.end_date IS 'End date for displaying the announcement';
COMMENT ON COLUMN hindu.hindu_festival_announcements.is_active IS 'Whether the announcement is currently active';