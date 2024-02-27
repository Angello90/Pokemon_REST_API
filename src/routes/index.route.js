const { Router } = require("express");
const router = Router();

const { get } = require("../controllers/index.controllers");

const authMiddleware = require("../middlewares/auth.middleware");

router.get('/', authMiddleware, get);


module.exports = router;