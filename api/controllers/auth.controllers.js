const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const User = require("../database/schemas/users.schema")

const loginController = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const full_fields = email && password

    if (full_fields) {
        
        const user = await User.findOne({ email })

        if (user) {

            if (await bcrypt.compare(password, user.password)) {

                return res.json({ email: user.email, username: user.username, token: generate_token(user._id) })

            }

            throw new Error('Wrong pass')
        }

        throw new Error('Wrong username')

    }
    throw new Error('Please fill all fields')

})

const registerController = asyncHandler(async(req, res) => {
    const { email, password, username, password2 } = req.body;

    const full_fields = email && password && username && password2
    if(full_fields) {
        if (password === password2) {
            const user = await User.findOne({ email })

            if (user) {
                throw new Error('Wrong email')
            }
            
            const hash = await bcrypt.hash(password, 10)
            const new_user = new User({username: username, password: hash, email: email})
            new_user.save()
        
            return res.json({ email: email, username: username, token: generate_token(new_user._id) })
        }
        throw new Error('Passwords are not same')
    }
    throw new Error('Please fill all fields')


})

const resetController = (req, res) => {
    const { email } = req.body;
    return res.json({ email: email })
}

const generate_token = ( id ) => {
    const token = jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "1d"})
    return token
}

const verify_token = (token) => {
    const res = jwt.verify(token, process.env.JWT_SECRET)
    return res
}

const check = (req, res) => {
    const token = req.headers.authorization.split(' ')[1]
    const response = verify_token(token)
    if (response){
        return res.json({message: true})
    }
    throw new Error(false)
}

module.exports = { resetController, loginController, registerController, generate_token, verify_token, check }