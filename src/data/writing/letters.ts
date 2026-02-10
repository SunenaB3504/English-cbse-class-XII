import { WritingSkeleton } from '../../types';

export const formalLetters: WritingSkeleton = {
  id: 'formal-letters',
  format: 'Sender\'s Address | Date | Receiver\'s Address | Subject | Salutation | Body | Subscription | Name',
  blueprint: [
    {
      section: 'Letter to Editor (Standard Intro)',
      content: 'Immediately state the issue through the newspaper columns.',
      keyPhrases: [
        'Through the esteemed columns of your newspaper...',
        'I wish to draw the attention of the authorities to...',
        'I am writing to express my deep concern regarding...'
      ]
    },
    {
      section: 'Job Application (Cover Letter)',
      content: 'Reference the advertisement, express interest, and state suitability.',
      keyPhrases: [
        'In response to your advertisement in...',
        'I wish to offer my candidature for the post of...',
        'I possess the requisite qualifications and experience...'
      ]
    },
    {
      section: 'Bio-Data (Job Application)',
      content: 'Detailed list of personal particulars, education, and references.',
      keyPhrases: [
        'Educational Qualifications: CBSE (First Div)',
        'Experience: 5 years at...',
        'References: Dr. A.P. Singh (Principal)'
      ]
    }
  ],
  vocabularyUpgrades: [
    { basic: 'problem', advanced: 'grievance / predicament / menace' },
    { basic: 'want to say', advanced: 'wish to highlight / emphasize' },
    { basic: 'good for the job', advanced: 'suitable candidate / fit for the role' },
    { basic: 'solve', advanced: 'mitigate / address / rectify' }
  ]
};
