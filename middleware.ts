import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const language = request.cookies.get('language')?.value;
  const response = NextResponse.next();

  if (!language) {
    response.cookies.set('language', 'id', { path: '/' });
  }

  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/'],
};
