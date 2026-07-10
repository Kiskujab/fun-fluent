import { useMemo, useState } from 'react';
import type { MatchExercise } from '../../types';
import type { ChildProps } from '../contract';
import { shuffle } from '../answers';
import { sfx } from '../../audio/sfx';

export function Match({ ex, phase, onResult }: ChildProps<MatchExercise>) {
  const rights = useMemo(
    () => shuffle(ex.pairs.map((p, i) => ({ i, text: p[1] }))),
    [ex],
  );
  const [selLeft, setSelLeft] = useState<number | null>(null);
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [misses, setMisses] = useState(0);
  const [shakeRight, setShakeRight] = useState<number | null>(null);
  const done = phase === 'done';

  const clickLeft = (i: number) => {
    if (done || matched.has(i)) return;
    sfx.click();
    setSelLeft(i === selLeft ? null : i);
  };

  const clickRight = (i: number) => {
    if (done || matched.has(i) || selLeft === null) return;
    if (i === selLeft) {
      sfx.correct();
      const next = new Set(matched);
      next.add(i);
      setMatched(next);
      setSelLeft(null);
      if (next.size === ex.pairs.length) {
        onResult({ kind: 'graded', perfect: misses === 0 });
      }
    } else {
      sfx.wrong();
      setMisses((m) => m + 1);
      setShakeRight(i);
      setTimeout(() => setShakeRight(null), 450);
      setSelLeft(null);
    }
  };

  const btnBase = 'btn-3d px-3 py-2.5 text-left text-[15px] leading-snug';

  return (
    <div>
      <div className="grid grid-cols-2 gap-2.5">
        <div className="grid content-start gap-2.5">
          {ex.pairs.map((p, i) => (
            <button
              key={i}
              onClick={() => clickLeft(i)}
              disabled={done || matched.has(i)}
              className={`${btnBase} ${
                matched.has(i)
                  ? 'btn-good opacity-70'
                  : selLeft === i
                    ? 'btn-brand'
                    : 'btn-white'
              }`}
            >
              {p[0]}
            </button>
          ))}
        </div>
        <div className="grid content-start gap-2.5">
          {rights.map((r) => (
            <button
              key={r.i}
              onClick={() => clickRight(r.i)}
              disabled={done || matched.has(r.i)}
              className={`${btnBase} ${matched.has(r.i) ? 'btn-good opacity-70' : 'btn-white'} ${
                shakeRight === r.i ? 'animate-shake' : ''
              }`}
            >
              {r.text}
            </button>
          ))}
        </div>
      </div>
      <p className="mt-3 text-sm font-bold text-ink-soft">
        🧩 Tap an item on the left, then its partner on the right.
        {misses > 0 && <span className="ml-2 text-bad">Misses: {misses}</span>}
      </p>
    </div>
  );
}
