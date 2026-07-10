import type { Lesson } from '../../types';

export const lesson05: Lesson = {
  id: 'm1l5',
  title: 'Questions & Question Tags',
  subtitle: "Auxiliaries, echoes and tags — isn't it?",
  minutes: 45,
  goals: [
    'Build any question with bulletproof word order',
    'Nail subject questions (Who called you?) and indirect questions',
    'React like a native: So do I! / Neither can she!',
    "Master question tags — including aren't I, shall we & will you",
  ],
  cards: [
    {
      title: 'QASM — the question machine',
      body: `Almost every English question follows one assembly line:

**(Question word) + Auxiliary + Subject + Main verb**

> **Where** *did* *you* *park* the van?
> **What** *are* *you* *looking* at?
> *Have* *you* *seen* my glasses?

If the tense has no auxiliary (present & past simple), \`do / does / did\` reports for duty — and the main verb goes back to base form:

> She lives here. → Where **does** she **live**? — not ~~does she lives~~`,
      miniCheck: {
        id: 'm1l5-c1',
        type: 'error-hunt',
        sentence: 'What time does the film starts tonight?',
        wrongIndex: 5,
        correction: 'start',
        explanation: '`does` already carries the tense — the main verb returns to base form: **does … start**.',
      },
    },
    {
      title: 'Subject questions — the machine takes a day off',
      body: `When the question word IS the subject, there's no inversion and no *do*:

> **Who made** this amazing cake? (the answer is the maker — subject)
> **What made** that noise?!

Compare with an object question, where the machine runs as usual:

> **Who did you invite** to the gala? (you invited someone — *who* is the object)

Test: answer the question. *Zoe made the cake* → subject → no did. *I invited Zoe* → object → did.`,
      miniCheck: {
        id: 'm1l5-c2',
        type: 'mcq',
        question: 'Who ___ you to the gala?',
        options: ['invited', 'did invite'],
        correct: 0,
        explanation: '`Who` is the subject (someone invited you) → no *did*: **Who invited you?**',
      },
    },
    {
      title: 'Prepositions & negative questions',
      body: `**Prepositions go at the end** — modern English never abandons them at the front:

> What are you looking **at**? · Who is this song **about**?

**Negative questions** show surprise or invite agreement:

> **Aren't** you coming to the match? Everyone's going!
> **Didn't** you use to live near the lighthouse?

They expect the listener to say *"Actually, yes…"* — a little pressure, politely applied.`,
      miniCheck: {
        id: 'm1l5-c3',
        type: 'order',
        correct: 'What are you looking at?',
        distractors: ['do', 'look'],
        explanation: 'QASM order + the preposition parked neatly at the end.',
      },
    },
    {
      title: 'Indirect questions — politeness mode',
      body: `Wrap a question in a polite opener (*Could you tell me… / Do you know… / I wonder…*) and the word order flips back to a **statement**:

> Where **is** the station? → Could you tell me where the station **is**?
> What time **does** it start? → Do you know what time it **starts**?

The *do/does/did* disappears — the main verb takes the tense back. For yes/no questions, add \`if\` or \`whether\`:

> Do you know **if** the museum is open on Mondays?`,
      miniCheck: {
        id: 'm1l5-c4',
        type: 'mcq',
        question: 'Do you have any idea why she ___ early?',
        options: ['left', 'did leave'],
        correct: 0,
        explanation: 'Inside an indirect question → statement order, no *did*: **why she left**.',
      },
    },
    {
      title: 'Auxiliary echoes — answer like a local',
      body: `Auxiliaries love to stand in for whole sentences.

**Short answers** repeat the auxiliary, not the verb:

> Do you like anchovies? — Yes, I **do**. / No, I **don't**.

**Agreeing** uses \`so\` (positive) and \`neither/nor\` (negative) + auxiliary + subject — inverted!

> I loved that show. — **So did I.**
> I can't whistle. — **Neither can I.**

Match the auxiliary to the original: *She works from home* (present simple) → *So **do** I*, not ~~So am I~~.`,
      miniCheck: {
        id: 'm1l5-c5',
        type: 'mcq',
        question: "A: I can't whistle. — B: ___",
        options: ['Neither can I.', 'So can I.'],
        correct: 0,
        explanation: "Agreeing with a *negative* → **Neither** + auxiliary + subject: *Neither can I.*",
      },
    },
    {
      title: 'Emphatic do — the truth serum',
      body: `Add stressed \`do / does / did\` to *insist* something is true:

> You never water the plants! — I **do** water them! Every Sunday!
> I know you don't believe me, but I **did** lock the door.

It also sweetens polite enthusiasm:

> I really **do** appreciate your help.

Tiny word, huge drama. Use with an indignant eyebrow. 🤨`,
    },
    {
      title: 'Question tags — the core rule',
      body: `A **question tag** is a mini-question glued to a statement, asking *right?*

Two moves, always:

**1. Echo the auxiliary** (or use do/does/did if there isn't one)
**2. Flip the polarity** — positive statement → negative tag, and vice versa:

> You**'re** coming, **aren't you?**
> She **doesn't** eat gluten, **does she?**
> They**'ve** left, **haven't they?**
> You **used to** live here, **didn't you?**

Falling intonation ↘ = "just confirming". Rising ↗ = "I genuinely don't know".`,
      miniCheck: {
        id: 'm1l5-c6',
        type: 'gap',
        before: "You're coming to the quiz,",
        after: '?',
        hint: 'tag',
        accepted: ["aren't you"],
        explanation: "Echo *are*, flip to negative → **aren't you?**",
      },
    },
    {
      title: 'The special squad 🕶️',
      body: `Seven tags that break the mould — examiners adore them:

- \`I'm…\` → **aren't I?** — *I'm next, aren't I?* (never ~~amn't I~~)
- \`Let's…\` → **shall we?** — *Let's grab a pizza, shall we?*
- **Imperatives** → **will you / would you?** — *Pass me that wrench, will you?*
- \`nobody / everyone\` → **they** — *Nobody got hurt, did they?*
- \`nothing\` → **it** — *Nothing went wrong, did it?*
- \`There is/are…\` → **isn't there / aren't there?** — *There's still time, isn't there?*
- Negative-ish words (\`never, hardly, little\`) count as negative → positive tag: *He hardly ever calls, **does he?***`,
    },
  ],
  sets: [
    {
      title: 'Build the Question',
      icon: '🏗️',
      exercises: [
        {
          id: 'm1l5-a1',
          type: 'order',
          correct: 'Where did you park the van?',
          distractors: ['parked', 'do'],
          explanation: 'Question word + did + subject + base verb.',
        },
        {
          id: 'm1l5-a2',
          type: 'mcq',
          question: 'How long ___ to get to work?',
          options: ['does it take', 'it takes'],
          correct: 0,
          explanation: 'Direct question → auxiliary before subject: **does it take**.',
        },
        {
          id: 'm1l5-a3',
          type: 'gap',
          before: 'Excuse me —',
          after: 'this seat taken?',
          hint: 'be',
          accepted: ['is'],
          explanation: '`be` builds questions by itself — no *do* needed: **Is this seat taken?**',
        },
        {
          id: 'm1l5-a4',
          type: 'order',
          correct: "Why didn't you call me back?",
          distractors: ['do', 'called'],
          explanation: "Negative question: Why + didn't + subject + base verb.",
        },
        {
          id: 'm1l5-a5',
          type: 'mcq',
          question: '___ money did they raise at the bake sale?',
          options: ['How much', 'How many'],
          correct: 0,
          explanation: '`money` is uncountable → **How much**.',
        },
        {
          id: 'm1l5-a6',
          type: 'gap',
          before: 'Who',
          after: 'that amazing cake — you?',
          hint: 'make (past)',
          accepted: ['made'],
          explanation: 'Subject question → no *did*, straight to the verb: **Who made…?**',
        },
        {
          id: 'm1l5-a7',
          type: 'mcq',
          question: 'Who ___ at the party last night?',
          options: ['did you see', 'you saw'],
          correct: 0,
          explanation: 'Object question (*you* saw someone) → normal QASM order with *did*.',
        },
        {
          id: 'm1l5-a8',
          type: 'error-hunt',
          sentence: 'Who did steal my parking spot this morning?',
          wrongIndex: 1,
          correction: '– (Who stole)',
          explanation: '`Who` is the subject here → no *did*: **Who stole my parking spot?**',
        },
        {
          id: 'm1l5-a9',
          type: 'mcq',
          question: 'Which question is correct?',
          options: ['Who is this song about?', 'About who is this song?'],
          correct: 0,
          explanation: 'Prepositions live at the end of the question in natural modern English.',
        },
      ],
    },
    {
      title: 'Politeness Mode',
      icon: '🎩',
      exercises: [
        {
          id: 'm1l5-b1',
          type: 'gap',
          before: 'Could you tell me where the station',
          after: '?',
          hint: 'be',
          accepted: ['is'],
          explanation: 'Indirect question → statement order: **where the station is**.',
        },
        {
          id: 'm1l5-b2',
          type: 'order',
          correct: 'Do you know what time it is?',
          distractors: ['does'],
          explanation: 'The inner question flips to statement order: *what time it is*.',
        },
        {
          id: 'm1l5-b3',
          type: 'mcq',
          question: 'Do you know ___ the museum is open on Mondays?',
          options: ['if', 'that'],
          correct: 0,
          explanation: 'Indirect yes/no question → **if** (or *whether*).',
        },
        {
          id: 'm1l5-b4',
          type: 'error-hunt',
          sentence: 'I wonder why did she leave so early.',
          wrongIndex: 3,
          correction: '– (why she left)',
          explanation: 'After *I wonder*, statement order: **why she left so early**.',
        },
        {
          id: 'm1l5-b5',
          type: 'mcq',
          question: "___ you coming to the match? Everyone's going!",
          options: ["Aren't", "Don't"],
          correct: 0,
          explanation: 'Surprised negative question with the continuous → **Aren\'t you coming?**',
        },
        {
          id: 'm1l5-b6',
          type: 'transform',
          source: 'Where does Milo work? (ask it more politely)',
          keyword: 'know',
          accepted: [
            'Do you know where Milo works',
            'Do you happen to know where Milo works',
          ],
          explanation: 'Polite wrapper + statement order — and the third-person **-s** jumps back onto the verb: *where Milo works*.',
        },
        {
          id: 'm1l5-b7',
          type: 'mcq',
          question: 'Which is the correct indirect form of "What time does it start?"',
          options: [
            'Do you know what time it starts?',
            'Do you know what time does it start?',
          ],
          correct: 0,
          explanation: '*does* vanishes; the tense returns to the main verb: **it starts**.',
        },
        {
          id: 'm1l5-b8',
          type: 'mcq',
          question: '"Didn\'t you use to live near the lighthouse?" — the speaker is…',
          options: ['confirming a memory', 'asking for directions'],
          correct: 0,
          explanation: 'Negative questions often check something you *believe* is true.',
        },
      ],
    },
    {
      title: 'Echo Chamber',
      icon: '📣',
      exercises: [
        {
          id: 'm1l5-d1',
          type: 'mcq',
          question: 'A: Do you like anchovies? — B: ___',
          options: ['Yes, I do.', 'Yes, I like.'],
          correct: 0,
          explanation: 'Short answers repeat the *auxiliary*, never the main verb.',
        },
        {
          id: 'm1l5-d2',
          type: 'mcq',
          question: 'A: I loved that show! — B: ___',
          options: ['So did I.', 'So I did.'],
          correct: 0,
          explanation: '`So` + auxiliary + subject — inverted: **So did I.**',
        },
        {
          id: 'm1l5-d3',
          type: 'gap',
          before: "A: I've never tried skiing. — B:",
          after: 'have I.',
          hint: 'agree',
          accepted: ['neither', 'nor'],
          explanation: 'Agreeing with a negative → **Neither/Nor have I.**',
        },
        {
          id: 'm1l5-d4',
          type: 'mcq',
          question: 'A: She works from home. — B: ___',
          options: ['So do I.', 'So am I.'],
          correct: 0,
          explanation: 'Match the auxiliary to the tense: present simple → **do**.',
        },
        {
          id: 'm1l5-d5',
          type: 'mcq',
          question: "You don't believe me, but I ___ lock the door last night!",
          options: ['did', 'do'],
          correct: 0,
          explanation: 'Emphatic insistence about the past → stressed **did**.',
        },
        {
          id: 'm1l5-d6',
          type: 'mcq',
          question: 'A: You never water the plants. — B: I ___ water them — every Sunday!',
          options: ['do', 'am'],
          correct: 0,
          explanation: 'Emphatic **do** fights back against the accusation.',
        },
        {
          id: 'm1l5-d7',
          type: 'sort',
          prompt: 'How do you agree with each statement?',
          buckets: ['So … I 👍', 'Neither … I 👎'],
          items: [
            { text: 'I love hiking.', bucket: 0 },
            { text: "I can't cook.", bucket: 1 },
            { text: "I've been to Japan.", bucket: 0 },
            { text: "I don't eat meat.", bucket: 1 },
            { text: "I'm exhausted.", bucket: 0 },
            { text: 'I never win anything.', bucket: 1 },
          ],
          explanation: 'Positive statement → *So…*; negative (including `never`) → *Neither…*',
        },
        {
          id: 'm1l5-d8',
          type: 'order',
          correct: 'I really do appreciate your help.',
          distractors: ['does', 'am'],
          explanation: 'Emphatic *do* slots before the main verb: *I really **do appreciate** it.*',
        },
        {
          id: 'm1l5-d9',
          type: 'mcq',
          question: "A: I'd love a nap right now. — B: ___",
          options: ['So would I.', 'So had I.'],
          correct: 0,
          explanation: "'d = would here → **So would I.**",
        },
      ],
    },
    {
      title: "Tag — You're It!",
      icon: '🏷️',
      exercises: [
        {
          id: 'm1l5-t1',
          type: 'gap',
          before: "She doesn't eat gluten,",
          after: '?',
          hint: 'tag',
          accepted: ['does she'],
          explanation: 'Negative statement → positive tag: **does she?**',
        },
        {
          id: 'm1l5-t2',
          type: 'gap',
          before: "They've already left,",
          after: '?',
          hint: 'tag',
          accepted: ["haven't they"],
          explanation: 'Echo *have*, flip polarity → **haven\'t they?**',
        },
        {
          id: 'm1l5-t3',
          type: 'gap',
          before: "I'm on the list,",
          after: '?',
          hint: 'tag',
          accepted: ["aren't I"],
          explanation: 'The famous exception: *I am* → **aren\'t I?**',
        },
        {
          id: 'm1l5-t4',
          type: 'gap',
          before: "Let's grab a pizza,",
          after: '?',
          hint: 'tag',
          accepted: ['shall we'],
          explanation: '`Let\'s` always tags with **shall we?**',
        },
        {
          id: 'm1l5-t5',
          type: 'gap',
          before: 'Pass me that wrench,',
          after: '?',
          hint: 'tag',
          accepted: ['will you', 'would you', 'can you', 'could you'],
          explanation: 'Imperatives soften with **will you?** (or *would/can/could you*).',
        },
        {
          id: 'm1l5-t6',
          type: 'gap',
          before: 'Nobody got hurt,',
          after: '?',
          hint: 'tag',
          accepted: ['did they'],
          explanation: '`nobody` = negative meaning → positive tag, and the pronoun is **they**: *did they?*',
        },
        {
          id: 'm1l5-t7',
          type: 'gap',
          before: "There's still time,",
          after: '?',
          hint: 'tag',
          accepted: ["isn't there"],
          explanation: '`there` survives into the tag: **isn\'t there?**',
        },
        {
          id: 'm1l5-t8',
          type: 'gap',
          before: 'You used to live here,',
          after: '?',
          hint: 'tag',
          accepted: ["didn't you"],
          explanation: '`used to` behaves like a past simple verb → **didn\'t you?**',
        },
        {
          id: 'm1l5-t9',
          type: 'mcq',
          question: "He'd better apologise, ___?",
          options: ["hadn't he", "wouldn't he"],
          correct: 0,
          explanation: "'d better = **had** better → the tag echoes *had*: **hadn't he?**",
        },
        {
          id: 'm1l5-t10',
          type: 'mcq',
          question: 'Nothing went wrong, ___?',
          options: ['did it', "didn't it"],
          correct: 0,
          explanation: '`nothing` = negative → positive tag, pronoun **it**: *did it?*',
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm1l5-e1',
          type: 'speed',
          secondsPerItem: 8,
          items: [
            { question: 'You like jazz, ___?', options: ["don't you", 'do you'], correct: 0 },
            { question: 'She can drive, ___?', options: ["can't she", 'can she'], correct: 0 },
            { question: "We won't be late, ___?", options: ['will we', "won't we"], correct: 0 },
            { question: 'He never listens, ___?', options: ['does he', "doesn't he"], correct: 0 },
            { question: "I'm next, ___?", options: ["aren't I", "amn't I"], correct: 0 },
            { question: "Let's start, ___?", options: ['shall we', 'will we'], correct: 0 },
            { question: 'Open the window, ___?', options: ['will you', 'do you'], correct: 0 },
            { question: 'Nothing went wrong, ___?', options: ['did it', "didn't it"], correct: 0 },
            { question: "You'd rather stay, ___?", options: ["wouldn't you", "hadn't you"], correct: 0 },
            { question: "There isn't any milk, ___?", options: ['is there', "isn't there"], correct: 0 },
          ],
          explanation: 'Echo the auxiliary, flip the polarity, remember the special squad. You\'re officially dangerous at small talk.',
        },
      ],
    },
  ],
  boss: {
    passPct: 80,
    exercises: [
      {
        id: 'm1l5-boss1',
        type: 'order',
        correct: 'Where did you learn to juggle?',
        distractors: ['you learned', 'do'],
        explanation: 'QASM: Where + did + you + learn.',
      },
      {
        id: 'm1l5-boss2',
        type: 'mcq',
        question: 'Who ___ the last biscuit? Confess!',
        options: ['ate', 'did eat'],
        correct: 0,
        explanation: 'Subject question → no *did*: **Who ate…?**',
      },
      {
        id: 'm1l5-boss3',
        type: 'gap',
        before: 'Could you tell me when the next tram',
        after: '?',
        hint: 'leave',
        accepted: ['leaves'],
        explanation: 'Indirect question → statement order + third-person -s: **when the next tram leaves**.',
      },
      {
        id: 'm1l5-boss4',
        type: 'mcq',
        question: "A: I don't get the joke. — B: ___",
        options: ['Neither do I.', 'So do I.'],
        correct: 0,
        explanation: 'Agreeing with a negative → **Neither do I.**',
      },
      {
        id: 'm1l5-boss5',
        type: 'gap',
        before: "You've met my cousin before,",
        after: '?',
        hint: 'tag',
        accepted: ["haven't you"],
        explanation: 'Echo *have*, flip → **haven\'t you?**',
      },
      {
        id: 'm1l5-boss6',
        type: 'gap',
        before: "I'm too late for tickets,",
        after: '?',
        hint: 'tag',
        accepted: ["aren't I"],
        explanation: 'I am → **aren\'t I?** The special squad strikes.',
      },
      {
        id: 'm1l5-boss7',
        type: 'gap',
        before: "Let's not tell Mum,",
        after: '?',
        hint: 'tag',
        accepted: ['shall we'],
        explanation: '`Let\'s` (even negative) → **shall we?**',
      },
      {
        id: 'm1l5-boss8',
        type: 'mcq',
        question: 'Nobody warned you, ___?',
        options: ['did they', "didn't they"],
        correct: 0,
        explanation: '`nobody` = negative → positive tag with **they**.',
      },
      {
        id: 'm1l5-boss9',
        type: 'error-hunt',
        sentence: 'Do you know where does she live now?',
        wrongIndex: 4,
        correction: '– (where she lives)',
        explanation: 'Indirect question → drop *does*, statement order: **where she lives**.',
      },
      {
        id: 'm1l5-boss10',
        type: 'mcq',
        question: "You don't think I forgot, ___?",
        options: ['do you', "don't you"],
        correct: 0,
        explanation: 'The statement is negative (*don\'t think*) → positive tag: **do you?**',
      },
      {
        id: 'm1l5-boss11',
        type: 'mcq',
        question: 'He hardly ever calls, ___?',
        options: ['does he', "doesn't he"],
        correct: 0,
        explanation: '`hardly ever` counts as negative → positive tag.',
      },
      {
        id: 'm1l5-boss12',
        type: 'transform',
        source: "What does 'serendipity' mean? (ask it more politely)",
        keyword: 'could',
        accepted: [
          "Could you tell me what serendipity means",
          "Could you tell me what 'serendipity' means",
          'Could you tell me what the word serendipity means',
        ],
        explanation: 'Polite wrapper + statement order: **Could you tell me what "serendipity" means?** The *does* dissolves, the -s returns.',
      },
    ],
  },
};
