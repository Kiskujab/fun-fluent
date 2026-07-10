import type { Lesson } from '../../types';

export const m8l2: Lesson = {
  id: 'm8l2',
  title: 'Quantifiers',
  subtitle: 'all, both, either, no, none',
  minutes: 40,
  goals: [
    'Deploy all, both, either and neither with confidence',
    'Feel the mood gap: few vs a few, little vs a little',
    'Choose no, none and none of — with the right verb',
    'Tell each from every like a C2 examiner',
  ],
  cards: [
    {
      title: 'all & all of',
      body: `**all** works three ways:

> **All** cheese melts. (general — no *the*)
> **All (of) the** cheese in this fridge is mine. (specific — *of* optional)
> **All of it / all of us / all of them** (pronoun — *of* required)

And the classic time pair:

> We danced **all night**. (the whole of one night)
> We dance **every night**. (each night, repeated)`,
      miniCheck: {
        id: 'm8l2-c1',
        type: 'mcq',
        question: 'We danced ___ night. (the whole night, start to finish)',
        options: ['all', 'every', 'each'],
        correct: 0,
        explanation:
          '**all night** = one whole night; **every night** = a repeated habit.',
      },
    },
    {
      title: 'both, either, neither',
      body: `The two-item specialists:

- **both (of)** = the two together → *Both (of the) routes are steep.*
- **either** = one OR the other → *Take either route.*
- **neither** = not this one and not that one → *Neither route is easy.*

⚠️ After **either/neither + noun**, the noun is **singular**:

> ~~either sides~~ → **either side**
> **Neither answer is** correct. (singular verb, formal)

And the paired conjunctions: **either… or…**, **neither… nor…**`,
      miniCheck: {
        id: 'm8l2-c2',
        type: 'gap',
        before: 'I rang twice, but',
        after: 'of my flatmates answered. (not one and not the other)',
        hint: 'quantifier',
        accepted: ['neither'],
        explanation:
          'Two flatmates, zero answers → **neither of** + plural pronoun/noun.',
      },
    },
    {
      title: 'no, none & none of',
      body: `Three shades of zero:

- **no + noun** — the compact one: *There's **no** milk. I have **no** idea.*
- **none** — stands alone: *"Any problems?" "**None**."*
- **none of + noun/pronoun**: ***None of** the shops were open.*

Verb agreement after *none of*: formal English prefers **singular** (*None of the answers **is** correct*), everyday English happily uses plural. Both survive the exam. 😌

⚠️ One negative per sentence: ~~None of us have never been…~~ → None of us have **ever** been…`,
      miniCheck: {
        id: 'm8l2-c3',
        type: 'mcq',
        question: '"How much battery is left?" "___."',
        options: ['None', 'No', 'Nothing'],
        correct: 0,
        explanation:
          'Standing alone as an answer about quantity → **none**. *No* always needs a noun after it.',
      },
    },
    {
      title: 'few vs a few, little vs a little',
      body: `Same amount, opposite mood — it's all about the tiny **a**:

**Glass half full 🌤️**
> I have **a few** friends here. (some — nice!)
> There's **a little** hope left. (some — hang in there!)

**Glass half empty 🌧️**
> I have **few** friends here. (almost none — lonely)
> There's **little** hope left. (almost none — gloomy)

**few / a few** → countable · **little / a little** → uncountable.`,
      tip: 'In speech, "few" without "a" sounds formal — natives usually say "hardly any" or "not many" instead.',
      miniCheck: {
        id: 'm8l2-c4',
        type: 'mcq',
        question: 'The lecture was so dull that ___ students stayed to the end.',
        options: ['few', 'a few', 'little'],
        correct: 0,
        explanation:
          'Negative mood (*so dull*) → **few** = almost none. *A few* would sound oddly cheerful here.',
      },
    },
    {
      title: 'The quantity ladder',
      body: `Upgrading from *a lot of* for C1 writing:

**Formal** 🎩
- **a great deal of** + uncountable: *a great deal of money / time / effort*
- **a large number of** + plural: *a large number of complaints*

**Informal** 🩴
- **loads of / tons of** + anything: *loads of options*

**Neutral all-rounder**: **plenty of** = more than enough: *plenty of time*.
**Almost zero**: **hardly any**: *hardly any snow this year*.`,
      miniCheck: {
        id: 'm8l2-c5',
        type: 'mcq',
        question: 'Formal report: "The project consumed ___ money."',
        options: ['a great deal of', 'loads of', 'a large number of'],
        correct: 0,
        explanation:
          '*Money* is uncountable and the register is formal → **a great deal of**. *A large number of* needs a plural.',
      },
    },
    {
      title: 'each vs every',
      body: `Both take a **singular** noun and verb, but the camera angle differs:

- **each** — one by one, individually 🔍 (works with two or more)
> **Each** player shook the referee\`s hand in turn.
> **Each of** the players **has** a locker. (each of + plural + singular verb!)

- **every** — all together, as a rule 📷 (needs three or more)
> **Every** player wants to win.
> **Every single** detail matters.

⚠️ *Every* never takes *of*: ~~every of the answers~~ → **each of** the answers / **every one of** the answers.`,
      miniCheck: {
        id: 'm8l2-c6',
        type: 'mcq',
        question: 'The pianist bowed to ___ corner of the room in turn.',
        options: ['each', 'every', 'all'],
        correct: 0,
        explanation:
          '*In turn* signals the one-by-one camera → **each**. *Every* sees the group as a whole.',
      },
    },
    {
      title: 'most & the whole',
      body: `- **most + noun** = the majority, in general: ***Most** people love weekends.*
- **most of + the/my/them** = the majority of something specific: ***Most of the** cake has gone.*
- ~~The most people~~ ← *the most* only for superlatives!

**whole vs all**:
> **the whole** film = **all** the film 🎬
> She read **the whole book** in one sitting.

*Whole* squeezes between *the* and a singular noun; *all* stands outside: *all the book*? No — *all (of) the books* (plural) or *the whole book*.`,
      miniCheck: {
        id: 'm8l2-c7',
        type: 'gap',
        before: '',
        after: 'of the cake had disappeared before the guests arrived. (the majority)',
        hint: 'quantifier',
        accepted: ['most'],
        explanation:
          'Specific cake (*the cake*) → **most of the**. General statements drop the *of*: *Most cakes are sweet.*',
      },
    },
  ],
  sets: [
    {
      title: 'The Counting House',
      icon: '🧮',
      exercises: [
        {
          id: 'm8l2-a1',
          type: 'mcq',
          question: '___ of my parents are retired, so they travel constantly.',
          options: ['Both', 'Either', 'All'],
          correct: 0,
          explanation:
            'Two parents, the two together → **both of**. *All* needs three or more.',
        },
        {
          id: 'm8l2-a2',
          type: 'gap',
          before: '',
          after: 'of these two chargers fits my phone — I need a third one. (not one and not the other)',
          hint: 'quantifier',
          accepted: ['neither'],
          explanation:
            'Two items, both rejected → **Neither of these two chargers fits…** (singular verb).',
        },
        {
          id: 'm8l2-a3',
          type: 'error-hunt',
          sentence: 'You can park on either sides of the street.',
          wrongIndex: 5,
          correction: 'side',
          explanation:
            '**either + singular noun**: *on either side*. The plural is the classic trap.',
        },
        {
          id: 'm8l2-a4',
          type: 'mcq',
          question: 'Neither of the answers ___ correct. (formal)',
          options: ['is', 'are', 'be'],
          correct: 0,
          explanation:
            'Formal agreement: **neither of + plural noun + singular verb** — *neither… is*.',
        },
        {
          id: 'm8l2-a5',
          type: 'order',
          prompt: 'Build the sentence — one token is a trap.',
          correct: 'Neither the hotel nor the flights were refundable.',
          distractors: ['none'],
          explanation:
            'Paired conjunction: **neither… nor…**. With mixed subjects, the verb agrees with the nearest one (*flights were*).',
        },
        {
          id: 'm8l2-a6',
          type: 'match',
          prompt: 'Match the phrase to its meaning.',
          pairs: [
            ['all of us', 'the whole group, including me'],
            ['both of us', 'the two of us'],
            ['neither of us', 'not me and not the other person'],
            ['either of us', 'one or the other — it does not matter which'],
          ],
          explanation:
            'The *of us* family: **all** (3+), **both** (exactly 2), **neither** (0 of 2), **either** (1 of 2, free choice).',
        },
        {
          id: 'm8l2-a7',
          type: 'gap',
          before: '',
          after: 'the tickets sold out within an hour — every single one. (100%)',
          hint: 'quantifier (one or two words)',
          accepted: ['all', 'all of'],
          explanation:
            'With a specific noun, both work: **All the tickets** or **All of the tickets**.',
        },
        {
          id: 'm8l2-a8',
          type: 'error-hunt',
          sentence: 'We spent all the day looking for the cat.',
          wrongIndex: 3,
          correction: 'all day',
          explanation:
            'Whole-period time phrases drop *the*: **all day, all night, all week**.',
        },
        {
          id: 'm8l2-a9',
          type: 'transform',
          prompt: 'Rewrite using the keyword.',
          source: 'The two proposals are unrealistic.',
          keyword: 'BOTH',
          accepted: [
            'Both proposals are unrealistic',
            'Both of the proposals are unrealistic',
            'Both the proposals are unrealistic',
          ],
          explanation:
            'Three valid shapes: **both proposals / both the proposals / both of the proposals** — all mean the two together.',
        },
      ],
    },
    {
      title: 'Glass Half Full',
      icon: '🥛',
      exercises: [
        {
          id: 'm8l2-b1',
          type: 'mcq',
          question: "We've got ___ time — the train leaves in three minutes!",
          options: ['very little', 'a little', 'few'],
          correct: 0,
          explanation:
            'Panic mood → **(very) little** = almost none. *A little* would sound relaxed; *few* needs a countable noun.',
        },
        {
          id: 'm8l2-b2',
          type: 'mcq',
          question: 'Luckily I had ___ friends in the city, so I never felt lonely.',
          options: ['a few', 'few', 'little'],
          correct: 0,
          explanation:
            '*Luckily… never lonely* = positive mood → **a few** = some. Bare *few* would mean almost none.',
        },
        {
          id: 'm8l2-b3',
          type: 'gap',
          before: 'There is',
          after: 'point arguing with a referee. (almost none — formal)',
          hint: 'quantifier',
          accepted: ['little', 'very little'],
          explanation:
            'Formal negative flavour with an uncountable noun: **little point, little doubt, little hope**.',
        },
        {
          id: 'm8l2-b4',
          type: 'sort',
          prompt: 'Sunny or gloomy?',
          buckets: ['positive 🌤️ (some, enough)', 'negative 🌧️ (almost none)'],
          items: [
            { text: 'a few ideas', bucket: 0 },
            { text: 'few ideas', bucket: 1 },
            { text: 'a little hope', bucket: 0 },
            { text: 'little hope', bucket: 1 },
            { text: 'plenty of options', bucket: 0 },
            { text: 'hardly any options', bucket: 1 },
          ],
          explanation:
            'The tiny **a** flips the mood: *a few/a little* = some 🌤️; bare *few/little* = almost none 🌧️.',
        },
        {
          id: 'm8l2-b5',
          type: 'error-hunt',
          sentence: 'She has made a great deal of friends since moving to Leeds.',
          wrongIndex: 5,
          correction: 'number',
          explanation:
            '**a great deal of** takes uncountables only. Plural *friends* needs **a great/large number of**.',
        },
        {
          id: 'm8l2-b6',
          type: 'mcq',
          question: "Don't rush — we have ___ of time before boarding.",
          options: ['plenty', 'many', 'a few'],
          correct: 0,
          explanation:
            '**plenty of** = more than enough, works with countables and uncountables alike.',
        },
        {
          id: 'm8l2-b7',
          type: 'match',
          prompt: 'Match the quantifier to its job.',
          pairs: [
            ['a great deal of', '+ uncountable — formal'],
            ['a large number of', '+ plural — formal'],
            ['loads of', '+ anything — informal'],
            ['hardly any', 'almost zero'],
          ],
          explanation:
            'Pick by noun type AND register: essays get *a great deal of*; texts to friends get *loads of*.',
        },
        {
          id: 'm8l2-b8',
          type: 'gap',
          before: 'Could I have',
          after: 'milk in my coffee, please? (a small, welcome amount)',
          hint: 'two words',
          accepted: ['a little', 'a bit of', 'some'],
          explanation:
            'Positive small amount with uncountable *milk* → **a little** (or informal *a bit of*).',
        },
        {
          id: 'm8l2-b9',
          type: 'transform',
          prompt: 'Rewrite using the keyword.',
          source: 'Not many people attended the launch.',
          keyword: 'FEW',
          accepted: [
            'Few people attended the launch',
            'Very few people attended the launch',
          ],
          explanation:
            'Bare **few** = *not many*, with a formal, slightly disappointed flavour.',
        },
      ],
    },
    {
      title: 'Every Each Way',
      icon: '🚦',
      exercises: [
        {
          id: 'm8l2-d1',
          type: 'mcq',
          question: '___ player shook hands with the referee, one by one.',
          options: ['Each', 'Every', 'All'],
          correct: 0,
          explanation:
            '*One by one* = the individual camera → **each**. *All* would need a plural noun anyway.',
        },
        {
          id: 'm8l2-d2',
          type: 'gap',
          before: '',
          after: 'of the students has handed in the essay. (formal, one by one)',
          hint: 'quantifier',
          accepted: ['each'],
          explanation:
            '**Each of + plural noun + singular verb**: *Each of the students has…*. *Every* cannot take *of*.',
        },
        {
          id: 'm8l2-d3',
          type: 'error-hunt',
          sentence: 'Every students in the class passed the mock exam.',
          wrongIndex: 1,
          correction: 'student',
          explanation: '**every + singular noun**: *every student*. Always singular after *every* and *each*.',
        },
        {
          id: 'm8l2-d4',
          type: 'mcq',
          question: '"How many mistakes did you make?" "___, believe it or not!"',
          options: ['None', 'No', 'Any'],
          correct: 0,
          explanation:
            'Standing alone → **none**. *No* is an adjective and always needs its noun.',
        },
        {
          id: 'm8l2-d5',
          type: 'gap',
          before: 'There were',
          after: 'seats left, so we stood for the whole concert. (zero)',
          hint: 'quantifier',
          accepted: ['no'],
          explanation: 'Directly before a noun, zero = **no**: *no seats, no time, no idea*.',
        },
        {
          id: 'm8l2-d6',
          type: 'error-hunt',
          sentence: 'None of us have never been to Japan before.',
          wrongIndex: 4,
          correction: 'ever',
          explanation:
            'One negative per sentence! *None* is already negative, so the adverb must be **ever**.',
        },
        {
          id: 'm8l2-d7',
          type: 'mcq',
          question: '___ of the information ___ useful. (formal agreement)',
          options: ['None / was', 'None / were', 'No / was'],
          correct: 0,
          explanation:
            '*Information* is uncountable → singular **was**; before *of* you need **none**, not *no*.',
        },
        {
          id: 'm8l2-d8',
          type: 'sort',
          prompt: 'no or none?',
          buckets: ['no + noun', 'none (alone / + of)'],
          items: [
            { text: "There's ___ milk left.", bucket: 0 },
            { text: '"Any news?" "___ at all."', bucket: 1 },
            { text: '___ of the shops were open.', bucket: 1 },
            { text: 'I have ___ idea.', bucket: 0 },
            { text: '___ of it makes sense.', bucket: 1 },
            { text: 'We had ___ choice.', bucket: 0 },
          ],
          explanation:
            '**no** sticks to a noun; **none** works alone or teams up with *of*.',
        },
        {
          id: 'm8l2-d9',
          type: 'transform',
          prompt: 'Rewrite using the keyword.',
          source: 'All the rooms lack a sea view.',
          keyword: 'NONE',
          accepted: [
            'None of the rooms has a sea view',
            'None of the rooms have a sea view',
          ],
          explanation:
            '**None of the rooms has/have a sea view** — formal English prefers *has*, everyday English allows *have*.',
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm8l2-e1',
          type: 'speed',
          secondsPerItem: 8,
          items: [
            { question: '___ people came — almost nobody.', options: ['Few', 'A few'], correct: 0 },
            { question: "Cheer up — there's still ___ hope.", options: ['a little', 'little'], correct: 0 },
            { question: 'Every child ___ a gift.', options: ['gets', 'get'], correct: 0 },
            { question: 'Neither answer ___ right.', options: ['is', 'are'], correct: 0 },
            { question: '___ of the three options worked.', options: ['None', 'Neither'], correct: 0 },
            { question: 'I have ___ idea what happened.', options: ['no', 'none'], correct: 0 },
            { question: 'We have ___ of time.', options: ['plenty', 'much'], correct: 0 },
            { question: '___ of the two roads leads to the summit.', options: ['Either', 'Any'], correct: 0 },
            { question: 'a great ___ of patience', options: ['deal', 'number'], correct: 0 },
            { question: '___ single detail matters.', options: ['Every', 'Each'], correct: 0 },
          ],
          explanation: 'Quantifier reflexes — counted, sorted, conquered!',
        },
      ],
    },
  ],
  boss: {
    passPct: 80,
    exercises: [
      {
        id: 'm8l2-boss1',
        type: 'mcq',
        question: 'Which sentence is correct?',
        options: [
          'None of the passengers was hurt.',
          "None of the passengers wasn't hurt.",
          'No of the passengers was hurt.',
        ],
        correct: 0,
        explanation:
          '**None of** + plural noun (formal singular verb), one negative only, and *no* never goes before *of*.',
      },
      {
        id: 'm8l2-boss2',
        type: 'gap',
        before: 'You can take',
        after: 'of the two routes — they both reach the summit. (one or the other)',
        hint: 'quantifier',
        accepted: ['either'],
        explanation: 'Free choice between two → **either of**.',
      },
      {
        id: 'm8l2-boss3',
        type: 'error-hunt',
        sentence: 'Each of the climber carries an emergency beacon.',
        wrongIndex: 3,
        correction: 'climbers',
        explanation:
          '**each of + PLURAL noun + singular verb**: *Each of the climbers carries…*.',
      },
      {
        id: 'm8l2-boss4',
        type: 'mcq',
        question: "I've read ___ of her novels — every single one.",
        options: ['all', 'most', 'neither'],
        correct: 0,
        explanation: '*Every single one* = 100% → **all of**.',
      },
      {
        id: 'm8l2-boss5',
        type: 'sort',
        prompt: 'Which noun type does each quantifier take?',
        buckets: ['+ uncountable', '+ plural countable'],
        items: [
          { text: 'little', bucket: 0 },
          { text: 'a great deal of', bucket: 0 },
          { text: 'much', bucket: 0 },
          { text: 'few', bucket: 1 },
          { text: 'a large number of', bucket: 1 },
          { text: 'many', bucket: 1 },
        ],
        explanation:
          'Uncountable team: *little, much, a great deal of*. Countable team: *few, many, a large number of*.',
      },
      {
        id: 'm8l2-boss6',
        type: 'gap',
        before: 'Sadly,',
        after: 'people bother to read the terms and conditions. (almost nobody)',
        hint: 'quantifier',
        accepted: ['few', 'very few'],
        explanation: 'Negative mood + countable noun → bare **few** = almost none.',
      },
      {
        id: 'm8l2-boss7',
        type: 'error-hunt',
        sentence: 'Every of the answers was checked twice.',
        wrongIndex: 0,
        correction: 'Each',
        explanation:
          '*Every* refuses *of*. Before *of the…* you need **each** (or *every one of*).',
      },
      {
        id: 'm8l2-boss8',
        type: 'match',
        prompt: 'Match each quantifier to its exact meaning.',
        pairs: [
          ['few', 'almost no (countable)'],
          ['a few', 'some (countable)'],
          ['little', 'almost no (uncountable)'],
          ['a little', 'some (uncountable)'],
        ],
        explanation:
          'The famous four-way split: the **a** adds optimism; the noun type picks the pair.',
      },
      {
        id: 'm8l2-boss9',
        type: 'mcq',
        question:
          'Neither the manager nor the staff ___ told about the inspection. (verb agrees with the nearest subject)',
        options: ['were', 'was', 'be'],
        correct: 0,
        explanation:
          'With **neither… nor…**, the verb agrees with the nearer subject — *the staff* (plural) → **were**.',
      },
      {
        id: 'm8l2-boss10',
        type: 'transform',
        prompt: 'Rewrite using the keyword.',
        source: "There isn't any sugar left.",
        keyword: 'NO',
        accepted: ['There is no sugar left'],
        explanation:
          'Negative verb + *any* = positive verb + **no**: *There is no sugar left.*',
      },
      {
        id: 'm8l2-boss11',
        type: 'mcq',
        question: 'Pick the correct sentence.',
        options: [
          'Each of us has a role to play.',
          'Each of us have a role to play.',
          'Every of us has a role to play.',
        ],
        correct: 0,
        explanation:
          '**Each of us + singular verb** (*has*). *Every* cannot be followed by *of*.',
      },
    ],
  },
};
