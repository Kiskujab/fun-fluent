import type { Lesson } from '../../types';

export const m4l4: Lesson = {
  id: 'm4l4',
  title: 'The Five Senses',
  subtitle: 'see sb do vs doing · look/sound like · can see',
  minutes: 35,
  goals: [
    'Choose between saw him cross and saw him crossing',
    'Use adjectives (not adverbs!) after look, sound, smell, taste, feel',
    'Master look like / look as if / look + adjective',
    'Handle can see, can hear for right-now perception',
  ],
  cards: [
    {
      title: 'saw him cross vs saw him crossing',
      body: `After **see, hear, watch, notice, feel** + object, English offers two forms:

**Base verb** = you witnessed the **whole, complete** action:

> I **saw her cross** the road. (start to finish)
> We **heard him play** the whole sonata.

**-ing** = you caught the action **in progress**:

> I **saw her crossing** the road. (mid-crossing, a snapshot)
> We **heard him playing** as we walked past.`,
      miniCheck: {
        id: 'm4l4-c1',
        type: 'mcq',
        question: 'As I drove past the park, I saw some kids ___ football.',
        options: ['playing', 'play'],
        correct: 0,
        explanation:
          'You drove past — a snapshot of the action in progress → **saw them playing**.',
      },
    },
    {
      title: 'The complete-action test',
      body: `When the completeness matters, the choice changes the story:

> I **heard the bomb explode**. (one complete event — base verb)
> I **smelled something burning**. (ongoing — -ing)

Detective logic:

> The witness **saw the thief climb** out of the window. (whole action — reliable witness!)
> The witness **saw the thief climbing** out of the window. (caught mid-climb)`,
      miniCheck: {
        id: 'm4l4-c2',
        type: 'mcq',
        question: 'I heard the door ___ — one loud bang, then silence.',
        options: ['slam', 'slamming'],
        correct: 0,
        explanation:
          'One complete, momentary event → base verb: **heard it slam**.',
      },
    },
    {
      title: 'Sense verb + adjective (not adverb!)',
      body: `After **look, sound, smell, taste, feel** we describe the **subject**, so we use an **adjective**:

> You **look tired**. — not ~~look tiredly~~
> This soup **tastes amazing**. · That **sounds great**.
> The room **smells strange**. · I **feel awful**.

⚠️ The classic trap: *I feel **bad** about it* — not ~~feel badly~~.`,
      miniCheck: {
        id: 'm4l4-c3',
        type: 'mcq',
        question: 'This coffee tastes ___ — did you change the beans?',
        options: ['different', 'differently'],
        correct: 0,
        explanation:
          'Sense verbs take **adjectives**: *tastes different*.',
      },
    },
    {
      title: 'look like / sound like + noun',
      body: `To compare with a **noun**, add **like**:

> He **looks like his father**. · That **sounds like a plan**.
> It **smells like fresh bread** in here.

Without a noun, no *like* — just the adjective:

> He **looks tired**. — never ~~looks like tired~~`,
      miniCheck: {
        id: 'm4l4-c4',
        type: 'gap',
        before: 'That cloud looks',
        after: 'a dragon eating a sandwich.',
        hint: 'one word',
        accepted: ['like'],
        explanation:
          'Comparison with a **noun** → *look **like** + noun*: *looks like a dragon*.',
      },
    },
    {
      title: 'look as if / as though + clause',
      body: `To compare with a whole **clause**, use **as if / as though** (informal: *like*):

> You **look as if you have seen** a ghost.
> It **sounds as though they are having** a party upstairs.
> He **looked as if he hadn't slept** for a week.

💡 For unreal comparisons, the past adds distance: *He talks **as if he owned** the place.* (He doesn't.)`,
      miniCheck: {
        id: 'm4l4-c5',
        type: 'mcq',
        question: 'It looks ___ rain any minute now.',
        options: ['as if it is going to', 'like to', 'as it will'],
        correct: 0,
        explanation:
          'Clause comparison → **as if + clause**: *looks as if it is going to rain*.',
      },
    },
    {
      title: 'can see, can hear — perception right now',
      body: `Sense verbs resist the continuous. For "right now" perception, English uses **can**:

> I **can see** the sea from my room! — not ~~I am seeing~~
> **Can** you **hear** that buzzing? · I **can smell** toast.

The continuous appears only with special meanings:

> I**'m seeing** the dentist tomorrow. (= meeting)
> He**'s feeling** much better. (health — allowed!)`,
      miniCheck: {
        id: 'm4l4-c6',
        type: 'mcq',
        question: 'Turn the music down — I ___ myself think!',
        options: ["can't hear", "am not hearing", "don't hearing"],
        correct: 0,
        explanation:
          'Right-now perception → **can/can\'t + hear**, never the continuous.',
      },
    },
    {
      title: 'The senses cheat sheet',
      body: `Everything on one card:

- **see/hear + object + base verb** → complete action
- **see/hear + object + -ing** → action in progress
- **look/sound/smell/taste/feel + adjective** → describing the subject
- **look/sound like + noun** → comparing to a noun
- **look/sound as if + clause** → comparing to a situation
- **can see / can hear** → perception at this moment`,
      tip: 'When in doubt about adjective vs adverb, replace the sense verb with *be*: "You are tired" works → adjective it is.',
      miniCheck: {
        id: 'm4l4-c7',
        type: 'mcq',
        question: 'Which sentence is WRONG?',
        options: [
          'The choir sounds beautifully tonight.',
          'The choir sounds beautiful tonight.',
          'That sounds like a lovely idea.',
        ],
        correct: 0,
        explanation:
          'Sense verb + **adjective**: *sounds beautiful*, never *sounds beautifully*.',
      },
    },
  ],
  sets: [
    {
      title: 'Witness Statements',
      icon: '🕵️',
      exercises: [
        {
          id: 'm4l4-a1',
          type: 'mcq',
          question: 'From my window I watched the sun ___ behind the hills. (the whole thing)',
          options: ['set', 'setting', 'to set'],
          correct: 0,
          explanation:
            'Complete action, start to finish → base verb: **watched it set**.',
        },
        {
          id: 'm4l4-a2',
          type: 'mcq',
          question: 'When I walked in, I heard them ___ about the budget.',
          options: ['arguing', 'argue', 'to argue'],
          correct: 0,
          explanation:
            'You walked in mid-argument — action in progress → **heard them arguing**.',
        },
        {
          id: 'm4l4-a3',
          type: 'gap',
          before: 'Did anyone actually see the goalkeeper',
          after: 'the ball? (touch — complete action)',
          hint: 'touch',
          accepted: ['touch'],
          explanation:
            'One complete moment → base verb: **see him touch**.',
        },
        {
          id: 'm4l4-a4',
          type: 'error-hunt',
          sentence: 'I noticed a stranger stands outside our gate.',
          wrongIndex: 4,
          correction: 'standing',
          explanation:
            '*notice* + object + **-ing** (or base verb) — never a conjugated verb: *noticed a stranger standing*.',
        },
        {
          id: 'm4l4-a5',
          type: 'sort',
          prompt: 'Complete action (base verb) or in progress (-ing)?',
          buckets: ['base verb (complete)', '-ing (in progress)'],
          items: [
            { text: 'I heard the glass ___ . (break — one crash)', bucket: 0 },
            { text: 'I could smell something ___ in the kitchen. (burn)', bucket: 1 },
            { text: 'We watched the plane ___ until it vanished. (climb)', bucket: 0 },
            { text: 'As we passed, we saw them ___ the fence. (paint)', bucket: 1 },
            { text: 'She felt something ___ her leg — one quick touch. (brush)', bucket: 0 },
            { text: 'I noticed him ___ nervously at his watch. (glance, repeatedly)', bucket: 1 },
          ],
          explanation:
            'Whole event witnessed → base verb. Snapshot mid-action → **-ing**.',
        },
        {
          id: 'm4l4-a6',
          type: 'order',
          correct: 'We heard the neighbours singing karaoke at midnight',
          explanation:
            'Ongoing (and regrettable) action → **heard them singing**.',
        },
        {
          id: 'm4l4-a7',
          type: 'transform',
          source: 'The thief climbed out of the window, and the witness saw the whole thing.',
          keyword: 'saw',
          before: 'The witness',
          after: 'out of the window.',
          accepted: ['saw the thief climb'],
          explanation:
            'Whole action witnessed → base verb: **saw the thief climb**.',
        },
        {
          id: 'm4l4-a8',
          type: 'mcq',
          question: 'I felt the ground ___ for a few seconds — a small earthquake.',
          options: ['shaking', 'to shake', 'shaken'],
          correct: 0,
          explanation:
            'You felt it during those seconds → in progress: **felt it shaking**.',
        },
      ],
    },
    {
      title: 'Adjective Alarm',
      icon: '🚨',
      exercises: [
        {
          id: 'm4l4-b1',
          type: 'mcq',
          question: 'You sound ___ — have you caught a cold?',
          options: ['terrible', 'terribly'],
          correct: 0,
          explanation:
            'Sense verb + **adjective**: *sound terrible*.',
        },
        {
          id: 'm4l4-b2',
          type: 'error-hunt',
          sentence: 'This cheese smells awfully but tastes wonderful.',
          wrongIndex: 3,
          correction: 'awful',
          explanation:
            '*smell* + **adjective**: *smells awful*. (The *tastes wonderful* half was already correct.)',
        },
        {
          id: 'm4l4-b3',
          type: 'gap',
          before: 'I feel really',
          after: 'about forgetting your birthday. (bad? badly?)',
          hint: 'bad / badly',
          accepted: ['bad'],
          explanation:
            'Describing yourself → adjective: **feel bad**, not *feel badly*.',
        },
        {
          id: 'm4l4-b4',
          type: 'mcq',
          question: 'That singer sounds exactly ___ Freddie Mercury.',
          options: ['like', 'as', 'as if'],
          correct: 0,
          explanation:
            'Comparison with a **noun** → *sounds **like** + noun*.',
        },
        {
          id: 'm4l4-b5',
          type: 'gap',
          before: 'He looks',
          after: "he hasn't slept for days.",
          hint: 'two words',
          accepted: ['as if', 'as though'],
          explanation:
            'Comparison with a **clause** → **as if / as though**.',
        },
        {
          id: 'm4l4-b6',
          type: 'sort',
          prompt: 'like, as if, or plain adjective?',
          buckets: ['+ adjective', '+ like (noun)', '+ as if (clause)'],
          items: [
            { text: 'You look ___ . (exhausted)', bucket: 0 },
            { text: 'It smells ___ in here. (a bakery)', bucket: 1 },
            { text: 'She looks ___ she has won the lottery.', bucket: 2 },
            { text: 'That sounds ___ . (fantastic)', bucket: 0 },
            { text: 'He sounds ___ a robot on that recording.', bucket: 1 },
            { text: 'It looks ___ the meeting has been cancelled.', bucket: 2 },
          ],
          explanation:
            'Adjective describes the subject · **like** + noun · **as if/as though** + clause.',
        },
        {
          id: 'm4l4-b7',
          type: 'error-hunt',
          sentence: 'The garden looks like beautiful after the rain.',
          wrongIndex: 3,
          correction: 'looks beautiful (no like)',
          explanation:
            'Before an adjective there is no *like*: *looks **beautiful*** — *like* only comes before nouns.',
        },
        {
          id: 'm4l4-b8',
          type: 'transform',
          source: 'It seems that they are having an argument next door.',
          keyword: 'sounds',
          before: 'It',
          after: 'they are having an argument next door.',
          accepted: ['sounds as if', 'sounds as though', 'sounds like'],
          explanation:
            'Clause comparison → **sounds as if / as though** (informally *like*).',
        },
      ],
    },
    {
      title: 'Right Now',
      icon: '👂',
      exercises: [
        {
          id: 'm4l4-d1',
          type: 'mcq',
          question: 'Stand here — you ___ both castles from this spot.',
          options: ['can see', 'are seeing', 'see being'],
          correct: 0,
          explanation:
            'Perception at this moment → **can see**.',
        },
        {
          id: 'm4l4-d2',
          type: 'error-hunt',
          sentence: 'I can smelling gas — everybody out, now!',
          wrongIndex: 2,
          correction: 'smell',
          explanation:
            'Right-now perception → **can + base verb**: *I can smell gas*.',
        },
        {
          id: 'm4l4-d3',
          type: 'mcq',
          question: "She's ___ the doctor at three about her knee.",
          options: ['seeing', 'able to see', 'can see'],
          correct: 0,
          explanation:
            '*see* = **meet** allows the continuous: *is seeing the doctor*.',
        },
        {
          id: 'm4l4-d4',
          type: 'gap',
          before: 'Speak up a little — I',
          after: 'you very well on this line. (hear, negative)',
          hint: 'not / hear',
          accepted: ["can't hear", 'cannot hear', 'can not hear'],
          explanation:
            'Right-now perception → **can\'t hear**, not the continuous.',
        },
        {
          id: 'm4l4-d5',
          type: 'sort',
          prompt: 'Is the continuous form OK here?',
          buckets: ['continuous OK', 'use can + verb'],
          items: [
            { text: "I'm seeing my tutor tomorrow. (= meeting)", bucket: 0 },
            { text: '___ that weird humming noise? (hear, now)', bucket: 1 },
            { text: "He's feeling much better today. (health)", bucket: 0 },
            { text: '___ the mountains from your hotel? (see, now)', bucket: 1 },
            { text: "We're tasting wines in the Loire next week. (activity)", bucket: 0 },
            { text: '___ perfume on this letter... suspicious. (smell, now)', bucket: 1 },
          ],
          explanation:
            'Special meanings (meet, health, activity) → continuous OK. Pure right-now perception → **can + verb**.',
        },
        {
          id: 'm4l4-d6',
          type: 'transform',
          source: 'Is the sea visible from your balcony?',
          keyword: 'can',
          before: '',
          after: 'the sea from your balcony?',
          accepted: ['can you see'],
          explanation:
            'Visibility right now → **Can you see...?**',
        },
        {
          id: 'm4l4-d7',
          type: 'order',
          correct: 'I can hear someone moving around upstairs',
          explanation:
            '**can hear** for right-now perception + object + **-ing** for the ongoing action. Both patterns in one sentence!',
        },
        {
          id: 'm4l4-d8',
          type: 'mcq',
          question: 'Mmm, something ___ delicious in the oven!',
          options: ['smells', 'is smelling', 'smells like'],
          correct: 0,
          explanation:
            'Sense verb + adjective, simple form: **smells delicious**. (*smells like* would need a noun.)',
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm4l4-e1',
          type: 'speed',
          secondsPerItem: 8,
          explanation: 'Senses at full speed!',
          items: [
            {
              question: 'You look ___ today.',
              options: ['happy', 'happily'],
              correct: 0,
            },
            {
              question: 'I saw him ___ the letter and walk off. (whole action)',
              options: ['post', 'posting'],
              correct: 0,
            },
            {
              question: 'It smells ___ vanilla in here.',
              options: ['like', 'as'],
              correct: 0,
            },
            {
              question: '___ you hear the sea from here?',
              options: ['Can', 'Are'],
              correct: 0,
            },
            {
              question: 'She looks ___ she needs a holiday.',
              options: ['as if', 'like as'],
              correct: 0,
            },
            {
              question: 'I heard them ___ as I passed. (mid-song)',
              options: ['singing', 'sing'],
              correct: 0,
            },
            {
              question: 'This tastes ___ .',
              options: ['strange', 'strangely'],
              correct: 0,
            },
            {
              question: "I ___ smoke — is something on fire?",
              options: ['can smell', 'am smelling'],
              correct: 0,
            },
            {
              question: 'That sounds ___ a great plan.',
              options: ['like', 'as if'],
              correct: 0,
            },
            {
              question: 'I feel ___ about the mistake.',
              options: ['bad', 'badly'],
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
        id: 'm4l4-boss1',
        type: 'mcq',
        question: 'The security guard watched the man ___ the building and lock the door. (complete)',
        options: ['leave', 'leaving', 'to leave'],
        correct: 0,
        explanation:
          'Whole action witnessed → base verb: **watched him leave**.',
      },
      {
        id: 'm4l4-boss2',
        type: 'gap',
        before: 'Walking past the studio, we heard the band',
        after: 'their new single. (rehearse — in progress)',
        hint: 'rehearse',
        accepted: ['rehearsing'],
        explanation:
          'Snapshot mid-action → **heard them rehearsing**.',
      },
      {
        id: 'm4l4-boss3',
        type: 'error-hunt',
        sentence: 'The soup tasted deliciously after our long cold walk.',
        wrongIndex: 3,
        correction: 'delicious',
        explanation:
          'Sense verb + **adjective**: *tasted delicious*.',
      },
      {
        id: 'm4l4-boss4',
        type: 'mcq',
        question: 'He looks ___ a man who has just deleted three hours of work.',
        options: ['like', 'as if', 'as'],
        correct: 0,
        explanation:
          'Comparison with a **noun phrase** → *looks **like** a man...*.',
      },
      {
        id: 'm4l4-boss5',
        type: 'gap',
        before: 'It sounds',
        after: 'the neighbours are drilling through the wall again.',
        hint: 'two words',
        accepted: ['as if', 'as though', 'like'],
        explanation:
          'Comparison with a **clause** → **as if / as though**.',
      },
      {
        id: 'm4l4-boss6',
        type: 'mcq',
        question: 'From the top floor you ___ the whole valley.',
        options: ['can see', 'are seeing', 'see to'],
        correct: 0,
        explanation:
          'Right-now perception → **can see**, not the continuous.',
      },
      {
        id: 'm4l4-boss7',
        type: 'transform',
        source: 'The whole explosion was audible from our street.',
        keyword: 'heard',
        before: 'We',
        after: 'from our street.',
        accepted: ['heard the explosion', 'heard it'],
        explanation:
          'One complete event → **heard the explosion** (no *to*, no *-ing* needed here).',
      },
      {
        id: 'm4l4-boss8',
        type: 'error-hunt',
        sentence: 'I can hearing strange noises in the attic right now.',
        wrongIndex: 2,
        correction: 'hear',
        explanation:
          'Right-now perception → **can + base verb**: *I can hear*, never the continuous.',
      },
      {
        id: 'm4l4-boss9',
        type: 'sort',
        prompt: 'Adjective, like, or as if?',
        buckets: ['+ adjective', '+ like (noun)', '+ as if (clause)'],
        items: [
          { text: 'This pillow feels ___ . (lovely)', bucket: 0 },
          { text: 'That statue looks ___ my old maths teacher.', bucket: 1 },
          { text: 'It looks ___ we are going to miss the bus.', bucket: 2 },
          { text: 'The engine sounds ___ . (rough)', bucket: 0 },
          { text: 'It tastes ___ liquorice and regret.', bucket: 1 },
        ],
        explanation:
          'Adjective describes the subject · **like** + noun · **as if** + clause.',
      },
      {
        id: 'm4l4-boss10',
        type: 'order',
        correct: 'I saw her drop the letter into the postbox',
        explanation:
          'Whole action, start to finish → base verb: **saw her drop**.',
      },
      {
        id: 'm4l4-boss11',
        type: 'mcq',
        question: 'Which sentence is correct?',
        options: [
          "I'm seeing the dentist on Friday, and honestly I feel nervous.",
          "I'm seeing that cloud right now — look!",
          'The music sounds very sweetly tonight.',
        ],
        correct: 0,
        explanation:
          '*seeing* = meeting ✓ + *feel* + adjective ✓. Right-now perception needs **can see**; sense verbs take adjectives, not *sweetly*.',
      },
    ],
  },
};
