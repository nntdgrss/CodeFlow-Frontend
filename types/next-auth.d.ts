import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
	interface Session {
		accessToken?: string
		user: DefaultSession['user'] & {
			username?: string
		}
	}

	interface User {
		username?: string
		accessToken?: string
	}
}

declare module 'next-auth/jwt' {
	interface JWT {
		accessToken?: string
		username?: string
	}
}
