import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../pages/Dashboard.vue";
import Usuarios from "../pages/Usuarios.vue";
import Productos from "../pages/Productos.vue";
import Proveedores from "../pages/Proveedores.vue";
import Categorias from "../pages/Categorias.vue";
import Pedidos from "../pages/Pedidos.vue";
import Facturas from "../pages/Facturas.vue";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/usuarios", component: Usuarios },
  { path: "/productos", component: Productos },
  { path: "/proveedores", component: Proveedores },
  { path: "/categorias", component: Categorias },
  { path: "/pedidos", component: Pedidos },
  { path: "/facturas", component: Facturas },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
