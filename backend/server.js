const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const { heroesId } = require('./constants/heroesId')
const { heroesJob } = require('./jobs/heroJob')

require('dotenv').config()

require("./routes")(app)

mongoose.connect('mongodb+srv://ironman:loveu3000@marvel-heroes.6sy962d.mongodb.net/?retryWrites=true&w=majority')

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error: "))
db.once("open", function () {
  console.log("Connected successfully")
})

heroesJob(heroesId.capamerica);
heroesJob(heroesId.ironman);

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}!`)}
)

module.exports = {
    app
}