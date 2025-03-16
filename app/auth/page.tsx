'use client'

import { Undo2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'

export default function LoginPage() {
	const [isLogin, setIsLogin] = useState(true)
	const router = useRouter()

	return (
		<div className='relative w-full min-h-screen pt-32'>
			<div
				className='fixed top-5 left-5 flex flex-row items-center gap-2 cursor-pointer bg-zinc-800/50 backdrop-blur-xl p-2 rounded-lg'
				onClick={() => router.push('/')}
			>
				<Undo2 className='w-6 h-6 text-gray-300' />
				Назад на главную
			</div>

			{/* Градиенты */}
			<div className='fixed top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(22,163,74,0.3)_0%,_transparent_70%)]' />
			<div className='fixed bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(22,163,74,0.3)_0%,_transparent_70%)]' />

			<div className='flex flex-col items-center justify-start p-3 md:p-4'>
				{/* Переключатель форм */}
				<div className='mb-6 md:mb-8 flex space-x-4'>
					<button
						onClick={() => setIsLogin(true)}
						className={`px-4 md:px-6 py-2 rounded-lg transition text-sm md:text-base ${
							isLogin
								? 'bg-green-400 text-black font-semibold'
								: 'text-gray-300 hover:text-green-400'
						}`}
					>
						Вход
					</button>
					<button
						onClick={() => setIsLogin(false)}
						className={`px-4 md:px-6 py-2 rounded-lg transition text-sm md:text-base ${
							!isLogin
								? 'bg-green-400 text-black font-semibold'
								: 'text-gray-300 hover:text-green-400'
						}`}
					>
						Регистрация
					</button>
				</div>

				{/* Формы */}
				<div className='w-full flex justify-center'>
					{isLogin ? <LoginForm /> : <RegisterForm />}
				</div>

				{/* Дополнительная информация */}
				<div className='mt-6 md:mt-8 text-center px-4'>
					<p className='text-gray-300'>
						{isLogin ? 'Нет аккаунта? ' : 'Уже есть аккаунт? '}
						<button
							onClick={() => setIsLogin(!isLogin)}
							className='text-green-400 hover:underline'
						>
							{isLogin ? 'Зарегистрируйтесь' : 'Войдите'}
						</button>
					</p>
					<p className='mt-3 md:mt-4 text-gray-400 text-sm'>
						При возникновении проблем обратитесь в{' '}
						<button className='text-green-400 hover:underline'>
							службу поддержки
						</button>
					</p>
				</div>
			</div>
		</div>
	)
}
