<template>
  <div id="product-edit-panel">
    <div class="edit-panel_wrapper">
      <div class="edit-panel">
        <button v-on:click="productStore.productEditPanelOpener()" class="panel-closer">
          <img src="@/assets/img/x.svg" alt="Edit Panel Closer" />
        </button>
        <div class="panel-content">
          <div class="panel-content_main">
            <label class="panel-content_header mt-4" for="newCtgName">New Product Name:</label
            ><input
              class="product-panel-content_text mt-4"
              type="text"
              name="newCtgName"
              id="newCtgName"
              placeholder="New Name"
              v-model="productStore.editPanelPrd.name"
            />
            <label class="panel-content_header" for="newCtgPrc">New Product Price: </label
            ><input
              class="product-panel-content_text"
              type="number"
              min="0"
              max="999"
              inputmode="numeric"
              name="newCtgPrc"
              id="newCtgPrc"
              placeholder="New Price"
              v-model="productStore.editPanelPrd.price"
              v-on:keydown="productStore.priceInputValueCheck($event)"
            />
            <label class="panel-content_header" for="newPrdType">New Product Type:</label>
            <select name="categories" id="categories">
              <option v-bind:value="productStore.editPanelPrd.type" selected>Select a category</option>
              <option v-for="ctg in productStore.categories" v-bind:value="ctg.name">{{ ctg.name }}</option>
            </select>
          </div>
          <p style="color: red; position: absolute" v-if="productStore.productEditPanelError">
            Fiyat 0-999 arasi olmalidir.
          </p>
        </div>
        <div class="panel_buttons">
          <button v-on:click="productStore.deletePrd(productStore.editPanelPrd)">
            <img src="@/assets/img/trash.svg" alt="Delete Category" />Delete
          </button>
          <button v-on:click="editProduct(productStore.editPanelPrd)">
            <img src="@/assets/img/check.svg" alt="Accept Category" />Accept
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from '~/stores/products';

const productStore = useProductStore();

const editProduct = async (product) => {
  await fetch(productStore.prdFetchUrl + product._id, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  })
    .then((response) => response.json())
    .then((product = productStore.editPanelPrd))
    .then((productStore.productEditPanelIsOpen = false));
};
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
  box-shadow: 10px 10px 50rem 100vh rgba(0, 0, 0, 0.5);
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
  padding: 0.2rem 0.5rem;
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
  padding: 0.5rem 1rem;
  margin-left: 1rem;
}

.panel_buttons button img {
  margin-right: 0.5rem;
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
