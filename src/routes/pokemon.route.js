const express = require("express");

const router = express.Router();

const authMiddleware = require("../middlewares/auth.middleware");
const { get } = require("../controllers/pokemon.controllers")

router.get('/:uid',authMiddleware ,get);

module.exports = router;