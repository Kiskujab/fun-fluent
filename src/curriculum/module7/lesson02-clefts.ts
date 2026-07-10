import type { Lesson } from '../../types';

export const m7l2: Lesson = {
  id: 'm7l2',
  title: 'Cleft Sentences',
  subtitle: 'What I love is… / It was Anna who…',
  minutes: 45,
  goals: [
    'Build wh-clefts: What I need is a break',
    'Build it-clefts: It was the drummer who…',
    'Choose the right cleft for the right emphasis',
    'Master the variations: All I want…, The reason why…, The thing that…',
  ],
  cards: [
    {
      title: 'Why cleave a sentence?',
      body: `A cleft splits one plain sentence into two parts to **spotlight** one piece:

> Plain: I admire her honesty.
> Wh-cleft: **What I admire is her honesty.**
> It-cleft: **It's her honesty that I admire.**

Same facts, different theatre. The cleft says: *of everything we could discuss, THIS is the point.*`,
      miniCheck: {
        id: 'm7l2-c1',
        type: 'mcq',
        question: 'Which cleft correctly spotlights "the ending" in "I hated the ending"?',
        options: [
          'What I hated was the ending.',
          'What hated I was the ending.',
          'The ending what I hated was.',
        ],
        correct: 0,
        explanation:
          '**What + subject + verb + be + spotlight**: *What I hated was the ending.*',
      },
    },
    {
      title: 'The wh-cleft: What I need is…',
      body: `Recipe: **What + clause + be + the spotlighted thing**:

> **What keeps me awake is** the neighbour's parrot.
> **What she did was** (to) resign on the spot. (spotlight an action!)
> **What happened was** (that) the brakes failed. (spotlight a whole event)

The verb after *what…* is usually **singular** (*is/was*), even with plural news:

> What we need **is** more volunteers.`,
      miniCheck: {
        id: 'm7l2-c2',
        type: 'gap',
        before: 'What this team needs',
        after: 'a proper day off. (be — present)',
        hint: 'is / are?',
        accepted: ['is'],
        explanation:
          'The *what*-clause takes a singular verb: **What this team needs IS…**',
      },
    },
    {
      title: 'The it-cleft: It was Anna who…',
      body: `Recipe: **It + be + spotlight + who/that + the rest**:

> **It was Anna who** found the error. (not Tom — Anna!)
> **It was in Paris that** they met. (not in Rome)
> **It wasn't until Friday that** we heard. (fronted time!)

People → **who** or *that*; everything else → **that**:

> It was the printer **that** caused the delay.`,
      miniCheck: {
        id: 'm7l2-c3',
        type: 'gap',
        before: 'It was the goalkeeper',
        after: 'saved the match. (person!)',
        hint: 'one word',
        accepted: ['who', 'that'],
        explanation:
          'Spotlighting a person → **who** (or *that*): *It was the goalkeeper who…*',
      },
    },
    {
      title: 'Which cleft when?',
      body: `**Wh-cleft** — sets up new information; conversational:

> What bothers me is the smell. (you don't know yet what bothers me)

**It-cleft** — corrects or contrasts; argumentative:

> It was the smell (not the noise) that bothered me.

> "You broke it!" — "**It was Leo who** broke it!" ← correction: it-cleft
> "Well… **what actually happened was** the shelf collapsed." ← story setup: wh-cleft`,
      miniCheck: {
        id: 'm7l2-c4',
        type: 'mcq',
        question: 'Someone accuses your dog. Best correcting reply:',
        options: [
          "It was the cat that ate the roast, not my dog.",
          'What ate the roast was interesting.',
          'The roast was eaten.',
        ],
        correct: 0,
        explanation:
          'Correcting a wrong claim → **it-cleft**: *It was the cat that…*',
      },
    },
    {
      title: 'The variations shop',
      body: `Beyond *what*, a whole family of cleft-openers:

- **All (that)** = the only thing: **All I want is** five minutes of silence.
- **The thing that**: **The thing that annoys me is** the humming.
- **The reason why**: **The reason why I left was** the salary.
- **The place where / The day when**: **The place where it hurts is** here.
- **Something/One thing (that)**: **One thing I've learned is** to read contracts.`,
      miniCheck: {
        id: 'm7l2-c5',
        type: 'gap',
        before: '',
        after: 'I ask is a little patience. (= the only thing)',
        hint: 'one word',
        accepted: ['all'],
        explanation:
          '**All I ask is…** = the only thing I ask.',
      },
    },
    {
      title: 'Spotlighting actions & events',
      body: `To emphasise **what somebody did**, the wh-cleft uses *do* as a stand-in:

> **What he did was (to) sell** the car. (spotlight: the selling)
> **What you should do is call** them directly.

To spotlight a **whole event**, use *happen*:

> **What happened was (that)** the tickets never arrived.

These two are conversation workhorses — perfect for explaining mishaps.`,
      tip: 'After "What…do is", the verb can be bare or with to: "What she did was (to) apologise." Both correct; bare is more common.',
      miniCheck: {
        id: 'm7l2-c6',
        type: 'mcq',
        question: 'Spotlight the action in "You should update the software first":',
        options: [
          'What you should do first is update the software.',
          'What you should update is do the software.',
          'It is update that you should the software.',
        ],
        correct: 0,
        explanation:
          '**What + you should do + is + bare verb**: *…is update the software*.',
      },
    },
  ],
  sets: [
    {
      title: 'Wh-Cleft Workshop',
      icon: '🔦',
      exercises: [
        {
          id: 'm7l2-a1',
          type: 'transform',
          source: 'I really miss the sea.',
          keyword: 'what',
          before: 'What I really miss',
          after: 'the sea.',
          accepted: ['is'],
          explanation:
            'Wh-cleft: **What I really miss IS the sea.**',
        },
        {
          id: 'm7l2-a2',
          type: 'gap',
          before: 'What ruined the picnic',
          after: 'the wasps, not the weather. (be — past)',
          hint: 'was / were?',
          accepted: ['was'],
          explanation:
            'The *what*-clause is singular even before plural news: **was** the wasps.',
        },
        {
          id: 'm7l2-a3',
          type: 'order',
          correct: 'What impressed me most was her calmness',
          explanation:
            'Wh-cleft skeleton: **What + clause + was + spotlight**.',
        },
        {
          id: 'm7l2-a4',
          type: 'mcq',
          question: '"___ was that the file was never saved." (explaining a mishap)',
          options: ['What happened', 'What did happen', 'It happened what'],
          correct: 0,
          explanation:
            'Event cleft: **What happened was (that)…** — no *did* needed.',
        },
        {
          id: 'm7l2-a5',
          type: 'transform',
          source: 'He apologised to the whole team. (spotlight the action)',
          keyword: 'did',
          before: 'What he',
          after: 'apologise to the whole team.',
          accepted: ['did was', 'did was to'],
          explanation:
            'Action cleft: **What he did was (to) apologise…**',
        },
        {
          id: 'm7l2-a6',
          type: 'error-hunt',
          sentence: 'What do I need most is a decent night of sleep.',
          wrongIndex: 1,
          correction: 'What I need most',
          explanation:
            'No question order inside a cleft — the *do* must go: **What I need most is…**',
        },
        {
          id: 'm7l2-a7',
          type: 'gap',
          before: 'The reason',
          after: 'she resigned was never made public. (one word)',
          hint: 'one word',
          accepted: ['why', 'that'],
          explanation:
            '**The reason why/that she resigned…** — reason cleft.',
        },
        {
          id: 'm7l2-a8',
          type: 'mcq',
          question: '___ I want for my birthday is a lie-in until noon.',
          options: ['All', 'Which', 'That'],
          correct: 0,
          explanation:
            '**All I want is…** = the only thing I want.',
        },
      ],
    },
    {
      title: 'It-Cleft Theatre',
      icon: '🎭',
      exercises: [
        {
          id: 'm7l2-b1',
          type: 'transform',
          source: 'Marta found the missing ledger. (emphasise WHO)',
          keyword: 'who',
          before: 'It was Marta',
          after: 'the missing ledger.',
          accepted: ['who found', 'that found'],
          explanation:
            'It-cleft on a person: **It was Marta who found…**',
        },
        {
          id: 'm7l2-b2',
          type: 'transform',
          source: 'They met in Lisbon, not in Madrid. (emphasise WHERE)',
          keyword: 'that',
          before: 'It was in Lisbon',
          after: 'they met.',
          accepted: ['that'],
          explanation:
            'Place spotlight → **It was in Lisbon THAT they met** (not *where*).',
        },
        {
          id: 'm7l2-b3',
          type: 'gap',
          before: 'It',
          after: 'until the final chapter that the murderer was revealed. (be — negative past)',
          hint: 'was not…',
          accepted: ["wasn't", 'was not'],
          explanation:
            'Time spotlight: **It wasn\'t until… that…**',
        },
        {
          id: 'm7l2-b4',
          type: 'error-hunt',
          sentence: 'It was the violinist which stole the show last night.',
          wrongIndex: 4,
          correction: 'who',
          explanation:
            'Person in an it-cleft → **who** (or *that*), never *which*.',
        },
        {
          id: 'm7l2-b5',
          type: 'order',
          correct: 'It was the tiny print that caused all the confusion',
          explanation:
            'It-cleft on a thing: **It was X that…**',
        },
        {
          id: 'm7l2-b6',
          type: 'mcq',
          question: '"You called on Monday, right?" — "No, ___ ."',
          options: [
            'it was on Tuesday that I called',
            'what I called was Tuesday',
            'it was I that Tuesday called',
          ],
          correct: 0,
          explanation:
            'Correcting the day → it-cleft on the time phrase: **It was on Tuesday that…**',
        },
        {
          id: 'm7l2-b7',
          type: 'gap',
          before: 'It is not money',
          after: 'makes a good teacher — it is patience.',
          hint: 'one word',
          accepted: ['that', 'which'],
          explanation:
            'Thing spotlight → **that**: *It is not money that makes…*',
        },
        {
          id: 'm7l2-b8',
          type: 'transform',
          source: 'I only recognised him because of his laugh.',
          keyword: 'it',
          before: '',
          after: 'his laugh that made me recognise him.',
          accepted: ['it was'],
          explanation:
            'Cause spotlight: **It was his laugh that…**',
        },
      ],
    },
    {
      title: 'Choose Your Weapon',
      icon: '⚔️',
      exercises: [
        {
          id: 'm7l2-d1',
          type: 'sort',
          prompt: 'Wh-cleft or it-cleft?',
          buckets: ['wh-cleft', 'it-cleft'],
          items: [
            { text: 'What I need is coffee.', bucket: 0 },
            { text: 'It was Sam who forgot the keys.', bucket: 1 },
            { text: 'What happened was the tent collapsed.', bucket: 0 },
            { text: 'It was in 2019 that we last met.', bucket: 1 },
            { text: 'All she wanted was an answer.', bucket: 0 },
            { text: "It wasn't the price that put me off.", bucket: 1 },
          ],
          explanation:
            'wh-/all-openers introduce; *It + be + spotlight* corrects and contrasts.',
        },
        {
          id: 'm7l2-d2',
          type: 'mcq',
          question: 'Best cleft to CORRECT "The manager approved it":',
          options: [
            'It was the owner who approved it, not the manager.',
            'What the manager approved was it.',
            'The manager was who approved it.',
          ],
          correct: 0,
          explanation:
            'Correction/contrast → **it-cleft** with the right person spotlighted.',
        },
        {
          id: 'm7l2-d3',
          type: 'mcq',
          question: 'Best cleft to INTRODUCE your main complaint:',
          options: [
            'What really bothers me is the constant humming.',
            'It is bothering that hums constantly.',
            'The humming, me it bothers.',
          ],
          correct: 0,
          explanation:
            'Setting up new information → **wh-cleft**.',
        },
        {
          id: 'm7l2-d4',
          type: 'transform',
          source: 'Her voice makes the song special. (spotlight: her voice, two ways — use it-cleft)',
          keyword: 'that',
          before: 'It is her voice',
          after: 'the song special.',
          accepted: ['that makes'],
          explanation:
            'It-cleft: **It is her voice that makes…**',
        },
        {
          id: 'm7l2-d5',
          type: 'gap',
          before: 'The thing',
          after: 'scares me most is the silence before the storm. (one word)',
          hint: 'one word',
          accepted: ['that', 'which'],
          explanation:
            '**The thing that scares me most is…** — thing-cleft.',
        },
        {
          id: 'm7l2-d6',
          type: 'order',
          correct: 'One thing I have learned is never to argue with referees',
          explanation:
            '**One thing (that) I have learned is…** — cleft variation.',
        },
        {
          id: 'm7l2-d7',
          type: 'error-hunt',
          sentence: 'What we need are a bigger boat for this trip.',
          wrongIndex: 3,
          correction: 'is',
          explanation:
            'The *what*-clause takes **is**: *What we need IS a bigger boat.*',
        },
        {
          id: 'm7l2-d8',
          type: 'transform',
          source: 'You should back up your files first. (advice as an action cleft)',
          keyword: 'do',
          before: 'What you should',
          after: 'back up your files.',
          accepted: ['do is', 'do first is', 'do is to'],
          explanation:
            'Action cleft: **What you should do is (to) back up…**',
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm7l2-e1',
          type: 'speed',
          secondsPerItem: 9,
          explanation: 'Clefts at full speed!',
          items: [
            {
              question: '___ I need is sleep.',
              options: ['What', 'It'],
              correct: 0,
            },
            {
              question: 'It was Nia ___ solved it.',
              options: ['who', 'which'],
              correct: 0,
            },
            {
              question: 'What we lack ___ time.',
              options: ['is', 'are'],
              correct: 0,
            },
            {
              question: 'It was in June ___ we moved.',
              options: ['that', 'where'],
              correct: 0,
            },
            {
              question: '___ I ask is one favour.',
              options: ['All', 'Which'],
              correct: 0,
            },
            {
              question: 'What he did ___ resign.',
              options: ['was', 'did'],
              correct: 0,
            },
            {
              question: 'It ___ until dark that they stopped.',
              options: ["wasn't", 'was'],
              correct: 0,
            },
            {
              question: 'The reason ___ she left is unclear.',
              options: ['why', 'because'],
              correct: 0,
            },
            {
              question: 'What happened ___ the van broke down.',
              options: ['was that', 'that was'],
              correct: 0,
            },
            {
              question: 'It is the details ___ matter.',
              options: ['that', 'who'],
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
        id: 'm7l2-boss1',
        type: 'transform',
        source: 'I value loyalty above everything.',
        keyword: 'what',
        before: 'What I value above everything',
        after: 'loyalty.',
        accepted: ['is'],
        explanation: 'Wh-cleft: **What I value… IS loyalty.**',
      },
      {
        id: 'm7l2-boss2',
        type: 'transform',
        source: 'The keeper made the mistake, not the defender.',
        keyword: 'who',
        before: 'It was the keeper',
        after: 'the mistake, not the defender.',
        accepted: ['who made', 'that made'],
        explanation:
          'Correcting cleft: **It was the keeper who made…**',
      },
      {
        id: 'm7l2-boss3',
        type: 'mcq',
        question: '___ until the ink dried that she noticed the spelling mistake.',
        options: ["It wasn't", "There wasn't", "What wasn't"],
        correct: 0,
        explanation:
          'Time cleft: **It wasn\'t until… that…**',
      },
      {
        id: 'm7l2-boss4',
        type: 'gap',
        before: 'What the garden needs',
        after: 'rain — two solid days of it. (be)',
        hint: 'is / are?',
        accepted: ['is'],
        explanation:
          'Singular verb after the *what*-clause: **is** rain.',
      },
      {
        id: 'm7l2-boss5',
        type: 'error-hunt',
        sentence: 'It was my sister which taught me to drive.',
        wrongIndex: 4,
        correction: 'who',
        explanation:
          'Person spotlight → **who**: *It was my sister who taught me.*',
      },
      {
        id: 'm7l2-boss6',
        type: 'order',
        correct: 'All he wanted was a quiet corner and a good book',
        explanation:
          '**All (that) he wanted was…** — "the only thing" cleft.',
      },
      {
        id: 'm7l2-boss7',
        type: 'mcq',
        question: 'Spotlight the action: "She donated the entire prize."',
        options: [
          'What she did was donate the entire prize.',
          'What she donated was do the prize.',
          'It was donate that she did the prize.',
        ],
        correct: 0,
        explanation:
          'Action cleft: **What she did was (to) donate…**',
      },
      {
        id: 'm7l2-boss8',
        type: 'gap',
        before: 'It is the small daily habits',
        after: 'shape who we become.',
        hint: 'one word',
        accepted: ['that', 'which'],
        explanation:
          'Thing spotlight → **that** shape who we become.',
      },
      {
        id: 'm7l2-boss9',
        type: 'transform',
        source: 'The printer broke — that caused the chaos. (event cleft)',
        keyword: 'happened',
        before: 'What',
        after: 'was that the printer broke.',
        accepted: ['happened'],
        explanation:
          'Event cleft: **What happened was (that)…**',
      },
      {
        id: 'm7l2-boss10',
        type: 'mcq',
        question: 'Which reply best corrects "So you quit because of the pay?"',
        options: [
          "It wasn't the pay that made me quit — it was the commute.",
          'What the pay was made me quit.',
          'The pay quit me, actually.',
        ],
        correct: 0,
        explanation:
          'Negative it-cleft for correction: **It wasn\'t X that… — it was Y.**',
      },
      {
        id: 'm7l2-boss11',
        type: 'sort',
        prompt: 'Which cleft opener fits?',
        buckets: ['What…', 'It was…', 'All…'],
        items: [
          { text: '___ I miss most is the noise of the market.', bucket: 0 },
          { text: '___ the intern who spotted the bug.', bucket: 1 },
          { text: '___ she took was one small suitcase — nothing else.', bucket: 2 },
          { text: '___ in Kyoto that we saw the temples.', bucket: 1 },
          { text: '___ made me smile was the handwritten note.', bucket: 0 },
          { text: '___ you need is a good map — nothing more.', bucket: 2 },
        ],
        explanation:
          'Wh-clefts introduce, it-clefts contrast, all-clefts minimise.',
      },
    ],
  },
};
