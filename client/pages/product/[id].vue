<script setup>
  const route = useRoute()
  // let categoryName = 'deneme'
</script>

<script>
export default {
  data() {
    return {
      fetchUrl: 'http://localhost:3000/menu/product/' + this.$route.params.id,
      products: [],
      ctgName: this.$route.params.id
      };
    },
  created() {
    fetch(this.fetchUrl)
        .then(response => response.json())
        .then(json => this.products = json.message)
  }
}
</script>

<template>
  <head>
    <title>Qr Menu {{ route.params.id }}</title>
  </head>
  <section id="productpage">
    <div class="row">
      <div class="container text-center">
        <section id="main_products">
          <div class="container">
            <div class="row">
              <div class="col text-center">
                <h2>{{ route.params.id }}</h2>
                <ul class="list-group">
                  <li class="list-group-item" v-for="product in products">{{ product.name }}<span>{{ product.price }}</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<style>
  #productpage {margin-bottom: 3rem}
  #productpage h2 {
    border-bottom: 2px solid black;
    display: inline-block;
    padding: 0 .5rem .5rem .5rem;
    margin-bottom: 2.5rem;
  }
  #productpage ul {
    border-radius: 0;
  }
  #productpage ul li {
    border: 0;
    display: flex;
    justify-content: space-between;
    font-size: 1.1rem;
    font-weight: 400;
    margin-bottom: .2rem;
  }
  #productpage ul li:nth-child(even) {
    background-color: #ddd;
  }
  #productpage ul li span {font-weight: normal}
</style>