import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menuStore', {
    state: () => {
        return {
            ctgFetchUrl: 'http://localhost:3000/category/',
            prdFetchUrl: 'http://localhost:3000/menu/',
            categories: [],
            products: [],
            editPanel: false,
            editPanelCtg: [],
        }
    },
    actions: {
        editPanelOpener(category) {
            this.editPanelCtg = []
            if (this.editPanel == false) {
                this.editPanel = true
                this.editPanelCtg.push(category)
            }
            else {
                this.editPanel = false
            }
        },
    },
})
