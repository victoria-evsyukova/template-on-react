import react from '@vitejs/plugin-react'

///<reference types='vitest' />
import { defineConfig } from 'vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: ' /template-on-react',
  test: {
    globals: true,
    environment: 'jsdom',
  }

})
