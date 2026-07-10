import type { Lesson } from '../../types';

export const m6l4: Lesson = {
  id: 'm6l4',
  title: 'Discourse Markers',
  subtitle: 'linkers & conversational signposts',
  minutes: 45,
  goals: [
    'Link ideas like an essayist: moreover, consequently, on the contrary',
    'Sound native in conversation: anyway, mind you, by the way',
    'Stop confusing actually, in fact, at least, after all',
    'Choose the right register — formal ink vs coffee-break chat',
  ],
  cards: [
    {
      title: 'Signposts, not decoration',
      body: `Discourse markers tell the reader **where the argument is going**:

- **Adding**: moreover · furthermore · in addition · besides
- **Contrasting**: however · nevertheless · on the other hand
- **Cause → effect**: therefore · consequently · as a result
- **Sequencing**: firstly · then · finally · in conclusion

> The plan is expensive. **Moreover**, it is slow. **Consequently**, we rejected it.

Note the punctuation: full stop (or semicolon), marker, **comma**.`,
      miniCheck: {
        id: 'm6l4-c1',
        type: 'mcq',
        question: 'The bridge is unsafe. ___ , it will be closed from Monday.',
        options: ['Consequently', 'Moreover', 'On the contrary'],
        correct: 0,
        explanation:
          'Unsafe → closure is cause → effect: **Consequently**.',
      },
    },
    {
      title: 'however vs but vs although — punctuation matters',
      body: `Same contrast, three different grammars:

> It was cold, **but** we swam. (conjunction — joins with a comma)
> **Although** it was cold, we swam. (subordinator — one sentence)
> It was cold. **However,** we swam. (adverb — new sentence + comma)

The classic comma-splice crime: ~~It was cold, however we swam.~~ *However* cannot glue two clauses with just a comma.`,
      miniCheck: {
        id: 'm6l4-c2',
        type: 'mcq',
        question: 'Which is punctuated correctly?',
        options: [
          'The data was incomplete. However, we published on time.',
          'The data was incomplete, however we published on time.',
          'The data was incomplete however, we published on time.',
        ],
        correct: 0,
        explanation:
          '*However* starts a new sentence (or follows a semicolon) and takes a comma.',
      },
    },
    {
      title: 'The tricky twins: actually & in fact',
      body: `Both correct a wrong assumption — often politely:

> "You're French, right?" — "**Actually**, I'm Belgian."
> He looks fifty. **In fact**, he's only thirty-eight.

**at least** — softens or limits a claim:

> It's small, but **at least** it's cheap.

**after all** — "remember this fact!" (not "finally"!):

> Don't shout at him — he's only six, **after all**.`,
      miniCheck: {
        id: 'm6l4-c3',
        type: 'mcq',
        question: 'Of course she can vote — she IS eighteen, ___ .',
        options: ['after all', 'at last', 'in addition'],
        correct: 0,
        explanation:
          '**after all** = "remember, this justifies it". (*at last* = finally, wrong here.)',
      },
    },
    {
      title: 'Conversation glue',
      body: `Spoken English runs on these:

- **anyway** — back to the point / closing: "**Anyway**, as I was saying…"
- **by the way** — new, minor topic: "**By the way**, Sam called."
- **mind you** — adds a "but consider this": "Expensive. **Mind you**, it lasts forever."
- **you see** — explaining: "I was late — the bridge was up, **you see**."
- **I mean** — clarifying yourself: "It's fine. **I mean**, not perfect, but fine."
- **well** — buying half a second: "**Well**, that depends."`,
      miniCheck: {
        id: 'm6l4-c4',
        type: 'mcq',
        question: '"The hike was brutal. ___ , the views made up for it." (but consider…)',
        options: ['Mind you', 'By the way', 'Firstly'],
        correct: 0,
        explanation:
          '**Mind you** introduces a compensating consideration.',
      },
    },
    {
      title: 'on the other hand vs on the contrary',
      body: `Deceptively similar, totally different jobs:

**on the other hand** — weighs two valid sides:

> Flying is fast. **On the other hand**, trains are greener.

**on the contrary** — rejects the previous statement as false:

> "You must be bored." — "**On the contrary**, I'm having a wonderful time."

If you can say "that's wrong; the opposite is true" → *on the contrary*.`,
      miniCheck: {
        id: 'm6l4-c5',
        type: 'mcq',
        question: '"I suppose the show flopped?" — " ___ , it sold out every night."',
        options: ['On the contrary', 'On the other hand', 'Moreover'],
        correct: 0,
        explanation:
          'The assumption is flatly wrong → **On the contrary**.',
      },
    },
    {
      title: 'Register: ink vs coffee',
      body: `Same job, different clothes:

| Formal essay | Chat |
|---|---|
| moreover | besides / also |
| nevertheless | still / mind you |
| therefore | so |
| in conclusion | anyway |

> Essay: *The results were, **nevertheless**, encouraging.*
> Chat: *It rained all week. **Still**, we had fun.*

Mixing them up isn't wrong — it just sounds like wearing a tuxedo to the beach.`,
      tip: 'In exams, sprinkle — don\'t flood. One marker per sentence maximum; two "moreover"s per paragraph and the examiner starts twitching.',
      miniCheck: {
        id: 'm6l4-c6',
        type: 'mcq',
        question: 'Best marker for a formal report: "Sales fell. ___ , costs rose."',
        options: ['Furthermore', 'By the way', 'I mean'],
        correct: 0,
        explanation:
          'Adding a second negative in formal register → **Furthermore**.',
      },
    },
  ],
  sets: [
    {
      title: 'Essay Engineering',
      icon: '🖋️',
      exercises: [
        {
          id: 'm6l4-a1',
          type: 'mcq',
          question: 'The venue is cheap. ___ , it is easy to reach by metro.',
          options: ['Moreover', 'However', 'Consequently'],
          correct: 0,
          explanation:
            'Second advantage added → **Moreover**.',
        },
        {
          id: 'm6l4-a2',
          type: 'gap',
          before: 'He never trained.',
          after: ', he lost every match that season. (cause → effect, one word)',
          hint: 'as a result / one word',
          accepted: ['consequently', 'therefore'],
          explanation:
            'Effect of not training → **Consequently/Therefore**.',
        },
        {
          id: 'm6l4-a3',
          type: 'error-hunt',
          sentence: 'The hotel was full, however we found a lovely hostel.',
          wrongIndex: 4,
          correction: 'but',
          explanation:
            'Comma splice! Either *…full, **but** we…* or *…full. **However,** we…*',
        },
        {
          id: 'm6l4-a4',
          type: 'sort',
          prompt: 'Sort the markers by their job.',
          buckets: ['adding', 'contrasting', 'cause → effect'],
          items: [
            { text: 'furthermore', bucket: 0 },
            { text: 'nevertheless', bucket: 1 },
            { text: 'as a result', bucket: 2 },
            { text: 'in addition', bucket: 0 },
            { text: 'on the other hand', bucket: 1 },
            { text: 'therefore', bucket: 2 },
            { text: 'besides', bucket: 0 },
            { text: 'even so', bucket: 1 },
          ],
          explanation:
            'Three big families: add, contrast, conclude-from.',
        },
        {
          id: 'm6l4-a5',
          type: 'mcq',
          question: 'The evidence was weak. ___ , the jury convicted him.',
          options: ['Nevertheless', 'Therefore', 'For instance'],
          correct: 0,
          explanation:
            'Surprising contrast with the weak evidence → **Nevertheless**.',
        },
        {
          id: 'm6l4-a6',
          type: 'order',
          correct: 'In conclusion the benefits clearly outweigh the risks',
          explanation:
            'Essay-closing marker: **In conclusion,** + summary claim.',
        },
        {
          id: 'm6l4-a7',
          type: 'gap',
          before: 'Cycling is healthy.',
          after: 'the other hand, cycling in traffic can be risky.',
          hint: 'one word',
          accepted: ['on'],
          explanation:
            'Weighing two sides → **On the other hand**.',
        },
        {
          id: 'm6l4-a8',
          type: 'mcq',
          question: 'Pick the sentence with correct punctuation:',
          options: [
            'Prices rose; therefore, demand fell.',
            'Prices rose, therefore demand fell.',
            'Prices rose therefore, demand fell.',
          ],
          correct: 0,
          explanation:
            '*therefore* between clauses needs a **semicolon** (or full stop) + comma.',
        },
      ],
    },
    {
      title: 'Coffee Break',
      icon: '☕',
      exercises: [
        {
          id: 'm6l4-b1',
          type: 'mcq',
          question: '" ___ , did you ever return that drill to Marco?" (new minor topic)',
          options: ['By the way', 'Therefore', 'In conclusion'],
          correct: 0,
          explanation:
            'Sudden small topic-switch → **By the way**.',
        },
        {
          id: 'm6l4-b2',
          type: 'gap',
          before: 'Sorry, that was a long story about my cat.',
          after: ', what were you saying about the deadline? (back to the point)',
          hint: 'one word',
          accepted: ['anyway'],
          explanation:
            'Returning to the main thread → **Anyway**.',
        },
        {
          id: 'm6l4-b3',
          type: 'match',
          prompt: 'Match the marker to the moment.',
          pairs: [
            ['well,', 'buying a moment before answering'],
            ['I mean,', 'rephrasing what you just said'],
            ['you see,', 'explaining the background'],
            ['mind you,', 'adding a "but consider this"'],
          ],
          explanation:
            'Conversational markers manage the flow of talk, not the logic of essays.',
        },
        {
          id: 'm6l4-b4',
          type: 'mcq',
          question: '"The food was cold. ___ , the waiter was charming, so we tipped anyway."',
          options: ['Mind you', 'Consequently', 'Firstly'],
          correct: 0,
          explanation:
            'Compensating consideration → **Mind you**.',
        },
        {
          id: 'm6l4-b5',
          type: 'error-hunt',
          sentence: 'She is not just good; by the way, she is the best in the country.',
          wrongIndex: 5,
          correction: 'in fact',
          explanation:
            '*by the way* = trivial aside — but this is an intensified restatement → **in fact**.',
        },
        {
          id: 'm6l4-b6',
          type: 'mcq',
          question: '"You must hate jazz." — " ___ , I own two hundred jazz records."',
          options: ['On the contrary', 'On the other hand', 'Besides'],
          correct: 0,
          explanation:
            'The assumption is dead wrong → **On the contrary**.',
        },
        {
          id: 'm6l4-b7',
          type: 'gap',
          before: 'The flat is tiny, but at',
          after: 'the rent is reasonable. (softening)',
          hint: 'one word',
          accepted: ['least'],
          explanation:
            '**at least** rescues one positive from the negatives.',
        },
        {
          id: 'm6l4-b8',
          type: 'mcq',
          question: '"Why is Ana upset?" — " ___ , someone ate her clearly-labelled yoghurt."',
          options: ['Well, you see', 'In conclusion', 'Furthermore'],
          correct: 0,
          explanation:
            'Explaining background in chat → **Well, you see,…**',
        },
      ],
    },
    {
      title: 'The Confusables Clinic',
      icon: '🩺',
      exercises: [
        {
          id: 'm6l4-d1',
          type: 'mcq',
          question: '"Did the interview go badly?" — " ___ , they offered me the job on the spot."',
          options: ['On the contrary', 'On the other hand', 'At least'],
          correct: 0,
          explanation:
            'Rejecting the assumption entirely → **On the contrary**.',
        },
        {
          id: 'm6l4-d2',
          type: 'mcq',
          question: 'He seems strict. ___ , his students adore him. (surprising truth)',
          options: ['In fact', 'In addition', 'In conclusion'],
          correct: 0,
          explanation:
            'Correcting the impression with the real situation → **In fact**.',
        },
        {
          id: 'm6l4-d3',
          type: 'sort',
          prompt: 'after all, at last, or at least?',
          buckets: ['after all', 'at last', 'at least'],
          items: [
            { text: 'He is your brother, ___ — forgive him.', bucket: 0 },
            { text: 'The train arrived, ___ , forty minutes late.', bucket: 1 },
            { text: 'We lost, but ___ we scored twice.', bucket: 2 },
            { text: 'Why apologise? It was her idea, ___ .', bucket: 0 },
            { text: '___ ! I have been waiting for hours!', bucket: 1 },
            { text: 'Take an umbrella — ___ it will keep your head dry.', bucket: 2 },
          ],
          explanation:
            '**after all** = remember this fact · **at last** = finally! · **at least** = one saving grace.',
        },
        {
          id: 'm6l4-d4',
          type: 'error-hunt',
          sentence: 'The results were poor. Despite, the team stayed positive.',
          wrongIndex: 4,
          correction: 'Nevertheless',
          explanation:
            '*Despite* needs a noun — standing alone it fails. Sentence-initial contrast → **Nevertheless,**.',
        },
        {
          id: 'm6l4-d5',
          type: 'mcq',
          question: '"Actually" is best used to…',
          options: [
            'politely correct an assumption',
            'add a formal conclusion',
            'list a second reason',
          ],
          correct: 0,
          explanation:
            '*Actually* gently says "that is not quite right": "Actually, I\'m vegetarian."',
        },
        {
          id: 'm6l4-d6',
          type: 'gap',
          before: 'I was going to complain, but he apologised first. After',
          after: ', everyone makes mistakes. (idiom)',
          hint: 'one word',
          accepted: ['all'],
          explanation:
            '**After all** = this fact justifies my attitude.',
        },
        {
          id: 'm6l4-d7',
          type: 'match',
          prompt: 'Formal ↔ informal twins.',
          pairs: [
            ['therefore', 'so'],
            ['nevertheless', 'still'],
            ['moreover', 'besides'],
            ['in conclusion', 'anyway'],
          ],
          explanation:
            'Same logical job, different register — pick the one that matches the room.',
        },
        {
          id: 'm6l4-d8',
          type: 'mcq',
          question: 'Which sentence uses "after all" correctly?',
          options: [
            "Let him choose the film — it's his birthday, after all.",
            'We queued for hours and, after all, got tickets.',
            'After all the tickets, we queued.',
          ],
          correct: 0,
          explanation:
            '**after all** = justification, not sequence. "Finally got tickets" would be *in the end*.',
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm6l4-e1',
          type: 'speed',
          secondsPerItem: 8,
          explanation: 'Signposts at full speed!',
          items: [
            {
              question: 'Cheap and, ___ , fast.',
              options: ['moreover', 'nevertheless'],
              correct: 0,
            },
            {
              question: 'It rained. ___ , we went out.',
              options: ['Even so', 'Therefore'],
              correct: 0,
            },
            {
              question: 'He broke it; ___ , he pays.',
              options: ['therefore', 'by the way'],
              correct: 0,
            },
            {
              question: '" ___ , back to business."',
              options: ['Anyway', 'Moreover'],
              correct: 0,
            },
            {
              question: '"Bored?" "___ — loving it!"',
              options: ['On the contrary', 'On the other hand'],
              correct: 0,
            },
            {
              question: "It's old but ___ it works.",
              options: ['at least', 'at last'],
              correct: 0,
            },
            {
              question: '___ , Leo says hi. (small aside)',
              options: ['By the way', 'As a result'],
              correct: 0,
            },
            {
              question: "He's 90 — slow down, ___ .",
              options: ['after all', 'in addition'],
              correct: 0,
            },
            {
              question: 'Formal twin of "so":',
              options: ['therefore', 'mind you'],
              correct: 0,
            },
            {
              question: '"Pricey. ___ , it lasts."',
              options: ['Mind you', 'Firstly'],
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
        id: 'm6l4-boss1',
        type: 'mcq',
        question: 'The bid was rejected. ___ , the committee praised its ambition.',
        options: ['Nevertheless', 'Consequently', 'For example'],
        correct: 0,
        explanation:
          'Praise despite rejection = contrast → **Nevertheless**.',
      },
      {
        id: 'm6l4-boss2',
        type: 'gap',
        before: 'The samples were contaminated;',
        after: ', the trial had to be restarted. (formal, cause → effect)',
        hint: 'one word',
        accepted: ['consequently', 'therefore', 'accordingly'],
        explanation:
          'Formal effect marker after a semicolon: **consequently/therefore**.',
      },
      {
        id: 'm6l4-boss3',
        type: 'error-hunt',
        sentence: 'The road was flooded, however the bus got through.',
        wrongIndex: 4,
        correction: 'but',
        explanation:
          'Comma splice with *however* — swap to **but**, or restart: *…flooded. However, the bus…*',
      },
      {
        id: 'm6l4-boss4',
        type: 'mcq',
        question: '"I assume you lost money on it?" — " ___ , it doubled in value."',
        options: ['On the contrary', 'On the other hand', 'Mind you'],
        correct: 0,
        explanation:
          'Flat rejection of the assumption → **On the contrary**.',
      },
      {
        id: 'm6l4-boss5',
        type: 'gap',
        before: "Don't be too hard on yourself — it was your first attempt, after",
        after: '.',
        hint: 'one word',
        accepted: ['all'],
        explanation:
          '**after all** = this fact excuses/justifies it.',
      },
      {
        id: 'm6l4-boss6',
        type: 'sort',
        prompt: 'Essay ink or coffee chat?',
        buckets: ['formal essay', 'conversation'],
        items: [
          { text: 'furthermore', bucket: 0 },
          { text: 'mind you', bucket: 1 },
          { text: 'consequently', bucket: 0 },
          { text: 'anyway', bucket: 1 },
          { text: 'nevertheless', bucket: 0 },
          { text: 'you see', bucket: 1 },
        ],
        explanation:
          'Register check: tuxedo words vs t-shirt words.',
      },
      {
        id: 'm6l4-boss7',
        type: 'mcq',
        question: 'The gym is far away. ___ , the membership is a bargain, so I keep going.',
        options: ['On the other hand', 'On the contrary', 'In conclusion'],
        correct: 0,
        explanation:
          'Two valid sides being weighed → **On the other hand**.',
      },
      {
        id: 'm6l4-boss8',
        type: 'order',
        correct: 'Moreover the new design uses far less energy',
        explanation:
          'Adding a further advantage: **Moreover,** + claim.',
      },
      {
        id: 'm6l4-boss9',
        type: 'mcq',
        question: '"You said the test went badly?" — "___ , I failed spectacularly. But the retake went fine!"',
        options: ['Well, actually', 'In conclusion', 'On the other hand'],
        correct: 0,
        explanation:
          'Conversational correction/concession → **Well, actually,…**',
      },
      {
        id: 'm6l4-boss10',
        type: 'gap',
        before: 'The keynote ran long.',
        after: ', lunch was late, and the Wi-Fi died. (adding — formal)',
        hint: 'two words / one word',
        accepted: ['in addition', 'furthermore', 'moreover'],
        explanation:
          'Piling on another problem, formally → **In addition/Furthermore**.',
      },
      {
        id: 'm6l4-boss11',
        type: 'match',
        prompt: 'Match the marker to its function.',
        pairs: [
          ['nevertheless', 'contrast despite what preceded'],
          ['consequently', 'result of what preceded'],
          ['by the way', 'unrelated small addition'],
          ['in fact', 'stronger, truer restatement'],
        ],
        explanation:
          'Four different signposts — contrast, result, aside, intensified truth.',
      },
    ],
  },
};
