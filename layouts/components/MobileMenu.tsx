'use client'

import { AppConfig } from '@/configs/app.config'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false)
	const router = useRouter()

	// Закрываем меню при изменении маршрута
	useEffect(() => {
		setIsOpen(false)
	}, [router])

	return (
		<div className='fixed top-[1.8rem] right-5 md:hidden z-50'>
			{/* Гамбургер кнопка */}
			<button
				onClick={() => setIsOpen(!isOpen)}
				className='p-2 text-gray-300 hover:text-green-400 transition hover:bg-zinc-800/50 rounded-lg'
				aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
			>
				<div className='w-6 flex flex-col gap-1'>
					<span
						className={`block h-0.5 w-full bg-current transition-all duration-300 ${
							isOpen ? 'rotate-45 translate-y-1.5' : ''
						}`}
					/>
					<span
						className={`block h-0.5 w-full bg-current transition-all duration-300 ${
							isOpen ? 'opacity-0' : ''
						}`}
					/>
					<span
						className={`block h-0.5 w-full bg-current transition-all duration-300 ${
							isOpen ? '-rotate-45 -translate-y-1.5' : ''
						}`}
					/>
				</div>
			</button>

			{/* Мобильное меню */}
			<div
				className={`fixed inset-0 transition-all duration-300 ${
					isOpen ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none'
				}`}
			>
				{/* Overlay для закрытия */}
				<div
					className='absolute inset-0 bg-zinc-900/95 backdrop-blur-sm cursor-pointer'
					onClick={() => setIsOpen(false)}
				/>

				{/* Навигация */}
				<nav
					className='relative flex flex-col items-center justify-center h-full gap-8 px-4'
					onClick={e => e.stopPropagation()}
				>
					{/* Кнопка закрытия */}
					<button
						onClick={() => setIsOpen(false)}
						className='absolute top-6 right-6 p-2 text-gray-300 hover:text-green-400 transition hover:bg-zinc-800/50 rounded-lg'
						aria-label='Закрыть меню'
					>
						<svg
							className='w-6 h-6'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					</button>

					{/* Навигационные ссылки */}
					{AppConfig.routes.map(route => (
						<a
							key={route.href}
							onClick={() => {
								setIsOpen(false)
								router.push(route.href)
							}}
							className='text-2xl text-gray-300 hover:text-green-400 transition cursor-pointer'
						>
							{route.name}
						</a>
					))}
					<button
						onClick={() => router.push('/profile')}
						className='px-8 py-3 border border-solid border-green-400 rounded-lg text-green-400 hover:bg-green-400/10 transition text-xl'
					>
						Личный кабинет
					</button>
				</nav>
			</div>
		</div>
	)
}
