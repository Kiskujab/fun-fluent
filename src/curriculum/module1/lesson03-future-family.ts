import type { Lesson } from '../../types';

export const lesson03: Lesson = {
  id: 'm1l3',
  title: 'The Future Family',
  subtitle: 'will, going to & the future perfect crew',
  minutes: 40,
  goals: [
    'Pick the right future: will, going to or present continuous',
    'Use present tenses after when / until / as soon as',
    'Command the future continuous & future perfect like a C1 speaker',
    'Sound natural with shall, be about to and be due to',
  ],
  cards: [
    {
      title: 'will — the moment of decision',
      body: `\`will\` is the future you create **on the spot**:

- **Spontaneous decisions:** *The phone's ringing — I**'ll get** it!*
- **Offers & promises:** *I**'ll carry** that. · I **won't tell** anyone.*
- **Predictions from opinion:** *I think Hungary **will win**.*

The classic mistake is using *will* for things you've already planned. If the decision is old news, *will* is the wrong tool — as you're about to see.`,
      miniCheck: {
        id: 'm1l3-c1',
        type: 'mcq',
        question: "It's freezing in here! — You're right, I ___ the window.",
        options: ['will close', 'am going to close'],
        correct: 0,
        explanation: 'The decision happens *right now*, mid-conversation → **will**.',
      },
    },
    {
      title: 'going to — the plan & the evidence',
      body: `\`be going to\` covers two jobs:

**1. Intentions decided earlier:**

> I**'m going to train** for a marathon this year. (decided last week, not right now)

**2. Predictions with visible evidence:**

> Look at those clouds — it**'s going to rain**.
> Slow down! We**'re going to crash**!

Compare: *I think it'll rain tomorrow* (just my opinion) vs *It's going to rain* (I can literally see the clouds).`,
      miniCheck: {
        id: 'm1l3-c2',
        type: 'mcq',
        question: 'Look at that toddler with the ketchup bottle… it ___ everywhere.',
        options: ['is going to go', 'will go'],
        correct: 0,
        explanation: 'Prediction based on what you can *see right now* → **going to**.',
      },
    },
    {
      title: 'Arrangements & timetables',
      body: `**Present continuous** = fixed arrangements — things that would survive the "diary test" (a time and people involved):

> We**'re having** a barbecue on Saturday. · She**'s seeing** the dentist at 3.

**Present simple** = timetables and schedules set by institutions:

> The 14:05 to Leeds **leaves** from platform 9. · The final **starts** at 8 sharp.

For plans, *going to* and present continuous often overlap — the continuous just sounds a touch more "booked in".`,
      miniCheck: {
        id: 'm1l3-c3',
        type: 'mcq',
        question: 'The museum ___ at 17:00 on Sundays, so we should hurry.',
        options: ['closes', 'is closing'],
        correct: 0,
        explanation: 'An official timetable → present simple.',
      },
    },
    {
      title: 'Time cops: no will after when!',
      body: `In future **time clauses** — after \`when\` \`until\` \`before\` \`after\` \`as soon as\` \`by the time\` — English uses the **present tense**, even though the meaning is future:

> I'll call you **as soon as the plane lands**. — not ~~as soon as the plane will land~~
> We can't leave **until the babysitter arrives**.

Same rule after \`if\`:

> **If it rains** tomorrow, we'll move the party inside.

Think of these words as strict border guards: the future (*will*) simply isn't allowed through.`,
      miniCheck: {
        id: 'm1l3-c4',
        type: 'error-hunt',
        sentence: "When I will get home, I'll make us dinner.",
        wrongIndex: 2,
        correction: '– (When I get)',
        explanation: 'After `when` in a time clause: present tense, no will → **When I get home…**',
      },
    },
    {
      title: 'Future continuous — the future in progress',
      body: `\`will be + -ing\` = an action that will be **in progress** at a future moment:

> This time tomorrow, I**'ll be lying** on a beach in Crete. 🏖️
> Don't call at 8 — we**'ll be having** dinner.

It also makes questions extra polite, asking about plans *without* pushing:

> **Will you be using** the car tonight? (just checking — no pressure)

Compare: *Will you use the car?* can sound like a request; *Will you be using…?* is pure curiosity.`,
      miniCheck: {
        id: 'm1l3-c5',
        type: 'mcq',
        question: 'This time next week, I ___ through Patagonia.',
        options: ['will be hiking', 'will hike'],
        correct: 0,
        explanation: 'In progress at a future moment (`this time next week`) → future continuous.',
      },
    },
    {
      title: 'Future perfect — done by then',
      body: `\`will have + past participle\` looks **back from the future**: something will be complete *by* a certain point.

> By 2035, scientists **will have found** a cure.
> By the time you read this, I**'ll have left** the country. 🕵️

Its signature word is \`by\`: *by Friday, by then, by the time…*

The continuous version measures **duration at that future point** — \`will have been + -ing\`:

> Next month, they**'ll have been living** here **for 20 years**.`,
      miniCheck: {
        id: 'm1l3-c6',
        type: 'gap',
        before: 'By June, she',
        after: 'her law degree.',
        hint: 'finish',
        accepted: ['will have finished', "'ll have finished"],
        explanation: '`By June` = complete before that point → future perfect: **will have finished**.',
      },
    },
    {
      title: 'The supporting cast',
      body: `Three more future flavours that make you sound properly fluent:

- \`shall\` — offers & suggestions with I/we: ***Shall I** carry that? · **Shall we** dance?*
- \`be about to\` — the very next moment: *Careful — the kettle's **about to boil**.*
- \`be due to\` — scheduled officially: *The flight **is due to land** at 22:40.*`,
    },
    {
      title: 'The Future Family — the map',
      body: `Seven ways to talk about tomorrow:

- **will** — decided now, promises, opinions: *I'll help.*
- **going to** — decided earlier, visible evidence: *I'm going to train.*
- **present continuous** — booked arrangements: *We're having friends round.*
- **present simple** — timetables: *The bus leaves at 6.*
- **future continuous** — in progress then: *I'll be flying at noon.*
- **future perfect (+ continuous)** — done by then: *I'll have finished by five.*
- **about to / due to / shall** — the finishing touches.

Time to test-drive the time machine. 🚀`,
    },
  ],
  sets: [
    {
      title: 'Decisions, Decisions',
      icon: '🎲',
      exercises: [
        {
          id: 'm1l3-a1',
          type: 'mcq',
          question: 'We ___ a barbecue on Saturday — want to come?',
          options: ['are having', 'will have'],
          correct: 0,
          explanation: 'A fixed arrangement (day set, people invited) → present continuous.',
        },
        {
          id: 'm1l3-a2',
          type: 'gap',
          before: "Don't worry, I",
          after: 'anyone your secret. Promise!',
          hint: 'not / tell',
          accepted: ["won't tell", 'will not tell'],
          explanation: 'A promise → **will**: *I won\'t tell anyone.*',
        },
        {
          id: 'm1l3-a3',
          type: 'mcq',
          question: "I've made up my mind: I ___ for the marathon this year.",
          options: ['am going to train', 'will train'],
          correct: 0,
          explanation: 'A decision made *before* speaking → **going to**.',
        },
        {
          id: 'm1l3-a4',
          type: 'mcq',
          question: 'The 14:05 to Leeds ___ from platform 9.',
          options: ['leaves', 'is leaving'],
          correct: 0,
          explanation: 'Railway timetable → present simple.',
        },
        {
          id: 'm1l3-a5',
          type: 'mcq',
          question: 'I bet the underdogs ___ the whole tournament.',
          options: ['will win', 'win'],
          correct: 0,
          explanation: 'A prediction based on opinion (`I bet`) → **will**.',
        },
        {
          id: 'm1l3-a6',
          type: 'error-hunt',
          sentence: 'She will finishes the report by five, trust me.',
          wrongIndex: 2,
          correction: 'finish',
          explanation: 'After `will`, always the base verb: **will finish**.',
        },
        {
          id: 'm1l3-a7',
          type: 'order',
          correct: 'What are you doing tonight after work?',
          distractors: ['will', 'do'],
          explanation: 'Asking about arrangements → present continuous: *What are you doing…?*',
        },
        {
          id: 'm1l3-a8',
          type: 'mcq',
          question: 'My sister ___ a baby in June!',
          options: ['is having', 'will have'],
          correct: 0,
          explanation: 'A fixed (and very exciting) arrangement on the calendar → present continuous.',
        },
        {
          id: 'm1l3-a9',
          type: 'mcq',
          question: "That shelf you've overloaded ___ any second now.",
          options: ['is going to collapse', 'collapses'],
          correct: 0,
          explanation: 'Visible evidence (the sagging shelf!) → **going to**.',
        },
        {
          id: 'm1l3-a10',
          type: 'match',
          prompt: 'Match each sentence to its future flavour',
          pairs: [
            ["I'll help you with that.", 'spontaneous offer 🤝'],
            ["I'm going to learn Welsh.", 'plan decided earlier 📝'],
            ["I'm seeing the dentist at 3.", 'fixed arrangement 📅'],
            ["It's going to snow — look!", 'prediction with evidence 🌨️'],
            ['The bus leaves at 6.', 'timetable 🚌'],
          ],
          explanation: 'Five futures, five different jobs — that\'s the whole secret.',
        },
      ],
    },
    {
      title: 'Time Cops',
      icon: '🚓',
      exercises: [
        {
          id: 'm1l3-b1',
          type: 'mcq',
          question: "I'll call you as soon as the plane ___.",
          options: ['lands', 'will land'],
          correct: 0,
          explanation: 'Time clause after `as soon as` → present simple, even for the future.',
        },
        {
          id: 'm1l3-b2',
          type: 'gap',
          before: "We can't leave until the babysitter",
          after: '.',
          hint: 'arrive',
          accepted: ['arrives'],
          explanation: '`until` opens a time clause → present simple: **arrives**.',
        },
        {
          id: 'm1l3-b3',
          type: 'mcq',
          question: 'Text me before you ___ the motorway.',
          options: ['join', 'will join'],
          correct: 0,
          explanation: '`before` = time clause → present tense.',
        },
        {
          id: 'm1l3-b4',
          type: 'mcq',
          question: "If it ___ tomorrow, we'll move the party inside.",
          options: ['rains', 'will rain'],
          correct: 0,
          explanation: 'Same border-guard rule after `if` → present simple.',
        },
        {
          id: 'm1l3-b5',
          type: 'order',
          correct: "I'll wait here until she comes back.",
          distractors: ['will come', 'came'],
          explanation: 'Main clause with *will* + time clause with present: *…until she comes back.*',
        },
        {
          id: 'm1l3-b6',
          type: 'mcq',
          question: "After the guests ___, we'll collapse on the sofa.",
          options: ['leave', 'will leave'],
          correct: 0,
          explanation: '`after` opens a time clause → present simple.',
        },
        {
          id: 'm1l3-b7',
          type: 'error-hunt',
          sentence: "I'll email you after I will land in Oslo.",
          wrongIndex: 5,
          correction: '– (after I land)',
          explanation: 'One *will* per sentence is plenty: time clauses take the present → **after I land**.',
        },
        {
          id: 'm1l3-b8',
          type: 'transform',
          source: "First I'll finish the report. Then I'll go home.",
          keyword: 'as soon as',
          accepted: [
            'I will go home as soon as I finish the report',
            'As soon as I finish the report I will go home',
            'I will go home as soon as I have finished the report',
            'As soon as I have finished the report I will go home',
          ],
          explanation: 'Join them with a time clause: **I\'ll go home as soon as I finish the report.** Present tense after *as soon as*.',
        },
      ],
    },
    {
      title: 'The Year 2050',
      icon: '🚀',
      exercises: [
        {
          id: 'm1l3-d1',
          type: 'mcq',
          question: 'This time tomorrow, I ___ on a beach in Crete.',
          options: ['will be lying', 'will lie'],
          correct: 0,
          explanation: 'In progress at a future moment → future continuous.',
        },
        {
          id: 'm1l3-d2',
          type: 'gap',
          before: "Don't call at 8 — we",
          after: 'dinner then.',
          hint: 'have',
          accepted: ['will be having', "'ll be having"],
          explanation: 'Mid-dinner at 8 → future continuous: **will be having**.',
        },
        {
          id: 'm1l3-d3',
          type: 'mcq',
          question: "___ the car tonight? Mine's at the garage.",
          options: ['Will you be using', 'Will you use'],
          correct: 0,
          explanation: 'The polite, no-pressure question about plans → future continuous.',
        },
        {
          id: 'm1l3-d4',
          type: 'gap',
          before: 'By the time you read this, I',
          after: 'the country.',
          hint: 'leave',
          accepted: ['will have left', "'ll have left"],
          explanation: 'Complete before a future point → future perfect: **will have left**.',
        },
        {
          id: 'm1l3-d5',
          type: 'mcq',
          question: 'Next month, they ___ here for 20 years.',
          options: ['will have been living', 'are living'],
          correct: 0,
          explanation: 'Duration measured at a future point → future perfect continuous.',
        },
        {
          id: 'm1l3-d6',
          type: 'mcq',
          question: "The flight ___ land at 22:40, but there's a delay.",
          options: ['is due to', 'will'],
          correct: 0,
          explanation: 'Official schedule → **is due to land**. (*will land at 22:40* + the delay would contradict itself!)',
        },
        {
          id: 'm1l3-d7',
          type: 'mcq',
          question: "Careful — the kettle is ___ boil over.",
          options: ['about to', 'going'],
          correct: 0,
          explanation: 'The very next moment → **be about to**. (*going* would need *going to*.)',
        },
        {
          id: 'm1l3-d8',
          type: 'order',
          correct: 'Will you be coming to the office tomorrow?',
          distractors: ['do', 'came'],
          explanation: 'Polite plan-check → future continuous question.',
        },
        {
          id: 'm1l3-d9',
          type: 'mcq',
          question: 'By the end of the season, he ___ thirty goals.',
          options: ['will have scored', 'will score'],
          correct: 0,
          explanation: '`By the end of…` → looking back from a future point → future perfect.',
        },
        {
          id: 'm1l3-d10',
          type: 'error-hunt',
          sentence: 'By Friday I will finish all five essays, easily.',
          wrongIndex: 3,
          correction: 'will have finished',
          explanation: '`By Friday` wants completion *before* the deadline → future perfect: **will have finished**.',
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm1l3-e1',
          type: 'speed',
          secondsPerItem: 8,
          items: [
            { question: "The phone's ringing! I ___ it.", options: ['will get', 'am going to get'], correct: 0 },
            { question: 'We ___ friends round on Friday.', options: ['are having', 'will have'], correct: 0 },
            { question: 'Look out! We ___ crash!', options: ['are going to', 'will'], correct: 0 },
            { question: "I'll text you when I ___ there.", options: ['get', 'will get'], correct: 0 },
            { question: 'This time next week I ___ skiing.', options: ['will be', 'will'], correct: 0 },
            { question: 'By June she ___ her degree.', options: ['will have finished', 'finishes'], correct: 0 },
            { question: 'The match ___ at 8 sharp.', options: ['starts', 'will be starting'], correct: 0 },
            { question: '___ I carry that for you?', options: ['Shall', 'Will'], correct: 0 },
            { question: 'Wait until the light ___ green.', options: ['turns', 'will turn'], correct: 0 },
            { question: 'They ___ married in a castle next spring.', options: ['are getting', 'get'], correct: 0 },
          ],
          explanation: 'Instinct check: will = now-decisions · going to = plans & evidence · continuous = arrangements · present after when/until/if.',
        },
      ],
    },
  ],
  boss: {
    passPct: 80,
    exercises: [
      {
        id: 'm1l3-boss1',
        type: 'mcq',
        question: "A: The printer's jammed again. — B: Ugh, I ___ a look.",
        options: ['will have', 'am going to have'],
        correct: 0,
        explanation: 'Decision made on the spot → **will**.',
      },
      {
        id: 'm1l3-boss2',
        type: 'mcq',
        question: "I can't come to book club — I ___ my cousin from the airport that evening.",
        options: ['am collecting', 'will collect'],
        correct: 0,
        explanation: 'A fixed arrangement already in the diary → present continuous.',
      },
      {
        id: 'm1l3-boss3',
        type: 'gap',
        before: 'Slow down or we',
        after: '!',
        hint: 'crash',
        accepted: ['are going to crash', "'re going to crash", 'will crash'],
        explanation: 'Danger you can see coming → **are going to crash**.',
      },
      {
        id: 'm1l3-boss4',
        type: 'mcq',
        question: "I'll call you as soon as I ___ any news.",
        options: ['hear', 'will hear'],
        correct: 0,
        explanation: 'Time clause → present tense: **as soon as I hear**.',
      },
      {
        id: 'm1l3-boss5',
        type: 'mcq',
        question: 'By the end of the season, she ___ every record in the book.',
        options: ['will have broken', 'will break'],
        correct: 0,
        explanation: '`By the end of…` → future perfect.',
      },
      {
        id: 'm1l3-boss6',
        type: 'mcq',
        question: "Don't ring at nine — the kids ___ their bath then.",
        options: ['will be having', 'will have'],
        correct: 0,
        explanation: 'In progress at that future moment → future continuous.',
      },
      {
        id: 'm1l3-boss7',
        type: 'mcq',
        question: "The coach ___ at 7:15, so don't be late.",
        options: ['departs', 'will be departing'],
        correct: 0,
        explanation: 'Timetable → present simple.',
      },
      {
        id: 'm1l3-boss8',
        type: 'gap',
        before: 'I promise I',
        after: 'your cat as if she were royalty.',
        hint: 'look after',
        accepted: ['will look after', "'ll look after"],
        explanation: 'A promise → **will look after**.',
      },
      {
        id: 'm1l3-boss9',
        type: 'order',
        correct: 'She is going to study marine biology in Split.',
        distractors: ['will', 'studies'],
        explanation: 'An intention decided earlier → **is going to study**.',
      },
      {
        id: 'm1l3-boss10',
        type: 'mcq',
        question: '___ we split the bill, or is it your treat?',
        options: ['Shall', 'Will'],
        correct: 0,
        explanation: 'Suggestion with *we* → **Shall we…?**',
      },
      {
        id: 'm1l3-boss11',
        type: 'transform',
        source: 'Our 25th wedding anniversary is in May.',
        keyword: 'been',
        before: 'By May, we',
        accepted: [
          'will have been married for 25 years',
          "'ll have been married for 25 years",
          'will have been married for twenty-five years',
        ],
        explanation: 'Duration up to a future point → future perfect: **we will have been married for 25 years**.',
      },
    ],
  },
};
