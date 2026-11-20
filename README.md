This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install dependencies with `yarn` and start the development server with `yarn dev`.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Redesign preview (R2b)

The redesign lives in `app/(redesign)` (routes under `/r2b`, styles in `app/styles/r2b.css`). Open any page with `?redesign=true` (e.g. [http://localhost:3000/?redesign=true](http://localhost:3000/?redesign=true)) to see it: `proxy.ts` rewrites `/`, `/about`, `/blog` and `/blog/<slug>` to it and sets a session cookie so it stays on while browsing. `?redesign=false` turns it off. Copy shared by both designs is in `app/content`.

## Deploy on Vercel

This webpage is deployed on Vercel. Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
