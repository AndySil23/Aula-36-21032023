function cadastrar() {
    return("Cadastro de produtos");
};

function buscar() {
    return JSON.stringify([
            {
            'id': 1,
            'nome': 'Camisa'
        },
            {
            'id': 2,
            'nome': 'Calça'
        },
            {
            'id': 3,
            'nome': 'Sapato'
        }
    ])
};

module.exports = {
    buscar, cadastrar
};