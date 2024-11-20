import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation"
import ElementPlus from 'unplugin-element-plus/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ElementPlus(),
    vue(),
    federation({
      name: 'host',
      remotes: {
        "administration": "http://localhost:5002/assets/remoteEntry.js",
        "order": "http://localhost:5001/assets/remoteEntry.js",
        "host": "http://localhost:5000/assets/remoteEntry.js",
      },
      exposes: {
        './store': './src/store',
      },
      shared: ['vue','pinia']
  })
  ],
  build:{
    minify:false,
    target: ["chrome89", "edge89", "firefox89", "safari15"]
  }
})
