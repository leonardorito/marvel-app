const schedule = require('node-schedule');
const axios = require("axios");

const { heroMapping } = require('../utils/hero');
const Hero = require('../models/hero');
const { getHash } = require('../utils/md5-hash');

const date = new Date();

const heroesJob = async (id) => {
    schedule.scheduleJob('0 0 * * *', async () => {
        try {
            console.log('running cron')
            const heroes = await axios({
                url: `http://gateway.marvel.com/v1/public/characters/${id}/comics?apikey=${process.env.MARVEL_API_PUBLIC}&ts=${date}&hash=${getHash(date)}`,
                method: "get",
            })
            const heroesMapped = heroMapping(heroes.data.data.results, id)
            await Hero.findOneAndUpdate(
                { heroId: id },
                heroesMapped,
                { upsert: true }
            );
        } catch (e) {
            console.log(e)
        }
    })
};

module.exports = {
    heroesJob
}