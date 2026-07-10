import type { Lesson, Module } from '../types';

/**
 * Full course map — grammar syllabus based on English File 4th edition
 * (Upper-Intermediate → Advanced → Advanced Plus), reorganised into
 * thematic modules, plus a bonus descent module (M9) built from the
 * English File Advanced Grammar Bank reference sheets. All 37 lessons
 * are fully authored and available.
 */
export const MODULES: Module[] = [
  {
    id: 'm1',
    num: 1,
    title: 'Tense Mastery',
    tagline: 'The 12+ tenses, questions & question tags',
    color: '#10b981',
    icon: '⏰',
    level: 'B2 → C1',
    altitude: '1,500 m',
    lessons: [
      { id: 'm1l1', title: 'The Present Family', subtitle: 'Simple, continuous & the perfect bridge', minutes: 40, available: true },
      { id: 'm1l2', title: 'The Past Family', subtitle: 'Narrative tenses, used to & would', minutes: 40, available: true },
      { id: 'm1l3', title: 'The Future Family', subtitle: 'will, going to & the future perfect crew', minutes: 40, available: true },
      { id: 'm1l4', title: 'The Grand Tense Tour', subtitle: 'All 12 tenses on one map', minutes: 45, available: true },
      { id: 'm1l5', title: 'Questions & Question Tags', subtitle: "Auxiliaries, echoes and tags — isn't it?", minutes: 45, available: true },
    ],
  },
  {
    id: 'm2',
    num: 2,
    title: 'Modality Mastery',
    tagline: 'Obligation, deduction & the fine print',
    color: '#3b82f6',
    icon: '⚖️',
    level: 'B2+',
    altitude: '2,800 m',
    lessons: [
      { id: 'm2l1', title: 'Rules of the Game', subtitle: 'must, have to, should — obligation & advice', minutes: 35, available: true },
      { id: 'm2l2', title: "The Detective's Toolkit", subtitle: 'may, might, must — speculation now', minutes: 35, available: true },
      { id: 'm2l3', title: 'Cold Case Files', subtitle: "must have, can't have — past deduction", minutes: 40, available: true },
      { id: 'm2l4', title: 'Modal Fine Print', subtitle: "needn't have, dare, be bound to, would rather", minutes: 45, available: true },
    ],
  },
  {
    id: 'm3',
    num: 3,
    title: 'Hypothetical English',
    tagline: 'Conditionals, wishes & parallel universes',
    color: '#8b5cf6',
    icon: '🔮',
    level: 'B2+',
    altitude: '3,900 m',
    lessons: [
      { id: 'm3l1', title: 'Real Possibilities', subtitle: 'zero & first conditionals, future time clauses', minutes: 35, available: true },
      { id: 'm3l2', title: 'Parallel Universes', subtitle: 'second & third conditionals', minutes: 40, available: true },
      { id: 'm3l3', title: 'Time-Crossed Worlds', subtitle: 'mixed conditionals & if-alternatives', minutes: 45, available: true },
      { id: 'm3l4', title: 'The Regret Department', subtitle: "wish, if only, it's time", minutes: 40, available: true },
    ],
  },
  {
    id: 'm4',
    num: 4,
    title: 'Verb Patterns',
    tagline: 'Gerunds, infinitives & habit machines',
    color: '#ec4899',
    icon: '🧩',
    level: 'C1',
    altitude: '4,900 m',
    lessons: [
      { id: 'm4l1', title: '-ing or to?', subtitle: 'gerund vs infinitive essentials', minutes: 35, available: true },
      { id: 'm4l2', title: 'Advanced Patterns', subtitle: 'perfect & passive gerunds, verb + object + infinitive', minutes: 45, available: true },
      { id: 'm4l3', title: 'Habit Machines', subtitle: 'used to, be used to, get used to & get', minutes: 35, available: true },
      { id: 'm4l4', title: 'The Five Senses', subtitle: 'see somebody do vs doing', minutes: 40, available: true },
    ],
  },
  {
    id: 'm5',
    num: 5,
    title: 'Passive & Distance',
    tagline: 'The passive, distancing & reported speech',
    color: '#14b8a6',
    icon: '🥷',
    level: 'C1',
    altitude: '5,800 m',
    lessons: [
      { id: 'm5l1', title: 'The Passive Voice', subtitle: 'all forms + have something done', minutes: 40, available: true },
      { id: 'm5l2', title: 'Keeping Your Distance', subtitle: 'it is said that…, seems, appears', minutes: 40, available: true },
      { id: 'm5l3', title: 'He Said, She Said', subtitle: 'reported speech & reporting verbs', minutes: 45, available: true },
    ],
  },
  {
    id: 'm6',
    num: 6,
    title: 'Sentence Architecture',
    tagline: 'Clauses, participles & discourse markers',
    color: '#f97316',
    icon: '🏗️',
    level: 'C1',
    altitude: '6,600 m',
    lessons: [
      { id: 'm6l1', title: 'Relative Clauses', subtitle: 'who, which, whose — defining & non-defining', minutes: 40, available: true },
      { id: 'm6l2', title: 'Participle Clauses', subtitle: 'having finished, seen from above', minutes: 45, available: true },
      { id: 'm6l3', title: 'Contrast & Purpose', subtitle: 'although, despite, so as to, whatever', minutes: 40, available: true },
      { id: 'm6l4', title: 'Discourse Markers', subtitle: 'linkers & conversational signposts', minutes: 45, available: true },
    ],
  },
  {
    id: 'm7',
    num: 7,
    title: 'Emphasis & Style',
    tagline: 'Inversion, clefts, ellipsis — true C2 flair',
    color: '#a855f7',
    icon: '🎭',
    level: 'C1 → C2',
    altitude: '7,600 m',
    lessons: [
      { id: 'm7l1', title: 'Inversion', subtitle: 'Never have I ever…', minutes: 45, available: true },
      { id: 'm7l2', title: 'Cleft Sentences', subtitle: 'What I love is… / It was Anna who…', minutes: 45, available: true },
      { id: 'm7l3', title: 'Fronting & Emphatic do', subtitle: 'This I must see!', minutes: 40, available: true },
      { id: 'm7l4', title: 'Ellipsis & Substitution', subtitle: 'saying more with less', minutes: 45, available: true },
      { id: 'm7l5', title: 'Noun Power', subtitle: 'noun phrases & nominalisation', minutes: 45, available: true },
    ],
  },
  {
    id: 'm8',
    num: 8,
    title: 'Precision Toolkit',
    tagline: 'Articles, quantifiers & the subjunctive',
    color: '#f59e0b',
    icon: '💎',
    level: 'C2',
    altitude: '8,849 m',
    lessons: [
      { id: 'm8l1', title: 'Articles: The Final Boss', subtitle: 'a, the, zero — advanced rules', minutes: 45, available: true },
      { id: 'm8l2', title: 'Quantifiers', subtitle: 'all, both, either, no, none', minutes: 40, available: true },
      { id: 'm8l3', title: 'Countability & Compounds', subtitle: 'uncountables, plurals, possessives', minutes: 40, available: true },
      { id: 'm8l4', title: 'Pronouns & Reference', subtitle: 'one, it, impersonal you & they', minutes: 40, available: true },
      { id: 'm8l5', title: 'Comparison & Subjunctive', subtitle: 'the…the…, as if, I insist he be', minutes: 45, available: true },
    ],
  },
  {
    id: 'm9',
    num: 9,
    title: 'The Descent',
    tagline: 'have, causatives & street-smart signposts',
    color: '#0ea5e9',
    icon: '🎿',
    level: 'C2 spoken',
    altitude: 'Back to base camp',
    lessons: [
      { id: 'm9l1', title: 'Have It All', subtitle: 'have & have got — every job one verb can do', minutes: 40, available: true },
      { id: 'm9l2', title: 'The Causative Ladder', subtitle: 'make, let, have & get somebody to do it', minutes: 45, available: true },
      { id: 'm9l3', title: 'Talking of Which…', subtitle: 'the conversational signposts natives actually use', minutes: 40, available: true },
    ],
  },
];

export const TOTAL_LESSONS = MODULES.reduce((a, m) => a + m.lessons.length, 0);

/**
 * Lesson content is code-split: each lesson lives in its own chunk and is
 * fetched on demand, so the initial bundle stays small. Loaded lessons are
 * cached for instant re-entry.
 */
const LOADERS: Record<string, () => Promise<Lesson>> = {
  m1l1: () => import('./module1/lesson01-present-family').then((m) => m.lesson01),
  m1l2: () => import('./module1/lesson02-past-family').then((m) => m.lesson02),
  m1l3: () => import('./module1/lesson03-future-family').then((m) => m.lesson03),
  m1l4: () => import('./module1/lesson04-grand-tense-tour').then((m) => m.lesson04),
  m1l5: () => import('./module1/lesson05-questions-tags').then((m) => m.lesson05),
  m2l1: () => import('./module2/lesson01-obligation').then((m) => m.m2l1),
  m2l2: () => import('./module2/lesson02-speculation').then((m) => m.m2l2),
  m2l3: () => import('./module2/lesson03-past-modals').then((m) => m.m2l3),
  m2l4: () => import('./module2/lesson04-fine-print').then((m) => m.m2l4),
  m3l1: () => import('./module3/lesson01-real-conditionals').then((m) => m.m3l1),
  m3l2: () => import('./module3/lesson02-unreal-conditionals').then((m) => m.m3l2),
  m3l3: () => import('./module3/lesson03-mixed-conditionals').then((m) => m.m3l3),
  m3l4: () => import('./module3/lesson04-wishes').then((m) => m.m3l4),
  m4l1: () => import('./module4/lesson01-gerund-infinitive').then((m) => m.m4l1),
  m4l2: () => import('./module4/lesson02-advanced-patterns').then((m) => m.m4l2),
  m4l3: () => import('./module4/lesson03-habits-get').then((m) => m.m4l3),
  m4l4: () => import('./module4/lesson04-senses').then((m) => m.m4l4),
  m5l1: () => import('./module5/lesson01-passive').then((m) => m.m5l1),
  m5l2: () => import('./module5/lesson02-distancing').then((m) => m.m5l2),
  m5l3: () => import('./module5/lesson03-reported-speech').then((m) => m.m5l3),
  m6l1: () => import('./module6/lesson01-relative-clauses').then((m) => m.m6l1),
  m6l2: () => import('./module6/lesson02-participle-clauses').then((m) => m.m6l2),
  m6l3: () => import('./module6/lesson03-contrast-purpose').then((m) => m.m6l3),
  m6l4: () => import('./module6/lesson04-discourse-markers').then((m) => m.m6l4),
  m7l1: () => import('./module7/lesson01-inversion').then((m) => m.m7l1),
  m7l2: () => import('./module7/lesson02-clefts').then((m) => m.m7l2),
  m7l3: () => import('./module7/lesson03-fronting-do').then((m) => m.m7l3),
  m7l4: () => import('./module7/lesson04-ellipsis').then((m) => m.m7l4),
  m7l5: () => import('./module7/lesson05-noun-power').then((m) => m.m7l5),
  m8l1: () => import('./module8/lesson01-articles').then((m) => m.m8l1),
  m8l2: () => import('./module8/lesson02-quantifiers').then((m) => m.m8l2),
  m8l3: () => import('./module8/lesson03-countability').then((m) => m.m8l3),
  m8l4: () => import('./module8/lesson04-pronouns-reference').then((m) => m.m8l4),
  m8l5: () => import('./module8/lesson05-comparison-subjunctive').then((m) => m.m8l5),
  m9l1: () => import('./module9/lesson01-have').then((m) => m.m9l1),
  m9l2: () => import('./module9/lesson02-causatives').then((m) => m.m9l2),
  m9l3: () => import('./module9/lesson03-signposts').then((m) => m.m9l3),
};

const cache = new Map<string, Lesson>();

export async function loadLesson(id: string): Promise<Lesson | undefined> {
  const hit = cache.get(id);
  if (hit) return hit;
  const loader = LOADERS[id];
  if (!loader) return undefined;
  const lesson = await loader();
  cache.set(id, lesson);
  return lesson;
}

/** Load every lesson (used by content self-tests). */
export async function loadAllLessons(): Promise<Lesson[]> {
  return Promise.all(Object.keys(LOADERS).map(async (id) => (await loadLesson(id))!));
}
