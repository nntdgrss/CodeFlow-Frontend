'use client'

import Modal from './modal'

interface ConfirmationModalProps {
	isOpen: boolean
	onClose: () => void
	onConfirm: () => void
	title?: string
	message?: string
	confirmText?: string
	cancelText?: string
}

export default function ConfirmationModal({
	isOpen,
	onClose,
	onConfirm,
	title = 'Подтверждение',
	message = 'Вы уверены, что хотите выполнить это действие?',
	confirmText = 'Подтвердить',
	cancelText = 'Отмена',
}: ConfirmationModalProps) {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className='flex flex-col gap-4'>
				<h2 className='text-xl font-medium text-zinc-100'>{title}</h2>
				<p className='text-gray-300'>{message}</p>
				<div className='flex justify-end gap-3 mt-2'>
					<button
						onClick={onClose}
						className='px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors duration-200'
					>
						{cancelText}
					</button>
					<button
						onClick={() => {
							onConfirm()
							onClose()
						}}
						className='px-4 py-2 text-sm text-red-300 hover:bg-red-500/20 hover:text-red-200 transition-colors duration-200 rounded'
					>
						{confirmText}
					</button>
				</div>
			</div>
		</Modal>
	)
}
