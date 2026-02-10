import { PoetryForensics } from '../../../types';

export const aRoadsideStand: PoetryForensics = {
  id: 'a-roadside-stand',
  title: 'A Roadside Stand',
  author: 'Robert Frost',
  summary: 'A scathing critique of the economic divide between the urban rich and the rural poor. The "city folk" drive past a humble roadside stand, obsessed with aesthetics or speed, while the farmers plead for a share of the "city money" to thrive. Frost highlights the empty promises of politicians (the "calculating" benefactors) and the silent "childish longing" of the rural folk for a better life.',
  narrativeVoice: 'Compassionate, Angry, and Empathetic (The poet openly identifies with the farmers\' pain).',
  setting: 'A Rural highway, a humble "little old house" with a new shed.',
  authorStyle: 'Conversational tone, irony, and social realism. Use of Personification ("the sad personification of self-contained").',
  rhymeScheme: 'Irregular/Loose Rhyme Scheme (reflecting the chaotic/strained situation).',
  themes: [
    'Economic inequality (City vs. Village)',
    'Callousness of the urban elite',
    'Exploitation by political "benefactors"',
    'The "childish longing" for unfulfilled promises'
  ],
  poeticDevices: [
    { line: 'The little old house was out with a little new shed', device: 'Alliteration', explanation: 'Creates a rhythmic start to the description of the humble stand.' },
    { line: 'The polished traffic passed with a mind ahead', device: 'Transferred Epithet', explanation: 'It is the travelers who are "polished" and single-minded, not the traffic itself.' },
    { line: 'Greedy good-doers, beneficent beasts of prey', device: 'Oxymoron', explanation: 'Highlights the hypocritical nature of social workers and politicians who "help" for their own gain.' },
    { line: 'The flower of cities from sinking and withering faint', device: 'Metaphor', explanation: 'City money is compared to a life-giving flower that prevents decay.' },
    { line: 'I can’t help owning the great relief it would be / To put these people at one stroke out of their pain', device: 'Hyperbole', explanation: 'Expresses the poet\'s intense frustration and dark empathy for the farmers\' plight.' }
  ],
  stanzaBreakdown: [
    {
      stanza: 1,
      summary: 'Description of the roadside stand – a desperate plea for "city money" to improve rural lives, contrasted with the "polished traffic" that ignores it.',
      tone: 'Sympathetic and Observant'
    },
    {
      stanza: 2,
      summary: 'The city travelers only stop to complain about the artless landscape or to ask for directions/gas, never to buy the farmers\' produce (wild berries, crook-necked squash).',
      tone: 'Ironic and Critical'
    },
    {
      stanza: 3,
      summary: 'The farmers\' anger at the lack of empathy. They want the city money to see if it makes their lives "swell" as promised in movies/politics.',
      tone: 'Resentful and Desperate'
    },
    {
      stanza: 4,
      summary: 'Critique of "greedy good-doers" who relocate rural people to villages only to exploit them and strip them of their ability to think for themselves.',
      tone: 'Cynical and Angry'
    },
    {
      stanza: 5,
      summary: 'The poet\'s personal anguish. He sees the "childish longing" of the farmers waiting for a car to stop. He wishes for a radical solution to their pain but realizes its impossibility.',
      tone: 'Despairing and Emotional'
    }
  ],
  characters: [],
  motifs: [
    { symbol: 'Roadside Stand', meaning: 'A symbol of rural hope and economic struggle.' },
    { symbol: 'City Money', meaning: 'The "flower" that keeps civilization from withering; a symbol of status and survival.' },
    { symbol: 'Wild Berries/Squash', meaning: 'Simple, organic rural life vs. refined city tastes.' },
    { symbol: 'The Voice of the Stand', meaning: 'The collective, silent cry of the rural poor.' }
  ],
  dictionary: [
    { word: 'Despondence', context: 'Of the inhuman dearth of noble natures', synonym: 'Dejection' },
    { word: 'Pathetic', context: 'It would not be fair to say for a dole of bread', synonym: 'Pitiable' },
    { word: 'Soothe', context: 'Calculated to soothe them out of their wits', synonym: 'Pacify/Deceive' },
    { word: 'Dole', context: 'Not for a dole of bread', synonym: 'Alms/Charity' }
  ],
  triggers: [
    {
      question: 'What is the "childish longing in vain" that the poet refers to?',
      answerVerbatim: 'It is the farmers\' persistent but futile hope that a car will stop and buy something from their roadside stand.',
      markingSchemePoints: [
        'Hopeless waiting',
        'Economic disappointment',
        'Crave for city recognition'
      ],
      year: 'CBSE 2024',
      type: 'Short'
    },
    {
      question: 'Why are the politicians called "greedy good-doers"?',
      answerVerbatim: 'Because they pretend to help the rural poor with schemes while actually exploiting them for their own political or financial gain.',
      markingSchemePoints: [
        'Hypocrisy',
        'Exploitation of ignorance',
        'Self-serving charity'
      ],
      year: 'CBSE Sample Paper 2026',
      type: 'RTC'
    }
  ],
  distinctions: [
    {
      title: 'City Folk vs. Rural Folk',
      comparison: {
        labelA: 'City Folk',
        labelB: 'Rural Folk',
        points: [
          { a: 'Have "polished" minds focused on speed/aesthetics.', b: 'Have "childish" longings for basic financial survival.' },
          { a: 'Possess the "flower of cities" (money).', b: 'Possess "wild berries" and "crook-necked squash" but no cash.' }
        ]
      }
    }
  ]
};
