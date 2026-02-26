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
      question: "What can be inferred from Rajendra Prasad’s recorded upshot of the lawyer consultations at Motihari? [Reference - The senior lawyer replied, they had come to advise and help him...]",
      answerVerbatim: "That Gandhi's commitment to the cause of the peasants, despite being a stranger to the region, was exemplary and motivated the lawyers to continue their support. It highlights the idea that the lawyers were conscious of the potential shame they would bring upon themselves if they deserted the peasants in their time of need.",
      markingSchemePoints: [
        "Gandhi's exemplary commitment motivated the lawyers",
        "Lawyers became conscious of potential shame",
        "Inspired a sense of purpose to fight for justice"
      ],
      year: "2023-24",
      type: "Short",
      marks: 2,
      aiExplanation: "Rajendra Prasad's record is pivotal because it captures the moment the Indian lawyers experienced a profound moral awakening. Initially, they viewed the situation purely from a professional standpoint. However, upon witnessing Gandhi—a prominent stranger—willing to go to prison for the sharecroppers, they recognized the utter cowardice and shame in their own planned retreat. Gandhi's selfless courage effectively shamed them into a unified political and moral alliance, leading them to declare they would follow him to jail."
    },
    {
      question: "How did the peasants of Champaran react to Gandhi’s presence and why?",
      answerVerbatim: "Largely due to the leadership and advocacy provided by Mahatma Gandhi -- his involvement brought national attention to their plight --highlighted the importance of civil rights and nonviolent resistance\nGandhi's strategic approach to negotiations & his insistence on nonviolent protest -- empowered the peasants to stand up against oppressive landlords --- led to their immediate victory -- inspired a broader movement for social and economic justice across India",
      markingSchemePoints: [
        "Involvement brought national attention to their plight",
        "Highlighted importance of civil rights/nonviolent resistance",
        "Empowered peasants to stand up against landlords",
        "Inspired broader movement for justice"
      ],
      year: "2024-25",
      type: "Short",
      marks: 2,
      aiExplanation: "Gandhi's arrival fundamentally shifted the psychology of the Champaran peasants. Previously paralyzed by a fear of British authority and the convoluted legal system, his presence and strategic leadership acted as a catalyst. Seeing a champion willing to go to jail for them, the peasants spontaneously gathered in the thousands, realizing for the first time that they had both rights and the collective power to demand them. This mobilization was the beginning of their liberation from fear."
    },
    {
      question: "Why did Gandhi agree to a settlement of 25% refund instead of 50%?",
      answerVerbatim: "Gandhi explained that the amount of the refund was less important than the fact that the landlords had been obliged to surrender part of the money and, with it, part of their prestige. Therefore, as far as the peasants were concerned, the planters had behaved as lords above the law.",
      markingSchemePoints: [
        "Prestige more important than money",
        "Planters' behavior as 'lords above the law' broken",
        "Psychological victory for the peasants"
      ],
      year: "2024-25 | 5 Marks",
      type: "Long",
      marks: 5,
      aiExplanation: "The refund was not just a financial transaction; it was a psychological victory. By forcing the landlords to surrender a portion of the money, Gandhi forced them to surrender a portion of their assumed prestige. It shattered the illusion that the British planters were above the law, which was a critical first step towards the peasants' true independence."
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
      type: "Short",
      marks: 2,
      aiExplanation: "The Champaran episode proved to the peasants that they were not alone. The fact that a leader like Gandhi was willing to go to jail for their cause made them realize they had rights and defenders. This collective realization dispelled their deep-rooted fear of the British authority."
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
