'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
	const router = useRouter()

	return (
		<div className='relative w-full min-h-screen'>
			{/* Градиенты */}
			<div className='fixed top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(22,163,74,0.3)_0%,_transparent_70%)]' />
			<div className='fixed bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(22,163,74,0.3)_0%,_transparent_70%)]' />
			<div className='fixed bottom-0 right-0 translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(22,163,74,0.3)_0%,_transparent_70%)]' />

			{/* Hero секция */}
			<section className='pt-32 pb-16 text-center'>
				<h1 className='text-4xl md:text-5xl font-bold text-white mb-6'>
					Создавайте проекты <span className='text-green-400'>эффективнее</span>
				</h1>
				<p className='text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto px-4'>
					Платформа для разработчиков, где планирование проекта становится
					простым и удобным с помощью ИИ
				</p>
				<div className='flex flex-col sm:flex-row justify-center gap-4 px-4'>
					<button
						className='px-6 py-3 bg-green-400 text-black font-semibold rounded-lg hover:bg-green-500 transition cursor-pointer'
						onClick={() => router.push('/login')}
					>
						Начать бесплатно
					</button>
					<button
						className='px-6 py-3 border border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transition cursor-pointer'
						onClick={() => router.push('/about')}
					>
						Узнать больше
					</button>
				</div>
			</section>

			{/* Секция возможностей */}
			<section className='py-16'>
				<h2 className='text-3xl font-bold text-center text-white mb-12'>
					Возможности платформы
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4'>
					<div className='bg-zinc-800/50 p-6 rounded-xl backdrop-blur-xl hover:scale-105 transition'>
						<div className='text-green-400 text-4xl mb-4'>📝</div>
						<h3 className='text-xl font-semibold text-white mb-3'>
							Техническое задание
						</h3>
						<p className='text-gray-300'>
							Создавайте детальные ТЗ с помощью ИИ. Структурируйте требования и
							получайте рекомендации по улучшению.
						</p>
					</div>
					<div className='bg-zinc-800/50 p-6 rounded-xl backdrop-blur-xl hover:scale-105 transition'>
						<div className='text-green-400 text-4xl mb-4'>🎯</div>
						<h3 className='text-xl font-semibold text-white mb-3'>
							Планирование
						</h3>
						<p className='text-gray-300'>
							Разбивайте проект на задачи, оценивайте сроки и ресурсы. ИИ
							поможет оптимизировать процесс.
						</p>
					</div>
					<div className='bg-zinc-800/50 p-6 rounded-xl backdrop-blur-xl hover:scale-105 transition'>
						<div className='text-green-400 text-4xl mb-4'>📊</div>
						<h3 className='text-xl font-semibold text-white mb-3'>
							Канбан-доски
						</h3>
						<p className='text-gray-300'>
							Визуализируйте процесс разработки. Отслеживайте прогресс и
							управляйте задачами в реальном времени.
						</p>
					</div>
				</div>
			</section>

			{/* Процесс работы */}
			<section className='py-16 bg-zinc-800/30 backdrop-blur-xl'>
				<div className='max-w-6xl mx-auto px-4'>
					<h2 className='text-2xl md:text-3xl font-bold text-center text-white mb-8 md:mb-12 px-4'>
						Как это работает
					</h2>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 px-4'>
						<div className='text-center'>
							<div className='w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4'>
								<span className='text-green-400 text-xl font-bold'>1</span>
							</div>
							<h3 className='text-lg font-semibold text-white mb-2'>
								Регистрация
							</h3>
							<p className='text-gray-300'>Создайте аккаунт за пару кликов</p>
						</div>
						<div className='text-center'>
							<div className='w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4'>
								<span className='text-green-400 text-xl font-bold'>2</span>
							</div>
							<h3 className='text-lg font-semibold text-white mb-2'>
								Создание проекта
							</h3>
							<p className='text-gray-300'>Опишите ваш проект и его цели</p>
						</div>
						<div className='text-center'>
							<div className='w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4'>
								<span className='text-green-400 text-xl font-bold'>3</span>
							</div>
							<h3 className='text-lg font-semibold text-white mb-2'>
								ИИ-анализ
							</h3>
							<p className='text-gray-300'>Получите рекомендации и план</p>
						</div>
						<div className='text-center'>
							<div className='w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4'>
								<span className='text-green-400 text-xl font-bold'>4</span>
							</div>
							<h3 className='text-lg font-semibold text-white mb-2'>
								Разработка
							</h3>
							<p className='text-gray-300'>Следуйте плану и достигайте целей</p>
						</div>
					</div>
				</div>
			</section>

			{/* Секция преимуществ */}
			<section className='py-16 bg-zinc-800/20 backdrop-blur-xl'>
				<div className='max-w-6xl mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center text-white mb-12'>
						Почему выбирают CodeFlow
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
						<div className='text-center p-6'>
							<div className='text-4xl font-bold text-green-400 mb-2'>98%</div>
							<p className='text-gray-300'>Успешных проектов</p>
						</div>
						<div className='text-center p-6'>
							<div className='text-4xl font-bold text-green-400 mb-2'>2x</div>
							<p className='text-gray-300'>Быстрее разработка</p>
						</div>
						<div className='text-center p-6'>
							<div className='text-4xl font-bold text-green-400 mb-2'>5k+</div>
							<p className='text-gray-300'>Активных пользователей</p>
						</div>
						<div className='text-center p-6'>
							<div className='text-4xl font-bold text-green-400 mb-2'>24/7</div>
							<p className='text-gray-300'>Поддержка команды</p>
						</div>
					</div>
				</div>
			</section>

			{/* Секция отзывов */}
			<section className='py-16'>
				<h2 className='text-3xl font-bold text-center text-white mb-12'>
					Что говорят пользователи
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4'>
					<div className='bg-zinc-800/30 p-6 rounded-xl backdrop-blur-xl'>
						<p className='text-gray-300 mb-4'>
							"CodeFlow полностью изменил процесс планирования наших проектов.
							Теперь все структурировано и понятно каждому члену команды."
						</p>
						<div className='flex items-center'>
							<div className='w-10 h-10 rounded-full bg-green-400/20 flex items-center justify-center mr-3'>
								<span className='text-green-400'>АК</span>
							</div>
							<div>
								<div className='text-white font-semibold'>Алексей Корнеев</div>
								<div className='text-gray-400 text-sm'>
									Tech Lead, Startup Hub
								</div>
							</div>
						</div>
					</div>
					<div className='bg-zinc-800/30 p-6 rounded-xl backdrop-blur-xl'>
						<p className='text-gray-300 mb-4'>
							"Интеграция ИИ в процесс создания ТЗ - это именно то, чего не
							хватало в других инструментах. Рекомендации действительно
							полезные."
						</p>
						<div className='flex items-center'>
							<div className='w-10 h-10 rounded-full bg-green-400/20 flex items-center justify-center mr-3'>
								<span className='text-green-400'>МС</span>
							</div>
							<div>
								<div className='text-white font-semibold'>Мария Светлова</div>
								<div className='text-gray-400 text-sm'>
									Product Manager, TechCo
								</div>
							</div>
						</div>
					</div>
					<div className='bg-zinc-800/30 p-6 rounded-xl backdrop-blur-xl'>
						<p className='text-gray-300 mb-4'>
							"Канбан-доски с ИИ-рекомендациями помогли оптимизировать рабочий
							процесс. Производительность команды выросла в разы."
						</p>
						<div className='flex items-center'>
							<div className='w-10 h-10 rounded-full bg-green-400/20 flex items-center justify-center mr-3'>
								<span className='text-green-400'>ДВ</span>
							</div>
							<div>
								<div className='text-white font-semibold'>Дмитрий Волков</div>
								<div className='text-gray-400 text-sm'>CTO, DevPro</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ секция */}
			<section className='py-16 bg-zinc-800/20 backdrop-blur-xl'>
				<div className='max-w-4xl mx-auto px-4'>
					<h2 className='text-3xl font-bold text-center text-white mb-12'>
						Частые вопросы
					</h2>
					<div className='space-y-6'>
						<div className='bg-zinc-800/30 p-6 rounded-xl'>
							<h3 className='text-white font-semibold mb-2'>
								Как начать работу с CodeFlow?
							</h3>
							<p className='text-gray-300'>
								Просто зарегистрируйтесь, создайте проект и следуйте подсказкам
								ИИ. Весь процесс интуитивно понятен и не требует специальных
								знаний.
							</p>
						</div>
						<div className='bg-zinc-800/30 p-6 rounded-xl'>
							<h3 className='text-white font-semibold mb-2'>
								Можно ли использовать бесплатно?
							</h3>
							<p className='text-gray-300'>
								Да, у нас есть бесплатный тариф с базовым функционалом. Для
								доступа ко всем возможностям есть Pro-версия.
							</p>
						</div>
						<div className='bg-zinc-800/30 p-6 rounded-xl'>
							<h3 className='text-white font-semibold mb-2'>
								Как работает ИИ в планировании?
							</h3>
							<p className='text-gray-300'>
								ИИ анализирует ваш проект, предлагает оптимальную структуру
								задач, помогает с оценкой времени и ресурсов, дает рекомендации
								по улучшению.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Интеграции */}
			<section className='py-16'>
				<h2 className='text-3xl font-bold text-center text-white mb-12'>
					Интеграции
				</h2>
				<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto px-4'>
					<div className='bg-zinc-800/30 p-6 rounded-xl flex items-center justify-center'>
						<span className='text-4xl'>🔄</span>
					</div>
					<div className='bg-zinc-800/30 p-6 rounded-xl flex items-center justify-center'>
						<span className='text-4xl'>📊</span>
					</div>
					<div className='bg-zinc-800/30 p-6 rounded-xl flex items-center justify-center'>
						<span className='text-4xl'>💻</span>
					</div>
					<div className='bg-zinc-800/30 p-6 rounded-xl flex items-center justify-center'>
						<span className='text-4xl'>📱</span>
					</div>
				</div>
			</section>

			{/* CTA секция */}
			<section className='py-16 text-center'>
				<div className='max-w-3xl mx-auto px-4'>
					<h2 className='text-3xl md:text-4xl font-bold text-white mb-6 px-4'>
						Готовы начать свой проект?
					</h2>
					<p className='text-xl text-gray-300 mb-8'>
						Присоединяйтесь к сообществу разработчиков и создавайте amazing
						проекты
					</p>
					<button
						className='px-8 py-4 bg-green-400 text-black font-semibold rounded-lg hover:bg-green-500 transition text-lg cursor-pointer'
						onClick={() => router.push('/login')}
					>
						Начать бесплатно
					</button>
				</div>
			</section>
		</div>
	)
}
