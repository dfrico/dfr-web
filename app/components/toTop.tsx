'use client';

import { useEffect, useState } from 'react';

/** Floating "back to top" button, shown once the page has scrolled a screen. */
export default function ToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setVisible(window.scrollY > window.innerHeight);
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
  }, []);

  return (
    <button
      type="button"
      className="to-top icon-button"
      hidden={!visible}
      // Smooth only when allowed: follows html's scroll-behavior (reduced motion).
      onClick={() => window.scrollTo({ top: 0 })}
      aria-label="Back to top"
      title="Back to top"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5M6 11l6-6 6 6" />
      </svg>
    </button>
  );
}
