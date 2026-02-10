import { PoetryForensics } from '../../../types';

export const myMotherAtSixtySix: PoetryForensics = {
  id: 'poem-1',
  title: 'My Mother at Sixty-six',
  author: 'Kamala Das',
  summary: '"My Mother at Sixty-six" is a deeply personal and lyrical poem that captures the universal fear of aging and the eventual separation between a child and a parent. The poem begins with the narrator driving from her parents\' home to the Cochin airport on a Friday morning, with her mother sitting beside her. As the mother dozes off with her mouth open, the narrator is struck by her "ashen" complexion, which resembles that of a corpse (corpse-like). This visual triggers a sharp pang of realization about her mother\'s mortality and the frailty of old age. To escape this painful thought, the narrator looks out of the window at the "young trees sprinting" and "merry children spilling out of their homes," which serve as a vibrant contrast to the stillness and decay inside the car. After the security check at the airport, the narrator looks at her mother again, comparing her to a "late winter\'s moon" that has lost its radiance and strength. The familiar "childhood fear" of losing her mother resurfaces, yet she chooses to hide her anxiety behind a brave face. The poem concludes with the narrator repeatedly saying "see you soon, Amma" and offering nothing but a continuous, forced smile. This smile acts as a mask to cover the internal turmoil and the helplessness she feels in the face of time. Das uses a single-sentence structure throughout the poem to replicate the flow of consciousness and the overwhelming nature of these emotions. It is a powerful meditation on the inevitability of death and the complex emotional bond that defines the parent-child relationship.',
  narrativeVoice: 'First Person (Confessional)',
  setting: 'A car driving to Cochin Airport; Friday morning',
  authorStyle: 'Sensitive, emotional, and rhythmic (Single-sentence stream of consciousness)',
  themes: [
    'The Fear of Aging and Decay',
    'Separation and Abandonment Anxiety',
    'The Contrast between Youth and Old Age',
    'The Masking of Emotions (The Smile)'
  ],
  characters: [
    {
      name: 'The Narrator (Poet)',
      traits: ['Sensitive', 'Dutiful', 'Fearful'],
      conflict: 'Internal: The struggle between her love for her mother and the need to move on with her own life.',
      growth: 'Static; she remains trapped in her fear, only able to mask it with a smile.',
      evidence: "All I did was smile and smile and smile..."
    },
    {
      name: 'The Mother',
      traits: ['Frail', 'Aging', 'Passive'],
      conflict: 'Physical: The involuntary decline of the body towards death.',
      growth: 'Declining; she represents the final stage of life.',
      evidence: "Her face ashen like that of a corpse."
    }
  ],
  motifs: [
    { symbol: 'Late Winter\'s Moon', meaning: 'Symbolizes fading strength and the approach of the "end" of the year/life.' },
    { symbol: 'Young Trees Sprinting', meaning: 'Symbolizes the rapid passage of time and the vitality of youth.' },
    { symbol: 'Merry Children', meaning: 'Represents the beginning of life, contrasting with the mother\'s impending end.' }
  ],
  dictionary: [
    { word: 'Ashen', context: 'Used to describe the pale, gray color of the mother\'s face.', synonym: 'Pale / Wan' },
    { word: 'Corpse', context: 'The narrator compares her sleeping mother to a dead body.', synonym: 'Cadaver / Dead body' },
    { word: 'Wan', context: 'Looking ill or exhausted; used for the late winter\'s moon.', synonym: 'Pallid / Faint' },
    { word: 'Ache', context: 'The emotional pain the narrator feels in her heart.', synonym: 'Pang / Throb' }
  ],
  triggers: [
    {
      question: "What is the significance of the image 'merry children spilling out of their homes'?",
      answerVerbatim: "The poet uses this image as a contrast to her mother's condition. While the mother represents decay, stillness, and the approach of death (sleeping with mouth open), the children represent the onset of life, energy, and the vitality of youth. It highlights the cycle of life.",
      markingSchemePoints: [
        "Contrast with the 'ashen' face of the mother",
        "Symbolizes vitality, energy, and new beginnings",
        "Juxtaposition of life and death/decay"
      ],
      year: "2024-25 | RTC",
      type: "RTC"
    },
    {
      question: "Why does the poet compare her mother to a 'late winter's moon'?",
      answerVerbatim: "Winter is the final season of the year, symbolizing the end of life. A 'late winter's moon' appears pale, hazy, and lacks brightness and strength, much like the poet's mother who has lost her youthful glow and is nearing the end of her life journey.",
      markingSchemePoints: [
        "Symbolism of winter as the end of life",
        "Loss of radiance and vital energy",
        "Fading strength corresponding to old age"
      ],
      year: "2025-26 | Short",
      type: "Short"
    }
  ],
  rhymeScheme: 'Free Verse (Single continuous sentence)',
  poeticDevices: [
    { line: "face ashen like that of a corpse", device: "Simile", explanation: "Compares the mother's face to a corpse to show decay." },
    { line: "tree sprinting", device: "Personification", explanation: "The trees are given the human quality of running to show speed." },
    { line: "as a late winter's moon", device: "Simile", explanation: "Compares the mother to the moon to show fading beauty." },
    { line: "smile and smile and smile", device: "Repetition", explanation: "Emphasizes the poet's effort to hide her fear." }
  ],
  stanzaBreakdown: [
    { stanza: 1, summary: "Driving to the airport; noticing the mother's corpse-like appearance and the resulting ache.", tone: "Melancholic" },
    { stanza: 2, summary: "Diverting thoughts by looking at the world outside—sprinting trees and playing children.", tone: "Contrasting / Vibrant" },
    { stanza: 3, summary: "Post-security check; final look at the mother and the resurfacing of childhood fear.", tone: "Painful / Resigned" },
    { stanza: 4, summary: "The forced smile and the parting words (masks for the internal turmoil).", tone: "Deceptive / Sorrowful" }
  ],
  distinctions: [
    {
      title: "Internal Reality vs. External World",
      comparison: {
        labelA: "Inside the Car",
        labelB: "Outside the Car",
        points: [
          { a: "Stagnation, decay, and the presence of death (mother)", b: "Movement, growth, and the onset of life (trees/children)" },
          { a: "Silence and the 'ache' of loss", b: "Noise and the 'spilling' of energy" },
          { a: "The 'late winter's moon' (fading)", b: "The 'sprinting trees' (vigorous)" }
        ]
      }
    }
  ]
};
