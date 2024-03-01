const jwt = require('jsonwebtoken');
const { user_exist }  = require('../db.config');
const bcrypt = require("bcrypt");

module.exports = async(req, res, next) =>{
    const token = req.headers['token']
    if(token)
    {
        await jwt.verify(token, process.env.KEY_TOKEN, (err, decode) =>{
            if(err){
                return res.status(401).json({
                    status : 401,
                    message : `Error : invalid token`
                })
            }
            else
            {
                user_exist(decode.pseudo).then(d =>{
                    if(d != null)
                    {
                        bcrypt.compare(decode.password, d.password, (err, result) =>{
                            if(err)
                            {
                                return res.status(401).json({
                                    status : 401,
                                    message : `Error : invalid token`
                                })
                            }
                            else
                            {
                                if(d.role === 'Admin')
                                {
                                    return next();
                                }
                                else
                                {
                                    return res.status(401).json({
                                        status : 401,
                                        message : `Error : invalid token`
                                    })
                                }
                            }
                        })
                    }
                    else{
                        return res.status(401).json({
                            status : 401,
                            message : `Error : invalid token`
                        })
                    }
                    
                });
                
            }
        })
    }else{
        return res.status(401).json({
            status : 401,
            message : "Error : token not specified"
        })
    }
}