import type { Lesson } from '../../types';

export const m2l4: Lesson = {
  id: 'm2l4',
  title: 'Modal Fine Print',
  subtitle: "would rather, dare, be to, might as well",
  minutes: 45,
  goals: [
    "State preferences with would rather (+ the sneaky past trick)",
    'Wield the semi-modals dare and need',
    'Sound native with might as well',
    'Decode formal orders: You are to report at nine',
  ],
  cards: [
    {
      title: 'would rather — your call',
      body: `**would rather ('d rather)** + base verb = *prefer to*:

> I**'d rather walk** — the metro's packed at this hour.
> I**'d rather not say**. 🤐 (polite refusal)

Comparisons take \`than\`:

> I'd rather **work** the late shift **than get up** at five.

No *to* anywhere: ~~I'd rather to walk~~.`,
      miniCheck: {
        id: 'm2l4-c1',
        type: 'mcq',
        question: "I'd rather ___ home tonight, if that's OK.",
        options: ['stay', 'to stay'],
        correct: 0,
        explanation: "would rather + **base verb**, no *to*: **'d rather stay**.",
      },
    },
    {
      title: 'would rather YOU did — the past trick',
      body: `When your preference is about **someone else's behaviour**, the verb jumps into the **past** — but the meaning stays present:

> I'd rather **you didn't smoke** in here.
> She'd rather **we came** on Sunday instead.

It looks like a past tense; it's actually a polite present-time wish. (You'll meet this "unreal past" again in the Hypothetical module — this is your first taste.)`,
      miniCheck: {
        id: 'm2l4-c2',
        type: 'gap',
        before: "I'd rather you",
        after: 'anyone about this yet.',
        hint: 'not / tell',
        accepted: ["didn't tell", 'did not tell'],
        explanation: 'Preference about another person → past form: **I\'d rather you didn\'t tell**.',
      },
    },
    {
      title: 'would prefer & would sooner',
      body: `Two cousins of *would rather*:

**would prefer** — takes \`to\` + infinitive (the odd one out!):

> She'd prefer **to eat** at home. · I'd prefer **not to comment**.

**would sooner** — identical to *would rather*, slightly more dramatic:

> I'd sooner **starve** than apologise to him.`,
      miniCheck: {
        id: 'm2l4-c3',
        type: 'mcq',
        question: "She'd prefer ___ at home tonight.",
        options: ['to eat', 'eat'],
        correct: 0,
        explanation: '*prefer* keeps its **to**: would prefer **to eat**. (Rather and sooner drop it.)',
      },
    },
    {
      title: 'dare & need — the semi-modals',
      body: `Two verbs with double lives — normal verbs most of the time, modals in negatives and questions:

**dare**:

> **How dare you** read my diary! (fixed fury — no *-s*, no *do*)
> I **daren't** tell him the price. · **Dare I ask** what happened?

**need**:

> You **needn't worry** — it's all handled.
> **Need I say more?** (rhetorical eyebrow included)`,
      miniCheck: {
        id: 'm2l4-c4',
        type: 'mcq',
        question: '"How ___ you speak to her like that!"',
        options: ['dare', 'dared'],
        correct: 0,
        explanation: 'The fixed phrase is **How dare you** — modal *dare*, no -s, no tense change.',
      },
    },
    {
      title: 'might as well — the shrug modal',
      body: `**might as well / may as well** = there's no reason NOT to, so let's:

> The bus is gone and the next one's in an hour. We **might as well** walk.
> There's nothing on TV — we **may as well** go to bed.

It's the sound of a shrug turned into grammar. Peak native-speaker energy. 🤷`,
      miniCheck: {
        id: 'm2l4-c5',
        type: 'mcq',
        question: "The last guests have left. We ___ close early.",
        options: ['might as well', 'would rather you'],
        correct: 0,
        explanation: 'No reason not to → **might as well** close early.',
      },
    },
    {
      title: 'be to — orders from above',
      body: `**be + to-infinitive** = formal instructions, official arrangements, destiny. The grammar of memos and news:

> All staff **are to attend** tomorrow's briefing. — The Management
> Guests **are not to smoke** anywhere on the premises.
> The two leaders **are to meet** in Geneva next month.

You won't say it at breakfast, but C1 exams and news reports love it.`,
      miniCheck: {
        id: 'm2l4-c6',
        type: 'mcq',
        question: "All staff ___ attend tomorrow's briefing. — signed, The Management",
        options: ['are to', 'might as well'],
        correct: 0,
        explanation: 'A formal order → **are to attend**.',
      },
    },
    {
      title: 'Modal Fine Print — the map',
      body: `The small print, decoded:

- **'d rather + base** — my preference · **'d rather you + past** — about others
- **'d prefer + to** — the one that keeps *to* · **'d sooner** — drama version
- **dare / need** — modals in questions & negatives: *How dare you! Needn't worry.*
- **might as well** — the grammatical shrug
- **be to** — formal orders & official plans

That's Modality Mastery complete — one Gatekeeper stands between you and the badge. ⚖️`,
    },
  ],
  sets: [
    {
      title: 'Preferences',
      icon: '🍵',
      exercises: [
        {
          id: 'm2l4-a1',
          type: 'mcq',
          question: "I'd rather ___ by train — flying stresses me out.",
          options: ['go', 'to go'],
          correct: 0,
          explanation: 'would rather + **base verb**: *\'d rather go*.',
        },
        {
          id: 'm2l4-a2',
          type: 'mcq',
          question: "I'd rather you ___ my pen back, actually.",
          options: ['gave', 'give'],
          correct: 0,
          explanation: 'Preference about someone else → **past form**: *I\'d rather you gave*.',
        },
        {
          id: 'm2l4-a3',
          type: 'gap',
          before: 'Would you rather',
          after: 'invisible or able to fly?',
          hint: 'be',
          accepted: ['be'],
          explanation: 'would rather + base verb → **be**. (Answer: flying. Obviously.)',
        },
        {
          id: 'm2l4-a4',
          type: 'mcq',
          question: "He'd prefer ___ in cash, he says.",
          options: ['to be paid', 'be paid'],
          correct: 0,
          explanation: '*prefer* takes **to**: would prefer **to be paid**.',
        },
        {
          id: 'm2l4-a5',
          type: 'mcq',
          question: "I'd rather not ___ about it, honestly.",
          options: ['talk', 'to talk'],
          correct: 0,
          explanation: 'Negative: **\'d rather not + base verb**.',
        },
        {
          id: 'm2l4-a6',
          type: 'error-hunt',
          sentence: "I'd rather to stay in tonight and watch a film.",
          wrongIndex: 2,
          correction: '– (rather stay)',
          explanation: 'No *to* after would rather: **I\'d rather stay in**.',
        },
        {
          id: 'm2l4-a7',
          type: 'order',
          correct: 'I would rather you stayed out of it.',
          distractors: ['stay', 'to'],
          explanation: 'Preference about another person → **you stayed** (unreal past).',
        },
        {
          id: 'm2l4-a8',
          type: 'transform',
          source: 'Walking is better than driving, in my opinion.',
          keyword: 'rather',
          accepted: ["I'd rather walk than drive", 'I would rather walk than drive'],
          explanation: 'Preference + comparison → **I\'d rather walk than drive.**',
        },
      ],
    },
    {
      title: 'Semi-modals',
      icon: '🦸',
      exercises: [
        {
          id: 'm2l4-b1',
          type: 'mcq',
          question: 'How ___ you read my diary!',
          options: ['dare', 'dared'],
          correct: 0,
          explanation: 'Fixed fury: **How dare you** — always base form.',
        },
        {
          id: 'm2l4-b2',
          type: 'mcq',
          question: '___ I say more? The photos speak for themselves.',
          options: ['Need', 'Must'],
          correct: 0,
          explanation: 'The rhetorical classic → **Need I say more?**',
        },
        {
          id: 'm2l4-b3',
          type: 'mcq',
          question: 'She ___ tell her boss the truth — he shouts at bad news.',
          options: ["daren't", "needn't"],
          correct: 0,
          explanation: 'Too afraid to → **daren\'t tell** (= doesn\'t dare).',
        },
        {
          id: 'm2l4-b4',
          type: 'gap',
          before: 'You',
          after: "worry — everything's under control.",
          hint: 'need (negative)',
          accepted: ["needn't", 'need not'],
          explanation: 'Modal need in the negative → **needn\'t worry**.',
        },
        {
          id: 'm2l4-b5',
          type: 'mcq',
          question: 'Nobody ___ move a muscle while the inspector was in the room.',
          options: ['dared', 'dares'],
          correct: 0,
          explanation: 'Past narrative → **dared** (ordinary-verb mode).',
        },
        {
          id: 'm2l4-b6',
          type: 'order',
          correct: 'Need I remind you whose idea this was?',
          distractors: ['Do', 'must'],
          explanation: 'Modal *need* builds the question itself: **Need I remind you…?**',
        },
        {
          id: 'm2l4-b7',
          type: 'mcq',
          question: "You needn't ___ the whole thing — just the summary.",
          options: ['read', 'to read'],
          correct: 0,
          explanation: 'Modal needn\'t + **base verb**.',
        },
        {
          id: 'm2l4-b8',
          type: 'error-hunt',
          sentence: 'How dares he take my parking spot every day!',
          wrongIndex: 1,
          correction: 'dare',
          explanation: 'Modal dare never takes -s: **How dare he…!**',
        },
      ],
    },
    {
      title: 'The Small Print',
      icon: '📜',
      exercises: [
        {
          id: 'm2l4-d1',
          type: 'mcq',
          question: "It's already 11 and nobody else has shown up. We ___ start.",
          options: ['might as well', 'would rather you'],
          correct: 0,
          explanation: 'No reason to wait → **might as well** start.',
        },
        {
          id: 'm2l4-d2',
          type: 'mcq',
          question: 'You ___ report to reception on arrival. — Company handbook, p. 3',
          options: ['are to', 'might as well'],
          correct: 0,
          explanation: 'Formal instruction → **are to report**.',
        },
        {
          id: 'm2l4-d3',
          type: 'mcq',
          question: 'The King ___ open the new hospital in May, the palace announced.',
          options: ['is to', 'dares to'],
          correct: 0,
          explanation: 'Official arrangement, news register → **is to open**.',
        },
        {
          id: 'm2l4-d4',
          type: 'gap',
          before: "There's nothing on TV. We",
          after: 'go to bed.',
          hint: 'might as well',
          accepted: ['might as well', 'may as well'],
          explanation: 'The grammatical shrug → **might as well** go to bed.',
        },
        {
          id: 'm2l4-d5',
          type: 'order',
          correct: 'Guests are not to smoke on the premises.',
          distractors: ["mustn't", 'for'],
          explanation: 'Formal prohibition → **are not to smoke**.',
        },
        {
          id: 'm2l4-d6',
          type: 'mcq',
          question: "You ___ ask Rita — she knows everything about visas, and she loves helping.",
          options: ['might as well', "daren't"],
          correct: 0,
          explanation: 'No harm in it → **might as well** ask.',
        },
        {
          id: 'm2l4-d7',
          type: 'error-hunt',
          sentence: 'We might as well to start without them.',
          wrongIndex: 4,
          correction: '– (as well start)',
          explanation: 'might as well + **base verb**: no *to*.',
        },
        {
          id: 'm2l4-d8',
          type: 'transform',
          source: 'Since no one else is coming, starting now makes sense.',
          keyword: 'well',
          accepted: [
            'We might as well start',
            'We may as well start',
            'We might as well start now',
            'We may as well start now',
          ],
          explanation: 'No reason not to → **We might as well start.**',
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm2l4-e1',
          type: 'speed',
          secondsPerItem: 8,
          items: [
            { question: "I'd rather ___ tea, thanks.", options: ['have', 'to have'], correct: 0 },
            { question: "I'd rather you ___ that word.", options: ["didn't use", "don't use"], correct: 0 },
            { question: 'How ___ you!', options: ['dare', 'dared'], correct: 0 },
            { question: 'We might as ___ walk.', options: ['well', 'good'], correct: 0 },
            { question: "You ___ worry. It's handled.", options: ["needn't", "mustn't"], correct: 0 },
            { question: "She'd prefer ___ early.", options: ['to leave', 'leave'], correct: 0 },
            { question: "I daren't ___ him the price.", options: ['tell', 'to tell'], correct: 0 },
            { question: 'You are ___ wait here. Orders.', options: ['to', 'for'], correct: 0 },
            { question: "I'd sooner ___ than apologise to him.", options: ['starve', 'starving'], correct: 0 },
            { question: 'Need I ___ more?', options: ['say', 'to say'], correct: 0 },
          ],
          explanation: "rather/sooner + base · prefer + to · dare/need go modal in negatives · are to = orders.",
        },
      ],
    },
  ],
  boss: {
    passPct: 80,
    exercises: [
      {
        id: 'm2l4-boss1',
        type: 'mcq',
        question: "I'd rather ___ the late shift than get up at five.",
        options: ['work', 'to work'],
        correct: 0,
        explanation: 'would rather + base verb, comparison with *than*.',
      },
      {
        id: 'm2l4-boss2',
        type: 'mcq',
        question: "I'd rather you ___ the door open — it's stuffy in here.",
        options: ['left', 'leave'],
        correct: 0,
        explanation: 'Preference about someone else → past form: **you left**.',
      },
      {
        id: 'm2l4-boss3',
        type: 'gap',
        before: "We've missed the start of the film. We",
        after: 'wait for the next showing.',
        hint: 'might as well',
        accepted: ['might as well', 'may as well'],
        explanation: 'No better option → **might as well** wait.',
      },
      {
        id: 'm2l4-boss4',
        type: 'mcq',
        question: 'How ___ he blame us for his own mistake!',
        options: ['dare', 'dares'],
        correct: 0,
        explanation: 'Modal dare: **How dare he** — no -s ever.',
      },
      {
        id: 'm2l4-boss5',
        type: 'mcq',
        question: "You ___ apologise — it wasn't your fault at all.",
        options: ["needn't", "daren't"],
        correct: 0,
        explanation: 'No necessity → **needn\'t apologise**.',
      },
      {
        id: 'm2l4-boss6',
        type: 'order',
        correct: 'I would rather not discuss it now.',
        distractors: ['to', "don't"],
        explanation: 'Polite refusal → **would rather not discuss**.',
      },
      {
        id: 'm2l4-boss7',
        type: 'mcq',
        question: 'All visitors ___ sign in at the gate. — Site regulations',
        options: ['are to', 'might as well'],
        correct: 0,
        explanation: 'Formal rule → **are to sign in**.',
      },
      {
        id: 'm2l4-boss8',
        type: 'error-hunt',
        sentence: "I'd rather to walk, if you don't mind.",
        wrongIndex: 2,
        correction: '– (rather walk)',
        explanation: 'No *to* after would rather.',
      },
      {
        id: 'm2l4-boss9',
        type: 'mcq',
        question: 'She ___ ask for a refund — she hates confrontation.',
        options: ["daren't", 'might as well'],
        correct: 0,
        explanation: 'Fear blocks her → **daren\'t ask**.',
      },
      {
        id: 'm2l4-boss10',
        type: 'transform',
        source: "Please don't mention this to my parents. (make it softer)",
        keyword: 'rather',
        accepted: [
          "I'd rather you didn't mention this to my parents",
          "I would rather you didn't mention this to my parents",
          'I would rather you did not mention this to my parents',
        ],
        explanation: 'Soft request about someone else → **I\'d rather you didn\'t mention…**',
      },
      {
        id: 'm2l4-boss11',
        type: 'mcq',
        question: 'The two leaders ___ meet in Geneva next month, officials confirmed.',
        options: ['are to', 'would rather'],
        correct: 0,
        explanation: 'Official future arrangement → **are to meet**.',
      },
    ],
  },
};
