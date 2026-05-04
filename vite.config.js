import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub project pages (https://<user>.github.io/<repo>/), set VITE_BASE_PATH=/<repo>/
// For a custom domain or user site root, use VITE_BASE_PATH=/ or omit.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH ?? '/',
})
