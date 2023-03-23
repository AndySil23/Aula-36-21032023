const produtos = require("./model");

function cadastrar() {
    return("Cadastro de produtos");
};

function buscar() {
    return JSON.stringify(produtos)
};

module.exports = {
    buscar, cadastrar
};