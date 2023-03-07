const express = require('express');
const Menu = require('../../../db/schemas/menu.schema');

const findAll = async () => {
    let data
    try {
        data = await Menu.find()
        if (data == null) {
            return {status: "failed", data: null, message: "data is null"}
        }
        else {
            return {status: "ok", data, message: "data bulundu"}
        }
    } catch (err) {
        return {status: "error", message: err}
    }
};

const findById = async (id) => {
    let data
    try {
        data = await Menu.findById(id)
        if (data == null) {
            return {status: "failed", message: "cant find this item"}
        }
        else {
            return {status: "ok", message: "Kayıt bulundu", data}
        }
    }
    catch (err) {
        return {status: "failed", message: err}
    }
}

const createProduct = async () => {

}

module.exports = {
    findAll,
    findById,
    createProduct,
};