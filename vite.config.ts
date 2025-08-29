import { defineConfig } from 'vite';

// Minimal Vite config to allow the preview to run while keeping your site pure HTML/CSS
export default defineConfig({
  root: '.',
  appType: 'mpa',
  server: { host: true },
  build: { outDir: 'dist', emptyOutDir: true },
});

