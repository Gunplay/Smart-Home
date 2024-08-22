import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  base: '/', // Базовый URL для вашего приложения
  publicDir: 'public', // Директория со статическими файлами
  build: {
    outDir: 'dist', // Директория для сборки
    assetsDir: 'assets', // Директория для статических файлов
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
});
