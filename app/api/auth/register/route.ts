import { API_URL } from '@/configs/api.config'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	try {
		const body = await request.json()

		const response = await fetch(`${API_URL}/auth/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		})

		const data = await response.json()

		if (!response.ok) {
			return NextResponse.json(
				{ message: data.message || 'Ошибка при регистрации' },
				{ status: response.status }
			)
		}

		return NextResponse.json(data)
	} catch (error) {
		console.error('Register error:', error)
		return NextResponse.json(
			{ message: 'Внутренняя ошибка сервера' },
			{ status: 500 }
		)
	}
}
