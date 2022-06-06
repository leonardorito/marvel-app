const Hero = require("../models/hero")

const heroesGetDb = async () => {
  const heroes = await Hero.find({})
  return heroes
}

const heroesCollaboratorsGetDb = async () => {
  const heroes = await Hero.find({}).select({
    editors: 1,
    writers: 1,
    colorists: 1,
  })
  return heroes
}

const heroesCharactersGetDb = async () => {
  const heroes = await Hero.find({}).select({
    characters: 1
  })
  return heroes
}

module.exports = {
  heroesGetDb,
  heroesCollaboratorsGetDb,
  heroesCharactersGetDb
}