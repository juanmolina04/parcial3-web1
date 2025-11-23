<script setup>
import { ref, onMounted } from "vue";
import Card from "../components/Card.vue";
import { api } from "../services/api";

const facturas = ref([]);

const cargar = async () => {
  const res = await api.get("/facturas");
  facturas.value = res.data;
};

onMounted(cargar);
</script>

<template>
  <div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
      <h2 class="h1">Facturas</h2>
      <div class="small">Documentos generados por pedidos</div>
    </div>

    <div class="grid">
      <Card title="Lista de facturas">
        <table class="table">
          <thead><tr><th>ID</th><th>Pedido</th><th>Total</th></tr></thead>
          <tbody>
            <tr v-for="f in facturas" :key="f.id">
              <td>{{ f.id }}</td>
              <td>{{ f.pedidoId }}</td>
              <td>{{ f.total }}</td>
            </tr>
          </tbody>
        </table>
        <div v-if="!facturas.length" class="small">No hay facturas aún</div>
      </Card>
    </div>
  </div>
</template>

