import { useState } from 'react';
import type { TransformExercise } from '../../types';
import type { ChildProps } from '../contract';
import { answerMatches } from '../answers';

export function Transform({ ex, phase, onResult }: ChildProps<TransformExercise>) {
  const [val, setVal] = useState('');
  const done = phase === 'done';

  const check = () => {
    if (done || val.trim() === '') return;
    onResult({ kind: 'attempt', correct: answerMatches(val, ex.accepted) });
  };

  return (
    <div>
      <div className="example-bubble mb-3 font-bold">{ex.source}</div>
      {ex.keyword && (
        <p className="mb-3 text-sm font-bold text-ink-soft">
          🔑 You must use: <span className="chip">{ex.keyword}</span>
        </p>
      )}
      <div className="flex flex-wrap items-center gap-2 text-lg font-bold">
        {ex.before && <span>{ex.before}</span>}
        <input
          value={val}
          onChange={(e) => setVal(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && check()}
          disabled={done}
          autoFocus
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          placeholder="Rewrite it here…"
          className={`min-w-52 flex-1 rounded-xl border-b-4 bg-sky-soft px-3 py-2 text-lg font-extrabold outline-none transition-colors ${
            phase === 'retry' ? 'border-gold' : 'border-brand'
          } focus:bg-white`}
        />
        {ex.after && <span>{ex.after}</span>}
      </div>
      {!done && (
        <button className="btn-3d btn-brand mt-4 px-6 py-2.5" onClick={check} disabled={val.trim() === ''}>
          Check
        </button>
      )}
    </div>
  );
}
