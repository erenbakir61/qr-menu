<template>
  <div id="products-panel">
    <div class="row">
      <div class="products-content container">
        <h3>Category: <span>Coffee</span></h3>
        <div class="products-wrapper">
          <div class="products-header">
            <h4>Product Name <span>Price</span></h4>
          </div>
          <div class="products-body">
            <ul class="products-list">
              <li v-for="prd in products" class="products-item">
                <p>{{ prd.name }}<span>{{  prd.price }}</span></p>
                <div class="edit-buttons">
                  <button><img src="../assets/img/trash.svg" alt="Delete"></button>
                  <button><img src="../assets/img/edit.svg" alt="Edit"></button>
                  <button><img src="../assets/img/check.svg" alt="Ok"></button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  #products-panel {
    width: 65%;
    position: relative;
    display: inline-block;
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
</style>

<script>
export default {
  data() {
    return {
      fetchUrl: 'http://localhost:3000/menu/',
      products: [],
    };
  },
  created() {
    fetch(this.fetchUrl)
        .then(response => response.json())
        .then(json => this.products = json.message)
  }
}
</script>