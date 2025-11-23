const express = require("express");
const router = express.Router();
const Controller = require("../controllers/CategoriasController");

router.get("/", Controller.obtenerCategorias);
router.get("/:id", Controller.obtenerCategoriaPorId);
router.post("/", Controller.crearCategoria);

module.exports = router;
