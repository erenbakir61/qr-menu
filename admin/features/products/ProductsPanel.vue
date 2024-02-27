<script setup>
import { useMenuStore } from '~/stores/menu';
import { onBeforeMount, ref } from 'vue';
import { useProductStore } from '~/stores/products';
import ProductsEditPanel from '~/components/modals/products/ProductsEditPanel.vue';
import ProductCreatePanel from '~/components/modals/products/ProductCreatePanel.vue';

const menuStore = useMenuStore();
const productStore = useProductStore();
const currentCtg = ref('All');

const ctgChange = () => {
  productStore.filteredProducts = [];
  if (currentCtg.value === 'All') {
    productStore.filteredProducts = productStore.products;
  }
  for (let prd of productStore.products) {
    if (prd.type === currentCtg.value) {
      productStore.filteredProducts.push(prd);
    }
  }
  return productStore.filteredProducts.value;
};

onBeforeMount(async () => {
  await fetch(productStore.prdFetchUrl)
    .then((response) => response.json())
    .then((json) => {
      productStore.products = json.message;
      productStore.filteredProducts = json.message;
    });
  await fetch(productStore.ctgFetchUrl)
    .then((response) => response.json())
    .then((json) => (productStore.categories = json.message));
});
</script>

<template>
  <div id="products-panel">
    <div class="row">
      <button v-on:click="productStore.createPrdOpener" class="create-category">
        <img src="@/assets/img/add.svg" alt="Add Product" />
      </button>
      <div class="products-content container">
        <div class="products-panel_header">
          <h3>Category:</h3>
          <div class="category_list">
            <select name="categories" id="categories" v-model="currentCtg" v-on:change="ctgChange">
              <option value="All">All</option>
              <option v-for="ctg in productStore.categories" v-bind:value="ctg.name">{{ ctg.name }}</option>
            </select>
          </div>
        </div>
        <div class="products-wrapper">
          <div class="products-header">
            <h4>Product Name <span>Price</span></h4>
          </div>
          <div class="products-body">
            <div v-show="!(productStore.products.length > 0)">
              <img src="/loading.svg" alt="Loader" style="width: 5rem; margin: 0 auto" />
            </div>
            <ProductsList />
          </div>
        </div>
      </div>
    </div>
  </div>
  <ProductsEditPanel v-if="productStore.productEditPanelIsOpen" />
  <ProductCreatePanel v-if="productStore.productCreatePanelIsOpen" />
</template>

<style>
#products-panel {
  width: 65%;
  position: relative;
  margin-left: 5rem;
  padding: 5rem 5rem;
  background-color: #ffffff;
  border-radius: 2rem;
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.products-wrapper {
  margin-top: 5rem;
  padding-bottom: 2rem;
  border-radius: 2rem;
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.products-header {
  background-color: #f4f5f6;
  padding: 1.5rem 2rem;
  border-radius: 1rem;
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.products-header h4 {
  display: inline-block;
}

.products-panel_header {
  display: flex;
  align-items: center;
}

.products-panel_header .category_list {
  margin-left: 1rem;
}

.products-panel_header .category_list select {
  padding: 0.4rem 1rem;
  background-color: #f4f5f6;
  border: 2px solid #f4f5f6;
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.products-header h4 span {
  position: absolute;
  left: 50%;
}

.products-body {
  height: 40vh;
  overflow-y: scroll;
  overflow-x: hidden;
  margin-top: 3rem;
}

.products-body .products-item span {
  position: absolute;
  left: 50%;
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
