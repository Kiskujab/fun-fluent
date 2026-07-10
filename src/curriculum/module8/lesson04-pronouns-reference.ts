import type { Lesson } from '../../types';

export const m8l4: Lesson = {
  id: 'm8l4',
  title: 'Pronouns & Reference',
  subtitle: 'one, it, impersonal you & they',
  minutes: 40,
  goals: [
    'Choose it vs there without hesitation',
    'Master preparatory it: I find it hard to believe',
    'Go impersonal: you, they, one and singular they',
    'Polish reflexives, each other and one/ones',
  ],
  cards: [
    {
      title: 'it vs there',
      body: `Two empty subjects with different jobs:

- **there + be** announces that something **exists**:
> **There's** a spider in the bath. 🕷️
> **There are** two ways up this mountain.

- **it** points at something already known, or fills the subject seat:
> I love this song — **it**'s from the 90s.

The trap: introducing something new with *it*:

> ~~It's a spider in the bath~~ → **There's** a spider in the bath.`,
      miniCheck: {
        id: 'm8l4-c1',
        type: 'mcq',
        question: '___ is a spider in the bath.',
        options: ['There', 'It', 'This'],
        correct: 0,
        explanation:
          'New existence → **there is**. *It is a spider* would answer "What is that thing?"',
      },
    },
    {
      title: 'Empty it: weather, time, distance',
      body: `English sentences demand a subject, even when nothing is doing anything. Enter **empty it**:

> **It**'s raining. 🌧️ · **It**'s Tuesday. · **It**'s half past six.
> **It**'s 300 km to the coast. · **It**'s getting dark.
> **It**'s ages since we last met.

Weather, time, dates, distance, general situations — *it* holds the seat so the grammar can start.`,
      miniCheck: {
        id: 'm8l4-c2',
        type: 'gap',
        before: '',
        after: 'is only two kilometres to the refuge — nearly there! (distance)',
        hint: 'empty subject',
        accepted: ['it'],
        explanation: 'Distance statements use empty **it**: *It is 2 km to the refuge.*',
      },
    },
    {
      title: 'Preparatory it',
      body: `When the real subject is a whole clause, English pushes it to the end and parks **it** up front:

> ~~To argue with referees is pointless~~ (correct but stiff)
> → **It**'s pointless **to argue** with referees. ✨

Also as a **preparatory object** after *find, make, think, consider*:

> I find **it** hard **to believe** he forgot.
> The noise made **it** impossible **to sleep**.

And the character pattern: **It was kind/brave/silly of you to…**`,
      miniCheck: {
        id: 'm8l4-c3',
        type: 'mcq',
        question: '___ was brave of you to try the boss level first.',
        options: ['It', 'There', 'One'],
        correct: 0,
        explanation:
          'Character + *of you* + to-infinitive → preparatory **it**: *It was brave of you to…*',
      },
    },
    {
      title: 'The anonymous crowd: you, they, one',
      body: `Talking about people in general:

- **you** — everyday impersonal (not YOU personally):
> **You** never know what mountain weather will do.

- **they** — "people out there" or the authorities:
> **They** say the hotel is haunted.
> **They**'re raising ticket prices again. 😤

- **one** — very formal, slightly monocle-wearing 🧐:
> **One** cannot please everyone.`,
      miniCheck: {
        id: 'm8l4-c4',
        type: 'mcq',
        question: '"___ never know," she said, tapping her nose. (people in general)',
        options: ['You', 'It', 'He'],
        correct: 0,
        explanation:
          'Everyday impersonal English uses **you** — it means *anyone*, not the listener personally.',
      },
    },
    {
      title: 'Singular they',
      body: `When the person is unknown or gender doesn't matter, modern English uses **they/them/their** for one person:

> **Everyone** brought **their** own lunch.
> If **anyone** calls, tell **them** I'll be back at three.
> **Somebody** left **their** umbrella here.

This is standard, exam-approved English — far better than the clunky *his or her* and the outdated *his*.`,
      miniCheck: {
        id: 'm8l4-c5',
        type: 'mcq',
        question: 'Someone dropped ___ phone in the lake. Poor soul.',
        options: ['their', 'his', 'it'],
        correct: 0,
        explanation:
          'Unknown person → singular **their**: *Someone dropped their phone.*',
      },
    },
    {
      title: 'Reflexives & each other',
      body: `- **Reflexive** — the action bounces back:
> He cut **himself** shaving. · Behave **yourselves**!

- **by myself** = alone: *I travelled **by myself**.*
- **Emphatic** — the actual person, imagine!:
> The CEO **herself** replied to my email.

- **each other** — the action crosses over (A→B and B→A):
> Anna and Marco text **each other** daily.
> vs. They blamed **themselves**. (each blamed their own self)`,
      miniCheck: {
        id: 'm8l4-c6',
        type: 'mcq',
        question: 'They looked at ___ and burst out laughing. (A looked at B, B looked at A)',
        options: ['each other', 'themselves', 'himself'],
        correct: 0,
        explanation:
          'Crossing action → **each other**. *Themselves* would mean they each stared at a mirror.',
      },
    },
    {
      title: 'one & ones: the stand-ins',
      body: `Avoid repeating a countable noun with **one / ones**:

> My laptop is ancient — I need a new **one**.
> Which shoes? The **ones** by the door.
> "Which cake?" "The chocolate **one**, obviously."

⚠️ Not for uncountables:

> ~~I need new advice; the old one was useless~~
> → I need new advice; the old **advice** was useless.`,
      miniCheck: {
        id: 'm8l4-c7',
        type: 'gap',
        before: 'My laptop is ancient — I need a new',
        after: '. (substitute word)',
        hint: 'stand-in',
        accepted: ['one'],
        explanation: 'Countable noun already mentioned → substitute with **one**.',
      },
    },
  ],
  sets: [
    {
      title: 'It or There?',
      icon: '🌦️',
      exercises: [
        {
          id: 'm8l4-a1',
          type: 'mcq',
          question: '___ no reason to panic.',
          options: ["There's", "It's", 'Its'],
          correct: 0,
          explanation:
            'Announcing that something (a reason) exists → **there is**: *There\'s no reason to panic.*',
        },
        {
          id: 'm8l4-a2',
          type: 'gap',
          before: '',
          after: 'is getting late — shall we head back to camp? (empty subject)',
          hint: 'empty subject',
          accepted: ['it'],
          explanation: 'Time and general situations take empty **it**: *It is getting late.*',
        },
        {
          id: 'm8l4-a3',
          type: 'error-hunt',
          sentence: 'It is a strange noise coming from the cellar.',
          wrongIndex: 0,
          correction: 'There',
          explanation:
            'Introducing something new → **There is a strange noise…**. *It is* would identify a known noise.',
        },
        {
          id: 'm8l4-a4',
          type: 'mcq',
          question: '___ takes forty minutes to reach the summit.',
          options: ['It', 'There', 'This'],
          correct: 0,
          explanation:
            'Time-taken statements use empty **it**: *It takes forty minutes to…*',
        },
        {
          id: 'm8l4-a5',
          type: 'sort',
          prompt: 'it or there?',
          buckets: ['it', 'there'],
          items: [
            { text: '___ is raining again.', bucket: 0 },
            { text: '___ is a fly in my tea.', bucket: 1 },
            { text: '___ is five kilometres to the village.', bucket: 0 },
            { text: '___ are two ways to solve this.', bucket: 1 },
            { text: '___ is no milk left.', bucket: 1 },
            { text: '___ was Sunday, and the town was silent.', bucket: 0 },
          ],
          explanation:
            'Existence → **there**; weather, time, distance, dates → empty **it**.',
        },
        {
          id: 'm8l4-a6',
          type: 'gap',
          before: 'I find',
          after: 'hard to believe that he forgot again. (preparatory object)',
          hint: 'one little word',
          accepted: ['it'],
          explanation:
            'After *find/make/consider*, park **it** before the adjective: *I find it hard to believe…*',
        },
        {
          id: 'm8l4-a7',
          type: 'error-hunt',
          sentence: 'There is difficult to learn articles without practice.',
          wrongIndex: 0,
          correction: 'It',
          explanation:
            'Adjective + to-infinitive needs preparatory **it**: *It is difficult to learn…* — nothing "exists" here.',
        },
        {
          id: 'm8l4-a8',
          type: 'mcq',
          question: 'It was very kind ___ you to wait for me.',
          options: ['of', 'from', 'by'],
          correct: 0,
          explanation:
            'Character adjectives take **of**: *kind/brave/silly of you to…*',
        },
        {
          id: 'm8l4-a9',
          type: 'transform',
          prompt: 'Rewrite starting with the keyword.',
          source: 'To argue with the referee is pointless.',
          keyword: 'IT',
          accepted: [
            'It is pointless to argue with the referee',
            "It's pointless to argue with the referee",
          ],
          explanation:
            'Heavy subject clause → push it to the end: **It is pointless to argue with the referee.**',
        },
      ],
    },
    {
      title: 'The Anonymous Crowd',
      icon: '👥',
      exercises: [
        {
          id: 'm8l4-b1',
          type: 'mcq',
          question: '___ never know what the weather will do in the mountains. (people in general, informal)',
          options: ['You', 'They', 'It'],
          correct: 0,
          explanation:
            'Everyday impersonal English → **you**: *You never know…* means *no one ever knows*.',
        },
        {
          id: 'm8l4-b2',
          type: 'mcq',
          question: '___ say the hotel is haunted. (a rumour — people in general)',
          options: ['They', 'You', 'It'],
          correct: 0,
          explanation:
            'Rumours belong to the anonymous **they**: *They say…* (Module 5 fans: = *It is said that…*)',
        },
        {
          id: 'm8l4-b3',
          type: 'gap',
          before: '',
          after: "should always check one's equipment before a climb. (very formal, impersonal)",
          hint: 'monocle-wearing pronoun 🧐',
          accepted: ['one'],
          explanation:
            'Ultra-formal impersonal subject: **One should always check one\'s equipment.**',
        },
        {
          id: 'm8l4-b4',
          type: 'mcq',
          question: "___ 're putting the ticket prices up again. (the authorities)",
          options: ['They', 'You', 'We'],
          correct: 0,
          explanation:
            'The faceless authorities are always **they**: *They\'re putting prices up again.*',
        },
        {
          id: 'm8l4-b5',
          type: 'error-hunt',
          sentence: 'Everyone should bring his own lunch to the picnic.',
          wrongIndex: 3,
          correction: 'their',
          explanation:
            'Modern English uses singular **they** after *everyone/anyone/someone*: *bring their own lunch*.',
        },
        {
          id: 'm8l4-b6',
          type: 'mcq',
          question: "If anyone calls, please tell ___ I'll be back at three.",
          options: ['them', 'him', 'it'],
          correct: 0,
          explanation:
            'Unknown caller → singular **them**: *tell them I\'ll be back*.',
        },
        {
          id: 'm8l4-b7',
          type: 'sort',
          prompt: 'Sort by register.',
          buckets: ['informal / neutral', 'formal'],
          items: [
            { text: "You can't please everyone.", bucket: 0 },
            { text: 'One cannot please everyone.', bucket: 1 },
            { text: 'You never know.', bucket: 0 },
            { text: 'One never knows.', bucket: 1 },
            { text: "They say it's going to snow.", bucket: 0 },
            { text: 'It is said that snow is expected.', bucket: 1 },
          ],
          explanation:
            'Same meaning, different outfits: **you/they** in jeans, **one / it is said** in a dinner jacket.',
        },
        {
          id: 'm8l4-b8',
          type: 'gap',
          before: 'Somebody left',
          after: 'umbrella in the hall — could they come and collect it? (possessive, unknown person)',
          hint: 'singular they family',
          accepted: ['their'],
          explanation:
            'Unknown owner → **their** umbrella. Singular they has a full pronoun set: they/them/their.',
        },
        {
          id: 'm8l4-b9',
          type: 'transform',
          prompt: 'Rewrite informally using the keyword.',
          source: 'People say that one learns best by teaching.',
          keyword: 'YOU',
          accepted: [
            'They say you learn best by teaching',
            'They say that you learn best by teaching',
            'You learn best by teaching',
          ],
          explanation:
            'Formal *one learns* → everyday **you learn**; *people say* → **they say**.',
        },
      ],
    },
    {
      title: 'Mirror Maze',
      icon: '🪞',
      exercises: [
        {
          id: 'm8l4-d1',
          type: 'mcq',
          question: "Careful with that knife — you'll cut ___!",
          options: ['yourself', 'you', 'each other'],
          correct: 0,
          explanation:
            'The action bounces back to the subject → reflexive **yourself**.',
        },
        {
          id: 'm8l4-d2',
          type: 'mcq',
          question: 'Anna and Marco text ___ every day. (A→B and B→A)',
          options: ['each other', 'themselves', 'herself'],
          correct: 0,
          explanation:
            'Crossing action → **each other**. *Themselves* would mean they text their own numbers. 📱',
        },
        {
          id: 'm8l4-d3',
          type: 'error-hunt',
          sentence: 'He taught himselves to play the guitar in a month.',
          wrongIndex: 2,
          correction: 'himself',
          explanation:
            'Singular reflexive: **himself**. The plural is *themselves* — one self per person, please.',
        },
        {
          id: 'm8l4-d4',
          type: 'gap',
          before: 'I prefer travelling by',
          after: '— no compromises, no waiting for anyone. (alone)',
          hint: 'reflexive',
          accepted: ['myself'],
          explanation: '**by myself** = alone. *I did it myself* (no *by*) = without help.',
        },
        {
          id: 'm8l4-d5',
          type: 'mcq',
          question: 'The CEO ___ answered my email. (emphatic — the actual CEO, imagine!)',
          options: ['herself', 'her', 'hers'],
          correct: 0,
          explanation:
            'Emphatic reflexive: **the CEO herself** = no assistant, the real one.',
        },
        {
          id: 'm8l4-d6',
          type: 'mcq',
          question: 'Which coat do you prefer? The red ___ or the blue ___?',
          options: ['one / one', 'ones / one', 'one / ones'],
          correct: 0,
          explanation: 'One coat each time → singular **one** twice.',
        },
        {
          id: 'm8l4-d7',
          type: 'error-hunt',
          sentence: "I don't need new advice; the old one was fine.",
          wrongIndex: 7,
          correction: 'advice',
          explanation:
            '**one** only replaces countable nouns — uncountable *advice* must be repeated (or dropped).',
        },
        {
          id: 'm8l4-d8',
          type: 'gap',
          before: 'These gloves are worn out — I need some new',
          after: '. (substitute word)',
          hint: 'plural stand-in',
          accepted: ['ones'],
          explanation: 'Plural countable noun → substitute **ones**: *some new ones*.',
        },
        {
          id: 'm8l4-d9',
          type: 'match',
          prompt: 'Match the phrase to its meaning.',
          pairs: [
            ['by myself', 'alone, without help or company'],
            ['the minister himself', 'emphatic — the actual person'],
            ['each other', 'A did it to B, and B to A'],
            ['themselves', 'each person did it to themselves'],
          ],
          explanation:
            'Four mirrors, four reflections — the crossing one is **each other**.',
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm8l4-e1',
          type: 'speed',
          secondsPerItem: 8,
          items: [
            { question: '___ is a wasp on your sandwich!', options: ['There', 'It'], correct: 0 },
            { question: '___ is Tuesday today.', options: ['It', 'There'], correct: 0 },
            { question: 'Behave ___, kids!', options: ['yourselves', 'yourself'], correct: 0 },
            { question: 'I made it ___ — no help at all.', options: ['myself', 'me'], correct: 0 },
            { question: 'If anyone asks, tell ___.', options: ['them', 'him'], correct: 0 },
            { question: '___ say prices will fall.', options: ['They', 'It'], correct: 0 },
            { question: "I'd like the blue ___.", options: ['one', 'ones'], correct: 0 },
            { question: "It's easy ___ mistakes.", options: ['to make', 'making'], correct: 0 },
            { question: '___ is no time to lose.', options: ['There', 'It'], correct: 0 },
            { question: 'She fixed the bike ___.', options: ['herself', 'himself'], correct: 0 },
          ],
          explanation: 'Pronoun reflexes — mirror-polished!',
        },
      ],
    },
  ],
  boss: {
    passPct: 80,
    exercises: [
      {
        id: 'm8l4-boss1',
        type: 'mcq',
        question: 'Which is correct?',
        options: [
          "There's a problem with the printer.",
          "It's a problem with the printer.",
          'Its a problem with the printer.',
        ],
        correct: 0,
        explanation:
          'Announcing a new problem → **There\'s a problem**. (*It\'s a problem* = identifying a known thing.)',
      },
      {
        id: 'm8l4-boss2',
        type: 'gap',
        before: '',
        after: 'was impossible to sleep with all that noise. (empty subject)',
        hint: 'empty subject',
        accepted: ['it'],
        explanation:
          'Adjective + to-infinitive → preparatory **it**: *It was impossible to sleep.*',
      },
      {
        id: 'm8l4-boss3',
        type: 'error-hunt',
        sentence: 'It are two reasons why this plan will fail.',
        wrongIndex: 0,
        correction: 'There',
        explanation:
          'Existence of two reasons → **There are two reasons…**.',
      },
      {
        id: 'm8l4-boss4',
        type: 'mcq',
        question: "___ can't smoke anywhere in the building. (impersonal, everyday)",
        options: ['You', 'One', 'He'],
        correct: 0,
        explanation:
          'Everyday rules use impersonal **you**. *One cannot smoke* is grammatical but sounds like a butler.',
      },
      {
        id: 'm8l4-boss5',
        type: 'error-hunt',
        sentence: 'Paula and her sister often borrow themselves clothes.',
        wrongIndex: 6,
        correction: "each other's",
        explanation:
          'Crossing action between two people → **borrow each other\'s clothes**.',
      },
      {
        id: 'm8l4-boss6',
        type: 'gap',
        before: 'Everyone forgot',
        after: 'lines at the dress rehearsal. (possessive, unknown gender)',
        hint: 'singular they family',
        accepted: ['their'],
        explanation:
          'After *everyone*, modern English uses **their**: *Everyone forgot their lines.*',
      },
      {
        id: 'm8l4-boss7',
        type: 'mcq',
        question: 'I find ___ strange that nobody complained.',
        options: ['it', 'this', 'there'],
        correct: 0,
        explanation:
          'Preparatory object: *find* + **it** + adjective + that-clause.',
      },
      {
        id: 'm8l4-boss8',
        type: 'sort',
        prompt: 'Reflexive or each other?',
        buckets: ['reflexive (self)', 'each other (A↔B)'],
        items: [
          { text: 'He hurt ___ falling off the ladder.', bucket: 0 },
          { text: 'The two boxers respected ___.', bucket: 1 },
          { text: 'I bought ___ a treat.', bucket: 0 },
          { text: 'The neighbours greet ___ every morning.', bucket: 1 },
          { text: 'Talking to ___ is not a bad sign.', bucket: 0 },
          { text: 'Romeo and Juliet loved ___.', bucket: 1 },
        ],
        explanation:
          'Bounce-back → reflexive; crossing action between people → **each other**.',
      },
      {
        id: 'm8l4-boss9',
        type: 'mcq',
        question: 'Which sentence is natural?',
        options: [
          "I don't like this music — can we listen to something else?",
          "I don't like this music — can we listen to another one?",
          "I don't like this music — can we listen to other?",
        ],
        correct: 0,
        explanation:
          '*music* is uncountable, so **one** can\'t stand in for it — use *something else*.',
      },
      {
        id: 'm8l4-boss10',
        type: 'transform',
        prompt: 'Rewrite using the keyword.',
        source: 'Nobody helped me build the shed.',
        keyword: 'MYSELF',
        accepted: [
          'I built the shed myself',
          'I built the shed by myself',
          'I built the shed all by myself',
        ],
        explanation:
          'No help → **I built the shed (by) myself** — the reflexive carries the "alone" meaning.',
      },
      {
        id: 'm8l4-boss11',
        type: 'mcq',
        question: 'Pick the correct sentence.',
        options: [
          'It was Maria herself who suggested the idea.',
          'It was Maria sheself who suggested the idea.',
          'There was Maria herself who suggested the idea.',
        ],
        correct: 0,
        explanation:
          'It-cleft + emphatic reflexive: **It was Maria herself who…** — Module 7 and Module 8 shaking hands. 🤝',
      },
    ],
  },
};
