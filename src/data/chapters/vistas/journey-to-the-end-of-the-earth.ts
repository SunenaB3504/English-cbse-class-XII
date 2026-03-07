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
      question: "Read the extract and answer:\nClimate change is one of the most hotly contested environmental debates... Either way, Antarctica is a crucial element in this debate—not just because it’s the only place in the world, which has never sustained a human population and therefore remains relatively ‘pristine’ in this respect; but more importantly, because it holds in its ice-cores half-million-year-old carbon records...\n\nHow does the absence of a human population in Antarctica make it significant in the climate change debate, and why is the analogy of a 'time machine' appropriate for its carbon records?",
      answerVerbatim: "I. Pristine Control: Antarctica acts as a 'control group' for measuring human impact precisely because it has no permanent residential population.\nII. Time Machine Analogy: The half-million-year-old carbon records in ice cores offer a literal window into past atmospheric conditions.\nIII. Scientific Reference: It provides an unaltered history of global climate changes.",
      markingSchemePoints: [
        "Pristine environment without human impact serves as a vital reference",
        "Carbon records allow observation of past climates",
        "Acts exactly like a time machine for atmospheric conditions"
      ],
      year: "2023-24",
      type: "RTC",
      marks: 2,
      aiExplanation: "Antarctica is described as 'pristine' precisely because no massive human civilization has been there to pollute it, making it the perfect 'control group' to measure global environmental changes against. Furthermore, the half-million-year-old carbon records in its ice act as a literal time machine—scientists can extract these ice cores and perfectly analyze the exact atmospheric conditions from hundreds of thousands of years ago, giving crucial context to predict future global warming."
    },
    {
      question: "To visit Antarctica now is to be a part of that history... When you think about all that can happen in a million years, it can get pretty mind-boggling. How does the author imply the role of geological knowledge in understanding the Earth's past and potential future changes?",
      answerVerbatim: "I. Essential Context: Geological knowledge of Gondwana and tectonic plate movement explains current climate shifts.\nII. Predictions: Understanding past shifts (like the Himalayan collision) is vital for predicting future environmental change.\nIII. Historic Unity: Antarctica reveals the ancient separation of continents and the resulting cooling of the Earth.",
      markingSchemePoints: [
        "Geological knowledge is essential for grasping the Earth's past",
        "Tectonic shifts (Himalayas, South America) altered climate",
        "Understanding past helps predict future environmental changes"
      ],
      year: "2024-25",
      type: "RTC",
      marks: 1,
      aiExplanation: "The author stresses that the massive, slow collisions of tectonic plates over millions of years (like India jamming into Asia) drastically altered the global climate. By studying these monumental past shifts recorded in Antarctica's geology, scientists can better predict how current climate changes might similarly reshape the Earth's future."
    },
    {
      question: 'Why is Antarctica the place to go to understand the Earth’s past?',
      answerVerbatim: "I. Time Capsule: Preserves ancient carbon records trapped in deep layers of ice.\nII. Absence of Humans: Remains relatively ‘pristine’ and provides a clear measurement of industrial impact.\nIII. Gondwana Legacy: Effectively documents the history of the ancient supercontinent.",
      markingSchemePoints: [
        'Geological time capsule',
        'Pristine environment (unaffected by humans)',
        'Evidence of Gondwana'
      ],
      year: '2024-25 | Short',
      type: 'Short',
      marks: 2,
      aiExplanation: "Antarctica is described as a 'geological time capsule.' Because it has never sustained a human population, it remains pristine and largely unaltered by industrial civilization. More importantly, its deep ice cores trap ancient carbon records from half a million years ago, allowing scientists to literally study the atmosphere of the past to predict the climate of the future."
    },
    {
      question: 'What is the significance of "Students on Ice"?',
      answerVerbatim: "I. Future Policymakers: Targets high school students who have the capacity to change global environmental laws.\nII. Experiential Epiphany: First-hand witness to collapsing glaciers is far more impactful than textbook theory.\nIII. Planet Stewardship: Aimed at developing a deep respect and care for the Earth's delicate balance.",
      markingSchemePoints: [
        'Developing future policy makers',
        'First-hand witness to climate change',
        'Epiphany at a young age'
      ],
      year: '2025-26 | Short',
      type: 'Short',
      marks: 2,
      aiExplanation: "The 'Students on Ice' program shifts the focus of Antarctic expeditions from wealthy, thrill-seeking tourists to impressionable high school students. Geoff Green believes that by exposing teenagers directly to collapsing ice shelves and melting glaciers, they will experience a profound, life-altering epiphany. These students, as the 'future policy makers' of the world, are the ones who actually need to understand the urgency of the climate crisis in order to save the planet."
    },
    {
      question: "Imagine you are Tishani Doshi, the narrator of ‘Journey to the End of the Earth.’ Write a blog post about your experience in Antarctica, focusing on the profound impact of the environment on your understanding of the Earth’s past and future.\nYou may begin like this:\nStanding on the icy expanse of Antarctica, I was struck by...",
      answerVerbatim: "I. Sensory Shock: Awe at the sheer scale of the landscape and the profound silence.\nII. Educational Insight: Direct comprehension of Gondwana's legacy and Earth's history beyond books.\nIII. Urgent Warning: First-hand experience of melting glaciers creates a terrifying, personal understanding of climate change.\nIV. Responsibility: Realization of the human duty to protect this 'end of the world' to save our future.",
      markingSchemePoints: [
        "Awe at the sheer scale/profound silence of Antarctica",
        "Comprehension of Earth's history beyond books",
        "Observation of delicate ecosystem / rapid melting",
        "Stark warning about climate change / call for responsibility"
      ],
      year: "2025-26",
      type: "Long",
      marks: 5,
      aiExplanation: "In a blog post format, the author must blend immediate sensory shock with deep geological reflection. Tishani Doshi describes Antarctica not merely as a cold destination, but as a living time machine holding the carbon records of half a million years. The physical reality of witnessing collapsing ice shelves forcefully transforms intellectual knowledge of global warming into a terrifying, urgent emotional reality, highlighting humanity's devastating impact on the planet's future."
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
