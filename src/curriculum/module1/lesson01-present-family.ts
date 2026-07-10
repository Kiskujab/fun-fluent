import type { Lesson } from '../../types';

export const lesson01: Lesson = {
  id: 'm1l1',
  title: 'The Present Family',
  subtitle: 'Simple, continuous & the perfect bridge',
  minutes: 40,
  goals: [
    'Choose confidently between present simple and continuous',
    'Tame state verbs and their shape-shifting cousins',
    'Master the present perfect — simple AND continuous',
    'Never mix up for/since/just/already/yet again',
  ],
  cards: [
    {
      title: 'Two lenses on the present',
      body: `English has two ways to look at *now* — and choosing between them is 90% of the battle.

**Present simple** = the *zoomed-out* lens. Facts, habits, routines, things that are generally true.

> The Sun **rises** in the east. · Maja **teaches** yoga on Tuesdays.

**Present continuous** = the *zoomed-in* lens. Actions in progress right now, or temporary situations around now.

> Shh — the baby **is sleeping**! · I**'m staying** with my aunt this month.`,
      tip: 'Ask yourself: is this *always true* (simple), or *happening around now, temporarily* (continuous)?',
      miniCheck: {
        id: 'm1l1-c1',
        type: 'mcq',
        question: 'Water ___ at 100°C.',
        options: ['boils', 'is boiling'],
        correct: 0,
        explanation: 'A scientific fact — always true — so we zoom out with the present simple.',
      },
    },
    {
      title: 'Signal words are your GPS',
      body: `Certain words practically shout which tense they want.

**Team Simple:** \`always\` \`usually\` \`often\` \`rarely\` \`never\` \`every day\` \`on Mondays\`

> He **never answers** my emails before lunch.

**Team Continuous:** \`now\` \`right now\` \`at the moment\` \`currently\` \`these days\` \`this week\`

> She**'s working** from home this week.

Watch the word order: frequency adverbs go *before* the main verb but *after* \`be\`.

> I **usually get** up at six. · He **is usually** late.`,
      miniCheck: {
        id: 'm1l1-c2',
        type: 'gap',
        before: 'My brother',
        after: 'to work these days — his car broke down.',
        hint: 'cycle',
        accepted: ['is cycling', "'s cycling"],
        explanation: '`these days` = a temporary period around now → present continuous: **is cycling**.',
      },
    },
    {
      title: 'State verbs refuse to -ing',
      body: `Some verbs describe *states* (thoughts, feelings, possession) rather than actions — and states don't take the continuous, even when they're true right now.

- **Thinking & knowing:** \`know\` \`believe\` \`understand\` \`mean\` \`remember\` \`agree\`
- **Feelings:** \`love\` \`hate\` \`prefer\` \`want\` \`need\`
- **Possession & being:** \`own\` \`belong\` \`seem\` \`consist of\` \`depend on\`

> I **know** the answer. — not ~~I am knowing the answer.~~

> This bag **belongs** to Zoe. — not ~~is belonging~~`,
      tip: "If you can't *watch someone do it*, it's probably a state verb.",
      miniCheck: {
        id: 'm1l1-c3',
        type: 'mcq',
        question: 'This laptop ___ to the school, so please be gentle with it.',
        options: ['belongs', 'is belonging'],
        correct: 0,
        explanation: '`belong` is a state verb — possession never goes continuous.',
      },
    },
    {
      title: 'Shape-shifters: verbs with two lives',
      body: `A few verbs are states in one meaning and actions in another. Same verb, different lens:

- \`have\` — **state:** own → *She **has** a drone.* · **action:** experience → *She**'s having** lunch.*
- \`think\` — **state:** believe → *I **think** it's fair.* · **action:** process → *Quiet — I**'m thinking**!*
- \`see\` — **state:** understand → *I **see** what you mean.* · **action:** date → *He**'s seeing** someone new.*
- \`taste / smell\` — **state:** quality → *This soup **tastes** amazing.* · **action:** testing → *The chef **is tasting** the soup.*
- \`be\` — usually a state, but for temporary behaviour: *He **is being** ridiculous today.*`,
      miniCheck: {
        id: 'm1l1-c4',
        type: 'mcq',
        question: "Why ___ so rude today? You're normally lovely!",
        options: ['are you being', 'are you'],
        correct: 0,
        explanation: 'Temporary behaviour → even `be` goes continuous: **are you being**.',
      },
    },
    {
      title: 'Present perfect — the bridge tense',
      body: `The **present perfect** (\`have/has + past participle\`) connects the past to now. Use it when the *when* doesn't matter — the *result or relevance now* does.

- **Life experience** (time not stated): *I**'ve ridden** a camel twice.*
- **Fresh news:** *Ana **has just passed** her driving test!*
- **Unfinished time:** *We**'ve had** three meetings today* — today isn't over.
- **Result now:** *Someone **has eaten** my sandwich* — the plate is empty *now*.

The moment you say *when*, you fall off the bridge into the **past simple**:

> I **saw** that film **last week**. — not ~~I have seen that film last week.~~`,
      tip: '`ever, never, just, already, yet, so far, this week` love the present perfect. `yesterday, last year, in 2019, ago` demand the past simple.',
      miniCheck: {
        id: 'm1l1-c5',
        type: 'mcq',
        question: 'I ___ my keys — can you let me in?',
        options: ['have lost', 'lost'],
        correct: 0,
        explanation: "The result matters *now* (I'm locked out!) and no finished time is mentioned → present perfect.",
      },
    },
    {
      title: 'Perfect simple vs perfect continuous',
      body: `Both connect past to present — but they answer different questions.

**Present perfect simple** → *how much / how many / completed?*

> I**'ve written** 40 emails today. (count the result)

**Present perfect continuous** (\`have been + -ing\`) → *how long / what activity?*

> I**'ve been writing** emails all morning. (feel the duration)

The continuous is also perfect for visible evidence of a recent activity:

> Your eyes are red… **Have you been crying**?

With \`live\` and \`work\`, both are fine: *I've lived / I've been living here for years.*`,
      miniCheck: {
        id: 'm1l1-c6',
        type: 'mcq',
        question: "She's exhausted — she ___ boxes all day.",
        options: ['has been carrying', 'has carried'],
        correct: 0,
        explanation: 'We care about the long, tiring *activity*, not the number of boxes → perfect continuous.',
      },
    },
    {
      title: 'for, since & friends',
      body: `- \`for\` + a **length** of time: *for two years, for ages, for ten minutes*
- \`since\` + a **starting point**: *since 2021, since Monday, since I moved here*
- \`just\` = very recently: *He's **just** left.*
- \`already\` = sooner than expected: *I've **already** finished!*
- \`yet\` = in questions & negatives, at the end: *Have you eaten **yet**? I haven't decided **yet**.*

> We**'ve known** each other **since** university — so **for** about ten years.`,
      tip: "State verbs use the perfect **simple** even for long durations: *I've known her for years* — never ~~I've been knowing~~.",
      miniCheck: {
        id: 'm1l1-c7',
        type: 'gap',
        before: "I haven't seen Bea",
        after: 'she changed schools.',
        hint: 'for / since',
        accepted: ['since'],
        explanation: '`she changed schools` is a starting point, not a length → **since**.',
      },
    },
    {
      title: 'The Present Family — the map',
      body: `One family, four members. Meet them all with one verb:

- **Present simple** — facts & habits: *I **drink** tea daily.*
- **Present continuous** — in progress / temporary: *I**'m drinking** matcha right now.*
- **Present perfect** — past→now bridge, result: *I**'ve drunk** three cups today.*
- **Present perfect continuous** — past→now activity, duration: *I**'ve been drinking** tea since breakfast.*

Same verb, four different stories. You now own all four — time to prove it. 💪`,
    },
  ],
  sets: [
    {
      title: 'Simple or Continuous?',
      icon: '🔍',
      exercises: [
        {
          id: 'm1l1-a1',
          type: 'mcq',
          question: 'Look! That seagull ___ your chips!',
          options: ['is stealing', 'steals'],
          correct: 0,
          explanation: 'Happening right now, before your very eyes → present continuous.',
        },
        {
          id: 'm1l1-a2',
          type: 'mcq',
          question: 'My gran ___ pilates every single morning.',
          options: ['does', 'is doing'],
          correct: 0,
          explanation: 'A repeated routine (`every morning`) → present simple.',
        },
        {
          id: 'm1l1-a3',
          type: 'gap',
          before: "Don't turn off the router — I",
          after: 'a huge file.',
          hint: 'download',
          accepted: ['am downloading', "'m downloading"],
          explanation: 'In progress at this very moment → present continuous: **am downloading**.',
        },
        {
          id: 'm1l1-a4',
          type: 'gap',
          before: 'The museum',
          after: 'at 9 a.m. on weekdays.',
          hint: 'open',
          accepted: ['opens'],
          explanation: 'A timetable fact → present simple, and third person needs the `-s`: **opens**.',
        },
        {
          id: 'm1l1-a5',
          type: 'sort',
          prompt: 'State or action verb?',
          buckets: ['State 🗿 (no -ing)', 'Action 🏃 (-ing is fine)'],
          items: [
            { text: 'believe', bucket: 0 },
            { text: 'run', bucket: 1 },
            { text: 'own', bucket: 0 },
            { text: 'belong', bucket: 0 },
            { text: 'cook', bucket: 1 },
            { text: 'need', bucket: 0 },
            { text: 'dance', bucket: 1 },
            { text: 'prefer', bucket: 0 },
          ],
          explanation: 'believe, own, belong, need, prefer describe *states*, not activities — so they refuse the continuous.',
        },
        {
          id: 'm1l1-a6',
          type: 'error-hunt',
          sentence: "My cousin don't eat meat or fish.",
          wrongIndex: 2,
          correction: "doesn't",
          explanation: "Third person singular (`my cousin`) needs **doesn't** in the present simple.",
        },
        {
          id: 'm1l1-a7',
          type: 'mcq',
          question: 'I ___ with my grandparents just until my flat is renovated.',
          options: ['am living', 'live'],
          correct: 0,
          explanation: 'A temporary situation → present continuous. `live` in the simple would mean it\'s your permanent home.',
        },
        {
          id: 'm1l1-a8',
          type: 'mcq',
          question: 'Ugh, he ___ his wet towel on my bed! Every. Single. Day.',
          options: ['is always leaving', 'always leaves'],
          correct: 0,
          explanation: '`always` + continuous = an annoying habit with an eye-roll built in. Both are grammatical, but the complaint flavour wants **is always leaving**.',
        },
        {
          id: 'm1l1-a9',
          type: 'order',
          correct: 'Why are you wearing my jacket?',
          distractors: ['do', 'wear'],
          explanation: "Present continuous question: Why + are + you + -ing. It's happening right now.",
        },
      ],
    },
    {
      title: 'Perfect Timing',
      icon: '⏳',
      exercises: [
        {
          id: 'm1l1-b1',
          type: 'mcq',
          question: 'Marco ___ his phone three times this year.',
          options: ['has broken', 'broke'],
          correct: 0,
          explanation: '`this year` is an unfinished period — it\'s still running → present perfect.',
        },
        {
          id: 'm1l1-b2',
          type: 'mcq',
          question: 'Marco ___ his phone twice last year, too.',
          options: ['broke', 'has broken'],
          correct: 0,
          explanation: '`last year` is finished time → past simple. The moment you say *when*, the bridge collapses.',
        },
        {
          id: 'm1l1-b3',
          type: 'gap',
          before: 'A: Is Lea here? — B: No, she',
          after: 'out. Try again in an hour.',
          hint: 'just / go',
          accepted: ['has just gone', "'s just gone"],
          explanation: 'Fresh news → present perfect, with `just` tucked between *has* and the participle: **has just gone**.',
        },
        {
          id: 'm1l1-b4',
          type: 'gap',
          before: "We've been friends",
          after: 'primary school.',
          hint: 'for / since',
          accepted: ['since'],
          explanation: 'Primary school is a *starting point* → **since**.',
        },
        {
          id: 'm1l1-b5',
          type: 'gap',
          before: "They've been repairing that bridge",
          after: 'over a year now.',
          hint: 'for / since',
          accepted: ['for'],
          explanation: '`over a year` is a *length* of time → **for**.',
        },
        {
          id: 'm1l1-b6',
          type: 'mcq',
          question: 'How many episodes ___ so far?',
          options: ['have you watched', 'have you been watching'],
          correct: 0,
          explanation: '`How many` counts a completed result → present perfect **simple**.',
        },
        {
          id: 'm1l1-b7',
          type: 'mcq',
          question: 'How long ___ for the bus? You look frozen!',
          options: ['have you been waiting', 'have you waited'],
          correct: 0,
          explanation: '`How long` + an ongoing activity → present perfect **continuous**.',
        },
        {
          id: 'm1l1-b8',
          type: 'transform',
          source: 'I started learning Japanese in 2022, and I am still learning it.',
          keyword: 'since',
          accepted: [
            'I have been learning Japanese since 2022',
            'I have learned Japanese since 2022',
            'Since 2022 I have been learning Japanese',
          ],
          explanation: 'Started in the past + still happening → present perfect continuous: **I\'ve been learning Japanese since 2022**.',
        },
        {
          id: 'm1l1-b9',
          type: 'order',
          correct: 'She has been working here since March.',
          distractors: ['for', 'is'],
          explanation: '`has been + -ing` for duration up to now, and `since` + starting point (March).',
        },
        {
          id: 'm1l1-b10',
          type: 'error-hunt',
          sentence: 'I have visited four countries last summer.',
          wrongIndex: 1,
          correction: '– (just "I visited")',
          explanation: '`last summer` = finished time → past simple: **I visited four countries last summer.** No *have*.',
        },
      ],
    },
    {
      title: 'Shape-shifters & Sleuths',
      icon: '🕵️',
      exercises: [
        {
          id: 'm1l1-d1',
          type: 'mcq',
          question: 'I ___ about quitting sugar. Thoughts?',
          options: ['am thinking', 'think'],
          correct: 0,
          explanation: '`think about` = the mental *process* of considering → action meaning, continuous is fine.',
        },
        {
          id: 'm1l1-d2',
          type: 'mcq',
          question: 'Honestly? I ___ this plan is doomed.',
          options: ['think', 'am thinking'],
          correct: 0,
          explanation: '`think` = believe / have an opinion → state meaning, simple only.',
        },
        {
          id: 'm1l1-d3',
          type: 'mcq',
          question: "This sauce ___ incredible — what's in it?",
          options: ['tastes', 'is tasting'],
          correct: 0,
          explanation: 'The sauce *has a quality* → state meaning → simple.',
        },
        {
          id: 'm1l1-d4',
          type: 'mcq',
          question: 'The chef ___ the sauce to check the salt.',
          options: ['is tasting', 'tastes'],
          correct: 0,
          explanation: 'Actively testing it → action meaning → continuous.',
        },
        {
          id: 'm1l1-d5',
          type: 'mcq',
          question: "Sorry, she can't talk now — she ___ dinner with her in-laws.",
          options: ['is having', 'has'],
          correct: 0,
          explanation: '`have dinner` = an experience, not possession → action meaning → continuous.',
        },
        {
          id: 'm1l1-d6',
          type: 'gap',
          before: "You've got flour in your hair —",
          after: '?',
          hint: 'you / bake',
          accepted: ['have you been baking'],
          explanation: 'Visible evidence of a recent activity → present perfect continuous: **have you been baking?**',
        },
        {
          id: 'm1l1-d7',
          type: 'error-hunt',
          sentence: "I am here since ten o'clock — where are you?",
          wrongIndex: 1,
          correction: 'have been',
          explanation: 'A situation that started in the past and continues now needs the present perfect: **I have been here since…**',
        },
        {
          id: 'm1l1-d8',
          type: 'mcq',
          question: "He ___ someone from his climbing club — it's been three dates now.",
          options: ['is seeing', 'sees'],
          correct: 0,
          explanation: '`see` = *date someone* → action meaning → continuous.',
        },
        {
          id: 'm1l1-d9',
          type: 'match',
          prompt: 'Match each sentence to its meaning',
          pairs: [
            ["I've painted the hall", "result: it's done ✅"],
            ["I've been painting the hall", 'activity: paint everywhere 🖌️'],
            ['I paint every weekend', 'habit 📅'],
            ["I'm painting right now", 'in progress this second 🎨'],
            ['I painted it in May', 'finished time 🗓️'],
          ],
          explanation: 'Five lenses on one verb — your tense choice decides which story you tell.',
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm1l1-e1',
          type: 'speed',
          secondsPerItem: 8,
          items: [
            { question: 'She ___ karate on Fridays.', options: ['does', 'is doing'], correct: 0 },
            { question: 'Quiet! I ___ to focus.', options: ['am trying', 'try'], correct: 0 },
            { question: 'We ___ each other for ages.', options: ['have known', 'have been knowing'], correct: 0 },
            { question: 'I ___ my phone! Help!', options: ['have lost', 'lost'], correct: 0 },
            { question: "He ___ during my meetings. So rude!", options: ['is always singing', 'always sings'], correct: 0 },
            { question: 'This coffee ___ weird.', options: ['tastes', 'is tasting'], correct: 0 },
            { question: 'They ___ here since 2020.', options: ['have lived', 'live'], correct: 0 },
            { question: 'I ___ to the gym right now.', options: ['am walking', 'walk'], correct: 0 },
            { question: "She's tired — she ___ all night.", options: ['has been studying', 'has studied'], correct: 0 },
            { question: 'Have you finished ___?', options: ['yet', 'already'], correct: 0 },
          ],
          explanation: 'Instinct check: simple = facts & habits · continuous = now & temporary · perfect = past→now.',
        },
      ],
    },
  ],
  boss: {
    passPct: 80,
    exercises: [
      {
        id: 'm1l1-boss1',
        type: 'mcq',
        question: "My sister ___ seafood — she's allergic to it.",
        options: ["doesn't eat", "isn't eating"],
        correct: 0,
        explanation: 'A general fact about her → present simple.',
      },
      {
        id: 'm1l1-boss2',
        type: 'gap',
        before: 'Hurry up! Everyone',
        after: 'for you in the car!',
        hint: 'wait',
        accepted: ['is waiting', "'s waiting"],
        explanation: 'Happening right now → present continuous.',
      },
      {
        id: 'm1l1-boss3',
        type: 'mcq',
        question: 'I ___ him since we worked in Leeds together.',
        options: ['have known', 'know', 'have been knowing'],
        correct: 0,
        explanation: 'Duration up to now + state verb → present perfect **simple**.',
      },
      {
        id: 'm1l1-boss4',
        type: 'error-hunt',
        sentence: "She don't understand the new rules at all.",
        wrongIndex: 1,
        correction: "doesn't",
        explanation: 'Third person singular → **doesn\'t**.',
      },
      {
        id: 'm1l1-boss5',
        type: 'mcq',
        question: 'We ___ three escape rooms this month — one more to go!',
        options: ['have done', 'did'],
        correct: 0,
        explanation: '`this month` is unfinished time → present perfect.',
      },
      {
        id: 'm1l1-boss6',
        type: 'mcq',
        question: 'I ___ my ankle at training two weeks ago.',
        options: ['twisted', 'have twisted'],
        correct: 0,
        explanation: 'Finished time (`two weeks ago`) → past simple.',
      },
      {
        id: 'm1l1-boss7',
        type: 'gap',
        before: 'How long',
        after: 'on this essay?',
        hint: 'you / work',
        accepted: ['have you been working'],
        explanation: '`How long` + activity → present perfect continuous.',
      },
      {
        id: 'm1l1-boss8',
        type: 'mcq',
        question: 'This milk ___ off — smell it!',
        options: ['smells', 'is smelling'],
        correct: 0,
        explanation: 'A quality of the milk → state meaning → simple.',
      },
      {
        id: 'm1l1-boss9',
        type: 'order',
        correct: 'Why is your dog wearing sunglasses?',
        distractors: ['does', 'wear'],
        explanation: 'Continuous question: is + subject + -ing — clearly happening right now (and clearly fabulous).',
      },
      {
        id: 'm1l1-boss10',
        type: 'mcq',
        question: 'Dario ___ with us just until he finds his own place.',
        options: ['is staying', 'stays'],
        correct: 0,
        explanation: 'A temporary arrangement → present continuous.',
      },
      {
        id: 'm1l1-boss11',
        type: 'transform',
        source: 'We moved to Porto in 2021, and we still live there.',
        keyword: 'since',
        accepted: [
          'We have lived in Porto since 2021',
          'We have been living in Porto since 2021',
        ],
        explanation: 'Past start + continues now → present perfect (simple or continuous) + **since 2021**.',
      },
    ],
  },
};
