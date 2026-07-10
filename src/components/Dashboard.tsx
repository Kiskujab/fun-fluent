import { useEffect, useMemo, useRef, useState } from 'react';
import type { Module } from '../types';
import { MODULES, TOTAL_LESSONS } from '../curriculum';
import { useProgress } from '../state/store';
import { sfx } from '../audio/sfx';

interface Props {
  onStartLesson: (lessonId: string) => void;
}

const ROW_H = 96;
const TOP_PAD = 44;
const NODE_X_PATTERN = [0, -72, 0, 72]; // winding offsets from centre

/** Decorative trail-side scenery — changes with altitude (module number). */
function sceneryFor(num: number): [string, string] {
  if (num >= 8) return ['❄️', '🦅'];
  if (num >= 6) return ['☁️', '🪨'];
  if (num >= 4) return ['🌤️', '🌲'];
  return ['🌲', '🦌'];
}

/** Lesson unlocking: first lesson of a module is open if the module is m1 (or previous module complete); others need the previous lesson done. */
function useUnlocks() {
  const { state } = useProgress();
  return useMemo(() => {
    const unlocked = new Set<string>();
    let prevModuleDone = true;
    for (const mod of MODULES) {
      const contentful = mod.lessons.filter((l) => l.available);
      for (let i = 0; i < mod.lessons.length; i++) {
        const l = mod.lessons[i];
        if (!l.available) continue;
        const prev = contentful[contentful.indexOf(l) - 1];
        if ((prevModuleDone && !prev) || (prev && state.completed[prev.id])) unlocked.add(l.id);
      }
      prevModuleDone = contentful.length > 0 && contentful.every((l) => state.completed[l.id]);
    }
    // Current = first unlocked & uncompleted
    let current: string | null = null;
    for (const mod of MODULES) {
      for (const l of mod.lessons) {
        if (unlocked.has(l.id) && !state.completed[l.id]) {
          current = l.id;
          break;
        }
      }
      if (current) break;
    }
    return { unlocked, current };
  }, [state.completed]);
}

function ModuleZone({
  mod,
  unlocked,
  current,
  currentRef,
  scale,
  onStartLesson,
}: {
  mod: Module;
  unlocked: Set<string>;
  current: string | null;
  currentRef: React.RefObject<HTMLDivElement | null>;
  scale: number;
  onStartLesson: (id: string) => void;
}) {
  const { state } = useProgress();
  const n = mod.lessons.length;
  const height = TOP_PAD + n * ROW_H + 8;
  // Lesson 0 at the bottom — we climb upwards.
  const pos = mod.lessons.map((_, i) => ({
    x: 170 + NODE_X_PATTERN[i % NODE_X_PATTERN.length],
    y: TOP_PAD + (n - 1 - i) * ROW_H + ROW_H / 2,
  }));
  const path = pos
    .map((p, i) => {
      if (i === 0) return `M ${p.x} ${p.y}`;
      const prev = pos[i - 1];
      const my = (prev.y + p.y) / 2;
      return `C ${prev.x} ${my}, ${p.x} ${my}, ${p.x} ${p.y}`;
    })
    .join(' ');
  const doneCount = mod.lessons.filter((l) => state.completed[l.id]).length;

  const [left, right] = sceneryFor(mod.num);

  return (
    <section className="relative">
      {/* trail-side scenery */}
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <span
          className="animate-float absolute top-1/4 left-1 text-3xl opacity-50 sm:left-6"
          style={{ animationDelay: `${(mod.num % 3) * 0.7}s` }}
        >
          {left}
        </span>
        <span
          className="animate-float absolute top-2/3 right-1 text-2xl opacity-45 sm:right-8"
          style={{ animationDelay: `${(mod.num % 4) * 0.5 + 0.4}s` }}
        >
          {right}
        </span>
      </div>
      {/* Winding path + nodes (scaled to fit narrow viewports) */}
      <div className="relative mx-auto" style={{ width: 340 * scale, height: height * scale }}>
        <div
          className="absolute top-0 left-0"
          style={{ width: 340, height, transform: `scale(${scale})`, transformOrigin: 'top left' }}
        >
        <svg width="340" height={height} className="absolute inset-0" aria-hidden="true">
          <path
            d={path}
            fill="none"
            stroke={mod.color}
            strokeOpacity="0.35"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray="0.5 18"
          />
        </svg>
        {mod.lessons.map((l, i) => {
          const rec = state.completed[l.id];
          const isCurrent = current === l.id;
          const isUnlocked = unlocked.has(l.id);
          const clickable = l.available && isUnlocked;
          const p = pos[i];
          return (
            <div
              key={l.id}
              ref={isCurrent ? currentRef : undefined}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: p.x, top: p.y }}
            >
              {isCurrent && (
                <div className="animate-bounce-soft absolute -top-9 left-1/2 z-10 -translate-x-1/2 rounded-full border-2 border-brand bg-white px-3 py-0.5 text-xs font-black whitespace-nowrap text-brand-deep shadow-md">
                  START ⬆
                </div>
              )}
              <button
                onClick={() => {
                  if (clickable) {
                    sfx.click();
                    onStartLesson(l.id);
                  }
                }}
                disabled={!clickable}
                title={
                  !l.available
                    ? `${l.title} — coming soon 🚧`
                    : !isUnlocked
                      ? `${l.title} — complete the previous lesson first`
                      : `${l.title} · ~${l.minutes} min`
                }
                aria-label={l.title}
                className={`btn-3d flex h-16 w-16 items-center justify-center rounded-full text-2xl ${
                  rec
                    ? 'text-white'
                    : clickable
                      ? 'bg-white text-ink'
                      : 'bg-[#eceae4] text-ink-soft/60 grayscale'
                } ${isCurrent ? 'animate-pulse-ring' : ''}`}
                style={
                  rec
                    ? ({ background: mod.color, '--btn-shadow': '#00000033' } as React.CSSProperties)
                    : ({ '--btn-shadow': clickable ? '#d8d2c4' : '#d3d1cb', border: `3px solid ${clickable ? mod.color : '#d8d5cd'}` } as React.CSSProperties)
                }
              >
                {rec ? '✓' : l.available ? (isUnlocked ? mod.icon : '🔒') : '🔒'}
              </button>
              <div className="absolute top-16 left-1/2 w-36 -translate-x-1/2 text-center">
                {rec ? (
                  <span className="text-xs tracking-tighter">{'⭐'.repeat(rec.stars)}</span>
                ) : (
                  <span className="text-[11px] leading-tight font-bold text-ink-soft">{l.title}</span>
                )}
              </div>
            </div>
          );
        })}
        </div>
      </div>

      {/* Module header — the "entrance" at the bottom of the zone */}
      <div
        className="card mx-auto mb-2 flex max-w-md items-center gap-3 px-4 py-3"
        style={{ borderColor: `${mod.color}55`, boxShadow: `0 6px 0 0 ${mod.color}2e` }}
      >
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-2xl"
          style={{ background: `${mod.color}22` }}
        >
          {mod.icon}
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-black tracking-widest uppercase" style={{ color: mod.color }}>
            Module {mod.num} · {mod.level}
          </p>
          <p className="truncate text-lg leading-tight font-black">{mod.title}</p>
          <p className="truncate text-sm font-semibold text-ink-soft">{mod.tagline}</p>
        </div>
        <div className="shrink-0 text-right">
          <p className="text-sm font-black" style={{ color: mod.color }}>
            {doneCount}/{mod.lessons.length}
          </p>
          <p className="text-[10px] font-bold text-ink-soft">🏔 {mod.altitude}</p>
        </div>
      </div>
    </section>
  );
}

export function Dashboard({ onStartLesson }: Props) {
  const { state } = useProgress();
  const { unlocked, current } = useUnlocks();
  const currentRef = useRef<HTMLDivElement | null>(null);
  const columnRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);
  const doneTotal = Object.keys(state.completed).length;

  // Shrink the fixed-size trail to fit very narrow viewports.
  useEffect(() => {
    const el = columnRef.current;
    if (!el) return;
    // clientWidth includes the px-4 padding (32px) — subtract it to get the usable width.
    const update = () => setScale(Math.min(1, (el.clientWidth - 32) / 340));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Land the climber at their current position.
  useEffect(() => {
    const t = window.setTimeout(() => {
      currentRef.current?.scrollIntoView({ block: 'center', behavior: 'instant' as ScrollBehavior });
    }, 60);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const reversed = [...MODULES].reverse(); // summit (M8) first — we scroll UP to progress

  return (
    <div ref={columnRef} className="relative mx-auto max-w-3xl overflow-hidden px-4 pb-10">
      {/* thin air — the sky gets bluer towards the summit */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[70rem]"
        aria-hidden="true"
        style={{ background: 'linear-gradient(to bottom, rgba(147, 197, 253, 0.35), rgba(186, 230, 253, 0.15) 55%, transparent)' }}
      />
      {/* floating scenery */}
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <span className="animate-float absolute top-24 left-6 text-4xl opacity-60">☁️</span>
        <span className="animate-float absolute top-96 right-8 text-3xl opacity-50" style={{ animationDelay: '1s' }}>☁️</span>
        <span className="animate-float absolute top-[46rem] left-10 text-2xl opacity-40" style={{ animationDelay: '2s' }}>🦅</span>
        <span className="animate-float absolute top-[80rem] right-12 text-3xl opacity-50" style={{ animationDelay: '1.5s' }}>☁️</span>
      </div>

      {/* Summit */}
      <div className="relative pt-8 pb-4 text-center">
        {/* gentle snowfall + sparkle around the peak */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 select-none" aria-hidden="true">
          <span className="animate-snow absolute top-0 left-1/4 text-sm">❄️</span>
          <span className="animate-snow absolute top-0 left-1/2 text-xs" style={{ animationDelay: '2s' }}>❄️</span>
          <span className="animate-snow absolute top-0 left-3/4 text-sm" style={{ animationDelay: '4s' }}>❄️</span>
          <span className="animate-twinkle absolute top-6 left-[38%] text-lg">✨</span>
          <span className="animate-twinkle absolute top-14 left-[62%] text-sm" style={{ animationDelay: '0.9s' }}>✨</span>
        </div>
        <div className="text-6xl">🏔️</div>
        <p className="mt-1 text-2xl font-black">The C2 Summit</p>
        <p className="font-bold text-ink-soft">
          8,849 m · full grammar mastery <span className="animate-flag inline-block origin-bottom-left">🚩</span>
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {reversed.map((mod) => (
          <ModuleZone
            key={mod.id}
            mod={mod}
            unlocked={unlocked}
            current={current}
            currentRef={currentRef}
            scale={scale}
            onStartLesson={onStartLesson}
          />
        ))}
      </div>

      {/* Base camp */}
      <div className="card mx-auto mt-6 max-w-md px-5 py-4 text-center">
        <p className="text-3xl">⛺</p>
        <p className="text-xl font-black">Base Camp — B2</p>
        <p className="mb-3 text-sm font-semibold text-ink-soft">
          You've completed {doneTotal} of {TOTAL_LESSONS} stages of the climb. The summit is up there — keep going!
        </p>
        <div className="mb-3 h-3 overflow-hidden rounded-full bg-ink/10">
          <div
            className="bar-shimmer h-full rounded-full bg-gradient-to-r from-good to-brand transition-all"
            style={{ width: `${(doneTotal / TOTAL_LESSONS) * 100}%` }}
          />
        </div>
        {current && (
          <button className="btn-3d btn-brand w-full py-3 text-lg" onClick={() => onStartLesson(current)}>
            {doneTotal === 0 ? 'Start climbing 🧗' : 'Continue the climb 🧗'}
          </button>
        )}
      </div>
    </div>
  );
}
