const CategoriaService = require("../services/CategoriasService");

module.exports = {
    obtenerCategorias: (req, res) => {
        res.json(CategoriaService.obtenerCategorias());
    },

    obtenerCategoriaPorId: (req, res) => {
        const categoria = CategoriaService.obtenerCategoriaPorId(Number(req.params.id));
        if (!categoria) return res.status(404).json({ error: "Categoría no encontrada" });
        res.json(categoria);
    },

    crearCategoria: (req, res) => {
        const nueva = CategoriaService.crearCategoria(req.body);
        res.json(nueva);
    }
};
