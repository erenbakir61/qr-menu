import { defineStore } from 'pinia';

export const useProductStore = defineStore('productsStore', {
  state: () => {
    return {
      ctgFetchUrl: 'http://localhost:3000/category/',
      prdFetchUrl: 'http://localhost:3000/menu/',
      categories: [],
      products: [],
      filteredProducts: [],
      editPanelPrd: {},
      requestPrdBody: {},
      productEditPanelIsOpen: false,
      productEditPanelError: false,
      productCreatePanelIsOpen: false,
    };
  },
  actions: {
    productEditPanelOpener(product) {
      this.editPanelPrd = {};
      if (this.productEditPanelIsOpen === false) {
        this.productEditPanelIsOpen = true;
        this.editPanelPrd = { ...product };
      } else {
        this.productEditPanelIsOpen = false;
      }
    },
    createPrdOpener() {
      this.requestPrdBody = {};
      this.productCreatePanelIsOpen = this.productCreatePanelIsOpen === false;
    },
    async deletePrd(product) {
      console.log(product);
      await fetch(this.prdFetchUrl + product._id, { method: 'DELETE' })
        .then(this.filteredProducts.pop(product))
        .then((this.productEditPanelIsOpen = false));
    },
    async createPrd(product) {
      await fetch(this.prdFetchUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      })
        .then((response) => response.json())
        .then((data) => this.filteredProducts.push(data.product))
        .then((this.productCreatePanelIsOpen = false));
    },
    async updatePrd(product) {
      if (product.price >= 0 && product.price <= 999) {
        await fetch(this.prdFetchUrl + product._id, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.editPanelPrd),
        })
          .then((response) => response.json())
          .then((this.productEditPanelError = false))
          .then((this.productEditPanelIsOpen = false));
      } else this.productEditPanelError = true;
    },
  },
});
