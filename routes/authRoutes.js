import express from 'express';
import {
  paginaRegistrar,
  registrarUsuario,
  paginaLogin,
  validarUsuario,
  logoutUsuario
} from '../controllers/authController.js';

const router = express.Router();

router.get('/registrar', paginaRegistrar);
router.post('/registrar', registrarUsuario);

router.get('/login', paginaLogin);
router.post('/login', validarUsuario);

router.get('/logout', logoutUsuario);

export default router;