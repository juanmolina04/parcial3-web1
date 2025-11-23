const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Productos
 *   description: Gestión de productos e inventario
 */

/**
 * @swagger
 * /productos:
 *   get:
 *     summary: Lista todos los productos
 *     tags: [Productos]
 *     responses:
 *       200:
 *         description: Lista de productos
 */

/**
 * @swagger
 * /productos/{id}:
 *   get:
 *     summary: Obtiene un producto por ID
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *     responses:
 *       200:
 *         description: Producto encontrado
 *       404:
 *         description: No existe el producto
 */

/**
 * @swagger
 * /productos:
 *   post:
 *     summary: Crea un producto
 *     tags: [Productos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre: 
 *                 type: string
 *               precio:
 *                 type: number
 *               stock:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Producto creado
 */

/**
 * @swagger
 * /productos/{id}:
 *   put:
 *     summary: Actualiza un producto
 *     tags: [Productos]
 *     parameters:
 *       - in: path
 *         name: id
 *     responses:
 *       200:
 *         description: Producto actualizado
 *       404:
 *         description: No existe el producto
 */

/**
 * @swagger
 * /productos/{id}:
 *   delete:
 *     summary: Elimina un producto
 *     tags: [Productos]
 */

const Controller = require("../controllers/ProductosController");

router.get("/", Controller.obtenerProductos);
router.get("/:id", Controller.obtenerProductoPorId);
router.post("/", Controller.crearProducto);
router.put("/:id", Controller.actualizarProducto);
router.delete("/:id", Controller.eliminarProducto);

module.exports = router;
