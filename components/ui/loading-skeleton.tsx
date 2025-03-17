import { cn } from '@/lib/utils'

interface LoadingSkeletonProps {
	className?: string
	variant?: 'text' | 'button' | 'image'
	glowColor?: string
}

export default function LoadingSkeleton({
	className,
	variant = 'text',
	glowColor = 'rgba(22, 163, 74, 0.2)', // зеленый цвет для соответствия теме, с прозрачностью
}: LoadingSkeletonProps) {
	const baseStyles = 'relative overflow-hidden rounded-xl'

	const variantStyles = {
		text: 'h-6',
		button: 'h-10',
		image: 'h-32 w-32',
	}

	return (
		<div
			className={cn(
				baseStyles,
				variantStyles[variant],
				'relative overflow-hidden',
				'bg-[linear-gradient(110deg,#1c1c1c,#22c55e15,#1c1c1c)]',
				'bg-[length:200%_100%]',
				'animate-[shimmer_2s_ease-in-out_infinite]',
				className
			)}
		/>
	)
}
