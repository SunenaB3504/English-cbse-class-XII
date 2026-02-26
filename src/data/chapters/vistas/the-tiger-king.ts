import { ChapterForensics } from '../../../types';

export const theTigerKing: ChapterForensics = {
  id: 'the-tiger-king',
  title: 'The Tiger King',
  author: 'Kalki',
  summary: 'A satirical farce that mocks the vanity, arrogance, and whimsicality of those in power. Sir Jilani Jung Jung Bahadur, the Maharaja of Pratibandapuram, attempts to defy a prophecy that he would be killed by a tiger. He ruthlessly slaughters ninety-nine tigers, only to meet his end through a tiny wooden toy tiger. The story exposes the callousness of rulers toward nature and their subjects, while highlighting the inescapable nature of destiny.',
  narrativeVoice: 'Omniscient, Satirical, and Storyteller-like. Uses dramatic irony to critique the protagonist.',
  setting: 'The Princely State of Pratibandapuram (Pre-independence India).',
  authorStyle: 'Humorous, filled with hyperbole, irony, and sharp social commentary on political sycophancy.',
  themes: [
    'Inevitability of fate (Fatalism)',
    'Abuse of power and authority',
    'Callousness toward wildlife/nature',
    'Satire on political sycophancy'
  ],
  milestones: [
    { time: 'Infancy', event: 'The 10-day-old prince speaks and challenges the astrologer\'s prediction.' },
    { time: 'Coronation', event: 'Charley (the King) starts a tiger hunt to prove the astrologer wrong.' },
    { time: 'The Vow', event: 'Bans tiger hunting for everyone else; vows to hunt 100 tigers himself.' },
    { time: 'Marriage', event: 'Marries a princess from a state with a large tiger population to reach his goal.' },
    { time: 'The 100th Tiger', event: 'Faints while shooting; the tiger is actually killed by his guards to avoid his wrath.' },
    { time: 'The End', event: 'A sliver from a cheap wooden tiger causes a fatal infection, fulfilling the prophecy.' }
  ],
  characters: [
    {
      name: 'The Tiger King',
      traits: ['Arrogant', 'Stubborn', 'Fearless (physically)', 'Whimsical'],
      conflict: 'Human Ego vs. Divine Prophecy.',
      growth: 'No moral growth; he remains obsessed with his tally until his "ironic" death.',
      evidence: 'Willingness to risk his kingdom just to hunt tigers.'
    },
    {
      name: 'The Dewan',
      traits: ['Sycophantic', 'Practical', 'Fearful', 'Cunning'],
      conflict: 'Survival vs. Integrity.',
      growth: 'Remains a survivor, manipulating situations (like finding the 100th tiger) to stay alive.',
      evidence: 'Importing an old tiger from Madras to satisfy the King.'
    }
  ],
  motifs: [
    { symbol: '100 Tigers', meaning: 'The vanity of human goals and the destruction of nature for ego.' },
    { symbol: 'Wooden Tiger', meaning: 'The "poetic justice" and the true source of his downfall (low-quality art/nature\'s revenge).' },
    { symbol: 'Astrologer\'s Finger', meaning: 'The human attempt to "point" at destiny, which the King tries to bite/thwart.' },
    { symbol: 'Pratibandapuram', meaning: 'A microcosm of arbitrary and absolute monarchical power.' }
  ],
  dictionary: [
    { word: 'Indomitable', context: 'A man of indomitable courage', synonym: 'Unbeatable/Firm' },
    { word: 'Edict', context: 'An edict was proclaimed to the effect...', synonym: 'Official decree' },
    { word: 'Sycophancy', context: 'The court was full of sycophants', synonym: 'Flattery' },
    { word: 'Supputation', context: 'A matter of grave supputation', synonym: 'Calculation' }
  ],
  triggers: [
    {
      question: "Read the extract and answer:\nIn other words, the Tiger King is dead. The manner of his death is a matter of extraordinary interest... “The child will grow up to become the warrior of warriors, hero of heroes... But...” they bit their lips and swallowed hard... “This is a secret which should not be revealed at all. And yet we are forced to speak out.”\n\nIn the given extract, what emotion were the astrologers feeling when they 'bit their lips and swallowed hard', and why is the line 'the most fantastic aspect of his demise' an example of contrast?",
      answerVerbatim: "The physical gesture of biting their lips indicates that the astrologers were feeling intense unease and discomfort about revealing a tragic prophecy to the King. The phrase 'the most fantastic aspect of his demise' is a contrast because 'fantastic' is usually associated with something positive and exciting, while 'demise' refers to a tragic and negative end.",
      markingSchemePoints: [
        "Astrologers felt unease/discomfort",
        "Reluctance to reveal a deadly prophecy",
        "Contrast: 'fantastic' (positive) vs. 'demise' (negative/tragic)"
      ],
      year: "2023-24",
      type: "RTC",
      marks: 2,
      aiExplanation: "The astrologers are terrified ('bit their lips') because delivering a prophecy of death to a powerful royal family could literally cost them their heads; their unease highlights the danger of speaking truth to absolute power. The author then employs a brilliant linguistic contrast (or oxymoron) by pairing 'fantastic' with 'demise'. He sarcastically frames the King's death as a spectacular, unbelievable joke rather than a solemn tragedy, mocking the King's lifelong royal vanity."
    },
    {
      question: "Discuss the significance of the toy tiger in the climax of ‘The Tiger King.’",
      answerVerbatim: "The toy tiger, though inanimate, becomes the instrument of the Tiger King's downfall, fulfilling the prophecy. It symbolizes the tragic irony / inescapability of fate – death came from a wooden toy... The climax emphasizes the futility of the King's efforts to manipulate his destiny...",
      markingSchemePoints: [
        "Inanimate toy fulfills the prophecy",
        "Symbolizes tragic irony and inescapability of fate",
        "Emphasizes the futility of manipulating destiny"
      ],
      year: "2024-25",
      type: "Short",
      marks: 2,
      aiExplanation: "The toy tiger represents the ultimate tragic irony of the story. The King spent his entire life hunting down a hundred living, breathing tigers to defy a prophecy, only to be killed by a cheap, inanimate wooden toy. It symbolizes that no matter how much power or wealth an aloof ruler possesses, they cannot manipulate or escape their predestined fate."
    },
    {
      question: 'What is the irony in the Tiger King’s death?',
      answerVerbatim: 'After killing 99 real tigers with high-tech weapons, he is killed by a "sliver" of wood from a poorly made toy tiger.',
      markingSchemePoints: [
        'Prophecy fulfillment',
        'Victory of destiny over ego',
        'Trivial cause for a "great" hunter'
      ],
      year: '2024-25 | Short',
      type: 'Short',
      marks: 2,
      aiExplanation: "The irony lies in the stark contrast between the King's massive preparations and the tiny reality of his demise. He spent years mastering high-tech hunting, massacring 99 powerful, living tigers with modern rifles, believing he had conquered nature and fate. Yet, his death was caused by a crude, poorly-carved slice of wood from a 'fake' tiger, proving that destiny always has the final, mocking laugh."
    },
    {
      question: 'How did the Dewan manage the 100th tiger?',
      answerVerbatim: 'He secretly brought an old, weak tiger from the People’s Park in Madras and left it in the forest for the King to find.',
      markingSchemePoints: [
        'Fear of the King’s temper',
        'Manipulation of the hunt',
        'Dewan’s role in the "farce"'
      ],
      year: '2025-26 | Short',
      type: 'Short',
      marks: 2,
      aiExplanation: "The Dewan's action reveals the sheer sycophancy and fear that paralyzes the King's court. Terrified of the King's wrath if the 100th tiger wasn't found, the Dewan resorts to a ridiculous farce: hauling an old, decrepit tiger from a zoo (People's Park in Madras) and releasing it into the wild. It underscores how absolute power forces subordinates into absurd, desperate lies just to survive."
    }
  ],
  distinctions: [
    {
      title: 'The King vs. Nature',
      comparison: {
        labelA: 'The King',
        labelB: 'Nature (Tigers)',
        points: [
          { a: 'Views wildlife as mere "targets" for his score.', b: 'Suffers extinction in the state due to his greed.' },
          { a: 'Tries to dominate the "natural" order of fate.', b: 'Ultimately reclaims justice through a wooden proxy.' }
        ]
      }
    }
  ]
};
