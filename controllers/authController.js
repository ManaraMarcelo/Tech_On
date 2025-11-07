import Usuario from '../models/Usuario.js';
import jwt from 'jsonwebtoken';

// (GET) Apenas renderiza a página de registro
export const paginaRegistrar = (req, res) => {
  res.render('registrar', { title: 'Registrar', activePage: 'registrar', error: null });
};

// (POST) Módulo para INSERIR (registrar)
export const registrarUsuario = async (req, res) => {
  const { email, senha } = req.body;
  try {
    await Usuario.create({ email, senha });
    res.redirect('/login'); // Redireciona para o login após o sucesso
  } catch (error) {
    res.render('registrar', { title: 'Registrar', activePage: 'registrar', error: 'Erro ao criar usuário. O e-mail pode já estar em uso.' });
  }
};

// (GET) Apenas renderiza a página de login
export const paginaLogin = (req, res) => {
  res.render('login', { title: 'Login', activePage: 'login', error: null });
};

// (POST) Módulo para VALIDAR (login)
export const validarUsuario = async (req, res) => {
  const { email, senha } = req.body;
  try {
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario || !(await usuario.validarSenha(senha))) {
      return res.render('login', { title: 'Login', activePage: 'login', error: 'E-mail ou senha incorretos.' });
    }

    // Sucesso! Gerar o Token (JWT)
    const token = jwt.sign(
      { id: usuario.id, email: usuario.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Enviar o token para o navegador como um Cookie
    res.cookie('authToken', token, {
      httpOnly: true, // O JS do front-end não pode ver o cookie
      secure: process.env.NODE_ENV === 'production', // Usar HTTPS em produção
      maxAge: 3600000 // 1 hora
    });

    res.redirect('/'); // Redireciona para a Home
  } catch (error) {
    res.render('login', { title: 'Login', activePage: 'login', error: 'Erro no servidor.' });
  }
};

// (GET) Módulo para LOGOUT
export const logoutUsuario = (req, res) => {
    res.clearCookie('authToken'); // Limpa o cookie
    res.redirect('/');
};