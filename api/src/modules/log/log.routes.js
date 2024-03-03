const express = require('express');
const router = express.Router();

const logController = require('./log.controller')


// Get methods
router.get('/', logController.findAll);
router.get('/:prodId', logController.findById);

// Create methods
router.post('/', logController.createLog)

// Delete methods
router.delete('/:prodId', logController.deleteLog)

// Update methods
router.patch('/:prodId', logController.updateLog)

module.exports = router;