const express = require('express');
const Category = require('../../../db/schemas/category.schema');


const findAll = async () => {
    let categories
    try {
        categories = await Category.find()
        if (categories.length == 0) {
            return {status: "failed", message: "Kayit bulunamadi"}
        }
        else {
            return {status: "ok", message: categories}
        }
    } catch (err) {
        return {status: "failed", message: err}
    }
};

const findById = async (id) => {
    let category
    try {
        category = await Category.findById(id)
        if (category.length == 0) {
            return {status: "failed", message: "Kayit bulunamadi"}
        }
        else {
            return {status: "ok", message: category}
        }
    }
    catch (err) {
        return {status: "failed", message: 'Kayit bulunamadi'}
    }
}

const createProduct = async (req) => {
    const {name, img} = req.body;
    let category = new Category({name, img})
    try {
        await category.save()
        return {status: "ok", message: "Kayit basariyla kaydedildi.", category}
    }
    catch (err) {
        return{status: "failed", message: err}
    }
}

const deleteProduct = async (id) => {
    try {
        let category = await Category.findByIdAndDelete(id)
        if (category != null) {
            return {status: "ok", message: 'Kayit basariyla silindi', category}
        }
        else {
            return {status: "failed", message: 'Kayit bulunamadi'}
        }
    }
    catch (err) {
        return {status: "failed", message: err}
    }
}

const updateProduct = async (id, reqCtg) => {
    try {
        const {name, img} = reqCtg
        const oldData = (await findById(id)).message
        await Category.findByIdAndUpdate(id, { $set: {name, img}})
        return {status: 'ok', message: reqCtg, oldData}
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