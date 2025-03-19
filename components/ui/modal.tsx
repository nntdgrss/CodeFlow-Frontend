'use client'

import { useEffect, useRef } from 'react'

interface ModalProps {
	isOpen: boolean
	onClose: () => void
	children: React.ReactNode
	className?: string
}

export default function Modal({
	isOpen,
	onClose,
	children,
	className = '',
}: ModalProps) {
	const modalRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose()
		}

		if (isOpen) {
			document.addEventListener('keydown', handleEscape)
			document.body.style.overflow = 'hidden'
		}

		return () => {
			document.removeEventListener('keydown', handleEscape)
			document.body.style.overflow = 'unset'
		}
	}, [isOpen, onClose])

	if (!isOpen) return null

	return (
		<div className='fixed inset-0 z-50'>
			{/* Backdrop */}
			<div
				className='absolute inset-0 bg-black/30 backdrop-blur-sm'
				onClick={onClose}
			/>

			{/* Modal */}
			<div className='absolute inset-0 flex items-center justify-center p-4'>
				<div
					ref={modalRef}
					className={`bg-zinc-800/30 backdrop-blur-xl rounded-xl border-zinc-500/10 border border-solid overflow-hidden p-6 max-w-md w-full transform transition-all duration-200 ${className}`}
					onClick={e => e.stopPropagation()}
				>
					{children}
				</div>
			</div>
		</div>
	)
}
