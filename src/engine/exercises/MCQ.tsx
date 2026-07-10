import { useMemo, useState } from 'react';
import type { MCQExercise } from '../../types';
import type { ChildProps } from '../contract';
import { RichInline } from '../../components/Rich';
import { shuffle } from '../answers';
import { sfx } from '../../audio/sfx';

export function MCQ({ ex, phase, onResult }: ChildProps<MCQExercise>) {
  // Display options in random order so the answer position is unpredictable.
  const order = useMemo(() => shuffle(ex.options.map((_, i) => i)), [ex]);
  const [tried, setTried] = useState<number[]>([]);
  const [pick, setPick] = useState<number | null>(null);
  const done = phase === 'done';

  const choose = (i: number) => {
    if (done || tried.includes(i)) return;
    sfx.click();
    setPick(i);
    if (i !== ex.correct) setTried((t) => [...t, i]);
    onResult({ kind: 'attempt', correct: i === ex.correct });
  };

  return (
    <div>
      <p className="mb-4 text-lg font-bold leading-relaxed">
        <RichInline text={ex.question} />
      </p>
      <div className="grid gap-2.5">
        {order.map((i, displayPos) => {
          const opt = ex.options[i];
          const isCorrect = i === ex.correct;
          const wasTried = tried.includes(i);
          let cls = 'btn-3d btn-white px-4 py-3 text-left text-base';
          if (done && isCorrect) cls = 'btn-3d btn-good px-4 py-3 text-left text-base';
          else if (done && pick === i && !isCorrect) cls = 'btn-3d btn-bad px-4 py-3 text-left text-base';
          else if (wasTried) cls += ' animate-shake opacity-40 line-through';
          return (
            <button key={i} className={cls} disabled={done || wasTried} onClick={() => choose(i)}>
              <span className="mr-2 inline-block w-6 rounded-md bg-black/10 text-center text-sm font-black">
                {String.fromCharCode(65 + displayPos)}
              </span>
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
