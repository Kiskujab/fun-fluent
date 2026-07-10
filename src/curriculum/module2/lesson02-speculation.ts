import type { Lesson } from '../../types';

export const m2l2: Lesson = {
  id: 'm2l2',
  title: "The Detective's Toolkit",
  subtitle: 'may, might, must — speculation now',
  minutes: 35,
  goals: [
    'Deduce with must (surely yes) and can\'t (surely no)',
    'Weigh possibilities with may, might and could',
    'Speculate about actions in progress: must be hiding',
    'Rank certainty like a pro: bound to, will, should, probably',
  ],
  cards: [
    {
      title: 'must — the evidence says YES',
      body: `Detective mode: when the clues point one way, English uses **must** for near-certainty:

> Three night shifts in a row? She **must** be exhausted.
> The lights are off and the car's gone — they **must** be away.

Yes, it's the same *must* as in the rules lesson — context tells you whether it's **obligation** (*You must sign here*) or **deduction** (*You must be Sherlock*).`,
      miniCheck: {
        id: 'm2l2-c1',
        type: 'mcq',
        question: "He's yawning every ten seconds. He ___ be tired.",
        options: ['must', 'should'],
        correct: 0,
        explanation: 'The evidence (industrial-scale yawning) points to one conclusion → **must**.',
      },
    },
    {
      title: "can't — the evidence says NO",
      body: `Here's the plot twist: the opposite of deduction-*must* is **can't**, NOT *mustn't*:

> He **can't** be hungry — he's just eaten two pizzas.
> That **can't** be Marta. She's in Tokyo this week!

**mustn't** only ever means *forbidden*. For "I'm sure it's not true", it's always **can't**:

> ~~She mustn't be Italian~~ → She **can't** be Italian.`,
      miniCheck: {
        id: 'm2l2-c2',
        type: 'mcq',
        question: "That ___ be Marta at the door — she's in Tokyo this week!",
        options: ["can't", "mustn't"],
        correct: 0,
        explanation: "Impossible conclusion → **can't**. *Mustn't* would mean she's forbidden from being Marta.",
      },
    },
    {
      title: 'may, might, could — the maybe zone',
      body: `When the evidence is thin, reach for the 50% modals — all three mean *perhaps*:

> Take a jacket — it **might** get cold later.
> She **may** know the answer. · It **could** be a mistake.

The negatives are sneaky:

- **might not / may not** = maybe not: *He **might not** come.*
- **couldn't** = impossible (= can't!): *He **couldn't** be the thief — he was with me.*

So *could* = maybe, but *couldn't* = definitely not. English, why. 🙃`,
      miniCheck: {
        id: 'm2l2-c3',
        type: 'mcq',
        question: 'Take a powerbank — you ___ need it on the trail.',
        options: ['might', 'must'],
        correct: 0,
        explanation: 'A mere possibility, not a deduction → **might**.',
      },
    },
    {
      title: 'Caught in the act: modal + be + -ing',
      body: `To speculate about something happening **right now**, add the continuous infinitive — \`modal + be + -ing\`:

> His phone's engaged — he **must be talking** to his sister.
> Don't ring at nine — they **might be having** dinner.
> You **can't be serious**. A llama? In the lift?

Same detective logic, zoomed in on an action in progress.`,
      miniCheck: {
        id: 'm2l2-c4',
        type: 'gap',
        before: "Don't phone now — they",
        after: 'dinner. Try after eight.',
        hint: 'might / have',
        accepted: ['might be having'],
        explanation: 'Speculating about an action in progress → **might be having**.',
      },
    },
    {
      title: 'The certainty ladder',
      body: `From rock-solid to no-way:

- **must** — 95%: *She must be home; her bike's outside.*
- **will** — confident assumption: *The doorbell? That**'ll** be the pizza.*
- **should** — reasonable expectation: *They **should** be there by now.*
- **may / might / could** — ~50%: *It might rain.*
- **can't / couldn't** — 0%: *That can't be right.*

Notice \`will\`: not future here, just "I bet that's what it is".`,
      miniCheck: {
        id: 'm2l2-c5',
        type: 'mcq',
        question: 'The doorbell? That ___ be the pizza — I ordered ages ago.',
        options: ['will', "can't"],
        correct: 0,
        explanation: 'A confident assumption about the present → **will**: *That\'ll be the pizza.*',
      },
    },
    {
      title: 'bound to, likely to & friends',
      body: `Beyond modals, C1 speakers hedge with these:

- **be bound to** — certain: *Prices are **bound to** rise. They always do.*
- **be likely / unlikely to** — probable / improbable: *She's **likely to** win.*
- **definitely / probably** — after *will*, before *won't*:

> He'll **probably** be late. · He **probably won't** apologise.

> There's **bound to** be traffic — it's Friday afternoon.`,
      miniCheck: {
        id: 'm2l2-c6',
        type: 'mcq',
        question: 'Prices are ___ to rise again — they always do.',
        options: ['bound', "can't"],
        correct: 0,
        explanation: 'Certainty dressed as an adjective → **bound to rise**.',
      },
    },
    {
      title: "The Detective's Toolkit — the map",
      body: `Case notes:

- **must** = surely yes · **can't** = surely no (never ~~mustn't~~ for deduction!)
- **may / might / could** = maybe · **might not** = maybe not · **couldn't** = no way
- **modal + be + -ing** = speculating about right now
- **will** = confident assumption · **should** = expectation
- **bound to / likely to / probably** = the civilian vocabulary of certainty

The Gatekeeper has left clues everywhere. Go read them. 🔍`,
    },
  ],
  sets: [
    {
      title: 'Reading the Clues',
      icon: '🔍',
      exercises: [
        {
          id: 'm2l2-a1',
          type: 'mcq',
          question: "Her office light's still on at 11 p.m. She ___ have a deadline.",
          options: ['must', "can't"],
          correct: 0,
          explanation: 'The evidence points firmly to yes → **must**.',
        },
        {
          id: 'm2l2-a2',
          type: 'mcq',
          question: 'He ___ be the manager — he only started on Monday!',
          options: ["can't", "mustn't"],
          correct: 0,
          explanation: "Logical impossibility → **can't**. *Mustn't* = forbidden, which is a different scandal.",
        },
        {
          id: 'm2l2-a3',
          type: 'mcq',
          question: "I'm not sure where Jo is. She ___ be at the gym — it's leg day.",
          options: ['might', 'must'],
          correct: 0,
          explanation: 'Uncertain guess → **might**.',
        },
        {
          id: 'm2l2-a4',
          type: 'gap',
          before: "You've been travelling all day — you",
          after: 'shattered.',
          hint: 'must / be',
          accepted: ['must be'],
          explanation: 'Obvious deduction → **must be** shattered.',
        },
        {
          id: 'm2l2-a5',
          type: 'error-hunt',
          sentence: "She mustn't be Italian — she has no accent at all.",
          wrongIndex: 1,
          correction: "can't",
          explanation: "Negative deduction → **can't be**. *Mustn't* only means 'forbidden'.",
        },
        {
          id: 'm2l2-a6',
          type: 'mcq',
          question: "They ___ be twins! They're absolutely identical.",
          options: ['must', 'might'],
          correct: 0,
          explanation: 'Overwhelming evidence → **must**.',
        },
        {
          id: 'm2l2-a7',
          type: 'sort',
          prompt: 'How certain is the speaker?',
          buckets: ["Surely YES ✅", 'Surely NO ❌', 'Just maybe 🤔'],
          items: [
            { text: 'must', bucket: 0 },
            { text: "can't", bucket: 1 },
            { text: 'might', bucket: 2 },
            { text: "couldn't", bucket: 1 },
            { text: 'may', bucket: 2 },
            { text: "will (that'll be…)", bucket: 0 },
          ],
          explanation: 'must & assumption-will = confident yes · can\'t & couldn\'t = confident no · may/might = shrug.',
        },
        {
          id: 'm2l2-a8',
          type: 'mcq',
          question: 'This bill ___ be right — we only had two coffees!',
          options: ["can't", 'might not'],
          correct: 0,
          explanation: 'Strong disbelief, not mild doubt → **can\'t**.',
        },
        {
          id: 'm2l2-a9',
          type: 'mcq',
          question: "She ___ not come tonight — she hasn't decided yet.",
          options: ['may', 'can'],
          correct: 0,
          explanation: 'Maybe not → **may not**. (*can not come* would deny her the ability!)',
        },
      ],
    },
    {
      title: 'Caught in the Act',
      icon: '🎥',
      exercises: [
        {
          id: 'm2l2-b1',
          type: 'mcq',
          question: 'Listen to that thumping upstairs — the kids ___ on the beds again.',
          options: ['must be jumping', 'must jump'],
          correct: 0,
          explanation: 'Happening right now → **must be + -ing**.',
        },
        {
          id: 'm2l2-b2',
          type: 'gap',
          before: "Her phone's engaged — she",
          after: 'to her sister. They talk for hours.',
          hint: 'must / talk',
          accepted: ['must be talking'],
          explanation: 'Deduction about an action in progress → **must be talking**.',
        },
        {
          id: 'm2l2-b3',
          type: 'mcq',
          question: 'You ___ serious. A llama? In the lift?',
          options: ["can't be", "mustn't be"],
          correct: 0,
          explanation: 'Disbelief → **can\'t be serious** — the eternal classic.',
        },
        {
          id: 'm2l2-b4',
          type: 'mcq',
          question: "He's in a suit today — he ___ to that interview after all.",
          options: ['might be going', 'might go'],
          correct: 0,
          explanation: 'Speculating about something already in motion → **might be going**.',
        },
        {
          id: 'm2l2-b5',
          type: 'order',
          correct: 'She must be working from home today.',
          distractors: ["can't", 'works'],
          explanation: 'must + be + -ing: deduction about right now.',
        },
        {
          id: 'm2l2-b6',
          type: 'mcq',
          question: "They're not answering — they ___ the match. Kick-off was at eight.",
          options: ['could be watching', 'could watch'],
          correct: 0,
          explanation: 'Possible activity in progress → **could be watching**.',
        },
        {
          id: 'm2l2-b7',
          type: 'gap',
          before: 'You',
          after: "— that's MY sandwich!",
          hint: 'must / joke',
          accepted: ['must be joking'],
          explanation: 'The outrage special → **must be joking**.',
        },
        {
          id: 'm2l2-b8',
          type: 'mcq',
          question: "It's 3 a.m. in Sydney — she ___ asleep. Try tomorrow.",
          options: ['will be', "can't be"],
          correct: 0,
          explanation: 'Confident assumption → **will be** asleep.',
        },
      ],
    },
    {
      title: 'The Probability Ladder',
      icon: '🪜',
      exercises: [
        {
          id: 'm2l2-d1',
          type: 'mcq',
          question: "United are ___ win — they haven't lost at home in two years.",
          options: ['bound to', 'unlikely to'],
          correct: 0,
          explanation: 'Practically certain → **bound to**.',
        },
        {
          id: 'm2l2-d2',
          type: 'mcq',
          question: "It'll ___ rain — take the big umbrella just in case.",
          options: ['probably', 'probable'],
          correct: 0,
          explanation: 'Adverb after *will* → **will probably rain**.',
        },
        {
          id: 'm2l2-d3',
          type: 'mcq',
          question: 'The results ___ be out by Friday, if all goes to plan.',
          options: ['should', "can't"],
          correct: 0,
          explanation: 'Reasonable expectation → **should**.',
        },
        {
          id: 'm2l2-d4',
          type: 'mcq',
          question: "Knowing him, he's ___ to say no. He always does.",
          options: ['bound', 'might'],
          correct: 0,
          explanation: '**bound to** = you can bet on it.',
        },
        {
          id: 'm2l2-d5',
          type: 'mcq',
          question: "She ___ won't make it tonight — her flight's delayed.",
          options: ['probably', 'probable'],
          correct: 0,
          explanation: 'Before *won\'t*, the adverb comes first: **probably won\'t**.',
        },
        {
          id: 'm2l2-d6',
          type: 'order',
          correct: 'That will be the postman at the door.',
          distractors: ['is', 'comes'],
          explanation: 'Confident present assumption → **That will be…**',
        },
        {
          id: 'm2l2-d7',
          type: 'mcq',
          question: "There's ___ to be traffic — it's Friday afternoon.",
          options: ['bound', 'must'],
          correct: 0,
          explanation: '**There\'s bound to be** = guaranteed, sadly.',
        },
        {
          id: 'm2l2-d8',
          type: 'transform',
          source: "I'm sure this isn't the right address — there's no house number 300.",
          keyword: "can't",
          accepted: ["This can't be the right address", "It can't be the right address"],
          explanation: 'Certain it\'s false → **This can\'t be the right address.**',
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm2l2-e1',
          type: 'speed',
          secondsPerItem: 8,
          items: [
            { question: "They're not home — they ___ be away.", options: ['must', "can't"], correct: 0 },
            { question: 'He ___ be 40! He looks 25.', options: ["can't", 'must'], correct: 0 },
            { question: 'It ___ snow later, so pack chains.', options: ['might', "can't"], correct: 0 },
            { question: 'That ___ be Dad — I heard his car.', options: ['will', "can't"], correct: 0 },
            { question: "You've run 20 km — you ___ be tired!", options: ['must', 'might not'], correct: 0 },
            { question: "She's ___ to win — she's miles ahead.", options: ['bound', "can't"], correct: 0 },
            { question: 'Shh — the baby ___ be sleeping.', options: ['might', 'can'], correct: 0 },
            { question: 'This ___ be right — check it again.', options: ["can't", "mustn't"], correct: 0 },
            { question: 'They should ___ home by now.', options: ['be', 'to be'], correct: 0 },
            { question: "He'll ___ be late. As usual.", options: ['probably', 'probable'], correct: 0 },
          ],
          explanation: 'must = surely yes · can\'t = surely no · might = shrug · will = I bet · bound to = guaranteed.',
        },
      ],
    },
  ],
  boss: {
    passPct: 80,
    exercises: [
      {
        id: 'm2l2-boss1',
        type: 'mcq',
        question: 'Six missed calls from Mum? Something ___ be wrong.',
        options: ['must', 'might not'],
        correct: 0,
        explanation: 'Strong evidence → **must**.',
      },
      {
        id: 'm2l2-boss2',
        type: 'mcq',
        question: "You ___ be cold — it's 30 degrees in here!",
        options: ["can't", "mustn't"],
        correct: 0,
        explanation: 'Impossible → **can\'t**. Deduction never uses *mustn\'t*.',
      },
      {
        id: 'm2l2-boss3',
        type: 'gap',
        before: "Their car's outside, so they",
        after: 'far.',
        hint: "can't / be",
        accepted: ["can't be"],
        explanation: 'Negative deduction → **can\'t be** far.',
      },
      {
        id: 'm2l2-boss4',
        type: 'mcq',
        question: "Don't wait for me — I ___ be late, depending on traffic.",
        options: ['may', "can't"],
        correct: 0,
        explanation: 'Possibility → **may**.',
      },
      {
        id: 'm2l2-boss5',
        type: 'gap',
        before: "Look — he's grinning at his phone. He",
        after: 'to Zoe again.',
        hint: 'must / text',
        accepted: ['must be texting'],
        explanation: 'Deduction about right now → **must be texting**.',
      },
      {
        id: 'm2l2-boss6',
        type: 'mcq',
        question: "That ___ be the courier — the tracking said 'out for delivery'.",
        options: ['will', "can't"],
        correct: 0,
        explanation: 'Confident assumption → **will**.',
      },
      {
        id: 'm2l2-boss7',
        type: 'error-hunt',
        sentence: "She mustn't be at work — her desk light is off.",
        wrongIndex: 1,
        correction: "can't",
        explanation: 'Sure it\'s false → **can\'t be**.',
      },
      {
        id: 'm2l2-boss8',
        type: 'mcq',
        question: 'The new café is ___ to be packed — it got a rave review yesterday.',
        options: ['bound', 'might'],
        correct: 0,
        explanation: 'Certainty → **bound to be**.',
      },
      {
        id: 'm2l2-boss9',
        type: 'mcq',
        question: "They ___ be lost. They've got GPS, two maps and a local guide.",
        options: ["can't", 'might'],
        correct: 0,
        explanation: 'The evidence rules it out → **can\'t**.',
      },
      {
        id: 'm2l2-boss10',
        type: 'order',
        correct: 'You must be very proud of her.',
        distractors: ["can't", 'being'],
        explanation: 'Warm deduction → **must be** proud.',
      },
      {
        id: 'm2l2-boss11',
        type: 'transform',
        source: "I'm sure she's on the train — she always catches the 7:40.",
        keyword: 'must',
        accepted: ['She must be on the train'],
        explanation: 'Confident deduction → **She must be on the train.**',
      },
    ],
  },
};
