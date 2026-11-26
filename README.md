This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Install dependencies with `yarn` and start the development server with `yarn dev`.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Layout

Pages are in `app` (`/`, `/about`, `/blog`, `/blog/<slug>`), styles in `app/styles/site.css`, and copy shared between them in `app/content`. Post sources are MDX in `app/_posts/<slug>/page.mdx`: Next ignores folders starting with an underscore, so they are content rather than routes, read by `app/utils/getAllPosts.ts` and rendered by `app/blog/[slug]/page.tsx`. Each post is also served as Markdown at `/blog/<slug>.md`.

## Deploy on Vercel

This webpage is deployed on Vercel. Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
