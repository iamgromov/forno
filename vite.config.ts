import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const getBase = (): string => {
  if (process.env.VERCEL) return '/';
  if (process.env.NODE_ENV === 'production') return '/forno';
  return '/';
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: '/src/app',
      assets: '/src/assets',
      pages: '/src/pages',
      scss: '/src/scss',
      shared: '/src/shared',
    },
  },

  build: {
    outDir: 'dist',
    manifest: true,
  },
  server: {
    port: 3000,
    open: true,
  },
  base: getBase(),
});
