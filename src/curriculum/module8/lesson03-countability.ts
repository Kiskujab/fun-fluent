import type { Lesson } from '../../types';

export const m8l3: Lesson = {
  id: 'm8l3',
  title: 'Countability & Compounds',
  subtitle: 'uncountables, plurals, possessives',
  minutes: 40,
  goals: [
    'Tame the uncountable hall of fame: news, advice, furniture',
    'Handle plural-only nouns and shape-shifting meanings',
    'Build compounds like a native: shoe shop, two-hour delay',
    "Choose 's vs of without blinking",
  ],
  cards: [
    {
      title: 'The uncountable hall of fame',
      body: `These nouns look plural-friendly in many languages but are strictly **uncountable** in English — singular verb, no *a*, no *-s*:

\`news\` \`advice\` \`information\` \`furniture\` \`luggage\` \`equipment\` \`research\` \`homework\` \`weather\` \`traffic\` \`progress\`

> The news **is** good. · ~~an advice~~ · ~~informations~~
> Her research **was** ground-breaking.

Quantity questions use **much / little**, never *many / few*:

> How **much** luggage are you taking?`,
      miniCheck: {
        id: 'm8l3-c1',
        type: 'mcq',
        question: 'The news ___ better than we feared.',
        options: ['is', 'are', 'be'],
        correct: 0,
        explanation:
          '**news** ends in -s but is uncountable and singular: *The news is good.*',
      },
    },
    {
      title: 'Portioning the unportionable',
      body: `To count an uncountable, borrow a container word:

> **a piece of** advice / information / furniture
> **an item of** clothing / news
> **a bit of** luck / help (informal)
> **a slice of** toast · **a loaf of** bread 🍞

> She gave me **two pieces of advice**: sleep more, worry less.

The noun stays uncountable — the *piece* does the counting.`,
      miniCheck: {
        id: 'm8l3-c2',
        type: 'gap',
        before: 'a',
        after: 'of furniture (one unit)',
        hint: 'container word',
        accepted: ['piece', 'item'],
        explanation:
          'Furniture is uncountable — count it with **a piece/item of furniture**.',
      },
    },
    {
      title: 'The plural-only club',
      body: `Some nouns come only in pairs — grammatically speaking:

\`trousers\` \`jeans\` \`shorts\` \`pyjamas\` \`glasses\` \`scissors\` \`headphones\` \`clothes\`

- Always **plural verb**: *My jeans **are** ripped.*
- To count them: **a pair of** → *two pairs of scissors*
- No singular: ~~a trouser~~, ~~a scissor~~ 🙅

> Where **are** my glasses? — They'**re** on your head.`,
      miniCheck: {
        id: 'm8l3-c3',
        type: 'mcq',
        question: 'My pyjamas ___ covered in coffee.',
        options: ['are', 'is', 'has'],
        correct: 0,
        explanation: 'Plural-only noun → plural verb: *pyjamas are*.',
      },
    },
    {
      title: 'The shape-shifters',
      body: `Many nouns are uncountable as **material/substance** and countable as **a unit**:

> **glass** (material) → **a glass** (for drinking 🥛)
> **paper** (material) → **a paper** (a newspaper / an essay)
> **hair** (all of it) → **a hair** (one strand 🫢)
> **coffee** (the drink) → **a coffee** (one cup)
> **chicken** (the meat 🍗) → **a chicken** (the bird 🐔)
> **business** (commerce) → **a business** (one company)`,
      tip: '"There is chicken in the garden" and "There is a chicken in the garden" describe two VERY different situations. Choose wisely.',
      miniCheck: {
        id: 'm8l3-c4',
        type: 'mcq',
        question: "There's ___ in my soup! (one single strand)",
        options: ['a hair', 'hair', 'hairs'],
        correct: 0,
        explanation:
          'One countable strand → **a hair**. Uncountable *hair* would mean an alarming quantity.',
      },
    },
    {
      title: 'Group nouns & odd agreement',
      body: `- **police** and **people** are always **plural**:
> The police **are** investigating. · People **are** strange.

- **Collective nouns** (*team, family, staff, government*) go both ways in British English:
> The team **is** top of the league. (one unit)
> The team **are** arguing among themselves. (the individuals)

- **everybody / everyone / nobody** — always **singular**:
> Everybody **is** welcome.`,
      miniCheck: {
        id: 'm8l3-c5',
        type: 'mcq',
        question: 'The police ___ investigating the theft of our garden gnome.',
        options: ['are', 'is', 'has'],
        correct: 0,
        explanation: '**police** is always plural: *the police are*.',
      },
    },
    {
      title: 'Compound nouns',
      body: `English glues nouns together, and the **first noun stays singular** — it acts like an adjective:

> a **shoe** shop (sells shoes, but: ~~shoes shop~~)
> a **car** key · a **toothbrush** · the **bus stop**

Measure compounds follow the same rule, with a hyphen:

> a **two-hour** delay (= a delay of two hours, ~~two-hours~~)
> a **five-star** hotel · a **ten-minute** walk
> my **two-year-old** daughter`,
      miniCheck: {
        id: 'm8l3-c6',
        type: 'mcq',
        question: 'Which compound is correct?',
        options: ['a toothbrush', 'a teethbrush', "a tooth's brush"],
        correct: 0,
        explanation:
          'First noun singular, no possessive: **toothbrush** — even though it cleans all your teeth.',
      },
    },
    {
      title: "'s vs of",
      body: `Who owns what — three routes:

- **'s** for **people, animals and time expressions**:
> **Tom's** wallet · the **dog's** bowl · **today's** news · **a week's** holiday

- **of** for **things**:
> the end **of** the film · the roof **of** the house

- **compound** when it's a type, not an owner:
> the **table leg** · the **kitchen door**

Plural possessive = apostrophe **after** the s: my **parents'** house.`,
      miniCheck: {
        id: 'm8l3-c7',
        type: 'gap',
        before: 'I found',
        after: 'wallet under the seat. (the wallet belongs to Tom)',
        hint: 'Tom + ?',
        accepted: ["Tom's"],
        explanation: "People take **'s**: *Tom's wallet*, never ~~the wallet of Tom~~.",
      },
    },
  ],
  sets: [
    {
      title: 'The Uncountable Club',
      icon: '🚫',
      exercises: [
        {
          id: 'm8l3-a1',
          type: 'mcq',
          question: 'The news ___ worse than we expected.',
          options: ['is', 'are', 'were'],
          correct: 0,
          explanation: 'Uncountable *news* → singular verb, despite the -s ending.',
        },
        {
          id: 'm8l3-a2',
          type: 'error-hunt',
          sentence: 'She gave me three useful advices about renting in London.',
          wrongIndex: 5,
          correction: 'pieces of advice',
          explanation:
            '*advice* has no plural. Count it with a container: **three pieces of advice**.',
        },
        {
          id: 'm8l3-a3',
          type: 'gap',
          before: 'Can you give me a',
          after: 'of information before I book? (one unit)',
          hint: 'container word',
          accepted: ['piece', 'bit'],
          explanation:
            'Uncountable *information* is counted with **a piece of information**.',
        },
        {
          id: 'm8l3-a4',
          type: 'sort',
          prompt: 'Countable or uncountable?',
          buckets: ['countable', 'uncountable'],
          items: [
            { text: 'furniture', bucket: 1 },
            { text: 'chair', bucket: 0 },
            { text: 'luggage', bucket: 1 },
            { text: 'suitcase', bucket: 0 },
            { text: 'research', bucket: 1 },
            { text: 'experiment', bucket: 0 },
            { text: 'homework', bucket: 1 },
            { text: 'task', bucket: 0 },
          ],
          explanation:
            'The pattern: the general mass is uncountable (*furniture, luggage*); the individual unit is countable (*chair, suitcase*).',
        },
        {
          id: 'm8l3-a5',
          type: 'mcq',
          question: 'How ___ luggage are you taking? Just one bag?',
          options: ['much', 'many', 'few'],
          correct: 0,
          explanation: 'Uncountable *luggage* takes **much**, never *many*.',
        },
        {
          id: 'm8l3-a6',
          type: 'error-hunt',
          sentence: 'We bought new equipments for the expedition last week.',
          wrongIndex: 3,
          correction: 'equipment',
          explanation:
            '*equipment* never takes -s. One unit = *a piece of equipment*.',
        },
        {
          id: 'm8l3-a7',
          type: 'match',
          prompt: 'Match the portion to its meaning.',
          pairs: [
            ['a piece of advice', 'one tip'],
            ['a bit of luck', 'a small amount of good fortune'],
            ['an item of clothing', 'one garment'],
            ['a loaf of bread', 'one whole baked unit 🍞'],
          ],
          explanation:
            'Container words let you count the uncountable: *piece, bit, item, loaf, slice*.',
        },
        {
          id: 'm8l3-a8',
          type: 'mcq',
          question: 'Her research ___ published in three journals.',
          options: ['was', 'were', 'have been'],
          correct: 0,
          explanation:
            '*research* is uncountable → singular **was**. Countable alternative: *her studies were…*',
        },
        {
          id: 'm8l3-a9',
          type: 'transform',
          prompt: 'Fix the countability mistake — rewrite the whole sentence.',
          source: 'The weathers in Scotland change quickly.',
          accepted: ['The weather in Scotland changes quickly'],
          explanation:
            '*weather* is uncountable: no plural, singular verb — **The weather changes quickly.**',
        },
      ],
    },
    {
      title: 'Shape-Shifters & Pairs',
      icon: '🧬',
      exercises: [
        {
          id: 'm8l3-b1',
          type: 'mcq',
          question: 'Your new glasses really ___ you.',
          options: ['suit', 'suits', 'is suiting'],
          correct: 0,
          explanation: 'Plural-only *glasses* → plural verb: *glasses suit you*.',
        },
        {
          id: 'm8l3-b2',
          type: 'gap',
          before: 'I need a new',
          after: 'of jeans for the trip. (one item)',
          hint: 'counting word',
          accepted: ['pair'],
          explanation: 'Plural-only clothes are counted in pairs: **a pair of jeans**.',
        },
        {
          id: 'm8l3-b3',
          type: 'mcq',
          question: '"What would you like?" "___ coffee, please — just one cup."',
          options: ['A', '(nothing)', 'Much'],
          correct: 0,
          explanation:
            'One cup = the countable unit → **a coffee**. Zero article would mean coffee in general.',
        },
        {
          id: 'm8l3-b4',
          type: 'sort',
          prompt: 'Material or unit?',
          buckets: ['uncountable meaning', 'countable meaning'],
          items: [
            { text: 'Glass is recyclable.', bucket: 0 },
            { text: 'I dropped a glass.', bucket: 1 },
            { text: 'Her hair is long.', bucket: 0 },
            { text: 'There is a hair in my soup!', bucket: 1 },
            { text: 'Paper burns easily.', bucket: 0 },
            { text: 'She writes for a paper.', bucket: 1 },
          ],
          explanation:
            'Substance → uncountable; one unit (a drinking glass, a strand, a newspaper) → countable.',
        },
        {
          id: 'm8l3-b5',
          type: 'error-hunt',
          sentence: 'The police is looking for two suspects in their twenties.',
          wrongIndex: 2,
          correction: 'are',
          explanation: '**police** is always plural: *The police are looking…*',
        },
        {
          id: 'm8l3-b6',
          type: 'mcq',
          question: 'People ___ strange, as the song goes.',
          options: ['are', 'is', 'was'],
          correct: 0,
          explanation:
            '**people** is the plural of *person* — always plural: *People are strange.*',
        },
        {
          id: 'm8l3-b7',
          type: 'error-hunt',
          sentence: 'My trousers is too tight after all that goulash.',
          wrongIndex: 2,
          correction: 'are',
          explanation: 'Plural-only *trousers* → **are**. (The goulash was worth it.)',
        },
        {
          id: 'm8l3-b8',
          type: 'match',
          prompt: 'Match each form to its meaning.',
          pairs: [
            ['chicken', 'the meat 🍗'],
            ['a chicken', 'the bird 🐔'],
            ['business', 'commerce in general'],
            ['a business', 'one company'],
          ],
          explanation:
            'The article changes the picture: substance/activity without it, one unit with it.',
        },
        {
          id: 'm8l3-b9',
          type: 'mcq',
          question: 'My family ___ all early risers.',
          options: ['are', 'is', 'be'],
          correct: 0,
          explanation:
            'With **all** we see the members as individuals → plural verb (British English).',
        },
      ],
    },
    {
      title: 'The Possessive Workshop',
      icon: '🔗',
      exercises: [
        {
          id: 'm8l3-d1',
          type: 'mcq',
          question: 'We waited at the ___ for twenty minutes.',
          options: ['bus stop', 'buses stop', "bus's stop"],
          correct: 0,
          explanation:
            'Compound noun: first noun singular, no possessive — **bus stop**.',
        },
        {
          id: 'm8l3-d2',
          type: 'error-hunt',
          sentence: 'The shoes shop on the corner has a huge summer sale.',
          wrongIndex: 1,
          correction: 'shoe',
          explanation:
            'First noun of a compound stays singular: **shoe shop**, even though it sells hundreds of shoes.',
        },
        {
          id: 'm8l3-d3',
          type: 'gap',
          before: 'It was a',
          after: 'drive to the coast, but worth it. (the drive took three hours)',
          hint: 'three + hour(s)? hyphen?',
          accepted: ['three-hour', '3-hour'],
          explanation:
            'Measure compounds are hyphenated and singular: **a three-hour drive**, ~~three-hours~~.',
        },
        {
          id: 'm8l3-d4',
          type: 'mcq',
          question: '___ car is blocking the drive. (the car belongs to my neighbour)',
          options: ["My neighbour's", 'My neighbours', 'The car of my neighbour'],
          correct: 0,
          explanation:
            "People take **'s**: *my neighbour's car*. *Of* would sound like a legal document.",
        },
        {
          id: 'm8l3-d5',
          type: 'gap',
          before: 'Have you read',
          after: "newspaper? There's a story about our street. (the paper from today)",
          hint: 'today + ?',
          accepted: ["today's"],
          explanation:
            "Time expressions take **'s**: *today's paper, yesterday's storm, next week's meeting*.",
        },
        {
          id: 'm8l3-d6',
          type: 'error-hunt',
          sentence: "We rented a flat near my grandparents's house last summer.",
          wrongIndex: 6,
          correction: "grandparents'",
          explanation:
            "Plural nouns ending in -s take only an apostrophe: **my grandparents' house**.",
        },
        {
          id: 'm8l3-d7',
          type: 'mcq',
          question: 'Which is the natural English phrase?',
          options: ['the table leg', 'the leg of table', "the table's leg"],
          correct: 0,
          explanation:
            'Part of a thing → compound (**table leg**) or *the leg of the table*. Things don\'t take \'s.',
        },
        {
          id: 'm8l3-d8',
          type: 'match',
          prompt: 'Match each phrase to the rule it follows.',
          pairs: [
            ["a week's holiday", 'time expression takes possessive'],
            ['the roof of the house', 'things prefer of'],
            ["the manager's office", "people take 's"],
            ["the dogs' owner", 'plural possessive: apostrophe after s'],
          ],
          explanation:
            "The routing table: people/animals/time → 's; things → of or compound; plurals → s'.",
        },
        {
          id: 'm8l3-d9',
          type: 'transform',
          prompt: 'Rewrite more naturally using a compound noun.',
          source: 'The meeting of the board starts at nine.',
          accepted: ['The board meeting starts at nine'],
          explanation:
            'Type-of-thing relationships prefer a compound: **the board meeting**, not *the meeting of the board*.',
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm8l3-e1',
          type: 'speed',
          secondsPerItem: 8,
          items: [
            { question: 'The news ___ shocking.', options: ['is', 'are'], correct: 0 },
            { question: 'a ___ of scissors', options: ['pair', 'piece'], correct: 0 },
            { question: 'Her hair ___ lovely.', options: ['looks', 'look'], correct: 0 },
            { question: 'The police ___ here.', options: ['are', 'is'], correct: 0 },
            { question: 'two ___ of toast', options: ['slices', 'pairs'], correct: 0 },
            { question: 'a ___ shop', options: ['shoe', 'shoes'], correct: 0 },
            { question: '___ meeting is cancelled.', options: ["Today's", 'Todays'], correct: 0 },
            { question: 'My jeans ___ ripped.', options: ['are', 'is'], correct: 0 },
            { question: 'a ten-___ walk', options: ['minute', 'minutes'], correct: 0 },
            { question: 'How ___ homework do you have?', options: ['much', 'many'], correct: 0 },
          ],
          explanation: 'Countability instincts — counted and conquered!',
        },
      ],
    },
  ],
  boss: {
    passPct: 80,
    exercises: [
      {
        id: 'm8l3-boss1',
        type: 'mcq',
        question: 'Which sentence is correct?',
        options: [
          'The furniture was delivered on time.',
          'The furnitures were delivered on time.',
          'The furniture were delivered on time.',
        ],
        correct: 0,
        explanation:
          '*furniture* is uncountable: no plural form, singular verb.',
      },
      {
        id: 'm8l3-boss2',
        type: 'gap',
        before: 'Let me give you a',
        after: 'of advice: never feed the seagulls. (one unit)',
        hint: 'container word',
        accepted: ['piece', 'word', 'bit'],
        explanation:
          'Uncountable *advice* is counted with **a piece/word of advice**.',
      },
      {
        id: 'm8l3-boss3',
        type: 'error-hunt',
        sentence: 'She bought three breads for the picnic on Saturday.',
        wrongIndex: 3,
        correction: 'loaves of bread',
        explanation:
          '*bread* is uncountable — count it in loaves or slices: **three loaves of bread**.',
      },
      {
        id: 'm8l3-boss4',
        type: 'mcq',
        question: 'Which sentence uses "paper" correctly?',
        options: [
          'She writes for a national paper.',
          'Print it on a paper.',
          'The paper are recycled.',
        ],
        correct: 0,
        explanation:
          '**a paper** = a newspaper (countable). The material is uncountable: *print it on paper*.',
      },
      {
        id: 'm8l3-boss5',
        type: 'error-hunt',
        sentence: 'The scissors is in the top drawer, next to the tape.',
        wrongIndex: 2,
        correction: 'are',
        explanation: 'Plural-only *scissors* → plural verb: *The scissors are…*',
      },
      {
        id: 'm8l3-boss6',
        type: 'mcq',
        question: 'a ___ delay at the airport',
        options: ['two-hour', 'two-hours', "two hour's"],
        correct: 0,
        explanation:
          'Measure compounds: hyphen + singular noun — **a two-hour delay**.',
      },
      {
        id: 'm8l3-boss7',
        type: 'gap',
        before: 'We spent a',
        after: 'salary on the wedding. (the salary of one month)',
        hint: "month + 's",
        accepted: ["month's"],
        explanation:
          "Time expressions take the possessive: **a month's salary, a week's holiday**.",
      },
      {
        id: 'm8l3-boss8',
        type: 'sort',
        prompt: 'Which possessive route does each phrase use?',
        buckets: ["person/animal/time → 's", 'thing → of / compound'],
        items: [
          { text: "my sister's flat", bucket: 0 },
          { text: 'the end of the film', bucket: 1 },
          { text: "yesterday's storm", bucket: 0 },
          { text: 'the kitchen door', bucket: 1 },
          { text: "the cat's whiskers", bucket: 0 },
          { text: 'the back of the room', bucket: 1 },
        ],
        explanation:
          "People, animals and time love 's; things travel by *of* or compound.",
      },
      {
        id: 'm8l3-boss9',
        type: 'mcq',
        question: 'Everybody ___ welcome to the summit party.',
        options: ['is', 'are', 'were'],
        correct: 0,
        explanation:
          '**everybody/everyone/nobody** are grammatically singular: *Everybody is welcome.*',
      },
      {
        id: 'm8l3-boss10',
        type: 'transform',
        prompt: 'Fix BOTH mistakes — rewrite the whole sentence.',
        source: 'The luggages of the passengers was searched.',
        accepted: ["The passengers' luggage was searched"],
        explanation:
          "*luggage* is uncountable (no -s), and people take the possessive: **the passengers' luggage was searched**.",
      },
      {
        id: 'm8l3-boss11',
        type: 'mcq',
        question: 'Pick the correct sentence.',
        options: [
          'My two-year-old daughter loves diggers.',
          'My two-years-old daughter loves diggers.',
          "My two year's old daughter loves diggers.",
        ],
        correct: 0,
        explanation:
          'Age compounds before a noun: hyphens everywhere, singular *year* — **two-year-old**.',
      },
    ],
  },
};
