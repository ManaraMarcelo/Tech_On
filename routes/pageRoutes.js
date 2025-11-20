import express from 'express';
import {
  renderIndexPage,
  renderServicosPage,
  renderPortfolioPage,
  renderSobrePage,
  renderContatoPage,
  processarFormContato,
  listarMensagens          
} from '../controllers/pageController.js';

const router = express.Router();

// Rotas GET para cada página
router.get('/', renderIndexPage);
router.get('/servicos', renderServicosPage);
router.get('/portfolio', renderPortfolioPage);
router.get('/sobre', renderSobrePage);

// Contato
router.get('/contato', renderContatoPage);
router.post('/contato', processarFormContato);

export default router;
