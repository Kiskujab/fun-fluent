import { useMemo, useState } from 'react';
import type { SortExercise } from '../../types';
import type { ChildProps } from '../contract';
import { shuffle } from '../answers';
import { sfx } from '../../audio/sfx';

export function Sort({ ex, phase, onResult }: ChildProps<SortExercise>) {
  const items = useMemo(() => shuffle(ex.items), [ex]);
  const [idx, setIdx] = useState(0);
  const [misses, setMisses] = useState(0);
  const [shakeBucket, setShakeBucket] = useState<number | null>(null);
  const done = phase === 'done';
  const finished = idx >= items.length;
  const current = finished ? null : items[idx];

  const pick = (b: number) => {
    if (done || !current) return;
    if (b === current.bucket) {
      sfx.correct();
      const next = idx + 1;
      setIdx(next);
      if (next >= items.length) {
        onResult({ kind: 'graded', perfect: misses === 0 });
      }
    } else {
      sfx.wrong();
      setMisses((m) => m + 1);
      setShakeBucket(b);
      setTimeout(() => setShakeBucket(null), 450);
    }
  };

  return (
    <div>
      {/* Progress dots */}
      <div className="mb-4 flex justify-center gap-1.5">
        {items.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${i < idx ? 'bg-good' : i === idx ? 'bg-brand' : 'bg-ink/15'}`}
          />
        ))}
      </div>
      {/* Current item */}
      <div className="mb-5 flex justify-center">
        {current ? (
          <div key={idx} className="card animate-pop px-6 py-4 text-center text-xl font-extrabold">
            {current.text}
          </div>
        ) : (
          <div className="animate-pop text-3xl">🎉</div>
        )}
      </div>
      {/* Buckets */}
      <div className={`grid gap-3 ${ex.buckets.length > 2 ? 'grid-cols-3' : 'grid-cols-2'}`}>
        {ex.buckets.map((b, i) => (
          <button
            key={i}
            onClick={() => pick(i)}
            disabled={done || finished}
            className={`btn-3d btn-white px-3 py-5 text-center text-base font-extrabold ${
              shakeBucket === i ? 'animate-shake' : ''
            }`}
          >
            🗂️
            <br />
            {b}
          </button>
        ))}
      </div>
      {misses > 0 && <p className="mt-3 text-sm font-bold text-bad">Misses: {misses}</p>}
    </div>
  );
}
