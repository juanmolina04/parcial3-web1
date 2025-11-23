const db = require("../data/database");

module.exports = {
    obtenerProveedores: () => db.proveedores,

    crearProveedor: (proveedor) => {
        proveedor.id = db.generarId();
        db.proveedores.push(proveedor);
        return proveedor;
    },

    actualizarProveedor: (id, datos) => {
        const proveedor = db.proveedores.find(p => p.id === id);
        if (!proveedor) return null;

        Object.assign(proveedor, datos);
        return proveedor;
    },

    eliminarProveedor: (id) => {
        const index = db.proveedores.findIndex(p => p.id === id);
        if (index === -1) return false;

        db.proveedores.splice(index, 1);
        return true;
    }
};
