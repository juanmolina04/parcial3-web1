const ProveedorService = require("../services/ProveedoresService");

module.exports = {
    obtenerProveedores: (req, res) => {
        res.json(ProveedorService.obtenerProveedores());
    },

    crearProveedor: (req, res) => {
        const nuevo = ProveedorService.crearProveedor(req.body);
        res.json(nuevo);
    },

    actualizarProveedor: (req, res) => {
        const actualizado = ProveedorService.actualizarProveedor(Number(req.params.id), req.body);
        if (!actualizado) return res.status(404).json({ error: "Proveedor no encontrado" });
        res.json(actualizado);
    },

    eliminarProveedor: (req, res) => {
        const eliminado = ProveedorService.eliminarProveedor(Number(req.params.id));
        if (!eliminado) return res.status(404).json({ error: "Proveedor no encontrado" });
        res.json({ mensaje: "Proveedor eliminado" });
    }
};
