<script setup>
defineProps({ title: { type: String, default: "" } });
</script>

<template>
  <div class="card">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
      <h3 style="margin:0;">{{ title }}</h3>
    </div>
    <slot />
  </div>
</template>
