function cadastrar() {
    return("Cadastro de categoria");
};

function buscar() {
    return JSON.stringify([
            {
            'id': 1,
            'nome': 'Roupas'
        },
            {
            'id': 2,
            'nome': 'Acessórios'
        },
            {
            'id': 3,
            'nome': 'Perfumaria'
        }
        
    ])
};

module.exports = {
    buscar, cadastrar
};