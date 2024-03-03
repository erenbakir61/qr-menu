<template>
  <user-menu />
  <div id="panel_content">
    <Sidebar />
    <LogPanel />
  </div>
</template>

<script setup>
import LogPanel from '~/features/logs/LogPanel.vue';
</script>
