import { useState } from 'react';
import { useProgress } from '../state/store';
import { BADGES } from '../state/gamification';

export function SettingsModal({ onClose }: { onClose: () => void }) {
  const { state, toggleSound, resetAll, exportJson, importJson } = useProgress();
  const [importOpen, setImportOpen] = useState(false);
  const [importText, setImportText] = useState('');
  const [note, setNote] = useState('');
  const [confirmReset, setConfirmReset] = useState(false);

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

        <p className="mt-4 text-center text-xs font-semibold text-ink-soft">
          Grammar syllabus inspired by <em>English File</em> (Oxford University Press).
        </p>
      </div>
    </div>
  );
}
