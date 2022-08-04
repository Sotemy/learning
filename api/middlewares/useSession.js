const session = require('express-session')
const RedisStore = require("connect-redis")(session)

const { createClient } = require("redis")
const redisClient = createClient({ legacyMode: true })
redisClient.connect().catch(console.error)

const useSession = () => {
    session({
        // store: new RedisStore({ client: redisClient }),
        secret: process.env.SESSION_SECRET,
        saveUninitialized: true,
        resave: false,
        cookie: { secure: true, maxAge: 30000 }
      })
}

const errorSession = (req, res, next) => {
  if (!req.session) {
    return next(new Error("session error")) // handle error
  }
  next()
}

module.exports = errorSession