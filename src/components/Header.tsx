import { useProgress } from '../state/store';
import { levelForXp, levelProgress, LEVELS } from '../state/gamification';

export function Header({ onSettings }: { onSettings: () => void }) {
  const { state } = useProgress();
  const lvl = levelForXp(state.xp);
  const prog = levelProgress(state.xp);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-[#f0e9dc] bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="text-2xl">⛰️</span>
          <span className="hidden text-xl font-black tracking-tight min-[420px]:inline">
            Grammar<span className="text-brand">Peak</span>
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Streak */}
          <div
            className="flex items-center gap-1 rounded-full bg-orange-100 px-2.5 py-1 font-black text-orange-600"
            title={`Streak: ${state.streak.current} day(s) · best ${state.streak.best}`}
          >
            🔥 {state.streak.current}
          </div>
          {/* XP */}
          <div className="flex items-center gap-1 rounded-full bg-gold/15 px-2.5 py-1 font-black text-amber-600">
            ⚡{' '}
            <span key={state.xp} className="animate-pop inline-block tabular-nums">
              {state.xp.toLocaleString('en-GB')}
            </span>
          </div>
          {/* Level */}
          <div
            className="hidden items-center gap-2 rounded-full bg-brand/10 px-3 py-1 sm:flex"
            title={`${LEVELS[lvl].name} — ${Math.round(prog * 100)}% to next level`}
          >
            <span>{LEVELS[lvl].icon}</span>
            <span className="text-sm font-black text-brand-deep">Lv {lvl + 1}</span>
            <span className="h-2 w-16 overflow-hidden rounded-full bg-brand/20">
              <span className="block h-full rounded-full bg-brand" style={{ width: `${prog * 100}%` }} />
            </span>
          </div>
          {state.devMode && (
            <span
              className="rounded-full bg-brand/15 px-2 py-1 text-xs font-black text-brand-deep"
              title="Developer mode is on — every lesson is unlocked"
            >
              🛠 DEV
            </span>
          )}
          <button
            onClick={onSettings}
            aria-label="Settings"
            className="rounded-full p-1.5 text-xl transition-transform hover:rotate-45"
          >
            ⚙️
          </button>
        </div>
      </div>
    </header>
  );
}
