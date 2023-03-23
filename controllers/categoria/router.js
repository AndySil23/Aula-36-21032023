const express = require('express');
const categoria = require('./categoria');

const app = express.Router();

app.get('/categorias', (req, res) => {
    res.send(categoria.buscar());
});

app.post('//categorias', (req, res) => {
    res.send(categoria.cadastrar());
});

module.exports = app;