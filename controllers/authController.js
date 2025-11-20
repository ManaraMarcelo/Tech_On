import Usuario from '../models/Usuario.js';
import jwt from 'jsonwebtoken';

// (GET) Apenas renderiza a página de registro
export const paginaRegistrar = (req, res) => {
  res.redirect('/');
};

// (POST) Módulo para INSERIR (registrar)
export const registrarUsuario = async (req, res) => {
  const { email, senha } = req.body;
  try {
    await Usuario.create({ email, senha });
    res.redirect('/'); // ou /login
  } catch (error) {
    console.error('Erro ao registrar:', error);
    const referer = req.get('referer') || '/';
    const base = referer.split('?')[0];
    res.redirect(`${base}?register=failed`);
  }
};

// (GET) Apenas renderiza a página de login
export const paginaLogin = (req, res) => {
  res.redirect('/');
};

// (POST) Módulo para VALIDAR (login)
export const validarUsuario = async (req, res) => {
  const { email, senha } = req.body;
  try {
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario || !(await usuario.validarSenha(senha))) {
      // Redireciona de volta para a página anterior (referer) com sinal de erro
      const referer = req.get('referer') || '/';
      const base = referer.split('?')[0];
      return res.redirect(`${base}?login=failed`);
    }

    // Sucesso! Gerar o Token (JWT)
    const token = jwt.sign(
      { id: usuario.id, email: usuario.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Enviar o token para o navegador como um Cookie
    res.cookie('authToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600000 // 1 hora
    });

    // Redireciona para a Home (ou para referer sem query)
    const referer = req.get('referer') || '/';
    const base = referer.split('?')[0];
    res.redirect(base);
  } catch (error) {
    console.error('Erro no login:', error);
    const referer = req.get('referer') || '/';
    const base = referer.split('?')[0];
    res.redirect(`${base}?login=failed`);
  }
};


// (GET) Módulo para LOGOUT
export const logoutUsuario = (req, res) => {
    res.clearCookie('authToken'); // Limpa o cookie
    res.redirect('/');
};