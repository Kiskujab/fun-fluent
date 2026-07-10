import type { Lesson } from '../../types';

export const m3l3: Lesson = {
  id: 'm3l3',
  title: 'Time-Crossed Worlds',
  subtitle: 'mixed conditionals & if-alternatives',
  minutes: 45,
  goals: [
    'Cross timelines with mixed conditionals',
    'Deploy even if, supposing, but for and otherwise',
    'Flip into formal inversion: Had I known…',
    'Sound like the C1 speaker you are becoming',
  ],
  cards: [
    {
      title: 'Mixed type 1: past cause → present result',
      body: `Real life doesn't stay in one time zone — neither do conditionals.

**If + past perfect → would + verb**: a past event with consequences NOW:

> If I **hadn't missed** that flight, I**'d be** in Rome right now. 🍝
> If you**'d gone** to bed earlier, you **wouldn't be** so tired today.

The condition is history; the result is this very moment.`,
      miniCheck: {
        id: 'm3l3-c1',
        type: 'gap',
        before: "If you'd gone to bed earlier, you",
        after: 'so tired now.',
        hint: 'not / be',
        accepted: ["wouldn't be", 'would not be'],
        explanation: 'Past condition, present result → **wouldn\'t be** (no *have*!).',
      },
    },
    {
      title: 'Mixed type 2: present cause → past result',
      body: `The mirror image. **If + past → would have + participle**: a general truth that explains a past event:

> If I **weren't** so clumsy, I **wouldn't have dropped** the cake.
> If he **weren't** afraid of heights, he **would have come** climbing with us.

The condition is a permanent trait (still true now); the result already happened.`,
      miniCheck: {
        id: 'm3l3-c2',
        type: 'mcq',
        question: 'If he ___ afraid of heights, he would have come climbing with us.',
        options: ["weren't", "isn't"],
        correct: 0,
        explanation: 'A present/permanent trait in an unreal world → **weren\'t** (past form = unreality).',
      },
    },
    {
      title: 'even if — the stubborn conditional',
      body: `**even if** = the condition makes no difference:

> **Even if** you paid me, I wouldn't wear that.
> **Even if** we run, we'll miss it. (so let's walk with dignity)

Note it takes the same tense logic as normal conditionals — first for real, second for unreal.`,
      miniCheck: {
        id: 'm3l3-c3',
        type: 'mcq',
        question: "___ you apologise, she won't forgive you this time.",
        options: ['Even if', 'Provided'],
        correct: 0,
        explanation: 'The apology changes nothing → **Even if**.',
      },
    },
    {
      title: 'supposing, what if & otherwise',
      body: `**Supposing / What if** open hypothetical questions:

> **Supposing** we missed the last ferry — what then?
> **What if** the ladder slips?

**otherwise** = "because if not":

> I set three alarms; **otherwise** I'd sleep till noon.

They all smuggle a conditional into a smaller package.`,
      miniCheck: {
        id: 'm3l3-c4',
        type: 'mcq',
        question: '___ we missed the last ferry — what would we do?',
        options: ['Supposing', 'Unless'],
        correct: 0,
        explanation: 'A hypothetical opener → **Supposing** (= imagine if).',
      },
    },
    {
      title: 'but for & without',
      body: `**But for + noun** = "if it hadn't been for" — very elegant, very C1:

> **But for** your warning, we'd have walked straight into the storm.
> **But for** the seatbelt, he'd have been seriously hurt.

**Without** works the same in conditionals:

> **Without** your help, we would have given up.`,
      miniCheck: {
        id: 'm3l3-c5',
        type: 'gap',
        before: '',
        after: "for the seatbelt, he'd have been seriously hurt.",
        hint: 'one word',
        accepted: ['but'],
        explanation: '**But for** + noun = if it hadn\'t been for.',
      },
    },
    {
      title: 'The formal flip: Had I known…',
      body: `In formal English, drop *if* and invert:

- **Had** I **known** → If I had known: *__Had I known__, I would have worn a tie.*
- **Should** you **need** → If you (should) need: *__Should you need__ anything, ring the bell.*
- **Were** she **to** resign → If she were to resign: *__Were she to resign__, chaos would follow.*

Three auxiliaries only — had, should, were. This is peak exam elegance, and you'll meet its cousins again in the Inversion lesson. 🎩`,
      miniCheck: {
        id: 'm3l3-c6',
        type: 'mcq',
        question: '___ you need anything during your stay, just ring the bell.',
        options: ['Should', 'Would'],
        correct: 0,
        explanation: 'Formal inversion of *if you need* → **Should you need**.',
      },
    },
    {
      title: 'Time-Crossed Worlds — the map',
      body: `The advanced conditional toolkit:

- **Mixed 1:** had done → would do NOW · **Mixed 2:** were → would have done THEN
- **even if** — makes no difference · **supposing / what if** — hypothetical openers
- **but for / without + noun** — elegant "if not for"
- **otherwise** — because if not
- **Had I / Should you / Were she to** — the formal flip

The Gatekeeper of this stage exists in several timelines at once. Good luck. 🌀`,
    },
  ],
  sets: [
    {
      title: 'Crossed Timelines',
      icon: '🔀',
      exercises: [
        {
          id: 'm3l3-a1',
          type: 'mcq',
          question: "If I'd taken that job in Oslo, I ___ fluent in Norwegian by now.",
          options: ['would be', 'would have been'],
          correct: 0,
          explanation: 'Past decision → present result: **would be** fluent *now*.',
        },
        {
          id: 'm3l3-a2',
          type: 'mcq',
          question: "If she ___ allergic to cats, she would have adopted all five kittens.",
          options: ["weren't", "hadn't been"],
          correct: 0,
          explanation: 'The allergy is a permanent (present) fact → **weren\'t** + past result.',
        },
        {
          id: 'm3l3-a3',
          type: 'gap',
          before: "If we hadn't spent everything in duty-free, we",
          after: 'a taxi now.',
          hint: 'could / afford',
          accepted: ['could afford'],
          explanation: 'Past spending → present poverty: **could afford** (present result).',
        },
        {
          id: 'm3l3-a4',
          type: 'mcq',
          question: "He'd still have his licence if he ___ so fast all the time.",
          options: ["didn't drive", "hadn't driven"],
          correct: 0,
          explanation: 'A general habit (still true) → past simple: **didn\'t drive**.',
        },
        {
          id: 'm3l3-a5',
          type: 'order',
          correct: 'If I had saved more, I would be retired by now.',
          distractors: ['will', 'save'],
          explanation: 'Mixed 1: past perfect condition → present result.',
        },
        {
          id: 'm3l3-a6',
          type: 'mcq',
          question: "If you weren't such a night owl, you ___ the sunrise this morning.",
          options: ['would have seen', 'would see'],
          correct: 0,
          explanation: 'Present trait → past result: **would have seen**.',
        },
        {
          id: 'm3l3-a7',
          type: 'error-hunt',
          sentence: "If I didn't miss the bus this morning, I would be at the meeting now.",
          wrongIndex: 2,
          correction: "hadn't",
          explanation: 'The missing happened in the past → past perfect: **If I hadn\'t missed…**',
        },
        {
          id: 'm3l3-a8',
          type: 'mcq',
          question: "We ___ lost now if you'd brought the map like I asked.",
          options: ["wouldn't be", "wouldn't have been"],
          correct: 0,
          explanation: 'Present result of a past failure → **wouldn\'t be** lost *now*.',
        },
        {
          id: 'm3l3-a9',
          type: 'transform',
          source: "She didn't study medicine, so she isn't a doctor today.",
          keyword: 'if',
          accepted: [
            'If she had studied medicine she would be a doctor today',
            'She would be a doctor today if she had studied medicine',
            'If she had studied medicine she would be a doctor now',
          ],
          explanation: 'Mixed 1: **If she had studied medicine, she would be a doctor today.**',
        },
      ],
    },
    {
      title: 'The Alternatives Bureau',
      icon: '🗂️',
      exercises: [
        {
          id: 'm3l3-b1',
          type: 'mcq',
          question: "___ you begged me, I wouldn't sing karaoke. Not even 'Bohemian Rhapsody'.",
          options: ['Even if', 'Provided that'],
          correct: 0,
          explanation: 'Begging changes nothing → **Even if**.',
        },
        {
          id: 'm3l3-b2',
          type: 'mcq',
          question: '___ that we lose tomorrow — do we still qualify for the semis?',
          options: ['Supposing', 'Unless'],
          correct: 0,
          explanation: 'Hypothetical scenario question → **Supposing**.',
        },
        {
          id: 'm3l3-b3',
          type: 'gap',
          before: 'But',
          after: "your warning, we'd have walked straight into the storm.",
          hint: 'one word',
          accepted: ['for'],
          explanation: '**But for** + noun = if it hadn\'t been for.',
        },
        {
          id: 'm3l3-b4',
          type: 'mcq',
          question: "I always write everything down — ___ I'd forget within minutes.",
          options: ['otherwise', 'unless'],
          correct: 0,
          explanation: '"Because if I didn\'t…" → **otherwise**.',
        },
        {
          id: 'm3l3-b5',
          type: 'mcq',
          question: 'You can camp in my field ___ you leave no rubbish behind.',
          options: ['on condition that', 'even if'],
          correct: 0,
          explanation: 'A strict requirement → **on condition that**.',
        },
        {
          id: 'm3l3-b6',
          type: 'order',
          correct: 'Without your help, we would have given up.',
          distractors: ['unless', 'helped'],
          explanation: '**Without + noun** hides a whole conditional.',
        },
        {
          id: 'm3l3-b7',
          type: 'mcq',
          question: "What ___ the ladder slips? Who's holding it?",
          options: ['if', 'unless'],
          correct: 0,
          explanation: 'Hypothetical worry → **What if…?**',
        },
        {
          id: 'm3l3-b8',
          type: 'error-hunt',
          sentence: 'Even you paid me double, I still wouldn’t do it.',
          wrongIndex: 0,
          correction: 'Even if',
          explanation: 'The conjunction is **even if** — *even* alone can\'t govern a clause.',
        },
        {
          id: 'm3l3-b9',
          type: 'transform',
          source: 'We only survived because the guide knew a shortcut.',
          keyword: 'but',
          accepted: [
            "But for the guide we wouldn't have survived",
            "But for the guide's shortcut we wouldn't have survived",
            "We wouldn't have survived but for the guide",
            'But for the guide we would not have survived',
          ],
          explanation: '**But for the guide, we wouldn\'t have survived.**',
        },
      ],
    },
    {
      title: 'The Formal Flip',
      icon: '🎩',
      exercises: [
        {
          id: 'm3l3-d1',
          type: 'mcq',
          question: '___ I known about the dress code, I would have worn a tie.',
          options: ['Had', 'Have'],
          correct: 0,
          explanation: 'Inverted third conditional → **Had I known** (= If I had known).',
        },
        {
          id: 'm3l3-d2',
          type: 'gap',
          before: '',
          after: 'you require assistance, our staff are available around the clock.',
          hint: 'formal inversion',
          accepted: ['should'],
          explanation: '**Should you require** = If you (should) require. Hotel-lobby English.',
        },
        {
          id: 'm3l3-d3',
          type: 'mcq',
          question: '___ the company to relocate, three hundred jobs would be at risk.',
          options: ['Were', 'Should'],
          correct: 0,
          explanation: '**Were + subject + to** = If the company were to relocate.',
        },
        {
          id: 'm3l3-d4',
          type: 'order',
          correct: 'Had we left earlier, we would have caught the train.',
          distractors: ['If', 'leave'],
          explanation: 'Drop *if*, invert: **Had we left…**',
        },
        {
          id: 'm3l3-d5',
          type: 'mcq',
          question: 'Should the alarm ___, proceed calmly to the nearest exit.',
          options: ['sound', 'sounds'],
          correct: 0,
          explanation: 'After inverted *should*: **base verb** — *Should the alarm sound…*',
        },
        {
          id: 'm3l3-d6',
          type: 'error-hunt',
          sentence: 'Had I have known, I would have called you.',
          wrongIndex: 2,
          correction: '– (Had I known)',
          explanation: 'One *have* too many: **Had I known** is complete.',
        },
        {
          id: 'm3l3-d7',
          type: 'mcq',
          question: "Which is the correct formal version of 'If she were to resign…'?",
          options: ['Were she to resign…', 'Should she resigned…'],
          correct: 0,
          explanation: '*were to* inverts cleanly: **Were she to resign…**',
        },
        {
          id: 'm3l3-d8',
          type: 'transform',
          source: 'If you had asked me, I would have lent you the car.',
          keyword: 'had',
          accepted: [
            'Had you asked me I would have lent you the car',
            'Had you asked I would have lent you the car',
          ],
          explanation: 'Formal flip → **Had you asked me, I would have lent you the car.**',
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm3l3-e1',
          type: 'speed',
          secondsPerItem: 8,
          items: [
            { question: 'Had I known, I ___ have come.', options: ['would', 'will'], correct: 0 },
            { question: "If I weren't shy, I ___ have spoken up.", options: ['would', 'will'], correct: 0 },
            { question: '___ you need help, just ask.', options: ['Should', 'Would'], correct: 0 },
            { question: "But ___ the rain, we'd have won.", options: ['for', 'of'], correct: 0 },
            { question: "Even ___ you run, you'll miss it.", options: ['if', 'though'], correct: 0 },
            { question: "If I'd eaten, I ___ be hungry now.", options: ["wouldn't", "won't"], correct: 0 },
            { question: '___ we to fail, who pays?', options: ['Were', 'Was'], correct: 0 },
            { question: "I set alarms; ___ I'd sleep till noon.", options: ['otherwise', 'unless'], correct: 0 },
            { question: 'What ___ nobody comes?', options: ['if', 'unless'], correct: 0 },
            { question: '___ he to apologise, she might listen.', options: ['Were', 'Should'], correct: 0 },
          ],
          explanation: 'Mixed = cross the timelines · but for = if not for · Had/Should/Were = the formal flip.',
        },
      ],
    },
  ],
  boss: {
    passPct: 80,
    exercises: [
      {
        id: 'm3l3-boss1',
        type: 'mcq',
        question: "If we'd booked earlier, we ___ in the nice hotel right now.",
        options: ['would be', 'would have been'],
        correct: 0,
        explanation: 'Past mistake → present result: **would be**.',
      },
      {
        id: 'm3l3-boss2',
        type: 'mcq',
        question: 'If she ___ so stubborn, she would have accepted the refund.',
        options: ["weren't", "isn't"],
        correct: 0,
        explanation: 'Permanent trait → **weren\'t** + past result.',
      },
      {
        id: 'm3l3-boss3',
        type: 'gap',
        before: 'Had they',
        after: 'the forecast, they would never have set out.',
        hint: 'check',
        accepted: ['checked'],
        explanation: 'Inverted conditional: **Had they checked…**',
      },
      {
        id: 'm3l3-boss4',
        type: 'mcq',
        question: '___ you change your mind, my offer still stands.',
        options: ['Should', 'Were'],
        correct: 0,
        explanation: 'Formal "if you change your mind" → **Should you change…**',
      },
      {
        id: 'm3l3-boss5',
        type: 'mcq',
        question: "Even if you ___ me, I wouldn't tell you the ending.",
        options: ['bribed', 'bribe'],
        correct: 0,
        explanation: 'Unreal scenario → second conditional past form: **bribed**.',
      },
      {
        id: 'm3l3-boss6',
        type: 'order',
        correct: 'But for the goalkeeper, we would have lost badly.',
        distractors: ['unless', 'save'],
        explanation: '**But for + noun** = if it hadn\'t been for him.',
      },
      {
        id: 'm3l3-boss7',
        type: 'error-hunt',
        sentence: "If I hadn't drink that fourth coffee, I would be asleep by now.",
        wrongIndex: 3,
        correction: 'drunk',
        explanation: 'Past perfect needs the participle: **hadn\'t drunk**.',
      },
      {
        id: 'm3l3-boss8',
        type: 'mcq',
        question: 'Supposing the buyer ___ out at the last minute — do we have a plan B?',
        options: ['pulled', 'will pull'],
        correct: 0,
        explanation: '*Supposing* + past for the hypothetical → **pulled**.',
      },
      {
        id: 'm3l3-boss9',
        type: 'mcq',
        question: "We'd still be friends if you ___ my secret to the whole class.",
        options: ["hadn't told", "didn't tell"],
        correct: 0,
        explanation: 'Past betrayal → present consequence: **hadn\'t told** + would be.',
      },
      {
        id: 'm3l3-boss10',
        type: 'transform',
        source: 'If you should need anything, call this number.',
        keyword: 'should',
        accepted: [
          'Should you need anything call this number',
          'Should you need anything please call this number',
        ],
        explanation: 'Formal flip → **Should you need anything, call this number.**',
      },
      {
        id: 'm3l3-boss11',
        type: 'mcq',
        question: "If I ___ you — and thank goodness I'm not — I'd delete that post immediately.",
        options: ['were', 'had been'],
        correct: 0,
        explanation: 'Unreal present identity → **were**.',
      },
    ],
  },
};
