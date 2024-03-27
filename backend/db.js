const mongoose = require('mongoose');

const uri = mongoose.connect("mongodb+srv://mern-book-store:Gaurav12345@cluster0.vcke2cd.mongodb.net/book-store")

const BookSchema = new mongoose.Schema({
    authorName: {
        type: String,
        required: true,
        maxLength: 100,
    }, 
    imageURL: {
        type: String,
    }, 
    category: {
        type: String,

    }, 
    bookDescription: String,
    bookTitle: {
        type: String,
        required: true,
        maxLength: 200
    }, 
    bookPDFURL: String, 
})

const booksData = mongoose.model('booksData', BookSchema);

module.exports = {
    booksData
}