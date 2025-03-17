import { useRouter } from 'next/navigation'

type ProjectBlockProps = {
	name: string
	description: string
	updatedAt: Date
	isActive: boolean
	link: string
}

export default function ProjectBlock({
	name,
	description,
	updatedAt,
	isActive,
	link,
}: ProjectBlockProps) {
	const router = useRouter()
	const statusColor = isActive ? 'text-green-400' : 'text-zinc-400'
	const backgroundColor = isActive ? 'bg-green-400/10' : 'bg-zinc-800/30'

	const formattedDate = new Intl.DateTimeFormat('ru-RU', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	}).format(updatedAt)

	return (
		<>
			<div
				className='group relative bg-zinc-800/30 backdrop-blur-xl rounded-xl p-6 cursor-pointer hover:bg-zinc-800/40 transition-all duration-500 border-transparent border border-solid hover:border-zinc-500/50'
				onClick={() => router.push(link)}
			>
				{/* Градиент карточки */}
				<div className='absolute bottom-0 right-0 w-48 h-48 group-hover:size-55 transition-all duration-500 bg-[radial-gradient(circle_at_bottom_right,rgba(22,163,74,0.2)_0%,_transparent_70%)] rounded-br-xl' />

				<div className='relative z-10'>
					<div className='flex items-center justify-between mb-4'>
						<div className='w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center'>
							<span className='text-2xl select-none pointer-events-none'>
								📋
							</span>
						</div>
						<span
							className={`px-3 py-1 rounded-full text-sm ${backgroundColor} ${statusColor}`}
						>
							{isActive ? 'Активный' : 'Завершен'}
						</span>
					</div>

					<h2 className='text-xl font-semibold mb-3 text-zinc-100 group-hover:text-green-400 transition-colors'>
						{name}
					</h2>
					<p className='text-gray-400 mb-4'>{description}</p>

					<div className='flex items-center text-sm text-gray-500'>
						<span>Обновлено: {formattedDate}</span>
					</div>
				</div>
			</div>
		</>
	)
}
