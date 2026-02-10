import { ChapterForensics } from '../../../types';

export const indigo: ChapterForensics = {
  id: 'flamingo-5',
  title: 'Indigo',
  author: 'Louis Fischer',
  summary: '"Indigo" is a documentary-style narrative that records the historical significance of the Champaran Satyagraha in 1917, which served as Mahatma Gandhi\'s first successful experiment with non-violent civil disobedience in India. The story begins with Rajkumar Shukla, a persistent and illiterate sharecropper from Bihar, who travels across India to persuade Gandhi to address the injustice of the landlord system in Champaran. Despite Gandhi\'s busy schedule, Shukla follows him with unwavering resolve, leading Gandhi to eventually visit the district. Upon arrival, Gandhi realizes that the peasants are gripped by a paralyzing fear of British authority and legal protocols. He shifts the movement\'s focus from purely legal battles to the psychological liberation of the masses, famously stating that "freedom from fear is more important than legal justice." When Gandhi is summoned to court for defying orders to leave the district, thousands of peasants gather in a spontaneous demonstration of solidarity, marking the beginning of their liberation from fear. Gandhi\'s strategic negotiation, where he accepts a 25% refund instead of the 50% he originally demanded, proves his political acumen—arguing that the landlords surrendering their prestige was more important than the gold. Beyond politics, Gandhi stays in Champaran to address social backwardness by establishing schools and providing healthcare. This narrative underscores the importance of self-reliance (Swaraj) and strategic patience in political activism. Fischer portrays Gandhi not just as a charismatic leader, but as a systematic strategist who decentralized power to the common person.',
  narrativeVoice: 'Factual / Reportage (Biographical)',
  setting: 'Champaran, Bihar, India (1917); Colonial era',
  authorStyle: 'Inspirational, documentary, and historical',
  themes: [
    'Non-violent Resistance (Satyagraha)',
    'Liberation from Fear as a Political Tool',
    'Self-reliance (Swaraj) and Dignity',
    'Strategic Compromise and Leadership'
  ],
  milestones: [
    { time: 'The Persistence', event: 'Rajkumar Shukla follows Gandhi across India to fix a date for the visit.' },
    { time: 'The Arrival', event: 'Gandhi reaches Patna and then Muzaffarpur, gathering information on sharecroppers.' },
    { time: 'The Defiance', event: 'Gandhi receives an official notice to quit Champaran but signs his defiance.' },
    { time: 'The Mobilization', event: 'Thousands of peasants gather at Motihari court in a spontaneous show of support.' },
    { time: 'The Inquiry', event: 'The official commission is appointed after the government is baffled by the peasant power.' },
    { time: 'The Negotiation', event: 'Gandhi accepts 25% compensation, prioritizing the landlords\' loss of prestige.' },
    { time: 'Social Reform', event: 'Gandhi initiates education, sanitation, and health reforms in Champaran villages.' }
  ],
  characters: [
    {
      name: 'Mahatma Gandhi',
      traits: ['Patient', 'Strategic', 'Persistent', 'Self-reliant'],
      conflict: 'Conflict of duties: Obeying the law vs. following the higher law of conscience.',
      growth: 'Static in values, but his presence catalyzes the growth of the entire peasant population.',
      evidence: "Accepting 25% refund as a strategic triumph rather than a financial defeat."
    },
    {
      name: 'Rajkumar Shukla',
      traits: ['Persistent', 'Illiterate yet determined', 'Resolute', 'Single-minded'],
      conflict: 'Struggle against the unjust sharecropping system of the landlords.',
      growth: 'Represents the "resolute peasant" who initiates one of India\'s greatest movements.',
      evidence: "Gandhi's quote: 'He was resolute... he followed me everywhere.'"
    }
  ],
  motifs: [
    { symbol: 'Indigo', meaning: 'Symbolizes colonial exploitation and the forced-labor system.' },
    { symbol: 'Motihari Crowd', meaning: 'Represents collective awakening and the end of the fear of the British.' },
    { symbol: 'Self-reliance', meaning: 'The "prop" Gandhi refused in the form of C.F. Andrews.' }
  ],
  dictionary: [
    { word: 'Sharecropping', context: 'The system where peasants were forced to grow indigo on 15% of land.', synonym: 'Tenant Farming' },
    { word: 'Satyagraha', context: 'The truth-force or non-violent resistance Gandhi practiced.', synonym: 'Passive Resistance' },
    { word: 'Prestige', context: 'The honor and status that the landlords had to surrender with the refund.', synonym: 'Reputation / Status' },
    { word: 'Liberation', context: 'The psychological freeing of peasants from the fear of the British.', synonym: 'Emancipation' }
  ],
  triggers: [
    {
      question: "Why did Gandhi agree to a settlement of 25% refund instead of 50%?",
      answerVerbatim: "Gandhi explained that the amount of the refund was less important than the fact that the landlords had been obliged to surrender part of the money and, with it, part of their prestige. Therefore, as far as the peasants were concerned, the planters had behaved as lords above the law.",
      markingSchemePoints: [
        "Prestige more important than money",
        "Planters' behavior as 'lords above the law' broken",
        "Psychological victory for the peasants"
      ],
      year: "2024-25 | 5 Marks",
      type: "Long"
    },
    {
      question: "How did the Champaran episode change the psychology of the Indian peasant?",
      answerVerbatim: "The peasants saw that they had rights and defenders. They learned courage. The spontaneous demonstration around the courthouse was the beginning of their liberation from the fear of the British.",
      markingSchemePoints: [
        "Discovery of rights and defenders",
        "Initiation into courage",
        "End of the paralyzing fear of authority"
      ],
      year: "2025-26 | SQP",
      type: "Short"
    }
  ],
  distinctions: [
    {
      title: "Legal Victory vs. Psychological Victory",
      comparison: {
        labelA: "Legal Battle",
        labelB: "Psychological Shift",
        points: [
          { a: "Lawyers charging high fees; cases dragged in court", b: "Peasants standing together in Motihari without fear" },
          { a: "Focused on the percentage of the refund (25%)", b: "Focused on the surrender of 'landlord prestige'" },
          { a: "Law court decisions", b: "Gandhi's focus on school and medical reforms" }
        ]
      }
    }
  ]
};
