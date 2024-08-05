import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: 'https://dev.smarthome-team.store', // Це ім'я хоста, яке може бути 'localhost' або IP-адреса
  //   // port: 3000, // Це порт, на якому буде запущено сервер
  // },
});
