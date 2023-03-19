import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menuStore', {
    state: () => {
        return {
            ctgFetchUrl: 'http://localhost:3000/category/',
            prdFetchUrl: 'http://localhost:3000/menu/',
            categories: [],
            products: [],
            filteredPrd: [],
            editPanelCtg: [],
            editPanelPrd: [],
            requestPrdBody: {
                'title': '',
                'price': '',
                'type': '',
            },
            categoryEditPanelIsOpen: false,
            categoryCreatePanelIsOpen: false,
            productEditPanelIsOpen: false,
            productCreatePanelIsOpen: false,
        }
    },
    actions: {
        editPanelOpener(category) {
            this.editPanelCtg = []
            if (this.categoryEditPanelIsOpen == false) {
                this.categoryEditPanelIsOpen = true
                this.editPanelCtg.push(category)
            }
            else {
                this.categoryEditPanelIsOpen = false
            }
        },
        productEditPanelOpener(product) {
            this.editPanelPrd = []
            if (this.productEditPanelIsOpen == false) {
                this.productEditPanelIsOpen = true
                this.editPanelPrd.push(product)
            }
            else {
                this.productEditPanelIsOpen = false
            }
        },
        createCtgOpener() {
            if (this.categoryCreatePanelIsOpen == false) {
                this.categoryCreatePanelIsOpen = true
            }
            else {this.categoryCreatePanelIsOpen = false}
        },
        createPrdOpener() {
            if (this.productCreatePanelIsOpen == false) {
                this.productCreatePanelIsOpen = true
            }
            else {this.productCreatePanelIsOpen = false}
        },
        async deletePrd(product) {
            await fetch(this.prdFetchUrl+product._id, { method: 'DELETE' })
                .then(this.filteredPrd.pop(product))
                .then(this.productEditPanelIsOpen = false)
        },
        async createPrd() {
            await fetch(this.prdFetchUrl, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.requestPrdBody)
            })
                .then(response => response.json())
                .then(data => this.filteredPrd.push(data.product))
                .then(this.productCreatePanelIsOpen = false)
                .then(this.requestPrdBody = {'title': '', 'price': '', 'type': ''})
        },
        async updatePrd(product) {
            await fetch(this.prdFetchUrl+product._id, {
                method: 'PATCH',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.requestPrdBody)
            })
                .then(response => response.json())
                .then(this.productEditPanelIsOpen = false)
                .then(this.requestPrdBody = {'title': '', 'price': '', 'type': ''})
               // .then(() => this.filteredPrd.pop(product))
               // .then(data => this.filteredPrd.push(data.product))
        },
    },
})
