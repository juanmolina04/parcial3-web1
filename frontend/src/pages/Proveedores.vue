<script setup>
import { ref, onMounted } from "vue";
import Card from "../components/Card.vue";
import { api } from "../services/api";

const proveedores = ref([]);
const nombre = ref("");
const telefono = ref("");

const cargar = async () => {
  const res = await api.get("/proveedores");
  proveedores.value = res.data;
};

const crear = async () => {
  if(!nombre.value) return;
  try {
    await api.post("/proveedores", { nombre: nombre.value, telefono: telefono.value });
    nombre.value = ""; telefono.value = "";
    await cargar();
  } catch(e) {
    alert("Error al crear proveedor: " + (e.response?.data?.error || e.message));
  }
};

const eliminar = async (id) => {
  if(!confirm("Eliminar proveedor?")) return;
  try {
    await api.delete(`/proveedores/${id}`);
    await cargar();
  } catch(e) {
    alert("Error al eliminar proveedor: " + (e.response?.data?.error || e.message));
  }
};

onMounted(cargar);
</script>

<template>
  <div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
      <h2 class="h1">Proveedores</h2>
      <div class="small">Contactos de suministro</div>
    </div>

    <div class="grid">
      <Card title="Agregar proveedor">
        <div style="display:grid;gap:8px;">
          <input v-model="nombre" placeholder="Nombre" />
          <input v-model="telefono" placeholder="Teléfono" />
          <div style="display:flex;justify-content:flex-end;">
            <button @click="crear">Crear proveedor</button>
          </div>
        </div>
      </Card>

      <Card title="Lista">
        <table class="table">
          <thead><tr><th>Nombre</th><th>Teléfono</th><th>Acciones</th></tr></thead>
          <tbody>
            <tr v-for="pr in proveedores" :key="pr.id">
              <td>{{ pr.nombre }}</td>
              <td>{{ pr.telefono }}</td>
              <td class="actions">
                <button class="btn-ghost" @click="alert(JSON.stringify(pr, null, 2))">Ver</button>
                <button class="btn-danger" @click="eliminar(pr.id)">Eliminar</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-if="!proveedores.length" class="small">No hay proveedores.</div>
      </Card>
    </div>
  </div>
</template>
