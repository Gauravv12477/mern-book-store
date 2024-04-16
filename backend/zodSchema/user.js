const z = require('zod');

const signupBody = z.object({
    username: z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
    password: z.string().min(6)
})

const signinBody = z.object({
    username: z.string().email(),
    password: z.string().min(6)
})

// Define Zod schema for validating book upload data
const uploadBookBody = z.object({
    authorName: z.string(), // Required string
    imageURL: z.string().optional(), // Optional string (may be undefined or null)
    category: z.string().max(15), // Required string with max length of 15 characters
    bookTitle: z.string().max(50), // Required string with max length of 50 characters
    bookPDFURL: z.string().optional(), // Optional string (may be undefined or null)
    price: z.number().optional(), // Optional number (may be undefined or null)
    rating: z.number(), // Required number
});


const addOrderItemBody = z.object({
    orderItems: z.string(),
    shippingAddress: z.string(),
        
})

module.exports = {
    signupBody,
    signinBody,
    uploadBookBody,
    addOrderItemBody

}