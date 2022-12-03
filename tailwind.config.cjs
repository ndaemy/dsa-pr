/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {
      spacing: {
        '116': "28rem",
        '128': '32rem',
        '144': '36rem',
      },
      transitionProperty: {
        'height': 'height',
      },
    },
    fontFamily: {
      default: ["Pretendard", "Tossface", "sans-serif"],
    },
	},
	plugins: [],
}
