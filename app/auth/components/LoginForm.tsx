'use client'

import { Spinner } from '@/components/ui/spinner'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { LoginSchema, loginSchema } from '../schemas'
import CustomCheckbox from './CustomCheckbox'

export default function LoginForm() {
	const [error, setError] = useState<string | null>(null)
	const [isLoading, setIsLoading] = useState(false)
	const router = useRouter()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginSchema>({
		resolver: zodResolver(loginSchema),
	})

	const onSubmit = async (data: LoginSchema) => {
		const { email, password } = data

		setIsLoading(true)
		setError(null)

		try {
			const result = await signIn('credentials', {
				email,
				password,
				redirect: false,
			})

			if (result?.error) {
				// Обрабатываем разные типы ошибок
				if (result.error === 'CredentialsSignin') {
					toast.warning(
						'Неверный email или пароль. Пожалуйста, проверьте введенные данные.',
						{
							duration: 5000,
						}
					)
					setError(
						'Неверный email или пароль. Пожалуйста, проверьте введенные данные.'
					)
				} else {
					setError(`Произошла ошибка при входе: ${result.error}`)
				}
			} else {
				toast.success('Успешный вход в аккаунт. Добро пожаловать!', {
					duration: 5000,
				})
				router.refresh() // Обновляем сессию
				router.push('/profile')
			}
		} catch (error) {
			toast.error(
				'Не удалось подключиться к серверу авторизации. Пожалуйста, попробуйте позже.',
				{
					duration: 5000,
				}
			)
			setError(
				'Не удалось подключиться к серверу авторизации. Пожалуйста, попробуйте позже.'
			)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className='w-full max-w-md p-6 md:p-8 bg-zinc-800/50 rounded-lg backdrop-blur-xl'>
			<h2 className='text-xl md:text-2xl font-bold text-white mb-4 md:mb-6'>
				Вход
			</h2>
			<form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
				<div>
					<label className='block text-gray-300 mb-1' htmlFor='email'>
						Email
					</label>
					<input
						{...register('email')}
						id='email'
						type='email'
						className='w-full px-4 py-2 bg-zinc-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400'
						placeholder='Введите email'
					/>
					{errors.email && (
						<p className='text-red-400 text-sm mt-1'>{errors.email.message}</p>
					)}
				</div>

				<div>
					<label className='block text-gray-300 mb-1' htmlFor='password'>
						Пароль
					</label>
					<input
						{...register('password')}
						id='password'
						type='password'
						className='w-full px-4 py-2 bg-zinc-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400'
						placeholder='Введите пароль'
					/>
					{errors.password && (
						<p className='text-red-400 text-sm mt-1'>
							{errors.password.message}
						</p>
					)}
				</div>

				<div className='flex items-center justify-between'>
					<CustomCheckbox id='remember' label='Запомнить меня' />
					{/* <button
            type="button"
            className="text-sm md:text-base text-green-400 hover:underline"
          >
            Забыли пароль?
          </button> */}
				</div>

				{error && <p className='text-red-400 text-sm text-center'>{error}</p>}

				<button
					type='submit'
					className='w-full py-3 bg-green-400 text-black font-semibold rounded-lg hover:bg-green-500 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center'
					disabled={isLoading}
				>
					{isLoading ? <Spinner className='w-5 h-5' /> : 'Войти'}
				</button>
			</form>
		</div>
	)
}
