const db = require("../data/database");

module.exports = {
    obtenerCategorias: () => db.categorias,

    crearCategoria: (categoria) => {
        categoria.id = db.generarId();
        db.categorias.push(categoria);
        return categoria;
    },

    obtenerCategoriaPorId: (id) => db.categorias.find(c => c.id === id)
};
