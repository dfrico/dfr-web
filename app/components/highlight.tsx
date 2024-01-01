'use client';

import { useEffect } from 'react';

// highlight.js
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import 'highlight.js/styles/vs2015.css';

export default function Highlight() {
  useEffect(() => {
    hljs.registerLanguage('javascript', javascript);
    hljs.registerLanguage('typescript', typescript);
    // Chrome needs initial highlighting on window load (here)
    hljs.highlightAll();
  }, []);

  return null;
}
