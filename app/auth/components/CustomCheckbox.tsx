import React from 'react'

type CustomCheckboxProps = {
	id: string
	label: string | React.ReactNode
	register?: any
	name?: string
}

export default function CustomCheckbox({
	id,
	label,
	register,
	name,
}: CustomCheckboxProps) {
	return (
		<div className='relative flex items-center'>
			<input
				type='checkbox'
				id={id}
				{...(register && name ? register(name) : {})}
				className='peer appearance-none w-5 h-5 border-2 border-gray-500 rounded-sm bg-transparent checked:border-green-400 checked:bg-green-400 transition-all'
			/>
			<svg
				className='absolute w-5 h-5 pointer-events-none hidden peer-checked:block text-black'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 24 24'
				fill='none'
				stroke='currentColor'
				strokeWidth='3'
				strokeLinecap='round'
				strokeLinejoin='round'
			>
				<polyline points='20 6 9 17 4 12'></polyline>
			</svg>
			<label htmlFor={id} className='ml-2 text-gray-300 select-none'>
				{label}
			</label>
		</div>
	)
}
