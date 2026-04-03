const express = require("express")
const app = express()

const userRoutes = require("./routes/userRoutes")

app.get("/", (request, response) => {
    response.send("VOU TRANCAR O CURSO!!!!")
})

 app.use(express.json())

 app.use("/", userRoutes)
 
module.exports = app