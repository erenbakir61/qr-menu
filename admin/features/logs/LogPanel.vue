<template>
  <div id="logs-panel">
    <div class="row h-100 overflow-auto">
      <div class="logs-content container">
        <div v-show="!(logStore.logs)">
          <img src="/loading.svg" alt="Loader" style="width: 5rem; margin: 0 auto" />
        </div>
        <LogsList />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useLogStore } from "~/stores/logs";


const logStore = useLogStore();

onMounted(async () => {
  await fetch(logStore.logFetchUrl)
    .then((response) => response.json())
    .then((data) => {
      logStore.logs = data.message;
    });
});
</script>

<style>
#logs-panel {
  width: 65%;
  max-height: 85vh;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  display: inline-block;
  margin-left: 3rem;
  margin-bottom: 2rem;
  padding: 2rem 0;
  background-color: #ffffff;
  border-radius: 1rem;
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
}

#logs-panel .logs-content {
  padding: 0 5%;
  width: 100%;
}
</style>
