

module.exports = {
    get : async(req, res, next) =>{
        res.send("Index page");
    },
    post : async(req, res, next) =>{
        console.log("POST");
    }
}