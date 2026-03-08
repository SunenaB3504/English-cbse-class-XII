import { StructuredSQP } from '../../types/sqp';

export const sqp2024: StructuredSQP = {
   year: '2024-25',
   title: 'Sample Question Paper 2024-25',
   sections: [
      {
         id: 'reading',
         title: 'Section A: Reading Skills',
         marks: '22M',
         questions: [
            {
               id: 'q1-1',
               questionNumber: '1.I',
               question: 'According to paragraph 1, what effect do smartphone notifications have on the people in the room?',
               marks: '1',
               markingScheme: 'They lead to instant interruptions in conversations.',
               aiExplanation: 'The keyword here is "instant interruptions". The passage mentions notifications "punctuating conversations like an incessant drumbeat", which the MS translates into the effect of breaking social flow.'
            },
            {
               id: 'q1-2',
               questionNumber: '1.II',
               question: 'How does the author use the metaphor of \'autumn leaves in the wind\' to interpret the passing of time in the setting described?',
               marks: '1',
               markingScheme: 'It illustrates how moments are fleeting and unnoticed, lost amid the distractions of digital interactions / it illustrates how easily significant moments can drift away when overshadowed by the focus on technology.',
               aiExplanation: 'CBSE marking for metaphors requires explaining the "comparative quality". Here, "autumn leaves" signify something that is falling and being swept away (transient), matching the "fleeting" nature of time.'
            },
            {
               id: 'q1-9',
               questionNumber: '1.IX',
               question: 'Why is it fair to say that the statement ‘And yet, for all our efforts to stay connected, we find ourselves increasingly isolated in a sea of digital faces’ from paragraph 4, employs irony?',
               marks: '1',
               markingScheme: 'A. Despite the intent to connect more effectively, the result is the opposite.',
               aiExplanation: 'Irony is the difference between expectation and reality. The expectation is "connection" (via digital faces), but the reality is "isolation". Option A is the only one that defines this reversal.'
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
               question: 'Your school is planning to conduct an inter-class seminar on the topicThe Importance of Mental Healthto create awareness in adolescents. As the head of the organising committee, write a notice...',
               marks: '4',
               markingScheme: 'Format (1M), Content (2M), Accuracy (1M). Must include: Name of school, NOTICE, Date, Title (Mental Health Seminar), Target (XI-XII), Date/Time/Venue of seminar.',
               aiExplanation: 'Note: The target audience (Classes XI-XII) is a specific constraint in the question. Failing to mention this audience in the notice will lead to a ½ mark deduction in "Content".'
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
               question: 'The putting on of ‘clean clothes’ by the warmongers, symbolises_________.',
               marks: '1',
               markingScheme: '…a potential for change and renewal / a moment of pause and reflection / an act of cleansing of their actions /embracing a peaceful existence/ the possibility of transformation.',
               aiExplanation: 'In Neruda\'s "Keeping Quiet", clothes represent the external "persona". "Clean clothes" imply removing the "blood-stained" persona of war and adopting a fresh, peaceful identity.'
            },
            {
               id: 'q9ai',
               questionNumber: '9.A.I',
               question: 'What was the writer’s purpose in using the metaphor of a ‘thunderclap’ in "The Last Lesson"?',
               marks: '1',
               markingScheme: 'To emphasise the suddenness and shock of Franz’s understanding about the importance of his education./ To conveys the urgency and deep impact of this moment / To dramatically highlight how unexpected and jarring the realisation was to him.',
               aiExplanation: 'A "thunderclap" is sudden, loud, and startling. This metaphor mirrors Franz\'s internal state when he realizes it\'s his "last" lesson—a shocking awakening from his prior indifference.'
            },
            {
               id: 'q13a',
               questionNumber: '13.A',
               question: 'Analyse how the writer has incorporated influences like religion, family bonds, or patriotism in "The Enemy". (120-150 words)',
               marks: '5',
               markingScheme: 'Setting: Wartime setting amplifies moral dilemma. Motivation: Cultural values (Patriotism) vs. Humanity. Conflict: Sadao\'s duty as citizen vs. doctor. Pacing: Reflects internal struggle.',
               aiExplanation: 'This is a high-order thinking question. To score 5/5, use terms like "Internal vs. External conflict". Textual evidence: Hana\'s hesitation despite her kindness, and the General\'s self-interest as a foil to Sadao\'s selflessness.'
            }
         ]
      }
   ]
};
