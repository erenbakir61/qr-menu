<template>
  <div id="category-create-panel">
    <div class="edit-panel_wrapper">
      <div class="edit-panel">
        <button v-on:click="productStore.createPrdOpener()" class="panel-closer">
          <img src="@/assets/img/x.svg" alt="Create Panel Closer" />
        </button>
        <div class="panel-content">
          <div class="panel-content_left">
            <label class="panel-content_header" for="newPrdName">New Product Name:</label
            ><input
              v-model="productStore.requestPrdBody.name"
              class="panel-content_text"
              type="text"
              name="newPrdName"
              id="newPrdName"
              placeholder="New Name"
            />
            <label class="panel-content_header" for="newPrdPrice">New Product Price:</label
            ><input
              v-model="productStore.requestPrdBody.price"
              class="panel-content_text"
              type="number"
              min="0"
              max="999"
              inputmode="numeric"
              name="newPrdPrice"
              id="newPrdPrice"
              placeholder="New Price"
              v-on:keydown="productStore.priceInputValueCheck($event)"
            />
            <label class="panel-content_header" for="newPrdType">New Product Type:</label>
            <select name="categories" id="categories" v-model="productStore.requestPrdBody.type">
              <option value="" disabled selected>Select a category</option>
              <option v-for="ctg in productStore.categories" v-bind:value="ctg.name">{{ ctg.name }}</option>
            </select>
          </div>
        </div>
        <p style="color: red; position: absolute" v-if="productStore.productModalError">
          {{ productStore.productModalErrorMessage }}
        </p>
        <div class="panel_buttons">
          <button v-on:click="productStore.createPrd(productStore.requestPrdBody)">
            <img src="@/assets/img/check.svg" alt="Accept Product" />Accept
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from '~/stores/products';

const productStore = useProductStore();
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
  box-shadow: 10px 10px 50rem 100vh rgba(0, 0, 0, 0.5);
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

.panel-content_text {
  font-size: 1rem;
  width: 12rem;
  padding: 0.2rem 0.5rem;
  border: 2px solid #dddddd;
}

.panel-content_text:focus {
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
  padding: 0.5rem 1rem;
  margin-left: 1rem;
}

.panel_buttons button img {
  margin-right: 0.5rem;
}

select#categories {
  padding: 0.4rem 1rem;
  background-color: #f4f5f6;
  border: 2px solid #f4f5f6;
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
}

.panel-closer {
  position: absolute;
  top: 1.5rem;
  right: 2rem;
  padding: 0.3rem;
  border-radius: 5px;
  background-color: transparent;
  border: 0;
}
</style>
