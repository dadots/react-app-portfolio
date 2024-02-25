import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { compression } from 'vite-plugin-compression2';

export default defineConfig({
  plugins: [
    react(),
    compression(),
  ],
  build: {
    minify: 'terser', // Specify to use Terser for minification
    terserOptions: {
      compress: {
        drop_console: true, // Optional: Remove console.* functions from the code
        ecma: 2015,
        warnings: true,
      },
      mangle: {
        properties: {
          regex: /^_/,
        },
      },
    },

  },
  base: "/react-app-portfolio/"
});
