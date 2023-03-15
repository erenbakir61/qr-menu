<template>
  <div id="panel_content">
    <div id="sidebar">
      <div class="sidebar-wrapper">
        <ul class="sidebar-list">
          <li class="sidebar-item"><img src="../assets/img/categories.svg" alt="Categories"><a v-on:click="ctg" href="#">Categories</a></li>
          <li class="sidebar-item"><img src="../assets/img/products.svg" alt="Products"><a v-on:click="prd" href="#">Products</a></li>
          <li class="sidebar-item"><img src="../assets/img/log.svg" alt="Logs"><a href="#">Logs</a></li>
        </ul>
      </div>
    </div>
    <categories-panel />
    <products-panel />
  </div>
</template>

<style>
#panel_content {
  display: flex;
  position: relative;
  top: 12rem;
}
#sidebar {
  background-color: #ffffff;
  width: 15%;
  height: 50vh;
  margin-left: 5%;
  border-radius: 1.5rem;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}
#sidebar .sidebar-list {
  list-style: none;
  padding: 1.5rem 0;
  text-align: center;
}
#sidebar .sidebar-list .sidebar-item{
  margin-top: 3rem;
  display: flex;
  justify-content: center;
}
#sidebar .sidebar-list .sidebar-item img{
  width: 1.8rem;
}
#sidebar .sidebar-list a{
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

<script setup>
const counter = ref(0)
function prd() {
  document.querySelector('#products-panel').style.display = 'block'
  document.querySelector('#categories-panel').style.display = 'none'
}
function ctg() {
  document.querySelector('#products-panel').style.display = 'none'
  document.querySelector('#categories-panel').style.removeProperty('display')
}

</script>