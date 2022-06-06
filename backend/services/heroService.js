const { heroesCollaboratorsGetDb, heroesCharactersGetDb } = require('../db/hero')

const getHeroCollaboratorsService = async () => {
  try {
    const heroQuery = await heroesCollaboratorsGetDb()
    return heroQuery
  } catch (e) {
    throw new Error(e.message)
  }
}
const getHeroCharactersService = async () => {
  try {
    const heroQuery = await heroesCharactersGetDb()
    return heroQuery
  } catch (e) {
    throw new Error(e.message)
  }
}

module.exports = {
  getHeroCharactersService,
  getHeroCollaboratorsService
}