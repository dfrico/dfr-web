'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export type Section = 'about' | 'work' | 'lab' | 'writing';

const ITEMS: { id: Section; num: string; label: string }[] = [
  { id: 'about', num: '01', label: 'About' },
  { id: 'work', num: '02', label: 'Work' },
  { id: 'lab', num: '03', label: 'Lab' },
  { id: 'writing', num: '04', label: 'Writing' },
];

type Props = {
  active?: Section;
  // On the home page, follow the section in view.
  spy?: boolean;
};

export default function RailNav({ active, spy }: Props) {
  const [current, setCurrent] = useState(active);

  useEffect(() => {
    if (!spy) return;
    const sections = ITEMS.flatMap(({ id }) => {
      const el = document.getElementById(id);
      return el ? [el] : [];
    });

    let frame = 0;
    const update = () => {
      frame = 0;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      let id = sections[0]?.id;
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= window.innerHeight * 0.3) {
          id = section.id;
        }
      }
      if (atBottom) id = sections[sections.length - 1]?.id;
      setCurrent(id as Section);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [spy]);

  return (
    <nav className="rail-nav" aria-label="Sections">
      <ol>
        {ITEMS.map(({ id, num, label }) => (
          <li key={id}>
            <Link
              href={`/#${id}`}
              aria-current={current === id ? 'true' : undefined}
            >
              <span className="num">{num}</span>
              <span className="label">{label}</span>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
