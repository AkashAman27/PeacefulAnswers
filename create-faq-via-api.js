const { createClient } = require('@supabase/supabase-js');

// Supabase configuration from CLAUDE.md
const supabaseUrl = 'https://wxprzwoylqjzozhezttc.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4cHJ6d295bHFqem96aGV6dHRjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MzU0ODMwMSwiZXhwIjoyMDY5MTI0MzAxfQ.vbdRdx2j7y4VasLAczmZIgEy78j02Ag8wfqMtniiyTM';

// Initialize Supabase client with service role key
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Sample FAQ data
const sampleFAQs = [
    {
        question: "What is the significance of daily meditation in Sanātana Dharma?",
        answer: "Daily meditation (Dhyana) is one of the fundamental practices in Sanātana Dharma that helps purify the mind, develop self-awareness, and ultimately leads to spiritual liberation (Moksha). Regular meditation practice strengthens concentration, reduces mental fluctuations (vritti), and helps establish a deeper connection with the divine consciousness within. The Bhagavad Gita emphasizes meditation as a path to self-realization, stating that through consistent practice, one can transcend the limitations of the ego-mind and experience inner peace.",
        category: "Spiritual Practices",
        difficulty_level: "beginner",
        tags: ["meditation", "dhyana", "spiritual practice", "daily practice", "inner peace"],
        is_featured: true,
        seo_keywords: "meditation hinduism, daily spiritual practice, dhyana yoga, hindu meditation benefits",
        author: "PeacefulAnswers Team"
    },
    {
        question: "How should a beginner start practicing yoga according to Hindu tradition?",
        answer: "According to Hindu tradition, yoga begins with ethical foundations (Yamas and Niyamas) rather than just physical postures. A beginner should first cultivate moral principles like non-violence (Ahimsa), truthfulness (Satya), and cleanliness (Saucha). Start with simple breathing exercises (Pranayama), basic asanas (postures), and short periods of meditation. The eight-limbed path (Ashtanga Yoga) of Patanjali provides a systematic approach: ethical conduct, personal observances, physical postures, breath control, sense withdrawal, concentration, meditation, and finally, spiritual absorption (Samadhi).",
        category: "Spiritual Practices",
        difficulty_level: "beginner",
        tags: ["yoga", "ashtanga", "patanjali", "pranayama", "asanas", "beginner"],
        is_featured: false,
        seo_keywords: "beginner yoga hinduism, eight limbed path, patanjali yoga sutras, hindu yoga practice",
        author: "PeacefulAnswers Team"
    },
    {
        question: "What is the difference between Shiva and Vishnu in their roles?",
        answer: "Shiva and Vishnu represent two fundamental aspects of the Supreme Reality (Brahman) in Hindu cosmology. Shiva is primarily known as the Destroyer and Transformer, governing the dissolution and regeneration cycles of the universe. He represents consciousness, meditation, and the transcendent aspect of divinity. Vishnu is the Preserver and Protector, maintaining cosmic order (dharma) and manifesting as avatars when needed to restore balance. While Shiva embodies the principle of change and spiritual transformation, Vishnu embodies stability, compassion, and divine grace. Both are ultimately different aspects of the same ultimate reality.",
        category: "Deities",
        difficulty_level: "intermediate",
        tags: ["shiva", "vishnu", "trimurti", "destroyer", "preserver", "cosmic roles"],
        is_featured: true,
        seo_keywords: "shiva vs vishnu, hindu trimurti, cosmic roles hinduism, shiva destroyer vishnu preserver",
        author: "PeacefulAnswers Team"
    },
    {
        question: "Why is Ganesha worshipped before starting any new endeavor?",
        answer: "Ganesha is revered as Vighnaharta (remover of obstacles) and Vighnakarta (creator of obstacles for negative endeavors). He represents wisdom, intelligence, and the power to discriminate between right and wrong. Worshipping Ganesha before new beginnings ensures that obstacles are removed from righteous paths while impediments are created for harmful actions. His elephant head symbolizes wisdom and memory, while his large ears represent the importance of listening. The tradition of invoking Ganesha first (Pratham Pujya) ensures that our endeavors are aligned with dharma and cosmic harmony.",
        category: "Deities",
        difficulty_level: "beginner",
        tags: ["ganesha", "vighnaharta", "obstacles", "new beginnings", "wisdom", "elephant god"],
        is_featured: true,
        seo_keywords: "ganesha worship new beginnings, vighnaharta meaning, why worship ganesha first, elephant god hinduism",
        author: "PeacefulAnswers Team"
    },
    {
        question: "What is the main message of the Bhagavad Gita?",
        answer: "The Bhagavad Gita's central message is the path to spiritual liberation through selfless action (Nishkama Karma), devotion (Bhakti), and knowledge (Jnana). Krishna teaches Arjuna that one should perform their duties without attachment to results, surrendering all actions to the Divine. The Gita emphasizes that liberation (Moksha) can be achieved while living an active life in the world, not just through renunciation. It presents the concept of dharma (righteous duty), the eternal nature of the soul (Atman), and various yoga paths - Karma Yoga (action), Bhakti Yoga (devotion), and Jnana Yoga (knowledge) - as means to realize one's true divine nature.",
        category: "Scriptures",
        difficulty_level: "intermediate",
        tags: ["bhagavad gita", "krishna", "arjuna", "karma yoga", "dharma", "moksha", "nishkama karma"],
        is_featured: true,
        seo_keywords: "bhagavad gita main message, krishna teachings, karma yoga meaning, gita philosophy dharma",
        author: "PeacefulAnswers Team"
    },
    {
        question: "What are the four Vedas and their significance?",
        answer: "The four Vedas are the foundational scriptures of Sanātana Dharma: Rigveda (hymns and mantras), Samaveda (melodies and chants), Yajurveda (ritual procedures), and Atharvaveda (practical knowledge and healing). Each Veda contains four parts: Samhitas (hymns), Brahmanas (ritual explanations), Aranyakas (forest texts), and Upanishads (philosophical teachings). The Rigveda contains the earliest spiritual insights, Samaveda focuses on musical and rhythmic aspects of worship, Yajurveda provides sacrificial procedures, and Atharvaveda includes practical wisdom for daily life. Together, they represent the complete spiritual science of ancient seers (Rishis).",
        category: "Scriptures",
        difficulty_level: "advanced",
        tags: ["vedas", "rigveda", "samaveda", "yajurveda", "atharvaveda", "upanishads", "rishis"],
        is_featured: false,
        seo_keywords: "four vedas hinduism, veda significance, rigveda samaveda yajurveda atharvaveda, ancient hindu scriptures",
        author: "PeacefulAnswers Team"
    },
    {
        question: "What is the spiritual significance of Diwali?",
        answer: "Diwali, the Festival of Lights, celebrates the victory of light over darkness, good over evil, and knowledge over ignorance. It commemorates Lord Rama's return to Ayodhya after 14 years of exile and his victory over Ravana, symbolizing the triumph of dharma. The lighting of diyas (oil lamps) represents the inner light of knowledge that dispels the darkness of ignorance. Diwali also honors Goddess Lakshmi, bringing prosperity and abundance. The festival encourages self-reflection, the removal of negative tendencies, and the cultivation of virtuous qualities. It's a time for spiritual renewal, family unity, and community harmony.",
        category: "Festivals",
        difficulty_level: "beginner",
        tags: ["diwali", "festival of lights", "rama", "lakshmi", "victory of good", "spiritual renewal"],
        is_featured: true,
        seo_keywords: "diwali spiritual significance, festival of lights meaning, diwali lakshmi worship, hindu light festival",
        author: "PeacefulAnswers Team"
    },
    {
        question: "What is the concept of Karma in Hinduism?",
        answer: "Karma is the universal law of cause and effect governing all actions and their consequences. Every thought, word, and deed creates karmic impressions (samskaras) that influence future experiences. Karma operates across lifetimes, explaining why people are born into different circumstances. There are three types of karma: Sanchita (accumulated from past lives), Prarabdha (destiny for current life), and Agami (being created now). Good actions (punya) lead to positive results, while harmful actions (papa) bring suffering. The goal is to perform dharmic actions without attachment to results, ultimately transcending the karmic cycle to achieve liberation (Moksha).",
        category: "General",
        difficulty_level: "intermediate",
        tags: ["karma", "cause and effect", "samskaras", "dharma", "moksha", "rebirth"],
        is_featured: true,
        seo_keywords: "karma meaning hinduism, law of karma, karmic consequences, karma and rebirth, dharma karma moksha",
        author: "PeacefulAnswers Team"
    },
    {
        question: "What does Om represent in Hindu philosophy?",
        answer: "Om (AUM) is the primordial sound, the cosmic vibration from which the entire universe manifests. It represents the Supreme Reality (Brahman) in its unmanifest form. The three syllables A-U-M symbolize creation, preservation, and dissolution - the cosmic cycle governed by Brahma, Vishnu, and Shiva respectively. 'A' represents the waking state, 'U' the dream state, 'M' deep sleep, and the silence after represents the transcendent fourth state (Turiya). Chanting Om aligns individual consciousness with cosmic consciousness, making it a powerful tool for meditation and spiritual realization. It appears at the beginning of most Hindu prayers and mantras.",
        category: "General",
        difficulty_level: "beginner",
        tags: ["om", "aum", "primordial sound", "brahman", "cosmic vibration", "meditation", "mantra"],
        is_featured: true,
        seo_keywords: "om meaning hinduism, aum significance, primordial sound om, cosmic vibration aum, om meditation benefits",
        author: "PeacefulAnswers Team"
    },
    {
        question: "What is the ultimate goal of human life according to Hinduism?",
        answer: "According to Hindu philosophy, the ultimate goal of human life is Moksha - liberation from the cycle of birth, death, and rebirth (samsara). This involves realizing one's true nature as the eternal soul (Atman) and its unity with the Supreme Reality (Brahman). The path to Moksha involves pursuing the four life goals (Purusharthas): Dharma (righteous living), Artha (material security), Kama (fulfilling desires), and ultimately Moksha (liberation). Through spiritual practices like yoga, meditation, devotion, and selfless service, one gradually purifies the mind, exhausts karmic debts, and experiences the truth that individual consciousness and universal consciousness are one.",
        category: "General",
        difficulty_level: "advanced",
        tags: ["moksha", "liberation", "atman", "brahman", "purusharthas", "samsara", "self-realization"],
        is_featured: true,
        seo_keywords: "moksha meaning hinduism, ultimate goal life, liberation samsara, atman brahman unity, purusharthas dharma",
        author: "PeacefulAnswers Team"
    }
];

async function createFAQsViaAPI() {
    try {
        console.log('🚀 Starting FAQ database setup...\n');
        
        // Check if the table exists by trying to query it
        console.log('Checking if Hindu_faqs table exists...');
        const { data: existingData, error: checkError } = await supabase
            .from('Hindu_faqs')
            .select('count')
            .limit(1);
            
        if (checkError) {
            console.log('❌ Table does not exist. Please create it manually first.');
            console.log('\n📋 Manual Setup Instructions:');
            console.log('1. Go to Supabase Dashboard: https://app.supabase.com/project/wxprzwoylqjzozhezttc');
            console.log('2. Navigate to SQL Editor');
            console.log('3. Execute the SQL from create-faq-schema.sql file');
            console.log('\nAlternatively, create the table with these basic columns:');
            console.log('- id (bigint, primary key, auto-increment)');
            console.log('- question (text, not null)');
            console.log('- answer (text, not null)');
            console.log('- category (text, default "General")');
            console.log('- difficulty_level (text, default "beginner")');
            console.log('- tags (text[], default "{}") ');
            console.log('- is_featured (boolean, default false)');
            console.log('- view_count (int4, default 0)');
            console.log('- helpful_count (int4, default 0)');
            console.log('- created_at (timestamptz, default now())');
            console.log('- updated_at (timestamptz, default now())');
            console.log('- published (boolean, default true)');
            console.log('- author (text, default "PeacefulAnswers Team")');
            console.log('- seo_keywords (text)');
            return;
        }
        
        console.log('✅ Table exists! Proceeding with data insertion...\n');
        
        // Insert sample FAQs
        console.log('Inserting sample FAQ data...');
        const { data, error } = await supabase
            .from('Hindu_faqs')
            .insert(sampleFAQs)
            .select('id, question, category');
            
        if (error) {
            console.error('❌ Error inserting FAQ data:', error.message);
            console.log('\n💡 This might be because:');
            console.log('1. Table structure doesn\'t match expected schema');
            console.log('2. Some fields might be missing or have different data types');
            console.log('3. Permissions might need to be adjusted');
        } else {
            console.log('✅ Sample FAQ data inserted successfully!\n');
            console.log(`📊 Inserted ${data.length} FAQ entries:`);
            data.forEach((faq, index) => {
                console.log(`${index + 1}. [${faq.category}] ${faq.question.substring(0, 60)}...`);
            });
        }
        
        // Try to get count of total FAQs
        const { count, error: countError } = await supabase
            .from('Hindu_faqs')
            .select('*', { count: 'exact', head: true });
            
        if (!countError && count !== null) {
            console.log(`\n📈 Total FAQs in database: ${count}`);
        }
        
        // Get featured FAQs
        const { data: featuredFAQs, error: featuredError } = await supabase
            .from('Hindu_faqs')
            .select('question, category')
            .eq('is_featured', true);
            
        if (!featuredError && featuredFAQs) {
            console.log(`\n⭐ Featured FAQs: ${featuredFAQs.length}`);
            featuredFAQs.forEach((faq, index) => {
                console.log(`   ${index + 1}. [${faq.category}] ${faq.question.substring(0, 50)}...`);
            });
        }
        
        console.log('\n✨ FAQ database setup completed successfully!');
        console.log('\n🔗 Next Steps:');
        console.log('1. Create FAQ display pages in your Next.js app');
        console.log('2. Add search functionality');
        console.log('3. Implement admin panel for managing FAQs');
        console.log('4. Add user rating system for helpful_count');
        
    } catch (error) {
        console.error('💥 Unexpected error:', error);
    }
}

// Run the FAQ creation
createFAQsViaAPI();