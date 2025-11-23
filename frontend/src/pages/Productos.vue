<script setup>
import { ref, onMounted } from "vue";
import Card from "../components/Card.vue";
import { api } from "../services/api";

const productos = ref([]);
const nombre = ref("");
const precio = ref("");
const stock = ref(0);
const loading = ref(false);

const cargar = async () => {
  loading.value = true;
  try {
    const res = await api.get("/productos");
    productos.value = res.data;
  } catch(e) {
    console.error(e);
  } finally { loading.value = false; }
};

const crear = async () => {
  if(!nombre.value || !precio.value) return alert("Completa nombre y precio");
  try {
    await api.post("/productos", { nombre: nombre.value, precio: Number(precio.value), stock: Number(stock.value) });
    nombre.value = ""; precio.value = ""; stock.value = 0;
    await cargar();
  } catch(e) {
    alert("Error al crear producto: " + (e.response?.data?.error || e.message));
  }
};

const eliminar = async (id) => {
  if(!confirm("Eliminar producto?")) return;
  try {
    await api.delete(`/productos/${id}`);
    await cargar();
  } catch(e) {
    alert("Error al eliminar producto: " + (e.response?.data?.error || e.message));
  }
};

onMounted(cargar);
</script>

<template>
  <div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
      <h2 class="h1">Productos</h2>
      <div class="small">Catálogo y control de stock</div>
    </div>

    <div class="grid">
      <Card title="Crear producto">
        <div style="display:grid;gap:8px;">
          <input v-model="nombre" placeholder="Nombre del producto" />
          <div class="form-row">
            <input v-model="precio" placeholder="Precio" />
            <input v-model="stock" type="number" min="0" placeholder="Stock" />
          </div>
          <div style="display:flex;justify-content:flex-end;">
            <button @click="crear">Agregar producto</button>
          </div>
        </div>
      </Card>

      <Card title="Catálogo">
        <table class="table">
          <thead><tr><th>Nombre</th><th>Precio</th><th>Stock</th><th>Acciones</th></tr></thead>
          <tbody>
            <tr v-for="p in productos" :key="p.id">
              <td>{{ p.nombre }}</td>
              <td>{{ p.precio }}</td>
              <td>{{ p.stock ?? 0 }}</td>
              <td class="actions">
                <button class="btn-ghost" @click="alert(JSON.stringify(p, null, 2))">Ver</button>
                <button class="btn-danger" @click="eliminar(p.id)">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-if="!productos.length" class="small">No hay productos aún.</div>
      </Card>
    </div>
  </div>
</template>
