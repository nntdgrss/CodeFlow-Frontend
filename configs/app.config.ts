export const AppConfig = {
	site_name: 'Codeflow',
	title: 'Codeflow',
	description: 'A platform for faster planing tasks with AI.',
	locale: 'ru',
	routes: [
		{
			name: 'Главная',
			href: '/',
		},
		{
			name: 'О нас',
			href: '/about',
		},
		{
			name: 'Начать',
			href: '/login',
		},
	],
	links: {
		github: '',
		telegram: '',
		sponsor: '',
	},
} as const
