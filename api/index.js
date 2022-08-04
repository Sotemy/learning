const express = require("express");
const cors = require("cors");
require('dotenv').config();

const connectDB = require("./database/init");

const authRouter = require("./routes/auth.routes");
const postsRouter = require("./routes/app.routes");

const useError = require("./middlewares/useError");
const errorSession = require("./middlewares/useSession");



const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

connectDB()

app.use('/auth', authRouter)
app.use('/', postsRouter)

// app.use(errorSession)
app.use(useError)

app.listen(4000, () => {
    console.log(`Example app listening  http://localhost:4000`)
  })