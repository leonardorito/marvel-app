const { heroesId } = require("../constants/heroesId");
const { getHeroCharactersService, getHeroCollaboratorsService } = require('../services/heroService');

const getHeroCollaborators = async (req, res, next) => {
    try {
        const heroes = await getHeroCollaboratorsService(heroesId[req.params.name])
        res.json(heroes);
    } catch (e) {
        console.log(e.message)
        // res.sendStatus(500) && next(error)
    }
}

const getHeroCharacters = async (req, res, next) => {
    try {
        const heroes = await getHeroCharactersService(heroesId[req.params.name])
        res.json(heroes);
    } catch (e) {
        console.log(e.message)
        // res.sendStatus(500) && next(error)
    }
}

module.exports = {
    getHeroCollaborators,
    getHeroCharacters
}