import type { Lesson } from '../../types';

export const lesson02: Lesson = {
  id: 'm1l2',
  title: 'The Past Family',
  subtitle: 'Narrative tenses, used to & would',
  minutes: 40,
  goals: [
    'Tell stories like a native: past simple vs continuous',
    'Master the flashback tenses: past perfect & past perfect continuous',
    'Talk about old habits with used to and would — correctly',
    'Spot the meaning change in "when the meeting started/had started"',
  ],
  cards: [
    {
      title: 'Past simple — beads on a string',
      body: `The **past simple** is the engine of every story. Each verb is one finished bead on the timeline, in order:

> She **grabbed** her keys, **slammed** the door and **sprinted** to the bus stop.

Its favourite companions are finished-time markers: \`yesterday\` \`last night\` \`in 2019\` \`two years ago\` \`when I was ten\`.

Questions and negatives use \`did\` + base verb:

> **Did** you **see** that? · I **didn't hear** anything.`,
      miniCheck: {
        id: 'm1l2-c1',
        type: 'mcq',
        question: 'The ceiling ___ on us during dinner last night!',
        options: ['fell', 'has fallen'],
        correct: 0,
        explanation: '`last night` = finished time, one completed event → past simple.',
      },
    },
    {
      title: 'Past continuous — setting the scene',
      body: `The **past continuous** (\`was/were + -ing\`) paints the background — actions *in progress* at a past moment.

**Interrupted action** — long action continuous, interruption simple:

> I **was having** a shower **when** the doorbell **rang**.

**Scene-setting** at the start of a story:

> The rain **was falling**, the wind **was howling**…

**Two parallel actions** with \`while\`:

> **While** Dad **was stirring** the pasta, Mum **was fixing** the wifi.

State verbs still refuse -ing: *I **knew** something was wrong* — not ~~was knowing~~.`,
      miniCheck: {
        id: 'm1l2-c2',
        type: 'mcq',
        question: 'I ___ my tea when the fire alarm went off.',
        options: ['was drinking', 'drank'],
        correct: 0,
        explanation: 'Longer action in progress (drinking tea) interrupted by a short event (alarm) → past continuous.',
      },
    },
    {
      title: 'Past perfect — the flashback',
      body: `The **past perfect** (\`had + past participle\`) jumps *one step further back* from a past moment. It's the story's flashback button.

> When I opened the fridge, I realised someone **had eaten** my leftovers.

The eating happened *before* the opening. Compare the two timelines:

> When Nora arrived, the meeting **started**. → her arrival kicked it off 🟢
> When Nora arrived, the meeting **had started**. → she was late 🔴

Common triggers: \`by the time\` \`already\` \`just\` \`never…before\` \`realised / discovered / remembered\``,
      tip: "If the order of events is already obvious (e.g. with `after` or `before`), the past simple is often fine too: *After she finished / had finished, she left.*",
      miniCheck: {
        id: 'm1l2-c3',
        type: 'mcq',
        question: 'By the time we reached the stadium, the concert ___.',
        options: ['had started', 'started'],
        correct: 0,
        explanation: '`By the time` signals an earlier event → past perfect: the music was already playing.',
      },
    },
    {
      title: 'Past perfect continuous — the long build-up',
      body: `The **past perfect continuous** (\`had been + -ing\`) shows a long activity running *up to* a past moment. It answers *how long?* and explains *evidence* in the past.

> They **had been driving** for six hours before they finally saw the sea.

> Her eyes were red — she **had been crying**.

It's the past-shifted twin of the present perfect continuous:

- *I'**ve been waiting** for an hour* (up to now)
- *I **had been waiting** for an hour when the bus finally came* (up to then)`,
      miniCheck: {
        id: 'm1l2-c4',
        type: 'mcq',
        question: 'He was out of breath because he ___.',
        options: ['had been running', 'was running'],
        correct: 0,
        explanation: 'The running happened *before* that moment and explains the evidence (out of breath) → past perfect continuous.',
      },
    },
    {
      title: 'used to — the life you left behind',
      body: `\`used to + verb\` describes **past habits and states that are no longer true**:

> I **used to be** terrified of thunder. (a state — I'm not any more)
> We **used to go** camping every August. (a habit — we stopped)

Negatives and questions drop the *-d* (because \`did\` carries the past):

> I **didn't use to like** coffee. · **Did** you **use to have** pink hair?

⚠️ One-off past events don't take *used to*:

> Yesterday I **visited** my old school. — not ~~used to visit~~`,
      miniCheck: {
        id: 'm1l2-c5',
        type: 'error-hunt',
        sentence: 'I use to walk to school through the orchard.',
        wrongIndex: 1,
        correction: 'used',
        explanation: 'In positive sentences it\'s **used to** — the bare *use to* only appears after *did/didn\'t*.',
      },
    },
    {
      title: 'would — nostalgia mode',
      body: `For **repeated past actions**, \`would\` adds a warm, storytelling glow:

> Every Sunday, Grandpa **would make** us pancakes shaped like animals.

But here's the trap: **would only works for actions**. For past *states* (be, have, like, live, believe…), you must use \`used to\`:

> I **used to have** a motorbike. — not ~~I would have a motorbike.~~
> She **used to believe** in ghosts. — not ~~would believe~~

Rule of thumb: if you could *watch it happen repeatedly on video*, \`would\` is fine.`,
      miniCheck: {
        id: 'm1l2-c6',
        type: 'mcq',
        question: 'We ___ a tiny flat above a bakery back then.',
        options: ['used to have', 'would have'],
        correct: 0,
        explanation: 'Having a flat is a *state* (possession) → `used to` only. `would have` would even sound like a conditional!',
      },
    },
    {
      title: 'Narrative glue',
      body: `The connectors that hold a story together:

- \`while / as\` + past continuous: *While I **was jogging**, I found a wallet.*
- \`when\` + past simple: *…**when** the doorbell **rang**.*
- \`by the time\` + past perfect: *By the time help arrived, we **had eaten** all the emergency chocolate.*
- \`as soon as\`: *As soon as he saw the bill, he fainted.*
- \`no sooner… than\` (a C1 gem for later): *No sooner had we sat down than the baby woke up.*`,
    },
    {
      title: 'The Past Family — the map',
      body: `Your storytelling toolkit, on one verb:

- **Past simple** — the events: *I **wrote** the report on Friday.*
- **Past continuous** — the scene: *I **was writing** it when the laptop died.*
- **Past perfect** — the flashback: *I **had written** most of it before the crash.*
- **Past perfect continuous** — the build-up: *I **had been writing** for hours by then.*
- **used to / would** — the old days: *I **used to write** everything by hand.*

Five tools, one timeline. Let's put them to work. 💪`,
    },
  ],
  sets: [
    {
      title: 'Scene of the Crime',
      icon: '🔦',
      exercises: [
        {
          id: 'm1l2-a1',
          type: 'mcq',
          question: 'What ___ at 11 p.m. last night? Your light was still on.',
          options: ['were you doing', 'did you do'],
          correct: 0,
          explanation: 'We\'re asking about an action *in progress* at a specific past moment → past continuous.',
        },
        {
          id: 'm1l2-a2',
          type: 'mcq',
          question: 'She ___ the window, grabbed her coat and ran out.',
          options: ['opened', 'was opening'],
          correct: 0,
          explanation: 'A chain of completed events in sequence → past simple beads on the string.',
        },
        {
          id: 'm1l2-a3',
          type: 'gap',
          before: 'While I',
          after: 'in the park, I found a wallet full of cash.',
          hint: 'jog',
          accepted: ['was jogging'],
          explanation: '`While` + action in progress → past continuous: **was jogging**.',
        },
        {
          id: 'm1l2-a4',
          type: 'order',
          correct: 'The sun was setting when we reached the summit.',
          distractors: ['sets', 'reach'],
          explanation: 'Background scene (was setting) + main event (reached).',
        },
        {
          id: 'm1l2-a5',
          type: 'error-hunt',
          sentence: 'We was watching the match when the power cut out.',
          wrongIndex: 1,
          correction: 'were',
          explanation: '`we` needs **were** — was is only for I/he/she/it.',
        },
        {
          id: 'm1l2-a6',
          type: 'mcq',
          question: 'Aunt Vera ___ us every summer when I was small.',
          options: ['visited', 'was visiting'],
          correct: 0,
          explanation: 'A repeated past habit (`every summer`) → past simple (or *would visit* — but not continuous).',
        },
        {
          id: 'm1l2-a7',
          type: 'mcq',
          question: 'While Dad ___ the pasta, Mum was fixing the wifi.',
          options: ['was stirring', 'stirred'],
          correct: 0,
          explanation: 'Two parallel scenes with `while` → both in past continuous.',
        },
        {
          id: 'm1l2-a8',
          type: 'sort',
          prompt: 'Which job does each verb form do in a story?',
          buckets: ['Background scene 🎬', 'Main event 🎯'],
          items: [
            { text: 'was raining', bucket: 0 },
            { text: 'arrived', bucket: 1 },
            { text: 'were dancing', bucket: 0 },
            { text: 'dropped', bucket: 1 },
            { text: 'was wearing', bucket: 0 },
            { text: 'exploded', bucket: 1 },
          ],
          explanation: 'Past continuous paints the scenery; past simple fires the plot points.',
        },
        {
          id: 'm1l2-a9',
          type: 'mcq',
          question: 'I ___ something was wrong the moment I walked in.',
          options: ['knew', 'was knowing'],
          correct: 0,
          explanation: '`know` is a state verb — no continuous, even mid-story.',
        },
      ],
    },
    {
      title: 'The Flashback',
      icon: '⏮️',
      exercises: [
        {
          id: 'm1l2-b1',
          type: 'mcq',
          question: 'I recognised him at once, because we ___ before.',
          options: ['had met', 'have met'],
          correct: 0,
          explanation: 'A step further back from a past moment (recognising) → past perfect. Present perfect can\'t live inside a past story.',
        },
        {
          id: 'm1l2-b2',
          type: 'gap',
          before: 'When I opened the fridge, I realised someone',
          after: 'my leftovers.',
          hint: 'eat',
          accepted: ['had eaten'],
          explanation: 'The eating happened *before* the opening → past perfect: **had eaten**.',
        },
        {
          id: 'm1l2-b3',
          type: 'mcq',
          question: 'When Nora arrived, the meeting ___ — she caught only the last half.',
          options: ['had started', 'started'],
          correct: 0,
          explanation: 'She was late: the start happened *before* her arrival → past perfect.',
        },
        {
          id: 'm1l2-b4',
          type: 'mcq',
          question: 'When Nora arrived, the meeting ___ — perfect timing!',
          options: ['started', 'had started'],
          correct: 0,
          explanation: 'Her arrival triggered the start: normal sequence → past simple. One tense, totally different story!',
        },
        {
          id: 'm1l2-b5',
          type: 'gap',
          before: 'They',
          after: 'for six hours before they finally saw the sea.',
          hint: 'drive',
          accepted: ['had been driving'],
          explanation: 'A long activity running up to a past moment → past perfect continuous.',
        },
        {
          id: 'm1l2-b6',
          type: 'mcq',
          question: 'The kitchen was a bomb site — clearly, the kids ___.',
          options: ['had been baking', 'were baking'],
          correct: 0,
          explanation: 'Past evidence of an earlier activity → past perfect continuous.',
        },
        {
          id: 'm1l2-b7',
          type: 'order',
          correct: 'She had never flown before that day.',
          distractors: ['has', 'flew'],
          explanation: '`never … before` + a past reference point → past perfect: **had never flown**.',
        },
        {
          id: 'm1l2-b8',
          type: 'error-hunt',
          sentence: 'After she had ate the oysters, she felt strange.',
          wrongIndex: 3,
          correction: 'eaten',
          explanation: '`had` + **past participle**: had *eaten*. (ate is the past simple form.)',
        },
        {
          id: 'm1l2-b9',
          type: 'transform',
          source: 'First the film started. Then we found our seats.',
          keyword: 'already',
          accepted: [
            'The film had already started when we found our seats',
            'When we found our seats the film had already started',
            'When we found our seats, the film had already started',
          ],
          explanation: 'Earlier event → past perfect with `already`: **The film had already started when we found our seats.**',
        },
        {
          id: 'm1l2-b10',
          type: 'mcq',
          question: 'By the time the pizza arrived, I ___ asleep.',
          options: ['had fallen', 'fell'],
          correct: 0,
          explanation: '`By the time` + earlier event → past perfect.',
        },
      ],
    },
    {
      title: 'Golden Days',
      icon: '📻',
      exercises: [
        {
          id: 'm1l2-d1',
          type: 'mcq',
          question: 'I ___ terrified of thunder, but I love storms now.',
          options: ['used to be', 'would be'],
          correct: 0,
          explanation: 'Being terrified is a *state* → `used to` only. `would` is reserved for repeated actions.',
        },
        {
          id: 'm1l2-d2',
          type: 'mcq',
          question: 'Every Sunday, Grandpa ___ us pancakes shaped like animals.',
          options: ['would make', 'would making'],
          correct: 0,
          explanation: 'A repeated, watchable action → `would` + base verb. Peak nostalgia.',
        },
        {
          id: 'm1l2-d3',
          type: 'gap',
          before: 'She',
          after: 'coffee, but now she runs a café.',
          hint: 'not / use to / like',
          accepted: ["didn't use to like", "didn't used to like"],
          explanation: "Standard form: **didn't use to like** — after *did*, the -d disappears.",
        },
        {
          id: 'm1l2-d4',
          type: 'mcq',
          question: 'Did you ___ your hair pink at uni?',
          options: ['use to dye', 'used to dye'],
          correct: 0,
          explanation: 'After `did`, use the bare form: **Did you use to…?**',
        },
        {
          id: 'm1l2-d5',
          type: 'sort',
          prompt: 'Which of these past habits can ALSO take would?',
          buckets: ['used to ✓ and would ✓', 'used to ✓ only'],
          items: [
            { text: 'play outside', bucket: 0 },
            { text: 'own a motorbike', bucket: 1 },
            { text: 'go fishing', bucket: 0 },
            { text: 'believe in ghosts', bucket: 1 },
            { text: 'visit our gran', bucket: 0 },
            { text: 'have long hair', bucket: 1 },
          ],
          explanation: '`would` works for repeated *actions* (play, go, visit). States — owning, believing, having — take `used to` only.',
        },
        {
          id: 'm1l2-d6',
          type: 'mcq',
          question: "Yesterday I ___ my old school — it's a supermarket now.",
          options: ['visited', 'used to visit'],
          correct: 0,
          explanation: 'A single, one-off past event → past simple. `used to` needs a repeated habit or long-term state.',
        },
        {
          id: 'm1l2-d7',
          type: 'error-hunt',
          sentence: 'My uncle would own three record shops in Manchester.',
          wrongIndex: 2,
          correction: 'used to',
          explanation: 'Owning is a state → **used to own**. `would` + state verb sounds like a conditional gone wrong.',
        },
        {
          id: 'm1l2-d8',
          type: 'transform',
          source: 'Living in the countryside was normal for me then, but not any more.',
          keyword: 'used',
          accepted: ['I used to live in the countryside'],
          explanation: 'Past state no longer true → **I used to live in the countryside.**',
        },
        {
          id: 'm1l2-d9',
          type: 'mcq',
          question: 'On rainy days we ___ board games for hours.',
          options: ['would play', 'would be play'],
          correct: 0,
          explanation: '`would` + base verb: **would play**. A repeated action, perfect for nostalgia mode.',
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm1l2-e1',
          type: 'speed',
          secondsPerItem: 8,
          items: [
            { question: 'I ___ TV when you called.', options: ['was watching', 'watched'], correct: 0 },
            { question: 'She ___ off her bike and broke her wrist.', options: ['fell', 'was falling'], correct: 0 },
            { question: 'The train ___ by the time we reached the platform.', options: ['had left', 'left'], correct: 0 },
            { question: 'He ___ smoke, but he quit.', options: ['used to', 'would'], correct: 0 },
            { question: 'Granny ___ tell us ghost stories.', options: ['would', 'will'], correct: 0 },
            { question: "I couldn't get in because I ___ my keys.", options: ['had forgotten', 'was forgetting'], correct: 0 },
            { question: 'While we ___, it started to rain.', options: ['were hiking', 'hiked'], correct: 0 },
            { question: 'She was sweaty because she ___.', options: ['had been dancing', 'danced'], correct: 0 },
            { question: 'Did you ___ like spinach?', options: ['use to', 'used to'], correct: 0 },
            { question: 'As soon as he saw the bill, he ___.', options: ['fainted', 'was fainting'], correct: 0 },
          ],
          explanation: 'Instinct check: simple = plot points · continuous = scenery · perfect = flashbacks · used to = the old days.',
        },
      ],
    },
  ],
  boss: {
    passPct: 80,
    exercises: [
      {
        id: 'm1l2-boss1',
        type: 'mcq',
        question: 'I ___ along the river when I spotted the otter.',
        options: ['was cycling', 'cycled'],
        correct: 0,
        explanation: 'Action in progress interrupted by a sudden event → past continuous.',
      },
      {
        id: 'm1l2-boss2',
        type: 'mcq',
        question: 'She picked up the phone, ___ the number and waited.',
        options: ['dialled', 'was dialling'],
        correct: 0,
        explanation: 'A sequence of completed actions → past simple.',
      },
      {
        id: 'm1l2-boss3',
        type: 'gap',
        before: 'By midnight, everyone',
        after: 'home.',
        hint: 'go',
        accepted: ['had gone'],
        explanation: '`By midnight` = earlier than that past point → past perfect.',
      },
      {
        id: 'm1l2-boss4',
        type: 'mcq',
        question: 'He was covered in paint because he ___ the fence all afternoon.',
        options: ['had been painting', 'painted'],
        correct: 0,
        explanation: 'Long activity before a past moment + visible evidence → past perfect continuous.',
      },
      {
        id: 'm1l2-boss5',
        type: 'error-hunt',
        sentence: 'They was living in Rome when their son was born.',
        wrongIndex: 1,
        correction: 'were',
        explanation: '`they` takes **were**.',
      },
      {
        id: 'm1l2-boss6',
        type: 'mcq',
        question: 'My mum ___ hair down to her waist when she was young.',
        options: ['used to have', 'would have'],
        correct: 0,
        explanation: 'Having hair = a state → `used to` only.',
      },
      {
        id: 'm1l2-boss7',
        type: 'mcq',
        question: 'On Fridays we ___ to the lake and swim until dark.',
        options: ['would walk', 'were walking', 'had walked'],
        correct: 0,
        explanation: 'A repeated, fondly-remembered action → `would walk`.',
      },
      {
        id: 'm1l2-boss8',
        type: 'gap',
        before: 'When we arrived, the party',
        after: '— the music was off and the lights were out.',
        hint: 'already / finish',
        accepted: ['had already finished', 'had finished'],
        explanation: 'The finishing happened before the arriving → past perfect.',
      },
      {
        id: 'm1l2-boss9',
        type: 'order',
        correct: 'He had been working there for years.',
        distractors: ['has', 'since'],
        explanation: '`had been + -ing` + `for` + length of time.',
      },
      {
        id: 'm1l2-boss10',
        type: 'mcq',
        question: 'I ___ to a podcast while I was ironing.',
        options: ['was listening', 'listened'],
        correct: 0,
        explanation: 'Two parallel activities with `while` → past continuous for both.',
      },
      {
        id: 'm1l2-boss11',
        type: 'transform',
        source: 'Pizza on Saturdays was our family tradition when I was a kid.',
        keyword: 'would',
        accepted: [
          'We would eat pizza on Saturdays',
          'We would have pizza on Saturdays',
          'On Saturdays we would eat pizza',
          'On Saturdays we would have pizza',
        ],
        explanation: 'Repeated past action, nostalgia mode → **We would eat/have pizza on Saturdays.**',
      },
    ],
  },
};
