const express = require('express')
const app = express()
const port = 3001
const mongoose = require('mongoose')
const { heroesId } = require('./constants/heroesId')
const cors = require('cors')
const { heroesJob } = require('./jobs/heroJob')

app.use(cors())

require('dotenv').config()

require("./routes")(app)

mongoose.connect('mongodb+srv://ironman:loveu3000@marvel-heroes.6sy962d.mongodb.net/?retryWrites=true&w=majority')

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error: "))
db.once("open", function () {
  console.log("Connected successfully")
})

heroesJob(heroesId.capamerica, "Captain America");
heroesJob(heroesId.ironman, "Iron Man");

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}!`)}
)

module.exports = {
    app
}