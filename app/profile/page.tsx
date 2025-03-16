'use client'

import { Spinner } from '@/components/ui/spinner'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function ProfilePage() {
	const { data: session, status } = useSession()
	const router = useRouter()

	if (status === 'loading') {
		return (
			<div className='min-h-[60vh] flex items-center justify-center'>
				<Spinner className='w-8 h-8' />
			</div>
		)
	}

	if (!session?.user) {
		router.push('/auth')
		return null
	}

	return (
		<div className='container max-w-4xl mx-auto px-4 py-8'>
			<div className='bg-zinc-800/50 backdrop-blur-xl rounded-lg p-6 md:p-8'>
				<div className='flex justify-between items-center mb-6'>
					<h1 className='text-2xl md:text-3xl font-bold text-white'>
						Личный кабинет
					</h1>
					<button
						onClick={() => signOut({ callbackUrl: '/auth' })}
						className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition'
					>
						Выйти
					</button>
				</div>

				<div className='space-y-4'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						{/* Информация о пользователе */}
						<div className='space-y-3'>
							<h2 className='text-xl font-semibold text-white mb-4'>
								Данные профиля
							</h2>
							<div>
								<label className='block text-gray-400 text-sm'>Имя</label>
								<p className='text-white'>{session.user.name}</p>
							</div>
							<div>
								<label className='block text-gray-400 text-sm'>
									Имя пользователя
								</label>
								<p className='text-white'>{session.user.username}</p>
							</div>
							<div>
								<label className='block text-gray-400 text-sm'>Email</label>
								<p className='text-white'>{session.user.email}</p>
							</div>
						</div>

						{/* Дополнительная информация или статистика */}
						<div className='space-y-3'>
							<h2 className='text-xl font-semibold text-white mb-4'>
								Статистика
							</h2>
							<div className='grid grid-cols-2 gap-4'>
								<div className='bg-zinc-700/50 p-4 rounded-lg'>
									<p className='text-gray-400 text-sm'>Дата регистрации</p>
									<p className='text-white font-medium'>
										{new Date().toLocaleDateString('ru-RU')}
									</p>
								</div>
								<div className='bg-zinc-700/50 p-4 rounded-lg'>
									<p className='text-gray-400 text-sm'>Статус</p>
									<p className='text-green-400 font-medium'>Активный</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
