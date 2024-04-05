const express = require('express');
const { authMiddleware, isAdmin } = require('../middleware/authMiddleware');
const { addOrderItem, getAllOrders, getuserOrders } = require('../controllers/orderController');
const router = express.Router();


router.route('/').post(authMiddleware, addOrderItem).get(authMiddleware, isAdmin, getAllOrders)
router.route('/myorders').get(authMiddleware, getuserOrders);

module.exports = router;