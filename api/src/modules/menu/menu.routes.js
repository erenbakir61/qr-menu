const express = require('express');
const router = express.Router();

const menuController = require('./menu.controller')


// Get methods
router.get('/', menuController.findAll);
router.get('/:prodId', menuController.findById);
router.get('/product/:ctgId', menuController.findCtg)

// Create methods
router.post('/', menuController.createProduct)
// router.post('/*', menuController.createProductFail)

// Delete methods
router.delete('/:prodId', menuController.deleteProduct)
// router.delete('/*', menuController.deleteProductFail)

// Update methods
router.patch('/:prodId', menuController.updateProduct)
// router.patch('/*', menuController.updateProductFail)

module.exports = router;