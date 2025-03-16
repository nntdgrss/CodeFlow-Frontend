'use client'

import { cn } from '@/lib/utils'

interface SpinnerProps {
	className?: string
}

export const Spinner = ({ className }: SpinnerProps) => {
	return (
		<div
			className={cn(
				'w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin',
				className
			)}
		/>
	)
}
