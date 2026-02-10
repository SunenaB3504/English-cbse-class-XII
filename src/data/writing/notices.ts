import { WritingSkeleton } from '../../types';

export const noticeWriting: WritingSkeleton = {
  id: 'notices',
  format: 'Borders | Organization Name (Capital) | NOTICE (Capital) | Date | Heading | Body | Signature | Name | Designation',
  blueprint: [
    {
      section: 'Heading',
      content: 'Must be catchy, relevant, and in the center. Avoid being too long.',
      keyPhrases: ['ANNUAL SPORTS MEET', 'FOUND PROPERTY', 'BLOOD DONATION CAMP']
    },
    {
      section: 'Opening',
      content: 'Standard formal opening stating the purpose of the notice.',
      keyPhrases: [
        'This is to inform all the students...',
        'The [Organization Name] is organizing...',
        'All members are hereby notified that...'
      ]
    },
    {
      section: 'Details (The 5 Ws)',
      content: 'Include Date, Time, Venue, and Who can participate.',
      keyPhrases: ['Date: 25th March 2026', 'Time: 10:00 AM', 'Venue: School Auditorium']
    },
    {
      section: 'Closing',
      content: 'Call to action or contact info for further details.',
      keyPhrases: [
        'For further information, contact the undersigned.',
        'Interested students may register their names with...',
        'Strict adherence to the schedule is expected.'
      ]
    }
  ],
  vocabularyUpgrades: [
    { basic: 'organized', advanced: 'orchestrated / conceptualized' },
    { basic: 'held', advanced: 'convened / commemorated' },
    { basic: 'register', advanced: 'enroll / sign up / enlist' },
    { basic: 'ask for information', advanced: 'solicit clarifications / inquire' }
  ]
};
