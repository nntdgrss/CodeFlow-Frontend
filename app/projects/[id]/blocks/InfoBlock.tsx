'use client'

import styles from '../styles/info-block.module.scss'

export default function InfoBlock() {
	return (
		<>
			<div className='bg-zinc-800/30 backdrop-blur-xl rounded-xl duration-500 border-zinc-500/10 border border-solid hover:border-zinc-500/50 p-4 h-[32rem] flex flex-col'>
				<div
					className={`absolute top-0 left-0 w-48 h-48 group-hover:size-55 transition-all duration-500 bg-[radial-gradient(circle_at_top_left,rgba(22,163,74,0.2)_0%,_transparent_70%)] rounded-br-xl ${styles.block_round}`}
				/>
				<p className={styles.title}>проект:</p>
				<h1 className='text-xl text-zinc-100 font-medium'>Тестовый проект</h1>
				<p className={styles.title}>описание:</p>
				<div className={styles.description_scroll}>
					<p className={styles.paragraph}>
						Этот проект направлен на разработку инновационного веб-приложения,
						которое объединяет современные технологии и удобный пользовательский
						интерфейс. В рамках проекта будет реализована система управления
						задачами, интеграция с различными API и адаптивный дизайн для всех
						устройств. Мы стремимся создать продукт, который будет не только
						функциональным, но и удобным в использовании для конечных
						пользователей.
					</p>
				</div>

				<div className='mt-auto'>
					<p className={styles.title}>дата создания:</p>
					<p className={styles.paragraph}>24.03.2025</p>
					<p className={styles.title}>последнее изменение:</p>
					<p className={styles.paragraph}>24.03.2025</p>
				</div>
			</div>
		</>
	)
}
