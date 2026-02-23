import { NextResponse } from 'next/server';

//First line of defense
export default function middleware(request) {
  const cookieStore = request.cookies;

  if (!cookieStore.has('landrup-access-token')) {
    /* console.log("😬", "proxy hit") */
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/home/:path*'], // note the '*' to match all nested paths
};