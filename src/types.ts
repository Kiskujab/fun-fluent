/* ---------- Exercises ---------- */

interface ExerciseBase {
  id: string;
  /** Instruction line shown above the exercise (optional; sensible default per type). */
  prompt?: string;
  /** Grammar explanation shown in the feedback banner — the teaching moment. */
  explanation: string;
}

export interface MCQExercise extends ExerciseBase {
  type: 'mcq';
  /** May contain a ___ gap. */
  question: string;
  options: string[];
  correct: number;
}

export interface GapExercise extends ExerciseBase {
  type: 'gap';
  before: string;
  after: string;
  /** e.g. a base verb shown in brackets: "not / see". */
  hint?: string;
  /** Accepted answers; the first one is displayed as the model answer. */
  accepted: string[];
}

export interface OrderExercise extends ExerciseBase {
  type: 'order';
  /** The correct sentence; tokens are derived by splitting on spaces unless `tokens` given. */
  correct: string;
  tokens?: string[];
  distractors?: string[];
}

export interface ErrorHuntExercise extends ExerciseBase {
  type: 'error-hunt';
  /** Tokenised by spaces; the learner clicks the wrong word. */
  sentence: string;
  wrongIndex: number;
  /** The corrected word/phrase, shown in feedback. */
  correction: string;
}

export interface TransformExercise extends ExerciseBase {
  type: 'transform';
  source: string;
  /** Key word that must be used, CAE-style (display only). */
  keyword?: string;
  /** Optional frame around the writing box. */
  before?: string;
  after?: string;
  accepted: string[];
}

export interface MatchExercise extends ExerciseBase {
  type: 'match';
  pairs: [string, string][];
}

export interface SortExercise extends ExerciseBase {
  type: 'sort';
  buckets: string[];
  items: { text: string; bucket: number }[];
}

export interface SpeedExercise extends ExerciseBase {
  type: 'speed';
  /** Seconds per item (default 8). */
  secondsPerItem?: number;
  items: { question: string; options: string[]; correct: number }[];
}

export type Exercise =
  | MCQExercise
  | GapExercise
  | OrderExercise
  | ErrorHuntExercise
  | TransformExercise
  | MatchExercise
  | SortExercise
  | SpeedExercise;

/* ---------- Lessons & curriculum ---------- */

export interface LearnCard {
  title: string;
  /**
   * Rich text: **bold**, `chip`, lines starting "> " = example bubble,
   * lines starting "- " = bullet, ~~struck~~ = wrong form. Blank line = new paragraph.
   */
  body: string;
  /** Optional 💡 callout. */
  tip?: string;
  /** Optional quick check embedded in the card. */
  miniCheck?: Exercise;
}

export interface PracticeSet {
  title: string;
  icon: string;
  exercises: Exercise[];
}

export interface Lesson {
  id: string;
  title: string;
  subtitle: string;
  minutes: number;
  /** What you'll master — shown on the intro splash. */
  goals: string[];
  cards: LearnCard[];
  sets: PracticeSet[];
  boss: { exercises: Exercise[]; passPct: number };
}

export interface LessonMeta {
  id: string;
  title: string;
  subtitle: string;
  minutes: number;
  /** False = "coming soon" (no content yet). */
  available: boolean;
}

export interface Module {
  id: string;
  num: number;
  title: string;
  tagline: string;
  /** Zone accent colour (hex). */
  color: string;
  icon: string;
  level: string;
  /** Metaphorical altitude reached when the module is complete. */
  altitude: string;
  lessons: LessonMeta[];
}

/* ---------- Progress & gamification ---------- */

export interface LessonRecord {
  bestBossPct: number;
  stars: 1 | 2 | 3;
  timesCompleted: number;
}

export interface ProgressState {
  xp: number;
  completed: Record<string, LessonRecord>;
  streak: { current: number; best: number; lastDate: string };
  badges: string[];
  soundOn: boolean;
  /** Developer mode: unlocks every lesson and reveals the testing tools. */
  devMode: boolean;
  /** Transient, not persisted. */
  combo: number;
  maxCombo: number;
}

export type CelebrationEvent =
  | { kind: 'levelup'; level: number; name: string }
  | { kind: 'badge'; id: string };

export interface BadgeDef {
  id: string;
  icon: string;
  name: string;
  desc: string;
}
