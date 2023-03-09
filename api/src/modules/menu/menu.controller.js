const menuService = require("./menu.service")

const findAll = async (req,res) => {
    res.send(await menuService.findAll())
}
const findById = async (req, res) => {
    res.send(await menuService.findById(req.params.prodId))
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

const deleteProductFail = async (req, res) => {
    res.send(`Lutfen ID giriniz`).status(400)
}
const createProductFail = async (req, res) => {
    res.send(`Hatali istek`).status(400)
}
const updateProductFail = async (req, res) => {
    res.send(`Hatali istek, lutfen id giriniz`).status(400)
}



module.exports = {
    findAll,
    findById,
    createProduct,
    createProductFail,
    deleteProduct,
    deleteProductFail,
    updateProduct,
    updateProductFail,
}