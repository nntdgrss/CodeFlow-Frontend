'use client'

import { formatDate } from '@/utils/format-date'
import { useRouter } from 'next/navigation'
import styles from '../styles/todo-block.module.scss'

type TodoBlockProps = {
	boards: number
	updateDate: Date
	projectId: string
}

export default function TodoBlock({
	boards,
	updateDate,
	projectId,
}: TodoBlockProps) {
	const router = useRouter()

	return (
		<div
			className='bg-zinc-800/30 backdrop-blur-xl rounded-xl duration-500 border-zinc-500/10 border border-solid hover:border-zinc-500/50 p-4 flex flex-col cursor-pointer'
			onClick={() => router.push(`/projects/todos/${projectId}`)}
		>
			<div
				className={`absolute top-0 left-0 w-48 h-48 group-hover:size-55 transition-all duration-500 bg-[radial-gradient(circle_at_top_left,rgba(22,163,74,0.2)_0%,_transparent_70%)] rounded-br-xl ${styles.block_round}`}
			/>
			<h1 className='text-2xl mt-5'>
				Ваши задачи{' '}
				<span className={styles.title}>
					{boards}{' '}
					{boards === 1
						? 'доска'
						: boards >= 2 && boards <= 4
						? 'доски'
						: 'досок'}
				</span>
			</h1>
			<div className='w-1/2 bg-gradient-to-r from-zinc-500 to-transparent h-[2px] rounded-2xl my-1' />
			<p className={styles.title}>
				Удобные ToDo доски с форматированием и возможностью отслеживания
				прогресса ваших задач.
			</p>

			<div className='mt-auto pt-4 flex flex-row items-center justify-between'>
				<div>
					<h1 className={styles.title}>Последнее изменение:</h1>
					<p className={styles.paragraph}>{formatDate(updateDate)}</p>
				</div>
				<div className='pointer-events-none'>
					<button className='bg-green-700/20 py-3 px-8 rounded-2xl select-none'>
						Перейти
					</button>
				</div>
			</div>
		</div>
	)
}
