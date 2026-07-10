import type { Lesson } from '../../types';

export const m6l3: Lesson = {
  id: 'm6l3',
  title: 'Contrast & Purpose',
  subtitle: 'although, despite, so as to, whatever',
  minutes: 40,
  goals: [
    'Choose correctly between although + clause and despite + noun/-ing',
    'Deploy stylish contrast: much as, adjective + as/though',
    'Express purpose: to, in order to, so as not to, so that',
    'Master the -ever family: whatever, whenever, however',
  ],
  cards: [
    {
      title: 'although vs despite — the eternal duel',
      body: `Both mean contrast; they just take different food:

**although / even though / though + clause** (subject + verb):

> **Although it was raining**, we walked.

**despite / in spite of + noun or -ing** (no clause!):

> **Despite the rain**, we walked. · **In spite of being** tired, she smiled.

Need a clause after *despite*? Add **the fact that**:

> Despite **the fact that** it was raining,…`,
      miniCheck: {
        id: 'm6l3-c1',
        type: 'mcq',
        question: '___ the terrible reviews, the film made millions.',
        options: ['Despite', 'Although', 'Even though'],
        correct: 0,
        explanation:
          '*the terrible reviews* is a noun phrase → **Despite** (although/even though need a clause).',
      },
    },
    {
      title: 'The contrast wardrobe',
      body: `More ways to dress a contrast:

- **However, / Nevertheless,** — sentence adverbs, comma after: *It was late. **However**, we kept going.*
- **whereas / while** — balanced contrast: *She loves jazz, **whereas** he prefers silence.*
- **even though** = strong *although* · **even if** = it wouldn't matter anyway
- **yet** — small word, elegant: *simple **yet** brilliant*

> He practised daily, **yet** never improved. (harsh but grammatical)`,
      miniCheck: {
        id: 'm6l3-c2',
        type: 'mcq',
        question: 'My flat is tiny, ___ my rent is enormous.',
        options: ['whereas', 'despite', 'in spite of'],
        correct: 0,
        explanation:
          'Two balanced clauses in contrast → **whereas**. (*despite/in spite of* cannot take a clause.)',
      },
    },
    {
      title: 'Advanced contrast: much as, cold though it was',
      body: `C1 party tricks — inverted concessions:

**adjective/adverb + as/though + subject + verb**:

> **Tired as she was**, she finished the shift. (= although she was very tired)
> **Strange though it sounds**, I miss my commute.

**much as** = although … very much:

> **Much as I admire** him, I cannot agree.

**try as + subject + might/may**:

> **Try as he might**, he could not open the jar.`,
      miniCheck: {
        id: 'm6l3-c3',
        type: 'gap',
        before: '',
        after: 'as I love your cooking, I cannot eat a fifth helping. (= although I really love it)',
        hint: 'one word',
        accepted: ['much'],
        explanation:
          '**Much as I love…** = although I love it very much.',
      },
    },
    {
      title: 'Purpose: to, in order to, so as to',
      body: `Why did you do it? Three ascending levels of formality:

> I left early **to catch** the train.
> I left early **in order to catch** the train.
> I left early **so as to catch** the train.

The negative is where learners slip — you **cannot** say ~~to not catch~~ in formal style:

> She tiptoed **so as not to wake** the baby.
> He said nothing **in order not to cause** panic.`,
      miniCheck: {
        id: 'm6l3-c4',
        type: 'gap',
        before: 'We whispered so as',
        after: 'the librarian. (annoy — negative!)',
        hint: 'not / annoy',
        accepted: ['not to annoy'],
        explanation:
          'Negative purpose: **so as NOT TO annoy** — the *not* comes before *to*.',
      },
    },
    {
      title: 'so that + clause',
      body: `When the purpose has its **own subject** — or needs a modal — use **so that**:

> I spoke slowly **so that everyone could follow**.
> Leave a key **so that the plumber can get in**.
> She saved hard **so that her kids wouldn't struggle**.

Typical partners: **can/could/will/would**.

💡 Don't confuse with *so … that* (result): *It was SO cold THAT the lake froze.*`,
      miniCheck: {
        id: 'm6l3-c5',
        type: 'mcq',
        question: 'Turn the screen ___ I can see it too.',
        options: ['so that', 'in order to', 'so as to'],
        correct: 0,
        explanation:
          'New subject (*I*) in the purpose → **so that** + clause.',
      },
    },
    {
      title: 'The -ever family',
      body: `**whatever, whoever, whenever, wherever, however, whichever** = "it doesn't matter what/who/when…":

> **Whatever you decide**, I'll support you.
> **Whoever wins**, the party is at ours.
> Sit **wherever you like**. · Call me **whenever you need**.

⚠️ **however + adjective/adverb** = no matter how:

> **However hard** he tried, the door stayed shut.
> **However rich** you are, queues still exist.`,
      tip: 'In posh writing you may meet "no matter how/what/who" — same meaning, same pattern: No matter how hard he tried…',
      miniCheck: {
        id: 'm6l3-c6',
        type: 'mcq',
        question: '___ expensive it is, she always flies business class.',
        options: ['However', 'Whatever', 'Whenever'],
        correct: 0,
        explanation:
          '**However + adjective** = no matter how expensive.',
      },
    },
  ],
  sets: [
    {
      title: 'The Duelling Ground',
      icon: '🤺',
      exercises: [
        {
          id: 'm6l3-a1',
          type: 'mcq',
          question: '___ having no formal training, she paints like a master.',
          options: ['Despite', 'Although', 'Whereas'],
          correct: 0,
          explanation:
            '*having* is an -ing form → **Despite having** (although would need *she has*).',
        },
        {
          id: 'm6l3-a2',
          type: 'gap',
          before: '',
          after: 'the tickets were free, hardly anyone came. (clause follows!)',
          hint: 'one word',
          accepted: ['although', 'though'],
          explanation:
            'A full clause follows → **Although/Though** the tickets were free.',
        },
        {
          id: 'm6l3-a3',
          type: 'error-hunt',
          sentence: 'Despite she apologised twice, he refused to forgive her.',
          wrongIndex: 0,
          correction: 'Although',
          explanation:
            '*Despite* cannot take a clause → **Although she apologised** (or *Despite her apologising*).',
        },
        {
          id: 'm6l3-a4',
          type: 'transform',
          source: 'Although he was injured, he finished the race.',
          keyword: 'despite',
          before: 'He finished the race',
          after: 'injured.',
          accepted: ['despite being', 'in spite of being'],
          explanation:
            'Clause → -ing after *despite*: **despite being injured**.',
        },
        {
          id: 'm6l3-a5',
          type: 'sort',
          prompt: 'What can follow each connector?',
          buckets: ['+ clause', '+ noun / -ing'],
          items: [
            { text: 'although', bucket: 0 },
            { text: 'despite', bucket: 1 },
            { text: 'even though', bucket: 0 },
            { text: 'in spite of', bucket: 1 },
            { text: 'whereas', bucket: 0 },
            { text: 'despite the fact that… wait, this one takes a clause!', bucket: 0 },
          ],
          explanation:
            'although/even though/whereas + clause · despite/in spite of + noun or -ing · *despite the fact that* smuggles a clause back in.',
        },
        {
          id: 'm6l3-a6',
          type: 'mcq',
          question: 'The north is wet and green, ___ the south is dry and golden.',
          options: ['whereas', 'despite', 'so that'],
          correct: 0,
          explanation:
            'Balanced two-sided contrast → **whereas**.',
        },
        {
          id: 'm6l3-a7',
          type: 'transform',
          source: 'It was snowing heavily. We still set off. (one sentence, use "even")',
          keyword: 'even',
          before: 'We set off',
          after: 'it was snowing heavily.',
          accepted: ['even though', 'even although'],
          explanation:
            'Strong contrast: **even though** it was snowing.',
        },
        {
          id: 'm6l3-a8',
          type: 'order',
          correct: 'In spite of the delay everyone stayed remarkably calm',
          explanation:
            '**In spite of + noun**: *In spite of the delay,…*',
        },
      ],
    },
    {
      title: 'Purpose HQ',
      icon: '🎯',
      exercises: [
        {
          id: 'm6l3-b1',
          type: 'gap',
          before: 'He wore a disguise so as',
          after: 'recognised. (be — negative purpose)',
          hint: 'not / be',
          accepted: ['not to be'],
          explanation:
            'Negative purpose: **so as not to be** recognised.',
        },
        {
          id: 'm6l3-b2',
          type: 'mcq',
          question: 'I wrote it down ___ I would not forget it.',
          options: ['so that', 'so as to', 'in order to'],
          correct: 0,
          explanation:
            'The purpose clause has its own subject-modal (*I would*) → **so that**.',
        },
        {
          id: 'm6l3-b3',
          type: 'error-hunt',
          sentence: 'She turned off her phone for to concentrate better.',
          wrongIndex: 5,
          correction: 'to',
          explanation:
            'Purpose = plain **to** (or *in order to*) — never *for to*.',
        },
        {
          id: 'm6l3-b4',
          type: 'transform',
          source: "Speak clearly. Then the interpreter can follow you.",
          keyword: 'that',
          before: 'Speak clearly so',
          after: 'the interpreter can follow you.',
          accepted: ['that'],
          explanation:
            'Own subject in purpose clause → **so that** the interpreter can follow.',
        },
        {
          id: 'm6l3-b5',
          type: 'mcq',
          question: 'They moved to the coast ___ nearer to their grandchildren.',
          options: ['in order to be', 'so that be', 'for being'],
          correct: 0,
          explanation:
            'Same subject, formal purpose → **in order to be**.',
        },
        {
          id: 'm6l3-b6',
          type: 'order',
          correct: 'She studies at night so that her days stay free',
          explanation:
            '**so that** + clause with its own subject: *her days stay free*.',
        },
        {
          id: 'm6l3-b7',
          type: 'error-hunt',
          sentence: 'He locked the document in order to not lose it.',
          wrongIndex: 7,
          correction: 'not to lose',
          explanation:
            'Formal negative purpose: **in order NOT TO lose** — *not* precedes *to*.',
        },
        {
          id: 'm6l3-b8',
          type: 'sort',
          prompt: 'Purpose or result?',
          buckets: ['purpose (so that…)', 'result (so…that…)'],
          items: [
            { text: 'I hid the cake so that nobody would find it.', bucket: 0 },
            { text: 'The cake was so good that nobody spoke.', bucket: 1 },
            { text: 'He trained daily so that he could qualify.', bucket: 0 },
            { text: 'It was so cold that the pipes burst.', bucket: 1 },
            { text: 'Save now so that you can travel later.', bucket: 0 },
            { text: 'She was so tired that she slept twelve hours.', bucket: 1 },
          ],
          explanation:
            '**so that** + intention = purpose · **so + adj + that** = result/consequence.',
        },
      ],
    },
    {
      title: 'The -ever Arena',
      icon: '🌪️',
      exercises: [
        {
          id: 'm6l3-d1',
          type: 'mcq',
          question: '___ happens tomorrow, we gave it everything.',
          options: ['Whatever', 'However', 'Wherever'],
          correct: 0,
          explanation:
            '"No matter what happens" → **Whatever** happens.',
        },
        {
          id: 'm6l3-d2',
          type: 'gap',
          before: '',
          after: 'told you that, they were wrong. (no matter who)',
          hint: 'one word',
          accepted: ['whoever'],
          explanation:
            'No matter who → **Whoever** told you that.',
        },
        {
          id: 'm6l3-d3',
          type: 'mcq',
          question: '___ carefully I pack, I always forget socks.',
          options: ['However', 'Whatever', 'Whichever'],
          correct: 0,
          explanation:
            '**However + adverb** = no matter how carefully.',
        },
        {
          id: 'm6l3-d4',
          type: 'match',
          prompt: 'Match the -ever word to its meaning.',
          pairs: [
            ['whatever', 'no matter what'],
            ['whenever', 'no matter when / any time'],
            ['wherever', 'no matter where'],
            ['whichever', 'no matter which (of a set)'],
          ],
          explanation:
            'The -ever family = "it makes no difference which one".',
        },
        {
          id: 'm6l3-d5',
          type: 'error-hunt',
          sentence: 'Whatever hard she studied, the formulas would not stick.',
          wrongIndex: 0,
          correction: 'However',
          explanation:
            'Before an adjective/adverb → **However hard**, not *whatever hard*.',
        },
        {
          id: 'm6l3-d6',
          type: 'gap',
          before: 'Take',
          after: 'route is quicker — I trust your judgement. (of the two)',
          hint: 'one word',
          accepted: ['whichever'],
          explanation:
            'Choice within a known set → **whichever** route.',
        },
        {
          id: 'm6l3-d7',
          type: 'order',
          correct: 'However tempting it looks do not press that button',
          explanation:
            '**However + adjective** + clause: *However tempting it looks,…*',
        },
        {
          id: 'm6l3-d8',
          type: 'transform',
          source: 'It does not matter where you hide — the cat will find you.',
          keyword: 'wherever',
          before: '',
          after: 'you hide, the cat will find you.',
          accepted: ['wherever'],
          explanation:
            'No matter where → **Wherever** you hide.',
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm6l3-e1',
          type: 'speed',
          secondsPerItem: 8,
          explanation: 'Contrast and purpose at full speed!',
          items: [
            {
              question: '___ the noise, the baby slept.',
              options: ['Despite', 'Although'],
              correct: 0,
            },
            {
              question: '___ it rained, we swam.',
              options: ['Although', 'Despite'],
              correct: 0,
            },
            {
              question: 'He saved money ___ buy a bike.',
              options: ['to', 'for'],
              correct: 0,
            },
            {
              question: 'Whisper so as ___ wake him.',
              options: ['not to', 'to not'],
              correct: 0,
            },
            {
              question: 'Shout ___ everyone can hear you.',
              options: ['so that', 'so as to'],
              correct: 0,
            },
            {
              question: '___ wins, we celebrate.',
              options: ['Whoever', 'However'],
              correct: 0,
            },
            {
              question: '___ hot it gets, he wears black.',
              options: ['However', 'Whatever'],
              correct: 0,
            },
            {
              question: 'Tiny ___ it is, the flat feels cosy.',
              options: ['though', 'despite'],
              correct: 0,
            },
            {
              question: 'In spite of ___ late, we got seats.',
              options: ['arriving', 'we arrived'],
              correct: 0,
            },
            {
              question: '___ as I try, I cannot like opera.',
              options: ['Much', 'More'],
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
        id: 'm6l3-boss1',
        type: 'transform',
        source: 'Although the pay was low, she loved the job.',
        keyword: 'despite',
        before: 'She loved the job',
        after: '.',
        accepted: ['despite the low pay', 'despite the pay being low'],
        explanation:
          'Clause → noun phrase: **despite the low pay**.',
      },
      {
        id: 'm6l3-boss2',
        type: 'mcq',
        question: '___ I respect your opinion, I must disagree this time.',
        options: ['Much as', 'Despite', 'However much that'],
        correct: 0,
        explanation:
          '**Much as I respect** = although I respect it very much.',
      },
      {
        id: 'm6l3-boss3',
        type: 'error-hunt',
        sentence: 'In spite the injury, he played the whole match.',
        wrongIndex: 1,
        correction: 'spite of',
        explanation:
          'The phrase is fixed: **in spite OF** + noun — the *of* is not optional.',
      },
      {
        id: 'm6l3-boss4',
        type: 'gap',
        before: 'She left at dawn so as',
        after: 'the traffic. (avoid)',
        hint: 'avoid',
        accepted: ['to avoid'],
        explanation: 'Purpose: **so as to avoid**.',
      },
      {
        id: 'm6l3-boss5',
        type: 'mcq',
        question: 'Write your name on the cup ___ nobody takes it by mistake.',
        options: ['so that', 'in order to', 'despite'],
        correct: 0,
        explanation:
          'Own subject in the purpose clause → **so that** nobody takes it.',
      },
      {
        id: 'm6l3-boss6',
        type: 'order',
        correct: 'Exhausted though they were the rescuers kept digging',
        explanation:
          'Inverted concession: **adjective + though + subject + verb**.',
      },
      {
        id: 'm6l3-boss7',
        type: 'gap',
        before: '',
        after: 'you choose, choose quickly — the offer ends today. (no matter which)',
        hint: 'one word',
        accepted: ['whichever', 'whatever'],
        explanation:
          'No matter which → **Whichever** you choose.',
      },
      {
        id: 'm6l3-boss8',
        type: 'error-hunt',
        sentence: 'He memorised the route in order to not get lost again.',
        wrongIndex: 7,
        correction: 'not to get',
        explanation:
          'Formal negative purpose: **in order not to get** lost.',
      },
      {
        id: 'm6l3-boss9',
        type: 'mcq',
        question: '___ hard the wind blew, the old lighthouse stood firm.',
        options: ['However', 'Whatever', 'Although'],
        correct: 0,
        explanation:
          '**However + adverb**: *However hard the wind blew…*',
      },
      {
        id: 'm6l3-boss10',
        type: 'transform',
        source: 'I turned down the music because I did not want to disturb the neighbours.',
        keyword: 'so',
        before: 'I turned down the music',
        after: 'disturb the neighbours.',
        accepted: ['so as not to', 'in order not to'],
        explanation:
          'Negative purpose: **so as not to disturb**.',
      },
      {
        id: 'm6l3-boss11',
        type: 'sort',
        prompt: 'Which connector fits the slot?',
        buckets: ['despite', 'although', 'so that'],
        items: [
          { text: '___ the price, we bought it.', bucket: 0 },
          { text: '___ it was pricey, we bought it.', bucket: 1 },
          { text: 'We insured it ___ we could relax.', bucket: 2 },
          { text: '___ feeling ill, she performed.', bucket: 0 },
          { text: '___ she felt ill, she performed.', bucket: 1 },
          { text: 'He labelled everything ___ the movers would know.', bucket: 2 },
        ],
        explanation:
          'despite + noun/-ing · although + clause · so that + purpose clause.',
      },
    ],
  },
};
