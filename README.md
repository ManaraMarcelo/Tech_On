# 📸 TechON - Plataforma de Tours Virtuais

`Desenvolvido por: Marcelo Manara e Lucas Vieira`

Bem-vindo ao repositório da TechON, uma aplicação web desenvolvida para exibir e gerenciar serviços de tours virtuais 360°, fotografia imobiliária e projetos Matterport.

Este projeto foi desenvolvido utilizando arquitetura MVC (Model-View-Controller), TypeScript e Node.js, com foco em práticas modernas de desenvolvimento, segurança e containerização.

# 🚀 Tecnologias Utilizadas
- Back-end: Node.js, Express (TypeScript)
- Front-end: EJS (View Engine), Bootstrap 5
- Banco de Dados: SQLite (via Sequelize ORM)
- Segurança: BCrypt (Hash de senhas), JWT (Autenticação via Cookies)
- Testes: Jest (Cobertura de código > 90%)
- Containerização: Docker

# ⚙️ Pré-requisitos
Antes de começar, certifique-se de ter instalado:

- Node.js (v18 ou superior)  
- Docker (Opcional, para rodar via container)

# 🛠️ Configuração Inicial

1. Clone o repositório:
```sh
git clone https://github.com/ManaraMarcelo/Tech_On.git
cd Tech_On
````

2. Instale as dependências:
```sh
npm install
````

3. Configure as Variáveis de Ambiente: Crie um arquivo chamado `.env` na raiz do projeto e adicione uma chave secreta para o JWT:
```sh
JWT_SECRET=sua_chave_secreta_super_segura_aqui
```

# ▶️ Como Rodar o Projeto
Opção 1: Rodar Localmente (Desenvolvimento)

Para rodar o projeto diretamente na sua máquina e ver as alterações em tempo real:

```sh
npm run dev
```
Acesse em: http://localhost:3000

Opção 2: Rodar com Docker   
- Para rodar a aplicação "buildada" e isolada em um container:

Construir a imagem:
```sh
docker build -t techon-app .
```

Rodar o container:
```sh
docker run -p 3000:3000 techon-app
````

Acesse em: http://localhost:3000

# 🔐 Funcionalidades de Autenticação e Segurança
O sistema possui um fluxo completo de autenticação. Abaixo, os detalhes de funcionamento:

1. Cadastro e Login

- As senhas são criptografadas no banco de dados utilizando BCrypt.
- O login gera um Token JWT que é armazenado em um cookie seguro (httpOnly), impedindo acesso via scripts do front-end.

2. Recuperação de Senha (Simulação no Terminal) ⚠️

- Como este é um projeto acadêmico e não está conectado a um servidor SMTP real (como Gmail ou SendGrid), o envio do código de recuperação é simulado.
- Como testar a recuperação de senha:
- Acesse a área de Login e clique em "Esqueceu sua senha?".
- Digite o e-mail de um usuário cadastrado e clique em "Enviar Código".
- IMPORTANTE: O código NÃO chegará no seu e-mail.
- Vá até o TERMINAL onde o servidor está rodando (VS Code ou Docker logs).

Você verá uma mensagem destacada assim:
```sh
Plaintext
==================================================
>>> RECUPERAÇÃO DE SENHA <<<
>>> Usuário: teste@teste.com
>>> CÓDIGO: 123456
==================================================
````

- Copie este código (123456), volte ao navegador e insira no modal que se abriu automaticamente.

- Defina sua nova senha.

3. Área Administrativa (Mensagens)

Existe uma rota protegida /mensagens que exibe os contatos recebidos pelo formulário.

- Segurança: Apenas usuários com e-mails autorizados (definidos no Middleware) podem acessar.
- Teste: O usuário `teste@teste.com` (crie-o ou altere a senha se já existente) ou `admin@techon.com` possuem permissão de admin. Outros usuários serão redirecionados para a Home com um alerta de "Acesso Negado".

# 🧪 Testes Automatizados (Jest)
O projeto conta com testes unitários cobrindo Controllers de Páginas e Autenticação.

Para rodar os testes e ver o relatório de cobertura:
```sh
npm run test:coverage
```
A cobertura atual é de 100% nos arquivos testados.

# 📂 Estrutura do Projeto

- `config/`: Configuração do Banco de Dados (Sequelize).

- `controllers`/: Lógica de negócio (Auth e Páginas).

- `models/`: Modelos do Banco de Dados (Usuario, Mensagem).

- `middlewares/`: Verificação de tokens e permissões de admin.

- `routes/`: Definição das rotas da API.

- `views/`: Arquivos EJS (HTML dinâmico) e Partials (Header, Navbar, Footer).

- `public/`: Arquivos estáticos (CSS, Imagens, Scripts JS do front-end).

- `tests/`: Testes unitários com Jest.