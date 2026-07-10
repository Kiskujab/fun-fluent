import type { Lesson } from '../../types';

export const m3l4: Lesson = {
  id: 'm3l4',
  title: 'The Regret Department',
  subtitle: "wish, if only, it's time",
  minutes: 40,
  goals: [
    'Wish about the present with past forms',
    'Regret the past with wish + past perfect',
    'Complain beautifully with wish + would',
    "Use it's time + past — and know why it works",
  ],
  cards: [
    {
      title: 'wish + past — wishing about NOW',
      body: `**wish + past simple** = I want the present to be different (but it isn't):

> I **wish** I **had** a garden. (I don't 🪴)
> I **wish** I **knew** how to dance salsa.
> She **wishes** she **could** speak Italian.

Same unreality trick as conditionals: past form ≠ past time. And yes — *were* beats *was* in style:

> I wish I **were** taller.`,
      miniCheck: {
        id: 'm3l4-c1',
        type: 'gap',
        before: 'I wish I',
        after: 'how to dance salsa.',
        hint: 'know',
        accepted: ['knew'],
        explanation: 'Wishing about the present → past form: **knew**.',
      },
    },
    {
      title: 'wish + past perfect — regretting THEN',
      body: `**wish + past perfect** = I want the past to have been different. Too late — hence the ache:

> I **wish** I**'d studied** harder for my finals.
> I **wish** I **hadn't sent** that email. 📧💀
> He **wishes** he**'d said** goodbye properly.

One step back in form = one step back in time. The pattern matches the third conditional exactly.`,
      miniCheck: {
        id: 'm3l4-c2',
        type: 'mcq',
        question: 'I wish I ___ that email. Career-limiting stuff.',
        options: ["hadn't sent", "didn't send"],
        correct: 0,
        explanation: 'Past regret → past perfect: **hadn\'t sent**.',
      },
    },
    {
      title: 'wish + would — the complaints desk',
      body: `**wish + would** = I want someone (or something) ELSE to change their annoying behaviour:

> I **wish** you**'d stop** humming. 🎵😤
> I **wish** the neighbours **would turn** that music down.
> I **wish** it **would stop** raining.

Two rules: it's for *other people/things*, and for *actions* — never yourself, never states:

> ~~I wish I would be taller~~ → I wish I **were** taller.`,
      miniCheck: {
        id: 'm3l4-c3',
        type: 'mcq',
        question: 'I wish the neighbours ___ playing bagpipes at 7 a.m.',
        options: ['would stop', 'stopped'],
        correct: 0,
        explanation: 'A complaint about someone else\'s repeated behaviour → **would stop**.',
      },
    },
    {
      title: 'wish vs hope',
      body: `Don't send *wish* to do *hope*'s job:

**hope** + present/future = a REAL possibility:

> I **hope** you **pass** tomorrow! · I **hope** the strike **ends** soon.

**wish** + past forms = unreal. But watch the fixed phrases — *wish somebody something*:

> I **wish you luck** · We **wish you a merry Christmas** 🎄`,
      miniCheck: {
        id: 'm3l4-c4',
        type: 'mcq',
        question: "I ___ you pass tomorrow — you've earned it.",
        options: ['hope', 'wish'],
        correct: 0,
        explanation: 'A real, likely outcome → **hope**. (*wish you passed* would suggest you won\'t!)',
      },
    },
    {
      title: 'if only — wish, amplified',
      body: `**If only** = *wish* with the volume turned up. Same grammar, more drama:

> **If only** I **were** taller — just five centimetres!
> **If only** we **hadn't sold** grandma's house.
> **If only** it **would stop** raining!

Perfect for sighing at windows during storms.`,
      miniCheck: {
        id: 'm3l4-c5',
        type: 'gap',
        before: 'If only I',
        after: 'taller — just five centimetres!',
        hint: 'be',
        accepted: ['were', 'was'],
        explanation: 'Present wish, dramatic version → **were**.',
      },
    },
    {
      title: "it's time + past",
      body: `**It's (high) time + past form** — it should be happening already:

> **It's time** we **left** — it's nearly midnight.
> **It's high time** you **did** your own washing. (the *high* adds parental disappointment)

Same family as *I'd rather you didn't*: unreal past for present pressure. You now own the full set. 🗝️`,
      miniCheck: {
        id: 'm3l4-c6',
        type: 'mcq',
        question: "It's high time you ___ your own washing.",
        options: ['did', 'do'],
        correct: 0,
        explanation: '**It\'s time + past form**: *time you did*.',
      },
    },
    {
      title: 'The Regret Department — the map',
      body: `Filing summary:

- **wish + past** — present wishes: *I wish I knew.*
- **wish + past perfect** — past regrets: *I wish I'd known.*
- **wish + would** — complaints about others: *I wish you'd stop.*
- **hope** — real chances · **wish sb luck** — fixed phrase
- **if only** — all of the above, louder
- **it's (high) time + past** — overdue action

One Gatekeeper between you and the Architect of Ifs badge. No regrets. 🕯️`,
    },
  ],
  sets: [
    {
      title: 'Present Wishes',
      icon: '🌠',
      exercises: [
        {
          id: 'm3l4-a1',
          type: 'mcq',
          question: 'I wish I ___ nearer the office — this commute is eating my life.',
          options: ['lived', 'live'],
          correct: 0,
          explanation: 'Present wish → past form: **lived**.',
        },
        {
          id: 'm3l4-a2',
          type: 'gap',
          before: 'She wishes she',
          after: 'speak Italian — mostly for the menus.',
          hint: 'can',
          accepted: ['could'],
          explanation: '*can* → **could** in wish-land.',
        },
        {
          id: 'm3l4-a3',
          type: 'mcq',
          question: 'I wish it ___ so much in this town.',
          options: ["didn't rain", "doesn't rain"],
          correct: 0,
          explanation: 'Present reality, wished different → **didn\'t rain**.',
        },
        {
          id: 'm3l4-a4',
          type: 'mcq',
          question: "Don't you wish you ___ on a beach right now?",
          options: ['were', 'are'],
          correct: 0,
          explanation: 'Unreal present location → **were**.',
        },
        {
          id: 'm3l4-a5',
          type: 'error-hunt',
          sentence: 'I wish I can remember where I parked.',
          wrongIndex: 3,
          correction: 'could',
          explanation: 'After wish, *can* becomes **could**.',
        },
        {
          id: 'm3l4-a6',
          type: 'order',
          correct: 'I wish I knew the answer to that.',
          distractors: ['know', 'would'],
          explanation: 'Present wish → **knew**. (And no *would* for yourself!)',
        },
        {
          id: 'm3l4-a7',
          type: 'mcq',
          question: 'He wishes he ___ have to wear a tie every single day.',
          options: ["didn't", "doesn't"],
          correct: 0,
          explanation: 'Present wish → past form: **didn\'t have to**.',
        },
        {
          id: 'm3l4-a8',
          type: 'transform',
          source: "I don't have a dog, sadly.",
          keyword: 'wish',
          accepted: ['I wish I had a dog'],
          explanation: 'Flip reality → **I wish I had a dog.**',
        },
      ],
    },
    {
      title: 'Past Regrets',
      icon: '🕯️',
      exercises: [
        {
          id: 'm3l4-b1',
          type: 'mcq',
          question: 'I wish I ___ harder for my finals.',
          options: ['had studied', 'studied'],
          correct: 0,
          explanation: 'Past regret → past perfect: **had studied**.',
        },
        {
          id: 'm3l4-b2',
          type: 'gap',
          before: 'He wishes he',
          after: 'that tattoo. The dolphin has not aged well.',
          hint: 'never / get',
          accepted: ['had never got', "'d never got", 'had never gotten'],
          explanation: 'Past regret → **had never got**.',
        },
        {
          id: 'm3l4-b3',
          type: 'mcq',
          question: 'I wish you ___ me before painting the kitchen orange.',
          options: ['had asked', 'asked'],
          correct: 0,
          explanation: 'The painting is done → past perfect: **had asked**.',
        },
        {
          id: 'm3l4-b4',
          type: 'error-hunt',
          sentence: "If only we didn't sell grandma's house last year.",
          wrongIndex: 3,
          correction: "hadn't",
          explanation: '`last year` = past regret → past perfect: **hadn\'t sold**.',
        },
        {
          id: 'm3l4-b5',
          type: 'order',
          correct: 'If only I had listened to your advice.',
          distractors: ['would', 'listen'],
          explanation: 'Past regret, amplified → **If only I had listened**.',
        },
        {
          id: 'm3l4-b6',
          type: 'mcq',
          question: 'She wishes she ___ goodbye properly before he moved away.',
          options: ['had said', 'would say'],
          correct: 0,
          explanation: 'Past regret → **had said**.',
        },
        {
          id: 'm3l4-b7',
          type: 'mcq',
          question: 'I bet he wishes he ___ that second helping of goulash.',
          options: ["hadn't had", "didn't have"],
          correct: 0,
          explanation: 'Past regret → **hadn\'t had**. (Yes, *had had* — English does that.)',
        },
        {
          id: 'm3l4-b8',
          type: 'transform',
          source: "I didn't take any photos, and now I regret it.",
          keyword: 'wish',
          accepted: [
            'I wish I had taken some photos',
            'I wish I had taken photos',
            "I wish I'd taken some photos",
          ],
          explanation: 'Regret → **I wish I had taken some photos.**',
        },
      ],
    },
    {
      title: 'Complaints & Deadlines',
      icon: '⏰',
      exercises: [
        {
          id: 'm3l4-d1',
          type: 'mcq',
          question: 'I wish you ___ interrupting me!',
          options: ['would stop', 'stopped'],
          correct: 0,
          explanation: 'Complaint about someone else\'s behaviour → **would stop**.',
        },
        {
          id: 'm3l4-d2',
          type: 'mcq',
          question: 'I wish this printer ___ when I actually need it.',
          options: ['would work', 'works'],
          correct: 0,
          explanation: 'Machines get the *would* treatment too → **would work**.',
        },
        {
          id: 'm3l4-d3',
          type: 'mcq',
          question: 'I ___ you a very happy birthday!',
          options: ['wish', 'hope'],
          correct: 0,
          explanation: 'Fixed phrase: **wish somebody something**.',
        },
        {
          id: 'm3l4-d4',
          type: 'mcq',
          question: 'I ___ the weather improves for the wedding.',
          options: ['hope', 'wish'],
          correct: 0,
          explanation: 'Real possibility → **hope** + present.',
        },
        {
          id: 'm3l4-d5',
          type: 'gap',
          before: "It's time we",
          after: "— it's nearly midnight and the host is yawning.",
          hint: 'go',
          accepted: ['went', 'left'],
          explanation: '**It\'s time + past form**: *time we went*.',
        },
        {
          id: 'm3l4-d6',
          type: 'mcq',
          question: "It's high time somebody ___ that squeaky door.",
          options: ['fixed', 'fixes'],
          correct: 0,
          explanation: 'Overdue action → past form: **fixed**.',
        },
        {
          id: 'm3l4-d7',
          type: 'error-hunt',
          sentence: 'I wish I would be more patient with my brother.',
          wrongIndex: 3,
          correction: '– (I wish I were)',
          explanation: 'No *would* for yourself: **I wish I were more patient.**',
        },
        {
          id: 'm3l4-d8',
          type: 'order',
          correct: 'I wish you would tidy your room.',
          distractors: ['will', 'tidied'],
          explanation: 'Complaint about another person → **would tidy**.',
        },
        {
          id: 'm3l4-d9',
          type: 'mcq',
          question: "I'd rather you ___ indoors — the balcony is right there.",
          options: ["didn't smoke", "don't smoke"],
          correct: 0,
          explanation: 'Same unreal-past family: **I\'d rather you didn\'t smoke**.',
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm3l4-e1',
          type: 'speed',
          secondsPerItem: 8,
          items: [
            { question: 'I wish I ___ taller.', options: ['were', 'am'], correct: 0 },
            { question: 'I wish I ___ gone.', options: ['had', 'have'], correct: 0 },
            { question: 'I wish you ___ stop that.', options: ['would', 'will'], correct: 0 },
            { question: 'I ___ you get the job!', options: ['hope', 'wish'], correct: 0 },
            { question: 'If only I ___ his name.', options: ['remembered', 'remember'], correct: 0 },
            { question: "It's time we ___.", options: ['left', 'leave'], correct: 0 },
            { question: 'I wish I ___ fly.', options: ['could', 'can'], correct: 0 },
            { question: 'I wish I ___ said that. Oops.', options: ["hadn't", "didn't"], correct: 0 },
            { question: 'If only it ___ stop raining!', options: ['would', 'will'], correct: 0 },
            { question: 'I wish he ___ so loudly.', options: ["didn't chew", "doesn't chew"], correct: 0 },
          ],
          explanation: 'wish + past = now · wish + had done = then · wish + would = them · hope = real.',
        },
      ],
    },
  ],
  boss: {
    passPct: 80,
    exercises: [
      {
        id: 'm3l4-boss1',
        type: 'mcq',
        question: 'I wish weekends ___ three days long.',
        options: ['were', 'are'],
        correct: 0,
        explanation: 'Present wish → **were**.',
      },
      {
        id: 'm3l4-boss2',
        type: 'gap',
        before: 'I wish I',
        after: "your birthday — I'm so, so sorry.",
        hint: 'not / forget (past)',
        accepted: ["hadn't forgotten", 'had not forgotten'],
        explanation: 'Past regret → **hadn\'t forgotten**.',
      },
      {
        id: 'm3l4-boss3',
        type: 'mcq',
        question: 'I wish my flatmate ___ his dishes more than once a season.',
        options: ['would wash', 'washed'],
        correct: 0,
        explanation: 'Complaint about another person → **would wash**.',
      },
      {
        id: 'm3l4-boss4',
        type: 'mcq',
        question: 'We ___ you a safe flight and a soft landing!',
        options: ['wish', 'hope'],
        correct: 0,
        explanation: 'Fixed phrase: **wish somebody something**.',
      },
      {
        id: 'm3l4-boss5',
        type: 'mcq',
        question: 'I ___ the strike ends before our trip.',
        options: ['hope', 'wish'],
        correct: 0,
        explanation: 'Real possibility → **hope**.',
      },
      {
        id: 'm3l4-boss6',
        type: 'error-hunt',
        sentence: "It's high time you get a proper winter coat.",
        wrongIndex: 4,
        correction: 'got',
        explanation: '**It\'s high time + past form**: *time you got*.',
      },
      {
        id: 'm3l4-boss7',
        type: 'order',
        correct: 'If only I had checked the fuel gauge.',
        distractors: ['would', 'check'],
        explanation: 'Past regret → **had checked**.',
      },
      {
        id: 'm3l4-boss8',
        type: 'mcq',
        question: 'She wishes she ___ to the wedding — apparently it was legendary.',
        options: ['had gone', 'went'],
        correct: 0,
        explanation: 'Past regret → **had gone**.',
      },
      {
        id: 'm3l4-boss9',
        type: 'mcq',
        question: 'I wish I ___ help you, but my hands are tied.',
        options: ['could', 'can'],
        correct: 0,
        explanation: 'Unreal present ability → **could**.',
      },
      {
        id: 'm3l4-boss10',
        type: 'transform',
        source: 'It annoys me that you keep borrowing my charger.',
        keyword: 'wish',
        accepted: [
          "I wish you wouldn't keep borrowing my charger",
          'I wish you would stop borrowing my charger',
          "I wish you wouldn't borrow my charger",
        ],
        explanation: 'Complaint → **I wish you wouldn\'t keep borrowing my charger.**',
      },
      {
        id: 'm3l4-boss11',
        type: 'mcq',
        question: "It's time we ___ this lesson — the Gatekeeper is waiting.",
        options: ['finished', 'finish'],
        correct: 0,
        explanation: '**It\'s time + past**: *time we finished*. Go get that badge.',
      },
    ],
  },
};
