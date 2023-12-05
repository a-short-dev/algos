import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  let cookie = req.cookies.get('userToken') || req.cookies.get('adminToken');
  if (!cookie) {
    console.log(cookie);
    return NextResponse.redirect(new URL('/login', req.url));
  }
  if (!cookie && req.url.includes('/login')) {
    //console.log('ll');
    //return NextResponse.redirect(new URL('/dashboard', req.url));
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/overview/:path*'],
};
