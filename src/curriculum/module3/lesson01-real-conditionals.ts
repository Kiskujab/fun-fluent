import type { Lesson } from '../../types';

export const m3l1: Lesson = {
  id: 'm3l1',
  title: 'Real Possibilities',
  subtitle: 'zero & first conditionals, unless, in case',
  minutes: 35,
  goals: [
    'Use zero conditional for laws of nature (and house rules)',
    'Build first conditionals for real future possibilities',
    'Master unless, as long as and provided that',
    'Split in case from if — the packing-list distinction',
  ],
  cards: [
    {
      title: 'Zero conditional — the laws of the universe',
      body: `**If + present, present** — for things that are *always* true. Cause and effect, no exceptions:

> If you **heat** ice, it **melts**.
> If I **drink** coffee after six, I **don't sleep**.

In zero conditionals, \`if\` and \`when\` are interchangeable — because it happens every single time:

> **When** you press this button, the machine **stops**.`,
      miniCheck: {
        id: 'm3l1-c1',
        type: 'mcq',
        question: 'If you ___ water to 100°C, it boils.',
        options: ['heat', 'will heat'],
        correct: 0,
        explanation: 'A law of nature → zero conditional: **present + present**.',
      },
    },
    {
      title: 'First conditional — the real future',
      body: `**If + present, will + verb** — a real possibility with a real consequence:

> If it **rains** tomorrow, we**'ll move** the party inside.
> If you **don't hurry**, you**'ll miss** the coach.

The golden rule from your Future lesson still applies: **no will after if**:

> ~~If it will rain~~ → If it **rains**…

The *if*-half states the condition (present tense); the other half predicts (*will*).`,
      miniCheck: {
        id: 'm3l1-c2',
        type: 'error-hunt',
        sentence: "If she will miss the train, she'll call us.",
        wrongIndex: 2,
        correction: 'misses',
        explanation: 'No *will* in the if-clause: **If she misses the train…**',
      },
    },
    {
      title: 'More than will — the result clause wardrobe',
      body: `The result half of a first conditional isn't married to *will*. It also wears:

- **imperatives:** *If you see Anna, **say** hi from me.*
- **modals:** *If the roads are icy, we **might stay** home. · You **can** leave early if you finish.*
- **going to:** *If he keeps this up, he**'s going to get** hurt.*

The condition half stays loyal to the present tense throughout.`,
      miniCheck: {
        id: 'm3l1-c3',
        type: 'mcq',
        question: 'If you feel dizzy, ___ down and call me.',
        options: ['sit', 'will sit'],
        correct: 0,
        explanation: 'Imperative in the result clause → **sit down**.',
      },
    },
    {
      title: 'unless = if not',
      body: `**unless** packs *if…not* into one word:

> **Unless** we leave now, we'll be late. (= If we **don't** leave now…)
> I won't tell anyone — **unless** you want me to.

⚠️ Because *unless* already contains the negative, don't double it:

> ~~Unless you don't hurry~~ → **Unless you hurry**, you'll miss it.`,
      miniCheck: {
        id: 'm3l1-c4',
        type: 'mcq',
        question: "We'll eat outside ___ it gets too windy.",
        options: ['unless', 'if'],
        correct: 0,
        explanation: '= *if it doesn\'t get too windy* → **unless**.',
      },
    },
    {
      title: 'provided that, as long as, in case',
      body: `Three C1 upgrades for *if*:

**provided (that) / providing / as long as** = if, and only if — conditions with attitude:

> You can borrow the van **as long as** you fill the tank.
> I'll sign, **provided that** clause four is deleted.

**in case** = as a precaution — NOT the same as *if*:

> Take an umbrella **in case** it rains. (take it NOW, before any rain)
> I'll take an umbrella **if** it rains. (I'll wait, then decide)`,
      miniCheck: {
        id: 'm3l1-c5',
        type: 'mcq',
        question: "Write her number down ___ your phone dies.",
        options: ['in case', 'if'],
        correct: 0,
        explanation: 'A precaution taken in advance → **in case**.',
      },
    },
    {
      title: 'Real Possibilities — the map',
      body: `The realistic half of conditional-land:

- **Zero:** if/when + present, present — *always true*
- **First:** if + present, will/modal/imperative — *real future*
- **unless** = if not (no double negatives!)
- **as long as / provided that** = strict if
- **in case** = precaution, not condition

Next lesson we leave reality behind entirely. For now — the Gatekeeper deals only in facts. 🌦️`,
    },
  ],
  sets: [
    {
      title: 'Cause & Effect',
      icon: '⚙️',
      exercises: [
        {
          id: 'm3l1-a1',
          type: 'mcq',
          question: 'If you ___ the app, the tickets are 20% cheaper.',
          options: ['use', 'will use'],
          correct: 0,
          explanation: 'General truth → zero conditional, present + present.',
        },
        {
          id: 'm3l1-a2',
          type: 'gap',
          before: 'When the tide',
          after: 'out, you can walk to the island.',
          hint: 'go',
          accepted: ['goes'],
          explanation: 'Always true → present simple: **goes**.',
        },
        {
          id: 'm3l1-a3',
          type: 'mcq',
          question: "If you ___ the last biscuit, at least wash the tin. House rules.",
          options: ['take', 'will take'],
          correct: 0,
          explanation: 'Zero conditional with an imperative result — the classic flatmate law.',
        },
        {
          id: 'm3l1-a4',
          type: 'mcq',
          question: 'My laptop crashes if I ___ more than forty tabs.',
          options: ['open', 'will open'],
          correct: 0,
          explanation: 'Reliable cause and effect → present simple. (Also: forty tabs?!)',
        },
        {
          id: 'm3l1-a5',
          type: 'order',
          correct: 'If you mix blue and yellow, you get green.',
          distractors: ['will', 'got'],
          explanation: 'Zero conditional: present + present.',
        },
        {
          id: 'm3l1-a6',
          type: 'mcq',
          question: "___ I eat cheese late at night, I have the strangest dreams.",
          options: ['When', 'Unless'],
          correct: 0,
          explanation: 'Every time it happens → **When** (= if, in zero conditionals).',
        },
        {
          id: 'm3l1-a7',
          type: 'error-hunt',
          sentence: 'If she heat the milk too fast, it burns.',
          wrongIndex: 2,
          correction: 'heats',
          explanation: 'Third person -s survives in conditionals: **if she heats**.',
        },
        {
          id: 'm3l1-a8',
          type: 'gap',
          before: 'If you',
          after: "save regularly, you don't lose your work. Learn from my pain.",
          hint: "don't…? (careful!)",
          accepted: ["don't", 'do not'],
          explanation: "Zero conditional negative → **If you don't save regularly…**",
        },
      ],
    },
    {
      title: 'The Real Future',
      icon: '🌦️',
      exercises: [
        {
          id: 'm3l1-b1',
          type: 'mcq',
          question: "If it rains tomorrow, we ___ the party inside.",
          options: ["'ll move", 'move'],
          correct: 0,
          explanation: 'Real future possibility → **will** in the result clause.',
        },
        {
          id: 'm3l1-b2',
          type: 'gap',
          before: 'If you',
          after: "hurry, you'll miss the last coach.",
          hint: 'not (verb form!)',
          accepted: ["don't", 'do not'],
          explanation: 'If-clause stays present: **If you don\'t hurry…**',
        },
        {
          id: 'm3l1-b3',
          type: 'error-hunt',
          sentence: "If the tickets will sell out, we'll try next year.",
          wrongIndex: 3,
          correction: 'sell',
          explanation: 'No *will* after *if*: **If the tickets sell out…**',
        },
        {
          id: 'm3l1-b4',
          type: 'mcq',
          question: 'If the fog gets worse, they ___ cancel the ferry.',
          options: ['might', 'would have'],
          correct: 0,
          explanation: 'Modals work fine in the result clause → **might cancel**.',
        },
        {
          id: 'm3l1-b5',
          type: 'order',
          correct: 'If you see Anna, say hi from me.',
          distractors: ['will', 'saw'],
          explanation: 'Imperative result → **say hi**.',
        },
        {
          id: 'm3l1-b6',
          type: 'mcq',
          question: "You can stay at ours if the last train ___ already left.",
          options: ['has', 'will have'],
          correct: 0,
          explanation: 'Present perfect is allowed in if-clauses: **if the train has left**.',
        },
        {
          id: 'm3l1-b7',
          type: 'transform',
          source: "Hurry up — otherwise we'll miss the beginning.",
          keyword: 'if',
          accepted: [
            "If we don't hurry we'll miss the beginning",
            "If we don't hurry we will miss the beginning",
            "We'll miss the beginning if we don't hurry",
            'We will miss the beginning if we do not hurry',
          ],
          explanation: 'First conditional → **If we don\'t hurry, we\'ll miss the beginning.**',
        },
        {
          id: 'm3l1-b8',
          type: 'mcq',
          question: 'If he keeps spending like this, he ___ run out of money by June.',
          options: ['is going to', 'would'],
          correct: 0,
          explanation: 'Evidence-based prediction in the result → **is going to**.',
        },
        {
          id: 'm3l1-b9',
          type: 'gap',
          before: "I'll text you as soon as I",
          after: 'the results.',
          hint: 'get',
          accepted: ['get'],
          explanation: 'Time clause = same border rule: present tense after *as soon as*.',
        },
      ],
    },
    {
      title: 'Fine Conditions',
      icon: '📋',
      exercises: [
        {
          id: 'm3l1-d1',
          type: 'mcq',
          question: "___ we leave now, we'll hit terrible traffic.",
          options: ['Unless', 'As long as'],
          correct: 0,
          explanation: '= If we **don\'t** leave now → **Unless**.',
        },
        {
          id: 'm3l1-d2',
          type: 'error-hunt',
          sentence: "Unless you don't water it, that plant will die.",
          wrongIndex: 2,
          correction: '– (Unless you water it)',
          explanation: '*Unless* already contains the *not* — no double negative: **Unless you water it…**',
        },
        {
          id: 'm3l1-d3',
          type: 'mcq',
          question: 'You can borrow the van ___ you fill the tank afterwards.',
          options: ['as long as', 'in case'],
          correct: 0,
          explanation: 'A strict condition → **as long as**.',
        },
        {
          id: 'm3l1-d4',
          type: 'mcq',
          question: "I'll sign the contract, ___ clause four is deleted.",
          options: ['provided that', 'unless'],
          correct: 0,
          explanation: 'If and only if → **provided that**.',
        },
        {
          id: 'm3l1-d5',
          type: 'mcq',
          question: 'Take some snacks ___ the café is closed.',
          options: ['in case', 'if'],
          correct: 0,
          explanation: 'Precaution now, before you know → **in case**.',
        },
        {
          id: 'm3l1-d6',
          type: 'mcq',
          question: "I'll only come ___ Rob promises not to sing.",
          options: ['if', 'in case'],
          correct: 0,
          explanation: 'A real condition for coming → **if**.',
        },
        {
          id: 'm3l1-d7',
          type: 'sort',
          prompt: 'Condition or precaution?',
          buckets: ['condition 📋 (if / as long as)', 'precaution 🎒 (in case)'],
          items: [
            { text: "I'll shout ___ you're late again", bucket: 0 },
            { text: 'pack a torch ___ the power goes', bucket: 1 },
            { text: 'you can come ___ you behave', bucket: 0 },
            { text: 'note my number ___ you get lost', bucket: 1 },
            { text: "we'll refund you ___ it breaks", bucket: 0 },
            { text: 'keep the receipt ___ it breaks', bucket: 1 },
          ],
          explanation: 'if = the action depends on it · in case = do it now as insurance. Same "it breaks", opposite logic!',
        },
        {
          id: 'm3l1-d8',
          type: 'transform',
          source: "If you don't apologise, I'm telling Mum.",
          keyword: 'unless',
          accepted: [
            "Unless you apologise I'm telling Mum",
            "I'm telling Mum unless you apologise",
            'Unless you apologise I am telling Mum',
          ],
          explanation: 'if not → **unless**: *Unless you apologise, I\'m telling Mum.*',
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm3l1-e1',
          type: 'speed',
          secondsPerItem: 8,
          items: [
            { question: 'If you freeze water, it ___.', options: ['expands', 'will expand'], correct: 0 },
            { question: "If it ___, we'll cancel.", options: ['rains', 'will rain'], correct: 0 },
            { question: "___ you hurry, you'll be late.", options: ['Unless', 'If'], correct: 0 },
            { question: 'Take a map ___ you get lost.', options: ['in case', 'unless'], correct: 0 },
            { question: 'If you see her, ___ hello.', options: ['say', 'will say'], correct: 0 },
            { question: "If he ___, start without him.", options: ["doesn't come", "won't come"], correct: 0 },
            { question: 'You can drive ___ you stay sober.', options: ['as long as', 'in case'], correct: 0 },
            { question: "If I'm late, they ___ furious.", options: ['will be', 'are be'], correct: 0 },
            { question: 'When you mix red and white, you ___ pink.', options: ['get', 'will got'], correct: 0 },
            { question: "I'll call when I ___ home.", options: ['get', 'will get'], correct: 0 },
          ],
          explanation: 'zero = present+present · first = present+will · unless = if not · in case = insurance.',
        },
      ],
    },
  ],
  boss: {
    passPct: 80,
    exercises: [
      {
        id: 'm3l1-boss1',
        type: 'mcq',
        question: 'If you ___ this switch, the whole floor loses power. Ask me how I know.',
        options: ['flip', 'will flip'],
        correct: 0,
        explanation: 'Reliable cause-effect → zero conditional.',
      },
      {
        id: 'm3l1-boss2',
        type: 'gap',
        before: 'If the strike goes ahead, we',
        after: 'from home all week.',
        hint: 'work (future)',
        accepted: ['will work', "'ll work", 'will be working', "'ll be working"],
        explanation: 'Real future consequence → **will work** (or *will be working*).',
      },
      {
        id: 'm3l1-boss3',
        type: 'error-hunt',
        sentence: "If you will ask nicely, she'll probably help you.",
        wrongIndex: 2,
        correction: '– (If you ask)',
        explanation: 'No *will* in the if-clause: **If you ask nicely…**',
      },
      {
        id: 'm3l1-boss4',
        type: 'mcq',
        question: "___ the weather improves, the match will be called off.",
        options: ['Unless', 'As long as'],
        correct: 0,
        explanation: '= if the weather does NOT improve → **Unless**.',
      },
      {
        id: 'm3l1-boss5',
        type: 'mcq',
        question: 'Leave a key with the neighbours ___ you lock yourself out again.',
        options: ['in case', 'if'],
        correct: 0,
        explanation: 'Precaution in advance → **in case**.',
      },
      {
        id: 'm3l1-boss6',
        type: 'mcq',
        question: 'You can put the tent anywhere, ___ it\'s not on my flowerbed.',
        options: ['provided', 'in case'],
        correct: 0,
        explanation: 'Strict condition → **provided (that)**.',
      },
      {
        id: 'm3l1-boss7',
        type: 'order',
        correct: 'If the alarm goes off, leave by the back stairs.',
        distractors: ['will', 'went'],
        explanation: 'Condition + imperative instruction.',
      },
      {
        id: 'm3l1-boss8',
        type: 'mcq',
        question: 'If the baby ___ asleep by eight, we might actually watch a film.',
        options: ['is', 'will be'],
        correct: 0,
        explanation: 'Present in the if-clause, modal in the result.',
      },
      {
        id: 'm3l1-boss9',
        type: 'gap',
        before: 'When you',
        after: 'the lid, the pressure releases automatically.',
        hint: 'turn',
        accepted: ['turn'],
        explanation: 'Zero conditional with *when* → **turn**.',
      },
      {
        id: 'm3l1-boss10',
        type: 'transform',
        source: "You won't get a refund if you don't keep the receipt.",
        keyword: 'unless',
        accepted: [
          "You won't get a refund unless you keep the receipt",
          'You will not get a refund unless you keep the receipt',
          "Unless you keep the receipt you won't get a refund",
        ],
        explanation: 'if not → **unless you keep the receipt**.',
      },
      {
        id: 'm3l1-boss11',
        type: 'mcq',
        question: "If you've finished the level, the boss door ___ automatically.",
        options: ['opens', 'would open'],
        correct: 0,
        explanation: 'General rule of the game → zero conditional. (How meta.)',
      },
    ],
  },
};
