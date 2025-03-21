export default function Terms() {
	return (
		<div className='max-h-96 overflow-y-auto p-6 bg-zinc-800/50 rounded-lg text-gray-300 backdrop-blur-xl'>
			<h2 className='text-2xl font-bold text-white mb-6'>
				Пользовательское соглашение
			</h2>

			<section className='mb-8'>
				<h3 className='text-xl font-semibold text-white mb-4'>
					1. Общие положения
				</h3>
				<p className='mb-4'>
					1.1. Настоящее Пользовательское соглашение регулирует отношения между
					CodeFlow (далее — «Сервис») и пользователем сервиса (далее —
					«Пользователь»).
				</p>
				<p className='mb-4'>
					1.2. Используя Сервис, Пользователь подтверждает, что принимает
					условия настоящего Соглашения, а также Политики конфиденциальности
					Сервиса.
				</p>
			</section>

			<section className='mb-8'>
				<h3 className='text-xl font-semibold text-white mb-4'>
					2. Условия использования
				</h3>
				<p className='mb-4'>
					2.1. Сервис предоставляет Пользователю возможность использования
					своего функционала на условиях настоящего Соглашения.
				</p>
				<p className='mb-4'>
					2.2. Пользователь обязуется предоставлять достоверную информацию при
					регистрации и использовании Сервиса.
				</p>
				<p className='mb-4'>
					2.3. Пользователь обязуется не передавать свои учетные данные третьим
					лицам.
				</p>
			</section>

			<section className='mb-8'>
				<h3 className='text-xl font-semibold text-white mb-4'>
					3. Политика конфиденциальности
				</h3>
				<p className='mb-4'>
					3.1. Сервис обязуется не разглашать персональные данные, полученные от
					Пользователя.
				</p>
				<p className='mb-4'>
					3.2. Обработка персональных данных Пользователя осуществляется в
					соответствии с законодательством РФ.
				</p>
			</section>

			<section className='mb-8'>
				<h3 className='text-xl font-semibold text-white mb-4'>
					4. Правила поведения
				</h3>
				<p className='mb-4'>
					4.1. При использовании Сервиса Пользователь обязуется:
				</p>
				<ul className='list-disc pl-6 mb-4 space-y-2'>
					<li>Соблюдать законодательство РФ</li>
					<li>Не нарушать права других пользователей</li>
					<li>Не использовать Сервис для распространения спама</li>
					<li>Не пытаться получить несанкционированный доступ к Сервису</li>
				</ul>
			</section>

			<section className='mb-8'>
				<h3 className='text-xl font-semibold text-white mb-4'>
					5. Ответственность сторон
				</h3>
				<p className='mb-4'>5.1. Сервис не несет ответственности за:</p>
				<ul className='list-disc pl-6 mb-4 space-y-2'>
					<li>Действия третьих лиц</li>
					<li>Временную неработоспособность Сервиса</li>
					<li>
						Утерю пользовательских данных по независящим от Сервиса причинам
					</li>
				</ul>
				<p className='mb-4'>
					5.2. Пользователь несет полную ответственность за:
				</p>
				<ul className='list-disc pl-6 mb-4 space-y-2'>
					<li>Сохранность своих учетных данных</li>
					<li>Достоверность предоставляемой информации</li>
					<li>Свои действия при использовании Сервиса</li>
				</ul>
			</section>

			<section>
				<p className='text-sm text-gray-400'>
					Используя Сервис, вы подтверждаете, что прочитали и согласны с
					условиями данного Пользовательского соглашения.
				</p>
			</section>
		</div>
	)
}
