module.exports = async(req, res, next) =>{
    if(req.pseudo === null || req.password === null)
    {
        return res.status(401).json({
            message : "Error : format pas bon"
        });
    }
    else{
        console.log("Passage middleware check");
        next();
    }
}