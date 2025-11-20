import express from 'express';
import {
  paginaRegistrar,
  registrarUsuario,
  paginaLogin,
  validarUsuario,
  logoutUsuario,
  solicitarRecuperacao,
  redefinirSenha
} from '../controllers/authController.js';

const router = express.Router();

router.get('/registrar', paginaRegistrar);
router.post('/registrar', registrarUsuario);

router.get('/login', paginaLogin);
router.post('/login', validarUsuario);

router.get('/logout', logoutUsuario);

router.post('/recuperar-senha', solicitarRecuperacao);
router.post('/redefinir-senha', redefinirSenha);

export default router;