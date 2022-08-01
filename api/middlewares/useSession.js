const session = require('express-session')

const useSession = () => {
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true }
      })
}

module.exports = useSession