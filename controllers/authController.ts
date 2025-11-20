import { Request, Response } from 'express';
import Usuario from '../models/Usuario.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

// (GET) Apenas renderiza a página de registro
export const paginaRegistrar = (req: Request, res: Response) => {
  res.render('registrar', { title: 'Registrar', activePage: 'registrar', error: null });
};

// (POST) Módulo para INSERIR (registrar)
export const registrarUsuario = async (req: Request, res: Response) => {
  const { email, senha, confirmaSenha } = req.body;

  if (senha !== confirmaSenha) {
     return res.redirect('/?register=error_password');
  }

  try {
    await Usuario.create({ email, senha } as any); // 'as any' ajuda a contornar validações estritas na criação rápida
    res.redirect('/?register=success'); 
  } catch (error) {
    console.error('Erro ao registrar:', error);
    res.redirect('/?register=failed');
  }
};

// (GET) Apenas renderiza a página de login
export const paginaLogin = (req: Request, res: Response) => {
  res.render('login', { title: 'Login', activePage: 'login', error: null });
};

// (POST) Módulo para VALIDAR (login)
export const validarUsuario = async (req: Request, res: Response) => {
  const { email, senha } = req.body;
  try {
    const usuario = await Usuario.findOne({ where: { email } });
    
    if (!usuario || !(await usuario.validarSenha(senha))) {
      return res.render('index', { title: 'Início', activePage: 'login_error', user: null });
    }

    // Verifica se a chave secreta existe
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET não definida no .env");
    }

    const token = jwt.sign(
      { id: usuario.id, email: usuario.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.cookie('authToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600000
    });

    res.redirect('/');
  } catch (error) {
    console.error('Erro no login:', error);
    res.redirect('/');
  }
};

// (GET) Módulo para LOGOUT
export const logoutUsuario = (req: Request, res: Response) => {
    res.clearCookie('authToken');
    res.redirect('/');
};

// --- RECUPERAÇÃO DE SENHA ---

// 1. Solicitar Código
export const solicitarRecuperacao = async (req: Request, res: Response) => {
    const { email } = req.body;
    try {
        const usuario = await Usuario.findOne({ where: { email } });
        
        if (usuario) {
            const token = crypto.randomInt(100000, 999999).toString();
            const expires = new Date(Date.now() + 15 * 60 * 1000); 

            usuario.resetToken = token;
            usuario.resetTokenExpires = expires;
            await usuario.save();

            // Simulação de envio (mostra no terminal)
            console.log(`>>> CÓDIGO DE RECUPERAÇÃO PARA ${email}: ${token} <<<`);
        }
        res.redirect(`/?reset=codeSent&email=${email}`);

    } catch (error) {
        console.error('Erro na recuperação:', error);
        res.redirect('/');
    }
};

// 2. Redefinir Senha
export const redefinirSenha = async (req: Request, res: Response) => {
    const { email, token, novaSenha } = req.body;
    
    try {
        const usuario = await Usuario.findOne({ where: { email } });

        if (!usuario || usuario.resetToken !== token || (usuario.resetTokenExpires && usuario.resetTokenExpires < new Date())) {
            return res.redirect('/?reset=invalid');
        }
        
        usuario.senha = novaSenha;
        usuario.resetToken = null;
        usuario.resetTokenExpires = null;
        await usuario.save();

        res.redirect('/?reset=success');

    } catch (error) {
        console.error('Erro ao redefinir senha:', error);
        res.redirect('/?reset=error');
    }
};