<script setup>
import { ref, onMounted } from "vue";
import Card from "../components/Card.vue";
import { api } from "../services/api";

const usuarios = ref([]);
const nombre = ref("");
const email = ref("");
const loading = ref(false);
const error = ref("");

const cargar = async () => {
  loading.value = true;
  try {
    const res = await api.get("/usuarios");
    usuarios.value = res.data;
  } catch (e) {
    error.value = "No se pudieron cargar los usuarios";
  } finally { loading.value = false; }
};

const crear = async () => {
  try {
    if (!nombre.value || !email.value) return;
    await api.post("/usuarios", { nombre: nombre.value, email: email.value });
    nombre.value = ""; email.value = "";
    await cargar();
  } catch (e) {
    error.value = "Error creando usuario";
  }
};

const eliminar = async (id) => {
  if (!confirm("Eliminar usuario?")) return;
  try {
    await api.delete(`/usuarios/${id}`);
    await cargar();
  } catch(e) {
    error.value = "Error al eliminar usuario: " + (e.response?.data?.error || e.message);
  }
};

onMounted(cargar);
</script>

<template>
  <div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
      <h2 class="h1">Usuarios</h2>
      <div class="small">Gestiona tus clientes</div>
    </div>

    <div class="grid">
      <Card title="Crear cliente">
        <div class="form-row">
          <input v-model="nombre" placeholder="Nombre" />
          <input v-model="email" placeholder="Email" />
        </div>
        <div style="display:flex;justify-content:flex-end;gap:8px;">
          <button @click="crear">Crear cliente</button>
        </div>
      </Card>

      <Card title="Lista de clientes">
        <div v-if="loading"><div class="small">Cargando...</div></div>
        <div v-else>
          <table class="table">
            <thead><tr><th>Nombre</th><th>Email</th><th>Acciones</th></tr></thead>
            <tbody>
              <tr v-for="u in usuarios" :key="u.id">
                <td>{{ u.nombre }}</td>
                <td>{{ u.email }}</td>
                <td class="actions">
                  <button class="btn-ghost" @click="alert(JSON.stringify(u, null, 2))">Ver</button>
                  <button class="btn-danger" @click="eliminar(u.id)">Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-if="!usuarios.length" class="small">No hay usuarios.</div>
        </div>
      </Card>
    </div>

    <div v-if="error" style="margin-top:12px;color:var(--danger)">{{ error }}</div>
  </div>
</template>
