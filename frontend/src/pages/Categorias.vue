<script setup>
import { ref, onMounted } from "vue";
import Card from "../components/Card.vue";
import { api } from "../services/api";

const categorias = ref([]);
const nombre = ref("");

const cargar = async () => {
  try {
    const res = await api.get("/categorias");
    categorias.value = res.data;
  } catch(e){ console.error(e); }
};

const crear = async () => {
  if(!nombre.value) return;
  try {
    await api.post("/categorias", { nombre: nombre.value });
    nombre.value = "";
    await cargar();
  } catch(e) {
    alert("Error al crear categoría: " + (e.response?.data?.error || e.message));
  }
};

onMounted(cargar);
</script>

<template>
  <div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
      <h2 class="h1">Categorías</h2>
      <div class="small">Organiza tu catálogo</div>
    </div>

    <div class="grid">
      <Card title="Crear categoría">
        <input v-model="nombre" placeholder="Nombre categoría" />
        <div style="display:flex;justify-content:flex-end;margin-top:8px;">
          <button @click="crear">Crear</button>
        </div>
      </Card>

      <Card title="Listado">
        <ul>
          <li v-for="c in categorias" :key="c.id">{{ c.nombre }}</li>
        </ul>
        <div v-if="!categorias.length" class="small">No hay categorías.</div>
      </Card>
    </div>
  </div>
</template>
