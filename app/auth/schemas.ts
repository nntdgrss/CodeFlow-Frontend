import { z } from 'zod'

export const loginSchema = z.object({
	email: z.string().min(1, 'Email обязателен').email('Неверный формат email'),
	password: z
		.string()
		.min(8, 'Пароль должен содержать минимум 8 символов')
		.max(32, 'Пароль должен содержать максимум 32 символа')
		.regex(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
			'Пароль должен содержать заглавные, строчные буквы и цифры, только английский язык'
		),
})

export const registerSchema = z
	.object({
		firstName: z
			.string()
			.min(2, 'Имя должно содержать минимум 2 символа')
			.max(32, 'Имя должно содержать максимум 32 символа')
			.regex(/^[а-яА-Яa-zA-Z]+$/, 'Имя может содержать только буквы'),
		lastName: z
			.string()
			.min(2, 'Фамилия должна содержать минимум 2 символа')
			.max(32, 'Фамилия должна содержать максимум 32 символа')
			.regex(/^[а-яА-Яa-zA-Z]+$/, 'Фамилия может содержать только буквы'),
		username: z
			.string()
			.min(3, 'Username должен содержать минимум 3 символа')
			.max(16, 'Username должен содержать максимум 32 символа')
			.regex(
				/^[a-zA-Z0-9_]+$/,
				'Username может содержать только латинские буквы, цифры и _'
			),
		email: z.string().min(1, 'Email обязателен').email('Неверный формат email'),
		password: z
			.string()
			.min(8, 'Пароль должен содержать минимум 8 символов')
			.max(32, 'Пароль должен содержать максимум 32 символа')
			.regex(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
				'Пароль должен содержать заглавные, строчные буквы и цифры, только английский язык'
			),
		confirmPassword: z.string(),
		terms: z.boolean().refine(val => val === true, {
			message: 'Необходимо принять условия пользования',
		}),
	})
	.refine(data => data.password === data.confirmPassword, {
		message: 'Пароли не совпадают',
		path: ['confirmPassword'],
	})

export type LoginSchema = z.infer<typeof loginSchema>
export type RegisterSchema = z.infer<typeof registerSchema>
