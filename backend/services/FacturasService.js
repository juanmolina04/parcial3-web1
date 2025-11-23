const db = require("../data/database");

module.exports = {
    obtenerFacturas: () => db.facturas,

    obtenerFacturaPorId: (id) => db.facturas.find(f => f.id === id),

    crearFactura: (factura) => {
        factura.id = db.generarId();
        db.facturas.push(factura);
        return factura;
    }
};
