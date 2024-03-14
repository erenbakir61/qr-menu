const categoryService = require("./category.service")

const findAll = async (req,res) => {
    res.send(await categoryService.findAll())
}
const findById = async (req, res) => {
    res.send(await categoryService.findById(req.params.prodId))
}

const createCategory = async (req, res) => {
    res.send(await categoryService.createCategory(req))
}

const deleteCategory = async (req, res) => {
    res.send(await categoryService.deleteCategory(req.params.prodId))
}

const updateCategory = async (req,res) => {
    res.send(await categoryService.updateCategory(req.params.prodId, req.body))
}

const deleteCategoryFail = async (req, res) => {
    res.send(`Lutfen ID giriniz`).status(400)
}
const createCategoryFail = async (req, res) => {
    res.send(`Hatali istek`).status(400)
}
const updateCategoryFail = async (req, res) => {
    res.send(`Hatali istek, lutfen id giriniz`).status(400)
}

module.exports = {
    findAll,
    findById,
    createCategory,
    createCategoryFail,
    deleteCategory,
    deleteCategoryFail,
    updateCategory,
    updateCategoryFail,
}