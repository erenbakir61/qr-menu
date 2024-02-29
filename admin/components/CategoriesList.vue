<template>
  <div v-for="category in categoryStore.categories" class="card-wrapper">
    <div class="card">
      <div class="card_image">
        <img
          v-bind:src="categoryStore.ctgImgFetchUrl + category.img"
          class="card-img-top"
          v-bind:alt="category.name"
          draggable="false"
        />
      </div>
      <div class="card-body text-center">
        <h5 class="card-title">
          <p>{{ category.name }}</p>
        </h5>
        <button v-on:click="categoryStore.categoryEditModalOpener(category)">
          <img src="@/assets/img/settings.svg" alt="Settings" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useCategoryStore } from '~/stores/categories';

const categoryStore = useCategoryStore();
</script>
