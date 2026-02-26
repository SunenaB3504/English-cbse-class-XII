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
      question: "Select the phrase that suggests the following: The so-called aids are not offered out of genuine care or consent but are imposed in a controlling and perhaps unwelcome manner.",
      answerVerbatim: "enforcing benefits",
      markingSchemePoints: [
        "Identification of the oxymoron 'enforcing benefits'",
        "Recognition of imposed, non-consensual help"
      ],
      year: "2024-25",
      type: "RTC",
      marks: 1,
      aiExplanation: "The phrase 'enforcing benefits' is a powerful oxymoron constructed by Frost. A 'benefit' is supposedly helpful, but 'enforcing' it strips the rural poor of their agency and consent. It highlights how urban politicians impose 'solutions' that serve their own agendas rather than actually addressing the farmers' true needs."
    },
    {
      question: "Analyse the poems, A Roadside Stand and Aunt Jennifer's Tigers for the theme of inequality and its impact on the bearers.",
      answerVerbatim: "A Roadside Stand focuses on the economic disparities between rural and urban areas. Aunt Jennifer's Tigers delves into the gender-based inequalities within marriage and society. Both poems highlight the struggles faced by individuals marginalized by socioeconomic and gender divisions.",
      markingSchemePoints: [
        "A Roadside Stand: Economic disparities (Rural vs Urban)",
        "Aunt Jennifer's Tigers: Gender-based inequality in marriage",
        "Commonality: Marginalization and struggle of the bearers"
      ],
      year: "2024-25",
      type: "Compare",
      marks: 5,
      aiExplanation: "This comparative question contrasts two distinct forms of inequality. In 'A Roadside Stand', the inequality is socio-economic: the rural poor are economically paralyzed while the urban rich speed by in 'polished traffic.' In 'Aunt Jennifer's Tigers', the inequality is gender-based: Aunt Jennifer's entire identity and physical vitality are crushed under the 'massive weight' of patriarchal possession. However, both sets of 'bearers' experience a profound loss of agency and resort to silent, desperate longing."
    },
    {
      question: 'What is the "childish longing in vain" that the poet refers to?',
      answerVerbatim: 'It is the farmers\' persistent but futile hope that a car will stop and buy something from their roadside stand.',
      markingSchemePoints: [
        'Hopeless waiting',
        'Economic disappointment',
        'Crave for city recognition'
      ],
      year: '2024-25 | Short',
      type: 'Short',
      marks: 2,
      aiExplanation: "The 'childish longing' is the farmers' naive hope that out of the thousands of speeding cars, just one will stop to genuinely support their business. Frost calls it 'in vain' because the city folk are too deeply immersed in their own fast-paced lives and consumerist aesthetics to ever notice the profound economic desperation of the rural stand."
    },
    {
      question: 'Why are the politicians called "greedy good-doers"?',
      answerVerbatim: 'Because they pretend to help the rural poor with schemes while actually exploiting them for their own political or financial gain.',
      markingSchemePoints: [
        'Hypocrisy',
        'Exploitation of ignorance',
        'Self-serving charity'
      ],
      year: '2025-26 | RTC',
      type: 'RTC',
      marks: 1,
      aiExplanation: "Frost uses 'greedy good-doers' as a cynical oxymoron. These figures—politicians and developers—parade as saviors 'doing good' by relocating the poor into clustered villages. In reality, they are 'greedy,' feeding off the rural population to secure political power, eventually lulling the farmers out of their wits and destroying their traditional way of life."
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
