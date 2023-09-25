/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#171717',
				secondary: '#14BB00',
			},
			fontFamily: {
				Handjet: ['Handjet', 'cursive'],
				Montserrat: ['Montserrat', 'sans-serif'],
				Josefin:['Josefin Sans','sans-serif']
			},
		},
	},
	plugins: [],
};
