const { getById } = require("../services/pokemon.services")

module.exports = {
    get : async(req, res, next) =>{
        const date = new Date();
        const pokemonOfTheDay = getById(date.getDate());
        res.render('index', {
            urlImage    : pokemonOfTheDay.image.hires,
            name        : pokemonOfTheDay.name.french,
            description : pokemonOfTheDay.description,
            Jname       : pokemonOfTheDay.name.japanese
        });
    },
    post : async(req, res, next) =>{
        console.log("POST");
    }
}