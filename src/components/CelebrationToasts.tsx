import { useEffect } from 'react';
import { useProgress } from '../state/store';
import { badgeById, LEVELS } from '../state/gamification';
import { sfx } from '../audio/sfx';

/** Pops level-up / badge celebrations one at a time (top of screen). */
export function CelebrationToasts() {
  const { events, consumeEvent } = useProgress();
  const current = events[0];

  useEffect(() => {
    if (!current) return;
    if (current.kind === 'levelup') sfx.levelUp();
    else sfx.badge();
    const t = window.setTimeout(consumeEvent, 3200);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  if (!current) return null;

  const content =
    current.kind === 'levelup'
      ? {
          icon: LEVELS[current.level].icon,
          title: `Level up! You're now level ${current.level + 1}`,
          sub: LEVELS[current.level].name,
        }
      : (() => {
          const b = badgeById(current.id);
          return { icon: b?.icon ?? '🏅', title: `Badge earned: ${b?.name ?? current.id}`, sub: b?.desc ?? '' };
        })();

  return (
    <button
      onClick={consumeEvent}
      className="animate-pop fixed top-4 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-2xl border-2 border-gold/50 bg-white px-5 py-3 shadow-xl"
    >
      <span className="animate-wiggle text-3xl">{content.icon}</span>
      <span className="text-left">
        <span className="block font-black">{content.title}</span>
        <span className="block text-sm font-bold text-ink-soft">{content.sub}</span>
      </span>
    </button>
  );
}
