import { useEffect, useMemo, useRef, useState } from 'react';
import type { Lesson } from '../types';
import { ExercisePlayer } from '../engine/ExercisePlayer';
import { Rich } from './Rich';
import { Confetti } from './Confetti';
import { useProgress } from '../state/store';
import { MODULES } from '../curriculum';
import { sfx } from '../audio/sfx';

type Step =
  | { t: 'intro' }
  | { t: 'learn'; i: number }
  | { t: 'set'; s: number; e: number }
  | { t: 'bossIntro' }
  | { t: 'boss'; e: number; score: number }
  | { t: 'done'; passed: boolean; pct: number };

interface Props {
  lesson: Lesson;
  onExit: () => void;
}

/** Eased count-up for score/XP reveals. */
function CountUp({ value, duration = 900 }: { value: number; duration?: number }) {
  const [shown, setShown] = useState(0);
  useEffect(() => {
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      setShown(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, duration]);
  return <>{shown}</>;
}

export function LessonView({ lesson, onExit }: Props) {
  const { state, completeLesson } = useProgress();
  const [step, setStep] = useState<Step>({ t: 'intro' });
  const [miniDone, setMiniDone] = useState<Set<number>>(new Set());
  const [confirmQuit, setConfirmQuit] = useState(false);
  const [stats, setStats] = useState({ answered: 0, firstTry: 0 });
  const xpStart = useRef(state.xp);

  const totalSteps = useMemo(
    () =>
      lesson.cards.length +
      lesson.sets.reduce((a, s) => a + s.exercises.length, 0) +
      lesson.boss.exercises.length,
    [lesson],
  );

  const stepIndex = useMemo(() => {
    switch (step.t) {
      case 'intro':
        return 0;
      case 'learn':
        return step.i;
      case 'set': {
        let n = lesson.cards.length;
        for (let i = 0; i < step.s; i++) n += lesson.sets[i].exercises.length;
        return n + step.e;
      }
      case 'bossIntro':
      case 'boss': {
        const base = lesson.cards.length + lesson.sets.reduce((a, s) => a + s.exercises.length, 0);
        return step.t === 'boss' ? base + step.e : base;
      }
      case 'done':
        return totalSteps;
    }
  }, [step, lesson, totalSteps]);

  const module1Ids = useMemo(
    () =>
      MODULES.find((m) => lesson.id.startsWith(m.id))?.lessons.filter((l) => l.available).map((l) => l.id) ?? [],
    [lesson.id],
  );

  const advanceFromSet = (s: number, e: number) => {
    const set = lesson.sets[s];
    if (e + 1 < set.exercises.length) setStep({ t: 'set', s, e: e + 1 });
    else if (s + 1 < lesson.sets.length) setStep({ t: 'set', s: s + 1, e: 0 });
    else setStep({ t: 'bossIntro' });
  };

  const finishBoss = (score: number) => {
    const pct = Math.round((score / lesson.boss.exercises.length) * 100);
    const passed = pct >= lesson.boss.passPct;
    if (passed) {
      completeLesson(lesson.id, pct, module1Ids);
      sfx.bossWin();
    } else {
      sfx.bossFail();
    }
    setStep({ t: 'done', passed, pct });
  };

  const sessionXp = state.xp - xpStart.current;

  /* ---------- header ---------- */
  const header = (
    <div className="sticky top-0 z-40 border-b-2 border-[#f0e9dc] bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-2xl items-center gap-3 px-4 py-2.5">
        {confirmQuit ? (
          <span className="flex items-center gap-1.5">
            <button className="btn-3d btn-bad px-2.5 py-1 text-sm" onClick={onExit}>
              Quit
            </button>
            <button className="btn-3d btn-white px-2.5 py-1 text-sm" onClick={() => setConfirmQuit(false)}>
              Stay
            </button>
          </span>
        ) : (
          <button
            aria-label="Quit lesson"
            className="text-xl font-black text-ink-soft transition-colors hover:text-bad"
            onClick={() => setConfirmQuit(true)}
          >
            ✕
          </button>
        )}
        <div className="h-4 flex-1 overflow-hidden rounded-full bg-ink/10">
          <div
            className="bar-shimmer h-full rounded-full bg-gradient-to-r from-brand to-good transition-all duration-500"
            style={{ width: `${(stepIndex / totalSteps) * 100}%` }}
          />
        </div>
        {state.combo >= 3 && (
          <span
            key={state.combo}
            className={`animate-pop rounded-full px-2 py-0.5 text-sm font-black ${
              state.combo >= 6 ? 'bg-orange-100 text-orange-600' : 'bg-brand/15 text-brand-deep'
            }`}
          >
            {state.combo >= 6 ? '🔥' : '🎯'} {state.combo}
          </span>
        )}
        <span className="rounded-full bg-gold/15 px-2 py-0.5 text-sm font-black whitespace-nowrap text-amber-600">
          ⚡ +{sessionXp}
        </span>
      </div>
    </div>
  );

  /* ---------- steps ---------- */
  let body: React.ReactNode = null;

  if (step.t === 'intro') {
    body = (
      <div className="card animate-rise mx-auto max-w-xl p-7 text-center">
        <p className="animate-float text-6xl">🧗</p>
        <h1 className="mt-2 text-3xl font-black">{lesson.title}</h1>
        <p className="mt-1 text-lg font-bold text-ink-soft">{lesson.subtitle}</p>
        <div className="mx-auto mt-5 max-w-md rounded-2xl bg-sky-soft p-4 text-left">
          <p className="mb-2 text-xs font-black tracking-widest text-ink-soft uppercase">
            On this stage of the climb
          </p>
          {lesson.goals.map((g, i) => (
            <p key={i} className="my-1 font-bold">
              ✅ {g}
            </p>
          ))}
        </div>
        <p className="mt-4 text-sm font-bold text-ink-soft">
          ⏱ about {lesson.minutes} minutes · 📚 learn → 💪 practise → ⛈ boss
        </p>
        <button className="btn-3d btn-brand mt-5 w-full py-3.5 text-xl" onClick={() => setStep({ t: 'learn', i: 0 })}>
          Let's climb! →
        </button>
      </div>
    );
  } else if (step.t === 'learn') {
    const card = lesson.cards[step.i];
    const needsMini = !!card.miniCheck && !miniDone.has(step.i);
    body = (
      <div key={step.i} className="card animate-rise mx-auto max-w-xl p-6">
        <p className="text-xs font-black tracking-widest text-brand uppercase">
          📚 Learn · {step.i + 1}/{lesson.cards.length}
        </p>
        <h2 className="mt-1 mb-3 text-2xl font-black">{card.title}</h2>
        <Rich text={card.body} className="text-[17px]" />
        {card.tip && (
          <div className="mt-3 rounded-2xl border-2 border-gold/40 bg-amber-50 px-4 py-3 font-bold">
            💡 <Rich text={card.tip} className="inline" />
          </div>
        )}
        {card.miniCheck && (
          <div className="mt-4 rounded-2xl border-2 border-brand/25 bg-brand/5 p-4">
            <p className="mb-2 text-xs font-black tracking-widest text-brand-deep uppercase">⚡ Quick check</p>
            {miniDone.has(step.i) ? (
              <p className="font-bold text-good-deep">✓ Done — nice!</p>
            ) : (
              <ExercisePlayer
                key={card.miniCheck.id}
                ex={card.miniCheck}
                compact
                onComplete={() => setMiniDone((s) => new Set(s).add(step.i))}
              />
            )}
          </div>
        )}
        <div className="mt-5 flex gap-2">
          {step.i > 0 && (
            <button className="btn-3d btn-white px-5 py-3" onClick={() => setStep({ t: 'learn', i: step.i - 1 })}>
              ← Back
            </button>
          )}
          <button
            className="btn-3d btn-brand flex-1 py-3 text-lg"
            disabled={needsMini}
            title={needsMini ? 'Try the quick check first!' : undefined}
            onClick={() => {
              if (step.i + 1 < lesson.cards.length) setStep({ t: 'learn', i: step.i + 1 });
              else setStep({ t: 'set', s: 0, e: 0 });
            }}
          >
            {step.i + 1 < lesson.cards.length ? 'Next →' : "Time to practise! 💪"}
          </button>
        </div>
      </div>
    );
  } else if (step.t === 'set') {
    const set = lesson.sets[step.s];
    const ex = set.exercises[step.e];
    body = (
      <div className="mx-auto max-w-xl">
        <div className="mb-3 flex items-center justify-between px-1">
          <p className="font-black">
            {set.icon} {set.title}
          </p>
          <p className="text-sm font-bold text-ink-soft">
            {step.e + 1}/{set.exercises.length} · set {step.s + 1}/{lesson.sets.length}
          </p>
        </div>
        <div className="card p-6">
          <ExercisePlayer
            key={ex.id}
            ex={ex}
            onComplete={(r) => {
              setStats((s) => ({ answered: s.answered + 1, firstTry: s.firstTry + (r.firstTry ? 1 : 0) }));
              advanceFromSet(step.s, step.e);
            }}
          />
        </div>
      </div>
    );
  } else if (step.t === 'bossIntro') {
    body = (
      <div className="card animate-rise relative mx-auto max-w-xl overflow-hidden border-brand/40 p-7 text-center">
        {/* distant lightning behind the storm clouds */}
        <div
          className="animate-lightning pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(129, 140, 248, 0.7), transparent 65%)' }}
        />
        <p className="animate-wiggle text-6xl">⛈️</p>
        <h2 className="mt-2 text-3xl font-black">Summit Storm!</h2>
        <p className="mt-1 text-lg font-bold text-ink-soft">
          The Gatekeeper of <span className="text-brand-deep">{lesson.title}</span> blocks the path.
        </p>
        <div className="mx-auto mt-4 max-w-sm rounded-2xl bg-ink/5 p-4 font-bold">
          ⚔️ {lesson.boss.exercises.length} questions · one shot each
          <br />
          🎯 score {lesson.boss.passPct}%+ to pass
          <br />
          ⚡ {`+12 XP per correct answer`}
        </div>
        <button
          className="btn-3d btn-brand mt-5 w-full py-3.5 text-xl"
          onClick={() => setStep({ t: 'boss', e: 0, score: 0 })}
        >
          Face the storm ⚔️
        </button>
      </div>
    );
  } else if (step.t === 'boss') {
    const ex = lesson.boss.exercises[step.e];
    body = (
      <div className="mx-auto max-w-xl">
        <div className="mb-3 flex items-center justify-between px-1">
          <p className="font-black">
            ⛈️ Boss · {step.e + 1}/{lesson.boss.exercises.length}
          </p>
          <p className="text-sm font-black text-good-deep">✅ {step.score}</p>
        </div>
        <div className="card border-brand/40 p-6">
          <ExercisePlayer
            key={ex.id}
            ex={ex}
            mode="boss"
            onComplete={(r) => {
              const score = step.score + (r.correct ? 1 : 0);
              if (step.e + 1 < lesson.boss.exercises.length) setStep({ t: 'boss', e: step.e + 1, score });
              else finishBoss(score);
            }}
          />
        </div>
      </div>
    );
  } else {
    const { passed, pct } = step;
    const rec = state.completed[lesson.id];
    const accuracy = stats.answered > 0 ? Math.round((stats.firstTry / stats.answered) * 100) : 0;
    body = (
      <div className="card animate-rise mx-auto max-w-xl p-7 text-center">
        {passed && <Confetti />}
        <p className="text-6xl">{passed ? '🏆' : '🌪️'}</p>
        <h2 className="mt-2 text-3xl font-black">{passed ? 'Stage conquered!' : 'The storm won… this time'}</h2>
        <p className="mt-1 text-lg font-bold text-ink-soft">
          {passed
            ? `You beat the Gatekeeper with ${pct}%.`
            : `You scored ${pct}% — you need ${lesson.boss.passPct}%. Shake it off and go again!`}
        </p>
        {passed && rec && (
          <p className="mt-3 text-4xl tracking-wider">
            {Array.from({ length: 3 }, (_, i) =>
              i < rec.stars ? (
                <span
                  key={i}
                  className="animate-star-pop inline-block"
                  style={{ animationDelay: `${0.25 + i * 0.22}s` }}
                >
                  ⭐
                </span>
              ) : (
                <span key={i} className="opacity-25">
                  ⭐
                </span>
              ),
            )}
          </p>
        )}
        <div className="mx-auto mt-4 grid max-w-sm grid-cols-2 gap-2 text-left">
          <div className="rounded-2xl bg-gold/10 px-4 py-3">
            <p className="text-2xl font-black text-amber-600">
              +<CountUp value={sessionXp} />
            </p>
            <p className="text-xs font-bold text-ink-soft">XP this session</p>
          </div>
          <div className="rounded-2xl bg-brand/10 px-4 py-3">
            <p className="text-2xl font-black text-brand-deep">
              <CountUp value={accuracy} />%
            </p>
            <p className="text-xs font-bold text-ink-soft">first-try accuracy</p>
          </div>
        </div>
        <div className="mt-6 grid gap-2">
          {!passed && (
            <>
              <button className="btn-3d btn-brand py-3 text-lg" onClick={() => setStep({ t: 'boss', e: 0, score: 0 })}>
                ⚔️ Challenge the boss again
              </button>
              <button className="btn-3d btn-white py-3" onClick={() => setStep({ t: 'learn', i: 0 })}>
                📚 Review the lesson first
              </button>
            </>
          )}
          <button className={`btn-3d py-3 text-lg ${passed ? 'btn-good' : 'btn-white'}`} onClick={onExit}>
            🏔 Back to the mountain
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {header}
      <main className="px-4 py-6 pb-16">{body}</main>
    </div>
  );
}
