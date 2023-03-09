const express = require('express');
const router = express.Router();

const menuController = require('./category.controller')


// Get methods
router.get('/', menuController.findAll);
router.get('/:prodId', menuController.findById);

// Create methods
router.post('/', menuController.createProduct)
router.post('/*', menuController.createProductFail)

// Delete methods
router.delete('/:prodId', menuController.deleteProduct)
router.delete('/', menuController.deleteProductFail)

// Update methods
router.patch('/', menuController.updateProductFail)
router.patch('/:prodId', menuController.updateProduct)

module.exports = router;