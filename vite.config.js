import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/reactjs-portfolio-happy-codes/',
  plugins: [react()],
});
