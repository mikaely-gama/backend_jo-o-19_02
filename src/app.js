const express = require("express")

const app = express()

app.get("/", (request, response) => {
    response.send("VOU TRANCAR O CURSO!!!!")
})

app.get("/useras", (req, res) => {
    res.send([
        {
            "id"  : 1,
            "name" : "Mikaely",
            "idade" : 18
        },
        {
            "id" : 2,
            "name" : "Luiza",
            "idade" : 19
        }
    ])
})

module.exports = app