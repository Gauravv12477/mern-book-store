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

module.exports = {
    signupBody,
    signinBody
}