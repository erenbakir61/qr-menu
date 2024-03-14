<script setup>
import { useProductStore } from '~/stores/products';
const productStore = useProductStore();
</script>

<template>
  <ul class="products-list px-4">
    <li v-for="prd in productStore.filteredProducts" class="products-item" v-bind:key="prd._id">
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
  border-radius: 10px;
}

.products-item p {
  margin: 0.25rem 0;
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
