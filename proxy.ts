import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Redesign preview (R2b) behind a flag.
 *
 * `?redesign=true` opts the browser in: the page is served from the
 * app/(redesign) routes under /r2b and a session cookie keeps it on while
 * navigating. `?redesign=false` opts out. The URL in the address bar never
 * changes, and without the flag nothing is rewritten.
 */

const PARAM = 'redesign';
const COOKIE = 'redesign';

// The site's pages: /, /about, /blog and /blog/<slug> (not /blog/<slug>.md).
const PAGE = /^\/(about|blog(\/[^/.]+)?)?$/;

export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  if (!PAGE.test(pathname)) return NextResponse.next();

  const param = searchParams.get(PARAM);
  const enabled =
    param === null
      ? request.cookies.get(COOKIE)?.value === 'true'
      : param === 'true';

  const response = enabled
    ? NextResponse.rewrite(
        new URL(`/r2b${pathname === '/' ? '' : pathname}`, request.url),
      )
    : NextResponse.next();

  if (param === 'true') response.cookies.set(COOKIE, 'true', { path: '/' });
  if (param === 'false') response.cookies.delete(COOKIE);
  return response;
}

// Run only when the flag is in play, so other requests skip the proxy.
// Next reads this statically: literals only, no constants.
export const config = {
  matcher: [
    {
      source: '/((?!_next/|r2b).*)',
      has: [{ type: 'query', key: 'redesign' }],
    },
    {
      source: '/((?!_next/|r2b).*)',
      has: [{ type: 'cookie', key: 'redesign' }],
    },
  ],
};
