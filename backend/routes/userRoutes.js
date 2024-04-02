const express = require('express');
const { registerUser, loginUser, getUserProfile, updateUserProfile, deleteUser } = require('../controllers/userController');
const { authMiddleware, isAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/signup').post(registerUser);
router.route('/login').post(loginUser);
router.route('/profile').get(authMiddleware, getUserProfile).patch(authMiddleware, updateUserProfile);
router.route('/:id').delete(authMiddleware, isAdmin, deleteUser)


module.exports = router;
