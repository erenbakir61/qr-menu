import { defineStore } from 'pinia';

export const useMenuStore = defineStore('menuStore', {
  state: () => {
    return {
      ctgFetchUrl: 'http://localhost:3000/category/',
      prdFetchUrl: 'http://localhost:3000/menu/',
      ctgImgFetchUrl: 'http://localhost:3000/public/images/categories/',
      categories: [],
      products: [],
      filteredPrd: [],
      editPanelCtg: {},
      editPanelPrd: {},
      requestCtgBody: {},
      requestPrdBody: {},
      categoryEditPanelIsOpen: false,
      categoryEditPanelError: false,
      categoryCreatePanelIsOpen: false,
      productEditPanelIsOpen: false,
      productEditPanelError: false,
      productCreatePanelIsOpen: false,
    };
  },
  actions: {
    editPanelOpener(category) {
      this.editPanelCtg = {};
      if (this.categoryEditPanelIsOpen === false) {
        this.editPanelCtg = category;
        this.categoryEditPanelIsOpen = true;
      } else {
        this.categoryEditPanelIsOpen = false;
      }
    },
    productEditPanelOpener(product) {
      this.editPanelPrd = {};
      if (this.productEditPanelIsOpen === false) {
        this.productEditPanelIsOpen = true;
        this.editPanelPrd = product;
      } else {
        this.productEditPanelIsOpen = false;
      }
    },
    createCtgOpener() {
      this.editPanelCtg = [];
      this.categoryCreatePanelIsOpen = this.categoryCreatePanelIsOpen === false;
    },
    createPrdOpener() {
      this.requestPrdBody = {};
      this.productCreatePanelIsOpen = this.productCreatePanelIsOpen === false;
    },
    async deletePrd(product) {
      await fetch(this.prdFetchUrl + product._id, { method: 'DELETE' })
        .then(this.filteredPrd.pop(product))
        .then((this.productEditPanelIsOpen = false));
    },
    async createPrd(product) {
      await fetch(this.prdFetchUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      })
        .then((response) => response.json())
        .then((data) => this.filteredPrd.push(data.product))
        .then((this.productCreatePanelIsOpen = false));
    },
    async createCtg(name) {
      this.requestCtgBody.img = name;
      await fetch(this.ctgFetchUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.requestCtgBody),
      })
        .then((response) => response.json())
        .then((this.categoryCreatePanelIsOpen = false));
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
    async updateCtg() {
      await fetch(this.ctgFetchUrl + this.editPanelCtg._id, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.requestCtgBody),
      })
        .then((response) => response.json())
        .then((this.categoryEditPanelIsOpen = false));
    },
  },
});
