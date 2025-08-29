import { defineConfig } from "vite";

// Configuração mínima do Vite para servir arquivos HTML estáticos
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        servicos: 'servicos.html',
        portfolio: 'portfolio.html',
        sobre: 'sobre.html',
        contato: 'contato.html'
      }
    }
  },
  base: './'
});