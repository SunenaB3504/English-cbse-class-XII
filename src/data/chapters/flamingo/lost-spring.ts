import { ChapterForensics } from '../../../types';

export const lostSpring: ChapterForensics = {
  id: 'flamingo-2',
  title: 'Lost Spring',
  author: 'Anees Jung',
  summary: 'In "Lost Spring," Anees Jung presents a heart-wrenching and sociological exploration of the systemic poverty that plagues the lives of thousands of children in India, effectively stealing their childhood. The narrative is divided into two parts, the first focusing on Saheb-e-Alam, a young ragpicker in Seemapuri who ironically bears a name meaning "Lord of the Universe" while scrounging for "gold" in garbage dumps. Jung details the bleak existence of over 10,000 ragpickers living in structures of mud with roofs of tin and tarpaulin, devoid of sewage or running water. Saheb\'s story reaches a tragic conclusion when he finds employment at a tea stall, earning 800 rupees but losing his most precious asset—his autonomy; the steel canister he carries feels heavier than the plastic bag of his ragpicking days. The second half of the story shifts to Firozabad, the center of India\'s glass-blowing industry, where 20,000 children slog their daylight hours in high-temperature glass furnaces. Here we meet Mukesh, who belongs to a family of bangle makers but dares to harbor a dream that looms like a "mirage"—becoming a motor mechanic. The author exposes the "vicious circle" created by sahukars, middlemen, policemen, and bureaucrats who ensure these families remain trapped in a cycle of debt and despair. The elders in Firozabad have been blinded by the dust of polishing glass bangles, both literally and metaphorically, accepting their "karma" and lineage of poverty. However, Mukesh\'s insistence on being his "own master" provides a flicker of hope against the crushing weight of ancestral tradition. Jung uses the symbol of the glass bangle—representing auspiciousness in marriage—to highlight the irony of the dark, dingy hutments where they are produced. The narrative ultimately serves as a call to conscience, urging readers to recognize the apathy of society that allows the "spring" of youth to be perpetually lost to labor.',
  narrativeVoice: 'Descriptive / First-Person Reportage',
  setting: 'Seemapuri (Delhi) and Firozabad (UP); Perpetual State of Poverty',
  authorStyle: 'Empathetic, sociological, and lyrical',
  themes: [
    'Perpetual Poverty and Child Labor',
    'The "Stolen Childhood" (Lost Spring)',
    'Apathy of the State and Society',
    'Power of Dreams (The Mirage)',
    'The Vicious Circle of Middlemen/Policemen'
  ],
  milestones: [
    { time: 'Morning/Seemapuri', event: 'Encounter with Saheb searching for "gold" in garbage bins.' },
    { time: 'Reality Check', event: 'Description of Seemapuri: 10,000 ragpickers living in a state of survival.' },
    { time: 'Saheb\'s Move', event: 'Saheb transitions to a tea stall; loses autonomy for 800 rupees.' },
    { time: 'Firozabad', event: 'Meeting Mukesh and the 20,000 children in glass furnaces.' },
    { time: 'The Cycles', event: 'The "stigma" of caste and the "vicious circle" of middlemen/policemen.' },
    { time: 'A New Dream', event: 'Mukesh\'s defiance: "I will be a motor mechanic."' }
  ],
  characters: [
    {
      name: 'Saheb-e-Alam',
      traits: ['Carefree (initially)', 'Innocent', 'Lost Autonomy', 'Resigned'],
      conflict: 'Daily survival vs. the desire for childhood play (shoes, school).',
      growth: 'Static/Downward: Moves from "scrounging for gold" to the burden of the tea stall canister.',
      evidence: "Saheb carrying the tea canister: 'He is no longer his own master.'"
    },
    {
      name: 'Mukesh',
      traits: ['Defiant', 'Resilient', 'Ambitious', 'Determined'],
      conflict: 'The ancestral "stigma" of bangle-making vs. his own dream of mechanics.',
      growth: 'Potential breakthrough: He insists on being his own master and is willing to walk to a garage.',
      evidence: "Mukesh looking straight into the narrator's eyes: 'I will be a motor mechanic.'"
    }
  ],
  motifs: [
    { symbol: 'Lost Spring', meaning: 'Stolen childhood and the loss of youth to labor.' },
    { symbol: 'Gold in the Garbage', meaning: 'Survival/daily bread for adults; wonder/hope for children.' },
    { symbol: 'Glass Bangles', meaning: 'Auspiciousness in marriage vs. the physical blindness and "dark hutments" of production.' },
    { symbol: 'The Tea Canister', meaning: 'The weight of responsibility; loss of liberty compared to the light plastic bag.' }
  ],
  dictionary: [
    { word: 'Scrounging', context: 'Saheb searching the garbage for items of value.', synonym: 'Foraging' },
    { word: 'Mirage', context: 'Mukesh\'s dream of becoming a mechanic amidst the dust of Firozabad.', synonym: 'Illusion' },
    { word: 'Hutments', context: 'The dwellings of the bangle makers in the dark lanes.', synonym: 'Shanties' },
    { word: 'Slog their daylight hours', context: 'Children working long hours in glass furnaces.', synonym: 'Toiling' }
  ],
  triggers: [
    {
      question: "What is the difference between Saheb's and Mukesh's attitude towards their situations?",
      answerVerbatim: "Saheb accepts his fate and eventually loses his autonomy to a tea stall ('He is no longer his own master'). Mukesh, however, insists on being his own master and dreams of escaping the glass furnaces to become a motor mechanic.",
      markingSchemePoints: [
        "Saheb: Submission to fate/economic necessity",
        "Mukesh: Defiance and horizontal mobility",
        "Analysis of 'own master' as a core psychological trait"
      ],
      year: "Comparative SQP 2025-26",
      type: "Long"
    },
    {
      question: "Analyze the 'Cycle of Poverty' in Lost Spring with the rural poor in A Roadside Stand.",
      answerVerbatim: "Both groups suffer from the 'vicious circle' of apathy. In Lost Spring, it's the middlemen and sahukars; in A Roadside Stand, it's the 'greedy good-doers' who exploit their reliance on urban cash.",
      markingSchemePoints: [
        "Commonality of exploitation",
        "Economic stagnation due to systemic apathy",
        "Comparison of 'urban apathy' across prose and poetry"
      ],
      year: "Comparative Trigger (2025-26)",
      type: "Long"
    }
  ]
};
