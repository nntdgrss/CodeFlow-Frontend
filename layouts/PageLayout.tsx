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
		<div className='bg-zinc-900 overflow-x-hidden min-h-screen'>
			{/* Фоновые градиенты */}
			{!isBoardPage && (
				<>
					<div className='fixed top-1/4 right-1/4 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(22,163,74,0.15)_0%,_transparent_70%)]' />
					<div className='fixed bottom-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(22,163,74,0.15)_0%,_transparent_70%)]' />
				</>
			)}

			{/* Хедер не показываем на странице авторизации */}
			{!isAuthPage && <Header />}

			{/* Основной контент */}
			<div
				className={`relative ${
					!isAuthPage ? 'pt-24' : ''
				} min-h-screen text-white`}
			>
				<SessionProvider>
					{children}
					<Toaster richColors theme='dark' />
				</SessionProvider>
			</div>
		</div>
	)
}
