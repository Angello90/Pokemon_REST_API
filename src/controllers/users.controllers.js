const { add_user, Get_Hash_Password, get_token } = require("../db.config");

module.exports = {
    post : async(req, res, next) =>{
        try{
            const data_user =
            {
                pseudo : req.body.pseudo,
                password : await Get_Hash_Password(req.body.pseudo)
            } 
            console.log(data_user);
            await add_user(data_user);
            const token_user = await get_token({
                pseudo : req.body.pseudo,
                password : req.body.password
            });
            return res.status(200).json({
                token : token_user
            });
        }
        catch(e){
            return res.status(401).json({
                status : 401,
                message : `Error : ${e.message}`
            })
        }
       
    },

    get_Admin_Kick : async(req, res, next) =>{
        const uid = req.params.uid;
        console.log(uid);
    }
}