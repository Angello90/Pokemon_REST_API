const express = require("express");

const router = express.Router();

const authMiddleware = require("../middlewares/auth.middleware");
const { get_id, get_by_name } = require("../controllers/pokemon.controllers")



/**
 * @swagger
 * tags:
 *   name: Pokemon_by_ID
 *   description: renvoie le pokemon selon l'ID
 */

/**
 * @swagger
 * /pokemon/id/:id:
 *   get:
 *     summary: renvoie le pokemon selon l'ID
 *     tags: [Pokemon_by_ID]
 *     requestBody:
 *       required: true
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         description: id du pokemon
 *          
 *     responses:
 *       200:
 *         description: renvoie le pokemon selon l'ID
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *        
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 */


router.get('/id/:uid/:choice?',authMiddleware ,get_id);
router.get('/name/:name',authMiddleware ,get_by_name);

module.exports = router;