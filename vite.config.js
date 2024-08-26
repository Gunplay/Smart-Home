import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  build: {
    outDir: 'dist',
    smartHome: '../SMART-HOME',
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
});
