import type { Lesson } from '../../types';

export const m9l3: Lesson = {
  id: 'm9l3',
  title: 'Talking of Which…',
  subtitle: 'the conversational signposts natives actually use',
  minutes: 40,
  goals: [
    'Surf between topics with talking of, by the way & incidentally',
    'Drop truth bombs politely: actually, in fact, as a matter of fact',
    'Find the silver lining with at least — and argue with after all & besides',
    'Sum up like a native: on the whole, all in all, basically',
  ],
  cards: [
    {
      title: 'Signposts for speech',
      body: `In Module 6 you learnt the **essay linkers** — *moreover, consequently, nevertheless* — the ones that wear a tie. 👔

Down here in the valley, conversation runs on a different set: little adverbs that steer topics, soften claims and win arguments **in real time**:

> **Talking of** Harry, did he get the job?
> **At least** nobody was hurt.
> **After all**, we'll never find it cheaper.

They carry almost no dictionary meaning — their whole job is **navigation**. Learn them and your English stops sounding like a textbook and starts sounding like a person.`,
      miniCheck: {
        id: 'm9l3-c1',
        type: 'mcq',
        question: 'Conversational signposts mainly…',
        options: [
          'steer the conversation — topic, tone, direction',
          'add new factual information',
          'make speech more formal',
        ],
        correct: 0,
        explanation:
          'They are **navigation devices** — they tell the listener where the conversation is going.',
      },
    },
    {
      title: 'Topic surfing: talking of & by the way',
      body: `Two ways to change the subject — one smooth, one openly random:

**talking of / speaking of X** — picks up something **just mentioned** and rides it somewhere new:

> A: Hasn't Harry got that same shirt?
> B: Yes! **Talking of Harry**, did he get the job?

**by the way / incidentally** — introduces something you've **just thought of**, unconnected:

> So let's meet at five, then. **By the way**, could you possibly lend me some money?

*incidentally* does the same job in a smarter jacket — meetings, emails, radio interviews.`,
      tip: '"Talking of which…" works even when you can\'t be bothered to repeat the topic word. Maximum smoothness, minimum effort.',
      miniCheck: {
        id: 'm9l3-c2',
        type: 'mcq',
        question: "A: Nice photo of Rome! B: '___ Rome, did you book the flights?'",
        options: ['Talking of', 'By the way', 'At least'],
        correct: 0,
        explanation:
          'Rome was **just mentioned** — so you surf the link: **Talking of Rome…**',
      },
    },
    {
      title: 'Truth bombs: actually, in fact & friends',
      body: `To introduce **surprising or corrective** information, English stacks three levels of drumroll:

> A: Did you see the match last night?
> B: No. **Actually / In fact / As a matter of fact**, I don't really like football.

All three warn the listener: *what's coming may not be what you expect.*

- **actually** — light, everyday, often a polite correction
- **in fact** — a touch stronger; also upgrades a claim: *It's cold — **in fact**, it's freezing.*
- **as a matter of fact** — the full drumroll 🥁, slightly indignant if needed`,
      miniCheck: {
        id: 'm9l3-c3',
        type: 'gap',
        before: "Everyone assumes they're rich; in",
        after: ", they're drowning in debt. (one word)",
        hint: 'the middle level',
        accepted: ['fact'],
        explanation:
          '**in fact** introduces the surprising truth — and can sharpen a previous statement.',
      },
    },
    {
      title: 'Back to the point: anyway & in any case',
      body: `Conversations wander. These bring them home:

**as I was saying** — return after an interruption:

> **As I was saying**, if Mark gets the job, we'll have to reorganise the department.

**anyway** — closes a digression or the whole chat: "**Anyway**, where was I?"

**in any case** — signals *whatever the details, this still stands*:

> We didn't go away because I had too much work. **In any case**, the weather was awful, so we didn't miss much.

Stack them for full native effect: "**Anyway, as I was saying…**"`,
      miniCheck: {
        id: 'm9l3-c4',
        type: 'mcq',
        question: 'Your story was interrupted by a phone call. You restart with…',
        options: ['As I was saying,', 'Incidentally,', 'All in all,'],
        correct: 0,
        explanation:
          '**As I was saying** is the official "rewind to before the interruption" button.',
      },
    },
    {
      title: 'Damage control: at least',
      body: `*at least* has two lives, both about **limiting the damage**:

**1. The silver lining** — a positive point after bad news:

> Yes, it was a bad accident. **At least** nobody was killed, though.

**2. The qualifier** — softening your own claim so you can't be wrong:

> Tom's coming to the meeting — **or at least, he said he was**.

That second one is pure C2 social armour: you report, you hedge, you survive. 🛡️`,
      miniCheck: {
        id: 'm9l3-c5',
        type: 'mcq',
        question: "'He's a millionaire — or at least he acts like one.' Here *at least*…",
        options: [
          'qualifies the claim — the speaker stops guaranteeing it',
          'adds a positive point after bad news',
          'changes the topic',
        ],
        correct: 0,
        explanation:
          'The **qualifier** use: *or at least…* pulls the claim back to what you can actually vouch for.',
      },
    },
    {
      title: 'The arguers: after all & besides',
      body: `Two closers for winning a discussion:

**after all** — an argument the other person **may not have considered** (≠ "finally"!):

> I think we should buy them. **After all**, we'll never find them anywhere cheaper.

**besides** — piles on **one more reason**, often the knockout punch:

> I don't think I'll go to Nick's party. It'll finish very late. **Besides**, I won't know many people there.

⚠️ Classic trap: *after all* does **not** mean *in the end / finally*. It means *don't forget this*.`,
      miniCheck: {
        id: 'm9l3-c6',
        type: 'mcq',
        question: "You should say sorry. ___ , it was your idea.",
        options: ['After all', 'At least', 'By the way'],
        correct: 0,
        explanation:
          '**After all** = here\'s a fact you\'re forgetting — it was your idea.',
      },
    },
    {
      title: 'Summing up: on the whole, all in all, basically',
      body: `Three ways to land the plane 🛬:

- **on the whole** — generalising, allows exceptions: *He's still a great director but, **on the whole**, I prefer his earlier films.*
- **all in all** — everything considered: *I like both flats, but **all in all**, I prefer the one next to the cathedral.*
- **basically** — cuts to the fundamental point: "**Basically**, my job involves computer skills and people skills."

*basically* is beloved and overused in speech; in writing, reach for *in essence* or *fundamentally* instead.`,
      miniCheck: {
        id: 'm9l3-c7',
        type: 'mcq',
        question: 'Which one means "taking everything into consideration"?',
        options: ['all in all', 'by the way', 'as a matter of fact'],
        correct: 0,
        explanation:
          '**all in all** weighs everything up before the verdict.',
      },
    },
  ],
  sets: [
    {
      title: 'Topic Surfers',
      icon: '🏄',
      exercises: [
        {
          id: 'm9l3-a1',
          type: 'mcq',
          question: "A: Harry's got that exact shirt. B: '___ Harry, did he get the job?'",
          options: ['Talking of', 'After all', 'At least'],
          correct: 0,
          explanation:
            'Harry was just mentioned — **talking of** surfs the link to a new question.',
        },
        {
          id: 'm9l3-a2',
          type: 'mcq',
          question: "So let's meet at five o'clock then. ___, could you possibly lend me some money?",
          options: ['By the way', 'As I was saying', 'On the whole'],
          correct: 0,
          explanation:
            'A brand-new, unconnected thought → **by the way**.',
        },
        {
          id: 'm9l3-a3',
          type: 'mcq',
          question: '*by the way* vs *incidentally* — the real difference?',
          options: [
            'same job; incidentally is more formal',
            'incidentally introduces a contrast',
            'by the way is only used in writing',
          ],
          correct: 0,
          explanation:
            'Twins in different jackets: **incidentally** = *by the way* for meetings and emails.',
        },
        {
          id: 'm9l3-a4',
          type: 'gap',
          before: '',
          after: "I was saying — if Mark gets the job, we'll have to reorganise the department. (one word)",
          hint: 'rewind',
          accepted: ['as'],
          explanation:
            '**As I was saying** — the official return-from-interruption move.',
        },
        {
          id: 'm9l3-a5',
          type: 'mcq',
          question: "We didn't go away because I had too much work. ___, the weather was awful, so we didn't miss much.",
          options: ['In any case', 'Talking of which', 'Speaking of work'],
          correct: 0,
          explanation:
            '**In any case** = whatever the details, the conclusion stands — we missed nothing.',
        },
        {
          id: 'm9l3-a6',
          type: 'match',
          prompt: 'Match the signpost to its job.',
          pairs: [
            ['talking of…', 'picks up something just mentioned'],
            ['by the way', 'new minor topic, just thought of'],
            ['as I was saying', 'return after an interruption'],
            ['anyway', 'back to the main point / wrapping up'],
            ['incidentally', 'formal cousin of by the way'],
          ],
          explanation:
            'Five steering wheels, one conversation.',
        },
        {
          id: 'm9l3-a7',
          type: 'error-hunt',
          prompt: 'One word is off. Click it.',
          sentence: "Speaking on holidays, has Maria decided where she's going?",
          wrongIndex: 1,
          correction: 'of',
          explanation:
            'The pattern is **speaking of / talking of** + topic.',
        },
        {
          id: 'm9l3-a8',
          type: 'mcq',
          question: '___, as I was saying, the budget needs approval by Friday.',
          options: ['Anyway', 'Besides', 'At least'],
          correct: 0,
          explanation:
            'The classic double signpost: **Anyway, as I was saying…** — digression over.',
        },
        {
          id: 'm9l3-a9',
          type: 'order',
          prompt: 'Build the sentence.',
          correct: 'By the way, did you ever find your keys?',
          distractors: ['incidentally'],
          explanation:
            '**By the way** up front, then the new mini-topic.',
        },
      ],
    },
    {
      title: 'Spin Doctors',
      icon: '🌀',
      exercises: [
        {
          id: 'm9l3-b1',
          type: 'mcq',
          question: "A: Did you see the match last night? B: No. ___, I don't really like football.",
          options: ['As a matter of fact', 'As I was saying', 'On the whole'],
          correct: 0,
          explanation:
            'Surprising confession incoming → **as a matter of fact** (the full drumroll).',
        },
        {
          id: 'm9l3-b2',
          type: 'mcq',
          question: 'Yes, it was a bad accident. ___ nobody was killed, though.',
          options: ['At least', 'After all', 'Basically'],
          correct: 0,
          explanation:
            'Silver lining after bad news → **at least**.',
        },
        {
          id: 'm9l3-b3',
          type: 'mcq',
          question: "Tom's coming to the meeting — or ___, he said he was.",
          options: ['at least', 'after all', 'all in all'],
          correct: 0,
          explanation:
            'The **qualifier** use of *at least*: you only guarantee what he *said*.',
        },
        {
          id: 'm9l3-b4',
          type: 'mcq',
          question: "I think we should buy them. ___, we'll never find them anywhere cheaper.",
          options: ['After all', 'By the way', 'Talking of'],
          correct: 0,
          explanation:
            '**After all** introduces the argument the other person may not have considered.',
        },
        {
          id: 'm9l3-b5',
          type: 'mcq',
          question: "I don't think I'll go to Nick's party. It'll finish very late. ___, I won't know many people there.",
          options: ['Besides', 'At least', 'As a matter of fact'],
          correct: 0,
          explanation:
            'One more reason on the pile → **besides**, the knockout punch.',
        },
        {
          id: 'm9l3-b6',
          type: 'gap',
          before: "It's cold today — in",
          after: ", it's absolutely freezing. (one word)",
          hint: 'upgrade',
          accepted: ['fact'],
          explanation:
            '**in fact** can upgrade what you just said: cold → *freezing*.',
        },
        {
          id: 'm9l3-b7',
          type: 'sort',
          prompt: 'What does each signpost add?',
          buckets: ['a surprising truth', 'an extra argument'],
          items: [
            { text: 'actually', bucket: 0 },
            { text: 'in fact', bucket: 0 },
            { text: 'as a matter of fact', bucket: 0 },
            { text: 'besides', bucket: 1 },
            { text: 'after all', bucket: 1 },
            { text: "what's more", bucket: 1 },
          ],
          explanation:
            'The *fact*-family corrects expectations; the argument-family wins debates.',
        },
        {
          id: 'm9l3-b8',
          type: 'error-hunt',
          prompt: 'One word is off. Click it.',
          sentence: "Don't worry about the exam. After everything, you've passed the last five.",
          wrongIndex: 6,
          correction: 'all,',
          explanation:
            "The fixed phrase is **after all** — here's a fact you're forgetting.",
        },
        {
          id: 'm9l3-b9',
          type: 'mcq',
          question: "'Actually' at the start of a reply most often signals…",
          options: [
            'a polite correction or unexpected answer',
            'strong enthusiastic agreement',
            'a completely unrelated topic change',
          ],
          correct: 0,
          explanation:
            '**Actually** softens a correction: "Actually, it was Tuesday."',
        },
      ],
    },
    {
      title: 'The Summing-Up Chamber',
      icon: '⚖️',
      exercises: [
        {
          id: 'm9l3-d1',
          type: 'mcq',
          question: "He's still a great director but, ___, I prefer his earlier films.",
          options: ['on the whole', 'after all', 'talking of which'],
          correct: 0,
          explanation:
            'Generalising with room for exceptions → **on the whole**.',
        },
        {
          id: 'm9l3-d2',
          type: 'mcq',
          question: 'I like both flats, but ___, I think I prefer the one next to the cathedral.',
          options: ['all in all', 'at least', 'speaking of which'],
          correct: 0,
          explanation:
            'Everything weighed up, verdict delivered → **all in all**.',
        },
        {
          id: 'm9l3-d3',
          type: 'mcq',
          question: '___, my job involves computer skills and people skills.',
          options: ['Basically', 'At least', 'As I was saying'],
          correct: 0,
          explanation:
            'Cutting to the fundamental point → **basically**.',
        },
        {
          id: 'm9l3-d4',
          type: 'gap',
          before: "I'm not sure we'll win, but in any",
          after: "we'll give it everything. (one word)",
          hint: 'whatever happens',
          accepted: ['case'],
          explanation:
            '**in any case** = whatever happens, this still stands.',
        },
        {
          id: 'm9l3-d5',
          type: 'sort',
          prompt: 'Summing up — or steering back?',
          buckets: ['summing up / generalising', 'returning to the point'],
          items: [
            { text: 'on the whole', bucket: 0 },
            { text: 'all in all', bucket: 0 },
            { text: 'basically', bucket: 0 },
            { text: 'anyway', bucket: 1 },
            { text: 'as I was saying', bucket: 1 },
            { text: 'in any case', bucket: 1 },
          ],
          explanation:
            'One family lands the plane; the other gets it back on course.',
        },
        {
          id: 'm9l3-d6',
          type: 'mcq',
          question: 'Which is the most informal way to reach the fundamental point?',
          options: ['basically', 'in essence', 'fundamentally'],
          correct: 0,
          explanation:
            '**basically** rules casual speech; *in essence* and *fundamentally* wear the tie.',
        },
        {
          id: 'm9l3-d7',
          type: 'error-hunt',
          prompt: 'One word is off. Click it.',
          sentence: 'On the total, the reviews have been very positive.',
          wrongIndex: 2,
          correction: 'whole,',
          explanation:
            'The fixed phrase is **on the whole** — generalising politely.',
        },
        {
          id: 'm9l3-d8',
          type: 'match',
          prompt: 'Match the signpost to its meaning.',
          pairs: [
            ['on the whole', 'generally speaking'],
            ['all in all', 'taking everything into account'],
            ['basically', 'the fundamental point is'],
            ['in any case', "whatever happens / it doesn't matter"],
            ['at least', "here's the silver lining"],
          ],
          explanation:
            'Five endings for five moods.',
        },
        {
          id: 'm9l3-d9',
          type: 'order',
          prompt: 'Build the sentence.',
          correct: 'All in all, the descent went better than expected.',
          distractors: ['whole'],
          explanation:
            '**All in all** — everything considered, a smooth climb down.',
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm9l3-e1',
          type: 'speed',
          prompt: 'Pick the natural signpost — fast!',
          secondsPerItem: 8,
          explanation: 'Conversational navigation at native speed.',
          items: [
            { question: '___ of Anna, is she still in Berlin?', options: ['Talking', 'Basically'], correct: 0 },
            { question: "It rained all week. ___ the tent didn't leak.", options: ['At least', 'Besides'], correct: 0 },
            { question: 'I hate horror films. ___, I fell asleep during the last one.', options: ['As a matter of fact', 'As I was saying'], correct: 0 },
            { question: '___, where was I? Right — the budget.', options: ['Anyway', 'All in all'], correct: 0 },
            { question: "Buy the boots. ___, winter's coming.", options: ['After all', 'At least'], correct: 0 },
            { question: '___, the trip was a great success.', options: ['All in all', 'Talking of'], correct: 0 },
            { question: "It's too far. ___, we can't afford it.", options: ['Besides', 'At least'], correct: 0 },
            { question: '___, my role is keeping clients happy.', options: ['Basically', 'Incidentally'], correct: 0 },
            { question: '___, have you seen my glasses anywhere?', options: ['Incidentally', 'After all'], correct: 0 },
            { question: '___ I prefer trains to planes.', options: ['On the whole', 'Talking of'], correct: 0 },
          ],
        },
      ],
    },
  ],
  boss: {
    passPct: 80,
    exercises: [
      {
        id: 'm9l3-boss1',
        type: 'mcq',
        question: "A: Nice bike! B: 'Thanks! ___ bikes, is yours still in the repair shop?'",
        options: ['Talking of', 'After all', 'Basically'],
        correct: 0,
        explanation:
          'Bikes were just mentioned — surf the link with **talking of**.',
      },
      {
        id: 'm9l3-boss2',
        type: 'mcq',
        question: 'The hotel was noisy and the food was dire. ___ the beach was gorgeous.',
        options: ['At least', 'Besides', 'As I was saying'],
        correct: 0,
        explanation:
          'Silver lining after two complaints → **at least**.',
      },
      {
        id: 'm9l3-boss3',
        type: 'mcq',
        question: "Let's not argue about who forgot the map. ___, we're lost, and we need a plan.",
        options: ['In any case', 'Speaking of which', 'As a matter of fact'],
        correct: 0,
        explanation:
          '**In any case** — whoever\'s fault it was, the situation stands.',
      },
      {
        id: 'm9l3-boss4',
        type: 'gap',
        before: "I wouldn't worry.",
        after: "all, they've extended the deadline twice before. (one word)",
        hint: 'the forgotten fact',
        accepted: ['after'],
        explanation:
          '**After all** = don\'t forget: they\'ve done it twice before.',
      },
      {
        id: 'm9l3-boss5',
        type: 'mcq',
        question: "'He's rich — or at least he acts like it.' What is *at least* doing?",
        options: [
          'qualifying — the speaker stops guaranteeing the claim',
          'adding an extra argument',
          'changing the topic politely',
        ],
        correct: 0,
        explanation:
          'The qualifier: the speaker only vouches for the acting, not the bank balance.',
      },
      {
        id: 'm9l3-boss6',
        type: 'error-hunt',
        prompt: 'One word is off. Click it.',
        sentence: 'By a way, did Tom ever call you back?',
        wrongIndex: 1,
        correction: 'the',
        explanation:
          'Fixed phrase: **by the way** — no substitutions accepted.',
      },
      {
        id: 'm9l3-boss7',
        type: 'mcq',
        question: 'Which pair means roughly the same thing?',
        options: [
          'all in all ↔ on balance',
          'after all ↔ at least',
          'basically ↔ by the way',
        ],
        correct: 0,
        explanation:
          '**all in all** and **on balance** both weigh everything before the verdict.',
      },
      {
        id: 'm9l3-boss8',
        type: 'sort',
        prompt: 'Where does each signpost feel at home?',
        buckets: ['spoken & informal', 'fine in formal writing too'],
        items: [
          { text: 'anyway', bucket: 0 },
          { text: 'basically', bucket: 0 },
          { text: 'you see', bucket: 0 },
          { text: 'incidentally', bucket: 1 },
          { text: 'on the whole', bucket: 1 },
          { text: 'in any case', bucket: 1 },
        ],
        explanation:
          'Register check: some signposts only work in trainers; others own a suit.',
      },
      {
        id: 'm9l3-boss9',
        type: 'mcq',
        question: "I know flying is faster. ___, the train is comfier, cheaper, and you see the mountains.",
        options: ['Besides', 'At least', 'Talking of'],
        correct: 0,
        explanation:
          '**Besides** stacks the extra arguments — three in one sentence, knockout.',
      },
      {
        id: 'm9l3-boss10',
        type: 'gap',
        before: '',
        after: 'in all, Module 9 has been a remarkably smooth ride down. (one word)',
        hint: 'everything considered',
        accepted: ['all'],
        explanation:
          '**All in all** — everything considered. And it has been, hasn\'t it? 🎿',
      },
      {
        id: 'm9l3-boss11',
        type: 'mcq',
        question: 'A friend interrupts your story with gossip. To steer back, you say…',
        options: [
          'Anyway, as I was saying…',
          'After all, as I was saying…',
          'At least, incidentally…',
        ],
        correct: 0,
        explanation:
          'The double signpost **Anyway, as I was saying…** ends the detour and rewinds the tape. And that, all in all, is the descent complete — see you at base camp. 🏕️',
      },
    ],
  },
};
