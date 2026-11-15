'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// highlight.js
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import python from 'highlight.js/lib/languages/python';
import 'highlight.js/styles/tokyo-night-dark.css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('python', python);
// Blocks in languages we don't load (e.g. tikz) stay plain, without a console warning.
hljs.configure({ ignoreUnescapedHTML: true, throwUnescapedHTML: false });

export default function Highlight() {
  const pathname = usePathname();

  // This component lives in the root layout, which persists across client-side
  // navigations, so re-run on every route change, not just on first mount.
  useEffect(() => {
    document
      .querySelectorAll<HTMLElement>('pre code:not([data-highlighted])')
      .forEach((el) => {
        const lang = [...el.classList]
          .find((c) => c.startsWith('language-'))
          ?.slice('language-'.length);
        if (lang && !hljs.getLanguage(lang)) return;
        hljs.highlightElement(el);
      });
  }, [pathname]);

  return null;
}
