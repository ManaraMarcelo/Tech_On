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

import { exigirAdmin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', renderIndexPage);
router.get('/servicos', renderServicosPage);
router.get('/portfolio', renderPortfolioPage);
router.get('/sobre', renderSobrePage);
router.get('/mensagens', exigirAdmin, listarMensagens);
router.get('/contato', renderContatoPage);
router.post('/contato', processarFormContato);

export default router;