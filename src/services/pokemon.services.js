const jsonFile = require('../assets/pokemon.json');


const getById = (id) =>{
    return jsonFile[id - 1];
}
const getByName = (name) =>{
    for(let i = 0; i<jsonFile.length; i++)
    {
        if(jsonFile[i].name.french === name) return jsonFile[i];
    }
}

module.exports = {
    getById,
    getByName
}