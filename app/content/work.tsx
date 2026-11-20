/**
 * Work history copy, shared by the current home page (components/experience)
 * and the redesign preview (app/(redesign)).
 */

import Link from 'next/link';

// Tailwind classes: styled on the current site. The redesign doesn't load
// Tailwind, so there it renders as plain text.
function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-yellow/20 text-yellow rounded px-1 py-0.5">
      {children}
    </span>
  );
}

export type WorkEntry = {
  company: string;
  years: string;
  role: string;
  paragraphs: React.ReactNode[];
  bullets: React.ReactNode[];
  tech: string[];
};

export const work: WorkEntry[] = [
  {
    company: 'Strava',
    years: '2024-2026',
    role: 'Senior Software Engineer (Map Platform)',
    paragraphs: [
      <>
        Owned <Highlight>features end-to-end</Highlight> on the web maps of
        Strava (50M MAU), including the live-tracking and flyover pages, from
        implementation and testing to rollout. Worked across React, Next.js and
        TypeScript.
      </>,
      <>
        Helped integrate Strava&apos;s C++/WebAssembly map engine into the web
        platform, <Highlight>extending C++ APIs</Highlight> and their JavaScript
        bindings to support new web interactions and performance requirements.
      </>,
      <>
        Contributed to frontend engineering infrastructure, including{' '}
        <Highlight>automated testing, CI workflows</Highlight> and shared
        components used across Strava&apos;s web products.
      </>,
    ],
    bullets: [],
    tech: ['TypeScript', 'React', 'Next.js', 'C++', 'WebAssembly'],
  },
  {
    company: 'FATMAP (Acquired by Strava)',
    years: '2022-2023',
    role: 'Senior Software Engineer',
    paragraphs: [
      <>
        Built and helped design the platform behind FATMAP&apos;s web products,
        covering deployment, CI/CD, testing and observability. Pre-AI work.
      </>,
    ],
    bullets: [
      <>
        Owned CI/CD and release infrastructure across the web stack, including
        GitHub Actions, staging/production releases, and canaries.
      </>,
      <>
        Built the <Highlight>full deployment path (paved road)</Highlight> for a
        greenfield{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://fatmap.com">
          fatmap.com
        </a>{' '}
        application, from Docker and Skaffold to Kubernetes, and
        development/production environments, with support from SRE.
      </>,
      <>
        Designed the <Highlight>testing strategy and infrastructure</Highlight>{' '}
        using Jest, React Testing Library and Playwright, with automated
        validation on pull requests and before releases.
      </>,
    ],
    tech: ['Kubernetes', 'Docker', 'GHA', 'Prometheus', 'Playwright', 'Jest'],
  },
];

export const previously = (
  <>
    Previously{' '}
    <a target="_blank" rel="noopener noreferrer" href="https://localistico.com">
      Localistico
    </a>
    ,{' '}
    <a target="_blank" rel="noopener noreferrer" href="https://vizzuality.com">
      Vizzuality
    </a>
    , and{' '}
    <a target="_blank" rel="noopener noreferrer" href="https://graphext.com">
      Graphext
    </a>
    . <Link href="/about">See more</Link>.
  </>
);
