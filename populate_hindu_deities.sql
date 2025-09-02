-- Populate Hindu Deities with Rich Data
-- Based on static data from deities page

-- Update Brahma with detailed information
UPDATE hindu.deities 
SET 
  divine_attributes = '[
    {
      "name": "Creator",
      "description": "Creator of the universe and all beings",
      "significance": "Represents the creative aspect of divine consciousness",
      "icon": "Sun"
    },
    {
      "name": "Four Faces",
      "description": "Four heads representing the four Vedas",
      "significance": "Symbolizes omniscience and universal knowledge",
      "icon": "BookOpen"
    },
    {
      "name": "Four Arms",
      "description": "Holds sacred texts, water pot, rosary, and lotus",
      "significance": "Each object represents different aspects of creation",
      "icon": "Star"
    }
  ]'::jsonb,
  mantras = '[
    {
      "sanskrit": "ओम् ब्रह्मणे नमः",
      "transliteration": "Om Brahmane Namah",
      "meaning": "Salutations to the Creator",
      "purpose": "Invoking creative energy and wisdom",
      "chanting_time": "During sunrise for new beginnings"
    },
    {
      "sanskrit": "ब्रह्मार्पणं ब्रह्म हविः",
      "transliteration": "Brahmarpanam Brahma Havir",
      "meaning": "The offering is Brahma, the oblation is Brahma",
      "purpose": "Recognizing the divine in all actions",
      "chanting_time": "Before meals or any sacred activity"
    }
  ]'::jsonb,
  festivals = '[
    {
      "name": "Brahma Panchami",
      "date": "Fifth day of Shukla Paksha in Magh month",
      "description": "Dedicated to worshipping Brahma for knowledge and wisdom",
      "significance": "Seeking blessings for creative endeavors and learning"
    },
    {
      "name": "Kartik Purnima",
      "date": "Full moon in Kartik month",
      "description": "Special prayers offered to Brahma",
      "significance": "Celebrating the creative principle of the universe"
    }
  ]'::jsonb,
  sacred_places = '[
    {
      "name": "Brahma Temple, Pushkar",
      "location": "Pushkar, Rajasthan, India",
      "description": "One of the very few temples dedicated to Lord Brahma",
      "significance": "Most important pilgrimage site for Brahma devotees"
    },
    {
      "name": "Jagatpita Brahma Temple",
      "location": "Pushkar, Rajasthan",
      "description": "Ancient temple believed to be 2000 years old",
      "significance": "Sacred site for prayers and spiritual learning"
    }
  ]'::jsonb,
  consorts = '["Saraswati"]'::jsonb,
  children = '[]'::jsonb,
  parents = '[]'::jsonb,
  avatar_of = null,
  domain = 'Creation',
  symbolism = 'Four heads representing four Vedas, sacred texts, creative consciousness',
  vahana = 'Hamsa (Swan)'
WHERE name = 'Brahma';

-- Update Vishnu with detailed information
UPDATE hindu.deities 
SET 
  divine_attributes = '[
    {
      "name": "Preserver",
      "description": "Preserver and protector of the universe",
      "significance": "Maintains cosmic order and dharma",
      "icon": "Shield"
    },
    {
      "name": "Four Arms",
      "description": "Holds conch, discus, mace, and lotus",
      "significance": "Each weapon represents different divine powers",
      "icon": "Disc"
    },
    {
      "name": "Blue Complexion",
      "description": "Dark blue color representing infinity",
      "significance": "Symbolizes the infinite nature of sky and ocean",
      "icon": "Waves"
    }
  ]'::jsonb,
  mantras = '[
    {
      "sanskrit": "ओम् नमो भगवते वासुदेवाय",
      "transliteration": "Om Namo Bhagavate Vasudevaya",
      "meaning": "Salutations to the Divine Vasudeva",
      "purpose": "Seeking protection and spiritual guidance",
      "chanting_time": "During meditation or prayer"
    },
    {
      "sanskrit": "हरे राम हरे राम राम राम हरे हरे",
      "transliteration": "Hare Rama Hare Rama Rama Rama Hare Hare",
      "meaning": "Chanting the names of Rama and Krishna",
      "purpose": "Purification of mind and devotion",
      "chanting_time": "Any time, especially during kirtan"
    }
  ]'::jsonb,
  festivals = '[
    {
      "name": "Vaikunta Ekadashi",
      "date": "Ekadashi during Margashirsha month",
      "description": "Most sacred day for Vishnu devotees",
      "significance": "Gates of Vaikunta are believed to open"
    },
    {
      "name": "Vishnu Sahasranama Jayanti",
      "date": "Various dates in different regions",
      "description": "Celebration of the thousand names of Vishnu",
      "significance": "Chanting the 1000 names for blessings"
    }
  ]'::jsonb,
  sacred_places = '[
    {
      "name": "Tirumala Balaji Temple",
      "location": "Tirupati, Andhra Pradesh, India",
      "description": "Most visited Hindu temple dedicated to Vishnu",
      "significance": "Sacred hill temple of Lord Venkateswara"
    },
    {
      "name": "Badrinath Temple",
      "location": "Uttarakhand, India",
      "description": "One of the Char Dham pilgrimage sites",
      "significance": "Sacred abode of Vishnu in the Himalayas"
    }
  ]'::jsonb,
  consorts = '["Lakshmi"]'::jsonb,
  children = '[]'::jsonb,
  parents = '[]'::jsonb,
  avatar_of = null,
  domain = 'Preservation',
  symbolism = 'Four arms holding conch, discus, mace, lotus - symbols of cosmic order',
  vahana = 'Garuda (Eagle)'
WHERE name = 'Vishnu';

-- Update Shiva with detailed information
UPDATE hindu.deities 
SET 
  divine_attributes = '[
    {
      "name": "Destroyer",
      "description": "Destroyer of evil and ignorance for regeneration",
      "significance": "Represents transformation and renewal",
      "icon": "Eye"
    },
    {
      "name": "Third Eye",
      "description": "Eye of destruction and inner vision",
      "significance": "Symbolizes spiritual insight and power",
      "icon": "Eye"
    },
    {
      "name": "Nataraja",
      "description": "Cosmic dancer who dances the universe into existence",
      "significance": "Represents eternal cycle of creation and destruction",
      "icon": "Star"
    }
  ]'::jsonb,
  mantras = '[
    {
      "sanskrit": "ओम् नमः शिवाय",
      "transliteration": "Om Namah Shivaya",
      "meaning": "Salutations to Lord Shiva",
      "purpose": "Spiritual purification and inner transformation",
      "chanting_time": "During meditation, especially at dawn"
    },
    {
      "sanskrit": "त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्",
      "transliteration": "Tryambakam Yajamahe Sugandhim Pushti Vardhanam",
      "meaning": "We worship the three-eyed one who nourishes all beings",
      "purpose": "Healing, protection from death, and spiritual growth",
      "chanting_time": "During Maha Mrityunjaya prayers"
    }
  ]'::jsonb,
  festivals = '[
    {
      "name": "Maha Shivaratri",
      "date": "14th night of new moon in Phalguna month",
      "description": "Great night of Shiva celebrated with fasting and prayers",
      "significance": "Most sacred festival for Shiva devotees"
    },
    {
      "name": "Pradosh Vrat",
      "date": "13th day of lunar fortnight",
      "description": "Bi-monthly fasting dedicated to Shiva",
      "significance": "Seeking blessings for spiritual progress"
    }
  ]'::jsonb,
  sacred_places = '[
    {
      "name": "Kashi Vishwanath Temple",
      "location": "Varanasi, Uttar Pradesh, India",
      "description": "One of the twelve Jyotirlingas",
      "significance": "Most sacred temple where Shiva resides as light"
    },
    {
      "name": "Kedarnath Temple",
      "location": "Uttarakhand, India",
      "description": "Highest Jyotirlinga temple in the Himalayas",
      "significance": "Sacred site where Shiva is worshipped as the lord of the field"
    }
  ]'::jsonb,
  consorts = '["Parvati"]'::jsonb,
  children = '["Ganesha", "Kartikeya"]'::jsonb,
  parents = '[]'::jsonb,
  avatar_of = null,
  domain = 'Destruction & Regeneration',
  symbolism = 'Third eye, trident, damaru drum, serpent, crescent moon',
  vahana = 'Nandi (Bull)'
WHERE name = 'Shiva';

-- Update Ganesha with detailed information
UPDATE hindu.deities 
SET 
  divine_attributes = '[
    {
      "name": "Remover of Obstacles",
      "description": "Removes barriers and obstacles from devotees path",
      "significance": "Invoked before starting any new endeavor",
      "icon": "Crown"
    },
    {
      "name": "Elephant Head",
      "description": "Head of an elephant symbolizing wisdom",
      "significance": "Represents intelligence, memory, and discrimination",
      "icon": "Crown"
    },
    {
      "name": "Broken Tusk",
      "description": "Sacrificed his tusk to write the Mahabharata",
      "significance": "Symbolizes sacrifice for higher knowledge",
      "icon": "BookOpen"
    }
  ]'::jsonb,
  mantras = '[
    {
      "sanskrit": "ओम् गं गणपतये नमः",
      "transliteration": "Om Gam Ganapataye Namah",
      "meaning": "Salutations to the remover of obstacles",
      "purpose": "Removing obstacles and ensuring success",
      "chanting_time": "Before starting any new work"
    },
    {
      "sanskrit": "गजाननं भूतगणादि सेवितं",
      "transliteration": "Gajananam Bhutaganaadi Sevitam",
      "meaning": "The elephant-faced lord served by celestial beings",
      "purpose": "Seeking wisdom and successful completion of tasks",
      "chanting_time": "During Ganesh Chaturthi or morning prayers"
    }
  ]'::jsonb,
  festivals = '[
    {
      "name": "Ganesh Chaturthi",
      "date": "4th day of Shukla Paksha in Bhadrapada month",
      "description": "Birth celebration of Lord Ganesha",
      "significance": "Most important festival with elaborate celebrations"
    },
    {
      "name": "Sankashti Chaturthi",
      "date": "4th day of Krishna Paksha every month",
      "description": "Monthly observance for Ganesha",
      "significance": "Fasting and prayers for removing difficulties"
    }
  ]'::jsonb,
  sacred_places = '[
    {
      "name": "Siddhivinayak Temple",
      "location": "Mumbai, Maharashtra, India",
      "description": "Famous temple known for fulfilling wishes",
      "significance": "One of the most visited Ganesha temples"
    },
    {
      "name": "Ashtavinayak Temples",
      "location": "Maharashtra, India",
      "description": "Eight sacred temples of Ganesha",
      "significance": "Complete pilgrimage circuit for Ganesha devotees"
    }
  ]'::jsonb,
  consorts = '["Riddhi", "Siddhi"]'::jsonb,
  children = '["Shubh", "Labh"]'::jsonb,
  parents = '["Shiva", "Parvati"]'::jsonb,
  avatar_of = null,
  domain = 'Wisdom & New Beginnings',
  symbolism = 'Elephant head, broken tusk, modak, mouse vahana',
  vahana = 'Mushak (Mouse)'
WHERE name = 'Ganesha';

-- Update Hanuman with detailed information
UPDATE hindu.deities 
SET 
  divine_attributes = '[
    {
      "name": "Devoted Warrior",
      "description": "Supreme devotee of Lord Rama",
      "significance": "Epitome of devotion, courage, and service",
      "icon": "Mountain"
    },
    {
      "name": "Superhuman Strength",
      "description": "Possesses immense physical and spiritual power",
      "significance": "Protector who destroys evil forces",
      "icon": "Shield"
    },
    {
      "name": "Immortal",
      "description": "Blessed with immortality to serve devotees",
      "significance": "Ever-present help for those who call upon him",
      "icon": "Star"
    }
  ]'::jsonb,
  mantras = '[
    {
      "sanskrit": "ओम् हं हनुमते नमः",
      "transliteration": "Om Ham Hanumate Namah",
      "meaning": "Salutations to Lord Hanuman",
      "purpose": "Protection, strength, and overcoming fears",
      "chanting_time": "Tuesday mornings or during difficulties"
    },
    {
      "sanskrit": "हनुमान चालीसा",
      "transliteration": "Hanuman Chalisa",
      "meaning": "Forty verses in praise of Hanuman",
      "purpose": "Complete protection and blessings",
      "chanting_time": "Daily recitation for devotees"
    }
  ]'::jsonb,
  festivals = '[
    {
      "name": "Hanuman Jayanti",
      "date": "Full moon day of Chaitra month",
      "description": "Birth celebration of Lord Hanuman",
      "significance": "Devotees pray for strength and protection"
    },
    {
      "name": "Hanuman Vratam",
      "date": "Every Tuesday",
      "description": "Weekly observance dedicated to Hanuman",
      "significance": "Regular worship for continuous blessings"
    }
  ]'::jsonb,
  sacred_places = '[
    {
      "name": "Sankat Mochan Temple",
      "location": "Varanasi, Uttar Pradesh, India",
      "description": "Famous temple for removing difficulties",
      "significance": "Powerful site for seeking Hanumans protection"
    },
    {
      "name": "Mehandipur Balaji Temple",
      "location": "Rajasthan, India",
      "description": "Known for spiritual healing and exorcism",
      "significance": "Sacred place for removing negative influences"
    }
  ]'::jsonb,
  consorts = '[]'::jsonb,
  children = '[]'::jsonb,
  parents = '["Vayu", "Anjana"]'::jsonb,
  avatar_of = null,
  domain = 'Devotion & Courage',
  symbolism = 'Mace, mountain, devotion to Rama, orange/red color',
  vahana = null
WHERE name = 'Hanuman';

-- Update Krishna with detailed information
UPDATE hindu.deities 
SET 
  divine_attributes = '[
    {
      "name": "Divine Cowherd",
      "description": "Playful child and divine lover",
      "significance": "Represents divine love and spiritual joy",
      "icon": "Heart"
    },
    {
      "name": "Spiritual Teacher",
      "description": "Teacher of the Bhagavad Gita",
      "significance": "Guide for righteous living and spiritual wisdom",
      "icon": "BookOpen"
    },
    {
      "name": "Supreme Consciousness",
      "description": "Complete incarnation of Vishnu",
      "significance": "Embodies all divine qualities and powers",
      "icon": "Star"
    }
  ]'::jsonb,
  mantras = '[
    {
      "sanskrit": "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे",
      "transliteration": "Hare Krishna Hare Krishna Krishna Krishna Hare Hare",
      "meaning": "Chanting the sacred names of Krishna",
      "purpose": "Purification of consciousness and divine love",
      "chanting_time": "Continuous chanting throughout the day"
    },
    {
      "sanskrit": "कृष्ण गोविन्द हरे मुरारे",
      "transliteration": "Krishna Govinda Hare Murare",
      "meaning": "O Krishna, protector of cows, destroyer of demon Mura",
      "purpose": "Seeking protection and spiritual elevation",
      "chanting_time": "During meditation and bhajan sessions"
    }
  ]'::jsonb,
  festivals = '[
    {
      "name": "Krishna Janmashtami",
      "date": "8th day of Krishna Paksha in Bhadrapada month",
      "description": "Birth celebration of Lord Krishna",
      "significance": "Most important festival with fasting and celebrations"
    },
    {
      "name": "Radha Ashtami",
      "date": "8th day of Shukla Paksha in Bhadrapada month",
      "description": "Birth celebration of Radha",
      "significance": "Celebrating divine love between Radha and Krishna"
    }
  ]'::jsonb,
  sacred_places = '[
    {
      "name": "Krishna Janmabhoomi Temple",
      "location": "Mathura, Uttar Pradesh, India",
      "description": "Birthplace of Lord Krishna",
      "significance": "Most sacred pilgrimage site for Krishna devotees"
    },
    {
      "name": "Dwarkadhish Temple",
      "location": "Dwarka, Gujarat, India",
      "description": "Kingdom of Krishna as described in scriptures",
      "significance": "One of the Char Dham pilgrimage sites"
    }
  ]'::jsonb,
  consorts = '["Rukmini", "Radha"]'::jsonb,
  children = '["Pradyumna", "Samba"]'::jsonb,
  parents = '["Vasudeva", "Devaki"]'::jsonb,
  avatar_of = 'Vishnu',
  domain = 'Love & Divine Play',
  symbolism = 'Flute, peacock feather, butter, blue complexion',
  vahana = null
WHERE name = 'Krishna';

-- Update Rama with detailed information
UPDATE hindu.deities 
SET 
  divine_attributes = '[
    {
      "name": "Ideal King",
      "description": "Perfect ruler who upholds dharma",
      "significance": "Model of righteous leadership and duty",
      "icon": "Crown"
    },
    {
      "name": "Devoted Husband",
      "description": "Exemplary husband to Sita",
      "significance": "Ideal of marital devotion and faithfulness",
      "icon": "Heart"
    },
    {
      "name": "Dharma Personified",
      "description": "Perfect embodiment of righteousness",
      "significance": "Living example of moral and ethical conduct",
      "icon": "Shield"
    }
  ]'::jsonb,
  mantras = '[
    {
      "sanskrit": "श्री राम जय राम जय जय राम",
      "transliteration": "Shri Rama Jaya Rama Jaya Jaya Rama",
      "meaning": "Victory to Lord Rama",
      "purpose": "Invoking protection and righteousness",
      "chanting_time": "During morning prayers and difficulties"
    },
    {
      "sanskrit": "राम रक्षा स्तोत्र",
      "transliteration": "Rama Raksha Stotra",
      "meaning": "Protective hymn to Lord Rama",
      "purpose": "Complete protection from all evils",
      "chanting_time": "Daily recitation for protection"
    }
  ]'::jsonb,
  festivals = '[
    {
      "name": "Ram Navami",
      "date": "9th day of Chaitra month",
      "description": "Birth celebration of Lord Rama",
      "significance": "Celebrating the avatar of righteousness"
    },
    {
      "name": "Diwali",
      "date": "New moon day of Kartik month",
      "description": "Celebrating Ramas return to Ayodhya",
      "significance": "Victory of good over evil and light over darkness"
    }
  ]'::jsonb,
  sacred_places = '[
    {
      "name": "Ram Janmabhoomi Temple",
      "location": "Ayodhya, Uttar Pradesh, India",
      "description": "Birthplace of Lord Rama",
      "significance": "Most sacred site for Rama devotees"
    },
    {
      "name": "Rameshwaram Temple",
      "location": "Tamil Nadu, India",
      "description": "Where Rama worshipped Shiva",
      "significance": "One of the Char Dham pilgrimage sites"
    }
  ]'::jsonb,
  consorts = '["Sita"]'::jsonb,
  children = '["Luv", "Kush"]'::jsonb,
  parents = '["Dasharatha", "Kaushalya"]'::jsonb,
  avatar_of = 'Vishnu',
  domain = 'Righteousness & Honor',
  symbolism = 'Bow and arrow, crown, righteousness, ideal conduct',
  vahana = null
WHERE name = 'Rama';

-- Update Indra with detailed information
UPDATE hindu.deities 
SET 
  divine_attributes = '[
    {
      "name": "King of Gods",
      "description": "Ruler of the celestial realm and gods",
      "significance": "Leader of divine forces against evil",
      "icon": "Crown"
    },
    {
      "name": "Thunder God",
      "description": "Controller of storms and rainfall",
      "significance": "Brings life-giving rain and controls weather",
      "icon": "Star"
    },
    {
      "name": "Thousand Eyes",
      "description": "Possesses thousand eyes for vigilance",
      "significance": "All-seeing protector and observer",
      "icon": "Eye"
    }
  ]'::jsonb,
  mantras = '[
    {
      "sanskrit": "ओम् इन्द्राय नमः",
      "transliteration": "Om Indraya Namah",
      "meaning": "Salutations to Lord Indra",
      "purpose": "Seeking strength and victory over obstacles",
      "chanting_time": "During storms or for courage"
    },
    {
      "sanskrit": "इन्द्रं वो विश्वतः पतिं",
      "transliteration": "Indram Vo Vishvatah Patim",
      "meaning": "Indra, the universal lord",
      "purpose": "Invoking leadership qualities and protection",
      "chanting_time": "For leadership and authority"
    }
  ]'::jsonb,
  festivals = '[
    {
      "name": "Indra Puja",
      "date": "During monsoon season",
      "description": "Prayers for good rainfall",
      "significance": "Seeking blessings for agriculture and prosperity"
    },
    {
      "name": "Govardhan Puja",
      "date": "Day after Diwali",
      "description": "Related to Indras interaction with Krishna",
      "significance": "Celebrating humility over pride"
    }
  ]'::jsonb,
  sacred_places = '[
    {
      "name": "Indra Temples",
      "location": "Various locations in India and Southeast Asia",
      "description": "Ancient temples dedicated to Indra",
      "significance": "Worship sites for the king of gods"
    },
    {
      "name": "Mount Meru",
      "location": "Mythical cosmic mountain",
      "description": "Celestial abode of Indra",
      "significance": "Center of spiritual and physical universe"
    }
  ]'::jsonb,
  consorts = '["Shachi"]'::jsonb,
  children = '["Arjuna", "Jayanta"]'::jsonb,
  parents = '["Aditi", "Kashyapa"]'::jsonb,
  avatar_of = null,
  domain = 'Thunder & Rain',
  symbolism = 'Thunderbolt (Vajra), thousand eyes, white elephant',
  vahana = 'Airavata (White Elephant)'
WHERE name = 'Indra';

-- Update Agni with detailed information
UPDATE hindu.deities 
SET 
  divine_attributes = '[
    {
      "name": "Fire God",
      "description": "Sacred fire that purifies and transforms",
      "significance": "Mediator between humans and gods",
      "icon": "Flame"
    },
    {
      "name": "Purifier",
      "description": "Burns away impurities and sins",
      "significance": "Cleanses both material and spiritual realms",
      "icon": "Star"
    },
    {
      "name": "Divine Messenger",
      "description": "Carries offerings to celestial beings",
      "significance": "Bridge between earthly and divine realms",
      "icon": "Sun"
    }
  ]'::jsonb,
  mantras = '[
    {
      "sanskrit": "ओम् अग्नये नमः",
      "transliteration": "Om Agnaye Namah",
      "meaning": "Salutations to the Fire God",
      "purpose": "Purification and spiritual transformation",
      "chanting_time": "During fire rituals and havan"
    },
    {
      "sanskrit": "अग्निमीळे पुरोहितं",
      "transliteration": "Agni Meele Purohitam",
      "meaning": "I praise Agni, the priest of sacrifice",
      "purpose": "Invoking divine blessings through fire",
      "chanting_time": "Beginning of Vedic fire ceremonies"
    }
  ]'::jsonb,
  festivals = '[
    {
      "name": "Agni Panchami",
      "date": "5th day of Shukla Paksha in various months",
      "description": "Special worship of fire god",
      "significance": "Seeking purification and spiritual energy"
    },
    {
      "name": "Holi",
      "date": "Full moon day of Phalguna month",
      "description": "Festival of fire and colors",
      "significance": "Burning away negativity and celebrating renewal"
    }
  ]'::jsonb,
  sacred_places = '[
    {
      "name": "Fire Temples",
      "location": "Various Vedic sites across India",
      "description": "Ancient sites of fire worship",
      "significance": "Sacred spaces for fire rituals and ceremonies"
    },
    {
      "name": "Yajna Kunds",
      "location": "Throughout India",
      "description": "Fire altars for sacrificial rituals",
      "significance": "Places where Agni is invoked for blessings"
    }
  ]'::jsonb,
  consorts = '["Svaha"]'::jsonb,
  children = '["Pavaka", "Pavamana", "Shuchi"]'::jsonb,
  parents = '["Angiras", "Brahmins lineage"]'::jsonb,
  avatar_of = null,
  domain = 'Fire & Purification',
  symbolism = 'Sacred fire, red color, two faces, golden complexion',
  vahana = 'Ram (Male sheep)'
WHERE name = 'Agni';

-- Update Surya with detailed information
UPDATE hindu.deities 
SET 
  divine_attributes = '[
    {
      "name": "Sun God",
      "description": "Source of light, warmth, and life energy",
      "significance": "Sustainer of all life and cosmic illumination",
      "icon": "Sun"
    },
    {
      "name": "Time Keeper",
      "description": "Regulates day, night, and seasons",
      "significance": "Controller of cosmic time and cycles",
      "icon": "Star"
    },
    {
      "name": "Divine Healer",
      "description": "Bestows health and vitality",
      "significance": "Source of physical and spiritual energy",
      "icon": "Heart"
    }
  ]'::jsonb,
  mantras = '[
    {
      "sanskrit": "ओम् सूर्याय नमः",
      "transliteration": "Om Suryaya Namah",
      "meaning": "Salutations to the Sun God",
      "purpose": "Health, vitality, and spiritual illumination",
      "chanting_time": "During sunrise and Surya Namaskara"
    },
    {
      "sanskrit": "आदित्यहृदयं पुण्यं",
      "transliteration": "Aditya Hridayam Punyam",
      "meaning": "The sacred heart of the Sun",
      "purpose": "Victory over enemies and inner darkness",
      "chanting_time": "Early morning facing the sun"
    }
  ]'::jsonb,
  festivals = '[
    {
      "name": "Chhath Puja",
      "date": "6th day after Diwali",
      "description": "Major festival dedicated to Sun God",
      "significance": "Thanksgiving for life energy and prosperity"
    },
    {
      "name": "Makar Sankranti",
      "date": "January 14th",
      "description": "Celebrating sun\'s northward journey",
      "significance": "Beginning of auspicious period and harvest season"
    }
  ]'::jsonb,
  sacred_places = '[
    {
      "name": "Konark Sun Temple",
      "location": "Odisha, India",
      "description": "Magnificent temple shaped like sun chariot",
      "significance": "UNESCO World Heritage site dedicated to Surya"
    },
    {
      "name": "Modhera Sun Temple",
      "location": "Gujarat, India",
      "description": "Ancient temple with precise astronomical alignment",
      "significance": "Perfect orientation to capture sunrise"
    }
  ]'::jsonb,
  consorts = '["Saranyu", "Chhaya"]'::jsonb,
  children = '["Yama", "Yamuna", "Ashwini Kumars", "Manu", "Shani"]'::jsonb,
  parents = '["Aditi", "Kashyapa"]'::jsonb,
  avatar_of = null,
  domain = 'Sun & Illumination',
  symbolism = 'Solar disc, seven horses, golden chariot, lotus flowers',
  vahana = 'Seven Horses'
WHERE name = 'Surya';

-- Update Durga with detailed information
UPDATE hindu.deities 
SET 
  divine_attributes = '[
    {
      "name": "Invincible Goddess",
      "description": "Fierce protector who destroys evil forces",
      "significance": "Embodiment of divine feminine power and protection",
      "icon": "Shield"
    },
    {
      "name": "Ten Arms",
      "description": "Multiple arms holding various weapons",
      "significance": "Equipped to fight all forms of evil and negativity",
      "icon": "Star"
    },
    {
      "name": "Mahishasura Mardini",
      "description": "Slayer of the buffalo demon Mahishasura",
      "significance": "Victory of good over evil and divine feminine power",
      "icon": "Crown"
    }
  ]'::jsonb,
  mantras = '[
    {
      "sanskrit": "ओम् दुं दुर्गायै नमः",
      "transliteration": "Om Dum Durgayai Namah",
      "meaning": "Salutations to Goddess Durga",
      "purpose": "Protection from evil and negative forces",
      "chanting_time": "During difficulties and for strength"
    },
    {
      "sanskrit": "सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके",
      "transliteration": "Sarva Mangala Mangalye Shive Sarvartha Sadhike",
      "meaning": "She who is auspicious among the auspicious",
      "purpose": "Seeking blessings and auspiciousness",
      "chanting_time": "During Durga Puja and prayers"
    }
  ]'::jsonb,
  festivals = '[
    {
      "name": "Durga Puja",
      "date": "Shukla Paksha of Ashwin month (September-October)",
      "description": "Nine-day celebration of Goddess Durga",
      "significance": "Most important festival celebrating divine feminine power"
    },
    {
      "name": "Navaratri",
      "date": "Twice yearly - Chaitra and Ashwin months",
      "description": "Nine nights of goddess worship",
      "significance": "Celebrating different forms of divine mother"
    }
  ]'::jsonb,
  sacred_places = '[
    {
      "name": "Vaishno Devi Temple",
      "location": "Jammu & Kashmir, India",
      "description": "Cave temple of the goddess in mountains",
      "significance": "One of the most visited pilgrimage sites"
    },
    {
      "name": "Kamakhya Temple",
      "location": "Assam, India",
      "description": "Important Shakti Peetha temple",
      "significance": "Sacred site where goddess Sati\'s body parts fell"
    }
  ]'::jsonb,
  consorts = '[]'::jsonb,
  children = '[]'::jsonb,
  parents = '[]'::jsonb,
  avatar_of = 'Parvati',
  domain = 'Protection & Victory',
  symbolism = 'Ten arms, various weapons, lion/tiger mount, fierce compassion',
  vahana = 'Tiger/Lion'
WHERE name = 'Durga';

-- Update Kali with detailed information
UPDATE hindu.deities 
SET 
  divine_attributes = '[
    {
      "name": "Dark Goddess",
      "description": "Fierce form representing time and destruction",
      "significance": "Destroys ego, ignorance, and evil forces",
      "icon": "Star"
    },
    {
      "name": "Mahakali",
      "description": "Ultimate reality beyond time and space",
      "significance": "Represents the primordial creative force",
      "icon": "Eye"
    },
    {
      "name": "Liberator",
      "description": "Frees devotees from fear and illusion",
      "significance": "Grants moksha through destruction of ego",
      "icon": "Crown"
    }
  ]'::jsonb,
  mantras = '[
    {
      "sanskrit": "ओम् क्रीं कालिकायै नमः",
      "transliteration": "Om Kreem Kalikayai Namah",
      "meaning": "Salutations to Goddess Kali",
      "purpose": "Destroying negative forces and ego",
      "chanting_time": "During meditation and spiritual practices"
    },
    {
      "sanskrit": "क्रीं क्रीं क्रीं हूं हूं ह्रीं ह्रीं",
      "transliteration": "Kreem Kreem Kreem Hum Hum Hreem Hreem",
      "meaning": "Sacred seed mantras for Kali",
      "purpose": "Invoking protective and transformative energy",
      "chanting_time": "Advanced tantric practices"
    }
  ]'::jsonb,
  festivals = '[
    {
      "name": "Kali Puja",
      "date": "New moon day of Kartik month",
      "description": "Special worship of Goddess Kali",
      "significance": "Seeking protection and spiritual transformation"
    },
    {
      "name": "Kali Chaudas",
      "date": "14th day of Krishna Paksha in Kartik",
      "description": "Day before Diwali dedicated to Kali",
      "significance": "Destroying negativity before festival of lights"
    }
  ]'::jsonb,
  sacred_places = '[
    {
      "name": "Kalighat Temple",
      "location": "Kolkata, West Bengal, India",
      "description": "Famous temple where goddess appeared",
      "significance": "One of the 51 Shakti Peethas"
    },
    {
      "name": "Dakshineswar Temple",
      "location": "Kolkata, West Bengal, India",
      "description": "Temple where Ramakrishna worshipped Kali",
      "significance": "Sacred site of intense devotional practices"
    }
  ]'::jsonb,
  consorts = '["Shiva"]'::jsonb,
  children = '[]'::jsonb,
  parents = '[]'::jsonb,
  avatar_of = 'Parvati',
  domain = 'Time & Destruction',
  symbolism = 'Dark complexion, sword, severed head, garland of heads',
  vahana = null
WHERE name = 'Kali';

-- Update Parvati with detailed information
UPDATE hindu.deities 
SET 
  divine_attributes = '[
    {
      "name": "Mountain Goddess",
      "description": "Gentle and nurturing form of divine feminine",
      "significance": "Represents love, fertility, and devotion",
      "icon": "Mountain"
    },
    {
      "name": "Divine Mother",
      "description": "Loving mother of Ganesha and Kartikeya",
      "significance": "Embodiment of maternal love and care",
      "icon": "Heart"
    },
    {
      "name": "Shivas Consort",
      "description": "Perfect partner and complement to Shiva",
      "significance": "Represents the union of masculine and feminine energies",
      "icon": "Flower2"
    }
  ]'::jsonb,
  mantras = '[
    {
      "sanskrit": "ओम् पार्वत्यै नमः",
      "transliteration": "Om Parvatyai Namah",
      "meaning": "Salutations to Goddess Parvati",
      "purpose": "Seeking maternal blessings and love",
      "chanting_time": "For family harmony and maternal protection"
    },
    {
      "sanskrit": "उमा देवी नमस्तुभ्यं",
      "transliteration": "Uma Devi Namastubhyam",
      "meaning": "Salutations to Goddess Uma",
      "purpose": "Invoking gentle and nurturing energy",
      "chanting_time": "During family prayers and ceremonies"
    }
  ]'::jsonb,
  festivals = '[
    {
      "name": "Teej Festival",
      "date": "Various dates in different regions",
      "description": "Celebrating married womens devotion",
      "significance": "Honoring Parvatis devotion to Shiva"
    },
    {
      "name": "Gauri Puja",
      "date": "During Ganesh Chaturthi",
      "description": "Worship of Parvati as Gauri",
      "significance": "Seeking marital happiness and family welfare"
    }
  ]'::jsonb,
  sacred_places = '[
    {
      "name": "Mata Vaishno Devi",
      "location": "Jammu & Kashmir, India",
      "description": "Mountain shrine of the goddess",
      "significance": "Sacred cave temple in the Himalayas"
    },
    {
      "name": "Mansa Devi Temple",
      "location": "Haridwar, Uttarakhand, India",
      "description": "Temple atop Bilva Parvat hill",
      "significance": "Wishes fulfilling temple of the mountain goddess"
    }
  ]'::jsonb,
  consorts = '["Shiva"]'::jsonb,
  children = '["Ganesha", "Kartikeya"]'::jsonb,
  parents = '["Himavan", "Mena"]'::jsonb,
  avatar_of = null,
  domain = 'Love & Devotion',
  symbolism = 'Lotus, mountains, maternal love, gentle nature',
  vahana = 'Lion'
WHERE name = 'Parvati';

-- Update Lakshmi with detailed information
UPDATE hindu.deities 
SET 
  divine_attributes = '[
    {
      "name": "Goddess of Wealth",
      "description": "Bestower of material and spiritual prosperity",
      "significance": "Source of abundance and good fortune",
      "icon": "Coins"
    },
    {
      "name": "Lotus Goddess",
      "description": "Always depicted sitting or standing on lotus",
      "significance": "Purity and beauty arising from muddy waters",
      "icon": "Flower2"
    },
    {
      "name": "Vishnu\'s Consort",
      "description": "Eternal companion of Lord Vishnu",
      "significance": "Represents divine grace and sustaining power",
      "icon": "Heart"
    }
  ]'::jsonb,
  mantras = '[
    {
      "sanskrit": "ओम् श्रीं लक्ष्मी नारायणाभ्यां नमः",
      "transliteration": "Om Shreem Lakshmi Narayanabhyam Namah",
      "meaning": "Salutations to Lakshmi and Narayana",
      "purpose": "Seeking wealth, prosperity, and divine grace",
      "chanting_time": "Friday evenings and during Lakshmi Puja"
    },
    {
      "sanskrit": "श्री लक्ष्मी अष्टोत्तर शतनाम",
      "transliteration": "Shri Lakshmi Ashtottara Shatanamam",
      "meaning": "108 names of Goddess Lakshmi",
      "purpose": "Complete blessings for prosperity and well-being",
      "chanting_time": "During Diwali and regular worship"
    }
  ]'::jsonb,
  festivals = '[
    {
      "name": "Diwali",
      "date": "New moon day of Kartik month",
      "description": "Festival of lights celebrating Lakshmi",
      "significance": "Most important festival for wealth and prosperity"
    },
    {
      "name": "Lakshmi Panchami",
      "date": "5th day of Shukla Paksha in various months",
      "description": "Special worship day for Lakshmi",
      "significance": "Seeking financial stability and abundance"
    }
  ]'::jsonb,
  sacred_places = '[
    {
      "name": "Mahalakshmi Temple",
      "location": "Mumbai, Maharashtra, India",
      "description": "Ancient temple dedicated to goddess of wealth",
      "significance": "Major pilgrimage site for prosperity seekers"
    },
    {
      "name": "Golden Temple",
      "location": "Vellore, Tamil Nadu, India",
      "description": "Temple covered entirely in gold",
      "significance": "Dedicated to Lakshmi as goddess of gold and wealth"
    }
  ]'::jsonb,
  consorts = '["Vishnu"]'::jsonb,
  children = '[]'::jsonb,
  parents = '["Ocean of Milk (born during churning)"]'::jsonb,
  avatar_of = null,
  domain = 'Prosperity & Fortune',
  symbolism = 'Lotus, gold coins, elephants, owl, beautiful appearance',
  vahana = 'Owl'
WHERE name = 'Lakshmi';

-- Update Saraswati with detailed information
UPDATE hindu.deities 
SET 
  divine_attributes = '[
    {
      "name": "Goddess of Knowledge",
      "description": "Bestower of wisdom, learning, and arts",
      "significance": "Source of all knowledge and creative expression",
      "icon": "BookOpen"
    },
    {
      "name": "Veena Player",
      "description": "Always depicted playing the sacred veena",
      "significance": "Harmony of knowledge and artistic expression",
      "icon": "Star"
    },
    {
      "name": "Pure White",
      "description": "Dressed in pristine white clothing",
      "significance": "Purity of knowledge and spiritual wisdom",
      "icon": "Flower2"
    }
  ]'::jsonb,
  mantras = '[
    {
      "sanskrit": "ओम् ऐं सरस्वत्यै नमः",
      "transliteration": "Om Aim Saraswatyai Namah",
      "meaning": "Salutations to Goddess Saraswati",
      "purpose": "Gaining knowledge, wisdom, and artistic skills",
      "chanting_time": "Before studies and creative endeavors"
    },
    {
      "sanskrit": "या कुन्देन्दु तुषार हार धवला",
      "transliteration": "Ya Kundendu Tushara Hara Dhavala",
      "meaning": "She who is white like jasmine, moon, and snow",
      "purpose": "Seeking pure knowledge and artistic excellence",
      "chanting_time": "During Saraswati Puja and examinations"
    }
  ]'::jsonb,
  festivals = '[
    {
      "name": "Saraswati Puja",
      "date": "5th day of Shukla Paksha in Magh month (Basant Panchami)",
      "description": "Celebration of knowledge and learning",
      "significance": "Students and artists seek blessings for success"
    },
    {
      "name": "Navratri",
      "date": "During nine nights of goddess worship",
      "description": "Special prayers to Saraswati",
      "significance": "Invoking wisdom and spiritual knowledge"
    }
  ]'::jsonb,
  sacred_places = '[
    {
      "name": "Saraswati Temple, Basar",
      "location": "Telangana, India",
      "description": "Famous temple where students seek blessings",
      "significance": "Major pilgrimage site for education and knowledge"
    },
    {
      "name": "Sharada Peeth",
      "location": "Kashmir, India",
      "description": "Ancient seat of learning and wisdom",
      "significance": "Historical center of knowledge and scholarship"
    }
  ]'::jsonb,
  consorts = '["Brahma"]'::jsonb,
  children = '[]'::jsonb,
  parents = '["Brahma (created by)"]'::jsonb,
  avatar_of = null,
  domain = 'Knowledge & Arts',
  symbolism = 'Veena, lotus, swan, books, white clothing, sacred knowledge',
  vahana = 'Hamsa (Swan)'
WHERE name = 'Saraswati';

-- Update Vayu with detailed information
UPDATE hindu.deities 
SET 
  divine_attributes = '[
    {
      "name": "Wind God",
      "description": "Controller of air and life-giving breath",
      "significance": "Essential for all life and cosmic movement",
      "icon": "Wind"
    },
    {
      "name": "Prana Devata",
      "description": "God of life force and vital energy",
      "significance": "Sustains all breathing beings",
      "icon": "Heart"
    },
    {
      "name": "Father of Hanuman",
      "description": "Blessed Anjana with the mighty Hanuman",
      "significance": "Divine lineage of strength and devotion",
      "icon": "Mountain"
    }
  ]'::jsonb,
  mantras = '[
    {
      "sanskrit": "ओम् वायवे नमः",
      "transliteration": "Om Vayave Namah",
      "meaning": "Salutations to the Wind God",
      "purpose": "Seeking vitality and life energy",
      "chanting_time": "During pranayama and breathing exercises"
    },
    {
      "sanskrit": "वायुर्वै प्राणः",
      "transliteration": "Vayur Vai Pranah",
      "meaning": "Wind is indeed the life force",
      "purpose": "Recognizing the divine in breath and air",
      "chanting_time": "During meditation on breath"
    }
  ]'::jsonb,
  festivals = '[
    {
      "name": "Vayu Jayanti",
      "date": "Various regional dates",
      "description": "Celebration of the wind god",
      "significance": "Honoring the life-giving force of air"
    },
    {
      "name": "Hanuman Jayanti",
      "date": "Full moon day of Chaitra",
      "description": "Celebrating Vayus divine son",
      "significance": "Honoring the lineage of divine strength"
    }
  ]'::jsonb,
  sacred_places = '[
    {
      "name": "Hilltop Temples",
      "location": "Various mountainous regions",
      "description": "Temples in windy, elevated locations",
      "significance": "Places where Vayus presence is strongly felt"
    },
    {
      "name": "Hanuman Temples",
      "location": "Throughout India",
      "description": "Temples of Vayus son Hanuman",
      "significance": "Worship sites honoring Vayus divine lineage"
    }
  ]'::jsonb,
  consorts = '[]'::jsonb,
  children = '["Hanuman", "Bhima"]'::jsonb,
  parents = '[]'::jsonb,
  avatar_of = null,
  domain = 'Wind & Life Force',
  symbolism = 'Wind, breath, movement, life force, invisible presence',
  vahana = null
WHERE name = 'Vayu';