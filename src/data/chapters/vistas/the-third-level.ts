import { ChapterForensics } from '../../../types';

export const theThirdLevel: ChapterForensics = {
  id: 'the-third-level',
  title: 'The Third Level',
  author: 'Jack Finney',
  summary: 'A psychological thriller and social commentary that explores the concept of "escapism" in the modern world. Charley, a 31-year-old New Yorker, discovers a non-existent "Third Level" at Grand Central Station that leads to the year 1894. The story blurs the line between reality and hallucination, as Charley seeks the peace of Galesburg, Illinois, to escape the "insecurity, fear, war, and worry" of the 20th century. His psychiatrist friend Sam, initially skeptical, eventually "finds" the level himself, proving the cyclic nature of human longing for the past.',
  narrativeVoice: 'First-person (Charley). Subjective, observational, and increasingly anxious.',
  setting: '1950s New York (Grand Central) and 1894 Galesburg, Illinois.',
  authorStyle: 'Blend of realism and science fiction (Time Travel); detailed descriptive imagery of the past (gas lights, brass spittoons).',
  themes: [
    'Escapism vs. Reality',
    'Psychological impact of modern stress',
    'The intersection of time and space',
    'Human longing for a simpler past (Galesburg)'
  ],
  milestones: [
    { time: 'Late Night', event: 'Charley takes a shortcut through Grand Central to reach home faster.' },
    { time: 'The Tunnel', event: 'He enters a corridor that feels like a "moving tree root" and finds a different floor.' },
    { time: '1894 Entry', event: 'He witnesses 19th-century attire, "The World" newspaper from June 11, 1894, and old currency.' },
    { time: 'The Stamp Shop', event: 'He tries to buy tickets to Galesburg but fails due to modern currency differences.' },
    { time: 'The Revelation', event: 'Sam (the psychiatrist) disappears; Charley finds a "First Day Cover" from Sam in 1894.' }
  ],
  characters: [
    {
      name: 'Charley',
      traits: ['Imaginative', 'Anxious', 'Hobbyist (Philatelist)', 'Escapist'],
      conflict: 'Failure to reconcile with the harsh realities of the post-war world.',
      growth: 'Begins with a rational search for a shortcut but ends in a full metaphysical acceptance of the past.',
      evidence: 'His persistence in searching for the Third Level every weekend.'
    },
    {
      name: 'Sam Weiner',
      traits: ['Pragmatic (initially)', 'Observant', 'Ironical'],
      conflict: 'Internal battle between clinical logic and personal desire for peace.',
      growth: 'Moves from diagnosing Charley\'s "waking dream wish fulfillment" to becoming a fellow wanderer in 1894.',
      evidence: 'The letter sent to Charley from Galesburg, 1894.'
    }
  ],
  motifs: [
    { symbol: 'The Third Level', meaning: 'A sub-surface realm representing the psychological escape from modern misery.' },
    { symbol: 'First Day Covers', meaning: 'The bridge between the past and present; a symbol of Charley\'s connection to history.' },
    { symbol: '1894', meaning: 'The "pre-war" era of peace and security (before WWI and WWII).' },
    { symbol: 'Grand Central Station', meaning: 'The hub of transition, constantly growing like a tree root (expanding reality).' }
  ],
  dictionary: [
    { word: 'Waking-dream', context: 'A waking-dream wish fulfillment', synonym: 'Daydream/Hallucination' },
    { word: 'Subway', context: 'The ducking into the subway', synonym: 'Underground railway' },
    { word: 'Spittoons', context: 'On the floor were brass spittoons', synonym: 'Receptacles for spitting' },
    { word: 'Philately', context: 'My stamp collecting... a temporary refuge', synonym: 'Stamp collecting' }
  ],
  triggers: [
    {
      question: 'Why did Charley want to go to Galesburg?',
      answerVerbatim: 'He wanted to escape the insecurity and fear of the modern world for the peaceful, stress-free life of Galesburg in 1894.',
      markingSchemePoints: [
        'Escape from modern worry',
        'Peaceful 1894 atmosphere',
        'Childhood memories/Security'
      ],
      year: 'CBSE 2024',
      type: 'Short'
    },
    {
      question: 'What was the irony of Sam\'s disappearance?',
      answerVerbatim: 'The psychiatrist who dismissed Charley\'s experience as "wish fulfillment" ended up finding and settling in the very past he analyzed.',
      markingSchemePoints: [
        'Psychiatrist becomes the patient',
        'Logical mind accepts the illogical',
        'Validation of the Third Level'
      ],
      year: 'CBSE 2025 (Sample)',
      type: 'Short'
    }
  ],
  distinctions: [
    {
      title: 'Modern New York vs. 1894 Galesburg',
      comparison: {
        labelA: 'Modern World',
        labelB: '1894 Galesburg',
        points: [
          { a: 'Marked by war, worry, insecurity, and fear.', b: 'Marked by peaceful summer evenings and big lawns.' },
          { a: 'Technological, fast-paced subway systems.', b: 'Gas lights, derby hats, and slow-paced living.' }
        ]
      }
    }
  ]
};
