import { Request, Response, NextFunction } from 'express';

const emailsAutorizados = [
    'teste@teste', 
    'zmarcelo2018@gmail.com',
    'admin@techon.com'
];

export const exigirAdmin = (req: Request, res: Response, next: NextFunction) => {
    const usuario = (req as any).user;

    if (!usuario) {
        return res.redirect('/login');
    }

    if (!emailsAutorizados.includes(usuario.email)) {
        console.log(`Acesso negado para: ${usuario.email}`);

        return res.redirect('/?error=access_denied'); 
    }

    next();
};