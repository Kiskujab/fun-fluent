import { useEffect, useRef, useState } from 'react';
import type { Exercise } from '../types';
import type { ChildPhase, ChildResult } from './contract';
import { MCQ } from './exercises/MCQ';
import { GapFill } from './exercises/GapFill';
import { WordOrder } from './exercises/WordOrder';
import { ErrorHunt } from './exercises/ErrorHunt';
import { Transform } from './exercises/Transform';
import { Match } from './exercises/Match';
import { Sort } from './exercises/Sort';
import { SpeedRound } from './exercises/SpeedRound';
import { RichInline } from '../components/Rich';
import { useProgress } from '../state/store';
import { XP } from '../state/gamification';
import { sfx } from '../audio/sfx';

export interface PlayerResult {
  correct: boolean;
  firstTry: boolean;
}

interface Props {
  ex: Exercise;
  /** boss = single attempt, flat XP. Render with key={ex.id} so state resets between exercises. */
  mode?: 'normal' | 'boss';
  compact?: boolean;
  onComplete: (r: PlayerResult) => void;
}

const PROMPTS: Record<Exercise['type'], string> = {
  mcq: 'Choose the best option',
  gap: 'Fill the gap',
  order: 'Build the sentence',
  'error-hunt': 'Hunt the error',
  transform: 'Rewrite the sentence',
  match: 'Match the pairs',
  sort: 'Sort them out',
  speed: 'Lightning Round',
};

const PRAISE = ['Nice one!', 'Spot on!', 'Brilliant!', 'Exactly right!', 'Lovely stuff!', 'Nailed it!'];

function correctDisplay(ex: Exercise): string | null {
  switch (ex.type) {
    case 'mcq':
      return ex.options[ex.correct];
    case 'gap':
      return ex.accepted[0];
    case 'order':
      return ex.correct;
    case 'error-hunt':
      return `${ex.sentence.split(' ')[ex.wrongIndex]} → ${ex.correction}`;
    case 'transform':
      return ex.accepted[0];
    default:
      return null;
  }
}

type Outcome = 'first-try' | 'retry' | 'fail';

export function ExercisePlayer({ ex, mode = 'normal', compact = false, onComplete }: Props) {
  const { recordAnswer, awardFlatXp } = useProgress();
  const [phase, setPhase] = useState<ChildPhase>('working');
  const [attempts, setAttempts] = useState(0);
  const [outcome, setOutcome] = useState<Outcome>('fail');
  const [xpChip, setXpChip] = useState<{ xp: number; combo: number; mult: number } | null>(null);
  const [praise] = useState(() => PRAISE[Math.floor(Math.random() * PRAISE.length)]);
  const [speedScore, setSpeedScore] = useState<{ correct: number; total: number } | null>(null);
  // Pressing Enter both clicks the focused Continue button AND fires the window
  // keydown handler — guard so onComplete only ever runs once per exercise.
  const completedRef = useRef(false);

  const complete = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    onComplete({ correct: outcome !== 'fail', firstTry: outcome === 'first-try' });
  };

  const finish = (o: Outcome) => {
    setOutcome(o);
    setPhase('done');
  };

  const handleResult = (r: ChildResult) => {
    if (phase === 'done') return;

    if (r.kind === 'speed') {
      const gained = r.correct * XP.speedItem;
      awardFlatXp(gained);
      setSpeedScore(r);
      setXpChip(gained > 0 ? { xp: gained, combo: 0, mult: 1 } : null);
      sfx.lessonDone();
      finish(r.correct / r.total >= 0.5 ? 'first-try' : 'fail');
      return;
    }

    if (r.kind === 'graded') {
      const o: Outcome = r.perfect ? 'first-try' : 'retry';
      if (mode === 'boss') {
        if (r.perfect) awardFlatXp(XP.bossItem);
        setXpChip(r.perfect ? { xp: XP.bossItem, combo: 0, mult: 1 } : null);
      } else {
        const res = recordAnswer(o);
        setXpChip(res.xpGained > 0 ? { xp: res.xpGained, combo: res.combo, mult: res.multiplier } : null);
      }
      sfx.correct();
      finish(o);
      return;
    }

    // Binary attempt
    if (r.correct) {
      const o: Outcome = attempts === 0 ? 'first-try' : 'retry';
      if (mode === 'boss') {
        awardFlatXp(XP.bossItem);
        setXpChip({ xp: XP.bossItem, combo: 0, mult: 1 });
      } else {
        const res = recordAnswer(o);
        setXpChip(res.xpGained > 0 ? { xp: res.xpGained, combo: res.combo, mult: res.multiplier } : null);
        if (res.combo >= 3) sfx.combo();
      }
      sfx.correct();
      finish(o);
    } else {
      const n = attempts + 1;
      setAttempts(n);
      if (mode === 'boss' || n >= 2) {
        if (mode === 'normal') recordAnswer('fail');
        sfx.wrong();
        finish('fail');
      } else {
        sfx.retry();
        setPhase('retry');
      }
    }
  };

  // Enter advances after answering.
  useEffect(() => {
    if (phase !== 'done') return;
    const h = (e: KeyboardEvent) => {
      if (e.key === 'Enter') complete();
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, outcome, onComplete]);

  const child = (() => {
    const p = { phase, onResult: handleResult };
    switch (ex.type) {
      case 'mcq':
        return <MCQ ex={ex} {...p} />;
      case 'gap':
        return <GapFill ex={ex} {...p} />;
      case 'order':
        return <WordOrder ex={ex} {...p} />;
      case 'error-hunt':
        return <ErrorHunt ex={ex} {...p} />;
      case 'transform':
        return <Transform ex={ex} {...p} />;
      case 'match':
        return <Match ex={ex} {...p} />;
      case 'sort':
        return <Sort ex={ex} {...p} />;
      case 'speed':
        return <SpeedRound ex={ex} {...p} />;
    }
  })();

  const showAnswer = correctDisplay(ex);
  const ok = outcome !== 'fail';

  return (
    <div className={compact ? '' : 'animate-rise'}>
      {ex.type !== 'speed' && (
        <p className="mb-3 text-xs font-black tracking-widest text-ink-soft uppercase">
          {ex.prompt ?? PROMPTS[ex.type]}
        </p>
      )}
      {child}

      {/* Retry nudge */}
      {phase === 'retry' && (
        <div className="animate-pop mt-4 rounded-2xl border-2 border-gold/40 bg-amber-50 px-4 py-3 font-bold text-amber-700">
          🤏 So close! Have another go…
        </div>
      )}

      {/* Feedback banner */}
      {phase === 'done' && (
        <div
          className={`animate-rise mt-4 rounded-2xl border-2 px-4 py-3.5 ${
            ok ? 'border-good/40 bg-green-50' : 'border-bad/40 bg-rose-50'
          }`}
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <p className={`text-lg font-black ${ok ? 'text-good-deep' : 'text-bad-deep'}`}>
              {speedScore
                ? speedScore.correct / speedScore.total >= 0.7
                  ? `⚡ Electrifying! ${praise}`
                  : '⚡ Round over!'
                : ok
                  ? `✓ ${praise}`
                  : '✗ Not this time'}
            </p>
            <div className="flex items-center gap-2">
              {xpChip && (
                <span className="animate-pop rounded-full bg-gold/20 px-2.5 py-0.5 text-sm font-black text-amber-600">
                  +{xpChip.xp} XP
                </span>
              )}
              {xpChip && xpChip.mult > 1 && (
                <span className="animate-pop rounded-full bg-brand/15 px-2.5 py-0.5 text-sm font-black text-brand-deep">
                  🎯 COMBO ×{xpChip.mult}
                </span>
              )}
            </div>
          </div>
          {!ok && showAnswer && (
            <p className="mt-1.5 font-bold">
              Answer: <span className="chip">{showAnswer}</span>
            </p>
          )}
          <p className="mt-1.5 leading-relaxed font-semibold text-ink/80">
            <RichInline text={ex.explanation} />
          </p>
          <button
            autoFocus
            className={`btn-3d mt-3 w-full py-3 text-lg ${ok ? 'btn-good' : 'btn-bad'}`}
            onClick={complete}
          >
            Continue →
          </button>
        </div>
      )}
    </div>
  );
}
