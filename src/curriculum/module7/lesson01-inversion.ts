import type { Lesson } from '../../types';

export const m7l1: Lesson = {
  id: 'm7l1',
  title: 'Inversion',
  subtitle: 'Never have I ever…',
  minutes: 45,
  goals: [
    'Invert after negative adverbials: Never have I seen…',
    'Master the two-part tricks: No sooner… than, Hardly… when',
    'Use Not only… but also and Only when/after/by…',
    'Invert with Little, So/Such… that, and nor/neither',
  ],
  cards: [
    {
      title: 'What inversion actually is',
      body: `Take a dramatic negative word, put it first, then flip to **question word order**:

> I have never seen such chaos.
> → **Never have I seen** such chaos.

The flip is exactly like a question: auxiliary before subject. No auxiliary? Borrow **do/does/did**:

> She little suspected the truth.
> → **Little did she suspect** the truth.

Effect: formal, dramatic, literary. Exams adore it.`,
      miniCheck: {
        id: 'm7l1-c1',
        type: 'gap',
        before: 'Never',
        after: 'such a beautiful aurora. (we / see — present perfect)',
        hint: 'have / we / see',
        accepted: ['have we seen'],
        explanation:
          'Negative adverb first → question order: **Never have we seen…**',
      },
    },
    {
      title: 'The negative adverb squad',
      body: `These trigger inversion when they open the sentence:

- **Never / Rarely / Seldom**: *Seldom **does he** apologise.*
- **At no time / Under no circumstances**: *Under no circumstances **should you** open this door.*
- **Nowhere**: *Nowhere **will you find** better coffee.*
- **On no account**: *On no account **must this** leave the room.*

Without fronting, no inversion: *He seldom apologises.* — both correct; fronting adds drama.`,
      miniCheck: {
        id: 'm7l1-c2',
        type: 'mcq',
        question: 'Under no circumstances ___ the emergency exit.',
        options: [
          'should passengers block',
          'passengers should block',
          'passengers block should',
        ],
        correct: 0,
        explanation:
          'Negative opener → **auxiliary + subject + verb**: *should passengers block*.',
      },
    },
    {
      title: 'No sooner… than / Hardly… when',
      body: `The dramatic-timing twins — one thing happens, and BAM, the next:

> **No sooner had I sat down than** the phone rang.
> **Hardly had we left when** it started to pour.
> **Scarcely had she finished when** the applause erupted.

Fixed recipe: **No sooner/Hardly/Scarcely + had + subject + participle**, then **than** (after *no sooner*) or **when** (after *hardly/scarcely*).`,
      miniCheck: {
        id: 'm7l1-c3',
        type: 'mcq',
        question: 'No sooner had the concert begun ___ the power failed.',
        options: ['than', 'when', 'that'],
        correct: 0,
        explanation:
          '*No sooner* is a comparative — it pairs with **than**.',
      },
    },
    {
      title: 'Not only… but (also)',
      body: `> **Not only did she win**, but she **also** broke the record.
> **Not only is it** cheap, but it actually works.

Inversion happens **only in the first half** — the *but* half stays normal.

And the elegant follow-up family — **nor/neither/so**:

> I don't eat meat. — **Neither/Nor do I.**
> She was exhausted, **as was I**. · He can juggle. — **So can I.**`,
      miniCheck: {
        id: 'm7l1-c4',
        type: 'gap',
        before: 'Not only',
        after: 'the deadline, he also lost the files. (he / miss — past)',
        hint: 'did / he / miss',
        accepted: ['did he miss'],
        explanation:
          'Not only + inversion: **did he miss** — borrow *did* for past simple.',
      },
    },
    {
      title: 'Only when / Only after / Only by',
      body: `**Only + time/means phrase** first → invert the MAIN clause:

> **Only when the plane landed did I relax.** (not the *when* clause — the main one!)
> **Only after signing did we see** the small print.
> **Only by working nights was she able to** finish.

The same happens with **Not until**:

> **Not until midnight did the guests leave.**`,
      miniCheck: {
        id: 'm7l1-c5',
        type: 'mcq',
        question: 'Only when the smoke cleared ___ the damage.',
        options: ['could we see', 'we could see', 'we saw could'],
        correct: 0,
        explanation:
          '*Only when…* fronted → invert the **main** clause: *could we see*.',
      },
    },
    {
      title: 'Little, So… that, Such… that',
      body: `**Little** = "not at all" — wonderfully sinister:

> **Little did they know** the bridge was out.

**So + adjective + that** — invert with *be*:

> **So fierce was the storm that** boats stayed in harbour.

**Such + be + noun + that**:

> **Such was the demand that** servers crashed.`,
      tip: 'Inversion is seasoning, not soup: one per paragraph electrifies; five per paragraph reads like a Victorian ghost novel.',
      miniCheck: {
        id: 'm7l1-c6',
        type: 'gap',
        before: 'Little',
        after: 'that the interview was already over. (she / realise — past)',
        hint: 'did / she / realise',
        accepted: ['did she realise', 'did she realize'],
        explanation:
          '**Little did she realise** — borrowed *did*, question order.',
      },
    },
  ],
  sets: [
    {
      title: 'The Flip Factory',
      icon: '🔄',
      exercises: [
        {
          id: 'm7l1-a1',
          type: 'transform',
          source: 'I have rarely tasted anything so good.',
          keyword: 'rarely',
          before: 'Rarely',
          after: 'anything so good.',
          accepted: ['have I tasted'],
          explanation:
            'Front *rarely* → invert: **Rarely have I tasted…**',
        },
        {
          id: 'm7l1-a2',
          type: 'transform',
          source: 'She seldom shows her true feelings.',
          keyword: 'seldom',
          before: 'Seldom',
          after: 'her true feelings.',
          accepted: ['does she show'],
          explanation:
            'Present simple → borrow **does**: *Seldom does she show…*',
        },
        {
          id: 'm7l1-a3',
          type: 'mcq',
          question: 'Nowhere ___ such generous hospitality.',
          options: [
            'have I encountered',
            'I have encountered',
            'encountered I have',
          ],
          correct: 0,
          explanation:
            '*Nowhere* fronted → **have I encountered**.',
        },
        {
          id: 'm7l1-a4',
          type: 'error-hunt',
          sentence: 'Never I have heard such nonsense in a board meeting.',
          wrongIndex: 1,
          correction: 'have I',
          explanation:
            'After fronted *Never* → auxiliary first: **Never have I heard…**',
        },
        {
          id: 'm7l1-a5',
          type: 'order',
          correct: 'At no time did the crew lose control of the aircraft',
          explanation:
            '**At no time + did + subject + verb** — the reassuring-press-release classic.',
        },
        {
          id: 'm7l1-a6',
          type: 'mcq',
          question: 'Which sentence is correct WITHOUT inversion?',
          options: [
            'He rarely leaves the house before noon.',
            'Rarely he leaves the house before noon.',
            'Rarely leaves he the house before noon.',
          ],
          correct: 0,
          explanation:
            'Keep the adverb inside the sentence → normal order. Front it, and inversion becomes compulsory.',
        },
        {
          id: 'm7l1-a7',
          type: 'gap',
          before: 'On no account',
          after: 'this password with anyone. (you / share — modal should)',
          hint: 'should / you / share',
          accepted: ['should you share'],
          explanation:
            '**On no account should you share** — modal + subject + verb.',
        },
        {
          id: 'm7l1-a8',
          type: 'transform',
          source: "You must not press this button under any circumstances.",
          keyword: 'circumstances',
          before: 'Under no circumstances',
          after: 'this button.',
          accepted: ['must you press', 'should you press'],
          explanation:
            'Negative phrase fronted → **must you press**.',
        },
      ],
    },
    {
      title: 'Dramatic Timing',
      icon: '🎬',
      exercises: [
        {
          id: 'm7l1-b1',
          type: 'gap',
          before: 'No sooner',
          after: 'the door than the cat shot out. (I / open — past perfect)',
          hint: 'had / I / open',
          accepted: ['had I opened'],
          explanation:
            '**No sooner had I opened… than…** — past perfect + inversion.',
        },
        {
          id: 'm7l1-b2',
          type: 'mcq',
          question: 'Hardly had the plane taken off ___ the turbulence began.',
          options: ['when', 'than', 'that'],
          correct: 0,
          explanation:
            '*Hardly/Scarcely* pair with **when**; only *no sooner* takes *than*.',
        },
        {
          id: 'm7l1-b3',
          type: 'order',
          correct: 'No sooner had she hung up than the phone rang again',
          explanation:
            'The full recipe: **No sooner + had + subject + participle + than…**',
        },
        {
          id: 'm7l1-b4',
          type: 'error-hunt',
          sentence: 'No sooner had we lit the barbecue when it started raining.',
          wrongIndex: 7,
          correction: 'than',
          explanation:
            '*No sooner* is comparative → **than**, never *when*.',
        },
        {
          id: 'm7l1-b5',
          type: 'transform',
          source: 'As soon as I got into the bath, the doorbell rang.',
          keyword: 'sooner',
          before: 'No sooner',
          after: 'into the bath than the doorbell rang.',
          accepted: ['had I got', 'had I gotten'],
          explanation:
            '**No sooner had I got into the bath than…**',
        },
        {
          id: 'm7l1-b6',
          type: 'gap',
          before: 'Scarcely',
          after: 'the award when the scandal broke. (he / accept — past perfect)',
          hint: 'had / he / accept',
          accepted: ['had he accepted'],
          explanation:
            '**Scarcely had he accepted… when…**',
        },
        {
          id: 'm7l1-b7',
          type: 'mcq',
          question: 'Pick the correct dramatic-timing sentence:',
          options: [
            'Hardly had the credits rolled when the audience began to applaud.',
            'Hardly the credits had rolled when the audience began to applaud.',
            'Hardly had the credits rolled than the audience began to applaud.',
          ],
          correct: 0,
          explanation:
            '**Hardly + had + subject + participle + when** — inversion and the right partner word.',
        },
        {
          id: 'm7l1-b8',
          type: 'sort',
          prompt: 'than or when?',
          buckets: ['+ than', '+ when'],
          items: [
            { text: 'No sooner had it started…', bucket: 0 },
            { text: 'Hardly had we sat down…', bucket: 1 },
            { text: 'Scarcely had she spoken…', bucket: 1 },
            { text: 'No sooner had he paid…', bucket: 0 },
          ],
          explanation:
            '*no sooner* → **than** · *hardly/scarcely* → **when**.',
        },
      ],
    },
    {
      title: 'Only & Company',
      icon: '💎',
      exercises: [
        {
          id: 'm7l1-d1',
          type: 'transform',
          source: 'She did not relax until the results arrived.',
          keyword: 'until',
          before: 'Not until the results arrived',
          after: '.',
          accepted: ['did she relax'],
          explanation:
            '**Not until + clause + did + subject + verb.**',
        },
        {
          id: 'm7l1-d2',
          type: 'gap',
          before: 'Only after the guests had left',
          after: 'how tired she was. (she / realise — past)',
          hint: 'did / she / realise',
          accepted: ['did she realise', 'did she realize'],
          explanation:
            '*Only after…* fronted → main clause inverts: **did she realise**.',
        },
        {
          id: 'm7l1-d3',
          type: 'error-hunt',
          sentence: 'Only when the fog lifted the rescue team could continue.',
          wrongIndex: 5,
          correction: 'could the rescue team',
          explanation:
            'The MAIN clause must invert: *Only when the fog lifted **could the rescue team** continue.*',
        },
        {
          id: 'm7l1-d4',
          type: 'mcq',
          question: 'Not only ___ the piano, but she also composes.',
          options: ['does she play', 'she plays', 'plays she'],
          correct: 0,
          explanation:
            '**Not only + inversion** in the first half: *does she play*.',
        },
        {
          id: 'm7l1-d5',
          type: 'order',
          correct: 'Only by asking questions do we truly learn',
          explanation:
            '**Only by + -ing** fronted → *do we truly learn*.',
        },
        {
          id: 'm7l1-d6',
          type: 'gap',
          before: '"I can\'t stand queues." — "Neither',
          after: '."',
          hint: 'can / I',
          accepted: ['can i'],
          explanation:
            'Agreeing with a negative → **Neither can I** — inverted echo.',
        },
        {
          id: 'm7l1-d7',
          type: 'mcq',
          question: 'So intense ___ that the referee stopped the match.',
          options: ['was the heat', 'the heat was', 'was heat the'],
          correct: 0,
          explanation:
            '**So + adjective + was + subject + that**: *So intense was the heat…*',
        },
        {
          id: 'm7l1-d8',
          type: 'transform',
          source: 'The demand was so great that the site crashed.',
          keyword: 'such',
          before: 'Such',
          after: 'the demand that the site crashed.',
          accepted: ['was'],
          explanation:
            '**Such + was + noun + that**: *Such was the demand…*',
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm7l1-e1',
          type: 'speed',
          secondsPerItem: 9,
          explanation: 'Inversion at full speed!',
          items: [
            {
              question: 'Never ___ so embarrassed.',
              options: ['have I been', 'I have been'],
              correct: 0,
            },
            {
              question: 'No sooner had I paid ___ it broke.',
              options: ['than', 'when'],
              correct: 0,
            },
            {
              question: 'Hardly had we started ___ it ended.',
              options: ['when', 'than'],
              correct: 0,
            },
            {
              question: 'Little ___ what awaited him.',
              options: ['did he know', 'he knew'],
              correct: 0,
            },
            {
              question: 'Only then ___ the truth.',
              options: ['did I see', 'I saw'],
              correct: 0,
            },
            {
              question: 'Not only ___ late, he was rude.',
              options: ['was he', 'he was'],
              correct: 0,
            },
            {
              question: '"I love this song." "So ___ !"',
              options: ['do I', 'I do'],
              correct: 0,
            },
            {
              question: 'Seldom ___ this quiet.',
              options: ['is the office', 'the office is'],
              correct: 0,
            },
            {
              question: 'Such ___ the noise that we left.',
              options: ['was', 'it was'],
              correct: 0,
            },
            {
              question: 'Under no circumstances ___ alone.',
              options: ['should you go', 'you should go'],
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
        id: 'm7l1-boss1',
        type: 'transform',
        source: 'I have never read a more moving letter.',
        keyword: 'never',
        before: 'Never',
        after: 'a more moving letter.',
        accepted: ['have I read'],
        explanation: '**Never have I read…** — front + flip.',
      },
      {
        id: 'm7l1-boss2',
        type: 'mcq',
        question: 'No sooner ___ the contract than the price doubled.',
        options: ['had we signed', 'we had signed', 'did we signed'],
        correct: 0,
        explanation:
          '**No sooner had we signed… than…** — past perfect inversion.',
      },
      {
        id: 'm7l1-boss3',
        type: 'gap',
        before: 'Not until she read the diary',
        after: 'the whole story. (she / understand — past)',
        hint: 'did / she / understand',
        accepted: ['did she understand'],
        explanation:
          '**Not until… did she understand** — main clause inverts.',
      },
      {
        id: 'm7l1-boss4',
        type: 'error-hunt',
        sentence: 'Not only she apologised, but she also replaced the vase.',
        wrongIndex: 2,
        correction: 'did she apologise',
        explanation:
          '*Not only* fronted → inversion: **Not only did she apologise…**',
      },
      {
        id: 'm7l1-boss5',
        type: 'order',
        correct: 'Little did the villagers suspect what lay beneath the field',
        explanation:
          '**Little did + subject + verb** — the sinister opener.',
      },
      {
        id: 'm7l1-boss6',
        type: 'mcq',
        question: 'Only by reading the footnotes ___ the real story.',
        options: [
          'can you piece together',
          'you can piece together',
          'piece you can together',
        ],
        correct: 0,
        explanation:
          '**Only by + -ing** fronted → *can you piece together*.',
      },
      {
        id: 'm7l1-boss7',
        type: 'gap',
        before: 'So convincing',
        after: 'her performance that the director cast her on the spot. (be — past)',
        hint: 'was…',
        accepted: ['was'],
        explanation:
          '**So + adjective + was + subject + that…**',
      },
      {
        id: 'm7l1-boss8',
        type: 'transform',
        source: 'The moment the whistle blew, the fans invaded the pitch.',
        keyword: 'hardly',
        before: 'Hardly',
        after: 'when the fans invaded the pitch.',
        accepted: ['had the whistle blown'],
        explanation:
          '**Hardly had the whistle blown when…**',
      },
      {
        id: 'm7l1-boss9',
        type: 'mcq',
        question: '"I never remember birthdays." — Correct agreeing reply:',
        options: ['Neither do I.', 'So do I.', 'Neither I do.'],
        correct: 0,
        explanation:
          'Agreeing with a negative → **Neither do I** (inverted).',
      },
      {
        id: 'm7l1-boss10',
        type: 'error-hunt',
        sentence: 'Only when the votes were counted the winner celebrated.',
        wrongIndex: 6,
        correction: 'did the winner celebrate',
        explanation:
          'Main clause after *Only when…* must invert: **did the winner celebrate**.',
      },
      {
        id: 'm7l1-boss11',
        type: 'sort',
        prompt: 'Does the sentence need inversion?',
        buckets: ['inversion needed', 'normal order fine'],
        items: [
          { text: 'Never ___ (I/see) such a mess.', bucket: 0 },
          { text: 'I have never ___ (see) such a mess.', bucket: 1 },
          { text: 'Only after lunch ___ (we/felt) awake.', bucket: 0 },
          { text: 'We felt awake only after lunch.', bucket: 1 },
          { text: 'Little ___ (they/know) about it.', bucket: 0 },
          { text: 'They knew little about it.', bucket: 1 },
        ],
        explanation:
          'Inversion fires only when the negative/restrictive phrase is **fronted**.',
      },
    ],
  },
};
