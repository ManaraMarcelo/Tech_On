const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { title: 'Início', activePage: 'inicio' }); 
});

app.get('/servicos', (req, res) => {
    res.render('servicos', { title: 'Serviços', activePage: 'servicos' });
});

app.get('/portfolio', (req, res) => {
    res.render('portfolio', { title: 'Portfólio', activePage: 'portfolio' });
});

app.get('/sobre', (req, res) => {
    res.render('sobre', { title: 'Sobre Nós', activePage: 'sobre' });
});

app.get('/contato', (req, res) => {
    res.render('contato', { title: 'Contato', activePage: 'contato' });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});