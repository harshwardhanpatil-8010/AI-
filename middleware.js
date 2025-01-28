import { NextResponse } from 'next/server';

export function middleware(req) {
  const user = req.cookies.get('user'); // Example: Check for logged-in user
  const url = req.nextUrl.clone();

  if (!user && url.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}
