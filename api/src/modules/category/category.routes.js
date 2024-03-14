const express = require('express');
const router = express.Router();

const categoryController = require('./category.controller')


// Get methods
router.get('/', categoryController.findAll);
router.get('/:prodId', categoryController.findById);


// Create methods
router.post('/', categoryController.createCategory)
router.post('/*', categoryController.createCategoryFail)

// Delete methods
router.delete('/:prodId', categoryController.deleteCategory)
router.delete('/', categoryController.deleteCategoryFail)

// Update methods
router.patch('/', categoryController.updateCategoryFail)
router.patch('/:prodId', categoryController.updateCategory)

module.exports = router;