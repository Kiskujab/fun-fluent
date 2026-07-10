import type { Lesson } from '../../types';

export const m5l3: Lesson = {
  id: 'm5l3',
  title: 'He Said, She Said',
  subtitle: 'reported speech & reporting verbs',
  minutes: 45,
  goals: [
    'Backshift tenses with confidence — and know when NOT to',
    'Report questions without turning them into questions',
    'Report commands, requests and advice with to-infinitives',
    'Upgrade from say/tell to admit, deny, suggest, warn…',
  ],
  cards: [
    {
      title: 'The backshift: one step into the past',
      body: `Reporting later? Each tense takes **one step back**:

- present simple → past simple: "I **love** it" → she said she **loved** it
- present continuous → past continuous: "I**'m leaving**" → he said he **was leaving**
- present perfect / past simple → past perfect: "I **saw** it" → she said she **had seen** it
- will → would · can → could · may → might · must → had to

> "We**'ve missed** the bus." → They said they **had missed** the bus.`,
      miniCheck: {
        id: 'm5l3-c1',
        type: 'gap',
        before: '"I work from home." → She said she',
        after: 'from home.',
        hint: 'work',
        accepted: ['worked'],
        explanation:
          'Present simple → past simple: *she said she **worked***.',
      },
    },
    {
      title: 'When NOT to backshift',
      body: `Skip the backshift when the statement is **still true** or the reporting verb is **present**:

> "The Earth **orbits** the Sun." → He said the Earth **orbits** the Sun. (eternal truth)
> "I **live** in Leeds." → She says she **lives** in Leeds. (report verb in present)

Some things never shift anyway: **would, could, might, should, ought to** and the **past perfect** are already as far back as they go.`,
      miniCheck: {
        id: 'm5l3-c2',
        type: 'mcq',
        question: '"Water boils at 100°C," said the teacher. → The teacher said that water ___ at 100°C.',
        options: ['boils', 'boiled — obligatory', 'had boiled'],
        correct: 0,
        explanation:
          'Eternal truth → no backshift needed: *water **boils***. (Backshift is possible but unnecessary.)',
      },
    },
    {
      title: 'Pointers move too',
      body: `Time and place words shift with the perspective:

- today → **that day** · yesterday → **the day before**
- tomorrow → **the next day** · next week → **the following week**
- ago → **before** · now → **then**
- here → **there** · this → **that** · come → **go** (sometimes)

> "I'll call you **tomorrow**," he said. → He said he would call me **the next day**.`,
      miniCheck: {
        id: 'm5l3-c3',
        type: 'mcq',
        question: '"We arrived yesterday," they said. → They said they had arrived ___ .',
        options: ['the day before', 'yesterday (always)', 'the next day'],
        correct: 0,
        explanation:
          '*yesterday* → **the day before** when the reporting moment has moved.',
      },
    },
    {
      title: 'Reported questions: the un-question',
      body: `Reported questions use **statement word order** — no *do*, no question mark:

> "Where **do you live**?" → She asked me **where I lived**.
> "What time **is it**?" → He asked **what time it was**.

Yes/no questions bring **if/whether**:

> "Are you coming?" → They asked **if/whether I was coming**.

⚠️ The #1 exam trap: ~~She asked where did I live~~ — the *did* must go!`,
      miniCheck: {
        id: 'm5l3-c4',
        type: 'gap',
        before: '"Why are you late?" → The boss asked me why I',
        after: 'late.',
        hint: 'be',
        accepted: ['was'],
        explanation:
          'Statement order + backshift: *asked why I **was** late* — no *are*, no inversion.',
      },
    },
    {
      title: 'Commands & requests: the to-infinitive squad',
      body: `Orders, requests and advice report with **verb + object + to-infinitive**:

> "Sit down." → She **told us to sit** down.
> "Please help me." → He **asked me to help** him.
> "Don't touch it!" → They **warned us not to touch** it.

Negative = **not to**:

> "Don't be late." → Mum **reminded me not to be** late.`,
      miniCheck: {
        id: 'm5l3-c5',
        type: 'gap',
        before: '"Don\'t forget your keys!" → She reminded me',
        after: 'my keys.',
        hint: 'not / forget',
        accepted: ['not to forget'],
        explanation:
          'Negative command → **not to + verb**: *reminded me not to forget*.',
      },
    },
    {
      title: 'say vs tell — the eternal mix-up',
      body: `**tell** needs a person; **say** doesn't take one directly:

> She **told me** the truth. — not ~~said me~~
> She **said** the truth was complicated. — not ~~told that~~

With *to*, *say* can add a person: *she **said to me***… (but *told me* is neater).

> He **told us to wait**. · He **said (that) we should wait**.`,
      miniCheck: {
        id: 'm5l3-c6',
        type: 'mcq',
        question: 'She ___ that the meeting was cancelled.',
        options: ['said', 'told', 'said me'],
        correct: 0,
        explanation:
          'No person mentioned → **said**. (*told* would need one: *told us that…*)',
      },
    },
    {
      title: 'Reporting verbs: the upgrade pack',
      body: `Stop reporting everything with *said*. Each verb has its own pattern:

- **+ -ing**: admit, deny, suggest, recommend — *He **denied breaking** it.*
- **+ object + to**: advise, warn, remind, persuade — *She **advised me to wait**.*
- **+ to**: offer, refuse, promise, agree, threaten — *They **refused to leave**.*
- **+ preposition + -ing**: apologise **for** doing, accuse sb **of** doing, insist **on** doing, blame sb **for** doing

> "It was me. Sorry." → He **apologised for taking** the last biscuit.`,
      tip: 'One verb, one pattern — learn them as chunks: deny doing, refuse to do, accuse of doing. The verb chooses; you obey.',
      miniCheck: {
        id: 'm5l3-c7',
        type: 'mcq',
        question: '"You stole my idea!" → She accused him ___ her idea.',
        options: ['of stealing', 'to steal', 'stealing'],
        correct: 0,
        explanation:
          '**accuse somebody OF + -ing**: *accused him of stealing*.',
      },
    },
  ],
  sets: [
    {
      title: 'The Backshift Bureau',
      icon: '🕰️',
      exercises: [
        {
          id: 'm5l3-a1',
          type: 'gap',
          before: '"I\'m waiting outside." → He said he',
          after: 'outside.',
          hint: 'wait',
          accepted: ['was waiting'],
          explanation:
            'Present continuous → past continuous: **was waiting**.',
        },
        {
          id: 'm5l3-a2',
          type: 'gap',
          before: '"We have sold the house." → They said they',
          after: 'the house.',
          hint: 'sell',
          accepted: ['had sold'],
          explanation:
            'Present perfect → past perfect: **had sold**.',
        },
        {
          id: 'm5l3-a3',
          type: 'mcq',
          question: '"I\'ll fix it tomorrow." → He promised he ___ it the next day.',
          options: ['would fix', 'will fix', 'had fixed'],
          correct: 0,
          explanation:
            '*will* → **would**; *tomorrow* → *the next day*.',
        },
        {
          id: 'm5l3-a4',
          type: 'gap',
          before: '"You must sign both copies." → She said we',
          after: 'sign both copies.',
          hint: 'must →?',
          accepted: ['had to'],
          explanation:
            'Obligation *must* → **had to** in reported speech.',
        },
        {
          id: 'm5l3-a5',
          type: 'error-hunt',
          sentence: 'She said that she has finished the report the previous day.',
          wrongIndex: 4,
          correction: 'had',
          explanation:
            'With past reporting + *the previous day*, backshift to past perfect: **had finished**.',
        },
        {
          id: 'm5l3-a6',
          type: 'mcq',
          question: 'Which report needs NO backshift?',
          options: [
            'She says she is happy with the result.',
            'She said last year that she is 25.',
            'He said he will come yesterday.',
          ],
          correct: 0,
          explanation:
            'Present reporting verb (*says*) → no backshift needed.',
        },
        {
          id: 'm5l3-a7',
          type: 'match',
          prompt: 'Match direct to reported.',
          pairs: [
            ['"I can swim."', 'She said she could swim.'],
            ['"I saw it two years ago."', 'He said he had seen it two years before.'],
            ['"We may be late."', 'They said they might be late.'],
            ['"I had already eaten."', 'He said he had already eaten.'],
          ],
          explanation:
            'can→could, may→might, ago→before; past perfect stays put — it cannot go further back.',
        },
        {
          id: 'm5l3-a8',
          type: 'transform',
          source: '"We are moving to this town next month."',
          keyword: 'following',
          before: 'They said they were moving to that town the',
          after: 'month.',
          accepted: ['following'],
          explanation:
            '*next month* → **the following month**; *this* → *that*.',
        },
      ],
    },
    {
      title: 'The Interrogation Room',
      icon: '❓',
      exercises: [
        {
          id: 'm5l3-b1',
          type: 'order',
          correct: 'She asked me where I had parked the car',
          explanation:
            'Reported question: question word + **statement order** + backshift.',
        },
        {
          id: 'm5l3-b2',
          type: 'gap',
          before: '"Are you free on Friday?" → He asked me',
          after: 'I was free on Friday.',
          hint: 'one word (two possible)',
          accepted: ['if', 'whether'],
          explanation:
            'Yes/no question → **if/whether** + statement order.',
        },
        {
          id: 'm5l3-b3',
          type: 'error-hunt',
          sentence: 'The officer asked me where was I going so fast.',
          wrongIndex: 5,
          correction: 'I was',
          explanation:
            'Statement word order in reported questions: *where **I was** going*.',
        },
        {
          id: 'm5l3-b4',
          type: 'transform',
          source: '"What time does the museum open?"',
          keyword: 'opened',
          before: 'She asked what time the museum',
          after: '.',
          accepted: ['opened'],
          explanation:
            'The *does* disappears; the main verb carries the past: **the museum opened**.',
        },
        {
          id: 'm5l3-b5',
          type: 'mcq',
          question: '"Did you lock the door?" → He asked me ___ .',
          options: [
            'whether I had locked the door',
            'did I lock the door',
            'whether had I locked the door',
          ],
          correct: 0,
          explanation:
            '*did* vanishes → **whether I had locked** — statement order, past perfect.',
        },
        {
          id: 'm5l3-b6',
          type: 'gap',
          before: '"How long have you lived here?" → She asked how long I',
          after: 'there.',
          hint: 'live',
          accepted: ['had lived', 'had been living'],
          explanation:
            'Present perfect → past perfect: **had lived** (or *had been living*); *here* → *there*.',
        },
        {
          id: 'm5l3-b7',
          type: 'order',
          correct: 'He wanted to know if the tickets were still available',
          explanation:
            '*wanted to know* + **if** + statement order — a polite reporting frame.',
        },
        {
          id: 'm5l3-b8',
          type: 'error-hunt',
          sentence: 'She asked me what did I think of the proposal.',
          wrongIndex: 4,
          correction: 'I thought',
          explanation:
            'No *did* in reported questions: *what **I thought** of the proposal*.',
        },
      ],
    },
    {
      title: 'Verb Upgrade Studio',
      icon: '🎙️',
      exercises: [
        {
          id: 'm5l3-d1',
          type: 'mcq',
          question: '"I did NOT eat the cake." → He ___ the cake.',
          options: ['denied eating', 'denied to eat', 'refused eating'],
          correct: 0,
          explanation:
            '**deny + -ing**: *denied eating*. (*refuse* is for the future: refuse to do.)',
        },
        {
          id: 'm5l3-d2',
          type: 'gap',
          before: '"I\'ll definitely pay you back." → She promised',
          after: 'me back.',
          hint: 'pay',
          accepted: ['to pay'],
          explanation: '**promise + to-infinitive**: *promised to pay*.',
        },
        {
          id: 'm5l3-d3',
          type: 'mcq',
          question: '"Let\'s take the night train!" → She suggested ___ the night train.',
          options: ['taking', 'to take', 'us to take'],
          correct: 0,
          explanation:
            '**suggest + -ing** — never *suggest to do*: *suggested taking*.',
        },
        {
          id: 'm5l3-d4',
          type: 'gap',
          before: '"I\'m so sorry I\'m late." → He apologised',
          after: 'late.',
          hint: 'for / be',
          accepted: ['for being'],
          explanation:
            '**apologise FOR + -ing**: *apologised for being late*.',
        },
        {
          id: 'm5l3-d5',
          type: 'sort',
          prompt: 'Which pattern does each reporting verb take?',
          buckets: ['+ -ing', '+ object + to', '+ to-infinitive'],
          items: [
            { text: 'deny', bucket: 0 },
            { text: 'persuade', bucket: 1 },
            { text: 'offer', bucket: 2 },
            { text: 'suggest', bucket: 0 },
            { text: 'warn', bucket: 1 },
            { text: 'threaten', bucket: 2 },
            { text: 'admit', bucket: 0 },
            { text: 'remind', bucket: 1 },
          ],
          explanation:
            'deny/suggest/admit + -ing · persuade/warn/remind + object + to · offer/threaten + to.',
        },
        {
          id: 'm5l3-d6',
          type: 'transform',
          source: '"Don\'t swim after dark — it\'s dangerous," the guide said to us.',
          keyword: 'warned',
          before: 'The guide',
          after: 'after dark.',
          accepted: ['warned us not to swim'],
          explanation:
            '**warn + object + not to**: *warned us not to swim*.',
        },
        {
          id: 'm5l3-d7',
          type: 'error-hunt',
          sentence: 'They accused him for leaking the documents to the press.',
          wrongIndex: 3,
          correction: 'of',
          explanation:
            '**accuse somebody OF + -ing** — *for* belongs to *blame*.',
        },
        {
          id: 'm5l3-d8',
          type: 'mcq',
          question: '"Honestly, you should see a doctor." → She ___ see a doctor.',
          options: ['advised me to', 'suggested me to', 'said me to'],
          correct: 0,
          explanation:
            '**advise + object + to**: *advised me to see*. (*suggest* never takes object + to.)',
        },
        {
          id: 'm5l3-d9',
          type: 'transform',
          source: '"Yes, it was me — I broke the window," said Tom.',
          keyword: 'admitted',
          before: 'Tom',
          after: 'the window.',
          accepted: ['admitted breaking', 'admitted having broken', 'admitted that he had broken'],
          explanation:
            '**admit + -ing** (or *admit that*-clause): *admitted breaking*.',
        },
        {
          id: 'm5l3-d10',
          type: 'gap',
          before: '"No, no, I\'ll carry the bags," he said. → He insisted',
          after: 'the bags.',
          hint: 'on / carry',
          accepted: ['on carrying'],
          explanation:
            '**insist ON + -ing**: *insisted on carrying*.',
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm5l3-e1',
          type: 'speed',
          secondsPerItem: 8,
          explanation: 'Reported speech at full speed!',
          items: [
            {
              question: '"I like jazz." → She said she ___ jazz.',
              options: ['liked', 'likes had'],
              correct: 0,
            },
            {
              question: '"Can you help?" → He asked if I ___ help.',
              options: ['could', 'can had'],
              correct: 0,
            },
            {
              question: '"Sit down!" → She told us ___ down.',
              options: ['to sit', 'sitting'],
              correct: 0,
            },
            {
              question: 'He ___ me the news.',
              options: ['told', 'said'],
              correct: 0,
            },
            {
              question: 'She suggested ___ early.',
              options: ['leaving', 'to leave'],
              correct: 0,
            },
            {
              question: '"Where is it?" → He asked where ___ .',
              options: ['it was', 'was it'],
              correct: 0,
            },
            {
              question: 'They denied ___ the rules.',
              options: ['breaking', 'to break'],
              correct: 0,
            },
            {
              question: '"tomorrow" becomes ___',
              options: ['the next day', 'the day before'],
              correct: 0,
            },
            {
              question: 'She apologised ___ shouting.',
              options: ['for', 'to'],
              correct: 0,
            },
            {
              question: 'He refused ___ the form.',
              options: ['to sign', 'signing'],
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
        id: 'm5l3-boss1',
        type: 'transform',
        source: '"I have never seen this man before," the witness said.',
        keyword: 'had',
        before: 'The witness said she',
        after: 'that man before.',
        accepted: ['had never seen'],
        explanation:
          'Present perfect → past perfect: **had never seen**; *this* → *that*.',
      },
      {
        id: 'm5l3-boss2',
        type: 'mcq',
        question: '"Will you be at the ceremony tomorrow?" → She asked ___ at the ceremony the next day.',
        options: [
          'whether I would be',
          'will I be',
          'whether would I be',
        ],
        correct: 0,
        explanation:
          'Yes/no → **whether** + statement order; *will* → **would**.',
      },
      {
        id: 'm5l3-boss3',
        type: 'gap',
        before: '"Please, please come to the reunion!" → She persuaded me',
        after: 'to the reunion.',
        hint: 'come',
        accepted: ['to come', 'to go'],
        explanation:
          '**persuade + object + to-infinitive**: *persuaded me to come/go*.',
      },
      {
        id: 'm5l3-boss4',
        type: 'error-hunt',
        sentence: 'The tourist asked us where could he buy tickets.',
        wrongIndex: 5,
        correction: 'he could',
        explanation:
          'Statement order in reported questions: *where **he could** buy tickets*.',
      },
      {
        id: 'm5l3-boss5',
        type: 'mcq',
        question: '"It was me who forgot to book the room," said Priya.',
        options: [
          'Priya admitted forgetting to book the room.',
          'Priya denied forgetting to book the room.',
          'Priya refused forgetting to book the room.',
        ],
        correct: 0,
        explanation:
          'Owning up → **admit + -ing**: *admitted forgetting*.',
      },
      {
        id: 'm5l3-boss6',
        type: 'gap',
        before: '"Don\'t touch the red button." → The engineer warned us',
        after: 'the red button.',
        hint: 'not / touch',
        accepted: ['not to touch'],
        explanation:
          '**warn + object + NOT TO**: *warned us not to touch*.',
      },
      {
        id: 'm5l3-boss7',
        type: 'order',
        correct: 'He wanted to know why I had left the party early',
        explanation:
          'Reported question: *why* + statement order + past perfect backshift.',
      },
      {
        id: 'm5l3-boss8',
        type: 'transform',
        source: '"Let\'s postpone the match," said the referee.',
        keyword: 'suggested',
        before: 'The referee',
        after: 'the match.',
        accepted: ['suggested postponing'],
        explanation:
          '**suggest + -ing**: *suggested postponing*.',
      },
      {
        id: 'm5l3-boss9',
        type: 'error-hunt',
        sentence: 'She said me that the flight had been delayed again.',
        wrongIndex: 1,
        correction: 'told',
        explanation:
          'Person after the verb → **told me** (*say* cannot take *me* directly).',
      },
      {
        id: 'm5l3-boss10',
        type: 'mcq',
        question: '"I\'ll call the police if you come back!" → He ___ the police.',
        options: ['threatened to call', 'offered to call', 'promised calling'],
        correct: 0,
        explanation:
          'A threat → **threaten + to-infinitive**: *threatened to call*.',
      },
      {
        id: 'm5l3-boss11',
        type: 'sort',
        prompt: 'Backshift needed, or fine as it is?',
        buckets: ['backshift needed', 'no backshift'],
        items: [
          { text: '"I am tired," she said an hour ago. → she said she ___ tired', bucket: 0 },
          { text: '"The Sun rises in the east." → he said it ___ in the east', bucket: 1 },
          { text: 'She SAYS (right now) that she ___ busy.', bucket: 1 },
          { text: '"We saw a whale!" (reported next week) → they said they ___ a whale', bucket: 0 },
          { text: '"You should rest." → she said I ___ rest', bucket: 1 },
        ],
        explanation:
          'Past reporting → backshift. Eternal truths, present reporting verbs, and *should/would/might* → no shift.',
      },
    ],
  },
};
