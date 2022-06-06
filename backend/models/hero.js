const mongoose = require("mongoose")

const CharacterSchema = new mongoose.Schema({
    character: {
        type: String
    },
    comics: [String],
})

const HeroSchema = new mongoose.Schema({
  lastSync: Date,
  heroId: {
    type: String,
  },
  editors: [String],
  writers: [String],
  colorists: [String],
  characters: [CharacterSchema],
})

const Hero = mongoose.model("Hero", HeroSchema)

module.exports = Hero