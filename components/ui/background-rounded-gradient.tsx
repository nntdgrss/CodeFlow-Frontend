'use client'

export default function BackgroundRoundedGradient() {
	return (
		<>
			<div className='fixed bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(22,163,74,0.2)_0%,_transparent_70%)]' />
			<div className='fixed bottom-0 right-0 translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(22,163,74,0.2)_0%,_transparent_70%)]' />
		</>
	)
}
