// 1. IMPORTAR AS FERRAMENTAS DO JEST
import { jest, describe, test, expect, beforeEach, afterEach } from '@jest/globals';
import { Request, Response } from 'express';

// 2. CRIAR AS FUNÇÕES MOCKADAS ANTES DE IMPORTAR O CONTROLLER
// Isso garante que temos controle total sobre elas
const mockCreate = jest.fn();
const mockFindAll = jest.fn();

// 3. MOCKAR O MODEL USANDO "FACTORY"
// Isso força o Jest a usar nossas funções acima no lugar do Model real
jest.unstable_mockModule('../models/Mensagem.js', () => ({
  default: {
    create: mockCreate,
    findAll: mockFindAll,
  },
}));

// 4. IMPORTAR O CONTROLLER DEPOIS DE MOCKAR (Dynamic Import)
// Em testes ESM, é mais seguro importar o módulo que será testado depois dos mocks
const { 
  renderIndexPage, 
  renderContatoPage, 
  processarFormContato, 
  listarMensagens,
  renderServicosPage,
  renderPortfolioPage,
  renderSobrePage
} = await import('../controllers/pageController.js');

describe('PageController', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;

  const originalConsoleError = console.error;

  beforeEach(() => {
    console.error = jest.fn(); // Silencia logs de erro
    mockCreate.mockReset();   // Limpa o mock create antes de cada teste
    mockFindAll.mockReset();  // Limpa o mock findAll antes de cada teste

    req = {
      body: {},
      query: {},
      user: { id: 1, email: 'teste@teste' }
    } as any;

    res = {
      render: jest.fn(),
      redirect: jest.fn(),
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    } as unknown as Response;
  });

  afterEach(() => {
    console.error = originalConsoleError;
  });

  // --- Testes de Renderização (GET) ---
  // (Estes já estavam passando, mantivemos iguais)
  
  test('Deve renderizar a página inicial (Index)', () => {
    renderIndexPage(req as Request, res as Response);
    expect(res.render).toHaveBeenCalledWith('index', expect.objectContaining({ title: 'Início' }));
  });

  test('Deve renderizar a página de serviços', () => {
    renderServicosPage(req as Request, res as Response);
    expect(res.render).toHaveBeenCalledWith('servicos', expect.anything());
  });

  test('Deve renderizar a página de portfolio', () => {
    renderPortfolioPage(req as Request, res as Response);
    expect(res.render).toHaveBeenCalledWith('portfolio', expect.anything());
  });

  test('Deve renderizar a página sobre nós', () => {
    renderSobrePage(req as Request, res as Response);
    expect(res.render).toHaveBeenCalledWith('sobre', expect.anything());
  });

  test('Deve renderizar a página de contato sem erro', () => {
    renderContatoPage(req as Request, res as Response);
    expect(res.render).toHaveBeenCalledWith('contato', expect.objectContaining({ error: null }));
  });

  test('Deve renderizar a página de contato com erro vindo da URL', () => {
    req.query = { error: 'true' };
    renderContatoPage(req as Request, res as Response);
    expect(res.render).toHaveBeenCalledWith('contato', expect.objectContaining({
      error: "Erro ao enviar sua mensagem. Tente novamente."
    }));
  });

  // --- Testes de Processamento (POST) ---

  test('Deve salvar mensagem e redirecionar com sucesso', async () => {
    req.body = {
      nome: 'Teste',
      email: 'teste@email.com',
      telefone: '123',
      cpf: '123',
      servico: 'Tour',
      mensagem: 'Ola'
    };

    // Configura o mock para retornar sucesso
    mockCreate.mockResolvedValue(true);

    await processarFormContato(req as Request, res as Response);

    // Verifica se o mock foi chamado
    expect(mockCreate).toHaveBeenCalledWith(expect.objectContaining({
      nome: 'Teste',
      email: 'teste@email.com'
    }));
    expect(res.redirect).toHaveBeenCalledWith('/contato?status=sucesso');
  });

  test('Deve renderizar erro se falhar ao salvar mensagem', async () => {
    // Configura o mock para simular erro no banco
    mockCreate.mockRejectedValue(new Error('Erro DB'));

    await processarFormContato(req as Request, res as Response);

    expect(res.render).toHaveBeenCalledWith('contato', expect.objectContaining({
      error: "Erro ao enviar sua mensagem. Tente novamente."
    }));
  });

  // --- Testes de Listagem (Admin) ---

  test('Deve listar mensagens com sucesso', async () => {
    const mensagensMock = [{ id: 1, nome: 'Msg 1' }, { id: 2, nome: 'Msg 2' }];
    
    // Configura o mock para retornar a lista
    mockFindAll.mockResolvedValue(mensagensMock);

    await listarMensagens(req as Request, res as Response);

    expect(res.render).toHaveBeenCalledWith('mensagens', expect.objectContaining({
      mensagens: mensagensMock
    }));
  });

  test('Deve retornar erro 500 se falhar ao listar', async () => {
    // Configura o mock para simular erro
    mockFindAll.mockRejectedValue(new Error('Erro DB'));

    await listarMensagens(req as Request, res as Response);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith(expect.stringContaining('Erro'));
  });
});