const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

// Route for registering a new user
router.post('/register', register);

// Route for logging in
router.post('/login', login);

module.exports = router;
