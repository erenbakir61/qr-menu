<template>
  <main>
    <div id="panel_content">
      <Sidebar />
      <CategoriesPanel />
    </div>
  </main>
</template>

<style>
body {
  background-color: #f3f4f6;
}
</style>
<script setup lang="ts">
import CategoriesPanel from '~/features/categories/CategoriesPanel.vue';
</script>
