import type { BadgeDef } from '../types';

/* ---------- Levels ---------- */

export const LEVELS: { xp: number; name: string; icon: string }[] = [
  { xp: 0, name: 'Word Wanderer', icon: '🥾' },
  { xp: 150, name: 'Sentence Stroller', icon: '🚶' },
  { xp: 400, name: 'Tense Tamer', icon: '🦁' },
  { xp: 750, name: 'Aspect Adept', icon: '🔭' },
  { xp: 1200, name: 'Modal Maverick', icon: '🤠' },
  { xp: 1750, name: 'Clause Climber', icon: '🧗' },
  { xp: 2400, name: 'Passive Pro', icon: '🥷' },
  { xp: 3200, name: 'Inversion Virtuoso', icon: '🎻' },
  { xp: 4100, name: 'Syntax Sorcerer', icon: '🧙' },
  { xp: 5200, name: 'C2 Grandmaster', icon: '👑' },
];

export function levelForXp(xp: number): number {
  let lvl = 0;
  for (let i = 0; i < LEVELS.length; i++) if (xp >= LEVELS[i].xp) lvl = i;
  return lvl;
}

/** Progress within the current level, 0..1 (1 when max level reached). */
export function levelProgress(xp: number): number {
  const lvl = levelForXp(xp);
  if (lvl >= LEVELS.length - 1) return 1;
  const lo = LEVELS[lvl].xp;
  const hi = LEVELS[lvl + 1].xp;
  return (xp - lo) / (hi - lo);
}

/* ---------- XP rules ---------- */

export const XP = {
  firstTry: 10,
  retry: 5,
  fail: 0,
  speedItem: 4,
  bossItem: 12,
  bossPass: 40,
  bossPerfect: 40, // extra on top of bossPass
  lessonFirstComplete: 50,
  lessonRepeat: 20,
};

/** Combo multiplier: 3+ in a row = x1.5, 6+ = x2. */
export function comboMultiplier(combo: number): number {
  if (combo >= 6) return 2;
  if (combo >= 3) return 1.5;
  return 1;
}

/* ---------- Badges ---------- */

export const BADGES: BadgeDef[] = [
  { id: 'first-steps', icon: '👣', name: 'First Steps', desc: 'Complete your first lesson' },
  { id: 'm1-champ', icon: '⏰', name: 'Master of Time', desc: 'Complete every lesson in Tense Mastery' },
  { id: 'm2-champ', icon: '⚖️', name: 'Modal Marshal', desc: 'Complete every lesson in Modality Mastery' },
  { id: 'm3-champ', icon: '🔮', name: 'Architect of Ifs', desc: 'Complete every lesson in Hypothetical English' },
  { id: 'm4-champ', icon: '🧩', name: 'Pattern Prodigy', desc: 'Complete every lesson in Verb Patterns' },
  { id: 'm5-champ', icon: '🥷', name: 'Agent of Distance', desc: 'Complete every lesson in Passive & Distance' },
  { id: 'm6-champ', icon: '🏗️', name: 'Master Builder', desc: 'Complete every lesson in Sentence Architecture' },
  { id: 'm7-champ', icon: '🎭', name: 'Drama Director', desc: 'Complete every lesson in Emphasis & Style' },
  { id: 'm8-champ', icon: '💎', name: 'Precision Jeweller', desc: 'Complete every lesson in Precision Toolkit' },
  { id: 'm9-champ', icon: '🎿', name: 'Safe Descent', desc: 'Complete every lesson in The Descent' },
  { id: 'summit', icon: '🚩', name: 'The Summit', desc: 'Complete every lesson up the mountain — true C2 mastery' },
  { id: 'boss-perfect', icon: '💯', name: 'Flawless Victory', desc: 'Score 100% on a Boss Challenge' },
  { id: 'combo-10', icon: '🎯', name: 'On Fire', desc: 'Get 10 first-try answers in a row' },
  { id: 'streak-3', icon: '🔥', name: 'Warming Up', desc: 'Learn 3 days in a row' },
  { id: 'streak-7', icon: '🌋', name: 'Unstoppable', desc: 'Learn 7 days in a row' },
  { id: 'streak-30', icon: '☄️', name: 'Force of Nature', desc: 'Learn 30 days in a row' },
  { id: 'xp-1000', icon: '⚡', name: 'Kilowatt', desc: 'Reach 1,000 XP' },
  { id: 'night-owl', icon: '🦉', name: 'Night Owl', desc: 'Finish a lesson between 22:00 and 04:00' },
  { id: 'early-bird', icon: '🐦', name: 'Early Bird', desc: 'Finish a lesson before 08:00' },
  { id: 'three-stars', icon: '🌟', name: 'Triple Star', desc: 'Earn 3 stars on a lesson' },
];

export function badgeById(id: string): BadgeDef | undefined {
  return BADGES.find((b) => b.id === id);
}
