import { ChapterForensics } from '../../../types';

export const theEnemy: ChapterForensics = {
  id: 'the-enemy',
  title: 'The Enemy',
  author: 'Pearl S. Buck',
  summary: 'A profound conflict between humanity and nationalism during WWII. Dr. Sadao Hoki, a Japanese surgeon, finds a wounded American POW (Tom) washed ashore near his home. Despite the risk of being labeled a traitor, Sadao’s doctor’s conscience compels him to save the life of the "enemy." The story explores the complexities of duty, the role of Hana (his wife) in his moral struggle, and the ultimate irony of the Japanese General who prioritizes his own health over national security.',
  narrativeVoice: 'Third-person (Limited to Sadao and Hana). Serious, empathetic, and tense.',
  setting: 'The coast of Japan during WWII (Dr. Sadao’s house).',
  authorStyle: 'Realistic prose with deep psychological insight. Use of imagery (mist, lanterns) and heavy focus on moral deliberation.',
  themes: [
    'Humanity vs. Patriotism (Nationalism)',
    'The Hippocratic Oath / Professional duty',
    'Prejudice and racial bias',
    'Moral courage and individual conscience'
  ],
  milestones: [
    { time: 'The Discovery', event: 'Sadao and Hana find the wounded American on the beach and realize he is a POW.' },
    { time: 'The Dilemma', event: 'Internal debate whether to put him back in the sea or save him as a doctor.' },
    { time: 'The Surgery', event: 'Sadao operates on Tom in his home, while Hana assists and the servants rebel.' },
    { time: 'The Confession', event: 'Sadao tells the General about the American. The General promises assassins.' },
    { time: 'The Escape', event: 'Sadao waits but no assassins come; he helps the American escape on a boat with food and water.' }
  ],
  characters: [
    {
      name: 'Dr. Sadao Hoki',
      traits: ['Skillful surgeon', 'Dutiful', 'Compassionate', 'Conflicted'],
      conflict: 'Personal humanity vs. Patriotic duty to his country.',
      growth: 'Ultimately chooses the survival of his patient over racial/national hatred.',
      evidence: 'Saving the "enemy" twice (once through surgery, once through escape).'
    },
    {
      name: 'Hana',
      traits: ['Supportive', 'Dignified', 'Internalized bias', 'Resilient'],
      conflict: 'Her loyalty to Sadao vs. her fear of the servants and the law.',
      growth: 'Provides silent but critical support; washes the wounds herself when servants refuse.',
      evidence: 'Her emotional reaction to the "white man" in her house.'
    },
    {
      name: 'The General',
      traits: ['Self-centered', 'Unscrupulous', 'Professional'],
      conflict: 'His life (Sadao is his survival) vs. Law (Sadao is a "traitor").',
      growth: 'Static; he forgets his promise of assassins because he is too absorbed in his own health.',
      evidence: 'Allowing the POW to live because he needs Sadao to operate on him later.'
    }
  ],
  motifs: [
    { symbol: 'The Mist', meaning: 'The moral ambiguity and confusion surrounding their decision.' },
    { symbol: 'The Surge', meaning: 'The constant pressure of external forces (war, public opinion).' },
    { symbol: 'Blood', meaning: 'The commonality of human life that transcends nationality.' },
    { symbol: 'The White Man', meaning: 'The external "infection" or threat to the domestic Japanese peace.' }
  ],
  dictionary: [
    { word: 'Revolting', context: 'The sight was revolting to her', synonym: 'Disgusting' },
    { word: 'Assassins', context: 'He will send his private assassins', synonym: 'Professional killers' },
    { word: 'Demented', context: 'She looked at him with demented eyes', synonym: 'Insane/Wild' },
    { word: 'Superstitious', context: 'The servants were superstitious...', synonym: 'Believing in omens' }
  ],
  triggers: [
    {
      question: "Answer the question in the context of the following lines from ‘The Enemy’.\n“Stupid Yumi,” she muttered fiercely. “Is this anything but a man? And a wounded helpless man!”\nIn the conviction of her own superiority she bent impulsively and untied the knotted rugs that kept the white man covered.\n\nExplain the superiority Hana is convinced about.",
      answerVerbatim: "Hana is expressing her frustration with Yumi, who is hesitant to help the wounded white man. By asking 'Is this anything but a man?', Hana is highlighting that they are all humans, regardless of race or nationality. She believes their common humanity makes it a moral duty to help. In these lines, she asserts her belief in the importance of doing the right thing, demonstrating her sense of moral superiority over Yumi, who is more concerned with following strict rules than helping a fellow human being.",
      markingSchemePoints: [
        "Frustration with Yumi's hesitation to help",
        "Highlighting common humanity over race/nationality",
        "Moral superiority of doing the right thing over following strict societal rules"
      ],
      year: "2023-24",
      type: "Short",
      marks: 2,
      aiExplanation: "Hana feels morally superior because she prioritizes basic human compassion over blind, prejudiced nationalism. While the servant Yumi is paralyzed by superstitious fear and strict societal rules that demand hostility toward the 'white man,' Hana recognizes the POW as simply a wounded, helpless human being in need of medical care. Her impulsive action to untie the rugs proves she has overcome her own racial bias, elevating her ethically above her terrified servants."
    },
    {
      question: "Analyse how the writer has incorporated influences such as religion/humanity, family bonds, and patriotism to good effect in the story, The Enemy.",
      answerVerbatim: "Religion/Humanity: Sadao's Hippocratic oath overrides his nationalistic hatred. Family Bonds: The traditional Japanese household dynamics between Sadao and Hana add tension but ultimate support. Patriotism: Represented by the servants' mutiny and the General. The conflict between these forces creates the story's profound psychological depth.",
      markingSchemePoints: [
        "Humanity/Medical ethics overriding national hatred",
        "Family bonds creating tension and support (Hana's role)",
        "Patriotism creating the central conflict (servants, General)",
        "Interweaving these influences creates psychological depth"
      ],
      year: "2024-25",
      type: "Long",
      marks: 5,
      aiExplanation: "Pearl S. Buck masterfully weaves these three powerful influences to create deep psychological conflict. Sadao's 'patriotism' demands he let the American POW die, while his humanity and medical training demand he save him. 'Family bonds' add friction, as harboring a traitor threatens the safety of his wife and children. Buck uses these opposing forces to demonstrate that pure human empathy can, and should, triumph over blind nationalistic prejudice."
    },
    {
      question: 'Why did Sadao help the American escape?',
      answerVerbatim: 'Because he realized that high walls of prejudice could not withstand the common human bond, and he felt his duty as a doctor was fulfilled.',
      markingSchemePoints: [
        'Doctor’s conscience',
        'Humanity over nationalism',
        'Inaction of the General'
      ],
      year: '2024-25 | Long',
      type: 'Long',
      marks: 5,
      aiExplanation: "Sadao ultimately helps the American escape because his conscience as a doctor—his humanity—has decisively conquered his patriotism. After operating on Tom and nursing him back to health, Sadao realizes that the 'high walls of prejudice' built by the war are artificial. By fulfilling his medical duty to save a life, he can no longer condemn that same life to death, proving that the common bond of humanity is stronger than national hatred."
    },
    {
      question: 'How did the servants react to the POW?',
      answerVerbatim: 'They were openly hostile, critical of Sadao’s "American education," and eventually left the house in protest.',
      markingSchemePoints: [
        'Nationalist pride',
        'Fear of legal trouble',
        'Superstitious beliefs'
      ],
      year: '2025-26 | Short',
      type: 'Short',
      marks: 2,
      aiExplanation: "The servants embody the intense, blind nationalism and superstition of wartime Japan. They are openly hostile to the American POW, viewing him entirely as the 'enemy.' Furthermore, they are highly critical of Sadao’s 'American education,' believing it has corrupted his loyalty to Japan. Their eventual resignation and departure from the house highlight the intense societal pressure and danger Sadao faced by choosing humanity over patriotism."
    },
    {
      question: "'The Enemy' highlights the conflict between national duty and personal ethics, showcasing how compassion can transcend prejudice. Write a character analysis of Dr. Sadao, exploring this conflict and his ultimate choices.\nYou may begin like this:\nDr. Sadao is a complex character who finds himself torn between his duty as a Japanese citizen and his ethical obligations as a doctor.",
      answerVerbatim: "Dr. Sadao is a complex character who finds himself torn between his duty as a Japanese citizen and his ethical obligations as a doctor. When an American prisoner of war washes ashore, Sadao faces a profound moral dilemma. Initially, he and his wife Hana hesitate, driven by patriotism and fear of reprisal. However, his training as a surgeon prevails, compelling him to save the soldier's life... His ultimate decision to help the American escape demonstrates that his compassion and medical ethics outweigh national prejudice...",
      markingSchemePoints: [
        "Faces profound moral dilemma (patriotism vs. medical ethics)",
        "Initial hesitation driven by patriotism/fear of reprisal",
        "Training as a surgeon compels him to save the soldier",
        "Ultimate decision to help American escape demonstrates compassion outweighs national prejudice"
      ],
      year: "2025-26",
      type: "Long",
      marks: 5,
      aiExplanation: "Dr. Sadao represents the ultimate triumph of universal humanism over localized nationalism. As a Japanese citizen during WWII, his legal and patriotic duty is unequivocally to hand over the American POW to the authorities for execution. Yet, the Hippocratic Oath he took as a doctor creates an agonizing internal war. His profound character evolution occurs when he not only operates on the 'enemy' but actively facilitates his escape to safety. This definitively proves that for Sadao, the sacred duty to preserve human life eclipses all political and racial boundaries."
    }
  ],
  distinctions: [
    {
      title: 'Patriotism vs. Humanity',
      comparison: {
        labelA: 'Patriotism',
        labelB: 'Humanity',
        points: [
          { a: 'Demands reporting the POW and letting him die.', b: 'Demands saving the life of a wounded man.' },
          { a: 'Viewed through the lens of the General and servants.', b: 'Viewed through the actions of Dr. Sadao Hoki.' }
        ]
      }
    }
  ]
};
