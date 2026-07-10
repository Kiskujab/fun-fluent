import type { Lesson } from '../../types';

export const m7l5: Lesson = {
  id: 'm7l5',
  title: 'Noun Power',
  subtitle: 'noun phrases & nominalisation',
  minutes: 45,
  goals: [
    'Turn verbs and adjectives into nouns: arrive → arrival',
    'Build dense academic noun phrases',
    'Choose verb-style or noun-style for the right register',
    'Stack modifiers without collapsing the sentence',
  ],
  cards: [
    {
      title: 'Nominalisation: verbs in noun costumes',
      body: `Formal English loves turning actions into things:

> They **decided** quickly. → Their quick **decision**…
> The economy **grew** fast. → The rapid **growth** of the economy…
> We **failed** to agree. → Our **failure** to agree…

Common suffixes: **-tion/-sion** (decide → decision), **-ment** (develop → development), **-ance/-ence** (exist → existence), **-al** (arrive → arrival), **-ure** (fail → failure), **-th** (grow → growth).`,
      miniCheck: {
        id: 'm7l5-c1',
        type: 'gap',
        before: 'The bridge collapsed. → The',
        after: 'of the bridge shocked the town. (noun!)',
        hint: 'collapse → ?',
        accepted: ['collapse'],
        explanation:
          'Some verbs ARE their own noun: *the **collapse** of the bridge*.',
      },
    },
    {
      title: 'Why bother? Register and focus',
      body: `Verb-style is direct and personal; noun-style is formal and impersonal:

> Chat: **We analysed the data and found** three problems.
> Report: **Analysis of the data revealed** three problems.

Nominalisation lets you:
- hide the doer (*mistakes were made* energy)
- pack a whole event into a subject: **The cancellation of the flight** caused chaos.
- sound like a committee (useful; use responsibly)`,
      miniCheck: {
        id: 'm7l5-c2',
        type: 'mcq',
        question: 'The formal-report version of "Prices rose sharply, which worried investors":',
        options: [
          'The sharp rise in prices worried investors.',
          'Prices did a sharp rise on investors.',
          'Rising sharply, investors worried prices.',
        ],
        correct: 0,
        explanation:
          'Event → noun phrase subject: **The sharp rise in prices…**',
      },
    },
    {
      title: 'The anatomy of a noun phrase',
      body: `English noun phrases grow in both directions from the head noun:

**[determiner] [opinion] [size/age/colour] [origin/material] HEAD [prepositional phrase] [clause]**

> **the** *surprising* *recent* **decision** *of the board* *to sell the archive*
> **a** *tiny* *Victorian* **cottage** *on the cliff* *that nobody wanted*

Pre-modifiers stack before; *of/in/on* phrases and clauses trail after.`,
      miniCheck: {
        id: 'm7l5-c3',
        type: 'mcq',
        question: 'Which order is natural?',
        options: [
          'a charming old French farmhouse',
          'a French old charming farmhouse',
          'an old charming French farmhouse',
        ],
        correct: 0,
        explanation:
          'Opinion → age → origin: **charming old French** farmhouse.',
      },
    },
    {
      title: 'Noun + noun: the compressor',
      body: `English lets nouns modify nouns — dropping *of*-phrases entirely:

> the policy of the government → the **government policy**
> a delay of the flight → a **flight delay**
> the results of the safety test → the **safety test results**

The first noun stays **singular** even with plural meaning:

> a **shoe** shop (sells many shoes) · a **five-year** plan · a **two-hour** wait`,
      miniCheck: {
        id: 'm7l5-c4',
        type: 'mcq',
        question: 'Compress "a walk that lasts ten minutes":',
        options: ['a ten-minute walk', 'a ten-minutes walk', 'a ten minutes\' walking'],
        correct: 0,
        explanation:
          'Number + singular noun as modifier: **a ten-minute walk**.',
      },
    },
    {
      title: 'Verb ↔ noun partnerships',
      body: `Nominalised nouns choose specific partner verbs (and prepositions):

- **make** a decision / an attempt / a contribution
- **reach** an agreement / a conclusion
- **carry out** research / an investigation
- **show / see** an improvement **in** X
- a rise / fall **in** prices · demand **for** · an effect **on**

> There has been **a significant improvement in** response times.`,
      miniCheck: {
        id: 'm7l5-c5',
        type: 'gap',
        before: 'The two sides finally reached an',
        after: 'after nine hours of talks. (agree → noun)',
        hint: 'agree → ?',
        accepted: ['agreement'],
        explanation:
          '**reach an agreement** — the classic verb-noun partnership.',
      },
    },
    {
      title: 'The overdose warning',
      body: `Too much nominalisation strangles prose:

> 💀 *The implementation of the utilisation of the new system was the cause of the improvement of morale.*
> ✓ *Using the new system improved morale.*

The C2 skill is **choosing**: nouns for weight and formality, verbs for speed and life. Academic writing ≈ noun-heavy; storytelling ≈ verb-heavy. Mix deliberately.`,
      tip: 'Editing trick: hunt for "of the" chains and -tion pile-ups. Each one you convert back to a verb makes the sentence breathe.',
      miniCheck: {
        id: 'm7l5-c6',
        type: 'mcq',
        question: 'Best rescue of "The expectation of the committee was the rejection of the plan":',
        options: [
          'The committee expected the plan to be rejected.',
          'The expectation was the plan of rejection.',
          'Committee expectation plan rejection occurred.',
        ],
        correct: 0,
        explanation:
          'De-nominalise back to verbs: **The committee expected…**',
      },
    },
  ],
  sets: [
    {
      title: 'The Noun Foundry',
      icon: '⚒️',
      exercises: [
        {
          id: 'm7l5-a1',
          type: 'gap',
          before: 'The company grew fast. → The rapid',
          after: 'of the company amazed analysts. (noun)',
          hint: 'grow → ?',
          accepted: ['growth'],
          explanation: '*grow* → **growth**.',
        },
        {
          id: 'm7l5-a2',
          type: 'gap',
          before: 'They refused to negotiate. → Their',
          after: 'to negotiate ended the talks. (noun)',
          hint: 'refuse → ?',
          accepted: ['refusal'],
          explanation: '*refuse* → **refusal**.',
        },
        {
          id: 'm7l5-a3',
          type: 'match',
          prompt: 'Match verb to its noun.',
          pairs: [
            ['arrive', 'arrival'],
            ['maintain', 'maintenance'],
            ['assume', 'assumption'],
            ['prove', 'proof'],
          ],
          explanation:
            'Each verb has its own noun-forming pattern — learn them as pairs.',
        },
        {
          id: 'm7l5-a4',
          type: 'mcq',
          question: 'The noun of "aware" is…',
          options: ['awareness', 'awarity', 'awaration'],
          correct: 0,
          explanation:
            'Adjective + **-ness**: *awareness*. (Adjectives nominalise too!)',
        },
        {
          id: 'm7l5-a5',
          type: 'gap',
          before: 'Please confirm you received the parcel. → We ask for',
          after: 'of receipt. (noun)',
          hint: 'confirm → ?',
          accepted: ['confirmation'],
          explanation: '*confirm* → **confirmation**.',
        },
        {
          id: 'm7l5-a6',
          type: 'error-hunt',
          sentence: 'The investigate of the incident took three months.',
          wrongIndex: 1,
          correction: 'investigation',
          explanation:
            'Subject slot needs the noun: **The investigation** of the incident.',
        },
        {
          id: 'm7l5-a7',
          type: 'sort',
          prompt: 'Sort by noun-forming suffix.',
          buckets: ['-tion/-sion', '-ment', '-ance/-ence'],
          items: [
            { text: 'decide → ?', bucket: 0 },
            { text: 'develop → ?', bucket: 1 },
            { text: 'exist → ?', bucket: 2 },
            { text: 'permit → ?', bucket: 0 },
            { text: 'achieve → ?', bucket: 1 },
            { text: 'resist → ?', bucket: 2 },
          ],
          explanation:
            'decision/permission · development/achievement · existence/resistance.',
        },
        {
          id: 'm7l5-a8',
          type: 'transform',
          source: 'The manuscript was discovered, which caused great excitement.',
          keyword: 'discovery',
          before: 'The',
          after: 'of the manuscript caused great excitement.',
          accepted: ['discovery'],
          explanation:
            'Event → noun-phrase subject: **The discovery of the manuscript…**',
        },
      ],
    },
    {
      title: 'Phrase Architecture',
      icon: '🏛️',
      exercises: [
        {
          id: 'm7l5-b1',
          type: 'order',
          correct: 'a lovely little Italian coastal town',
          explanation:
            'Opinion → size → origin → type: **lovely little Italian coastal** town.',
        },
        {
          id: 'm7l5-b2',
          type: 'mcq',
          question: 'Compress "the shop that sells shoes":',
          options: ['the shoe shop', 'the shoes shop', 'the shop shoes'],
          correct: 0,
          explanation:
            'Noun modifier stays singular: **shoe shop**.',
        },
        {
          id: 'm7l5-b3',
          type: 'error-hunt',
          sentence: 'We finally booked a two-weeks holiday in the mountains.',
          wrongIndex: 4,
          correction: 'two-week',
          explanation:
            'Hyphenated measure modifiers stay singular: **a two-week holiday**.',
        },
        {
          id: 'm7l5-b4',
          type: 'transform',
          source: 'the results of the customer survey (compress with noun + noun)',
          keyword: 'survey',
          before: 'the customer',
          after: '',
          accepted: ['survey results'],
          explanation:
            'Drop the *of*: **the customer survey results**.',
        },
        {
          id: 'm7l5-b5',
          type: 'mcq',
          question: 'Which noun phrase is built correctly?',
          options: [
            'the recent decision of the board to expand',
            'the of the board recent decision to expand',
            'the decision recent of the board expand to',
          ],
          correct: 0,
          explanation:
            'Pre-modifiers before the head, *of*-phrase and infinitive after: *the recent **decision** of the board to expand*.',
        },
        {
          id: 'm7l5-b6',
          type: 'gap',
          before: 'The queue took three hours — a three-',
          after: 'wait, in the rain. (one word)',
          hint: 'hour(s)?',
          accepted: ['hour'],
          explanation:
            'Measure modifier singular: **a three-hour wait**.',
        },
        {
          id: 'm7l5-b7',
          type: 'sort',
          prompt: 'Natural or broken?',
          buckets: ['natural ✓', 'broken ✗'],
          items: [
            { text: 'a brilliant young Hungarian mathematician', bucket: 0 },
            { text: 'a Hungarian brilliant young mathematician', bucket: 1 },
            { text: 'the kitchen window handle', bucket: 0 },
            { text: 'the handle window kitchen', bucket: 1 },
            { text: 'a five-star seaside hotel', bucket: 0 },
            { text: 'a five-stars seaside hotel', bucket: 1 },
          ],
          explanation:
            'Opinion→age→origin order; head noun last in noun-noun stacks; measure modifiers singular.',
        },
        {
          id: 'm7l5-b8',
          type: 'order',
          correct: 'the unexpected resignation of the finance minister',
          explanation:
            'Nominalised head + *of*-phrase: **the resignation of the minister**.',
        },
      ],
    },
    {
      title: 'Register Switchboard',
      icon: '🎚️',
      exercises: [
        {
          id: 'm7l5-d1',
          type: 'transform',
          source: 'We inspected the site, and then we approved the plans.',
          keyword: 'inspection',
          before: 'After our',
          after: 'of the site, we approved the plans.',
          accepted: ['inspection'],
          explanation:
            'First clause → noun phrase: **After our inspection of the site…**',
        },
        {
          id: 'm7l5-d2',
          type: 'mcq',
          question: 'Formal minutes version of "Sales fell because we advertised less":',
          options: [
            'The fall in sales resulted from reduced advertising.',
            'Sales did a fall because less adverts.',
            'Falling, the sales advertised less.',
          ],
          correct: 0,
          explanation:
            'Two nominalisations joined formally: **the fall in sales / reduced advertising**.',
        },
        {
          id: 'm7l5-d3',
          type: 'gap',
          before: 'There has been a steady improvement',
          after: 'air quality since the ban. (preposition!)',
          hint: 'in / of / on?',
          accepted: ['in'],
          explanation:
            '**improvement IN** something — the noun keeps its preposition.',
        },
        {
          id: 'm7l5-d4',
          type: 'mcq',
          question: 'The committee finally ___ a decision at midnight.',
          options: ['made', 'did', 'took out'],
          correct: 0,
          explanation:
            'Partnership: **make a decision** (BrE also *take a decision*).',
        },
        {
          id: 'm7l5-d5',
          type: 'gap',
          before: 'Demand',
          after: 'electric bikes has tripled. (preposition!)',
          hint: 'for / of / in?',
          accepted: ['for'],
          explanation: '**demand FOR** something.',
        },
        {
          id: 'm7l5-d6',
          type: 'error-hunt',
          sentence: 'Researchers carried out an experiment and made a surprising discover.',
          wrongIndex: 9,
          correction: 'discovery',
          explanation:
            'After *a surprising* we need the noun: **discovery**.',
        },
        {
          id: 'm7l5-d7',
          type: 'transform',
          source: 'The implementation of the reorganisation of the department was met with the resignation of three managers. (rescue it!)',
          keyword: 'reorganised',
          before: 'When the department was',
          after: ', three managers resigned.',
          accepted: ['reorganised', 'reorganized'],
          explanation:
            'De-nominalise: **When the department was reorganised, three managers resigned.** Breathe.',
        },
        {
          id: 'm7l5-d8',
          type: 'sort',
          prompt: 'Verb-style (lively) or noun-style (formal)?',
          buckets: ['verb-style', 'noun-style'],
          items: [
            { text: 'We explored the cave and found bones.', bucket: 0 },
            { text: 'Exploration of the cave led to the discovery of bones.', bucket: 1 },
            { text: 'Prices dropped and shoppers rejoiced.', bucket: 0 },
            { text: 'The drop in prices delighted consumers.', bucket: 1 },
            { text: 'She resigned suddenly.', bucket: 0 },
            { text: 'Her sudden resignation…', bucket: 1 },
          ],
          explanation:
            'Verbs move; nouns weigh. Both correct — register decides.',
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm7l5-e1',
          type: 'speed',
          secondsPerItem: 8,
          explanation: 'Noun power at full speed!',
          items: [
            {
              question: 'decide → ?',
              options: ['decision', 'decidement'],
              correct: 0,
            },
            {
              question: 'fail → ?',
              options: ['failure', 'failation'],
              correct: 0,
            },
            {
              question: 'a ___ shop (sells books)',
              options: ['book', 'books'],
              correct: 0,
            },
            {
              question: '___ an attempt',
              options: ['make', 'do'],
              correct: 0,
            },
            {
              question: 'a rise ___ prices',
              options: ['in', 'of'],
              correct: 0,
            },
            {
              question: 'grow → ?',
              options: ['growth', 'growness'],
              correct: 0,
            },
            {
              question: 'a two-___ journey',
              options: ['day', 'days'],
              correct: 0,
            },
            {
              question: 'carry ___ research',
              options: ['out', 'on with'],
              correct: 0,
            },
            {
              question: 'effect ___ health',
              options: ['on', 'for'],
              correct: 0,
            },
            {
              question: 'a charming ___ cottage',
              options: ['old Welsh', 'Welsh old'],
              correct: 0,
            },
          ],
        },
      ],
    },
  ],
  boss: {
    passPct: 80,
    exercises: [
      {
        id: 'm7l5-boss1',
        type: 'gap',
        before: 'The ferry departed late. → The late',
        after: 'of the ferry ruined our connection. (noun)',
        hint: 'depart → ?',
        accepted: ['departure'],
        explanation: '*depart* → **departure**.',
      },
      {
        id: 'm7l5-boss2',
        type: 'transform',
        source: 'The council rejected the proposal, and this angered residents.',
        keyword: 'rejection',
        before: 'The',
        after: 'of the proposal angered residents.',
        accepted: ["council's rejection", 'rejection'],
        explanation:
          'Event → noun subject: **The (council\'s) rejection of the proposal…**',
      },
      {
        id: 'm7l5-boss3',
        type: 'mcq',
        question: 'Which is the correct compressed form of "a meeting to review the budget that lasts two hours"?',
        options: [
          'a two-hour budget review meeting',
          'a two-hours budget review meeting',
          'a budget two-hour meeting review',
        ],
        correct: 0,
        explanation:
          'Singular measure + noun stack ending in the head: **a two-hour budget review meeting**.',
      },
      {
        id: 'm7l5-boss4',
        type: 'error-hunt',
        sentence: 'Their failure of reaching an agreement surprised everyone.',
        wrongIndex: 2,
        correction: 'to reach',
        explanation:
          '**failure TO do** — the noun keeps the infinitive: *failure to reach*.',
      },
      {
        id: 'm7l5-boss5',
        type: 'gap',
        before: 'Scientists have seen a sharp fall',
        after: 'insect numbers. (preposition)',
        hint: 'in / of?',
        accepted: ['in'],
        explanation: '**a fall IN numbers** — change nouns take *in*.',
      },
      {
        id: 'm7l5-boss6',
        type: 'order',
        correct: 'The sudden cancellation of the tour disappointed thousands of fans',
        explanation:
          'Nominalised subject: **The sudden cancellation of the tour…**',
      },
      {
        id: 'm7l5-boss7',
        type: 'mcq',
        question: 'The report ___ a strong recommendation for further testing.',
        options: ['made', 'did', 'held up'],
        correct: 0,
        explanation:
          'Partnership: **make a recommendation**.',
      },
      {
        id: 'm7l5-boss8',
        type: 'transform',
        source: 'Because the software was installed carelessly, the system crashed. (nominalise!)',
        keyword: 'installation',
        before: 'The careless',
        after: 'of the software crashed the system.',
        accepted: ['installation'],
        explanation:
          'Clause → noun phrase: **The careless installation of the software…**',
      },
      {
        id: 'm7l5-boss9',
        type: 'error-hunt',
        sentence: 'We admired the French charming little bistros on every corner.',
        wrongIndex: 3,
        correction: 'charming little French',
        explanation:
          'Opinion → size → origin: **charming little French** bistros.',
      },
      {
        id: 'm7l5-boss10',
        type: 'mcq',
        question: 'Best de-nominalisation of "The utilisation of the stairs is encouraged for the improvement of fitness":',
        options: [
          'Take the stairs to get fitter.',
          'Stairs utilisation fitness improvement do.',
          'The stairs are utilised by fitness.',
        ],
        correct: 0,
        explanation:
          'Verbs bring it back to life: **Take the stairs to get fitter.**',
      },
      {
        id: 'm7l5-boss11',
        type: 'sort',
        prompt: 'Pick the right partner verb.',
        buckets: ['make', 'reach', 'carry out'],
        items: [
          { text: '___ a contribution', bucket: 0 },
          { text: '___ a conclusion', bucket: 1 },
          { text: '___ an investigation', bucket: 2 },
          { text: '___ an attempt', bucket: 0 },
          { text: '___ a compromise', bucket: 1 },
          { text: '___ a survey', bucket: 2 },
        ],
        explanation:
          'make + attempt/contribution · reach + conclusion/compromise · carry out + investigation/survey.',
      },
    ],
  },
};
