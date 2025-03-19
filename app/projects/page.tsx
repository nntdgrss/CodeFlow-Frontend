'use client'

import BackgroundRoundedGradient from '@/components/ui/background-rounded-gradient'
import { Spinner } from '@/components/ui/spinner'
import { useBackend } from '@/hooks/useBackend'
import { Project } from '@/types/api.types'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useLayoutEffect, useState } from 'react'
import ProjectBlock from './blocks/ProjectBlock'

export default function ProjectsPage() {
	const { data: session, status } = useSession()
	const [projects, setProjects] = useState<Project[]>([])
	const router = useRouter()
	const backend = useBackend()

	useLayoutEffect(() => {
		if (status !== 'loading' && !session?.user) {
			router.push('/auth')
			return
		}

		const fetchProjects = async () => {
			if (!session?.accessToken) return

			const [data, error] = await backend.getProjects()

			if (error) {
				console.error('Error fetching projects:', error)
				if (error === 'UNAUTHORIZED') {
					router.push('/auth')
				}
				setProjects([])
				return
			}

			if (!data) {
				setProjects([])
				return
			}

			setProjects(data.projects || [])
		}

		if (session?.user && session?.accessToken) {
			fetchProjects()
		}
	}, [session, status, router])

	if (status === 'loading') {
		return (
			<div className='min-h-[60vh] flex items-center justify-center'>
				<Spinner className='w-8 h-8' children={<BackgroundRoundedGradient />} />
			</div>
		)
	}

	if (!session?.user) {
		return null
	}

	return (
		<div className='relative w-full min-h-screen overflow-x-hidden'>
			{/* Градиенты */}
			<BackgroundRoundedGradient />

			<div className='container max-w-7xl mx-auto px-4 py-12 flex flex-col items-start'>
				<h1 className='text-3xl text-zinc-100 font-bold mb-4 flex flex-row items-center'>
					Ваши проекты
					<button
						className='text-sm font-medium ml-5 border border-solid border-green-400 rounded-2xl p-2 hover:bg-green-400 hover:text-black transition-colors duration-300 cursor-pointer'
						onClick={() => router.push('/projects/create')}
					>
						Новый проект
					</button>
				</h1>
				<p className='text-lg text-gray-400 mb-8'>
					Управляйте своими проектами и отслеживайте их прогресс
				</p>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{projects.length > 0 ? (
						projects.map(project => (
							<ProjectBlock
								key={project.id}
								name={project.name}
								description={project.description}
								updatedAt={new Date(project.updatedAt)}
								isActive={true}
								link={`/projects/${project.id}`}
							/>
						))
					) : (
						<p className='text-gray-400'>У вас пока нет проектов</p>
					)}
				</div>
			</div>
		</div>
	)
}
