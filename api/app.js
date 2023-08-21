require("dotenv").config()
const express = require("express")
const app = express()
const port = process.env.PORT || 5000
const cors = require("cors")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const { errorHandling } = require("./middleware/errorHandling")
const route = require("./controllers")

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