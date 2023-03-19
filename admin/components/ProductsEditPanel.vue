<template>
  <div id="product-edit-panel">
    <div class="edit-panel_wrapper">
      <div class="edit-panel">
        <button v-on:click="menuStore.productEditPanelOpener()" class="panel-closer"><img src="../assets/img/x.svg" alt="Edit Panel Closer"></button>
        <div class="panel-content">
          <div class="panel-content_main">
            <label class="panel-content_header mt-4" for="newCtgName">New Product Name:</label><input class="product-panel-content_text mt-4" type="text" name="newCtgName" id="newCtgName" placeholder="New Name" v-bind:value="menuStore.editPanelPrd[0].name">
            <label class="panel-content_header" for="newCtgPrc">New Product Price: </label><input class="product-panel-content_text" type="text" name="newCtgPrc" id="newCtgPrc" placeholder="New Price" v-bind:value="menuStore.editPanelPrd[0].price">
            <label class="panel-content_header" for="newPrdType">New Product Type:</label>
            <select name="categories" id="categories" v-model="menuStore.requestPrdBody.type">
              <option v-bind:value="menuStore.editPanelPrd[0].type" selected>Select a category</option>
              <option v-for="ctg in menuStore.categories" v-bind:value="ctg.name">{{ ctg.name }}</option>
            </select>          </div>
        </div>
        <div class="panel_buttons">
          <button v-on:click="menuStore.deletePrd(menuStore.editPanelPrd[0])"><img src="../assets/img/trash.svg" alt="Delete Category">Delete</button>
          <button v-on:click="menuStore.updatePrd((menuStore.editPanelPrd[0]))"><img src="../assets/img/check.svg" alt="Accept Category">Accept</button>
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
#product-edit-panel {
  position: absolute;
  bottom: 15%;
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
  display: flex;
}
.panel-content_main {
  height: 100%;
  font-size: 1.1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.panel-content_main * {
  margin-bottom: 1rem;
}
.product-panel-content_text {
  font-size: 1rem;
  width: 15rem;
  padding: .2rem .5rem;
  border: 2px solid #dddddd;
}
.product-panel-content_text:focus {
  outline: none;
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