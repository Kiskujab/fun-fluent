import type { Lesson } from '../../types';

export const m8l1: Lesson = {
  id: 'm8l1',
  title: 'Articles: The Final Boss',
  subtitle: 'a, the, zero — advanced rules',
  minutes: 45,
  goals: [
    'Make general statements like a native: zero article power',
    'Master the institution trick: school vs the school',
    'Navigate the world map: the Alps but Mount Everest',
    'Collect the fixed phrases: by car, at night, on foot',
  ],
  cards: [
    {
      title: 'Base camp: the three-way choice',
      body: `Welcome to Module 8 — the precision zone. First stop: the three little words that expose every learner.

- \`a / an\` — **one of many**, first mention, jobs: *She's **an** architect.*
- \`the\` — **we both know which one**: *Pass me **the** salt.* (the one on this table)
- **zero article** — nothing at all, and it's the hardest one to hear.

> I saw **a** fox in the garden. **The** fox stared at me.

First mention introduces (*a fox*); second mention points back (*the fox*).`,
      tip: 'When English uses NO article, Hungarian ears hear nothing missing — that\'s exactly where the traps live. Train your eye on the silence.',
      miniCheck: {
        id: 'm8l1-c1',
        type: 'mcq',
        question: 'I saw ___ dog in the park. ___ dog was chasing a drone.',
        options: ['a / The', 'the / A', 'a / A'],
        correct: 0,
        explanation:
          'First mention introduces with **a**; the second sentence points back to that known dog with **the**.',
      },
    },
    {
      title: 'Generalising like a native',
      body: `To talk about things **in general**, English goes minimalist:

> **Life** is short. · **Money** talks. · **Cats** are independent.

- **zero article** + plural or uncountable noun = the whole category
- ~~The life is short~~ · ~~The cats are independent~~ ← classic B2 giveaway

Two fancier options for formal writing:

> **The tiger** is close to extinction. (the species, formal)
> **A tiger** never changes its stripes. (any one member = all of them)`,
      miniCheck: {
        id: 'm8l1-c2',
        type: 'gap',
        before: 'Conservationists warn that',
        after: 'tiger is close to extinction. (formal species style)',
        hint: 'article',
        accepted: ['the'],
        explanation:
          'Formal species statements use **the + singular**: *the tiger*, *the smartphone*, *the wheel*.',
      },
    },
    {
      title: 'Institutions: purpose vs building',
      body: `A small club of nouns changes meaning with the article: **school, university, hospital, prison, church, bed, work, home, sea**.

- **Zero article** = you're there for its **purpose**:
> She's **in hospital**. (as a patient)
> He's **at university**. (as a student)
> They're **in prison**. (as inmates 😬)

- **the** = it's just a **building**:
> The electrician is **at the school**, fixing the lights.
> I left my umbrella **at the hospital** after visiting Gran.`,
      tip: 'British English says "in hospital" for patients; American English says "in the hospital" for everyone. GrammarPeak climbs the British route. 🇬🇧',
      miniCheck: {
        id: 'm8l1-c3',
        type: 'mcq',
        question: 'Dan is in prison. What do we know about Dan?',
        options: [
          'He is serving a sentence.',
          'He is repairing the roof there.',
          'He is visiting a friend.',
        ],
        correct: 0,
        explanation:
          'Zero article = there for the institution\'s purpose. A visitor or builder would be *at the prison*.',
      },
    },
    {
      title: 'The one and only',
      body: `**the** goes with things there is only one of — in the world, or in the sentence:

- Unique things: **the sun, the moon, the sky, the environment, the government**
- Superlatives: **the best** coffee, **the most expensive** mistake
- Ordinals & one-of-a-kind words: **the first** person, **the same** day, **the only** survivor

> She was **the only** student who finished early.
> It's **the best** view on **the** whole mountain.`,
      miniCheck: {
        id: 'm8l1-c4',
        type: 'gap',
        before: 'She was',
        after: 'only student who finished the exam early.',
        hint: 'article',
        accepted: ['the'],
        explanation:
          '**only, same, first** and superlatives all attract **the** — they point at one specific thing.',
      },
    },
    {
      title: 'The world map rules',
      body: `Geography splits neatly into two camps.

**Zero article** 🏔️
- continents, most countries, cities: *Africa, Japan, Budapest*
- single mountains & lakes: *Mount Everest, Lake Garda*
- streets, parks, stations: *Oxford Street, Central Park*

**the** 🌊
- rivers, seas, oceans: *the Nile, the Baltic, the Pacific*
- mountain ranges & deserts: *the Alps, the Sahara*
- island groups: *the Maldives, the Canaries*
- "plural" or collective countries: *the Netherlands, the USA, the UK*`,
      miniCheck: {
        id: 'm8l1-c5',
        type: 'mcq',
        question: 'We climbed ___ Kilimanjaro and then relaxed by ___ Indian Ocean.',
        options: ['(nothing) / the', 'the / the', 'the / (nothing)'],
        correct: 0,
        explanation:
          'Single mountains take zero article (*Kilimanjaro*); oceans always take **the** (*the Indian Ocean*).',
      },
    },
    {
      title: 'The + groups & the classics',
      body: `**the + adjective** = the whole group of people:

> **The rich** are getting richer. · a charity for **the homeless**
> **The injured** were taken to hospital.

**the + nationality**: **the French**, **the Dutch**, **the British**.

And the classic collocations:

- play **the** piano / **the** violin 🎻
- on **the** radio, but on ~~the~~ **television**
- go to **the** cinema / **the** theatre · surf **the** internet
- call **the** police`,
      miniCheck: {
        id: 'm8l1-c6',
        type: 'mcq',
        question: '___ rich are getting richer, according to the report.',
        options: ['The', '(nothing)', 'A'],
        correct: 0,
        explanation:
          '**the + adjective** names a group of people: *the rich*, *the poor*, *the unemployed*.',
      },
    },
    {
      title: 'The fixed-phrase souvenir shop',
      body: `Some phrases are frozen — learn them as souvenirs, not rules:

**Zero article** 🧊
> by **car / bus / train / plane** · on **foot**
> at **night** · at **noon** · at **work** · go to **bed**
> have **breakfast / lunch / dinner**

**With the** 🔥
> in **the** morning / afternoon / evening
> in **the** future · at **the** moment · in **the** end

And one sneaky meaning: **a = per** → *once **a** week, £3 **a** kilo*.`,
      miniCheck: {
        id: 'm8l1-c7',
        type: 'gap',
        before: 'We travelled',
        after: 'foot for the last ten kilometres.',
        hint: 'preposition (watch the article!)',
        accepted: ['on'],
        explanation:
          'Fixed phrase: **on foot** — no article, unlike *in the car* or *on the bus*.',
      },
    },
  ],
  sets: [
    {
      title: 'The Generaliser',
      icon: '🌍',
      exercises: [
        {
          id: 'm8l1-a1',
          type: 'mcq',
          question: 'Complete: ___ happiness is more important than ___ money.',
          options: ['(nothing) / (nothing)', 'The / the', 'A / the'],
          correct: 0,
          explanation:
            'General statements with uncountable nouns take **zero article**: *Happiness is more important than money.*',
        },
        {
          id: 'm8l1-a2',
          type: 'gap',
          before: 'Biologists agree that',
          after: 'whale is the largest animal ever to have lived. (formal species style)',
          hint: 'article',
          accepted: ['the'],
          explanation:
            'Formal species statements: **the + singular** — *the whale*, *the honeybee*, *the smartphone*.',
        },
        {
          id: 'm8l1-a3',
          type: 'error-hunt',
          sentence: 'The life is hard when you are a penguin in the Sahara.',
          wrongIndex: 0,
          correction: 'Life',
          explanation:
            'General, philosophical *life* takes zero article: **Life is hard**. (*The life of a penguin* — with *of* — would take *the*.)',
        },
        {
          id: 'm8l1-a4',
          type: 'sort',
          prompt: 'Which article does the blank need?',
          buckets: ['zero article', 'the'],
          items: [
            { text: 'I love ___ chocolate.', bucket: 0 },
            { text: '___ chocolate you bought has vanished.', bucket: 1 },
            { text: '___ history repeats itself.', bucket: 0 },
            { text: '___ history of Rome is full of drama.', bucket: 1 },
            { text: 'She hates ___ Mondays.', bucket: 0 },
            { text: '___ moon is full tonight.', bucket: 1 },
          ],
          explanation:
            'General category → zero article. Specified (*you bought*, *of Rome*) or unique (*the moon*) → **the**.',
        },
        {
          id: 'm8l1-a5',
          type: 'mcq',
          question: '___ computer has changed the way we live. (formal — the invention itself)',
          options: ['The', 'A', '(nothing)'],
          correct: 0,
          explanation:
            'Inventions in formal style take **the + singular**: *The computer changed everything. The wheel started it all.*',
        },
        {
          id: 'm8l1-a6',
          type: 'order',
          prompt: 'Build the general statement — one token is a trap.',
          correct: 'Books are a uniquely portable magic.',
          distractors: ['The'],
          explanation:
            'General plural → zero article: **Books are…**, not ~~The books are~~. (Stephen King said it first.)',
        },
        {
          id: 'm8l1-a7',
          type: 'error-hunt',
          sentence: 'She gave me a good advice about my CV.',
          wrongIndex: 3,
          correction: 'some',
          explanation:
            '**advice** is uncountable — no *a*. Say *some advice* or *a piece of advice*.',
        },
        {
          id: 'm8l1-a8',
          type: 'match',
          prompt: 'Match each form to its meaning.',
          pairs: [
            ['a lion', 'one lion — any one of them'],
            ['the lion', 'the species, in formal style'],
            ['lions', 'lions in general — everyday style'],
            ['the lions', 'specific lions we both know about'],
          ],
          explanation:
            'Four forms, four jobs. Everyday generalising uses the bare plural: *Lions are dangerous.*',
        },
        {
          id: 'm8l1-a9',
          type: 'transform',
          prompt: 'Fix the article mistake — rewrite the whole sentence.',
          source: 'The unemployment is rising in the region.',
          accepted: ['Unemployment is rising in the region'],
          explanation:
            'Abstract uncountables used generally take zero article: **Unemployment is rising** — no *the*.',
        },
      ],
    },
    {
      title: 'Institution Inspection',
      icon: '🏫',
      exercises: [
        {
          id: 'm8l1-b1',
          type: 'mcq',
          question: "She's in ___ hospital — she broke her leg skiing.",
          options: ['(nothing)', 'the', 'a'],
          correct: 0,
          explanation:
            'A patient is **in hospital** (British English) — there for the institution\'s purpose, so zero article.',
        },
        {
          id: 'm8l1-b2',
          type: 'gap',
          before: 'The plumber went to',
          after: 'hospital to fix the boiler, not as a patient.',
          hint: 'article',
          accepted: ['the'],
          explanation:
            'Not a patient → it\'s just a building → **the hospital**.',
        },
        {
          id: 'm8l1-b3',
          type: 'error-hunt',
          sentence: 'Sam is at the university studying physics in Manchester.',
          wrongIndex: 3,
          correction: 'at university',
          explanation:
            'A student is **at university** — zero article. *At the university* would suggest he\'s just visiting the campus.',
        },
        {
          id: 'm8l1-b4',
          type: 'mcq',
          question: "It was ___ best meal I've had all year.",
          options: ['the', 'a', '(nothing)'],
          correct: 0,
          explanation: 'Superlatives always bring **the** along: *the best, the worst, the most expensive*.',
        },
        {
          id: 'm8l1-b5',
          type: 'sort',
          prompt: 'Purpose or building?',
          buckets: ['zero article (purpose/role)', 'the (just a building)'],
          items: [
            { text: 'go to ___ church to pray', bucket: 0 },
            { text: 'walk past ___ church on the corner', bucket: 1 },
            { text: 'be in ___ prison for theft', bucket: 0 },
            { text: 'deliver food to ___ prison', bucket: 1 },
            { text: 'start ___ school at age five', bucket: 0 },
            { text: 'meet me outside ___ school gates', bucket: 1 },
          ],
          explanation:
            'Using the institution for its purpose → zero article. Treating it as a location/building → **the**.',
        },
        {
          id: 'm8l1-b6',
          type: 'gap',
          before: 'Neil Armstrong was',
          after: 'first person to walk on the Moon.',
          hint: 'article',
          accepted: ['the'],
          explanation: 'Ordinals take **the**: *the first, the second, the last*.',
        },
        {
          id: 'm8l1-b7',
          type: 'error-hunt',
          sentence: 'The sun rises in an east and sets in the west.',
          wrongIndex: 4,
          correction: 'the',
          explanation:
            'Compass directions are one-of-a-kind: **in the east, in the west** — always *the*.',
        },
        {
          id: 'm8l1-b8',
          type: 'match',
          prompt: 'Match the phrase to the situation.',
          pairs: [
            ['in hospital', 'as a patient'],
            ['in the hospital', 'visiting or working there'],
            ['at sea', 'on a voyage'],
            ['by the sea', 'at the coast, on holiday'],
          ],
          explanation:
            'Zero article = the institution\'s purpose or a fixed idiom; **the** = the physical place.',
        },
        {
          id: 'm8l1-b9',
          type: 'transform',
          prompt: 'Fix the article mistake — rewrite the whole sentence.',
          source: 'She is a most talented violinist I have ever heard.',
          accepted: ['She is the most talented violinist I have ever heard'],
          explanation:
            'Superlative + relative clause pins down one person → **the most talented violinist I have ever heard**.',
        },
      ],
    },
    {
      title: 'Map Room',
      icon: '🗺️',
      exercises: [
        {
          id: 'm8l1-d1',
          type: 'sort',
          prompt: 'Zero article or the?',
          buckets: ['zero article', 'the'],
          items: [
            { text: '___ Mount Everest', bucket: 0 },
            { text: '___ Alps', bucket: 1 },
            { text: '___ Lake Garda', bucket: 0 },
            { text: '___ Nile', bucket: 1 },
            { text: '___ Netherlands', bucket: 1 },
            { text: '___ Japan', bucket: 0 },
            { text: '___ Sahara', bucket: 1 },
            { text: '___ Central Park', bucket: 0 },
          ],
          explanation:
            'Single mountains, lakes, parks, most countries → zero. Ranges, rivers, deserts, "plural" countries → **the**.',
        },
        {
          id: 'm8l1-d2',
          type: 'mcq',
          question: 'We sailed across ___ Pacific all the way to ___ Hawaii.',
          options: ['the / (nothing)', 'the / the', '(nothing) / the'],
          correct: 0,
          explanation:
            'Oceans take **the** (*the Pacific*); individual islands and states don\'t (*Hawaii*).',
        },
        {
          id: 'm8l1-d3',
          type: 'gap',
          before: 'They crossed',
          after: 'Andes on foot, which took three months.',
          hint: 'article',
          accepted: ['the'],
          explanation: 'Mountain ranges take **the**: *the Andes, the Alps, the Himalayas*.',
        },
        {
          id: 'm8l1-d4',
          type: 'error-hunt',
          sentence: 'She flew over Atlantic in a tiny plane last spring.',
          wrongIndex: 3,
          correction: 'the Atlantic',
          explanation: 'Oceans and seas always take **the**: *the Atlantic, the Baltic, the Med*.',
        },
        {
          id: 'm8l1-d5',
          type: 'mcq',
          question: 'I heard it on ___ radio, not on ___ television.',
          options: ['the / (nothing)', '(nothing) / the', 'the / the'],
          correct: 0,
          explanation:
            'Classic pair: **on the radio** but **on television** — one of English\'s pettiest rules.',
        },
        {
          id: 'm8l1-d6',
          type: 'gap',
          before: 'She plays',
          after: 'violin in an amateur orchestra.',
          hint: 'article',
          accepted: ['the'],
          explanation: 'Musical instruments take **the**: *play the violin, the piano, the drums*.',
        },
        {
          id: 'm8l1-d7',
          type: 'error-hunt',
          sentence: 'We usually go to work by the bus, but today we walked.',
          wrongIndex: 6,
          correction: 'by bus',
          explanation:
            'Means of transport with *by* take zero article: **by bus, by car, by train**. (But: *on the bus*.)',
        },
        {
          id: 'm8l1-d8',
          type: 'sort',
          prompt: 'Fixed phrases: which article?',
          buckets: ['no article', 'the'],
          items: [
            { text: 'go to ___ cinema', bucket: 1 },
            { text: 'at ___ night', bucket: 0 },
            { text: 'in ___ morning', bucket: 1 },
            { text: 'travel on ___ foot', bucket: 0 },
            { text: 'surf ___ internet', bucket: 1 },
            { text: 'be at ___ work', bucket: 0 },
          ],
          explanation:
            'Frozen phrases — no logic, just memory: *at night* but *in the morning*; *at work* but *the cinema*.',
        },
        {
          id: 'm8l1-d9',
          type: 'transform',
          prompt: 'Fix BOTH article mistakes — rewrite the whole sentence.',
          source: 'The most tourists visit the Spain in summer.',
          accepted: [
            'Most tourists visit Spain in summer',
            'Most tourists visit Spain in the summer',
          ],
          explanation:
            '**Most + noun** for generalising takes no article, and countries like Spain take zero article too.',
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm8l1-e1',
          type: 'speed',
          secondsPerItem: 8,
          items: [
            { question: '___ Mount Fuji', options: ['(nothing)', 'the'], correct: 0 },
            { question: '___ Nile', options: ['the', '(nothing)'], correct: 0 },
            { question: "She's in ___ hospital with flu.", options: ['(nothing)', 'the'], correct: 0 },
            { question: 'I heard it on ___ radio.', options: ['the', 'a'], correct: 0 },
            { question: 'play ___ piano', options: ['the', 'a'], correct: 0 },
            { question: '___ honesty is the best policy.', options: ['(nothing)', 'The'], correct: 0 },
            { question: 'travel by ___ train', options: ['(nothing)', 'the'], correct: 0 },
            { question: '___ Netherlands', options: ['the', '(nothing)'], correct: 0 },
            { question: "She's ___ engineer.", options: ['an', 'a'], correct: 0 },
            { question: '___ sun is actually a star.', options: ['The', 'A'], correct: 0 },
          ],
          explanation: 'Article instincts at full speed — the summit is close!',
        },
      ],
    },
  ],
  boss: {
    passPct: 80,
    exercises: [
      {
        id: 'm8l1-boss1',
        type: 'mcq',
        question: 'Which sentence is correct as a general statement?',
        options: [
          'Whales are the largest mammals on Earth.',
          'The whales are the largest mammals on the Earth.',
          'Whales are largest mammals on Earth.',
        ],
        correct: 0,
        explanation:
          'General plural → zero article (*Whales*), but the superlative keeps **the** (*the largest*).',
      },
      {
        id: 'm8l1-boss2',
        type: 'gap',
        before: 'He was',
        after: 'only person who understood the joke.',
        hint: 'article',
        accepted: ['the'],
        explanation: '**only** pins down one specific person → *the only person*.',
      },
      {
        id: 'm8l1-boss3',
        type: 'error-hunt',
        sentence: 'We drove through an Alps on our way to Italy.',
        wrongIndex: 3,
        correction: 'the',
        explanation:
          'Mountain ranges take **the**: *the Alps*. Countries like Italy stay article-free.',
      },
      {
        id: 'm8l1-boss4',
        type: 'mcq',
        question:
          'After the accident she spent three weeks in ___ hospital, and her mum was at ___ hospital every day visiting.',
        options: ['(nothing) / the', 'the / (nothing)', 'the / the'],
        correct: 0,
        explanation:
          'The patient is **in hospital** (purpose); the visiting mum is **at the hospital** (building).',
      },
      {
        id: 'm8l1-boss5',
        type: 'order',
        prompt: 'Build the sentence — one token is a trap.',
        correct: 'The French are proud of their cuisine.',
        distractors: ['France'],
        explanation:
          '**the + nationality adjective** = the whole nation: *the French, the Dutch, the British*.',
      },
      {
        id: 'm8l1-boss6',
        type: 'gap',
        before: 'It was',
        after: 'most boring film I have seen this year.',
        hint: 'article',
        accepted: ['the'],
        explanation: 'Superlatives take **the**: *the most boring film*.',
      },
      {
        id: 'm8l1-boss7',
        type: 'error-hunt',
        sentence: 'I never eat the breakfast before a long run.',
        wrongIndex: 3,
        correction: 'eat breakfast',
        explanation:
          'Meals take zero article: **have breakfast, eat lunch, cook dinner** — no *the*.',
      },
      {
        id: 'm8l1-boss8',
        type: 'match',
        prompt: 'Match the phrase to the rule it follows.',
        pairs: [
          ['once a week', 'a = per'],
          ['in the 1990s', 'decades take the'],
          ['at midnight', 'fixed time phrase — zero article'],
          ['the Second World War', 'historical events with the'],
        ],
        explanation:
          'Four micro-rules that examiners adore. *Once a week* = *once per week*.',
      },
      {
        id: 'm8l1-boss9',
        type: 'sort',
        prompt: 'Zero article or the?',
        buckets: ['zero article', 'the'],
        items: [
          { text: 'go to ___ bed', bucket: 0 },
          { text: '___ United States', bucket: 1 },
          { text: 'play ___ chess', bucket: 0 },
          { text: 'play ___ flute', bucket: 1 },
          { text: 'in ___ future', bucket: 1 },
          { text: 'at ___ noon', bucket: 0 },
        ],
        explanation:
          'Games take zero (*play chess*); instruments take **the** (*play the flute*). *Go to bed* but *in the future*.',
      },
      {
        id: 'm8l1-boss10',
        type: 'transform',
        prompt: 'Fix the article mistakes — rewrite the whole proverb.',
        source: 'The knowledge is the power.',
        accepted: ['Knowledge is power'],
        explanation:
          'Abstract uncountables in general statements take zero article: **Knowledge is power.**',
      },
      {
        id: 'm8l1-boss11',
        type: 'mcq',
        question: 'Which sentence is correct?',
        options: [
          'The injured were taken to hospital.',
          'Injured were taken to the hospital.',
          'The injured were taken to a hospital of the city.',
        ],
        correct: 0,
        explanation:
          '**the + adjective** = group of people (*the injured*), and patients go **to hospital** with zero article (BrE).',
      },
    ],
  },
};
