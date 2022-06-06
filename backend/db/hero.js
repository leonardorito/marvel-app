const Hero = require("../models/hero")

const heroesGetDb = async () => {
  const heroes = await Hero.find({})
  return heroes
}

const heroesCollaboratorsGetDb = async (id) => {
  const heroes = await Hero.findOne({heroId: id}).select({
    editors: 1,
    writers: 1,
    colorists: 1,
    name: 1,
    lastSync: 1,
  })
  return heroes
}

const heroesCharactersGetDb = async (id) => {
  const heroes = await Hero.findOne({heroId: id}).select({
    characters: 1,
    name: 1,
    lastSync: 1,
  })
  return heroes
}

module.exports = {
  heroesGetDb,
  heroesCollaboratorsGetDb,
  heroesCharactersGetDb
}