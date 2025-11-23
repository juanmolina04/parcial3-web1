const express = require("express");
const router = express.Router();
const Controller = require("../controllers/FacturasController");

/**
 * @swagger
 * tags:
 *   name: Facturas
 *   description: Proceso de facturación
 */

/**
 * @swagger
 * /facturas:
 *   get:
 *     summary: Lista todas las facturas
 *     tags: [Facturas]
 */

/**
 * @swagger
 * /facturas/{id}:
 *   get:
 *     summary: Obtiene una factura por ID
 *     tags: [Facturas]
 */


router.get("/", Controller.obtenerFacturas);
router.get("/:id", Controller.obtenerFacturaPorId);

module.exports = router;
