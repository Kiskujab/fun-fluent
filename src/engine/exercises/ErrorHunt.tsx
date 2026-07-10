import { useState } from 'react';
import type { ErrorHuntExercise } from '../../types';
import type { ChildProps } from '../contract';
import { sfx } from '../../audio/sfx';

export function ErrorHunt({ ex, phase, onResult }: ChildProps<ErrorHuntExercise>) {
  const words = ex.sentence.split(' ');
  const [tried, setTried] = useState<number[]>([]);
  const done = phase === 'done';

  const pick = (i: number) => {
    if (done || tried.includes(i)) return;
    sfx.click();
    if (i !== ex.wrongIndex) setTried((t) => [...t, i]);
    onResult({ kind: 'attempt', correct: i === ex.wrongIndex });
  };

  return (
    <div>
      <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2.5 text-lg font-bold leading-relaxed">
        {words.map((w, i) => {
          const isWrong = i === ex.wrongIndex;
          if (done && isWrong) {
            return (
              <span key={i} className="inline-flex items-center gap-1.5">
                <span className="rounded-lg bg-bad/15 px-1.5 font-extrabold text-bad line-through decoration-2">
                  {w}
                </span>
                <span className="animate-pop rounded-lg bg-good/15 px-1.5 font-extrabold text-good-deep">
                  {ex.correction}
                </span>
              </span>
            );
          }
          return (
            <button
              key={i}
              onClick={() => pick(i)}
              disabled={done}
              className={`rounded-lg px-1.5 py-0.5 transition-colors ${
                tried.includes(i)
                  ? 'animate-shake bg-ink/5 text-ink-soft/50 line-through'
                  : 'hover:bg-brand/10 hover:text-brand-deep active:bg-brand/20'
              }`}
            >
              {w}
            </button>
          );
        })}
      </div>
      <p className="mt-3 text-sm font-bold text-ink-soft">🕵️ Tap the word that doesn't belong.</p>
    </div>
  );
}
