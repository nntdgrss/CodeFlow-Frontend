'use client'

import { SessionProvider } from 'next-auth/react'
import { usePathname } from 'next/navigation'
import { Toaster } from 'sonner'
import Header from './components/Header'

export default function PageLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const pathname = usePathname()
	const isAuthPage = pathname === '/auth'
	const isBoardPage = pathname.startsWith('/boards/') && pathname !== '/boards'

	return (
		<SessionProvider>
			<div className='bg-zinc-900 overflow-x-hidden min-h-screen'>
				{/* Хедер не показываем на странице авторизации */}
				{!isAuthPage && <Header />}

				{/* Основной контент */}
				<div
					className={`relative ${
						!isAuthPage ? 'pt-24' : ''
					} min-h-screen text-white`}
				>
					{children}
					<Toaster richColors theme='dark' />
				</div>
			</div>
		</SessionProvider>
	)
}
