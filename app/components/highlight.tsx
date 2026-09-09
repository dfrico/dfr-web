'use client';

import { useEffect } from 'react';

// highlight.js
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import python from 'highlight.js/lib/languages/python';
import 'highlight.js/styles/tokyo-night-dark.css';

export default function Highlight() {
  useEffect(() => {
    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('typescript', typescript);
    hljs.registerLanguage('python', python);
    // Chrome needs initial highlighting on window load (here)
    hljs.highlightAll();
  }, []);

  return null;
}
