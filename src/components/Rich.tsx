import type { ReactNode } from 'react';

/**
 * Tiny rich-text renderer for lesson content.
 * Inline: **bold** (brand-coloured), `chip`, ~~wrong form~~ (red strike), *italic*.
 * Block (per line): "> " example bubble, "- " bullet. Blank line = paragraph break.
 */

function renderInline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  const re = /(\*\*[^*]+\*\*|`[^`]+`|~~[^~]+~~|\*[^*\n]+\*)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const tok = m[0];
    if (tok.startsWith('**')) {
      out.push(
        <strong key={key++} className="font-extrabold text-brand-deep">
          {tok.slice(2, -2)}
        </strong>,
      );
    } else if (tok.startsWith('`')) {
      out.push(
        <span key={key++} className="chip">
          {tok.slice(1, -1)}
        </span>,
      );
    } else if (tok.startsWith('~~')) {
      out.push(
        <span key={key++} className="font-bold text-bad line-through decoration-2">
          {tok.slice(2, -2)}
        </span>,
      );
    } else {
      out.push(
        <em key={key++} className="text-ink-soft">
          {tok.slice(1, -1)}
        </em>,
      );
    }
    last = m.index + tok.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export function Rich({ text, className = '' }: { text: string; className?: string }) {
  const lines = text.split('\n');
  const blocks: ReactNode[] = [];
  let para: string[] = [];
  let key = 0;

  const flush = () => {
    if (para.length > 0) {
      blocks.push(
        <p key={key++} className="my-1.5 leading-relaxed">
          {renderInline(para.join(' '))}
        </p>,
      );
      para = [];
    }
  };

  for (const line of lines) {
    const t = line.trimEnd();
    if (t.trim() === '') {
      flush();
    } else if (t.startsWith('> ')) {
      flush();
      blocks.push(
        <div key={key++} className="example-bubble">
          {renderInline(t.slice(2))}
        </div>,
      );
    } else if (t.startsWith('- ')) {
      flush();
      blocks.push(
        <div key={key++} className="my-1 flex gap-2 leading-relaxed">
          <span className="mt-0.5 shrink-0 text-brand">✦</span>
          <span>{renderInline(t.slice(2))}</span>
        </div>,
      );
    } else {
      para.push(t);
    }
  }
  flush();
  return <div className={className}>{blocks}</div>;
}

/** Inline-only variant (for feedback banners, prompts). */
export function RichInline({ text }: { text: string }) {
  return <>{renderInline(text)}</>;
}
