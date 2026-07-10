/** Tiny WebAudio synth — no audio assets needed. All sounds are generated. */

let ctx: AudioContext | null = null;
let enabled = true;

export function setSoundEnabled(on: boolean) {
  enabled = on;
}

function ac(): AudioContext | null {
  if (!enabled) return null;
  try {
    if (!ctx) ctx = new AudioContext();
    if (ctx.state === 'suspended') void ctx.resume();
    return ctx;
  } catch {
    return null;
  }
}

function tone(
  freq: number,
  start: number,
  dur: number,
  type: OscillatorType = 'sine',
  gainPeak = 0.18,
) {
  const c = ac();
  if (!c) return;
  const t = c.currentTime + start;
  const osc = c.createOscillator();
  const g = c.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(gainPeak, t + 0.015);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.connect(g).connect(c.destination);
  osc.start(t);
  osc.stop(t + dur + 0.05);
}

export const sfx = {
  click() {
    tone(660, 0, 0.07, 'triangle', 0.08);
  },
  correct() {
    tone(523.25, 0, 0.12, 'triangle');
    tone(659.25, 0.09, 0.14, 'triangle');
    tone(783.99, 0.18, 0.2, 'triangle');
  },
  wrong() {
    tone(196, 0, 0.2, 'sawtooth', 0.08);
    tone(146.83, 0.12, 0.28, 'sawtooth', 0.08);
  },
  retry() {
    tone(392, 0, 0.1, 'triangle', 0.1);
    tone(329.63, 0.1, 0.14, 'triangle', 0.1);
  },
  combo() {
    tone(880, 0, 0.08, 'square', 0.05);
    tone(1174.66, 0.07, 0.1, 'square', 0.05);
  },
  levelUp() {
    [523.25, 659.25, 783.99, 1046.5].forEach((f, i) => tone(f, i * 0.11, 0.22, 'triangle'));
    tone(1318.51, 0.46, 0.4, 'triangle', 0.14);
  },
  lessonDone() {
    [392, 523.25, 659.25, 783.99, 1046.5].forEach((f, i) => tone(f, i * 0.09, 0.25, 'triangle'));
  },
  bossWin() {
    [261.63, 329.63, 392, 523.25].forEach((f, i) => {
      tone(f, i * 0.12, 0.3, 'triangle');
      tone(f * 2, i * 0.12 + 0.03, 0.25, 'sine', 0.07);
    });
    tone(1046.5, 0.55, 0.55, 'triangle', 0.16);
  },
  bossFail() {
    [392, 369.99, 349.23, 329.63].forEach((f, i) => tone(f, i * 0.16, 0.22, 'sawtooth', 0.06));
  },
  tick() {
    tone(880, 0, 0.04, 'sine', 0.05);
  },
  badge() {
    tone(587.33, 0, 0.12, 'triangle');
    tone(880, 0.1, 0.25, 'triangle');
  },
};
