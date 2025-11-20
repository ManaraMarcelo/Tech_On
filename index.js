import 'dotenv/config'; // Carrega o .env (DEVE SER A PRIMEIRA LINHA)
import express from "express";
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser'; // Importa o cookie-parser

import sequelize from "./config/database.js";
import pageRoutes from "./routes/pageRoutes.js";
import authRoutes from "./routes/authRoutes.js"; // Importa as rotas de auth

// Importar models para sincronização
import Project from "./models/Project.js";
import Usuario from "./models/Usuario.js";
import Mensagem from "./models/Mensagem.js";

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs"); 
app.use(express.static("public")); 
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
app.use(cookieParser()); // Usa o cookie-parser

// --- Middleware de Autenticação ---
// Este "porteiro" roda em TODAS as requisições
const verificarUsuario = (req, res, next) => {
  const token = req.cookies.authToken;
  if (token) {
    try {
      // Verifica o token usando a chave secreta
      const decodedUser = jwt.verify(token, process.env.JWT_SECRET);
      // Adiciona os dados do usuário à requisição
      req.user = decodedUser; 
    } catch (err) {
      // Token inválido (expirado, etc.)
      req.user = null;
    }
  } else {
    req.user = null;
  }
  next();
};

// Aplica o "porteiro" em TODAS as rotas
app.use(verificarUsuario);

// Nossas rotas de páginas (Home, Serviços, etc.)
app.use("/", pageRoutes); 
// Nossas rotas de autenticação (Login, Registrar, Logout)
app.use("/", authRoutes); 

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados estabelecida.");

    // Sincroniza TODOS os models
    await sequelize.sync({ alter: true }); 
    console.log("Todos os modelos (Project, Usuario, Mensagem) foram sincronizados.");

    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Erro ao conectar/sincronizar banco de dados:", err);
  }
};

startServer();