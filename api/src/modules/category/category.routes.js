const express = require('express');
const router = express.Router();

const categoryController = require('./category.controller')


// Get methods
router.get('/', categoryController.findAll);
router.get('/:prodId', categoryController.findById);
router.get('/image/deneme', function (req, res, next) {
    // const imgName = req.params.imgName;
    res.sendFile(`http://localhost:3000/public/images/categories/tea.jpg`)
});

// Create methods
router.post('/', categoryController.createProduct)
router.post('/*', categoryController.createProductFail)

// Delete methods
router.delete('/:prodId', categoryController.deleteProduct)
router.delete('/', categoryController.deleteProductFail)

// Update methods
router.patch('/', categoryController.updateProductFail)
router.patch('/:prodId', categoryController.updateProduct)

module.exports = router;