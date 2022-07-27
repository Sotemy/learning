import express from "express"
import { route } from "./routes/auth_routes"

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
  res.send("Hello Babel")
})

app.use('/auth', route)


app.listen(4000, () => {
  console.log(`app is listening to port 4000`)
})