const express = require("express")
const connectDB = require("./database/init")
const authRouter = require("./routes/auth.routes")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

connectDB()

app.use('/api/auth', authRouter)

app.listen(4000, () => {
    console.log(`Example app listening  http://localhost:4000/api`)
  })