const asyncHandler = require('express-async-handler');
const { User } = require('../models/userModel');
const { signupBody, signinBody,uploadBookBody } = require('../zodSchema/user');
const { JWT_SECRET } = require('../config')
const {z} = require('zod');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const { booksData } = require('../models/BookModel');
 
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


//@desc upload a book
//@route POST /api/v1/book/upload-book

// Example usage of the uploadBookBody schema in a controller function
const uploadBook = asyncHandler(async (req, res) => {
    try {
        // Validate request body against the uploadBookBody schema
        const { success, data } = uploadBookBody.safeParse(req.body);

        if (!success) {
            return res.status(400).json({ error: 'Invalid book data', details: data });
        }

        // Handle valid book data (data object contains validated properties)
        console.log('Valid book data:', data);

        // Example: Create a new book entry using validated data
        const newBook = await booksData.create(data);

        res.status(201).json({
            message: 'New book has been created successfully',
            data: newBook,
        });
    } catch (error) {
        console.error('Error uploading book:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = uploadBook;

//@desc Get a single Book 
//@route GET /api/v1/book/:id
//@access Public


const getSingleBook = asyncHandler(async (req, res) => {
    try{
        const params = req.params.id;
        const singleBook = await booksData.findById(params);

        if(!singleBook) {
            res.status(400).json({
                message: "Book not found!!"
            })
        }

        return res.status(200).json({
            book: singleBook
        })

    } catch(err) {
        return res.status(500).json({
            message: "something went wrong !!"
        }) 
    }
})



//@desc update a book 
//@route PATCH /api/v1/book/:id 
//@access Admin, Seller

const updateBook = asyncHandler(async (req, res) => {
    try {
        const bookId = req.params.id;
        const updateFields = req.body;

        //if you are not seller or admin u cant update book
        if(req.user.userRole === 'user') {
            return res.status(404).json({
                message: "use are not Authorized!!"
            })
        }


        // Exclude the _id field from the update object
        delete updateFields._id;

        // Find the book by ID and update the specified fields
        const updatedBook = await booksData.findByIdAndUpdate(
            bookId,
            { $set: updateFields },
            { new: true }
        );

        if (!updatedBook) {
            return res.status(404).json({
                message: "Book not found"
            });
        }

        res.json({
            message: "Successfully updated a book",
            updatedBook: updatedBook,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
});

//@desc get by category
//route GET api/v1/book/:category
//acess Public

const findByCategory = asyncHandler(async (req, res) => {
    const category = req.params.category;
    const query = category ? { category: category }: {};

    const result = await booksData.find(query);
    res.status(200).json({
        result: result,
    })
})

//@desc  

module.exports = {
    getAllBooks,
    uploadBook,
    updateBook,
    findByCategory,
    getSingleBook
}
