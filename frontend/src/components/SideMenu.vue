<script setup>
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

const menu = [
  { title: "Dashboard", path: "/" },
  { title: "Usuarios", path: "/usuarios" },
  { title: "Productos", path: "/productos" },
  { title: "Pedidos", path: "/pedidos" },
  { title: "Facturas", path: "/facturas" },
  { title: "Proveedores", path: "/proveedores" },
  { title: "Categorías", path: "/categorias" }
];

const go = (p) => router.push(p);
</script>

<template>
  <aside class="sidemenu">
    <div style="margin-bottom:18px;">
      <div style="font-weight:700;color:var(--primary);margin-bottom:4px;">Menú</div>
      <div class="small">Navega por ConfeccionesApp</div>
    </div>

    <nav>
      <div v-for="m in menu" :key="m.path" @click="go(m.path)"
           :class="['menu-item', { active: route.path === m.path }]">
        <div style="width:8px;height:8px;border-radius:99px;background:currentColor;"></div>
        <div>{{ m.title }}</div>
      </div>
    </nav>

    <div style="margin-top:24px;">
      <div class="small">Resumen</div>
      <div style="margin-top:8px;">
        <div class="card" style="padding:12px;">
          <div style="display:flex;justify-content:space-between;">
            <div><strong>Pedidos hoy</strong><div class="small">3</div></div>
            <div class="badge">Ventas</div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>
