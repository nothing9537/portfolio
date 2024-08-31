import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig()
export default () => {
  return defineConfig({
    plugins: [react()],
    publicDir: './public',
    envDir: '.',
    resolve: {
      alias: [
        {
          find: '@',
          replacement: '/src',
        },
      ],
    },
  })
}
