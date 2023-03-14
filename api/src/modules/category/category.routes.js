const express = require('express');
const router = express.Router();

const categoryController = require('./category.controller')


// Get methods
router.get('/', categoryController.findAll);
router.get('/:prodId', categoryController.findById);

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