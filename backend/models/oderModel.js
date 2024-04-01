const mongoose = requrie('mongoose');

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.objectId,
        ref: 'User',
        required,
    },
    orderItems: [
        {
            name: {
                type: String,
                required: true,
            },
            qty: {
                type: Number,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            product: {
                type: mongoose.Schema.Types.objectId,
                required: true,
                ref: 'booksData'
            }
        }
    ]
})

const order = mongoose.model('Order', orderSchema);