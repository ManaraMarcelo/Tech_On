import { jest, describe, test, expect, beforeEach, afterEach } from '@jest/globals';
import { Request, Response } from 'express';

const mockCreate = jest.fn();
const mockFindOne = jest.fn();

const mockUsuarioInstance = {
  id: 1,
  email: 'teste@teste.com',
  validarSenha: jest.fn(),
  save: jest.fn(),
  resetToken: '123456',
  resetTokenExpires: new Date(Date.now() + 100000) 
};

const mockJwtSign = jest.fn();
const mockBcryptHash = jest.fn();
const mockBcryptGenSalt = jest.fn();

jest.unstable_mockModule('../models/Usuario.js', () => ({
  default: {
    create: mockCreate,
    findOne: mockFindOne,
  },
}));

jest.unstable_mockModule('jsonwebtoken', () => ({
  default: { sign: mockJwtSign }
}));

jest.unstable_mockModule('bcrypt', () => ({
  default: {
    hash: mockBcryptHash,
    genSalt: mockBcryptGenSalt
  }
}));

// 3. IMPORTAR O CONTROLLER
const { 
  paginaRegistrar,      
  paginaLogin,        
  registrarUsuario, 
  validarUsuario, 
  logoutUsuario,
  solicitarRecuperacao,
  redefinirSenha
} = await import('../controllers/authController.js');

describe('AuthController', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  const originalConsoleError = console.error;

  beforeEach(() => {
    console.error = jest.fn(); // Silencia erros
    jest.clearAllMocks();

    process.env.JWT_SECRET = 'teste-secret';

    req = {
      body: {},
      get: jest.fn()
    } as any;

    res = {
      redirect: jest.fn(),
      render: jest.fn(),
      cookie: jest.fn(),
      clearCookie: jest.fn()
    } as unknown as Response;
  });

  afterEach(() => {
    console.error = originalConsoleError;
  });

  // --- RENDERIZAÇÃO (GET) ---

  test('Deve renderizar a página de registro', () => {
    paginaRegistrar(req as Request, res as Response);
    expect(res.render).toHaveBeenCalledWith('registrar', expect.anything());
  });

  test('Deve renderizar a página de login', () => {
    paginaLogin(req as Request, res as Response);
    expect(res.render).toHaveBeenCalledWith('login', expect.anything());
  });

  // --- TESTES DE REGISTRO ---

  test('Deve redirecionar com erro se senhas não conferem', async () => {
    req.body = { email: 'a@a.com', senha: '123', confirmaSenha: '456' };
    await registrarUsuario(req as Request, res as Response);
    expect(res.redirect).toHaveBeenCalledWith('/?register=error_password');
  });

  test('Deve registrar usuário com sucesso', async () => {
    req.body = { email: 'a@a.com', senha: '123', confirmaSenha: '123' };
    (mockCreate as unknown as jest.Mock).mockResolvedValue(true);

    await registrarUsuario(req as Request, res as Response);
    expect(mockCreate).toHaveBeenCalled();
    expect(res.redirect).toHaveBeenCalledWith('/?register=success');
  });

  test('Deve redirecionar com erro se falhar ao criar usuário', async () => {
    req.body = { email: 'a@a.com', senha: '123', confirmaSenha: '123' };
    (mockCreate as unknown as jest.Mock).mockRejectedValue(new Error('Erro DB'));

    await registrarUsuario(req as Request, res as Response);
    expect(res.redirect).toHaveBeenCalledWith('/?register=failed');
  });

  // --- TESTES DE LOGIN ---

  test('Deve redirecionar com erro se usuário não existe', async () => {
    req.body = { email: 'naoexiste@a.com', senha: '123' };
    (mockFindOne as unknown as jest.Mock).mockResolvedValue(null);

    await validarUsuario(req as Request, res as Response);
    expect(res.redirect).toHaveBeenCalledWith('/?login=failed');
  });

  test('Deve redirecionar com erro se senha estiver incorreta', async () => {
    req.body = { email: 'a@a.com', senha: 'errada' };
    (mockUsuarioInstance.validarSenha as jest.Mock).mockResolvedValue(false);
    (mockFindOne as unknown as jest.Mock).mockResolvedValue(mockUsuarioInstance);

    await validarUsuario(req as Request, res as Response);
    expect(res.redirect).toHaveBeenCalledWith('/?login=failed');
  });

  test('Deve fazer login com sucesso', async () => {
    req.body = { email: 'a@a.com', senha: 'certa' };
    (mockUsuarioInstance.validarSenha as jest.Mock).mockResolvedValue(true);
    (mockFindOne as unknown as jest.Mock).mockResolvedValue(mockUsuarioInstance);
    (mockJwtSign as jest.Mock).mockReturnValue('token-falso');

    await validarUsuario(req as Request, res as Response);
    expect(mockJwtSign).toHaveBeenCalled();
    expect(res.cookie).toHaveBeenCalled();
    expect(res.redirect).toHaveBeenCalledWith('/');
  });

  test('Deve redirecionar com erro se houver falha no servidor (Login)', async () => {
    req.body = { email: 'a@a.com', senha: '123' };
    (mockFindOne as unknown as jest.Mock).mockRejectedValue(new Error('Erro DB'));

    await validarUsuario(req as Request, res as Response);
    expect(res.redirect).toHaveBeenCalledWith('/?login=error');
  });

  test('Deve lançar erro (cair no catch) se JWT_SECRET não estiver definido', async () => {
    // 1. Apagar a chave secreta temporariamente
    delete process.env.JWT_SECRET;
    
    // 2. Configurar o mock para passar pela validação de senha (para chegar até a linha do erro)
    req.body = { email: 'a@a.com', senha: '123' };
    (mockUsuarioInstance.validarSenha as jest.Mock).mockResolvedValue(true);
    (mockFindOne as jest.Mock).mockResolvedValue(mockUsuarioInstance);

    // 3. Executar
    await validarUsuario(req as Request, res as Response);

    // 4. Esperar que o erro seja capturado pelo catch e redirecione
    expect(res.redirect).toHaveBeenCalledWith('/?login=error');

    // 5. Restaurar a chave (Importante para não quebrar outros testes que rodarem depois)
    process.env.JWT_SECRET = 'teste-secret';
  });

  // --- TESTE DE LOGOUT ---

  test('Deve limpar o cookie e redirecionar no logout', () => {
    logoutUsuario(req as Request, res as Response);
    expect(res.clearCookie).toHaveBeenCalledWith('authToken');
    expect(res.redirect).toHaveBeenCalledWith('/');
  });

  // --- TESTES DE RECUPERAÇÃO DE SENHA ---

  test('Deve solicitar recuperação com sucesso (Usuário Existe)', async () => {
      req.body = { email: 'teste@teste.com' };
      (mockFindOne as unknown as jest.Mock).mockResolvedValue(mockUsuarioInstance);

      await solicitarRecuperacao(req as Request, res as Response);
      // Verifica se o log do código apareceu (implicitamente pelo sucesso da função)
      expect(res.redirect).toHaveBeenCalledWith(expect.stringContaining('?reset=codeSent'));
  });

  // Teste para quando o usuário NÃO existe na recuperação
  test('Deve simular envio mesmo se usuário não existir (Segurança)', async () => {
      req.body = { email: 'naoexiste@teste.com' };
      (mockFindOne as unknown as jest.Mock).mockResolvedValue(null);

      await solicitarRecuperacao(req as Request, res as Response);
      // Deve redirecionar igual, para não revelar que o email não existe
      expect(res.redirect).toHaveBeenCalledWith(expect.stringContaining('?reset=codeSent'));
  });

  // Teste de erro no banco durante solicitação
  test('Deve redirecionar para home se der erro no banco (Solicitação)', async () => {
      req.body = { email: 'erro@teste.com' };
      (mockFindOne as unknown as jest.Mock).mockRejectedValue(new Error('DB Error'));

      await solicitarRecuperacao(req as Request, res as Response);
      expect(res.redirect).toHaveBeenCalledWith('/');
  });

  test('Deve redefinir senha com sucesso', async () => {
      req.body = { email: 'teste@teste.com', token: '123456', novaSenha: 'nova' };
      const userReset = { ...mockUsuarioInstance, resetToken: '123456' };
      (mockFindOne as unknown as jest.Mock).mockResolvedValue(userReset);

      await redefinirSenha(req as Request, res as Response);
      expect(res.redirect).toHaveBeenCalledWith('/?reset=success');
  });
  
  // Teste para token inválido
  test('Deve falhar se token for inválido', async () => {
      req.body = { email: 'teste@teste.com', token: 'ERRADO', novaSenha: 'nova' };
      const userReset = { ...mockUsuarioInstance, resetToken: '123456' };
      (mockFindOne as unknown as jest.Mock).mockResolvedValue(userReset);

      await redefinirSenha(req as Request, res as Response);
      expect(res.redirect).toHaveBeenCalledWith('/?reset=invalid');
  });

  // Teste de erro no banco durante redefinição
  test('Deve redirecionar com erro se falhar no banco (Redefinição)', async () => {
      req.body = { email: 'teste@teste.com', token: '123456', novaSenha: 'nova' };
      (mockFindOne as unknown as jest.Mock).mockRejectedValue(new Error('DB Error'));

      await redefinirSenha(req as Request, res as Response);
      expect(res.redirect).toHaveBeenCalledWith('/?reset=error');
  });
});