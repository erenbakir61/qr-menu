const express = require('express');
const Menu = require('../../../db/schemas/menu.schema');


const findAll = async () => {
    let data
    try {
        data = await Menu.find()
        if (data.length == 0) {
            return {status: "failed", data: null, message: "Kayit bulunamadi"}
        }
        else {
            return {status: "ok", data, message: data}
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

const createProduct = async (req) => {
    const {name, price, type} = req.body;
    let product = new Menu({name, price, type})
    try {
        let newProduct = await product.save()
        return {status: "ok", message: "Kayit basariyla kaydedildi.", product}
    }
    catch (err) {
        return{status: "failed", message: err}
    }
}

const deleteProduct = async (id) => {
    let product
    try {
        product = await Menu.findById(id)
        if (product.length > 0) {
            await Menu.deleteOne({_id: id})
            return {status: "ok", message: `Kayit basariyla silindi: ${product.name}`, product}
        }
        else {
            return {status: "failed", message: 'Hatali ID girildi'}
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
        await Menu.findByIdAndUpdate(id, { $set: {name, price, type}})
        return {status: 'ok', message: reqProd, oldData}
    }
    catch (err) {
        return {status: 'failed', message: err}
    }
}

module.exports = {
    findAll,
    findById,
    createProduct,
    deleteProduct,
    updateProduct,
};