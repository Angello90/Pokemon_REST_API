const jsonFile = require('../assets/pokemon.json');


const getById = (id) =>{
    return jsonFile[id - 1];
}

module.exports = {
    getById
}