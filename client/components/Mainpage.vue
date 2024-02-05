<template>
  <main>
    <section id="main_products">
      <div class="container">
        <div class="row">
          <div v-for="ctg in categories" class="col-6 col-md-4 col-lg-2">
            <div class="card">
              <RouterLink class="card_image" v-bind:to="'product/' + ctg.name">
                <img
                    v-bind:src="'http://localhost:3000/public/images/categories/' + ctg.img"
                    class="card-img-top"
                    v-bind:alt="ctg.name"
                />
              </RouterLink>
              <div class="card-body text-center">
                <h5 class="card-title">
                  <a href="#">{{ ctg.name }}</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
  main {
    margin-top: 20%;
  }
  main .row .col-6{
    margin-bottom: 2rem;
  }
  main .card {
    border: 0px;
    border-radius: 2px;
    background: #e0e0e0;
    box-shadow:  11px 11px 22px #b3b3b3,
    -11px -11px 22px #ffffff;
  }
  main .card .card_image {
    min-height: 11rem;
    max-height: 11rem;
    overflow: hidden;
  }
  main .card .card-body h5 {
    margin-bottom: 0;
  }
  main .card, main img {
    border-radius: 0!important;
  }
  @media (min-width: 768px) {
    main {
      margin-top: 30%;
      margin-bottom: 5%;
    }
  }
  @media (min-width: 992px) {
  main {
    margin-top: 15%;
    margin-bottom: 5%;
    }
  }
</style>

<script>
export default {
  data() {
    return {
      fetchURL: 'http://localhost:3000/category/',
      categories: {},
    };
  },
  created() {
    fetch(this.fetchURL)
        .then(response => response.json())
        .then(json => this.categories = json.message)
  }
}
</script>

<script setup>
const route = useRoute()
</script>