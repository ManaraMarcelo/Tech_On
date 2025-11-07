export const renderIndexPage = (req, res) => {
  res.render('index', { 
    title: 'Início', 
    activePage: 'inicio', 
    user: req.user // Passa os dados do usuário (ou null)
  });
};

export const renderServicosPage = (req, res) => {
  res.render('servicos', { 
    title: 'Serviços', 
    activePage: 'servicos', 
    user: req.user 
  });
};

export const renderPortfolioPage = (req, res) => {
  res.render('portfolio', { 
    title: 'Portfólio', 
    activePage: 'portfolio', 
    user: req.user 
  });
};

export const renderSobrePage = (req, res) => {
  res.render('sobre', { 
    title: 'Sobre Nós', 
    activePage: 'sobre', 
    user: req.user 
  });
};

export const renderContatoPage = (req, res) => {
  res.render('contato', { 
    title: 'Contato', 
    activePage: 'contato', 
    user: req.user 
  });
};