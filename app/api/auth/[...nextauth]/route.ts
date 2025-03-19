import { API_URL } from '@/configs/api.config'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) {
					return null
				}

				try {
					const response = await fetch(`${API_URL}/auth/login`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({
							email: credentials.email,
							password: credentials.password,
						}),
					})

					const data = await response.json()

					if (!response.ok) {
						throw new Error(data.message || 'Ошибка авторизации')
					}

					if (!data.user || !data.token) {
						console.error('Invalid response format:', data)
					}

					return {
						id: data.user.id,
						email: data.user.email,
						name: `${data.user.firstName} ${data.user.lastName}`,
						username: data.user.username,
						accessToken: data.token,
					}
				} catch (error) {
					return null
				}
			},
		}),
	],
	pages: {
		signIn: '/auth',
	},
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				// Сохраняем данные из response в token
				token.id = user.id
				token.email = user.email
				token.accessToken = user.accessToken
				token.username = user.username
			}
			return token
		},
		async session({ session, token }) {
			// Добавляем данные из token в session
			session.user = {
				...session.user,
				id: token.id,
				email: token.email,
				username: token.username,
			}
			session.accessToken = token.accessToken
			return session
		},
	},
	session: {
		strategy: 'jwt',
	},
})

export { handler as GET, handler as POST }
