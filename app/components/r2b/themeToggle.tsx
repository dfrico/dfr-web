'use client';

import { useSyncExternalStore } from 'react';

// The theme lives on <html data-theme>; watch it so aria-pressed follows.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
  return () => observer.disconnect();
}

/**
 * Light by default. The choice is saved in localStorage and applied before
 * first paint by the inline script in app/(redesign)/layout.tsx. Both icons
 * are rendered and CSS shows the right one, so server and client HTML match.
 */
export default function ThemeToggle() {
  const dark = useSyncExternalStore(
    subscribe,
    () => document.documentElement.dataset.theme === 'dark',
    // Unknown on the server: it can't see the saved theme.
    () => undefined,
  );

  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme !== 'dark';
    if (next) root.dataset.theme = 'dark';
    else delete root.dataset.theme;
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      // Storage unavailable (private mode, blocked): the toggle still works for this page.
    }
  }

  return (
    <button
      type="button"
      className="theme-toggle icon-button"
      onClick={toggle}
      aria-label="Dark mode"
      aria-pressed={dark}
      title="Toggle dark mode"
    >
      <svg
        className="moon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z" />
      </svg>
      <svg
        className="sun"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
      </svg>
    </button>
  );
}
