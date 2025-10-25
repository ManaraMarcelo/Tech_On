import express from "express";
import pageRoutes from "./routes/pageRoutes.js"; // Importa nossas rotas
import sequelize from "./config/database.js";
import Project from "./models/Project.js"; // Importa o model (para sincronizar)

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs"); 
app.use(express.static("public")); 
// Middleware para o formulário de contato funcionar (precisa vir antes das rotas)
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); // Para processar JSON, se necessário

// Usar as rotas definidas em pageRoutes.js
app.use("/", pageRoutes); 

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados estabelecida com sucesso.");

    // Sincroniza os models com o banco (cria a tabela se não existir)
    // force: true -> apaga e recria a tabela (use com cuidado!)
    // alter: true -> tenta alterar a tabela existente para corresponder ao model
    await sequelize.sync({ alter: true }); 
    console.log("Modelos sincronizados com o banco de dados.");

    app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
    });
  } catch (err) {
    console.error("Não foi possível conectar ou sincronizar o banco de dados:", err);
  }
};

startServer();