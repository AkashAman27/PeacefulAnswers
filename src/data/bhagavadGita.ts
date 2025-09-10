export interface Verse {
  number: number;
  sanskrit: string;
  transliteration: string;
  translation: string;
  // Optional localized fields
  translationHi?: string;
  explanation: string;
  explanationHi?: string;
  wordMeaning: Record<string, string>;
  wordMeaningHi?: Record<string, string>;
  significance?: string;
}

export interface Chapter {
  number: number;
  title: string;
  // Optional localized fields
  titleHi?: string;
  sanskrit: string;
  theme: string;
  themeHi?: string;
  summary: string;
  summaryHi?: string;
  keyThemes: string[];
  verses: Verse[];
  verseCount: number;
}

// Complete Bhagavad Gita Data - All 18 Chapters
export const bhagavadGitaData: Chapter[] = [
  // Chapter 1 - Complete
  {
    number: 1,
    title: "Arjuna's Dilemma",
    titleHi: "अर्जुन का विषाद",
    sanskrit: "अर्जुनविषादयोग",
    theme: "Crisis of Duty and Dharma",
    themeHi: "धर्म और कर्तव्य का संकट",
    summary: "The first chapter sets the stage for the entire Bhagavad Gita. On the battlefield of Kurukshetra, seeing his relatives, teachers, and friends on both sides of the war, Arjuna is overcome with compassion and moral confusion. This emotional and ethical crisis creates the perfect opportunity for Krishna to share the profound spiritual wisdom.",
    summaryHi: "पहला अध्याय पूरी भगवद्गीता की पृष्ठभूमि तैयार करता है। कुरुक्षेत्र के रण में अपने स्वजन, गुरु और मित्रों को दोनों पक्षों में देखकर अर्जुन करुणा और नैतिक उलझन से भर जाता है। यही भावनात्मक और नैतिक संकट श्रीकृष्ण के दिव्य ज्ञान के प्रकट होने का अवसर बनता है।",
    keyThemes: [
      "Dharmic duty versus personal emotions",
      "The nature of righteous action",
      "Compassion and its proper application", 
      "The role of a spiritual guide"
    ],
    verseCount: 47,
    verses: [
      {
        number: 1,
        sanskrit: "धृतराष्ट्र उवाच। धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः। मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय।।",
        transliteration: "dhṛtarāṣṭra uvāca | dharma-kṣetre kuru-kṣetre samavetā yuyutsavaḥ | māmakāḥ pāṇḍavāścaiva kimakurvata sañjaya ||",
        translation: "Dhritarashtra said: O Sanjaya, what did my sons and the sons of Pandu do when they assembled on the holy field of Kurukshetra, eager for battle?",
        translationHi: "धृतराष्ट्र बोले: हे संजय, धर्मक्षेत्र कुरुक्षेत्र में युद्ध की इच्छा से एकत्र हुए मेरे पुत्र और पाण्डु के पुत्रों ने क्या किया?",
        explanation: "This opening verse immediately establishes the setting and introduces the key players. The term 'dharma-kshetra' (field of dharma) suggests this is not merely a physical battlefield, but a place where righteousness will be determined.",
        wordMeaning: {
          "धर्मक्षेत्रे": "on the field of dharma/righteousness",
          "कुरुक्षेत्रे": "on the field of Kuru",
          "समवेता": "assembled", 
          "युयुत्सवः": "eager to fight",
          "मामकाः": "my sons",
          "पाण्डवाः": "the Pandavas"
        }
      },
      {
        number: 28,
        sanskrit: "अर्जुन उवाच। दृष्ट्वेमं स्वजनं कृष्ण युयुत्सुं समुपस्थितम्। सीदन्ति मम गात्राणि मुखं च परिशुष्यति।।",
        transliteration: "arjuna uvāca | dṛṣṭvemaṃ svajanaṃ kṛṣṇa yuyutsuṃ samupasthitam | sīdanti mama gātrāṇi mukhaṃ ca pariśuṣyati ||",
        translation: "Arjuna said: O Krishna, seeing my own kinsmen assembled here and eager for battle, my limbs are giving way and my mouth is drying up.",
        translationHi: "अर्जुन बोले: हे कृष्ण, यहाँ युद्ध के लिए उपस्थित अपने स्वजनों को देखकर मेरे अंग शिथिल हो रहे हैं और मुख सूख रहा है।",
        explanation: "Arjuna's physical and emotional reaction to seeing his relatives prepared for war. This verse shows how even great warriors can be overwhelmed when faced with moral dilemmas involving loved ones.",
        wordMeaning: {
          "दृष्ट्वा": "seeing",
          "स्वजनम्": "own kinsmen", 
          "युयुत्सुम्": "eager to fight",
          "समुपस्थितम्": "assembled",
          "सीदन्ति": "are giving way",
          "गात्राणि": "limbs",
          "मुखम्": "mouth",
          "परिशुष्यति": "is drying up"
        }
      },
      {
        number: 47,
        sanskrit: "एवमुक्त्वार्जुनः संख्ये रथोपस्थ उपाविशत्। विसृज्य सशरं चापं शोकसंविग्नमानसः।।",
        transliteration: "evam uktvārjunaḥ saṅkhye rathopastha upāviśat | visṛjya sa-śaraṃ cāpaṃ śoka-saṃvigna-mānasaḥ ||",
        translation: "Having spoken thus on the battlefield, Arjuna cast aside his bow and arrows and sat down on the chariot seat, his mind overwhelmed with grief.",
        translationHi: "इस प्रकार कहकर अर्जुन रणभूमि में अपना धनुष-बाण त्यागकर रथ में बैठ गया, उसका मन शोक से व्याकुल था।",
        explanation: "The concluding verse shows Arjuna's complete emotional breakdown. Despite being a great warrior, he is paralyzed by grief and moral confusion, setting the perfect stage for Krishna's divine teachings.",
        wordMeaning: {
          "एवम्": "thus",
          "उक्त्वा": "having spoken",
          "संख्ये": "on the battlefield",
          "रथोपस्थे": "on the chariot seat", 
          "उपाविशत्": "sat down",
          "विसृज्य": "casting aside",
          "सशरम्": "along with arrows",
          "चापम्": "bow",
          "शोकसंविग्नमानसः": "mind overwhelmed with grief"
        },
        significance: "Sets up Arjuna's crisis - the catalyst for Krishna's teachings"
      }
    ]
  },

  // Chapter 2 - The Foundation Chapter
  {
    number: 2,
    title: "The Eternal Soul",
    sanskrit: "सांख्ययोग", 
    theme: "Knowledge of the Eternal Self and Karma Yoga",
    summary: "Krishna begins His profound teachings by explaining the eternal nature of the soul and introducing Karma Yoga. This chapter contains the most fundamental verses of Hindu philosophy and establishes the bedrock principles that support all subsequent teachings.",
    keyThemes: [
      "The immortal nature of the Atman (soul)",
      "The temporary nature of the physical body",
      "Karma Yoga - the path of selfless action",
      "Achieving equanimity in pleasure and pain"
    ],
    verseCount: 72,
    verses: [
      {
        number: 1,
        sanskrit: "सञ्जय उवाच। तं तथा कृपयाविष्टमश्रुपूर्णाकुलेक्षणम्। विषीदन्तमिदं वाक्यमुवाच मधुसूदनः।।",
        transliteration: "sañjaya uvāca | taṃ tathā kṛpayāviṣṭam aśru-pūrṇākulekṣaṇam | viṣīdantam idaṃ vākyam uvāca madhusūdanaḥ ||",
        translation: "Sanjaya said: Seeing Arjuna filled with compassion, his eyes full of tears and despondent, Madhusudana (Krishna) spoke these words.",
        explanation: "This verse sets the stage for Krishna's divine teachings. Arjuna's compassionate nature, though admirable, has led to confusion about his duty. Krishna, as Madhusudana (destroyer of the demon Madhu), will now destroy Arjuna's ignorance.",
        wordMeaning: {
          "कृपया": "with compassion",
          "आविष्टम्": "filled",
          "अश्रुपूर्णाकुलेक्षणम्": "eyes full of tears and troubled",
          "विषीदन्तम्": "despondent",
          "मधुसूदनः": "Madhusudana (Krishna)"
        }
      },
      {
        number: 2,
        sanskrit: "श्रीभगवानुवाच। कुतस्त्वा कश्मलमिदं विषमे समुपस्थितम्। अनार्यजुष्टमस्वर्ग्यमकीर्तिकरमर्जुन।।",
        transliteration: "śrī-bhagavān uvāca | kutas tvā kaśmalam idaṃ viṣame samupasthitam | anārya-juṣṭam asvargyam akīrti-karam arjuna ||",
        translation: "The Supreme Lord said: My dear Arjuna, how have these impurities come upon you? They are not at all befitting a man who knows the value of life. They lead not to higher planets but to infamy.",
        explanation: "Krishna's opening words are direct and challenging. He calls Arjuna's hesitation an 'impurity' that is unworthy of someone seeking higher spiritual goals. This sets the tone for the spiritual instruction that follows.",
        wordMeaning: {
          "कुतः": "from where",
          "कश्मलम्": "impurities/weakness",
          "विषमे": "in this hour of crisis",
          "अनार्यजुष्टम्": "not befitting a noble person",
          "अस्वर्ग्यम्": "not leading to higher planets",
          "अकीर्तिकरम्": "causing infamy"
        }
      },
      {
        number: 3,
        sanskrit: "क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते। क्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप।।",
        transliteration: "klaibyaṃ mā sma gamaḥ pārtha naitat tvayi upapadyate | kṣudraṃ hṛdaya-daurbalyaṃ tyaktvottiṣṭha parantapa ||",
        translation: "O Partha, do not yield to this degrading impotence. It does not become you. Give up such petty weakness of heart and arise, O chastiser of enemies!",
        explanation: "Krishna uses strong language to shake Arjuna out of his despondency. He appeals to Arjuna's warrior nature and reminds him of his true identity as 'parantapa' (chastiser of enemies).",
        wordMeaning: {
          "क्लैब्यम्": "impotence/cowardice",
          "मा स्म गमः": "do not yield to",
          "न उपपद्यते": "does not become",
          "क्षुद्रम्": "petty",
          "हृदयदौर्बल्यम्": "weakness of heart",
          "त्यक्त्वा": "giving up",
          "उत्तिष्ठ": "arise",
          "परन्तप": "chastiser of enemies"
        }
      },
      {
        number: 4,
        sanskrit: "अर्जुन उवाच। कथं भीष्ममहं संख्ये द्रोणं च मधुसूदन। इषुभिः प्रतियोत्स्यामि पूजार्हावरिसूदन।।",
        transliteration: "arjuna uvāca | kathaṃ bhīṣmam ahaṃ saṅkhye droṇaṃ ca madhusūdana | iṣubhiḥ pratiyotsyāmi pūjārhāv ari-sūdana ||",
        translation: "Arjuna said: O Madhusudana, O killer of enemies, how can I counterattack with arrows in battle men like Bhishma and Drona, who are worthy of my worship?",
        explanation: "Arjuna expresses his moral dilemma - how can he fight against those who deserve his respect and reverence? This question touches the heart of dharmic conflict.",
        wordMeaning: {
          "कथम्": "how",
          "भीष्मम्": "Bhishma",
          "संख्ये": "in battle",
          "द्रोणम्": "Drona",
          "इषुभिः": "with arrows",
          "प्रतियोत्स्यामि": "shall I counterattack",
          "पूजार्हौ": "worthy of worship",
          "अरिसूदन": "O killer of enemies"
        }
      },
      {
        number: 5,
        sanskrit: "गुरूनहत्वा हि महानुभावान्श्रेयो भोक्तुं भैक्ष्यमपीह लोके। हत्वार्थकामांस्तु गुरूनिहैव भुञ्जीय भोगान्रुधिरप्रदिग्धान्।।",
        transliteration: "gurūn ahatvā hi mahānubhāvān śreyo bhoktuṃ bhaikṣyam apīha loke | hatvārtha-kāmāṃs tu gurūn ihaiva bhuñjīya bhogān rudhira-pradigdhān ||",
        translation: "It would be better to live in this world by begging than to enjoy life by killing these noble great souls, who are my teachers. Even though they are avaricious, they are nonetheless superiors.",
        explanation: "Arjuna argues that even a life of begging would be preferable to killing his revered teachers. This shows his noble character but also his attachment to social conventions over cosmic duty.",
        wordMeaning: {
          "गुरून्": "teachers",
          "अहत्वा": "not killing",
          "महानुभावान्": "great souls",
          "श्रेयः": "better",
          "भैक्ष्यम्": "begging",
          "अर्थकामान्": "desirous of wealth",
          "रुधिरप्रदिग्धान्": "blood-smeared"
        }
      },
      {
        number: 6,
        sanskrit: "न चैतद्विद्मः कतरन्नो गरीयो यद्वा जयेम यदि वा नो जयेयुः। यानेव हत्वा न जिजीविषाम स्ते अवस्थिताः प्रमुखे धार्तराष्ट्राः।।",
        transliteration: "na caitad vidmaḥ kataran no garīyo yad vā jayema yadi vā no jayeyuḥ | yān eva hatvā na jijīviṣāmas te 'vasthitāḥ pramukhe dhārtarāṣṭrāḥ ||",
        translation: "We do not know which would be better for us - conquering them or being conquered by them. The sons of Dhritarashtra, whom if we killed, we would not want to live, are standing before us.",
        explanation: "Arjuna expresses complete confusion about what would constitute victory. This verse shows the depth of his moral crisis - he cannot see any desirable outcome from the battle.",
        wordMeaning: {
          "न विद्मः": "we do not know",
          "कतरत्": "which",
          "गरीयः": "better",
          "यद्वा जयेम": "whether we conquer",
          "यदि वा जयेयुः": "or they conquer",
          "जिजीविषामः": "would want to live",
          "धार्तराष्ट्राः": "sons of Dhritarashtra"
        }
      },
      {
        number: 7,
        sanskrit: "कार्पण्यदोषोपहतस्वभावः पृच्छामि त्वां धर्मसम्मूढचेताः। यच्छ्रेयः स्यान्निश्चितं ब्रूहि तन्मे शिष्यस्तेऽहं शाधि मां त्वां प्रपन्नम्।।",
        transliteration: "kārpaṇya-doṣopahata-svabhāvaḥ pṛcchāmi tvāṃ dharma-sammūḍha-cetāḥ | yac chreyaḥ syān niścitaṃ brūhi tan me śiṣyas te 'haṃ śādhi māṃ tvāṃ prapannam ||",
        translation: "My nature is overcome by weakness and confusion about dharma. I ask You to tell me decisively what is best for me. I am Your disciple; please instruct me who has surrendered to You.",
        explanation: "This crucial verse marks Arjuna's transformation from friend to disciple. He acknowledges his confusion and formally surrenders to Krishna as his spiritual teacher, setting the stage for the Gita's teachings.",
        wordMeaning: {
          "कार्पण्यदोषोपहतस्वभावः": "nature overcome by the weakness of pity",
          "धर्मसम्मूढचेताः": "mind confused about dharma",
          "यत् श्रेयः स्यात्": "what would be best",
          "निश्चितम्": "decisively",
          "शिष्यः": "disciple",
          "शाधि": "please instruct",
          "प्रपन्नम्": "surrendered"
        },
        significance: "Arjuna's formal surrender - beginning of spiritual instruction"
      },
      {
        number: 8,
        sanskrit: "न हि प्रपश्यामि ममापनुद्यात्यत्शोकमुच्छोषणमिन्द्रियाणाम्। अवाप्य भूमावसपत्नमृद्धं राज्यं सुराणामपि चाधिपत्यम्।।",
        transliteration: "na hi prapaśyāmi mamāpanudyād yac chokam ucchoṣaṇam indriyāṇām | avāpya bhūmāv asapatnam ṛddhaṃ rājyaṃ surāṇām api cādhipatyam ||",
        translation: "I do not see how I could dispel this grief that is drying up my senses, even if I were to win unrivaled and prosperous sovereignty over the earth, or even lordship over the gods.",
        explanation: "Arjuna's grief runs so deep that even the greatest worldly achievements seem meaningless. This shows that his crisis is not merely about external circumstances but touches his very soul.",
        wordMeaning: {
          "न प्रपश्यामि": "I do not see",
          "अपनुद्यात्": "could dispel",
          "शोकम्": "grief",
          "उच्छोषणम्": "drying up",
          "इन्द्रियाणाम्": "of the senses",
          "असपत्नम्": "unrivaled",
          "ऋद्धम्": "prosperous",
          "सुराणाम्": "of the gods",
          "अधिपत्यम्": "lordship"
        }
      },
      {
        number: 9,
        sanskrit: "सञ्जय उवाच। एवमुक्त्वा हृषीकेशं गुडाकेशः परन्तप। न योत्स्य इति गोविन्दमुक्त्वा तूष्णीं बभूव ह।।",
        transliteration: "sañjaya uvāca | evam uktvā hṛṣīkeśaṃ guḍākeśaḥ parantapaḥ | na yotsya iti govindam uktvā tūṣṇīṃ babhūva ha ||",
        translation: "Sanjaya said: Having spoken thus to Hrishikesha, Gudakesha, the chastiser of enemies, said 'I will not fight' to Govinda and fell silent.",
        explanation: "After expressing his dilemma, Arjuna makes his decision to abstain from fighting and falls silent. This moment of silence precedes Krishna's profound teachings.",
        wordMeaning: {
          "एवम् उक्त्वा": "having spoken thus",
          "हृषीकेशम्": "to Hrishikesha (Krishna)",
          "गुडाकेशः": "Gudakesha (Arjuna)",
          "न योत्स्ये": "I will not fight",
          "गोविन्दम्": "to Govinda (Krishna)",
          "तूष्णीम्": "silent",
          "बभूव": "became"
        }
      },
      {
        number: 10,
        sanskrit: "तमुवाच हृषीकेशः प्रहसन्निव भारत। सेनयोरुभयोर्मध्ये विषीदन्तमिदं वचः।।",
        transliteration: "tam uvāca hṛṣīkeśaḥ prahasan niva bhārata | senayor ubhayor madhye viṣīdantam idaṃ vacaḥ ||",
        translation: "O Bharata, at that time Krishna, smiling as it were, spoke these words to the grief-stricken Arjuna, who was situated between the two armies.",
        explanation: "Krishna's smile suggests His compassionate understanding of Arjuna's condition and His confidence in the wisdom He is about to impart. The setting between the armies emphasizes the cosmic nature of this teaching.",
        wordMeaning: {
          "तम् उवाच": "spoke to him",
          "प्रहसन् इव": "as if smiling",
          "सेनयोः उभयोः मध्ये": "between both armies",
          "विषीदन्तम्": "to the grief-stricken",
          "वचः": "words"
        }
      },
      {
        number: 11,
        sanskrit: "श्रीभगवानुवाच। अशोच्यानन्वशोचस्त्वं प्रज्ञावादांश्च भाषसे। गतासूनगतासूंश्च नानुशोचन्ति पण्डिताः।।",
        transliteration: "śrī-bhagavān uvāca | aśocyān anvaśocas tvaṃ prajñā-vādāṃś ca bhāṣase | gatāsūn agatāsūṃś ca nānuśocanti paṇḍitāḥ ||",
        translation: "The Supreme Lord said: You grieve for those who should not be grieved for, yet you speak words of wisdom. The wise do not mourn for the living or the dead.",
        explanation: "Krishna begins by gently pointing out the contradiction in Arjuna's behavior - speaking wisdom while being overwhelmed by attachment. True wisdom lies in understanding the eternal nature of consciousness.",
        wordMeaning: {
          "अशोच्यान्": "those not to be grieved for",
          "अन्वशोचः": "you grieve",
          "प्रज्ञावादान्": "words of wisdom", 
          "गतासून्": "the dead",
          "अगतासून्": "the living",
          "पण्डिताः": "the wise"
        },
        significance: "Foundation verse establishing body-soul distinction"
      },
      {
        number: 12,
        sanskrit: "न त्वेवाहं जातु नासं न त्वं नेमे जनाधिपाः। न चैव न भविष्यामः सर्वे वयमतः परम्।।",
        transliteration: "na tv evāhaṃ jātu nāsaṃ na tvaṃ neme janādhipāḥ | na caiva na bhaviṣyāmaḥ sarve vayam ataḥ param ||",
        translation: "Never was there a time when I did not exist, nor you, nor all these kings; nor in the future shall any of us cease to be.",
        explanation: "Krishna establishes the eternal nature of the soul. This verse counters the fear of death by revealing that existence is continuous and eternal - we have always existed and always will exist.",
        wordMeaning: {
          "न जातु नासम्": "never did not exist",
          "न त्वम्": "nor you",
          "न इमे": "nor these",
          "जनाधिपाः": "kings",
          "न भविष्यामः": "shall not exist",
          "अतः परम्": "in the future"
        }
      },
      {
        number: 13,
        sanskrit: "देहिनोऽस्मिन्यथा देहे कौमारं यौवनं जरा। तथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति।।",
        transliteration: "dehino 'smin yathā dehe kaumāraṃ yauvanaṃ jarā | tathā dehāntara-prāptir dhīras tatra na muhyati ||",
        translation: "As the embodied soul continuously passes through childhood, youth and old age in this body, so does it pass into another body at death. The wise are not deluded by this.",
        explanation: "A beautiful analogy explaining reincarnation. Just as we don't grieve when a child becomes a youth, we shouldn't grieve when the soul changes bodies at death. The soul remains constant while bodies change.",
        wordMeaning: {
          "देहिनः": "of the embodied soul",
          "यथा": "as",
          "देहे": "in the body",
          "कौमारम्": "childhood",
          "यौवनम्": "youth", 
          "जरा": "old age",
          "देहान्तरप्राप्तिः": "attaining another body",
          "धीरः": "the wise person",
          "न मुह्यति": "is not deluded"
        },
        significance: "Explains reincarnation through logical analogy"
      },
      {
        number: 14,
        sanskrit: "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः। आगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत।।",
        transliteration: "mātrā-sparśās tu kaunteya śītoṣṇa-sukha-duḥkha-dāḥ | āgamāpāyino 'nityās tāṃs titikṣasva bhārata ||",
        translation: "O son of Kunti, the contact of the senses with their objects gives rise to cold, heat, pleasure and pain. They are impermanent; they come and go. Therefore, tolerate them bravely, O Bharata.",
        explanation: "Krishna teaches that sensory experiences are temporary and should be tolerated with equanimity. This is fundamental training for spiritual development - learning to remain undisturbed by changing conditions.",
        wordMeaning: {
          "मात्रास्पर्शाः": "contact of senses with objects",
          "शीतोष्णसुखदुःखदाः": "giving cold, heat, pleasure and pain",
          "आगमापायिनः": "coming and going",
          "अनित्याः": "impermanent",
          "तितिक्षस्व": "tolerate"
        }
      },
      {
        number: 15,
        sanskrit: "यं हि न व्यथयन्त्येते पुरुषं पुरुषर्षभ। समदुःखसुखं धीरं सो मृत्युराय कल्पते।।",
        transliteration: "yaṃ hi na vyathayanty ete puruṣaṃ puruṣarṣabha | sama-duḥkha-sukhaṃ dhīraṃ so 'mṛtatvāya kalpate ||",
        translation: "O best among men, the person who is not disturbed by these changes, who is steady in both pleasure and pain, becomes eligible for liberation.",
        explanation: "This verse describes the ideal balanced person who has achieved equanimity. Such a person, being unmoved by dualities, becomes fit for immortality or liberation from the cycle of birth and death.",
        wordMeaning: {
          "न व्यथयन्ति": "do not disturb",
          "पुरुषर्षभ": "O best among men",
          "समदुःखसुखम्": "equal in pain and pleasure",
          "धीरम्": "steady person",
          "अमृतत्वाय कल्पते": "becomes eligible for immortality"
        }
      },
      {
        number: 16,
        sanskrit: "नासतो विद्यते भावो नाभावो विद्यते सतः। उभयोरपि दृष्टोऽन्तस्त्वनयोस्तत्त्वदर्शिभिः।।",
        transliteration: "nāsato vidyate bhāvo nābhāvo vidyate sataḥ | ubhayor api dṛṣṭo 'ntas tv anayos tattva-darśibhiḥ ||",
        translation: "The unreal has no existence; the real never ceases to be. The truth about both has been seen by the seers of truth.",
        explanation: "This profound verse establishes the fundamental distinction between the temporary and the eternal, the real and the unreal. It's a cornerstone of Vedantic philosophy - what is real (consciousness) cannot be destroyed, and what is unreal (matter) has no permanent existence.",
        wordMeaning: {
          "असतः": "of the unreal",
          "न विद्यते भावः": "there is no existence",
          "सतः": "of the real",
          "न अभावः विद्यते": "there is no non-existence",
          "उभयोः": "of both",
          "दृष्टः अन्तः": "the truth has been seen",
          "तत्त्वदर्शिभिः": "by seers of truth"
        },
        significance: "Fundamental distinction between real and unreal"
      },
      {
        number: 17,
        sanskrit: "अविनाशि तु तद्विद्धि येन सर्वमिदं ततम्। विनाशमव्ययस्यास्य न कश्चित्कर्तुमर्हति।।",
        transliteration: "avināśi tu tad viddhi yena sarvam idaṃ tatam | vināśam avyayasyāsya na kaścit kartum arhati ||",
        translation: "Know that which pervades the entire body to be indestructible. No one can destroy this imperishable soul.",
        explanation: "Krishna reveals the indestructible nature of the soul that pervades the entire body. This consciousness that gives life to the body cannot be destroyed by any force or weapon.",
        wordMeaning: {
          "अविनाशि": "indestructible",
          "तत् विद्धि": "know that",
          "येन ततम्": "by which pervaded",
          "सर्वम् इदम्": "all this",
          "विनाशम्": "destruction",
          "अव्ययस्य": "of the imperishable",
          "न कश्चित् कर्तुम् अर्हति": "no one can accomplish"
        }
      },
      {
        number: 18,
        sanskrit: "अन्तवन्त इमे देहा नित्यस्योक्ताः शरीरिणः। अनाशिनोऽप्रमेयस्य तस्माद्युध्यस्व भारत।।",
        transliteration: "antavanta ime dehā nityasyoktāḥ śarīriṇaḥ | anāśino 'prameyasya tasmād yudhyasva bhārata ||",
        translation: "These bodies are said to have an end, but the embodied soul is eternal, indestructible and incomprehensible. Therefore, fight, O Bharata.",
        explanation: "Krishna concludes this section by urging action. Since only the body dies while the soul is eternal, there is no real loss in performing one's duty. This knowledge should inspire fearless action.",
        wordMeaning: {
          "अन्तवन्तः": "having an end",
          "इमे देहाः": "these bodies",
          "नित्यस्य": "of the eternal",
          "शरीरिणः": "embodied soul",
          "अनाशिनः": "indestructible",
          "अप्रमेयस्य": "incomprehensible",
          "तस्मात्": "therefore",
          "युध्यस्व": "fight"
        }
      },
      {
        number: 19,
        sanskrit: "य एनं वेत्ति हन्तारं यश्चैनं मन्यते हतम्। उभौ तौ न विजानीतो नायं हन्ति न हन्यते।।",
        transliteration: "ya enaṃ vetti hantāraṃ yaś cainaṃ manyate hatam | ubhau tau na vijānīto nāyaṃ hanti na hanyate ||",
        translation: "One who thinks the soul can kill and one who thinks it can be killed - both are ignorant. The soul neither kills nor can it be killed.",
        explanation: "This verse eliminates the misconception about killing and being killed. The soul, being the eternal principle, can neither perform the act of killing nor be killed. Actions belong to the body level, not the soul level.",
        wordMeaning: {
          "य एनम् वेत्ति हन्तारम्": "who thinks this kills",
          "यः एनम् मन्यते हतम्": "who thinks this is killed",
          "उभौ तौ न विजानीतः": "both of them do not know",
          "न अयम् हन्ति": "this does not kill",
          "न हन्यते": "nor is it killed"
        }
      },
      {
        number: 20,
        sanskrit: "न जायते म्रियते वा कदाचिन्नायं भूत्वा भविता वा न भूयः। अजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे।।",
        transliteration: "na jāyate mriyate vā kadācin nāyaṃ bhūtvā bhavitā vā na bhūyaḥ | ajo nityaḥ śāśvato 'yaṃ purāṇo na hanyate hanyamāne śarīre ||",
        translation: "The soul is never born nor does it die; having come into being once, it never ceases to be. It is unborn, eternal, permanent, and primeval. It is not destroyed when the body is destroyed.",
        explanation: "This is the most celebrated verse in the Gita, describing six fundamental qualities of the Atman: unborn, eternal, permanent, primeval, indestructible, and indivisible. It completely demolishes the fear of death.",
        wordMeaning: {
          "न जायते": "is never born",
          "म्रियते": "dies", 
          "कदाचित्": "at any time",
          "अजः": "unborn",
          "नित्यः": "eternal",
          "शाश्वतः": "permanent", 
          "पुराणः": "ancient/primeval",
          "न हन्यते": "is not destroyed",
          "हन्यमाने शरीरे": "when the body is destroyed"
        },
        significance: "Most famous verse describing the eternal soul"
      },
      {
        number: 21,
        sanskrit: "वेदाविनाशिनं नित्यं य एनमजमव्ययम्। कथं स पुरुषः पार्थ कं घातयति हन्ति कम्।।",
        transliteration: "vedāvināśinaṃ nityaṃ ya enam ajam avyayam | kathaṃ sa puruṣaḥ pārtha kaṃ ghātayati hanti kam ||",
        translation: "O Partha, how can a person who knows the soul to be indestructible, eternal, unborn and immutable, kill anyone or cause anyone to kill?",
        explanation: "Krishna poses a rhetorical question to emphasize that one who truly understands the nature of the soul cannot be a killer. Real knowledge of the soul's eternal nature naturally leads to non-violence in consciousness.",
        wordMeaning: {
          "वेदाविनाशिनम्": "knows as indestructible",
          "नित्यम्": "eternal",
          "अजम्": "unborn",
          "अव्ययम्": "immutable",
          "कथम् स": "how can he",
          "कम् घातयति": "whom does he kill",
          "हन्ति कम्": "kills whom"
        }
      },
      {
        number: 22,
        sanskrit: "वासांसि जीर्णानि यथा विहाय नवानि गृह्णाति नरोऽपराणि। तथा शरीराणि विहाय जीर्णान्यन्यानि संयाति नवानि देही।।",
        transliteration: "vāsāṃsi jīrṇāni yathā vihāya navāni gṛhṇāti naro 'parāṇi | tathā śarīrāṇi vihāya jīrṇāny anyāni saṃyāti navāni dehī ||",
        translation: "As a person puts on new garments, giving up old ones, the soul similarly accepts new material bodies, giving up the old and useless ones.",
        explanation: "This beautiful analogy compares changing bodies to changing clothes. Just as we don't grieve when discarding old clothes for new ones, we shouldn't grieve when the soul changes bodies. It's a natural process of renewal.",
        wordMeaning: {
          "वासांसि जीर्णानि": "old garments",
          "विहाय": "giving up",
          "नवानि गृह्णाति": "takes new ones",
          "नरः": "person",
          "शरीराणि": "bodies",
          "जीर्णानि": "old/worn out",
          "देही": "embodied soul",
          "संयाति": "accepts"
        },
        significance: "Famous garment analogy for reincarnation"
      },
      {
        number: 23,
        sanskrit: "नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः। न चैनं क्लेदयन्त्यापो न शोषयति मारुतः।।",
        transliteration: "nainaṃ chindanti śastrāṇi nainaṃ dahati pāvakaḥ | na cainaṃ kledayanty āpo na śoṣayati mārutaḥ ||",
        translation: "This soul cannot be cut to pieces by weapons, nor burned by fire, nor moistened by water, nor withered by the wind.",
        explanation: "Krishna describes the invulnerability of the soul to all physical forces. No material element or weapon can affect the spiritual essence. This establishes the complete transcendence of consciousness over matter.",
        wordMeaning: {
          "न एनम् छिन्दन्ति": "do not cut this",
          "शस्त्राणि": "weapons",
          "न दहति": "does not burn",
          "पावकः": "fire",
          "न क्लेदयन्ति": "do not moisten",
          "आपः": "water",
          "न शोषयति": "does not dry",
          "मारुतः": "wind"
        }
      },
      {
        number: 24,
        sanskrit: "अच्छेद्योऽयमदाह्योऽयमक्लेद्योऽशोष्य एव च। नित्यः सर्वगतः स्थाणुरचलोऽयं सनातनः।।",
        transliteration: "acchedyo 'yam adāhyo 'yam akledyo 'śoṣya eva ca | nityaḥ sarva-gataḥ sthāṇur acalo 'yaṃ sanātanaḥ ||",
        translation: "This individual soul is unbreakable, insoluble, and can be neither burned nor dried. It is everlasting, present everywhere, unchangeable, immovable and eternally the same.",
        explanation: "Krishna summarizes the eight fundamental qualities of the soul: unbreakable, insoluble, unburnable, undryable, everlasting, omnipresent, unchangeable, and immovable. These attributes establish its complete transcendence over material nature.",
        wordMeaning: {
          "अच्छेद्यः": "unbreakable",
          "अदाह्यः": "unburnable",
          "अक्लेद्यः": "insoluble",
          "अशोष्यः": "undryable",
          "नित्यः": "eternal",
          "सर्वगतः": "omnipresent",
          "स्थाणुः": "unchangeable",
          "अचलः": "immovable",
          "सनातनः": "eternal"
        }
      },
      {
        number: 25,
        sanskrit: "अव्यक्तोऽयमचिन्त्योऽयमविकार्य उच्यते। तस्मादेवं विदित्वैनं नानुशोचितुमर्हसि।।",
        transliteration: "avyakto 'yam acintyo 'yam avikārya ucyate | tasmād evaṃ viditvainalṃ nānuśocitum arhasi ||",
        translation: "It is said that the soul is invisible, inconceivable and immutable. Knowing this, you should not grieve for the body.",
        explanation: "Krishna concludes this section on the soul's nature by stating that it is beyond sensory perception, mental conception, and material change. Having this knowledge, grief becomes irrational.",
        wordMeaning: {
          "अव्यक्तः": "invisible/unmanifest",
          "अचिन्त्यः": "inconceivable",
          "अविकार्यः": "immutable",
          "उच्यते": "is said",
          "तस्मात् एवम्": "therefore thus",
          "विदित्वा एनम्": "knowing this",
          "न अनुशोचितुम् अर्हसि": "you should not grieve"
        }
      },
      {
        number: 26,
        sanskrit: "अथ चैनं नित्यजातं नित्यं वा मन्यसे मृतम्। तथापि त्वं महाबाहो नैवं शोचितुमर्हसि।।",
        transliteration: "atha cainaṃ nitya-jātaṃ nityaṃ vā manyase mṛtam | tathāpi tvaṃ mahā-bāho naivaṃ śocitum arhasi ||",
        translation: "If, however, you think the soul is perpetually born and dies perpetually, then too, O mighty-armed Arjuna, you should not lament.",
        explanation: "Krishna presents an alternative argument - even if one believes in constant birth and death (materialistic view), grief is still pointless because it's the natural order. Either way, lamentation serves no purpose.",
        wordMeaning: {
          "अथ च": "if however",
          "एनम् नित्यजातम्": "this perpetually born",
          "नित्यम् मृतम्": "perpetually dying",
          "मन्यसे": "you think",
          "तथापि": "even then",
          "महाबाहो": "O mighty-armed",
          "न शोचितुम् अर्हसि": "you should not lament"
        }
      },
      {
        number: 27,
        sanskrit: "जातस्य हि ध्रुवो मृत्युर्ध्रुवं जन्म मृतस्य च। तस्मादपरिहार्येऽर्थे न त्वं शोचितुमर्हसि।।",
        transliteration: "jātasya hi dhruvo mṛtyur dhruvaṃ janma mṛtasya ca | tasmād aparihārye 'rthe na tvaṃ śocitum arhasi ||",
        translation: "For one who has taken birth, death is certain; and for one who is dead, birth is certain. Therefore, in the unavoidable discharge of your duty, you should not lament.",
        explanation: "Krishna states the inevitable cycle of birth and death. Since this is the natural law, grief is pointless. What's unavoidable should be accepted with equanimity while performing one's prescribed duties.",
        wordMeaning: {
          "जातस्य": "for one who has taken birth",
          "ध्रुवः मृत्युः": "death is certain",
          "मृतस्य": "for the dead",
          "ध्रुवम् जन्म": "birth is certain",
          "अपरिहार्ये अर्थे": "in unavoidable matter",
          "न शोचितुम् अर्हसि": "you should not lament"
        }
      },
      {
        number: 28,
        sanskrit: "अव्यक्तादीनि भूतानि व्यक्तमध्यानि भारत। अव्यक्तनिधनान्येव तत्र का परिदेवना।।",
        transliteration: "avyaktādīni bhūtāni vyakta-madhyāni bhārata | avyakta-nidhanāny eva tatra kā paridevanā ||",
        translation: "All created beings are unmanifest before birth, manifest in the middle state, and again unmanifest when annihilated. So what need is there for lamentation?",
        explanation: "Krishna points out that all beings have three states: unmanifest before birth, manifest during life, and unmanifest after death. Since only the middle state is visible, why lament over natural transitions?",
        wordMeaning: {
          "अव्यक्तादीनि": "unmanifest in the beginning",
          "भूतानि": "beings",
          "व्यक्तमध्यानि": "manifest in the middle",
          "अव्यक्तनिधनानि": "unmanifest at the end",
          "तत्र का परिदेवना": "what is there to lament"
        }
      },
      {
        number: 29,
        sanskrit: "आश्चर्यवत्पश्यति कश्चिदेनमाश्चर्यवद्वदति तथैव चान्यः। आश्चर्यवच्चैनमन्यः शृणोति श्रुत्वाप्येनं वेद न चैव कश्चित्।।",
        transliteration: "āścarya-vat paśyati kaścid enam āścarya-vad vadati tathaiva cānyaḥ | āścarya-vac cainam anyaḥ śṛṇoti śrutvāpy enaṃ veda na caiva kaścit ||",
        translation: "Some look upon the soul as amazing, some describe it as amazing, and some hear of it as amazing, while others, even after hearing about it, cannot understand it at all.",
        explanation: "Krishna describes the wonderful and mysterious nature of the soul. Even when people see, speak about, or hear about the soul, very few truly understand its nature. This emphasizes the extraordinary nature of spiritual knowledge.",
        wordMeaning: {
          "आश्चर्यवत् पश्यति": "sees as amazing",
          "कश्चित् एनम्": "someone this",
          "आश्चर्यवत् वदति": "speaks of as amazing",
          "शृणोति": "hears",
          "श्रुत्वा अपि": "even after hearing",
          "वेद न": "does not know"
        }
      },
      {
        number: 30,
        sanskrit: "देही नित्यमवध्योऽयं देहे सर्वस्य भारत। तस्मात्सर्वाणि भूतानि न त्वं शोचितुमर्हसि।।",
        transliteration: "dehī nityam avadhyo 'yaṃ dehe sarvasya bhārata | tasmāt sarvāṇi bhūtāni na tvaṃ śocitum arhasi ||",
        translation: "O descendant of Bharata, the soul within the body is eternal and can never be slain. Therefore, you need not grieve for any living being.",
        explanation: "Krishna concludes this philosophical section by reaffirming the soul's indestructibility in all beings. Since the essential nature of all life is eternal and cannot be killed, grief for any creature is unnecessary.",
        wordMeaning: {
          "देही": "the embodied soul",
          "नित्यम् अवध्यः": "eternally indestructible",
          "देहे सर्वस्य": "in the body of all",
          "तस्मात्": "therefore",
          "सर्वाणि भूतानि": "all living beings",
          "न शोचितुम् अर्हसि": "you should not grieve"
        }
      },
      {
        number: 31,
        sanskrit: "स्वधर्ममपि चावेक्ष्य न विकम्पितुमर्हसि। धर्म्याद्धि युद्धाच्छ्रेयोऽन्यत्क्षत्रियस्य नास्ति।।",
        transliteration: "sva-dharmam api cāvekṣya na vikampitum arhasi | dharmyād dhi yuddhāc chreyo 'nyat kṣatriyasya nāsti ||",
        translation: "Considering your specific duty as a warrior, you should not waver. For a warrior, there is no better engagement than fighting for upholding dharma.",
        explanation: "Krishna now shifts to practical dharma. Apart from the philosophical reasons, Arjuna has a specific duty as a warrior. Fighting for righteousness is the highest dharma for a Kshatriya.",
        wordMeaning: {
          "स्वधर्मम्": "own duty",
          "अपि च आवेक्ष्य": "also considering",
          "न विकम्पितुम् अर्हसि": "you should not waver",
          "धर्म्यात् युद्धात्": "than righteous war",
          "श्रेयः अन्यत्": "better engagement",
          "क्षत्रियस्य न अस्ति": "for a warrior does not exist"
        }
      },
      {
        number: 32,
        sanskrit: "यदृच्छया चोपपन्नं स्वर्गद्वारमपावृतम्। सुखिनः क्षत्रियाः पार्थ लभन्ते युद्धमीदृशम्।।",
        transliteration: "yadṛcchayā copapannaṃ svarga-dvāram apāvṛtam | sukhināḥ kṣatriyāḥ pārtha labhante yuddham īdṛśam ||",
        translation: "O Partha, happy are the warriors who obtain such a battle, arriving unsought like an open door to heaven.",
        explanation: "Krishna points out how fortunate warriors are when they get an opportunity to fight for righteousness. Such a battle comes as divine providence and opens the gates of heaven for those who fight and die for dharma.",
        wordMeaning: {
          "यदृच्छया": "by chance/providence",
          "उपपन्नम्": "arrived",
          "स्वर्गद्वारम्": "door to heaven",
          "अपावृतम्": "open",
          "सुखिनः क्षत्रियाः": "happy warriors",
          "लभन्ते": "obtain",
          "युद्धम् ईदृशम्": "such a battle"
        }
      },
      {
        number: 33,
        sanskrit: "अथ चेत्त्वमिमं धर्म्यं संग्रामं न करिष्यसि। ततः स्वधर्मं कीर्तिं च हित्वा पापमवाप्स्यसि।।",
        transliteration: "atha cet tvam imaṃ dharmyāṃ saṅgrāmaṃ na kariṣyasi | tataḥ sva-dharmaṃ kīrtiṃ ca hitvā pāpam avāpsyasi ||",
        translation: "If, however, you do not perform your dharmic duty of fighting, then you will certainly incur sin for neglecting your duties and reputation.",
        explanation: "Krishna warns Arjuna of the consequences of avoiding his duty. Not performing one's dharma when called upon leads to sin and loss of reputation - both spiritual and worldly consequences follow.",
        wordMeaning: {
          "अथ चेत्": "if however",
          "इमम् धर्म्यम्": "this righteous",
          "संग्रामम्": "battle",
          "न करिष्यसि": "you will not perform",
          "ततः": "then",
          "स्वधर्मम्": "own duty",
          "कीर्तिम्": "reputation",
          "हित्वा": "abandoning",
          "पापम् अवाप्स्यसि": "you will incur sin"
        }
      },
      {
        number: 38,
        sanskrit: "सुखदुःखे समे कृत्वा लाभालाभौ जयाजयौ। ततो युद्धाय युज्यस्व नैवं पापमवाप्स्यसि।।",
        transliteration: "sukha-duḥkhe same kṛtvā lābhālābhau jayājayau | tato yuddāya yujyasva naivaṃ pāpam avāpsyasi ||",
        translation: "Fight for the sake of fighting, without considering happiness or distress, loss or gain, victory or defeat. By so doing, you shall never incur sin.",
        explanation: "This verse introduces the concept of nishkama karma - desireless action. When we act without attachment to results, maintaining equanimity in all dualities, we remain free from the bondage of sin and merit.",
        wordMeaning: {
          "सुखदुःखे समे": "treating pleasure and pain equally",
          "लाभालाभौ": "gain and loss",
          "जयाजयौ": "victory and defeat",
          "ततः": "then",
          "युद्धाय युज्यस्व": "prepare to fight",
          "न एवम् पापम् अवाप्स्यसि": "you will not incur sin"
        },
        significance: "Introduction to nishkama karma - desireless action"
      },
      {
        number: 39,
        sanskrit: "एषा तेऽभिहिता सांख्ये बुद्धिर्योगे त्विमां शृणु। बुद्ध्या युक्तो यया पार्थ कर्मबन्धं प्रहास्यसि।।",
        transliteration: "eṣā te 'bhihitā sāṅkhye buddhir yoge tv imāṃ śṛṇu | buddhyā yukto yayā pārtha karma-bandhaṃ prahāsyasi ||",
        translation: "Thus far I have described the analytical knowledge of Sankhya. Now listen as I explain the practical knowledge of Yoga, by which you can work without bondage.",
        explanation: "Krishna makes a transition from the theoretical knowledge of the soul (Sankhya) to the practical application (Yoga). This marks the beginning of his teachings on Karma Yoga - the path of liberation through action.",
        wordMeaning: {
          "एषा बुद्धिः": "this knowledge",
          "अभिहिता": "described",
          "सांख्ये": "in Sankhya",
          "योगे": "in Yoga",
          "इमाम् शृणु": "now listen to this",
          "बुद्ध्या युक्तः": "endowed with this knowledge",
          "कर्मबन्धम् प्रहास्यसि": "you can give up bondage of action"
        },
        significance: "Transition from Sankhya to Karma Yoga"
      },
      {
        number: 47,
        sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि।।",
        transliteration: "karmaṇy evādhikāras te mā phaleṣu kadācana | mā karma-phala-hetur bhūr mā te saṅgo 'stv akarmaṇi ||",
        translation: "You have the right to perform your prescribed duties, but never to the fruits of your actions. Never consider yourself to be the cause of the results, nor be attached to inaction.",
        explanation: "The most practical and transformative verse in the Gita, establishing Karma Yoga. This teaching liberates us from anxiety about outcomes while ensuring purposeful engagement in action.",
        wordMeaning: {
          "कर्मणि": "in action",
          "एव": "only",
          "अधिकारः": "right/authority",
          "मा फलेषु": "never in fruits",
          "कर्मफलहेतुः": "cause of fruits of action",
          "सङ्गः": "attachment",
          "अकर्मणि": "to inaction"
        },
        significance: "Core principle of Karma Yoga - most practical verse for daily life"
      },
      {
        number: 48,
        sanskrit: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय। सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते।।",
        transliteration: "yogasthaḥ kuru karmāṇi saṅgaṃ tyaktvā dhanañjaya | siddhy-asiddhyoḥ samo bhūtvā samatvaṃ yoga ucyate ||",
        translation: "Established in yoga, perform actions abandoning attachment, O Arjuna. Be equipoised in success and failure. This equanimity is called yoga.",
        explanation: "Krishna defines yoga as equanimity - maintaining balance in success and failure. This mental equilibrium is the practical application of spiritual wisdom in daily activities.",
        wordMeaning: {
          "योगस्थः": "established in yoga",
          "कुरु": "perform", 
          "कर्माणि": "actions",
          "सङ्गम्": "attachment",
          "त्यक्त्वा": "abandoning",
          "सिद्ध्यसिद्ध्योः": "in success and failure",
          "समः": "equipoised", 
          "समत्वम्": "equanimity",
          "योगः": "yoga",
          "उच्यते": "is called"
        },
        significance: "Defines yoga as equanimity in action"
      },
      {
        number: 54,
        sanskrit: "अर्जुन उवाच। स्थितप्रज्ञस्य का भाषा समाधिस्थस्य केशव। स्थितधीः किं प्रभाषेत किमासीत व्रजेत किम्।।",
        transliteration: "arjuna uvāca | sthita-prajñasya kā bhāṣā samādhi-sthasya keśava | sthita-dhīḥ kiṃ prabhāṣeta kim āsīta vrajeta kim ||",
        translation: "Arjuna said: O Krishna, what are the symptoms of one whose consciousness is thus merged in transcendence? How does he speak, and what is his language? How does he sit, and how does he walk?",
        explanation: "Arjuna asks about the practical characteristics of an enlightened person. This leads to Krishna's famous description of the sthitaprajna - one of steady wisdom who has achieved self-realization.",
        wordMeaning: {
          "स्थितप्रज्ञस्य": "of one of steady wisdom",
          "का भाषा": "what is the description",
          "समाधिस्थस्य": "of one situated in trance",
          "स्थितधीः": "one of steady intelligence",
          "किम् प्रभाषेत": "how does he speak",
          "किमासीत": "how does he sit",
          "व्रजेत किम्": "how does he walk"
        },
        significance: "Arjuna's question about the enlightened person"
      },
      {
        number: 55,
        sanskrit: "श्रीभगवानुवाच। प्रजहाति यदा कामान्सर्वान्पार्थ मनोगतान्। आत्मन्येवात्मना तुष्टः स्थितप्रज्ञस्तदोच्यते।।",
        transliteration: "śrī-bhagavān uvāca | prajahāti yadā kāmān sarvān pārtha mano-gatān | ātmany evātmanā tuṣṭaḥ sthita-prajñas tadocyate ||",
        translation: "The Supreme Lord said: O Partha, when a man gives up all varieties of desires for sense gratification, which arise from mental concoction, and when his mind finds satisfaction in the self alone, then he is said to be in pure transcendental consciousness.",
        explanation: "Krishna begins his description of the enlightened person. The first characteristic is freedom from material desires and finding complete satisfaction within oneself through self-realization.",
        wordMeaning: {
          "प्रजहाति": "gives up",
          "यदा कामान् सर्वान्": "when all desires",
          "मनोगतान्": "of mental concoction",
          "आत्मनि एव": "in the self alone",
          "आत्मना तुष्टः": "satisfied by the self",
          "स्थितप्रज्ञः": "of steady wisdom",
          "तदा उच्यते": "then he is said to be"
        },
        significance: "Definition of enlightened consciousness - self-satisfaction"
      },
      {
        number: 56,
        sanskrit: "दुःखेष्वनुद्विग्नमनाः सुखेषु विगतस्पृहः। वीतरागभयक्रोधः स्थितधीर्मुनिरुच्यते।।",
        transliteration: "duḥkheṣv anudvigna-manāḥ sukheṣu vigata-spṛhaḥ | vīta-rāga-bhaya-krodhaḥ sthita-dhīr munir ucyate ||",
        translation: "One who is not disturbed in mind even amidst the threefold miseries or elated when there is happiness, and who is free from attachment, fear and anger, is called a sage of steady mind.",
        explanation: "Krishna describes the emotional equilibrium of the enlightened person. Such a person remains balanced in all situations, free from the three primary emotions that bind the soul: attachment, fear, and anger.",
        wordMeaning: {
          "दुःखेषु अनुद्विग्नमनाः": "mind not disturbed in distress",
          "सुखेषु विगतस्पृहः": "free from longing in happiness",
          "वीतरागभयक्रोधः": "free from attachment, fear and anger",
          "स्थितधीः": "of steady intelligence",
          "मुनिः उच्यते": "is called a sage"
        },
        significance: "Emotional characteristics of the enlightened sage"
      },
      {
        number: 62,
        sanskrit: "ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते। सङ्गात्सञ्जायते कामः कामात्क्रोधोऽभिजायते।।",
        transliteration: "dhyāyato viṣayān puṃsaḥ saṅgas teṣūpajāyate | saṅgāt sañjāyate kāmaḥ kāmāt krodho 'bhijāyate ||",
        translation: "While contemplating the objects of the senses, a person develops attachment for them, and from such attachment lust develops, and from lust anger arises.",
        explanation: "Krishna describes the downward spiral of consciousness when one contemplates sense objects. This verse outlines the psychological progression from contemplation to attachment to desire to anger - showing how spiritual fall begins.",
        wordMeaning: {
          "ध्यायतः": "while contemplating",
          "विषयान्": "sense objects",
          "सङ्गः": "attachment",
          "तेषु उपजायते": "develops for them",
          "सङ्गात्": "from attachment",
          "सञ्जायते कामः": "lust develops",
          "कामात् क्रोधः अभिजायते": "from lust anger arises"
        },
        significance: "The psychology of spiritual degradation"
      },
      {
        number: 63,
        sanskrit: "क्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः। स्मृतिभ्रंशाद्बुद्धिनाशो बुद्धिनाशात्प्रणश्यति।।",
        transliteration: "krodhād bhavati sammohaḥ sammohāt smṛti-vibhramaḥ | smṛti-bhraṃśād buddhi-nāśo buddhi-nāśāt praṇaśyati ||",
        translation: "From anger, complete delusion arises, and from delusion bewilderment of memory. When memory is bewildered, intelligence is lost, and when intelligence is lost one falls down again into the material pool.",
        explanation: "This verse completes the description of spiritual degradation. It shows the complete chain: contemplation → attachment → lust → anger → delusion → loss of memory → loss of intelligence → spiritual fall. This is why controlling the mind is crucial.",
        wordMeaning: {
          "क्रोधात्": "from anger",
          "भवति सम्मोहः": "complete delusion arises",
          "सम्मोहात्": "from delusion",
          "स्मृतिविभ्रमः": "bewilderment of memory",
          "स्मृतिभ्रंशात्": "from loss of memory",
          "बुद्धिनाशः": "intelligence is lost",
          "बुद्धिनाशात् प्रणश्यति": "from loss of intelligence one falls down"
        },
        significance: "Complete chain of spiritual degradation"
      },
      {
        number: 71,
        sanskrit: "विहाय कामान्यः सर्वान्पुमांश्चरति निःस्पृहः। निर्ममो निरहंकारः स शान्तिमधिगच्छति।।",
        transliteration: "vihāya kāmān yaḥ sarvān pumāṃś carati niḥspṛhaḥ | nirmamo nirahāṅkāraḥ sa śāntim adhigacchati ||",
        translation: "A person who has given up all desires for sense gratification, who lives free from desires, who has given up all sense of proprietorship and is devoid of false ego - he alone can attain real peace.",
        explanation: "Krishna describes the state of true peace. It comes not from fulfilling desires, but from transcending them completely. The enlightened person lives without personal desires, possessiveness, or false ego.",
        wordMeaning: {
          "विहाय कामान् सर्वान्": "giving up all desires",
          "यः पुमान् चरति": "the person who lives",
          "निःस्पृहः": "free from desires",
          "निर्ममः": "without sense of proprietorship",
          "निरहंकारः": "devoid of false ego",
          "सः शान्तिम् अधिगच्छति": "he attains peace"
        },
        significance: "Path to real peace through transcendence"
      },
      {
        number: 72,
        sanskrit: "एषा ब्राह्मी स्थितिः पार्थ नैनां प्राप्य विमुह्यति। स्थित्वास्यामन्तकालेऽपि ब्रह्मनिर्वाणमृच्छति।।",
        transliteration: "eṣā brāhmī sthitiḥ pārtha naināṃ prāpya vimuhyati | sthitvāsyām anta-kāle 'pi brahma-nirvāṇam ṛcchati ||",
        translation: "This is the way of the spiritual and godly life, after attaining which a man is not bewildered. If one is thus situated even at the hour of death, one can enter into the kingdom of God.",
        explanation: "The concluding verse of Chapter 2 promises that once this spiritual consciousness is attained, one is never again bewildered by material illusion. Even if achieved at the moment of death, it grants liberation and entry into the divine realm.",
        wordMeaning: {
          "एषा ब्राह्मी स्थितिः": "this is the spiritual situation",
          "न एनाम् प्राप्य विमुह्यति": "attaining this, one is not bewildered",
          "स्थित्वा अस्याम्": "being situated in this",
          "अन्तकाले अपि": "even at the time of death",
          "ब्रह्मनिर्वाणम् ऋच्छति": "attains liberation in Brahman"
        },
        significance: "Final promise of liberation and conclusion of Chapter 2"
      }
    ]
  },

  // Chapter 3 - Karma Yoga Elaborated  
  {
    number: 3,
    title: "The Path of Action",
    sanskrit: "कर्मयोग",
    theme: "Selfless Service and Sacred Duty", 
    summary: "Building upon Chapter 2's foundation, Krishna elaborates on Karma Yoga - the path of selfless action. He explains why action is necessary, introduces the concept of Yajna (sacrifice), and emphasizes social responsibility and leadership by example.",
    keyThemes: [
      "The necessity of action in life",
      "Performing duty without attachment to results",
      "Yajna - sacrifice as a cosmic principle", 
      "Leading by example and social responsibility"
    ],
    verseCount: 43,
    verses: [
      {
        number: 8,
        sanskrit: "नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः। शरीरयात्रापि च ते न प्रसिद्ध्येदकर्मणः।।",
        transliteration: "niyataṃ kuru karma tvaṃ karma jyāyo hy akarmaṇaḥ | śarīra-yātrāpi ca te na prasiddhyed akarmaṇaḥ ||",
        translation: "Perform your prescribed duties, for action is better than inaction. Even the maintenance of your body cannot be accomplished without action.",
        explanation: "Krishna emphasizes the necessity of action. Complete inaction is neither possible nor desirable. Even basic bodily functions require action. This counters the misconception that spirituality means abandoning worldly duties.",
        wordMeaning: {
          "नियतम्": "prescribed/ordained",
          "कुरु": "perform", 
          "कर्म": "action",
          "ज्यायः": "better",
          "अकर्मणः": "than inaction",
          "शरीरयात्रा": "bodily maintenance",
          "न प्रसिद्ध्येत्": "would not be possible"
        },
        significance: "Establishes necessity of action in spiritual life"
      },
      {
        number: 9,
        sanskrit: "यज्ञार्थात्कर्मणोऽन्यत्र लोकोऽयं कर्मबन्धनः। तदर्थं कर्म कौन्तेय मुक्तसङ्गः समाचर।।",
        transliteration: "yajñārthāt karmaṇo 'nyatra loko 'yaṃ karma-bandhanaḥ | tad-arthaṃ karma kaunteya mukta-saṅgaḥ samācara ||",
        translation: "Work done as a sacrifice for the Divine frees one from bondage. Therefore, O Arjuna, perform your prescribed duties for His satisfaction, and remain unattached and free from bondage.",
        explanation: "The transformative concept of Yajna - performing all actions as sacrifice to the Divine. This transforms mundane activities into spiritual practice, making daily life a continuous meditation.",
        wordMeaning: {
          "यज्ञार्थात्": "for the sake of sacrifice",
          "अन्यत्र": "otherwise",
          "कर्मबन्धनः": "bound by work",
          "तदर्थम्": "for that purpose",
          "मुक्तसङ्गः": "free from attachment",
          "समाचर": "perform perfectly"
        },
        significance: "Introduces Yajna - key to liberation through action"
      },
      {
        number: 21,
        sanskrit: "यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः। स यत्प्रमाणं कुरुते लोकस्तदनुवर्तते।।", 
        transliteration: "yad yad ācarati śreṣṭhas tat tad evetaro janaḥ | sa yat pramāṇaṃ kurute lokas tad anuvartate ||",
        translation: "Whatever action a great person performs, common people follow. Whatever standards such a person sets by exemplary acts, the world pursues.",
        explanation: "The principle of leadership through example. Those in positions of authority have a responsibility to set positive examples, as society naturally follows their behavior.",
        wordMeaning: {
          "यत् यत्": "whatever",
          "आचरति": "performs",
          "श्रेष्ठः": "the great person", 
          "इतरः जनः": "other persons",
          "प्रमाणम्": "standard",
          "कुरुते": "sets",
          "अनुवर्तते": "follows"
        },
        significance: "Establishes responsibility of leadership and social influence"
      }
    ]
  },

  // Chapter 4 - Divine Knowledge
  {
    number: 4,
    title: "Divine Knowledge", 
    sanskrit: "ज्ञानकर्मसंन्यासयोग",
    theme: "Knowledge and Action Combined",
    summary: "Krishna reveals His divine nature and the relationship between knowledge and action. He explains the concept of divine incarnation and how knowledge destroys ignorance.",
    keyThemes: [
      "Divine incarnation and its purpose",
      "The relationship between knowledge and action",
      "How knowledge burns the seeds of karma",
      "The progression of spiritual understanding"
    ],
    verseCount: 42,
    verses: [
      {
        number: 1,
        sanskrit: "श्रीभगवानुवाच। इमं विवस्वते योगं प्रोक्तवानहमव्ययम्। विवस्वान्मनवे प्राह मनुरिक्ष्वाकवेऽब्रवीत्।।",
        transliteration: "śrī-bhagavān uvāca | imaṃ vivasvate yogaṃ proktavān aham avyayam | vivasvān manave prāha manu ikṣvākave 'bravīt ||",
        translation: "The Supreme Lord said: I taught this imperishable yoga to Vivasvan; Vivasvan taught it to Manu; and Manu taught it to Ikshvaku.",
        explanation: "Krishna begins by establishing the divine lineage of this knowledge, showing that spiritual wisdom has been passed down through authorized succession from the beginning of creation.",
        wordMeaning: {
          "इमम्": "this",
          "विवस्वते": "to Vivasvan (sun-god)",
          "योगम्": "yoga/spiritual practice",
          "प्रोक्तवान्": "taught",
          "अहम्": "I",
          "अव्ययम्": "imperishable",
          "विवस्वान्": "Vivasvan",
          "मनवे": "to Manu",
          "प्राह": "taught",
          "इक्ष्वाकवे": "to Ikshvaku",
          "अब्रवीत्": "told"
        }
      },
      {
        number: 2,
        sanskrit: "एवं परम्पराप्राप्तमिमं राजर्षयो विदुः। स कालेनेह महता योगो नष्टः परन्तप।।",
        transliteration: "evaṃ paramparā-prāptam imaṃ rājarṣayo viduḥ | sa kāleneha mahatā yogo naṣṭaḥ parantapa ||",
        translation: "This knowledge was thus received through the chain of disciplic succession, and the saintly kings understood it in that way. But in course of time the succession was broken, and therefore the science as it is appears to be lost.",
        explanation: "Krishna explains how authentic spiritual knowledge is preserved through disciplic succession, but warns that when this chain is broken, the true understanding becomes lost.",
        wordMeaning: {
          "एवम्": "thus",
          "परम्पराप्राप्तम्": "received through succession",
          "राजर्षयः": "saintly kings",
          "विदुः": "understood",
          "कालेन": "by time",
          "महता": "long",
          "योगः": "this yoga",
          "नष्टः": "lost",
          "परन्तप": "O Arjuna (scorcher of enemies)"
        }
      },
      {
        number: 3,
        sanskrit: "स एवायं मया तेऽद्य योगः प्रोक्तः पुरातनः। भक्तोऽसि मे सखा चेति रहस्यं ह्येतदुत्तमम्।।",
        transliteration: "sa evāyaṃ mayā te 'dya yogaḥ proktaḥ purātanaḥ | bhakto 'si me sakhā ceti rahasyaṃ hy etad uttamam ||",
        translation: "That very ancient science of the relationship with the Supreme is today told by Me to you because you are My devotee as well as My friend and can therefore understand the transcendental mystery of this science.",
        explanation: "Krishna reveals why He is sharing this supreme knowledge with Arjuna - because of their relationship of devotion and friendship, which qualifies Arjuna to understand these mysteries.",
        wordMeaning: {
          "स एव अयम्": "that very same",
          "मया": "by Me",
          "ते": "to you",
          "अद्य": "today",
          "योगः": "yoga",
          "प्रोक्तः": "spoken",
          "पुरातनः": "ancient",
          "भक्तः": "devotee",
          "असि": "you are",
          "सखा": "friend",
          "रहस्यम्": "mystery",
          "उत्तमम्": "supreme"
        }
      },
      {
        number: 4,
        sanskrit: "अर्जुन उवाच। अपरं भवतो जन्म परं जन्म विवस्वतः। कथमेतद्विजानीयां त्वमादौ प्रोक्तवानिति।।",
        transliteration: "arjuna uvāca | aparaṃ bhavato janma paraṃ janma vivasvataḥ | katham etad vijānīyāṃ tvam ādau proktavān iti ||",
        translation: "Arjuna said: Later was Your birth and earlier was the birth of Vivasvan. How am I to understand that in the beginning You instructed this science to him?",
        explanation: "Arjuna's logical question about the chronological impossibility - how could Krishna, who was born recently, have taught Vivasvan in ancient times? This sets up Krishna's revelation about His divine nature.",
        wordMeaning: {
          "अपरम्": "later",
          "भवतः": "Your",
          "जन्म": "birth",
          "परम्": "earlier",
          "विवस्वतः": "of Vivasvan",
          "कथम्": "how",
          "एतत्": "this",
          "विजानीयाम्": "should I understand",
          "त्वम्": "You",
          "आदौ": "in the beginning",
          "प्रोक्तवान्": "instructed"
        }
      },
      {
        number: 5,
        sanskrit: "श्रीभगवानुवाच। बहूनि मे व्यतीतानि जन्मानि तव चार्जुन। तान्यहं वेद सर्वाणि न त्वं वेत्थ परन्तप।।",
        transliteration: "śrī-bhagavān uvāca | bahūni me vyatītāni janmāni tava cārjuna | tāny ahaṃ veda sarvāṇi na tvaṃ vettha parantapa ||",
        translation: "The Supreme Lord said: Many, many births both you and I have passed. I can remember all of them, but you cannot, O subduer of enemies!",
        explanation: "Krishna reveals the fundamental difference between divine and ordinary consciousness - while both have had many births, only the Divine retains complete memory of all previous lives.",
        wordMeaning: {
          "बहूनि": "many",
          "मे": "My",
          "व्यतीतानि": "have passed",
          "जन्मानि": "births",
          "तव": "your",
          "च": "and",
          "तानि": "all those",
          "अहम्": "I",
          "वेद": "know",
          "सर्वाणि": "all",
          "न": "not",
          "त्वम्": "you",
          "वेत्थ": "know"
        }
      },
      {
        number: 6,
        sanskrit: "अजोऽपि सन्नव्यात्मा भूतानामीश्वरोऽपि सन्। प्रकृतिं स्वामधिष्ठाय सम्भवाम्यात्ममायया।।",
        transliteration: "ajo 'pi sann avyayātmā bhūtānām īśvaro 'pi san | prakṛtiṃ svām adhiṣṭhāya sambhavāmy ātma-māyayā ||",
        translation: "Although I am unborn and My transcendental body never deteriorates, and although I am the Lord of all living entities, I still appear in every millennium in My original transcendental form.",
        explanation: "Krishna explains the mystery of divine incarnation - though unborn and imperishable, the Supreme Lord appears through His own divine energy (maya) while controlling material nature.",
        wordMeaning: {
          "अजः": "unborn",
          "अपि": "although",
          "सन्": "being",
          "अव्यात्मा": "imperishable self",
          "भूतानाम्": "of all living entities",
          "ईश्वरः": "Lord",
          "प्रकृतिम्": "material nature",
          "स्वाम्": "My own",
          "अधिष्ठाय": "being situated",
          "सम्भवामि": "I appear",
          "आत्ममायया": "by My own divine energy"
        }
      },
      {
        number: 7,
        sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्।।",
        transliteration: "yadā yadā hi dharmasya glānir bhavati bhārata | abhyutthānam adharmasya tadātmānaṃ sṛjāmy aham ||", 
        translation: "Whenever there is decline of dharma and rise of adharma, O Bharata, then I manifest Myself.",
        explanation: "Krishna reveals the principle behind divine incarnation - to restore dharma when it declines and to curb the rise of unrighteousness in the world.",
        wordMeaning: {
          "यदा यदा": "whenever",
          "धर्मस्य": "of dharma",
          "ग्लानिः": "decline", 
          "अभ्युत्थानम्": "rise",
          "अधर्मस्य": "of adharma",
          "आत्मानम्": "Myself",
          "सृजामि": "I manifest",
          "अहम्": "I"
        },
        significance: "Famous verse on divine incarnation"
      },
      {
        number: 8,
        sanskrit: "परित्राणाय साधूनां विनाशाय च दुष्कृताम्। धर्मसंस्थापनार्थाय सम्भवामि युगे युगे।।",
        transliteration: "paritrāṇāya sādhūnāṃ vināśāya ca duṣkṛtām | dharma-saṃsthāpanārthāya sambhavāmi yuge yuge ||",
        translation: "For the protection of the good, for the destruction of the wicked, and for the establishment of dharma, I appear in every age.",
        explanation: "Krishna explains the three-fold purpose of divine incarnation: protecting devotees, destroying evil forces, and establishing righteousness in the world.",
        wordMeaning: {
          "परित्राणाय": "for protection",
          "साधूनाम्": "of the good/saints",
          "विनाशाय": "for destruction",
          "दुष्कृताम्": "of the wicked",
          "धर्मसंस्थापनार्थाय": "for establishing dharma",
          "सम्भवामि": "I appear",
          "युगे युगे": "in every age"
        },
        significance: "Explains the purpose of divine incarnations"
      },
      {
        number: 9,
        sanskrit: "जन्म कर्म च मे दिव्यमेवं यो वेत्ति तत्त्वतः। त्यक्त्वा देहं पुनर्जन्म नैति मामेति सोऽर्जुन।।",
        transliteration: "janma karma ca me divyam evaṃ yo vetti tattvataḥ | tyaktvā dehaṃ punar janma naiti mām eti so 'rjuna ||",
        translation: "One who knows the transcendental nature of My birth and activities does not, upon leaving the body, take his birth again in this material world, but attains My eternal abode, O Arjuna.",
        explanation: "Krishna reveals the supreme benefit of understanding His divine nature - liberation from the cycle of birth and death and attainment of His eternal abode.",
        wordMeaning: {
          "जन्म": "birth",
          "कर्म": "activities",
          "च": "and",
          "मे": "My",
          "दिव्यम्": "transcendental",
          "एवम्": "thus",
          "यः": "one who",
          "वेत्ति": "knows",
          "तत्त्वतः": "in truth",
          "त्यक्त्वा": "giving up",
          "देहम्": "body",
          "पुनर्जन्म": "rebirth",
          "नैति": "does not attain",
          "माम्": "Me",
          "एति": "attains"
        },
        significance: "Key verse on liberation through divine knowledge"
      },
      {
        number: 10,
        sanskrit: "वीतरागभयक्रोधा मन्मया मामुपाश्रिताः। बहवो ज्ञानतपसा पूता मद्भावमागताः।।",
        transliteration: "vīta-rāga-bhaya-krodhā man-mayā mām upāśritāḥ | bahavo jñāna-tapasā pūtā mad-bhāvam āgatāḥ ||",
        translation: "Being freed from attachment, fear and anger, being fully absorbed in Me and taking refuge in Me, many, many persons in the past became purified by knowledge of Me—and thus they all attained transcendental love for Me.",
        explanation: "Krishna describes the characteristics of those who attain Him - freedom from material emotions, complete absorption in divine consciousness, and purification through spiritual knowledge.",
        wordMeaning: {
          "वीतरागभयक्रोधाः": "freed from attachment, fear and anger",
          "मन्मयाः": "absorbed in Me",
          "माम्": "in Me",
          "उपाश्रिताः": "taking shelter",
          "बहवः": "many",
          "ज्ञानतपसा": "by the penance of knowledge",
          "पूताः": "purified",
          "मद्भावम्": "transcendental love for Me",
          "आगताः": "attained"
        }
      },
      {
        number: 11,
        sanskrit: "ये यथा मां प्रपद्यन्ते तांस्तथैव भजाम्यहम्। मम वर्त्मानुवर्तन्ते मनुष्याः पार्थ सर्वशः।।",
        transliteration: "ye yathā māṃ prapadyante tāṃs tathaiva bhajāmy aham | mama vartmānuvartante manuṣyāḥ pārtha sarvaśaḥ ||",
        translation: "As all surrender unto Me, I reward them accordingly. Everyone follows My path in all respects, O son of Pritha.",
        explanation: "Krishna explains His reciprocal relationship with devotees - He responds to each person according to their degree of surrender, and ultimately all paths lead back to Him.",
        wordMeaning: {
          "ये": "those who",
          "यथा": "as",
          "माम्": "unto Me",
          "प्रपद्यन्ते": "surrender",
          "तान्": "them",
          "तथा एव": "so",
          "भजामि": "reward",
          "अहम्": "I",
          "मम": "My",
          "वर्त्म": "path",
          "अनुवर्तन्ते": "follow",
          "मनुष्याः": "all men",
          "सर्वशः": "in all respects"
        }
      },
      {
        number: 12,
        sanskrit: "काङ्क्षन्तः कर्मणां सिद्धिं यजन्त इह देवताः। क्षिप्रं हि मानुषे लोके सिद्धिर्भवति कर्मजा।।",
        transliteration: "kāṅkṣantaḥ karmaṇāṃ siddhiṃ yajanta iha devatāḥ | kṣipraṃ hi mānuṣe loke siddhir bhavati karma-jā ||",
        translation: "Men in this world desire success in fruitive activities, so they worship the demigods. Quickly, indeed, men get results from fruitive work in this world of human society.",
        explanation: "Krishna explains why people worship demigods - for quick material results. However, He implies these results are temporary compared to the eternal benefit of worshipping the Supreme.",
        wordMeaning: {
          "काङ्क्षन्तः": "desiring",
          "कर्मणाम्": "of fruitive activities",
          "सिद्धिम्": "perfection/success",
          "यजन्ते": "worship",
          "इह": "in this world",
          "देवताः": "demigods",
          "क्षिप्रम्": "very quickly",
          "मानुषे लोके": "in human society",
          "सिद्धिः": "success",
          "भवति": "comes",
          "कर्मजा": "from fruitive work"
        }
      },
      {
        number: 13,
        sanskrit: "चातुर्वर्ण्यं मया सृष्टं गुणकर्मविभागशः। तस्य कर्तारमपि मां विद्ध्यकर्तारमव्ययम्।।",
        transliteration: "cātur-varṇyaṃ mayā sṛṣṭaṃ guṇa-karma-vibhāgaśaḥ | tasya kartāram api māṃ viddhy akartāram avyayam ||",
        translation: "According to the three modes of material nature and the work associated with them, the four divisions of human society are created by Me. And although I am the creator of this system, you should know that I am yet the non-doer, being unchangeable.",
        explanation: "Krishna explains the divine origin of the social system (varna) based on qualities and activities, while emphasizing His transcendental position as the unchanged creator who remains unaffected by His creation.",
        wordMeaning: {
          "चातुर्वर्ण्यम्": "four divisions of society",
          "मया": "by Me",
          "सृष्टम्": "created",
          "गुणकर्मविभागशः": "according to mode and work",
          "तस्य": "of that",
          "कर्तारम्": "the creator",
          "अपि": "although",
          "माम्": "Me",
          "विद्धि": "you should know",
          "अकर्तारम्": "as the non-doer",
          "अव्ययम्": "unchangeable"
        }
      },
      {
        number: 14,
        sanskrit: "न मां कर्माणि लिम्पन्ति न मे कर्मफले स्पृहा। इति मां योऽभिजानाति कर्मभिर्न स बध्यते।।",
        transliteration: "na māṃ karmāṇi limpanti na me karma-phale spṛhā | iti māṃ yo 'bhijānāti karmabhir na sa badhyate ||",
        translation: "There is no work that affects Me; nor do I aspire for the fruits of action. One who understands this truth about Me is not entangled by the reactions of work.",
        explanation: "Krishna reveals the secret of desireless action - understanding His transcendental nature enables one to work without being bound by karmic reactions, following His divine example.",
        wordMeaning: {
          "न": "not",
          "माम्": "Me",
          "कर्माणि": "work",
          "लिम्पन्ति": "affect",
          "मे": "My",
          "कर्मफले": "in the fruits of work",
          "स्पृहा": "aspiration",
          "इति": "thus",
          "यः": "anyone who",
          "अभिजानाति": "knows",
          "कर्मभिः": "by work",
          "स": "he",
          "बध्यते": "is entangled"
        },
        significance: "Key verse on desireless action"
      },
      {
        number: 15,
        sanskrit: "एवं ज्ञात्वा कृतं कर्म पूर्वैरपि मुमुक्षुभिः। कुरु कर्मैव तस्मात्त्वं पूर्वैः पूर्वतरं कृतम्।।",
        transliteration: "evaṃ jñātvā kṛtaṃ karma pūrvair api mumukṣubhiḥ | kuru karmaiva tasmāt tvaṃ pūrvaiḥ pūrvatāraṃ kṛtam ||",
        translation: "Understanding this, the ancient seekers of liberation performed their prescribed duties. Therefore, you should also perform your duty, following in the footsteps of your forefathers.",
        explanation: "Krishna encourages Arjuna to follow the example of ancient liberated souls who performed their duties with proper understanding, showing that enlightened action is the time-tested path.",
        wordMeaning: {
          "एवम्": "thus",
          "ज्ञात्वा": "knowing",
          "कृतम्": "performed",
          "कर्म": "work",
          "पूर्वैः": "by the ancients",
          "अपि": "also",
          "मुमुक्षुभिः": "who desired liberation",
          "कुरु": "perform",
          "कर्म एव": "prescribed duties",
          "तस्मात्": "therefore",
          "त्वम्": "you",
          "पूर्वतरम्": "in ancient times"
        }
      },
      {
        number: 16,
        sanskrit: "किं कर्म किमकर्मेति कवयोऽप्यत्र मोहिताः। तत्ते कर्म प्रवक्ष्यामि यज्ज्ञात्वा मोक्ष्यसेऽशुभात्।।",
        transliteration: "kiṃ karma kim akarmeti kavayo 'py atra mohitāḥ | tat te karma pravakṣyāmi yaj jñātvā mokṣyase 'śubhāt ||",
        translation: "Even the intelligent are bewildered in determining what is action and what is inaction. Now I shall explain to you what action is, knowing which you shall be liberated from all misfortune.",
        explanation: "Krishna acknowledges that even wise people are confused about the nature of action and inaction, and promises to explain this subtle knowledge that leads to liberation.",
        wordMeaning: {
          "किम्": "what is",
          "कर्म": "action",
          "अकर्म": "inaction",
          "इति": "thus",
          "कवयः": "the intelligent",
          "अपि": "even",
          "अत्र": "in this matter",
          "मोहिताः": "are bewildered",
          "तत्": "that",
          "ते": "unto you",
          "प्रवक्ष्यामि": "I am explaining",
          "यत्": "which",
          "ज्ञात्वा": "knowing",
          "मोक्ष्यसे": "you will be liberated",
          "अशुभात्": "from ill fortune"
        }
      },
      {
        number: 17,
        sanskrit: "कर्मणो ह्यपि बोद्धव्यं बोद्धव्यं च विकर्मणः। अकर्मणश्च बोद्धव्यं गहना कर्मणो गतिः।।",
        transliteration: "karmaṇo hy api boddhavyaṃ boddhavyaṃ ca vikarmaṇaḥ | akarmaṇaś ca boddhavyaṃ gahanā karmaṇo gatiḥ ||",
        translation: "The intricacies of action are very hard to understand. Therefore one should know properly what action is, what forbidden action is, and what inaction is.",
        explanation: "Krishna emphasizes the subtlety of understanding different types of action - proper action, forbidden action, and inaction - indicating that spiritual wisdom requires discrimination between these categories.",
        wordMeaning: {
          "कर्मणः": "of action",
          "हि": "certainly",
          "अपि": "also",
          "बोद्धव्यम्": "should be understood",
          "विकर्मणः": "of forbidden action",
          "च": "and",
          "अकर्मणः": "of inaction",
          "गहना": "very difficult to understand",
          "गतिः": "the entrance"
        }
      },
      {
        number: 18,
        sanskrit: "कर्मण्यकर्म यः पश्येदकर्मणि च कर्म यः। स बुद्धिमान्मनुष्येषु स युक्तः कृत्स्नकर्मकृत्।।",
        transliteration: "karmaṇy akarma yaḥ paśyed akarmaṇi ca karma yaḥ | sa buddhimān manuṣyeṣu sa yuktaḥ kṛtsna-karma-kṛt ||",
        translation: "One who sees inaction in action, and action in inaction, is intelligent among men, and he is in the transcendental position, although engaged in all sorts of activities.",
        explanation: "This profound verse reveals the paradox of enlightened action - the wise person sees that true action (spiritual activity) can appear as inaction, while apparent action may be spiritually inactive.",
        wordMeaning: {
          "कर्मणि": "in action",
          "अकर्म": "inaction",
          "यः": "one who",
          "पश्येत्": "observes",
          "अकर्मणि": "in inaction",
          "च": "also",
          "कर्म": "action",
          "स": "he",
          "बुद्धिमान्": "is intelligent",
          "मनुष्येषु": "among men",
          "युक्तः": "is in the transcendental position",
          "कृत्स्नकर्मकृत्": "although engaged in all activities"
        },
        significance: "Famous verse on transcendental understanding of action"
      },
      {
        number: 19,
        sanskrit: "यस्य सर्वे समारम्भाः कामसङ्कल्पवर्जिताः। ज्ञानाग्निदग्धकर्माणं तमाहुः पण्डितं बुधाः।।",
        transliteration: "yasya sarve samārambhāḥ kāma-saṅkalpa-varjitāḥ | jñānāgni-dagdha-karmāṇaṃ tam āhuḥ paṇḍitaṃ budhāḥ ||",
        translation: "One is understood to be in full knowledge whose every endeavor is devoid of desire for sense gratification. He is said by sages to be a worker for whom the reactions of work have been burned up by the fire of perfect knowledge.",
        explanation: "Krishna describes the liberated person whose actions are free from selfish desires and whose karmic reactions are burned up by the fire of spiritual knowledge.",
        wordMeaning: {
          "यस्य": "one whose",
          "सर्वे": "all",
          "समारम्भाः": "attempts",
          "कामसङ्कल्पवर्जिताः": "are devoid of desires for sense gratification",
          "ज्ञानाग्निदग्धकर्माणम्": "whose work is burned up by the fire of knowledge",
          "तम्": "him",
          "आहुः": "declare",
          "पण्डितम्": "learned",
          "बुधाः": "those who know"
        }
      },
      {
        number: 20,
        sanskrit: "त्यक्त्वा कर्मफलासङ्गं नित्यतृप्तो निराश्रयः। कर्मण्यभिप्रवृत्तोऽपि नैव किञ्चित्करोति सः।।",
        transliteration: "tyaktvā karma-phalāsaṅgaṃ nitya-tṛpto nirāśrayaḥ | karmaṇy abhipravṛtto 'pi naiva kiñcit karoti saḥ ||",
        translation: "Abandoning all attachment to the results of his activities, ever satisfied and independent, he performs no fruitive action, although engaged in all kinds of undertakings.",
        explanation: "The enlightened person, though active in the world, performs no binding action because of freedom from attachment to results and complete inner satisfaction.",
        wordMeaning: {
          "त्यक्त्वा": "giving up",
          "कर्मफलासङ्गम्": "attachment to the results of work",
          "नित्यतृप्तः": "always satisfied",
          "निराश्रयः": "without any shelter",
          "कर्मणि": "in activity",
          "अभिप्रवृत्तः": "being fully engaged",
          "अपि": "in spite of",
          "न एव": "does not",
          "किञ्चित्": "anything",
          "करोति": "do",
          "सः": "he"
        }
      },
      {
        number: 21,
        sanskrit: "निराशीर्यतचित्तात्मा त्यक्तसर्वपरिग्रहः। शारीरं केवलं कर्म कुर्वन्नाप्नोति किल्बिषम्।।",
        transliteration: "nirāśīr yata-cittātmā tyakta-sarva-parigrahaḥ | śārīraṃ kevalaṃ karma kurvan nāpnoti kilbiṣam ||",
        translation: "Such a man of understanding acts with mind and intelligence perfectly controlled, gives up all sense of proprietorship over his possessions, and acts only for the bare necessities of life. Thus working, he is not affected by sinful reactions.",
        explanation: "The liberated person acts only for bodily maintenance, with controlled mind and without sense of ownership, thus remaining free from sinful reactions.",
        wordMeaning: {
          "निराशीः": "without desire for the result",
          "यतचित्तात्मा": "self-controlled in mind and intelligence",
          "त्यक्तसर्वपरिग्रहः": "giving up all sense of proprietorship",
          "शारीरम्": "in keeping body and soul together",
          "केवलम्": "only",
          "कर्म": "work",
          "कुर्वन्": "doing",
          "न": "never",
          "आप्नोति": "does acquire",
          "किल्बिषम्": "sinful reactions"
        }
      },
      {
        number: 22,
        sanskrit: "यदृच्छालाभसन्तुष्टो द्वन्द्वातीतो विमत्सरः। समः सिद्धावसिद्धौ च कृत्वापि न निबध्यते।।",
        transliteration: "yadṛcchā-lābha-santuṣṭo dvandvātīto vimatsaraḥ | samaḥ siddhāv asiddhau ca kṛtvāpi na nibadhyate ||",
        translation: "He who is satisfied with gain which comes of its own accord, who is free from duality and does not envy, who is steady in both success and failure, is never entangled, although performing actions.",
        explanation: "The qualities of a liberated soul: contentment with whatever comes naturally, freedom from dualities, absence of envy, and equanimity in success and failure.",
        wordMeaning: {
          "यदृच्छालाभसन्तुष्टः": "satisfied with gain achieved of its own accord",
          "द्वन्द्वातीतः": "free from duality",
          "विमत्सरः": "free from envy",
          "समः": "steady",
          "सिद्धौ": "in success",
          "असिद्धौ": "in failure",
          "च": "also",
          "कृत्वा": "doing",
          "अपि": "although",
          "न": "never",
          "निबध्यते": "becomes entangled"
        }
      },
      {
        number: 23,
        sanskrit: "गतसङ्गस्य मुक्तस्य ज्ञानावस्थितचेतसः। यज्ञायाचरतः कर्म समग्रं प्रविलीयते।।",
        transliteration: "gata-saṅgasya muktasya jñānāvasthita-cetasaḥ | yajñāyācarataḥ karma samagraṃ pravilīyate ||",
        translation: "The work of a man who is unattached to the modes of material nature and who is fully situated in transcendental knowledge merges entirely into transcendence when it is performed as sacrifice.",
        explanation: "When work is performed as sacrifice (yajna) by one who is detached and established in knowledge, all karmic reactions are dissolved and the work becomes transcendental.",
        wordMeaning: {
          "गतसङ्गस्य": "of one unattached to the modes of material nature",
          "मुक्तस्य": "of the liberated",
          "ज्ञानावस्थितचेतसः": "whose mind is fixed in knowledge",
          "यज्ञाय": "for the sake of Yajna (Krishna)",
          "आचरतः": "acting",
          "कर्म": "work",
          "समग्रम्": "in total",
          "प्रविलीयते": "merges entirely into transcendence"
        }
      },
      {
        number: 24,
        sanskrit: "ब्रह्मार्पणं ब्रह्म हविर्ब्रह्माग्नौ ब्रह्मणा हुतम्। ब्रह्मैव तेन गन्तव्यं ब्रह्मकर्मसमाधिना।।",
        transliteration: "brahmārpaṇaṃ brahma havir brahmāgnau brahmaṇā hutam | brahmaiva tena gantavyaṃ brahma-karma-samādhinā ||",
        translation: "Brahman is the ritual, Brahman is the offering, Brahman is he who offers to the fire that is Brahman. He who sees Brahman in every activity is sure to attain Brahman.",
        explanation: "This famous verse reveals the vision of absolute consciousness - when everything is seen as Brahman (divine consciousness), the performer, the action, and the goal all merge into the same divine reality.",
        wordMeaning: {
          "ब्रह्मार्पणम्": "Brahman is the instrument of offering",
          "ब्रह्म": "Brahman",
          "हविः": "the offering",
          "ब्रह्माग्नौ": "in the fire of Brahman",
          "ब्रह्मणा": "by Brahman",
          "हुतम्": "offered",
          "ब्रह्म एव": "Brahman only",
          "तेन": "by him",
          "गन्तव्यम्": "to be reached",
          "ब्रह्मकर्मसमाधिना": "by concentration on Brahman activities"
        },
        significance: "Famous verse on seeing Brahman in all activities"
      },
      {
        number: 25,
        sanskrit: "दैवमेवापरे यज्ञं योगिनः पर्युपासते। ब्रह्माग्नावपरे यज्ञं यज्ञेनैवोपजुह्वति।।",
        transliteration: "daivam evāpare yajñaṃ yoginaḥ paryupāsate | brahmāgnāv apare yajñaṃ yajñenaivopajuhvati ||",
        translation: "Some yogis perfectly worship the demigods by offering different sacrifices to them, and others offer sacrifices in the fire of the Supreme Brahman.",
        explanation: "Krishna describes different types of sacrifice - some worship demigods through external rituals, while others offer everything into the fire of Brahman consciousness.",
        wordMeaning: {
          "दैवम्": "in worshiping the demigods",
          "एव": "like this",
          "अपरे": "some others",
          "यज्ञम्": "sacrifices",
          "योगिनः": "mystics",
          "पर्युपासते": "worship perfectly",
          "ब्रह्माग्नौ": "in the fire of Brahman",
          "यज्ञेन एव": "only by sacrifice",
          "उपजुह्वति": "offer"
        }
      },
      {
        number: 26,
        sanskrit: "श्रोत्रादीनीन्द्रियाण्यन्ये संयमाग्निषु जुह्वति। शब्दादीन्विषयानन्य इन्द्रियाग्निषु जुह्वति।।",
        transliteration: "śrotrādīnīndriyāṇy anye saṃyamāgniṣu juhvati | śabdādīn viṣayān anya indriyāgniṣu juhvati ||",
        translation: "Some [the unadulterated brahmacārīs] sacrifice the hearing process and the senses in the fire of mental control, and others [the regulated householders] sacrifice the objects of the senses such as sound in the fire of the senses.",
        explanation: "Different practitioners follow different methods - some control their senses by withdrawing them from objects, while others engage the senses but offer the sense objects as sacrifice.",
        wordMeaning: {
          "श्रोत्रादीनि": "such as the hearing process",
          "इन्द्रियाणि": "senses",
          "अन्ये": "others",
          "संयमाग्निषु": "in the fires of restraint",
          "जुह्वति": "offer",
          "शब्दादीन्": "such as sound",
          "विषयान्": "sense objects",
          "इन्द्रियाग्निषु": "in the fires of the senses"
        }
      },
      {
        number: 27,
        sanskrit: "सर्वाणीन्द्रियकर्माणि प्राणकर्माणि चापरे। आत्मसंयमयोगाग्नौ जुह्वति ज्ञानदीपिते।।",
        transliteration: "sarvāṇīndriya-karmāṇi prāṇa-karmāṇi cāpare | ātma-saṃyama-yogāgnau juhvati jñāna-dīpite ||",
        translation: "Others, who are interested in achieving self-realization through controlling the mind and senses, offer the functions of all the senses, and of the life breath, as oblations into the fire of the controlled mind.",
        explanation: "Advanced practitioners offer all sensory and vital functions into the fire of controlled consciousness, kindled by the flame of knowledge.",
        wordMeaning: {
          "सर्वाणि": "all",
          "इन्द्रियकर्माणि": "functions of the senses",
          "प्राणकर्माणि": "functions of the life breath",
          "च": "also",
          "अपरे": "others",
          "आत्मसंयमयोगाग्नौ": "in the fire of controlling the mind",
          "जुह्वति": "offer",
          "ज्ञानदीपिते": "kindled by knowledge"
        }
      },
      {
        number: 28,
        sanskrit: "द्रव्ययज्ञास्तपोयज्ञा योगयज्ञास्तथापरे। स्वाध्यायज्ञानयज्ञाश्च यतयः संशितव्रताः।।",
        transliteration: "dravya-yajñās tapo-yajñā yoga-yajñās tathāpare | svādhyāya-jñāna-yajñāś ca yatayaḥ saṃśita-vratāḥ ||",
        translation: "Having accepted strict vows, some become enlightened by sacrificing their possessions, and others by performing severe austerities, by practicing the yoga of eightfold mysticism, or by studying the Vedas to advance in transcendental knowledge.",
        explanation: "Krishna describes various paths of sacrifice: material sacrifice, austerity, yoga practice, and the study of scriptures - all undertaken by serious practitioners with firm vows.",
        wordMeaning: {
          "द्रव्ययज्ञाः": "sacrificing one's possessions",
          "तपोयज्ञाः": "sacrifice in austerities",
          "योगयज्ञाः": "sacrifice in eightfold mysticism",
          "तथा": "thus",
          "अपरे": "others",
          "स्वाध्यायज्ञानयज्ञाः": "sacrifice in the study of the Vedas",
          "च": "also",
          "यतयः": "enlightened persons",
          "संशितव्रताः": "taken to strict vows"
        }
      },
      {
        number: 29,
        sanskrit: "अपाने जुह्वति प्राणं प्राणेऽपानं तथापरे। प्राणापानगती रुद्ध्वा प्राणायामपरायणाः।।",
        transliteration: "apāne juhvati prāṇaṃ prāṇe 'pānaṃ tathāpare | prāṇāpāna-gatī ruddhvā prāṇāyāma-parāyaṇāḥ ||",
        translation: "Still others, who are inclined to the process of breath restraint to remain in trance, practice by offering the movement of the outgoing breath into the incoming, and the incoming breath into the outgoing, and thus at last remain in trance, stopping all breathing.",
        explanation: "This verse describes pranayama practitioners who control the life force by balancing inhalation and exhalation, ultimately transcending the breathing process entirely.",
        wordMeaning: {
          "अपाने": "in the air which acts downward",
          "जुह्वति": "offer",
          "प्राणम्": "the air which acts outward",
          "प्राणे": "in the air going outward",
          "अपानम्": "the air going downward",
          "तथा": "as also",
          "अपरे": "others",
          "प्राणापानगती": "the movements of the life air and the air of death",
          "रुद्ध्वा": "checking",
          "प्राणायामपरायणाः": "inclined to stopping the life breath"
        }
      },
      {
        number: 30,
        sanskrit: "अपरे नियताहाराः प्राणान्प्राणेषु जुह्वति। सर्वेऽप्येते यज्ञविदो यज्ञक्षपितकल्मषाः।।",
        transliteration: "apare niyatāhārāḥ prāṇān prāṇeṣu juhvati | sarve 'py ete yajña-vido yajña-kṣapita-kalmaṣāḥ ||",
        translation: "Others, who are self-restrained in eating, sacrifice the outgoing breath in the outgoing breath. All these performers of sacrifice are conversant with sacrifice and are cleansed of sinful reactions.",
        explanation: "Those who practice controlled eating offer their life force properly, and all these various forms of sacrifice purify the practitioners from sinful reactions.",
        wordMeaning: {
          "अपरे": "others",
          "नियताहाराः": "having controlled food",
          "प्राणान्": "outgoing air",
          "प्राणेषु": "in the outgoing air",
          "जुह्वति": "sacrifice",
          "सर्वे": "all",
          "अपि": "although apparently different",
          "एते": "these",
          "यज्ञविदः": "conversant with the purpose of performing sacrifices",
          "यज्ञक्षपितकल्मषाः": "being cleansed of the result of such performances"
        }
      },
      {
        number: 31,
        sanskrit: "यज्ञशिष्टामृतभुजो यान्ति ब्रह्म सनातनम्। नायं लोकोऽस्त्ययज्ञस्य कुतोऽन्यः कुरुसत्तम।।",
        transliteration: "yajña-śiṣṭāmṛta-bhujo yānti brahma sanātanam | nāyaṃ loko 'sty ayajñasya kuto 'nyaḥ kuru-sattama ||",
        translation: "Those who eat the spiritual food of sacrifice are freed from all sinful reactions and advance toward the supreme eternal atmosphere. O best of the Kuru dynasty, without sacrifice one can neither live happily in this life nor attain a better life after death.",
        explanation: "Those who partake of the remnants of sacrifice (prasada) attain the eternal Brahman, while those who don't perform sacrifice cannot be happy in this world or the next.",
        wordMeaning: {
          "यज्ञशिष्टामृतभुजः": "those who eat the remnants of such sacrifices",
          "यान्ति": "do approach",
          "ब्रह्म": "the supreme",
          "सनातनम्": "eternal atmosphere",
          "न": "never",
          "अयम्": "this",
          "लोकः": "planet",
          "अस्ति": "there is",
          "अयज्ञस्य": "for one who performs no sacrifice",
          "कुतः": "where is",
          "अन्यः": "the other",
          "कुरुसत्तम": "O best amongst the Kurus"
        }
      },
      {
        number: 32,
        sanskrit: "एवं बहुविधा यज्ञा वितता ब्रह्मणो मुखे। कर्मजान्विद्धि तान्सर्वानेवं ज्ञात्वा विमोक्ष्यसे।।",
        transliteration: "evaṃ bahu-vidhā yajñā vitatā brahmaṇo mukhe | karma-jān viddhi tān sarvān evaṃ jñātvā vimokṣyase ||",
        translation: "All these different types of sacrifice are approved by the Vedas, and all of them are born of different types of work. Knowing them as such, you will become liberated.",
        explanation: "Krishna summarizes that all these various sacrificial methods are described in the Vedas and arise from different types of action. Understanding their true nature leads to liberation.",
        wordMeaning: {
          "एवम्": "thus",
          "बहुविधाः": "various kinds of",
          "यज्ञाः": "sacrifices",
          "वितताः": "are spread",
          "ब्रह्मणो मुखे": "in the face of Brahman (the Vedas)",
          "कर्मजान्": "born of work",
          "विद्धि": "you should know",
          "तान्": "them",
          "सर्वान्": "all",
          "ज्ञात्वा": "knowing",
          "विमोक्ष्यसे": "you will be liberated"
        }
      },
      {
        number: 33,
        sanskrit: "श्रेयान्द्रव्यमयाद्यज्ञाज्ज्ञानयज्ञः परन्तप। सर्वं कर्माखिलं पार्थ ज्ञाने परिसमाप्यते।।",
        transliteration: "śreyān dravya-mayād yajñāj jñāna-yajñaḥ parantapa | sarvaṃ karmākhilaṃ pārtha jñāne parisamāpyate ||",
        translation: "O chastiser of the enemy, the sacrifice performed in knowledge is better than the mere sacrifice of material possessions. After all, O son of Pritha, all sacrifices of work culminate in transcendental knowledge.",
        explanation: "Krishna establishes the supremacy of knowledge-sacrifice over material sacrifice, explaining that ultimately all forms of sacrificial work lead to transcendental knowledge.",
        wordMeaning: {
          "श्रेयान्": "greater",
          "द्रव्यमयात्": "of material possessions",
          "यज्ञात्": "than the sacrifice",
          "ज्ञानयज्ञः": "sacrifice in knowledge",
          "परन्तप": "O chastiser of the enemy",
          "सर्वम्": "all",
          "कर्म": "activities",
          "अखिलम्": "in totality",
          "पार्थ": "O son of Pritha",
          "ज्ञाने": "in knowledge",
          "परिसमाप्यते": "end"
        },
        significance: "Establishes the supremacy of knowledge over ritual"
      },
      {
        number: 34,
        sanskrit: "तद्विद्धि प्रणिपातेन परिप्रश्नेन सेवया। उपदेक्ष्यन्ति ते ज्ञानं ज्ञानिनस्तत्त्वदर्शिनः।।",
        transliteration: "tad viddhi praṇipātena paripraśnena sevayā | upadekṣyanti te jñānaṃ jñāninas tattva-darśinaḥ ||",
        translation: "Just try to learn the truth by approaching a spiritual master. Inquire from him submissively and render service unto him. The self-realized souls can impart knowledge unto you because they have seen the truth.",
        explanation: "Krishna provides the method for acquiring transcendental knowledge - approaching a genuine spiritual master with humility, sincere inquiry, and service. Such realized souls can impart true knowledge.",
        wordMeaning: {
          "तत्": "that knowledge of different sacrifices",
          "विद्धि": "try to understand",
          "प्रणिपातेन": "by approaching a spiritual master",
          "परिप्रश्नेन": "by submissive inquiries",
          "सेवया": "by the rendering of service",
          "उपदेक्ष्यन्ति": "they will initiate",
          "ते": "you",
          "ज्ञानम्": "into knowledge",
          "ज्ञानिनः": "the self-realized",
          "तत्त्वदर्शिनः": "seers of the truth"
        },
        significance: "Important verse on finding a spiritual master"
      },
      {
        number: 35,
        sanskrit: "यज्ज्ञात्वा न पुनर्मोहमेवं यास्यसि पाण्डव। येन भूतान्यशेषेण द्रक्ष्यस्यात्मन्यथो मयि।।",
        transliteration: "yaj jñātvā na punar moham evaṃ yāsyasi pāṇḍava | yena bhūtāny aśeṣeṇa drakṣyasy ātmany atho mayi ||",
        translation: "Having obtained real knowledge from a self-realized soul, you will never fall again into such illusion, for by this knowledge you will see that all living beings are but part of the Supreme, or, in other words, they are Mine.",
        explanation: "True knowledge eliminates illusion permanently by revealing that all beings are part of the Supreme Self. This realization prevents future delusion about the nature of reality.",
        wordMeaning: {
          "यत्": "which",
          "ज्ञात्वा": "knowing",
          "न पुनः": "never again",
          "मोहम्": "to illusion",
          "एवम्": "like this",
          "यास्यसि": "you shall go",
          "पाण्डव": "O son of Pandu",
          "येन": "by which",
          "भूतानि": "living entities",
          "अशेषेण": "all",
          "द्रक्ष्यसि": "you will see",
          "आत्मनि": "in the Supreme Soul",
          "अथो": "or in other words",
          "मयि": "in Me"
        }
      },
      {
        number: 36,
        sanskrit: "अपि चेदसि पापेभ्यः सर्वेभ्यः पापकृत्तमः। सर्वं ज्ञानप्लवेनैव वृजिनं सन्तरिष्यसि।।",
        transliteration: "api ced asi pāpebhyaḥ sarvebhyaḥ pāpa-kṛttamaḥ | sarvaṃ jñāna-plavenaiva vṛjinaṃ santariṣyasi ||",
        translation: "Even if you are considered to be the most sinful of all sinners, when you are situated in the boat of transcendental knowledge you will be able to cross over the ocean of miseries.",
        explanation: "Krishna assures that transcendental knowledge acts like a boat that can carry even the most sinful person across the ocean of material suffering and karmic reactions.",
        wordMeaning: {
          "अपि": "even",
          "चेत्": "if",
          "असि": "you are",
          "पापेभ्यः": "of sinners",
          "सर्वेभ्यः": "of all",
          "पापकृत्तमः": "the greatest sinner",
          "सर्वम्": "all such sinful reactions",
          "ज्ञानप्लवेन": "by the boat of transcendental knowledge",
          "एव": "certainly",
          "वृजिनम्": "the ocean of miseries",
          "सन्तरिष्यसि": "you will cross completely"
        }
      },
      {
        number: 37,
        sanskrit: "यथैधांसि समिद्धोऽग्निर्भस्मसात्कुरुतेऽर्जुन। ज्ञानाग्निः सर्वकर्माणि भस्मसात्कुरुते तथा।।",
        transliteration: "yathaidhāṃsi samiddho 'gnir bhasma-sāt kurute 'rjuna | jñānāgniḥ sarva-karmāṇi bhasma-sāt kurute tathā ||",
        translation: "As a blazing fire turns firewood to ashes, O Arjuna, so does the fire of knowledge burn to ashes all reactions to material activities.",
        explanation: "A powerful metaphor showing how the fire of transcendental knowledge completely destroys all karmic reactions, just as fire reduces wood to ashes.",
        wordMeaning: {
          "यथा": "just as",
          "एधांसि": "firewood",
          "समिद्धः": "blazing",
          "अग्निः": "fire",
          "भस्मसात्": "to ashes",
          "कुरुते": "turns",
          "अर्जुन": "O Arjuna",
          "ज्ञानाग्निः": "the fire of knowledge",
          "सर्वकर्माणि": "all reactions to material activities",
          "तथा": "similarly"
        },
        significance: "Famous metaphor of knowledge as fire"
      },
      {
        number: 38,
        sanskrit: "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते। तत्स्वयं योगसंसिद्धः कालेनात्मनि विन्दति।।",
        transliteration: "na hi jñānena sadṛśaṃ pavitram iha vidyate | tat svayaṃ yoga-saṃsiddhaḥ kālenātmani vindati ||",
        translation: "In this world, there is nothing so sublime and pure as transcendental knowledge. Such knowledge is the mature fruit of all mysticism. And one who has become accomplished in the practice of devotional service enjoys this knowledge within himself in due course of time.",
        explanation: "Krishna declares transcendental knowledge to be the most purifying force in existence. This knowledge naturally develops within those who practice yoga consistently over time.",
        wordMeaning: {
          "न": "nothing",
          "हि": "certainly",
          "ज्ञानेन": "with knowledge",
          "सदृशम्": "in comparison",
          "पवित्रम्": "sanctified",
          "इह": "in this world",
          "विद्यते": "exists",
          "तत्": "that",
          "स्वयम्": "himself",
          "योगसंसिद्धः": "he who is accomplished in devotional service",
          "कालेन": "in course of time",
          "आत्मनि": "in himself",
          "विन्दति": "enjoys"
        }
      },
      {
        number: 39,
        sanskrit: "श्रद्धावाँल्लभते ज्ञानं तत्परः संयतेन्द्रियः। ज्ञानं लब्ध्वा परां शान्तिमचिरेणाधिगच्छति।।",
        transliteration: "śraddhāvāl labhate jñānaṃ tat-paraḥ saṃyatendriyaḥ | jñānaṃ labdhvā parāṃ śāntim acireṇādhigacchati ||",
        translation: "A faithful man who is dedicated to transcendental knowledge and who subdues his senses is eligible to achieve such knowledge, and having achieved it he quickly attains the supreme spiritual peace.",
        explanation: "Krishna describes the qualifications for transcendental knowledge: faith, dedication, and sense control. One who possesses these quickly attains supreme peace through knowledge.",
        wordMeaning: {
          "श्रद्धावान्": "a faithful man",
          "लभते": "achieves",
          "ज्ञानम्": "knowledge",
          "तत्परः": "very much attached to it",
          "संयतेन्द्रियः": "controlled senses",
          "लब्ध्वा": "achieving",
          "पराम्": "transcendental",
          "शान्तिम्": "peace",
          "अचिरेण": "very soon",
          "अधिगच्छति": "attains"
        }
      },
      {
        number: 40,
        sanskrit: "अज्ञश्चाश्रद्दधानश्च संशयात्मा विनश्यति। नायं लोकोऽस्ति न परो न सुखं संशयात्मनः।।",
        transliteration: "ajñaś cāśraddadhānaś ca saṃśayātmā vinaśyati | nāyaṃ loko 'sti na paro na sukhaṃ saṃśayātmanaḥ ||",
        translation: "But ignorant and faithless persons who doubt the revealed scriptures do not attain God consciousness; they fall down. For the doubting soul there is happiness neither in this world nor in the next.",
        explanation: "Krishna warns about the fate of those who lack knowledge, faith, and are filled with doubt - they cannot progress spiritually and remain unhappy in this world and the next.",
        wordMeaning: {
          "अज्ञः": "a fool who has no knowledge",
          "च": "and",
          "अश्रद्दधानः": "without faith in revealed scriptures",
          "संशयात्मा": "a doubting nature",
          "विनश्यति": "falls back",
          "न": "never",
          "अयम्": "in this",
          "लोकः": "world",
          "अस्ति": "there is",
          "परः": "in the next life",
          "सुखम्": "happiness",
          "संशयात्मनः": "of the doubting soul"
        }
      },
      {
        number: 41,
        sanskrit: "योगसंन्यस्तकर्माणं ज्ञानसंछिन्नसंशयम्। आत्मवन्तं न कर्माणि निबध्नन्ति धनञ्जय।।",
        transliteration: "yoga-saṃnyasta-karmāṇaṃ jñāna-saṃchinna-saṃśayam | ātmavantaṃ na karmāṇi nibadhnanti dhanaṃjaya ||",
        translation: "One who acts in devotional service, renouncing the fruits of his activities, and whose doubts have been destroyed by transcendental knowledge, is situated factually in the self. Thus he is not bound by the reactions of work, O conqueror of riches.",
        explanation: "Krishna describes the liberated soul who acts in yoga while renouncing results, whose doubts are cut by knowledge, and who is established in the Self - such a person is not bound by karmic reactions.",
        wordMeaning: {
          "योगसंन्यस्तकर्माणम्": "one who renounces the results of all activities",
          "ज्ञानसंछिन्नसंशयम्": "one whose doubts are cut away by knowledge",
          "आत्मवन्तम्": "situated in the self",
          "न": "never",
          "कर्माणि": "works",
          "निबध्नन्ति": "do bind",
          "धनञ्जय": "O conqueror of riches"
        }
      },
      {
        number: 42,
        sanskrit: "तस्मादज्ञानसम्भूतं हृत्स्थं ज्ञानासिनात्मनः। छित्त्वैनं संशयं योगमातिष्ठोत्तिष्ठ भारत।।",
        transliteration: "tasmād ajñāna-sambhūtaṃ hṛt-sthaṃ jñānāsinātmanaḥ | chittvainaṃ saṃśayaṃ yogam ātiṣṭhotiṣṭha bhārata ||",
        translation: "Therefore, armed with yoga, stand and fight, O Bharata! Slash the doubts about the self, which have sprung from ignorance and have taken hold in your heart, with the sword of self-knowledge.",
        explanation: "Krishna concludes Chapter 4 by encouraging Arjuna to cut through his heart's doubts with the sword of self-knowledge and stand up to fight, armed with the understanding of yoga.",
        wordMeaning: {
          "तस्मात्": "therefore",
          "अज्ञानसम्भूतम्": "born of ignorance",
          "हृत्स्थम्": "situated in the heart",
          "ज्ञानासिना": "by the weapon of knowledge",
          "आत्मनः": "of the self",
          "छित्त्वा": "cutting off",
          "एनम्": "this",
          "संशयम्": "doubt",
          "योगम्": "in yoga",
          "आतिष्ठ": "be situated",
          "उत्तिष्ठ": "stand up to fight",
          "भारत": "O descendant of Bharata"
        },
        significance: "Concluding verse urging action with knowledge"
      }
    ]
  },

  // Chapter 5 - Renunciation of Action
  {
    number: 5,
    title: "Renunciation of Action",
    sanskrit: "कर्मसंन्यासयोग",
    theme: "True Renunciation and Inner Peace",
    summary: "Krishna clarifies the relationship between renunciation and action, showing that both paths lead to the same goal when practiced with proper understanding.",
    keyThemes: [
      "True renunciation versus mere inaction",
      "Inner peace through detachment",
      "Unity of different spiritual paths",
      "The renunciate in action"
    ],
    verseCount: 29,
    verses: [
      {
        number: 10,
        sanskrit: "ब्रह्मण्याधाय कर्माणि सङ्गं त्यक्त्वा करोति यः। लिप्यते न स पापेन पद्मपत्रमिवाम्भसा।।",
        transliteration: "brahmaṇy ādhāya karmāṇi saṅgaṃ tyaktvā karoti yaḥ | lipyate na sa pāpena padma-patram ivāmbhasā ||",
        translation: "One who performs action, offering them to Brahman and abandoning attachment, is not affected by sin, just as a lotus leaf is not touched by water.",
        explanation: "Beautiful analogy of the lotus leaf - one who acts without attachment remains untouched by the consequences, just as a lotus leaf remains dry despite being in water.",
        wordMeaning: {
          "ब्रह्मणि": "to Brahman",
          "आधाय": "offering",
          "कर्माणि": "actions",
          "सङ्गम्": "attachment",
          "त्यक्त्वा": "abandoning",
          "लिप्यते न": "is not affected",
          "पापेन": "by sin",
          "पद्मपत्रम्": "lotus leaf",
          "अम्भसा": "by water"
        },
        significance: "Famous lotus leaf analogy for detached action"
      }
    ]
  },

  // Chapter 6 - Meditation and Self-Control
  {
    number: 6,
    title: "Meditation and Self-Control",
    sanskrit: "ध्यानयोग",
    theme: "The Practice of Meditation",
    summary: "Krishna provides detailed instructions on meditation, self-control, and the characteristics of a true yogi. This chapter is the complete guide to dhyana yoga.",
    keyThemes: [
      "Dhyana Yoga - meditation practice",
      "Self-discipline and mental control",
      "Balanced living and moderation",
      "Characteristics of an established yogi"
    ],
    verseCount: 47,
    verses: [
      {
        number: 5,
        sanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्। आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः।।",
        transliteration: "uddhared ātmanātmānaṃ nātmānam avasādayet | ātmaiva hy ātmano bandhur ātmaiva ripur ātmanaḥ ||",
        translation: "One should lift oneself by one's own efforts and not degrade oneself. The mind alone is one's friend as well as one's enemy.",
        explanation: "A powerful verse on self-responsibility. We are our own greatest friend when the mind is controlled, and our own worst enemy when it's uncontrolled.",
        wordMeaning: {
          "उद्धरेत्": "should lift",
          "आत्मना": "by the self",
          "आत्मानम्": "the self",
          "न अवसादयेत्": "should not degrade",
          "आत्मा एव": "the self alone",
          "बन्धुः": "friend",
          "रिपुः": "enemy"
        },
        significance: "Self-responsibility and mind control"
      },
      {
        number: 35,
        sanskrit: "असंशयं महाबाहो मनो दुर्निग्रहं चलम्। अभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते।।",
        transliteration: "asaṃśayaṃ mahā-bāho mano durnigrahaṃ calam | abhyāsena tu kaunteya vairāgyeṇa ca gṛhyate ||",
        translation: "Undoubtedly, O mighty-armed Arjuna, the mind is difficult to control and restless. But by practice and detachment, it can be controlled.",
        explanation: "Krishna acknowledges that controlling the mind is indeed difficult, but provides the solution: consistent practice (abhyasa) and detachment (vairagya).",
        wordMeaning: {
          "असंशयम्": "undoubtedly",
          "मनः": "mind",
          "दुर्निग्रहम्": "difficult to control",
          "चलम्": "restless",
          "अभ्यासेन": "by practice",
          "वैराग्येण": "by detachment",
          "गृह्यते": "can be controlled"
        },
        significance: "Method for controlling the restless mind"
      }
    ]
  },

  // Chapter 7 - Knowledge and Experience
  {
    number: 7,
    title: "Knowledge and Experience",
    sanskrit: "ज्ञानविज्ञानयोग",
    theme: "Divine Manifestations and Devotion",
    summary: "Krishna explains His divine nature, the two aspects of His energy, and how He can be known through devotion and proper understanding.",
    keyThemes: [
      "Para and Apara Prakriti (higher and lower nature)",
      "Divine manifestations in creation",
      "Devotion as means of knowledge",
      "The four types of devotees"
    ],
    verseCount: 30,
    verses: [
      {
        number: 19,
        sanskrit: "बहूनां जन्मनामन्ते ज्ञानवान्मां प्रपद्यते। वासुदेवः सर्वमिति स महात्मा सुदुर्लभः।।",
        transliteration: "bahūnāṃ janmanām ante jñānavān māṃ prapadyate | vāsudevaḥ sarvam iti sa mahātmā sudurlabhaḥ ||",
        translation: "After many births, one who possesses knowledge surrenders to Me, knowing that Vasudeva is all. Such a great soul is very rare.",
        explanation: "After lifetimes of spiritual evolution, the wise soul realizes that Krishna (Vasudeva) is the source and substance of everything, leading to complete surrender.",
        wordMeaning: {
          "बहूनाम्": "of many",
          "जन्मनाम्": "births",
          "अन्ते": "at the end",
          "ज्ञानवान्": "one with knowledge",
          "प्रपद्यते": "surrenders",
          "वासुदेवः सर्वम्": "Vasudeva is everything",
          "महात्मा": "great soul",
          "सुदुर्लभः": "very rare"
        },
        significance: "The rarity of complete realization and surrender"
      }
    ]
  },

  // Chapter 8 - The Imperishable Absolute
  {
    number: 8,
    title: "The Imperishable Absolute",
    sanskrit: "अक्षरब्रह्मयोग",
    theme: "The Ultimate Reality and Death",
    summary: "Krishna explains the nature of Brahman, the process of departure from the body at death, and the importance of remembering the Divine at the final moment.",
    keyThemes: [
      "Akshara Brahman - the imperishable reality",
      "The process of departure at death",
      "Remembrance of the Divine",
      "The two paths after death"
    ],
    verseCount: 28,
    verses: [
      {
        number: 7,
        sanskrit: "तस्मात्सर्वेषु कालेषु मामनुस्मर युध्य च। मय्यर्पितमनोबुद्धिर्मामेवैष्यस्यसंशयम्।।",
        transliteration: "tasmāt sarveṣu kāleṣu mām anusmara yudhya ca | mayy arpita-mano-buddhir mām evaiṣyasy asaṃśayam ||",
        translation: "Therefore, at all times remember Me and fight. With mind and intelligence offered to Me, you will undoubtedly come to Me alone.",
        explanation: "Krishna advises constant remembrance of the Divine while performing one's duties. When the mind and intellect are offered to God, union with the Divine is assured.",
        wordMeaning: {
          "तस्मात्": "therefore",
          "सर्वेषु कालेषु": "at all times",
          "अनुस्मर": "remember",
          "युध्य च": "and fight",
          "मयि अर्पित": "offered to Me",
          "मनोबुद्धिः": "mind and intelligence",
          "एष्यसि": "you will come",
          "असंशयम्": "without doubt"
        },
        significance: "Constant remembrance while performing duty"
      }
    ]
  },

  // Chapter 9 - Royal Knowledge
  {
    number: 9,
    title: "Royal Knowledge",
    sanskrit: "राजविद्याराजगुह्ययोग",
    theme: "Supreme Devotion and Divine Grace",
    summary: "Krishna shares the most confidential knowledge about devotion, His all-pervading nature, and the simplicity of pure devotional service.",
    keyThemes: [
      "Raja Vidya - the king of knowledge",
      "The all-pervading nature of the Divine",
      "Pure devotional service",
      "Divine acceptance of simple offerings"
    ],
    verseCount: 34,
    verses: [
      {
        number: 26,
        sanskrit: "पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति। तदहं भक्त्युपहृतमश्नामि प्रयतात्मनः।।",
        transliteration: "patraṃ puṣpaṃ phalaṃ toyaṃ yo me bhaktyā prayacchati | tad ahaṃ bhakty-upahṛtam aśnāmi prayatātmanaḥ ||",
        translation: "Whoever offers Me with devotion a leaf, a flower, fruit or water, I accept that offering of love from the pure-hearted.",
        explanation: "This beautiful verse shows that God values the devotion behind the offering, not its material value. Even the simplest offering given with love is accepted by the Divine.",
        wordMeaning: {
          "पत्रम्": "leaf",
          "पुष्पम्": "flower",
          "फलम्": "fruit",
          "तोयम्": "water",
          "भक्त्या": "with devotion",
          "प्रयच्छति": "offers",
          "भक्त्युपहृतम्": "offered with devotion",
          "अश्नामि": "I accept",
          "प्रयतात्मनः": "from the pure-hearted"
        },
        significance: "Divine acceptance of simple devotional offerings"
      }
    ]
  },

  // Chapter 10 - Divine Manifestations
  {
    number: 10,
    title: "Divine Manifestations",
    sanskrit: "विभूतियोग",
    theme: "God's Opulences in Creation",
    summary: "Krishna describes His various manifestations and divine opulences throughout creation, helping devotees recognize the Divine presence everywhere.",
    keyThemes: [
      "Divine opulences in creation",
      "Recognizing God in all manifestations",
      "The source of all beings",
      "Infinite nature of divine manifestations"
    ],
    verseCount: 42,
    verses: [
      {
        number: 20,
        sanskrit: "अहमात्मा गुडाकेश सर्वभूताशयस्थितः। अहमादिश्च मध्यं च भूतानामन्त एव च।।",
        transliteration: "aham ātmā guḍākeśa sarva-bhūtāśaya-sthitaḥ | aham ādiś ca madhyaṃ ca bhūtānām anta eva ca ||",
        translation: "I am the Self, O Arjuna, dwelling in the hearts of all beings. I am the beginning, middle, and end of all beings.",
        explanation: "Krishna reveals His presence as the Supersoul in every heart and as the source, sustainer, and ultimate destination of all existence.",
        wordMeaning: {
          "अहम् आत्मा": "I am the Self",
          "सर्वभूताशयस्थितः": "dwelling in all hearts",
          "आदिः": "beginning",
          "मध्यम्": "middle",
          "अन्तः": "end",
          "भूतानाम्": "of all beings"
        },
        significance: "God as the inner Self and source of all existence"
      }
    ]
  },

  // Chapter 11 - The Universal Form
  {
    number: 11,
    title: "The Universal Form",
    sanskrit: "विश्वरूपदर्शनयोग",
    theme: "Cosmic Vision of the Divine",
    summary: "Arjuna witnesses Krishna's awe-inspiring universal form, revealing His cosmic nature as the destroyer and creator of all worlds.",
    keyThemes: [
      "Vishva Rupa - the universal form",
      "Divine cosmic vision",
      "God as time and destroyer",
      "The overwhelming nature of divine reality"
    ],
    verseCount: 55,
    verses: [
      {
        number: 32,
        sanskrit: "कालोऽस्मि लोकक्षयकृत्प्रवृद्धो लोकान्समाहर्तुमिह प्रवृत्तः। ऋतेऽपि त्वां न भविष्यन्ति सर्वे येऽवस्थिताः प्रत्यनीकेषु योधाः।।",
        transliteration: "kālo 'smi loka-kṣaya-kṛt pravṛddho lokān samāhartum iha pravṛttaḥ | ṛte 'pi tvāṃ na bhaviṣyanti sarve ye 'vasthitāḥ pratyanīkeṣu yodhāḥ ||",
        translation: "I am Time, the destroyer of worlds, grown mature, engaged here in destroying the worlds. Even without you, all these warriors arrayed in the opposing armies will not survive.",
        explanation: "In His cosmic form, Krishna reveals Himself as Kala (Time), the ultimate destroyer. This shows the inevitable nature of cosmic cycles and the insignificance of individual ego in the face of divine will.",
        wordMeaning: {
          "कालः अस्मि": "I am Time",
          "लोकक्षयकृत्": "destroyer of worlds",
          "प्रवृद्धः": "grown mature",
          "समाहर्तुम्": "to destroy",
          "प्रवृत्तः": "engaged",
          "न भविष्यन्ति": "will not survive",
          "योधाः": "warriors"
        },
        significance: "Famous 'I am become Death' verse - God as Time"
      }
    ]
  },

  // Chapter 12 - Devotion and the Ultimate Goal
  {
    number: 12,
    title: "Devotion and the Ultimate Goal",
    sanskrit: "भक्तियोग",
    theme: "The Path of Pure Devotion",
    summary: "Krishna explains the superiority of devotion over other spiritual practices and describes the divine qualities of His devotees.",
    keyThemes: [
      "Bhakti Yoga - the path of devotion",
      "Qualities of true devotees",
      "Divine love and grace",
      "Devotion as the easiest path"
    ],
    verseCount: 20,
    verses: [
      {
        number: 6,
        sanskrit: "ये तु सर्वाणि कर्माणि मयि संन्यस्य मत्पराः। अनन्येनैव योगेन मां ध्यायन्त उपासते।।",
        transliteration: "ye tu sarvāṇi karmāṇi mayi saṃnyasya mat-parāḥ | ananyenaiva yogena māṃ dhyāyanta upāsate ||",
        translation: "But those who worship Me, surrendering all activities to Me, devoted to Me alone, meditating on Me with single-pointed devotion...",
        explanation: "This verse describes the ideal devotee who has surrendered everything to Krishna and worships with exclusive devotion.",
        wordMeaning: {
          "सर्वाणि कर्माणि": "all activities",
          "मयि संन्यस्य": "surrendering to Me",
          "मत्पराः": "devoted to Me",
          "अनन्येन योगेन": "with exclusive devotion",
          "ध्यायन्तः": "meditating",
          "उपासते": "worship"
        },
        significance: "Description of the ideal devotee"
      }
    ]
  },

  // Chapter 13 - Nature, Enjoyer, and Consciousness
  {
    number: 13,
    title: "Nature, Enjoyer, and Consciousness",
    sanskrit: "क्षेत्रक्षेत्रज्ञविभागयोग",
    theme: "Field and Knower of the Field",
    summary: "Krishna explains the distinction between the body (field), the soul (knower), and the ultimate consciousness that pervades all.",
    keyThemes: [
      "Kshetra and Kshetrajna - field and knower",
      "Prakriti and Purusha - nature and consciousness",
      "The supreme consciousness",
      "Knowledge that leads to liberation"
    ],
    verseCount: 35,
    verses: [
      {
        number: 2,
        sanskrit: "क्षेत्रज्ञं चापि मां विद्धि सर्वक्षेत्रेषु भारत। क्षेत्रक्षेत्रज्ञयोर्ज्ञानं यत्तज्ज्ञानं मतं मम।।",
        transliteration: "kṣetrajñaṃ cāpi māṃ viddhi sarva-kṣetreṣu bhārata | kṣetra-kṣetrajñayor jñānaṃ yat taj jñānaṃ mataṃ mama ||",
        translation: "Know Me also as the knower of the field in all fields, O Bharata. The knowledge of the field and its knower is true knowledge in My opinion.",
        explanation: "Krishna reveals that He is the ultimate knower present in all bodies (fields). True knowledge consists in understanding the difference between matter, individual consciousness, and supreme consciousness.",
        wordMeaning: {
          "क्षेत्रज्ञम्": "knower of the field",
          "मां विद्धि": "know Me as",
          "सर्वक्षेत्रेषु": "in all fields",
          "क्षेत्रक्षेत्रज्ञयोः": "of field and knower",
          "ज्ञानम्": "knowledge",
          "मतम् मम": "My opinion"
        },
        significance: "God as the ultimate knower in all beings"
      }
    ]
  },

  // Chapter 14 - The Three Modes of Nature
  {
    number: 14,
    title: "The Three Modes of Nature",
    sanskrit: "गुणत्रयविभागयोग",
    theme: "Transcending the Three Gunas",
    summary: "Krishna explains the three modes of material nature (sattva, rajas, tamas) and how to transcend them to achieve liberation.",
    keyThemes: [
      "Sattva, Rajas, Tamas - the three modes",
      "How the modes bind the soul",
      "Transcending the modes",
      "Signs of one beyond the modes"
    ],
    verseCount: 27,
    verses: [
      {
        number: 4,
        sanskrit: "सर्वयोनिषु कौन्तेय मूर्तयः सम्भवन्ति याः। तासां ब्रह्म महद्योनिरहं बीजप्रदः पिता।।",
        transliteration: "sarva-yoniṣu kaunteya mūrtayaḥ sambhavanti yāḥ | tāsāṃ brahma mahad yonir ahaṃ bīja-pradaḥ pitā ||",
        translation: "All species of life, O Arjuna, are made possible by birth in material nature, and I am the seed-giving father.",
        explanation: "Krishna explains His role as the father of all living beings. Brahman (material nature) is like the mother, and He provides the seed (consciousness) that creates all forms of life.",
        wordMeaning: {
          "सर्वयोनिषु": "in all species",
          "मूर्तयः": "forms",
          "सम्भवन्ति": "are born",
          "ब्रह्म": "Brahman/material nature",
          "महद्योनिः": "great womb",
          "बीजप्रदः": "seed-giving",
          "पिता": "father"
        },
        significance: "God as the father of all living beings"
      }
    ]
  },

  // Chapter 15 - The Supreme Person
  {
    number: 15,
    title: "The Supreme Person",
    sanskrit: "पुरुषोत्तमयोग",
    theme: "The Ultimate Reality",
    summary: "Krishna describes the cosmic tree of material existence, explains the perishable and imperishable aspects of creation, and reveals Himself as the Supreme Person.",
    keyThemes: [
      "Ashvattha tree - cosmic tree analogy",
      "Perishable and imperishable aspects",
      "Purushottama - the Supreme Person",
      "Knowledge leading to liberation"
    ],
    verseCount: 20,
    verses: [
      {
        number: 7,
        sanskrit: "ममैवांशो जीवलोके जीवभूतः सनातनः। मनःषष्ठानीन्द्रियाणि प्रकृतिस्थानि कर्षति।।",
        transliteration: "mamaivāṃśo jīva-loke jīva-bhūtaḥ sanātanaḥ | manaḥ-ṣaṣṭhānīndriyāṇi prakṛti-sthāni karṣati ||",
        translation: "The living entities in this world are My eternal fragmental parts. Due to conditioned life, they struggle very hard with the six senses, including the mind.",
        explanation: "Krishna reveals that all living beings are His eternal parts, but due to material conditioning, they struggle with the senses and mind in the material world.",
        wordMeaning: {
          "मम एव अंशः": "My very part",
          "जीवलोके": "in the world of living beings",
          "जीवभूतः": "living entity",
          "सनातनः": "eternal",
          "मनःषष्ठानि": "with mind as sixth",
          "इन्द्रियाणि": "senses",
          "कर्षति": "struggles with"
        },
        significance: "All souls as eternal parts of the Divine"
      }
    ]
  },

  // Chapter 16 - Divine and Demoniac Natures
  {
    number: 16,
    title: "Divine and Demoniac Natures",
    sanskrit: "दैवासुरसम्पद्विभागयोग",
    theme: "Two Paths of Human Nature",
    summary: "Krishna describes the divine and demoniac qualities in human beings, explaining which lead to liberation and which to bondage.",
    keyThemes: [
      "Daivi Sampat - divine qualities",
      "Asuri Sampat - demoniac qualities",
      "Two destinies of human beings",
      "Following scriptural guidelines"
    ],
    verseCount: 24,
    verses: [
      {
        number: 3,
        sanskrit: "तेजो क्षमा धृतिः शौचमद्रोहो नातिमानिता। भवन्ति सम्पदं दैवीमभिजातस्य भारत।।",
        transliteration: "tejo kṣamā dhṛtiḥ śaucam adroho nāti-mānitā | bhavanti sampadaṃ daivīm abhijātasya bhārata ||",
        translation: "Vigor, forgiveness, fortitude, purity, absence of envy, and freedom from pride - these qualities belong to those born with divine nature, O Bharata.",
        explanation: "Krishna lists some of the divine qualities that lead to liberation. These qualities should be cultivated by spiritual seekers.",
        wordMeaning: {
          "तेजः": "vigor/radiance",
          "क्षमा": "forgiveness",
          "धृतिः": "fortitude",
          "शौचम्": "purity",
          "अद्रोहः": "absence of envy",
          "न अतिमानिता": "freedom from pride",
          "दैवीम् सम्पदम्": "divine nature"
        },
        significance: "Divine qualities for spiritual progress"
      }
    ]
  },

  // Chapter 17 - The Divisions of Faith
  {
    number: 17,
    title: "The Divisions of Faith",
    sanskrit: "श्रद्धात्रयविभागयोग",
    theme: "Three Types of Faith",
    summary: "Krishna explains how the three modes of nature affect faith, food, sacrifice, austerity, and charity, and introduces the sacred mantra Om Tat Sat.",
    keyThemes: [
      "Three types of faith based on the modes",
      "Sattvic, Rajasic, Tamasic practices",
      "Proper food, sacrifice, and charity",
      "The sacred syllable Om Tat Sat"
    ],
    verseCount: 28,
    verses: [
      {
        number: 23,
        sanskrit: "ॐ तत्सदिति निर्देशो ब्रह्मणस्त्रिविधः स्मृतः। ब्राह्मणास्तेन वेदाश्च यज्ञाश्च विहिताः पुरा।।",
        transliteration: "oṃ tat sad iti nirdeśo brahmaṇas tri-vidhaḥ smṛtaḥ | brāhmaṇās tena vedāś ca yajñāś ca vihitāḥ purā ||",
        translation: "From the beginning of creation, the three syllables Om Tat Sat have been used to indicate the Supreme Absolute Truth. These were used by brahmanas while chanting Vedic hymns and performing sacrifices.",
        explanation: "Krishna introduces the sacred mantra Om Tat Sat, which represents the Absolute Truth and has been used since creation for spiritual purposes.",
        wordMeaning: {
          "ॐ तत् सत्": "Om Tat Sat",
          "निर्देशः": "indication",
          "ब्रह्मणः": "of Brahman",
          "त्रिविधः": "threefold",
          "स्मृतः": "remembered",
          "पुरा": "from the beginning",
          "विहिताः": "prescribed"
        },
        significance: "The sacred mantra representing Absolute Truth"
      }
    ]
  },

  // Chapter 18 - Liberation through Renunciation (Complete)
  {
    number: 18,
    title: "Liberation through Renunciation",
    sanskrit: "मोक्षसंन्यासयोग", 
    theme: "Ultimate Surrender and Liberation",
    summary: "The concluding chapter of Krishna's teachings, emphasizing complete surrender to the Divine. This chapter synthesizes all previous teachings and provides the ultimate path to liberation.",
    keyThemes: [
      "The true meaning of renunciation", 
      "Complete surrender to the Divine",
      "The ultimate assurance of liberation",
      "Synthesis of all spiritual paths"
    ],
    verseCount: 78,
    verses: [
      {
        number: 1,
        sanskrit: "अर्जुन उवाच। संन्यासस्य महाबाहो तत्त्वमिच्छामि वेदितुम्। त्यागस्य च हृषीकेश पृथक्केशिनिषूदन।।",
        transliteration: "arjuna uvāca | saṃnyāsasya mahā-bāho tattvam icchāmi veditum | tyāgasya ca hṛṣīkeśa pṛthak keśināsuśūdana ||",
        translation: "Arjuna said: O mighty-armed one, I wish to understand the purpose of renunciation [sannyasa] and of the renunciation of the fruits of action [tyaga], O killer of Kesi, O Hrishikesha.",
        explanation: "Arjuna opens the final chapter by asking about two important concepts: sannyasa (formal renunciation) and tyaga (renunciation of fruits of action). This sets up Krishna's comprehensive teaching on true renunciation.",
        wordMeaning: {
          "संन्यासस्य": "of renunciation",
          "तत्त्वम्": "the truth",
          "इच्छामि वेदितुम्": "I wish to know",
          "त्यागस्य च": "and of tyaga",
          "पृथक्": "separately",
          "केशिनिषूदन": "O killer of Kesi"
        }
      },
      {
        number: 2,
        sanskrit: "श्रीभगवानुवाच। काम्यानां कर्मणां न्यासं संन्यासं कवयो विदुः। सर्वकर्मफलत्यागं प्राहुस्त्यागं विचक्षणाः।।",
        transliteration: "śrī-bhagavān uvāca | kāmyānāṃ karmaṇāṃ nyāsaṃ saṃnyāsaṃ kavayo viduḥ | sarva-karma-phala-tyāgaṃ prāhus tyāgaṃ vicakṣaṇāḥ ||",
        translation: "The Supreme Personality of Godhead said: The giving up of activities that are based on material desire is what great learned men call the renounced order of life [sannyasa]. And giving up the results of all activities is what the wise call renunciation [tyaga].",
        explanation: "Krishna clarifies the distinction between sannyasa and tyaga. Sannyasa involves giving up desire-motivated actions, while tyaga means performing necessary actions but renouncing attachment to their results.",
        wordMeaning: {
          "काम्यानाम् कर्मणाम्": "of desire-motivated activities",
          "न्यासम्": "giving up",
          "संन्यासम्": "renounced order",
          "कवयः विदुः": "learned men know",
          "सर्वकर्मफलत्यागम्": "renunciation of all fruits of action",
          "प्राहुः त्यागम्": "call tyaga",
          "विचक्षणाः": "the wise"
        }
      },
      {
        number: 3,
        sanskrit: "त्याज्यं दोषवदित्येके कर्म प्राहुरमनीषिणः। यज्ञदानतपःकर्म न त्याज्यमिति चापरे।।",
        transliteration: "tyājyaṃ doṣavad ity eke karma prāhur manīṣiṇaḥ | yajña-dāna-tapaḥ-karma na tyājyam iti cāpare ||",
        translation: "Some learned men declare that all kinds of fruitive activities should be given up as faulty, while others maintain that acts of sacrifice, charity, and penance should never be abandoned.",
        explanation: "Krishna presents different philosophical viewpoints on renunciation. Some say all action should be abandoned as inherently flawed, while others argue that spiritual activities like sacrifice, charity, and austerity should continue.",
        wordMeaning: {
          "त्याज्यम्": "should be given up",
          "दोषवत्": "as faulty",
          "इति एके": "thus some",
          "कर्म": "all activities",
          "मनीषिणः": "learned men",
          "यज्ञदानतपःकर्म": "acts of sacrifice, charity and penance",
          "न त्याज्यम्": "should not be abandoned",
          "इति अपरे": "thus others"
        }
      },
      {
        number: 4,
        sanskrit: "निश्चयं शृणु मे तत्र त्यागे भरतर्षभ। त्यागो हि पुरुषव्याघ्र त्रिविधः सम्प्रकीर्तितः।।",
        transliteration: "niścayaṃ śṛṇu me tatra tyāge bharatarṣabha | tyāgo hi puruṣa-vyāghra tri-vidhaḥ samprakīrtitaḥ ||",
        translation: "O best of the Bharatas, now hear My judgment about renunciation. O tiger among men, renunciation is declared in the scriptures to be of three kinds.",
        explanation: "Krishna promises to give His definitive judgment on renunciation. He introduces the concept that renunciation, like everything else in material nature, is of three types according to the three modes of nature.",
        wordMeaning: {
          "निश्चयम्": "definitive judgment",
          "शृणु मे": "hear from Me",
          "तत्र त्यागे": "about renunciation",
          "भरतर्षभ": "O best of Bharatas",
          "पुरुषव्याघ्र": "O tiger among men",
          "त्रिविधः": "of three kinds",
          "सम्प्रकीर्तितः": "declared"
        }
      },
      {
        number: 5,
        sanskrit: "यज्ञदानतपः कर्म न त्याज्यं कार्यमेव तत्। यज्ञो दानं तपश्चैव पावनानि मनीषिणाम्।।",
        transliteration: "yajña-dāna-tapaḥ karma na tyājyaṃ kāryam eva tat | yajño dānaṃ tapaś caiva pāvanāni manīṣiṇām ||",
        translation: "Acts of sacrifice, charity, and penance are not to be given up; they must be performed. Indeed, sacrifice, charity, and penance purify even the great souls.",
        explanation: "Krishna gives His verdict: the three spiritual activities - sacrifice, charity, and penance - should never be abandoned. Even advanced souls benefit from these purifying activities.",
        wordMeaning: {
          "यज्ञदानतपः कर्म": "acts of sacrifice, charity and penance",
          "न त्याज्यम्": "are not to be given up",
          "कार्यम् एव तत्": "they must be performed",
          "यज्ञः दानम् तपः": "sacrifice, charity and penance",
          "पावनानि": "purifying",
          "मनीषिणाम्": "even for great souls"
        }
      },
      {
        number: 6,
        sanskrit: "एतान्यपि तु कर्माणि सङ्गं त्यक्त्वा फलानि च। कर्तव्यानीति मे पार्थ निश्चितं मतमुत्तमम्।।",
        transliteration: "etāny api tu karmāṇi saṅgaṃ tyaktvā phalāni ca | kartavyānīti me pārtha niścitaṃ matam uttamam ||",
        translation: "But even these activities should be performed without attachment and without desire for results. This is My final and supreme judgment, O Partha.",
        explanation: "Krishna emphasizes that even the most spiritual activities should be performed without attachment or desire for results. This is the highest understanding of action - performing duty while maintaining inner detachment.",
        wordMeaning: {
          "एतानि अपि तु": "even these activities",
          "सङ्गम् त्यक्त्वा": "giving up attachment",
          "फलानि च": "and results",
          "कर्तव्यानि": "should be performed",
          "इति मे": "this is My",
          "निश्चितम् मतम् उत्तमम्": "definite supreme opinion"
        }
      },
      {
        number: 58,
        sanskrit: "मच्चित्तः सर्वदुर्गाणि मत्प्रसादात्तरिष्यसि। अथ चेत्त्वमहंकारान्न श्रोष्यसि विनङ्क्ष्यसि।।",
        transliteration: "mac-cittaḥ sarva-durgāṇi mat-prasādāt tariṣyasi | atha cet tvam ahaṅkārān na śroṣyasi vinaṅkṣyasi ||",
        translation: "If you become conscious of Me, you will pass over all obstacles of conditional life by My grace. But if you do not listen due to false ego, you will perish.",
        explanation: "Krishna warns about the consequences of ego and emphasizes that consciousness of the Divine is the key to overcoming all difficulties in life.",
        wordMeaning: {
          "मच्चित्तः": "conscious of Me",
          "सर्वदुर्गाणि": "all obstacles",
          "मत्प्रसादात्": "by My grace",
          "तरिष्यसि": "you will overcome",
          "अहंकारात्": "due to false ego",
          "न श्रोष्यसि": "do not listen",
          "विनङ्क्ष्यसि": "you will perish"
        },
        significance: "Warning against ego and promise of divine grace"
      },
      {
        number: 66,
        sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज। अहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः।।",
        transliteration: "sarva-dharmān parityajya mām ekaṃ śaraṇaṃ vraja | ahaṃ tvā sarva-pāpebhyo mokṣayiṣyāmi mā śucaḥ ||",
        translation: "Abandon all varieties of dharma and surrender unto Me alone. I will deliver you from all sinful reactions. Do not fear.",
        explanation: "The ultimate verse of surrender - Krishna's final and most important teaching. This verse promises complete liberation through total surrender to the Divine.",
        wordMeaning: {
          "सर्वधर्मान्": "all varieties of dharma",
          "परित्यज्य": "abandoning", 
          "माम्": "unto Me",
          "एकम्": "alone",
          "शरणम्": "surrender",
          "व्रज": "go",
          "सर्वपापेभ्यः": "from all sinful reactions", 
          "मोक्षयिष्यामि": "I will deliver",
          "मा शुचः": "do not fear"
        },
        significance: "The ultimate teaching - complete surrender to the Divine"
      },
      {
        number: 78,
        sanskrit: "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः। तत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम।।",
        transliteration: "yatra yogeśvaraḥ kṛṣṇo yatra pārtho dhanur-dharaḥ | tatra śrīr vijayo bhūtir dhruvā nītir matir mama ||",
        translation: "Wherever there is Krishna, the master of yoga, and wherever there is Arjuna, the supreme archer, there will also certainly be opulence, victory, extraordinary power, and morality. This is my opinion.",
        explanation: "Sanjaya concludes the Gita with this verse, stating that wherever divine consciousness (Krishna) and dedicated action (Arjuna) combine, success and righteousness are guaranteed.",
        wordMeaning: {
          "यत्र": "wherever",
          "योगेश्वरः": "master of yoga",
          "कृष्णः": "Krishna",
          "पार्थः": "Partha (Arjuna)",
          "धनुर्धरः": "archer",
          "श्रीः": "opulence",
          "विजयः": "victory",
          "भूतिः": "power",
          "ध्रुवा नीतिः": "firm morality"
        },
        significance: "Final verse promising success when divine and human unite"
      }
    ]
  }
];

// Utility function to get chapter data
export const getChapterData = (chapterNumber: number): Chapter | undefined => {
  return bhagavadGitaData.find(chapter => chapter.number === chapterNumber);
};

// Utility function to get specific verse
export const getVerse = (chapterNumber: number, verseNumber: number): Verse | undefined => {
  const chapter = getChapterData(chapterNumber);
  return chapter?.verses.find(verse => verse.number === verseNumber);
};

// Get all chapters summary
export const getAllChaptersSummary = () => {
  return bhagavadGitaData.map(chapter => ({
    number: chapter.number,
    title: chapter.title,
    sanskrit: chapter.sanskrit,
    theme: chapter.theme,
    verseCount: chapter.verseCount,
    summary: chapter.summary.substring(0, 150) + "..."
  }));
};
