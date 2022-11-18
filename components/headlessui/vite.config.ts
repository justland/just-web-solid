import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import { resolve } from 'node:path'

const resolvePath = (path: string) => resolve(__dirname, path)

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'esm',
    sourcemap: true,
    minify: false,
    lib: {
      entry: resolvePath('ts/index.tsx'),
      fileName: 'just-headlessui',
      formats: ['es']
    },
    target: 'esnext',
  },
})
