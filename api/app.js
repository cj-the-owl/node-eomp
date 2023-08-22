require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT || 5000
const cors = require("cors")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const { errorHandling } = require("./middleware/errorHandling")
const route = require("./controller")

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*",)
    res.header("Access-Control-Allow-Credentials", "true",)
    res.header("Access-Control-Allow-Methods", "*",)
    res.header("Access-Control-Allow-Headers", "*",)
    next()
})

app.use(
    cors(),
    cookieParser(),
    express.json(),
    express.urlencoded({ extended: false})
)

app.use(route)
app.use(errorHandling)

app.listen(port, () => {
    console.log(`Server is running on PORT: ${port}`)
})