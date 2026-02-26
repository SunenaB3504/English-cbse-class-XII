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
      question: "Imagine you are Pablo Neruda, the poet of Keeping Quiet. What advice might you offer to Robert Frost, the poet of A Roadside Stand, in the context of his conflicted emotions, as displayed in the given lines:\nThe requisite lift of spirit has never been found,\nOr so the voice of the country seems to complain,\nI can’t help owning the great relief it would be\nTo put these people at one stroke out of their pain.\n\nPen down your advice, in a letter to Frost.",
      answerVerbatim: "Dear Robert, I understand it can be difficult to make decisions when overwhelmed by emotions. I advise you to take a moment to be still and contemplative before making any decisions about the fate of the people at the roadside stand. By quieting your mind and being present, you may objectively understand their struggles and gain a new perspective. Such a moment of reflection could help you see beyond your conflicting emotions and connect with your own humanity and that of others from a place of balance and calm. Warmly, Pablo Neruda.",
      markingSchemePoints: [
        "Take a moment of stillness and reflection before reacting",
        "Quiet the mind to objectively understand their struggles",
        "Disconnect from overwhelming emotions to connect with humanity"
      ],
      year: "2023-24",
      type: "Long",
      marks: 5,
      aiExplanation: "This creative question requires merging the philosophies of two distinct poems. Neruda's core philosophy entirely revolves around pausing all rushed, emotional actions in favor of silent introspection. Therefore, Neruda would advise Frost not to succumb to his rash, emotionally overwhelmed impulse ('putting these people at one stroke out of their pain'). Instead, he would urge Frost to stop, count to twelve, and use that total stillness to find a deeper, more peaceful and objective understanding of the rural poor's suffering."
    },
    {
      question: "Read the extract and answer the question:\nThose who prepare green wars, wars with gas, wars with fire, victory with no survivors, would put on clean clothes and walk about with their brothers in the shade, doing nothing.\n\nHow can the message in the excerpt, about the outcome of wars, be applied to promote peace?",
      answerVerbatim: "Global leaders and communities can work toward more sustainable and peaceful solutions – Can be used to advocate for non-violent resolutions / peace negotiations in contemporary conflicts / Can be used to promote dialogue and understanding over aggression and warfare",
      markingSchemePoints: [
        "Work toward sustainable and peaceful solutions",
        "Advocate for non-violent resolutions/peace negotiations",
        "Promote dialogue and understanding over aggression"
      ],
      year: "2024-25",
      type: "RTC",
      marks: 1,
      aiExplanation: "The poet’s vivid description of a 'victory with no survivors' strips away the glory of war, revealing it as an exercise in mutual annihilation. By fully acknowledging that modern warfare destroys both the victor and the vanquished, world leaders and communities can use this grim realization to actively prioritize dialogue, diplomacy, and non-violent resolutions over aggression."
    },
    {
      question: "What is the 'exotic moment' the poet refers to?",
      answerVerbatim: "The poet refers to the moment of total silence and stillness as 'exotic.' It would be exotic because it would be without rush, without engines, and would create a 'sudden strangeness' where everyone feels a sense of togetherness for the first time.",
      markingSchemePoints: [
        "Absence of noise and mechanical rush (engines)",
        "Feeling of 'sudden strangeness' or collective unity",
        "Departure from the mundane, chaotic routine of life"
      ],
      year: "2024-25 | Short",
      type: "Short",
      marks: 2,
      aiExplanation: "The 'exotic moment' is the proposed period of global silence. Neruda calls it 'exotic' because it is completely alien to the modern human experience, which is heavily characterized by the constant roar of machinery, engines, and mindless rushing. This unprecedented pause would strip away our artificial barriers, plunging humanity into a 'sudden strangeness' of unbroken spiritual unity."
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
      type: "RTC",
      marks: 1,
      aiExplanation: "Neruda uses the powerful metaphor of the Earth surviving winter. To the naked eye, a winter landscape appears frozen, dead, and totally inactive. However, beneath the surface seeds are resting and preparing to burst into life during spring. The poet uses this natural phenomenon to prove that true stillness is not 'death' or useless stagnation, but rather a vital period of silent preparation and introspection."
    },
    {
      question: "What does the reference to fishermen not harming whales and the man gathering salt looking at his hurt hands signify in the poem?",
      answerVerbatim: "The reference signifies a pause in exploitative and destructive human activities. It reflects the poet's call for introspection and awareness of the harm humans cause to nature and themselves. By pausing, the fishermen and the salt gatherer are shown as reconnecting with their humanity and reflecting on their actions.",
      markingSchemePoints: [
        "Signifies a pause in exploitative/destructive human activities",
        "Reflects poet's call for introspection and awareness",
        "Harm humans cause to nature (whales) and themselves (hurt hands)",
        "Reconnecting with humanity by pausing and reflecting"
      ],
      year: "2025-26",
      type: "Short",
      marks: 2,
      aiExplanation: "These two powerful images illustrate the dual nature of human exploitation: external and internal. The fishermen harming whales represents humanity's outward destruction of nature for profit. The salt gatherer with hurt hands represents our internal self-destruction; humans labor so mindlessly for survival and wealth that we ignore our own pain. A moment of universal stillness forces a sudden halt to both forms of exploitation, allowing for crucial self-reflection."
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
