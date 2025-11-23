const db = require("../data/database");

module.exports = {
    obtenerProductos: () => db.productos,

    obtenerProductoPorId: (id) => db.productos.find(p => p.id === id),

    crearProducto: (producto) => {
        producto.id = db.generarId();
        producto.stock = producto.stock || 0;
        db.productos.push(producto);
        return producto;
    },

    actualizarProducto: (id, datos) => {
        const producto = db.productos.find(p => p.id === id);
        if (!producto) return null;

        Object.assign(producto, datos);
        return producto;
    },

    eliminarProducto: (id) => {
        const index = db.productos.findIndex(p => p.id === id);
        if (index === -1) return false;

        db.productos.splice(index, 1);
        return true;
    },

    descontarStock: (productoId, cantidad) => {
        const p = db.productos.find(prod => prod.id === productoId);
        if (!p || p.stock < cantidad) return false;

        p.stock -= cantidad;
        return true;
    }
};
