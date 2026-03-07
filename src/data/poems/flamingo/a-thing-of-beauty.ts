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
      question: "Read the extract and answer:\n\nAnd such too is the grandeur of the dooms\nWe have imagined for the mighty dead;\nAll lovely tales that we have heard or read:\nAn endless fountain of immortal drink,\nPouring unto us from the heaven's brink.\n\nWhat theme is best represented by the 'endless fountain of immortal drink', and why is this an apt analogy for the tales of the mighty dead?",
      answerVerbatim: "I. Immortality of Art: The theme is the eternal nature of literature and heroic tales.\nII. Constant Inspiration: Like a fountain, these stories continuously pour forth wisdom and motivation.\nIII. Spiritual Nourishment: The 'immortal drink' suggests the stories sustain us across generations.",
      markingSchemePoints: [
        "Theme: Immortality of art and literature",
        "Analogy: Tales constantly pour forth inspiration and wisdom",
        "Stories nourish and sustain us like water from a fountain"
      ],
      year: "2023-24",
      type: "RTC",
      marks: 2,
      aiExplanation: "The tales of the 'mighty dead'—the heroes and ancestors whose sacrifices are legendary—are compared to an 'endless fountain' because their inspirational power never runs dry. Just like a fountain continuously produces water that sustains physical life, these beautiful, heroic stories continuously pour out of heaven to spiritually nourish and uplift humanity across generations. This reveals Keats's belief that literature and art grant immortality to human greatness."
    },
    {
      question: 'How does beauty provide us "a bower quiet"?',
      answerVerbatim: "I. Sanctuary: Beauty provides a peaceful, shady shelter ('bower') in a world of turmoil.\nII. Restorative Health: It offers 'quiet breathing' and restorative sleep.\nIII. Escape: Helps the soul transcend the 'despondence' of human existence.",
      markingSchemePoints: [
        'Eternal joy',
        'Physical and spiritual health',
        'Escape from despondence'
      ],
      year: 'CBSE 2024',
      type: 'RTC',
      marks: 1,
      aiExplanation: "In the poem's opening, Keats establishes that a true 'thing of beauty' is not a fleeting pleasure but a permanent refuge. It acts as a protective 'bower'—a shady, peaceful place under trees—where human beings can find restorative sleep and maintain physical and mental health amidst the suffering and darkness of the world."
    },
    {
      question: 'What is the "grandeur of the dooms" mentioned by Keats?',
      answerVerbatim: "I. Heroic Legacies: Refers to the majestic destinies and stories of self-sacrifice of our ancestors.\nII. Eternal Inspiration: These tales act as a 'fountain' of joy that never runs dry.\nIII. Aesthetic Value: The moral beauty of their deeds is seen as eternal.",
      markingSchemePoints: [
        'Inspirational stories',
        'Legacy of the mighty dead',
        'Immortal fountain of stories'
      ],
      year: 'CBSE Sample Paper 2025',
      type: 'Short',
      marks: 2,
      aiExplanation: "The 'grandeur of the dooms' specifically refers to the majestic, glorious destinies envisioned for the 'mighty dead'—the historical heroes and martyrs who performed noble deeds. Keats argues that the tales of such self-sacrifice and greatness possess an aesthetic and moral beauty so profound that they act as a continuous source of inspiration for humanity, much like an immortal fountain."
    },
    {
      question: "Keats suggests that beauty has the power to connect us to the earth despite the struggles of human existence. In what ways does this connection impact our understanding of the 'dark spirits' he describes?",
      answerVerbatim: "I. Alleviating Darkness: The connection to earth via beauty helps neutralize 'dark spirits'.\nII. Anchoring Force: Beauty acts as an anchor, grounding us amidst the 'despondence' of life.\nIII. Perspective Shift: Transforms struggles from overwhelming burdens into manageable human experiences.",
      markingSchemePoints: [
        "Connection to the earth forged by beauty helps to alleviate 'dark spirits'",
        "Presence of beauty serves as an anchor/grounding force",
        "Transforms struggles from overwhelming burdens to shared experiences brightened by joy"
      ],
      year: "2025-26",
      type: "Short",
      marks: 2,
      aiExplanation: "Keats acknowledges that human existence is fundamentally plagued by 'dark spirits'—depression, malice, and suffering. However, he argues that the 'flowery band' of nature's beauty physically and spiritually tethers us to the earth, preventing these dark spirits from causing complete despair. This connection acts as a crucial anchor: it doesn't eliminate suffering, but it makes endurance possible by continuously injecting moments of divine joy and 'quiet breathing' into our struggles."
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
