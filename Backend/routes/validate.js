const express = require('express');
const router = express.Router();
const validateController = require('../controllers/validateController');

// TODO: Implement validation route
router.post('/validate', validateController.validate);

module.exports = router; 