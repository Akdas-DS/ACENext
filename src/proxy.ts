import { auth } from '@/auth';
import { NextResponse } from 'next/server';

const protectedRoutes = ['/admin', '/client', '/employee'];

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  
  const isProtectedRoute = protectedRoutes.some((route) =>
    nextUrl.pathname.startsWith(route)
  );

  if (isProtectedRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL('/login', nextUrl));
  }

  if (isLoggedIn) {
    const role = req.auth?.user?.role;
    
    // RBAC Redirects
    if (nextUrl.pathname.startsWith('/admin') && role !== 'ADMIN') {
      return NextResponse.redirect(new URL('/unauthorized', nextUrl));
    }
    if (nextUrl.pathname.startsWith('/employee') && role !== 'EMPLOYEE' && role !== 'ADMIN') {
      return NextResponse.redirect(new URL('/unauthorized', nextUrl));
    }
    if (nextUrl.pathname.startsWith('/client') && role !== 'CLIENT' && role !== 'ADMIN') {
      return NextResponse.redirect(new URL('/unauthorized', nextUrl));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
