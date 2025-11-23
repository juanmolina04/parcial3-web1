const ProductoService = require("../services/ProductosService");

module.exports = {
    obtenerProductos: (req, res) => {
        res.json(ProductoService.obtenerProductos());
    },

    obtenerProductoPorId: (req, res) => {
        const producto = ProductoService.obtenerProductoPorId(Number(req.params.id));
        if (!producto) return res.status(404).json({ error: "Producto no encontrado" });
        res.json(producto);
    },

    crearProducto: (req, res) => {
        const nuevo = ProductoService.crearProducto(req.body);
        res.json(nuevo);
    },

    actualizarProducto: (req, res) => {
        const actualizado = ProductoService.actualizarProducto(Number(req.params.id), req.body);
        if (!actualizado) return res.status(404).json({ error: "Producto no encontrado" });
        res.json(actualizado);
    },

    eliminarProducto: (req, res) => {
        const eliminado = ProductoService.eliminarProducto(Number(req.params.id));
        if (!eliminado) return res.status(404).json({ error: "Producto no encontrado" });
        res.json({ mensaje: "Producto eliminado" });
    }
};
