const FacturaService = require("../services/FacturasService");

module.exports = {
    obtenerFacturas: (req, res) => {
        res.json(FacturaService.obtenerFacturas());
    },

    obtenerFacturaPorId: (req, res) => {
        const factura = FacturaService.obtenerFacturaPorId(Number(req.params.id));
        if (!factura) return res.status(404).json({ error: "Factura no encontrada" });
        res.json(factura);
    }
};
