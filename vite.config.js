import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Đường dẫn tương đối để deploy được lên cả
  // http://<user>.github.io/<repo>/ mà không cần sửa code
  base: './',
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    open: true,
  },
})
