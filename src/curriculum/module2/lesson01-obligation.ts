import type { Lesson } from '../../types';

export const m2l1: Lesson = {
  id: 'm2l1',
  title: 'Rules of the Game',
  subtitle: 'must, have to, should — obligation & advice',
  minutes: 35,
  goals: [
    'Choose between must and have to like a native',
    "Never confuse mustn't (banned!) with don't have to (optional)",
    "Give advice with should, ought to and had better",
    'Handle obligation in the past and future',
  ],
  cards: [
    {
      title: 'must vs have to',
      body: `Both mean *it's necessary* — the difference is **where the pressure comes from**.

**must** = the speaker's own authority or feelings:

> You **must** try this cake — I insist!
> I **must** stop doomscrolling at 2 a.m.

**have to** = external rules — the company, the law, the timetable:

> I **have to** wear a badge at work. (company rule)
> She **has to** renew her visa by June.

And a grammar quirk: *must* has no past or future forms, so **have to** covers those shifts — as you'll see later in this lesson.`,
      miniCheck: {
        id: 'm2l1-c1',
        type: 'mcq',
        question: '___ wear a suit at your office, or is it casual?',
        options: ['Do you have to', 'Must you'],
        correct: 0,
        explanation: 'Questions about external rules almost always use **have to**. (*Must you…?* exists, but it usually sounds like a complaint!)',
      },
    },
    {
      title: "mustn't ≠ don't have to",
      body: `The most dangerous trap in modality. The positives are twins, but the negatives are total strangers:

**mustn't** = it is **forbidden**. Don't do it. 🚫

> You **mustn't** tell anyone. It's a secret.

**don't have to** = it is **optional**. No need — but you can. 🤷

> You **don't have to** tip here, but people often round up.

Mixing these up changes the law: *You mustn't pay* = paying is illegal!`,
      miniCheck: {
        id: 'm2l1-c2',
        type: 'mcq',
        question: 'Museum rule: visitors ___ touch the sculptures.',
        options: ["mustn't", "don't have to"],
        correct: 0,
        explanation: "It's forbidden → **mustn't**. (*Don't have to touch* would mean touching is merely optional… chaos.)",
      },
    },
    {
      title: 'should, ought to & had better',
      body: `Three flavours of advice, from mild to menacing:

**should / ought to** — a good idea:

> You **should** see a dentist about that tooth. · You **ought to** call her back.

**had better ('d better)** — strong advice with a consequence looming. Always followed by the **base verb**, negative is **'d better not**:

> You**'d better** run — the bus leaves in two minutes.
> You**'d better not** miss that flight. The next one's on Friday.`,
      tip: "`had better` looks past but means NOW. And there's no *to*: ~~you'd better to go~~.",
      miniCheck: {
        id: 'm2l1-c3',
        type: 'gap',
        before: "It's icy out there — you",
        after: 'slowly.',
        hint: 'had better / drive',
        accepted: ["'d better drive", 'had better drive'],
        explanation: "Strong advice with a consequence lurking → **'d better drive**, base verb, no *to*.",
      },
    },
    {
      title: 'need & permission',
      body: `**need to** works like *have to*:

> I **need to** charge my phone before we leave.

**needn't** = *don't have to* — no necessity:

> You **needn't** print it — a PDF is fine.

For **permission**, use \`can\`, \`be allowed to\` (and formal \`may\`):

> You **can** park here after 6 p.m.
> Hand luggage only? You**'re not allowed to** take that suitcase on board.`,
      miniCheck: {
        id: 'm2l1-c4',
        type: 'mcq',
        question: 'You ___ pay for kids under six — they go free.',
        options: ["needn't", "mustn't"],
        correct: 0,
        explanation: "No necessity → **needn't** (= don't have to). *Mustn't pay* would make paying a crime!",
      },
    },
    {
      title: 'Duty across time',
      body: `*must* refuses to travel in time — **have to** does the time-travelling for it:

- **Past:** *When the road closed, everyone **had to** turn back.*
- **Future:** *Next year, we**'ll have to** apply online.*
- **Present perfect:** *She**'s had to** work overtime three times this week.*

Past permission uses **was/were allowed to**:

> As kids, we **were allowed to** stay out until the streetlights came on.`,
      miniCheck: {
        id: 'm2l1-c5',
        type: 'gap',
        before: 'I',
        after: 'a uniform at my old school — a purple one. Purple!',
        hint: 'wear (past obligation)',
        accepted: ['had to wear'],
        explanation: 'Past obligation → **had to wear**. *Must* has no past form.',
      },
    },
    {
      title: 'be supposed to',
      body: `**be supposed to** = what's *expected* or *arranged* — often with a hint that reality disagrees:

> You**'re supposed to** switch your phone off in here, you know. 👀
> It **was supposed to** rain today — look at that sunshine!
> We**'re supposed to** start at nine… nobody ever does.

It's the perfect tool for rules people break and plans that wobble.`,
      miniCheck: {
        id: 'm2l1-c6',
        type: 'mcq',
        question: 'We ___ start at nine, but nobody ever turns up before ten past.',
        options: ['are supposed to', 'must'],
        correct: 0,
        explanation: 'An official expectation that reality ignores → **are supposed to**.',
      },
    },
    {
      title: 'Rules of the Game — the map',
      body: `Your obligation toolkit:

- **must** — speaker's authority: *You must see this film!*
- **have to** — external rules (+ all past/future forms): *I have to / had to / will have to…*
- **mustn't** — forbidden 🚫 · **don't have to / needn't** — optional 🤷
- **should / ought to** — advice · **'d better (not)** — advice with teeth
- **be supposed to** — expected… in theory
- **can / be allowed to** — permission

The Gatekeeper is very strict about rules. Naturally. ⚔️`,
    },
  ],
  sets: [
    {
      title: 'Law & Order',
      icon: '⚖️',
      exercises: [
        {
          id: 'm2l1-a1',
          type: 'mcq',
          question: 'Passengers ___ keep their seatbelts fastened during take-off.',
          options: ['must', 'should'],
          correct: 0,
          explanation: 'An airline rule, not a suggestion → **must**. (*should* would make it optional advice.)',
        },
        {
          id: 'm2l1-a2',
          type: 'mcq',
          question: "You ___ pay in cash — they take cards too.",
          options: ["don't have to", "mustn't"],
          correct: 0,
          explanation: "Cash is optional → **don't have to**. *Mustn't pay in cash* would ban banknotes!",
        },
        {
          id: 'm2l1-a3',
          type: 'mcq',
          question: 'You ___ tell Zoe about the surprise party. Not a word!',
          options: ["mustn't", "don't have to"],
          correct: 0,
          explanation: "Forbidden → **mustn't**. The surprise depends on it.",
        },
        {
          id: 'm2l1-a4',
          type: 'gap',
          before: 'Do we really',
          after: 'tickets in advance, or can we buy them at the door?',
          hint: 'have to / book',
          accepted: ['have to book'],
          explanation: 'Question about an external requirement → **Do we have to book…?**',
        },
        {
          id: 'm2l1-a5',
          type: 'error-hunt',
          sentence: 'Students must to wear a uniform at this school.',
          wrongIndex: 2,
          correction: '– (must wear)',
          explanation: 'Modal verbs take the bare infinitive: **must wear**, never ~~must to wear~~.',
        },
        {
          id: 'm2l1-a6',
          type: 'sort',
          prompt: 'Banned or optional?',
          buckets: ["Banned 🚫 (mustn't)", "Optional 🤷 (don't have to)"],
          items: [
            { text: 'feed the tigers', bucket: 0 },
            { text: 'tip the waiter', bucket: 1 },
            { text: 'use your phone during take-off', bucket: 0 },
            { text: 'wear a tie on Fridays', bucket: 1 },
            { text: 'park on the double yellow lines', bucket: 0 },
            { text: 'come to the optional meeting', bucket: 1 },
          ],
          explanation: "mustn't = the rulebook says NO · don't have to = the rulebook doesn't care.",
        },
        {
          id: 'm2l1-a7',
          type: 'mcq',
          question: "Everyone ___ a helmet on site — no exceptions, boss's orders.",
          options: ['has to wear', 'should wear'],
          correct: 0,
          explanation: 'A hard rule from outside → **has to wear**. *Should* is just advice.',
        },
        {
          id: 'm2l1-a8',
          type: 'order',
          correct: "You mustn't open the oven door yet.",
          distractors: ["don't", 'to'],
          explanation: "Prohibition → **mustn't** + bare infinitive. The soufflé thanks you.",
        },
        {
          id: 'm2l1-a9',
          type: 'mcq',
          question: 'I ___ work every other weekend — my contract says so, sadly.',
          options: ['have to', 'ought to'],
          correct: 0,
          explanation: 'External obligation (the contract) → **have to**.',
        },
      ],
    },
    {
      title: 'Good Advice',
      icon: '💡',
      exercises: [
        {
          id: 'm2l1-b1',
          type: 'mcq',
          question: 'You ___ see a doctor about that cough — it\'s been three weeks.',
          options: ['should', "mustn't"],
          correct: 0,
          explanation: 'Friendly advice → **should**.',
        },
        {
          id: 'm2l1-b2',
          type: 'gap',
          before: 'You',
          after: 'take an umbrella — those clouds mean business.',
          hint: 'had better',
          accepted: ["'d better", 'had better'],
          explanation: "Strong advice + looming consequence → **'d better**.",
        },
        {
          id: 'm2l1-b3',
          type: 'mcq',
          question: "We'd better ___ now, or we'll hit rush hour.",
          options: ['leave', 'to leave'],
          correct: 0,
          explanation: "`'d better` + **base verb** — no *to*.",
        },
        {
          id: 'm2l1-b4',
          type: 'mcq',
          question: "You'd better not ___ her cooking. Just… don't.",
          options: ['criticise', 'to criticise'],
          correct: 0,
          explanation: "Negative: **'d better not + base verb**.",
        },
        {
          id: 'm2l1-b5',
          type: 'error-hunt',
          sentence: 'You ought wear sunscreen at this altitude.',
          wrongIndex: 1,
          correction: 'ought to',
          explanation: '`ought` is the odd one out — it DOES take *to*: **ought to wear**.',
        },
        {
          id: 'm2l1-b6',
          type: 'mcq',
          question: "I ___ be revising right now, but this series won't watch itself.",
          options: ['am supposed to', 'had better'],
          correct: 0,
          explanation: 'What\'s expected of me (and being cheerfully ignored) → **am supposed to**.',
        },
        {
          id: 'm2l1-b7',
          type: 'mcq',
          question: "The train ___ arrive at 6:10, but it's already 6:40.",
          options: ['was supposed to', 'had better'],
          correct: 0,
          explanation: 'A scheduled expectation that failed → **was supposed to**.',
        },
        {
          id: 'm2l1-b8',
          type: 'transform',
          source: 'It would be a good idea for you to apologise to her.',
          keyword: 'should',
          accepted: ['You should apologise to her', 'You should apologise'],
          explanation: 'Advice → **You should apologise to her.**',
        },
        {
          id: 'm2l1-b9',
          type: 'mcq',
          question: '___ I bring anything to the dinner? — Just yourself!',
          options: ['Should', "Mustn't"],
          correct: 0,
          explanation: 'Asking for advice → **Should I…?**',
        },
      ],
    },
    {
      title: 'Timeline of Duty',
      icon: '🕰️',
      exercises: [
        {
          id: 'm2l1-d1',
          type: 'mcq',
          question: 'When our flight was cancelled, we ___ spend the night at the airport.',
          options: ['had to', 'must'],
          correct: 0,
          explanation: '*must* has no past form → **had to**.',
        },
        {
          id: 'm2l1-d2',
          type: 'gap',
          before: 'From next year, all shops',
          after: 'single-use plastic. New law.',
          hint: 'will / have to / ban',
          accepted: ['will have to ban', "'ll have to ban"],
          explanation: 'Future obligation → **will have to ban**. *Must* can\'t travel to the future either.',
        },
        {
          id: 'm2l1-d3',
          type: 'mcq',
          question: 'As kids, we ___ stay out until the streetlights came on — best summers ever.',
          options: ['were allowed to', 'had to'],
          correct: 0,
          explanation: 'Past permission (a happy freedom, not a duty) → **were allowed to**.',
        },
        {
          id: 'm2l1-d4',
          type: 'mcq',
          question: "You ___ book — there are always free tables on Mondays.",
          options: ["needn't", "mustn't"],
          correct: 0,
          explanation: "No necessity → **needn't** (= don't have to).",
        },
        {
          id: 'm2l1-d5',
          type: 'error-hunt',
          sentence: 'Yesterday I must finish three reports before lunch.',
          wrongIndex: 2,
          correction: 'had to',
          explanation: 'Past obligation → **had to finish**. *Must* stays in the present.',
        },
        {
          id: 'm2l1-d6',
          type: 'mcq',
          question: "She's ___ work overtime three times this week.",
          options: ['had to', 'must to'],
          correct: 0,
          explanation: "Present perfect: *she's had to* = she **has had to** — have to happily takes any tense.",
        },
        {
          id: 'm2l1-d7',
          type: 'gap',
          before: 'Visitors',
          after: 'in at reception before entering the lab.',
          hint: 'must / sign',
          accepted: ['must sign'],
          explanation: 'Present rule from authority → **must sign**.',
        },
        {
          id: 'm2l1-d8',
          type: 'order',
          correct: 'Will we have to show our passports at the border?',
          distractors: ['must', 'do'],
          explanation: 'Future obligation question → **Will we have to…?**',
        },
        {
          id: 'm2l1-d9',
          type: 'transform',
          source: "It wasn't necessary for us to queue — we had e-tickets.",
          keyword: 'have',
          accepted: ["We didn't have to queue", 'We did not have to queue'],
          explanation: "Past non-necessity → **didn't have to queue**.",
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm2l1-e1',
          type: 'speed',
          secondsPerItem: 8,
          items: [
            { question: 'You ___ be 18 to vote.', options: ['have to', 'should'], correct: 0 },
            { question: 'You ___ tell anyone. Promise?', options: ["mustn't", "don't have to"], correct: 0 },
            { question: 'Entrance is free — you ___ pay.', options: ["don't have to", "mustn't"], correct: 0 },
            { question: 'I ___ walk to school when I was six.', options: ['had to', 'must'], correct: 0 },
            { question: "You'd better ___ late again.", options: ['not be', "don't be"], correct: 0 },
            { question: 'We ___ start at 9, but we never do.', options: ['are supposed to', 'must'], correct: 0 },
            { question: '___ I have to sign anything?', options: ['Do', 'Must'], correct: 0 },
            { question: "You ___ whisper — the baby's awake now.", options: ["needn't", "mustn't"], correct: 0 },
            { question: "Everyone ___ wear a seatbelt. It's the law.", options: ['must', 'ought'], correct: 0 },
            { question: 'You ___ see a doctor about that cough.', options: ['should', "don't have to"], correct: 0 },
          ],
          explanation: "Instinct check: mustn't = banned · don't have to / needn't = optional · had to = past duty · 'd better = advice with teeth.",
        },
      ],
    },
  ],
  boss: {
    passPct: 80,
    exercises: [
      {
        id: 'm2l1-boss1',
        type: 'mcq',
        question: 'You ___ smoke anywhere in the hospital grounds.',
        options: ["mustn't", "don't have to"],
        correct: 0,
        explanation: 'Forbidden → **mustn\'t**.',
      },
      {
        id: 'm2l1-boss2',
        type: 'mcq',
        question: "It's a buffet, so you ___ order anything — just grab a plate.",
        options: ["don't have to", "mustn't"],
        correct: 0,
        explanation: "Optional → **don't have to**.",
      },
      {
        id: 'm2l1-boss3',
        type: 'gap',
        before: 'My visa expired, so I',
        after: 'the country within a week.',
        hint: 'leave (past obligation)',
        accepted: ['had to leave'],
        explanation: 'Past obligation → **had to leave**.',
      },
      {
        id: 'm2l1-boss4',
        type: 'mcq',
        question: "You'd better ___ your keys this time.",
        options: ['not forget', "don't forget"],
        correct: 0,
        explanation: "'d better + **not** + base verb.",
      },
      {
        id: 'm2l1-boss5',
        type: 'error-hunt',
        sentence: 'All passengers must to switch off large devices now.',
        wrongIndex: 3,
        correction: '– (must switch)',
        explanation: 'Modals take the bare infinitive: **must switch**.',
      },
      {
        id: 'm2l1-boss6',
        type: 'mcq',
        question: "The bus ___ come every ten minutes, but it's been half an hour.",
        options: ['is supposed to', 'had better'],
        correct: 0,
        explanation: 'Official expectation vs sad reality → **is supposed to**.',
      },
      {
        id: 'm2l1-boss7',
        type: 'mcq',
        question: 'You ___ shout — I can hear you perfectly well.',
        options: ["needn't", "mustn't"],
        correct: 0,
        explanation: "No need (though not forbidden!) → **needn't**.",
      },
      {
        id: 'm2l1-boss8',
        type: 'order',
        correct: 'Do I have to wear a tie to the interview?',
        distractors: ['must', 'should'],
        explanation: 'Question about an external rule → **Do I have to…?**',
      },
      {
        id: 'm2l1-boss9',
        type: 'mcq',
        question: 'Back then, every pupil ___ learn poems by heart.',
        options: ['had to', 'must'],
        correct: 0,
        explanation: 'Past obligation → **had to**.',
      },
      {
        id: 'm2l1-boss10',
        type: 'transform',
        source: 'Wearing a helmet is compulsory for all cyclists here.',
        keyword: 'must',
        accepted: [
          'All cyclists must wear a helmet here',
          'All cyclists must wear a helmet',
          'Cyclists must wear a helmet here',
        ],
        explanation: 'Compulsory → **All cyclists must wear a helmet here.**',
      },
      {
        id: 'm2l1-boss11',
        type: 'mcq',
        question: "I ___ finish this tonight — the deadline is 9 a.m. and it's non-negotiable.",
        options: ['have to', 'should'],
        correct: 0,
        explanation: 'A hard external deadline → **have to**.',
      },
    ],
  },
};
