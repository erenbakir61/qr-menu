<script setup>
import { useMenuStore } from "~/stores/menu";
import { onBeforeMount , ref} from "vue";

const menuStore = useMenuStore()
const currentCtg = ref('All')

const ctgChange = () => {
  menuStore.filteredPrd = []
  if (currentCtg.value == 'All') {
    menuStore.filteredPrd = menuStore.products
  }
  for (let prd of menuStore.products) {
    if (prd.type == currentCtg.value) {
      menuStore.filteredPrd.push(prd)
    }
  }
  return menuStore.filteredPrd.value
}

onBeforeMount(async () => {
  await fetch(menuStore.prdFetchUrl)
      .then(response => response.json())
      .then(json => {
        menuStore.products = json.message
        menuStore.filteredPrd = json.message;
      })
  await fetch(menuStore.ctgFetchUrl)
        .then(response => response.json())
        .then(json => menuStore.categories = json.message)
})

</script>

<template>
  <div id="products-panel">
    <div class="row">
      <button v-on:click="menuStore.createPrdOpener" class="create-category"><img src="../assets/img/add.svg" alt="Add Product"></button>
      <div class="products-content container">
        <div class="products-panel_header">
          <h3>Category:</h3>
          <div class="category_list">
            <select name="categories" id="categories" v-model="currentCtg" v-on:change="ctgChange">
              <option value="All">All</option>
              <option v-for="ctg in menuStore.categories" v-bind:value="ctg.name">{{ ctg.name }}</option>
            </select>
          </div>
        </div>
        <div class="products-wrapper">
          <div class="products-header">
            <h4>Product Name <span>Price</span></h4>
          </div>
          <div class="products-body">
            <ul class="products-list">
              <li v-for="prd in menuStore.filteredPrd" class="products-item">
                <p>{{ prd.name }}<span>{{  prd.price + ' ₺'}}</span></p>
                <div class="edit-buttons">
                  <button v-on:click="menuStore.deletePrd(prd)"><img src="../assets/img/trash.svg" alt="Delete"></button>
                  <button v-on:click="menuStore.productEditPanelOpener(prd)"><img src="../assets/img/edit.svg" alt="Edit"></button>
                  <button><img src="../assets/img/check.svg" alt="Ok"></button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ProductsEditPanel v-if="menuStore.productEditPanelIsOpen" />
  <ProductCreatePanel v-if="menuStore.productCreatePanelIsOpen"/>
</template>

<style>
  #products-panel {
    width: 65%;
    position: relative;
    margin-left: 5rem;
    padding: 5rem 5rem;
    background-color: #ffffff;
    border-radius: 2rem;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  }
  .products-wrapper {
    margin-top: 5rem;
    padding-bottom: 2rem;
    border-radius: 2rem;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  }
  .products-header {
    background-color: #f4f5f6;
    padding: 1.5rem 2rem;
    border-radius: 1rem;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  }
  .products-header h4{
    display: inline-block;
  }
  .products-panel_header {
    display: flex;
    align-items: center;
  }
  .products-panel_header .category_list {
    margin-left: 1rem;
  }
  .products-panel_header .category_list select{
    padding: .4rem 1rem;
    background-color: #f4f5f6;
    border: 2px solid #f4f5f6;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  }
  .products-header h4 span{
    position: absolute;
    left: 50%;
  }
  .products-body {
    height: 40vh;
    overflow: scroll;
    margin-top: 3rem;
  }
  .products-body .products-item {
    position: relative;
    padding: .4rem 1rem;
  }
  .products-body .products-item:nth-child(odd) {
    background-color: #f4f5f6;
  }
  .products-body .products-item span {
    position: absolute;
    left: 50%;
  }
  .products-body .products-item .edit-buttons {
    display: inline;
    position: absolute;
    top: .5rem;
    right: 1rem;
  }
  .products-body .products-item .edit-buttons button {
    margin-right: 1rem;
    background-color: transparent;
    border: 0;
  }
  .create-category {
    background-color: #ddd;
    border: 0;
    position: absolute;
    top: 0;
    right: 0;
    width: 4rem;
    height: 4rem;
    border-radius: 0 0 0 1rem;
  }
</style>

