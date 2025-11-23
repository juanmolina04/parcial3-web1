<script setup>
import { ref, onMounted } from "vue";
import Card from "../components/Card.vue";
import { api } from "../services/api";

const stats = ref({ usuarios:0, productos:0, pedidos:0, facturas:0 });
const loading = ref(false);

const load = async () => {
  loading.value = true;
  try {
    const [u, p, ped, f] = await Promise.all([
      api.get("/usuarios").catch(()=>({data:[] })),
      api.get("/productos").catch(()=>({data:[] })),
      api.get("/pedidos").catch(()=>({data:[] })),
      api.get("/facturas").catch(()=>({data:[] }))
    ]);
    stats.value.usuarios = u.data.length;
    stats.value.productos = p.data.length;
    stats.value.pedidos = ped.data.length;
    stats.value.facturas = f.data.length;
  } catch(e) {
    console.error(e);
  } finally { loading.value = false; }
}

onMounted(load);
</script>

<template>
  <div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
      <h2 class="h1">Dashboard</h2>
      <div class="small">ConfeccionesApp • Panel principal</div>
    </div>

    <div class="grid" style="margin-bottom:16px;">
      <Card title="Usuarios">
        <div style="font-size:28px;font-weight:700">{{ stats.usuarios }}</div>
        <div class="small">Clientes registrados</div>
      </Card>

      <Card title="Productos">
        <div style="font-size:28px;font-weight:700">{{ stats.productos }}</div>
        <div class="small">SKUs en catálogo</div>
      </Card>

      <Card title="Pedidos">
        <div style="font-size:28px;font-weight:700">{{ stats.pedidos }}</div>
        <div class="small">Pedidos realizados</div>
      </Card>

      <Card title="Facturas">
        <div style="font-size:28px;font-weight:700">{{ stats.facturas }}</div>
        <div class="small">Documentos fiscales</div>
      </Card>
    </div>

    <div class="card">
      <h3 style="margin-top:0;">Actividad reciente</h3>
      <p class="small">Aquí aparecerán las últimas interacciones (si deseas podemos añadir un feed con datos reales).</p>
    </div>
  </div>
</template>
