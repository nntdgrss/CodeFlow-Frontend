'use client'

import { cn } from '@/lib/utils'
import React from 'react'

interface SpinnerProps {
	className?: string
	children?: React.ReactNode
}

export const Spinner = ({ className, children }: SpinnerProps) => {
	return (
		<>
			<div
				className={cn(
					'w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin',
					className
				)}
			/>
			{children}
		</>
	)
}
