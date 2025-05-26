import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy any request starting with /api to your backend PHP server
      '/api': {
        target: 'http://localhost/Neon/backend/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // remove "/api" prefix before forwarding
      },
    },
  },
});
