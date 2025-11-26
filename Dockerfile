# Etapa 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Gera a pasta dist
RUN npm run build

# --------------------------------------------------------

# Etapa 2: Produção
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

# Copia o código compilado
COPY --from=builder /app/dist ./dist

# Copia as pastas estáticas e de views
COPY --from=builder /app/views ./views
COPY --from=builder /app/public ./public

# --- CORREÇÃO AQUI: Copia a pasta de configuração ---
COPY --from=builder /app/config ./config

# Copia o arquivo .env
COPY .env .

EXPOSE 3000

CMD ["npm", "start"]