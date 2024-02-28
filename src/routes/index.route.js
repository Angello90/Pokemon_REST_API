const { Router } = require("express");
const router = Router();

const { get } = require("../controllers/index.controllers");

router.get('/', get);


module.exports = router;