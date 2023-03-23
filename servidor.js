const express = require('express');

const categoriaRouter = require('./controllers/categoria/router')
const produtoRouter = require('./controllers/produto/router')
const clienteRouter = require('./controllers/cliente/router')

const app = express();

app.use(categoriaRouter);
app.use(produtoRouter);
app.use(clienteRouter);

const PORTA = 8000;

app.listen(PORTA, () => {
    console.log('------------------------');
    console.log('---Tô escutando tudo!---');
    console.log('------------------------');
});


