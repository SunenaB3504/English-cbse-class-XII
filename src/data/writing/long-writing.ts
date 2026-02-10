import { WritingSkeleton } from '../../types';

export const longWriting: WritingSkeleton = {
  id: 'long-writing',
  format: 'Article (Title + Byline) or Report (Headine + Byline + Date/Place).',
  blueprint: [
    {
      section: 'Article: Body Paragraph 1 (Intro)',
      content: 'Define the topic, provide a hook or a quote.',
      keyPhrases: [
        'The issue of [Topic] has become a global concern...',
        'It is often said that...',
        'In the contemporary world, the relevance of...'
      ]
    },
    {
      section: 'Article: Body Paragraph 2 (Analysis)',
      content: 'Cause, effect, and detailed discussion.',
      keyPhrases: [
        'The primary reason behind this is...',
        'Furthermore, the consequences are multifaceted...',
        'On the flip side, we must also consider...'
      ]
    },
    {
      section: 'Report: Objective Data',
      content: 'Facts, figures, and actual events in the past tense.',
      keyPhrases: [
        'The event was held on...',
        'The Chief Guest, Mr. X, inaugurated the...',
        'A total of 500 students participated in...'
      ]
    },
    {
      section: 'Conclusion',
      content: 'Final thoughts, suggestions, or a call to action.',
      keyPhrases: [
        'To conclude, it is imperative that...',
        'The need of the hour is...',
        'The event left a lasting impression on everyone.'
      ]
    }
  ],
  vocabularyUpgrades: [
    { basic: 'increase', advanced: 'proliferate / escalate / surge' },
    { basic: 'bad', advanced: 'detrimental / pernicious / disastrous' },
    { basic: 'think', advanced: 'perceive / envision' },
    { basic: 'started', advanced: 'commenced / embarked upon' }
  ]
};
