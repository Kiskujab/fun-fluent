import { useEffect, useRef } from 'react';

const COLORS = ['#6c5ce7', '#22c55e', '#f59e0b', '#f43f5e', '#38bdf8', '#a855f7', '#fb923c'];

/** Full-screen confetti burst. Mount it to fire; it cleans itself up. */
export function Confetti({ pieces = 140 }: { pieces?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    const w = (canvas.width = window.innerWidth * dpr);
    const h = (canvas.height = window.innerHeight * dpr);

    // Centre burst plus two side cannons firing up and inwards.
    const parts = Array.from({ length: pieces }, (_, i) => {
      const cannon = i % 3; // 0 = centre, 1 = left, 2 = right
      const base =
        cannon === 0
          ? { x: w / 2 + (Math.random() - 0.5) * w * 0.35, y: h * 0.35, vx: (Math.random() - 0.5) * 16 }
          : cannon === 1
            ? { x: 0, y: h * 0.9, vx: 4 + Math.random() * 10 }
            : { x: w, y: h * 0.9, vx: -4 - Math.random() * 10 };
      return {
        ...base,
        vx: base.vx * dpr,
        vy: (cannon === 0 ? -6 - Math.random() * 10 : -12 - Math.random() * 10) * dpr,
        size: (5 + Math.random() * 6) * dpr,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        rot: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.3,
        shape: Math.random() < 0.3 ? ('dot' as const) : ('flake' as const),
      };
    });

    let frame = 0;
    let raf = 0;
    const draw = () => {
      frame++;
      ctx.clearRect(0, 0, w, h);
      for (const p of parts) {
        p.vy += 0.35 * dpr;
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.vr;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, 1 - frame / 170);
        if (p.shape === 'dot') {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2.4, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        }
        ctx.restore();
      }
      if (frame < 180) raf = requestAnimationFrame(draw);
      else ctx.clearRect(0, 0, w, h);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [pieces]);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 z-50 h-full w-full"
      aria-hidden="true"
    />
  );
}
