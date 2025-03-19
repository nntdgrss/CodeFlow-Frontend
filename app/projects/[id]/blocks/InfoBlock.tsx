'use client'

import ConfirmationModal from '@/components/ui/confirmation-modal'
import DropdownButtons from '@/components/ui/dropdown-buttons'
import LoadingSkeleton from '@/components/ui/loading-skeleton'
import { useBackend } from '@/hooks/useBackend'
import { Settings } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'sonner'
import styles from '../styles/info-block.module.scss'

type InfoBlockProps = {
	name: string | undefined
	description: string | undefined
	createdAt: string | undefined
	updatedAt: string | undefined
	projectId: string
}

export default function InfoBlock({
	name,
	description,
	createdAt,
	updatedAt,
	projectId,
}: InfoBlockProps) {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
	const backend = useBackend()
	const router = useRouter()

	const handleDelete = async () => {
		try {
			const [result, error] = await backend.delete(
				`/projects/delete/${projectId}`
			)

			if (error) {
				console.error('Ошибка при удалении проекта:', error)
				toast.error('Произошла ошибка при удалении проекта')
				return
			}

			toast.success('Проект успешно удален')
			setIsDeleteModalOpen(false)
			router.push('/projects')
		} catch (err) {
			console.error('Ошибка при удалении проекта:', err)
			toast.error('Произошла ошибка при удалении проекта')
		}
	}
	const formatDate = (dateString: string): string => {
		const date = new Date(dateString)
		const day = date.getDate().toString().padStart(2, '0')
		const month = (date.getMonth() + 1).toString().padStart(2, '0')
		const year = date.getFullYear()

		return `${day}.${month}.${year}`
	}

	const formattedCreatedAt = formatDate(createdAt || '')
	const formattedUpdatedAt = formatDate(updatedAt || '')

	return (
		<>
			<div className='bg-zinc-800/30 backdrop-blur-xl rounded-xl duration-500 border-zinc-500/10 border border-solid hover:border-zinc-500/50 p-4 h-[32rem] flex flex-col'>
				<div className='fixed top-5 right-5 flex flex-col items-center'>
					<Settings
						size={20}
						className='text-gray-400 cursor-pointer hover:text-gray-200 transition-colors'
						onClick={() => setIsDropdownOpen(!isDropdownOpen)}
					/>
					<DropdownButtons
						isOpen={isDropdownOpen}
						onClose={() => setIsDropdownOpen(false)}
						className='mt-6'
						items={[
							{
								label: 'Изменить',
								onClick: () => {
									// Здесь будет логика редактирования
									console.log('Edit clicked')
								},
								color: 'green',
							},
							{
								label: 'Удалить',
								onClick: () => setIsDeleteModalOpen(true),
								color: 'red',
							},
						]}
					/>
				</div>
				<div
					className={`absolute top-0 left-0 w-48 h-48 group-hover:size-55 transition-all duration-500 bg-[radial-gradient(circle_at_top_left,rgba(22,163,74,0.2)_0%,_transparent_70%)] rounded-br-xl ${styles.block_round}`}
				/>
				<p className={styles.title}>проект:</p>
				{name !== null ? (
					<h1 className='text-xl text-zinc-100 font-medium'>{name}</h1>
				) : (
					<LoadingSkeleton className='w-full h-4' />
				)}

				<p className={styles.title}>описание:</p>
				<div className={styles.description_scroll}>
					{description !== null ? (
						<p className={styles.paragraph}>{description}</p>
					) : (
						<LoadingSkeleton className='w-full h-4' />
					)}
				</div>

				<div className='mt-auto'>
					<p className={styles.title}>дата создания:</p>
					{createdAt !== null ? (
						<p className={styles.paragraph}>{formattedCreatedAt}</p>
					) : (
						<LoadingSkeleton className='w-full h-4' />
					)}
					<p className={styles.title}>последнее изменение:</p>
					{updatedAt !== null ? (
						<p className={styles.paragraph}>{formattedUpdatedAt}</p>
					) : (
						<LoadingSkeleton className='w-full h-4' />
					)}
				</div>
			</div>

			<ConfirmationModal
				isOpen={isDeleteModalOpen}
				onClose={() => setIsDeleteModalOpen(false)}
				onConfirm={handleDelete}
				title='Удаление проекта'
				message='Вы уверены, что хотите удалить этот проект? Это действие нельзя отменить.'
				confirmText='Удалить'
			/>
		</>
	)
}
