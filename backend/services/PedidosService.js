const db = require("../data/database");

module.exports = {
    crearPedido: (pedido) => {
        // Validar stock antes de crear el pedido
        for (const item of pedido.items) {
            const prod = db.productos.find(p => p.id === item.productoId);
            if (!prod) {
                return { error: `Producto con ID ${item.productoId} no encontrado` };
            }
            if (prod.stock < item.cantidad) {
                return { error: `Stock insuficiente para ${prod.nombre}. Disponible: ${prod.stock}, Solicitado: ${item.cantidad}` };
            }
        }

        pedido.id = db.generarId();

        // Restar stock
        pedido.items.forEach(item => {
            const prod = db.productos.find(p => p.id === item.productoId);
            if (prod && prod.stock >= item.cantidad) {
                prod.stock -= item.cantidad;
            }
        });

        db.pedidos.push(pedido);

        // Crear factura automática
        const factura = {
            id: db.generarId(),
            pedidoId: pedido.id,
            total: pedido.items.reduce((acc, i) => acc + (i.precio * i.cantidad), 0)
        };
        db.facturas.push(factura);

        return { pedido, factura };
    },

    obtenerPedidos: () => db.pedidos,

    obtenerPedidoPorId: (id) => db.pedidos.find(p => p.id === id)
};
