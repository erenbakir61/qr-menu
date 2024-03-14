import { defineStore } from 'pinia';

export const useCategoryStore = defineStore('categoryStore', {
  state: () => {
    return {
      ctgFetchUrl: 'http://localhost:3000/category/',
      prdFetchUrl: 'http://localhost:3000/menu/',
      ctgImgFetchUrl: 'http://localhost:3000/public/images/categories/',
      categories: [],
      products: [],
      editPanelCtg: {},
      requestCtgBody: {},
      categoryEditPanelIsOpen: false,
      categoryEditPanelError: false,
      categoryCreatePanelIsOpen: false,
    };
  },
  actions: {
    categoryEditModalOpener(category) {
      this.editPanelCtg = {};
      if (this.categoryEditPanelIsOpen === false) {
        this.editPanelCtg = { ...category };
        this.categoryEditPanelIsOpen = true;
      } else {
        this.categoryEditPanelIsOpen = false;
      }
    },
    categoryCreateModalOpener() {
      this.requestCtgBody = {};
      this.categoryCreatePanelIsOpen = this.categoryCreatePanelIsOpen === false;
    },
    async createCategory(name) {
      this.requestCtgBody.img = name;
      if (name) {
        await fetch(this.ctgFetchUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.requestCtgBody),
        })
          .then((response) => response.json())
          .then((this.categoryCreatePanelIsOpen = false));
      } else {
        console.log('austin we have a problem');
      }
    },
    async updateCategory() {
      await fetch(this.ctgFetchUrl + this.editPanelCtg._id, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.editPanelCtg),
      })
        .then((response) => response.json())
        .then(() => {
          const indexElement = this.categories.findIndex((i) => i._id === this.editPanelCtg._id);
          this.categories[indexElement] = this.editPanelCtg;
          this.categoryEditPanelIsOpen = false;
        });
    },
    async deleteCategory(category) {
      await fetch(this.ctgFetchUrl + this.editPanelCtg._id, {
        method: 'DELETE',
      }).then(() => {
        const indexElement = this.categories.findIndex((i) => i._id === category._id);
        this.categories.splice(indexElement, 1);
        this.categoryEditPanelIsOpen = false;
      });
    },
  },
});
