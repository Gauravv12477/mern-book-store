const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/signup').post(registerUser);
router.route('/login').post(loginUser);


module.exports = router;
