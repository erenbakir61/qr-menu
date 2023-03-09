<template>
  <main>
    <section id="main_products">
      <div class="container">
        <div class="row">
          <div class="col-6 col-md-4 col-lg-2">
            <div class="card">
              <a class="card_image" href="#">
                <img
                    src="@/assets/img/coffee.jpg"
                    class="card-img-top"
                    alt="Restaurant Product"
                />
              </a>
              <div class="card-body text-center">
                <h5 class="card-title">
                  <a href="#">Coffees</a>
                </h5>
              </div>
            </div>
          </div>
          <ul>
            <li v-for="ctg in categories">{{ ctg }}</li>
          </ul>
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
  main .card img {
    position: relative;
    top: -4rem;
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