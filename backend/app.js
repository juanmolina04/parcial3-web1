const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Swagger
const { swaggerUi, swaggerDocs } = require("./swagger/swagger");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Endpoint de salud
app.get("/", (req, res) => {
    res.json({ mensaje: "API funcionando correctamente", version: "1.0.0" });
});

// Rutas
app.use("/usuarios", require("./routes/UsuariosRoutes"));
app.use("/productos", require("./routes/ProductosRoutes"));
app.use("/pedidos", require("./routes/PedidosRoutes"));
app.use("/facturas", require("./routes/FacturasRoutes"));
app.use("/proveedores", require("./routes/ProveedoresRoutes"));
app.use("/categorias", require("./routes/CategoriasRoutes"));

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor ejecutándose en http://localhost:${PORT}`));
