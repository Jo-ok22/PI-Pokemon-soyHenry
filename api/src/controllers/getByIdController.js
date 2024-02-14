const axios = require('axios');

const getPokemonById = async (req, res) => {
    try {
        const { id } = req.params
        const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${id}/`)//`https://pokeapi.co/api/v2/pokemon/${idPokemon}
        console.log(data);
        res.status(200).json(data)
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send(error.message)
    }
}

module.exports = getPokemonById