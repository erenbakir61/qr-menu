const express = require('express');
const Menu = require('../../../db/schemas/menu.schema');
const Log = require("../../../db/schemas/log.schema");


const findAll = async () => {
    let data
    try {
        data = await Menu.find()
        if (data.length == 0) {
            return {status: "failed", data: null, message: "Kayit bulunamadi"};
        }
        else {
            return {status: "ok", message: data}
        }
    } catch (err) {
        return {status: "failed", message: err}
    }
};

const findById = async (id) => {
    let product
    try {
        product = await Menu.findById(id)
        if (product.length == 0) {
            return {status: "failed", message: "Kayit bulunamadi"}
        }
        else {
            return {status: "ok", message: product}
        }
    }
    catch (err) {
        return {status: "failed", message: 'Kayit bulunamadi'}
    }
}
const findByName = async (name) => {
    let product
    try {
        product = await Menu.find({'name': name})
        if (product.length == 0) {
            return {status: "failed", message: "Kayit bulunamadi"}
        }
        else {
            return {status: "ok", message: product}
        }
    }
    catch (err) {
        return {status: "failed", message: 'Kayit bulunamadi'}
    }
}

const findCtg = async (ctgName) => {
    let data
    try {
        data = await Menu.find({'type': ctgName})
        if (data) {
            return {status: 'ok', message: data}
        }
        else {
            return {status: 'failed', message: 'Kayit bulunamadi'}
        }
    }
    catch (err) {
        return {status: 'failed', message: err}
    }
}

const createProduct = async (req) => {
    const {name, price, type} = req.body;
    let product = new Menu({name, price, type})
    try {
        if (price >= 999 || price <= 0 || isNaN(price)) {
            return {status: "failed", message: "Price Error"}
        }
        else if (!(product.type)) {
            return {status: "failed", message: "Type Error"}
        }
        else {
            await product.save()
            return {status: "success", message: "Product Created Successfully", product}
        }
    }
    catch (err) {
        return{status: "failed", message: err}
    }
}

const deleteProduct = async (id) => {
    try {
        let product = await Menu.findByIdAndDelete(id)
        if (product != null) {
            return {status: "ok", message: 'Kayit basariyla silindi', product}
        }
        else {
            return {status: "failed", message: 'Kayit bulunamadi'}
        }
    }
    catch (err) {
        return {status: "failed", message: err}
    }
}

const updateProduct = async (id, reqProd) => {
    try {
        const {name, price, type} = reqProd
        const oldData = (await findById(id)).message
        if (price >= 999 || price <= 0 || isNaN(price)) {
            return {status: "failed", message: "Price Error"}
        }
        else if (!(type)) {
            return {status: "failed", message: "Type Error"}
        }
        else {
            await Menu.findByIdAndUpdate(id, { $set: {name, price, type}})
            return {status: 'success', message: 'Product Updated Successfully', reqProd, oldData}
        }

    }
    catch (err) {
        return {status: 'failed', message: err}
    }
}

const createLog = async (user, info, method) => {
    const log = { user: user, info: info, method: method };
    await fetch('http://localhost:3000/log/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(log),
    })
      .then((response) => response.json)
      .then((data) => console.log(data))
}

module.exports = {
    findAll,
    findById,
    findByName,
    createProduct,
    deleteProduct,
    updateProduct,
    findCtg,
};