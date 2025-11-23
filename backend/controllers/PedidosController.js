const PedidoService = require("../services/PedidosService");

module.exports = {
    obtenerPedidos: (req, res) => {
        res.json(PedidoService.obtenerPedidos());
    },

    crearPedido: (req, res) => {
        const resultado = PedidoService.crearPedido(req.body);

        if (resultado.error)
            return res.status(400).json({ error: resultado.error });

        res.json(resultado); // {pedido, factura}
    }
};
