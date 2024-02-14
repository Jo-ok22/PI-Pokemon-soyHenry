const axios = require('axios');

const getPokemon = async (req, res) => {
    try {
        const { data } = await axios('https://pokeapi.co/api/v2/pokemon/')
        res.status(200).json(data.results)
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send(error.message)
    }
}

module.exports=getPokemon