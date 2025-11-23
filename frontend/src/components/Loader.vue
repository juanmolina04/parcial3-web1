<script setup>
const props = defineProps({ size: { type: Number, default: 36 } });
</script>

<template>
  <div style="display:flex;align-items:center;justify-content:center;padding:12px;">
    <svg :width="size" :height="size" viewBox="0 0 50 50">
      <circle cx="25" cy="25" r="20" fill="none" stroke="#eee" stroke-width="4"/>
      <path d="M45 25a20 20 0 0 1-20 20" stroke="var(--primary)" stroke-width="4" fill="none" stroke-linecap="round"/>
    </svg>
  </div>
</template>
