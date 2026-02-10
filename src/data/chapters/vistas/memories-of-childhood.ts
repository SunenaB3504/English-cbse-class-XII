import { ChapterForensics } from '../../../types';

export const memoriesOfChildhood: ChapterForensics = {
  id: 'memories-of-childhood',
  title: 'Memories of Childhood',
  author: 'Zitkala-Sa & Bama',
  summary: 'A collection of two autobiographical accounts that highlight the struggle against cultural oppression and caste discrimination. "The Cutting of My Long Hair" explores the forced assimilation of a Native American girl (Zitkala-Sa) in a boarding school. "We Too are Human Beings" details the awakening of a young Dalit girl (Bama) to the harsh reality of untouchability and her resolution to fight it through education. Both stories emphasize the loss of identity and the power of resistance.',
  narrativeVoice: 'First-person (Dual perspectives). Part 1: Traumatic and Resentful. Part 2: Observant and Determined.',
  setting: 'Part 1: Carlisle Indian School (USA). Part 2: A small village in Tamil Nadu (India).',
  authorStyle: 'Autobiographical prose. Uses vivid sensory details to convey emotional pain and social injustice.',
  themes: [
    'Cultural imperialism and forced assimilation',
    'Caste discrimination and Untouchability',
    'Identity and dignity',
    'Education as a tool of rebellion'
  ],
  milestones: [
    { time: 'The Arrival', event: 'Zitkala-Sa feels lost in the "clatter" of the school and its restrictive rules.' },
    { time: 'The Cutting', event: 'Despite hiding under a bed, her long hair—a symbol of her culture—is forcibly shingled.' },
    { time: 'The Walk', event: 'Bama enjoys the sights of the market, oblivious to the "funny" sight of an elder carrying food.' },
    { time: 'The Awakening', event: 'Bama’s brother (Annan) explains the concept of untouchability and the elder’s humiliation.' },
    { time: 'The Resolution', event: 'Both protagonists decide to fight back: one through endurance, the other through academic excellence.' }
  ],
  characters: [
    {
      name: 'Zitkala-Sa',
      traits: ['Proud', 'Sensitive', 'Defiant', 'Traumatized'],
      conflict: 'Indigenous identity vs. Western "civilization."',
      growth: 'Learns that physical submission (hair cut) does not mean a crushed spirit.',
      evidence: 'Her attempts to hide and kick during the hair-cutting ceremony.'
    },
    {
      name: 'Bama',
      traits: ['Innocent', 'Curious', 'Observant', 'Ambitious'],
      conflict: 'Childhood wonder vs. Social reality of caste.',
      growth: 'Transforms her anger into a directed effort to "study and make progress."',
      evidence: 'Working hard in school to earn respect and shed the "untouchable" label.'
    }
  ],
  motifs: [
    { symbol: 'Long Hair', meaning: 'In Zitkala-Sa’s culture, a symbol of bravery and honor; cutting it signifies mourning/shame.' },
    { symbol: 'The Packet of Vadais', meaning: 'The physical manifestation of caste distance and "pollution."' },
    { symbol: 'The Clanking Shoes', meaning: 'The cold, mechanical, and oppressive nature of the boarding school.' },
    { symbol: 'Education', meaning: 'The ultimate weapon for social mobility and liberation.' }
  ],
  dictionary: [
    { word: 'Shingled', context: 'My long hair was shingled', synonym: 'Cut short/Layered' },
    { word: 'Untouchability', context: 'The belief in untouchability...', synonym: 'Social exclusion' },
    { word: 'Glisten', context: 'Tears glisten in her eyes', synonym: 'Shine/Sparkle' },
    { word: 'Indignity', context: 'The indignity of her situation', synonym: 'Humiliation' }
  ],
  triggers: [
    {
      question: 'What did "shingled hair" mean to Zitkala-Sa?',
      answerVerbatim: 'In her culture, shingled hair was worn only by cowards, mourners, or those in shame; it was the ultimate loss of dignity.',
      markingSchemePoints: [
        'Cultural significance',
        'Traditional beliefs',
        'Forced assimilation'
      ],
      year: 'CBSE 2024',
      type: 'Short'
    },
    {
      question: 'What advice did Annan give to Bama?',
      answerVerbatim: 'He told her that because they were born into that community, they had no honor or dignity; only education could change that.',
      markingSchemePoints: [
        'Power of knowledge',
        'Social equality',
        'Overcoming discrimination'
      ],
      year: 'CBSE 2023',
      type: 'Short'
    }
  ],
  distinctions: [
    {
      title: 'Zitkala-Sa vs. Bama',
      comparison: {
        labelA: 'Zitkala-Sa',
        labelB: 'Bama',
        points: [
          { a: 'Fights against cultural erasure in America.', b: 'Fights against caste-based exclusion in India.' },
          { a: 'Resistance is physical (kicking/screaming).', b: 'Resistance is intellectual (academic success).' }
        ]
      }
    }
  ]
};
