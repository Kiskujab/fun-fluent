import type { Lesson } from '../../types';

export const m4l2: Lesson = {
  id: 'm4l2',
  title: 'Advanced Patterns',
  subtitle: 'perfect & passive -ing / to forms',
  minutes: 40,
  goals: [
    'Point to the past with perfect forms: to have done, having done',
    'Go passive: to be chosen, being watched',
    'Use need + -ing and be made to like a native',
    "Deploy worth / no point / no use + -ing in style",
  ],
  cards: [
    {
      title: 'The perfect infinitive: to have done',
      body: `**to + have + past participle** points the infinitive **backwards in time**:

> He seems **to have forgotten** our meeting. (= it seems he forgot — earlier)
> She claims **to have met** the Queen twice.
> I'm sorry **to have missed** your call.

Compare:

> He seems **to know** her. (now)
> He seems **to have known** her for years. (started before now)`,
      miniCheck: {
        id: 'm4l2-c1',
        type: 'mcq',
        question: 'The thief appears ___ through the kitchen window. (last night)',
        options: ['to have entered', 'to enter'],
        correct: 0,
        explanation:
          'The entering happened **before** now → perfect infinitive **to have entered**.',
      },
    },
    {
      title: 'The perfect gerund: having done',
      body: `Gerunds can point backwards too — **having + past participle**:

> He denied **having taken** the money.
> She regrets **having said** anything at all.
> Thank you for **having looked** after the cat.

💡 With verbs like *deny*, *admit*, *remember*, the plain gerund is usually fine too — *He denied taking the money* — but the perfect form makes the "earlier" meaning crystal clear, and examiners love it.`,
      miniCheck: {
        id: 'm4l2-c2',
        type: 'gap',
        before: 'The minister admitted',
        after: 'the report before the vote. (perfect gerund)',
        hint: 'leak',
        accepted: ['having leaked'],
        explanation:
          'Perfect gerund: **having leaked** — the leaking happened before the admission.',
      },
    },
    {
      title: 'Passive infinitive: to be done',
      body: `When the subject **receives** the action, the infinitive goes passive:

> Everyone wants **to be loved**.
> She hopes **to be chosen** for the team.
> There's a lot **to be said** for a quiet life.

And past + passive combine into **to have been done**:

> He is lucky **to have been given** a second chance.`,
      miniCheck: {
        id: 'm4l2-c3',
        type: 'mcq',
        question: 'The files need ___ to head office before Friday.',
        options: ['to be sent', 'to send'],
        correct: 0,
        explanation:
          'The files receive the action → passive infinitive **to be sent**.',
      },
    },
    {
      title: 'Passive gerund: being done',
      body: `Same trick, gerund edition — **being + past participle**:

> I hate **being told** what to do.
> He complained about **being treated** like a child.
> The cat enjoys **being brushed**. (Obviously.)

Past version: **having been done**:

> She mentioned **having been offered** the job before.`,
      miniCheck: {
        id: 'm4l2-c4',
        type: 'gap',
        before: 'Nobody likes',
        after: 'in public. (criticise)',
        hint: 'criticise',
        accepted: ['being criticised', 'being criticized'],
        explanation:
          'After *like* we need a gerund; the subject receives the action → passive gerund **being criticised**.',
      },
    },
    {
      title: 'be made to — the rebel surrenders',
      body: `Remember *make* dropping its *to*? In the **passive**, the *to* comes back:

> They **made** us **wait** outside. (active — no *to*)
> We **were made to wait** outside. (passive — *to* returns!)

*let* has no passive twin — use **be allowed to** instead:

> They let us leave early. → We **were allowed to leave** early. — not ~~were let leave~~`,
      miniCheck: {
        id: 'm4l2-c5',
        type: 'mcq',
        question: 'At school we were made ___ a uniform, even in summer.',
        options: ['to wear', 'wear'],
        correct: 0,
        explanation:
          'Active: *made us wear*. Passive: **were made TO wear** — the *to* returns.',
      },
    },
    {
      title: 'need + -ing = a hidden passive',
      body: `English has a lovely shortcut: **need + -ing** means "needs to be done":

> The car **needs washing**. (= needs to be washed)
> Your roots **need doing**. · This sentence **needs rewriting**.

Both are correct — the gerund version is just more natural in everyday British English:

> The plants **need watering**. = The plants **need to be watered**.`,
      miniCheck: {
        id: 'm4l2-c6',
        type: 'gap',
        before: 'This shirt really needs',
        after: '— look at that crease! (iron)',
        hint: 'iron',
        accepted: ['ironing'],
        explanation:
          '**need + -ing** carries a passive meaning: *needs ironing* = needs to be ironed.',
      },
    },
    {
      title: "worth, no point, no use — the -ing idioms",
      body: `A family of expressions that all take **-ing**:

- **It's worth doing** / **It's not worth arguing** about it.
- **There's no point (in) waiting** any longer.
- **It's no use crying** over spilt milk.
- **It's no good talking** to him when he's tired.
- **have difficulty/trouble (in) doing**: I had trouble **finding** the entrance.

> This museum is well **worth visiting**.
> There's no point **getting** upset — the train has gone.`,
      tip: 'They all share one logic: the -ing form acts as the noun of the sentence. Spot the pattern once and the whole family is yours.',
      miniCheck: {
        id: 'm4l2-c7',
        type: 'mcq',
        question: "It's no use ___ to him — he never listens.",
        options: ['talking', 'to talk'],
        correct: 0,
        explanation: "**It's no use + -ing** — fixed pattern: *no use talking*.",
      },
    },
  ],
  sets: [
    {
      title: 'Time Travellers',
      icon: '⏳',
      exercises: [
        {
          id: 'm4l2-a1',
          type: 'mcq',
          question: 'She seems ___ her keys — she is emptying her whole bag.',
          options: ['to have lost', 'to lose', 'losing'],
          correct: 0,
          explanation:
            'The losing happened before now → perfect infinitive **to have lost**.',
        },
        {
          id: 'm4l2-a2',
          type: 'gap',
          before: 'He claims',
          after: 'with the band in the 90s. (perfect infinitive)',
          hint: 'play',
          accepted: ['to have played'],
          explanation:
            'Claim now, playing earlier → **claims to have played**.',
        },
        {
          id: 'm4l2-a3',
          type: 'mcq',
          question: "I don't remember ___ that — are you sure it was me?",
          options: ['having said', 'to have said', 'to say'],
          correct: 0,
          explanation:
            '*remember* takes a gerund for past events → perfect gerund **having said**.',
        },
        {
          id: 'm4l2-a4',
          type: 'transform',
          source: 'It seems that the dog ate the homework.',
          keyword: 'to',
          before: 'The dog seems',
          after: 'the homework.',
          accepted: ['to have eaten'],
          explanation:
            '*It seems that X did* → *X seems TO HAVE DONE*: **seems to have eaten**.',
        },
        {
          id: 'm4l2-a5',
          type: 'error-hunt',
          sentence: 'She denied to have broken the office printer.',
          wrongIndex: 2,
          correction: 'having',
          explanation:
            '*deny* is Team -ing → **denied having broken** (or *denied breaking*), never *denied to have*.',
        },
        {
          id: 'm4l2-a6',
          type: 'gap',
          before: 'Thank you for',
          after: 'me last week — it meant a lot. (perfect gerund)',
          hint: 'help',
          accepted: ['having helped'],
          explanation:
            'After the preposition *for* → gerund; the helping was earlier → **having helped**.',
        },
        {
          id: 'm4l2-a7',
          type: 'order',
          correct: 'He is believed to have left the country',
          explanation:
            'Distancing + perfect infinitive: **is believed to have left** — the leaving happened earlier.',
        },
        {
          id: 'm4l2-a8',
          type: 'mcq',
          question: 'You were lucky ___ the last train — the next one is tomorrow!',
          options: ['to have caught', 'to catch', 'catching'],
          correct: 0,
          explanation:
            'The catching already happened → **lucky to have caught**.',
        },
      ],
    },
    {
      title: 'Passive Mode',
      icon: '🪞',
      exercises: [
        {
          id: 'm4l2-b1',
          type: 'gap',
          before: 'Every actor dreams of',
          after: 'for an Oscar. (nominate)',
          hint: 'nominate',
          accepted: ['being nominated'],
          explanation:
            'After the preposition *of* → gerund; actors receive the nomination → **being nominated**.',
        },
        {
          id: 'm4l2-b2',
          type: 'mcq',
          question: 'The new bridge is expected ___ next spring.',
          options: ['to be completed', 'to complete', 'being completed'],
          correct: 0,
          explanation:
            'The bridge receives the action → passive infinitive **to be completed**.',
        },
        {
          id: 'm4l2-b3',
          type: 'error-hunt',
          sentence: 'My little brother hates being tell what to do.',
          wrongIndex: 5,
          correction: 'told',
          explanation:
            'Passive gerund = being + **past participle**: *being told*.',
        },
        {
          id: 'm4l2-b4',
          type: 'transform',
          source: 'They made the passengers show their passports twice.',
          keyword: 'were',
          before: 'The passengers',
          after: 'their passports twice.',
          accepted: ['were made to show'],
          explanation:
            'Passive of *make*: the *to* returns → **were made to show**.',
        },
        {
          id: 'm4l2-b5',
          type: 'mcq',
          question: 'We were not allowed ___ photos inside the gallery.',
          options: ['to take', 'take', 'taking'],
          correct: 0,
          explanation:
            '*let* has no passive — **be allowed TO take** does the job.',
        },
        {
          id: 'm4l2-b6',
          type: 'gap',
          before: 'She was proud',
          after: 'to represent her country. (choose — passive, past)',
          hint: 'choose',
          accepted: ['to have been chosen'],
          explanation:
            'Past + passive infinitive: **to have been chosen** — the choosing happened earlier, and she received it.',
        },
        {
          id: 'm4l2-b7',
          type: 'order',
          correct: 'I remember being taken to the zoo as a child',
          explanation:
            '*remember* + passive gerund: **being taken** — you received the trip.',
        },
        {
          id: 'm4l2-b8',
          type: 'sort',
          prompt: 'Active meaning or passive meaning?',
          buckets: ['active form', 'passive form'],
          items: [
            { text: 'to be invited', bucket: 1 },
            { text: 'having been warned', bucket: 1 },
            { text: 'to have finished', bucket: 0 },
            { text: 'being watched', bucket: 1 },
            { text: 'having eaten', bucket: 0 },
            { text: 'to be told', bucket: 1 },
            { text: 'to have seen', bucket: 0 },
            { text: 'inviting', bucket: 0 },
          ],
          explanation:
            'Passive forms contain **be/being/been + past participle**; active ones never do.',
        },
      ],
    },
    {
      title: 'Idiom Workshop',
      icon: '🛠️',
      exercises: [
        {
          id: 'm4l2-d1',
          type: 'gap',
          before: 'The kitchen floor needs',
          after: '— the dog walked mud everywhere. (mop)',
          hint: 'mop',
          accepted: ['mopping'],
          explanation:
            '**need + -ing** = passive meaning: *needs mopping* = needs to be mopped.',
        },
        {
          id: 'm4l2-d2',
          type: 'transform',
          source: 'The fence needs to be painted.',
          keyword: 'needs',
          before: 'The fence',
          after: 'before winter.',
          accepted: ['needs painting'],
          explanation:
            '*needs to be painted* = **needs painting** — the gerund version is more natural.',
        },
        {
          id: 'm4l2-d3',
          type: 'mcq',
          question: "There's no point ___ — the decision has already been made.",
          options: ['complaining', 'to complain', 'complain'],
          correct: 0,
          explanation:
            "**There's no point (in) + -ing**: *no point complaining*.",
        },
        {
          id: 'm4l2-d4',
          type: 'gap',
          before: 'Is the new exhibition really worth',
          after: '? (see)',
          hint: 'see',
          accepted: ['seeing'],
          explanation: '**worth + -ing**: *worth seeing*.',
        },
        {
          id: 'm4l2-d5',
          type: 'error-hunt',
          sentence: "It's no use to argue with the referee about it.",
          wrongIndex: 3,
          correction: 'arguing',
          explanation:
            "**It's no use + -ing**: *no use arguing*, never *no use to argue*.",
        },
        {
          id: 'm4l2-d6',
          type: 'match',
          prompt: 'Complete each idiom with its ending.',
          pairs: [
            ["It's no good shouting —", 'he has his headphones on.'],
            ["There's no point booking now —", 'the tickets are sold out.'],
            ['The old castle is well worth', 'visiting at sunset.'],
            ['I had real difficulty', 'understanding her accent.'],
          ],
          explanation:
            'All four patterns — *no good*, *no point*, *worth*, *have difficulty* — take the **-ing** form.',
        },
        {
          id: 'm4l2-d7',
          type: 'mcq',
          question: 'My hair badly needs ___ — I look like a startled hedgehog.',
          options: ['cutting', 'to cut', 'cut'],
          correct: 0,
          explanation:
            '**needs cutting** = needs to be cut. (The hedgehog agrees.)',
        },
        {
          id: 'm4l2-d8',
          type: 'transform',
          source: "Crying about the result won't help.",
          keyword: 'use',
          before: "It's no",
          after: 'about the result.',
          accepted: ['use crying'],
          explanation: "**It's no use + -ing**: *no use crying*.",
        },
        {
          id: 'm4l2-d9',
          type: 'order',
          correct: 'There is no point in arguing with a parking meter',
          explanation:
            '**There is no point in + -ing** — the -ing form follows the preposition *in*.',
        },
        {
          id: 'm4l2-d10',
          type: 'gap',
          before: 'We had trouble',
          after: 'a taxi after the concert. (find)',
          hint: 'find',
          accepted: ['finding'],
          explanation:
            '**have trouble/difficulty (in) + -ing**: *trouble finding*.',
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm4l2-e1',
          type: 'speed',
          secondsPerItem: 8,
          explanation: 'Advanced patterns at full speed!',
          items: [
            {
              question: 'He seems ___ the email. (earlier)',
              options: ['to have deleted', 'to delete'],
              correct: 0,
            },
            {
              question: 'She hates ___ waiting.',
              options: ['being kept', 'keeping'],
              correct: 0,
            },
            {
              question: 'We were made ___ the whole song again.',
              options: ['to sing', 'sing'],
              correct: 0,
            },
            {
              question: 'The car needs ___ .',
              options: ['servicing', 'to service'],
              correct: 0,
            },
            {
              question: "It's not worth ___ about it.",
              options: ['worrying', 'to worry'],
              correct: 0,
            },
            {
              question: 'He denied ___ the window.',
              options: ['having broken', 'to have broken'],
              correct: 0,
            },
            {
              question: 'She hopes ___ for the lead role.',
              options: ['to be picked', 'picking'],
              correct: 0,
            },
            {
              question: "There's no point ___ now.",
              options: ['leaving', 'to leave'],
              correct: 0,
            },
            {
              question: 'They were allowed ___ early.',
              options: ['to go', 'go'],
              correct: 0,
            },
            {
              question: 'I apologise for ___ so late. (last night)',
              options: ['having called', 'to have called'],
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
        id: 'm4l2-boss1',
        type: 'gap',
        before: 'The suspect claims',
        after: 'at home all evening. (be — perfect infinitive)',
        hint: 'be',
        accepted: ['to have been'],
        explanation:
          'Claim now, being at home earlier → **claims to have been**.',
      },
      {
        id: 'm4l2-boss2',
        type: 'mcq',
        question: 'Nobody enjoys ___ a fool of in public.',
        options: ['being made', 'making', 'to be made'],
        correct: 0,
        explanation:
          '*enjoy* → gerund; you receive the action → passive gerund **being made**.',
      },
      {
        id: 'm4l2-boss3',
        type: 'transform',
        source: 'They made him apologise in front of everyone.',
        keyword: 'was',
        before: 'He',
        after: 'in front of everyone.',
        accepted: ['was made to apologise', 'was made to apologize'],
        explanation:
          'Passive of *make* → the *to* returns: **was made to apologise**.',
      },
      {
        id: 'm4l2-boss4',
        type: 'error-hunt',
        sentence: 'These windows really need clean before the guests arrive.',
        wrongIndex: 4,
        correction: 'cleaning',
        explanation:
          'Either *need cleaning* or *need to be cleaned* — never *need clean*.',
      },
      {
        id: 'm4l2-boss5',
        type: 'gap',
        before: 'She was thrilled',
        after: 'to speak at the conference. (invite — passive, past)',
        hint: 'invite',
        accepted: ['to have been invited'],
        explanation:
          'Perfect passive infinitive: **to have been invited** — earlier action, received.',
      },
      {
        id: 'm4l2-boss6',
        type: 'mcq',
        question: "It's no good ___ him now — his phone is off.",
        options: ['calling', 'to call', 'call'],
        correct: 0,
        explanation: "**It's no good + -ing**: *no good calling*.",
      },
      {
        id: 'm4l2-boss7',
        type: 'order',
        correct: 'He admitted having copied the answers from a friend',
        explanation:
          'Perfect gerund after *admit*: **having copied** — the copying came first.',
      },
      {
        id: 'm4l2-boss8',
        type: 'transform',
        source: 'Waiting any longer is pointless.',
        keyword: 'point',
        before: 'There is no',
        after: 'any longer.',
        accepted: ['point in waiting', 'point waiting'],
        explanation:
          '**There is no point (in) + -ing**: *no point (in) waiting*.',
      },
      {
        id: 'm4l2-boss9',
        type: 'mcq',
        question: 'The missing hiker is believed ___ the storm in a cave.',
        options: ['to have survived', 'to survive', 'surviving'],
        correct: 0,
        explanation:
          'Surviving happened earlier → perfect infinitive **to have survived**.',
      },
      {
        id: 'm4l2-boss10',
        type: 'gap',
        before: 'The kids were not allowed',
        after: 'in the deep end. (swim)',
        hint: 'swim',
        accepted: ['to swim'],
        explanation:
          'Passive of *let* does not exist → **were not allowed TO swim**.',
      },
      {
        id: 'm4l2-boss11',
        type: 'sort',
        prompt: 'Which form completes each idea — active or passive?',
        buckets: ['active form', 'passive form'],
        items: [
          { text: 'She hopes (to promote / to be promoted) soon → ?', bucket: 1 },
          { text: 'He seems (to have taken / to have been taken) my pen → ?', bucket: 0 },
          { text: 'The dog loves (stroking / being stroked) → ?', bucket: 1 },
          { text: 'They decided (to sell / to be sold) the house → ?', bucket: 0 },
          { text: 'I remember (locking / being locked) the door myself → ?', bucket: 0 },
          { text: 'Nobody likes (ignoring / being ignored) → ?', bucket: 1 },
        ],
        explanation:
          'Ask: does the subject DO the action (active) or RECEIVE it (passive)?',
      },
    ],
  },
};
