'use client'

import { Menu } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
	const router = useRouter()
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	const NAV_ITEMS = [
		{
			name: 'О проекте',
			href: '/about',
		},
	]

	return (
		<header className='fixed top-0 left-0 right-0 z-50'>
			<div className='fixed top-5 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] lg:w-[80%] xl:w-1/2 h-16 bg-zinc-800/70 flex items-center justify-between px-4 rounded-lg shadow-lg backdrop-blur-xl'>
				{/* Градиент */}
				<div className='fixed left-0 -translate-x-1/4 w-40 h-40 bg-[radial-gradient(circle_at_center,rgba(22,163,74,0.15)_0%,_transparent_70%)] pointer-events-none' />

				{/* Логотип */}
				<div
					onClick={() => router.push('/')}
					className='text-green-400 text-xl font-bold cursor-pointer select-none'
				>
					CODEFLOW
				</div>

				{/* Десктопная навигация */}
				<div className='hidden md:flex items-center space-x-6'>
					<nav className='flex space-x-6'>
						{NAV_ITEMS.map(item => (
							<button
								key={item.href}
								onClick={() => router.push(item.href)}
								className='text-gray-300 hover:text-green-400 hover:underline underline-offset-8 transition'
							>
								{item.name}
							</button>
						))}
					</nav>

					<button
						onClick={() => router.push('/profile')}
						className='px-4 py-2 border border-green-400 rounded-lg text-green-400 hover:bg-green-400/50 hover:text-black transition'
					>
						<span>Личный кабинет</span>
					</button>
				</div>

				{/* Мобильное меню */}
				<button
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					className='md:hidden text-gray-300 hover:text-green-400 transition'
				>
					<Menu className='w-6 h-6' />
				</button>
			</div>

			{/* Мобильная навигация */}
			{isMobileMenuOpen && (
				<div className='fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40'>
					<div className='fixed top-24 left-1/2 -translate-x-1/2 w-[90%] bg-zinc-800 rounded-lg shadow-lg p-4'>
						<nav className='flex flex-col space-y-4'>
							{NAV_ITEMS.map(item => (
								<button
									key={item.href}
									onClick={() => {
										router.push(item.href)
										setIsMobileMenuOpen(false)
									}}
									className='text-gray-300 hover:text-green-400 transition py-2'
								>
									{item.name}
								</button>
							))}
							<button
								onClick={() => {
									router.push('/profile')
									setIsMobileMenuOpen(false)
								}}
								className='text-green-400 hover:text-green-500 transition py-2'
							>
								Личный кабинет
							</button>
						</nav>
					</div>
				</div>
			)}
		</header>
	)
}
