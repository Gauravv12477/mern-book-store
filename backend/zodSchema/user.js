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

const uploadBookBody = z.object({
    authorName: z.string(),
    image: z.string().optional(),
    category: z.string().max(15),
    bookTitle: z.string().max(20),
    bookPDFURL: z.string().optional,
    price: z.number(),
    rating: z.number(),   
})


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