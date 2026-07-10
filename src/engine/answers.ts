/** Forgiving answer matching for typed exercises. */

const CONTRACTIONS: [RegExp, string][] = [
  [/\bwon't\b/g, 'will not'],
  [/\bshan't\b/g, 'shall not'],
  [/\bcan't\b/g, 'cannot'],
  [/\bcannot\b/g, 'can not'], // after can't -> cannot, unify to "can not"
  [/n't\b/g, ' not'],
  [/\b(i|you|we|they)'ll\b/g, '$1 will'],
  [/\b(he|she|it)'ll\b/g, '$1 will'],
  [/\b(i|you|we|they)'ve\b/g, '$1 have'],
  [/\b(you|we|they)'re\b/g, '$1 are'],
  [/\bi'm\b/g, 'i am'],
  [/\blet's\b/g, 'let us'],
];

export function normalizeAnswer(raw: string): string {
  let s = raw
    .toLowerCase()
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .trim()
    .replace(/,/g, '') // internal commas are style, not grammar
    .replace(/\s+/g, ' ')
    .replace(/[.!?;:]+$/g, '')
    .trim();
  for (const [re, sub] of CONTRACTIONS) s = s.replace(re, sub);
  return s.replace(/\s+/g, ' ').trim();
}

export function answerMatches(user: string, accepted: string[]): boolean {
  const u = normalizeAnswer(user);
  return accepted.some((a) => normalizeAnswer(a) === u);
}

/** Deterministic-ish shuffle helper (Fisher–Yates, Math.random). */
export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
