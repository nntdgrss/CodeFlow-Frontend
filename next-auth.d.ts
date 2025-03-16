import 'next-auth'
import 'next-auth/jwt'

declare module 'next-auth' {
	interface User {
		id: string
		email: string
		name: string
		username: string
		accessToken: string
	}

	interface Session {
		user: User
		accessToken: string
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		accessToken: string
		username: string
	}
}
