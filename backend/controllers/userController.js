
const asyncHandler = require('express-async-handler');
const { User } = require('../models/userModel');
const { signupBody, signinBody } = require('../zodSchema/user');
const { JWT_SECRET } = require('../config')
const z = require('zod');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

// @desc Register new User
// @route POST /api/v1/users
//@access Public


const registerUser = asyncHandler(async (req, res) => {
    const { success } = signupBody.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            message: "Incorrect Inputs !!"
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username
    })

    if (existingUser) {
        return res.status(411).json({
            message: "User has been already registered!!"
        })
    }

    const user = await User.create({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
    })
    const userId = user._id;

    if (user) {
        res.status(201)
        res.json({
            userId: user._id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            token: jwt.sign(userId, JWT_SECRET, {
                expiresIn: '10d'
            })

        })
    } else {
        res.status(400)
        throw new Error('Invalid User Data')
    }
})

//@desc login a Existing user
// route POST /api/user/login
//@acces public

const loginUser = asyncHandler(async (req, res) => {
    try {
        const { success, data } = signinBody.safeParse(req.body);
        if (!success) {
            return res.status(411).json({
                message: "Incorrect inputs !!"
            });
        }

        const user = await User.findOne({
            username: data.username,
        });

        if (!user) {
            return res.status(401).json({
                message: "Invalid email or Password"
            });
        }

        const passwordCorrect = await bcrypt.compare(data.password, user.password);
        if (!passwordCorrect) {
            return res.status(401).json({
                message: "Invalid email or Password"
            });
        }

        res.json({
            userId: user._id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            userRole: user.userRole,
            token: jwt.sign({ userId: user._id }, JWT_SECRET),
        });
    } catch (err) {
        console.error("Error in loginUser:", err);
        return res.status(500).json({
            message: "An error occurred while processing the request"
        });
    }
});


//@desc Get user profile
//@route GET /api/v1/user/profile
//@access Private

const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if(user){
        res.json({
            userId: user._id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            userRole: user.userRole
        })
    }
})

module.exports = {
    registerUser,
    loginUser
}