import { PoetryForensics } from '../../../types';

export const keepingQuiet: PoetryForensics = {
  id: 'poem-2',
  title: 'Keeping Quiet',
  author: 'Pablo Neruda',
  summary: '"Keeping Quiet" is a profound philosophical poem that advocates for the transformative power of silence and introspection in a world plagued by chaos and conflict. Pablo Neruda begins with an invitation for everyone to count to twelve and remain still, using the number twelve to represent the hours of the day or the months of the year, suggesting a universal pause. This moment of silence is envisioned as an "exotic" experience because it would be free from the rush of engines and the noise of modern existence, bringing all of humanity into a "sudden strangeness" of unity. The poet argues that if we were to stop our mindless activities, even for a moment, the environmental destruction (fishermen hurting whales) and human suffering (the salt gatherer\'s hurt hands) would cease. He critiques those who prepare "green wars" or wars with gas and fire, pointing out that such victories are hollow because there are "no survivors" to celebrate them. Instead, he proposes that enemies should walk together like brothers, idling in the shade without any destructive purpose. Neruda clarifies that his request for stillness should not be mistaken for "total inactivity" or death, as he wants nothing to do with death; rather, he seeks a pause that can break the "sadness" of never understanding ourselves. He uses the metaphor of the Earth to show that what seems dead in winter actually possesses the potential for rebirth and life. The poem concludes by returning to the initial count of twelve, leaving the reader with the responsibility to internalize this silence. Ultimately, "Keeping Quiet" is a plea for brotherhood, environmental consciousness, and the rediscovery of our common human essence through the simple act of being still.',
  narrativeVoice: 'First Person (Persuasive / Reflective)',
  setting: 'Universal / Global (A moment of collective silence)',
  authorStyle: 'Symbolic, humanitarian, and meditative',
  themes: [
    'The Necessity of Self-introspection',
    'Universal Brotherhood and Peace',
    'Environmental Protection and Non-violence',
    'The Difference between Stillness and Inactivity'
  ],
  characters: [
    {
      name: 'The Speaker (Poet)',
      traits: ['Peace-loving', 'Reflective', 'Humanitarian'],
      conflict: 'External: The global obsession with "move" and "wars" that leads to self-destruction.',
      growth: 'Static; he acts as a guide or a mirror for humanity.',
      evidence: "I want no truck with death."
    },
    {
      name: 'Humanity (General)',
      traits: ['Rushed', 'Destructive', 'Unhappy'],
      conflict: 'Internal: The "sadness" of not understanding oneself despite being busy.',
      growth: 'Potential for growth through the proposed silence.',
      evidence: "Victories with no survivors."
    }
  ],
  motifs: [
    { symbol: 'Twelve', meaning: 'Represents the cycle of time (hours/months) and the need for a total pause.' },
    { symbol: 'Exotic Moment', meaning: 'Silence as a rare, otherworldly experience in a noisy world.' },
    { symbol: 'Clean Clothes', meaning: 'The change in perspective and the shedding of violent intentions.' },
    { symbol: 'The Earth', meaning: 'The ultimate teacher of how life exists within apparent stillness.' }
  ],
  dictionary: [
    { word: 'Introspection', context: 'The process of looking into one\'s own thoughts and feelings.', synonym: 'Self-examination' },
    { word: 'Idling', context: 'Spending time doing nothing; here it means a peaceful pause.', synonym: 'Inactivity / Lazing' },
    { word: 'Strangeness', context: 'The feeling of unity that would arise from sudden collective silence.', synonym: 'Unfamiliarity / Oddity' },
    { word: 'Survivors', context: 'Used to highlight the futility of wars.', synonym: 'Remnants / Endurers' }
  ],
  triggers: [
    {
      question: "What is the 'exotic moment' the poet refers to?",
      answerVerbatim: "The poet refers to the moment of total silence and stillness as 'exotic.' It would be exotic because it would be without rush, without engines, and would create a 'sudden strangeness' where everyone feels a sense of togetherness for the first time.",
      markingSchemePoints: [
        "Absence of noise and mechanical rush (engines)",
        "Feeling of 'sudden strangeness' or collective unity",
        "Departure from the mundane, chaotic routine of life"
      ],
      year: "2024-25 | Short",
      type: "Short"
    },
    {
      question: "How does the Earth teach us that there is life under apparent stillness?",
      answerVerbatim: "The poet uses the example of the Earth which 'when everything seems dead and later proves to be alive.' In winter, nature appears dormant and lifeless, yet it is actually preparing for new growth in spring. Similarly, silence is not death but a preparation for a better life.",
      markingSchemePoints: [
        "Metaphor of seasonal change (Winter to Spring)",
        "Life existing in a state of 'apparent' dormancy",
        "Distinction between 'total inactivity' and productive stillness"
      ],
      year: "2025-26 | SQP",
      type: "RTC"
    }
  ],
  rhymeScheme: 'Free Verse',
  poeticDevices: [
    { line: "Victory with no survivors", device: "Paradox", explanation: "Shows the futility of wars where winning means losing everything." },
    { line: "clean clothes", device: "Alliteration / Symbolism", explanation: "Represents a new perspective and change in heart." },
    { line: "Fishermen in the cold sea would not harm whales", device: "Imagery", explanation: "Represents the end of environmental exploitation." },
    { line: "hurt hands", device: "Alliteration / Synecdoche", explanation: "Represents the suffering of the laboring classes." }
  ],
  stanzaBreakdown: [
    { stanza: 1, summary: "Proposal to count to twelve and stop all movement/speech for a second.", tone: "Commanding / Quiet" },
    { stanza: 2, summary: "Imaging the exotic moment of global silence and unity.", tone: "Aspirational" },
    { stanza: 3, summary: "The suspension of violence against nature and the cessation of human labor/pain.", tone: "Empathetic" },
    { stanza: 4, summary: "Critique of war-mongers and the call for brotherhood.", tone: "Anti-war / Satirical" },
    { stanza: 5, summary: "Clarification on 'inactivity' vs 'death'; the problem of not understanding oneself.", tone: "Philosophical" },
    { stanza: 6, summary: "The lesson from the Earth and the final count to twelve.", tone: "Instructive / Hopeful" }
  ],
  distinctions: [
    {
      title: "Total Inactivity vs. Stillness",
      comparison: {
        labelA: "Total Inactivity",
        labelB: "Stillness (Silence)",
        points: [
          { a: "Associated with death; nothingness", b: "Associated with life; realization and introspection" },
          { a: "A state of stagnation", b: "A state of profound psychological activity" },
          { a: "What the poet wants nothing to do with", b: "What the poet proposes to heal humanity" }
        ]
      }
    }
  ]
};
