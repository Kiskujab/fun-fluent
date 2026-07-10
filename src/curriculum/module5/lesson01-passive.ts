import type { Lesson } from '../../types';

export const m5l1: Lesson = {
  id: 'm5l1',
  title: 'The Passive Voice',
  subtitle: 'all forms + have something done',
  minutes: 40,
  goals: [
    'Build the passive in every tense — including the tricky continuous ones',
    'Know when (and why) to choose passive over active',
    'Handle verbs with two objects: I was given a book',
    'Use have/get something done for services',
  ],
  cards: [
    {
      title: 'The passive machine',
      body: `**be (in the right tense) + past participle** — that is the whole machine:

> Present: The office **is cleaned** daily.
> Past: The bridge **was built** in 1890.
> Present perfect: The files **have been deleted**.
> Future: The winners **will be announced** at noon.

The doer, if mentioned at all, arrives with **by**:

> *Hamlet* **was written by** Shakespeare.`,
      miniCheck: {
        id: 'm5l1-c1',
        type: 'gap',
        before: 'The results',
        after: 'tomorrow morning. (announce — future)',
        hint: 'will / announce',
        accepted: ['will be announced'],
        explanation:
          'Future passive: **will be + past participle** → *will be announced*.',
      },
    },
    {
      title: 'Why bother with the passive?',
      body: `Use it when the **action matters more than the doer**:

- Doer unknown: My bike **has been stolen**!
- Doer obvious: He **was arrested**. (by police — who else?)
- Doer irrelevant: Rice **is grown** in Asia.
- Formal/scientific tone: The samples **were heated** to 90°C.

💡 It also controls information flow — put the known thing first, the news last:

> This painting is priceless. It **was painted by Vermeer**.`,
      miniCheck: {
        id: 'm5l1-c2',
        type: 'mcq',
        question: 'Which sentence has a good reason to be passive?',
        options: [
          'My wallet was stolen on the tram.',
          'A sandwich was eaten by me at lunch.',
          'The piano was played by my sister badly.',
        ],
        correct: 0,
        explanation:
          'Unknown doer → perfect passive material. The others just bury a perfectly good subject.',
      },
    },
    {
      title: 'The tricky tenses: continuous & modals',
      body: `Continuous passive = **being + past participle**:

> The road **is being repaired** — expect delays.
> When I arrived, the room **was still being painted**.

Modal passive = **modal + be + past participle**:

> Applications **must be submitted** by Friday.
> This **could have been avoided**.`,
      miniCheck: {
        id: 'm5l1-c3',
        type: 'gap',
        before: 'Quiet please — the show',
        after: 'live right now! (record)',
        hint: 'record',
        accepted: ['is being recorded'],
        explanation:
          'Happening right now → present continuous passive: **is being recorded**.',
      },
    },
    {
      title: 'Two objects, two passives',
      body: `Verbs like **give, send, offer, show, tell, promise** have two objects — so two passive versions:

> Active: They gave **Maria** *the job*.
> Passive 1: **Maria was given** the job. ← usually the natural one
> Passive 2: **The job was given** to Maria.

English loves making the **person** the subject:

> I **was told** the news. · We **were shown** the plans. · She **has been offered** a raise.`,
      miniCheck: {
        id: 'm5l1-c4',
        type: 'gap',
        before: 'We',
        after: 'a full refund by the airline. (promise — past)',
        hint: 'promise',
        accepted: ['were promised'],
        explanation:
          'Person as subject: **were promised** a refund.',
      },
    },
    {
      title: 'have something done',
      body: `When a professional does it **for you**, use **have + object + past participle**:

> I **had my hair cut** yesterday. (the hairdresser did it)
> We're **having the roof repaired** next week.
> She **has her car serviced** twice a year.

Compare: *I cut my hair* = you did it yourself (brave).

It also covers things done **to** you, uninvited:

> He **had his phone stolen** on holiday.`,
      miniCheck: {
        id: 'm5l1-c5',
        type: 'mcq',
        question: 'My eyes hurt — I need to ___ .',
        options: ['have them tested', 'test them by an optician', 'have tested them'],
        correct: 0,
        explanation:
          'Service done by a professional → **have + object + past participle**: *have them tested*.',
      },
    },
    {
      title: 'get: the informal twin',
      body: `**get** can replace *be* and *have* in casual English:

**get passive** (often accidents or surprises):

> He **got caught** cheating. · The window **got broken** in the storm.

**get something done** (= have something done, chattier):

> I must **get my laptop fixed**. · She **got her ears pierced** at sixteen.

Keep *be*-passives for formal writing; *get* is for conversation.`,
      miniCheck: {
        id: 'm5l1-c6',
        type: 'gap',
        before: 'You really should get that tooth',
        after: 'at — it looks swollen. (look)',
        hint: 'look',
        accepted: ['looked'],
        explanation:
          '**get + object + past participle**: *get that tooth looked at*.',
      },
    },
  ],
  sets: [
    {
      title: 'Tense Machine',
      icon: '🏭',
      exercises: [
        {
          id: 'm5l1-a1',
          type: 'gap',
          before: 'This castle',
          after: 'in the twelfth century. (build)',
          hint: 'build',
          accepted: ['was built'],
          explanation: 'Past simple passive: **was built**.',
        },
        {
          id: 'm5l1-a2',
          type: 'gap',
          before: 'Over two million cups of tea',
          after: 'in Britain every day. (drink)',
          hint: 'drink',
          accepted: ['are drunk'],
          explanation: 'Present simple passive, plural: **are drunk**.',
        },
        {
          id: 'm5l1-a3',
          type: 'mcq',
          question: 'The suspect ___ at this very moment.',
          options: ['is being questioned', 'is questioned', 'is questioning'],
          correct: 0,
          explanation:
            'Right now → present continuous passive: **is being questioned**.',
        },
        {
          id: 'm5l1-a4',
          type: 'gap',
          before: 'By the time we arrived, all the tickets',
          after: '. (already / sell)',
          hint: 'already / sell',
          accepted: ['had already been sold', 'had been sold'],
          explanation:
            'Earlier than a past moment → past perfect passive: **had (already) been sold**.',
        },
        {
          id: 'm5l1-a5',
          type: 'error-hunt',
          sentence: 'A new hospital is been built on the edge of town.',
          wrongIndex: 4,
          correction: 'being',
          explanation:
            'Continuous passive = is **being** built, not *is been*.',
        },
        {
          id: 'm5l1-a6',
          type: 'transform',
          source: 'Someone has hacked the company database.',
          keyword: 'been',
          before: 'The company database',
          after: '.',
          accepted: ['has been hacked'],
          explanation:
            'Present perfect passive: **has been hacked** — doer unknown, so drop *someone*.',
        },
        {
          id: 'm5l1-a7',
          type: 'mcq',
          question: 'Helmets ___ at all times on the building site.',
          options: ['must be worn', 'must be wear', 'must worn'],
          correct: 0,
          explanation:
            'Modal passive: **modal + be + past participle** → *must be worn*.',
        },
        {
          id: 'm5l1-a8',
          type: 'order',
          correct: 'The missing painting has never been found',
          explanation:
            'Present perfect passive with *never*: **has never been found**.',
        },
        {
          id: 'm5l1-a9',
          type: 'sort',
          prompt: 'Active or passive?',
          buckets: ['active', 'passive'],
          items: [
            { text: 'The cake was eaten in minutes.', bucket: 1 },
            { text: 'Somebody ate the cake in minutes.', bucket: 0 },
            { text: 'The roads are being resurfaced.', bucket: 1 },
            { text: 'The council is resurfacing the roads.', bucket: 0 },
            { text: 'He could have been warned.', bucket: 1 },
            { text: 'They could have warned him.', bucket: 0 },
          ],
          explanation:
            'Passive = a form of **be + past participle**; the subject receives the action.',
        },
      ],
    },
    {
      title: 'People First',
      icon: '🎁',
      exercises: [
        {
          id: 'm5l1-b1',
          type: 'transform',
          source: 'They offered Klara a place at the conservatoire.',
          keyword: 'was',
          before: 'Klara',
          after: 'a place at the conservatoire.',
          accepted: ['was offered'],
          explanation:
            'Person as subject: **Klara was offered** a place.',
        },
        {
          id: 'm5l1-b2',
          type: 'gap',
          before: 'The staff',
          after: 'about the changes only yesterday. (tell)',
          hint: 'tell',
          accepted: ['were told', 'were only told'],
          explanation: 'Person-subject passive: **were told**.',
        },
        {
          id: 'm5l1-b3',
          type: 'mcq',
          question: 'Which version sounds most natural?',
          options: [
            'I was sent the wrong invoice.',
            'The wrong invoice was sent to I.',
            'Me was sent the wrong invoice.',
          ],
          correct: 0,
          explanation:
            'English happily makes the person the subject: **I was sent** the invoice.',
        },
        {
          id: 'm5l1-b4',
          type: 'order',
          correct: 'We were shown the whole factory by the manager',
          explanation:
            'Person-subject passive + *by* phrase: **were shown... by the manager**.',
        },
        {
          id: 'm5l1-b5',
          type: 'error-hunt',
          sentence: 'A gold medal was gave to the youngest swimmer.',
          wrongIndex: 4,
          correction: 'given',
          explanation:
            'Passive needs the **past participle**: *was given*, not *was gave*.',
        },
        {
          id: 'm5l1-b6',
          type: 'transform',
          source: 'Nobody has told us the reason for the delay.',
          keyword: 'been',
          before: 'We',
          after: 'the reason for the delay.',
          accepted: ["haven't been told", 'have not been told'],
          explanation:
            'Present perfect passive, negative: **haven\'t been told**.',
        },
        {
          id: 'm5l1-b7',
          type: 'gap',
          before: 'Every finalist',
          after: 'a certificate and a medal. (give — present simple)',
          hint: 'give',
          accepted: ['is given'],
          explanation: 'Present simple passive: **is given**.',
        },
        {
          id: 'm5l1-b8',
          type: 'mcq',
          question: 'The astronauts ___ a hero\'s welcome when they land.',
          options: ['will be given', 'will give', 'will be gave'],
          correct: 0,
          explanation:
            'Future passive, person as subject: **will be given**.',
        },
      ],
    },
    {
      title: 'The Service Desk',
      icon: '💈',
      exercises: [
        {
          id: 'm5l1-d1',
          type: 'mcq',
          question: 'Your hair looks great! Where did you ___ ?',
          options: ['have it done', 'do it', 'have done it'],
          correct: 0,
          explanation:
            'A professional did it → **have it done**. Word order: have + object + participle.',
        },
        {
          id: 'm5l1-d2',
          type: 'gap',
          before: 'We are having the kitchen',
          after: 'next month — chaos incoming. (redecorate)',
          hint: 'redecorate',
          accepted: ['redecorated'],
          explanation:
            '**have + object + past participle**: *having the kitchen redecorated*.',
        },
        {
          id: 'm5l1-d3',
          type: 'error-hunt',
          sentence: 'I had cut my hair before the wedding last June.',
          wrongIndex: 2,
          correction: 'my hair cut',
          explanation:
            '*I had cut my hair* = you did it yourself. Service → **had my hair cut** — object before participle.',
        },
        {
          id: 'm5l1-d4',
          type: 'transform',
          source: 'A mechanic checks my brakes every spring.',
          keyword: 'have',
          before: 'I',
          after: 'every spring.',
          accepted: ['have my brakes checked'],
          explanation:
            'Service structure: **have my brakes checked**.',
        },
        {
          id: 'm5l1-d5',
          type: 'mcq',
          question: 'Poor Leo ___ his passport stolen on the first day of the trip.',
          options: ['had', 'was', 'got to'],
          correct: 0,
          explanation:
            '*have sth done* also covers misfortunes: **had his passport stolen**.',
        },
        {
          id: 'm5l1-d6',
          type: 'gap',
          before: 'The screen is cracked — I must get it',
          after: 'this week. (replace)',
          hint: 'replace',
          accepted: ['replaced'],
          explanation:
            'Informal service structure: **get it replaced**.',
        },
        {
          id: 'm5l1-d7',
          type: 'sort',
          prompt: 'Did they do it themselves, or arrange a service?',
          buckets: ['did it themselves', 'arranged a service'],
          items: [
            { text: 'She painted the fence.', bucket: 0 },
            { text: 'She had the fence painted.', bucket: 1 },
            { text: 'We got the piano tuned.', bucket: 1 },
            { text: 'We tuned the piano.', bucket: 0 },
            { text: 'He is having a suit made.', bucket: 1 },
            { text: 'He is making a suit.', bucket: 0 },
          ],
          explanation:
            '**have/get + object + participle** = someone else does it for you.',
        },
        {
          id: 'm5l1-d8',
          type: 'order',
          correct: 'She got her wisdom teeth taken out last week',
          explanation:
            'Informal service structure: **got her wisdom teeth taken out**.',
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm5l1-e1',
          type: 'speed',
          secondsPerItem: 8,
          explanation: 'Passive at full speed!',
          items: [
            {
              question: 'The email ___ yesterday.',
              options: ['was sent', 'was send'],
              correct: 0,
            },
            {
              question: 'The road is ___ repaired.',
              options: ['being', 'been'],
              correct: 0,
            },
            {
              question: 'She ___ the job last week.',
              options: ['was offered', 'was offer'],
              correct: 0,
            },
            {
              question: 'Seatbelts must ___ at all times.',
              options: ['be worn', 'been worn'],
              correct: 0,
            },
            {
              question: "I'm having my eyes ___ tomorrow.",
              options: ['tested', 'testing'],
              correct: 0,
            },
            {
              question: 'My phone ___ stolen at the festival.',
              options: ['got', 'did'],
              correct: 0,
            },
            {
              question: 'Dinner ___ served at eight.',
              options: ['is', 'is being always'],
              correct: 0,
            },
            {
              question: 'The bridge has ___ rebuilt twice.',
              options: ['been', 'being'],
              correct: 0,
            },
            {
              question: 'We got the locks ___ .',
              options: ['changed', 'change'],
              correct: 0,
            },
            {
              question: 'This wine ___ in small barrels.',
              options: ['is aged', 'ages itself'],
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
        id: 'm5l1-boss1',
        type: 'gap',
        before: 'The lost city',
        after: 'by archaeologists in 1911. (discover)',
        hint: 'discover',
        accepted: ['was discovered'],
        explanation: 'Past simple passive: **was discovered**.',
      },
      {
        id: 'm5l1-boss2',
        type: 'mcq',
        question: 'Sorry about the noise — the lift ___ this week.',
        options: ['is being repaired', 'is repairing', 'repairs'],
        correct: 0,
        explanation:
          'Ongoing work on the lift → present continuous passive: **is being repaired**.',
      },
      {
        id: 'm5l1-boss3',
        type: 'transform',
        source: 'They will announce the shortlist on Monday.',
        keyword: 'be',
        before: 'The shortlist',
        after: 'on Monday.',
        accepted: ['will be announced'],
        explanation: 'Future passive: **will be announced**.',
      },
      {
        id: 'm5l1-boss4',
        type: 'error-hunt',
        sentence: 'The message should have been wrote in English.',
        wrongIndex: 5,
        correction: 'written',
        explanation:
          'Passive always needs the **past participle**: *should have been written*.',
      },
      {
        id: 'm5l1-boss5',
        type: 'transform',
        source: 'Somebody showed the visitors the secret garden.',
        keyword: 'were',
        before: 'The visitors',
        after: 'the secret garden.',
        accepted: ['were shown'],
        explanation:
          'Person as subject: **The visitors were shown** the garden.',
      },
      {
        id: 'm5l1-boss6',
        type: 'mcq',
        question: 'We ___ our chimney swept every autumn.',
        options: ['have', 'are', 'make'],
        correct: 0,
        explanation:
          'Service structure: **have + object + past participle**.',
      },
      {
        id: 'm5l1-boss7',
        type: 'gap',
        before: 'He had his car',
        after: 'while it was parked outside the station. (break into)',
        hint: 'break into',
        accepted: ['broken into'],
        explanation:
          'Misfortune with *have sth done*: **had his car broken into**.',
      },
      {
        id: 'm5l1-boss8',
        type: 'order',
        correct: 'All complaints must be submitted in writing',
        explanation:
          'Modal passive: **must be submitted**.',
      },
      {
        id: 'm5l1-boss9',
        type: 'mcq',
        question: 'By next year, the whole line ___ to driverless trains.',
        options: [
          'will have been converted',
          'will have converted itself',
          'is been converted',
        ],
        correct: 0,
        explanation:
          'Future perfect passive: **will have been converted** — complete before a future point.',
      },
      {
        id: 'm5l1-boss10',
        type: 'transform',
        source: 'A local tailor makes all his suits.',
        keyword: 'has',
        before: 'He',
        after: 'by a local tailor.',
        accepted: ['has all his suits made', 'has his suits made'],
        explanation:
          'Service structure: **has his suits made** by a tailor.',
      },
      {
        id: 'm5l1-boss11',
        type: 'sort',
        prompt: 'be-passive, get-passive, or have-something-done?',
        buckets: ['be-passive', 'get-passive', 'have sth done'],
        items: [
          { text: 'The law was passed in May.', bucket: 0 },
          { text: 'He got soaked in the storm.', bucket: 1 },
          { text: 'She had her portrait painted.', bucket: 2 },
          { text: 'The gate got damaged overnight.', bucket: 1 },
          { text: 'The report has been approved.', bucket: 0 },
          { text: "We're having the windows cleaned.", bucket: 2 },
        ],
        explanation:
          '*be* = neutral/formal · *get* = informal, often accidents · *have sth done* = arranged services.',
      },
    ],
  },
};
