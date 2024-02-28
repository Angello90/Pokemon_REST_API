const express = require("express");

const router = express.Router();

const authMiddleware = require("../middlewares/auth.middleware");
const { get_id, get_by_name } = require("../controllers/pokemon.controllers")

router.get('/id/:uid/:choice?',authMiddleware ,get_id);
router.get('/name/:name',authMiddleware ,get_by_name);

module.exports = router;