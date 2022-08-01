const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs")

const User = require("../database/schemas/users.schema")

const loginController = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email })

    if (user) {

        if (bcrypt.compare(password, user.password)) {

            return res.json({ email: user.email, password: user.password })

        }

        throw new Error('wrong pass')
    }

    throw new Error('wrong username')
})

const registerController = asyncHandler(async(req, res) => {
    const { email, password, username, password2 } = req.body;
    const user = await User.findOne({ email })

    if (user) {

        if (username === user.username) {

            const hash = await bcrypt.hash(password, 10)
            const new_user = new User({username: username, password: hash, email: email})
            new_user.save()

            return res.json({ email: email, password: password, username: username, password2: password2 })

        }

        throw new Error('wrong username')
    }

    throw new Error('wrong email')
})

const resetController = (req, res) => {
    const { email } = req.body;
    return res.json({ email: email })
}

module.exports = { resetController, loginController, registerController }