const express = require('express');
const router = express.Router();
const userRouter = require('./userRoutes');
const bookRouter = require('./bookRoutes');
const orderRouter = require('./orderRoutes');
const connectDB = require('../db');

router.use('/user', userRouter);
router.use('/book', bookRouter);
router.use('/orders', orderRouter)

connectDB();

module.exports = router;