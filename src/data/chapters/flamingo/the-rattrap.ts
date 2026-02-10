import { ChapterForensics } from '../../../types';

export const theRattrap: ChapterForensics = {
  id: 'flamingo-4',
  title: 'The Rattrap',
  author: 'Selma Lagerlöf',
  summary: '"The Rattrap" is an allegorical and redemptive tale set in the iron-mining district of Sweden, steeped in folklore and moral weight. It follows a cynical, nameless peddler who makes a living selling wire rattraps and philosophizes that the entire world is a massive rattrap designed to bait human beings with "riches and joys." The peddler\'s cynicism is put to the test when he steals thirty kronor from a kind, elderly crofter who had offered him warm hospitality and shelter. Fearing detection on the highway, he retreats into a dense forest, only to realize he has literally walked into his own "rattrap." His journey leads him to the Ramsjo Ironworks, where he is mistaken for an old military comrade, Captain von Stahle, by the ironmaster. Despite the peddler trying to maintain the charade for profit, the ironmaster\'s daughter, Edla Willmansson, sees through his grimy exterior and recognizes his fear, yet she chooses to treat him with unconditional compassion. She insists that he spend Christmas Eve with them, arguing that they should offer a poor traveler at least one day of peace in the year. This high-fidelity kindness becomes a transformative catalyst for the peddler, who is "raised to the level of a captain" by Edla\'s respect. In a final act of moral restoration, he leaves behind the stolen thirty kronor with a note signed as "Captain von Stahle," proving that human goodness has the power to elevate even the most fallen souls. The story beautifully contrasts the harsh social Darwinism of the industrial era with the Christian themes of redemption and grace. Lagerlöf suggests that the essential goodness in a human being can be awakened at any time through understanding and love.',
  narrativeVoice: 'Third Person (Omniscient / Fairy-tale style)',
  setting: 'Ironworks region of Sweden; Industrial Revolution era',
  authorStyle: 'Allegorical, redemptive, and folklore-inspired',
  themes: [
    'The Transformative Power of Compassion',
    'The Concept of the World as a Rattrap (Temptation)',
    'Human Loneliness and the Need for Fellowship',
    'Redemption and Moral Awakening'
  ],
  milestones: [
    { time: 'The Philosophy', event: 'The peddler conceives the idea that the world is a big rattrap.' },
    { time: 'The Theft', event: 'Stealing 30 kronor from the kind Crofter after a night of hospitality.' },
    { time: 'The Forest', event: 'Getting lost in the woods and realizing he is trapped by his own greed.' },
    { time: 'Ironworks', event: 'Seeking shelter at Ramsjo Ironworks; mistaken for Captain von Stahle.' },
    { time: 'The Invitation', event: "Edla Willmansson's compassionate intervention to let the peddler stay for Christmas." },
    { time: 'The Reveal', event: 'The Ironmaster discovers the mistaken identity but Edla defends the peddler.' },
    { time: 'The Redemption', event: 'The peddler leaves behind the stolen money and a gift, signed as the Captain.' }
  ],
  characters: [
    {
      name: 'The Peddler',
      traits: ['Cynical', 'Resourceful', 'Lone Wolf', 'Redeemable'],
      conflict: 'Internal: Cynical worldview vs. the latent human goodness awakened by Edla.',
      growth: 'Shift from a petty thief and cynic to a man who chooses honor and redemption.',
      evidence: "Signing the note as 'Captain von Stahle' to honor the dignity Edla gave him."
    },
    {
      name: 'Edla Willmansson',
      traits: ['Compassionate', 'Perceptive', 'Persuasive', 'Non-judgmental'],
      conflict: 'External: Persuading her father to show mercy to a stranger of low status.',
      growth: 'Acts as the moral compass of the story; her growth is in her unwavering commitment to empathy.',
      evidence: "Treating the peddler with the respect due to a Captain even after the truth is known."
    }
  ],
  motifs: [
    { symbol: 'The Rattrap', meaning: 'The world\'s temptations (wealth, joy) that lure humans into traps.' },
    { symbol: 'Thirty Kronor', meaning: 'The "bait" that leads to the peddler\'s fall from grace.' },
    { symbol: 'Christmas Gift/Letter', meaning: 'Symbolizes the peddler\'s moral transformation and his new identity.' }
  ],
  dictionary: [
    { word: 'Vagabond', context: 'The peddler wandering the roads without a home.', synonym: 'Tramper / Wanderer' },
    { word: 'Kronor', context: 'The currency stolen from the crofter.', synonym: 'Money (Swedish)' },
    { word: 'Ironworks', context: 'The massive industrial setting where the climax occurs.', synonym: 'Foundry' },
    { word: 'Misadventure', context: 'The peddler\'s journey through the forest.', synonym: 'Trouble / Accident' }
  ],
  triggers: [
    {
      question: "How does Edla's treatment of the peddler differ from her father's?",
      answerVerbatim: "The ironmaster views him through the lens of utility and social status (old comrade vs. intruder). Edla, however, sees his fear and humanity; she treats him 'as if he was a real captain,' allowing him to rise to that dignity. Her kindness is unconditional, regardless of his true identity.",
      markingSchemePoints: [
        "Ironmaster: Status-based and utilitarian",
        "Edla: Empathy-based and unconditional",
        "The power of 'acting as if' to catalyze change"
      ],
      year: "2023-24 | 5 Marks",
      type: "Long"
    },
    {
      question: "Explain the metaphor of the world as a rattrap.",
      answerVerbatim: "The whole world is nothing but a big rattrap. It exists only to set baits for people. It offers riches and joys, shelter and food, heat and clothing, exactly as the rattrap offers cheese and pork—and as soon as anyone lets himself be tempted to touch the bait, the rattrap closes on him.",
      markingSchemePoints: [
        "Worldly luxuries as 'bait'",
        "The trap of greed and temptation",
        "Inevitability of the fall for the tempted"
      ],
      year: "Verbatim SQP 2025-26",
      type: "Long"
    }
  ],
  distinctions: [
    {
      title: "Crofter vs. Ironmaster",
      comparison: {
        labelA: "The Crofter",
        labelB: "The Ironmaster",
        points: [
          { a: "Lonely and eager for company; shares porridge/tobacco", b: "Status-conscious; invites out of duty to a comrade" },
          { a: "Trusting; shows his stolen 30 kronor openly", b: "Suspicious; threatens police upon discovering the mistake" },
          { a: "Victim of the peddler's first betrayal", b: "Accidental witness to the peddler's redemption" }
        ]
      }
    }
  ]
};
