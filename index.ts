import 'dotenv/config';
import express, { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

import sequelize from "./config/database.js";
import pageRoutes from "./routes/pageRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import Usuario from "./models/Usuario.js";
import Mensagem from "./models/Mensagem.js";

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs"); 
app.use(express.static("public")); 
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
app.use(cookieParser());

// --- Middleware de Autenticação ---
const verificarUsuario = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.authToken;
  
  // Inicializa user como null
  (req as any).user = null;

  if (token && process.env.JWT_SECRET) {
    try {
      const decodedUser = jwt.verify(token, process.env.JWT_SECRET);
      (req as any).user = decodedUser; 
    } catch (err) {
      (req as any).user = null;
    }
  }
  next();
};

app.use(verificarUsuario);

app.use("/", pageRoutes); 
app.use("/", authRoutes); 

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados estabelecida.");
    
    // Sincroniza os models
    await sequelize.sync({ alter: true }); 
    console.log("Todos os modelos foram sincronizados.");

    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Erro ao conectar/sincronizar banco de dados:", err);
  }
};

startServer();