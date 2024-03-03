import { defineStore } from 'pinia';

export const useLogStore = defineStore('logsStore', {
  state: () => {
    return {
      logFetchUrl: 'http://localhost:3000/log/',
      logs: [],
      log: {
        user: 'deneme',
        info: 'deneme',
        method: 'post',
      },
    };
  },
  actions: {
    async createLog(log) {
      await fetch(this.logFetchUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(log),
      });
    },
    async deleteLog(log) {
      await fetch(this.logFetchUrl + log._id, { method: 'DELETE' }).then(() => {
        const indexElement = this.logs.findIndex((i) => i._id === log._id);
        this.logs.splice(indexElement, 1);
      });
    },
    async updateLog(product) {
      if (product.price >= 0 && product.price <= 999) {
        await fetch(this.logFetchUrl + product._id, {
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
