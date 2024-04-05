const express = require('express');
const { getAllBooks, uploadBook, updateBook, findByCategory } = require('../controllers/bookController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/all-books').get(getAllBooks);
router.route('/upload-book').post(authMiddleware,uploadBook);
router.route('/:id').patch(authMiddleware, updateBook);
router.route('/:category').get(findByCategory);

module.exports = router;