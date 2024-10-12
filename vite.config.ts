import { defineConfig, loadEnv } from 'vite'
import { fileURLToPath, URL } from "url";
import react from '@vitejs/plugin-react'

export default defineConfig(({mode}) => {
  
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    define: {
      'process.env': env,
    }
  }
})
