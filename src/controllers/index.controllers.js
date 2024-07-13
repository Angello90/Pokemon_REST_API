const { getById } = require("../services/pokemon.services")
const allPokemon = require("../assets/pokemon.json");

module.exports = {
    get : async(req, res, next) =>{
        const date = new Date();
        const pokemonOfTheDay = getById(date.getDate());
        await res.render('index', {
            urlImage    : pokemonOfTheDay.image.hires,
            name        : pokemonOfTheDay.name.french,
            description : pokemonOfTheDay.description,
            Jname       : pokemonOfTheDay.name.japanese,
            Id          : pokemonOfTheDay.id,
            all         : allPokemon
        });
    },
    post : async(req, res, next) =>{
        console.log("POST");
    }
}