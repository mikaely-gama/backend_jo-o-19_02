const express = require("express")
const userController = require ("./controllers/userController")

const app = express()

app.get("/", (request, response) => {
    response.send("VOU TRANCAR O CURSO!!!!")
})

 app.use(express.json())

app.post("/users", userController.createUser)
app.get("/users", userController.getAllUsers)

module.exports = app