import type { Lesson } from '../../types';

export const lesson04: Lesson = {
  id: 'm1l4',
  title: 'The Grand Tense Tour',
  subtitle: 'All 12 tenses on one map',
  minutes: 45,
  goals: [
    'See the 12-tense system as one simple 3×4 grid',
    'Read the meaning of any tense from its aspect',
    'Untangle the classic cross-tense traps',
    'Name and produce all 12 tenses at speed',
  ],
  cards: [
    {
      title: 'The grid: 3 times × 4 aspects',
      body: `Here's the secret nobody tells you: English doesn't have 12 random tenses. It has **3 times** (past · present · future) × **4 aspects** (simple · continuous · perfect · perfect continuous) = one tidy 12-cell grid.

Learn what each *aspect* means once, and you can build **any** tense on demand:

> time gives you *when* — aspect gives you *how you look at it*.

That's the whole tour. Everything else is detail.`,
    },
    {
      title: 'The four aspects, one idea each',
      body: `- **Simple** 🎯 — the whole event as a fact: *she sings · she sang · she'll sing*
- **Continuous** 🌊 (\`be + -ing\`) — in progress, temporary, unfinished: *she's singing · she was singing · she'll be singing*
- **Perfect** 🔗 (\`have + participle\`) — earlier than the viewpoint, still relevant: *she's sung · she had sung · she'll have sung*
- **Perfect continuous** ⏳ (\`have been + -ing\`) — duration running up to the viewpoint: *she's been singing · she had been singing · she'll have been singing*`,
      tip: 'Continuous = zoom in mid-action. Perfect = look back. Perfect continuous = look back at a running clock.',
      miniCheck: {
        id: 'm1l4-c2',
        type: 'mcq',
        question: "Which aspect says 'duration up to a viewpoint'?",
        options: ['perfect continuous', 'simple', 'continuous'],
        correct: 0,
        explanation: 'The perfect continuous is the "running clock" aspect: *I\'ve been waiting for an hour.*',
      },
    },
    {
      title: 'Row 1 — the Present four',
      body: `One verb, four presents:

> I **eat** breakfast at seven. — habit/fact
> I**'m eating** — can I call you back? — in progress now
> I**'ve eaten** already, thanks. — done, relevant now
> I**'ve been eating** garlic all day — keep your distance. — activity up to now

You met this family in Lesson 1 — now you can see it's just Row 1 of the grid.`,
      miniCheck: {
        id: 'm1l4-c3',
        type: 'gap',
        before: 'You',
        after: "onions, haven't you? Your eyes are streaming!",
        hint: 'chop',
        accepted: ['have been chopping', "'ve been chopping"],
        explanation: 'Evidence of a recent activity → present perfect continuous.',
      },
    },
    {
      title: 'Row 2 — the Past four',
      body: `Shift everything one step back:

> I **ate** at seven. — completed event
> I **was eating** when you rang. — in progress at that moment
> I **had eaten** before the film. — earlier than a past point
> I **had been eating** for an hour when the waiter brought the bill. — running clock before a past point

The past row is the *storytelling* row — Lesson 2's whole toolkit in one line each.`,
      miniCheck: {
        id: 'm1l4-c4',
        type: 'mcq',
        question: "Which tense is 'She had been rehearsing'?",
        options: ['past perfect continuous', 'present perfect continuous', 'past continuous'],
        correct: 0,
        explanation: '`had` = past, `been + -ing` = perfect continuous → past perfect continuous.',
      },
    },
    {
      title: 'Row 3 — the Future four',
      body: `And one step forward:

> I**'ll eat** later. — decision/fact about the future
> I**'ll be eating** at eight — don't call. — in progress at a future moment
> I**'ll have eaten** by nine. — complete before a future point
> By nine, I**'ll have been eating** for two hours. — running clock at a future point (a big dinner, clearly)

Notice the pattern never changes: \`will\` + exactly the same four aspects.`,
      miniCheck: {
        id: 'm1l4-c5',
        type: 'mcq',
        question: 'Which sentence uses the future perfect continuous?',
        options: [
          "By May, I'll have been teaching for a decade.",
          "By May, I'll have taught a thousand lessons.",
          "In May, I'll be teaching in Rome.",
        ],
        correct: 0,
        explanation: '`will have been + -ing` = the running clock measured at a future point.',
      },
    },
    {
      title: 'Cross-trap #1: present perfect vs past simple',
      body: `The most common tense mistake at B2, in one table:

- **Unfinished time** (today, this week, this year, ever, so far) → **present perfect**
> I**'ve drunk** four coffees today. ☕

- **Finished time** (yesterday, last week, in 2020, ago, when I was six) → **past simple**
> I **drank** four coffees yesterday.

And people who are no longer alive get the past simple — their "time" is finished:

> Shakespeare **wrote** 37 plays. — not ~~has written~~`,
      miniCheck: {
        id: 'm1l4-c6',
        type: 'mcq',
        question: 'Which speaker still works at the company? A: "I worked there for years." B: "I\'ve worked there for years."',
        options: ['Speaker B', 'Speaker A'],
        correct: 0,
        explanation: 'The present perfect bridges to now → B is still there. Past simple = chapter closed.',
      },
    },
    {
      title: 'Cross-trap #2: one story, different lenses',
      body: `Watch how the tense alone changes the plot:

> When we arrived, the film **started**. 🟢 — perfect timing, it began *as* we sat down
> When we arrived, the film **had started**. 🔴 — we missed the beginning

> I**'ve painted** the kitchen. ✅ — job done, admire it
> I**'ve been painting** the kitchen. 🖌️ — that's why I look like this; possibly unfinished

> She **wrote** a novel in 2020. — finished it ✍️
> She **was writing** a novel in 2020. — mid-project that year; who knows how it ended`,
    },
    {
      title: 'Your 12-tense passport',
      body: `The full grid, stamped and ready:

- **Present:** eat · am eating · have eaten · have been eating
- **Past:** ate · was eating · had eaten · had been eating
- **Future:** will eat · will be eating · will have eaten · will have been eating

3 times × 4 aspects. You can now *derive* any tense instead of memorising it.

The Gatekeeper ahead is the toughest so far — it mixes all twelve. Deep breath. 🧗`,
    },
  ],
  sets: [
    {
      title: 'Name That Tense',
      icon: '🏷️',
      exercises: [
        {
          id: 'm1l4-a1',
          type: 'match',
          prompt: 'Match the present row',
          pairs: [
            ['I eat', 'present simple'],
            ['I am eating', 'present continuous'],
            ['I have eaten', 'present perfect'],
            ['I have been eating', 'present perfect continuous'],
          ],
          explanation: 'Row 1 of the grid: same time, four aspects.',
        },
        {
          id: 'm1l4-a2',
          type: 'match',
          prompt: 'Match the past row',
          pairs: [
            ['I walked', 'past simple'],
            ['I was walking', 'past continuous'],
            ['I had walked', 'past perfect'],
            ['I had been walking', 'past perfect continuous'],
          ],
          explanation: 'Row 2: shift the auxiliaries back — was, had, had been.',
        },
        {
          id: 'm1l4-a3',
          type: 'match',
          prompt: 'Match the future row',
          pairs: [
            ['I will call', 'future simple'],
            ['I will be calling', 'future continuous'],
            ['I will have called', 'future perfect'],
            ['I will have been calling', 'future perfect continuous'],
          ],
          explanation: 'Row 3: will + the same four aspects. The pattern never changes.',
        },
        {
          id: 'm1l4-a4',
          type: 'sort',
          prompt: 'Sort by aspect',
          buckets: ['perfect 🔗', 'continuous 🌊', 'simple 🎯'],
          items: [
            { text: 'had gone', bucket: 0 },
            { text: 'was going', bucket: 1 },
            { text: 'goes', bucket: 2 },
            { text: 'will have gone', bucket: 0 },
            { text: 'are going', bucket: 1 },
            { text: 'went', bucket: 2 },
          ],
          explanation: 'Spot the machinery: have + participle = perfect · be + -ing = continuous · bare verb = simple.',
        },
        {
          id: 'm1l4-a5',
          type: 'error-hunt',
          sentence: 'She has went to the bank already.',
          wrongIndex: 2,
          correction: 'gone',
          explanation: 'Perfect aspect needs the **past participle**: has *gone*. (*went* is past simple.)',
        },
        {
          id: 'm1l4-a6',
          type: 'order',
          correct: 'Have you ever eaten a whole cake alone?',
          distractors: ['did', 'ate'],
          explanation: 'Life experience question → present perfect: *Have you ever eaten…?* (No judgement.)',
        },
        {
          id: 'm1l4-a7',
          type: 'mcq',
          question: "Which tense is 'we'd been driving' short for?",
          options: ['past perfect continuous', 'future perfect', 'past continuous'],
          correct: 0,
          explanation: "'d = had → had been driving = past perfect continuous.",
        },
        {
          id: 'm1l4-a8',
          type: 'error-hunt',
          sentence: 'By next Friday I will finished the whole project.',
          wrongIndex: 4,
          correction: 'will have finished',
          explanation: '`By + future point` → future perfect: **will have finished**.',
        },
      ],
    },
    {
      title: 'Timeline Detective',
      icon: '🧭',
      exercises: [
        {
          id: 'm1l4-b1',
          type: 'mcq',
          question: "'When we arrived, the film started.' — What really happened?",
          options: ['The film began just as we got there.', 'We missed the beginning.'],
          correct: 0,
          explanation: 'Past simple + past simple = events in sequence: arrival, then start.',
        },
        {
          id: 'm1l4-b2',
          type: 'mcq',
          question: "'When we arrived, the film had started.' — And now?",
          options: ['We missed the beginning.', 'The film began just as we got there.'],
          correct: 0,
          explanation: 'Past perfect = the start happened *before* the arrival. One auxiliary, whole new plot.',
        },
        {
          id: 'm1l4-b3',
          type: 'mcq',
          question: "'I've been painting the kitchen.' — What do we know for sure?",
          options: ['The activity is the point; it may not be finished.', 'The kitchen is definitely finished.'],
          correct: 0,
          explanation: 'Perfect continuous highlights the *activity* (and the paint in your hair), not completion.',
        },
        {
          id: 'm1l4-b4',
          type: 'mcq',
          question: "'I've painted the kitchen.' — And here?",
          options: ['The job is done. ✅', "I'm covered in paint but not done."],
          correct: 0,
          explanation: 'Perfect simple presents the *completed result*.',
        },
        {
          id: 'm1l4-b5',
          type: 'mcq',
          question: "'By 8 p.m., we'll have eaten.' — So at 8 p.m.…",
          options: ['dinner will already be finished', "we'll be mid-dinner"],
          correct: 0,
          explanation: 'Future perfect = complete *before* the time given.',
        },
        {
          id: 'm1l4-b6',
          type: 'mcq',
          question: "'At 8 p.m., we'll be eating.' — And in this one?",
          options: ["we'll be mid-dinner", 'dinner will already be finished'],
          correct: 0,
          explanation: 'Future continuous = in progress *at* that time. Call at nine.',
        },
        {
          id: 'm1l4-b7',
          type: 'mcq',
          question: "'She wrote a novel in 2020' vs 'She was writing a novel in 2020' — which novel definitely got finished?",
          options: ['wrote', 'was writing'],
          correct: 0,
          explanation: 'Simple = the whole completed event. Continuous = mid-process, ending unknown.',
        },
        {
          id: 'm1l4-b8',
          type: 'mcq',
          question: "'I had been waiting for an hour when the bus came.' — How long was the wait when the bus arrived?",
          options: ['exactly an hour', 'unknown, but probably short'],
          correct: 0,
          explanation: 'Past perfect continuous measures the clock *up to* that past moment: 60 grumpy minutes.',
        },
        {
          id: 'm1l4-b9',
          type: 'mcq',
          question: 'Which sentence implies the speaker is STILL living there?',
          options: ["I've been living in Oslo for a year.", 'I lived in Oslo for a year.'],
          correct: 0,
          explanation: 'The perfect bridges to now; the past simple closes the chapter.',
        },
      ],
    },
    {
      title: 'The Full Grid',
      icon: '🧮',
      exercises: [
        {
          id: 'm1l4-d1',
          type: 'gap',
          before: 'Owls',
          after: 'at night — that\'s just what owls do.',
          hint: 'hunt',
          accepted: ['hunt'],
          explanation: 'General fact → present simple.',
        },
        {
          id: 'm1l4-d2',
          type: 'gap',
          before: 'Sorry, can I call you back? I',
          after: 'right now.',
          hint: 'drive',
          accepted: ['am driving', "'m driving"],
          explanation: 'In progress this second → present continuous.',
        },
        {
          id: 'm1l4-d3',
          type: 'gap',
          before: 'She',
          after: 'three medals so far this season.',
          hint: 'win',
          accepted: ['has won', "'s won"],
          explanation: '`so far` = unfinished period → present perfect.',
        },
        {
          id: 'm1l4-d4',
          type: 'gap',
          before: 'Beethoven',
          after: 'nine symphonies.',
          hint: 'compose',
          accepted: ['composed'],
          explanation: 'A finished life → past simple. (No tenth is coming.)',
        },
        {
          id: 'm1l4-d5',
          type: 'gap',
          before: 'At midnight, I',
          after: 'for the exam. Send help.',
          hint: 'still / revise',
          accepted: ['was still revising'],
          explanation: 'In progress at a past moment → past continuous, with `still` after *was*.',
        },
        {
          id: 'm1l4-d6',
          type: 'gap',
          before: 'The thief',
          after: 'by the time the police arrived.',
          hint: 'already / escape',
          accepted: ['had already escaped', 'had escaped'],
          explanation: 'Earlier than a past moment → past perfect.',
        },
        {
          id: 'm1l4-d7',
          type: 'gap',
          before: 'We',
          after: 'for two hours when the tickets sold out.',
          hint: 'queue',
          accepted: ['had been queueing', 'had been queuing'],
          explanation: 'Running clock before a past event → past perfect continuous.',
        },
        {
          id: 'm1l4-d8',
          type: 'gap',
          before: 'Relax — I',
          after: "your plants while you're away.",
          hint: 'water',
          accepted: ['will water', "'ll water"],
          explanation: 'A promise → future simple.',
        },
        {
          id: 'm1l4-d9',
          type: 'gap',
          before: 'At noon tomorrow, I',
          after: 'over the Alps.',
          hint: 'fly',
          accepted: ['will be flying', "'ll be flying"],
          explanation: 'In progress at a future moment → future continuous.',
        },
        {
          id: 'm1l4-d10',
          type: 'gap',
          before: 'By 2030, this town',
          after: 'in size.',
          hint: 'double',
          accepted: ['will have doubled', "'ll have doubled"],
          explanation: '`By 2030` → complete before then → future perfect.',
        },
        {
          id: 'm1l4-d11',
          type: 'gap',
          before: 'In March, I',
          after: 'English for exactly ten years.',
          hint: 'learn',
          accepted: ['will have been learning', "'ll have been learning"],
          explanation: 'Duration measured at a future point → future perfect continuous. The rarest beast in the grid!',
        },
        {
          id: 'm1l4-d12',
          type: 'sort',
          prompt: 'Last sweep: sort by TIME',
          buckets: ['past ⏮', 'present ▶️', 'future ⏭'],
          items: [
            { text: 'had been snowing', bucket: 0 },
            { text: 'has been snowing', bucket: 1 },
            { text: 'will have been snowing', bucket: 2 },
            { text: 'was snowing', bucket: 0 },
            { text: 'is snowing', bucket: 1 },
            { text: 'will snow', bucket: 2 },
          ],
          explanation: 'The first auxiliary tells you the time: was/had = past · is/has = present · will = future.',
        },
      ],
    },
    {
      title: 'Lightning Round XL',
      icon: '⚡',
      exercises: [
        {
          id: 'm1l4-e1',
          type: 'speed',
          secondsPerItem: 7,
          items: [
            { question: '"she sings" is…', options: ['present simple', 'present continuous'], correct: 0 },
            { question: '"they were laughing" is…', options: ['past continuous', 'past perfect'], correct: 0 },
            { question: '"I\'ll have gone" is…', options: ['future perfect', 'future continuous'], correct: 0 },
            { question: '"we\'ve been walking" is…', options: ['present perfect continuous', 'past perfect continuous'], correct: 0 },
            { question: '"he had left" is…', options: ['past perfect', 'present perfect'], correct: 0 },
            { question: '"I\'m leaving" is…', options: ['present continuous', 'present simple'], correct: 0 },
            { question: '"you\'ll be sleeping" is…', options: ['future continuous', 'future perfect'], correct: 0 },
            { question: '"she\'s eaten" is…', options: ['present perfect', 'present continuous'], correct: 0 },
            { question: '"it rained" is…', options: ['past simple', 'past continuous'], correct: 0 },
            { question: '"we\'d been driving" is…', options: ['past perfect continuous', 'future perfect'], correct: 0 },
            { question: '"I will have been working" is…', options: ['future perfect continuous', 'future continuous'], correct: 0 },
            { question: '"he was being silly" is…', options: ['past continuous', 'past simple'], correct: 0 },
          ],
          explanation: 'First auxiliary = time · machinery after it = aspect. You can now name anything the language throws at you.',
        },
      ],
    },
  ],
  boss: {
    passPct: 80,
    exercises: [
      {
        id: 'm1l4-boss1',
        type: 'mcq',
        question: 'Right now, somewhere in the world, someone ___ their keys.',
        options: ['is losing', 'loses'],
        correct: 0,
        explanation: '`Right now` → in progress → present continuous.',
      },
      {
        id: 'm1l4-boss2',
        type: 'mcq',
        question: "My aunt ___ in a lighthouse. It's her permanent home.",
        options: ['lives', 'is living'],
        correct: 0,
        explanation: 'Permanent situation → present simple.',
      },
      {
        id: 'm1l4-boss3',
        type: 'gap',
        before: 'I',
        after: 'sushi. Should I?',
        hint: 'never / try',
        accepted: ['have never tried', "'ve never tried"],
        explanation: 'Life experience up to now → present perfect: **have never tried**.',
      },
      {
        id: 'm1l4-boss4',
        type: 'mcq',
        question: 'Shakespeare ___ thirty-seven plays.',
        options: ['wrote', 'has written'],
        correct: 0,
        explanation: 'A closed life = finished time → past simple.',
      },
      {
        id: 'm1l4-boss5',
        type: 'gap',
        before: 'When the lights went out, we',
        after: 'the final.',
        hint: 'watch',
        accepted: ['were watching'],
        explanation: 'In progress at that past moment → past continuous.',
      },
      {
        id: 'm1l4-boss6',
        type: 'mcq',
        question: 'She ___ for weeks before she finally sat the exam.',
        options: ['had been revising', 'has been revising'],
        correct: 0,
        explanation: 'Long activity before a *past* event → past perfect continuous.',
      },
      {
        id: 'm1l4-boss7',
        type: 'gap',
        before: 'By the time you land, I',
        after: 'the guest room.',
        hint: 'prepare',
        accepted: ['will have prepared', "'ll have prepared"],
        explanation: 'Complete before a future point → future perfect.',
      },
      {
        id: 'm1l4-boss8',
        type: 'mcq',
        question: "Don't come at seven — I ___ the kids to bed then.",
        options: ['will be putting', 'will put'],
        correct: 0,
        explanation: 'In progress at that future time → future continuous.',
      },
      {
        id: 'm1l4-boss9',
        type: 'error-hunt',
        sentence: 'By the time we got there, the shop closed.',
        wrongIndex: 8,
        correction: 'had closed',
        explanation: '`By the time` + past moment → the closing happened earlier → past perfect: **had closed**.',
      },
      {
        id: 'm1l4-boss10',
        type: 'mcq',
        question: 'This time last year, we ___ across Mongolia.',
        options: ['were travelling', 'travelled'],
        correct: 0,
        explanation: 'In progress at that past moment (`this time last year`) → past continuous.',
      },
      {
        id: 'm1l4-boss11',
        type: 'order',
        correct: 'How long have you been learning English?',
        distractors: ['do', 'learned'],
        explanation: '`How long` + up-to-now activity → present perfect continuous.',
      },
      {
        id: 'm1l4-boss12',
        type: 'transform',
        source: 'I started waiting at 6:00. The bus came at 7:00.',
        keyword: 'when',
        accepted: [
          'I had been waiting for an hour when the bus came',
          'When the bus came I had been waiting for an hour',
          'I had been waiting for one hour when the bus came',
          'When the bus came I had been waiting for one hour',
        ],
        explanation: 'Running clock before a past event → **I had been waiting for an hour when the bus came.**',
      },
    ],
  },
};
