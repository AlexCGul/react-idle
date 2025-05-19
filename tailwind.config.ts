// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{html,js,jsx}", // Important for autocomplete to work
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {

    },
  },
  plugins: [],
}
export default config

//     
