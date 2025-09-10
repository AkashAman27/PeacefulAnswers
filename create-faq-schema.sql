-- FAQ Database Schema for PeacefulAnswers Spiritual Website
-- Schema: Peace, Table: Hindu_faqs

-- Create the Hindu_faqs table
CREATE TABLE Peace.Hindu_faqs (
    id BIGSERIAL PRIMARY KEY,
    question TEXT NOT NULL,
    answer TEXT NOT NULL,
    category TEXT DEFAULT 'General',
    difficulty_level TEXT CHECK (difficulty_level IN ('beginner', 'intermediate', 'advanced')) DEFAULT 'beginner',
    tags TEXT[] DEFAULT '{}',
    is_featured BOOLEAN DEFAULT FALSE,
    view_count INTEGER DEFAULT 0,
    helpful_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    published BOOLEAN DEFAULT TRUE,
    author TEXT DEFAULT 'PeacefulAnswers Team',
    seo_keywords TEXT
);

-- Create indexes for optimal search performance
CREATE INDEX idx_hindu_faqs_category ON Peace.Hindu_faqs(category);
CREATE INDEX idx_hindu_faqs_difficulty ON Peace.Hindu_faqs(difficulty_level);
CREATE INDEX idx_hindu_faqs_published ON Peace.Hindu_faqs(published);
CREATE INDEX idx_hindu_faqs_is_featured ON Peace.Hindu_faqs(is_featured);
CREATE INDEX idx_hindu_faqs_tags ON Peace.Hindu_faqs USING GIN(tags);
CREATE INDEX idx_hindu_faqs_created_at ON Peace.Hindu_faqs(created_at DESC);
CREATE INDEX idx_hindu_faqs_view_count ON Peace.Hindu_faqs(view_count DESC);
CREATE INDEX idx_hindu_faqs_helpful_count ON Peace.Hindu_faqs(helpful_count DESC);

-- Full-text search indexes for questions and answers
CREATE INDEX idx_hindu_faqs_question_fts ON Peace.Hindu_faqs USING gin(to_tsvector('english', question));
CREATE INDEX idx_hindu_faqs_answer_fts ON Peace.Hindu_faqs USING gin(to_tsvector('english', answer));
CREATE INDEX idx_hindu_faqs_combined_fts ON Peace.Hindu_faqs USING gin(to_tsvector('english', question || ' ' || answer));

-- Create trigger to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_hindu_faqs_updated_at 
    BEFORE UPDATE ON Peace.Hindu_faqs 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Insert sample FAQ entries covering different spiritual topics
INSERT INTO Peace.Hindu_faqs (question, answer, category, difficulty_level, tags, is_featured, seo_keywords, author) VALUES

-- Spiritual Practices FAQs
('What is the significance of daily meditation in Sanātana Dharma?', 
'Daily meditation (Dhyana) is one of the fundamental practices in Sanātana Dharma that helps purify the mind, develop self-awareness, and ultimately leads to spiritual liberation (Moksha). Regular meditation practice strengthens concentration, reduces mental fluctuations (vritti), and helps establish a deeper connection with the divine consciousness within. The Bhagavad Gita emphasizes meditation as a path to self-realization, stating that through consistent practice, one can transcend the limitations of the ego-mind and experience inner peace.', 
'Spiritual Practices', 'beginner', 
'{"meditation", "dhyana", "spiritual practice", "daily practice", "inner peace"}', 
true, 
'meditation hinduism, daily spiritual practice, dhyana yoga, hindu meditation benefits', 
'PeacefulAnswers Team'),

('How should a beginner start practicing yoga according to Hindu tradition?', 
'According to Hindu tradition, yoga begins with ethical foundations (Yamas and Niyamas) rather than just physical postures. A beginner should first cultivate moral principles like non-violence (Ahimsa), truthfulness (Satya), and cleanliness (Saucha). Start with simple breathing exercises (Pranayama), basic asanas (postures), and short periods of meditation. The eight-limbed path (Ashtanga Yoga) of Patanjali provides a systematic approach: ethical conduct, personal observances, physical postures, breath control, sense withdrawal, concentration, meditation, and finally, spiritual absorption (Samadhi).', 
'Spiritual Practices', 'beginner', 
'{"yoga", "ashtanga", "patanjali", "pranayama", "asanas", "beginner"}', 
false, 
'beginner yoga hinduism, eight limbed path, patanjali yoga sutras, hindu yoga practice', 
'PeacefulAnswers Team'),

-- Deities FAQs
('What is the difference between Shiva and Vishnu in their roles?', 
'Shiva and Vishnu represent two fundamental aspects of the Supreme Reality (Brahman) in Hindu cosmology. Shiva is primarily known as the Destroyer and Transformer, governing the dissolution and regeneration cycles of the universe. He represents consciousness, meditation, and the transcendent aspect of divinity. Vishnu is the Preserver and Protector, maintaining cosmic order (dharma) and manifesting as avatars when needed to restore balance. While Shiva embodies the principle of change and spiritual transformation, Vishnu embodies stability, compassion, and divine grace. Both are ultimately different aspects of the same ultimate reality.', 
'Deities', 'intermediate', 
'{"shiva", "vishnu", "trimurti", "destroyer", "preserver", "cosmic roles"}', 
true, 
'shiva vs vishnu, hindu trimurti, cosmic roles hinduism, shiva destroyer vishnu preserver', 
'PeacefulAnswers Team'),

('Why is Ganesha worshipped before starting any new endeavor?', 
'Ganesha is revered as Vighnaharta (remover of obstacles) and Vighnakarta (creator of obstacles for negative endeavors). He represents wisdom, intelligence, and the power to discriminate between right and wrong. Worshipping Ganesha before new beginnings ensures that obstacles are removed from righteous paths while impediments are created for harmful actions. His elephant head symbolizes wisdom and memory, while his large ears represent the importance of listening. The tradition of invoking Ganesha first (Pratham Pujya) ensures that our endeavors are aligned with dharma and cosmic harmony.', 
'Deities', 'beginner', 
'{"ganesha", "vighnaharta", "obstacles", "new beginnings", "wisdom", "elephant god"}', 
true, 
'ganesha worship new beginnings, vighnaharta meaning, why worship ganesha first, elephant god hinduism', 
'PeacefulAnswers Team'),

-- Scriptures FAQs
('What is the main message of the Bhagavad Gita?', 
'The Bhagavad Gita''s central message is the path to spiritual liberation through selfless action (Nishkama Karma), devotion (Bhakti), and knowledge (Jnana). Krishna teaches Arjuna that one should perform their duties without attachment to results, surrendering all actions to the Divine. The Gita emphasizes that liberation (Moksha) can be achieved while living an active life in the world, not just through renunciation. It presents the concept of dharma (righteous duty), the eternal nature of the soul (Atman), and various yoga paths - Karma Yoga (action), Bhakti Yoga (devotion), and Jnana Yoga (knowledge) - as means to realize one''s true divine nature.', 
'Scriptures', 'intermediate', 
'{"bhagavad gita", "krishna", "arjuna", "karma yoga", "dharma", "moksha", "nishkama karma"}', 
true, 
'bhagavad gita main message, krishna teachings, karma yoga meaning, gita philosophy dharma', 
'PeacefulAnswers Team'),

('What are the four Vedas and their significance?', 
'The four Vedas are the foundational scriptures of Sanātana Dharma: Rigveda (hymns and mantras), Samaveda (melodies and chants), Yajurveda (ritual procedures), and Atharvaveda (practical knowledge and healing). Each Veda contains four parts: Samhitas (hymns), Brahmanas (ritual explanations), Aranyakas (forest texts), and Upanishads (philosophical teachings). The Rigveda contains the earliest spiritual insights, Samaveda focuses on musical and rhythmic aspects of worship, Yajurveda provides sacrificial procedures, and Atharvaveda includes practical wisdom for daily life. Together, they represent the complete spiritual science of ancient seers (Rishis).', 
'Scriptures', 'advanced', 
'{"vedas", "rigveda", "samaveda", "yajurveda", "atharvaveda", "upanishads", "rishis"}', 
false, 
'four vedas hinduism, veda significance, rigveda samaveda yajurveda atharvaveda, ancient hindu scriptures', 
'PeacefulAnswers Team'),

-- Festivals FAQs
('What is the spiritual significance of Diwali?', 
'Diwali, the Festival of Lights, celebrates the victory of light over darkness, good over evil, and knowledge over ignorance. It commemorates Lord Rama''s return to Ayodhya after 14 years of exile and his victory over Ravana, symbolizing the triumph of dharma. The lighting of diyas (oil lamps) represents the inner light of knowledge that dispels the darkness of ignorance. Diwali also honors Goddess Lakshmi, bringing prosperity and abundance. The festival encourages self-reflection, the removal of negative tendencies, and the cultivation of virtuous qualities. It''s a time for spiritual renewal, family unity, and community harmony.', 
'Festivals', 'beginner', 
'{"diwali", "festival of lights", "rama", "lakshmi", "victory of good", "spiritual renewal"}', 
true, 
'diwali spiritual significance, festival of lights meaning, diwali lakshmi worship, hindu light festival', 
'PeacefulAnswers Team'),

-- General FAQs
('What is the concept of Karma in Hinduism?', 
'Karma is the universal law of cause and effect governing all actions and their consequences. Every thought, word, and deed creates karmic impressions (samskaras) that influence future experiences. Karma operates across lifetimes, explaining why people are born into different circumstances. There are three types of karma: Sanchita (accumulated from past lives), Prarabdha (destiny for current life), and Agami (being created now). Good actions (punya) lead to positive results, while harmful actions (papa) bring suffering. The goal is to perform dharmic actions without attachment to results, ultimately transcending the karmic cycle to achieve liberation (Moksha).', 
'General', 'intermediate', 
'{"karma", "cause and effect", "samskaras", "dharma", "moksha", "rebirth"}', 
true, 
'karma meaning hinduism, law of karma, karmic consequences, karma and rebirth, dharma karma moksha', 
'PeacefulAnswers Team'),

('What does "Om" represent in Hindu philosophy?', 
'Om (AUM) is the primordial sound, the cosmic vibration from which the entire universe manifests. It represents the Supreme Reality (Brahman) in its unmanifest form. The three syllables A-U-M symbolize creation, preservation, and dissolution - the cosmic cycle governed by Brahma, Vishnu, and Shiva respectively. "A" represents the waking state, "U" the dream state, "M" deep sleep, and the silence after represents the transcendent fourth state (Turiya). Chanting Om aligns individual consciousness with cosmic consciousness, making it a powerful tool for meditation and spiritual realization. It appears at the beginning of most Hindu prayers and mantras.', 
'General', 'beginner', 
'{"om", "aum", "primordial sound", "brahman", "cosmic vibration", "meditation", "mantra"}', 
true, 
'om meaning hinduism, aum significance, primordial sound om, cosmic vibration aum, om meditation benefits', 
'PeacefulAnswers Team'),

('What is the ultimate goal of human life according to Hinduism?', 
'According to Hindu philosophy, the ultimate goal of human life is Moksha - liberation from the cycle of birth, death, and rebirth (samsara). This involves realizing one''s true nature as the eternal soul (Atman) and its unity with the Supreme Reality (Brahman). The path to Moksha involves pursuing the four life goals (Purusharthas): Dharma (righteous living), Artha (material security), Kama (fulfilling desires), and ultimately Moksha (liberation). Through spiritual practices like yoga, meditation, devotion, and selfless service, one gradually purifies the mind, exhausts karmic debts, and experiences the truth that individual consciousness and universal consciousness are one.', 
'General', 'advanced', 
'{"moksha", "liberation", "atman", "brahman", "purusharthas", "samsara", "self-realization"}', 
true, 
'moksha meaning hinduism, ultimate goal life, liberation samsara, atman brahman unity, purusharthas dharma', 
'PeacefulAnswers Team');

-- Add some additional featured FAQs for better coverage
INSERT INTO Peace.Hindu_faqs (question, answer, category, difficulty_level, tags, is_featured, seo_keywords, author) VALUES

('What is the significance of the sacred thread ceremony (Upanayana)?', 
'Upanayana is one of the most important samskaras (sacraments) in Hindu tradition, marking the spiritual birth of a child and their formal initiation into Vedic learning. The sacred thread (yajnopavita) consists of three strands representing the three debts every person owes: to the sages (through learning), to the ancestors (through family duties), and to the gods (through worship). This ceremony traditionally begins the Brahmacharya ashrama, a period dedicated to learning, discipline, and spiritual development under a guru''s guidance. The initiate receives the Gayatri mantra and commits to daily spiritual practices, marking their eligibility to study the Vedas and perform sacred rituals.', 
'Spiritual Practices', 'intermediate', 
'{"upanayana", "sacred thread", "yajnopavita", "brahmacharya", "gayatri mantra", "samskaras"}', 
false, 
'upanayana ceremony significance, sacred thread hinduism, yajnopavita meaning, brahmacharya ashrama', 
'PeacefulAnswers Team'),

('How does the concept of Dharma differ from Western concepts of morality?', 
'Dharma is a much broader and more dynamic concept than Western morality. While Western ethics often provide universal moral rules, Dharma is contextual and varies based on one''s stage of life (ashrama), social position (varna), circumstances, and spiritual development. Dharma encompasses not just moral duty but also natural law, cosmic order, and individual life purpose. It includes svadharma (personal duty) and yugadharma (duties according to the age). For example, a warrior''s dharma in battle differs from a renunciant''s dharma in the forest. Dharma aims not just at social harmony but at spiritual evolution, making actions sacred rather than merely moral. It''s about aligning with cosmic law rather than following human-made ethical codes.', 
'General', 'advanced', 
'{"dharma", "morality", "svadharma", "yugadharma", "ashrama", "varna", "cosmic order"}', 
false, 
'dharma vs morality, hindu dharma concept, svadharma meaning, contextual ethics hinduism', 
'PeacefulAnswers Team');

-- Grant appropriate permissions (this would typically be done by a database administrator)
-- GRANT SELECT, INSERT, UPDATE, DELETE ON Peace.Hindu_faqs TO authenticated;
-- GRANT SELECT ON Peace.Hindu_faqs TO anon;