'use client'

import BackgroundRoundedGradient from '@/components/ui/background-rounded-gradient'
import { Spinner } from '@/components/ui/spinner'
import { useBackend } from '@/hooks/useBackend'
import { useSession } from 'next-auth/react'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import InfoBlock from './blocks/InfoBlock'
import TodoBlock from './blocks/TodoBlock'
import { FetchProjectResponse } from './types/project-id.types'

export default function ProjectPage() {
	const { data: session, status } = useSession()
	const [projectData, setProjectData] = useState<FetchProjectResponse | null>(
		null
	)
	const router = useRouter()
	const params = useParams()
	const projectId = params.id
	const backend = useBackend()

	useEffect(() => {
		let isSubscribed = true // Флаг для отмены запроса при размонтировании

		// Ждем загрузку сессии
		if (status === 'loading') return

		// Проверяем авторизацию
		if (!session?.user) {
			router.push('/auth')
			return
		}

		// Получаем данные проекта
		const fetchProjectData = async () => {
			const [result, error] = await backend.get<FetchProjectResponse>(
				`/projects/${projectId}`
			)

			// Проверяем что компонент все еще смонтирован
			if (!isSubscribed) return

			if (error) {
				if (error === 'UNAUTHORIZED') {
					router.push('/auth')
					return
				}
				console.error('Ошибка при получении данных проекта:', error)
				return
			}

			if (!result) {
				console.error('Не удалось получить данные проекта')
				return
			}

			setProjectData(result)
		}

		fetchProjectData()

		// Cleanup функция
		return () => {
			isSubscribed = false
		}
	}, [session, status, projectId]) // Убрали router из зависимостей

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
		<div className='container w-full mx-auto px-4 py-12'>
			<BackgroundRoundedGradient />
			<div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
				<InfoBlock
					name={projectData?.project.name}
					description={projectData?.project.description}
					createdAt={projectData?.project.createdAt}
					updatedAt={projectData?.project.updatedAt}
					projectId={String(projectId)}
				/>
				<TodoBlock
					boards={4}
					projectId={String(projectId)}
					updateDate={new Date()}
				/>
			</div>
		</div>
	)
}
