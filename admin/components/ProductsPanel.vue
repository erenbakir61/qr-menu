<script>
export default {
  data() {
    return {
      fetchUrl: 'http://localhost:3000/menu/',
      ctgFetchUrl: 'http://localhost:3000/category/',
      products: [],
      filteredPrd: this.products,
      categories: [],
      currentCtg: 'All',
    };
  },
  methods: {
    ctgChange() {
      this.filteredPrd = []
        if (this.currentCtg == 'All') {
          this.filteredPrd = this.products
        }
      for (let prd of this.products) {
        if (prd.type == this.currentCtg) {
          this.filteredPrd.push(prd)
        }
      }
      return this.filteredPrd
    }
  },
  created() {
    fetch(this.fetchUrl)
        .then(response => response.json())
        .then(json => {
          this.products = json.message
          this.filteredPrd = json.message
        })
    fetch(this.ctgFetchUrl)
        .then(response => response.json())
        .then(json => this.categories = json.message);
  },
}
</script>

<template>
  <div id="products-panel">
    <div class="row">
      <div class="products-content container">
        <div class="products-panel_header">
          <h3>Category:</h3>
          <div class="category_list">
            <select name="categories" id="categories" v-model="currentCtg" v-on:change="ctgChange">
              <option value="All">All</option>
              <option v-for="ctg in categories" v-bind:value="ctg.name">{{ ctg.name }}</option>
            </select>
          </div>
        </div>
        <div class="products-wrapper">
          <div class="products-header">
            <h4>Product Name <span>Price</span></h4>
          </div>
          <div class="products-body">
            <ul class="products-list">
              <li v-for="prd in filteredPrd" class="products-item">
                <p>{{ prd.name }}<span>{{  prd.price + ' ₺'}}</span></p>
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
  .products-panel_header {
    display: flex;
    align-items: center;
  }
  .products-panel_header .category_list {
    margin-left: 1rem;
  }
  .products-panel_header .category_list select{
    padding: .4rem 1rem;
    background-color: #f4f5f6;
    border: 2px solid #f4f5f6;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
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

