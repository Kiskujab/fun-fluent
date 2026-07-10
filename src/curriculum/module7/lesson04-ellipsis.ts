import type { Lesson } from '../../types';

export const m7l4: Lesson = {
  id: 'm7l4',
  title: 'Ellipsis & Substitution',
  subtitle: 'saying more with less',
  minutes: 45,
  goals: [
    'Drop repeated words like a native: I can come, but Tom can\'t',
    'Substitute with one/ones, so/not, do so',
    'Master reduced infinitives: I\'d love to',
    'Handle so/neither echoes and if so / if not',
  ],
  cards: [
    {
      title: 'Ellipsis: the art of leaving out',
      body: `Native English hates repeating itself. Words vanish when context makes them obvious:

> I can come to the party, but Tom **can't** ~~come to the party~~.
> She plays the violin better than I **do** ~~play the violin~~.
> "Who broke it?" — "Leo **did** ~~break it~~."

The auxiliary survives; everything after it evaporates. This is why answers like *"Yes, I have."* feel so natural.`,
      miniCheck: {
        id: 'm7l4-c1',
        type: 'mcq',
        question: '"Have you fed the cat?" — Most natural reply:',
        options: ["Yes, I have.", 'Yes, I have fed the cat.', 'Yes, I fed.'],
        correct: 0,
        explanation:
          'Keep the auxiliary, drop the rest: **Yes, I have.**',
      },
    },
    {
      title: 'The reduced infinitive: I\'d love to',
      body: `After verbs like *want, would love, hope, try, ask*, keep just **to**:

> "Come sailing with us!" — "I'd love **to** ~~come sailing~~!"
> He didn't move the boxes, though I asked him **to**.
> "Why didn't you call?" — "I meant **to**, honestly."

⚠️ With *be* and perfect forms, keep one more word:

> He isn't happy, but he used **to be**.
> "You should have called." — "I know I should **have**."`,
      miniCheck: {
        id: 'm7l4-c2',
        type: 'gap',
        before: '"Do you want to join us?" — "I\'d love',
        after: ', but I\'m on a deadline."',
        hint: 'one word',
        accepted: ['to'],
        explanation:
          'Reduced infinitive: **I\'d love to** — the rest vanishes.',
      },
    },
    {
      title: 'one & ones: the noun stand-ins',
      body: `Don't repeat a countable noun — substitute:

> This cup is chipped; can I have **that one**?
> I prefer the red shoes to the black **ones**.
> "Which cake?" — "The **one** with the cherries."

⚠️ Uncountables refuse *one* — drop the noun or rephrase:

> I prefer white wine to red ~~one~~ → to **red**. ✓`,
      miniCheck: {
        id: 'm7l4-c3',
        type: 'gap',
        before: 'These headphones are broken — I need new',
        after: '.',
        hint: 'one word',
        accepted: ['ones'],
        explanation:
          'Plural countable → **ones**: *new ones*.',
      },
    },
    {
      title: 'so & not: swallowing whole clauses',
      body: `After *think, hope, suppose, expect, be afraid, guess*, one little word replaces a whole clause:

> "Will it rain?" — "I **think so**." (= that it will rain)
> "Did we win?" — "I'm **afraid not**." (= that we didn't)
> "Is she coming?" — "I **hope so** / I **hope not**."

Negatives, two ways: *I **don't think so*** (common) · *I **suppose not*** (with hope/afraid/guess).`,
      miniCheck: {
        id: 'm7l4-c4',
        type: 'mcq',
        question: '"Will the tickets sell out?" — "I\'m afraid ___ ." (sadly, yes)',
        options: ['so', 'not', 'it'],
        correct: 0,
        explanation:
          'Sadly yes → **I\'m afraid so.** (*I\'m afraid not* = sadly no.)',
      },
    },
    {
      title: 'do so, if so, if not',
      body: `**do so** — formal substitute for a repeated action:

> Passengers wishing to upgrade may **do so** at the desk.
> She promised to review the file and **did so** the same evening.

**if so / if not** — compressed conditionals:

> Are you free on Friday? **If so**, join us. **If not**, next week works.`,
      miniCheck: {
        id: 'm7l4-c5',
        type: 'mcq',
        question: 'Formal notice: "Guests who wish to extend their stay may ___ at reception."',
        options: ['do so', 'do it so', 'so do'],
        correct: 0,
        explanation:
          'Formal action substitute → **do so**.',
      },
    },
    {
      title: 'Echoes: So do I / Neither do I',
      body: `Agreement echoes — auxiliary matched to the original:

> "I love winter." — "**So do I.**"
> "She's been to Kyoto." — "**So have I.**"
> "I can't whistle." — "**Neither/Nor can I.**"

Disagreeing? No inversion — just stress the subject:

> "I hate mornings." — "Oh, **I don't** — mornings are wonderful."

And conversational shorthand: **Me too** (positive) · **Me neither** (negative).`,
      tip: 'Pick the matching auxiliary: am/is → So am I · past simple → So did I · perfect → So have I. Match the engine, not the verb.',
      miniCheck: {
        id: 'm7l4-c6',
        type: 'gap',
        before: '"I\'ve never tried sushi." — "Neither',
        after: '!"',
        hint: 'have / I',
        accepted: ['have i'],
        explanation:
          'Negative perfect echo: **Neither have I.**',
      },
    },
  ],
  sets: [
    {
      title: 'The Vanishing Words',
      icon: '🫥',
      exercises: [
        {
          id: 'm7l4-a1',
          type: 'mcq',
          question: 'She said she would email the report, and she ___ .',
          options: ['did', 'did it so', 'emailed'],
          correct: 0,
          explanation:
            'Ellipsis after the auxiliary: *and she **did*** (= emailed the report).',
        },
        {
          id: 'm7l4-a2',
          type: 'gap',
          before: 'I can reach the top shelf, but my brother',
          after: '. (negative)',
          hint: "can't…",
          accepted: ["can't", 'cannot', 'can not'],
          explanation:
            'Keep the auxiliary, drop the rest: *but my brother **can\'t**.*',
        },
        {
          id: 'm7l4-a3',
          type: 'transform',
          source: '"Did you water the plants?" — "Yes, I watered the plants." (shorten the reply)',
          keyword: 'did',
          before: '"Yes, I',
          after: '."',
          accepted: ['did'],
          explanation:
            'Past simple reply → **Yes, I did.**',
        },
        {
          id: 'm7l4-a4',
          type: 'error-hunt',
          sentence: '"Will you help me move on Saturday?" "I hope I will can."',
          wrongIndex: 10,
          correction: 'can',
          explanation:
            'Two modals cannot stack: *I hope I **can**.* (or *I will be able to*).',
        },
        {
          id: 'm7l4-a5',
          type: 'mcq',
          question: '"You should have apologised." — Most natural admission:',
          options: [
            'I know I should have.',
            'I know I should.',
            'I know I should have apologised him.',
          ],
          correct: 0,
          explanation:
            'Perfect ellipsis keeps **have**: *I should have.*',
        },
        {
          id: 'm7l4-a6',
          type: 'gap',
          before: 'He is not captain any more, but he used to',
          after: '. (keep one small word!)',
          hint: 'be',
          accepted: ['be'],
          explanation:
            'With *be*, the reduced form keeps it: *used to **be**.*',
        },
        {
          id: 'm7l4-a7',
          type: 'order',
          correct: 'She sings far better than I do',
          explanation:
            'Comparison ellipsis: *…than I **do*** (= than I sing).',
        },
        {
          id: 'm7l4-a8',
          type: 'mcq',
          question: '"Why didn\'t you tell me?!" — "I wanted ___ , but you were asleep."',
          options: ['to', 'to tell', 'it'],
          correct: 0,
          explanation:
            'Reduced infinitive: *I wanted **to**.*',
        },
      ],
    },
    {
      title: 'Stand-in Actors',
      icon: '🎭',
      exercises: [
        {
          id: 'm7l4-b1',
          type: 'gap',
          before: 'My phone is ancient — I\'m saving up for a new',
          after: '.',
          hint: 'one word',
          accepted: ['one'],
          explanation:
            'Singular countable → **one**: *a new one*.',
        },
        {
          id: 'm7l4-b2',
          type: 'mcq',
          question: 'Which sentence is WRONG?',
          options: [
            'I prefer fresh bread to stale one.',
            'I prefer the blue shirt to the green one.',
            'These gloves are nicer than the leather ones.',
          ],
          correct: 0,
          explanation:
            '*bread* is uncountable → no *one*: *…to stale (bread)*.',
        },
        {
          id: 'm7l4-b3',
          type: 'gap',
          before: '"Is the meeting still on?" — "I think',
          after: ', but let me check."',
          hint: 'one word',
          accepted: ['so'],
          explanation:
            'Clause substitute: **I think so.**',
        },
        {
          id: 'm7l4-b4',
          type: 'mcq',
          question: '"Do we have to work on Saturday?" — "I hope ___ !" (please no)',
          options: ['not', 'so', 'no'],
          correct: 0,
          explanation:
            'Wishing against it → **I hope not.**',
        },
        {
          id: 'm7l4-b5',
          type: 'error-hunt',
          sentence: '"Has the parcel arrived?" "I do not think it."',
          wrongIndex: 8,
          correction: 'so',
          explanation:
            'Clause substitute after *think* → **I don\'t think so.**',
        },
        {
          id: 'm7l4-b6',
          type: 'transform',
          source: 'Members who wish to vote by post may vote by post before May. (formal substitute)',
          keyword: 'so',
          before: 'Members who wish to vote by post may',
          after: 'before May.',
          accepted: ['do so'],
          explanation:
            'Formal action substitute: **may do so**.',
        },
        {
          id: 'm7l4-b7',
          type: 'gap',
          before: 'Have you finished the draft? If',
          after: ', send it over tonight.',
          hint: 'one word',
          accepted: ['so'],
          explanation:
            'Compressed conditional: **If so,** send it over.',
        },
        {
          id: 'm7l4-b8',
          type: 'sort',
          prompt: 'one/ones OK, or ellipsis only?',
          buckets: ['one/ones ✓', 'no one/ones (uncountable)'],
          items: [
            { text: 'a bigger flat → a bigger ___', bucket: 0 },
            { text: 'fresh coffee → fresh ___', bucket: 1 },
            { text: 'the striped socks → the striped ___', bucket: 0 },
            { text: 'useful advice → useful ___', bucket: 1 },
            { text: 'an older model → an older ___', bucket: 0 },
            { text: 'cold weather → cold ___', bucket: 1 },
          ],
          explanation:
            'Countables take *one/ones*; uncountables (coffee, advice, weather) never do.',
        },
      ],
    },
    {
      title: 'Echo Chamber',
      icon: '🗣️',
      exercises: [
        {
          id: 'm7l4-d1',
          type: 'gap',
          before: '"I\'m starving." — "So',
          after: 'I — let\'s order everything."',
          hint: 'auxiliary',
          accepted: ['am'],
          explanation:
            '*I\'m starving* runs on **am** → **So am I.**',
        },
        {
          id: 'm7l4-d2',
          type: 'mcq',
          question: '"I didn\'t understand a word." — Agreeing reply:',
          options: ['Neither did I.', 'So did I.', 'Neither I did.'],
          correct: 0,
          explanation:
            'Negative past echo → **Neither did I.**',
        },
        {
          id: 'm7l4-d3',
          type: 'match',
          prompt: 'Match the statement to its agreeing echo.',
          pairs: [
            ['"I work from home."', 'So do I.'],
            ['"I\'ve seen this twice."', 'So have I.'],
            ['"I can\'t draw."', 'Neither can I.'],
            ['"I wasn\'t invited."', 'Neither was I.'],
          ],
          explanation:
            'Match the auxiliary engine: do/have/can/was.',
        },
        {
          id: 'm7l4-d4',
          type: 'mcq',
          question: '"I love camping." — You HATE camping. Honest reply:',
          options: ["Oh, I don't — bugs and I are enemies.", 'So do I.', 'Neither do I.'],
          correct: 0,
          explanation:
            'Disagreeing → no inversion, stressed subject: **I don\'t.**',
        },
        {
          id: 'm7l4-d5',
          type: 'gap',
          before: '"I\'d never skydive." — "Me',
          after: '." (casual agreement with a negative)',
          hint: 'one word',
          accepted: ['neither'],
          explanation:
            'Casual negative agreement: **Me neither.**',
        },
        {
          id: 'm7l4-d6',
          type: 'error-hunt',
          sentence: '"She has quit sugar." "So I have — three weeks now!"',
          wrongIndex: 5,
          correction: 'have I',
          explanation:
            'Agreement echo inverts: **So have I.** (*So I have* = confirming your own claim.)',
        },
        {
          id: 'm7l4-d7',
          type: 'mcq',
          question: '"My team lost again." — "___ — maybe next season."',
          options: ['So did mine', 'So mine did', 'Neither did mine'],
          correct: 0,
          explanation:
            'Positive past echo with a new subject: **So did mine.**',
        },
        {
          id: 'm7l4-d8',
          type: 'order',
          correct: 'He speaks four languages and so does his daughter',
          explanation:
            'Mid-sentence echo: **and so does + subject**.',
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm7l4-e1',
          type: 'speed',
          secondsPerItem: 8,
          explanation: 'Short forms at full speed!',
          items: [
            {
              question: '"Coming?" "I\'d love ___ ."',
              options: ['to', 'it'],
              correct: 0,
            },
            {
              question: '"I\'m cold." "So ___ I."',
              options: ['am', 'do'],
              correct: 0,
            },
            {
              question: '"Rain tomorrow?" "I think ___ ."',
              options: ['so', 'it'],
              correct: 0,
            },
            {
              question: 'a newer ___ (laptop)',
              options: ['one', 'ones'],
              correct: 0,
            },
            {
              question: '"I can\'t knit." "___ can I."',
              options: ['Neither', 'So'],
              correct: 0,
            },
            {
              question: '"Did he pay?" "I\'m afraid ___ ."',
              options: ['not', 'no'],
              correct: 0,
            },
            {
              question: 'Hungry? If ___ , eat.',
              options: ['so', 'yes'],
              correct: 0,
            },
            {
              question: 'She runs faster than I ___ .',
              options: ['do', 'run fast'],
              correct: 0,
            },
            {
              question: 'May renew online: may ___ .',
              options: ['do so', 'so do'],
              correct: 0,
            },
            {
              question: '"I hate queues." "Me ___ ."',
              options: ['too', 'neither'],
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
        id: 'm7l4-boss1',
        type: 'mcq',
        question: '"Are you going to enter the competition?" — Most natural:',
        options: [
          "I'd like to, but the deadline is tomorrow.",
          "I'd like, but the deadline is tomorrow.",
          "I'd like to enter it the competition.",
        ],
        correct: 0,
        explanation:
          'Reduced infinitive: **I\'d like to.**',
      },
      {
        id: 'm7l4-boss2',
        type: 'gap',
        before: 'I asked him to wait, but he',
        after: '. (negative past — two words)',
        hint: "didn't…",
        accepted: ["didn't", 'did not'],
        explanation:
          'Ellipsis: *but he **didn\'t** (wait)*.',
      },
      {
        id: 'm7l4-boss3',
        type: 'mcq',
        question: '"Is the museum open on Mondays?" — "I ___ ." (probably yes)',
        options: ['believe so', 'believe it', 'believe that so'],
        correct: 0,
        explanation:
          'Clause substitute: **I believe so.**',
      },
      {
        id: 'm7l4-boss4',
        type: 'error-hunt',
        sentence: 'These earrings are lovely, but I prefer the silver one.',
        wrongIndex: 9,
        correction: 'ones',
        explanation:
          'Earrings = plural → **the silver ones**.',
      },
      {
        id: 'm7l4-boss5',
        type: 'gap',
        before: '"I\'ve already seen the finale." — "So',
        after: 'I — twice!"',
        hint: 'auxiliary',
        accepted: ['have'],
        explanation:
          'Perfect echo: **So have I.**',
      },
      {
        id: 'm7l4-boss6',
        type: 'transform',
        source: 'Applicants who want to defer entry may defer entry once. (formal substitute)',
        keyword: 'so',
        before: 'Applicants who want to defer entry may',
        after: 'once.',
        accepted: ['do so'],
        explanation:
          'Formal action substitute: **may do so once**.',
      },
      {
        id: 'm7l4-boss7',
        type: 'mcq',
        question: '"Everyone forgot my birthday." — "Oh no… well, the dog ___ !"',
        options: ["didn't", "doesn't so", 'neither did'],
        correct: 0,
        explanation:
          'Contrast ellipsis: *the dog **didn\'t** (forget)*.',
      },
      {
        id: 'm7l4-boss8',
        type: 'gap',
        before: 'Bring an umbrella. If',
        after: ', you will regret it by noon. (you don\'t)',
        hint: 'one word',
        accepted: ['not'],
        explanation:
          'Compressed negative conditional: **If not,…**',
      },
      {
        id: 'm7l4-boss9',
        type: 'error-hunt',
        sentence: '"I never win raffles." "So do I — not once in my life."',
        wrongIndex: 4,
        correction: 'Neither',
        explanation:
          'Agreeing with a NEGATIVE → **Neither do I.**',
      },
      {
        id: 'm7l4-boss10',
        type: 'order',
        correct: 'He promised to fix the gate and did so the very next day',
        explanation:
          '**did so** = formal substitute for the repeated action.',
      },
      {
        id: 'm7l4-boss11',
        type: 'sort',
        prompt: 'Which short form fits?',
        buckets: ['so', 'not', 'to'],
        items: [
          { text: '"Will she agree?" "I suppose ___ ."', bucket: 0 },
          { text: '"Is it broken?" "I hope ___ !"', bucket: 1 },
          { text: '"Join us!" "I\'d be delighted ___ ."', bucket: 2 },
          { text: '"Think we\'ll make it?" "I think ___ ."', bucket: 0 },
          { text: '"Snow tonight?" "Apparently ___ ." (sadly no)', bucket: 1 },
          { text: '"You never called back." "I meant ___ …"', bucket: 2 },
        ],
        explanation:
          '*so* = yes-clause · *not* = no-clause · *to* = reduced infinitive.',
      },
    ],
  },
};
