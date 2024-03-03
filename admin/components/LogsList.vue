<template>
  <div class="logs-list_wrapper">
    <table class="logs-list">
      <tr>
        <th>User</th>
        <th>Method</th>
        <th>Info</th>
        <th>Date</th>
      </tr>
      <tr v-for="log in logStore.logs" class="log-item">
        <td>{{ log.user }}</td>
        <td v-bind:class="log.method" class="log-method">
          {{ log.method }}
        </td>
        <td>{{ log.info }}</td>
        <td>{{ log.creatingDate.split('T')[0] }}</td>
        <td>
          <button v-on:click="logStore.deleteLog(log)"><img src="@/assets/img/trash.svg" alt="Delete Log" /></button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { useLogStore } from '~/stores/logs';

const logStore = useLogStore();
</script>

<style>
.log-item button {
  background-color: #f4f5f6;
  border: 0;
  padding: 0.25rem;
  width: 2.5rem;
  margin-left: 1rem;
}
.logs-list {
  width: 100%;
}
.log-item .log-method {
  display: flex;
  justify-content: center;
  margin: 2px 10px 5px 0;
  border-radius: 10px;
  padding: 0 1px;
  text-transform: uppercase;
  color: #fff;
}
.log-item td.post {
  color: green;
}
.log-item td.get {
  color: blue;
}
.log-item td.patch {
  color: yellow;
}
.log-item td.delete {
  color: red;
}
.logs-list th {
  width: 100%;
  padding: 12px 0;
  text-align: left;
  color: rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid #ddd;
}
.logs-list td,
.logs-list th {
  padding-bottom: 10px;
}
.logs-list tr {
  display: grid;
  grid-template-columns: 5rem 5rem auto 15% 3rem;
}
.log-item {
  margin-bottom: 0.5rem;
}
</style>
