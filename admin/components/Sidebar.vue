<template>
  <div id="sidebar">
    <div class="sidebar-wrapper">
      <ul class="sidebar-list">
        <li class="sidebar-item">
          <img src="../assets/img/categories.svg" alt="Categories" />
          <NuxtLink to="category">Categories</NuxtLink>
        </li>
        <li class="sidebar-item">
          <img src="../assets/img/products.svg" alt="Products" />
          <NuxtLink to="products">Products</NuxtLink>
        </li>
        <li class="sidebar-item">
          <img src="../assets/img/log.svg" alt="Logs" />
          <NuxtLink to="logs">Logs</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
#sidebar {
  background-color: #ffffff;
  width: 20%;
  height: 50vh;
  margin-left: 5%;
  border-radius: 1rem;
  box-shadow:
    0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
}

#sidebar .sidebar-list {
  list-style: none;
  padding: 1.5rem 0;
  text-align: start;
}

#sidebar .sidebar-list .sidebar-item {
  margin-top: 2rem;
  margin-left: 2rem;
  display: flex;
  justify-content: start;
}

#sidebar .sidebar-list .sidebar-item img {
  width: 1.8rem;
}

#sidebar .sidebar-list a {
  color: #000000;
  font-size: 1.3rem;
  text-decoration: none;
  margin-left: 1rem;
}

@media (min-width: 1900px) {
  #sidebar {
    width: 12%;
  }
}
</style>
<script setup lang="ts"></script>
