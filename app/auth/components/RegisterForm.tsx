'use client'

import { Spinner } from '@/components/ui/spinner'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { RegisterSchema, registerSchema } from '../schemas'
import CustomCheckbox from './CustomCheckbox'
import Terms from './terms'

export default function RegisterForm() {
	const [showTerms, setShowTerms] = useState(false)
	const [error, setError] = useState<string | null>(null)
	const [isLoading, setIsLoading] = useState(false)
	const router = useRouter()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterSchema>({
		resolver: zodResolver(registerSchema),
	})

	const onSubmit = async (data: RegisterSchema) => {
		const { confirmPassword, terms, ...registerData } = data

		setIsLoading(true)
		setError(null)

		try {
			// Регистрация пользователя
			const response = await fetch(`/api/auth/register`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					...registerData,
					firstname: registerData.firstName,
					lastname: registerData.lastName,
				}),
			})

			const result = await response.json()

			if (!response.ok) {
				toast.error(
					'Произошла ошибка доступа к серверу авторизации, пожалуйста, попробуйте познее.',
					{
						duration: 5000,
					}
				)
				throw new Error(result.message || 'Ошибка при регистрации')
			}

			// Автоматический вход после успешной регистрации
			const signInResult = await signIn('credentials', {
				email: registerData.email,
				password: registerData.password,
				redirect: false,
			})

			if (signInResult?.error) {
				toast.warning(
					'Произошла ошибка при автоматическом входе, войдите в аккаунт вручную',
					{
						duration: 5000,
					}
				)
				throw new Error('Ошибка при автоматическом входе')
			}

			toast.success('Успешная регистрация!')

			router.refresh() // Обновляем сессию
			router.push('/profile')
		} catch (error) {
			setError(
				error instanceof Error
					? error.message
					: 'Произошла ошибка при регистрации'
			)
			console.error('Ошибка регистрации:', error)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className='w-full max-w-md p-6 md:p-8 bg-zinc-800/50 rounded-lg backdrop-blur-xl'>
			<h2 className='text-xl md:text-2xl font-bold text-white mb-4 md:mb-6'>
				Регистрация
			</h2>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='space-y-3 md:space-y-4'
			>
				<div>
					<label className='block text-gray-300 mb-1' htmlFor='firstName'>
						Имя
					</label>
					<input
						{...register('firstName')}
						id='firstName'
						type='text'
						className='w-full px-4 py-2 bg-zinc-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400'
						placeholder='Введите имя'
					/>
					{errors.firstName && (
						<p className='text-red-400 text-sm mt-1'>
							{errors.firstName.message}
						</p>
					)}
				</div>

				<div>
					<label className='block text-gray-300 mb-1' htmlFor='lastName'>
						Фамилия
					</label>
					<input
						{...register('lastName')}
						id='lastName'
						type='text'
						className='w-full px-4 py-2 bg-zinc-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400'
						placeholder='Введите фамилию'
					/>
					{errors.lastName && (
						<p className='text-red-400 text-sm mt-1'>
							{errors.lastName.message}
						</p>
					)}
				</div>

				<div>
					<label className='block text-gray-300 mb-1' htmlFor='username'>
						Имя пользователя
					</label>
					<input
						{...register('username')}
						id='username'
						type='text'
						className='w-full px-4 py-2 bg-zinc-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400'
						placeholder='Придумайте имя пользователя'
					/>
					{errors.username && (
						<p className='text-red-400 text-sm mt-1'>
							{errors.username.message}
						</p>
					)}
				</div>

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

				<div>
					<label className='block text-gray-300 mb-1' htmlFor='confirmPassword'>
						Подтверждение пароля
					</label>
					<input
						{...register('confirmPassword')}
						id='confirmPassword'
						type='password'
						className='w-full px-4 py-2 bg-zinc-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400'
						placeholder='Повторите пароль'
					/>
					{errors.confirmPassword && (
						<p className='text-red-400 text-sm mt-1'>
							{errors.confirmPassword.message}
						</p>
					)}
				</div>

				<div className='flex items-center space-x-2 relative'>
					<CustomCheckbox
						id='terms'
						register={register}
						name='terms'
						label={
							<>
								Я согласен с{' '}
								<button
									type='button'
									className='text-green-400 hover:underline'
									onClick={() => setShowTerms(true)}
								>
									условиями пользования
								</button>
							</>
						}
					/>
				</div>
				{errors.terms && (
					<p className='text-red-400 text-sm'>{errors.terms.message}</p>
				)}

				{error && <p className='text-red-400 text-sm text-center'>{error}</p>}

				<button
					type='submit'
					className='w-full py-3 bg-green-400 text-black font-semibold rounded-lg hover:bg-green-500 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center'
					disabled={isLoading}
				>
					{isLoading ? <Spinner className='w-5 h-5' /> : 'Зарегистрироваться'}
				</button>
			</form>

			{/* Модальное окно с условиями */}
			{showTerms && (
				<div className='fixed inset-0 bg-black/50 flex items-center justify-center p-2 md:p-4 backdrop-blur-sm'>
					<div className='bg-zinc-900 rounded-lg max-w-2xl w-[95vw] md:w-full max-h-[90vh] overflow-auto'>
						<Terms />
						<div className='p-3 md:p-4 flex justify-end border-t border-zinc-700'>
							<button
								onClick={() => setShowTerms(false)}
								className='px-4 py-2 bg-green-400 text-black font-semibold rounded-lg hover:bg-green-500 transition'
							>
								Закрыть
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
