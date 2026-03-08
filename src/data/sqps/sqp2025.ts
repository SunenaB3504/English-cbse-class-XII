import { StructuredSQP } from '../../types/sqp';

export const sqp2025: StructuredSQP = {
   year: '2025-26',
   title: 'Sample Question Paper 2025-26',
   sections: [
      {
         id: 'reading',
         title: 'Section A: Reading Skills',
         marks: '22M',
         questions: [
            {
               id: 'q1',
               questionNumber: '1',
               question: 'Read the following passages...\n(Passage from Great Expectations by Charles Dickens)\n\nI Which textual evidence tells us that Pip was trembling?',
               marks: '1',
               markingScheme: '‘...the small bundle of shivers growing afraid of it all...’',
               aiExplanation: 'The forensic evidence is found in the phrase "small bundle of shivers". In CBSE marking, "shivers" is a direct physical indicator of trembling, used here as a metonymy for Pip\'s physical state of fear.'
            },
            {
               id: 'q1-2',
               questionNumber: '1.II',
               question: 'Complete the following with a suitable reason.\nThe writer refers to the sea as a ‘savage lair’ in order to tell the reader that ____.',
               marks: '1',
               markingScheme: '…that the sea is a wild, untamed, and menacing force / contribute to the ominous atmosphere of the scene / amplifying the sense of danger that Pip feels',
               aiExplanation: 'The term "savage lair" is a metaphor that humanizes nature as a predator. The Marking Scheme requires identifying the "menacing" or "dangerous" quality to award the 1 mark.'
            },
            {
               id: 'q1-8',
               questionNumber: '1.VIII',
               question: 'What does the man’s question, “Where’s your mother?” and his reaction when Pip points to her suggest about his intentions? (Answer in about 40 words)',
               marks: '2',
               markingScheme: 'It suggests that he is trying to gather information about Pip’s family. When he asks about Pip’s mother and looks over his shoulder, it shows he is possibly evaluating his surroundings or considering where Pip’s family might be, perhaps to assess if anyone is around to stop him and contemplating the best way to proceed without interference.',
               aiExplanation: 'For 2 marks, the answer must cover both the "gathering of information" and the "evaluation of risk/surroundings". The glance over the shoulder is the critical behavioral evidence cited in the MS.'
            }
         ]
      },
      {
         id: 'writing',
         title: 'Section B: Creative Writing Skills',
         marks: '18M',
         questions: [
            {
               id: 'q3a',
               questionNumber: '3.A',
               question: 'You are Daljeet Kaur, a member of the Teen Well-Being Association, Chandigarh. The Association is planning to organise free pottery classes every Sunday morning at the community hall to encourage creativity among young residents. Write a notice in about 50 words, informing the residents of the event and inviting registrations.',
               marks: '4',
               markingScheme: 'Format (1M): Box, Issuing Authority, NOTICE, Date, Title, Designation.\nContent (2M): Event, Date, Time, Venue, Registration details.\nAccuracy (1M): Grammar and Spelling.',
               aiExplanation: 'CBSE strictly enforces the "Box" and "NOTICE" labels. Missing the designation (Daljeet Kaur, Member) results in a ½ mark deduction even if content is perfect. The content must include "Young Residents" as the target audience.'
            }
         ]
      },
      {
         id: 'literature',
         title: 'Section C: Literature',
         marks: '40M',
         questions: [
            {
               id: 'q7ai',
               questionNumber: '7.A.I',
               question: 'What does the imagery of the ‘ashen face’ of the mother suggest about her physical condition?',
               marks: '1',
               markingScheme: 'She is frail, aged, in a declining physical condition, vulnerable, weakening health, lacks vitality.',
               aiExplanation: 'The word "ashen" literally refers to the color of ash (pale/grey), which is a forensic sign of lack of blood circulation or "vitality". The MS accepts any synonym for frailty or illness.'
            },
            {
               id: 'q10i',
               questionNumber: '10.I',
               question: 'What role does the French language played in ‘The Last Lesson’, in the context of the narrator’s feelings towards it? (40-50 words)',
               marks: '2',
               markingScheme: 'Shift from indifference to deep appreciation and respect. Symbolises the loss of freedom and the imposition of foreign control. Narrator’s sense of loss and regret reflects the emotional impact of this change.',
               aiExplanation: 'The 2-mark key is the "transformation of perspective". You must contrast the initial "nuisance" view with the final "most beautiful language" view to capture the full score.'
            },
            {
               id: 'q13a',
               questionNumber: '13.A',
               question: 'Sadao’s character arc in ‘The Enemy’ is central to the moral dilemma of the story. (120-150 words)',
               marks: '5',
               markingScheme: 'Loyalty to country vs. Doctor\'s oath. Internal conflict moves from hesitation to genuine compassion. Triumph of humanity over nationalism. values individual life over political allegiances.',
               aiExplanation: 'For 5 marks, the forensic breakdown requires discussing the "Moral Dilemma". The answer should highlight that Sadao doesn\'t just "save" the man, but "chooses" to save him despite the risk of treason. Mentioning the "General\'s negligence" adds depth to why Sadao was able to act.'
            }
         ]
      }
   ]
};
