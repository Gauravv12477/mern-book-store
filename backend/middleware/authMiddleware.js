const jwt = require('jsonwebtoken');
const {User} = require('../models/userModel')
const asyncHandler = require('express-async-handler');
const { JWT_SECRET } = require('../config');

const authMiddleware = asyncHandler(async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];
        try {
            const decoded = jwt.verify(token, JWT_SECRET);
            req.userId = decoded.userId; // Assuming the JWT payload contains the userId
            const user = await User.findById(decoded.userId).select('-password');
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            req.user = user;
            next();
        } catch (error) {
            console.error("Error in authMiddleware:", error);
            res.status(401).json({ message: 'Not authorized, token failed' });
        }
    } else {
        res.status(401).json({ message: 'Not authorized, no token provided' });
    }
});



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