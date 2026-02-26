import { ChapterForensics } from '../../../types';

export const theLastLesson: ChapterForensics = {
  id: 'flamingo-1',
  title: 'The Last Lesson',
  author: 'Alphonse Daudet',
  summary: 'The Last Lesson" is a poignant and evocative narrative set against the backdrop of the Franco-Prussian War in 1870, specifically in the French district of Alsace. The story begins with young Franz, a typical schoolboy who is more interested in the outdoor world—the birds\' eggs and the Prussian soldiers\' drilling—than his French grammar lessons on participles. Upon reaching school, he is met with an eerie, Sunday-like silence that replaces the usual hustle and bustle of opening and closing desks. The narrative takes a dramatic turn when M. Hamel, dressed in his finest Sunday clothes, announces that Berlin has ordered only German to be taught in the schools of Alsace and Lorraine. This "thunderclap" of news shifts Franz\'s entire world-view, turning his once-burdensome books into "old friends" he cannot bear to part with. M. Hamel delivers a moving tribute to the French language, describing it as the clearest and most logical in the world, and warns that language is the "key to their prison" for an enslaved people. The presence of the village elders on the back benches symbolizes a collective, though belated, repentance for neglecting their education. As the church clock strikes twelve and the Prussian trumpets sound, M. Hamel is overwhelmed by emotion, unable to speak further. In a final act of quiet defiance, he writes "Vive La France!" in giant letters on the chalkboard, signaling the end of an era. The story serves as a profound meditation on linguistic chauvinism and the irony of realizing the value of one\'s heritage only when it is on the verge of being lost. Ultimately, it captures the psychological transition of a boy maturing into a patriot in the span of a single hour.',
  narrativeVoice: 'First Person (Franz)',
  setting: 'Alsace, France; Franco-Prussian War (1870-71)',
  authorStyle: 'Patriotic, poignant, and reflective',
  themes: [
    'Linguistic Chauvinism (Imposition of German)',
    'Procrastination ("Putting off learning till tomorrow")',
    'Language as an Identity ("Key to their prison")',
    'The "Last Chance" Syndrome'
  ],
  milestones: [
    { time: 'The Dread', event: "Franz's dread of the participle test and attraction to the bright outdoors." },
    { time: 'The Bulletin', event: 'Encounter with the crowd at the bulletin board (Wachter the blacksmith).' },
    { time: 'The Silence', event: 'Unexpected quiet at school; villagers (Old Hauser) in the back benches.' },
    { time: 'The Decree', event: 'M. Hamel announces the Berlin order to teach only German.' },
    { time: 'The Awakening', event: "Franz's sudden awakening to the beauty of French and regret for past neglect." },
    { time: 'The Tribute', event: "M. Hamel's tribute to French as the clearest, most logical language." },
    { time: 'The Dismissal', event: 'The writing of "Vive La France!" and the silent dismissal.' }
  ],
  characters: [
    {
      name: 'Franz',
      traits: ['Procrastinator', 'Observant', 'Responsive', 'Patriotic'],
      conflict: 'Internal regret for neglecting studies vs. sudden love for his mother tongue.',
      growth: 'Matures in a single hour; shift from seeing books as a "nuisance" to "old friends".',
      evidence: "Franz realizing he can no longer learn what he previously avoided; the 'thunderclap' of the news."
    },
    {
      name: 'M. Hamel',
      traits: ['Dignified', 'Repentant', 'Patriotic', 'Strict yet sensitive'],
      conflict: 'Personal guilt for past complacency (sending kids to water flowers) vs. professional duty.',
      growth: 'Transforms from a "cranky" teacher to a symbol of national identity and resilience.',
      evidence: "Wearing his 'fine Sunday clothes' and writing 'Vive La France!' with all his might."
    }
  ],
  motifs: [
    { symbol: 'The Bulletin Board', meaning: 'Source of "all our bad news"; symbolizes external control and the weight of war.' },
    { symbol: "The Pigeons' Cooing", meaning: 'Symbolizes the absurdity of linguistic imperialism; "Will they make them sing in German?"' },
    { symbol: 'The Church Clock', meaning: 'The takeover of life, time, and language; the inevitability of the Prussians.' },
    { symbol: 'Vive La France!', meaning: 'Symbolizes cultural immortality and quiet defiance against political conquest.' }
  ],
  dictionary: [
    { word: 'Linguistic Chauvinism', context: 'The imposition of one language (German) over another (French).', synonym: 'Language Imperialism' },
    { word: 'Thunderclap', context: "The shocking announcement of the last lesson.", synonym: 'Stunner / Shock' },
    { word: 'Counting on the commotion', context: 'Franz hoping to enter unnoticed during the usual school din.', synonym: 'Relying on the din' },
    { word: 'In great dread of', context: 'Franz feeling intense fear of being scolded for not knowing participles.', synonym: 'Extremely fearful' }
  ],
  triggers: [
    {
      question: "Pick evidence from the extract that helps one infer that this was not the protagonist’s first time being late to school. (Reference: Usually, when school began...)",
      answerVerbatim: "The protagonist states: 'I had counted on the commotion to get to my desk without being seen,' which implies that they have been late before and have developed a strategy for avoiding punishment.",
      markingSchemePoints: [
        "Plan to sneak in without being noticed",
        "Relying on the usual classroom commotion",
        "Implies a previously developed strategy for avoiding punishment"
      ],
      year: "2023-24",
      type: "RTC",
      marks: 1,
      aiExplanation: "The text reveals that Franz explicitly 'counted on the commotion to get to [his] desk without being seen'. This implies that he is familiar with the usual chaotic environment of the school morning and has actually relied on this chaos in the past to mask his late arrivals. Developing such a strategy suggests this was a recurring habit."
    },
    {
      question: "What a thunderclap these words were to me! Oh, the wretches; that was what they had put up at the town-hall! My last French lesson! Why, I hardly knew how to write! I should never learn anymore! I must stop there, then! Oh, how sorry I was for not learning my lessons, for seeking birds’ eggs, or going sliding on the Saar! My books, that had seemed such a nuisance a while ago, so heavy to carry, my grammar, and my history of the saints, were old friends now that I couldn’t give up. And M. Hamel, too; the idea that he was going away, that I should never see him again, made me forget all about his ruler and how cranky he was.\n\nWhat was the writer’s purpose in using the metaphor of a ‘thunderclap’?",
      answerVerbatim: "To emphasise the suddenness and shock of Franz’s understanding about the importance of his education. / To conveys the urgency and deep impact of this moment / To dramatically highlight how unexpected and jarring the realisation was to him – like the startling and instant nature of a thunderclap / To effectively capture the emotional intensity of the moment of deep regret and abrupt awakening experienced by Franz",
      markingSchemePoints: [
        "Emphasise suddenness and shock",
        "Convey urgency and deep impact",
        "Highlight unexpected/jarring realization",
        "Capture emotional intensity of deep regret"
      ],
      year: "2024-25",
      type: "RTC",
      marks: 1,
      aiExplanation: "The metaphor 'thunderclap' vividly illustrates the sudden, jarring, and overwhelming nature of M. Hamel's announcement. Just as a thunderclap is loud, unexpected, and startling, the news that French would no longer be taught abruptly shatters Franz's carefree world, filling him with immediate shock and deep regret for taking his education for granted."
    },
    {
      question: "Read the extract and answer the question:\nWhat a thunderclap these words were to me! Oh, the wretches; that was what they had put up at the town-hall! My last French lesson! ... My books, that had seemed such a nuisance a while ago ... were old friends now that I couldn’t give up. And M. Hamel, too; the idea that he was going away, that I should never see him again, made me forget all about his ruler and how cranky he was.\n\nSelect the correct option from those given in brackets to fill in the blank.\nThe use of exclamatory marks in the first five sentences of the extract serves to express the speaker’s _______ (hidden/ intense) emotions.",
      answerVerbatim: "intense",
      markingSchemePoints: [
        "intense"
      ],
      year: "2024-25",
      type: "RTC",
      marks: 1,
      aiExplanation: "The exclamatory marks (!) are punctuation tools used specifically to convey strong, uncontained feelings. In this context, they highlight Franz's intense shock, disbelief, and distress upon hearing the linguistic decree, rather than emotions he is trying to hide."
    },
    {
      question: "Read the extract and answer the question:\nWhat a thunderclap these words were to me! Oh, the wretches; that was what they had put up at the town-hall! My last French lesson! ... My books, that had seemed such a nuisance a while ago ... were old friends now that I couldn’t give up. And M. Hamel, too; the idea that he was going away, that I should never see him again, made me forget all about his ruler and how cranky he was.\n\nComplete the following suitably.\nThe activities of seeking birds' eggs and sliding on the Saar reveal two things about Franz's character before his change in perspective. First, his youthful carefree nature and second, his preference for _________________.",
      answerVerbatim: "…preference for play over study",
      markingSchemePoints: [
        "preference for play over study",
        "avoiding school/responsibilities",
        "enjoying the outdoors"
      ],
      year: "2024-25",
      type: "RTC",
      marks: 1,
      aiExplanation: "Seeking birds' eggs and sliding on the river are physical, outdoor recreational activities. Their contrast against the classroom setting proves that Franz preferred playing outside to the discipline of studying and attending school."
    },
    {
      question: "Read the extract and answer the question:\nWhat a thunderclap these words were to me! Oh, the wretches; that was what they had put up at the town-hall! My last French lesson! ... My books, that had seemed such a nuisance a while ago ... were old friends now that I couldn’t give up. And M. Hamel, too; the idea that he was going away, that I should never see him again, made me forget all about his ruler and how cranky he was.\n\nWhat is reflected through the shift in the speaker’s perception of Mr. Hamel, conveyed through his readiness to forget the ruler?",
      answerVerbatim: "It reflects a newfound respect and appreciation, overshadowing past fears of discipline and strictness.",
      markingSchemePoints: [
        "Newfound respect and appreciation",
        "Overshadowing past fears",
        "Realizing the teacher's value"
      ],
      year: "2024-25",
      type: "RTC",
      marks: 1,
      aiExplanation: "Franz's willingness to forget the iron ruler shows that he no longer views M. Hamel as a strict, terrifying taskmaster. Instead, faced with Hamel's imminent departure, Franz suddenly respects the teacher's 40 years of service and feels genuine affection and gratitude for him."
    },
    {
      question: "Read the extract and answer the question:\nWhat a thunderclap these words were to me! Oh, the wretches; that was what they had put up at the town-hall! My last French lesson! Why, I hardly knew how to write! I should never learn anymore! I must stop there, then! Oh, how sorry I was for not learning my lessons, for seeking birds’ eggs, or going sliding on the Saar! My books, that had seemed such a nuisance a while ago, so heavy to carry, my grammar, and my history of the saints, were old friends now that I couldn’t give up. And M. Hamel, too; the idea that he was going away, that I should never see him again, made me forget all about his ruler and how cranky he was.\n\nSelect the textual option that is closest to indicating a sense of panic.\nA. Oh, how sorry I was for not learning my lessons…\nB. Why, I hardly knew how to write!\nC. Oh, the wretches; that was what they had put up at the town-hall!\nD. And M. Hamel, too;",
      answerVerbatim: "B. Why, I hardly knew how to write!",
      markingSchemePoints: [
        "B"
      ],
      year: "2024-25",
      type: "RTC",
      marks: 1,
      aiExplanation: "Sentence B ('Why, I hardly knew how to write!') best expresses panic because it highlights Franz's sudden, terrifying realization of his own ignorance just as the opportunity to learn is ripped away from him. It's an exclamation of frantic desperation."
    },
    {
      question: "Read the extract and answer the question:\nWhat a thunderclap these words were to me! Oh, the wretches; that was what they had put up at the town-hall! My last French lesson! ... My books, that had seemed such a nuisance a while ago, so heavy to carry, my grammar, and my history of the saints, were old friends now that I couldn’t give up.\n\nWhat does the following line from the extract, showcase?\nMy books, that had seemed such a nuisance a while ago, so heavy to carry, my grammar, and my history of the saints, were old friends now that I couldn’t give up.\nA. realization\nB. confusion\nC. expectation\nD. affirmation",
      answerVerbatim: "A. realization",
      markingSchemePoints: [
        "A"
      ],
      year: "2024-25",
      type: "RTC",
      marks: 1,
      aiExplanation: "The line clearly showcases a 'realization.' Franz undergoes a sudden paradigm shift, realizing the true emotional and cultural value of the books he previously dismissed as merely heavy, annoying burdens."
    },
    {
      question: "What does the contrasting imagery of the church clock and the Prussian trumpets represent, in ‘The Last Lesson’?",
      answerVerbatim: "Represents -- the tension between local traditions and foreign occupation. The church clock -- symbol of local, everyday life and continuity --- in stark opposition to the Prussian trumpets, which symbolise disruption, military power, and the enforcement of foreign rule. Highlights the theme of loss and the struggle to preserve one's cultural heritage against overwhelming odds.",
      markingSchemePoints: [
        "Tension between local traditions & foreign occupation",
        "Church clock = local everyday life / continuity",
        "Prussian trumpets = disruption / military power / foreign rule",
        "Theme of cultural loss against overwhelming odds"
      ],
      year: "2024-25",
      type: "Short",
      marks: 2,
      aiExplanation: "The two sounds represent the core conflict of the story. The church clock striking twelve marks the normal, peaceful progression of time, faith, and local French village life. Simultaneously, the sound of the Prussian trumpets cuts through this peace, imposing a harsh, military dominance that signals the death of their French identity and the enforcement of German rule."
    },
    {
      question: "What role does the French language played in ‘The Last Lesson’, in the context of the narrator’s feelings towards it?",
      answerVerbatim: "The narrator's feelings towards the French language shift from indifference to deep appreciation and respect when it is no longer allowed to be taught. Also, French, in the story, symbolises the loss of freedom and the imposition of foreign control over the region. Therefore, the narrator’s sense of loss and regret reflects the emotional impact of this change.",
      markingSchemePoints: [
        "Feelings shift from indifference to deep appreciation/respect",
        "Symbolises loss of freedom and imposition of foreign control",
        "Sense of loss and regret reflects emotional impact"
      ],
      year: "2025-26",
      type: "Short",
      marks: 2,
      aiExplanation: "The French language acts as a profound emotional catalyst for Franz. Initially, he treats his native language with childish indifference, viewing it as a burdensome chore. However, the moment he realizes it is being taken away by a foreign power, his perspective violently shifts. French instantly transforms from a linguistic tool into an irreplaceable symbol of his heritage, freedom, and national identity, filling him with intense guilt for having neglected it."
    }
  ],
  distinctions: [
    {
      title: "M. Hamel: Before vs. After the News",
      comparison: {
        labelA: "Regular Days",
        labelB: "The Last Lesson",
        points: [
          { a: "Complacent; sends kids to water flowers/go fishing", b: "Repentant; blames himself for past lack of focus" },
          { a: "Cranky and strict with his iron ruler", b: "Dignified, solemn, and wearings his best Sunday clothes" },
          { a: "A routine government servant", b: "A symbol of cultural defiance and patriotism" }
        ]
      }
    }
  ]
};
