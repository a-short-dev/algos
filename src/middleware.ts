import { NextRequest, NextResponse } from 'next/server';
import toast from 'react-hot-toast';

export function middleware(req: NextRequest) {
  let cookie = req.cookies.get('userToken') || req.cookies.get('adminToken');
  if (!cookie?.name) {
    toast.error('Session Expired');
    console.log(cookie);
    return NextResponse.redirect(new URL('/login', req.url));
  }
  if (cookie && cookie.name === 'userToken ' && req.url.includes('overview')) {
    // return NextResponse.redirect(new URL('/dashboard'));
  }

  if (
    cookie &&
    cookie.name === 'adminToken ' &&
    req.url.includes('dashboard')
  ) {
    console.log('admin');
    //return NextResponse.redirect(new URL('/overview'));
  }
}

export const config = {
  matcher: ['/dashboard', '/overview'],
};
