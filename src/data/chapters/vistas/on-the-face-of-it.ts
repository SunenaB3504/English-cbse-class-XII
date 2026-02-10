import { ChapterForensics } from '../../../types';

export const onTheFaceOfIt: ChapterForensics = {
  id: 'on-the-face-of-it',
  title: 'On the Face of It',
  author: 'Susan Hill',
  summary: 'A moving play about the unexpected friendship between Derry, a 14-year-old boy with a scarred face, and Mr. Lamb, an elderly man with a tin leg. Derry is bitter, reclusive, and obsessed with his appearance, which he thinks people find "monstrous." Mr. Lamb, through his optimism and perspective on life, tries to teach Derry that "on the face of it," people might look different, but inner spirit and perception define happiness. The play ends tragically but with a hint of spiritual transformation for Derry.',
  narrativeVoice: 'Dramatic Dialogue. Dynamic, emotive, and philosophical.',
  setting: 'Mr. Lamb’s garden (A place of un-plucked weeds and open gates).',
  authorStyle: 'Converstaional, Symbolic, and empathetic. Focuses on psychological resilience and the "half-eaten apple" philosophy.',
  themes: [
    'Loneliness and Alienation',
    'Outer appearance vs. Inner beauty',
    'Disability and Social stigmas',
    'Transformation through positive mentorship'
  ],
  milestones: [
    { time: 'The Entry', event: 'Derry climbs over the wall into Mr. Lamb’s garden, expecting it to be empty.' },
    { time: 'The First Talk', event: 'Mr. Lamb startles Derry but welcomes him, refusing to let him leave in fear.' },
    { time: 'The Lessons', event: 'Lamb explains his tin leg, the "weed" garden, and the world of "crab apples."' },
    { time: 'The Promise', event: 'Derry promises to return despite his mother’s warnings.' },
    { time: 'The Return', event: 'Derry returns to the garden only to find Mr. Lamb has fallen from his ladder.' }
  ],
  characters: [
    {
      name: 'Derry (Derek)',
      traits: ['Withdrawn', 'Defensive', 'Sensitive', 'Ugly (in his mind)'],
      conflict: 'Self-loathing and fear of social rejection.',
      growth: 'Learns to ignore the "fear" of other people\'s stares and starts valuing his existence.',
      evidence: 'His return to the garden despite his mother\'s prohibition.'
    },
    {
      name: 'Mr. Lamb',
      traits: ['Resilient', 'Stoic', 'Gregarious', 'Wise'],
      conflict: 'Physical disability (tin leg) vs. Desire for companionship.',
      growth: 'Static but catalytic; he lives with his loneliness but finds joy in helping others see life differently.',
      evidence: 'Keeping his house gates open for everyone.'
    }
  ],
  motifs: [
    { symbol: 'The Garden', meaning: 'A sanctuary of life where even "weeds" are respected; a metaphor for inner growth.' },
    { symbol: 'The Tin Leg', meaning: 'Physical impairment that does not define the soul.' },
    { symbol: 'Crab Apples', meaning: 'The "un-selected" or "bitter" things in life that can still be useful (jelly).' },
    { symbol: 'Open Gates', meaning: 'Receptiveness to the world and rejection of isolation.' }
  ],
  dictionary: [
    { word: 'Peculiar', context: 'You say peculiar things', synonym: 'Strange/Odd' },
    { word: 'Defiant', context: 'Derry was defiant about his face', synonym: 'Rebellious' },
    { word: 'Withdrawn', context: 'A withdrawn and lonely boy', synonym: 'Introverted' },
    { word: 'Lamebeade', context: 'Lamey-Lamb, they call me', synonym: 'Nickname for a lame person' }
  ],
  triggers: [
    {
      question: 'What is the "Face" of it that Mr. Lamb talks about?',
      answerVerbatim: 'It refers to the superficial appearance of things. On the surface (on the face of it), Derry and Lamb are different and "ugly," but inside they are both human souls.',
      markingSchemePoints: [
        'Superficiality',
        'Inner identity',
        'Rejection of physical labels'
      ],
      year: 'CBSE 2024',
      type: 'Short'
    },
    {
      question: 'Why does Derry keep coming back to Mr. Lamb?',
      answerVerbatim: 'Because for the first time, someone treats him like a normal human being and doesn’t show pity or fear toward his face.',
      markingSchemePoints: [
        'Acceptance',
        'Positive reinforcement',
        'Empowering conversation'
      ],
      year: 'CBSE 2023',
      type: 'Short'
    }
  ],
  distinctions: [
    {
      title: 'Derry vs. Mr. Lamb',
      comparison: {
        labelA: 'Derry',
        labelB: 'Mr. Lamb',
        points: [
          { a: 'Hates the world and hides from people.', b: 'Loves the world and keeps his gates open.' },
          { a: 'Consumed by his "acid" (physical/mental scar).', b: 'Transcended his tin leg; finds joy in everything.' }
        ]
      }
    }
  ]
};
