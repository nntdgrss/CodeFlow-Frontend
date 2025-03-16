import PageLayout from '@/layouts/PageLayout'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'CodeFlow',
	description: 'Maked my nntdgrss',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={`antialiased`}>
				<PageLayout>{children}</PageLayout>
			</body>
		</html>
	)
}
