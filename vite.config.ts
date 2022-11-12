import react from "@vitejs/plugin-react"
import { fileURLToPath, URL } from "node:url"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@u": fileURLToPath(new URL("./src/utils", import.meta.url)),
      "@p": fileURLToPath(new URL("./src/pages", import.meta.url)),
      "@c": fileURLToPath(new URL("./src/components", import.meta.url)),
      "@ctx": fileURLToPath(new URL("./src/context", import.meta.url)),
    }
  }
})
