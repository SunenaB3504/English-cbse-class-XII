import { StructuredSQP } from '../../types/sqp';

export const sqp2023: StructuredSQP = {
   year: '2023-24',
   title: 'Sample Question Paper 2023-24',
   sections: [
      {
         id: 'reading',
         title: 'Section A: Reading Skills',
         marks: '22M',
         questions: [
            {
               id: 'q1-1',
               questionNumber: '1.I',
               question: 'Select the option that classifies Arthur\'s confusion about drastic events such as the destruction of his home planet and the introduction of new technologies, correctly.',
               marks: '1',
               markingScheme: 'C. Loss and change',
               aiExplanation: 'The destruction of the home planet is a definitive "Loss", and the new technologies represent "Change". Option C is the most clinically accurate classification of these traumatic events in a CBSE context.'
            },
            {
               id: 'q1-6',
               questionNumber: '1.VI',
               question: 'Explain, in about 40 words, why the name "The Paranoid Android" is considered ironic.',
               marks: '2',
               markingScheme: 'Irony lies in the fact that robots are logically programmed and expected to be unemotional. Paranoia is an irrational human emotion. This contrast between the synthetic nature and human-like fragility is ironic.',
               aiExplanation: 'For 2 marks, you must define the expectation (robots = logic) and the subversion (Marvin = irrational fear/paranoia). The "humanization of the machine" is a key forensic point here.'
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
               question: 'Bali High Public School has recently created CureGreen, a dedicated area for local medicinal herbs... As Rachel Tiwari, Captain of the Eco-Club, draft a notice...',
               marks: '4',
               markingScheme: 'Format (1M), Content (2M), Accuracy (1M). Must invite care-giver applications.',
               aiExplanation: 'The "specific instruction" here is to invite "care-giver applications". Missing this targeted call-to-action usually results in a 1-mark penalty in the "Content" section of CBSE marking.'
            }
         ]
      },
      {
         id: 'literature',
         title: 'Section C: Literature',
         marks: '40M',
         questions: [
            {
               id: 'q7aiii',
               questionNumber: '7.A.III',
               question: 'The "endless fountain of immortal drink" is an apt analogy for the tales of the mighty dead because ____________________________.',
               marks: '1',
               markingScheme: '...just as a fountain constantly pours forth water, the tales of the mighty dead pour forth endless inspiration and wisdom for the living.',
               aiExplanation: 'Keats uses this analogy to show that beauty (in literature/history) is "immortal" and "nourishing". The forensic link is between the "constant flow" of a fountain and the "perpetual inspiration" of great stories.'
            },
            {
               id: 'q10i',
               questionNumber: '10.I',
               question: 'What can be inferred from Rajendra Prasad’s recorded upshot of the lawyer consultations, at Motihari?',
               marks: '2',
               markingScheme: 'Gandhi\'s moral authority and courage inspired the lawyers. They realized the shame of deserting the peasants when a stranger (Gandhi) was ready to go to jail for them. It shifted their focus from professional gain to social justice.',
               aiExplanation: 'The "upshot" is the psychological shift in the lawyers. To get 2 marks, highlight the contrast between their initial "professional" stance and their final "moral" commitment inspired by Gandhi\'s selflessness.'
            }
         ]
      }
   ]
};
