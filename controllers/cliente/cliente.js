function buscar() {
    return JSON.stringify([
            {
            'id': 1,
            'nome': 'Alice'
        },
            {
            'id': 2,
            'nome': 'Beth'
        },
            {
            'id': 3,
            'nome': 'Caroline'
        }
        
    ])
};
    
function cadastrar() {
    return "Cliente cadastrada!";
};

module.exports = {
    buscar, cadastrar
};