/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

export default {
	content: [
		'./index.html',
		'./src/**/*.{js, ts, jsx, tsx}',
		'./src/components/Header/index.tsx',
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
