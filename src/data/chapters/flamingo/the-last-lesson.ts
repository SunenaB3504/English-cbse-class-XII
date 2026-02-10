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
      question: "How does M. Hamel's perspective on the French language change in his final lecture?",
      answerVerbatim: "He calls it the most beautiful language in the world—the clearest, the most logical; that we must guard it among us and never forget it, because when a people are enslaved, as long as they hold fast to their language it is as if they had the key to their prison.",
      markingSchemePoints: [
        "Language as a physical 'key' to liberation",
        "Beauty, clarity, and logic of French",
        "National identity tied to linguistic survival"
      ],
      year: "SQP 2024-25",
      type: "Long"
    },
    {
      question: "Write a diary entry as M. Hamel on the night of the last lesson.",
      answerVerbatim: "The room was silent, but my heart was pounding. Forty years of my life... and tonight, I leave. I saw the children—Franz especially—waking up too late. I taught them not just grammar, but their identity.",
      markingSchemePoints: [
        "Expression of regret and pride",
        "Reflection on 40 years of service",
        "Emphasis on linguistic identity as a parting gift"
      ],
      year: "Persona Trigger (2023-24)",
      type: "Persona"
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
