import { useEffect, useState } from 'react';
import type { Lesson } from './types';
import { ProgressProvider } from './state/store';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { LessonView } from './components/LessonView';
import { SettingsModal } from './components/SettingsModal';
import { CelebrationToasts } from './components/CelebrationToasts';
import { loadLesson } from './curriculum';

export default function App() {
  const [lessonId, setLessonId] = useState<string | null>(null);
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);

  // Lesson content is code-split — fetch the chunk when a lesson is opened.
  useEffect(() => {
    if (!lessonId) {
      setLesson(null);
      return;
    }
    let alive = true;
    void loadLesson(lessonId).then((l) => {
      if (alive) setLesson(l ?? null);
    });
    return () => {
      alive = false;
    };
  }, [lessonId]);

  return (
    <ProgressProvider>
      <CelebrationToasts />
      {lessonId && lesson ? (
        <LessonView key={lesson.id} lesson={lesson} onExit={() => setLessonId(null)} />
      ) : lessonId ? (
        <div className="flex min-h-screen flex-col items-center justify-center gap-3">
          <span className="animate-bounce-soft text-5xl">🧗</span>
          <p className="font-black text-ink-soft">Roping up…</p>
        </div>
      ) : (
        <>
          <Header onSettings={() => setSettingsOpen(true)} />
          <Dashboard onStartLesson={setLessonId} />
        </>
      )}
      {settingsOpen && <SettingsModal onClose={() => setSettingsOpen(false)} />}
    </ProgressProvider>
  );
}
