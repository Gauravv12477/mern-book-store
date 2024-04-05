const  mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userRoles = ['admin', 'user', 'seller'];

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        minLength: 3,
        maxLength: 50,

    },
    firstName: {
        type: String,
        required: true,
        maxLength: 20,
        trime: true,    
    },
    lastName: {
        type: String,
        trim: true,
        maxLength: 20

    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    userRole: {
        type: String,
        enum: userRoles,
        default: 'user'
    }
}, {
    timestamps: true
})

UserSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})
const User = mongoose.model('User', UserSchema)


module.exports = {
    User,
}