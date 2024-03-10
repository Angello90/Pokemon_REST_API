const express = require("express");
const router = express.Router();
const checkRegistrMiddleware = require("../middlewares/checkRegistr.middleware")
const adminAuthMiddleware = require("../middlewares/adminAuth.middleware");
const { post , get_Admin_Kick, get} = require("../controllers/users.controllers");

router.post('/registr', checkRegistrMiddleware, post);
router.get('/registr', get);
router.get('/kick/:uid', adminAuthMiddleware, get_Admin_Kick);

module.exports = router;