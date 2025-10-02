import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isVercel = !!process.env.VERCEL;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    manifest: true,
  },
  server: {
    port: 3000,
    open: false,
  },
  base: isVercel ? '/' : '/forno/',
});
