const express = require('express');
const router = express.Router();
const userRouter = require('./userRoutes');
const connectDB = require('../db');

router.use('/user', userRouter);
connectDB();

module.exports = router;