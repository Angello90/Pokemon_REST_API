const express = require("express");
const router = express.Router();
const checkRegistrMiddleware = require("../middlewares/checkRegistr.middleware")
const { post } = require("../controllers/users.controllers");

router.post('/', checkRegistrMiddleware, post);

module.exports = router;