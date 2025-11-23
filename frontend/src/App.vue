<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import SideMenu from "./components/SideMenu.vue";
</script>

<template>
  <div>
    <NavBar />
    <div class="layout">
      <SideMenu />
      <main class="main container">
        <RouterView />
      </main>
    </div>
    <footer class="footer">
      ConfeccionesApp • Sistema de gestión • Hecho con ♥ para tu proyecto
    </footer>
  </div>
</template>

<style scoped>
/* nada extra, usamos global.css */
</style>
