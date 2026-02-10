import { PoetryForensics } from '../../../types';

export const aThingOfBeauty: PoetryForensics = {
  id: 'a-thing-of-beauty',
  title: 'A Thing of Beauty',
  author: 'John Keats',
  summary: 'Based on Keats\'s poem Endymion: A Poetic Romance, it explores how beauty is eternal and acts as a constant therapeutic force for humanity. Beauty transcends time and physical decay, providing a "bower quiet" that allows the soul to escape the "despondence" and "dark spirits" of the world. It maps beauty not just in nature (sun, moon, trees) but also in the heroic deeds of the "mighty dead."',
  narrativeVoice: 'Sincere, Romantic, and Philosophical (First-person plural "us" suggests a shared human experience).',
  setting: 'Universal/Natural Landscape (Ethereal and timeless).',
  authorStyle: 'Romantic imagery, heightened sensuality, and use of Enjambment (flow of thought across lines).',
  rhymeScheme: 'AABB (Rhyming couplets - Heroic Couplets).',
  themes: [
    'Eternal nature of beauty',
    'Nature as a healer/sanctuary',
    'Transcendence of suffering',
    'Legacy of the mighty dead'
  ],
  poeticDevices: [
    { line: 'A thing of beauty is a joy forever', device: 'Alliteration/Assonance', explanation: 'Creates a musical quality reinforcing the eternal nature of the subject.' },
    { line: 'Pass into nothingness; but will keep / A bower quiet for us', device: 'Metaphor', explanation: 'Beauty is compared to a peaceful, shady shelter (bower).' },
    { line: 'A flowery band to bind us to the earth', device: 'Imagery/Metaphor', explanation: 'Visual imagery of a wreath representing the connection between humanity and nature.' },
    { line: 'Some shape of beauty moves away the pall', device: 'Metaphor', explanation: 'Beauty is compared to a light that removes the dark shroud (pall) of sadness.' },
    { line: 'An endless fountain of immortal drink', device: 'Metaphor/Hyperbole', explanation: 'Beauty is described as a divine gift poured from heaven by God.' }
  ],
  stanzaBreakdown: [
    {
      stanza: 1,
      summary: 'Definition of beauty as an eternal source of joy that never fades but increases with time, providing a shelter and peace.',
      tone: 'Assertive and Serene'
    },
    {
      stanza: 2,
      summary: 'The human condition is defined by "dark spirits" and "despondence," yet beauty intervenes to pull us out of our gloom.',
      tone: 'Melancholic yet Hopeful'
    },
    {
      stanza: 3,
      summary: 'A list of natural objects (sun, moon, old/young trees) that provide shade and beauty for simple creatures like sheep.',
      tone: 'Pastoral and Appreciative'
    },
    {
      stanza: 4,
      summary: 'Extending beauty to human history – the stories and legacies of our ancestors (mighty dead) are also eternal "fountains" of joy.',
      tone: 'Awe-struck and Reverent'
    }
  ],
  characters: [],
  motifs: [
    { symbol: 'Bower', meaning: 'A sanctuary or place of spiritual peace.' },
    { symbol: 'Pall', meaning: 'The spiritual darkness or depression that clouds human existence.' },
    { symbol: 'Immortal Drink', meaning: 'Divine inspiration or the life-giving force of nature/beauty.' },
    { symbol: 'Daffodils', meaning: 'The simple, vibrant life in the green world.' }
  ],
  dictionary: [
    { word: 'Despondence', context: 'Of the inhuman dearth of noble natures', synonym: 'Dejection/Despair' },
    { word: 'Pall', context: 'Moves away the pall / From our dark spirits', synonym: 'Shroud/Covering' },
    { word: 'Grandeur', context: 'The grandeur of the dooms', synonym: 'Splendor/Magnificence' },
    { word: 'Bequeath', context: 'That we have imagined for the mighty dead', synonym: 'Passed down/Legated' }
  ],
  triggers: [
    {
      question: 'How does beauty provide us "a bower quiet"?',
      answerVerbatim: 'Beauty acts as a peaceful sanctuary that provides health and quiet breathing in a world of turmoil.',
      markingSchemePoints: [
        'Eternal joy',
        'Physical and spiritual health',
        'Escape from despondence'
      ],
      year: 'CBSE 2024',
      type: 'RTC'
    },
    {
      question: 'What is the "grandeur of the dooms" mentioned by Keats?',
      answerVerbatim: 'It refers to the magnificent legacies and stories of heroic sacrifices of the ancestors (mighty dead).',
      markingSchemePoints: [
        'Inspirational stories',
        'Legacy of the mighty dead',
        'Immortal fountain of stories'
      ],
      year: 'CBSE Sample Paper 2025',
      type: 'Short'
    }
  ],
  distinctions: [
    {
      title: 'Beauty vs. Time',
      comparison: {
        labelA: 'Time',
        labelB: 'Beauty',
        points: [
          { a: 'Causes things to pass into nothingness.', b: 'Never passes into nothingness; loveliness increases.' },
          { a: 'Decays physical world and noble natures.', b: 'Acts as an everlasting fountain of immortal drink.' }
        ]
      }
    }
  ]
};
