const express = require('express');
const router = express.Router();

router.post('/upload-book', async (req, res) => {
    try {
        const data = req.body;

        // Creating a new book using the BookSchema
        const newBook = await booksData.create({
            authorName: data.authorName,
            imageURL: data.imageURL,
            category: data.category,
            bookDescription: data.bookDescription,
            bookTitle: data.bookTitle,
            bookPDFURL: data.bookPDFURL,
        });

        res.json({
            message: "Book created successfully",
            book: newBook // Sending the created book data back in the response
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
});


// router.get('/all-books', async (req, res) => {
//     try {
//         const allBooks = await  booksData.find({});

//         res.json({
//             message: "All books are the successfully !!",
//             allBooks: allBooks,
//         })
//     } catch (err) {
//         console.error(err);
//         return res.status(500).json({
//             message: "Something went wrong"
//         });
//     }
// });

// update a book

router.patch('/books/:id', async (req, res) => {
    try {
        const bookId = req.params.id;
        const updateFields = req.body;

        //find the book by ID and update the new fields.

        const updatedBook = await booksData.findByIdAndUpdate(bookId, updateFields, {new : true}) 
        
        if (!updateFields || Object.keys(updateFields).length === 0) {
            return res.status(400).json({
                message: "Request body is empty or missing!"
            });
        }

        res.json({
            message: "successfully updated a book!!",
            updatedBook: updatedBook,
        }) 

    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Something went wrong"
        });
    }
})

//<---find by category--->
//  and all the book will also get

router.get('/all-books/', async (req, res) => {
    const category = req.query.category;
    // If category is provided, filter books by category
    const query = category ? { category: category } : {};

    const result = await booksData.find(query);

    res.status(200).json({
        result: result
    })
})

//Delete a book from database

router.delete('/books/:id', async (req, res) => {
    try {
        const bookId = req.params.id;

        // Find the book by ID and delete it
        const deletedBook = await booksData.findByIdAndDelete(bookId);

        if (!deletedBook) {
            return res.status(404).json({ message: 'Book not found!' });
        }

        res.json({
            message: 'Book deleted successfully!',
            deletedBook: deletedBook,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Something went wrong' });
    }
});

module.exports = router;