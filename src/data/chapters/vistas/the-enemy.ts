import { ChapterForensics } from '../../../types';

export const theEnemy: ChapterForensics = {
  id: 'the-enemy',
  title: 'The Enemy',
  author: 'Pearl S. Buck',
  summary: 'A profound conflict between humanity and nationalism during WWII. Dr. Sadao Hoki, a Japanese surgeon, finds a wounded American POW (Tom) washed ashore near his home. Despite the risk of being labeled a traitor, Sadao’s doctor’s conscience compels him to save the life of the "enemy." The story explores the complexities of duty, the role of Hana (his wife) in his moral struggle, and the ultimate irony of the Japanese General who prioritizes his own health over national security.',
  narrativeVoice: 'Third-person (Limited to Sadao and Hana). Serious, empathetic, and tense.',
  setting: 'The coast of Japan during WWII (Dr. Sadao’s house).',
  authorStyle: 'Realistic prose with deep psychological insight. Use of imagery (mist, lanterns) and heavy focus on moral deliberation.',
  themes: [
    'Humanity vs. Patriotism (Nationalism)',
    'The Hippocratic Oath / Professional duty',
    'Prejudice and racial bias',
    'Moral courage and individual conscience'
  ],
  milestones: [
    { time: 'The Discovery', event: 'Sadao and Hana find the wounded American on the beach and realize he is a POW.' },
    { time: 'The Dilemma', event: 'Internal debate whether to put him back in the sea or save him as a doctor.' },
    { time: 'The Surgery', event: 'Sadao operates on Tom in his home, while Hana assists and the servants rebel.' },
    { time: 'The Confession', event: 'Sadao tells the General about the American. The General promises assassins.' },
    { time: 'The Escape', event: 'Sadao waits but no assassins come; he helps the American escape on a boat with food and water.' }
  ],
  characters: [
    {
      name: 'Dr. Sadao Hoki',
      traits: ['Skillful surgeon', 'Dutiful', 'Compassionate', 'Conflicted'],
      conflict: 'Personal humanity vs. Patriotic duty to his country.',
      growth: 'Ultimately chooses the survival of his patient over racial/national hatred.',
      evidence: 'Saving the "enemy" twice (once through surgery, once through escape).'
    },
    {
      name: 'Hana',
      traits: ['Supportive', 'Dignified', 'Internalized bias', 'Resilient'],
      conflict: 'Her loyalty to Sadao vs. her fear of the servants and the law.',
      growth: 'Provides silent but critical support; washes the wounds herself when servants refuse.',
      evidence: 'Her emotional reaction to the "white man" in her house.'
    },
    {
      name: 'The General',
      traits: ['Self-centered', 'Unscrupulous', 'Professional'],
      conflict: 'His life (Sadao is his survival) vs. Law (Sadao is a "traitor").',
      growth: 'Static; he forgets his promise of assassins because he is too absorbed in his own health.',
      evidence: 'Allowing the POW to live because he needs Sadao to operate on him later.'
    }
  ],
  motifs: [
    { symbol: 'The Mist', meaning: 'The moral ambiguity and confusion surrounding their decision.' },
    { symbol: 'The Surge', meaning: 'The constant pressure of external forces (war, public opinion).' },
    { symbol: 'Blood', meaning: 'The commonality of human life that transcends nationality.' },
    { symbol: 'The White Man', meaning: 'The external "infection" or threat to the domestic Japanese peace.' }
  ],
  dictionary: [
    { word: 'Revolting', context: 'The sight was revolting to her', synonym: 'Disgusting' },
    { word: 'Assassins', context: 'He will send his private assassins', synonym: 'Professional killers' },
    { word: 'Demented', context: 'She looked at him with demented eyes', synonym: 'Insane/Wild' },
    { word: 'Superstitious', context: 'The servants were superstitious...', synonym: 'Believing in omens' }
  ],
  triggers: [
    {
      question: 'Why did Sadao help the American escape?',
      answerVerbatim: 'Because he realized that high walls of prejudice could not withstand the common human bond, and he felt his duty as a doctor was fulfilled.',
      markingSchemePoints: [
        'Doctor’s conscience',
        'Humanity over nationalism',
        'Inaction of the General'
      ],
      year: 'CBSE 2024',
      type: 'Long'
    },
    {
      question: 'How did the servants react to the POW?',
      answerVerbatim: 'They were openly hostile, critical of Sadao’s "American education," and eventually left the house in protest.',
      markingSchemePoints: [
        'Nationalist pride',
        'Fear of legal trouble',
        'Superstitious beliefs'
      ],
      year: 'CBSE 2023',
      type: 'Short'
    }
  ],
  distinctions: [
    {
      title: 'Patriotism vs. Humanity',
      comparison: {
        labelA: 'Patriotism',
        labelB: 'Humanity',
        points: [
          { a: 'Demands reporting the POW and letting him die.', b: 'Demands saving the life of a wounded man.' },
          { a: 'Viewed through the lens of the General and servants.', b: 'Viewed through the actions of Dr. Sadao Hoki.' }
        ]
      }
    }
  ]
};
