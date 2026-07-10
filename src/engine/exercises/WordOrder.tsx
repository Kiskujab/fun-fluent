import { useMemo, useState } from 'react';
import type { OrderExercise } from '../../types';
import type { ChildProps } from '../contract';
import { shuffle } from '../answers';
import { sfx } from '../../audio/sfx';

interface Token {
  id: number;
  text: string;
}

export function WordOrder({ ex, phase, onResult }: ChildProps<OrderExercise>) {
  const correctTokens = useMemo(() => ex.tokens ?? ex.correct.split(' '), [ex]);
  const bank = useMemo<Token[]>(
    () =>
      shuffle(
        [...correctTokens, ...(ex.distractors ?? [])].map((text, id) => ({ id, text })),
      ),
    [correctTokens, ex],
  );
  const [placed, setPlaced] = useState<Token[]>([]);
  const done = phase === 'done';
  const placedIds = new Set(placed.map((t) => t.id));

  const place = (t: Token) => {
    if (done) return;
    sfx.click();
    setPlaced((p) => [...p, t]);
  };
  const unplace = (t: Token) => {
    if (done) return;
    sfx.click();
    setPlaced((p) => p.filter((x) => x.id !== t.id));
  };
  const check = () => {
    if (done || placed.length === 0) return;
    const ok =
      placed.length === correctTokens.length &&
      placed.every((t, i) => t.text === correctTokens[i]);
    onResult({ kind: 'attempt', correct: ok });
  };

  return (
    <div>
      {/* Answer line */}
      <div
        className={`mb-4 flex min-h-14 flex-wrap items-center gap-2 rounded-2xl border-2 border-dashed px-3 py-2.5 ${
          phase === 'retry' ? 'border-gold bg-amber-50' : 'border-brand/40 bg-sky-soft/60'
        }`}
      >
        {placed.length === 0 && (
          <span className="text-sm font-bold text-ink-soft">Tap the words below to build the sentence…</span>
        )}
        {placed.map((t) => (
          <button
            key={t.id}
            onClick={() => unplace(t)}
            disabled={done}
            className="btn-3d btn-brand animate-pop px-3 py-1.5 text-base"
          >
            {t.text}
          </button>
        ))}
      </div>
      {/* Bank */}
      <div className="mb-2 flex flex-wrap gap-2">
        {bank.map((t) =>
          placedIds.has(t.id) ? (
            <span
              key={t.id}
              className="rounded-2xl border-2 border-dashed border-ink/10 px-3 py-1.5 text-base font-extrabold text-transparent select-none"
            >
              {t.text}
            </span>
          ) : (
            <button
              key={t.id}
              onClick={() => place(t)}
              disabled={done}
              className="btn-3d btn-white px-3 py-1.5 text-base"
            >
              {t.text}
            </button>
          ),
        )}
      </div>
      {!done && (
        <button className="btn-3d btn-brand mt-2 px-6 py-2.5" onClick={check} disabled={placed.length === 0}>
          Check
        </button>
      )}
    </div>
  );
}
