const produto = require('./controllers/produto');
const categoria = require('./controllers/categoria');
const cliente = require('./controllers/cliente');

const http = require('http');

const PORTA = 8000;
const ENDEREÇO = 'localhost';

function recepcao(req, res) {
    let resposta = "Página não encontrada!";

    switch(req.url){
        case "/clientes":
            resposta = cliente.buscar();
        break;
        case "/produtos":
            resposta = produtos.buscar();
        break;
        case "/categorias":
            resposta = categoria.cadastrar();
        break;
    };

    res.end(resposta);
};

http.createServer(recepcao).listen(PORTA, ENDEREÇO, () => {
    console.log('------------------');
    console.log('Tô escutando tudo!');
    console.log('------------------');
});