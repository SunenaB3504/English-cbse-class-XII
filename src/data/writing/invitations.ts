import { WritingSkeleton } from '../../types';

export const invitations: WritingSkeleton = {
  id: 'invitations',
  format: 'Card Type (Formal) or Letter Type (Formal/Informal). Include RSVP.',
  blueprint: [
    {
      section: 'Formal Card (Standard)',
      content: 'Third-person perspective. No address, no date at the top. Body includes host, event, date, time, venue.',
      keyPhrases: [
        'The Principal and Staff of...',
        'Solicit your gracious presence...',
        'Request the pleasure of your company...'
      ]
    },
    {
      section: 'Formal Letter (To Guest)',
      content: 'Addressed to a specific person for a specific role (e.g., Chief Guest). Includes address and date.',
      keyPhrases: [
        'It gives us immense pleasure to invite you...',
        'We would be honored if you could preside over...',
        'Your presence would be a source of inspiration...'
      ]
    },
    {
      section: 'Informal Letter',
      content: 'First/second-person perspective. Friendly and warm tone.',
      keyPhrases: [
        'I am planning a small get-together...',
        'It\'s been a while since we met...',
        'Hope to see you there!'
      ]
    },
    {
      section: 'Replies (Acceptance)',
      content: 'Third-person (formal) or First-person (informal). Confirming attendance.',
      keyPhrases: [
        'Mr. X has great pleasure in accepting...',
        'I am delighted to accept your invitation...'
      ]
    }
  ],
  vocabularyUpgrades: [
    { basic: 'invite', advanced: 'solicit the presence / cordially invite' },
    { basic: 'happy', advanced: 'delighted / elated / privileged' },
    { basic: 'come', advanced: 'grace the occasion / attend' },
    { basic: 'thank you', advanced: 'expresses sincere gratitude' }
  ]
};
