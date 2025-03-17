'use client'

import { Spinner } from '@/components/ui/spinner'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import ProjectBlock from './blocks/ProjectBlock'

export default function ProjectsPage() {
	const { data: session, status } = useSession()
	const router = useRouter()

	useEffect(() => {
		if (status !== 'loading' && !session?.user) {
			router.push('/auth')
		}
	}, [session, status, router])

	if (status === 'loading') {
		return (
			<div className='min-h-[60vh] flex items-center justify-center'>
				<Spinner className='w-8 h-8' />
			</div>
		)
	}

	if (!session?.user) {
		return null
	}

	return (
		<div className='relative w-full min-h-screen overflow-x-hidden'>
			{/* Градиенты */}
			<div className='fixed bottom-0 right-0 translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(22,163,74,0.15)_0%,_transparent_70%)]' />

			<div className='container max-w-7xl mx-auto px-4 py-12 flex flex-col items-start'>
				<h1 className='text-3xl text-zinc-100 font-bold mb-4'>Ваши проекты</h1>
				<p className='text-lg text-gray-400 mb-8'>
					Управляйте своими проектами и отслеживайте их прогресс
				</p>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					<ProjectBlock
						name='E-commerce Platform'
						description='Online shopping platform with cart and payment integration'
						updatedAt={new Date('2023-09-15')}
						isActive={true}
						link='/projects/1'
					/>
					<ProjectBlock
						name='Blog CMS'
						description='Content management system for managing blog posts'
						updatedAt={new Date('2023-10-02')}
						isActive={true}
						link='/projects/2'
					/>
					<ProjectBlock
						name='Personal Portfolio'
						description='Portfolio website showcasing projects and skills'
						updatedAt={new Date('2023-08-20')}
						isActive={false}
						link='/projects/2'
					/>
					<ProjectBlock
						name='Task Manager'
						description='Application for managing and tracking tasks and deadlines'
						updatedAt={new Date('2023-11-01')}
						isActive={true}
						link='/projects/3'
					/>
					<ProjectBlock
						name='Weather Dashboard'
						description='Real-time weather information and forecasts'
						updatedAt={new Date('2023-07-10')}
						isActive={false}
						link='/projects/4'
					/>
				</div>
			</div>
		</div>
	)
}
