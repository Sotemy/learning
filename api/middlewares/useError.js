const useError = (err, req, res, next) => {
    res.status(400)
    res.json({ message: err.message, stack: err.stack })
}

module.exports = useError