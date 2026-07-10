import { useState } from 'react';
import { useProgress } from '../state/store';
import { BADGES, LEVELS, levelForXp } from '../state/gamification';
import { MODULES } from '../curriculum';

const DEV_CODE = 'Fejlesztek2026';
const ALL_LESSON_IDS = MODULES.flatMap((m) => m.lessons.filter((l) => l.available).map((l) => l.id));
const ALL_BADGE_IDS = BADGES.map((b) => b.id);
const MAX_XP = LEVELS[LEVELS.length - 1].xp;

export function SettingsModal({ onClose }: { onClose: () => void }) {
  const { state, toggleSound, resetAll, exportJson, importJson, setDevMode, devSetXp, devCompleteAll, devGrantBadges } =
    useProgress();
  const [importOpen, setImportOpen] = useState(false);
  const [importText, setImportText] = useState('');
  const [note, setNote] = useState('');
  const [confirmReset, setConfirmReset] = useState(false);
  const [devOpen, setDevOpen] = useState(false);
  const [devCode, setDevCode] = useState('');
  const [devErr, setDevErr] = useState('');
  const [xpInput, setXpInput] = useState('');

  const unlockDev = () => {
    if (devCode === DEV_CODE) {
      setDevMode(true);
      setDevErr('');
      setDevCode('');
      setDevOpen(false);
      setNote('🛠 Developer mode unlocked!');
    } else {
      setDevErr('❌ Wrong code.');
    }
  };

  const doExport = async () => {
    const json = exportJson();
    try {
      await navigator.clipboard.writeText(json);
      setNote('✅ Progress copied to clipboard — keep it somewhere safe!');
    } catch {
      setImportText(json);
      setImportOpen(true);
      setNote('Copy the text below to back up your progress.');
    }
  };

  const doImport = () => {
    if (importJson(importText)) {
      setNote('✅ Progress imported!');
      setImportOpen(false);
      setImportText('');
    } else {
      setNote('❌ That doesn’t look like a GrammarPeak backup.');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="card animate-pop max-h-[85vh] w-full max-w-md overflow-y-auto p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-black">Settings</h2>
          <button onClick={onClose} className="btn-3d btn-white px-3 py-1 font-black">
            ✕
          </button>
        </div>

        <button onClick={toggleSound} className="btn-3d btn-white mb-3 w-full px-4 py-3 text-left">
          {state.soundOn ? '🔊 Sound effects: ON' : '🔇 Sound effects: OFF'}
        </button>

        <div className="mb-3 grid grid-cols-2 gap-2">
          <button onClick={doExport} className="btn-3d btn-white px-4 py-3">
            📤 Export
          </button>
          <button onClick={() => setImportOpen((v) => !v)} className="btn-3d btn-white px-4 py-3">
            📥 Import
          </button>
        </div>

        {importOpen && (
          <div className="mb-3">
            <textarea
              value={importText}
              onChange={(e) => setImportText(e.target.value)}
              placeholder="Paste your backup JSON here…"
              className="h-28 w-full rounded-xl border-2 border-[#f0e9dc] bg-sky-soft/40 p-2 font-mono text-xs outline-none focus:bg-white"
            />
            <button onClick={doImport} className="btn-3d btn-brand mt-1 w-full py-2">
              Load backup
            </button>
          </div>
        )}
        {note && <p className="mb-3 text-sm font-bold text-ink-soft">{note}</p>}

        {/* Badges cabinet */}
        <h3 className="mb-2 text-lg font-black">🏅 Badges ({state.badges.length}/{BADGES.length})</h3>
        <div className="mb-4 grid grid-cols-2 gap-2">
          {BADGES.map((b) => {
            const got = state.badges.includes(b.id);
            return (
              <div
                key={b.id}
                title={b.desc}
                className={`rounded-xl border-2 px-2.5 py-2 text-sm font-bold ${
                  got ? 'border-gold/50 bg-gold/10' : 'border-[#f0e9dc] opacity-45 grayscale'
                }`}
              >
                <span className="mr-1.5">{b.icon}</span>
                {b.name}
              </div>
            );
          })}
        </div>

        {confirmReset ? (
          <div className="rounded-xl border-2 border-bad/40 bg-rose-50 p-3">
            <p className="mb-2 font-bold text-bad-deep">Wipe ALL progress? This can't be undone.</p>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  resetAll();
                  setConfirmReset(false);
                  setNote('Progress wiped. Fresh start! 🌱');
                }}
                className="btn-3d btn-bad py-2"
              >
                Yes, wipe it
              </button>
              <button onClick={() => setConfirmReset(false)} className="btn-3d btn-white py-2">
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button onClick={() => setConfirmReset(true)} className="w-full text-sm font-bold text-bad underline">
            Reset all progress
          </button>
        )}

        {/* ---------- Developer mode ---------- */}
        <div className="mt-5 border-t-2 border-[#f0e9dc] pt-4">
          {state.devMode ? (
            <div className="rounded-2xl border-2 border-brand/40 bg-brand/5 p-3">
              <div className="mb-2 flex items-center justify-between">
                <p className="font-black text-brand-deep">🛠 Developer mode</p>
                <span className="rounded-full bg-good/15 px-2 py-0.5 text-xs font-black text-good-deep">ON</span>
              </div>
              <p className="mb-3 text-xs font-bold text-ink-soft">
                Every module is unlocked. Give yourself XP, stars and badges to test anything.
              </p>

              {/* XP tools */}
              <p className="mb-1 text-xs font-black tracking-widest text-ink-soft uppercase">
                XP · Level {levelForXp(state.xp) + 1} ({LEVELS[levelForXp(state.xp)].name})
              </p>
              <div className="mb-2 flex gap-2">
                <input
                  value={xpInput}
                  onChange={(e) => setXpInput(e.target.value.replace(/[^0-9]/g, ''))}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && xpInput !== '') {
                      devSetXp(Number(xpInput));
                      setNote(`⚡ XP set to ${Number(xpInput).toLocaleString('en-GB')}.`);
                      setXpInput('');
                    }
                  }}
                  inputMode="numeric"
                  placeholder="set XP…"
                  className="w-24 rounded-xl border-2 border-brand/30 bg-white px-3 py-2 text-sm font-extrabold outline-none focus:border-brand"
                />
                <button
                  onClick={() => {
                    if (xpInput !== '') {
                      devSetXp(Number(xpInput));
                      setNote(`⚡ XP set to ${Number(xpInput).toLocaleString('en-GB')}.`);
                      setXpInput('');
                    }
                  }}
                  className="btn-3d btn-brand px-4 py-2 text-sm"
                >
                  Set
                </button>
                <button
                  onClick={() => {
                    devSetXp(state.xp + 500);
                    setNote('⚡ +500 XP.');
                  }}
                  className="btn-3d btn-white px-3 py-2 text-sm"
                >
                  +500
                </button>
                <button
                  onClick={() => {
                    devSetXp(MAX_XP);
                    setNote('👑 Maxed out — C2 Grandmaster.');
                  }}
                  className="btn-3d btn-white px-3 py-2 text-sm"
                >
                  Max
                </button>
              </div>

              {/* One-tap testing helpers */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    devCompleteAll(ALL_LESSON_IDS);
                    setNote('✅ All lessons completed with 3 stars.');
                  }}
                  className="btn-3d btn-white px-3 py-2.5 text-sm"
                >
                  ⭐ Complete all
                </button>
                <button
                  onClick={() => {
                    devGrantBadges(ALL_BADGE_IDS);
                    setNote('🏅 All badges granted.');
                  }}
                  className="btn-3d btn-white px-3 py-2.5 text-sm"
                >
                  🏅 All badges
                </button>
              </div>

              <button
                onClick={() => {
                  setDevMode(false);
                  setNote('Developer mode turned off.');
                }}
                className="mt-3 w-full text-sm font-bold text-bad underline"
              >
                Exit developer mode
              </button>
            </div>
          ) : devOpen ? (
            <div>
              <p className="mb-2 text-xs font-black tracking-widest text-ink-soft uppercase">🛠 Developer access</p>
              <div className="flex gap-2">
                <input
                  value={devCode}
                  onChange={(e) => {
                    setDevCode(e.target.value);
                    setDevErr('');
                  }}
                  onKeyDown={(e) => e.key === 'Enter' && unlockDev()}
                  type="password"
                  placeholder="Enter code…"
                  autoFocus
                  className="flex-1 rounded-xl border-2 border-[#f0e9dc] bg-sky-soft/40 px-3 py-2 text-sm font-extrabold outline-none focus:border-brand focus:bg-white"
                />
                <button onClick={unlockDev} className="btn-3d btn-brand px-4 py-2" disabled={devCode === ''}>
                  Unlock
                </button>
              </div>
              {devErr && <p className="mt-1.5 text-sm font-bold text-bad">{devErr}</p>}
            </div>
          ) : (
            <button
              onClick={() => setDevOpen(true)}
              className="w-full text-center text-xs font-bold text-ink-soft/70 hover:text-brand"
            >
              🛠 Developer access
            </button>
          )}
        </div>

        <p className="mt-4 text-center text-xs font-semibold text-ink-soft">
          Grammar syllabus inspired by <em>English File</em> (Oxford University Press).
        </p>
      </div>
    </div>
  );
}
