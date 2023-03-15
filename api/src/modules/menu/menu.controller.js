const menuService = require("./menu.service")

const findAll = async (req,res) => {
    res.send(await menuService.findAll())
}
const findById = async (req, res) => {
    res.send(await menuService.findById(req.params.prodId))
}
const findByName = async (req, res) => {
    res.send(await menuService.findByName(req.params.prdName))
}

const findCtg = async (req, res) => {
    res.send(await menuService.findCtg(req.params.ctgId))
}

const createProduct = async (req, res) => {
    res.send(await menuService.createProduct(req))
}

const deleteProduct = async (req, res) => {
    res.send(await menuService.deleteProduct(req.params.prodId))
}

const updateProduct = async (req,res) => {
    res.send(await menuService.updateProduct(req.params.prodId, req.body))
}


module.exports = {
    findAll,
    findById,
    findByName,
    findCtg,
    createProduct,
    deleteProduct,
    updateProduct,
}