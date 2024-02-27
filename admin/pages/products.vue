<template>
  <user-menu />
  <div id="panel_content">
    <Sidebar />
    <ProductsPanel />
  </div>
</template>

<script setup>
import ProductsPanel from '~/features/products/ProductsPanel.vue';
</script>
