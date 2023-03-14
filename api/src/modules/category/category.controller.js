const categoryService = require("./category.service")

const findAll = async (req,res) => {
    res.send(await categoryService.findAll())
}
const findById = async (req, res) => {
    res.send(await categoryService.findById(req.params.prodId))
}

const createProduct = async (req, res) => {
    res.send(await categoryService.createProduct(req))
}

const deleteProduct = async (req, res) => {
    res.send(await categoryService.deleteProduct(req.params.prodId))
}

const updateProduct = async (req,res) => {
    res.send(await categoryService.updateProduct(req.params.prodId, req.body))
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