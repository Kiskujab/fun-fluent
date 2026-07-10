import type { Lesson } from '../../types';

export const m8l5: Lesson = {
  id: 'm8l5',
  title: 'Comparison & Subjunctive',
  subtitle: 'the…the…, as if, I insist he be',
  minutes: 45,
  goals: [
    'Build escalator sentences: the more…, the better…',
    'Fine-tune comparisons: far better, twice as big, nowhere near as fast',
    'Master as if / as though — real vs unreal',
    'Wield the subjunctive: I insist that he be on time',
  ],
  cards: [
    {
      title: 'The escalator: the…the…',
      body: `Two things rising (or falling) together — English builds an escalator:

> **The more** you practise, **the easier** it gets.
> **The higher** we climbed, **the thinner** the air became.
> **The sooner**, **the better**. (the famous short form)

Formula: **the + comparative + clause, the + comparative + clause** — and yes, both *the*s are compulsory.

> ~~More you practise, easier it gets~~ 🙅`,
      miniCheck: {
        id: 'm8l5-c1',
        type: 'gap',
        before: 'The more you practise,',
        after: 'easier it gets. (parallel structure)',
        hint: 'one little word',
        accepted: ['the'],
        explanation:
          'Both halves need **the**: *the more…, the easier…* — the escalator has two handrails.',
      },
    },
    {
      title: 'Turbo-charging comparatives',
      body: `*Better* is fine. **How much** better is C1:

- Big difference: **far / much / a lot / considerably** better
- Small difference: **slightly / a bit / marginally** better
- On top of something already high: **even** better
- Superlative champion: **by far** the best

> This route is **far harder** than yesterday's.
> ⚠️ ~~very better~~, ~~more better~~ — *very* and *more* never touch a comparative.`,
      miniCheck: {
        id: 'm8l5-c2',
        type: 'mcq',
        question: 'This rucksack is ___ heavier than yours.',
        options: ['much', 'very', 'more'],
        correct: 0,
        explanation:
          'Comparatives are boosted by **much/far/a lot** — never *very* or *more*.',
      },
    },
    {
      title: 'The as…as family',
      body: `Equality and its many shades:

> **just as** good **as** the original (exactly equal)
> **not quite as** good **as** (slightly worse)
> **not nearly as** / **nowhere near as** good **as** (much worse)
> **twice / three times as** big **as** (multiplication ✖️)
> **as much as** £500 (a surprisingly large amount)

> The new flat is **twice as big as** the old one — and **nowhere near as** damp.`,
      miniCheck: {
        id: 'm8l5-c3',
        type: 'mcq',
        question: 'The new phone is just ___ good ___ the expensive one.',
        options: ['as / as', 'so / as', 'as / than'],
        correct: 0,
        explanation:
          'Equality frame: **as + adjective + as** — *than* belongs to comparatives only.',
      },
    },
    {
      title: 'as if / as though',
      body: `Two moods, one structure:

- **Real possibility** → normal tense:
> It looks **as if it's going to** snow. (look at that sky — it probably will)

- **Unreal / theatrical** → past tense (like a mini second conditional):
> He behaves **as if he owned** the place. (he doesn't!)
> She talks **as though she had climbed** Everest. (she hasn't)
> He spends money **as if there were** no tomorrow.

Informal English uses **like** the same way — fine in speech, avoid in essays.`,
      miniCheck: {
        id: 'm8l5-c4',
        type: 'mcq',
        question: 'He spends money as if there ___ no tomorrow.',
        options: ['were', 'is', 'will be'],
        correct: 0,
        explanation:
          'Unreal comparison → past (subjunctive *were*): *as if there were no tomorrow* — sadly, there is one.',
      },
    },
    {
      title: 'The subjunctive: I insist he be',
      body: `After verbs of **demanding and recommending** — *insist, suggest, demand, request, recommend, propose* — and adjectives like *essential, vital, crucial, important*, formal English uses the **base form** for everyone:

> I insist that he **be** on time. (not ~~is~~)
> They demanded that she **resign**. (not ~~resigns~~)
> It is vital that every climber **carry** a map.

No -s, no *to*, no tense — the verb in its birthday suit. 👶

British English also allows the softer **should**: *They demanded that she should resign.*`,
      miniCheck: {
        id: 'm8l5-c5',
        type: 'mcq',
        question: 'The judge ordered that the documents ___ released.',
        options: ['be', 'are', 'have'],
        correct: 0,
        explanation:
          'Demand verb + that-clause → base form: *ordered that the documents **be** released*.',
      },
    },
    {
      title: 'Frozen formals',
      body: `The subjunctive survives in fixed phrases — learn them as fossils 🦴:

> **if need be** — if it's necessary
> **come what may** — whatever happens
> **be that as it may** — even so
> **so be it** — I (grudgingly) accept
> **as it were** — so to speak
> **God save the King** · **long live the Queen**

Plus the old friend from Module 3: **If I were you…** — *were* for everyone, formally.`,
      miniCheck: {
        id: 'm8l5-c6',
        type: 'mcq',
        question: "We'll finish the course today, come what ___.",
        options: ['may', 'might', 'will'],
        correct: 0,
        explanation:
          'Frozen subjunctive: **come what may** = whatever happens. And today — it happens! 🏔️',
      },
    },
    {
      title: '🏔️ THE SUMMIT',
      body: `**Look down, climber.**

That tiny dot at the bottom? That was you at base camp, wondering whether it's ~~I have seen~~ or *I saw*.

Since then you have conquered:

- **M1** — all twelve tenses and their question tags ⛺
- **M2** — the modal verbs and their past-tense ghosts 🌫️
- **M3** — worlds that never happened: wishes and conditionals 🔮
- **M4** — gerunds, infinitives and the five senses 🌿
- **M5** — the passive, distancing and reported whispers 🪞
- **M6** — sentence architecture from relative clauses to linkers 🏗️
- **M7** — inversion, clefts, ellipsis: the style of the masters 🎩
- **M8** — articles, quantifiers and the subjunctive itself 💎

One boss stands between you and the flag. Beat it, and you may officially describe your English as *the summit towards which you had long been climbing* — and get the joke.

**Go. Plant the flag.** 🚩`,
      tip: 'There is no grammar above this point — only style, reading, and living the language. The mountain is yours.',
    },
  ],
  sets: [
    {
      title: 'The Escalator',
      icon: '📈',
      exercises: [
        {
          id: 'm8l5-a1',
          type: 'mcq',
          question: "___ you start, ___ you'll finish.",
          options: ['The sooner / the sooner', 'Sooner / sooner', 'The soonest / the soonest'],
          correct: 0,
          explanation:
            'Escalator structure: **the + comparative** in both halves — *The sooner you start, the sooner you\'ll finish.*',
        },
        {
          id: 'm8l5-a2',
          type: 'gap',
          before: 'The more you climb,',
          after: 'stronger your legs get. (parallel structure)',
          hint: 'one little word',
          accepted: ['the'],
          explanation: 'Second half needs its own **the**: *…, the stronger your legs get.*',
        },
        {
          id: 'm8l5-a3',
          type: 'order',
          prompt: 'Build the proverb-worthy sentence — one token is a trap.',
          correct: 'The more I learn, the less I know.',
          distractors: ['most'],
          explanation:
            'Escalators run on comparatives (*more, less*) — superlatives (*most*) are not allowed on board.',
        },
        {
          id: 'm8l5-a4',
          type: 'mcq',
          question: 'This route is ___ harder than the one we took yesterday.',
          options: ['far', 'very', 'more'],
          correct: 0,
          explanation:
            'Boost a comparative with **far/much/a lot** — *very* only works with base adjectives.',
        },
        {
          id: 'm8l5-a5',
          type: 'error-hunt',
          sentence: 'Her second novel is very better than her first.',
          wrongIndex: 4,
          correction: 'much',
          explanation:
            '*very* cannot touch a comparative — upgrade to **much/far better**.',
        },
        {
          id: 'm8l5-a6',
          type: 'mcq',
          question: 'It was ___ the best concert of the summer.',
          options: ['by far', 'far by', 'so far'],
          correct: 0,
          explanation:
            'Superlatives get boosted with **by far**: *by far the best*.',
        },
        {
          id: 'm8l5-a7',
          type: 'gap',
          before: 'The forecast is getting',
          after: 'and worse — maybe postpone the hike? (repeated comparative)',
          hint: 'worse + ?',
          accepted: ['worse'],
          explanation:
            'Continuous change: **comparative and comparative** — *worse and worse, higher and higher*.',
        },
        {
          id: 'm8l5-a8',
          type: 'match',
          prompt: 'Match the booster to its strength.',
          pairs: [
            ['far cheaper', 'a big difference'],
            ['slightly cheaper', 'a small difference'],
            ['even cheaper', 'cheaper than something already cheap'],
            ['by far the cheapest', 'superlative champion'],
          ],
          explanation:
            'Pick your booster by the size of the gap — and save **by far** for superlatives.',
        },
        {
          id: 'm8l5-a9',
          type: 'transform',
          prompt: 'Rewrite as an escalator sentence starting with the keyword.',
          source: 'If you leave early, you will arrive early.',
          keyword: 'THE',
          accepted: [
            'The earlier you leave, the earlier you arrive',
            'The earlier you leave the earlier you arrive',
            'The earlier you leave, the earlier you will arrive',
            'The earlier you leave the earlier you will arrive',
          ],
          explanation:
            'Conditional → escalator: **The earlier you leave, the earlier you (will) arrive.**',
        },
      ],
    },
    {
      title: 'Twice As Nice',
      icon: '⚖️',
      exercises: [
        {
          id: 'm8l5-b1',
          type: 'mcq',
          question: 'The sequel is not nearly ___ good ___ the original.',
          options: ['as / as', 'so / that', 'more / than'],
          correct: 0,
          explanation:
            '**not nearly as…as** = much worse. The *as…as* frame stays intact under negation.',
        },
        {
          id: 'm8l5-b2',
          type: 'gap',
          before: 'The new flat is twice',
          after: 'big as the old one. (2×)',
          hint: 'equality word',
          accepted: ['as'],
          explanation: 'Multiplication uses the equality frame: **twice as big as**.',
        },
        {
          id: 'm8l5-b3',
          type: 'mcq',
          question: 'Petrol is nowhere near ___ expensive here.',
          options: ['as', 'more', 'so'],
          correct: 0,
          explanation:
            '**nowhere near as + adjective** = not remotely as — a vivid C1 downgrade.',
        },
        {
          id: 'm8l5-b4',
          type: 'error-hunt',
          sentence: 'He behaves as if he owns the place, which he definitely does not.',
          wrongIndex: 5,
          correction: 'owned',
          explanation:
            'Unreal comparison (*he does NOT own it*) → past tense: **as if he owned the place**.',
        },
        {
          id: 'm8l5-b5',
          type: 'mcq',
          question: 'She looked as if she ___ a ghost. (the seeing happened earlier)',
          options: ['had seen', 'sees', 'would see'],
          correct: 0,
          explanation:
            'Unreal + earlier event → past perfect: *as if she **had seen** a ghost*.',
        },
        {
          id: 'm8l5-b6',
          type: 'match',
          prompt: 'Match the comparison to its meaning.',
          pairs: [
            ['just as good as', 'exactly equal'],
            ['not quite as good as', 'slightly worse'],
            ['nothing like as good as', 'much worse'],
            ['twice as good as', 'double the quality'],
          ],
          explanation:
            'The as…as dial runs from *just as* (equal) down to *nothing like as* (not even close).',
        },
        {
          id: 'm8l5-b7',
          type: 'gap',
          before: 'It looks',
          after: 'if it is going to snow — look at that sky. (real possibility)',
          hint: 'one little word',
          accepted: ['as'],
          explanation:
            'Real possibility → **as if + normal tense**: *It looks as if it\'s going to snow.*',
        },
        {
          id: 'm8l5-b8',
          type: 'error-hunt',
          sentence: 'It looks like if the match will be cancelled.',
          wrongIndex: 2,
          correction: 'as',
          explanation:
            'Before *if*, the connector is **as**: *looks as if…*. (*Looks like* works alone, without *if*.)',
        },
        {
          id: 'm8l5-b9',
          type: 'transform',
          prompt: 'Rewrite using the keyword — start with "The red route".',
          source: 'The blue route is much easier than the red route.',
          keyword: 'NEARLY',
          accepted: [
            'The red route is not nearly as easy as the blue route',
            "The red route isn't nearly as easy as the blue route",
            'The red route is not nearly as easy as the blue one',
            "The red route isn't nearly as easy as the blue one",
          ],
          explanation:
            'Much easier ↔ **not nearly as easy as** — same gap, opposite viewpoint.',
        },
      ],
    },
    {
      title: 'The Formal Chamber',
      icon: '🏛️',
      exercises: [
        {
          id: 'm8l5-d1',
          type: 'mcq',
          question: 'The board insists that every member ___ present at the vote.',
          options: ['be', 'is', 'are'],
          correct: 0,
          explanation:
            'Demand verb + that-clause → base form subjunctive: *insists that every member **be** present*.',
        },
        {
          id: 'm8l5-d2',
          type: 'gap',
          before: 'It is essential that she',
          after: 'the documents before Friday. (sign)',
          hint: 'sign',
          accepted: ['sign'],
          explanation:
            '*essential/vital/crucial that…* → base form: *that she **sign*** — no -s, even for she.',
        },
        {
          id: 'm8l5-d3',
          type: 'error-hunt',
          sentence: 'The doctor recommended that he takes a week off work.',
          wrongIndex: 5,
          correction: 'take',
          explanation:
            '*recommend that…* → subjunctive base form: *that he **take** a week off*.',
        },
        {
          id: 'm8l5-d4',
          type: 'mcq',
          question: 'I suggest that the meeting ___ postponed until Monday.',
          options: ['be', 'is being', 'will'],
          correct: 0,
          explanation:
            'Passive subjunctive: **be + past participle** — *that the meeting be postponed*.',
        },
        {
          id: 'm8l5-d5',
          type: 'match',
          prompt: 'Match the frozen formal to its meaning.',
          pairs: [
            ['if need be', 'if it is necessary'],
            ['come what may', 'whatever happens'],
            ['be that as it may', 'even so / nevertheless'],
            ['so be it', 'I accept it (reluctantly)'],
          ],
          explanation:
            'Fossilised subjunctives — untouchable word orders, priceless in formal writing.',
        },
        {
          id: 'm8l5-d6',
          type: 'gap',
          before: 'If I',
          after: 'you, I would take the earlier train. (formal unreal)',
          hint: 'be — formal',
          accepted: ['were'],
          explanation:
            'Formal unreal *be* is **were** for every person: *If I were you…*',
        },
        {
          id: 'm8l5-d7',
          type: 'mcq',
          question: 'British English softer alternative: "They demanded that the fee ___ waived."',
          options: ['should be', 'would be', 'shall be'],
          correct: 0,
          explanation:
            'BrE alternative to the bare subjunctive: **should + base form** — *that the fee should be waived*.',
        },
        {
          id: 'm8l5-d8',
          type: 'order',
          prompt: 'Build the formal sentence — one token is a trap.',
          correct: 'It is vital that every climber carry a map.',
          distractors: ['carries'],
          explanation:
            'Subjunctive after *vital that*: base form **carry**, even with *every climber*.',
        },
        {
          id: 'm8l5-d9',
          type: 'transform',
          prompt: 'Rewrite using the keyword.',
          source: 'The committee said it was necessary for the report to be rewritten.',
          keyword: 'INSISTED',
          accepted: [
            'The committee insisted that the report be rewritten',
            'The committee insisted the report be rewritten',
          ],
          explanation:
            'Demand verb + subjunctive passive: *insisted that the report **be rewritten***.',
        },
      ],
    },
    {
      title: 'Lightning Round',
      icon: '⚡',
      exercises: [
        {
          id: 'm8l5-e1',
          type: 'speed',
          secondsPerItem: 9,
          items: [
            { question: 'The more, the ___.', options: ['merrier', 'more merry'], correct: 0 },
            { question: '___ better than yesterday!', options: ['Far', 'Very'], correct: 0 },
            { question: 'twice ___ expensive', options: ['as', 'more'], correct: 0 },
            { question: 'as if he ___ a millionaire (he is not)', options: ['were', 'is'], correct: 0 },
            { question: 'I suggest she ___ early.', options: ['leave', 'leaves'], correct: 0 },
            { question: 'It is vital that he ___ informed.', options: ['be', 'is'], correct: 0 },
            { question: 'if need ___', options: ['be', 'is'], correct: 0 },
            { question: 'nowhere near ___ fast', options: ['as', 'than'], correct: 0 },
            { question: 'The sooner, the ___.', options: ['better', 'best'], correct: 0 },
            { question: 'She demanded that it ___ done.', options: ['be', 'was'], correct: 0 },
          ],
          explanation: 'The final lightning round of the whole mountain — struck like a pro! ⚡🏔️',
        },
      ],
    },
  ],
  boss: {
    passPct: 80,
    exercises: [
      {
        id: 'm8l5-boss1',
        type: 'mcq',
        question: 'Which is correct?',
        options: [
          'The higher we climbed, the thinner the air became.',
          'Higher we climbed, thinner the air became.',
          'The more higher we climbed, the more thinner the air became.',
        ],
        correct: 0,
        explanation:
          'Escalator: **the + comparative** twice, no double comparatives (*more higher* 🙅).',
      },
      {
        id: 'm8l5-boss2',
        type: 'gap',
        before: 'This test was',
        after: 'easier than the last one — I finished in half the time. (big difference)',
        hint: 'booster',
        accepted: ['far', 'much', 'a lot', 'considerably'],
        explanation:
          'Big gap → **far/much/a lot easier**. *Very easier* remains illegal in all countries.',
      },
      {
        id: 'm8l5-boss3',
        type: 'error-hunt',
        prompt: 'Formal English — find the word to upgrade.',
        sentence: 'She acts as if she was the only person on the mountain.',
        wrongIndex: 5,
        correction: 'were',
        explanation:
          'Formal unreal comparison: **as if she were** — the subjunctive *were* for every person.',
      },
      {
        id: 'm8l5-boss4',
        type: 'mcq',
        question: 'The lawyer requested that the hearing ___ adjourned.',
        options: ['be', 'is', 'was'],
        correct: 0,
        explanation:
          'Demand verb → passive subjunctive: *requested that the hearing **be** adjourned*.',
      },
      {
        id: 'm8l5-boss5',
        type: 'order',
        prompt: 'Build the escalator — one token is a trap.',
        correct: 'The less you pack, the lighter your rucksack will be.',
        distractors: ['least'],
        explanation:
          'Escalators take comparatives: **the less…, the lighter…** — *least* stays at base camp.',
      },
      {
        id: 'm8l5-boss6',
        type: 'gap',
        before: 'Your coffee is nothing like',
        after: 'strong as mine — barely beige. (much weaker)',
        hint: 'equality word',
        accepted: ['as'],
        explanation:
          '**nothing like as…as** = not remotely as — the most dramatic member of the as…as family.',
      },
      {
        id: 'm8l5-boss7',
        type: 'error-hunt',
        sentence: 'It is crucial that every volunteer arrives an hour early.',
        wrongIndex: 6,
        correction: 'arrive',
        explanation:
          '*crucial that…* → subjunctive base form: *that every volunteer **arrive***.',
      },
      {
        id: 'm8l5-boss8',
        type: 'match',
        prompt: 'Match the polished phrase to its meaning.',
        pairs: [
          ['as it were', 'so to speak'],
          ['far and away the best', 'by far the best'],
          ['all the more reason', 'an even stronger argument'],
          ['as good as new', 'practically new'],
        ],
        explanation:
          'Four C2 gems — drop one into an essay and watch the examiner smile.',
      },
      {
        id: 'm8l5-boss9',
        type: 'mcq',
        question: 'Pick the correct formal sentence.',
        options: [
          'Be that as it may, the rules still apply.',
          'Be it that as may, the rules still apply.',
          'That be as it may, the rules still apply.',
        ],
        correct: 0,
        explanation:
          'Frozen word order: **Be that as it may** = even so. Fossils don\'t bend.',
      },
      {
        id: 'm8l5-boss10',
        type: 'transform',
        prompt: 'Rewrite as an escalator sentence starting with the keyword.',
        source: 'If you climb higher, the view gets better.',
        keyword: 'THE',
        accepted: [
          'The higher you climb, the better the view gets',
          'The higher you climb the better the view gets',
          'The higher you climb, the better the view',
          'The higher you climb the better the view',
        ],
        explanation:
          '**The higher you climb, the better the view (gets)** — also the moral of this entire course.',
      },
      {
        id: 'm8l5-boss11',
        type: 'mcq',
        question: 'The FINAL question of GrammarPeak 🏔️: "I insist that every learner ___ proud of themselves."',
        options: ['be', 'is', 'being'],
        correct: 0,
        explanation:
          'Subjunctive to the very end: *I insist that every learner **be** proud.* And you should be. 🚩',
      },
    ],
  },
};
