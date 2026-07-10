import type { Lesson } from '../../types';

export const m7l3: Lesson = {
  id: 'm7l3',
  title: 'Fronting & Emphatic do',
  subtitle: 'This I must see!',
  minutes: 40,
  goals: [
    'Front objects and complements for drama: This I must see',
    'Invert with fronted place phrases: Here comes the bus',
    'Add punch with emphatic do/does/did',
    'Use as/though-fronting and echo emphasis naturally',
  ],
  cards: [
    {
      title: 'Fronting: dragging things to the spotlight',
      body: `English normally runs subject-verb-object. Fronting drags another element to position one:

> I must see this. → **This** I must see!
> I can forgive rudeness; **laziness** I cannot (forgive).
> They said she'd win, **and win she did**.

Note: plain fronting keeps normal order after the fronted bit — no inversion (unlike *Never have I…*).`,
      miniCheck: {
        id: 'm7l3-c1',
        type: 'mcq',
        question: 'The dramatic fronted version of "I will never understand opera":',
        options: [
          'Opera I will never understand.',
          'Opera will never I understand.',
          'Understand opera never I will.',
        ],
        correct: 0,
        explanation:
          'Front the object, keep the rest in normal order: **Opera I will never understand.**',
      },
    },
    {
      title: 'Place-phrase fronting: Here comes trouble',
      body: `Fronted **place/direction phrases** DO trigger inversion — with verbs of position and movement:

> **Here comes** the bus. · **There goes** our deposit.
> **On the hill stood** a ruined tower.
> **Out of the fog appeared** a lighthouse.
> **Next to the church is** a tiny bakery.

⚠️ But not with pronouns: **Here it comes** — not ~~Here comes it~~.`,
      miniCheck: {
        id: 'm7l3-c2',
        type: 'gap',
        before: 'At the end of the lane',
        after: 'a crooked little cottage. (stand — past)',
        hint: 'stand',
        accepted: ['stood'],
        explanation:
          'Fronted place → verb before subject: **…lane stood a cottage**.',
      },
    },
    {
      title: 'Emphatic do: the truth-insister',
      body: `Add **do/does/did** to a positive sentence to insist it is true:

> "You never call!" — "I **do** call — you never answer!"
> She **does** work hard, whatever they say.
> We **did** warn you about the tide.

Also for warm contrast and polite urging:

> I don't cook much, but I **do** make a legendary omelette.
> **Do** sit down. · **Do** try the cake.`,
      miniCheck: {
        id: 'm7l3-c3',
        type: 'gap',
        before: '"You forgot my birthday!" — "I',
        after: 'remember it — I just posted the card late!"',
        hint: 'insist!',
        accepted: ['did'],
        explanation:
          'Insisting on a past positive → **did** + base verb: *I DID remember.*',
      },
    },
    {
      title: 'Stress patterns: where the music goes',
      body: `Emphatic *do* carries the sentence stress — and changes meanings:

> I **DO** like your haircut. (contradiction: you thought I didn't)
> **DO** be careful. (urgent care)
> He **DOES** exist! (triumphant proof)

In writing, the *do* itself signals the stress; no capitals needed. In speech, hit it hard:

> We did **warn** them ✗ → We **DID** warn them ✓`,
      miniCheck: {
        id: 'm7l3-c4',
        type: 'mcq',
        question: 'Your friend claims you hate their soup. You actually like it:',
        options: [
          'I do like your soup!',
          'I am like your soup!',
          'I like do your soup!',
        ],
        correct: 0,
        explanation:
          'Contradicting → **do + base verb** right after the subject.',
      },
    },
    {
      title: 'as- and though-fronting',
      body: `Front an adjective with **as/though** for concession (M6 flashback, now in style class):

> **Cold as it was**, we swam anyway.
> **Brilliant though she is**, she cannot fix this alone.

And the storyteller's echo — front the verb, close with *do*:

> They promised to deliver, **and deliver they did**.
> He needed to escape, **and escape he did**.`,
      miniCheck: {
        id: 'm7l3-c5',
        type: 'gap',
        before: 'We told him to apologise, and apologise he',
        after: '— in front of the whole office.',
        hint: 'one word',
        accepted: ['did'],
        explanation:
          'Echo-fronting: *and + verb + subject + **did***.',
      },
    },
    {
      title: 'When to deploy all this',
      body: `Fronting and emphatic *do* are **rhetorical spice**:

- Contradicting: *I **do** pay attention.*
- Contrast pairs: *Some things change; **others** stay the same. Meat I avoid; **fish** I eat.*
- Storytelling drama: *…**and win she did**.*
- Stage directions & description: *On the left **sits** the drummer.*

One per paragraph = powerful. Every sentence = exhausting. Choose your moments.`,
      tip: 'Negative fronting (Never, Rarely…) inverts; plain object fronting does not. "This I must see" (no inversion) vs "Never have I seen this" (inversion).',
      miniCheck: {
        id: 'm7l3-c6',
        type: 'mcq',
        question: 'Which sentence is WRONG?',
        options: [
          'This must I see.',
          'This I must see.',
          'Never have I seen this.',
        ],
        correct: 0,
        explanation:
          'Plain fronting keeps normal order: **This I must see.** Inversion belongs to negative openers.',
      },
    },
  ],
  sets: [
    {
      title: 'Front Stage',
      icon: '🎪',
      exercises: [
        {
          id: 'm7l3-a1',
          type: 'transform',
          source: 'I will never forget that summer. (front the object)',
          keyword: 'that summer',
          before: 'That summer',
          after: 'forget.',
          accepted: ['i will never', 'i shall never'],
          explanation:
            'Front the object, keep normal order: **That summer I will never forget.**',
        },
        {
          id: 'm7l3-a2',
          type: 'mcq',
          question: 'Complete the contrast: "Cheese I adore; ___ ."',
          options: [
            'olives I cannot stand',
            'cannot olives I stand',
            'I olives cannot stand',
          ],
          correct: 0,
          explanation:
            'Parallel fronting: *Cheese I adore; **olives I cannot stand**.*',
        },
        {
          id: 'm7l3-a3',
          type: 'order',
          correct: 'Some battles you win and some you simply survive',
          explanation:
            'Fronted objects in parallel: *Some battles you win…*',
        },
        {
          id: 'm7l3-a4',
          type: 'error-hunt',
          sentence: 'That story believe I not for a single second.',
          wrongIndex: 2,
          correction: 'I do not believe',
          explanation:
            'Plain fronting keeps normal order: *That story **I do not believe**…* — no verb-subject flip.',
        },
        {
          id: 'm7l3-a5',
          type: 'gap',
          before: 'Strange',
          after: 'it may sound, I miss doing the dishes. (concession word)',
          hint: 'as / though',
          accepted: ['as', 'though'],
          explanation:
            'Adjective fronted + **as/though**: *Strange as it may sound…*',
        },
        {
          id: 'm7l3-a6',
          type: 'mcq',
          question: 'They swore they would finish on time — ___ .',
          options: [
            'and finish they did',
            'and did finish they',
            'and they finish did',
          ],
          correct: 0,
          explanation:
            'Echo-fronting: **and + verb + subject + did**.',
        },
        {
          id: 'm7l3-a7',
          type: 'transform',
          source: 'She promised to fight the decision, and she really fought it.',
          keyword: 'did',
          before: 'She promised to fight the decision, and fight she',
          after: '.',
          accepted: ['did'],
          explanation:
            'Echo-fronting closes with **did**: *and fight she did*.',
        },
        {
          id: 'm7l3-a8',
          type: 'sort',
          prompt: 'Does the fronted sentence invert or not?',
          buckets: ['no inversion (plain fronting)', 'inversion (negative opener)'],
          items: [
            { text: 'This film I have seen twice.', bucket: 0 },
            { text: 'Never have I seen this film.', bucket: 1 },
            { text: 'Mushrooms I simply cannot eat.', bucket: 0 },
            { text: 'Rarely do I eat mushrooms.', bucket: 1 },
            { text: 'That excuse we have heard before.', bucket: 0 },
            { text: 'Seldom have we heard that excuse.', bucket: 1 },
          ],
          explanation:
            'Objects fronted → normal order. Negative adverbs fronted → question order.',
        },
      ],
    },
    {
      title: 'Here Comes the Grammar',
      icon: '🚌',
      exercises: [
        {
          id: 'm7l3-b1',
          type: 'gap',
          before: 'Here',
          after: 'the bride! (come — present)',
          hint: 'come',
          accepted: ['comes'],
          explanation:
            'Fronted *here* + noun subject → **Here comes the bride!**',
        },
        {
          id: 'm7l3-b2',
          type: 'mcq',
          question: 'Your last banknote flies into the river. You cry:',
          options: ['There goes my dinner money!', 'There my dinner money goes!', 'Goes there my dinner money!'],
          correct: 0,
          explanation:
            '**There goes + noun** — the classic sigh of loss.',
        },
        {
          id: 'm7l3-b3',
          type: 'error-hunt',
          sentence: 'Here comes it — the moment we all feared.',
          wrongIndex: 2,
          correction: 'it comes',
          explanation:
            'Pronoun subject → no inversion: **Here it comes.**',
        },
        {
          id: 'm7l3-b4',
          type: 'order',
          correct: 'On the corner stood an old red phone box',
          explanation:
            'Fronted place + verb + subject: **On the corner stood…**',
        },
        {
          id: 'm7l3-b5',
          type: 'gap',
          before: 'Out of the tunnel',
          after: 'the night train, two hours late. (roar — past)',
          hint: 'roar',
          accepted: ['roared'],
          explanation:
            'Fronted direction + movement verb → inversion: **…tunnel roared the train**.',
        },
        {
          id: 'm7l3-b6',
          type: 'mcq',
          question: 'Which description suits a novel\'s opening line?',
          options: [
            'At the edge of the marsh crouched a low grey farmhouse.',
            'A low grey farmhouse at the edge of the marsh crouched.',
            'Crouched at the farmhouse the marsh edge grey.',
          ],
          correct: 0,
          explanation:
            'Fronted place + inversion paints the scene: **At the edge… crouched a farmhouse.**',
        },
        {
          id: 'm7l3-b7',
          type: 'transform',
          source: 'A tiny café is between the two banks. (front the place)',
          keyword: 'between',
          before: 'Between the two banks',
          after: 'a tiny café.',
          accepted: ['is', 'sits', 'stands'],
          explanation:
            'Fronted place → **Between the two banks is/sits a tiny café.**',
        },
        {
          id: 'm7l3-b8',
          type: 'sort',
          prompt: 'Invert or not?',
          buckets: ['invert (noun subject)', 'no inversion (pronoun)'],
          items: [
            { text: 'Here ___ the results. (come)', bucket: 0 },
            { text: 'Here ___ . (they / come)', bucket: 1 },
            { text: 'There ___ the last piece of cake. (go)', bucket: 0 },
            { text: 'There ___ . (it / go)', bucket: 1 },
          ],
          explanation:
            'Noun subjects flip (*Here come the results*); pronouns refuse (*Here they come*).',
        },
      ],
    },
    {
      title: 'The Insistence Lab',
      icon: '📢',
      exercises: [
        {
          id: 'm7l3-d1',
          type: 'gap',
          before: '"Nobody helped me!" — "We',
          after: 'help you — for three hours!"',
          hint: 'insist, past',
          accepted: ['did'],
          explanation:
            'Insisting on a past positive → **did** + base: *We DID help you.*',
        },
        {
          id: 'm7l3-d2',
          type: 'mcq',
          question: 'Polite, warm urging at the door:',
          options: ['Do come in!', 'You do come in!', 'Come do in!'],
          correct: 0,
          explanation:
            'Imperative with **Do** = warm insistence: *Do come in!*',
        },
        {
          id: 'm7l3-d3',
          type: 'error-hunt',
          sentence: 'She does knows the password, I promise you.',
          wrongIndex: 2,
          correction: 'know',
          explanation:
            'After emphatic *does* → **base verb**: *She does KNOW.*',
        },
        {
          id: 'm7l3-d4',
          type: 'transform',
          source: 'He believes you. Really. (make it emphatic)',
          keyword: 'does',
          before: 'He',
          after: 'you.',
          accepted: ['does believe'],
          explanation:
            'Emphatic third person: **does believe**.',
        },
        {
          id: 'm7l3-d5',
          type: 'mcq',
          question: '"I don\'t travel much, but I ___ visit my sister in Rome every spring."',
          options: ['do', 'am', 'will do'],
          correct: 0,
          explanation:
            'Warm contrast with the negative before it → **do visit**.',
        },
        {
          id: 'm7l3-d6',
          type: 'order',
          correct: 'I do apologise for the dreadful delay',
          explanation:
            'Formal-polite emphasis: **I do apologise…**',
        },
        {
          id: 'm7l3-d7',
          type: 'gap',
          before: 'The lab results',
          after: 'confirm the theory — twice, in fact. (emphatic, past)',
          hint: 'insist!',
          accepted: ['did'],
          explanation:
            'Past insistence: *The results **did confirm** the theory.*',
        },
        {
          id: 'm7l3-d8',
          type: 'sort',
          prompt: 'What is the do doing?',
          buckets: ['emphatic do', 'ordinary auxiliary'],
          items: [
            { text: 'I DO like mornings, honestly.', bucket: 0 },
            { text: 'Do you like mornings?', bucket: 1 },
            { text: 'Do be patient with him.', bucket: 0 },
            { text: "I don't like mornings.", bucket: 1 },
            { text: 'She did pass — check the list!', bucket: 0 },
            { text: 'Did she pass the exam?', bucket: 1 },
          ],
          explanation:
            'Emphatic *do* insists in positive statements; ordinary *do* builds questions and negatives.',
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm7l3-e1',
          type: 'speed',
          secondsPerItem: 8,
          explanation: 'Fronting and emphasis at full speed!',
          items: [
            {
              question: 'Here ___ the train!',
              options: ['comes', 'come it'],
              correct: 0,
            },
            {
              question: 'This I ___ see!',
              options: ['must', 'must to'],
              correct: 0,
            },
            {
              question: 'I ___ lock the door — I swear!',
              options: ['did', 'done'],
              correct: 0,
            },
            {
              question: '___ sit down, please.',
              options: ['Do', 'Does'],
              correct: 0,
            },
            {
              question: 'There ___ our bus.',
              options: ['goes', 'going'],
              correct: 0,
            },
            {
              question: 'She does ___ the answer.',
              options: ['know', 'knows'],
              correct: 0,
            },
            {
              question: 'Cold ___ it was, we swam.',
              options: ['as', 'so'],
              correct: 0,
            },
            {
              question: '…and win they ___ .',
              options: ['did', 'done'],
              correct: 0,
            },
            {
              question: 'On the hill ___ a castle.',
              options: ['stood', 'it stood'],
              correct: 0,
            },
            {
              question: 'Here ___ come. (they)',
              options: ['they', 'comes they'],
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
        id: 'm7l3-boss1',
        type: 'transform',
        source: 'I cannot explain that decision. (front the object)',
        keyword: 'decision',
        before: 'That decision',
        after: 'explain.',
        accepted: ['i cannot', 'i can not', "i can't"],
        explanation:
          'Plain fronting, normal order: **That decision I cannot explain.**',
      },
      {
        id: 'm7l3-boss2',
        type: 'gap',
        before: 'Above the fireplace',
        after: 'a portrait of a stern great-aunt. (hang — past)',
        hint: 'hang',
        accepted: ['hung'],
        explanation:
          'Fronted place → inversion: **Above the fireplace hung a portrait.**',
      },
      {
        id: 'm7l3-boss3',
        type: 'mcq',
        question: '"You never said the meeting moved!" — Best comeback:',
        options: [
          'I did say it — I emailed you twice!',
          'I said do it — I emailed you twice!',
          'I do said it — I emailed you twice!',
        ],
        correct: 0,
        explanation:
          'Past insistence: **did + base verb** — *I did say it.*',
      },
      {
        id: 'm7l3-boss4',
        type: 'error-hunt',
        sentence: 'Here comes they, an hour late as always.',
        wrongIndex: 2,
        correction: 'they come',
        explanation:
          'Pronoun subject → no inversion: **Here they come.**',
      },
      {
        id: 'm7l3-boss5',
        type: 'order',
        correct: 'Tired though she was she rewrote the final chapter',
        explanation:
          'Adjective fronted + **though**: *Tired though she was,…*',
      },
      {
        id: 'm7l3-boss6',
        type: 'gap',
        before: 'They dared him to jump in the lake, and jump he',
        after: '— in January.',
        hint: 'one word',
        accepted: ['did'],
        explanation:
          'Echo-fronting: **and jump he did**.',
      },
      {
        id: 'm7l3-boss7',
        type: 'mcq',
        question: 'Which fronted sentence is correct?',
        options: [
          'Chocolate I can resist; free chocolate I cannot.',
          'Chocolate can I resist; free chocolate cannot I.',
          'Never I have tasted better chocolate.',
        ],
        correct: 0,
        explanation:
          'Fronted objects keep normal order. (*Never* fronted would need inversion: *Never have I tasted…*)',
      },
      {
        id: 'm7l3-boss8',
        type: 'transform',
        source: 'She really does try her best. Contradict the doubters. (emphatic, present, third person)',
        keyword: 'does',
        before: 'She',
        after: 'her best, whatever anyone says.',
        accepted: ['does try'],
        explanation: 'Emphatic present: **does try**.',
      },
      {
        id: 'm7l3-boss9',
        type: 'error-hunt',
        sentence: 'Do comes in and make yourself at home.',
        wrongIndex: 1,
        correction: 'come',
        explanation:
          'Emphatic imperative: **Do + base verb** — *Do come in.*',
      },
      {
        id: 'm7l3-boss10',
        type: 'order',
        correct: 'Out of the shadows stepped a man in a long coat',
        explanation:
          'Fronted direction + inversion — pure detective-novel drama.',
      },
      {
        id: 'm7l3-boss11',
        type: 'sort',
        prompt: 'Emphatic do, place inversion, or object fronting?',
        buckets: ['emphatic do', 'place inversion', 'object fronting'],
        items: [
          { text: 'I do miss the old office.', bucket: 0 },
          { text: 'By the door stood two suitcases.', bucket: 1 },
          { text: 'His first novel I loved; the sequel, less so.', bucket: 2 },
          { text: 'Do try to rest.', bucket: 0 },
          { text: 'There goes the last ferry.', bucket: 1 },
          { text: 'Excuses like that we have all heard.', bucket: 2 },
        ],
        explanation:
          'Three flavours of emphasis: insist (do), set the scene (place inversion), contrast (fronted object).',
      },
    ],
  },
};
