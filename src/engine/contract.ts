/** Contract between ExercisePlayer and the individual exercise components. */

export type ChildPhase = 'working' | 'retry' | 'done';

export type ChildResult =
  /** Binary-answer types: mcq, gap, order, error-hunt, transform. */
  | { kind: 'attempt'; correct: boolean }
  /** Self-graded games: match, sort. Perfect = no misses. */
  | { kind: 'graded'; perfect: boolean }
  /** Speed round reports its own tally. */
  | { kind: 'speed'; correct: number; total: number };

export interface ChildProps<E> {
  ex: E;
  phase: ChildPhase;
  onResult: (r: ChildResult) => void;
}
