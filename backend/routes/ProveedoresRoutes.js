const express = require("express");
const router = express.Router();
const Controller = require("../controllers/ProveedoresController");

/**
 * @swagger
 * tags:
 *   name: Proveedores
 *   description: Gestión de proveedores
 */

/**
 * @swagger
 * /proveedores:
 *   get:
 *     summary: Obtiene la lista de proveedores
 *     tags: [Proveedores]
 */

/**
 * @swagger
 * /proveedores:
 *   post:
 *     summary: Crea un proveedor
 *     tags: [Proveedores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               telefono:
 *                 type: string
 */

/**
 * @swagger
 * /proveedores/{id}:
 *   put:
 *     summary: Actualiza un proveedor
 *     tags: [Proveedores]
 *     parameters:
 *       - in: path
 *         name: id
 */

/**
 * @swagger
 * /proveedores/{id}:
 *   delete:
 *     summary: Elimina un proveedor
 *     tags: [Proveedores]
 */


router.get("/", Controller.obtenerProveedores);
router.post("/", Controller.crearProveedor);
router.put("/:id", Controller.actualizarProveedor);
router.delete("/:id", Controller.eliminarProveedor);

module.exports = router;
