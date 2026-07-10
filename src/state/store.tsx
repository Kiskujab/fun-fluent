import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import type { CelebrationEvent, ProgressState } from '../types';
import { comboMultiplier, levelForXp, LEVELS, XP } from './gamification';
import { setSoundEnabled } from '../audio/sfx';

const STORAGE_KEY = 'grammarpeak-progress-v1';

function todayStr(): string {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function yesterdayStr(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function freshState(): ProgressState {
  return {
    xp: 0,
    completed: {},
    streak: { current: 0, best: 0, lastDate: '' },
    badges: [],
    soundOn: true,
    combo: 0,
    maxCombo: 0,
  };
}

function load(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return freshState();
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    return {
      ...freshState(),
      ...parsed,
      combo: 0,
      maxCombo: 0,
      streak: { ...freshState().streak, ...(parsed.streak ?? {}) },
    };
  } catch {
    return freshState();
  }
}

function save(s: ProgressState) {
  const { combo: _c, maxCombo: _m, ...persisted } = s;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(persisted));
  } catch {
    /* storage full/blocked — keep playing without persistence */
  }
}

export interface AnswerResult {
  xpGained: number;
  combo: number;
  multiplier: number;
}

interface Store {
  state: ProgressState;
  events: CelebrationEvent[];
  consumeEvent: () => void;
  /** Record a normal exercise answer. Returns XP info for the feedback UI. */
  recordAnswer: (outcome: 'first-try' | 'retry' | 'fail') => AnswerResult;
  /** Flat XP (speed rounds, boss items) — does not touch the combo. */
  awardFlatXp: (amount: number) => void;
  completeLesson: (lessonId: string, bossPct: number, moduleLessonIds: string[]) => void;
  toggleSound: () => void;
  resetAll: () => void;
  exportJson: () => string;
  importJson: (raw: string) => boolean;
}

const Ctx = createContext<Store | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ProgressState>(load);
  const [events, setEvents] = useState<CelebrationEvent[]>([]);
  // Refs so multiple synchronous updates within one handler see the latest values.
  const stateRef = useRef(state);
  stateRef.current = state;

  useEffect(() => save(state), [state]);
  useEffect(() => setSoundEnabled(state.soundOn), [state.soundOn]);

  const store = useMemo<Store>(() => {
    const pushEvent = (e: CelebrationEvent) => setEvents((q) => [...q, e]);

    /** Mutate a draft, handling level-ups + badge grants with celebration events. */
    const commit = (fn: (draft: ProgressState) => void) => {
      const prev = stateRef.current;
      const draft: ProgressState = {
        ...prev,
        completed: { ...prev.completed },
        streak: { ...prev.streak },
        badges: [...prev.badges],
      };
      const levelBefore = levelForXp(draft.xp);
      const badgesBefore = new Set(draft.badges);
      fn(draft);

      // Streak: any XP-earning day counts.
      if (draft.xp > prev.xp) {
        const today = todayStr();
        if (draft.streak.lastDate !== today) {
          draft.streak.current = draft.streak.lastDate === yesterdayStr() ? draft.streak.current + 1 : 1;
          draft.streak.lastDate = today;
          draft.streak.best = Math.max(draft.streak.best, draft.streak.current);
        }
      }

      // Automatic badges.
      const grant = (id: string) => {
        if (!draft.badges.includes(id)) draft.badges.push(id);
      };
      if (draft.xp >= 1000) grant('xp-1000');
      if (draft.maxCombo >= 10) grant('combo-10');
      if (draft.streak.current >= 3) grant('streak-3');
      if (draft.streak.current >= 7) grant('streak-7');
      if (draft.streak.current >= 30) grant('streak-30');

      const levelAfter = levelForXp(draft.xp);
      if (levelAfter > levelBefore) {
        pushEvent({ kind: 'levelup', level: levelAfter, name: LEVELS[levelAfter].name });
      }
      for (const b of draft.badges) {
        if (!badgesBefore.has(b)) pushEvent({ kind: 'badge', id: b });
      }
      stateRef.current = draft;
      setState(draft);
    };

    return {
      get state() {
        return stateRef.current;
      },
      get events() {
        return events;
      },
      consumeEvent: () => setEvents((q) => q.slice(1)),

      recordAnswer(outcome) {
        let result: AnswerResult = { xpGained: 0, combo: 0, multiplier: 1 };
        commit((d) => {
          if (outcome === 'first-try') {
            d.combo += 1;
            d.maxCombo = Math.max(d.maxCombo, d.combo);
            const mult = comboMultiplier(d.combo);
            const gained = Math.round(XP.firstTry * mult);
            d.xp += gained;
            result = { xpGained: gained, combo: d.combo, multiplier: mult };
          } else if (outcome === 'retry') {
            d.combo = 0;
            d.xp += XP.retry;
            result = { xpGained: XP.retry, combo: 0, multiplier: 1 };
          } else {
            d.combo = 0;
            result = { xpGained: 0, combo: 0, multiplier: 1 };
          }
        });
        return result;
      },

      awardFlatXp(amount) {
        if (amount <= 0) return;
        commit((d) => {
          d.xp += amount;
        });
      },

      completeLesson(lessonId, bossPct, moduleLessonIds) {
        commit((d) => {
          const prevRec = d.completed[lessonId];
          const stars: 1 | 2 | 3 = bossPct >= 100 ? 3 : bossPct >= 90 ? 2 : 1;
          d.completed[lessonId] = {
            bestBossPct: Math.max(prevRec?.bestBossPct ?? 0, bossPct),
            stars: (prevRec ? Math.max(prevRec.stars, stars) : stars) as 1 | 2 | 3,
            timesCompleted: (prevRec?.timesCompleted ?? 0) + 1,
          };
          d.xp += prevRec ? XP.lessonRepeat : XP.lessonFirstComplete;

          const grant = (id: string) => {
            if (!d.badges.includes(id)) d.badges.push(id);
          };
          grant('first-steps');
          if (bossPct >= 100) grant('boss-perfect');
          if (stars === 3) grant('three-stars');
          const hour = new Date().getHours();
          if (hour >= 22 || hour < 4) grant('night-owl');
          if (hour >= 4 && hour < 8) grant('early-bird');
          if (moduleLessonIds.length > 0 && moduleLessonIds.every((id) => d.completed[id])) {
            grant(`${lessonId.split('l')[0]}-champ`);
            if (['m1', 'm2', 'm3', 'm4', 'm5', 'm6', 'm7', 'm8'].every((m) => d.badges.includes(`${m}-champ`))) {
              grant('summit');
            }
          }
        });
      },

      toggleSound() {
        commit((d) => {
          d.soundOn = !d.soundOn;
        });
      },

      resetAll() {
        stateRef.current = freshState();
        setState(freshState());
        setEvents([]);
      },

      exportJson() {
        const { combo: _c, maxCombo: _m, ...persisted } = stateRef.current;
        return JSON.stringify({ app: 'grammarpeak', version: 1, ...persisted }, null, 2);
      },

      importJson(raw) {
        try {
          const parsed = JSON.parse(raw);
          if (typeof parsed !== 'object' || parsed === null || typeof parsed.xp !== 'number') {
            return false;
          }
          const next: ProgressState = {
            ...freshState(),
            xp: parsed.xp,
            completed: parsed.completed ?? {},
            streak: { ...freshState().streak, ...(parsed.streak ?? {}) },
            badges: Array.isArray(parsed.badges) ? parsed.badges : [],
            soundOn: parsed.soundOn !== false,
          };
          stateRef.current = next;
          setState(next);
          return true;
        } catch {
          return false;
        }
      },
    };
    // `state` must be a dep so the context value changes on every progress
    // update — otherwise consumers (header XP, combo chip) render stale values.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [events, state]);

  return <Ctx.Provider value={store}>{children}</Ctx.Provider>;
}

export function useProgress(): Store {
  const s = useContext(Ctx);
  if (!s) throw new Error('useProgress outside provider');
  return s;
}
