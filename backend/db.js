const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const connection = await mongoose.connect("mongodb+srv://mern-book-store:Gaurav12345@cluster0.vcke2cd.mongodb.net/book-store");

        console.log(`MongoDB Connected: ${connection.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error}`);
        process.exit(1);
    }
};

module.exports = connectDB;
