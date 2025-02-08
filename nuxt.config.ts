import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: false },
	css: ['/assets/css/main.css'],
	modules: ['@nuxtjs/i18n', '@nuxt/content', '@nuxt/icon'],
	app: {
		head: {
			link: [
				{
					rel: 'stylesheet',
					href: 'https://cdn.jsdelivr.net/gh/jpswalsh/academicons@1/css/academicons.min.css',
				},
			],
		},
	},
	i18n: {
		vueI18n: './i18n.config.ts',
		locales: ['es', 'en'],
		defaultLocale: 'es',
		strategy: 'prefix',
	},
	vite: {
		plugins: [tailwindcss()],
	},
	content: {
		highlight: {
			theme: {
				default: 'github-light',
				dark: 'github-dark',
			},
			langs: ['python', 'js', 'md', 'yaml'],
			lineNumbers: true
		},
	},
	// tailwindcss: {
	//   config: {
	//     content: [
	//       "./pages/**/*.{vue,html,js}",
	//       "./components/**/*.{vue,html,js}",
	//     ],
	//     theme: {
	//     }
	//   },
	// },
});
