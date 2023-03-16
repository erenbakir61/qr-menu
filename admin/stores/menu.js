import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menuStore', {
    state: () => {
        return {
            ctgFetchUrl: 'http://localhost:3000/category/',
            prdFetchUrl: 'http://localhost:3000/menu/',
            categories: [],
            products: [],
        }
    },
    actions: {
        increment() {
            this.count++
        },
    },
})
