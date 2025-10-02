import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isVercel = !!process.env.VERCEL;

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
  },
  server: {
    port: 3000,
  },
  base: isVercel ? '/' : '/forno/',
});
