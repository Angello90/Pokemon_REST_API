const { getById, getByName } = require('../services/pokemon.services');

module.exports = {
    get_id : async(req, res, next) =>{
        if(req.params.uid >= 1 && req.params.uid <= 898)
        {
            return res.status(200).json(getById(req.params.uid));
        }
        else{
            return res.status(404).json({
                status : 404,
                message : "Error : out of range"
            })
        }
        next();
    },
    get_by_name : async(req, res, next) =>{
        if(req != null || req != "")
        {
            return res.status(200).json(getByName(req.params.name));
        }
        else{
            return res.status(404).json({
                status : 404,
                message : "Error : out of range"
            })
        }
        next();
    }
}