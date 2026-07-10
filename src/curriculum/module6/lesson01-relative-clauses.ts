import type { Lesson } from '../../types';

export const m6l1: Lesson = {
  id: 'm6l1',
  title: 'Relative Clauses',
  subtitle: 'who, which, whose — defining & non-defining',
  minutes: 40,
  goals: [
    'Tell defining from non-defining — and comma accordingly',
    'Know when who/which/that can vanish completely',
    'Wield whose, where, when, why and what',
    'Go formal: the person to whom, most of whom',
  ],
  cards: [
    {
      title: 'Two species of relative clause',
      body: `**Defining** — identifies which one; no commas; essential info:

> The keys **that open the safe** are missing. (those specific keys)

**Non-defining** — adds a bonus fact; commas; could be deleted:

> My brother, **who lives in Oslo**, is visiting. (only one brother — the clause is extra)

The comma test: say it aloud — if you'd pause, you probably need commas (and then **that is banned**).`,
      miniCheck: {
        id: 'm6l1-c1',
        type: 'mcq',
        question: 'Which sentence means I have exactly ONE sister?',
        options: [
          'My sister, who is a vet, lives in York.',
          'My sister who is a vet lives in York.',
        ],
        correct: 0,
        explanation:
          'Commas = non-defining = bonus info about my (only) sister. No commas would imply I am choosing among several sisters.',
      },
    },
    {
      title: 'The pronoun menu',
      body: `- **who** → people: the woman **who called**
- **which** → things: the film **which won**
- **that** → both, but **only in defining** clauses: the film **that won**
- **whose** → possession, people AND things: the author **whose book** I loved · a house **whose windows** glow

⚠️ In non-defining clauses: commas + **who/which only**, never *that*:

> The bridge, **which** was built in 1890, is closed. — not ~~, that was built~~`,
      miniCheck: {
        id: 'm6l1-c2',
        type: 'mcq',
        question: 'Our neighbour, ___ dog barks all night, is moving out. 🎉',
        options: ['whose', 'who', 'that'],
        correct: 0,
        explanation:
          'Possession (the dog belongs to the neighbour) → **whose**.',
      },
    },
    {
      title: 'The vanishing pronoun',
      body: `In **defining** clauses, if the pronoun is the **object**, it can simply vanish:

> The film **(that) we watched** was superb. (we watched *it* → object → droppable)
> The man **(who) you met** is my boss.

But if it's the **subject**, it must stay:

> The film **that won** the award... (it won → subject → must stay)

Quick test: is there already a subject right after the pronoun? Then drop away.`,
      miniCheck: {
        id: 'm6l1-c3',
        type: 'mcq',
        question: 'Where can the pronoun disappear?',
        options: [
          'The cake that Maria baked was gone in minutes.',
          'The cake that sat on the table was gone in minutes.',
        ],
        correct: 0,
        explanation:
          '*Maria baked (it)* — object pronoun → droppable: *The cake Maria baked*. In the other, *that* is the subject of *sat*.',
      },
    },
    {
      title: 'where, when, why & what',
      body: `- **where** = in/at which: the café **where we met**
- **when** = on/in which: the year **when everything changed**
- **why** after *reason*: the reason **why I stayed**
- **what** = *the thing(s) that* — it contains its own noun:

> **What you need** is a holiday. (= the thing that you need)

⚠️ Never double up: ~~the thing what I said~~ — either *the thing (that) I said* or *what I said*.`,
      miniCheck: {
        id: 'm6l1-c4',
        type: 'gap',
        before: "I can't hear",
        after: 'you are saying. (= the thing that)',
        hint: 'one word',
        accepted: ['what'],
        explanation:
          '**what** = the thing that: *what you are saying*.',
      },
    },
    {
      title: 'Prepositions: casual vs posh',
      body: `Everyday English strands the preposition at the end:

> the flat **(which) she lives in** · the man **(who) I spoke to**

Formal English moves it before **whom/which**:

> the flat **in which** she lives · the man **to whom** I spoke

⚠️ After a preposition it must be **whom/which** — never *who* or *that*: ~~to who I spoke~~, ~~in that she lives~~.`,
      miniCheck: {
        id: 'm6l1-c5',
        type: 'mcq',
        question: 'Formal version: "the committee ___ the report was submitted"',
        options: ['to which', 'to that', 'to who'],
        correct: 0,
        explanation:
          'Preposition + **which** for things: *to which*. (*to whom* is for people.)',
      },
    },
    {
      title: 'Quantifier + of whom / of which',
      body: `The elegant C1 move — comment on a group inside a non-defining clause:

> We interviewed thirty candidates, **most of whom** were excellent.
> She owns two hundred books, **many of which** she has actually read.
> The team, **none of whom** had eaten, played brilliantly.

Pattern: **some/most/many/none/all/both/several + of + whom/which**.`,
      tip: 'And "which" can swallow a whole clause: "He apologised, WHICH surprised everyone." — the which refers to the entire apology.',
      miniCheck: {
        id: 'm6l1-c6',
        type: 'gap',
        before: 'The village has forty houses, most of',
        after: 'are empty in winter.',
        hint: 'one word',
        accepted: ['which'],
        explanation:
          'Houses = things → **most of which**. (People would take *most of whom*.)',
      },
    },
  ],
  sets: [
    {
      title: 'Comma Court',
      icon: '⚖️',
      exercises: [
        {
          id: 'm6l1-a1',
          type: 'mcq',
          question: 'Which sentence is punctuated correctly?',
          options: [
            'Mount Etna, which is in Sicily, erupted again last week.',
            'Mount Etna which is in Sicily erupted again last week.',
            'Mount Etna, that is in Sicily, erupted again last week.',
          ],
          correct: 0,
          explanation:
            'There is only one Mount Etna → non-defining → commas + **which** (never *that*).',
        },
        {
          id: 'm6l1-a2',
          type: 'sort',
          prompt: 'Defining (no commas) or non-defining (commas)?',
          buckets: ['defining', 'non-defining'],
          items: [
            { text: 'the students who missed the exam', bucket: 0 },
            { text: 'Paris(,) which I adore(,)', bucket: 1 },
            { text: 'a tool that cuts glass', bucket: 0 },
            { text: 'my passport(,) which expires in May(,)', bucket: 1 },
            { text: 'the only shop that sells it', bucket: 0 },
            { text: 'Aunt Rosa(,) who taught me chess(,)', bucket: 1 },
          ],
          explanation:
            'Identifying which one → defining. Unique things and bonus facts → non-defining with commas.',
        },
        {
          id: 'm6l1-a3',
          type: 'error-hunt',
          sentence: 'My laptop, that I bought only last year, has died already.',
          wrongIndex: 2,
          correction: 'which',
          explanation:
            'Non-defining (commas) → *that* is banned: **which** I bought…',
        },
        {
          id: 'm6l1-a4',
          type: 'mcq',
          question: '"The passengers ___ had booked seats got on first." — all pronouns that fit:',
          options: ['who or that', 'only who', 'which or whose'],
          correct: 0,
          explanation:
            'Defining clause about people, subject position → **who** or **that** both work.',
        },
        {
          id: 'm6l1-a5',
          type: 'gap',
          before: 'The hotel',
          after: 'roof garden you can see from here is fully booked. (possession)',
          hint: 'one word',
          accepted: ['whose'],
          explanation:
            '**whose** works for things too: *the hotel whose roof garden…*',
        },
        {
          id: 'm6l1-a6',
          type: 'order',
          correct: 'The woman who lives next door is a pilot',
          explanation:
            'Defining clause: *who lives next door* identifies the woman — no commas.',
        },
        {
          id: 'm6l1-a7',
          type: 'mcq',
          question: 'He turned up two hours late, ___ annoyed everyone.',
          options: ['which', 'that', 'what'],
          correct: 0,
          explanation:
            'Sentence-swallowing **which** — it refers to the whole late arrival.',
        },
        {
          id: 'm6l1-a8',
          type: 'error-hunt',
          sentence: 'Everything what she predicted actually came true.',
          wrongIndex: 1,
          correction: 'that',
          explanation:
            'After a noun/pronoun like *everything*, use **(that)** — *what* would double up.',
        },
      ],
    },
    {
      title: 'The Vanishing Act',
      icon: '🎩',
      exercises: [
        {
          id: 'm6l1-b1',
          type: 'sort',
          prompt: 'Can the relative pronoun vanish?',
          buckets: ['can vanish (object)', 'must stay (subject)'],
          items: [
            { text: 'the song (that) she wrote', bucket: 0 },
            { text: 'the song that topped the charts', bucket: 1 },
            { text: 'the man (who) we hired', bucket: 0 },
            { text: 'the man who hired us', bucket: 1 },
            { text: 'the keys (that) I lost', bucket: 0 },
            { text: 'the keys that were lost', bucket: 1 },
          ],
          explanation:
            'A subject follows immediately (*she wrote*, *we hired*) → object pronoun → droppable.',
        },
        {
          id: 'm6l1-b2',
          type: 'transform',
          source: 'The advice that you gave me was priceless.',
          keyword: '(drop the pronoun)',
          before: 'The',
          after: 'me was priceless.',
          accepted: ['advice you gave'],
          explanation:
            'Object pronoun vanishes: *The advice you gave me*.',
        },
        {
          id: 'm6l1-b3',
          type: 'mcq',
          question: 'Where is the pronoun NOT droppable?',
          options: [
            'The letter that arrived this morning is urgent.',
            'The letter that you sent arrived today.',
            'The letter that I wrote is on the desk.',
          ],
          correct: 0,
          explanation:
            'In *that arrived*, the pronoun is the **subject** of *arrived* — it must stay.',
        },
        {
          id: 'm6l1-b4',
          type: 'order',
          correct: 'The people we met on the ferry were hilarious',
          explanation:
            'Object pronoun already dropped: *The people (who) we met…*',
        },
        {
          id: 'm6l1-b5',
          type: 'gap',
          before: 'Is this the parcel',
          after: 'were waiting for? (add nothing if possible!)',
          hint: 'you…',
          accepted: ['you'],
          explanation:
            'Object position → pronoun drops entirely: *the parcel **you** were waiting for*.',
        },
        {
          id: 'm6l1-b6',
          type: 'error-hunt',
          sentence: 'The colleague which sits next to me hums all day.',
          wrongIndex: 2,
          correction: 'who',
          explanation:
            'A colleague is a person → **who** (or *that*), not *which*.',
        },
        {
          id: 'm6l1-b7',
          type: 'mcq',
          question: 'The house ___ we grew up in has been demolished.',
          options: [
            'that / which / nothing — all fine',
            'only which',
            'only that',
          ],
          correct: 0,
          explanation:
            'Defining, object of *in* → *that*, *which*, or nothing at all.',
        },
        {
          id: 'm6l1-b8',
          type: 'transform',
          source: 'You said something. It turned out to be true. (join with what)',
          keyword: 'what',
          before: '',
          after: 'turned out to be true.',
          accepted: ['what you said'],
          explanation:
            '**What you said** = the thing that you said — *what* brings its own noun.',
        },
      ],
    },
    {
      title: 'The Formal Ballroom',
      icon: '🩰',
      exercises: [
        {
          id: 'm6l1-d1',
          type: 'transform',
          source: 'She spoke to a lawyer. (formal, with whom)',
          keyword: 'whom',
          before: 'The lawyer',
          after: 'she spoke was very direct.',
          accepted: ['to whom'],
          explanation:
            'Formal: preposition first → **to whom** she spoke.',
        },
        {
          id: 'm6l1-d2',
          type: 'mcq',
          question: 'The conditions under ___ the miners worked were appalling.',
          options: ['which', 'whom', 'that'],
          correct: 0,
          explanation:
            'Preposition + thing → **under which**. (*that* never follows a preposition.)',
        },
        {
          id: 'm6l1-d3',
          type: 'gap',
          before: 'She has three degrees, none of',
          after: 'she ever mentions.',
          hint: 'one word',
          accepted: ['which'],
          explanation:
            'Degrees = things → **none of which**.',
        },
        {
          id: 'm6l1-d4',
          type: 'gap',
          before: 'The choir has twenty members, several of',
          after: 'are professional singers.',
          hint: 'one word',
          accepted: ['whom'],
          explanation:
            'Members = people → **several of whom**.',
        },
        {
          id: 'm6l1-d5',
          type: 'error-hunt',
          sentence: 'The editor to who I sent my novel never replied.',
          wrongIndex: 3,
          correction: 'whom',
          explanation:
            'After a preposition → **whom**: *to whom I sent*.',
        },
        {
          id: 'm6l1-d6',
          type: 'order',
          correct: 'We visited the town where my grandfather was born',
          explanation:
            'Place → **where** = *in which*: *the town where he was born*.',
        },
        {
          id: 'm6l1-d7',
          type: 'match',
          prompt: 'Match each relative word to its use.',
          pairs: [
            ['where', 'the café ___ we first met'],
            ['when', 'the summer ___ it never rained'],
            ['why', 'the reason ___ she resigned'],
            ['whose', 'the boy ___ bike was stolen'],
          ],
          explanation:
            'where = place · when = time · why = reason · whose = possession.',
        },
        {
          id: 'm6l1-d8',
          type: 'transform',
          source: 'We tested fifty samples. Most of them were contaminated. (one sentence)',
          keyword: 'which',
          before: 'We tested fifty samples,',
          after: 'were contaminated.',
          accepted: ['most of which'],
          explanation:
            'Quantifier + of which: *fifty samples, **most of which** were contaminated*.',
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm6l1-e1',
          type: 'speed',
          secondsPerItem: 8,
          explanation: 'Relative clauses at full speed!',
          items: [
            {
              question: 'the girl ___ won the race',
              options: ['who', 'which'],
              correct: 0,
            },
            {
              question: 'my car, ___ is ancient, still runs',
              options: ['which', 'that'],
              correct: 0,
            },
            {
              question: 'the man ___ umbrella I borrowed',
              options: ['whose', 'who'],
              correct: 0,
            },
            {
              question: '___ I need now is coffee.',
              options: ['What', 'That'],
              correct: 0,
            },
            {
              question: 'the park ___ we jog every morning',
              options: ['where', 'which'],
              correct: 0,
            },
            {
              question: 'ten emails, none of ___ I have read',
              options: ['which', 'whom'],
              correct: 0,
            },
            {
              question: 'the guests, all of ___ arrived late',
              options: ['whom', 'which'],
              correct: 0,
            },
            {
              question: 'the day ___ we graduated',
              options: ['when', 'where'],
              correct: 0,
            },
            {
              question: 'the person to ___ this letter is addressed',
              options: ['whom', 'who'],
              correct: 0,
            },
            {
              question: 'He cancelled again, ___ says it all.',
              options: ['which', 'what'],
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
        id: 'm6l1-boss1',
        type: 'mcq',
        question: 'Which sentence implies there were SEVERAL witnesses?',
        options: [
          'The witness who saw the crash gave a statement.',
          'The witness, who saw the crash, gave a statement.',
        ],
        correct: 0,
        explanation:
          'Defining (no commas) picks one witness out of several — the one *who saw the crash*.',
      },
      {
        id: 'm6l1-boss2',
        type: 'error-hunt',
        sentence: 'The Danube, that flows through ten countries, is beautiful.',
        wrongIndex: 2,
        correction: 'which',
        explanation:
          'Non-defining clause → **which**, never *that*.',
      },
      {
        id: 'm6l1-boss3',
        type: 'gap',
        before: 'The scientist',
        after: 'research changed medicine never won the Nobel Prize. (possession)',
        hint: 'one word',
        accepted: ['whose'],
        explanation: 'Possession → **whose research**.',
      },
      {
        id: 'm6l1-boss4',
        type: 'transform',
        source: 'The film that we saw last night was dreadful. (drop the pronoun)',
        keyword: '(nothing)',
        before: 'The film',
        after: 'last night was dreadful.',
        accepted: ['we saw'],
        explanation:
          'Object pronoun → drop it: *The film we saw last night*.',
      },
      {
        id: 'm6l1-boss5',
        type: 'mcq',
        question: '___ matters most is how you finish.',
        options: ['What', 'That', 'Which'],
        correct: 0,
        explanation:
          '**What** = the thing that: *What matters most…*',
      },
      {
        id: 'm6l1-boss6',
        type: 'gap',
        before: 'The orchestra has ninety players, most of',
        after: 'have studied for decades.',
        hint: 'one word',
        accepted: ['whom'],
        explanation: 'People → **most of whom**.',
      },
      {
        id: 'm6l1-boss7',
        type: 'order',
        correct: 'The desk at which she wrote her novels is in a museum',
        explanation:
          'Formal: preposition + **which**: *at which she wrote*.',
      },
      {
        id: 'm6l1-boss8',
        type: 'error-hunt',
        sentence: 'This is the village which I spent every summer as a child.',
        wrongIndex: 4,
        correction: 'where',
        explanation:
          'Place + no preposition → **where**: *the village where I spent…* (or *in which*).',
      },
      {
        id: 'm6l1-boss9',
        type: 'mcq',
        question: 'She got the highest score in the history of the school, ___ nobody expected.',
        options: ['which', 'that', 'what'],
        correct: 0,
        explanation:
          'Comment on the whole achievement → sentence-swallowing **which**.',
      },
      {
        id: 'm6l1-boss10',
        type: 'transform',
        source: 'I complained to a manager. She was surprisingly helpful. (formal, one sentence)',
        keyword: 'whom',
        before: 'The manager',
        after: 'I complained was surprisingly helpful.',
        accepted: ['to whom'],
        explanation:
          'Formal register: **to whom** I complained.',
      },
      {
        id: 'm6l1-boss11',
        type: 'sort',
        prompt: 'Who, which, or whose?',
        buckets: ['who', 'which', 'whose'],
        items: [
          { text: 'the chef ___ invented the dish', bucket: 0 },
          { text: 'the recipe ___ won the prize', bucket: 1 },
          { text: 'the chef ___ restaurant has three stars', bucket: 2 },
          { text: 'my cousin ___ fixes computers', bucket: 0 },
          { text: 'a decision ___ shocked us all', bucket: 1 },
          { text: 'the company ___ shares collapsed', bucket: 2 },
        ],
        explanation:
          'People → who · things → which · possession (people or things) → whose.',
      },
    ],
  },
};
