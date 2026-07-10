import type { Lesson } from '../../types';

export const m3l2: Lesson = {
  id: 'm3l2',
  title: 'Parallel Universes',
  subtitle: 'second & third conditionals',
  minutes: 40,
  goals: [
    'Imagine unreal presents with the second conditional',
    'Rewrite unreal pasts with the third conditional',
    'Choose correctly between first and second',
    'Use were, could and might like a C1 speaker',
  ],
  cards: [
    {
      title: 'Second conditional — the dream machine',
      body: `**If + past, would + verb** — for situations that are *imaginary or unlikely* NOW:

> If I **won** the lottery, I**'d buy** a lighthouse.
> If we **lived** by the sea, I**'d swim** every morning. (we don't — sadly)

The past tense here isn't about time — it's about **distance from reality**. English uses "past" as a fiction marker. Same trick you saw in *I'd rather you didn't*.`,
      miniCheck: {
        id: 'm3l2-c1',
        type: 'mcq',
        question: 'If I ___ a tail, I would wag it right now.',
        options: ['had', 'have'],
        correct: 0,
        explanation: 'Pure fantasy → past form: **If I had a tail…**',
      },
    },
    {
      title: 'If I were you…',
      body: `In careful (and exam) English, **were** replaces *was* for all persons in the if-clause:

> If she **were** taller, she'd play centre.
> If I **were** you, I'd take the job. (the classic advice formula)

*was* is fine in casual speech — but **If I were you** is fixed. Nobody says ~~If I was you~~ in an exam and survives.`,
      miniCheck: {
        id: 'm3l2-c2',
        type: 'gap',
        before: 'If I',
        after: "you, I'd apologise before she finds out herself.",
        hint: 'be',
        accepted: ['were', 'was'],
        explanation: 'The advice formula → **If I were you** (the polished form).',
      },
    },
    {
      title: 'First or second? A reality check',
      body: `Same event — your choice of conditional shows how likely YOU think it is:

> If I **win** the match tomorrow, I**'ll celebrate**. (I'm seeded first — realistic 💪)
> If I **won** the match tomorrow, I**'d celebrate**. (I'm ranked 407th — dreaming 💭)

Both are grammatical. The grammar broadcasts your confidence.`,
      miniCheck: {
        id: 'm3l2-c3',
        type: 'mcq',
        question: 'Which speaker thinks the invitation is actually coming? ',
        options: ['If they invite me, I\'ll go.', 'If they invited me, I\'d go.'],
        correct: 0,
        explanation: 'First conditional = real possibility; second = probably not happening.',
      },
    },
    {
      title: 'Third conditional — rewriting history',
      body: `**If + past perfect, would have + participle** — for unreal PAST situations. The event is over; you're editing the replay:

> If you**'d told** me earlier, I **would have helped**.
> If she **hadn't missed** the bus, she **wouldn't have met** him. 💞

Nothing can change now — that's the whole point. It's the grammar of regret, relief and what-ifs.`,
      miniCheck: {
        id: 'm3l2-c4',
        type: 'gap',
        before: 'If you',
        after: 'me earlier, I would have saved you a seat.',
        hint: 'tell',
        accepted: ['had told', "'d told"],
        explanation: 'Unreal past condition → past perfect: **If you had told me…**',
      },
    },
    {
      title: 'could & might in the result',
      body: `*would* isn't the only resident of result-land:

- **could** = would be able to: *If I had a car, I **could** drive you.*
- **might** = would perhaps: *If we left now, we **might** still catch it.*
- Third conditional versions: *could have / might have done*:

> If the keeper had dived left, they **might have won**.`,
      miniCheck: {
        id: 'm3l2-c5',
        type: 'mcq',
        question: 'If I spoke Japanese, I ___ apply for the Tokyo posting.',
        options: ['could', 'can'],
        correct: 0,
        explanation: 'Unreal present ability → **could** (= would be able to).',
      },
    },
    {
      title: 'The no-would zone',
      body: `The most common conditional crime at B2: putting **would** in the if-clause.

> ~~If I would have more time~~ → If I **had** more time…
> ~~If you would have asked~~ → If you **had asked**…

**would lives in the result clause only.** The if-clause speaks past (or past perfect) — never *would*.

One exception you already know: polite requests like *If you would just sign here…* — but that's a request, not a conditional.`,
      miniCheck: {
        id: 'm3l2-c6',
        type: 'error-hunt',
        sentence: 'If I would know the answer, I would tell you.',
        wrongIndex: 2,
        correction: 'knew',
        explanation: 'No *would* in the if-clause: **If I knew the answer…**',
      },
    },
    {
      title: 'Parallel Universes — the map',
      body: `Your multiverse passport:

- **Second:** if + past → would + verb — *unreal NOW*: If I had wings, I'd fly.
- **Third:** if + past perfect → would have + participle — *unreal THEN*: If I'd known, I'd have come.
- **were** beats *was* in style · **could/might** spice up results
- **would** never enters the if-clause 🚫

Next stop: universes where the timelines cross. But first — the Gatekeeper of what-never-was. 🌀`,
    },
  ],
  sets: [
    {
      title: 'The Dream Machine',
      icon: '💭',
      exercises: [
        {
          id: 'm3l2-a1',
          type: 'mcq',
          question: 'If I ___ the lottery, I would buy this whole street.',
          options: ['won', 'win'],
          correct: 0,
          explanation: 'Unreal present/future → past form in the if-clause.',
        },
        {
          id: 'm3l2-a2',
          type: 'gap',
          before: 'If we',
          after: 'by the sea, I would swim before work every day.',
          hint: 'live',
          accepted: ['lived'],
          explanation: 'Imaginary situation → **lived**.',
        },
        {
          id: 'm3l2-a3',
          type: 'mcq',
          question: 'What ___ if you could be invisible for a day?',
          options: ['would you do', 'will you do'],
          correct: 0,
          explanation: 'Hypothetical question → **would you do**.',
        },
        {
          id: 'm3l2-a4',
          type: 'mcq',
          question: 'If she ___ here, she would know exactly what to say.',
          options: ['were', 'is'],
          correct: 0,
          explanation: 'Unreal present with *be* → **were** (for every person).',
        },
        {
          id: 'm3l2-a5',
          type: 'order',
          correct: 'If I were you, I would take the job.',
          distractors: ['will', 'am'],
          explanation: 'The advice formula: **If I were you, I\'d…**',
        },
        {
          id: 'm3l2-a6',
          type: 'error-hunt',
          sentence: "If I would have a garden, I'd grow tomatoes.",
          wrongIndex: 2,
          correction: 'had',
          explanation: 'No *would* in the if-clause: **If I had a garden…**',
        },
        {
          id: 'm3l2-a7',
          type: 'mcq',
          question: "I don't have a drill, but if I ___, you could borrow it.",
          options: ['did', 'do'],
          correct: 0,
          explanation: 'Unreal present, echoing *have* → **if I did**.',
        },
        {
          id: 'm3l2-a8',
          type: 'mcq',
          question: 'If dogs ___ talk, mine would never stop complaining.',
          options: ['could', 'can'],
          correct: 0,
          explanation: 'Unreal ability → **could talk**.',
        },
        {
          id: 'm3l2-a9',
          type: 'transform',
          source: "I don't know her number, so I can't call her.",
          keyword: 'if',
          accepted: [
            'If I knew her number I could call her',
            'If I knew her number I would call her',
            'I could call her if I knew her number',
            'I would call her if I knew her number',
          ],
          explanation: 'Real negative → unreal positive: **If I knew her number, I could call her.**',
        },
      ],
    },
    {
      title: 'Rewriting History',
      icon: '⏪',
      exercises: [
        {
          id: 'm3l2-b1',
          type: 'mcq',
          question: 'If you ___ me earlier, I would have helped you move.',
          options: ['had told', 'told'],
          correct: 0,
          explanation: 'Unreal past → past perfect in the if-clause.',
        },
        {
          id: 'm3l2-b2',
          type: 'gap',
          before: "If she hadn't missed the bus, she",
          after: 'her future husband. Fate works in mysterious timetables.',
          hint: 'never / meet',
          accepted: ['would never have met', "'d never have met", 'would have never met'],
          explanation: 'Unreal past result → **would (never) have met**.',
        },
        {
          id: 'm3l2-b3',
          type: 'mcq',
          question: 'We ___ the flight if the taxi had come on time.',
          options: ["wouldn't have missed", "wouldn't miss"],
          correct: 0,
          explanation: 'Past result of a past condition → **wouldn\'t have missed**.',
        },
        {
          id: 'm3l2-b4',
          type: 'error-hunt',
          sentence: 'If you would have asked, I would have said yes.',
          wrongIndex: 2,
          correction: 'had',
          explanation: 'The if-clause takes past perfect, not *would have*: **If you had asked…**',
        },
        {
          id: 'm3l2-b5',
          type: 'order',
          correct: 'If I had known, I would have come earlier.',
          distractors: ['would', 'knew'],
          explanation: 'Third conditional skeleton: had known → would have come.',
        },
        {
          id: 'm3l2-b6',
          type: 'mcq',
          question: 'If the keeper had dived left, they ___ won the cup.',
          options: ['might have', 'might'],
          correct: 0,
          explanation: 'Perhaps-past result → **might have won**.',
        },
        {
          id: 'm3l2-b7',
          type: 'gap',
          before: 'If I',
          after: "so busy last week, I would have visited you in hospital.",
          hint: 'not / be',
          accepted: ["hadn't been", 'had not been'],
          explanation: 'Negative past perfect → **hadn\'t been**.',
        },
        {
          id: 'm3l2-b8',
          type: 'mcq',
          question: "___ the map, we wouldn't have spent two hours in that roundabout.",
          options: ['If you had checked', 'If you checked'],
          correct: 0,
          explanation: 'Past event → past perfect: **If you had checked**.',
        },
        {
          id: 'm3l2-b9',
          type: 'transform',
          source: "I didn't set an alarm, so I overslept.",
          keyword: 'if',
          accepted: [
            "If I had set an alarm I wouldn't have overslept",
            'If I had set an alarm I would not have overslept',
            "I wouldn't have overslept if I had set an alarm",
          ],
          explanation: 'Flip both halves: **If I had set an alarm, I wouldn\'t have overslept.**',
        },
      ],
    },
    {
      title: 'Which Universe?',
      icon: '🌀',
      exercises: [
        {
          id: 'm3l2-d1',
          type: 'sort',
          prompt: 'Real plan or pure fantasy?',
          buckets: ['Real (first) 🌍', 'Fantasy (second) 💫'],
          items: [
            { text: "if it rains, we'll cancel", bucket: 0 },
            { text: "if I were a cat, I'd nap all day", bucket: 1 },
            { text: "if you ask him, he'll say yes", bucket: 0 },
            { text: "if I owned a jet, I'd visit weekly", bucket: 1 },
            { text: "if she calls, I'll tell her", bucket: 0 },
            { text: "if pigs flew, I'd duck", bucket: 1 },
          ],
          explanation: 'Present + will = real; past + would = imaginary. The verb forms are the passport stamps.',
        },
        {
          id: 'm3l2-d2',
          type: 'mcq',
          question: "There's a tiny chance of tickets. If I ___ some, I'll take you.",
          options: ['get', 'got'],
          correct: 0,
          explanation: 'The speaker treats it as a real chance → first conditional.',
        },
        {
          id: 'm3l2-d3',
          type: 'mcq',
          question: "He never lends anyone his bike. But if he ___ it to me, I'd be careful.",
          options: ['lent', 'lends'],
          correct: 0,
          explanation: 'Contrary to his known behaviour → unreal → **lent**.',
        },
        {
          id: 'm3l2-d4',
          type: 'mcq',
          question: 'If I ___ in charge, meetings would be 15 minutes. Maximum.',
          options: ['were', 'am'],
          correct: 0,
          explanation: 'You\'re not in charge (yet) → **were**.',
        },
        {
          id: 'm3l2-d5',
          type: 'mcq',
          question: "If we ___ now, we might still catch the trailers.",
          options: ['left', 'had left'],
          correct: 0,
          explanation: 'Unreal-ish present decision → past simple + **might** result.',
        },
        {
          id: 'm3l2-d6',
          type: 'error-hunt',
          sentence: 'If he was here now, he will fix it in five minutes.',
          wrongIndex: 6,
          correction: 'would',
          explanation: 'Unreal present → **would fix**, not *will*. (And stylish speakers say *were*.)',
        },
        {
          id: 'm3l2-d7',
          type: 'mcq',
          question: 'How ___ if a stranger paid for your coffee?',
          options: ['would you react', 'will you react'],
          correct: 0,
          explanation: 'Hypothetical scenario → **would**.',
        },
        {
          id: 'm3l2-d8',
          type: 'transform',
          source: "She isn't rich, so she doesn't own an island.",
          keyword: 'were',
          accepted: [
            'If she were rich she would own an island',
            'If she were rich she might own an island',
            'She would own an island if she were rich',
          ],
          explanation: 'Unreal present → **If she were rich, she would own an island.**',
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm3l2-e1',
          type: 'speed',
          secondsPerItem: 8,
          items: [
            { question: "If I ___ you, I'd say yes.", options: ['were', 'am'], correct: 0 },
            { question: 'If she asked, I ___ help.', options: ['would', 'will'], correct: 0 },
            { question: "If you ___ told me, I'd have come!", options: ['had', 'have'], correct: 0 },
            { question: 'If I had wings, I ___ fly home.', options: ['could', 'can'], correct: 0 },
            { question: "We'd have won if he ___ scored.", options: ['had', 'has'], correct: 0 },
            { question: "If it ___ tomorrow, we'll cancel.", options: ['rains', 'rained'], correct: 0 },
            { question: 'If I ___ rich… one day, maybe!', options: ['were', 'would be'], correct: 0 },
            { question: "I would ___ helped if I'd known.", options: ['have', 'had'], correct: 0 },
            { question: 'If dogs could talk, they ___ order pizza.', options: ['would', 'will'], correct: 0 },
            { question: "If you ___ asked, she'd have said yes.", options: ['had', 'would have'], correct: 0 },
          ],
          explanation: 'second = past + would · third = had done + would have done · would never sits in the if-clause.',
        },
      ],
    },
  ],
  boss: {
    passPct: 80,
    exercises: [
      {
        id: 'm3l2-boss1',
        type: 'mcq',
        question: 'If I ___ your memory for names, I would rule this town.',
        options: ['had', 'have'],
        correct: 0,
        explanation: 'Unreal present → **had**.',
      },
      {
        id: 'm3l2-boss2',
        type: 'gap',
        before: 'If he',
        after: "the deadline, the whole launch would have failed.",
        hint: 'miss (unreal past)',
        accepted: ['had missed', "'d missed"],
        explanation: 'Unreal past → past perfect: **had missed**.',
      },
      {
        id: 'm3l2-boss3',
        type: 'mcq',
        question: 'If I were you, I ___ that email again before sending.',
        options: ['would read', 'will read'],
        correct: 0,
        explanation: 'Advice formula → **would read**.',
      },
      {
        id: 'm3l2-boss4',
        type: 'error-hunt',
        sentence: 'If we would have left earlier, we would have caught it.',
        wrongIndex: 2,
        correction: 'had',
        explanation: 'If-clause = past perfect: **If we had left earlier…**',
      },
      {
        id: 'm3l2-boss5',
        type: 'mcq',
        question: 'She ___ the audition if she hadn\'t frozen on the high note.',
        options: ['would have passed', 'would pass'],
        correct: 0,
        explanation: 'Unreal past result → **would have passed**.',
      },
      {
        id: 'm3l2-boss6',
        type: 'order',
        correct: 'What would you do if you saw a bear?',
        distractors: ['will', 'see'],
        explanation: 'Hypothetical question: would + if + past.',
      },
      {
        id: 'm3l2-boss7',
        type: 'mcq',
        question: 'If the hotel ___ a pool, I might actually enjoy this conference.',
        options: ['had', 'has'],
        correct: 0,
        explanation: 'Unreal present (it clearly doesn\'t) → **had**.',
      },
      {
        id: 'm3l2-boss8',
        type: 'gap',
        before: 'If you had studied archaeology, you',
        after: 'in Egypt right now — imagine that.',
        hint: 'could / work? (careful with time!)',
        accepted: ['could be working', 'might be working', 'would be working'],
        explanation: 'Past condition, present result — a sneak preview of MIXED conditionals: **could be working**.',
      },
      {
        id: 'm3l2-boss9',
        type: 'mcq',
        question: "If they ___ us a bigger budget, we'd have hired two more people.",
        options: ['had given', 'gave'],
        correct: 0,
        explanation: 'Unreal past → **had given**.',
      },
      {
        id: 'm3l2-boss10',
        type: 'transform',
        source: "He didn't wear a helmet, so he got hurt.",
        keyword: 'worn',
        accepted: [
          "If he had worn a helmet he wouldn't have got hurt",
          'If he had worn a helmet he would not have got hurt',
          "If he had worn a helmet he wouldn't have gotten hurt",
          "He wouldn't have got hurt if he had worn a helmet",
        ],
        explanation: 'Third conditional flip: **If he had worn a helmet, he wouldn\'t have got hurt.**',
      },
      {
        id: 'm3l2-boss11',
        type: 'mcq',
        question: 'Honestly, if I ___ how hard this climb was, I ___ anyway.',
        options: ["had known / would have come", 'knew / would come'],
        correct: 0,
        explanation: 'Past decision about a past event → third conditional on both sides. (And we\'re glad you came.)',
      },
    ],
  },
};
