const express = require('express');
const Category = require('../../../db/schemas/category.schema');


const findAll = async () => {
    let categories
    try {
        categories = await Category.find()
        if (categories.length == 0) {
            await createLog('user', 'Category Fetching Failed', 'get')
            return {status: "failed", message: "Kayit bulunamadi"}
        }
        else {
            await createLog('user', 'Category Fetching Success', 'get')
            return {status: "ok", message: categories}
        }
    } catch (err) {
        await createLog('user', 'Category Fetching Failed', 'get')
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

const createCategory = async (req) => {
    const {name, img} = req.body;
    let category = new Category({name, img})
    try {
        await category.save()
        await createLog('user', `${category.name} - Category Created Successfully`, 'post')
        return {status: "ok", message: "Kayit basariyla kaydedildi.", category}
    }
    catch (err) {
        await createLog('user', 'Category Cant Created Successfully', 'post')
        return{status: "failed", message: err}
    }
}

const deleteCategory = async (id) => {
    try {
        let category = await Category.findByIdAndDelete(id)
        if (category != null) {
            await createLog('user', `${category.name} - Category Deleted Successfully`, 'delete')
            return {status: "ok", message: 'Kayit basariyla silindi', category}
        }
        else {
            await createLog('user', 'Category Cant Find', 'delete')
            return {status: "failed", message: 'Kayit bulunamadi'}
        }
    }
    catch (err) {
        await createLog('user', 'Category Cant Deleteded', 'delete')
        return {status: "failed", message: err}
    }
}

const updateCategory = async (id, reqCtg) => {
    try {
        const {name, img} = reqCtg
        const oldData = (await findById(id)).message
        await Category.findByIdAndUpdate(id, { $set: {name, img}})
        await createLog('user', 'Category Updated Successfully', 'patch')
        return {status: 'ok', message: reqCtg, oldData}
    }
    catch (err) {
        await createLog('user', 'Category CAnt Updated Successfully', 'patch')
        return {status: 'failed', message: err}
    }
}
const createLog = async (user, info, method) => {
    let log = {
        user: user,
        info: info,
        method: method
    }
    await fetch('http://localhost:3000/log/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(log),
    })
}

module.exports = {
    findAll,
    findById,
    createCategory,
    deleteCategory,
    updateCategory,
};