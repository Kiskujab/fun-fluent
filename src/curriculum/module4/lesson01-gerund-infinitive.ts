import type { Lesson } from '../../types';

export const m4l1: Lesson = {
  id: 'm4l1',
  title: '-ing or to?',
  subtitle: 'gerund vs infinitive essentials',
  minutes: 35,
  goals: [
    'Know Team -ing and Team to by heart',
    'Handle verb + object + infinitive (and the make/let rebellion)',
    'Survive look forward TO DOING',
    'Master the meaning-changers: remember, stop, try, forget',
  ],
  cards: [
    {
      title: 'Gerunds: verbs wearing a noun costume',
      body: `Add **-ing** and a verb can do everything a noun does:

**As a subject:**

> **Getting up** early has genuinely changed my life.

**After prepositions** — always, no exceptions:

> She's brilliant **at spotting** problems. · Think **before answering**.

⚠️ The famous trap: in **look forward to**, that *to* is a preposition:

> I look forward **to seeing** you. — not ~~to see~~`,
      miniCheck: {
        id: 'm4l1-c1',
        type: 'gap',
        before: "I'm really looking forward to",
        after: 'you in June.',
        hint: 'see',
        accepted: ['seeing'],
        explanation: 'The *to* in *look forward to* is a preposition → **seeing**.',
      },
    },
    {
      title: 'Team -ing',
      body: `These verbs demand a gerund after them — no negotiation:

\`enjoy\` \`avoid\` \`mind\` \`finish\` \`suggest\` \`keep\` \`practise\` \`miss\` \`imagine\` \`admit\` \`deny\` \`can't stand\` \`fancy\` \`give up\`

> Would you **mind opening** the window?
> He **denied taking** the last slice. (There were crumbs, Dave.)
> **Keep going** — you're nearly there!`,
      miniCheck: {
        id: 'm4l1-c2',
        type: 'mcq',
        question: 'Would you mind ___ the window? It\'s tropical in here.',
        options: ['opening', 'to open'],
        correct: 0,
        explanation: '*mind* is Team -ing → **mind opening**.',
      },
    },
    {
      title: 'Team to',
      body: `And these insist on the **to-infinitive**:

\`want\` \`decide\` \`hope\` \`promise\` \`refuse\` \`manage\` \`afford\` \`offer\` \`agree\` \`learn\` \`plan\` \`seem\` \`expect\` \`threaten\`

> We **decided to take** the coast road.
> She **refused to accept** the terms.
> He **seems to know** everyone in this village.`,
      miniCheck: {
        id: 'm4l1-c3',
        type: 'mcq',
        question: "We can't afford ___ out every week.",
        options: ['to eat', 'eating'],
        correct: 0,
        explanation: '*afford* is Team to → **afford to eat**.',
      },
    },
    {
      title: 'Verb + object + to — and the rebels',
      body: `Many verbs take a **person + to-infinitive**:

> The doctor **told me to eat** more greens.
> **Remind me to water** the plants. · She **persuaded us to stay**.

Two famous rebels drop the *to* — **make** and **let**:

> Mum **made us tidy** our rooms. — not ~~made us to tidy~~
> They **let the kids stay** up late.

(*help* can go either way: *help me carry / to carry*.)`,
      miniCheck: {
        id: 'm4l1-c4',
        type: 'mcq',
        question: 'My parents never let me ___ up late, even on my birthday.',
        options: ['stay', 'to stay'],
        correct: 0,
        explanation: '*let* + object + **base verb** — no *to*.',
      },
    },
    {
      title: 'like, love, hate — the flexible ones',
      body: `**like / love / hate / prefer** happily take either form with little change in meaning:

> I love **cooking** / love **to cook**.

But add **would** and the infinitive becomes compulsory:

> I**'d love to go** to Japan one day. — never ~~I'd love going~~
> **Would** you **prefer to sit** by the window?`,
      miniCheck: {
        id: 'm4l1-c5',
        type: 'mcq',
        question: "I'd love ___ to Japan one day.",
        options: ['to go', 'going'],
        correct: 0,
        explanation: '*would love/like/hate/prefer* + **to-infinitive**, always.',
      },
    },
    {
      title: 'The meaning-changers',
      body: `Five verbs change meaning with the form. This is where exams live:

- **remember/forget doing** = memory of the past: *I remember **locking** the door.*
- **remember/forget to do** = the task itself: *Don't forget **to lock** the door!*
- **stop doing** = quit: *I stopped **drinking** coffee.*
- **stop to do** = pause in order to: *We stopped **to get** petrol.*
- **try doing** = experiment: *Try **turning** it off and on.*
- **try to do** = attempt something hard: *I tried **to lift** it — no chance.*
- **regret doing** = past regret · **regret to say** = formal bad news`,
      miniCheck: {
        id: 'm4l1-c6',
        type: 'mcq',
        question: 'I stopped ___ coffee last year — no regrets, several headaches.',
        options: ['drinking', 'to drink'],
        correct: 0,
        explanation: 'Quit the habit → **stopped drinking**. (*stopped to drink* = pulled over for an espresso.)',
      },
    },
    {
      title: '-ing or to? — the map',
      body: `The pattern cheat-sheet:

- **Subject & after prepositions** → -ing (incl. *look forward TO doing*)
- **Team -ing:** enjoy, avoid, mind, finish, suggest, deny, keep…
- **Team to:** want, decide, promise, refuse, manage, afford, seem…
- **verb + person + to** — but **make/let + base**
- **would like/love/hate + to**
- **remember/stop/try/forget/regret** — meaning depends on the form

The Gatekeeper enjoys testing this and expects to win. Prove it wrong. 🧩`,
    },
  ],
  sets: [
    {
      title: 'Team -ing',
      icon: '🏊',
      exercises: [
        {
          id: 'm4l1-a1',
          type: 'mcq',
          question: '___ early has genuinely changed my life.',
          options: ['Getting up', 'Get up'],
          correct: 0,
          explanation: 'A verb as subject wears the -ing costume → **Getting up**.',
        },
        {
          id: 'm4l1-a2',
          type: 'mcq',
          question: 'He denied ___ the last slice, but there were crumbs on his shirt.',
          options: ['taking', 'to take'],
          correct: 0,
          explanation: '*deny* is Team -ing → **denied taking**.',
        },
        {
          id: 'm4l1-a3',
          type: 'gap',
          before: "She's brilliant at",
          after: 'problems before they explode.',
          hint: 'spot',
          accepted: ['spotting'],
          explanation: 'After a preposition (*at*) → gerund: **spotting**.',
        },
        {
          id: 'm4l1-a4',
          type: 'mcq',
          question: "I don't mind ___, honestly. I've got a podcast.",
          options: ['waiting', 'to wait'],
          correct: 0,
          explanation: '*mind* + -ing → **mind waiting**.',
        },
        {
          id: 'm4l1-a5',
          type: 'mcq',
          question: 'Have you finished ___ yet? The taxi is downstairs!',
          options: ['packing', 'to pack'],
          correct: 0,
          explanation: '*finish* is Team -ing → **finished packing**.',
        },
        {
          id: 'm4l1-a6',
          type: 'error-hunt',
          sentence: "I'm looking forward to see you both on Sunday.",
          wrongIndex: 4,
          correction: 'seeing',
          explanation: 'The *to* is a preposition here → **looking forward to seeing**.',
        },
        {
          id: 'm4l1-a7',
          type: 'order',
          correct: 'Would you mind closing the window?',
          distractors: ['to close', 'closed'],
          explanation: '*mind* + gerund → **mind closing**.',
        },
        {
          id: 'm4l1-a8',
          type: 'mcq',
          question: "Keep ___ — you're nearly at the summit!",
          options: ['climbing', 'to climb'],
          correct: 0,
          explanation: '*keep* + -ing → **keep climbing**. (Very on-brand for this app.)',
        },
      ],
    },
    {
      title: 'Team to',
      icon: '🎯',
      exercises: [
        {
          id: 'm4l1-b1',
          type: 'mcq',
          question: 'We decided ___ the coast road instead. Zero regrets.',
          options: ['to take', 'taking'],
          correct: 0,
          explanation: '*decide* is Team to → **decided to take**.',
        },
        {
          id: 'm4l1-b2',
          type: 'gap',
          before: 'He promised',
          after: 'on time this once.',
          hint: 'be',
          accepted: ['to be'],
          explanation: '*promise* + to-infinitive → **promised to be**.',
        },
        {
          id: 'm4l1-b3',
          type: 'mcq',
          question: 'She refused ___ the new terms and walked out.',
          options: ['to accept', 'accepting'],
          correct: 0,
          explanation: '*refuse* + to-infinitive.',
        },
        {
          id: 'm4l1-b4',
          type: 'mcq',
          question: "I can't afford ___ another phone this year.",
          options: ['to lose', 'losing'],
          correct: 0,
          explanation: '*afford* + to-infinitive.',
        },
        {
          id: 'm4l1-b5',
          type: 'error-hunt',
          sentence: 'They agreed meeting us halfway on the price.',
          wrongIndex: 2,
          correction: 'to meet',
          explanation: '*agree* is Team to → **agreed to meet**.',
        },
        {
          id: 'm4l1-b6',
          type: 'mcq',
          question: 'He seems ___ everyone in this village. Everyone.',
          options: ['to know', 'knowing'],
          correct: 0,
          explanation: '*seem* + to-infinitive.',
        },
        {
          id: 'm4l1-b7',
          type: 'order',
          correct: 'She offered to drive us to the airport.',
          distractors: ['driving', 'drove'],
          explanation: '*offer* + to-infinitive → **offered to drive**.',
        },
        {
          id: 'm4l1-b8',
          type: 'mcq',
          question: 'We managed ___ the last two tickets. Miracle.',
          options: ['to get', 'getting'],
          correct: 0,
          explanation: '*manage* + to-infinitive.',
        },
      ],
    },
    {
      title: 'Objects & Shape-shifters',
      icon: '🧬',
      exercises: [
        {
          id: 'm4l1-d1',
          type: 'mcq',
          question: 'The doctor told me ___ more greens.',
          options: ['to eat', 'eating'],
          correct: 0,
          explanation: 'verb + person + **to-infinitive**: *told me to eat*.',
        },
        {
          id: 'm4l1-d2',
          type: 'mcq',
          question: 'Mum made us ___ our rooms before the party.',
          options: ['tidy', 'to tidy'],
          correct: 0,
          explanation: '*make* rebels: **made us tidy**, no *to*.',
        },
        {
          id: 'm4l1-d3',
          type: 'mcq',
          question: 'They let the kids ___ up late on Fridays.',
          options: ['stay', 'to stay'],
          correct: 0,
          explanation: '*let* + object + base verb.',
        },
        {
          id: 'm4l1-d4',
          type: 'gap',
          before: 'Remind me',
          after: 'the plants before we leave, or they\'re doomed.',
          hint: 'water',
          accepted: ['to water'],
          explanation: '*remind* + person + **to-infinitive**.',
        },
        {
          id: 'm4l1-d5',
          type: 'mcq',
          question: 'I remember ___ the door. I definitely locked it. Definitely.',
          options: ['locking', 'to lock'],
          correct: 0,
          explanation: 'A memory of a past action → **remember locking**.',
        },
        {
          id: 'm4l1-d6',
          type: 'mcq',
          question: "Don't forget ___ the door when you leave!",
          options: ['to lock', 'locking'],
          correct: 0,
          explanation: 'The task still to do → **forget to lock**.',
        },
        {
          id: 'm4l1-d7',
          type: 'mcq',
          question: 'We stopped ___ petrol on the way — that\'s why we\'re late.',
          options: ['to get', 'getting'],
          correct: 0,
          explanation: 'Paused *in order to* → **stopped to get**.',
        },
        {
          id: 'm4l1-d8',
          type: 'mcq',
          question: 'Try ___ the router off and on — works every time.',
          options: ['turning', 'to turn'],
          correct: 0,
          explanation: 'An experiment to see if it helps → **try turning**.',
        },
        {
          id: 'm4l1-d9',
          type: 'error-hunt',
          sentence: 'My boss made me to redo the whole report.',
          wrongIndex: 4,
          correction: '– (made me redo)',
          explanation: '*make* + object + base verb: **made me redo**.',
        },
        {
          id: 'm4l1-d10',
          type: 'mcq',
          question: 'We regret ___ you that the position has been filled.',
          options: ['to inform', 'informing'],
          correct: 0,
          explanation: 'Formal bad-news formula → **regret to inform**.',
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm4l1-e1',
          type: 'speed',
          secondsPerItem: 8,
          items: [
            { question: 'I enjoy ___.', options: ['cooking', 'to cook'], correct: 0 },
            { question: 'She wants ___ early.', options: ['to leave', 'leaving'], correct: 0 },
            { question: 'Let me ___!', options: ['help', 'to help'], correct: 0 },
            { question: 'Avoid ___ at rush hour.', options: ['driving', 'to drive'], correct: 0 },
            { question: 'He offered ___ the bill.', options: ['to pay', 'paying'], correct: 0 },
            { question: 'I miss ___ by the sea.', options: ['living', 'to live'], correct: 0 },
            { question: 'She told me ___ down.', options: ['to calm', 'calming'], correct: 0 },
            { question: 'Fancy ___ out tonight?', options: ['going', 'to go'], correct: 0 },
            { question: 'We hope ___ you soon.', options: ['to see', 'seeing'], correct: 0 },
            { question: 'Stop ___ my chips!', options: ['stealing', 'to steal'], correct: 0 },
          ],
          explanation: 'enjoy/avoid/miss/fancy/stop + -ing · want/offer/hope/tell sb + to · let + base.',
        },
      ],
    },
  ],
  boss: {
    passPct: 80,
    exercises: [
      {
        id: 'm4l1-boss1',
        type: 'mcq',
        question: '___ languages opens doors — and menus.',
        options: ['Learning', 'Learn'],
        correct: 0,
        explanation: 'Verb as subject → gerund.',
      },
      {
        id: 'm4l1-boss2',
        type: 'mcq',
        question: 'He suggested ___ the early train to beat the crowds.',
        options: ['taking', 'to take'],
        correct: 0,
        explanation: '*suggest* is Team -ing → **suggested taking**.',
      },
      {
        id: 'm4l1-boss3',
        type: 'gap',
        before: "I can't wait — I'm really looking forward to",
        after: 'you at last.',
        hint: 'meet',
        accepted: ['meeting'],
        explanation: '*look forward to* + gerund → **meeting**.',
      },
      {
        id: 'm4l1-boss4',
        type: 'mcq',
        question: 'She persuaded me ___ for the choir. Send help.',
        options: ['to audition', 'auditioning'],
        correct: 0,
        explanation: '*persuade* + person + to-infinitive.',
      },
      {
        id: 'm4l1-boss5',
        type: 'mcq',
        question: 'They made everyone ___ their phones in a basket at the door.',
        options: ['put', 'to put'],
        correct: 0,
        explanation: '*make* + object + base verb.',
      },
      {
        id: 'm4l1-boss6',
        type: 'error-hunt',
        sentence: 'He refused signing the new contract.',
        wrongIndex: 2,
        correction: 'to sign',
        explanation: '*refuse* + to-infinitive → **refused to sign**.',
      },
      {
        id: 'm4l1-boss7',
        type: 'mcq',
        question: 'Did you remember ___ the oven off?!',
        options: ['to turn', 'turning'],
        correct: 0,
        explanation: 'The task, not the memory → **remember to turn**.',
      },
      {
        id: 'm4l1-boss8',
        type: 'mcq',
        question: "I'll never forget ___ the northern lights that night.",
        options: ['seeing', 'to see'],
        correct: 0,
        explanation: 'An unforgettable memory → **forget seeing**.',
      },
      {
        id: 'm4l1-boss9',
        type: 'order',
        correct: 'My parents let me choose my own school.',
        distractors: ['to choose', 'chose'],
        explanation: '*let* + object + base verb.',
      },
      {
        id: 'm4l1-boss10',
        type: 'transform',
        source: '"Please check the tyres," she said to me.',
        keyword: 'reminded',
        accepted: ['She reminded me to check the tyres'],
        explanation: '*remind* + person + to-infinitive → **She reminded me to check the tyres.**',
      },
      {
        id: 'm4l1-boss11',
        type: 'mcq',
        question: 'After the health scare, she stopped ___ energy drinks completely.',
        options: ['drinking', 'to drink'],
        correct: 0,
        explanation: 'Quit the habit → **stopped drinking**.',
      },
    ],
  },
};
