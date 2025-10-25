import express from 'express';
import {
  renderIndexPage,
  renderServicosPage,
  renderPortfolioPage,
  renderSobrePage,
  renderContatoPage,
  // processContatoForm // Descomente quando for usar
} from '../controllers/pageController.js';

const router = express.Router();

// Rotas GET para cada página
router.get('/', renderIndexPage);
router.get('/servicos', renderServicosPage);
router.get('/portfolio', renderPortfolioPage);
router.get('/sobre', renderSobrePage);
router.get('/contato', renderContatoPage);

// (Futuro) Rota POST para o formulário de contato
// router.post('/contato/enviar', processContatoForm); 

export default router;