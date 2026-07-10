import type { Lesson } from '../../types';

export const m2l3: Lesson = {
  id: 'm2l3',
  title: 'Cold Case Files',
  subtitle: "must have, can't have — past deduction",
  minutes: 40,
  goals: [
    'Solve past mysteries with must have / can\'t have + participle',
    'Weigh past possibilities with might/may/could have',
    'Regret & criticise elegantly: should(n\'t) have',
    "Split the classic pair: needn't have vs didn't need to",
  ],
  cards: [
    {
      title: 'must have + participle — case closed: YES',
      body: `To deduce about the **past**, modals grow a tail: \`modal + have + past participle\`.

**must have done** = I'm sure it happened:

> The ground's wet — it **must have rained** overnight.
> He knew every answer. He **must have prepared**.

The evidence is in the present; the conclusion is about the past. Detective work across time. 🕰️`,
      miniCheck: {
        id: 'm2l3-c1',
        type: 'mcq',
        question: "The cake's gone and the dog looks guilty. He ___ it.",
        options: ['must have eaten', 'must eat'],
        correct: 0,
        explanation: 'Past deduction → **must have + participle**: the crime is complete.',
      },
    },
    {
      title: "can't have — case closed: NO",
      body: `**can't / couldn't have done** = I'm sure it did NOT happen:

> She **can't have taken** your keys — she wasn't even here.
> He **couldn't have written** this. He can't even spell 'necessary'.

Same trap as the present: never ~~mustn't have~~ for deduction. The sure-it's-false modal is always **can't / couldn't**.`,
      miniCheck: {
        id: 'm2l3-c2',
        type: 'mcq',
        question: "He ___ have written this poem — he hates poetry!",
        options: ["can't", "mustn't"],
        correct: 0,
        explanation: "Sure it's false about the past → **can't have written**.",
      },
    },
    {
      title: 'might / may / could have — the maybe pile',
      body: `Unsolved cases get the 50% modals + *have*:

> She's late. She **might have missed** the earlier train.
> It **could have been** Leo you saw — he has a twin.

Negatives, as before, split personalities:

- **might not / may not have** = maybe it didn't happen
- **couldn't have** = it definitely didn't (impossible)`,
      miniCheck: {
        id: 'm2l3-c3',
        type: 'gap',
        before: "I can't find my glasses — I",
        after: 'them at the café.',
        hint: 'might / leave',
        accepted: ['might have left'],
        explanation: 'Past possibility → **might have left**.',
      },
    },
    {
      title: "should have — the Department of Regret",
      body: `**should have done** = it was a good idea… and it didn't happen. Regret & criticism, beautifully compressed:

> You **should have told** me you were vegetarian — I made goulash!
> I **shouldn't have eaten** that fourth slice. 🫠

Point it at yourself for regret, at others for (gentle) blame:

> We **should have taken** the motorway. This 'shortcut' has cost us an hour.`,
      miniCheck: {
        id: 'm2l3-c4',
        type: 'mcq',
        question: 'I failed the theory test. I ___ have studied more.',
        options: ['should', 'must'],
        correct: 0,
        explanation: 'Regret about the past → **should have studied**.',
      },
    },
    {
      title: 'could have — the road not taken',
      body: `**could have done** = it was possible, but it didn't happen. Two flavours:

**Near misses** (usually with a gasp):

> Careful! You **could have been** hurt!

**Unused opportunities** (usually with a sigh):

> She **could have gone** to Oxford, but she chose art school.
> We **could have won** — if our striker hadn't been injured.`,
      miniCheck: {
        id: 'm2l3-c5',
        type: 'mcq',
        question: 'We ___ have won, but our striker was injured.',
        options: ['could', "can't"],
        correct: 0,
        explanation: 'A possibility that never happened → **could have won**.',
      },
    },
    {
      title: "needn't have vs didn't need to",
      body: `A C1 favourite — both are about unnecessary things, but:

**needn't have done** = you DID it… and it was pointless:

> I **needn't have brought** an umbrella — it stayed sunny all day. (I carried it around like a fool)

**didn't need to do** = it wasn't necessary — and you probably didn't do it:

> We **didn't need to pay** — the tickets were free, so we kept our money.

One tells a story of wasted effort; the other of effort happily avoided.`,
      miniCheck: {
        id: 'm2l3-c6',
        type: 'mcq',
        question: 'I ___ have cooked — they brought three pizzas anyway.',
        options: ["needn't", "mustn't"],
        correct: 0,
        explanation: 'I cooked, and it was unnecessary → **needn\'t have cooked**.',
      },
    },
    {
      title: 'Cold Case Files — the map',
      body: `The past-modal machine: \`modal + have + past participle\`

- **must have** — surely happened · **can't/couldn't have** — surely didn't
- **might / may / could have** — maybe happened
- **should(n't) have** — regret & criticism
- **could have** — near misses & missed chances
- **needn't have** — did it, pointlessly · **didn't need to** — no need, (probably) didn't

Every cold case on the mountain is about to be solved. 🗄️`,
    },
  ],
  sets: [
    {
      title: 'The Verdict',
      icon: '🧑‍⚖️',
      exercises: [
        {
          id: 'm2l3-a1',
          type: 'mcq',
          question: 'The streets are white — it ___ overnight.',
          options: ['must have snowed', 'must snow'],
          correct: 0,
          explanation: 'Past deduction from present evidence → **must have snowed**.',
        },
        {
          id: 'm2l3-a2',
          type: 'mcq',
          question: 'She ___ have seen us — she walked straight past!',
          options: ["can't", "mustn't"],
          correct: 0,
          explanation: "Sure it didn't happen → **can't have seen**.",
        },
        {
          id: 'm2l3-a3',
          type: 'gap',
          before: 'The lock was forced — someone',
          after: 'in while we were out.',
          hint: 'must / break',
          accepted: ['must have broken'],
          explanation: 'Certain past conclusion → **must have broken** in.',
        },
        {
          id: 'm2l3-a4',
          type: 'mcq',
          question: 'He knew every single answer. He ___ beforehand.',
          options: ['must have prepared', 'must prepare'],
          correct: 0,
          explanation: 'The preparing happened in the past → **must have prepared**.',
        },
        {
          id: 'm2l3-a5',
          type: 'error-hunt',
          sentence: "They mustn't have received my email — no reply for a week.",
          wrongIndex: 1,
          correction: "can't",
          explanation: "Negative deduction → **can't have received**. *Mustn't* never plays detective.",
        },
        {
          id: 'm2l3-a6',
          type: 'mcq',
          question: "You ___ met my brother — I don't have one!",
          options: ["can't have", 'must have'],
          correct: 0,
          explanation: 'Logically impossible → **can\'t have met**.',
        },
        {
          id: 'm2l3-a7',
          type: 'order',
          correct: 'She must have forgotten our meeting.',
          distractors: ["can't", 'forgot'],
          explanation: 'must + have + past participle: **must have forgotten**.',
        },
        {
          id: 'm2l3-a8',
          type: 'mcq',
          question: 'The lights were on all night. Someone ___ at home.',
          options: ['must have been', 'must be'],
          correct: 0,
          explanation: 'Deduction about the past → **must have been**.',
        },
        {
          id: 'm2l3-a9',
          type: 'transform',
          source: "I'm sure the neighbours heard the party.",
          keyword: 'must',
          accepted: ['The neighbours must have heard the party'],
          explanation: 'Certainty about the past → **must have heard**.',
        },
      ],
    },
    {
      title: 'Maybe, Maybe Not',
      icon: '🤷',
      exercises: [
        {
          id: 'm2l3-b1',
          type: 'mcq',
          question: "She's late. She ___ the earlier train.",
          options: ['might have missed', 'might miss'],
          correct: 0,
          explanation: 'Past possibility → **might have missed**.',
        },
        {
          id: 'm2l3-b2',
          type: 'gap',
          before: "Don't panic — he",
          after: 'his phone at home. He does that.',
          hint: 'may / leave',
          accepted: ['may have left'],
          explanation: 'Possible past explanation → **may have left**.',
        },
        {
          id: 'm2l3-b3',
          type: 'mcq',
          question: 'It ___ been Leo you saw — he has a twin, you know.',
          options: ['could have', "can't have"],
          correct: 0,
          explanation: 'A real possibility → **could have been**.',
        },
        {
          id: 'm2l3-b4',
          type: 'mcq',
          question: 'She might not ___ the message yet — give her an hour.',
          options: ['have seen', 'saw'],
          correct: 0,
          explanation: 'might not + **have + participle** for the past.',
        },
        {
          id: 'm2l3-b5',
          type: 'mcq',
          question: "They ___ have gone far — the engine's still warm.",
          options: ["can't", 'might'],
          correct: 0,
          explanation: 'The warm engine rules it out → **can\'t have gone** far.',
        },
        {
          id: 'm2l3-b6',
          type: 'order',
          correct: 'He might have taken the wrong exit.',
          distractors: ['must', 'takes'],
          explanation: 'Past possibility → **might have taken**.',
        },
        {
          id: 'm2l3-b7',
          type: 'mcq',
          question: "I don't know why the plants died. I ___ them too much.",
          options: ['might have watered', 'might water'],
          correct: 0,
          explanation: 'Speculating about a past cause → **might have watered**.',
        },
        {
          id: 'm2l3-b8',
          type: 'error-hunt',
          sentence: 'She could has left a note, at least.',
          wrongIndex: 2,
          correction: 'have',
          explanation: 'After a modal, always **have**: *could have left* — never ~~could has~~.',
        },
      ],
    },
    {
      title: 'The Hindsight Bureau',
      icon: '🏛️',
      exercises: [
        {
          id: 'm2l3-d1',
          type: 'mcq',
          question: "I ___ have said that. I'm so sorry.",
          options: ["shouldn't", "mustn't"],
          correct: 0,
          explanation: 'Regret about a past action → **shouldn\'t have said**.',
        },
        {
          id: 'm2l3-d2',
          type: 'gap',
          before: 'You',
          after: 'me you were vegetarian — I made goulash!',
          hint: 'should / tell',
          accepted: ['should have told'],
          explanation: 'Criticism of a past omission → **should have told**.',
        },
        {
          id: 'm2l3-d3',
          type: 'mcq',
          question: "We ___ have taken the motorway. This 'shortcut' has cost us an hour.",
          options: ['should', 'might not'],
          correct: 0,
          explanation: 'Hindsight says: better idea existed → **should have taken**.',
        },
        {
          id: 'm2l3-d4',
          type: 'mcq',
          question: 'You ___ have been badly hurt, jumping off like that!',
          options: ['could', "needn't"],
          correct: 0,
          explanation: 'A near miss → **could have been** hurt.',
        },
        {
          id: 'm2l3-d5',
          type: 'mcq',
          question: 'I ___ have cooked — they brought pizza anyway. Three hours of stew, wasted!',
          options: ["needn't", "shouldn't"],
          correct: 0,
          explanation: 'Did it + it was unnecessary → **needn\'t have cooked**.',
        },
        {
          id: 'm2l3-d6',
          type: 'mcq',
          question: 'We ___ pay in the end — the tickets were free, so the cash stayed in my pocket.',
          options: ["didn't need to", "needn't have"],
          correct: 0,
          explanation: "Not necessary AND not done → **didn't need to pay**. (needn't have = you did it pointlessly.)",
        },
        {
          id: 'm2l3-d7',
          type: 'error-hunt',
          sentence: 'You should have go to the doctor sooner.',
          wrongIndex: 3,
          correction: 'gone',
          explanation: 'should have + **past participle**: *should have gone*.',
        },
        {
          id: 'm2l3-d8',
          type: 'order',
          correct: "You shouldn't have spent so much on me!",
          distractors: ['must', 'spend'],
          explanation: 'The polite gift protest → **shouldn\'t have spent**.',
        },
        {
          id: 'm2l3-d9',
          type: 'transform',
          source: 'It was a mistake for me to sell that guitar.',
          keyword: 'should',
          accepted: [
            "I shouldn't have sold that guitar",
            'I should not have sold that guitar',
            'I should never have sold that guitar',
          ],
          explanation: 'Regret → **I shouldn\'t have sold that guitar.**',
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm2l3-e1',
          type: 'speed',
          secondsPerItem: 8,
          items: [
            { question: 'The grass is wet. It ___ rained.', options: ['must have', 'must'], correct: 0 },
            { question: 'She ___ have done it — she was abroad.', options: ["can't", "mustn't"], correct: 0 },
            { question: 'He ___ have missed the bus. Maybe.', options: ['might', 'must'], correct: 0 },
            { question: 'I ___ have said sorry. I regret it.', options: ['should', 'may'], correct: 0 },
            { question: 'You ___ have died! Never again!', options: ['could', "needn't"], correct: 0 },
            { question: 'I ___ have worried — it all worked out.', options: ["needn't", "mustn't"], correct: 0 },
            { question: 'They must ___ left early.', options: ['have', 'has'], correct: 0 },
            { question: 'You should ___ asked me first.', options: ['have', 'had'], correct: 0 },
            { question: 'She may not ___ received it.', options: ['have', 'has'], correct: 0 },
            { question: 'We ___ have locked the door. Oops.', options: ['should', 'can'], correct: 0 },
          ],
          explanation: 'modal + have + participle: must have = surely did · can\'t have = surely didn\'t · should have = regret.',
        },
      ],
    },
  ],
  boss: {
    passPct: 80,
    exercises: [
      {
        id: 'm2l3-boss1',
        type: 'mcq',
        question: "There's no milk left. The kids ___ it all.",
        options: ['must have drunk', 'must drink'],
        correct: 0,
        explanation: 'Past deduction → **must have drunk**.',
      },
      {
        id: 'm2l3-boss2',
        type: 'mcq',
        question: 'He ___ have paid — he left before the bill even came!',
        options: ["can't", "mustn't"],
        correct: 0,
        explanation: "Impossible → **can't have paid**.",
      },
      {
        id: 'm2l3-boss3',
        type: 'gap',
        before: "Sorry I'm late — I",
        after: 'the turning by the bakery.',
        hint: 'must / miss',
        accepted: ['must have missed'],
        explanation: 'Deduction about your own past → **must have missed**.',
      },
      {
        id: 'm2l3-boss4',
        type: 'mcq',
        question: "She ___ have gone to bed — it's only seven!",
        options: ["can't", 'should'],
        correct: 0,
        explanation: 'Surely not → **can\'t have gone**.',
      },
      {
        id: 'm2l3-boss5',
        type: 'gap',
        before: 'You',
        after: 'me — I sat in the wrong room for an hour!',
        hint: 'could / warn',
        accepted: ['could have warned'],
        explanation: 'An unused opportunity, with reproach → **could have warned**.',
      },
      {
        id: 'm2l3-boss6',
        type: 'mcq',
        question: "I ___ have booked earlier. Everything's sold out now.",
        options: ['should', "needn't"],
        correct: 0,
        explanation: 'Regret → **should have booked**.',
      },
      {
        id: 'm2l3-boss7',
        type: 'error-hunt',
        sentence: 'He must have took the last train home.',
        wrongIndex: 3,
        correction: 'taken',
        explanation: 'must have + **past participle**: *must have taken*.',
      },
      {
        id: 'm2l3-boss8',
        type: 'mcq',
        question: 'I ___ have brought my laptop — we did the whole workshop on paper.',
        options: ["needn't", "can't"],
        correct: 0,
        explanation: 'Carried it for nothing → **needn\'t have brought**.',
      },
      {
        id: 'm2l3-boss9',
        type: 'mcq',
        question: 'They ___ have arrived yet — the flight only landed ten minutes ago.',
        options: ["can't", "mustn't"],
        correct: 0,
        explanation: 'Ruled out by the timeline → **can\'t have arrived**.',
      },
      {
        id: 'm2l3-boss10',
        type: 'order',
        correct: 'You should have seen his face!',
        distractors: ['must', 'see'],
        explanation: 'The storyteller\'s classic → **should have seen**.',
      },
      {
        id: 'm2l3-boss11',
        type: 'transform',
        source: "I'm certain we locked the door when we left.",
        keyword: 'must',
        accepted: [
          'We must have locked the door',
          'We must have locked the door when we left',
        ],
        explanation: 'Confident past deduction → **must have locked**.',
      },
    ],
  },
};
