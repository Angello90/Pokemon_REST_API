const { getById } = require('../services/pokemon.services');

module.exports = {
    get : async(req, res, next) =>{
        return res.status(200).json(getById(req.params.uid));
        next();
    }
}