import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import ViteComponents from 'vite-plugin-components'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    WindiCSS(),
    ViteComponents({
      globalComponentsDeclaration: true,
    }),
  ]
})
