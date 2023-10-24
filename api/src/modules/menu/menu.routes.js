const express = require('express');
const router = express.Router();

const menuController = require('./menu.controller')


// Get methods
router.get('/', menuController.findAll);
router.get('/:prodId', menuController.findById);
router.get('/product/:prdName', menuController.findByName);
router.get('/category/:ctgName', menuController.findCtg)

// Create methods
router.post('/', menuController.createProduct)

// Delete methods
router.delete('/:prodId', menuController.deleteProduct)

// Update methods
router.patch('/:prodId', menuController.updateProduct)

module.exports = router;