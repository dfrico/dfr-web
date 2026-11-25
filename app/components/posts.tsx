import { isValidElement, type ReactNode } from 'react';
import posts, { type Post } from '@/utils/getAllPosts';
import type { Section } from './railNav';

// Posts that are write-ups of Lab projects; every other post is Writing.
export const BMSSP = '2025-09-08-bmssp';
export const NIGHT_LIGHT = '2026-06-10-night-light';
const LAB = new Set([BMSSP, NIGHT_LIGHT]);

export function postSection(slug: string): Section {
  return LAB.has(slug) ? 'lab' : 'writing';
}

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

const MONTHS = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' ');

/** "Jun 2026", from the post's YYYY-MM-DD slug. */
export function monthYear(slug: string): string {
  const [year, month] = slug.split('-');
  return `${MONTHS[Number(month) - 1]} ${year}`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function textOf(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(textOf).join('');
  if (isValidElement<{ children?: ReactNode }>(node)) {
    return textOf(node.props.children);
  }
  return '';
}

/** The post's `## ` headings, as plain text, skipping code blocks. */
export function postHeadings(source: string): { id: string; text: string }[] {
  const headings: { id: string; text: string }[] = [];
  let inFence = false;
  for (const line of source.split('\n')) {
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence;
    const match = !inFence && line.match(/^## (.+?)\s*$/);
    if (!match) continue;
    const text = match[1]
      .replace(/`([^`]*)`/g, '$1')
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/\*/g, '');
    headings.push({ id: slugify(text), text });
  }
  return headings;
}

/** MDX h2 with an id matching postHeadings(), for the "On this page" links. */
export function H2({ id, children, ...props }: React.ComponentProps<'h2'>) {
  return (
    <h2 id={id ?? slugify(textOf(children))} {...props}>
      {children}
    </h2>
  );
}
