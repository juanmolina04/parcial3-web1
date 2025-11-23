<script setup>
import { ref, onMounted, computed } from "vue";
import Card from "../components/Card.vue";
import { api } from "../services/api";

const productos = ref([]);
const carrito = ref([]);
const usuarioId = ref("");
const loading = ref(false);
const pedidos = ref([]);

const cargarProductos = async () => {
  const res = await api.get("/productos");
  productos.value = res.data;
};

const cargarPedidos = async () => {
  const res = await api.get("/pedidos");
  pedidos.value = res.data;
};

const agregarAlCarrito = (producto) => {
  const exists = carrito.value.find(i => i.productoId === producto.id);
  if (exists) exists.cantidad++;
  else carrito.value.push({ productoId: producto.id, cantidad:1, precio: producto.precio, nombre: producto.nombre });
};

const quitar = (id) => {
  carrito.value = carrito.value.filter(i => i.productoId !== id);
};

const total = computed(()=> carrito.value.reduce((s,i)=> s + i.precio * i.cantidad, 0));

const crearPedido = async () => {
  if(!carrito.value.length) return alert("Agrega productos al pedido");
  try {
    const payload = { clienteId: usuarioId.value || 1, items: carrito.value.map(i=>({ productoId: i.productoId, cantidad: i.cantidad, precio: i.precio })) };
    const res = await api.post("/pedidos", payload);
    if(res.data && res.data.factura){
      alert("Pedido creado. Factura total: " + res.data.factura.total);
    } else {
      alert("Pedido creado");
    }
    carrito.value = [];
    await cargarProductos();
    await cargarPedidos();
  } catch(e) {
    const errorMsg = e.response?.data?.error || "Error al crear el pedido";
    alert(errorMsg);
  }
};

onMounted(async ()=>{
  await cargarProductos();
  await cargarPedidos();
});
</script>

<template>
  <div>
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
      <h2 class="h1">Pedidos</h2>
      <div class="small">Crea pedidos y genera facturas</div>
    </div>

    <div class="grid">
      <Card title="Productos disponibles">
        <div style="display:flex;flex-direction:column;gap:8px;max-height:320px;overflow:auto;">
          <div v-for="p in productos" :key="p.id" style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px dashed #f3f3f3;">
            <div>
              <div style="font-weight:700">{{ p.nombre }}</div>
              <div class="small">Precio: {{ p.precio }} - Stock: {{ p.stock ?? 0 }}</div>
            </div>
            <div style="display:flex;gap:8px;">
              <button @click="agregarAlCarrito(p)">Añadir</button>
            </div>
          </div>
          <div v-if="!productos.length" class="small">No hay productos.</div>
        </div>
      </Card>

      <Card title="Carrito">
        <div v-if="!carrito.length" class="small">Carrito vacío</div>
        <div v-else>
          <table class="table">
            <thead><tr><th>Producto</th><th>Cantidad</th><th>Precio</th><th></th></tr></thead>
            <tbody>
              <tr v-for="i in carrito" :key="i.productoId">
                <td>{{ i.nombre }}</td>
                <td>
                  <input type="number" v-model.number="i.cantidad" min="1" style="width:72px;" />
                </td>
                <td>{{ i.precio * i.cantidad }}</td>
                <td><button class="btn-ghost" @click="quitar(i.productoId)">Quitar</button></td>
              </tr>
            </tbody>
          </table>
          <div style="display:flex;justify-content:space-between;align-items:center;margin-top:12px;">
            <div class="small">Total: <strong>{{ total }}</strong></div>
            <div style="display:flex;gap:8px;">
              <input v-model="usuarioId" placeholder="ID cliente (opcional)" />
              <button class="btn-success" @click="crearPedido">Crear pedido</button>
            </div>
          </div>
        </div>
      </Card>
    </div>

    <div style="margin-top:16px;" class="card">
      <h3 style="margin-top:0;">Pedidos realizados</h3>
      <div v-if="!pedidos.length" class="small">Aún no hay pedidos</div>
      <ul>
        <li v-for="pd in pedidos" :key="pd.id">
          Pedido #{{ pd.id }} - Items: {{ pd.items?.length ?? 0 }}
        </li>
      </ul>
    </div>
  </div>
</template>
