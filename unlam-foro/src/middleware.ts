import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simple in-memory store for rate limiting (en producción usar Redis)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minuto
const MAX_REQUESTS_PER_WINDOW = 100; // 100 requests por minuto

export function middleware(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
  const now = Date.now();
  
  // Rate limiting para APIs
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const userKey = `${ip}-${request.nextUrl.pathname}`;
    const userData = rateLimitStore.get(userKey);
    
    if (!userData || now > userData.resetTime) {
      rateLimitStore.set(userKey, {
        count: 1,
        resetTime: now + RATE_LIMIT_WINDOW,
      });
    } else {
      userData.count++;
      
      if (userData.count > MAX_REQUESTS_PER_WINDOW) {
        return NextResponse.json(
          { error: 'Rate limit exceeded' },
          { status: 429 }
        );
      }
    }
  }

  // Headers de seguridad adicionales
  const response = NextResponse.next();
  
  // CORS para APIs
  if (request.nextUrl.pathname.startsWith('/api/')) {
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }

  return response;
}

export const config = {
  matcher: [
    '/api/:path*',
  ],
}; 