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
      productModalError: false,
      productModalErrorMessage: '',
      productCreatePanelIsOpen: false,
    };
  },
  actions: {
    productEditPanelOpener(product) {
      this.editPanelPrd = {};
      if (this.productEditPanelIsOpen) {
        this.productEditPanelIsOpen = false;
        this.productModalError = false;
        this.productModalErrorMessage = '';
      } else {
        this.productEditPanelIsOpen = true;
        this.editPanelPrd = { ...product };
      }
    },
    createPrdOpener() {
      this.requestPrdBody = {};
      this.productModalError = false;
      this.productModalErrorMessage = '';
      this.productCreatePanelIsOpen = this.productCreatePanelIsOpen === false;
    },
    priceInputValueCheck(event) {
      if (isNaN(event.key) && event.key !== 'Backspace') {
        event.preventDefault();
      }
    },
    async deletePrd(product) {
      await fetch(this.prdFetchUrl + product._id, { method: 'DELETE' }).then(() => {
        const indexElement = this.filteredProducts.findIndex((i) => i._id === product._id);
        this.filteredProducts.splice(indexElement, 1);
        this.productEditPanelIsOpen = false;
      });
    },
    async createPrd(product) {
      await fetch(this.prdFetchUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 'success') {
            this.filteredProducts.push(data.product);
            this.createPrdOpener();
          } else {
            this.productModalError = true;
            this.productModalErrorMessage = data.message;
          }
        });
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
