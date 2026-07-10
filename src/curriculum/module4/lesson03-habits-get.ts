import type { Lesson } from '../../types';

export const m4l3: Lesson = {
  id: 'm4l3',
  title: 'Habit Machines',
  subtitle: 'used to · be used to · get used to · get',
  minutes: 35,
  goals: [
    'Separate the three used-to machines once and for all',
    'Know when used to needs a base verb and when -ing',
    'Handle negatives and questions: did you use to...?',
    'Unlock the many faces of get',
  ],
  cards: [
    {
      title: 'Machine 1: used to + base verb',
      body: `**used to + infinitive** = past habits and states that are now over:

> I **used to play** the violin. (I don't any more.)
> There **used to be** a cinema here.

Negatives and questions borrow *did* — and drop the *-d*:

> I **didn't use to like** olives. · **Did** you **use to walk** to school?

⚠️ It only exists in the past. For present habits, use *usually*: I **usually walk** to work — not ~~I use to walk~~.`,
      miniCheck: {
        id: 'm4l3-c1',
        type: 'mcq',
        question: '___ to have long hair when you were a student?',
        options: ['Did you use', 'Did you used', 'Do you use'],
        correct: 0,
        explanation:
          'With *did*, the *-d* drops: **Did you use to...?**',
      },
    },
    {
      title: 'Machine 2: be used to + -ing',
      body: `**be used to + -ing/noun** = something is **familiar, normal** for you — no shock left:

> She**'s used to working** nights. (It's her normal life.)
> I**'m not used to this heat**. (It still shocks me.)

The *to* here is a **preposition** — that's why the verb wears **-ing**:

> He's used **to driving** on the left. — not ~~used to drive~~`,
      miniCheck: {
        id: 'm4l3-c2',
        type: 'gap',
        before: 'Nurses are used to',
        after: 'very early. (get up)',
        hint: 'get up',
        accepted: ['getting up'],
        explanation:
          '*be used to* + **-ing**: *used to getting up* — it is normal for them.',
      },
    },
    {
      title: 'Machine 3: get used to + -ing',
      body: `**get used to + -ing/noun** = the **process** of something becoming normal:

> I'm slowly **getting used to living** alone.
> You'll **get used to the noise** — give it a month.
> It took her ages to **get used to being** called "Doctor".

Think of it as the journey; *be used to* is the destination.`,
      miniCheck: {
        id: 'm4l3-c3',
        type: 'mcq',
        question: "Don't worry — you'll soon get used ___ with chopsticks.",
        options: ['to eating', 'to eat', 'eating'],
        correct: 0,
        explanation:
          '*get used TO* (preposition) + **-ing**: *get used to eating*.',
      },
    },
    {
      title: 'The triple contrast',
      body: `One verb, three machines — watch the meaning shift:

> I **used to drive** to work. (past habit, finished)
> I**'m used to driving** in traffic. (normal for me now)
> I**'m getting used to driving** on the right. (becoming normal)

The question to ask: **finished past habit? current normality? or transition?**`,
      miniCheck: {
        id: 'm4l3-c4',
        type: 'mcq',
        question: 'When we lived in Rome, I ___ espresso every morning.',
        options: ['used to drink', 'was used to drink', 'got used to drink'],
        correct: 0,
        explanation:
          'Finished past habit → **used to + base verb**. The other options would need *-ing* anyway.',
      },
    },
    {
      title: 'would for past habits — the stylish cousin',
      body: `**would + base verb** can also describe repeated past actions — great for storytelling:

> Every summer we **would cycle** to the lake and **would swim** till dusk.

⚠️ But *would* only works for **actions**, never states:

> I **used to have** a dog. — not ~~I would have a dog~~
> There **used to be** a bakery here. — not ~~would be~~`,
      miniCheck: {
        id: 'm4l3-c5',
        type: 'mcq',
        question: 'Which sentence is WRONG?',
        options: [
          'We would own a caravan in the 80s.',
          'We would spend hours on the beach.',
          'Grandad would tell us ghost stories.',
        ],
        correct: 0,
        explanation:
          '*own* is a state verb — states need **used to**, not *would*.',
      },
    },
    {
      title: 'The many faces of get',
      body: `*get* is the Swiss Army knife of English. Its core meanings:

- **get = become** (+ adjective): It's **getting dark**. · He **got angry**.
- **get = receive/obtain**: She **got an email**. · I **got a new phone**.
- **get = arrive**: What time did you **get home**?
- **get = fetch/bring**: Can you **get me a glass** of water?

> The days are **getting shorter**. · We **got to the station** at six.`,
      miniCheck: {
        id: 'm4l3-c6',
        type: 'mcq',
        question: 'In "It took us two hours to get to the coast", get means...',
        options: ['arrive', 'become', 'receive'],
        correct: 0,
        explanation: '*get to + place* = **arrive at**: *get to the coast*.',
      },
    },
    {
      title: 'get + comparative: the change machine',
      body: `Pair *get* with a comparative to show **gradual change**:

> Your English is **getting better** every week.
> The queue is **getting longer** and **longer**.
> It **gets harder** to stay awake after lunch.

Double the comparative for drama: **more and more expensive**, **colder and colder**.`,
      tip: 'get + past participle also builds informal passives — get paid, get caught, get invited. English recycles this little verb endlessly.',
      miniCheck: {
        id: 'm4l3-c7',
        type: 'gap',
        before: 'Flights are getting',
        after: 'and more expensive every year. (much? more?)',
        hint: 'more',
        accepted: ['more'],
        explanation:
          'Doubled comparative for gradual change: **more and more expensive**.',
      },
    },
  ],
  sets: [
    {
      title: 'Three Machines',
      icon: '⚙️',
      exercises: [
        {
          id: 'm4l3-a1',
          type: 'mcq',
          question: 'Before the baby, we ___ out every Friday night.',
          options: ['used to go', 'are used to going', 'get used to going'],
          correct: 0,
          explanation:
            'Finished past habit → **used to go**.',
        },
        {
          id: 'm4l3-a2',
          type: 'gap',
          before: 'After ten years in London, she is used to',
          after: 'in crowded trains. (stand)',
          hint: 'stand',
          accepted: ['standing'],
          explanation:
            'Current normality → **be used to + -ing**: *used to standing*.',
        },
        {
          id: 'm4l3-a3',
          type: 'mcq',
          question: 'I still can\'t ___ used to checking in online.',
          options: ['get', 'be', 'have'],
          correct: 0,
          explanation:
            'The process of adapting → **get used to**: *can\'t get used to*.',
        },
        {
          id: 'm4l3-a4',
          type: 'error-hunt',
          sentence: 'He is used to drive on the motorway every day.',
          wrongIndex: 4,
          correction: 'driving',
          explanation:
            '*be used to* + **-ing**: *used to driving* — the *to* is a preposition here.',
        },
        {
          id: 'm4l3-a5',
          type: 'sort',
          prompt: 'Which machine does each sentence need?',
          buckets: ['used to (past habit)', 'be/get used to (-ing)'],
          items: [
            { text: 'I ___ hate coffee as a kid.', bucket: 0 },
            { text: 'She is ___ working from home now.', bucket: 1 },
            { text: 'There ___ be a phone box on this corner.', bucket: 0 },
            { text: 'You will get ___ the accent quickly.', bucket: 1 },
            { text: 'We ___ visit Gran every Sunday.', bucket: 0 },
            { text: 'He cannot get ___ wearing a tie.', bucket: 1 },
          ],
          explanation:
            'Finished past habit → *used to + base*. Familiarity or adapting → *be/get used to + -ing/noun*.',
        },
        {
          id: 'm4l3-a6',
          type: 'transform',
          source: 'Living in a big city is no longer strange to me.',
          keyword: 'used',
          before: 'I am',
          after: 'in a big city.',
          accepted: ['used to living'],
          explanation:
            'No longer strange = familiar → **am used to living**.',
        },
        {
          id: 'm4l3-a7',
          type: 'gap',
          before: 'It took him months to get used to',
          after: 'called by his surname. (be)',
          hint: 'be',
          accepted: ['being'],
          explanation:
            '*get used to* + -ing, passive flavour → **being called**.',
        },
        {
          id: 'm4l3-a8',
          type: 'mcq',
          question: 'She didn\'t ___ like spicy food, but now she loves it.',
          options: ['use to', 'used to', 'be used to'],
          correct: 0,
          explanation:
            'After *did/didn\'t* the *-d* drops: **didn\'t use to like**.',
        },
      ],
    },
    {
      title: 'Storyteller Mode',
      icon: '📻',
      exercises: [
        {
          id: 'm4l3-b1',
          type: 'mcq',
          question: 'Every winter, Grandad ___ the whole house with fairy lights.',
          options: ['would decorate', 'would own', 'used to owning'],
          correct: 0,
          explanation:
            'Repeated past **action** → *would decorate* works beautifully.',
        },
        {
          id: 'm4l3-b2',
          type: 'error-hunt',
          sentence: 'We would have a huge garden when I was small.',
          wrongIndex: 1,
          correction: 'used to',
          explanation:
            '*have* (possession) is a state — states take **used to**, not *would*.',
        },
        {
          id: 'm4l3-b3',
          type: 'sort',
          prompt: 'Can these take storytelling *would*, or must they use *used to*?',
          buckets: ['would ✓ (action)', 'used to only (state)'],
          items: [
            { text: 'play cards after dinner', bucket: 0 },
            { text: 'believe in ghosts', bucket: 1 },
            { text: 'walk to the market', bucket: 0 },
            { text: 'have a red bicycle', bucket: 1 },
            { text: 'sing in the shower', bucket: 0 },
            { text: 'know everyone in town', bucket: 1 },
          ],
          explanation:
            '*would* = repeated actions only. States (*believe, have, know*) need **used to**.',
        },
        {
          id: 'm4l3-b4',
          type: 'order',
          correct: 'My mother would read to us every single night',
          explanation:
            'Storytelling *would* + base verb for a repeated past action.',
        },
        {
          id: 'm4l3-b5',
          type: 'gap',
          before: 'There',
          after: 'a sweet shop where the bank is now. (use)',
          hint: 'use / be',
          accepted: ['used to be'],
          explanation:
            'Past state (*there be*) → **used to be** — *would be* is impossible for states.',
        },
        {
          id: 'm4l3-b6',
          type: 'transform',
          source: 'He no longer smokes.',
          keyword: 'used',
          before: 'He',
          after: ', but he gave up last year.',
          accepted: ['used to smoke'],
          explanation:
            'Past habit now finished → **used to smoke**.',
        },
        {
          id: 'm4l3-b7',
          type: 'mcq',
          question: 'Which is the most natural nostalgic opener?',
          options: [
            'When I was ten, we would spend every August at the seaside.',
            'When I was ten, we would be very happy at the seaside.',
            'When I was ten, we use to spend every August at the seaside.',
          ],
          correct: 0,
          explanation:
            '*would spend* = repeated action ✓. *would be happy* = state ✗; *use to* without *did* ✗.',
        },
        {
          id: 'm4l3-b8',
          type: 'error-hunt',
          sentence: 'I use to walk five miles to school every day.',
          wrongIndex: 1,
          correction: 'used',
          explanation:
            'Positive past form keeps the *-d*: **used to walk**. (*use to* only follows *did/didn\'t*.)',
        },
      ],
    },
    {
      title: 'Get Workshop',
      icon: '🔧',
      exercises: [
        {
          id: 'm4l3-d1',
          type: 'match',
          prompt: 'Match each sentence to the meaning of get.',
          pairs: [
            ['It gets cold here at night.', 'become'],
            ['She got a parcel this morning.', 'receive'],
            ['We got to Paris at midnight.', 'arrive'],
            ['Could you get my glasses from upstairs?', 'fetch'],
          ],
          explanation:
            'Four core meanings of *get*: become, receive, arrive, fetch.',
        },
        {
          id: 'm4l3-d2',
          type: 'mcq',
          question: 'Traffic in the city centre is getting ___ every year.',
          options: ['worse', 'worst', 'badly'],
          correct: 0,
          explanation:
            '*get* + **comparative** for gradual change: *getting worse*.',
        },
        {
          id: 'm4l3-d3',
          type: 'gap',
          before: 'Put a jumper on — it is getting',
          after: 'and colder out there. (cold)',
          hint: 'cold',
          accepted: ['colder'],
          explanation:
            'Doubled comparative: **colder and colder** = continuing change.',
        },
        {
          id: 'm4l3-d4',
          type: 'mcq',
          question: 'In "He got caught cheating at cards", got caught is...',
          options: [
            'an informal passive (= was caught)',
            'get meaning arrive',
            'get meaning become + adjective',
          ],
          correct: 0,
          explanation:
            '**get + past participle** = informal passive: *got caught* = was caught.',
        },
        {
          id: 'm4l3-d5',
          type: 'sort',
          prompt: 'Sort by the meaning of get.',
          buckets: ['become', 'receive', 'arrive'],
          items: [
            { text: 'get tired', bucket: 0 },
            { text: 'get a text message', bucket: 1 },
            { text: 'get home by six', bucket: 2 },
            { text: 'get rich', bucket: 0 },
            { text: 'get a refund', bucket: 1 },
            { text: 'get to the office', bucket: 2 },
          ],
          explanation:
            '*get + adjective* = become · *get + noun* = receive · *get + place* = arrive.',
        },
        {
          id: 'm4l3-d6',
          type: 'gap',
          before: 'What time did you finally get',
          after: 'last night? (arrive at your house)',
          hint: 'one word',
          accepted: ['home'],
          explanation:
            '*get home* = arrive home — no *to* before *home*.',
        },
        {
          id: 'm4l3-d7',
          type: 'order',
          correct: 'My eyesight is getting worse and worse',
          explanation:
            '*get* + doubled comparative: **worse and worse**.',
        },
        {
          id: 'm4l3-d8',
          type: 'transform',
          source: 'The company promoted her last month.',
          keyword: 'got',
          before: 'She',
          after: 'last month.',
          accepted: ['got promoted'],
          explanation:
            'Informal passive: **got promoted** = was promoted.',
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm4l3-e1',
          type: 'speed',
          secondsPerItem: 8,
          explanation: 'Habits and get — full speed!',
          items: [
            {
              question: 'I ___ short hair at school.',
              options: ['used to have', 'would have'],
              correct: 0,
            },
            {
              question: 'She is used to ___ late.',
              options: ['working', 'work'],
              correct: 0,
            },
            {
              question: 'Did you ___ to live here?',
              options: ['use', 'used'],
              correct: 0,
            },
            {
              question: "You'll get used to ___ up early.",
              options: ['waking', 'wake'],
              correct: 0,
            },
            {
              question: 'Every Sunday Dad ___ pancakes.',
              options: ['would make', 'would be'],
              correct: 0,
            },
            {
              question: "It's getting ___ .",
              options: ['darker and darker', 'dark and dark'],
              correct: 0,
            },
            {
              question: 'When did you get ___ ?',
              options: ['home', 'to home'],
              correct: 0,
            },
            {
              question: 'He got ___ in the rain.',
              options: ['soaked', 'soak'],
              correct: 0,
            },
            {
              question: "I'm not used ___ this weather.",
              options: ['to', 'with'],
              correct: 0,
            },
            {
              question: 'There ___ be a park here.',
              options: ['used to', 'would'],
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
        id: 'm4l3-boss1',
        type: 'mcq',
        question: 'When I moved to Norway, I couldn\'t ___ the long dark winters.',
        options: ['get used to', 'used to', 'be used to get'],
        correct: 0,
        explanation:
          'The adaptation process → **get used to** the winters.',
      },
      {
        id: 'm4l3-boss2',
        type: 'gap',
        before: 'She',
        after: 'ballet before the injury. (do — past habit)',
        hint: 'do',
        accepted: ['used to do'],
        explanation: 'Finished past habit → **used to do**.',
      },
      {
        id: 'm4l3-boss3',
        type: 'error-hunt',
        sentence: 'After a month in Japan, he got used to eat with chopsticks.',
        wrongIndex: 9,
        correction: 'eating',
        explanation:
          '*get used to* + **-ing**: *got used to eating*.',
      },
      {
        id: 'm4l3-boss4',
        type: 'transform',
        source: 'Loud traffic no longer bothers me.',
        keyword: 'used',
        before: 'I am',
        after: 'loud traffic.',
        accepted: ['used to'],
        explanation:
          'Familiar, not bothering → **am used to** + noun.',
      },
      {
        id: 'm4l3-boss5',
        type: 'mcq',
        question: 'Which sentence is correct?',
        options: [
          'My uncle would tell the same joke at every wedding.',
          'My uncle would have a boat in those days.',
          'My uncle use to sail every weekend.',
        ],
        correct: 0,
        explanation:
          '*would* + repeated **action** ✓. *would have* (state) ✗; bare *use to* ✗.',
      },
      {
        id: 'm4l3-boss6',
        type: 'gap',
        before: 'Did your town',
        after: 'a railway station? (use / have)',
        hint: 'use / have',
        accepted: ['use to have'],
        explanation:
          'Question with *did* → the *-d* drops: **Did... use to have**.',
      },
      {
        id: 'm4l3-boss7',
        type: 'mcq',
        question: 'The evenings are getting ___ now that spring is here.',
        options: ['longer and longer', 'long and long', 'more long'],
        correct: 0,
        explanation:
          '*get* + doubled comparative: **longer and longer**.',
      },
      {
        id: 'm4l3-boss8',
        type: 'sort',
        prompt: 'Sort by the meaning of get.',
        buckets: ['become', 'receive', 'arrive'],
        items: [
          { text: 'get nervous before exams', bucket: 0 },
          { text: 'get a scholarship', bucket: 1 },
          { text: 'get to the summit', bucket: 2 },
          { text: 'get worse', bucket: 0 },
          { text: 'get a phone call', bucket: 1 },
        ],
        explanation:
          '*get + adjective/comparative* = become · *get + noun* = receive · *get + place* = arrive.',
      },
      {
        id: 'm4l3-boss9',
        type: 'transform',
        source: 'Someone stole his bike last week.',
        keyword: 'got',
        before: 'His bike',
        after: 'last week.',
        accepted: ['got stolen'],
        explanation:
          'Informal passive: **got stolen** = was stolen.',
      },
      {
        id: 'm4l3-boss10',
        type: 'order',
        correct: 'She is slowly getting used to living on her own',
        explanation:
          'The process → **getting used to + -ing**: *getting used to living*.',
      },
      {
        id: 'm4l3-boss11',
        type: 'gap',
        before: 'I',
        after: 'to like jazz, but now I listen to it daily. (negative past)',
        hint: 'not / use',
        accepted: ["didn't use", 'did not use'],
        explanation:
          'Negative past habit: **didn\'t use to like** — the *-d* drops after *did*.',
      },
    ],
  },
};
