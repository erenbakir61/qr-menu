import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menuStore', {
    state: () => {
        return {
            ctgFetchUrl: 'http://localhost:3000/category/',
            prdFetchUrl: 'http://localhost:3000/menu/',
            ctgImgFetchUrl: 'http://localhost:3000/public/images/categories/',
            categories: [],
            products: [],
            filteredPrd: [],
            editPanelCtg: [],
            editPanelPrd: [],
            requestCtgBody: {
                'name': '',
                'img': '',
            },
            requestPrdBody: {
                'name': '',
                'price': '',
                'type': '',
            },
            categoryEditPanelIsOpen: false,
            categoryEditPanelError: false,
            categoryCreatePanelIsOpen: false,
            productEditPanelIsOpen: false,
            productEditPanelError: false,
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
                this.requestPrdBody = this.editPanelPrd[0]
            }
            else {
                this.productEditPanelIsOpen = false
            }
        },
        createCtgOpener() {
            this.editPanelCtg = []
            if (this.categoryCreatePanelIsOpen == false) {
                this.categoryCreatePanelIsOpen = true
            }
            else {
                this.categoryCreatePanelIsOpen = false
            }
        },
        createPrdOpener() {
            this.requestPrdBody = []
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
        },
        async createCtg(name) {
            this.requestCtgBody.img = name;
            await fetch(this.ctgFetchUrl, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.requestCtgBody)
            })
                .then(response => response.json())
                .then(this.categoryCreatePanelIsOpen = false)
        },
        async updatePrd(product) {
            if (product.price >= 0 && product.price <= 999) {
                await fetch(this.prdFetchUrl+product._id, {
                    method: 'PATCH',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(this.requestPrdBody)
                })
                    .then(response => response.json())
                    .then(this.productEditPanelError = false)
                    .then(this.productEditPanelIsOpen = false)
            }
            else (
                this.productEditPanelError = true
            )
        },
        async updateCtg() {
            console.log(this.requestCtgBody)
            await fetch(this.ctgFetchUrl+this.editPanelCtg[0]._id, {
                method: 'PATCH',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.requestCtgBody)
            })
                .then(response => response.json())
                .then(this.categoryEditPanelIsOpen = false)
        },
    },
})