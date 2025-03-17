'use client'

import BackgroundRoundedGradient from '@/components/ui/background-rounded-gradient'
import { Spinner } from '@/components/ui/spinner'
import { useSession } from 'next-auth/react'
import { useParams, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import InfoBlock from './blocks/InfoBlock'
import TodoBlock from './blocks/TodoBlock'

export default function ProjectPage() {
	const { data: session, status } = useSession()
	const router = useRouter()
	const params = useParams()
	const projectId = params.id

	useEffect(() => {
		if (status !== 'loading' && !session?.user) {
			router.push('/auth')
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
		<div className='container w-full mx-auto px-4 py-12'>
			<BackgroundRoundedGradient />
			<div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
				<InfoBlock />
				<TodoBlock
					boards={4}
					projectId={String(projectId)}
					updateDate={new Date()}
				/>
			</div>
		</div>
	)
}
