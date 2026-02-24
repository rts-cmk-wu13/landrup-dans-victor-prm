import { NextResponse } from 'next/server';

//First line of defense
export default function proxy(request) {
  const cookieStore = request.cookies;

  if (!cookieStore.has('landrup-access-token')) {
    /* console.log("😬", "proxy hit") */
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  const headers = new Headers(request.headers);
  headers.set("landrup-current-path", request.nextUrl.pathname);

  NextResponse.next({ request: { headers } });
}

export const config = {
  matcher: ['/home/:path*'], // note the '*' to match all nested paths
};