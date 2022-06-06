const { getHeroCollaborators, getHeroesFromMarvel, getHeroCharacters } = require('../controllers/hero')

const express = require("express");

const router = express.Router();

router
    .route("/collaborators/:name")
    .get((req, res) => getHeroCollaborators(req, res))

router
    .route("/characters/:name")
    .get((req, res) => getHeroCharacters(req, res))

router
    .route('/heroes-from-api')
    .get((req, res) => getHeroesFromMarvel(req, res))

module.exports = router;