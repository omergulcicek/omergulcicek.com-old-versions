import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { ViteAliases } from "vite-aliases"
import mdPlugin from "vite-plugin-markdown"
import svgr from "@honkhonk/vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ViteAliases(), mdPlugin({ mode: "html" }), svgr()],
})
