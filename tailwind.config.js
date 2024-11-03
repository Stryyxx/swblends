/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				// accent: "#7692FF", DARK BLUE
				// accent: "#28AFB0", BLUEISH GREEN
				accent: "#EB5E55", // RED
			},
		},
	},
	plugins: [],
};
