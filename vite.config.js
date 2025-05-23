import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'f625-2409-40c1-2014-9db8-58e3-ed6d-a0a1-f7ca.ngrok-free.app'
    ]
  }
})