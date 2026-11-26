'use client';

import { useSyncExternalStore } from 'react';

const SYSTEM_DARK = '(prefers-color-scheme: dark)';

function systemTheme() {
  return matchMedia(SYSTEM_DARK).matches ? 'dark' : 'light';
}

function pinnedTheme() {
  const theme = document.documentElement.dataset.theme;
  return theme === 'dark' || theme === 'light' ? theme : null;
}

function isDark() {
  return (pinnedTheme() ?? systemTheme()) === 'dark';
}

/**
 * A pin only means "not what the system says". Once the two agree, drop it, so
 * a reader who turned the system dark to match their choice goes back to
 * following it rather than being stuck on that choice for good.
 */
function pin(theme: 'dark' | 'light') {
  const root = document.documentElement;
  const following = theme === systemTheme();
  if (following) delete root.dataset.theme;
  else root.dataset.theme = theme;
  try {
    if (following) localStorage.removeItem('theme');
    else localStorage.setItem('theme', theme);
  } catch {
    // Storage unavailable (private mode, blocked): the choice holds for this page.
  }
}

/**
 * The theme is the system's until the reader pins the other one, so watch both
 * the data-theme attribute the button writes and the system preference.
 */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
  const query = matchMedia(SYSTEM_DARK);
  const onSystemChange = () => {
    const theme = pinnedTheme();
    if (theme) pin(theme);
    onChange();
  };
  query.addEventListener('change', onSystemChange);
  return () => {
    observer.disconnect();
    query.removeEventListener('change', onSystemChange);
  };
}

/**
 * Follows the system scheme out of the box. The button pins the other one,
 * saved in localStorage and re-applied before first paint by the inline script
 * in app/layout.tsx. Both icons are rendered and CSS shows the
 * right one, so server and client HTML match.
 */
export default function ThemeToggle() {
  const dark = useSyncExternalStore(
    subscribe,
    isDark,
    // Unknown on the server: it can see neither the saved choice nor the system.
    () => undefined,
  );

  function toggle() {
    pin(isDark() ? 'light' : 'dark');
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
