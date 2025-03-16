import { getToken } from 'next-auth/jwt'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
	const token = await getToken({ req: request })

	// Защищенные маршруты
	const protectedPaths = ['/profile']
	const path = request.nextUrl.pathname

	if (protectedPaths.some(prefix => path.startsWith(prefix))) {
		if (!token) {
			const url = new URL('/auth', request.url)
			url.searchParams.set('callbackUrl', path)
			return NextResponse.redirect(url)
		}
	}

	// Если пользователь авторизован и пытается зайти на страницы авторизации
	if (token && path === '/auth') {
		return NextResponse.redirect(new URL('/profile', request.url))
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/profile', '/auth'],
}
