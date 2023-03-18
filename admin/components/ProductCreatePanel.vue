<template>
  <div id="category-create-panel">
    <div class="edit-panel_wrapper">
      <div class="edit-panel">
        <button v-on:click="menuStore.createPrdOpener()" class="panel-closer"><img src="../assets/img/x.svg" alt="Create Panel Closer"></button>
        <div class="panel-content">
          <div class="panel-content_left">
            <label class="panel-content_header" for="newPrdName">New Product Name:</label><input v-model="menuStore.createPrdBody.name" class="panel-content_text" type="text" name="newPrdName" id="newPrdName" placeholder="New Name">
            <label class="panel-content_header" for="newPrdPrice">New Product Price:</label><input v-model="menuStore.createPrdBody.price" class="panel-content_text" type="text" name="newPrdPrice" id="newPrdPrice" placeholder="New Price">
            <label class="panel-content_header" for="newPrdType">New Product Type:</label><input v-model="menuStore.createPrdBody.type" class="panel-content_text" type="text" name="newPrdType" id="newPrdType" placeholder="New Type">
          </div>
        </div>
        <div class="panel_buttons">
          <button v-on:click="menuStore.createPrd()"><img src="../assets/img/check.svg" alt="Accept Product">Accept</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMenuStore } from "~/stores/menu";
const menuStore = useMenuStore()
</script>

<style>
#category-create-panel {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.edit-panel {
  position: relative;
  background-color: #ffffff;
  padding: 3rem 3rem 5rem 3rem;
  width: 100%;
  border-radius: 2rem;
  box-shadow: 10px 10px 50rem 100vh rgba(0,0,0,.5);
}
.panel-content {
  margin-right: 5rem;
  margin-bottom: 2rem;
  display: flex;
}
.panel-content_left {
  height: 100%;
  font-size: 1.1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.panel-content_left * {
  margin-bottom: 1rem;
}
.panel-content_right {
  margin-bottom: 3rem;
}
.panel-content_text {
  font-size: 1rem;
  width: 12rem;
  padding: .2rem .5rem;
  border: 2px solid #dddddd;
}
.panel-content_text:focus {
  outline: none;
}
.panel-content_upload {
  font-size: 1rem;
}
.card-wrapper .card {
  width: 13rem;
  box-shadow:11px 11px 22px #b3b3b3
}
.card-wrapper .card .card_image {
  height: 11rem;
  overflow: hidden;
}
.panel_buttons {
  position: absolute;
  right: 10%;
  bottom: 2rem;
}
.panel_buttons button {
  background-color: #f4f5f6;
  border: 0;
  padding: .5rem 1rem;
  margin-left: 1rem;
}
.panel_buttons button img {
  margin-right: .5rem;
}
.panel-closer{
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  padding: .3rem;
  border-radius: 5px;
  background-color: transparent;
  border: 0;
}
</style>