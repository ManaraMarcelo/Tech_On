import Mensagem from '../models/Mensagem.js';

// Função para renderizar a página inicial
export const renderIndexPage = (req, res) => {
  res.render('index', { 
    title: 'Início', 
    activePage: 'inicio',
    user: req.user
  });
};

// Função para renderizar a página de serviços
export const renderServicosPage = (req, res) => {
  res.render('servicos', { 
    title: 'Serviços', 
    activePage: 'servicos',
    user: req.user
  });
};

// Função para renderizar a página de portfólio
export const renderPortfolioPage = (req, res) => {
  // Aqui, futuramente, poderíamos buscar os projetos do banco:
  // const projects = await Project.findAll();
  // res.render('portfolio', { title: 'Portfólio', activePage: 'portfolio', projects: projects });
  res.render('portfolio', { 
    title: 'Portfólio', 
    activePage: 'portfolio',
    user: req.user
  });
};

// Função para renderizar a página sobre nós
export const renderSobrePage = (req, res) => {
  res.render('sobre', { 
    title: 'Sobre Nós', 
    activePage: 'sobre',
    user: req.user
  });
};

// Função para renderizar a página de contato
export const renderContatoPage = (req, res) => {
  // Checa se há um erro na URL (vindo do try...catch)
  const erroEnvio = req.query.error 
    ? "Erro ao enviar sua mensagem. Tente novamente." 
    : null;

  res.render('contato', { 
    title: 'Contato', 
    activePage: 'contato', 
    user: req.user,
    error: erroEnvio // Passa o erro (ou null) para o EJS
  });
};

// Processa o formulário de contato
export const processarFormContato = async (req, res) => {
  try {
    // Pega os dados que vieram do formulário (req.body)
    const { nome, email, telefone, cpf, servico, mensagem } = req.body;

    // Salva os dados no banco de dados criando uma nova Mensagem
    await Mensagem.create({
      nome,
      email,
      telefone,
      cpf,
      servicoInteresse: servico,
      mensagem
    });

    // Redireciona de volta para a pág de contato com status de sucesso
    res.redirect('/contato?status=sucesso');

  } catch (error) {
    // Se der erro ao salvar no banco
    console.error("Erro ao salvar mensagem:", error);

    // Renderiza a página de contato novamente, mas desta vez passando uma msg de erro
    res.render('contato', { 
      title: 'Contato', 
      activePage: 'contato', 
      user: req.user,
      error: "Erro ao enviar sua mensagem. Tente novamente." 
    });
  }
};

// Lista todas as mensagens recebidas (para a página /admin/mensagens)
export const listarMensagens = async (req, res) => {
  try {
    const mensagens = await Mensagem.findAll({
      order: [['createdAt', 'DESC']]
    });

    res.render('mensagens', {
      title: 'Mensagens',
      activePage: 'mensagens',
      user: req.user,
      mensagens
    });
  } catch (error) {
    console.error('Erro ao carregar mensagens:', error);
    res.status(500).send('Erro ao carregar mensagens.');
  }
};
