import { useEffect, useMemo, useRef, useState } from 'react';
import type { SpeedExercise } from '../../types';
import type { ChildProps } from '../contract';
import { RichInline } from '../../components/Rich';
import { shuffle } from '../answers';
import { sfx } from '../../audio/sfx';

type Stage = 'ready' | 'run' | 'flash-good' | 'flash-bad' | 'over';

export function SpeedRound({ ex, phase, onResult }: ChildProps<SpeedExercise>) {
  const perItem = (ex.secondsPerItem ?? 8) * 1000;
  // Randomise option order per item so the answer position is unpredictable.
  const orders = useMemo(() => ex.items.map((it) => shuffle(it.options.map((_, i) => i))), [ex]);
  const [stage, setStage] = useState<Stage>('ready');
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [msLeft, setMsLeft] = useState(perItem);
  const timer = useRef<number | null>(null);
  const done = phase === 'done';

  const stopTimer = () => {
    if (timer.current !== null) {
      window.clearInterval(timer.current);
      timer.current = null;
    }
  };

  const advance = (nextIdx: number, nextScore: number) => {
    if (nextIdx >= ex.items.length) {
      setStage('over');
      onResult({ kind: 'speed', correct: nextScore, total: ex.items.length });
    } else {
      setIdx(nextIdx);
      setMsLeft(perItem);
      setStage('run');
    }
  };

  // Countdown while running.
  useEffect(() => {
    if (stage !== 'run' || done) return;
    timer.current = window.setInterval(() => {
      setMsLeft((ms) => {
        if (ms <= 100) {
          stopTimer();
          sfx.wrong();
          setStage('flash-bad');
          window.setTimeout(() => advance(idx + 1, score), 550);
          return 0;
        }
        return ms - 100;
      });
    }, 100);
    return stopTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stage, idx, done]);

  const answer = (i: number) => {
    if (stage !== 'run' || done) return;
    stopTimer();
    const item = ex.items[idx];
    const ok = i === item.correct;
    const nextScore = ok ? score + 1 : score;
    setScore(nextScore);
    if (ok) sfx.tick();
    else sfx.wrong();
    setStage(ok ? 'flash-good' : 'flash-bad');
    window.setTimeout(() => advance(idx + 1, nextScore), ok ? 250 : 550);
  };

  if (stage === 'ready') {
    return (
      <div className="py-4 text-center">
        <div className="animate-float mb-3 text-5xl">⚡</div>
        <p className="mb-1 text-xl font-black">Lightning Round!</p>
        <p className="mb-5 font-bold text-ink-soft">
          {ex.items.length} quick questions · {ex.secondsPerItem ?? 8}s each · trust your instinct!
        </p>
        <button className="btn-3d btn-brand animate-pulse-ring px-8 py-3 text-lg" onClick={() => setStage('run')}>
          GO! 🚀
        </button>
      </div>
    );
  }

  if (stage === 'over' || done) {
    return (
      <div className="py-4 text-center">
        <div className="mb-2 text-5xl">{score / ex.items.length >= 0.7 ? '🌩️' : '🌧️'}</div>
        <p className="text-2xl font-black">
          {score} / {ex.items.length}
        </p>
        <p className="font-bold text-ink-soft">lightning answers</p>
      </div>
    );
  }

  const item = ex.items[idx];
  const pct = (msLeft / perItem) * 100;
  const flash =
    stage === 'flash-good' ? 'ring-4 ring-good' : stage === 'flash-bad' ? 'ring-4 ring-bad animate-shake' : '';

  return (
    <div className={`rounded-2xl p-1 transition-shadow ${flash}`}>
      <div className="mb-2 flex items-center justify-between text-sm font-black text-ink-soft">
        <span>
          ⚡ {idx + 1}/{ex.items.length}
        </span>
        <span>✅ {score}</span>
      </div>
      {/* timer bar */}
      <div className="mb-4 h-2.5 overflow-hidden rounded-full bg-ink/10">
        <div
          className={`h-full rounded-full ${pct < 30 ? 'animate-pulse bg-bad' : pct < 60 ? 'bg-gold' : 'bg-good'}`}
          style={{ width: `${pct}%`, transition: 'width 0.1s linear' }}
        />
      </div>
      <p className="mb-4 text-center text-lg font-extrabold">
        <RichInline text={item.question} />
      </p>
      <div className="grid grid-cols-2 gap-2.5">
        {orders[idx].map((i) => (
          <button
            key={i}
            onClick={() => answer(i)}
            disabled={stage !== 'run'}
            className="btn-3d btn-white px-3 py-3 text-base"
          >
            {item.options[i]}
          </button>
        ))}
      </div>
    </div>
  );
}
