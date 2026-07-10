import { useState } from 'react';
import type { GapExercise } from '../../types';
import type { ChildProps } from '../contract';
import { answerMatches } from '../answers';
import { RichInline } from '../../components/Rich';

export function GapFill({ ex, phase, onResult }: ChildProps<GapExercise>) {
  const [val, setVal] = useState('');
  const done = phase === 'done';

  const check = () => {
    if (done || val.trim() === '') return;
    onResult({ kind: 'attempt', correct: answerMatches(val, ex.accepted) });
  };

  const width = Math.min(30, Math.max(7, ex.accepted[0].length + 3));

  return (
    <div>
      <div className="mb-2 text-lg font-bold leading-loose">
        <RichInline text={ex.before} />{' '}
        <input
          value={val}
          onChange={(e) => setVal(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && check()}
          disabled={done}
          autoFocus
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          style={{ width: `${width}ch` }}
          className={`mx-1 inline-block rounded-xl border-b-4 bg-sky-soft px-3 py-1 text-center text-lg font-extrabold outline-none transition-colors ${
            phase === 'retry' ? 'border-gold' : 'border-brand'
          } focus:bg-white`}
        />{' '}
        <RichInline text={ex.after} />
      </div>
      {ex.hint && (
        <p className="mb-3 text-sm font-bold text-ink-soft">
          ✏️ use: <span className="chip">{ex.hint}</span>
        </p>
      )}
      {!done && (
        <button className="btn-3d btn-brand mt-2 px-6 py-2.5" onClick={check} disabled={val.trim() === ''}>
          Check
        </button>
      )}
    </div>
  );
}
