const { heroesCollaboratorsGetDb, heroesCharactersGetDb } = require('../db/hero')

const getHeroCollaboratorsService = async (name) => {
  try {
    const heroQuery = await heroesCollaboratorsGetDb(name)
    return heroQuery
  } catch (e) {
    throw new Error(e.message)
  }
}
const getHeroCharactersService = async (name) => {
  try {
    const heroQuery = await heroesCharactersGetDb(name)
    return heroQuery
  } catch (e) {
    throw new Error(e.message)
  }
}

module.exports = {
  getHeroCharactersService,
  getHeroCollaboratorsService
}