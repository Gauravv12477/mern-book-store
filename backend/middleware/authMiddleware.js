const jwt = require('jsonwebtoken');
const {User} = require('../models/userModel')
const asyncHandler = require('express-async-handler');
const { JWT_SECRET } = require('../config');

const authMiddleware = asyncHandler(async (req, res, next) => {
    const authHeader = req.headers.authorization;
    let token;

    if(authHeader && authHeader.startsWith('Bearer ')){
        try {
            token = authHeader.split(' ')[1];
            const decoded = jwt.verify(token, JWT_SECRET);
            if (!decoded) {
                throw new Error('Invalid token');
            }
            req.user = await User.findById(decoded.id).select('-password');
        } catch (error) {
            res.status(401);
            throw new Error('Not authorized, token failed');
        }
    } else {
        res.status(401);
        throw new Error('Not authorized, no token provided');
    }

    next();  
})


const isAdmin = (req, res, next) => {
    if(req.user && req.user.userRole === 'admin') {
        
        next();
    } else {
        res.status(401)
        throw new Error("Not authrized as an Admin");
    }
}

module.exports = {
    isAdmin,
    authMiddleware
}