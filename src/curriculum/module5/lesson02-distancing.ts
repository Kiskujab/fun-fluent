import type { Lesson } from '../../types';

export const m5l2: Lesson = {
  id: 'm5l2',
  title: 'Keeping Your Distance',
  subtitle: 'it is said that…, seems, appears',
  minutes: 40,
  goals: [
    'Report claims without owning them: It is said that…',
    'Use the elegant personal version: He is said to…',
    'Point backwards with to have done inside distancing',
    'Soften statements with seem, appear, and friends',
  ],
  cards: [
    {
      title: 'Why distance yourself?',
      body: `News reporting, academic writing and diplomatic emails all need the same move: state a claim **without guaranteeing it**.

> Direct: The CEO lied.  😬 (hope you have evidence)
> Distanced: **It is claimed that** the CEO lied.  🛡️

Distancing says: *this is what people say — I'm just the messenger.*

Common verbs: **say, believe, think, report, claim, expect, know, understand, allege**.`,
      miniCheck: {
        id: 'm5l2-c1',
        type: 'mcq',
        question: 'A journalist without solid proof should write:',
        options: [
          'The minister is alleged to have taken bribes.',
          'The minister took bribes.',
          'I promise the minister took bribes.',
        ],
        correct: 0,
        explanation:
          '**is alleged to have done** reports the accusation without asserting it as fact.',
      },
    },
    {
      title: 'Pattern 1: It is said that…',
      body: `**It + passive reporting verb + that + clause**:

> **It is said that** the house is haunted.
> **It is believed that** the thieves had inside help.
> **It has been reported that** talks broke down last night.

The *it* is empty — a placeholder so the claim can float doer-free.`,
      miniCheck: {
        id: 'm5l2-c2',
        type: 'gap',
        before: 'It',
        after: 'that the tomb contains royal treasure. (believe)',
        hint: 'believe',
        accepted: ['is believed'],
        explanation:
          'Empty *it* + passive reporting verb: **It is believed that…**',
      },
    },
    {
      title: 'Pattern 2: He is said to…',
      body: `More elegant — promote the person to subject:

> People say he is a billionaire.
> → **He is said to be** a billionaire.

> Everyone believes she lives abroad.
> → **She is believed to live** abroad.

Formula: **subject + passive reporting verb + to-infinitive**.`,
      miniCheck: {
        id: 'm5l2-c3',
        type: 'gap',
        before: 'The volcano',
        after: 'to be one of the most dangerous in Europe. (consider)',
        hint: 'consider',
        accepted: ['is considered'],
        explanation:
          'Personal pattern: **is considered to be** — subject + passive verb + to-infinitive.',
      },
    },
    {
      title: 'Pointing backwards: to have done',
      body: `If the reported action happened **earlier**, use the perfect infinitive:

> People think the fire started in the kitchen.
> → The fire **is thought to have started** in the kitchen.

> They say she made a fortune in the 90s.
> → She **is said to have made** a fortune in the 90s.

Same time → *to do* · Earlier → **to have done**.`,
      miniCheck: {
        id: 'm5l2-c4',
        type: 'mcq',
        question: 'The painting ___ around 1650. (experts believe this about the past)',
        options: [
          'is believed to have been created',
          'is believed to create',
          'believes to have created',
        ],
        correct: 0,
        explanation:
          'Earlier action + the painting receives it → **to have been created**.',
      },
    },
    {
      title: 'seem & appear',
      body: `The everyday distancers:

> He **seems to know** the answer. · She **appears to have left**.
> **It seems that** nobody checked the figures.
> **It appears (that)** the file was deleted.

And the noun-flavoured hedge — **There seems to be**:

> **There seems to be** a mistake in my bill.
> **There appears to have been** a misunderstanding.`,
      miniCheck: {
        id: 'm5l2-c5',
        type: 'gap',
        before: 'There',
        after: 'to be a problem with the engine. (seem)',
        hint: 'seem',
        accepted: ['seems'],
        explanation:
          'Hedged existence: **There seems to be** a problem.',
      },
    },
    {
      title: 'The soft-focus toolkit',
      body: `More ways to blur the edges of a claim:

- **apparently** — Apparently, the meeting is cancelled.
- **according to** + source — According to the report, sales fell.
- **would seem/appear** (extra caution) — It **would seem** that we were wrong.
- **is likely to / is expected to** — Prices **are likely to rise**.
- **allegedly / reportedly / supposedly** — He **reportedly** earns millions.

💡 Stack them for maximum diplomacy: *It would appear that there may have been a slight misunderstanding* — a sentence wearing oven gloves.`,
      miniCheck: {
        id: 'm5l2-c6',
        type: 'mcq',
        question: '___ to the weather service, the storm will hit tonight.',
        options: ['According', 'Apparently', 'Allegedly'],
        correct: 0,
        explanation:
          'Naming your source → **According to** + source.',
      },
    },
  ],
  sets: [
    {
      title: 'The Newsroom',
      icon: '📰',
      exercises: [
        {
          id: 'm5l2-a1',
          type: 'transform',
          source: 'People say that the water here has healing powers.',
          keyword: 'said',
          before: 'It is',
          after: 'the water here has healing powers.',
          accepted: ['said that'],
          explanation:
            'Pattern 1: **It is said that** + clause.',
        },
        {
          id: 'm5l2-a2',
          type: 'gap',
          before: 'It',
          after: 'that the two companies will merge next year. (expect)',
          hint: 'expect',
          accepted: ['is expected'],
          explanation:
            'Empty *it* + passive reporting verb: **It is expected that…**',
        },
        {
          id: 'm5l2-a3',
          type: 'mcq',
          question: 'Which is the correct distanced version of "People believe the tunnel is unsafe"?',
          options: [
            'It is believed that the tunnel is unsafe.',
            'It believes that the tunnel is unsafe.',
            'The tunnel believes to be unsafe.',
          ],
          correct: 0,
          explanation:
            'The reporting verb goes **passive**: *It is believed that…*',
        },
        {
          id: 'm5l2-a4',
          type: 'error-hunt',
          sentence: 'It has said that the band will reunite for one final tour.',
          wrongIndex: 2,
          correction: 'been said',
          explanation:
            'Present perfect passive: *It has **been said** that…*',
        },
        {
          id: 'm5l2-a5',
          type: 'order',
          correct: 'It is reported that the talks ended without agreement',
          explanation:
            '**It is reported that** + clause — classic news distancing.',
        },
        {
          id: 'm5l2-a6',
          type: 'gap',
          before: 'It is widely',
          after: 'that octopuses are remarkably intelligent. (know)',
          hint: 'know',
          accepted: ['known'],
          explanation:
            '**It is (widely) known that…** — passive reporting verb.',
        },
        {
          id: 'm5l2-a7',
          type: 'mcq',
          question: 'To sound neutral about an unproven accusation, a reporter writes:',
          options: [
            'The player allegedly bet on his own matches.',
            'The player definitely bet on his own matches.',
            'I reckon the player bet on his own matches.',
          ],
          correct: 0,
          explanation:
            '**allegedly** flags an unproven claim — the journalist stays safe.',
        },
        {
          id: 'm5l2-a8',
          type: 'transform',
          source: 'Sources report that the president has resigned.',
          keyword: 'it',
          before: '',
          after: 'that the president has resigned.',
          accepted: ['it is reported', 'it has been reported'],
          explanation:
            'Distanced: **It is reported that…**',
        },
      ],
    },
    {
      title: 'Promotion Desk',
      icon: '🎩',
      exercises: [
        {
          id: 'm5l2-b1',
          type: 'transform',
          source: 'People say that he owns half the street.',
          keyword: 'to',
          before: 'He is said',
          after: 'half the street.',
          accepted: ['to own'],
          explanation:
            'Pattern 2, same time → plain infinitive: **is said to own**.',
        },
        {
          id: 'm5l2-b2',
          type: 'transform',
          source: 'Everyone thinks the thieves escaped through the sewers.',
          keyword: 'to',
          before: 'The thieves are thought',
          after: 'through the sewers.',
          accepted: ['to have escaped'],
          explanation:
            'Earlier action → perfect infinitive: **to have escaped**.',
        },
        {
          id: 'm5l2-b3',
          type: 'mcq',
          question: 'Shakespeare ___ some plays with other writers.',
          options: [
            'is known to have written',
            'is known to write',
            'knows to have written',
          ],
          correct: 0,
          explanation:
            'Past action, distanced → **is known to have written**.',
        },
        {
          id: 'm5l2-b4',
          type: 'error-hunt',
          sentence: 'The castle is believed to built in the ninth century.',
          wrongIndex: 5,
          correction: 'have been built',
          explanation:
            'Earlier + passive → **to have been built**.',
        },
        {
          id: 'm5l2-b5',
          type: 'gap',
          before: 'The missing yacht',
          after: 'to be somewhere near the coast. (report)',
          hint: 'report',
          accepted: ['is reported'],
          explanation:
            'Personal pattern: **is reported to be**.',
        },
        {
          id: 'm5l2-b6',
          type: 'order',
          correct: 'She is expected to win the election comfortably',
          explanation:
            'Personal distancing: **is expected to win**.',
        },
        {
          id: 'm5l2-b7',
          type: 'sort',
          prompt: 'Same time (to do) or earlier (to have done)?',
          buckets: ['to do (same time)', 'to have done (earlier)'],
          items: [
            { text: 'He is said ___ in a lighthouse. (live — now)', bucket: 0 },
            { text: 'She is believed ___ the country in May. (leave — already)', bucket: 1 },
            { text: 'The virus is thought ___ from bats. (come — originally)', bucket: 1 },
            { text: 'They are known ___ generous hosts. (be — generally)', bucket: 0 },
            { text: 'The ship is presumed ___ in the storm. (sink — back then)', bucket: 1 },
            { text: 'He is understood ___ for a rival firm. (work — currently)', bucket: 0 },
          ],
          explanation:
            'Now/generally → **to do** · before the report → **to have done**.',
        },
        {
          id: 'm5l2-b8',
          type: 'transform',
          source: 'It is believed that the manuscript was destroyed in the fire.',
          keyword: 'to',
          before: 'The manuscript is believed',
          after: 'in the fire.',
          accepted: ['to have been destroyed'],
          explanation:
            'Earlier + passive: **to have been destroyed**.',
        },
      ],
    },
    {
      title: 'Soft Focus',
      icon: '🌫️',
      exercises: [
        {
          id: 'm5l2-d1',
          type: 'gap',
          before: 'There',
          after: 'to have been an error in the calculations. (appear)',
          hint: 'appear',
          accepted: ['appears'],
          explanation:
            '**There appears to have been** — hedged past existence.',
        },
        {
          id: 'm5l2-d2',
          type: 'mcq',
          question: 'The most diplomatic way to say "You made a mistake":',
          options: [
            'There seems to have been a small oversight.',
            'You made a mistake.',
            'A mistake was made by you, obviously.',
          ],
          correct: 0,
          explanation:
            '*There seems to have been…* removes the blame and softens the claim. Peak diplomacy.',
        },
        {
          id: 'm5l2-d3',
          type: 'gap',
          before: 'He',
          after: 'to have misunderstood the instructions. (seem)',
          hint: 'seem',
          accepted: ['seems', 'seemed'],
          explanation:
            '**seem + perfect infinitive**: *seems to have misunderstood*.',
        },
        {
          id: 'm5l2-d4',
          type: 'error-hunt',
          sentence: 'There seems to been a delay on all northbound trains.',
          wrongIndex: 3,
          correction: 'be',
          explanation:
            '**There seems to be** — plain infinitive after *seems to*. (*to have been* would also work for the past.)',
        },
        {
          id: 'm5l2-d5',
          type: 'match',
          prompt: 'Match the hedge to its job.',
          pairs: [
            ['according to the survey,', 'naming your source'],
            ['allegedly', 'flagging an unproven accusation'],
            ['it would appear that', 'extra-cautious conclusion'],
            ['is likely to', 'probable future'],
          ],
          explanation:
            'Each hedge has a speciality — source, accusation, caution, probability.',
        },
        {
          id: 'm5l2-d6',
          type: 'mcq',
          question: '___ , the concert has been moved indoors. (someone told me)',
          options: ['Apparently', 'Definitely', 'Precisely'],
          correct: 0,
          explanation:
            '**Apparently** = "so I hear" — secondhand information flag.',
        },
        {
          id: 'm5l2-d7',
          type: 'order',
          correct: 'Prices are likely to rise again in the autumn',
          explanation:
            'Probability hedge: **are likely to rise**.',
        },
        {
          id: 'm5l2-d8',
          type: 'transform',
          source: 'We were wrong, it seems.',
          keyword: 'would',
          before: 'It',
          after: 'that we were wrong.',
          accepted: ['would seem', 'would appear'],
          explanation:
            'Extra caution: **It would seem/appear that…**',
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm5l2-e1',
          type: 'speed',
          secondsPerItem: 8,
          explanation: 'Distancing at full speed!',
          items: [
            {
              question: 'It ___ that the mine is empty.',
              options: ['is believed', 'believes'],
              correct: 0,
            },
            {
              question: 'He is said ___ very rich.',
              options: ['to be', 'that he is'],
              correct: 0,
            },
            {
              question: 'She is thought ___ abroad years ago. ',
              options: ['to have moved', 'to move'],
              correct: 0,
            },
            {
              question: 'There ___ to be a queue already.',
              options: ['seems', 'seems that'],
              correct: 0,
            },
            {
              question: '___ to legend, a dragon guards the cave.',
              options: ['According', 'Apparently'],
              correct: 0,
            },
            {
              question: 'It has ___ reported that the deal is off.',
              options: ['been', 'being'],
              correct: 0,
            },
            {
              question: 'The jewels are believed ___ stolen. (earlier)',
              options: ['to have been', 'to be have'],
              correct: 0,
            },
            {
              question: 'He ___ earns millions. (media say so)',
              options: ['reportedly', 'reportly'],
              correct: 0,
            },
            {
              question: 'It ___ appear that we are lost.',
              options: ['would', 'shall'],
              correct: 0,
            },
            {
              question: 'Snow ___ expected to fall overnight.',
              options: ['is', 'has'],
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
        id: 'm5l2-boss1',
        type: 'transform',
        source: 'People say that this lake never freezes.',
        keyword: 'said',
        before: 'This lake is',
        after: 'freeze.',
        accepted: ['said never to', 'said to never'],
        explanation:
          'Personal pattern: **is said never to freeze** (or informally *said to never freeze*).',
      },
      {
        id: 'm5l2-boss2',
        type: 'mcq',
        question: 'The composer ___ the symphony in only six weeks.',
        options: [
          'is said to have written',
          'is said to write',
          'said to have written',
        ],
        correct: 0,
        explanation:
          'Past achievement, distanced → **is said to have written**.',
      },
      {
        id: 'm5l2-boss3',
        type: 'gap',
        before: 'It',
        after: 'that the missing files were never backed up. (has / report)',
        hint: 'has / report',
        accepted: ['has been reported'],
        explanation:
          'Present perfect passive: **has been reported**.',
      },
      {
        id: 'm5l2-boss4',
        type: 'error-hunt',
        sentence: 'The bridge is thought to been damaged by the floods.',
        wrongIndex: 5,
        correction: 'have been',
        explanation:
          'Perfect passive infinitive: **to have been damaged**.',
      },
      {
        id: 'm5l2-boss5',
        type: 'transform',
        source: 'It appears that there was a leak in the system.',
        keyword: 'to',
        before: 'There appears',
        after: 'a leak in the system.',
        accepted: ['to have been'],
        explanation:
          'Hedged past existence: **There appears to have been**.',
      },
      {
        id: 'm5l2-boss6',
        type: 'mcq',
        question: 'Which sentence names its source?',
        options: [
          'According to the minutes, the vote was unanimous.',
          'Apparently the vote was unanimous.',
          'The vote was supposedly unanimous.',
        ],
        correct: 0,
        explanation:
          '**According to + source** is the only one that says where the claim comes from.',
      },
      {
        id: 'm5l2-boss7',
        type: 'order',
        correct: 'The suspect is alleged to have entered through the roof',
        explanation:
          'Unproven accusation, earlier action: **is alleged to have entered**.',
      },
      {
        id: 'm5l2-boss8',
        type: 'gap',
        before: 'The ruins',
        after: 'to date from the Bronze Age. (believe)',
        hint: 'believe',
        accepted: ['are believed'],
        explanation:
          'Plural subject: **are believed to date from**.',
      },
      {
        id: 'm5l2-boss9',
        type: 'mcq',
        question: 'The gentlest way to report a colleague\'s error upward:',
        options: [
          'There would seem to be a discrepancy in the figures.',
          'Marta broke the spreadsheet.',
          'Someone, naming no names, ruined everything.',
        ],
        correct: 0,
        explanation:
          '*would seem* + *there* + neutral noun = blame-free reporting. Promotion imminent.',
      },
      {
        id: 'm5l2-boss10',
        type: 'transform',
        source: 'Historians think the map was drawn from memory.',
        keyword: 'thought',
        before: 'The map is',
        after: 'from memory.',
        accepted: ['thought to have been drawn'],
        explanation:
          'Earlier + passive: **thought to have been drawn**.',
      },
      {
        id: 'm5l2-boss11',
        type: 'sort',
        prompt: 'Which pattern does each sentence use?',
        buckets: ['It is said that…', 'subject + passive + to', 'seem/appear'],
        items: [
          { text: 'It is rumoured that the shop will close.', bucket: 0 },
          { text: 'She is understood to be in talks with the club.', bucket: 1 },
          { text: 'He appears to have forgotten us.', bucket: 2 },
          { text: 'It is thought that the code was cracked.', bucket: 0 },
          { text: 'The letter is presumed to have burned.', bucket: 1 },
          { text: 'There seems to be no easy answer.', bucket: 2 },
        ],
        explanation:
          'Three distancing families: empty *it*, promoted subject, and the *seem/appear* hedges.',
      },
    ],
  },
};
