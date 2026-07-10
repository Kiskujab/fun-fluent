import type { Lesson } from '../../types';

export const m9l1: Lesson = {
  id: 'm9l1',
  title: 'Have It All',
  subtitle: 'have & have got — every job one verb can do',
  minutes: 40,
  goals: [
    "Spot have's two jobs: meaning-carrier vs tense-builder",
    'Know when have can go continuous — and when it absolutely cannot',
    'Use have got like a Brit: present only, informal only',
    'Master the contraction rules that expose non-natives',
  ],
  cards: [
    {
      title: '🏔️ Welcome to the Descent',
      body: `You summited in Module 8. But every mountaineer knows the secret: **the way down is where most accidents happen**. Up top it was formal precision; down here it's fast, casual, spoken English — starting with the busiest little verb in the language.

*have* works **two completely different jobs**:

- **Main verb** — it carries meaning: *I **have** a large extended family.*
- **Auxiliary verb** — it builds perfect tenses: *They**'ve been** married for 15 years.*

Same spelling, different animal. This lesson teaches you to tell them apart on sight.`,
      tip: 'Quick test: if you can delete have and the sentence loses its meaning, it was the main verb. If deleting it just breaks the grammar, it was an auxiliary.',
      miniCheck: {
        id: 'm9l1-c1',
        type: 'mcq',
        question: 'In "She has finished the report", *has* is…',
        options: ['an auxiliary (it builds the perfect)', 'a main verb (possession)', 'a modal verb'],
        correct: 0,
        explanation:
          'The meaning lives in **finished**; *has* is just the tense-building **auxiliary**.',
      },
    },
    {
      title: 'Stative have: possession & co.',
      body: `As a main verb for **possession, relationships and illnesses**, *have* is **stative** — no continuous, ever:

> I **have** two sisters. · She **has** a flat in Leeds.
> He **has** a terrible cold. — not ~~He's having a terrible cold.~~

Stative *have* covers what you **own**, who you're **related to**, and what's **wrong with you**:

- possessions: *have a car, have blue eyes*
- relationships: *have three kids, have a business partner*
- illnesses: *have flu, have a headache*`,
      miniCheck: {
        id: 'm9l1-c2',
        type: 'mcq',
        question: 'Which is correct?',
        options: [
          'I have a terrible cold.',
          "I'm having a terrible cold.",
          'I having a terrible cold.',
        ],
        correct: 0,
        explanation:
          'Illnesses take **stative have** — simple forms only, never continuous.',
      },
    },
    {
      title: 'Dynamic have: actions & experiences',
      body: `But *have* + object also means **do / experience an activity** — and then it's a normal **dynamic** verb, happy in the continuous:

> I**'m having** problems with my wi-fi.
> We**'re having** dinner — can I call you back?
> She**'s having** a baby in June.

The classic collocations: **have a bath / a shower / a drink / lunch / a party / a chat / a laugh / a go / a problem**.

Same verb, opposite behaviour. The object tells you which *have* you're holding.`,
      tip: 'have a swim, have a think, have a moan — English loves turning verbs into "have a + noun". It makes the action sound brief and casual.',
      miniCheck: {
        id: 'm9l1-c3',
        type: 'mcq',
        question: 'We ___ a barbecue on Saturday — come along!',
        options: ["'re having", 'have got', 'has'],
        correct: 0,
        explanation:
          'A barbecue is an **event you experience** — dynamic *have*, continuous fine.',
      },
    },
    {
      title: 'have got: the British favourite',
      body: `In informal British English, possession is usually **have got**:

> We**'ve got** two sons, but we **haven't got** a daughter.
> **Have** you **got** a minute?

Three house rules:

- **Present only.** The past is plain *had*: *We **had** a dog* — not ~~We had got a dog.~~
- **Informal.** In formal writing, use *have*.
- **got adds zero meaning.** *I've got a car* = *I have a car*, just chattier.

Questions and negatives work like an auxiliary: **Have you got…? / She hasn't got…** — no *do* needed.`,
      miniCheck: {
        id: 'm9l1-c4',
        type: 'gap',
        before: 'Have you',
        after: 'a pen I could borrow? (one word)',
        hint: 'the informal extra',
        accepted: ['got'],
        explanation:
          'Informal BrE possession: **Have you got** a pen? No *do*, no extra verb.',
      },
    },
    {
      title: 'have to vs have got to',
      body: `Obligation runs on the same pair:

> Do we really **have to** spend Christmas with your parents again?
> I**'ve got to** go now — I'm meeting my girlfriend for lunch.

The same house rules apply, plus one:

- *have got to* = **present only, informal only** (in fast speech: *gotta*)
- *have to* = **any tense**: *will have to, had to, having to, to have to*

So with *will*, *going to* or the past, *got* must stay home:

> You'll **have to** be patient. — not ~~You'll have got to…~~
> When I was at school we **had to** wear a blazer.`,
      miniCheck: {
        id: 'm9l1-c5',
        type: 'mcq',
        question: 'Which one can talk about the future with *will*?',
        options: ['have to', 'have got to', 'both work with will'],
        correct: 0,
        explanation:
          '*have got to* is **present-only**; for the future you need **will have to**.',
      },
    },
    {
      title: 'The auxiliary engine',
      body: `As an **auxiliary**, *have* powers every perfect form in the language:

> They**'ve been** married for 15 years.
> How long **has** Anna **been going** out with James?
> She'll **have finished** lunch in a few minutes, so call her then.
> If I **hadn't taken** a taxi, I wouldn't **have arrived** in time.

Auxiliary *have* **loves contracting**: *I've, she's, they'd, we'll have*. That's its signature.

Main-verb *have* is the opposite — **we don't usually contract it**:

> I **have** a big family. — not ~~I've a big family.~~ (sounds like a period drama)`,
      miniCheck: {
        id: 'm9l1-c6',
        type: 'gap',
        before: 'By June they',
        after: 'have been living here for a decade. (one word)',
        hint: 'future',
        accepted: ['will', "'ll"],
        explanation:
          'Future perfect continuous: **will have been living** — three auxiliaries deep, and *have* is the engine room.',
      },
    },
    {
      title: 'have + object + past participle',
      body: `One last main-verb pattern — you met it in Module 5, now see both faces:

- **You arrange it**: *We're going to **have our house repainted** next week.*
- **It happens to you**: *I **had my phone stolen** while I was paying at the checkout.*

Same grammar, opposite luck. Context tells you whether you hired a decorator or met a pickpocket.

**Museum piece** 🏛️ — very formal English can make *have* negative without *do*:

> I **haven't the** time to go to the bank.

You'll meet it in novels and from elderly aristocrats. Admire it; don't imitate it.`,
      miniCheck: {
        id: 'm9l1-c7',
        type: 'mcq',
        question: '"I had my phone stolen" means…',
        options: [
          'it happened to me — bad luck',
          'I arranged for someone to steal it',
          'I stole a phone',
        ],
        correct: 0,
        explanation:
          '**have something done** also covers things done *to* you: *had my phone stolen, had his flight cancelled*.',
      },
    },
  ],
  sets: [
    {
      title: 'The Possession Inspection',
      icon: '🎒',
      exercises: [
        {
          id: 'm9l1-a1',
          type: 'mcq',
          question: 'I ___ a terrible headache — can we talk later?',
          options: ['have', 'am having', 'am had'],
          correct: 0,
          explanation:
            'Illnesses take **stative have** — no continuous: *I have a headache*.',
        },
        {
          id: 'm9l1-a2',
          type: 'mcq',
          question: "Sorry, I can't stop — we ___ dinner with the neighbours right now.",
          options: ['are having', 'have got', 'has'],
          correct: 0,
          explanation:
            'Dinner is an **activity**, so *have* is dynamic here — continuous is exactly right.',
        },
        {
          id: 'm9l1-a3',
          type: 'gap',
          before: '',
          after: "you got a spare charger? Mine's died. (one word)",
          hint: 'no do!',
          accepted: ['have'],
          explanation:
            '*have got* makes questions like an auxiliary: **Have you got…?** — *do* stays home.',
        },
        {
          id: 'm9l1-a4',
          type: 'mcq',
          question: 'Which sentence is correct?',
          options: [
            'We had a dog when I was a child.',
            'We had got a dog when I was a child.',
            'We have got a dog when I was a child.',
          ],
          correct: 0,
          explanation:
            '*have got* is **present only**. In the past it collapses to plain **had**.',
        },
        {
          id: 'm9l1-a5',
          type: 'sort',
          prompt: 'Stative or dynamic?',
          buckets: ['Stative — no continuous', 'Dynamic — continuous OK'],
          items: [
            { text: 'have two sisters', bucket: 0 },
            { text: 'have a shower', bucket: 1 },
            { text: 'have a headache', bucket: 0 },
            { text: 'have lunch', bucket: 1 },
            { text: 'have blue eyes', bucket: 0 },
            { text: 'have a party', bucket: 1 },
          ],
          explanation:
            'Possession, relationships and illnesses = **stative**. Activities and experiences = **dynamic**.',
        },
        {
          id: 'm9l1-a6',
          type: 'gap',
          before: 'We',
          after: "got a daughter, but we'd love one. (negative)",
          hint: "have + n't",
          accepted: ["haven't", 'have not'],
          explanation:
            'Negative of *have got*: **haven\'t got** — again, no *do* in sight.',
        },
        {
          id: 'm9l1-a7',
          type: 'transform',
          source: 'Do you have any brothers or sisters?',
          keyword: 'GOT',
          accepted: [
            'have you got any brothers or sisters',
            'have you got any brothers and sisters',
          ],
          explanation:
            'Same meaning, British casual mode: **Have you got any brothers or sisters?**',
        },
        {
          id: 'm9l1-a8',
          type: 'mcq',
          question: "'She's having a baby in June.' — here *have* means…",
          options: ['an experience (dynamic)', 'possession (stative)', 'obligation'],
          correct: 0,
          explanation:
            'Having a baby is an **event**, so dynamic *have* — the continuous is fine and natural.',
        },
        {
          id: 'm9l1-a9',
          type: 'error-hunt',
          prompt: 'One word is off. Click it.',
          sentence: "We've to leave before six to catch the ferry.",
          wrongIndex: 0,
          correction: 'We have',
          explanation:
            "Main-verb *have* (and *have to*) **doesn't contract**: *We have to leave* — never ~~We've to leave~~.",
        },
      ],
    },
    {
      title: 'The Obligation Office',
      icon: '📋',
      exercises: [
        {
          id: 'm9l1-b1',
          type: 'mcq',
          question: "___ go now — I'm meeting my girlfriend for lunch.",
          options: ["I've got to", "I've", "I'd got to"],
          correct: 0,
          explanation:
            'Informal spoken obligation: **I\'ve got to go** (in fast speech: *gotta*).',
        },
        {
          id: 'm9l1-b2',
          type: 'gap',
          before: 'Do we really',
          after: 'to spend Christmas with your parents again? (one word)',
          hint: 'obligation',
          accepted: ['have'],
          explanation:
            'With *do*-questions it\'s plain **have to**: *Do we really have to…?*',
        },
        {
          id: 'm9l1-b3',
          type: 'mcq',
          question: '*have got to* is…',
          options: [
            'informal and present-tense only',
            'formal and mostly written',
            'only used in American English',
          ],
          correct: 0,
          explanation:
            '**have got to** lives in casual speech and only in the present. Everywhere else: *have to*.',
        },
        {
          id: 'm9l1-b4',
          type: 'transform',
          source: "It's necessary for me to renew my passport.",
          keyword: 'HAVE',
          accepted: [
            'i have to renew my passport',
            "i've got to renew my passport",
            'i have got to renew my passport',
          ],
          explanation:
            'Necessity → obligation verb: **I have to / I\'ve got to renew my passport.**',
        },
        {
          id: 'm9l1-b5',
          type: 'error-hunt',
          prompt: 'One word is off. Click it.',
          sentence: 'When I was at school we has to wear a hideous green blazer.',
          wrongIndex: 6,
          correction: 'had',
          explanation:
            'Past obligation = **had to**. (And no *got* in the past either.)',
        },
        {
          id: 'm9l1-b6',
          type: 'sort',
          prompt: 'Which forms exist?',
          buckets: ['Present only (got-forms)', 'Any tense (have to)'],
          items: [
            { text: "I've got to leave", bucket: 0 },
            { text: 'she has got to decide', bucket: 0 },
            { text: 'will have to wait', bucket: 1 },
            { text: 'had to apologise', bucket: 1 },
            { text: 'hates having to queue', bucket: 1 },
            { text: "we've got to hurry", bucket: 0 },
          ],
          explanation:
            '*got*-forms are frozen in the present; **have to** conjugates into every tense and pattern.',
        },
        {
          id: 'm9l1-b7',
          type: 'mcq',
          question: "You'll ___ be patient — the queue is enormous.",
          options: ['have to', 'have got to', 'got to'],
          correct: 0,
          explanation:
            'After **will**, only *have to* works: *You\'ll have to be patient.*',
        },
        {
          id: 'm9l1-b8',
          type: 'gap',
          before: 'I',
          after: 'the time to go to the bank. (formal negative — no *do*)',
          hint: "have + n't",
          accepted: ["haven't", 'have not'],
          explanation:
            'The museum piece: very formal English allows **I haven\'t the time** — negative *have* without *do*.',
        },
        {
          id: 'm9l1-b9',
          type: 'order',
          prompt: 'Build the question.',
          correct: 'Do we have to book a table in advance?',
          distractors: ['got'],
          explanation:
            'Questions with *have to* use **do**: *Do we have to book…?* — *got* would need *Have we got to…*, which sounds clunky.',
        },
      ],
    },
    {
      title: 'The Auxiliary Engine',
      icon: '⚙️',
      exercises: [
        {
          id: 'm9l1-d1',
          type: 'mcq',
          question: 'How long ___ Anna been going out with James?',
          options: ['has', 'is', 'does'],
          correct: 0,
          explanation:
            'Present perfect continuous question: **has** Anna **been going**. Auxiliary *have* at work.',
        },
        {
          id: 'm9l1-d2',
          type: 'gap',
          before: "She'll",
          after: 'finished lunch in a few minutes, so call her then. (one word)',
          hint: 'future perfect',
          accepted: ['have'],
          explanation:
            'Future perfect: **will have finished** — done before a future moment.',
        },
        {
          id: 'm9l1-d3',
          type: 'mcq',
          question: "If I ___ taken a taxi, I wouldn't have arrived in time.",
          options: ["hadn't", "haven't", "didn't"],
          correct: 0,
          explanation:
            'Third conditional: **if + past perfect** → *If I hadn\'t taken a taxi…*',
        },
        {
          id: 'm9l1-d4',
          type: 'transform',
          source: 'Someone stole my phone while I was paying.',
          keyword: 'HAD',
          accepted: [
            'i had my phone stolen while i was paying',
            'i had my phone stolen while paying',
            'i had my phone stolen',
          ],
          explanation:
            'Bad-luck causative: **I had my phone stolen** — it was done *to* you.',
        },
        {
          id: 'm9l1-d5',
          type: 'error-hunt',
          prompt: 'One word is off. Click it.',
          sentence: "We're going to have our house repaint next week.",
          wrongIndex: 6,
          correction: 'repainted',
          explanation:
            'have + object + **past participle**: *have our house repainted*.',
        },
        {
          id: 'm9l1-d6',
          type: 'match',
          prompt: 'Match each sentence to the job *have* is doing.',
          pairs: [
            ["I've been to Iceland twice", 'auxiliary — builds the perfect'],
            ["We're having a barbecue on Sunday", 'dynamic main verb — activity'],
            ['She has two jobs', 'stative main verb — possession'],
            ["He's got to leave early", 'obligation — have got to'],
            ['They had their locks changed', 'have something done'],
          ],
          explanation:
            'Five sentences, five different *have*s. The object (or lack of one) gives the game away.',
        },
        {
          id: 'm9l1-d7',
          type: 'gap',
          before: "By the time I'm thirty I hope to",
          after: 'started my own business. (one word)',
          hint: 'perfect infinitive',
          accepted: ['have'],
          explanation:
            'Perfect infinitive: *hope **to have started*** — finished before that future point.',
        },
        {
          id: 'm9l1-d8',
          type: 'mcq',
          question: "'I haven't got your email' vs 'I don't have your email' — the real difference is…",
          options: [
            'register: the got-version is more informal, more British',
            'tense: one is past',
            'meaning: one is about obligation',
          ],
          correct: 0,
          explanation:
            'Identical meaning; **have got** is simply the chattier, more British flavour.',
        },
        {
          id: 'm9l1-d9',
          type: 'order',
          prompt: 'Build the sentence — two *have*s incoming.',
          correct: 'She must have been having a bad day.',
          distractors: ['had'],
          explanation:
            'Past deduction + dynamic have: *must **have been having** a bad day* — auxiliary *have* and main-verb *having*, side by side.',
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm9l1-e1',
          type: 'speed',
          prompt: 'Quick fire — trust your instinct!',
          secondsPerItem: 8,
          explanation: 'Stative vs dynamic vs auxiliary — at speed.',
          items: [
            { question: 'I ___ a shower when the phone rang.', options: ['was having', 'had got'], correct: 0 },
            { question: '___ you got a minute?', options: ['Have', 'Do'], correct: 0 },
            { question: 'We ___ a great time in Lisbon last month.', options: ['had', 'have got'], correct: 0 },
            { question: "She'll ___ left by now.", options: ['have', 'has'], correct: 0 },
            { question: "I've ___ to go — my train's in ten minutes.", options: ['got', 'have'], correct: 0 },
            { question: 'He ___ a wicked sense of humour.', options: ['has', 'is having'], correct: 0 },
            { question: 'They ___ their kitchen redone last year.', options: ['had', 'have got'], correct: 0 },
            { question: '___ we have to pay in advance?', options: ['Do', 'Have'], correct: 0 },
            { question: "I ___ got any cash on me.", options: ["haven't", "don't"], correct: 0 },
            { question: "You'll ___ to speak up — she's a bit deaf.", options: ['have', 'has'], correct: 0 },
          ],
        },
      ],
    },
  ],
  boss: {
    passPct: 80,
    exercises: [
      {
        id: 'm9l1-boss1',
        type: 'mcq',
        question: 'Do we really ___ spend Christmas with your parents again?',
        options: ['have to', 'have got', 'having to'],
        correct: 0,
        explanation: 'Question with *do* → plain **have to**.',
      },
      {
        id: 'm9l1-boss2',
        type: 'gap',
        before: 'How long has Anna',
        after: 'going out with James? (one word)',
        hint: 'perfect continuous',
        accepted: ['been'],
        explanation: 'Present perfect continuous: *has **been** going out*.',
      },
      {
        id: 'm9l1-boss3',
        type: 'mcq',
        question: 'Which sentence is wrong?',
        options: [
          "I've a big family.",
          'I have a big family.',
          "I've got a big family.",
        ],
        correct: 0,
        explanation:
          "Main-verb *have* doesn't contract on its own: *I have* or *I've **got*** — never ~~I've a family~~.",
      },
      {
        id: 'm9l1-boss4',
        type: 'error-hunt',
        prompt: 'One word is off. Click it.',
        sentence: "If I haven't taken a taxi, I wouldn't have arrived in time.",
        wrongIndex: 2,
        correction: "hadn't",
        explanation:
          'Third conditional needs the **past** perfect: *If I **hadn\'t** taken a taxi…*',
      },
      {
        id: 'm9l1-boss5',
        type: 'transform',
        source: "It's not necessary to book — the restaurant is empty.",
        keyword: 'HAVE',
        before: 'You',
        after: '— the restaurant is empty.',
        accepted: [
          "don't have to book",
          'do not have to book',
          "haven't got to book",
          'have not got to book',
        ],
        explanation:
          'Absence of obligation: **don\'t have to** (or informal *haven\'t got to*).',
      },
      {
        id: 'm9l1-boss6',
        type: 'sort',
        prompt: 'Which *have* is it?',
        buckets: ['stative', 'dynamic action', 'auxiliary'],
        items: [
          { text: 'have a headache', bucket: 0 },
          { text: 'have a swim', bucket: 1 },
          { text: 'have finished', bucket: 2 },
          { text: 'have two brothers', bucket: 0 },
          { text: 'have a chat', bucket: 1 },
          { text: 'have been waiting', bucket: 2 },
        ],
        explanation:
          'Possession/illness = stative · activities = dynamic · tense-building = auxiliary.',
      },
      {
        id: 'm9l1-boss7',
        type: 'mcq',
        question: "'I'm having lunch with the boss.' Here *have* is…",
        options: ['dynamic — an activity', 'stative — possession', 'an auxiliary'],
        correct: 0,
        explanation:
          'Lunch is an event you experience — **dynamic have**, so the continuous is perfect.',
      },
      {
        id: 'm9l1-boss8',
        type: 'gap',
        before: "We're going to have the house",
        after: 'before we sell it. (paint)',
        hint: 'paint',
        accepted: ['painted', 'repainted'],
        explanation:
          'Causative: *have the house **painted*** — someone else holds the brush.',
      },
      {
        id: 'm9l1-boss9',
        type: 'mcq',
        question: "The past of 'She's got a motorbike' is…",
        options: [
          'She had a motorbike.',
          'She had got a motorbike.',
          'She has got a motorbike.',
        ],
        correct: 0,
        explanation:
          '*have got* refuses to time-travel: the past is plain **had**.',
      },
      {
        id: 'm9l1-boss10',
        type: 'order',
        prompt: 'Build the question.',
        correct: 'Have you got any idea what time it is?',
        distractors: ['do'],
        explanation:
          '*have got* question: **Have you got** any idea…? — auxiliary-style, no *do*.',
      },
      {
        id: 'm9l1-boss11',
        type: 'gap',
        before: "I've",
        after: 'to admit — the view from the top was worth it. (one word)',
        hint: 'informal obligation',
        accepted: ['got'],
        explanation:
          '**I\'ve got to admit** — informal *have got to*, and a fine thought for the climb down. 🏔️',
      },
    ],
  },
};
