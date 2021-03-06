const { getHeroCollaborators, getHeroCharacters } = require('../controllers/hero')

const express = require("express");

const router = express.Router();

router
    .route("/collaborators/:name")
    .get((req, res) => getHeroCollaborators(req, res))

router
    .route("/characters/:name")
    .get((req, res) => getHeroCharacters(req, res))

module.exports = router;