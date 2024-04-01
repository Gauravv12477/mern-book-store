const mongoose = require('mongoose');
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
        required: true,
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