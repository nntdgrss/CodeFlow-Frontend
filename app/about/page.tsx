'use client'

export default function Page() {
	return (
		<div className='relative w-full min-h-screen overflow-x-hidden pt-24 md:pt-32'>
			{/* Градиенты */}
			<div className='fixed top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-[radial-gradient(circle_at_center,rgba(22,163,74,0.3)_0%,_transparent_70%)]' />
			<div className='fixed bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-[radial-gradient(circle_at_center,rgba(22,163,74,0.3)_0%,_transparent_70%)]' />

			{/* Hero секция */}
			<section className='py-16 text-center'>
				<h1 className='text-4xl md:text-5xl font-bold text-white mb-6 px-4'>
					О платформе <span className='text-green-400'>CodeFlow</span>
				</h1>
				<p className='text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto px-4'>
					Мы создаем будущее планирования разработки, объединяя опыт
					профессионалов с возможностями искусственного интеллекта
				</p>
			</section>

			{/* Миссия */}
			<section className='py-16 bg-zinc-800/20 backdrop-blur-xl'>
				<div className='max-w-6xl mx-auto px-4'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center'>
						<div>
							<h2 className='text-2xl md:text-3xl font-bold text-white mb-6'>
								Наша миссия
							</h2>
							<p className='text-gray-300 mb-4'>
								Помогать разработчикам и командам создавать качественные
								проекты, предоставляя современные инструменты для планирования и
								управления разработкой.
							</p>
							<p className='text-gray-300'>
								Мы верим, что правильное планирование - это ключ к успешной
								реализации любого проекта, и стремимся сделать этот процесс
								максимально эффективным.
							</p>
						</div>
						<div className='flex justify-center'>
							<div className='w-64 h-64 bg-green-400/20 rounded-full flex items-center justify-center'>
								<span className='text-6xl'>🚀</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Технологии */}
			<section className='py-16'>
				<div className='max-w-6xl mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center text-white mb-12'>
						Технологии
					</h2>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8'>
						<div className='bg-zinc-800/30 p-6 rounded-xl text-center backdrop-blur-xl'>
							<div className='text-4xl mb-4'>🤖</div>
							<h3 className='text-xl font-semibold text-white mb-2'>ИИ</h3>
							<p className='text-gray-300'>Умные рекомендации</p>
						</div>
						<div className='bg-zinc-800/30 p-6 rounded-xl text-center backdrop-blur-xl'>
							<div className='text-4xl mb-4'>⚡</div>
							<h3 className='text-xl font-semibold text-white mb-2'>Next.js</h3>
							<p className='text-gray-300'>Современный фреймворк</p>
						</div>
						<div className='bg-zinc-800/30 p-6 rounded-xl text-center backdrop-blur-xl'>
							<div className='text-4xl mb-4'>🎨</div>
							<h3 className='text-xl font-semibold text-white mb-2'>
								TailwindCSS
							</h3>
							<p className='text-gray-300'>Стильный дизайн</p>
						</div>
						<div className='bg-zinc-800/30 p-6 rounded-xl text-center backdrop-blur-xl'>
							<div className='text-4xl mb-4'>🔒</div>
							<h3 className='text-xl font-semibold text-white mb-2'>
								Безопасность
							</h3>
							<p className='text-gray-300'>Защита данных</p>
						</div>
					</div>
				</div>
			</section>

			{/* Команда */}
			<section className='py-16 bg-zinc-800/20 backdrop-blur-xl'>
				<div className='max-w-6xl mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center text-white mb-12'>
						Наша команда
					</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 px-4'>
						<div className='text-center'>
							<div className='w-32 h-32 bg-green-400/20 rounded-full mx-auto mb-4 flex items-center justify-center'>
								<span className='text-4xl'>👨‍💻</span>
							</div>
							<h3 className='text-xl font-semibold text-white mb-2'>
								Александр Петров
							</h3>
							<p className='text-gray-300'>CEO & Founder</p>
						</div>
						<div className='text-center'>
							<div className='w-32 h-32 bg-green-400/20 rounded-full mx-auto mb-4 flex items-center justify-center'>
								<span className='text-4xl'>👩‍💻</span>
							</div>
							<h3 className='text-xl font-semibold text-white mb-2'>
								Елена Соколова
							</h3>
							<p className='text-gray-300'>Lead Developer</p>
						</div>
						<div className='text-center'>
							<div className='w-32 h-32 bg-green-400/20 rounded-full mx-auto mb-4 flex items-center justify-center'>
								<span className='text-4xl'>🧑‍💻</span>
							</div>
							<h3 className='text-xl font-semibold text-white mb-2'>
								Михаил Волков
							</h3>
							<p className='text-gray-300'>AI Engineer</p>
						</div>
					</div>
				</div>
			</section>

			{/* Контакты */}
			<section className='py-16'>
				<div className='max-w-4xl mx-auto px-4 text-center'>
					<h2 className='text-3xl font-bold text-white mb-12'>
						Свяжитесь с нами
					</h2>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 px-4'>
						<div>
							<div className='text-4xl mb-4'>📧</div>
							<h3 className='text-xl font-semibold text-white mb-2'>Email</h3>
							<p className='text-gray-300'>info@codeflow.dev</p>
						</div>
						<div>
							<div className='text-4xl mb-4'>🌍</div>
							<h3 className='text-xl font-semibold text-white mb-2'>Адрес</h3>
							<p className='text-gray-300'>Москва, Россия</p>
						</div>
						<div>
							<div className='text-4xl mb-4'>💬</div>
							<h3 className='text-xl font-semibold text-white mb-2'>
								Telegram
							</h3>
							<p className='text-gray-300'>@codeflow_support</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
