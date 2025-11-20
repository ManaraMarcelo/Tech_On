import { Request, Response } from 'express';
import Mensagem from '../models/Mensagem.js';

// Criamos um tipo personalizado que estende o Request padrão
interface AuthRequest extends Request {
    user?: any; // Define que pode existir uma propriedade 'user'
}

export const renderIndexPage = (req: AuthRequest, res: Response) => {
  res.render('index', { 
    title: 'Início', 
    activePage: 'inicio',
    user: req.user
  });
};

export const renderServicosPage = (req: AuthRequest, res: Response) => {
  res.render('servicos', { 
    title: 'Serviços', 
    activePage: 'servicos',
    user: req.user
  });
};

export const renderPortfolioPage = (req: AuthRequest, res: Response) => {
  res.render('portfolio', { 
    title: 'Portfólio', 
    activePage: 'portfolio',
    user: req.user
  });
};

export const renderSobrePage = (req: AuthRequest, res: Response) => {
  res.render('sobre', { 
    title: 'Sobre Nós', 
    activePage: 'sobre',
    user: req.user
  });
};

export const renderContatoPage = (req: AuthRequest, res: Response) => {
  const erroEnvio = req.query.error 
    ? "Erro ao enviar sua mensagem. Tente novamente." 
    : null;

  res.render('contato', { 
    title: 'Contato', 
    activePage: 'contato', 
    user: req.user,
    error: erroEnvio
  });
};

export const processarFormContato = async (req: AuthRequest, res: Response) => {
  try {
    const { nome, email, telefone, cpf, servico, mensagem } = req.body;

    await Mensagem.create({
      nome,
      email,
      telefone,
      cpf,
      servicoInteresse: servico,
      mensagem
    } as any);

    res.redirect('/contato?status=sucesso');

  } catch (error) {
    console.error("Erro ao salvar mensagem:", error);
    res.render('contato', { 
      title: 'Contato', 
      activePage: 'contato', 
      user: req.user,
      error: "Erro ao enviar sua mensagem. Tente novamente." 
    });
  }
};

// --- FUNÇÃO PARA LISTAR AS MENSAGENS (DASHBOARD) ---
export const listarMensagens = async (req: AuthRequest, res: Response) => {
  try {
    // Busca todas as mensagens no banco, ordenando da mais nova para a mais antiga
    const mensagens = await Mensagem.findAll({
      order: [['createdAt', 'DESC']]
    });

    // Renderiza a view 'mensagens.ejs' enviando os dados
    res.render('mensagens', {
      title: 'Mensagens Recebidas',
      activePage: 'mensagens',
      user: req.user, // Necessário para verificar se está logado
      mensagens       // A lista de dados que pegamos do banco
    });
  } catch (error) {
    console.error('Erro ao carregar mensagens:', error);
    res.status(500).send('Erro interno ao carregar mensagens.');
  }
};