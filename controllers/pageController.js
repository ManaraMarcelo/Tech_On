import Mensagem from '../models/Mensagem.js';

// Função para renderizar a página inicial
export const renderIndexPage = (req, res) => {
  res.render('index', { title: 'Início', activePage: 'inicio' });
};

// Função para renderizar a página de serviços
export const renderServicosPage = (req, res) => {
  res.render('servicos', { title: 'Serviços', activePage: 'servicos' });
};

// Função para renderizar a página de portfólio
export const renderPortfolioPage = (req, res) => {
  // Aqui, futuramente, poderíamos buscar os projetos do banco:
  // const projects = await Project.findAll();
  // res.render('portfolio', { title: 'Portfólio', activePage: 'portfolio', projects: projects });
  res.render('portfolio', { title: 'Portfólio', activePage: 'portfolio' });
};

// Função para renderizar a página sobre nós
export const renderSobrePage = (req, res) => {
  res.render('sobre', { title: 'Sobre Nós', activePage: 'sobre' });
};

// Função para renderizar a página de contato
export const renderContatoPage = (req, res) => {
  res.render('contato', { title: 'Contato', activePage: 'contato' });
};

// (Futuro) Função para processar o formulário de contato
// export const processContatoForm = (req, res) => {
//   // Lógica para salvar a mensagem no banco ou enviar email
//   console.log(req.body); // Os dados do formulário chegam aqui
//   res.redirect('/contato?status=sucesso'); // Redireciona de volta com status
// };