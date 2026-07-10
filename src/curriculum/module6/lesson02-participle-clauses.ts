import type { Lesson } from '../../types';

export const m6l2: Lesson = {
  id: 'm6l2',
  title: 'Participle Clauses',
  subtitle: 'having finished, seen from above',
  minutes: 45,
  goals: [
    'Compress sentences with -ing clauses: Feeling tired, I left',
    'Use past participles for passive meaning: Seen from above…',
    'Sequence events with having done',
    'Dodge the infamous dangling participle',
  ],
  cards: [
    {
      title: 'The compression tool',
      body: `Participle clauses squeeze two sentences into one — the mark of fluent writing:

> Because I felt tired, I went home early.
> → **Feeling tired**, I went home early.

> The road that connects the villages is closed.
> → The road **connecting the villages** is closed.

One rule above all: the hidden subject of the participle **must equal** the subject of the main clause.`,
      miniCheck: {
        id: 'm6l2-c1',
        type: 'gap',
        before: '',
        after: 'the price, she decided to wait for the sales. (see)',
        hint: 'see',
        accepted: ['seeing'],
        explanation:
          '*When she saw the price…* → **Seeing** the price, she decided…',
      },
    },
    {
      title: '-ing clauses: active meaning',
      body: `The present participle covers reasons, time, and simultaneous actions:

> **Not knowing** the area, we hired a guide. (reason — note *not* goes first)
> She sat by the window, **watching the rain**. (at the same time)
> **Opening the box**, he gasped. (one action, then immediately the next)

It even replaces relative pronouns:

> the woman **standing** by the door = the woman *who is standing*`,
      miniCheck: {
        id: 'm6l2-c2',
        type: 'gap',
        before: '',
        after: 'what to say, I simply stayed quiet. (know — negative!)',
        hint: 'not / know',
        accepted: ['not knowing'],
        explanation:
          'Negative participle clause: **Not knowing** what to say…',
      },
    },
    {
      title: 'Past participles: passive meaning',
      body: `The past participle compresses **passive** clauses:

> **Seen from above**, the maze looks simple. (= when it is seen)
> **Built in a hurry**, the wall soon collapsed. (= because it was built)
> the money **stolen from the vault** = the money *that was stolen*

-ing = the subject **does** it · -ed = the subject **receives** it.`,
      miniCheck: {
        id: 'm6l2-c3',
        type: 'mcq',
        question: '___ in 1900, the villa still has its original tiles.',
        options: ['Built', 'Building', 'Having built'],
        correct: 0,
        explanation:
          'The villa **was built** — passive → past participle: **Built in 1900,…**',
      },
    },
    {
      title: 'having done: first this, then that',
      body: `To make clear one action **finished before** the other, use the perfect participle:

> **Having finished** the report, she finally allowed herself a biscuit.
> **Having lived** in Rome for years, he knew every backstreet.

Passive version — **having been done**:

> **Having been warned** twice, he had no excuse.`,
      miniCheck: {
        id: 'm6l2-c4',
        type: 'gap',
        before: '',
        after: 'all his money, he walked home from the casino. (lose)',
        hint: 'lose — earlier action',
        accepted: ['having lost'],
        explanation:
          'The losing came first → perfect participle: **Having lost** all his money…',
      },
    },
    {
      title: 'After conjunctions & prepositions',
      body: `Participles also follow certain little words:

> **While waiting** for the bus, I read a chapter.
> **Before leaving**, check the windows. · **After signing**, you cannot withdraw.
> **When asked** about it, she smiled. (passive!)
> **If elected**, I will serve everyone.
> **Despite being** injured, he played on. · **On hearing** the news, she wept.`,
      miniCheck: {
        id: 'm6l2-c5',
        type: 'mcq',
        question: 'When ___ about the missing funds, the treasurer went pale.',
        options: ['questioned', 'questioning', 'to question'],
        correct: 0,
        explanation:
          'The treasurer **was questioned** → passive → **When questioned,…**',
      },
    },
    {
      title: 'The dangling participle 💀',
      body: `The classic crime: a participle whose subject is **not** the main subject.

> ~~**Walking to work**, the rain soaked me.~~ (the rain was walking?!)
> ✔ **Walking to work**, I got soaked.

> ~~**Having eaten the homework**, Timmy blamed the dog.~~ (who ate it? As written: Timmy!)
> ✔ **The dog having eaten the homework**, Timmy had no excuse. (subject stated — an "absolute" clause)

Always ask: *who is doing the -ing?* If it isn't the main subject, rewrite.`,
      tip: 'Newspapers dangle participles daily. Spotting them is a C2 superpower — and excellent smug fun.',
      miniCheck: {
        id: 'm6l2-c6',
        type: 'mcq',
        question: 'Which sentence dangles?',
        options: [
          'Driving home, a deer crossed the road in front of me.',
          'Driving home, I saw a deer cross the road.',
        ],
        correct: 0,
        explanation:
          'In the first, the deer seems to be driving. The -ing subject must be the main subject.',
      },
    },
  ],
  sets: [
    {
      title: 'The Compressor',
      icon: '🗜️',
      exercises: [
        {
          id: 'm6l2-a1',
          type: 'transform',
          source: 'Because she felt nervous, she rehearsed her speech again.',
          keyword: 'feeling',
          before: '',
          after: 'nervous, she rehearsed her speech again.',
          accepted: ['feeling'],
          explanation:
            'Reason clause → present participle: **Feeling** nervous,…',
        },
        {
          id: 'm6l2-a2',
          type: 'transform',
          source: 'The train that leaves at noon is always crowded.',
          keyword: 'leaving',
          before: 'The train',
          after: 'at noon is always crowded.',
          accepted: ['leaving'],
          explanation:
            'Relative clause → participle: *the train **leaving** at noon*.',
        },
        {
          id: 'm6l2-a3',
          type: 'gap',
          before: '',
          after: 'any cash on me, I had to pay by card. (have — negative)',
          hint: 'not / have',
          accepted: ['not having'],
          explanation:
            'Negative participle: **Not having** any cash…',
        },
        {
          id: 'm6l2-a4',
          type: 'mcq',
          question: 'She lay on the sofa, ___ to her favourite podcast.',
          options: ['listening', 'listened', 'having been listened'],
          correct: 0,
          explanation:
            'Simultaneous active action → **listening**.',
        },
        {
          id: 'm6l2-a5',
          type: 'order',
          correct: 'Smiling broadly the champion lifted the trophy',
          explanation:
            'Participle clause first, then the main clause: **Smiling broadly**, the champion…',
        },
        {
          id: 'm6l2-a6',
          type: 'error-hunt',
          sentence: 'Knowing not the password, I could not log in.',
          wrongIndex: 1,
          correction: 'Not knowing',
          explanation:
            'The negative goes **before** the participle: **Not knowing** the password.',
        },
        {
          id: 'm6l2-a7',
          type: 'mcq',
          question: 'Which pair matches the participle sentence "Hearing the alarm, everyone left"?',
          options: [
            'When they heard the alarm, everyone left.',
            'Although they heard the alarm, everyone left.',
            'Unless they heard the alarm, everyone left.',
          ],
          correct: 0,
          explanation:
            'Participle clauses usually unpack as *when/because* — here: *When they heard…*',
        },
        {
          id: 'm6l2-a8',
          type: 'transform',
          source: 'The chef who created this dessert trained in Lyon.',
          keyword: 'who',
          before: 'The chef',
          after: 'this dessert trained in Lyon. (participle)',
          accepted: ['creating', 'who created'],
          explanation:
            'Relative → participle: *the chef **creating** this dessert* (though *who created* stays fine too).',
        },
      ],
    },
    {
      title: 'Passive Sculptures',
      icon: '🗿',
      exercises: [
        {
          id: 'm6l2-b1',
          type: 'mcq',
          question: '___ in plastic, the sandwiches survived the rain.',
          options: ['Wrapped', 'Wrapping', 'To wrap'],
          correct: 0,
          explanation:
            'The sandwiches **were wrapped** → past participle: **Wrapped** in plastic.',
        },
        {
          id: 'm6l2-b2',
          type: 'gap',
          before: 'The novel,',
          after: 'into forty languages, made her famous. (translate)',
          hint: 'translate',
          accepted: ['translated'],
          explanation:
            'The novel **was translated** → **translated into forty languages**.',
        },
        {
          id: 'm6l2-b3',
          type: 'sort',
          prompt: '-ing (active) or -ed (passive)?',
          buckets: ['-ing (does it)', '-ed (receives it)'],
          items: [
            { text: '___ by the news, she sat down. (shock)', bucket: 1 },
            { text: '___ the news, she sat down. (hear)', bucket: 0 },
            { text: 'the man ___ the piano (play)', bucket: 0 },
            { text: 'the piano ___ by the man (play)', bucket: 1 },
            { text: '___ from the tower, the city glows. (view)', bucket: 1 },
            { text: '___ from the tower, we saw the city glow. (look down)', bucket: 0 },
          ],
          explanation:
            'Subject does the action → -ing. Subject receives it → past participle.',
        },
        {
          id: 'm6l2-b4',
          type: 'error-hunt',
          sentence: 'Serving with rice, this curry is a perfect dinner.',
          wrongIndex: 0,
          correction: 'Served',
          explanation:
            'The curry **is served** → passive → **Served** with rice. (*Serving* would mean the curry is the waiter.)',
        },
        {
          id: 'm6l2-b5',
          type: 'transform',
          source: 'Because it was written in haste, the email was full of typos.',
          keyword: 'written',
          before: '',
          after: 'in haste, the email was full of typos.',
          accepted: ['written'],
          explanation:
            'Passive reason clause → past participle: **Written** in haste,…',
        },
        {
          id: 'm6l2-b6',
          type: 'mcq',
          question: 'If ___ , shake well before use.',
          options: ['frozen', 'freezing', 'froze'],
          correct: 0,
          explanation:
            '*If it is frozen* → **If frozen** — conjunction + past participle.',
        },
        {
          id: 'm6l2-b7',
          type: 'order',
          correct: 'When asked about her plans she just laughed',
          explanation:
            '*When (she was) asked* — conjunction + passive participle.',
        },
        {
          id: 'm6l2-b8',
          type: 'gap',
          before: 'Anyone',
          after: 'nearby is asked to contact the police. (see — the person saw something!)',
          hint: 'see + -ing? -ed?',
          accepted: ['seeing anything', 'seeing something'],
          explanation:
            'The person actively saw → **-ing**: *Anyone seeing anything nearby…*',
        },
      ],
    },
    {
      title: 'Sequence & Danger Zone',
      icon: '🧗',
      exercises: [
        {
          id: 'm6l2-d1',
          type: 'transform',
          source: 'After he had checked the locks twice, he finally went to bed.',
          keyword: 'having',
          before: '',
          after: 'the locks twice, he finally went to bed.',
          accepted: ['having checked'],
          explanation:
            'Completed earlier action → **Having checked** the locks twice,…',
        },
        {
          id: 'm6l2-d2',
          type: 'mcq',
          question: '___ as a spy for years, she trusted no one.',
          options: ['Having worked', 'Working since', 'Worked'],
          correct: 0,
          explanation:
            'Long earlier experience explaining the present → **Having worked**.',
        },
        {
          id: 'm6l2-d3',
          type: 'gap',
          before: '',
          after: 'been warned about the ice, the driver still took the mountain road. (have)',
          hint: 'have — passive perfect',
          accepted: ['having'],
          explanation:
            'Perfect passive participle: **Having been warned**,…',
        },
        {
          id: 'm6l2-d4',
          type: 'mcq',
          question: 'Spot the dangling participle:',
          options: [
            'Having arrived late, the concert had already started when we sat down.',
            'Having arrived late, we missed the opening song.',
            'Having arrived late, the students apologised to the lecturer.',
          ],
          correct: 0,
          explanation:
            'The concert did not arrive late — **we** did. The -ing subject must match the main subject.',
        },
        {
          id: 'm6l2-d5',
          type: 'mcq',
          question: 'Fix the dangler: "Running for the bus, my phone fell out of my pocket." →',
          options: [
            'Running for the bus, I dropped my phone.',
            'Running for the bus, my phone escaped.',
            'My phone, running for the bus, fell.',
          ],
          correct: 0,
          explanation:
            'Make the runner the subject: *Running for the bus, **I** dropped my phone.*',
        },
        {
          id: 'm6l2-d6',
          type: 'order',
          correct: 'Having saved enough money they bought a tiny boat',
          explanation:
            'First the saving, then the buying → **Having saved** enough money,…',
        },
        {
          id: 'm6l2-d7',
          type: 'error-hunt',
          sentence: 'After have read the reviews, we chose a different hotel.',
          wrongIndex: 1,
          correction: 'having',
          explanation:
            'After a conjunction/preposition → participle: **After having read** (or simply *After reading*).',
        },
        {
          id: 'm6l2-d8',
          type: 'sort',
          prompt: 'Dangling or correct?',
          buckets: ['dangles 💀', 'correct ✓'],
          items: [
            { text: 'Opening the fridge, the milk had gone off.', bucket: 0 },
            { text: 'Opening the fridge, I smelled the sour milk.', bucket: 1 },
            { text: 'Trained since childhood, the gymnast made it look easy.', bucket: 1 },
            { text: 'Walking through the park, the statue impressed me.', bucket: 0 },
            { text: 'Having missed lunch, the meeting felt endless to Sam.', bucket: 0 },
            { text: 'Having missed lunch, Sam found the meeting endless.', bucket: 1 },
          ],
          explanation:
            'Ask *who does the participle?* — if the main subject cannot do it, it dangles.',
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm6l2-e1',
          type: 'speed',
          secondsPerItem: 8,
          explanation: 'Participles at full speed!',
          items: [
            {
              question: '___ tired, she went to bed.',
              options: ['Feeling', 'Felt'],
              correct: 0,
            },
            {
              question: '___ in Japan, the camera is superb.',
              options: ['Made', 'Making'],
              correct: 0,
            },
            {
              question: '___ finished dinner, we washed up.',
              options: ['Having', 'Being'],
              correct: 0,
            },
            {
              question: 'While ___ , he whistles.',
              options: ['cooking', 'cooked'],
              correct: 0,
            },
            {
              question: 'If ___ , call this number.',
              options: ['lost', 'losing'],
              correct: 0,
            },
            {
              question: 'the boy ___ by the gate',
              options: ['standing', 'stood'],
              correct: 0,
            },
            {
              question: 'the letters ___ this morning',
              options: ['delivered', 'delivering'],
              correct: 0,
            },
            {
              question: '___ knowing the rules, I asked.',
              options: ['Not', 'No'],
              correct: 0,
            },
            {
              question: 'On ___ the news, he fainted.',
              options: ['hearing', 'heard'],
              correct: 0,
            },
            {
              question: '___ been told twice, she knew.',
              options: ['Having', 'Being had'],
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
        id: 'm6l2-boss1',
        type: 'transform',
        source: 'Because he did not understand the question, he asked for help.',
        keyword: 'not',
        before: '',
        after: 'the question, he asked for help.',
        accepted: ['not understanding'],
        explanation:
          'Negative participle clause: **Not understanding** the question,…',
      },
      {
        id: 'm6l2-boss2',
        type: 'mcq',
        question: '___ from fresh basil, the pesto tasted incredible.',
        options: ['Made', 'Making', 'Having made'],
        correct: 0,
        explanation:
          'The pesto **was made** → past participle: **Made** from fresh basil.',
      },
      {
        id: 'm6l2-boss3',
        type: 'gap',
        before: '',
        after: 'the marathon, she treated herself to a mountain of pasta. (run — earlier)',
        hint: 'run',
        accepted: ['having run'],
        explanation:
          'Completed first → perfect participle: **Having run** the marathon,…',
      },
      {
        id: 'm6l2-boss4',
        type: 'mcq',
        question: 'Which sentence is grammatically safe?',
        options: [
          'Having been repaired, my bike rode like new.',
          'Having been repaired, the mechanic returned my bike.',
          'Having been repaired, I collected my bike.',
        ],
        correct: 0,
        explanation:
          'The **bike** was repaired — so the bike must be the main subject.',
      },
      {
        id: 'm6l2-boss5',
        type: 'error-hunt',
        sentence: 'Exhausting by the climb, the hikers set up camp early.',
        wrongIndex: 0,
        correction: 'Exhausted',
        explanation:
          'The hikers **were exhausted** → past participle: **Exhausted** by the climb.',
      },
      {
        id: 'm6l2-boss6',
        type: 'order',
        correct: 'When interviewed the astronaut described the view of Earth',
        explanation:
          '*When (she was) interviewed* — conjunction + passive participle.',
      },
      {
        id: 'm6l2-boss7',
        type: 'transform',
        source: 'The paintings that were recovered from the cellar are priceless.',
        keyword: 'recovered',
        before: 'The paintings',
        after: 'from the cellar are priceless.',
        accepted: ['recovered'],
        explanation:
          'Passive relative clause → past participle: *the paintings **recovered** from the cellar*.',
      },
      {
        id: 'm6l2-boss8',
        type: 'mcq',
        question: '___ the door unlocked, the burglars simply walked in.',
        options: ['Finding', 'Found', 'Having found by'],
        correct: 0,
        explanation:
          'The burglars actively found it → **Finding** the door unlocked.',
      },
      {
        id: 'm6l2-boss9',
        type: 'gap',
        before: 'Despite',
        after: 'twice about the deadline, he still submitted late. (remind — passive!)',
        hint: 'be / remind',
        accepted: ['being reminded', 'having been reminded'],
        explanation:
          'After *despite* → gerund; he received the reminders → **being reminded**.',
      },
      {
        id: 'm6l2-boss10',
        type: 'sort',
        prompt: 'Dangling or correct?',
        buckets: ['dangles 💀', 'correct ✓'],
        items: [
          { text: 'Flying over the Alps, the peaks looked like meringue.', bucket: 0 },
          { text: 'Flying over the Alps, we gazed at the peaks.', bucket: 1 },
          { text: 'Written in 1605, the play still fills theatres.', bucket: 1 },
          { text: 'Barking furiously, the postman fled from the dog.', bucket: 0 },
          { text: 'Having lost his keys, Milo slept on the doormat.', bucket: 1 },
        ],
        explanation:
          'The participle must belong to the main subject — peaks don\'t fly planes, postmen don\'t bark. Usually.',
      },
      {
        id: 'm6l2-boss11',
        type: 'transform',
        source: 'After she had been given the award, she thanked her whole team.',
        keyword: 'having',
        before: '',
        after: 'the award, she thanked her whole team.',
        accepted: ['having been given'],
        explanation:
          'Perfect passive participle: **Having been given** the award,…',
      },
    ],
  },
};
