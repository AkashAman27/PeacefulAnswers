'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Heart, BookOpen, Play, Pause, Volume2, ArrowDown } from 'lucide-react'
import YouTubeEmbed from '@/components/ui/YouTubeEmbed'

gsap.registerPlugin(ScrollTrigger)

const hanumanChalisaVerses = [
  {
    id: 0,
    type: 'opening',
    hindi: 'श्री गुरु चरन सरोज रज, निज मन मुकुर सुधार।\nबरनउं रघुवर बिमल जसु, जो दायकु फल चार॥',
    devanagari: 'śrī guru carana saroja raja, nija mana mukura sudhāra\nbaranauṃ raghuvara bimala jasu, jo dāyaku phala cāra',
    english: 'Having cleansed the mirror of my mind with the dust of my Guru\'s lotus feet, I recite the pure fame of Raghuvir (Lord Rama), which grants the four fruits of life (dharma, artha, kama, moksha).',
    meaning: 'The opening verse emphasizes purifying one\'s mind through devotion to the Guru before reciting Lord Rama\'s glories.'
  },
  {
    id: 1,
    type: 'opening',
    hindi: 'बुद्धिहीन तनु जानिके, सुमिरौं पवन कुमार।\nबल बुधि विद्या देहु मोहिं, हरहु कलेस विकार॥',
    devanagari: 'buddhihīna tanu jānike, sumirauṃ pavana kumāra\nbala budhi vidyā dehu mohiṃ, harahu kalesa vikāra',
    english: 'Knowing myself to be ignorant, I meditate upon you, O Hanuman (son of the Wind God). Grant me strength, wisdom, and knowledge, and remove my afflictions and impurities.',
    meaning: 'This verse is a humble prayer to Hanuman for strength, wisdom, and spiritual purification.'
  },
  {
    id: 2,
    type: 'main',
    hindi: 'जय हनुमान ज्ञान गुण सागर।\nजय कपीस तिहुं लोक उजागर॥१॥',
    devanagari: 'jaya hanumāna jñāna guṇa sāgara\njaya kapīsa tihuṃ loka ujāgara',
    english: 'Hail Hanuman, ocean of wisdom and virtue! Hail the king of monkeys, illuminator of the three worlds!',
    meaning: 'This verse praises Hanuman as an ocean of wisdom and virtues who illuminates all three worlds.'
  },
  {
    id: 3,
    type: 'main',
    hindi: 'राम दूत अतुलित बल धामा।\nअञ्जनि पुत्र पवनसुत नामा॥२॥',
    devanagari: 'rāma dūta atulita bala dhāmā\nañjani putra pavanasuta nāmā',
    english: 'You are Rama\'s messenger, the abode of incomparable strength. You are known as the son of Anjani and Pavansut (son of the Wind God).',
    meaning: 'This verse describes Hanuman\'s role as Rama\'s messenger and his divine parentage.'
  },
  {
    id: 4,
    type: 'main',
    hindi: 'महाबीर विक्रम बजरंगी।\nकुमति निवार सुमति के संगी॥३॥',
    devanagari: 'mahābīra vikrama bajaraṅgī\nkumati nivāra sumati ke saṅgī',
    english: 'O great hero with a mighty vajra-like body! You dispel evil thoughts and are the companion of good sense.',
    meaning: 'This verse praises Hanuman\'s heroic nature and his ability to remove negative thoughts.'
  },
  {
    id: 5,
    type: 'main',
    hindi: 'कञ्चन बरन बिराज सुबेसा।\nकानन कुण्डल कुञ्चित केसा॥४॥',
    devanagari: 'kañcana barana birāja subesā\nkānana kuṇḍala kuñcita kesā',
    english: 'You shine with a golden complexion and beautiful dress. You wear earrings and have curly hair.',
    meaning: 'This verse describes Hanuman\'s divine appearance with golden complexion and beautiful features.'
  },
  {
    id: 6,
    type: 'main',
    hindi: 'हाथ बज्र औ ध्वजा बिराजै।\nकांधे मूंज जनेऊ साजै॥५॥',
    devanagari: 'hātha bajra au dhvajā birājai\nkāṃdhe mūṃja janeū sājai',
    english: 'In your hand shines the vajra and flag. On your shoulder is the sacred thread made of munja grass.',
    meaning: 'This verse describes the divine weapons and sacred thread that Hanuman carries.'
  },
  {
    id: 7,
    type: 'main',
    hindi: 'शंकर सुवन केसरी नन्दन।\nतेज प्रताप महा जग वन्दन॥६॥',
    devanagari: 'śaṅkara suvana kesarī nandana\nteja pratāpa mahā jaga vandana',
    english: 'You are the son of Shiva and Kesari\'s beloved child. Your glory and prowess are revered by the entire world.',
    meaning: 'This verse acknowledges Hanuman\'s divine parentage and worldwide reverence.'
  },
  {
    id: 8,
    type: 'main',
    hindi: 'विद्यावान गुणी अति चातुर।\nराम काज करिबे को आतुर॥७॥',
    devanagari: 'vidyāvāna guṇī ati cātura\nrāma kāja karibe ko ātura',
    english: 'You are learned, virtuous, and extremely intelligent. You are always eager to serve Lord Rama.',
    meaning: 'This verse praises Hanuman\'s wisdom and his devotion to serving Lord Rama.'
  },
  {
    id: 9,
    type: 'main',
    hindi: 'प्रभु चरित्र सुनिबे को रसिया।\nराम लखन सीता मन बसिया॥८॥',
    devanagari: 'prabhu caritra sunibe ko rasiyā\nrāma lakhana sītā mana basiyā',
    english: 'You delight in hearing the Lord\'s stories. Rama, Lakshman, and Sita reside in your heart.',
    meaning: 'This verse describes Hanuman\'s love for divine stories and how the holy trinity dwells in his heart.'
  },
  {
    id: 10,
    type: 'main',
    hindi: 'सूक्ष्म रूप धरि सियहिं दिखावा।\nविकट रूप धरि लंक जरावा॥९॥',
    devanagari: 'sūkṣma rūpa dhari siyahiṃ dikhāvā\nvikaṭa rūpa dhari laṅka jarāvā',
    english: 'Taking a subtle form, you appeared before Sita. Taking a fierce form, you burned Lanka.',
    meaning: 'This verse recalls Hanuman\'s ability to change forms - appearing gently to Sita and fiercely destroying Lanka.'
  },
  {
    id: 11,
    type: 'main',
    hindi: 'भीम रूप धरि असुर सँहारे।\nरामचन्द्र के काज सँवारे॥१०॥',
    devanagari: 'bhīma rūpa dhari asura saṃhāre\nrāmacandra ke kāja saṃvāre',
    english: 'Taking a mighty form, you destroyed the demons. You accomplished all tasks for Lord Ramachandra.',
    meaning: 'This verse highlights Hanuman\'s role in defeating demons and completing Rama\'s missions.'
  },
  {
    id: 12,
    type: 'main',
    hindi: 'लाय सञ्जीवन लखन जियाये।\nश्री रघुवीर हरषि उर लाये॥११॥',
    devanagari: 'lāya sañjīvana lakhana jiyāye\nśrī raghuvīra haraṣi ura lāye',
    english: 'Bringing the Sanjeevani herb, you revived Lakshman. Lord Raghuvir joyfully embraced you to his heart.',
    meaning: 'This verse recounts the famous episode of Hanuman bringing the life-saving herb to revive Lakshman.'
  },
  {
    id: 13,
    type: 'main',
    hindi: 'रघुपति कीन्ही बहुत बड़ाई।\nतुम मम प्रिय भरतहि सम भाई॥१२॥',
    devanagari: 'raghupati kīnhī bahuta baḍāī\ntuma mama priya bharatahi sama bhāī',
    english: 'Lord Raghupati praised you greatly, saying "You are as dear to me as my brother Bharata."',
    meaning: 'This verse shows Rama\'s immense love and appreciation for Hanuman, comparing him to his beloved brother.'
  },
  {
    id: 14,
    type: 'main',
    hindi: 'सहस बदन तुम्हरो जस गावैं।\nअस कहि श्रीपति कण्ठ लगावैं॥१३॥',
    devanagari: 'sahasa badana tumharo jasa gāvaiṃ\nasa kahi śrīpati kaṇṭha lagāvaiṃ',
    english: 'Even with a thousand mouths, your glory cannot be fully sung. Saying this, Lord Rama embraces you.',
    meaning: 'This verse emphasizes that Hanuman\'s glories are infinite and beyond complete description.'
  },
  {
    id: 15,
    type: 'main',
    hindi: 'सनकादिक ब्रह्मादि मुनीसा।\nनारद सारद सहित अहीसा॥१४॥',
    devanagari: 'sanakādika brahmādi munīsā\nnārada sārada sahita ahīsā',
    english: 'Sanaka and other sages, Brahma and great sages, Narada, Saraswati, and Shesha (the serpent king) -',
    meaning: 'This verse begins listing the great divine beings who praise Hanuman.'
  },
  {
    id: 16,
    type: 'main',
    hindi: 'जम कुबेर दिग्पाल जहाँ ते।\nकबि कोबिद कहि सकै कहाँ ते॥१५॥',
    devanagari: 'jama kubera digpāla jahāṃ te\nkabi kobida kahi sakai kahāṃ te',
    english: 'Yama, Kubera, the guardians of directions, and all poets and scholars - none can fully describe your glory.',
    meaning: 'This verse continues the list of divine beings, emphasizing that even they cannot fully describe Hanuman.'
  },
  {
    id: 17,
    type: 'main',
    hindi: 'तुम उपकार सुग्रीवहिं कीन्हा।\nराम मिलाय राज पद दीन्हा॥१६॥',
    devanagari: 'tuma upakāra sugrīvahiṃ kīnhā\nrāma milāya rāja pada dīnhā',
    english: 'You did a great favor to Sugriva by introducing him to Rama and helping him attain the throne.',
    meaning: 'This verse recalls how Hanuman helped Sugriva meet Rama and regain his kingdom.'
  },
  {
    id: 18,
    type: 'main',
    hindi: 'तुम्हरो मन्त्र बिभीषन माना।\nलङ्केश्वर भए सब जग जाना॥१७॥',
    devanagari: 'tumharo mantra bibhīṣana mānā\nlaṅkeśvara bhae saba jaga jānā',
    english: 'Vibhishana accepted your counsel and became the king of Lanka, as the whole world knows.',
    meaning: 'This verse highlights Hanuman\'s wisdom in counseling Vibhishana, leading to his kingship of Lanka.'
  },
  {
    id: 19,
    type: 'main',
    hindi: 'जुग सहस्र जोजन पर भानू।\nलील्यो ताहि मधुर फल जानू॥१८॥',
    devanagari: 'juga sahasra jojana para bhānū\nlīlyo tāhi madhura phala jānū',
    english: 'The sun is millions of miles away, yet you swallowed it thinking it was a sweet fruit.',
    meaning: 'This verse recalls the childhood episode where Hanuman leaped towards the sun, mistaking it for a fruit.'
  },
  {
    id: 20,
    type: 'main',
    hindi: 'प्रभु मुद्रिका मेलि मुख माहीं।\nजलधि लाँघि गये अचरज नाहीं॥१९॥',
    devanagari: 'prabhu mudrikā meli mukha māhīṃ\njaladhi lāṅghi gaye acaraja nāhīṃ',
    english: 'Holding Lord Rama\'s ring in your mouth, you crossed the ocean - this is no wonder for you.',
    meaning: 'This verse refers to Hanuman\'s famous leap across the ocean to Lanka carrying Rama\'s ring.'
  },
  {
    id: 21,
    type: 'main',
    hindi: 'दुर्गम काज जगत के जेते।\nसुगम अनुग्रह तुम्हरे तेते॥२०॥',
    devanagari: 'durgama kāja jagata ke jete\nsugama anugraha tumhare tete',
    english: 'All the difficult tasks in the world become easy with your grace and blessings.',
    meaning: 'This verse emphasizes Hanuman\'s power to make impossible tasks possible through his blessings.'
  },
  {
    id: 22,
    type: 'main',
    hindi: 'राम दुआरे तुम रखवारे।\nहोत न आज्ञा बिनु पैसारे॥२१॥',
    devanagari: 'rāma duāre tuma rakhavāre\nhota na ājñā binu paisāre',
    english: 'You are the guardian at Rama\'s door. No one can enter without your permission.',
    meaning: 'This verse establishes Hanuman as the devoted guardian and gatekeeper of Lord Rama.'
  },
  {
    id: 23,
    type: 'main',
    hindi: 'सब सुख लहै तुम्हारी सरना।\nतुम रक्षक काहू को डरना॥२२॥',
    devanagari: 'saba sukha lahai tumhārī saranā\ntuma rakṣaka kāhū ko ḍaranā',
    english: 'All happiness is obtained in your refuge. With you as protector, what is there to fear?',
    meaning: 'This verse assures that taking refuge in Hanuman brings all happiness and removes all fears.'
  },
  {
    id: 24,
    type: 'main',
    hindi: 'आपन तेज सम्हारो आपै।\nतीनों लोक हांक तें कांपै॥२३॥',
    devanagari: 'āpana teja samhāro āpai\ntīnoṃ loka hāṅka teṃ kāṅpai',
    english: 'You alone can contain your own radiance. All three worlds tremble at your roar.',
    meaning: 'This verse describes Hanuman\'s immense power that can shake the three worlds.'
  },
  {
    id: 25,
    type: 'main',
    hindi: 'भूत पिसाच निकट नहिं आवै।\nमहावीर जब नाम सुनावै॥२४॥',
    devanagari: 'bhūta pisāca nikaṭa nahiṃ āvai\nmahāvīra jaba nāma sunāvai',
    english: 'Ghosts and evil spirits cannot come near when the name of Mahavir (Hanuman) is chanted.',
    meaning: 'This verse highlights the protective power of chanting Hanuman\'s name against evil forces.'
  },
  {
    id: 26,
    type: 'main',
    hindi: 'नासै रोग हरै सब पीरा।\nजपत निरन्तर हनुमत बीरा॥२५॥',
    devanagari: 'nāsai roga harai saba pīrā\njapata nirantara hanumata bīrā',
    english: 'Diseases are destroyed and all pain is removed by constantly chanting the name of brave Hanuman.',
    meaning: 'This verse emphasizes the healing power of continuously reciting Hanuman\'s name.'
  },
  {
    id: 27,
    type: 'main',
    hindi: 'संकट तें हनुमान छुड़ावै।\nमन क्रम बचन ध्यान जो लावै॥२६॥',
    devanagari: 'saṅkaṭa teṃ hanumāna chuḍāvai\nmana krama bacana dhyāna jo lāvai',
    english: 'Hanuman rescues from troubles those who meditate on him with mind, action, and speech.',
    meaning: 'This verse assures protection from difficulties through sincere meditation on Hanuman.'
  },
  {
    id: 28,
    type: 'main',
    hindi: 'सब पर राम तपस्वी राजा।\nतिन के काज सकल तुम साजा॥२७॥',
    devanagari: 'saba para rāma tapasvī rājā\ntina ke kāja sakala tuma sājā',
    english: 'Over all is Lord Rama, the ascetic king. You accomplish all his tasks.',
    meaning: 'This verse acknowledges Rama as supreme and Hanuman as his devoted servant who fulfills all tasks.'
  },
  {
    id: 29,
    type: 'main',
    hindi: 'और मनोरथ जो कोई लावै।\nसोइ अमित जीवन फल पावै॥२८॥',
    devanagari: 'aura manoratha jo koī lāvai\nsoi amita jīvana phala pāvai',
    english: 'Whatever desires anyone brings to you, they receive unlimited fruits of life.',
    meaning: 'This verse promises fulfillment of desires and unlimited blessings for Hanuman\'s devotees.'
  },
  {
    id: 30,
    type: 'main',
    hindi: 'चारों जुग परताप तुम्हारा।\nहै परसिद्ध जगत उजियारा॥२९॥',
    devanagari: 'cāroṃ juga paratāpa tumhārā\nhai parasiddha jagata ujiyārā',
    english: 'Your glory spreads through all four yugas (ages). It is famous and illuminates the world.',
    meaning: 'This verse states that Hanuman\'s fame and glory are eternal, spanning all cosmic ages.'
  },
  {
    id: 31,
    type: 'main',
    hindi: 'साधु सन्त के तुम रखवारे।\nअसुर निकन्दन राम दुलारे॥३०॥',
    devanagari: 'sādhu santa ke tuma rakhavāre\nasura nikandana rāma dulāre',
    english: 'You are the protector of saints and sages. You destroy demons and are beloved of Rama.',
    meaning: 'This verse describes Hanuman\'s role as protector of the righteous and destroyer of evil.'
  },
  {
    id: 32,
    type: 'main',
    hindi: 'अष्टसिद्धि नव निधि के दाता।\nअस वर दीन जानकी माता॥३१॥',
    devanagari: 'aṣṭasiddhi nava nidhi ke dātā\nasa vara dīna jānakī mātā',
    english: 'You are the giver of the eight supernatural powers and nine treasures. Mother Janaki (Sita) granted you this boon.',
    meaning: 'This verse tells how Sita blessed Hanuman with the power to bestow divine siddhis and treasures.'
  },
  {
    id: 33,
    type: 'main',
    hindi: 'राम रसायन तुम्हरे पासा।\nसदा रहो रघुपति के दासा॥३२॥',
    devanagari: 'rāma rasāyana tumhare pāsā\nsadā raho raghupati ke dāsā',
    english: 'You possess the elixir of Rama\'s name. May you always remain the servant of Lord Raghupati.',
    meaning: 'This verse acknowledges that Hanuman possesses the divine nectar of Rama\'s name and eternal servitude.'
  },
  {
    id: 34,
    type: 'main',
    hindi: 'तुम्हरे भजन राम को पावै।\nजनम जनम के दुख बिसरावै॥३३॥',
    devanagari: 'tumhare bhajana rāma ko pāvai\njanama janama ke dukha bisarāvai',
    english: 'Through devotion to you, one attains Lord Rama and forgets the sorrows of countless births.',
    meaning: 'This verse promises that devotion to Hanuman leads to realization of Rama and liberation from suffering.'
  },
  {
    id: 35,
    type: 'main',
    hindi: 'अन्त काल रघुवर पुर जाई।\nजहाँ जन्म हरि भक्त कहाई॥३४॥',
    devanagari: 'anta kāla raghuvara pura jaī\njahāṃ janma hari bhakta kahāī',
    english: 'At the end of life, one goes to Raghuvir\'s abode, where one is born as a devotee of Hari.',
    meaning: 'This verse assures that devotees will reach Rama\'s divine realm and be born as devotees of God.'
  },
  {
    id: 36,
    type: 'main',
    hindi: 'और देवता चित्त न धरई।\nहनुमत सेइ सर्व सुख करई॥३५॥',
    devanagari: 'aura devatā citta na dharaī\nhanumata sei sarva sukha karaī',
    english: 'One need not worry about other deities. Serving Hanuman alone brings all happiness.',
    meaning: 'This verse suggests that devotion to Hanuman alone is sufficient for attaining all divine blessings.'
  },
  {
    id: 37,
    type: 'main',
    hindi: 'संकट कटै मिटै सब पीरा।\nजो सुमिरै हनुमत बलबीरा॥३६॥',
    devanagari: 'saṅkaṭa kaṭai miṭai saba pīrā\njo sumirai hanumata balabīrā',
    english: 'All troubles are cut away and all pain is removed for those who remember the mighty hero Hanuman.',
    meaning: 'This verse reaffirms the power of remembering Hanuman to overcome all difficulties and suffering.'
  },
  {
    id: 38,
    type: 'main',
    hindi: 'जै जै जै हनुमान गोसाईं।\nकृपा करहु गुरुदेव की नाईं॥३७॥',
    devanagari: 'jai jai jai hanumāna gosāīṃ\nkṛpā karahu gurudeva kī nāīṃ',
    english: 'Victory, victory, victory to Lord Hanuman! Bestow your grace upon me like a divine guru.',
    meaning: 'This verse is a victorious salutation requesting Hanuman\'s grace and guidance as a spiritual teacher.'
  },
  {
    id: 39,
    type: 'main',
    hindi: 'जो सत बार पाठ कर कोई।\nछूटहि बन्दि महासुख होई॥३८॥',
    devanagari: 'jo sata bāra pāṭha kara koī\nchūṭahi bandi mahāsukha hoī',
    english: 'Whoever recites this a hundred times will be freed from bondage and attain great happiness.',
    meaning: 'This verse promises liberation and supreme joy for those who recite the Chalisa a hundred times.'
  },
  {
    id: 40,
    type: 'main',
    hindi: 'जो यह पढ़े हनुमान चालीसा।\nहोय सिद्धि साखी गौरीसा॥३९॥',
    devanagari: 'jo yaha paḍhe hanumāna cālīsā\nhoya siddhi sākhī gaurīsā',
    english: 'Whoever reads this Hanuman Chalisa will attain success, as Gaurisa (Shiva) is the witness.',
    meaning: 'This verse guarantees spiritual success for readers of the Chalisa, with Shiva as witness.'
  },
  {
    id: 41,
    type: 'closing',
    hindi: 'तुलसीदास सदा हरि चेरा।\nकीजै नाथ हृदय महं डेरा॥४०॥',
    devanagari: 'tulasīdāsa sadā hari cerā\nkījai nātha hṛdaya mahaṃ ḍerā',
    english: 'Tulsidas is always the servant of Hari. O Lord, make your abode in my heart.',
    meaning: 'The final verse is Tulsidas\'s humble request for Hanuman to reside permanently in his heart.'
  },
  {
    id: 42,
    type: 'closing',
    hindi: 'पवन तनय संकट हरन, मंगल मूरति रूप।\nराम लखन सीता सहित, हृदय बसहु सुर भूप॥',
    devanagari: 'pavana tanaya saṅkaṭa harana, maṅgala mūrati rūpa\nrāma lakhana sītā sahita, hṛdaya basahu sura bhūpa',
    english: 'O son of the Wind, remover of troubles, embodiment of auspiciousness! O king of the gods, along with Rama, Lakshman, and Sita, please reside in my heart.',
    meaning: 'The concluding prayer requests Hanuman to dwell in the devotee\'s heart along with the divine family.'
  }
]

export default function HanumanChalisaPage() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const fullChantRef = useRef<HTMLDivElement>(null)
  const versesRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)
  
  const scrollToMeaning = () => {
    versesRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const section = sectionRef.current
    const title = titleRef.current
    const video = videoRef.current
    const fullChant = fullChantRef.current
    const verses = versesRef.current

    if (!section || !title) return

    // Create timeline for the page
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })

    // Animate title
    tl.fromTo(title, 
      { opacity: 0, y: 30, scale: 0.95 }, 
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power2.out' }
    )

    // Animate video section
    if (video) {
      tl.fromTo(video, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 
        '-=0.4'
      )
    }

    // Animate full chant
    if (fullChant) {
      tl.fromTo(fullChant, 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 
        '-=0.3'
      )
    }

    // Animate verses section
    if (verses) {
      const verseCards = verses.children
      tl.fromTo(verseCards, 
        { opacity: 0, y: 20, scale: 0.98 }, 
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.4, 
          stagger: 0.05,
          ease: 'power2.out' 
        }, 
        '-=0.2'
      )
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === section) {
          trigger.kill()
        }
      })
    }
  }, [])

  const getVerseColor = (type: string) => {
    switch (type) {
      case 'opening':
        return 'from-orange-100 to-yellow-100 border-orange-200'
      case 'main':
        return 'from-blue-50 to-indigo-50 border-blue-200'
      case 'closing':
        return 'from-red-100 to-pink-100 border-red-200'
      default:
        return 'from-gray-50 to-gray-100 border-gray-200'
    }
  }

  return (
    <section ref={sectionRef} className="min-h-screen py-12 px-4 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className="relative mb-12">
          {/* Understand Button - Top Right */}
          <div className="absolute top-0 right-0 z-10">
            <button 
              onClick={scrollToMeaning}
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <BookOpen className="w-5 h-5" />
              <span className="hidden sm:inline">Understand Hanuman Chalisa</span>
              <span className="sm:hidden">Understand</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-red-600 fill-current" />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent leading-relaxed py-2">
                हनुमान चालीसा
              </h1>
              <Heart className="w-8 h-8 text-red-600 fill-current" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              Hanuman Chalisa
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
              The sacred forty-verse prayer to Lord Hanuman, composed by the great saint Tulsidas. 
              Perfect for pandits and devotees to chant along.
            </p>
          </div>
        </div>

        {/* YouTube Video Section */}
        <div ref={videoRef} className="mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-orange-200">
              <h3 className="text-2xl font-bold text-center text-orange-800 mb-6">
                🎵 Original T-Series Hanuman Chalisa
              </h3>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                <YouTubeEmbed 
                  url="https://www.youtube.com/watch?v=AETFvQonfV8" 
                  title="Hanuman Chalisa - Gulshan Kumar, Hariharan - T-Series"
                  className="w-full h-full"
                />
              </div>
              
              {/* Credits Section */}
              <div className="mt-8 p-6 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-2xl border border-orange-200">
                <h4 className="text-lg font-bold text-orange-800 mb-4 text-center">
                  🙏 Credits & Attribution
                </h4>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="font-semibold text-gray-800">Original Composition</p>
                    <p className="text-gray-600">Sant Tulsidas</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Singer</p>
                    <p className="text-gray-600">Hariharan</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Music Label</p>
                    <p className="text-gray-600">
                      <a 
                        href="https://www.youtube.com/@TSeriesBhaktiSagar" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                      >
                        T-Series
                      </a> (Gulshan Kumar)
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    This rendition has over 4.6 billion views, making it the most-watched devotional song on YouTube.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Complete Chant Section */}
        <div ref={fullChantRef} className="mb-16">
          <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-3xl p-8 border border-red-200 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-red-800 mb-4">
                🔥 Complete Hanuman Chalisa for Chanting
              </h3>
              <p className="text-gray-700 text-lg">
                Recite the complete Chalisa below. Perfect for pandits and daily recitation.
              </p>
            </div>
            
            {/* Complete Text */}
            <div className="bg-white/90 rounded-2xl p-8 shadow-inner">
              <div className="text-center space-y-4">
                {hanumanChalisaVerses.map((verse, index) => (
                  <div key={verse.id} className="mb-6">
                    <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed whitespace-pre-line font-sanskrit">
                      {verse.hindi}
                    </p>
                    {index < hanumanChalisaVerses.length - 1 && (
                      <div className="border-b border-orange-200 my-4 w-24 mx-auto"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Instructions for Understanding */}
            <div className="text-center mt-8">
              <p className="text-gray-600 text-lg">
                Use the "Understand Hanuman Chalisa" button at the top right to learn the meaning of each verse
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Verses with Meanings */}
        <div ref={versesRef} className="space-y-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">
              📖 Verse-by-Verse Meanings & Translations
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Understand the deep spiritual meaning behind each verse of the Hanuman Chalisa
            </p>
          </div>
          
          {hanumanChalisaVerses.map((verse) => (
            <div
              key={verse.id}
              className={`verse-card relative bg-gradient-to-r ${getVerseColor(verse.type)} rounded-3xl p-8 shadow-lg border backdrop-blur-sm`}
            >
              {/* Verse Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {verse.type === 'opening' ? 'ॐ' : verse.type === 'closing' ? '॥' : verse.id - 1}
              </div>

              {/* Hindi Verse */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-orange-800 mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  हिंदी श्लोक
                </h3>
                <div className="bg-white/80 rounded-2xl p-6 border border-orange-100">
                  <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed text-center font-sanskrit whitespace-pre-line">
                    {verse.hindi}
                  </p>
                  <p className="text-lg text-gray-600 mt-4 text-center italic">
                    {verse.devanagari}
                  </p>
                </div>
              </div>

              {/* English Translation */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">English Translation</h4>
                <div className="bg-white/80 rounded-xl p-5 border border-blue-100">
                  <p className="text-gray-800 text-lg leading-relaxed">
                    {verse.english}
                  </p>
                </div>
              </div>

              {/* Meaning */}
              <div>
                <h4 className="text-lg font-semibold text-green-800 mb-3">Spiritual Meaning</h4>
                <div className="bg-white/80 rounded-xl p-5 border border-green-100">
                  <p className="text-gray-700 leading-relaxed">
                    {verse.meaning}
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-6 right-6 opacity-10">
                <div className="text-6xl">🙏</div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits and Conclusion */}
        <div className="mt-16 p-8 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-3xl border border-orange-200">
          <h3 className="text-2xl font-bold text-orange-800 mb-6 text-center">
            🌟 Benefits of Reciting Hanuman Chalisa
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div className="space-y-3">
              <p>• <strong>Protection:</strong> Shields from negative energies and evil forces</p>
              <p>• <strong>Strength:</strong> Provides physical, mental, and spiritual strength</p>
              <p>• <strong>Courage:</strong> Instills fearlessness and confidence</p>
              <p>• <strong>Wisdom:</strong> Enhances knowledge and understanding</p>
            </div>
            <div className="space-y-3">
              <p>• <strong>Healing:</strong> Removes diseases and ailments</p>
              <p>• <strong>Success:</strong> Helps overcome obstacles and achieve goals</p>
              <p>• <strong>Devotion:</strong> Deepens love for Lord Rama</p>
              <p>• <strong>Liberation:</strong> Leads to spiritual awakening and moksha</p>
            </div>
          </div>
        </div>

        {/* Footer Prayer */}
        <div className="mt-12 text-center">
          <p className="text-2xl font-bold text-orange-600 mb-4">
            जय श्री राम! जय हनुमान!
          </p>
          <p className="text-lg text-gray-600">
            May Lord Hanuman bless all devotees with strength, wisdom, and devotion
          </p>
        </div>
      </div>
    </section>
  )
}