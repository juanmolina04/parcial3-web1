// Contador para generar IDs únicos
let idCounter = 1;

function generarId() {
    return Date.now() * 1000 + (idCounter++ % 1000);
}

module.exports = {
    usuarios: [],
    productos: [],
    pedidos: [],
    facturas: [],
    proveedores: [],
    categorias: [],
    generarId
};
