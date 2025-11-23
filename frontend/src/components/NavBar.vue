<script setup>
import { ref } from "vue";
const open = ref(false);
</script>

<template>
  <header class="header">
    <div class="container" style="display:flex;align-items:center;justify-content:space-between;">
      <div style="display:flex;align-items:center;gap:12px;">
        <img src="/src/assets/logo.svg" alt="logo" style="width:48px;height:48px;border-radius:8px;background:rgba(255,255,255,0.08);padding:6px;" />
        <div>
          <div class="brand">ConfeccionesApp</div>
          <div class="small">Gestión completa — confecciones y stock</div>
        </div>
      </div>

      <div style="display:flex;align-items:center;gap:12px;">
        <div class="small">Usuario: <strong>Admin</strong></div>
        <button class="btn-ghost" @click="open = !open">Perfil</button>
      </div>
    </div>
  </header>
</template>
