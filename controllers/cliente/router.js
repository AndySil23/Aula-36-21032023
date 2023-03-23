const express = require('express');
const produto = require('./cliente');

const app = express.Router();

app.get('/clientes', (req, res) => {
    res.send(produto.buscar());
});

app.post('/clientes', (req, res) => {
    res.send(produto.cadastrar());
});

module.exports = app;