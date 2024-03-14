<template>
  <div id="sidebar">
    <div class="sidebar-wrapper">
      <ul class="sidebar-list">
        <li class="sidebar-item">
          <NuxtLink to="category"> <img src="../assets/img/categories.svg" alt="Categories" />Categories</NuxtLink>
        </li>
        <li class="sidebar-item">
          <NuxtLink to="products"> <img src="../assets/img/products.svg" alt="Products" />Products</NuxtLink>
        </li>
        <li class="sidebar-item">
          <NuxtLink to="logs"> <img src="../assets/img/log.svg" alt="Logs" />Logs</NuxtLink>
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
  display: flex;
  justify-content: center;
}

#sidebar .sidebar-list .sidebar-item img {
  width: 1.8rem;
  margin-right: 1rem;
}

#sidebar .sidebar-list a {
  width: 100%;
  color: #000000;
  font-size: 1.3rem;
  text-decoration: none;
  margin: 0.3rem 0.1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}
#sidebar li a.router-link-active {
  background-color: #f4f5f6;
}

@media (min-width: 1900px) {
  #sidebar {
    width: 12%;
  }
}
</style>
