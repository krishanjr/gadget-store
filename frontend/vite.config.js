import path from "path"
import tailwindcss from '@tailwindcss/vite'
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    exclude: ["gadget-store"], // 👈 exclude local dependency from pre-bundling
  },
  build: {
    rollupOptions: {
      external: ["gadget-store"], // 👈 avoid bundling it entirely (especially for preview/build)
    },
  },
})
