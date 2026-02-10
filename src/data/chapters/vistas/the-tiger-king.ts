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
      question: 'What is the irony in the Tiger King’s death?',
      answerVerbatim: 'After killing 99 real tigers with high-tech weapons, he is killed by a "sliver" of wood from a poorly made toy tiger.',
      markingSchemePoints: [
        'Prophecy fulfillment',
        'Victory of destiny over ego',
        'Trivial cause for a "great" hunter'
      ],
      year: 'CBSE 2024',
      type: 'Short'
    },
    {
      question: 'How did the Dewan manage the 100th tiger?',
      answerVerbatim: 'He secretly brought an old, weak tiger from the People’s Park in Madras and left it in the forest for the King to find.',
      markingSchemePoints: [
        'Fear of the King’s temper',
        'Manipulation of the hunt',
        'Dewan’s role in the "farce"'
      ],
      year: 'CBSE 2023',
      type: 'Short'
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
