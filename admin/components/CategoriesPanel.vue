<template>
  <div id="categories-panel">
    <div class="row">
      <div class="categories-content container">
        <div v-for="ctg in categories" class="card-wrapper">
          <div class="card">
            <a class="card_image" v-bind:href="'#'">
              <img
                  v-bind:src="'_nuxt/assets/img/products/' + ctg.img"
                  class="card-img-top"
                  v-bind:alt="ctg.name"
              />
            </a>
            <div class="card-body text-center">
              <h5 class="card-title">
                <a v-bind:href="'#'">{{ ctg.name }}</a>
              </h5>
              <button><img src="../assets/img/settings.svg" alt="Settings"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  #categories-panel {
    display: none!important;
    width: 65%;
    height: 100%;
    position: relative;
    display: inline-block;
    margin-left: 5rem;
    padding: 5rem 0;
    background-color: #ffffff;
    border-radius: 2rem;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  }
  #categories-panel .categories-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 2rem;
    column-gap: 5%;
    padding: 0 10%;
  }
  #categories-panel .card-wrapper {
    display: inline-block;
  }
  #categories-panel .card {
    width: 13rem;
    box-shadow:11px 11px 22px #b3b3b3
  }
  #categories-panel .card .card_image {
    height: 11rem;
    overflow: hidden;
  }
  #categories-panel .card img.card-img-top {
    width: 100%;
    position: relative;
    bottom: 5rem;
  }
  #categories-panel .card .card-body button {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: .3rem;
    border-radius: 5px 0 0 5px;
    display: inline-block;
    background-color: #ddd;
    border: 0;
  }
  @media (min-width: 2200px) {
    .categories-content {
      grid-template-columns: repeat(5, 1fr)!important;
    }
  }
  @media (max-width: 1700px) {
    .categories-content {
      grid-template-columns: repeat(3, 1fr)!important;
    }
  }  @media (max-width: 1200px) {
    .categories-content {
      grid-template-columns: repeat(2, 1fr)!important;
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