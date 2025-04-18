// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Important for autocomplete to work
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
export default config