import type { Lesson } from '../../types';

export const m9l2: Lesson = {
  id: 'm9l2',
  title: 'The Causative Ladder',
  subtitle: 'make, let, have & get somebody to do it',
  minutes: 45,
  goals: [
    'Climb the ladder of force: let → get → have → make',
    'Know which verbs take a bare infinitive and which demand to',
    'Handle the passive traps: be made TO do, be allowed to',
    'Master the for-pattern: arrange for a taxi to come',
  ],
  cards: [
    {
      title: 'Delegation station',
      body: `Real fluency isn't doing things — it's **getting other people to do them**. English has a whole ladder of verbs for this, sorted by force:

- **let** — you *allow* it: *Her mum **let** her go.*
- **help** — you make it easier: *He **helped** me (to) carry it.*
- **get** — you *persuade* or *manage*: *I **got** him to apologise.*
- **have** — you *instruct* (it's their job): *I'll **have** reception call you a cab.*
- **make** — you *force*: *The officer **made** us open our bags.*

One ladder, two grammar patterns — and mixing them up is the classic C1 slip. Let's fix that permanently.`,
      miniCheck: {
        id: 'm9l2-c1',
        type: 'mcq',
        question: 'Which verb carries pure force — no choice at all?',
        options: ['make', 'let', 'get'],
        correct: 0,
        explanation:
          '**make** = compel. The others allow, persuade or arrange — *make* commands.',
      },
    },
    {
      title: 'make + object + bare infinitive',
      body: `*make* takes the **bare infinitive** — no *to*:

> The film **made me cry**. — not ~~made me to cry~~
> My parents **made me practise** the piano every day.
> Nothing **makes him laugh** like his own jokes.

Whether it's emotional (*make somebody cry/laugh/smile*) or tyrannical (*make somebody wait/pay/queue*), the pattern never changes: **make + person + verb**, naked and to-less.`,
      miniCheck: {
        id: 'm9l2-c2',
        type: 'gap',
        before: 'The security guard made us',
        after: 'our bags. (open)',
        hint: 'open',
        accepted: ['open'],
        explanation:
          '**make + object + bare infinitive**: *made us open* — no *to* allowed.',
      },
    },
    {
      title: 'let + object + bare infinitive',
      body: `*let* (= allow) is *make*'s gentle twin — same bare infinitive:

> Just **let me know** when you arrive.
> They don't **let their kids watch** TV on weekdays.

⚠️ **The passive trap**: *make* and *let* behave differently in the passive.

- *make*: the *to* **comes back** — *We **were made to wait** outside.*
- *let*: there is **no passive** — use *be allowed to*: *We **were allowed to leave** early.* — not ~~were let leave~~`,
      tip: 'Remember it as revenge: make bullies you in the active, so in the passive it has to carry the "to" itself.',
      miniCheck: {
        id: 'm9l2-c3',
        type: 'mcq',
        question: "The passive of 'They let us leave early' is…",
        options: [
          'We were allowed to leave early.',
          'We were let leave early.',
          'We were let to leave early.',
        ],
        correct: 0,
        explanation:
          '*let* has no passive — swap in **be allowed to**.',
      },
    },
    {
      title: 'have + object + bare infinitive',
      body: `*have somebody do something* = you **instruct** them — usually because it's literally their job:

> I'll **have the porter bring** your bags up.
> She **had her assistant book** the flights.

Bonus pattern — *have somebody doing* for a **result you cause**:

> The comedian **had the whole room laughing** within minutes.
> The new coach soon **had us running** ten kilometres before breakfast.

No force, no persuasion — just quiet authority. Hotel-lobby grammar. 🛎️`,
      miniCheck: {
        id: 'm9l2-c4',
        type: 'gap',
        before: "I'll have my assistant",
        after: 'you the details this afternoon. (send)',
        hint: 'send',
        accepted: ['send'],
        explanation:
          '**have + person + bare infinitive**: *have my assistant send* — an instruction, not a request.',
      },
    },
    {
      title: 'get + object + TO-infinitive',
      body: `Here's the rebel: *get* means **persuade / manage to arrange** — and it demands **to**:

> Could you **get Jane to finish** the report? I'm too busy.
> We need to **get someone to fix** the central heating.
> I finally **got my brother to lend** me his car.

*get* implies **effort** — charm, nagging, bribery. Compare the ladder:

> I **had** the mechanic check the brakes. (his job — calm)
> I **got** the mechanic to check the brakes. (I talked him into it — effort)

And you already know the thing-version: *get/have **something done*** — *I'm going to **get my hair cut***.`,
      miniCheck: {
        id: 'm9l2-c5',
        type: 'gap',
        before: 'Could you get Jane',
        after: 'finish the report? (one word)',
        hint: 'the rebel',
        accepted: ['to'],
        explanation:
          'Unlike *make/let/have*, **get** takes the **to-infinitive**: *get Jane **to** finish*.',
      },
    },
    {
      title: 'The for-pattern: arrange for a taxi to come',
      body: `Some verbs can't touch their object directly — they need **for** as a go-between:

> We've **arranged for a taxi to come** at 6.30.
> I'm **waiting for my friend to arrive**.
> They've **asked for the meeting to be postponed**.

The *for*-club: **arrange, ask, plan, wait** (+ *for* + object + *to*-infinitive).

But *want*-type verbs go direct — **no for, no that-clause**:

> I **want Arsenal to win**. — not ~~I want that Arsenal wins~~
> I'd **hate you to think** I don't care. · She **advised him not to travel** by train.`,
      miniCheck: {
        id: 'm9l2-c6',
        type: 'mcq',
        question: "We've arranged ___ come at 6.30.",
        options: ['for a taxi to', 'a taxi to', 'that a taxi'],
        correct: 0,
        explanation:
          '*arrange* needs the go-between: **arrange for + object + to-infinitive**.',
      },
    },
    {
      title: 'The ladder — full map',
      body: `Pin this to the inside of your helmet:

- **let sb do** — allow (bare) · passive: *be allowed to*
- **help sb (to) do** — both work
- **have sb do** — instruct (bare) · *have sb doing* = cause a scene
- **get sb TO do** — persuade (to!)
- **make sb do** — force (bare) · passive: *be made TO do*
- **get/have sth done** — the thing-version: *get your eyes tested*
- **arrange/ask/plan/wait FOR sb to do** — the for-club

Six patterns, one skill: making the world do your homework. ⛷️`,
      miniCheck: {
        id: 'm9l2-c7',
        type: 'mcq',
        question: 'Force → permission → persuasion. Which order matches?',
        options: [
          'make / let / get somebody to',
          'get somebody to / make / let',
          'let / make / get somebody to',
        ],
        correct: 0,
        explanation:
          '**make** forces, **let** permits, **get sb to** persuades — the three rungs of the ladder.',
      },
    },
  ],
  sets: [
    {
      title: 'The Force Scale',
      icon: '💪',
      exercises: [
        {
          id: 'm9l2-a1',
          type: 'mcq',
          question: 'My parents made me ___ the piano for six years.',
          options: ['practise', 'to practise', 'practising'],
          correct: 0,
          explanation:
            '**make + object + bare infinitive**: *made me practise*.',
        },
        {
          id: 'm9l2-a2',
          type: 'mcq',
          question: 'At school we were made ___ hymns every single morning.',
          options: ['to sing', 'sing', 'singing'],
          correct: 0,
          explanation:
            'In the **passive**, *make* gets its *to* back: *were made **to sing***.',
        },
        {
          id: 'm9l2-a3',
          type: 'gap',
          before: "Her boss wouldn't let her",
          after: 'early, even on her birthday. (leave)',
          hint: 'leave',
          accepted: ['leave'],
          explanation:
            '**let + object + bare infinitive**: *let her leave*.',
        },
        {
          id: 'm9l2-a4',
          type: 'error-hunt',
          prompt: 'One word is off. Click it.',
          sentence: "They don't let their kids to watch TV on weekdays.",
          wrongIndex: 5,
          correction: 'watch (let + bare infinitive)',
          explanation:
            '*let* takes the **bare infinitive**: *let their kids watch* — the *to* has to go.',
        },
        {
          id: 'm9l2-a5',
          type: 'sort',
          prompt: 'Bare infinitive or to-infinitive after the object?',
          buckets: ['+ bare infinitive', '+ to-infinitive'],
          items: [
            { text: 'make', bucket: 0 },
            { text: 'let', bucket: 0 },
            { text: 'get', bucket: 1 },
            { text: 'allow', bucket: 1 },
            { text: 'force', bucket: 1 },
            { text: 'have (sb do)', bucket: 0 },
          ],
          explanation:
            '**make, let, have** go bare; **get, allow, force** need *to*. Same meanings, opposite grammar.',
        },
        {
          id: 'm9l2-a6',
          type: 'transform',
          source: 'Our teacher forced us to memorise fifty lines of poetry.',
          keyword: 'MADE',
          accepted: [
            'our teacher made us memorise fifty lines of poetry',
            'the teacher made us memorise fifty lines of poetry',
          ],
          explanation:
            '*force sb to do* → **make sb do**: *made us memorise* — and the *to* vanishes.',
        },
        {
          id: 'm9l2-a7',
          type: 'mcq',
          question: 'Just ___ me know when you arrive.',
          options: ['let', 'make', 'get'],
          correct: 0,
          explanation:
            'The fixed phrase: **let me know** = tell me. Pure permission-verb politeness.',
        },
        {
          id: 'm9l2-a8',
          type: 'gap',
          before: 'We were',
          after: 'to wait outside for over an hour. (make)',
          hint: 'passive',
          accepted: ['made'],
          explanation:
            'Passive force: *we **were made to wait*** — note the returning *to*.',
        },
        {
          id: 'm9l2-a9',
          type: 'order',
          prompt: 'Build the sentence.',
          correct: 'Her parents never let her stay out late.',
          distractors: ['to'],
          explanation:
            '**let her stay** — bare infinitive; the *to* was a decoy.',
        },
      ],
    },
    {
      title: 'The Fixers',
      icon: '🔧',
      exercises: [
        {
          id: 'm9l2-b1',
          type: 'mcq',
          question: "Could you get Jane ___ the report? I'm too busy this afternoon.",
          options: ['to finish', 'finish', 'finishing'],
          correct: 0,
          explanation:
            '**get + person + to-infinitive**: *get Jane to finish*.',
        },
        {
          id: 'm9l2-b2',
          type: 'gap',
          before: 'We need to get someone',
          after: "fix the central heating — it's not working properly. (one word)",
          hint: 'get is the rebel',
          accepted: ['to'],
          explanation:
            '*get* always brings its **to**: *get someone **to** fix*.',
        },
        {
          id: 'm9l2-b3',
          type: 'mcq',
          question: "I'll have the porter ___ your bags up to the room.",
          options: ['bring', 'to bring', 'bringing'],
          correct: 0,
          explanation:
            '**have + person + bare infinitive** — an instruction: *have the porter bring*.',
        },
        {
          id: 'm9l2-b4',
          type: 'error-hunt',
          prompt: 'One word is off. Click it.',
          sentence: 'I finally got my brother lend me his car.',
          wrongIndex: 5,
          correction: 'to lend',
          explanation:
            'Persuasion needs *to*: *got my brother **to lend** me his car*.',
        },
        {
          id: 'm9l2-b5',
          type: 'mcq',
          question: "'get your hair cut' vs 'get the hairdresser to cut it' — what's the difference?",
          options: [
            'first = the service, doer unnamed; second = you name who you persuade or instruct',
            'no difference at all',
            'the first one is future, the second past',
          ],
          correct: 0,
          explanation:
            '**get sth done** hides the doer; **get sb to do** puts them centre stage.',
        },
        {
          id: 'm9l2-b6',
          type: 'transform',
          source: "I'll ask the IT guy so that he fixes my laptop.",
          keyword: 'GET',
          accepted: [
            "i'll get the it guy to fix my laptop",
            'i will get the it guy to fix my laptop',
          ],
          explanation:
            'Neater with the causative: **I\'ll get the IT guy to fix my laptop.**',
        },
        {
          id: 'm9l2-b7',
          type: 'gap',
          before: 'The comedian had the whole room',
          after: 'within minutes. (laugh)',
          hint: '-ing',
          accepted: ['laughing'],
          explanation:
            '**have + object + -ing** for a result you cause: *had the room laughing*.',
        },
        {
          id: 'm9l2-b8',
          type: 'mcq',
          question: "I'm going to get my passport ___ — it runs out in a couple of months.",
          options: ['renewed', 'to renew', 'renew'],
          correct: 0,
          explanation:
            'Thing-version: **get + object + past participle** — *get my passport renewed*.',
        },
        {
          id: 'm9l2-b9',
          type: 'sort',
          prompt: 'Person-version or thing-version?',
          buckets: ['get + person + to-infinitive', 'get/have + thing + past participle'],
          items: [
            { text: 'get Dan to help', bucket: 0 },
            { text: 'get the car serviced', bucket: 1 },
            { text: 'get mum to babysit', bucket: 0 },
            { text: 'have the roof checked', bucket: 1 },
            { text: 'get the locks changed', bucket: 1 },
            { text: 'get him to apologise', bucket: 0 },
          ],
          explanation:
            'People get **persuaded** (*to do*); things get **done** (*past participle*).',
        },
      ],
    },
    {
      title: 'The For-Pattern Bureau',
      icon: '📮',
      exercises: [
        {
          id: 'm9l2-d1',
          type: 'mcq',
          question: "We've arranged ___ to come at 6.30.",
          options: ['for a taxi', 'a taxi', 'to a taxi'],
          correct: 0,
          explanation:
            '*arrange* needs its go-between: **arrange for + object + to-infinitive**.',
        },
        {
          id: 'm9l2-d2',
          type: 'gap',
          before: "I'm waiting",
          after: 'my friend to arrive — she said seven. (one word)',
          hint: 'the go-between',
          accepted: ['for'],
          explanation:
            '**wait for + object + to-infinitive**: *waiting for my friend to arrive*.',
        },
        {
          id: 'm9l2-d3',
          type: 'mcq',
          question: 'I want ___ win, obviously.',
          options: ['Arsenal to', 'that Arsenal', 'for that Arsenal'],
          correct: 0,
          explanation:
            '*want* goes direct: **want + object + to-infinitive** — a *that*-clause is impossible here.',
        },
        {
          id: 'm9l2-d4',
          type: 'error-hunt',
          prompt: 'One word is off. Click it.',
          sentence: "We've arranged of a taxi to pick us up after the party.",
          wrongIndex: 2,
          correction: 'for',
          explanation:
            'The for-club: **arrange FOR a taxi to pick us up**.',
        },
        {
          id: 'm9l2-d5',
          type: 'transform',
          source: 'The flight will probably arrive at 19.50.',
          keyword: 'EXPECT',
          accepted: [
            'we expect the flight to arrive at 19.50',
            'i expect the flight to arrive at 19.50',
          ],
          explanation:
            '**expect + object + to-infinitive**: *We expect the flight to arrive at 19.50.*',
        },
        {
          id: 'm9l2-d6',
          type: 'mcq',
          question: 'It took us ages ___ there.',
          options: ['to get', 'for getting', 'get'],
          correct: 0,
          explanation:
            '**It took (us) + time + to-infinitive**: *It took us ages to get there.*',
        },
        {
          id: 'm9l2-d7',
          type: 'gap',
          before: "We've arranged for a taxi",
          after: 'come at 6.30. (one word)',
          hint: 'infinitive',
          accepted: ['to'],
          explanation:
            'Second half of the pattern: *for a taxi **to** come*.',
        },
        {
          id: 'm9l2-d8',
          type: 'mcq',
          question: 'Which verb needs *for* before its object?',
          options: ['wait', 'want', 'tell'],
          correct: 0,
          explanation:
            '*wait **for** somebody to do* — but *want somebody to do* and *tell somebody to do* go direct.',
        },
        {
          id: 'm9l2-d9',
          type: 'order',
          prompt: 'Build the sentence.',
          correct: 'She advised him not to travel by train.',
          distractors: ['for'],
          explanation:
            '**advise + object + (not) to-infinitive**: *advised him not to travel* — no *for* needed.',
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm9l2-e1',
          type: 'speed',
          prompt: 'Bare or to? Trust your ear!',
          secondsPerItem: 8,
          explanation: 'The causative ladder at full speed.',
          items: [
            { question: 'My mum made me ___ my room.', options: ['tidy', 'to tidy'], correct: 0 },
            { question: 'Let me ___ you a secret.', options: ['tell', 'to tell'], correct: 0 },
            { question: 'I got him ___ me a lift.', options: ['to give', 'give'], correct: 0 },
            { question: 'We were made ___ outside.', options: ['to wait', 'wait'], correct: 0 },
            { question: "I'll have reception ___ you a cab.", options: ['call', 'to call'], correct: 0 },
            { question: 'I must get my eyes ___.', options: ['tested', 'to test'], correct: 0 },
            { question: "They won't let us ___ photos here.", options: ['take', 'to take'], correct: 0 },
            { question: 'We arranged ___ a courier to collect it.', options: ['for', 'to'], correct: 0 },
            { question: 'The clown had everyone ___.', options: ['laughing', 'to laugh'], correct: 0 },
            { question: 'She wants me ___ earlier.', options: ['to start', 'start'], correct: 0 },
          ],
        },
      ],
    },
  ],
  boss: {
    passPct: 80,
    exercises: [
      {
        id: 'm9l2-boss1',
        type: 'mcq',
        question: 'The customs officer made us ___ every single suitcase.',
        options: ['open', 'to open', 'opening'],
        correct: 0,
        explanation: 'Active *make* = bare infinitive: *made us open*.',
      },
      {
        id: 'm9l2-boss2',
        type: 'gap',
        before: 'At my first job we were made',
        after: 'wear name badges. (one word)',
        hint: 'the passive brings it back',
        accepted: ['to'],
        explanation:
          'Passive *make* reclaims its *to*: *were made **to** wear*.',
      },
      {
        id: 'm9l2-boss3',
        type: 'mcq',
        question: "The passive of 'They let us go home early'?",
        options: [
          'We were allowed to go home early.',
          'We were let go home early.',
          'We got let to go home early.',
        ],
        correct: 0,
        explanation:
          '*let* has no passive — substitute **be allowed to**.',
      },
      {
        id: 'm9l2-boss4',
        type: 'error-hunt',
        prompt: 'One word is off. Click it.',
        sentence: 'Could you get your sister help us with the move?',
        wrongIndex: 5,
        correction: 'to help',
        explanation:
          '*get* needs **to**: *get your sister **to help** us*.',
      },
      {
        id: 'm9l2-boss5',
        type: 'transform',
        source: 'The mechanic is going to service my car tomorrow.',
        keyword: 'HAVING',
        accepted: [
          "i'm having my car serviced tomorrow",
          'i am having my car serviced tomorrow',
        ],
        explanation:
          'Causative arrangement: **I\'m having my car serviced tomorrow.**',
      },
      {
        id: 'm9l2-boss6',
        type: 'mcq',
        question: "I'll have the kitchen ___ you a fresh pot of coffee.",
        options: ['make', 'to make', 'made'],
        correct: 0,
        explanation:
          '**have + person/team + bare infinitive** — an instruction: *have the kitchen make*.',
      },
      {
        id: 'm9l2-boss7',
        type: 'sort',
        prompt: 'What follows the object?',
        buckets: ['bare infinitive', 'to-infinitive', 'past participle'],
        items: [
          { text: 'let sb (go)', bucket: 0 },
          { text: 'make sb (pay)', bucket: 0 },
          { text: 'get sb (to pay)', bucket: 1 },
          { text: 'want sb (to stay)', bucket: 1 },
          { text: 'get sth (fixed)', bucket: 2 },
          { text: 'have sth (delivered)', bucket: 2 },
        ],
        explanation:
          'make/let go bare · get/want take *to* · the thing-versions take the past participle.',
      },
      {
        id: 'm9l2-boss8',
        type: 'gap',
        before: "We're still waiting",
        after: 'the results to be announced. (one word)',
        hint: 'the go-between',
        accepted: ['for'],
        explanation:
          '**wait for + object + to-infinitive**: *waiting for the results to be announced*.',
      },
      {
        id: 'm9l2-boss9',
        type: 'mcq',
        question: "'She had us rolling in the aisles' means…",
        options: [
          'she made us laugh uncontrollably',
          'she hired us to clean the aisles',
          'she let us sit wherever we wanted',
        ],
        correct: 0,
        explanation:
          '**have + object + -ing** for a caused result — here, helpless laughter.',
      },
      {
        id: 'm9l2-boss10',
        type: 'order',
        prompt: 'Build the sentence.',
        correct: "I can't get my kids to eat vegetables.",
        distractors: ['eating'],
        explanation:
          'Persuasion (failing): *get my kids **to eat*** — to-infinitive, not -ing.',
      },
      {
        id: 'm9l2-boss11',
        type: 'gap',
        before: 'Never make a mountain guide',
        after: '— just follow them down. (hurry)',
        hint: 'bare',
        accepted: ['hurry'],
        explanation:
          '**make + object + bare infinitive** — and solid mountaineering advice. ⛷️',
      },
    ],
  },
};
