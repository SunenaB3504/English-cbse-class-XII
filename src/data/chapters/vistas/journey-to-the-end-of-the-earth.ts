import { ChapterForensics } from '../../../types';

export const journeyToTheEndOfTheEarth: ChapterForensics = {
  id: 'journey-to-the-end-of-the-earth',
  title: 'Journey to the End of the Earth',
  author: 'Tishani Doshi',
  summary: 'A factual and philosophical account of the "Students on Ice" program, which takes high school students to Antarctica. Doshi explores the continent’s role as a geological time capsule, preserving the history of Gondwana—the ancient supercontinent. The narrative warns of the catastrophic impact of climate change (melting ice shelves, global warming) and emphasizes that small human actions can lead to massive environmental consequences. Antarctica is presented as the "perfect" place to study the Earth’s past, present, and future.',
  narrativeVoice: 'First-person (Doshi). Informative, urgent, and awe-struck.',
  setting: 'Antarctica (The coldest, driest, and windiest continent).',
  authorStyle: 'Travelogue/Journalistic essay. Uses scientific terminology mixed with poetic descriptions of the landscape.',
  themes: [
    'Environmental conservation and Global Warming',
    'Geological history (Gondwana)',
    'Interconnectedness of the Earth\'s systems',
    'Human impact on the "pristine" environment'
  ],
  milestones: [
    { time: 'Departure', event: 'Travels 100 hours crossing nine time zones and three bodies of water to reach Antarctica.' },
    { time: 'History', event: 'Reflection on Gondwana (650 million years ago) and the separation of India and Antarctica.' },
    { time: 'Observation', event: 'Witnessing the lack of human markers (trees, billboards) and the 24-hour austral summer light.' },
    { time: 'Science', event: 'Studying phytoplankton and their role in the global carbon cycle.' },
    { time: 'Walking on Water', event: 'The students walk on a meter-thick ice sheet above 180 meters of salt water.' }
  ],
  characters: [
    {
      name: 'Tishani Doshi',
      traits: ['Environmentally conscious', 'Observant', 'Philosophical'],
      conflict: 'Human progress vs. Planetary health.',
      growth: 'Deepens her understanding of the fragility of the Earth and the urgency of action.',
      evidence: 'Her reflection on how "small things" (phytoplankton) affect the "big things" (global climate).'
    },
    {
      name: 'Geoff Green',
      traits: ['Visionary', 'Educator', 'Canadian adventure-seeker'],
      conflict: 'Traditional tourism vs. Educational expeditions.',
      growth: 'Shifts from taking celebrities to taking students—future policy makers—to witness the cliimate crisis.',
      evidence: 'Leading the Students on Ice program for over six years.'
    }
  ],
  motifs: [
    { symbol: 'Gondwana', meaning: 'The ancient unity of Earth\'s landmasses before human interference.' },
    { symbol: 'Phytoplankton', meaning: 'The "small things" that sustain the entire food chain/Earth\'s life support.' },
    { symbol: 'Ice Shelves', meaning: 'The "canary in the coal mine" for global warming; their collapse signals disaster.' },
    { symbol: 'Students on Ice', meaning: 'Hope for the future and the power of educational epiphany.' }
  ],
  dictionary: [
    { word: 'Austral', context: 'The 24-hour austral summer light', synonym: 'Southern' },
    { word: 'Gondwana', context: 'Giant amalgamated southern supercontinent', synonym: 'Ancient landmass' },
    { word: 'Phytoplankton', context: 'Microscopic grasses of the sea', synonym: 'Micro-algae' },
    { word: 'Ephemeral', context: 'Ephemeral blue-green algae', synonym: 'Short-lived' }
  ],
  triggers: [
    {
      question: 'Why is Antarctica the place to go to understand the Earth’s past?',
      answerVerbatim: 'Because it holds in its ice-cores half-million-year-old carbon records trapped in its layers of ice.',
      markingSchemePoints: [
        'Geological time capsule',
        'Pristine environment (unaffected by humans)',
        'Evidence of Gondwana'
      ],
      year: 'CBSE 2024',
      type: 'Short'
    },
    {
      question: 'What is the significance of "Students on Ice"?',
      answerVerbatim: 'It provides high school students with an inspiring educational experience to develop respect and care for the planet.',
      markingSchemePoints: [
        'Developing future policy makers',
        'First-hand witness to climate change',
        'Epiphany at a young age'
      ],
      year: 'CBSE 2023',
      type: 'Short'
    }
  ],
  distinctions: [
    {
      title: 'Human Impact vs. Natural Resilience',
      comparison: {
        labelA: 'Human Civilization',
        labelB: 'Antarctica',
        points: [
          { a: 'Exists for only 12,000 years; created "ruckus" and dominance.', b: 'Exists for millions of years; maintains ancient records.' },
          { a: 'Increases CO2 levels and burns fossil fuels.', b: 'Suffers through melting ice shelves and ozone depletion.' }
        ]
      }
    }
  ]
};
