function x() {
    console.log("Oi, eu sou um teste!");
};

function y() {
    console.log("Oi, sou outro teste!");
};

// a linha abaixo é o modo ANTIGO como se EXPORTA uma função dentro do Node.js, para função única. No caso de mais uma função, as funções devem ser separada por virgula, sem os parentes da função 'função()', e devem estar dentro de um objeto {}
module.exports = {
    x, y
};