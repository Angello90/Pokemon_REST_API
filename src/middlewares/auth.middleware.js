const jwt = require("jsonwebtoken");

const { user_exist }  = require('../db.config');


module.exports = async(req, res, next) =>{
    const token = req.headers['token']
    if(token)
    {
        await jwt.verify(token, process.env.KEY_TOKEN, (err, decode) =>{
            if(err){
                return res.status(404).json({
                    status : 404,
                    message : `Error : ${err.message}`
                })
            }
            else
            {
                console.log(decode)
                return next();
            }
        })
        return next();
    }else{
        res.status(400).json({
            status : 400,
            message : "Error : token not specified"
        })
    }
}