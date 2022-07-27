import bcrypt from 'bcryptjs'

export const loginController = (async (req, res) => {

    const {email, password} = req.body;

    return res.json({email:email, password:password})


})

export const regController = (async (req, res) => {

    const {email, password, password2} = req.body;
    const hash = bcrypt.hashSync(password2, bcrypt.genSaltSync(1))

    if (bcrypt.compare(password, hash)) {
        return res.json({email:email, password:password})
    }

    return res.json({email:'error'})


})

