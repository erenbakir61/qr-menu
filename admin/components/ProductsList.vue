<script setup>
import { useLogStore } from '~/stores/logs';
import { useProductStore } from '~/stores/products';
import { onBeforeMount } from 'vue';

const logStore = useLogStore();
const productStore = useProductStore();

onBeforeMount(async () => {
  await fetch(productStore.prdFetchUrl)
    .then((response) => response.json())
    .then((json) => {
      productStore.products = json.message;
      productStore.filteredProducts = json.message;
    });
  await fetch(productStore.ctgFetchUrl)
    .then((response) => response.json())
    .then((json) => (productStore.categories = json.message))
});
</script>

<template>
  <ul class="products-list px-4">
    <li v-for="prd in productStore.filteredProducts" class="products-item">
      <p>
        {{ prd.name }}<span>{{ prd.price + ' ₺' }}</span>
      </p>
      <div class="edit-buttons">
        <button v-on:click="productStore.deletePrd(prd)">
          <img src="@/assets/img/trash.svg" alt="Delete" />
        </button>
        <button v-on:click="productStore.productEditPanelOpener(prd)">
          <img src="@/assets/img/edit.svg" alt="Edit" />
        </button>
      </div>
    </li>
  </ul>
</template>

<style>
.products-body .products-item {
  position: relative;
  padding: 0.4rem 1rem;
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
  top: 0.5rem;
  right: 1rem;
}

.products-body .products-item .edit-buttons button {
  margin-right: 1rem;
  background-color: transparent;
  border: 0;
}
</style>
