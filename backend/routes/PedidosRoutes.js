const express = require("express");
const router = express.Router();
const Controller = require("../controllers/PedidosController");

/**
 * @swagger
 * tags:
 *   name: Pedidos
 *   description: Gestión de pedidos y generación automática de facturas
 */

/**
 * @swagger
 * /pedidos:
 *   get:
 *     summary: Lista todos los pedidos
 *     tags: [Pedidos]
 */

/**
 * @swagger
 * /pedidos:
 *   post:
 *     summary: Crea un pedido y genera una factura automáticamente
 *     tags: [Pedidos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               clienteId:
 *                 type: integer
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     productoId:
 *                       type: integer
 *                     cantidad:
 *                       type: integer
 *                     precio:
 *                       type: number
 */

router.get("/", Controller.obtenerPedidos);
router.post("/", Controller.crearPedido);

module.exports = router;
