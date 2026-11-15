// Renders ```tikz code blocks to inline SVG at build time with node-tikzjax
// (TikZJax's TeX engine running in Node), so the same source that renders in
// Obsidian renders on the site, without shipping a TeX engine to readers.
//
// Fonts: the SVG's labels use Computer Modern via <text font-family="cmr10">,
// served from /tikzjax/fonts.css (copied from node-tikzjax by `yarn tikz:fonts`).

import tikzjax from 'node-tikzjax';
import { fromHtml } from 'hast-util-from-html';
import { toText } from 'hast-util-to-text';
import { visit } from 'unist-util-visit';

const tex2svg = tikzjax.default ?? tikzjax;

const FONT_CSS_URL = '/tikzjax/fonts.css';

// node-tikzjax keeps global state: renders must not overlap.
let queue = Promise.resolve();
const cache = new Map();

// Same cleanup obsidian-tikzjax does: TeX reads a blank line as \par, which
// breaks environments like tikzcd.
function tidy(source) {
  return source
    .replaceAll(' ', ' ')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .join('\n');
}

function render(source) {
  if (!cache.has(source)) {
    const job = queue.then(() =>
      tex2svg(source, {
        embedFontCss: true,
        fontCssUrl: FONT_CSS_URL,
      }),
    );
    queue = job.catch(() => {});
    cache.set(source, job);
    job.catch(() => cache.delete(source));
  }
  return cache.get(source);
}

export default function rehypeTikz() {
  return async (tree, file) => {
    const blocks = [];
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'pre' || !parent || index === undefined) return;
      const code = node.children.find(
        (c) => c.type === 'element' && c.tagName === 'code',
      );
      const classes = code?.properties?.className ?? [];
      if (!classes.includes('language-tikz')) return;
      blocks.push({ node, index, parent, source: tidy(toText(code)) });
    });

    for (const { node, parent, source } of blocks) {
      let svg;
      try {
        svg = await render(source);
      } catch (error) {
        file.fail(
          `TikZ render failed (${error.message}). ` +
            'Run node-tikzjax with showConsole: true to see the TeX log.',
          node,
        );
      }
      const figure = {
        type: 'element',
        tagName: 'figure',
        properties: { className: ['tikz'] },
        children: fromHtml(svg, { fragment: true, space: 'html' }).children,
      };
      parent.children[parent.children.indexOf(node)] = figure;
    }
  };
}
