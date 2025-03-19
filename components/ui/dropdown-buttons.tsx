'use client'

import { useEffect, useRef } from 'react'

type ButtonColor =
	| 'default'
	| 'red'
	| 'green'
	| 'yellow'
	| 'blue'
	| 'purple'
	| 'orange'

const buttonColors: Record<ButtonColor, string> = {
	default: 'hover:bg-zinc-700/30 hover:text-white',
	red: 'hover:bg-red-500/20 hover:text-red-300',
	green: 'hover:bg-emerald-500/20 hover:text-emerald-300',
	yellow: 'hover:bg-amber-500/20 hover:text-amber-300',
	blue: 'hover:bg-blue-500/20 hover:text-blue-300',
	purple: 'hover:bg-purple-500/20 hover:text-purple-300',
	orange: 'hover:bg-orange-500/20 hover:text-orange-300',
}

interface DropdownButtonsProps {
	isOpen: boolean
	onClose: () => void
	items: Array<{
		label: string
		onClick: () => void
		color?: ButtonColor
	}>
	className?: string
}

export default function DropdownButtons({
	isOpen,
	onClose,
	items,
	className = '',
}: DropdownButtonsProps) {
	const dropdownRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				onClose()
			}
		}

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside)
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [isOpen, onClose])

	if (!isOpen) return null

	return (
		<div
			ref={dropdownRef}
			className={`absolute min-w-[160px] bg-zinc-800/30 backdrop-blur-xl rounded-xl border-zinc-500/10 border border-solid overflow-hidden left-1/2 -translate-x-1/2 ${className}`}
		>
			{items.map((item, index) => (
				<button
					key={index}
					onClick={() => {
						item.onClick()
						onClose()
					}}
					className={`w-full px-4 py-2 text-sm text-gray-300 transition-colors duration-200 text-left ${
						buttonColors[item.color || 'default']
					}`}
				>
					{item.label}
				</button>
			))}
		</div>
	)
}
