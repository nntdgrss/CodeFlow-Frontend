'use client'

import { ApiError, useBackend } from '@/hooks/useBackend'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import styles from './styles/page.module.scss'
import { ProjectResponse } from './types/create.types'

const validationSchema = z.object({
	name: z.string().min(3, 'Минимум 3 символа').max(50, 'Максимум 50 символов'),
	description: z.string().max(100, 'Максимум 100 символов'),
})

type CreateProjectForm = z.infer<typeof validationSchema>

export default function CreateProjectPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CreateProjectForm>({
		resolver: zodResolver(validationSchema),
	})
	const backend = useBackend()
	const [loading, setLoading] = useState(false)
	const router = useRouter()

	const onSubmit = async (formData: CreateProjectForm) => {
		try {
			setLoading(true)
			const [result, error] = await backend.post<ProjectResponse>(
				'/projects/create',
				{
					name: formData.name,
					description: formData.description,
				}
			)

			if (error === ApiError.SERVER_ERROR) {
				console.error('Ошибка сервера:', error)
				setLoading(false)
				return
			}

			if (!result) {
				console.error('Не удалось создать проект')
				setLoading(false)
				return
			}

			setLoading(false)
			toast.success('Проект успешно создан')
			console.log('Проект успешно создан:', result)
			router.push(`/projects/${result.project.id}`)
		} catch (error) {
			setLoading(false)
			console.error('Ошибка при создании проекта:', error)
		}
	}

	return (
		<div className='container max-w-4xl mx-auto px-4 py-12 flex flex-row items-start'>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<motion.h1
					className='text-2xl font-medium'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.5 }}
				>
					Создайте проект
				</motion.h1>
				<motion.p
					className={styles.title}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.5 }}
				>
					Вы можете создать новый проект и начать работу прямо сейчас!
				</motion.p>

				<motion.form
					className='flex flex-col items-start mt-8'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4, duration: 0.5 }}
					onSubmit={handleSubmit(onSubmit)}
				>
					<p className={styles.title}>Название проекта</p>
					<motion.input
						type='text'
						placeholder='Введите название проекта'
						className='w-96 my-2 px-4 py-2 bg-zinc-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400/60 transition-colors duration-300 shadow-lg'
						initial={{ x: -20, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.5, duration: 0.4 }}
						whileHover={{ scale: 1.02 }}
						whileFocus={{ scale: 1.02 }}
						{...register('name')}
					/>
					{errors.name && (
						<motion.p
							className='text-red-500 text-sm mt-1'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
						>
							{errors.name.message}
						</motion.p>
					)}
					<p className={styles.title}>Описание проекта (необязательно)</p>
					<motion.textarea
						rows={4}
						minLength={3}
						maxLength={100}
						style={{
							minHeight: '100px',
							maxHeight: '300px',
							resize: 'vertical',
						}}
						placeholder='Введите описание проекта'
						className='w-96 my-2 px-4 py-2 bg-zinc-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-400/60 transition-colors duration-300 shadow-lg'
						initial={{ x: -20, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ delay: 0.6, duration: 0.4 }}
						whileHover={{ scale: 1.02 }}
						whileFocus={{ scale: 1.02 }}
						{...register('description')}
					/>
					{errors.description && (
						<motion.p
							className='text-red-500 text-sm mt-1'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
						>
							{errors.description.message}
						</motion.p>
					)}
					{/* TODO: Создать выбор тегов и создание кастомных */}
					{/* TODO: Создать выбор картинки проекта */}
					<motion.button
						className='my-8 p-3 border border-solid border-green-400 hover:bg-green-400/50 hover:text-black transition-colors duration-300 cursor-pointer rounded-2xl'
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.7, duration: 0.4 }}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						type='submit'
					>
						Создать проект
					</motion.button>
				</motion.form>
			</motion.div>
			<motion.div
				className='ml-6 hidden md:flex flex-row items-start'
				initial={{ opacity: 0, x: 20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.3, duration: 0.5 }}
			>
				<motion.div
					className='h-100 w-[2px] bg-green-400/80 rounded-xl'
					initial={{ height: 0 }}
					animate={{ height: '100%' }}
					transition={{ delay: 0.8, duration: 0.8 }}
				/>
				<motion.div
					className='ml-6'
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.9, duration: 0.5 }}
				>
					<motion.h1
						className='text-xl font-medium'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1, duration: 0.5 }}
					>
						Вам доступны:
					</motion.h1>
					<motion.p
						className={styles.title}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1.1, duration: 0.5 }}
					>
						Ограничения зависят от вашего тарифа{' '}
						<span className='text-sm text-blue-500/70 underline underline-offset-4 cursor-pointer'>
							Подробнее
						</span>
					</motion.p>
					<ul className='mt-4 list-disc list-inside'>
						{[
							'Неограниченное количество досок',
							'До 5 участников в команде',
							'Полный доступ над проектом',
							'Доступ к канбан доскам',
							'Облачное хранение до 100Mb',
						].map((item, index) => (
							<motion.li
								key={index}
								className='text-white mb-2'
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{
									duration: 0.5,
									delay: index * 0.2,
									ease: [0.6, 0.05, 0.01, 0.9],
								}}
							>
								{item}
							</motion.li>
						))}
					</ul>
				</motion.div>
			</motion.div>
		</div>
	)
}
