const axios = require('axios');

const getPokemons = async (req, res) => {
    try {
        const { data } = await axios('https://pokeapi.co/api/v2/pokemon/?limit=40') // https://pokeapi.co/api/v2/pokemon/?limit=40
        res.status(200).json(data.results)
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send(error.message)
    }
}

module.exports = getPokemons

// listo



//https://pokeapi.co/api/v2/    este me trae un {} con info y a la par nomas una url para acceder a mas info 
//https://pokeapi.co/api/v2/pokemon/?limit=40   este me trae un [] de {} donde aparece el nombre de cada 
//pokemon  y una url abajo para acceder a mas info 
