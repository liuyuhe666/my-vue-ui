import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      external: ['vue'],
    },
  },
  plugins: [
    vue(),
    dts({ insertTypesEntry: true, copyDtsFiles: false }),
  ],
})
