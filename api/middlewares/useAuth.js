const User = require("../database/schemas/users.schema")

const useAuth = (err, req, res, next) => {
    const {id} = req.body;

    if (id) {
    }
    return res.json("data")
}