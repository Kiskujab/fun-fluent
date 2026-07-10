import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages serves this project site under /fun-fluent/. Keep dev at / so the
// local preview and asset paths stay clean; only the production build is prefixed.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/fun-fluent/' : '/',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'react-vendor';
        },
      },
    },
  },
}));
