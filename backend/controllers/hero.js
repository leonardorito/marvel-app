const axios = require("axios");
const { heroesId } = require("../constants/heroesId");
const Hero = require("../models/hero");
const { getHeroCharactersService, getHeroCollaboratorsService } = require('../services/heroService');
const { getCreatorsByType } = require("../utils/creators");

const getHeroCollaborators = async (req, res, next) => {
    try {
        const heroes = await getHeroCollaboratorsService()
        res.json(heroes);
    } catch (e) {
        console.log(e.message)
        // res.sendStatus(500) && next(error)
    }
}

const getHeroCharacters = async (req, res, next) => {
    try {
        const heroes = await getHeroCharactersService()
        res.json(heroes);
    } catch (e) {
        console.log(e.message)
        // res.sendStatus(500) && next(error)
    }
}

const getHeroesFromMarvel = async (req, res, next) => {
    try {
        const heroes = await axios({
            url: `http://gateway.marvel.com/v1/public/characters/1009220/comics?apikey=7cc2e763871b6a9edd08506bd7f984ad&ts=1&hash=64d97ec41bcd3b583f4a3c5785847cf4`,
            method: "get",
        })
        const data = heroes.data.data.results;
        const editors = getCreatorsByType("editor", data);
        const writers = getCreatorsByType("writer", data);
        const colorists = getCreatorsByType("colorist", data);
        const heroComicMap = [];
        data.forEach(hero => {
            hero.characters.items.forEach(ch => {
                const heroIndex = heroComicMap.findIndex(el => el.character === ch.name)
                if (heroIndex >= 0) {
                    heroComicMap[heroIndex].comics.push(hero.title)
                    return
                }
                heroComicMap.push({
                    character: ch.name,
                    comics: [hero.title]
                })
            })
        })
        await Hero.findOneAndUpdate({heroId: '1009220'}, {
            heroId: '1009220',
            lastSync: new Date(),
            editors,
            writers,
            colorists,
            characters: heroComicMap
        }, {upsert: true});
        res.json({
            success: true
        });
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    getHeroCollaborators,
    getHeroesFromMarvel,
    getHeroCharacters
}