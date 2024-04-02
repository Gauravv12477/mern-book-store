const asyncHandler = require('express-async-handler');
const { User } = require('../models/userModel');
const { signupBody, signinBody } = require('../zodSchema/user');
const { JWT_SECRET } = require('../config')
const z = require('zod');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
 
//@desc Fetch all products
//@route GET /api/v1/all-books
//@acces Public

const getAllBooks = asyncHandler(async (req, res) => {
    const category = req.query.category;
    // If category is provided, filter books by category
    const query = category ? { category: category } : {};

    const result = await booksData.find(query);

    res.status(200).json({
        result: result
    })
})

module.exports = {
    getAllBooks,
}
